import { NextResponse } from "next/server";
import { COMPANY } from "@/lib/site";
import {
  isSmtpConfigured,
  sendLeadEmail,
  type LeadPayload,
} from "@/lib/send-lead-email";

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
  area: 120,
  service: 60,
  message: 2000,
  source: 80,
} as const;

function clip(value: string | undefined, max: number): string | undefined {
  const v = value?.trim();
  return v ? v.slice(0, max) : undefined;
}

/** Dev-only: open GET /api/lead in the browser to see if env vars load (no secrets). */
export async function GET() {
  if (process.env.NODE_ENV !== "development") {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json({
    smtpConfigured: isSmtpConfigured(),
    leadInbox:
      process.env.LEAD_EMAIL_TO?.trim() || `${COMPANY.email} (default)`,
    hint: isSmtpConfigured()
      ? "POST a lead from the form; check server terminal for [lead] logs."
      : "Set SMTP_USER + SMTP_PASS (or GMAIL_USER + GMAIL_APP_PASSWORD) in .env.local, then restart npm run dev.",
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

    const payload: LeadPayload = {
      name: clip(body.name, MAX_LENGTHS.name)!,
      phone: phone.slice(0, MAX_LENGTHS.phone),
      area: clip(body.area, MAX_LENGTHS.area),
      service: clip(body.service, MAX_LENGTHS.service),
      message: clip(body.message, MAX_LENGTHS.message),
      source: clip(body.source, MAX_LENGTHS.source) || "website",
    };

    if (!isSmtpConfigured()) {
      if (process.env.NODE_ENV === "development") {
        console.warn(
          "[lead] SMTP not configured — enquiry not emailed:",
          payload,
        );
        return NextResponse.json({
          ok: true,
          emailSent: false,
          info: "Inbox email is off: add SMTP_USER and SMTP_PASS (or GMAIL_USER + GMAIL_APP_PASSWORD) to .env.local, save, then restart the dev server. Open GET /api/lead to verify.",
        });
      }
      console.error("[lead] SMTP credentials missing in production");
      return NextResponse.json(
        {
          ok: false,
          error: "Email is not configured on the server yet.",
        },
        { status: 503 },
      );
    }

    const to = process.env.LEAD_EMAIL_TO?.trim() || COMPANY.email;
    await sendLeadEmail(payload);
    console.info("[lead] email dispatched to", to);
    return NextResponse.json({ ok: true, emailSent: true });
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
