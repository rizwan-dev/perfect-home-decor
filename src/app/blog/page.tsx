import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/json-ld";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { COMPANY, SITE_URL } from "@/lib/site";
import { blogPosts } from "@/lib/blog-data";
import { estimateReadMinutes } from "@/lib/blog-utils";

export const metadata: Metadata = {
  title: "Interior design blog — guides for Pune homes",
  description: `Expert guides on home interior design, painting, modular kitchens, false ceilings, waterproofing, bedrooms, kids’ rooms & more from ${COMPANY.name}. Practical advice for Wagholi, Kharadi, Magarpatta & East Pune.`,
  alternates: { canonical: "/blog" },
  keywords: [
    "interior design blog Pune",
    "home interior tips",
    "modular kitchen guide",
    "false ceiling POP Pune",
    "home painting guide",
  ],
  openGraph: {
    url: `${SITE_URL}/blog`,
    title: `Journal | ${COMPANY.name}`,
    description: `Design & execution guides for Pune homeowners.`,
  },
};

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(iso));
}

const heroImage =
  "/images/stock/hallway-open-plan.jpg";

export default function BlogIndexPage() {
  const sorted = [...blogPosts].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />
      <section className="relative overflow-hidden border-b border-stone-200">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="Refined residential interior — editorial journal"
            fill
            priority
            className="object-cover opacity-40"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-50/95 via-stone-50/90 to-stone-50" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <nav className="text-xs font-medium tracking-wide text-stone-500">
            <Link href="/" className="transition hover:text-charcoal">
              Home
            </Link>
            <span className="mx-2 text-stone-300" aria-hidden>
              /
            </span>
            <span className="text-charcoal">Journal</span>
          </nav>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-wood-dark">
            Perfect Home Decor
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl leading-[1.1] tracking-tight text-charcoal sm:text-5xl lg:text-[3.25rem]">
            Ideas for homes that have to work in the real world
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-stone-600 sm:text-lg">
            Long-form guides on interiors, painting, kitchens, ceilings,
            waterproofing, and room-by-room planning—written from Pune sites, not
            generic décor templates.
          </p>
        </div>
      </section>

      <section className="border-b border-stone-200 bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-wood-dark">
                Library
              </p>
              <h2 className="mt-2 font-display text-2xl text-charcoal sm:text-3xl">
                {sorted.length} articles
              </h2>
            </div>
            <p className="max-w-md text-sm text-stone-500">
              New pieces are added when we see the same questions repeating on
              site walks across Wagholi, Kharadi, and neighbouring markets.
            </p>
          </div>

          <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-2 lg:gap-10 xl:grid-cols-2">
            {sorted.map((post) => {
              const minutes = estimateReadMinutes(post);
              return (
                <li key={post.slug}>
                  <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-stone-200/90 bg-stone-50/50 shadow-[0_2px_24px_-18px_rgba(28,25,23,0.12)] transition hover:border-stone-300/90 hover:shadow-[0_20px_50px_-28px_rgba(28,25,23,0.18)]">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="relative aspect-[16/10] overflow-hidden bg-stone-200"
                    >
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-[1.03]"
                        sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 40vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent opacity-80" />
                      <span className="absolute left-5 top-5 rounded-full bg-white/95 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-wood-dark ring-1 ring-stone-200/80">
                        {post.category}
                      </span>
                    </Link>
                    <div className="flex flex-1 flex-col p-6 sm:p-7">
                      <p className="text-xs font-medium text-stone-500">
                        {formatDate(post.publishedAt)}
                        <span className="mx-2 text-stone-300" aria-hidden>
                          ·
                        </span>
                        {minutes} min read
                      </p>
                      <h3 className="mt-3 font-display text-xl leading-snug tracking-tight text-charcoal sm:text-[1.35rem]">
                        <Link
                          href={`/blog/${post.slug}`}
                          className="transition hover:text-wood-dark"
                        >
                          {post.title}
                        </Link>
                      </h3>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-stone-600">
                        {post.description}
                      </p>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-wood-dark transition group-hover:gap-2"
                      >
                        Read article
                        <span aria-hidden>→</span>
                      </Link>
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <CTASection />
    </>
  );
}
