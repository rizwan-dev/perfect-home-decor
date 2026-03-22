export type FaqItem = { q: string; a: string; id?: string };

type Props = {
  items: FaqItem[];
  className?: string;
  /** Shared name = exclusive open (one at a time) in supporting browsers */
  accordionName?: string;
  /** Prefix for auto ids when item.id is missing */
  idPrefix?: string;
};

function ExpandIcon({ className }: { className?: string }) {
  return (
    <span
      className={`relative block h-3.5 w-3.5 text-current ${className ?? ""}`}
      aria-hidden
    >
      <span className="absolute left-1/2 top-1/2 block h-0.5 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-current transition group-open:bg-wood-dark" />
      <span className="absolute left-1/2 top-1/2 block h-3 w-0.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-current transition group-open:scale-y-0 group-open:opacity-0" />
    </span>
  );
}

export function FaqAccordion({
  items,
  className = "",
  accordionName = "site-faq",
  idPrefix,
}: Props) {
  return (
    <div
      className={`overflow-hidden rounded-3xl border border-stone-200/70 bg-white shadow-[0_1px_2px_rgba(28,25,23,0.04),0_12px_40px_-24px_rgba(28,25,23,0.12)] ${className}`}
    >
      {items.map((item, index) => (
        <details
          key={item.id ?? item.q}
          id={
            item.id ??
            (idPrefix ? `${idPrefix}-${index}` : undefined)
          }
          name={accordionName}
          className="group scroll-mt-28 border-b border-stone-100 last:border-b-0 transition-colors open:bg-[linear-gradient(90deg,rgba(74,59,50,0.04)_0%,rgba(247,244,239,0.35)_8%,transparent_32%)]"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-6 py-5 text-left outline-none transition hover:bg-stone-50/80 sm:px-8 sm:py-5 [&::-webkit-details-marker]:hidden focus-visible:ring-2 focus-visible:ring-wood-dark/30 focus-visible:ring-inset">
            <span className="min-w-0 flex-1 pr-2 text-[15px] font-medium leading-snug tracking-tight text-charcoal sm:text-[1.05rem] sm:leading-snug">
              {item.q}
            </span>
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-stone-200/90 bg-stone-50/80 text-stone-500 transition duration-200 group-open:border-wood/25 group-open:bg-wood/10 group-open:text-wood-dark">
              <ExpandIcon />
            </span>
          </summary>
          <div className="px-6 pb-6 pt-0 sm:px-8 sm:pb-7">
            <div className="border-l-2 border-wood/35 pl-5 sm:pl-6">
              <p className="text-[15px] leading-[1.65] text-stone-600">{item.a}</p>
            </div>
          </div>
        </details>
      ))}
    </div>
  );
}
