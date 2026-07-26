"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { COMPANY } from "@/lib/site";

export type HeroSlide = {
  src: string;
  alt: string;
  /** Two short lines — the image should carry the section, not the copy. */
  headline: string;
  accent: string;
  kicker: string;
};

const AUTO_MS = 5500;

function IconPhone({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  );
}

export function HomeHeroSlider({
  slides,
  ratingLabel,
  reviewCount,
}: {
  slides: HeroSlide[];
  ratingLabel: string;
  reviewCount: number;
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  // The non-active slides are absolutely positioned inside the viewport, so
  // `loading="lazy"` doesn't hold them back — the browser fetched all four
  // during the LCP window. They now mount only once the slider first moves,
  // which is after first paint either way.
  const [warm, setWarm] = useState(false);
  const regionRef = useRef<HTMLDivElement>(null);

  const go = useCallback(
    (delta: number) => {
      setWarm(true);
      setIndex((i) => (i + delta + slides.length) % slides.length);
    },
    [slides.length],
  );

  const select = useCallback((i: number) => {
    setWarm(true);
    setIndex(i);
  }, []);

  // Auto-advance, paused on hover/focus and for reduced-motion users.
  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => go(1), AUTO_MS);
    return () => clearInterval(t);
  }, [paused, go]);

  // Arrow keys work once the slider has focus.
  useEffect(() => {
    const el = regionRef.current;
    if (!el) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
    };
    el.addEventListener("keydown", onKey);
    return () => el.removeEventListener("keydown", onKey);
  }, [go]);

  const active = slides[index];

  return (
    <section
      ref={regionRef}
      tabIndex={-1}
      aria-roledescription="carousel"
      aria-label="Featured interior projects"
      className="relative isolate overflow-hidden bg-charcoal"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {/* Slides: all rendered, cross-faded, so the photograph reads first. */}
      <div className="absolute inset-0">
        {slides.map((s, i) => (
          <div
            key={s.src}
            aria-hidden={i !== index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          >
            {i === 0 || warm ? (
              <Image
                src={s.src}
                alt={s.alt}
                fill
                priority={i === 0}
                loading={i === 0 ? undefined : "lazy"}
                className={`object-cover ${i === index ? "hero-kenburns" : ""}`}
                sizes="100vw"
              />
            ) : null}
          </div>
        ))}
        {/* Lighter scrim than before so the room stays visible behind the text. */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/45 to-charcoal/15" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-charcoal/75 to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-[74vh] max-w-6xl flex-col justify-center px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-cream/75 sm:text-xs">
          {active.kicker}
        </p>
        {/* One tight line + italic accent. No paragraph competing with the photo. */}
        <h1 className="mt-5 max-w-2xl font-display text-4xl leading-[1.06] tracking-tight text-cream sm:text-5xl lg:text-6xl">
          {active.headline}{" "}
          <em className="italic text-cream">{active.accent}</em>
        </h1>
        <p className="mt-6 max-w-md text-base leading-relaxed text-cream/85">
          Interior design, modular kitchens, false ceilings &amp; painting across
          East Pune.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-cream px-8 py-3.5 text-sm font-semibold text-charcoal shadow-lg transition hover:-translate-y-0.5 hover:bg-white"
          >
            Book a free site visit
          </Link>
          {/* Solid fill + icon: reads as a tap-to-call action, not a label.
              Shown from `md` up, matching StickyMobileBar's `md:hidden` — below
              that the sticky bar pins its own Call button to the viewport, so
              this would be the same action twice. The two breakpoints must stay
              in sync or tablets get the duplicate back. */}
          <a
            href={`tel:${COMPANY.phoneTel}`}
            aria-label={`Call ${COMPANY.phoneDisplay}`}
            className="group/call hidden items-center justify-center gap-2.5 rounded-full bg-wood-dark px-8 py-3.5 text-sm font-semibold text-cream shadow-lg transition duration-200 hover:-translate-y-0.5 hover:bg-wood active:translate-y-0 md:inline-flex"
          >
            <IconPhone className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover/call:-rotate-12" />
            Call now
          </a>
        </div>

        <p className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-cream/80">
          <span className="tracking-[0.1em] text-amber-400" aria-hidden>
            ★★★★★
          </span>
          <span>
            {ratingLabel} on Google · {reviewCount.toLocaleString("en-IN")} reviews
          </span>
          {/* Hidden on mobile, where the line wraps and leaves the divider
              dangling at the end of the first row. */}
          <span className="hidden text-cream/30 sm:inline" aria-hidden>
            |
          </span>
          <span>{COMPANY.yearsExperience}+ years in Pune</span>
        </p>
      </div>

      {/* Dots: round and centred along the bottom edge */}
      <div
        className="absolute inset-x-0 bottom-6 z-10 flex items-center justify-center gap-1"
        role="tablist"
        aria-label="Choose slide"
      >
        {slides.map((s, i) => (
          <button
            key={s.src}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Slide ${i + 1}: ${s.kicker}`}
            onClick={() => select(i)}
            /* 10px dot, 44px tap target. The padding is transparent, so this
               is identical visually but passes the 24px minimum — the dots were
               the only failing touch target on the page. */
            className="group/dot flex h-6 w-6 items-center justify-center"
          >
            <span
              className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                i === index
                  ? "scale-110 bg-cream ring-2 ring-cream/35 ring-offset-0"
                  : "bg-cream/45 group-hover/dot:bg-cream/75"
              }`}
            />
          </button>
        ))}
      </div>

      {/* Arrows: vertically centred on the left and right edges */}
      <button
        type="button"
        onClick={() => go(-1)}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-charcoal shadow-lg transition hover:scale-105 hover:bg-white sm:flex lg:left-6"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 5l-7 7 7 7" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => go(1)}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-charcoal shadow-lg transition hover:scale-105 hover:bg-white sm:flex lg:right-6"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  );
}
