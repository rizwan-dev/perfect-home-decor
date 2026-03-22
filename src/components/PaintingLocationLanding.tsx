import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { LeadForm } from "@/components/LeadForm";
import { SectionHeading } from "@/components/SectionHeading";
import { AREAS, COMPANY, SITE_URL, type AreaSlug } from "@/lib/site";
import { paintingLocationContent } from "@/lib/painting-locations-data";
import { faqJsonLd, serviceJsonLd } from "@/lib/json-ld";

const heroImage =
  "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1920&q=80&auto=format&fit=crop";

export function PaintingLocationLanding({ area }: { area: AreaSlug }) {
  const c = paintingLocationContent[area];
  const path = `/home-painting-in-${area}`;
  const interiorPath = `/interior-designer-in-${area}`;

  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: `Wall painting in ${c.areaLabel}`,
          description: c.metaDescription,
          url: `${SITE_URL}${path}`,
        })}
      />
      <JsonLd
        data={faqJsonLd(c.localFaq, { pageUrl: `${SITE_URL}${path}` })}
      />

      <section className="relative overflow-hidden border-b border-stone-200 bg-stone-900">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt={`Professional home wall painting in ${c.areaLabel}, Pune`}
            fill
            priority
            className="object-cover opacity-40"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-charcoal/[0.96] via-charcoal/90 to-wood-dark/85" />
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_20%_0%,rgba(247,244,239,0.12),transparent_55%)]"
            aria-hidden
          />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
          <nav className="text-xs font-medium tracking-wide text-cream/65">
            <Link href="/" className="transition hover:text-cream">
              Home
            </Link>
            <span className="mx-2 text-cream/35" aria-hidden>
              /
            </span>
            <Link
              href="/services/home-painting"
              className="transition hover:text-cream"
            >
              Wall painting
            </Link>
            <span className="mx-2 text-cream/35" aria-hidden>
              /
            </span>
            <span className="text-cream">{c.areaLabel}</span>
          </nav>
          <p className="mt-6 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-cream/60">
            {COMPANY.name} · Pune
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-3xl leading-[1.1] tracking-tight text-cream sm:text-4xl lg:text-5xl">
            {c.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-cream/88 sm:text-lg">
            {c.subhead}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/contact"
              className="inline-flex justify-center rounded-full bg-cream px-8 py-3.5 text-sm font-semibold text-charcoal shadow-lg transition hover:bg-white"
            >
              Free painting estimate in {c.areaLabel}
            </Link>
            <Link
              href={`tel:${COMPANY.phoneTel}`}
              className="inline-flex justify-center rounded-full border border-cream/40 px-8 py-3.5 text-sm font-semibold text-cream transition hover:bg-white/10"
            >
              Call {COMPANY.phoneDisplay}
            </Link>
            <Link
              href="/services/home-painting"
              className="inline-flex justify-center rounded-full border border-cream/25 px-8 py-3.5 text-sm font-semibold text-cream/90 transition hover:bg-white/10"
            >
              All painting services
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        {c.intro.map((paragraph, i) => (
          <p
            key={i}
            className="mb-6 text-lg leading-[1.75] text-stone-700 last:mb-0 sm:text-xl"
          >
            {paragraph}
          </p>
        ))}
      </section>

      <section className="border-y border-stone-200 bg-gradient-to-b from-stone-50 to-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="rounded-3xl border border-stone-200/90 bg-white p-8 shadow-sm sm:p-10">
              <h2 className="font-display text-2xl text-charcoal sm:text-3xl">
                Painting in context — {c.areaLabel}
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-stone-600 sm:text-base">
                {c.localPaintContext}
              </p>
              <h3 className="mt-10 font-display text-xl text-charcoal">
                Neighbourhoods we cover
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-600 sm:text-base">
                {c.neighborhoods}
              </p>
            </div>
            <div className="rounded-3xl border border-stone-200/90 bg-white p-8 shadow-sm sm:p-10">
              <h2 className="font-display text-2xl text-charcoal sm:text-3xl">
                What we can paint for you
              </h2>
              <ul className="mt-6 space-y-3 text-sm leading-relaxed text-stone-700 sm:text-base">
                {c.offerings.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-wood"
                      aria-hidden
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Process"
          title={`How we run a painting project in ${c.areaLabel}`}
          description="Clear stages, documented scope, and inspection before handover—whether you need a full home or phased rooms."
        />
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {c.processSteps.map((step, index) => (
            <li
              key={step.title}
              className="relative rounded-2xl border border-stone-200 bg-cream/30 p-6 pt-8"
            >
              <span
                className="absolute left-6 top-0 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-charcoal font-display text-sm text-cream"
                aria-hidden
              >
                {index + 1}
              </span>
              <h3 className="font-display text-lg text-charcoal">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-t border-stone-200 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why homeowners call us"
            title="Execution you can measure"
          />
          <ul className="mt-10 space-y-4">
            {c.differentiators.map((line) => (
              <li
                key={line}
                className="flex gap-4 rounded-2xl border border-stone-100 bg-stone-50/80 px-5 py-4 text-sm leading-relaxed text-stone-700 sm:text-base"
              >
                <span className="font-display text-wood-dark" aria-hidden>
                  ✓
                </span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-stone-200 bg-stone-50 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="FAQs"
            title={`Wall painting questions in ${c.areaLabel}`}
          />
          <dl className="mt-10 space-y-10">
            {c.localFaq.map((f) => (
              <div key={f.q}>
                <dt className="font-display text-lg text-charcoal">{f.q}</dt>
                <dd className="mt-3 text-sm leading-relaxed text-stone-600 sm:text-base">
                  {f.a}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-t border-stone-200 bg-cream py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionHeading
              eyebrow="Start here"
              title={`Book a painting visit in ${c.areaLabel}`}
            />
            <p className="mt-4 text-sm leading-relaxed text-stone-600 sm:text-base">
              Share your society, approximate carpet area, and whether you need a
              full repaint or selected rooms—we will propose a BOQ-aligned estimate
              and schedule.
            </p>
            <p className="mt-6 text-sm text-stone-600">
              Prefer full interior design for the same home? See our{" "}
              <Link
                href={interiorPath}
                className="font-semibold text-wood-dark underline decoration-stone-300 underline-offset-2 hover:decoration-wood-dark"
              >
                interior designer in {c.areaLabel}
              </Link>{" "}
              page.
            </p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-stone-500">
              Wall painting in other areas
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {AREAS.filter((x) => x.slug !== area).map((x) => (
                <li key={x.slug}>
                  <Link
                    href={`/home-painting-in-${x.slug}`}
                    className="inline-flex rounded-full border border-stone-200 bg-white px-3 py-1 text-xs font-medium text-stone-700 transition hover:border-wood-dark"
                  >
                    {x.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <LeadForm source={`painting-location:${area}`} />
        </div>
      </section>

      <CTASection
        title={`Wall painting in ${c.areaLabel} — ${COMPANY.name}`}
        subtitle="Low-odour systems, crisp trims, and schedules that respect your society and the monsoon calendar."
      />
    </>
  );
}
