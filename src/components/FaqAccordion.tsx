export type FaqItem = { q: string; a: string; id?: string };

type Props = {
  items: FaqItem[];
  className?: string;
  /** Shared name = exclusive open (one at a time) in supporting browsers */
  accordionName?: string;
  /** Prefix for auto ids when item.id is missing */
  idPrefix?: string;
};

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M5 7.5 10 12.5 15 7.5" />
    </svg>
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
      className={`divide-y divide-stone-200/80 border-y border-stone-200/80 ${className}`}
    >
      {items.map((item, index) => (
        <details
          key={item.id ?? item.q}
          id={
            item.id ?? (idPrefix ? `${idPrefix}-${index}` : undefined)
          }
          name={accordionName}
          className="group scroll-mt-28"
        >
          <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-left outline-none transition-colors [&::-webkit-details-marker]:hidden focus-visible:ring-2 focus-visible:ring-charcoal/15 focus-visible:ring-offset-2">
            <span className="min-w-0 flex-1 pt-0.5 text-[0.9375rem] font-normal leading-snug tracking-tight text-charcoal sm:text-base">
              {item.q}
            </span>
            <span
              className="mt-1 shrink-0 text-stone-400 transition-transform duration-200 ease-out group-open:rotate-180"
              aria-hidden
            >
              <ChevronDown className="h-4 w-4" />
            </span>
          </summary>
          <div className="pb-6">
            <p className="max-w-2xl text-sm leading-relaxed text-stone-500 sm:text-[0.9375rem] sm:leading-relaxed">
              {item.a}
            </p>
          </div>
        </details>
      ))}
    </div>
  );
}
