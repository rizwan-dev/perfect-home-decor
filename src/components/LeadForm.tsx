"use client";

import { useState } from "react";
import { COMPANY, whatsappLink } from "@/lib/site";

type Props = {
  className?: string;
  source?: string;
  /** `flush`: no outer card chrome — wrap in your own panel (e.g. contact page). */
  variant?: "card" | "flush";
};

export function LeadForm({
  className = "",
  source = "website",
  variant = "card",
}: Props) {
  const [status, setStatus] = useState<
    "idle" | "sending" | "ok" | "ok-no-smtp" | "err"
  >("idle");
  const [errDetail, setErrDetail] = useState("");
  const [smtpHint, setSmtpHint] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!(form instanceof HTMLFormElement)) return;

    setStatus("sending");
    setErrDetail("");
    setSmtpHint("");
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") || ""),
      phone: String(fd.get("phone") || ""),
      area: String(fd.get("area") || ""),
      message: String(fd.get("message") || ""),
      source,
    };
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        emailSent?: boolean;
        info?: string;
        error?: string;
      };
      if (!res.ok || !data.ok) {
        setStatus("err");
        setErrDetail(
          typeof data.error === "string" ? data.error : "Please try again.",
        );
        return;
      }
      if (data.emailSent === false) {
        setStatus("ok-no-smtp");
        setSmtpHint(
          typeof data.info === "string"
            ? data.info
            : "Email is not configured. Check .env.local and restart the server.",
        );
        form.reset();
        return;
      }
      setStatus("ok");
      // Must use `form`, not `e.currentTarget` — after `await` the synthetic
      // event target is often null, which threw and showed a false "network error".
      form.reset();
    } catch {
      setStatus("err");
      setErrDetail("Network error. Please call or use WhatsApp.");
    }
  }

  const waPrefill = whatsappLink(
    `Hi ${COMPANY.name}, I'd like a free consultation.\nName: \nPhone: \nArea in Pune: `,
  );

  const formShell =
    variant === "flush"
      ? "space-y-5"
      : "space-y-4 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm";

  return (
    <div className={className}>
      <form onSubmit={onSubmit} className={formShell}>
        <div>
          <label htmlFor="lead-name" className="text-sm font-medium text-charcoal">
            Name
          </label>
          <input
            id="lead-name"
            name="name"
            required
            autoComplete="name"
            className="mt-1.5 w-full rounded-xl border border-stone-200 bg-cream/40 px-4 py-2.5 text-sm outline-none ring-wood-dark/30 transition focus:border-wood-dark focus:ring-2"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="lead-phone" className="text-sm font-medium text-charcoal">
            Phone (WhatsApp preferred)
          </label>
          <input
            id="lead-phone"
            name="phone"
            required
            inputMode="tel"
            autoComplete="tel"
            className="mt-1.5 w-full rounded-xl border border-stone-200 bg-cream/40 px-4 py-2.5 text-sm outline-none ring-wood-dark/30 transition focus:border-wood-dark focus:ring-2"
            placeholder="+91 …"
          />
        </div>
        <div>
          <label htmlFor="lead-area" className="text-sm font-medium text-charcoal">
            Area in Pune
          </label>
          <input
            id="lead-area"
            name="area"
            className="mt-1.5 w-full rounded-xl border border-stone-200 bg-cream/40 px-4 py-2.5 text-sm outline-none ring-wood-dark/30 transition focus:border-wood-dark focus:ring-2"
            placeholder="e.g. Kharadi, Magarpatta"
          />
        </div>
        <div>
          <label
            htmlFor="lead-message"
            className="text-sm font-medium text-charcoal"
          >
            What do you need?
          </label>
          <textarea
            id="lead-message"
            name="message"
            rows={3}
            className="mt-1.5 w-full rounded-xl border border-stone-200 bg-cream/40 px-4 py-2.5 text-sm outline-none ring-wood-dark/30 transition focus:border-wood-dark focus:ring-2"
            placeholder="2 BHK renovation, kitchen only, full home…"
          />
        </div>
        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full rounded-full bg-charcoal py-3 text-sm font-semibold text-cream transition hover:bg-wood-dark disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Request free consultation"}
        </button>
        {status === "ok" ? (
          <p className="text-center text-sm text-green-700" role="status">
            Thanks—we’ll call you shortly.
          </p>
        ) : null}
        {status === "ok-no-smtp" ? (
          <p
            className="rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 text-center text-sm text-amber-950"
            role="status"
          >
            <span className="font-semibold">Details received — email not sent.</span>{" "}
            {smtpHint}
          </p>
        ) : null}
        {status === "err" ? (
          <p className="text-center text-sm text-red-700" role="alert">
            {errDetail ||
              "Something went wrong. Please call us or use WhatsApp."}
          </p>
        ) : null}
      </form>
      <p
        className={
          variant === "flush"
            ? "mt-6 border-t border-stone-100 pt-5 text-center text-xs text-stone-500"
            : "mt-4 text-center text-xs text-stone-500"
        }
      >
        Prefer WhatsApp?{" "}
        <a href={waPrefill} className="font-semibold text-wood-dark underline">
          Open chat
        </a>
      </p>
    </div>
  );
}
