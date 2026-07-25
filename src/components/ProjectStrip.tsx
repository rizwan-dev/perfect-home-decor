import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import type { ProjectItem } from "@/lib/projects-data";

type Props = {
  projects: ProjectItem[];
  eyebrow?: string;
  title: string;
  description?: string;
  /** Cap the number of cards rendered (default 3). */
  limit?: number;
};

/**
 * Compact "recent work" band for service and locality pages — real delivered
 * projects double as local proof and internal links to /projects.
 */
export function ProjectStrip({
  projects,
  eyebrow = "Recent work",
  title,
  description,
  limit = 3,
}: Props) {
  const items = projects.slice(0, limit);
  if (items.length === 0) return null;

  return (
    <section className="border-t border-stone-200 bg-stone-50/70 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            description={description}
          />
          <Link
            href="/projects"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-stone-300 px-5 py-2.5 text-sm font-semibold text-charcoal transition hover:border-wood-dark hover:text-wood-dark"
          >
            All projects
            <span aria-hidden>→</span>
          </Link>
        </div>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p, i) => (
            <Reveal key={p.id} delay={i * 90}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
