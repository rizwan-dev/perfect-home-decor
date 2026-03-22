import { NextResponse } from "next/server";
import { COMPANY } from "@/lib/site";
import {
  isSmtpConfigured,
  sendLeadEmail,
  type LeadPayload,
} from "@/lib/send-lead-email";

export const runtime = "nodejs";

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
    const body = (await req.json()) as Partial<LeadPayload>;
    if (!body?.name?.trim() || !body?.phone?.trim()) {
      return NextResponse.json(
        { ok: false, error: "Name and phone are required" },
        { status: 400 },
      );
    }

    const payload: LeadPayload = {
      name: body.name.trim(),
      phone: body.phone.trim(),
      area: body.area?.trim(),
      message: body.message?.trim(),
      source: body.source?.trim() || "website",
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
