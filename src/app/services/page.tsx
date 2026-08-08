import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/json-ld";
import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { COMPANY, SITE_URL } from "@/lib/site";
import { OG_IMAGE, ogImages } from "@/lib/og-image";
import { SERVICE_SLUGS } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Interior services in Pune",
  description: `Home & commercial interior design, modular kitchens, false ceilings, painting and custom furniture across Pune. ${COMPANY.googleStarRating}.0★ from ${COMPANY.googleReviewCount}+ reviews.`,
  alternates: { canonical: "/services" },
  openGraph: {
    url: `${SITE_URL}/services`,
    title: `Services | ${COMPANY.name}`,
    description:
      "Residential and commercial interior design across Pune—one accountable team.",
    images: ogImages(
      OG_IMAGE.interiors,
      `Interior design and home services by ${COMPANY.name}, Pune`,
    ),
  },
};

export default function ServicesIndexPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          {/* No visible breadcrumb on a top-level page — the trail would only
              repeat the nav. BreadcrumbList JSON-LD above still feeds SERPs. */}
          <h1 className="max-w-3xl font-display text-4xl tracking-tight text-charcoal sm:text-5xl">
            Homes, offices &amp; retail—under one roof
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">
            From apartments and villas to offices, shops, and showrooms, we
            coordinate drawings, materials, and site teams. Explore each service
            for benefits, process, and FAQs—or call us from{" "}
            {COMPANY.addressLocality} to walk through your floor plan.
          </p>
          <p className="mt-4 text-sm text-stone-500">{COMPANY.serviceAreaLine}</p>
          <dl className="mt-10 grid max-w-2xl grid-cols-2 gap-4 border-t border-stone-200 pt-8 sm:grid-cols-4">
            <div>
              <dt className="text-[0.65rem] font-semibold uppercase tracking-wider text-stone-500">
                Experience
              </dt>
              <dd className="mt-1 font-display text-xl text-charcoal">
                {COMPANY.yearsExperience}+ years
              </dd>
            </div>
            <div>
              <dt className="text-[0.65rem] font-semibold uppercase tracking-wider text-stone-500">
                Deliveries
              </dt>
              <dd className="mt-1 font-display text-xl text-charcoal">
                {COMPANY.happyClients}+
              </dd>
            </div>
            <div>
              <dt className="text-[0.65rem] font-semibold uppercase tracking-wider text-stone-500">
                Studio
              </dt>
              <dd className="mt-1 text-sm font-medium text-charcoal">
                {COMPANY.addressLocality}, Pune
              </dd>
            </div>
            <div>
              <dt className="text-[0.65rem] font-semibold uppercase tracking-wider text-stone-500">
                Hours
              </dt>
              <dd className="mt-1 text-sm font-medium text-charcoal">
                {COMPANY.hours}
              </dd>
            </div>
          </dl>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex justify-center rounded-full bg-charcoal px-8 py-3.5 text-sm font-semibold text-cream transition hover:bg-wood-dark"
            >
              Get free consultation
            </Link>
            <Link
              href="/projects"
              className="inline-flex justify-center rounded-full border border-stone-300 px-8 py-3.5 text-sm font-semibold text-charcoal transition hover:border-wood-dark"
            >
              See projects
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What we do"
          title="Six disciplines, one accountable studio"
          description="Residential and commercial—take a single service or the whole home. Drawings, quotations, and site updates stay in one WhatsApp thread, with one person answerable to you."
        />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICE_SLUGS.map((slug) => (
            <ServiceCard key={slug} slug={slug} />
          ))}
        </div>
      </section>

      <CTASection
        title="Not sure where to start?"
        subtitle="Tell us your society and possession date—we’ll suggest the right order of work for your budget, so painting never follows the woodwork dust."
      />
    </>
  );
}
