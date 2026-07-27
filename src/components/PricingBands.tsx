import Link from "next/link";
import {
  COMPLETE_HOME_PRICING,
  PRICING_NOTE,
  PRICING_SCOPE,
} from "@/lib/pricing-data";

/**
 * Published cost ranges, shared by the interior-design service page and every
 * locality landing page.
 *
 * "Interior design cost in <area>" is one of the highest-intent searches in this
 * trade and almost nobody answers it with a number. Publishing one is worth more
 * than another paragraph of reassurance.
 */
export function PricingBands({
  areaLabel,
  className = "",
}: {
  /** Locality name, when this is shown on an area page. */
  areaLabel?: string;
  className?: string;
}) {
  return (
    <section className={className}>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-wood-dark">
        What it costs
      </p>
      <h2 className="mt-3 text-balance font-display text-3xl tracking-tight text-charcoal sm:text-4xl">
        {areaLabel
          ? `Home interior cost in ${areaLabel}`
          : "What a complete home interior costs"}
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-stone-600">
        {PRICING_SCOPE}
      </p>

      <dl className="mt-8 grid gap-3 sm:grid-cols-2 lg:gap-4">
        {COMPLETE_HOME_PRICING.map((band) => (
          <div
            key={band.label}
            className="flex items-baseline justify-between gap-4 rounded-2xl border border-stone-200/90 bg-white px-5 py-4 shadow-[0_1px_2px_rgba(28,25,23,0.04)]"
          >
            <dt className="text-sm font-semibold text-charcoal">
              {band.label}
            </dt>
            <dd className="font-display text-xl text-wood-dark sm:text-2xl">
              {band.range}
            </dd>
          </div>
        ))}
      </dl>

      <p className="mt-6 max-w-3xl text-sm leading-relaxed text-stone-600">
        {PRICING_NOTE}
      </p>

      <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-full bg-charcoal px-7 py-3.5 text-sm font-semibold text-cream transition hover:-translate-y-0.5 hover:bg-wood-dark"
        >
          Get an itemised quote
        </Link>
        <Link
          href="/blog/home-interior-design-kharadi-2bhk-3bhk-guide"
          className="inline-flex items-center justify-center rounded-full border border-stone-300 px-7 py-3.5 text-sm font-semibold text-charcoal transition hover:border-wood-dark hover:text-wood-dark"
        >
          How we arrive at the number
        </Link>
      </div>
    </section>
  );
}
