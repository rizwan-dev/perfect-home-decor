import { NextResponse } from "next/server";
import { COMPANY } from "@/lib/site";
import {
  isAckSmtpConfigured,
  isSmtpConfigured,
  sendAcknowledgementEmail,
  sendLeadEmail,
  type LeadPayload,
} from "@/lib/send-lead-email";
import {
  isLeadStoreConfigured,
  markLeadEmailed,
  saveLead,
} from "@/lib/leads-store";

export const runtime = "nodejs";

/**
 * Best-effort per-IP throttle. In-memory, so it resets on redeploy and is
 * per-serverless-instance — good enough to blunt casual form spam without
 * adding infrastructure.
 */
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW_MS;
  const recent = (hits.get(ip) ?? []).filter((t) => t > windowStart);
  if (recent.length >= RATE_LIMIT_MAX) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return false;
}

const MAX_LENGTHS = {
  name: 120,
  phone: 20,
  email: 200,
  area: 120,
  service: 60,
  message: 2000,
  source: 80,
} as const;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clip(value: string | undefined, max: number): string | undefined {
  const v = value?.trim();
  return v ? v.slice(0, max) : undefined;
}

/** Dev-only: open GET /api/lead in the browser to see if env vars load (no secrets). */
export async function GET() {
  if (process.env.NODE_ENV !== "development") {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  const smtp = isSmtpConfigured();
  const store = isLeadStoreConfigured();
  const ackSmtp = isAckSmtpConfigured();
  return NextResponse.json({
    smtpConfigured: smtp,
    leadStoreConfigured: store,
    leadInbox:
      process.env.LEAD_EMAIL_TO?.trim() || `${COMPANY.email} (default)`,
    ackSmtpConfigured: ackSmtp,
    ackEmailSendsAs: ackSmtp
      ? `${process.env.ZOHO_SMTP_USER?.trim()} (Zoho)`
      : smtp
        ? "Gmail relay account (set ZOHO_SMTP_USER + ZOHO_SMTP_PASS to send as info@ instead)"
        : "not configured",
    adminAuthConfigured: Boolean(process.env.ADMIN_PASSWORD?.trim()),
    hint:
      smtp && store
        ? "Both sinks live. POST a lead, then open /admin/leads."
        : !smtp && !store
          ? "Set SMTP_USER + SMTP_PASS and DATABASE_URL in .env.local, then restart npm run dev."
          : !store
            ? "Email works. Add DATABASE_URL to also store leads and enable /admin/leads."
            : "Storage works. Add SMTP_USER + SMTP_PASS to also get notified by email.",
  });
}

export async function POST(req: Request) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { ok: false, error: "Too many requests. Please call or WhatsApp us." },
        { status: 429 },
      );
    }

    const body = (await req.json()) as Partial<LeadPayload> & {
      website?: string;
    };

    // Honeypot filled → almost certainly a bot. Report success, send nothing.
    if (body?.website?.trim()) {
      return NextResponse.json({ ok: true, emailSent: true });
    }

    if (!body?.name?.trim() || !body?.phone?.trim()) {
      return NextResponse.json(
        { ok: false, error: "Name and phone are required" },
        { status: 400 },
      );
    }

    const phone = body.phone.trim();
    if (!/^[+]?[0-9\s\-()]{10,15}$/.test(phone)) {
      return NextResponse.json(
        { ok: false, error: "Please enter a valid phone number" },
        { status: 400 },
      );
    }

    // Optional — a visitor who skips it still gets the owner-notification path.
    const email = clip(body.email, MAX_LENGTHS.email);
    if (email && !EMAIL_PATTERN.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Please enter a valid email address" },
        { status: 400 },
      );
    }

    const payload: LeadPayload = {
      name: clip(body.name, MAX_LENGTHS.name)!,
      phone: phone.slice(0, MAX_LENGTHS.phone),
      email,
      area: clip(body.area, MAX_LENGTHS.area),
      service: clip(body.service, MAX_LENGTHS.service),
      message: clip(body.message, MAX_LENGTHS.message),
      source: clip(body.source, MAX_LENGTHS.source) || "website",
    };

    const isDev = process.env.NODE_ENV === "development";

    // Store first: the database is the durable record, the email is a
    // notification. Ordering it this way means an SMTP failure downgrades to
    // "we have the lead but didn't get pinged" instead of losing the enquiry.
    const leadId = await saveLead(payload, {
      ip,
      userAgent: req.headers.get("user-agent") ?? undefined,
    });
    const stored = leadId !== null;
    if (stored) console.info("[lead] stored as", leadId);

    if (!isSmtpConfigured()) {
      const detail = stored
        ? "Saved to the leads database; email is off."
        : "Not saved and not emailed.";
      console.error(`[lead] SMTP credentials missing — ${detail}`);
      // A stored lead is a received lead, so the customer sees success.
      if (stored) {
        return NextResponse.json({
          ok: true,
          emailSent: false,
          stored: true,
          ...(isDev && {
            info: "Saved to the database, but not emailed: add SMTP_USER and SMTP_PASS to .env.local and restart the dev server.",
          }),
        });
      }
      if (isDev) {
        console.warn("[lead] enquiry dropped:", payload);
        return NextResponse.json({
          ok: true,
          emailSent: false,
          stored: false,
          info: "Neither storage nor email is configured: set DATABASE_URL and SMTP_USER/SMTP_PASS in .env.local, then restart the dev server. Open GET /api/lead to verify.",
        });
      }
      return NextResponse.json(
        { ok: false, error: "Email is not configured on the server yet." },
        { status: 503 },
      );
    }

    const to = process.env.LEAD_EMAIL_TO?.trim() || COMPANY.email;
    try {
      await sendLeadEmail(payload);
      console.info("[lead] email dispatched to", to);
      if (stored) await markLeadEmailed(leadId);
      // Best-effort and separate from the owner notification above: a bad
      // visitor email or a transient failure here should not turn an
      // otherwise-successful enquiry into an error response.
      if (payload.email) {
        try {
          await sendAcknowledgementEmail(payload);
        } catch (ackErr) {
          console.error(
            "[lead] acknowledgement email failed:",
            ackErr instanceof Error ? ackErr.message : String(ackErr),
          );
        }
      }
      return NextResponse.json({ ok: true, emailSent: true, stored });
    } catch (mailErr) {
      const msg = mailErr instanceof Error ? mailErr.message : String(mailErr);
      // Rethrow only when nothing was persisted — otherwise the lead is safe
      // and the customer should not be told to try again.
      if (!stored) throw mailErr;
      console.error(
        `[lead] stored as ${leadId} but email failed — check /admin/leads:`,
        msg,
      );
      return NextResponse.json({
        ok: true,
        emailSent: false,
        stored: true,
        ...(isDev && { info: `Stored, but the email failed: ${msg}` }),
      });
    }
  } catch (e) {
    const err = e instanceof Error ? e : new Error(String(e));
    console.error("[lead] send failed:", err.message, err);
    return NextResponse.json(
      {
        ok: false,
        error:
          process.env.NODE_ENV === "development"
            ? `Email failed: ${err.message}. Check App Password and 2FA on the Google account.`
            : "Could not send your enquiry. Please call or WhatsApp us.",
      },
      { status: 500 },
    );
  }
}
