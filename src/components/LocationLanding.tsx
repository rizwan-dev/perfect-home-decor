import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { FaqAccordion } from "@/components/FaqAccordion";
import { ProjectStrip } from "@/components/ProjectStrip";
import { Reveal } from "@/components/Reveal";
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

/**
 * Six photographs per locality, mapped 1:1 onto that area's `homeTypes` cards.
 * Deliberately different per area so no two locality pages look like the same
 * page with the name swapped — which is exactly what a thin local page reads
 * like, to a visitor and to Google.
 */
const areaHomeTypeImages: Record<AreaSlug, string[]> = {
  kharadi: [
    "/images/stock/kharadi-open-plan-living-dining-design.webp",
    "/images/stock/kharadi-master-bedroom-wardrobe-design.webp",
    "/images/stock/kharadi-living-room-sofa-cove-ceiling.webp",
    "/images/stock/kharadi-modular-kitchen-l-shaped-design.webp",
    "/images/stock/kharadi-tv-unit-media-wall-design.webp",
    "/images/stock/kharadi-kids-bedroom-wardrobe-study.webp",
  ],
  wagholi: [
    "/images/stock/living-room-blue-sofa-interior-pune.webp",
    "/images/stock/bedroom-interior-design-wardrobe-pune.webp",
    "/images/stock/home-interior-hallway-open-plan-pune.webp",
    "/images/stock/modular-kitchen-design-pune.webp",
    "/images/stock/home-painting-service-pune.webp",
    "/images/stock/custom-furniture-wall-unit-design-pune.webp",
  ],
  "viman-nagar": [
    "/images/stock/luxury-living-room-interior-pune.webp",
    "/images/stock/living-room-panelled-sectional-design-pune.webp",
    "/images/stock/modular-kitchen-contemporary-pune.webp",
    "/images/stock/home-office-study-room-design-pune.webp",
    "/images/stock/bedroom-soft-neutral-interior-pune.webp",
    "/images/stock/tv-cabinet-glass-shelving-unit-pune.webp",
  ],
  lohegaon: [
    "/images/stock/bedroom-cove-ceiling-interior-pune.webp",
    "/images/stock/bedroom-wardrobe-lighting-design-pune.webp",
    "/images/stock/living-neutral-bright.webp",
    "/images/stock/modular-kitchen-dark-wood-pune.webp",
    "/images/stock/fitted-wardrobe-loft-storage-pune.webp",
    "/images/stock/bedroom-wardrobe-study-desk-unit-pune.webp",
  ],
  magarpatta: [
    "/images/stock/living-room-premium-interior-design-pune.webp",
    "/images/stock/coffered-ceiling-living-room-pune.webp",
    "/images/canva/living-room-cove-ceiling-art-wall-pune.webp",
    "/images/stock/home-office-study-room-design-pune.webp",
    "/images/stock/hero-modular-kitchen-marble-island-pune.webp",
    "/images/stock/dining-area-interior-design-pune.webp",
  ],
  kesnand: [
    "/images/stock/hero-living-room-greenery-interior-pune.webp",
    "/images/stock/custom-furniture-shelving-pune.webp",
    "/images/stock/open-plan-living-dining-interior-pune.webp",
    "/images/canva/living-room-cove-ceiling-art-wall-pune.webp",
    "/images/stock/modular-kitchen-island-sage-green-pune.webp",
    "/images/stock/bedroom-white-bright.webp",
  ],
};

/** Editorial image beside the buyer-profile block, per area. */
const areaProfileImage: Record<AreaSlug, string> = {
  kharadi: "/images/stock/home-interior-design-kharadi-living-room.webp",
  wagholi: "/images/canva/bedroom-wood-wardrobe-cove-lighting-pune.webp",
  "viman-nagar": "/images/stock/hero-classic-living-room-interior-pune.webp",
  lohegaon: "/images/stock/bedroom-soft-neutral-interior-pune.webp",
  magarpatta: "/images/stock/living-dining-false-ceiling-pune.webp",
  kesnand: "/images/canva/dining-room-green-chairs-interior-pune.webp",
};

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
  "society-permission-interior-work-kharadi-pune",
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
            </Link>{" "}
            <a
              href={`tel:${COMPANY.phoneTel}`}
              className="inline-flex justify-center rounded-full border border-cream/40 px-8 py-3.5 text-sm font-semibold text-cream transition hover:bg-white/10"
            >
              Call {COMPANY.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <dl className="grid grid-cols-2 divide-stone-200 sm:grid-cols-4 sm:divide-x">
            {[
              {
                v: `${COMPANY.googleStarRating}.0★`,
                l: `${COMPANY.googleReviewCount}+ Google reviews`,
              },
              { v: `${COMPANY.yearsExperience}+`, l: "Years in Pune" },
              { v: `${COMPANY.happyClients}+`, l: "Homes & sites delivered" },
              { v: "5 yr", l: "Warranty on furniture" },
            ].map((s) => (
              <div key={s.l} className="px-2 py-8 text-center sm:px-6">
                <dt className="sr-only">{s.l}</dt>
                <dd>
                  <div className="block font-display text-3xl text-charcoal sm:text-4xl">
                    {s.v}
                  </div>
                  <div className="mt-1 block text-xs leading-snug text-stone-500">
                    {s.l}
                  </div>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        {c.intro.map((paragraph, i) => (
          <p
            key={i}
            className={
              i === 0
                ? "mb-6 text-xl leading-relaxed text-charcoal last:mb-0 sm:text-2xl sm:leading-relaxed"
                : "mb-6 text-lg leading-relaxed text-stone-700 last:mb-0"
            }
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
        <section className="border-b border-stone-200 bg-stone-50/70 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Local context"
              title={`What ${c.areaLabel} homeowners actually want`}
              description={`Written from site visits across ${c.areaLabel}, not a template we swap the area name into.`}
            />
            <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-14">
              <div className="lg:col-span-5">
                {/* 4:5 only where it sits in the desktop sidebar — full-width on
                    smaller screens that ratio becomes a very tall block whose top
                    third is usually just ceiling. */}
                <div className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-stone-200 shadow-[0_30px_60px_-32px_rgba(28,25,23,0.45)] ring-1 ring-stone-900/[0.06] sm:aspect-[3/2] lg:sticky lg:top-28 lg:aspect-[4/5]">
                  <Image
                    src={areaProfileImage[area]}
                    alt={`Home interior design delivered in ${c.areaLabel}, Pune`}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width:1024px) 100vw, 40vw"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-charcoal/45 via-transparent to-transparent"
                    aria-hidden
                  />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-cream/80">
                      {c.areaLabel} · Pune
                    </p>
                    <p className="mt-1 font-display text-xl text-cream">
                      Delivered by our own in-house team
                    </p>
                  </div>
                </div>
              </div>
              <ol className="lg:col-span-7">
                {c.buyerProfile.map((block, i) => (
                  <li
                    key={block.heading}
                    className="border-b border-stone-200 pb-8 pt-8 first:pt-0 last:border-0 last:pb-0"
                  >
                    <div className="flex gap-5">
                      <span className="mt-1.5 w-7 shrink-0 font-sans text-sm font-bold tabular-nums tracking-wider text-wood">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="min-w-0">
                        <h3 className="font-display text-xl text-charcoal">
                          {block.heading}
                        </h3>
                        <p className="mt-3 leading-relaxed text-stone-600">
                          {block.body}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>
      ) : null}

      {c.homeTypes?.length ? (
        <section className="border-b border-stone-200 bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Scope"
              title={`Types of homes we work on in ${c.areaLabel}`}
              description="Same team and standards across all of them—only the scope and sequence change."
            />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {c.homeTypes.map((t, i) => (
                <Reveal key={t.title} delay={(i % 3) * 80}>
                  <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-stone-200/90 bg-white shadow-[0_1px_2px_rgba(28,25,23,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_rgba(28,25,23,0.28)]">
                    <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                      <Image
                        src={
                          areaHomeTypeImages[area][i] ??
                          areaHomeTypeImages[area][0]
                        }
                        alt={`${t.title} — home interior design in ${c.areaLabel}, Pune`}
                        fill
                        className="object-cover transition duration-700 ease-out group-hover:scale-[1.05]"
                        sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="font-display text-lg leading-snug text-charcoal">
                        {t.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-stone-600">
                        {t.body}
                      </p>
                    </div>
                  </article>
                </Reveal>
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
        <section className="border-b border-stone-200 bg-charcoal py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
              <div className="lg:w-80 lg:shrink-0">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sand">
                  Good to know
                </p>
                <h2 className="mt-3 font-display text-3xl tracking-tight text-cream sm:text-4xl">
                  Site realities we plan around in {c.areaLabel}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-cream/70">
                  The practical constraints that shape a project here — flagged
                  before we quote, not discovered halfway through.
                </p>
              </div>
              <ul className="grid flex-1 gap-x-12 gap-y-7 sm:grid-cols-2">
                {c.siteRealities.map((item, i) => (
                  <li key={item} className="flex gap-4">
                    <span
                      className="mt-0.5 w-6 shrink-0 font-sans text-sm font-bold tabular-nums tracking-wider text-sand"
                      aria-hidden
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm leading-relaxed text-cream/85">
                      {item}
                    </span>
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

      <section className="border-b border-stone-200 bg-cream/50 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="Local FAQs"
            title={`Questions we hear in ${c.areaLabel}`}
            description="The things people actually ask on a first call — answered straight."
          />
          <FaqAccordion
            items={c.localFaq.map((f, i) => ({
              id: `faq-${area}-${i}`,
              q: f.q,
              a: f.a,
            }))}
            className="mt-10"
            accordionName={`location-faq-${area}`}
          />
        </div>
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
        // Default is 3, which hid most of the proof: Kharadi alone has 11
        // delivered projects. Naming more societies is the whole point of
        // this strip on a locality page.
        limit={6}
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
