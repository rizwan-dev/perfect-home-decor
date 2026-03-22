import Image from "next/image";
import type { ProjectItem } from "@/lib/projects-data";
import { servicesMeta } from "@/lib/services-data";

export function ProjectCard({ project }: { project: ProjectItem }) {
  const label = servicesMeta[project.service].title;
  return (
    <article className="group overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
      <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
        <Image
          src={project.image}
          alt={project.alt}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
          sizes="(max-width:768px) 100vw, 33vw"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <p className="text-xs font-medium uppercase tracking-wider text-wood-dark">
          {label} · {project.area}
        </p>
        <h3 className="mt-1 text-balance font-display text-lg leading-snug text-charcoal">
          {project.title}
        </h3>
      </div>
    </article>
  );
}
