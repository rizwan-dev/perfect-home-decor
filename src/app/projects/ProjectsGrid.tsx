"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Lightbox } from "@/components/Lightbox";
import type { ProjectItem } from "@/lib/projects-data";
import { SERVICE_SLUGS, servicesMeta, type ServiceSlug } from "@/lib/services-data";

const allLabel = "All";

const filterOptions: { value: typeof allLabel | ServiceSlug; label: string }[] =
  [
    { value: allLabel, label: "All" },
    ...SERVICE_SLUGS.map((slug) => ({
      value: slug,
      label: servicesMeta[slug].title,
    })),
  ];

/** Varied aspect ratios give the masonry columns an editorial rhythm. */
const ratios = [
  "aspect-[4/5]",
  "aspect-[4/3]",
  "aspect-[1/1]",
  "aspect-[3/4]",
  "aspect-[4/3]",
  "aspect-[5/6]",
];

export function ProjectsGrid({ projects }: { projects: ProjectItem[] }) {
  const [filter, setFilter] = useState<(typeof allLabel) | ServiceSlug>(allLabel);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filtered = useMemo(() => {
    if (filter === allLabel) return projects;
    return projects.filter((p) => p.service === filter);
  }, [filter, projects]);

  const lightboxItems = useMemo(
    () =>
      filtered.map((p) => ({
        image: p.image,
        alt: p.alt,
        title: p.title,
        meta: `${servicesMeta[p.service].title} · ${p.area}`,
      })),
    [filtered],
  );

  return (
    <div>
      <div
        className="flex flex-wrap gap-2"
        role="tablist"
        aria-label="Filter by service"
      >
        {filterOptions.map((opt) => {
          const selected = filter === opt.value;
          return (
            <button
              key={opt.value}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => {
                setFilter(opt.value);
                setOpenIndex(null);
              }}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                selected
                  ? "bg-charcoal text-cream shadow-sm"
                  : "border border-stone-200 bg-white text-stone-700 hover:border-wood-dark hover:text-wood-dark"
              }`}
            >
              {opt.label}
            </button>
          );
        })}
      </div>

      <p className="mt-6 text-sm text-stone-500">
        {filtered.length} {filtered.length === 1 ? "project" : "projects"}
        <span className="mx-2 text-stone-300" aria-hidden>
          ·
        </span>
        Tap any photo to view it full screen
      </p>

      {/* True masonry via CSS columns — photographs set their own height. */}
      <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3 lg:gap-6">
        {filtered.map((p, i) => (
          <figure
            key={p.id}
            className="mb-5 break-inside-avoid lg:mb-6"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(i)}
              aria-label={`View ${p.title} full screen`}
              className="group relative block w-full overflow-hidden rounded-2xl bg-stone-100 text-left outline-none ring-offset-2 focus-visible:ring-2 focus-visible:ring-wood-dark"
            >
              <div className={`relative w-full ${ratios[i % ratios.length]}`}>
                <Image
                  src={p.image}
                  alt={p.alt}
                  fill
                  className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                  loading={i < 6 ? "eager" : "lazy"}
                />
              </div>
              {/* Caption lives over the photograph — portfolio, not catalogue. */}
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/85 via-charcoal/25 to-transparent p-5 pt-16 opacity-0 transition duration-300 group-hover:opacity-100"
                aria-hidden
              >
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-cream/80">
                  {servicesMeta[p.service].title} · {p.area}
                </p>
                <p className="mt-1 font-display text-lg leading-snug text-cream">
                  {p.title}
                </p>
              </div>
              <span
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-charcoal/45 text-cream opacity-0 backdrop-blur-sm transition duration-300 group-hover:opacity-100"
                aria-hidden
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.75}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 3h6v6M9 21H3v-6M21 3l-8 8M3 21l8-8" />
                </svg>
              </span>
            </button>
            {/* Always-visible caption for touch users and screen readers. */}
            <figcaption className="mt-3 px-1">
              <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-wood-dark">
                <span>
                  {servicesMeta[p.service].title} · {p.area}
                </span>
                {p.recent ? (
                  <span className="rounded-full bg-wood-dark/10 px-2 py-0.5 tracking-[0.1em] text-wood-dark">
                    Recently completed
                  </span>
                ) : null}
              </p>
              <p className="mt-1 text-balance font-display text-base leading-snug text-charcoal">
                {p.title}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-12 text-center text-sm text-stone-500">
          No projects in this category yet.
        </p>
      ) : null}

      <Lightbox
        items={lightboxItems}
        index={openIndex}
        onClose={() => setOpenIndex(null)}
        onIndexChange={setOpenIndex}
      />
    </div>
  );
}
