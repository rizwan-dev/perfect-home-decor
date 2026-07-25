import { COMPANY } from "@/lib/site";

type Props = {
  googleRatingLabel: string;
  googleReviewCount: number;
};

export function HomeTrustStrip({
  googleRatingLabel,
  googleReviewCount,
}: Props) {
  const items = [
    {
      label: "Free site visit & consultation",
      sub: "Same-day callbacks · Pune-wide",
    },
    {
      label: "Design–build with signed-off BOQs",
      sub: "Milestones for civil, MEP & finishes",
    },
    {
      label: `${COMPANY.happyClients}+ homes delivered`,
      sub: `${COMPANY.landmarkCommunitiesServed}+ communities & towers`,
    },
    {
      label: `${googleRatingLabel} on Google`,
      sub: `${googleReviewCount.toLocaleString("en-IN")} reviews`,
    },
  ];

  return (
    <section
      className="border-b border-stone-200/80 bg-white"
      aria-label="Why homeowners choose us"
    >
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {items.map((item, i) => (
            <li
              key={item.label}
              className={`flex gap-3 border-l-2 border-wood/40 pl-4 lg:border-l-0 lg:pl-0 ${
                i > 0 ? "lg:border-l lg:border-stone-200 lg:pl-8" : ""
              }`}
            >
              <span
                className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cream text-[10px] font-bold text-wood-dark"
                aria-hidden
              >
                ✓
              </span>
              <div>
                <p className="text-sm font-semibold leading-snug text-charcoal">
                  {item.label}
                </p>
                <p className="mt-0.5 text-xs text-stone-500">{item.sub}</p>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-7 border-t border-stone-100 pt-5 text-center text-xs leading-relaxed text-stone-500">
          <span className="font-semibold uppercase tracking-[0.14em] text-stone-400">
            Materials we specify
          </span>
          <span className="mx-2 text-stone-300" aria-hidden>
            —
          </span>
          Asian Paints &amp; Berger paint systems · Gyproc ceilings · branded
          boards &amp; hardware, documented in your BOQ
        </p>
      </div>
    </section>
  );
}
