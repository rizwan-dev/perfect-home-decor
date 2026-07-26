import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import {
  formatGoogleRating,
  getGooglePlaceReviewStats,
} from "@/lib/google-place-reviews";
import { COMPANY, SITE_URL } from "@/lib/site";

const heroImage = "/images/stock/open-plan-living-dining-interior-pune.webp";

export const metadata: Metadata = {
  title: "About us — Perfect Home Decor Pune",
  description: `${COMPANY.name}: ${COMPANY.yearsExperience}+ years in home & commercial interiors, ${COMPANY.projectsDelivered}+ projects delivered in Pune. Measured execution, transparent BOQs.`,
  alternates: { canonical: "/about" },
  openGraph: {
    url: `${SITE_URL}/about`,
    title: `About | ${COMPANY.name}`,
  },
};

export default async function AboutPage() {
  const googleStats = await getGooglePlaceReviewStats();

  return (
    <>
      <section className="relative overflow-hidden border-b border-stone-800 bg-stone-900">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="Spacious residential interior with natural light—design and execution by Perfect Home Decor"
            fill
            priority
            className="object-cover opacity-55"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-charcoal/[0.97] via-charcoal/88 to-charcoal/70" />
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_70%_20%,rgba(107,83,68,0.18),transparent_60%)]"
            aria-hidden
          />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cream/70">
            About {COMPANY.name}
          </p>
          <h1 className="mt-5 max-w-4xl font-display text-4xl leading-[1.08] tracking-tight text-cream sm:text-5xl lg:text-6xl lg:leading-[1.05]">
            A Pune interior design practice built for homes that have to work in
            the real world.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-cream/88 sm:text-xl">
            For more than a decade we have specialised in{" "}
            <span className="font-medium text-cream">home interiors</span>
            —turnkey apartments, modular kitchens, ceilings, paint, and custom
            woodwork—plus commercial fit-outs, with one accountable team from
            drawings to handover.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-cream px-8 py-3.5 text-sm font-semibold text-charcoal shadow-lg transition hover:bg-white"
            >
              Book a free site visit
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-full border border-cream/35 px-8 py-3.5 text-sm font-semibold text-cream transition hover:bg-white/10"
            >
              Explore delivered projects
            </Link>
          </div>

          <dl className="mt-16 grid gap-8 border-t border-white/15 pt-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            <div className="border-l border-cream/20 pl-6 lg:border-l-0 lg:pl-0 lg:pr-4">
              <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-cream/55">
                Experience
              </dt>
              <dd className="mt-2 font-display text-4xl tracking-tight text-cream sm:text-[2.75rem]">
                {COMPANY.yearsExperience}+
              </dd>
              <dd className="mt-1 text-sm text-cream/70">
                Years in home &amp; commercial interiors
              </dd>
            </div>
            <div className="border-l border-cream/20 pl-6 lg:border-l lg:border-white/15 lg:pl-8">
              <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-cream/55">
                Delivered
              </dt>
              <dd className="mt-2 font-display text-4xl tracking-tight text-cream sm:text-[2.75rem]">
                {COMPANY.projectsDelivered.toLocaleString("en-IN")}+
              </dd>
              <dd className="mt-1 text-sm text-cream/70">
                Projects completed across Pune
              </dd>
            </div>
            <div className="border-l border-cream/20 pl-6 lg:border-l lg:border-white/15 lg:pl-8">
              <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-cream/55">
                Communities
              </dt>
              <dd className="mt-2 font-display text-4xl tracking-tight text-cream sm:text-[2.75rem]">
                {COMPANY.landmarkCommunitiesServed}+
              </dd>
              <dd className="mt-1 text-sm text-cream/70">
                Towers &amp; gated societies served
              </dd>
            </div>
            <div className="border-l border-cream/20 pl-6 lg:border-l lg:border-white/15 lg:pl-8">
              <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-cream/55">
                Google
              </dt>
              <dd className="mt-2 font-display text-4xl tracking-tight text-cream sm:text-[2.75rem]">
                {formatGoogleRating(googleStats.rating)}★
              </dd>
              <dd className="mt-1 text-sm text-cream/70">
                {googleStats.userRatingsTotal.toLocaleString("en-IN")} reviews
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-14 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-24">
          <div className="relative order-2 aspect-[4/5] overflow-hidden rounded-3xl bg-stone-100 shadow-[0_24px_60px_-28px_rgba(28,25,23,0.25)] ring-1 ring-stone-900/[0.06] lg:order-1">
            <Image
              src="/images/stock/living-room-interior-warm-lighting-pune.webp"              alt="Materials, finishes, and interior design planning at Perfect Home Decor"
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-wood-dark">
              Our story
            </p>
            <h2 className="mt-4 font-display text-3xl tracking-tight text-charcoal sm:text-4xl">
              Design discipline, site discipline—same team.
            </h2>
            <p className="mt-6 text-base leading-[1.75] text-stone-600 sm:text-lg">
              {COMPANY.name} began because too many beautiful visuals never survived
              contact with Pune&apos;s sites—levels that did not match drawings,
              joints that telegraphed rush, and invoices that appeared after the
              fact. We built the studio the other way around:{" "}
              <span className="font-medium text-charcoal">
                documentation you can build from
              </span>
              , foremen who read it, and schedules that respect monsoons, MC rules,
              and how families actually live.
            </p>
            <p className="mt-5 text-base leading-[1.75] text-stone-600 sm:text-lg">
              Today we operate as a full design–build partner for East Pune and
              beyond—Kharadi, Magarpatta, Viman Nagar, Wagholi, Lohegaon, Kesnand,
              and the corridors between—with the depth to run turnkey homes and
              commercial spaces while keeping decisions clear and accountable.
            </p>
            <p className="mt-8 text-sm font-medium text-stone-500">
              Registered studio · {COMPANY.addressLocality}, {COMPANY.city}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-stone-50 to-cream/40 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-wood-dark">
              Why owners choose us
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-tight text-charcoal sm:text-4xl">
              The signals that matter after a decade on site
            </h2>
            <p className="mt-4 text-base leading-relaxed text-stone-600">
              From first sketch to snag list, we optimise for clarity, compliance,
              and finishes that age well in Pune&apos;s climate.
            </p>
          </div>
          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:gap-8">
            <li className="rounded-3xl border border-stone-200/90 bg-white p-8 shadow-[0_2px_24px_-18px_rgba(28,25,23,0.12)]">
              <div className="h-1 w-12 rounded-full bg-wood" aria-hidden />
              <h3 className="mt-6 font-display text-xl text-charcoal sm:text-2xl">
                Written BOQs—not verbal guesses
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-600 sm:text-base">
                Quantities and finishes are listed in writing before work starts,
                so you can compare quotes fairly, phase your spending, and never
                meet a surprise line item halfway through the job.
              </p>
            </li>
            <li className="rounded-3xl border border-stone-200/90 bg-white p-8 shadow-[0_2px_24px_-18px_rgba(28,25,23,0.12)]">
              <div className="h-1 w-12 rounded-full bg-wood" aria-hidden />
              <h3 className="mt-6 font-display text-xl text-charcoal sm:text-2xl">
                Society-ready from day one
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-600 sm:text-base">
                IDs, method statements, lift protection, and time windows—aligned
                with MC expectations in premium townships and high-rises across
                Pune.
              </p>
            </li>
            <li className="rounded-3xl border border-stone-200/90 bg-white p-8 shadow-[0_2px_24px_-18px_rgba(28,25,23,0.12)]">
              <div className="h-1 w-12 rounded-full bg-wood" aria-hidden />
              <h3 className="mt-6 font-display text-xl text-charcoal sm:text-2xl">
                After handover, we stay reachable
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-600 sm:text-base">
                Hardware tweaks and touch-ups in the settling-in weeks—because
                living in a space always teaches something the drawings could not.
              </p>
            </li>
            <li className="rounded-3xl border border-stone-200/90 bg-white p-8 shadow-[0_2px_24px_-18px_rgba(28,25,23,0.12)]">
              <div className="h-1 w-12 rounded-full bg-wood" aria-hidden />
              <h3 className="mt-6 font-display text-xl text-charcoal sm:text-2xl">
                Vetted Pune supply chain
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-600 sm:text-base">
                Stone, glass, hardware, and specialist contractors we have stress-tested
                on real sites—so your home is not where we experiment.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <CTASection />
    </>
  );
}
