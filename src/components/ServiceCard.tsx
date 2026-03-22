import Image from "next/image";
import Link from "next/link";
import type { ServiceSlug } from "@/lib/services-data";
import { servicesMeta } from "@/lib/services-data";

export function ServiceCard({ slug }: { slug: ServiceSlug }) {
  const s = servicesMeta[slug];
  return (
    <Link
      href={`/services/${slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
        <Image
          src={s.heroImage}
          alt={s.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
          sizes="(max-width:768px) 100vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-xl text-charcoal group-hover:text-wood-dark">
          {s.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-600">
          {s.short}
        </p>
        <span className="mt-4 inline-flex items-center text-sm font-semibold text-wood-dark">
          View details
          <span className="ml-1 transition group-hover:translate-x-0.5">→</span>
        </span>
      </div>
    </Link>
  );
}
