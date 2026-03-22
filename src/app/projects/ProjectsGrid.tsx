"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
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

export function ProjectsGrid({ projects }: { projects: ProjectItem[] }) {
  const [filter, setFilter] = useState<(typeof allLabel) | ServiceSlug>(allLabel);

  const filtered = useMemo(() => {
    if (filter === allLabel) return projects;
    return projects.filter((p) => p.service === filter);
  }, [filter, projects]);

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
              onClick={() => setFilter(opt.value)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                selected
                  ? "bg-charcoal text-cream"
                  : "border border-stone-200 bg-white text-stone-700 hover:border-wood-dark"
              }`}
            >
              {opt.label}
            </button>
          );
        })}
      </div>
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
      {filtered.length === 0 ? (
        <p className="mt-12 text-center text-sm text-stone-500">
          No projects in this category yet.
        </p>
      ) : null}
    </div>
  );
}
