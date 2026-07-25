import Image from "next/image";
import Link from "next/link";
import type { ServiceSlug } from "@/lib/services-data";
import { servicesMeta } from "@/lib/services-data";

export function ServiceCard({ slug }: { slug: ServiceSlug }) {
  const s = servicesMeta[slug];
  return (
    <Link
      href={`/services/${slug}`}
      className="group flex flex-col overflow-hidden rounded-3xl border border-stone-200/90 bg-white shadow-[0_1px_2px_rgba(28,25,23,0.04)] transition duration-300 hover:-translate-y-1 hover:border-stone-300 hover:shadow-[0_24px_48px_-24px_rgba(28,25,23,0.28)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
        <Image
          src={s.heroImage}
          alt={s.title}
          fill
          className="object-cover transition duration-700 ease-out group-hover:scale-[1.05]"
          sizes="(max-width:768px) 100vw, 33vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-charcoal/25 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100"
          aria-hidden
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl text-charcoal transition-colors group-hover:text-wood-dark">
          {s.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-600">
          {s.short}
        </p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-wood-dark">
          View details
          <span
            className="flex h-6 w-6 items-center justify-center rounded-full border border-wood/30 text-xs transition duration-300 group-hover:translate-x-1 group-hover:border-wood-dark group-hover:bg-wood-dark group-hover:text-cream"
            aria-hidden
          >
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
