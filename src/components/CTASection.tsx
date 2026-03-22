import Link from "next/link";
import { COMPANY, whatsappLink } from "@/lib/site";

type Props = {
  title?: string;
  subtitle?: string;
};

export function CTASection({
  title = "Book a free consultation",
  subtitle = "Tell us your area in Pune—we’ll share ideas, a rough timeline, and what to budget before you commit.",
}: Props) {
  const wa = whatsappLink(
    `Hi ${COMPANY.name}, I'd like a free consultation. My area in Pune: `,
  );
  return (
    <section className="relative overflow-hidden bg-wood py-16 text-cream sm:py-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-cream/90 sm:text-base">
          {subtitle}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <a
            href={`tel:${COMPANY.phoneTel}`}
            className="inline-flex w-full items-center justify-center rounded-full bg-cream px-8 py-3.5 text-sm font-semibold text-charcoal shadow-sm transition hover:bg-white sm:w-auto"
          >
            Call {COMPANY.phoneDisplay}
          </a>
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center rounded-full border border-cream/40 bg-transparent px-8 py-3.5 text-sm font-semibold text-cream transition hover:bg-white/10 sm:w-auto"
          >
            WhatsApp us
          </a>
          <Link
            href="/contact"
            className="inline-flex w-full items-center justify-center rounded-full border border-cream/40 bg-transparent px-8 py-3.5 text-sm font-semibold text-cream transition hover:bg-white/10 sm:w-auto"
          >
            Contact form
          </Link>
        </div>
      </div>
    </section>
  );
}
