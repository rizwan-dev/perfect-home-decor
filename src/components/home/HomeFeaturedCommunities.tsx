import { FEATURED_COMMUNITIES } from "@/lib/featured-communities";

const pillClass =
  "inline-flex rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1.5 text-xs font-medium text-cream/90 backdrop-blur-sm sm:px-4 sm:text-sm";

export function HomeFeaturedCommunities() {
  return (
    <section
      className="border-b border-stone-800 bg-charcoal py-10 text-cream sm:py-12"
      aria-label="Communities where we have delivered interiors"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-cream/55">
          Landmark towers &amp; gated communities
        </p>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-relaxed text-cream/75">
          From Kharadi’s high-rises to Wagholi, Lohegaon, and Magarpatta—repeat
          mandates in societies where approvals, services, and timelines matter.
        </p>
        <ul className="mt-8 flex flex-wrap justify-center gap-2.5 sm:gap-3">
          {FEATURED_COMMUNITIES.map((name) => (
            <li key={name}>
              <span className={pillClass}>{name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
