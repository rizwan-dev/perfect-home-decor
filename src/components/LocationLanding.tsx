import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { ProjectStrip } from "@/components/ProjectStrip";
import { JsonLd } from "@/components/JsonLd";
import { LeadForm } from "@/components/LeadForm";
import { SectionHeading } from "@/components/SectionHeading";
import { PricingBands } from "@/components/PricingBands";
import { AREAS, COMPANY, SITE_URL, type AreaSlug } from "@/lib/site";
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

      <section className="border-b border-stone-200 bg-white py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <PricingBands areaLabel={c.areaLabel} />
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

      <CTASection
        title={`Home interior design in ${c.areaLabel} — book today`}
        subtitle="We bring samples, references, and a clear next-step plan—whether you are at grey shell or mid-renovation."
      />
    </>
  );
}
