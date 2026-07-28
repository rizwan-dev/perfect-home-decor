import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { ProjectStrip } from "@/components/ProjectStrip";
import { JsonLd } from "@/components/JsonLd";
import { LeadForm } from "@/components/LeadForm";
import { SectionHeading } from "@/components/SectionHeading";
import { PricingBands } from "@/components/PricingBands";
import { AREAS, COMPANY, SITE_URL, type AreaSlug } from "@/lib/site";
import { blogPosts } from "@/lib/blog-data";
import { locationContent } from "@/lib/locations-data";
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from "@/lib/json-ld";
import { projectsNearArea } from "@/lib/projects-data";
import { SERVICE_SLUGS, servicesMeta } from "@/lib/services-data";

/** Each locality gets its own hero so no two area pages share a lead image. */
const areaHero: Record<AreaSlug, string> = {
  kharadi: "/images/stock/living-room-minimal-bright-pune.webp",
  wagholi: "/images/stock/living-room-blue-sofa-interior-pune.webp",
  "viman-nagar": "/images/stock/bedroom-cove-ceiling-interior-pune.webp",
  lohegaon: "/images/stock/modular-kitchen-contemporary-pune.webp",
  magarpatta: "/images/canva/bedroom-wood-wardrobe-cove-lighting-pune.webp",
  kesnand: "/images/canva/bedroom-fluted-panel-ceiling-pune.webp",
};

/**
 * Guides surfaced on every locality page — the ones that answer the questions
 * that actually come up before signing (cost, kitchen, ceiling, painting,
 * storage). Real internal links into content we already have, rather than a
 * generic "resources" block.
 */
const LOCATION_GUIDES = [
  "home-interior-design-kharadi-2bhk-3bhk-guide",
  "complete-guide-home-interior-design-pune",
  "modular-kitchen-pune-checklist-before-you-sign",
  "false-ceiling-pop-pune-height-lighting-guide",
  "wall-painting-pune-monsoon-timing-finishes",
  "modular-wardrobes-dressing-room-storage-pune",
] as const;

export function LocationLanding({ area }: { area: AreaSlug }) {
  const c = locationContent[area];
  const path = `/interior-designer-in-${area}`;

  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: `Home interior design in ${c.areaLabel}`,
          description: c.metaDescription,
          url: `${SITE_URL}${path}`,
        })}
      />
      <JsonLd data={faqJsonLd(c.localFaq, { pageUrl: `${SITE_URL}${path}` })} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: `Home interior design in ${c.areaLabel}`, path },
        ])}
      />

      <section className="relative bg-charcoal">
        <div className="absolute inset-0">
          <Image
            src={areaHero[area]}
            alt={`Interior design in ${c.areaLabel}, Pune`}
            fill
            fetchPriority="high"
            loading="eager"
            className="object-cover opacity-45"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 to-charcoal/55" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <nav className="text-xs font-medium text-cream/70">
            <Link href="/" className="hover:text-cream">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-cream">
              Home interior design in {c.areaLabel}
            </span>
          </nav>
          <h1 className="mt-6 max-w-3xl font-display text-3xl tracking-tight text-cream sm:text-4xl lg:text-5xl">
            {c.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-cream/90 sm:text-lg">
            {c.subhead}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex justify-center rounded-full bg-cream px-8 py-3.5 text-sm font-semibold text-charcoal transition hover:bg-white"
            >
              Free site visit in {c.areaLabel}
            </Link>
            <a
              href={`tel:${COMPANY.phoneTel}`}
              className="inline-flex justify-center rounded-full border border-cream/40 px-8 py-3.5 text-sm font-semibold text-cream transition hover:bg-white/10"
            >
              Call {COMPANY.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
        {c.intro.map((paragraph, i) => (
          <p
            key={i}
            className="mb-6 text-lg leading-relaxed text-stone-700 last:mb-0"
          >
            {paragraph}
          </p>
        ))}
      </section>

      <section className="border-y border-stone-200 bg-white py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl text-charcoal">
                Landmarks &amp; context
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-stone-600">
                {c.landmarks}
              </p>
              <h3 className="mt-8 font-display text-xl text-charcoal">
                Neighbourhoods we frequent
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">
                {c.neighborhoods}
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl text-charcoal">
                Services in {c.areaLabel}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-stone-600">
                {c.servicesBlurb}
              </p>
              <ul className="mt-6 space-y-2 text-sm font-medium text-wood-dark">
                {SERVICE_SLUGS.map((slug) => (
                  <li key={slug}>
                    <Link
                      href={`/services/${slug}`}
                      className="hover:underline"
                    >
                      {servicesMeta[slug].title}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href={`/home-painting-in-${area}`}
                    className="hover:underline"
                  >
                    Wall painting in {c.areaLabel}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/false-ceiling-in-${area}`}
                    className="hover:underline"
                  >
                    False ceiling (POP) in {c.areaLabel}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/modular-kitchen-in-${area}`}
                    className="hover:underline"
                  >
                    Modular kitchen in {c.areaLabel}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {c.buyerProfile?.length ? (
        <section className="border-b border-stone-200 bg-stone-50/70 py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Local context"
              title={`What ${c.areaLabel} homeowners actually want`}
              description={`Written from site visits across ${c.areaLabel}, not a template we swap the area name into.`}
            />
            <div className="mt-10 grid gap-6 lg:grid-cols-3 lg:gap-8">
              {c.buyerProfile.map((block) => (
                <div
                  key={block.heading}
                  className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="font-display text-lg text-charcoal">
                    {block.heading}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone-600">
                    {block.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {c.homeTypes?.length ? (
        <section className="border-b border-stone-200 bg-white py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Scope"
              title={`Types of homes we work on in ${c.areaLabel}`}
              description="Same team and standards across all of them—only the scope and sequence change."
            />
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {c.homeTypes.map((t) => (
                <div
                  key={t.title}
                  className="rounded-2xl border border-stone-200 bg-stone-50/60 p-6"
                >
                  <div className="h-1 w-8 rounded-full bg-wood/70" aria-hidden />
                  <h3 className="mt-4 font-display text-lg text-charcoal">
                    {t.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">
                    {t.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="border-b border-stone-200 bg-white py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <PricingBands areaLabel={c.areaLabel} />
          <p className="mt-6 text-sm text-stone-600">
            Want a figure for your own flat?{" "}
            <Link
              href="/services/interior-design"
              className="font-semibold text-wood-dark underline decoration-wood/30 underline-offset-2 hover:decoration-wood-dark"
            >
              Use the home interior cost calculator
            </Link>{" "}
            — three quick picks and you get the range, no callback required.
          </p>
        </div>
      </section>

      {c.siteRealities?.length ? (
        <section className="border-b border-stone-200 bg-cream/40 py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-8 lg:flex-row lg:gap-14">
              <div className="lg:w-72 lg:shrink-0">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-wood-dark">
                  Good to know
                </p>
                <h2 className="mt-2 font-display text-2xl tracking-tight text-charcoal sm:text-3xl">
                  Site realities we plan around in {c.areaLabel}
                </h2>
              </div>
              <ul className="grid flex-1 gap-x-10 gap-y-4 sm:grid-cols-2">
                {c.siteRealities.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-relaxed text-stone-700"
                  >
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white text-[10px] font-bold text-wood-dark ring-1 ring-stone-200"
                      aria-hidden
                    >
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ) : null}

      <section className="border-b border-stone-200 bg-stone-50/70 py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Process"
            title={`How a ${c.areaLabel} project actually runs`}
            description="Six stages, each with a decision you sign off before we spend your money on the next one."
          />
          <div className="relative mt-12 max-w-3xl">
            <div
              className="absolute left-[1.15rem] top-3 bottom-3 hidden w-px bg-stone-300 sm:block"
              aria-hidden
            />
            <ol className="space-y-0">
              {[
                {
                  s: `Free site visit in ${c.areaLabel}`,
                  d: `We measure the flat, check services and beams, note your society's working rules, and talk through how your household actually uses each room. No quotation is given before this — a number without seeing the home is a guess.`,
                },
                {
                  s: "Layout and concept",
                  d: "Furniture layouts, storage planning and a material direction, worked around your floor plan rather than a catalogue template. You see and approve the direction before any drawing is detailed.",
                },
                {
                  s: "Line-wise quotation (BOQ)",
                  d: "Every item priced separately — cabinetry, painting, ceiling, hardware — so you can compare it fairly against another quote, cut what you don't need, and decide what moves to a later phase.",
                },
                {
                  s: "Detailed drawings and sign-off",
                  d: "Elevations, electrical points and finish schedules are locked before production starts. This is the stage that prevents the classic mid-project 'that's not what I pictured'.",
                },
                {
                  s: "Execution with weekly updates",
                  d: `Factory-built units arrive and install in days rather than weeks of on-site carpentry dust. Photos come to you on WhatsApp — you should not have to visit ${c.areaLabel} daily to know what happened.`,
                },
                {
                  s: "Snagging and handover",
                  d: "A walkthrough, a snag list closed before we call it done, care notes for the finishes, and warranty documentation — 5 years on furniture, 2 years on painting — handed over in writing.",
                },
              ].map((step, i) => (
                <li
                  key={step.s}
                  className="relative flex gap-5 pb-10 last:pb-0 sm:gap-8"
                >
                  <span className="relative z-[1] flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-stone-200 bg-white text-sm font-bold text-charcoal shadow-sm">
                    {i + 1}
                  </span>
                  <div className="min-w-0 pt-0.5">
                    <h3 className="font-display text-lg text-charcoal">
                      {step.s}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-stone-600">
                      {step.d}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="border-b border-stone-200 bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why us"
            title={`Why ${c.areaLabel} homeowners choose Perfect Home Decor`}
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                t: "Real warranties, in writing",
                b: "5 years on furniture, 2 years on painting—documented at handover, not promised on a call.",
              },
              {
                t: "Named brands on the quote",
                b: "Asian Paints, Dulux, Nerolac, Berger and Dr. Fixit are specified by name, so you know what you are buying.",
              },
              {
                t: "One in-house team",
                b: "Designers, carpenters and painters are ours—nothing is handed to an unaccountable subcontractor.",
              },
              {
                t: "Line-wise quotations",
                b: "Item-by-item pricing you can compare fairly, trim, or phase—never a single unexplained number.",
              },
              {
                t: `${COMPANY.googleReviewCount}+ five-star reviews`,
                b: `A ${COMPANY.googleStarRating}.0 rating on Google built over ${COMPANY.yearsExperience}+ years of work across East Pune.`,
              },
              {
                t: "Free site visit first",
                b: "We measure and inspect before quoting, because a number given without seeing the flat is a guess.",
              },
            ].map((item) => (
              <div
                key={item.t}
                className="rounded-2xl border border-stone-200 bg-stone-50/60 p-6"
              >
                <h3 className="font-display text-lg text-charcoal">{item.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">
                  {item.b}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Local FAQs"
          title={`Questions we hear in ${c.areaLabel}`}
        />
        <dl className="mt-10 space-y-8">
          {c.localFaq.map((f) => (
            <div key={f.q}>
              <dt className="font-semibold text-charcoal">{f.q}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-stone-600">
                {f.a}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="border-t border-stone-200 bg-cream py-14">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionHeading
              eyebrow="Start here"
              title="Tell us your society or pin— we’ll plan the visit"
            />
            <p className="mt-4 text-sm leading-relaxed text-stone-600">
              We also serve nearby Pune pockets beyond {c.areaLabel}. Browse
              other locality pages if you are on the border of two areas.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {AREAS.filter((x) => x.slug !== area).map((x) => (
                <li key={x.slug}>
                  <Link
                    href={`/interior-designer-in-${x.slug}`}
                    className="inline-flex rounded-full border border-stone-200 bg-white px-3 py-1 text-xs font-medium text-stone-700 hover:border-wood-dark"
                  >
                    {x.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <LeadForm source={`location:${area}`} />
        </div>
      </section>

      <ProjectStrip
        projects={projectsNearArea(c.areaLabel)}
        eyebrow="Local proof"
        title={`Interior work delivered around ${c.areaLabel}`}
        description="Societies our team already knows—lift bookings, work hours, and handover checklists included."
      />

      <section className="border-t border-stone-200 bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Read before you commit"
            title="Guides that answer the questions behind the quote"
            description="Long-form, Pune-specific reference pieces—written from our own sites, not generic décor advice."
          />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {LOCATION_GUIDES.map((slug) => {
              const post = blogPosts.find((p) => p.slug === slug);
              if (!post) return null;
              return (
                <li key={slug}>
                  <Link
                    href={`/blog/${slug}`}
                    className="group flex h-full flex-col rounded-2xl border border-stone-200 bg-stone-50/60 p-5 transition hover:border-wood/40 hover:bg-white hover:shadow-sm"
                  >
                    <span className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-wood-dark">
                      {post.category}
                    </span>
                    <span className="mt-2 font-display text-base leading-snug text-charcoal group-hover:text-wood-dark">
                      {post.title}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <CTASection
        title={`Home interior design in ${c.areaLabel} — book today`}
        subtitle="We bring samples, references, and a clear next-step plan—whether you are at grey shell or mid-renovation."
      />
    </>
  );
}
