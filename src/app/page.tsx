import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { LeadForm } from "@/components/LeadForm";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import {
  formatGoogleRating,
  getGooglePlaceReviewStats,
} from "@/lib/google-place-reviews";
import { AREAS, COMPANY, SITE_URL } from "@/lib/site";
import { SERVICE_SLUGS, servicesMeta } from "@/lib/services-data";
import { projects } from "@/lib/projects-data";
import { testimonials } from "@/lib/testimonials";
import { HomeEditorialBand } from "@/components/home/HomeEditorialBand";
import { HomeHeroSlider, type HeroSlide } from "@/components/home/HomeHeroSlider";
import { HomeInspiration } from "@/components/home/HomeInspiration";
import { HomeWhyUs } from "@/components/home/HomeWhyUs";
import { HomeFeaturedCommunities } from "@/components/home/HomeFeaturedCommunities";
import { HomeFaqSection } from "@/components/home/HomeFaqSection";
import { HomeProcessSteps } from "@/components/home/HomeProcessSteps";
import { HomeTrustStrip } from "@/components/home/HomeTrustStrip";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { homeFaqForSchema } from "@/lib/home-faq";
import { faqJsonLd } from "@/lib/json-ld";

export const metadata: Metadata = {
  title: "Interior designer in Pune — homes across Kharadi & East Pune",
  description: `${COMPANY.name}: home interiors, modular kitchens, false ceilings, painting & wallpaper across Kharadi, Wagholi & East Pune. Free site visit.`,
  alternates: { canonical: "/" },
  keywords: [
    "interior designer Pune",
    "Perfect Home Decor Pune",
    "modular kitchen Pune",
    "home interiors Pune",
    "interior design cost Pune",
    "commercial interior design Pune",
    "false ceiling Pune",
    "home painting Pune",
    "free interior consultation Pune",
  ],
};

const heroSlides: HeroSlide[] = [
  {
    src: "/images/stock/hero-living-room-interior-design-pune.webp",
    alt: "Bright living room interior with sectional sofa, gallery wall and natural light — home interior design Pune",
    kicker: "Full home interiors · Kharadi & East Pune",
    headline: "Interiors your Pune home",
    accent: "deserves.",
  },
  {
    src: "/images/stock/hero-modular-kitchen-marble-island-pune.webp",
    alt: "Modular kitchen with marble island, white cabinetry and warm lighting — modular kitchen Pune",
    kicker: "Modular kitchens · Built for Indian cooking",
    headline: "Kitchens planned down to the",
    accent: "masala shelf.",
  },
  {
    src: "/images/stock/hero-living-room-greenery-interior-pune.webp",
    alt: "Warm living room interior with greenery, pendant lights and layered seating — interior designer Pune",
    kicker: "Design & execution · One accountable team",
    headline: "One team, one clear",
    accent: "quotation.",
  },
  {
    src: "/images/stock/hero-classic-living-room-interior-pune.webp",
    alt: "Classic living room interior with fireplace, built-in shelving and neutral palette — premium interiors Pune",
    kicker: "False ceilings · Painting · Wardrobes",
    headline: "Finishes that outlast the first",
    accent: "monsoon.",
  },
];

export default async function HomePage() {
  const googleStats = await getGooglePlaceReviewStats();
  return (
    <>
      <JsonLd
        data={faqJsonLd(homeFaqForSchema(), { pageUrl: `${SITE_URL}/` })}
      />
      <HomeHeroSlider
        slides={heroSlides}
        ratingLabel={`${formatGoogleRating(googleStats.rating)}★`}
        reviewCount={googleStats.userRatingsTotal}
      />

      <HomeTrustStrip
        googleRatingLabel={`${formatGoogleRating(googleStats.rating)}★`}
        googleReviewCount={googleStats.userRatingsTotal}
      />

      <HomeFeaturedCommunities />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="Everything your home needs—from shell to styling"
          description="Take a single service or hand us the whole home. From one accent wall to a full 3 BHK, the same team plans, quotes, and delivers—so you never have to referee between a painter, a carpenter, and an electrician."
        />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICE_SLUGS.map((slug, i) => (
            <Reveal key={slug} delay={(i % 3) * 90}>
              <ServiceCard slug={slug} />
            </Reveal>
          ))}
        </div>
      </section>

      <HomeInspiration />

      <HomeProcessSteps />

      <HomeEditorialBand />

      <HomeWhyUs />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Featured deliveries"
            title="Homes handed over in Pune’s landmark societies"
            description="Representative scopes from Forest County, Gera World of Joy, VTP Leonara, Marvel Zephyr, Rohan Abhilasha, and more—each brief aligned to society norms, services, and how your family uses every square foot."
          />
          <Link
            href="/projects"
            className="inline-flex shrink-0 rounded-full border border-stone-300 px-5 py-2.5 text-sm font-semibold text-charcoal transition hover:border-wood-dark hover:text-wood-dark"
          >
            All projects
          </Link>
        </div>
        {/* Editorial showcase: one large lead image, then a supporting grid —
            photographs carry the section instead of nine equal cards. */}
        <div className="mt-12 grid gap-5 lg:grid-cols-12 lg:gap-6">
          <Reveal className="lg:col-span-7">
            <Link
              href="/projects"
              className="group relative block overflow-hidden rounded-3xl bg-stone-100"
            >
              <div className="relative aspect-[4/3] w-full lg:aspect-[16/13]">
                <Image
                  src={projects[0].image}
                  alt={projects[0].alt}
                  fill
                  className="object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
                  sizes="(max-width:1024px) 100vw, 58vw"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent p-6 pt-24 sm:p-8 sm:pt-28">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-cream/80">
                  {servicesMeta[projects[0].service].title} · {projects[0].area}
                </p>
                <p className="mt-2 max-w-lg text-balance font-display text-2xl leading-tight text-cream sm:text-3xl">
                  {projects[0].title}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cream">
                  Browse the portfolio
                  <span className="transition group-hover:translate-x-1" aria-hidden>
                    →
                  </span>
                </span>
              </div>
            </Link>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-5 lg:gap-6">
            {projects.slice(1, 5).map((p, i) => (
              <Reveal key={p.id} delay={(i + 1) * 80}>
                <Link
                  href="/projects"
                  className="group relative block h-full overflow-hidden rounded-2xl bg-stone-100"
                >
                  <div className="relative aspect-[4/3] w-full lg:h-full lg:aspect-auto lg:min-h-[168px]">
                    <Image
                      src={p.image}
                      alt={p.alt}
                      fill
                      className="object-cover transition duration-700 ease-out group-hover:scale-[1.05]"
                      sizes="(max-width:640px) 100vw, 28vw"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/85 to-transparent p-4 pt-12">
                    <p className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-cream/85">
                      {p.area}
                    </p>
                    <p className="mt-0.5 line-clamp-2 font-display text-sm leading-snug text-cream">
                      {p.title}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-stone-200 bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Testimonials"
            title="Reviews across interiors, paint, kitchens & more"
            description="Homeowners and a commercial client on full-home turnkey work, wall painting, modular kitchens, false ceilings, custom furniture, and office fit-outs in Pune."
            align="center"
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {testimonials.map((t, i) => (
              <Reveal key={t.id} delay={(i % 4) * 80}>
                <TestimonialCard {...t} showStars />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <SectionHeading
          eyebrow="Areas we serve"
          title="Interior designers across East Pune & beyond"
          description="Kharadi’s glass towers, Wagholi’s new possessions, Viman Nagar’s established societies—each area has its own light, layouts, and rules. Open your locality for services, landmarks, and FAQs written for your side of Pune."
        />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {AREAS.map((a) => (
            <li key={a.slug}>
              <Link
                href={`/interior-designer-in-${a.slug}`}
                className="group flex items-center justify-between gap-4 rounded-2xl border border-stone-200 bg-white px-5 py-4 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-wood-dark/60 hover:shadow-[0_16px_32px_-20px_rgba(28,25,23,0.25)]"
              >
                <span>
                  <span className="block text-sm font-semibold text-charcoal transition-colors group-hover:text-wood-dark">
                    {a.label}
                  </span>
                  <span className="mt-0.5 block text-xs text-stone-500">
                    Interior designer in {a.label}
                  </span>
                </span>
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-stone-200 text-sm text-stone-500 transition duration-300 group-hover:translate-x-1 group-hover:border-wood-dark group-hover:bg-wood-dark group-hover:text-cream"
                  aria-hidden
                >
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <HomeFaqSection />

      <section
        className="border-t border-stone-200 bg-cream py-16 sm:py-24"
        aria-labelledby="consult-heading"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-10">
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-wood-dark">
                Get started
              </p>
              <h2
                id="consult-heading"
                className="mt-3 font-display text-3xl tracking-tight text-charcoal sm:text-4xl"
              >
                Request a free consultation
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-stone-600 sm:text-base">
                Share your society, possession status, and what you want to tackle
                first—we&apos;ll call back to suggest the next step, whether that&apos;s
                a site visit in Pune or a quick estimate for a single scope.
              </p>
              <ul className="mt-8 space-y-3 text-sm text-stone-600">
                <li className="flex gap-2">
                  <span className="mt-0.5 text-wood-dark" aria-hidden>
                    ✓
                  </span>
                  <span>Same-day callback on most weekdays</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-0.5 text-wood-dark" aria-hidden>
                    ✓
                  </span>
                  <span>Transparent BOQ after measurements—not vague lump sums</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-0.5 text-wood-dark" aria-hidden>
                    ✓
                  </span>
                  <span>Homes and commercial spaces across East Pune</span>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-stone-200/80 bg-white p-1 shadow-[0_24px_60px_-28px_rgba(28,25,23,0.14)] sm:p-2 lg:max-w-xl lg:ml-auto">
                <LeadForm
                  source="homepage"
                  variant="flush"
                  className="rounded-2xl bg-cream/30 p-4 sm:p-6"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
