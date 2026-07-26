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
  const regionRef = useRef<HTMLDivElement>(null);

  const go = useCallback(
    (delta: number) => setIndex((i) => (i + delta + slides.length) % slides.length),
    [slides.length],
  );

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
            <Image
              src={s.src}
              alt={s.alt}
              fill
              priority={i === 0}
              loading={i === 0 ? undefined : "lazy"}
              className={`object-cover ${i === index ? "hero-kenburns" : ""}`}
              sizes="100vw"
            />
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
          <a
            href={`tel:${COMPANY.phoneTel}`}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/45 px-8 py-3.5 text-sm font-semibold text-cream backdrop-blur-sm transition hover:bg-white/10"
          >
            {COMPANY.phoneDisplay}
          </a>
        </div>

        <p className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-cream/80">
          <span className="tracking-[0.1em] text-amber-400" aria-hidden>
            ★★★★★
          </span>
          <span>
            {ratingLabel} on Google · {reviewCount.toLocaleString("en-IN")} reviews
          </span>
          <span className="text-cream/30" aria-hidden>
            |
          </span>
          <span>{COMPANY.yearsExperience}+ years in Pune</span>
        </p>
      </div>

      {/* Controls */}
      <div className="absolute inset-x-0 bottom-6 z-10 mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2.5" role="tablist" aria-label="Choose slide">
          {slides.map((s, i) => (
            <button
              key={s.src}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Slide ${i + 1}: ${s.kicker}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-8 bg-cream" : "w-4 bg-cream/40 hover:bg-cream/70"
              }`}
            />
          ))}
        </div>
        <div className="hidden items-center gap-2 sm:flex">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous slide"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/30 text-cream backdrop-blur-sm transition hover:bg-cream/15"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.75} aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 5l-7 7 7 7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next slide"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/30 text-cream backdrop-blur-sm transition hover:bg-cream/15"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.75} aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
