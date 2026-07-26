import type { Metadata } from "next";
import Image from "next/image";
import { CTASection } from "@/components/CTASection";
import { LeadForm } from "@/components/LeadForm";
import { SocialIconLinks } from "@/components/SocialIconLinks";
import { getContactMapIframeSrc } from "@/lib/contact-map-embed";
import { COMPANY, SITE_URL, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact — free interior consultation Pune",
  description: `Call or WhatsApp ${COMPANY.name} for a free consultation. Home interiors across Pune with clear timelines and BOQs.`,
  alternates: { canonical: "/contact" },
  openGraph: {
    url: `${SITE_URL}/contact`,
    title: `Contact | ${COMPANY.name}`,
  },
};

function IconPhone({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
      />
    </svg>
  );
}

function IconChat({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337L5.05 21l1.395-3.72C5.512 15.042 5 13.574 5 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
      />
    </svg>
  );
}

function IconMail({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
      />
    </svg>
  );
}

function IconMapPin({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
      />
    </svg>
  );
}

const contactHeroImage = "/images/stock/living-room-interior-warm-lighting-pune.webp";

export default function ContactPage() {
  const mapIframeSrc = getContactMapIframeSrc();
  const wa = whatsappLink(
    `Hi ${COMPANY.name}, I'd like a free consultation. My area in Pune: `,
  );

  return (
    <>
      <section className="relative overflow-hidden border-b border-stone-200/80 bg-gradient-to-br from-white via-cream to-stone-100/50">
        <div
          className="pointer-events-none absolute -right-24 top-0 h-[480px] w-[480px] rounded-full bg-wood/[0.04] blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-stone-300/20 blur-3xl"
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-wood-dark">
                Contact the studio
              </p>
              <h1 className="mt-4 font-display text-4xl leading-[1.08] tracking-tight text-charcoal sm:text-5xl">
                Let’s shape a home that feels considered
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-stone-600 sm:text-lg">
                Share your brief—layout, timeline, and what should feel
                different when you walk in. We reply quickly, usually the same
                day, with next steps for a call or site visit in Pune.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <a
                  href={`tel:${COMPANY.phoneTel}`}
                  className="group flex min-h-0 flex-col rounded-2xl border border-stone-200/90 bg-white/70 p-5 shadow-sm backdrop-blur-sm transition hover:border-wood/25 hover:shadow-md"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cream text-wood-dark ring-1 ring-stone-200/80 transition group-hover:bg-white group-hover:ring-wood/20">
                    <IconPhone className="h-5 w-5" />
                  </span>
                  <span className="mt-4 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-stone-500">
                    Call
                  </span>
                  <span className="mt-1 font-display text-lg text-charcoal">
                    {COMPANY.phoneDisplay}
                  </span>
                </a>
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-h-0 flex-col rounded-2xl border border-stone-200/90 bg-white/70 p-5 shadow-sm backdrop-blur-sm transition hover:border-wood/25 hover:shadow-md"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cream text-wood-dark ring-1 ring-stone-200/80 transition group-hover:bg-white group-hover:ring-wood/20">
                    <IconChat className="h-5 w-5" />
                  </span>
                  <span className="mt-4 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-stone-500">
                    WhatsApp
                  </span>
                  <span className="mt-1 font-display text-lg text-charcoal">
                    Message us
                  </span>
                </a>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="group flex min-h-0 flex-col rounded-2xl border border-stone-200/90 bg-white/70 p-5 shadow-sm backdrop-blur-sm transition hover:border-wood/25 hover:shadow-md sm:col-span-2 lg:col-span-1"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cream text-wood-dark ring-1 ring-stone-200/80 transition group-hover:bg-white group-hover:ring-wood/20">
                    <IconMail className="h-5 w-5" />
                  </span>
                  <span className="mt-4 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-stone-500">
                    Email
                  </span>
                  <span className="mt-1 break-words font-sans text-sm font-medium leading-snug text-charcoal">
                    {COMPANY.email}
                  </span>
                </a>
              </div>

              <div className="mt-10 flex flex-col gap-4 border-t border-stone-200/80 pt-10 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-stone-500">
                    Studio hours
                  </p>
                  <p className="mt-1 text-sm font-medium text-charcoal">
                    {COMPANY.hours}
                  </p>
                </div>
                <a
                  href="#visit"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-wood-dark underline decoration-wood/30 underline-offset-4 transition hover:decoration-wood-dark"
                >
                  <IconMapPin className="h-4 w-4 shrink-0" />
                  Studio on the map
                </a>
              </div>
            </div>

            <div className="relative mx-auto aspect-[3/4] w-full max-w-md min-h-[280px] max-h-[min(68vh,520px)] overflow-hidden rounded-3xl bg-stone-200 shadow-[0_32px_64px_-24px_rgba(28,25,23,0.35)] ring-1 ring-stone-900/5 lg:mx-0 lg:aspect-[4/5] lg:max-h-[min(72vh,640px)] lg:max-w-none lg:min-h-0">
              <Image
                src={contactHeroImage}
                alt="Warm, curated living room interior"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) min(100vw, 28rem), 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-charcoal/10" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-cream">
                <p className="font-display text-2xl leading-tight sm:text-3xl">
                  {COMPANY.name}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-cream/85">
                  {COMPANY.tagline}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-stone-200/60 bg-cream/80">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-16 lg:items-start">
            <article className="rounded-3xl border border-stone-200/80 bg-white p-8 shadow-[0_24px_60px_-28px_rgba(28,25,23,0.12)] sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-wood-dark">
                Project enquiry
              </p>
              <h2 className="mt-3 font-display text-3xl tracking-tight text-charcoal">
                Tell us about your space
              </h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-stone-600">
                A few lines are enough to start—we’ll follow up with questions
                about scope, possession, and how you use each room.
              </p>
              <LeadForm
                source="contact-page"
                variant="flush"
                className="mt-8"
              />
            </article>

            <div id="visit" className="flex scroll-mt-24 flex-col gap-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-wood-dark">
                  Visit
                </p>
                <h2 className="mt-3 font-display text-3xl tracking-tight text-charcoal">
                  Wagholi studio
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-stone-600">
                  On Google Maps we’re listed as{" "}
                  <span className="font-medium text-charcoal">
                    {COMPANY.name}
                  </span>
                  . Site visits run across Pune—call ahead if you’d like to meet
                  us at the office.
                </p>
              </div>

              <div className="rounded-3xl bg-gradient-to-b from-stone-200/80 to-stone-300/40 p-1.5 shadow-inner ring-1 ring-stone-900/[0.06]">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-stone-100 shadow-sm ring-1 ring-white/80">
                  <iframe
                    title={`${COMPANY.name} on Google Maps — Wagholi, Pune`}
                    src={mapIframeSrc}
                    className="absolute inset-0 h-full w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
              </div>

              <div className="rounded-2xl border border-stone-200/90 bg-white/90 px-6 py-6 sm:px-8">
                <div className="flex gap-4">
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cream text-wood-dark ring-1 ring-stone-200">
                    <IconMapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-stone-500">
                      Address
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-stone-700">
                      {COMPANY.address}
                    </p>
                    <p className="mt-3 text-xs leading-relaxed text-stone-500">
                      {COMPANY.serviceAreaLine}
                    </p>
                  </div>
                </div>
                <div className="mt-6 border-t border-stone-100 pt-6">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-stone-500">
                    Connect
                  </p>
                  <SocialIconLinks className="mt-3" size="comfortable" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Exploring before you commit?"
        subtitle="Browse finished projects for palettes and layouts—when you’re ready, we’re here to translate ideas into a measured plan and BOQ."
      />
    </>
  );
}
