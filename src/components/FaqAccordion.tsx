"use client";

import { useEffect, useState } from "react";

export type FaqItem = { q: string; a: string; id?: string };

type Props = {
  items: FaqItem[];
  className?: string;
  /** Kept for API compatibility with existing call sites. */
  accordionName?: string;
  /** Prefix for auto ids when item.id is missing */
  idPrefix?: string;
};

function itemId(item: FaqItem, index: number, idPrefix?: string) {
  return item.id ?? (idPrefix ? `${idPrefix}-${index}` : `faq-${index}`);
}

export function FaqAccordion({ items, className = "", idPrefix }: Props) {
  // Single-open accordion. Answers stay in the DOM (collapsed via grid rows) so
  // they remain crawlable and consistent with the FAQPage structured data.
  const [open, setOpen] = useState<number | null>(null);

  // Deep links like /#faq-warranty-support should land with that row open.
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;
    const i = items.findIndex((item, idx) => itemId(item, idx, idPrefix) === hash);
    if (i !== -1) setOpen(i);
  }, [items, idPrefix]);

  return (
    <div
      className={`overflow-hidden rounded-2xl border border-stone-200/90 bg-white ${className}`}
    >
      {items.map((item, index) => {
        const id = itemId(item, index, idPrefix);
        const isOpen = open === index;
        return (
          <div
            key={id}
            id={id}
            className="scroll-mt-28 border-b border-stone-200/80 last:border-b-0"
          >
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`${id}-panel`}
                onClick={() => setOpen(isOpen ? null : index)}
                className={`flex w-full items-center justify-between gap-5 px-5 py-5 text-left outline-none transition-colors sm:px-7 sm:py-6 ${
                  isOpen ? "bg-cream/40" : "hover:bg-stone-50/70"
                } focus-visible:bg-stone-50`}
              >
                <span className="min-w-0 flex-1 text-[0.9375rem] font-medium leading-snug tracking-tight text-charcoal sm:text-[1.0625rem]">
                  {item.q}
                </span>
                {/* Plus that becomes a minus — the affordance customers expect. */}
                <span
                  className={`relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition duration-300 sm:h-9 sm:w-9 ${
                    isOpen
                      ? "rotate-180 border-wood-dark bg-wood-dark text-cream"
                      : "border-stone-300 text-charcoal"
                  }`}
                  aria-hidden
                >
                  <span className="absolute h-[1.5px] w-3.5 rounded bg-current sm:w-4" />
                  <span
                    className={`absolute h-3.5 w-[1.5px] rounded bg-current transition duration-300 sm:h-4 ${
                      isOpen ? "scale-y-0" : "scale-y-100"
                    }`}
                  />
                </span>
              </button>
            </h3>
            {/* 0fr -> 1fr animates height without measuring the content. */}
            <div
              id={`${id}-panel`}
              role="region"
              aria-labelledby={id}
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p
                  className={`max-w-2xl px-5 pb-6 text-sm leading-relaxed text-stone-600 transition-opacity duration-300 sm:px-7 sm:pb-7 sm:text-[0.9375rem] sm:leading-[1.75] ${
                    isOpen ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
