"use client";

import Image from "next/image";
import { useCallback, useEffect } from "react";

export type LightboxItem = {
  image: string;
  alt: string;
  title: string;
  meta?: string;
};

type Props = {
  items: LightboxItem[];
  index: number | null;
  onClose: () => void;
  onIndexChange: (index: number) => void;
};

/**
 * Full-screen image viewer for portfolio browsing — arrow/escape keys, click
 * outside to close, and body scroll locked while open.
 */
export function Lightbox({ items, index, onClose, onIndexChange }: Props) {
  const open = index !== null;

  const step = useCallback(
    (delta: number) => {
      if (index === null) return;
      onIndexChange((index + delta + items.length) % items.length);
    },
    [index, items.length, onIndexChange],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose, step]);

  if (index === null) return null;
  const item = items[index];
  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      className="fixed inset-0 z-[100] flex flex-col bg-charcoal/95 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="flex items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-cream/60">
          {index + 1} / {items.length}
        </p>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close image viewer"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/25 text-cream transition hover:bg-cream/10"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.75} aria-hidden>
            <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>

      <div
        className="relative flex min-h-0 flex-1 items-center justify-center px-2 sm:px-16"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => step(-1)}
          aria-label="Previous image"
          className="absolute left-1 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-cream/25 bg-charcoal/50 text-cream transition hover:bg-cream/15 sm:left-4"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.75} aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 5l-7 7 7 7" />
          </svg>
        </button>

        <div className="relative h-full w-full max-w-5xl">
          <Image
            key={item.image}
            src={item.image}
            alt={item.alt}
            fill
            className="object-contain"
            sizes="100vw"
            priority
          />
        </div>

        <button
          type="button"
          onClick={() => step(1)}
          aria-label="Next image"
          className="absolute right-1 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-cream/25 bg-charcoal/50 text-cream transition hover:bg-cream/15 sm:right-4"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.75} aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="px-4 pb-6 pt-4 text-center sm:px-6" onClick={(e) => e.stopPropagation()}>
        <p className="font-display text-lg text-cream sm:text-xl">{item.title}</p>
        {item.meta ? (
          <p className="mt-1 text-xs uppercase tracking-[0.16em] text-cream/55">
            {item.meta}
          </p>
        ) : null}
      </div>
    </div>
  );
}
