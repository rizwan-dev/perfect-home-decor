import Image from "next/image";
import type { ProjectItem } from "@/lib/projects-data";
import { servicesMeta } from "@/lib/services-data";

export function ProjectCard({ project }: { project: ProjectItem }) {
  const label = servicesMeta[project.service].title;
  return (
    <article className="group overflow-hidden rounded-3xl border border-stone-200/90 bg-white shadow-[0_1px_2px_rgba(28,25,23,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_rgba(28,25,23,0.28)]">
      <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
        <Image
          src={project.image}
          alt={project.alt}
          fill
          className="object-cover transition duration-700 ease-out group-hover:scale-[1.05]"
          sizes="(max-width:768px) 100vw, 33vw"
          loading="lazy"
        />
        <span className="absolute left-4 top-4 rounded-full bg-charcoal/70 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-cream backdrop-blur-sm">
          {project.area}
        </span>
      </div>
      <div className="p-5">
        <p className="text-xs font-medium uppercase tracking-wider text-wood-dark">
          {label}
        </p>
        <h3 className="mt-1.5 text-balance font-display text-lg leading-snug text-charcoal">
          {project.title}
        </h3>
      </div>
    </article>
  );
}
