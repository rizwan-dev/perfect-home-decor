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

export default async function HomePage() {
  const googleStats = await getGooglePlaceReviewStats();
  const heroImage =
    "/images/stock/hero-living-room.jpg";
  return (
    <>
      <JsonLd
        data={faqJsonLd(homeFaqForSchema(), { pageUrl: `${SITE_URL}/` })}
      />
      <section className="relative overflow-hidden bg-stone-900">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="Warm contemporary living room interior"
            fill
            priority
            className="object-cover opacity-60"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/75 to-charcoal/40" />
        </div>
        <div className="relative mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-center px-4 py-24 sm:px-6 lg:px-8">
          <p className="animate-fade-up text-xs font-semibold uppercase tracking-[0.25em] text-cream/80">
            Pune · Kharadi &amp; East Pune · {COMPANY.yearsExperience}+ years ·
            Turnkey interiors
          </p>
          <h1 className="animate-fade-up animate-delay-1 mt-4 max-w-3xl font-display text-4xl leading-[1.08] tracking-tight text-cream sm:text-5xl lg:text-[3.25rem] lg:leading-[1.06] xl:text-6xl">
            From possession to <em className="italic">housewarming</em>, the
            interiors your Pune home deserves.
          </h1>
          <p className="animate-fade-up animate-delay-2 mt-6 max-w-2xl text-base leading-relaxed text-cream/90 sm:text-lg">
            {COMPANY.name} designs and builds complete home interiors—modular
            kitchens, wardrobes, false ceilings, painting, and wallpaper—for
            families in Kharadi, Wagholi, Viman Nagar, Lohegaon, Magarpatta, and
            Kesnand. One team, one clear quotation, and one number that always
            picks up.
          </p>
          <div className="animate-fade-up animate-delay-2 mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-cream px-8 py-3.5 text-sm font-semibold text-charcoal shadow-lg transition hover:bg-white"
            >
              Book a free site visit
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-full border border-cream/40 px-8 py-3.5 text-sm font-semibold text-cream transition hover:bg-white/10"
            >
              View projects
            </Link>
          </div>
          <p className="animate-fade-up animate-delay-2 mt-6 text-sm text-cream/75">
            <a
              href={`tel:${COMPANY.phoneTel}`}
              className="font-medium text-cream underline-offset-4 transition hover:text-white hover:underline"
            >
              {COMPANY.phoneDisplay}
            </a>
            <span className="mx-2 text-cream/35" aria-hidden>
              ·
            </span>
            Same-day callback on weekdays
          </p>
          <dl className="animate-fade-up animate-delay-2 mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-white/20 pt-8 text-cream">
            <div>
              <dt className="text-xs uppercase tracking-wider text-cream/70">
                Clients
              </dt>
              <dd className="mt-1 font-display text-2xl">{COMPANY.happyClients}+</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-cream/70">
                Communities
              </dt>
              <dd className="mt-1 font-display text-2xl">
                {COMPANY.landmarkCommunitiesServed}+
              </dd>
              <dd className="mt-1 text-[11px] leading-tight text-cream/65 sm:text-xs">
                towers &amp; societies
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-cream/70">
                Google
              </dt>
              <dd className="mt-1 font-display text-2xl">
                {formatGoogleRating(googleStats.rating)}★
              </dd>
              <dd className="mt-1 text-[11px] leading-tight text-cream/65 sm:text-xs">
                {googleStats.userRatingsTotal.toLocaleString("en-IN")} reviews
              </dd>
            </div>
          </dl>
        </div>
      </section>

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

      <HomeProcessSteps />

      <HomeEditorialBand />

      <section className="border-y border-stone-200 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why Perfect Home Decor"
            title="The discipline of a large firm. The access of a dedicated studio."
            description="Structured design reviews, factory-checked modular units, and milestone billing like the national brands—paired with WhatsApp-first project leads who know your society’s lift bookings, work-hour rules, and handover checklists."
          />
          <ul className="mt-12 grid gap-6 sm:grid-cols-3">
            <li className="rounded-2xl border border-stone-200 bg-cream/40 p-6 shadow-sm">
              <div className="h-1 w-10 rounded-full bg-wood" aria-hidden />
              <h3 className="mt-4 font-display text-xl text-charcoal">
                Drawings before deposits
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                Layouts, elevations, and electrical points—so you buy what you
                have seen, not a vague scope.
              </p>
            </li>
            <li className="rounded-2xl border border-stone-200 bg-cream/40 p-6 shadow-sm">
              <div className="h-1 w-10 rounded-full bg-wood" aria-hidden />
              <h3 className="mt-4 font-display text-xl text-charcoal">
                Built for Pune’s climate
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                Finishes and hardware chosen for humidity, dust, and monsoon
                cycles—fewer callbacks after the first season.
              </p>
            </li>
            <li className="rounded-2xl border border-stone-200 bg-cream/40 p-6 shadow-sm">
              <div className="h-1 w-10 rounded-full bg-wood" aria-hidden />
              <h3 className="mt-4 font-display text-xl text-charcoal">
                Calm sites, clean handover
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                Protected floors, disciplined debris handling, and a final walk
                when the home is actually ready—not “almost.”
              </p>
            </li>
          </ul>
        </div>
      </section>

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
