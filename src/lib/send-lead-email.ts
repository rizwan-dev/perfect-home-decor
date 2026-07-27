import nodemailer from "nodemailer";
import { COMPANY, SITE_URL } from "@/lib/site";

export type LeadPayload = {
  name: string;
  phone: string;
  email?: string;
  area?: string;
  service?: string;
  message?: string;
  source?: string;
};

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Resolve credentials (support common alias names). */
export function getSmtpCredentials(): { user: string; pass: string } | null {
  const user =
    process.env.SMTP_USER?.trim() ||
    process.env.GMAIL_USER?.trim() ||
    process.env.EMAIL_USER?.trim();
  const rawPass =
    process.env.SMTP_PASS?.trim() ||
    process.env.GMAIL_APP_PASSWORD?.trim() ||
    process.env.SMTP_PASSWORD?.trim() ||
    process.env.EMAIL_PASSWORD?.trim();
  if (!user || !rawPass) return null;
  // Gmail app passwords are often pasted as "xxxx xxxx xxxx xxxx" — strip spaces.
  const pass = rawPass.replace(/\s/g, "");
  return { user, pass };
}

export function isSmtpConfigured(): boolean {
  return getSmtpCredentials() !== null;
}

/**
 * Dedicated credentials for customer-facing mail, sent as the real
 * `info@perfecthomedecor.in` Zoho mailbox rather than the Gmail account used
 * for owner notifications — a visitor should see the brand's own address, not
 * an internal relay account. Separate from `getSmtpCredentials()` on purpose:
 * the owner notification keeps working even before this is configured.
 */
export function getAckSmtpCredentials(): { user: string; pass: string } | null {
  const user = process.env.ZOHO_SMTP_USER?.trim();
  const rawPass = process.env.ZOHO_SMTP_PASS?.trim();
  if (!user || !rawPass) return null;
  return { user, pass: rawPass.replace(/\s/g, "") };
}

export function isAckSmtpConfigured(): boolean {
  return getAckSmtpCredentials() !== null;
}

function getZohoTransporter(creds: { user: string; pass: string }) {
  // Zoho's SMTP endpoint is region-specific (.com / .eu / .in) — override with
  // ZOHO_SMTP_HOST if the mailbox lives on a non-default data center.
  const host = process.env.ZOHO_SMTP_HOST?.trim() || "smtp.zoho.com";
  return nodemailer.createTransport({
    host,
    port: 465,
    secure: true,
    auth: creds,
  });
}

/** Shared transporter — both the owner notification and the visitor acknowledgement send through the same SMTP credentials. */
function getTransporter(creds: { user: string; pass: string }) {
  const { user, pass } = creds;
  const smtpHost = process.env.SMTP_HOST?.trim() || "smtp.gmail.com";
  const smtpPort = Number(process.env.SMTP_PORT || 587);
  const useGmailBuiltin =
    smtpHost.toLowerCase() === "smtp.gmail.com" && smtpPort === 587;

  return useGmailBuiltin
    ? nodemailer.createTransport({
        service: "gmail",
        auth: { user, pass },
      })
    : nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: { user, pass },
      });
}

export async function sendLeadEmail(payload: LeadPayload): Promise<void> {
  const creds = getSmtpCredentials();
  if (!creds) {
    throw new Error("SMTP credentials are not set");
  }
  const { user } = creds;

  const to = process.env.LEAD_EMAIL_TO?.trim() || COMPANY.email;
  const transporter = getTransporter(creds);

  const textLines = [
    `New enquiry — ${COMPANY.name} website`,
    "",
    `Name: ${payload.name}`,
    `Phone: ${payload.phone}`,
    `Email: ${payload.email || "—"}`,
    `Area in Pune: ${payload.area || "—"}`,
    `Service: ${payload.service || "—"}`,
    `What they need: ${payload.message || "—"}`,
    `Form source: ${payload.source || "website"}`,
    "",
    `Time (UTC): ${new Date().toISOString()}`,
    `Site: ${SITE_URL}`,
  ];

  const htmlRows = [
    ["Name", payload.name],
    ["Phone", payload.phone],
    ["Email", payload.email || "—"],
    ["Area", payload.area || "—"],
    ["Service", payload.service || "—"],
    ["Message", payload.message || "—"],
    ["Source", payload.source || "website"],
  ]
    .map(
      ([k, v]) =>
        `<tr><td style="padding:8px 12px;border:1px solid #e7e5e4;font-weight:600">${escapeHtml(k)}</td><td style="padding:8px 12px;border:1px solid #e7e5e4">${escapeHtml(v)}</td></tr>`,
    )
    .join("");

  await transporter.sendMail({
    from: `"${COMPANY.name} Website" <${user}>`,
    to,
    subject: `New enquiry: ${payload.name} — ${payload.area || "Pune"}`,
    text: textLines.join("\n"),
    html: `<p style="font-family:system-ui,sans-serif;font-size:15px;color:#1c1917">You have a new consultation request.</p>
<table style="border-collapse:collapse;font-family:system-ui,sans-serif;font-size:14px;margin-top:12px">${htmlRows}</table>
<p style="font-family:system-ui,sans-serif;font-size:12px;color:#78716c;margin-top:16px">${escapeHtml(new Date().toISOString())} · ${escapeHtml(SITE_URL)}</p>`,
  });
}

/**
 * Visitor-facing confirmation. Best-effort and separate from `sendLeadEmail`:
 * a visitor mistyping their email should never affect the owner notification
 * or the stored lead, so callers send this in its own try/catch.
 */
export async function sendAcknowledgementEmail(
  payload: LeadPayload,
): Promise<void> {
  if (!payload.email) return;

  // Prefer sending as the real info@ mailbox. Falls back to the Gmail relay
  // (matching sendLeadEmail) only until ZOHO_SMTP_USER/ZOHO_SMTP_PASS are set,
  // so the acknowledgement email keeps working in the meantime.
  const ackCreds = getAckSmtpCredentials();
  const fallbackCreds = ackCreds ? null : getSmtpCredentials();
  const creds = ackCreds || fallbackCreds;
  if (!creds) {
    throw new Error("SMTP credentials are not set");
  }
  const fromAddress = ackCreds ? ackCreds.user : creds.user;
  const transporter = ackCreds ? getZohoTransporter(ackCreds) : getTransporter(creds);

  const firstName = payload.name.trim().split(/\s+/)[0] || payload.name;
  // Call/WhatsApp enquiry hours are wider than the studio's walk-in hours
  // (`COMPANY.hours`), so this is its own line rather than reusing that value.
  const callHoursLine = "Every day, 10 AM – 10 PM";
  const detailRows = [
    ["Service", payload.service || "To be discussed"],
    ["Area", payload.area || "—"],
    ["Your message", payload.message || "—"],
  ].filter(([, v]) => v && v !== "—");

  const detailRowsHtml = detailRows
    .map(
      ([k, v]) =>
        `<tr><td style="padding:10px 16px;border-bottom:1px solid #e7e5e4;font-size:13px;color:#78716c;white-space:nowrap;vertical-align:top">${escapeHtml(k)}</td><td style="padding:10px 16px;border-bottom:1px solid #e7e5e4;font-size:14px;color:#1c1917">${escapeHtml(v)}</td></tr>`,
    )
    .join("");

  const textLines = [
    `Hi ${firstName},`,
    "",
    `Thank you for reaching out to ${COMPANY.name}. We've received your enquiry and a member of our team will call you on ${payload.phone} shortly.`,
    "",
    ...(detailRows.length
      ? ["What you shared with us:", ...detailRows.map(([k, v]) => `- ${k}: ${v}`), ""]
      : []),
    `Prefer to talk now? Call or WhatsApp us at ${COMPANY.phoneDisplay}.`,
    callHoursLine,
    "",
    `${COMPANY.name}`,
    `${COMPANY.address}`,
    SITE_URL,
  ];

  await transporter.sendMail({
    from: `"${COMPANY.name}" <${fromAddress}>`,
    to: payload.email,
    subject: `We've received your enquiry — ${COMPANY.name}`,
    text: textLines.join("\n"),
    html: `<!doctype html>
<html>
  <body style="margin:0;padding:0;background-color:#f7f4ef;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f7f4ef;padding:32px 16px">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;background-color:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e7e5e4">
            <tr>
              <td style="background-color:#4a3b32;padding:28px 32px">
                <p style="margin:0;font-size:20px;font-weight:600;color:#f7f4ef;letter-spacing:0.01em">${escapeHtml(COMPANY.name)}</p>
              </td>
            </tr>
            <tr>
              <td style="padding:32px 32px 8px">
                <p style="margin:0 0 16px;font-size:16px;line-height:1.6;color:#1c1917">Hi ${escapeHtml(firstName)},</p>
                <p style="margin:0 0 16px;font-size:15px;line-height:1.65;color:#44403c">Thank you for reaching out to <strong>${escapeHtml(COMPANY.name)}</strong>. We've received your enquiry, and a member of our team will call you on <strong>${escapeHtml(payload.phone)}</strong> shortly.</p>
              </td>
            </tr>
            ${
              detailRows.length
                ? `<tr>
              <td style="padding:8px 32px 24px">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e7e5e4;border-radius:10px;overflow:hidden">
                  ${detailRowsHtml}
                </table>
              </td>
            </tr>`
                : ""
            }
            <tr>
              <td style="padding:0 32px 28px">
                <p style="margin:0 0 4px;font-size:14px;line-height:1.6;color:#44403c">Prefer to talk now?</p>
                <p style="margin:0;font-size:15px;color:#1c1917"><strong>Call / WhatsApp:</strong> ${escapeHtml(COMPANY.phoneDisplay)}</p>
                <p style="margin:4px 0 0;font-size:13px;color:#78716c">${escapeHtml(callHoursLine)}</p>
              </td>
            </tr>
            <tr>
              <td style="padding:20px 32px;background-color:#f7f4ef;border-top:1px solid #e7e5e4">
                <p style="margin:0;font-size:13px;line-height:1.6;color:#78716c">${escapeHtml(COMPANY.name)}<br>${escapeHtml(COMPANY.address)}</p>
                <p style="margin:10px 0 0;font-size:13px"><a href="${SITE_URL}" style="color:#4a3b32;text-decoration:underline">${escapeHtml(SITE_URL.replace(/^https?:\/\//, ""))}</a></p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`,
  });
}
