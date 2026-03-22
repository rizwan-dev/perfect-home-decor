import nodemailer from "nodemailer";
import { COMPANY, SITE_URL } from "@/lib/site";

export type LeadPayload = {
  name: string;
  phone: string;
  area?: string;
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

export async function sendLeadEmail(payload: LeadPayload): Promise<void> {
  const creds = getSmtpCredentials();
  if (!creds) {
    throw new Error("SMTP credentials are not set");
  }
  const { user, pass } = creds;

  const to = process.env.LEAD_EMAIL_TO?.trim() || COMPANY.email;
  const smtpHost = process.env.SMTP_HOST?.trim() || "smtp.gmail.com";
  const smtpPort = Number(process.env.SMTP_PORT || 587);

  const useGmailBuiltin =
    smtpHost.toLowerCase() === "smtp.gmail.com" && smtpPort === 587;

  const transporter = useGmailBuiltin
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

  const textLines = [
    `New enquiry — ${COMPANY.name} website`,
    "",
    `Name: ${payload.name}`,
    `Phone: ${payload.phone}`,
    `Area in Pune: ${payload.area || "—"}`,
    `What they need: ${payload.message || "—"}`,
    `Form source: ${payload.source || "website"}`,
    "",
    `Time (UTC): ${new Date().toISOString()}`,
    `Site: ${SITE_URL}`,
  ];

  const htmlRows = [
    ["Name", payload.name],
    ["Phone", payload.phone],
    ["Area", payload.area || "—"],
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
