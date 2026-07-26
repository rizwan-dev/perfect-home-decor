"use client";

import { useCallback, useState, useSyncExternalStore } from "react";

export type FaqItem = { q: string; a: string; id?: string };

type Props = {
  items: FaqItem[];
  className?: string;
  /** Kept for API compatibility with existing call sites. */
  accordionName?: string;
  /** Prefix for auto ids when item.id is missing */
  idPrefix?: string;
  /** Number the questions (1., 2., 3. …) as listing sites do. */
  numbered?: boolean;
};

function itemId(item: FaqItem, index: number, idPrefix?: string) {
  return item.id ?? (idPrefix ? `${idPrefix}-${index}` : `faq-${index}`);
}

const subscribeToHash = (onChange: () => void) => {
  window.addEventListener("hashchange", onChange);
  return () => window.removeEventListener("hashchange", onChange);
};
const readHash = () => window.location.hash.slice(1);
const noHash = () => "";

/** Current URL fragment, so /#faq-warranty lands with that row open. */
function useHash() {
  return useSyncExternalStore(subscribeToHash, readHash, noHash);
}

export function FaqAccordion({
  items,
  className = "",
  idPrefix,
  numbered = true,
}: Props) {
  // Single-open accordion. Answers stay in the DOM (collapsed via grid rows) so
  // they remain crawlable and consistent with the FAQPage structured data.
  //
  // The open row is derived from the URL fragment, and a click overrides it —
  // but only for that fragment, so a later deep link still wins.
  const hash = useHash();
  const [override, setOverride] = useState<{
    hash: string;
    index: number | null;
  } | null>(null);

  const fromHash = items.findIndex(
    (item, idx) => itemId(item, idx, idPrefix) === hash,
  );
  const open =
    override && override.hash === hash
      ? override.index
      : fromHash === -1
        ? null
        : fromHash;

  const toggle = useCallback(
    (index: number) =>
      setOverride({ hash, index: open === index ? null : index }),
    [hash, open],
  );

  return (
    <div className={`space-y-3 sm:space-y-4 ${className}`}>
      {items.map((item, index) => {
        const id = itemId(item, index, idPrefix);
        const isOpen = open === index;
        return (
          <div
            key={id}
            id={id}
            className={`scroll-mt-28 overflow-hidden rounded-xl bg-white transition-shadow duration-300 ${
              isOpen
                ? "shadow-[0_10px_30px_-18px_rgba(28,25,23,0.28)] ring-1 ring-stone-200"
                : "shadow-[0_1px_2px_rgba(28,25,23,0.05)] ring-1 ring-stone-200/70 hover:ring-stone-300"
            }`}
          >
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`${id}-panel`}
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left outline-none sm:px-8 sm:py-6 focus-visible:bg-stone-50"
              >
                <span className="min-w-0 flex-1 text-base font-medium leading-snug text-charcoal sm:text-[1.0625rem]">
                  {numbered ? (
                    <span className="text-charcoal">{index + 1}. </span>
                  ) : null}
                  {item.q}
                </span>
                {/* Bare plus that becomes a minus — no circle, as on listing sites. */}
                <span
                  className={`relative flex h-6 w-6 shrink-0 items-center justify-center text-stone-700 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden
                >
                  <span className="absolute h-[2px] w-5 rounded-full bg-current" />
                  <span
                    className={`absolute h-5 w-[2px] rounded-full bg-current transition-transform duration-300 ${
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
                  className={`max-w-3xl px-5 pb-6 text-sm leading-relaxed text-stone-600 transition-opacity duration-300 sm:px-8 sm:pb-7 sm:text-[0.9375rem] sm:leading-[1.75] ${
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
