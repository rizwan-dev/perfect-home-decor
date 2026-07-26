import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { COMPANY, SITE_URL } from "@/lib/site";
import { blogPostingJsonLd, breadcrumbJsonLd } from "@/lib/json-ld";
import { blogPosts, getPostBySlug } from "@/lib/blog-data";
import {
  estimateReadMinutes,
  getRelatedPosts,
  slugifyHeading,
} from "@/lib/blog-utils";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    // Absolute so the site-wide "| Perfect Home Decor" suffix does not push
    // these long-tail titles past what search results display.
    title: { absolute: post.seoTitle ?? post.title },
    description: post.seoDescription ?? post.description,
    alternates: { canonical: `/blog/${slug}` },
    keywords: post.keywords,
    openGraph: {
      title: post.seoTitle ?? post.title,
      description: post.seoDescription ?? post.description,
      url: `${SITE_URL}/blog/${slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      images: [{ url: post.image, width: 1600, height: 900, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle ?? post.title,
      description: post.seoDescription ?? post.description,
      images: [post.image],
    },
  };
}

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(iso));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const readMinutes = estimateReadMinutes(post);
  const related = getRelatedPosts(post.slug, 3);

  return (
    <>
      <JsonLd
        data={blogPostingJsonLd({
          slug: post.slug,
          title: post.title,
          description: post.description,
          publishedAt: post.publishedAt,
          author: post.author,
          image: post.image,
          articleSection: post.category,
          keywords: post.keywords,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ])}
      />

      <article>
        <header className="relative border-b border-stone-200">
          <div className="relative mx-auto max-w-4xl px-4 pt-12 sm:px-6 sm:pt-16 lg:px-8 lg:pt-20">
            <nav className="text-xs font-medium tracking-wide text-stone-500">
              <Link href="/" className="transition hover:text-charcoal">
                Home
              </Link>
              <span className="mx-2 text-stone-300" aria-hidden>
                /
              </span>
              <Link href="/blog" className="transition hover:text-charcoal">
                Journal
              </Link>
              <span className="mx-2 text-stone-300" aria-hidden>
                /
              </span>
              <span className="line-clamp-1 text-charcoal">{post.category}</span>
            </nav>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-wood-dark">
              {post.category}
            </p>
            <h1 className="mt-3 font-display text-3xl leading-[1.12] tracking-tight text-charcoal sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              {post.title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-stone-600 sm:text-xl">
              {post.description}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-stone-200/90 pb-10 text-sm text-stone-500">
              <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
              <span className="text-stone-300" aria-hidden>
                ·
              </span>
              <span>{readMinutes} min read</span>
              <span className="text-stone-300" aria-hidden>
                ·
              </span>
              <span>{post.author}</span>
            </div>
          </div>
          <div className="relative mx-auto mt-2 max-w-5xl px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16">
            <div className="relative aspect-[21/9] min-h-[200px] overflow-hidden rounded-3xl bg-stone-200 shadow-[0_24px_60px_-28px_rgba(28,25,23,0.35)] ring-1 ring-stone-900/[0.06] sm:min-h-[280px] lg:aspect-[2.2/1]">
              <Image
                src={post.image}
                alt={post.title}
                fill
                fetchPriority="high"
                loading="eager"
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 1024px"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/25 via-transparent to-transparent"
                aria-hidden
              />
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_min(100%,16rem)] lg:gap-14 xl:gap-20">
            <div className="min-w-0">
              <nav
                className="mb-12 rounded-2xl border border-stone-200/90 bg-stone-50/80 p-5 sm:p-6 lg:hidden"
                aria-label="On this page"
              >
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-stone-500">
                  On this page
                </p>
                <ol className="mt-3 space-y-2 text-sm text-stone-600">
                  {post.sections.map((section, index) => (
                    <li key={section.heading}>
                      <a
                        href={`#${slugifyHeading(section.heading, index)}`}
                        className="transition hover:text-wood-dark"
                      >
                        {section.heading}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>

              <div className="max-w-none">
                {post.sections.map((section, index) => (
                  <section
                    key={section.heading}
                    id={slugifyHeading(section.heading, index)}
                    className="mb-14 scroll-mt-28 last:mb-0 sm:mb-16"
                  >
                    <h2 className="font-display text-2xl tracking-tight text-charcoal sm:text-[1.75rem]">
                      {section.heading}
                    </h2>
                    {section.paragraphs.map((para, i) => (
                      <p
                        key={i}
                        className="mt-5 text-[17px] leading-[1.75] text-stone-700 first:mt-4 sm:text-lg sm:leading-[1.72]"
                      >
                        {para}
                      </p>
                    ))}
                  </section>
                ))}
              </div>

              <aside className="mt-16 rounded-3xl border border-stone-200/90 bg-gradient-to-br from-cream/50 to-white px-6 py-8 sm:px-8 sm:py-10">
                <p className="font-display text-xl text-charcoal sm:text-2xl">
                  Plan your Pune home with us
                </p>
                <p className="mt-3 text-sm leading-relaxed text-stone-600 sm:text-base">
                  Studio at {COMPANY.address}. Call{" "}
                  <a
                    href={`tel:${COMPANY.phoneTel}`}
                    className="font-semibold text-wood-dark underline decoration-stone-300 underline-offset-2 hover:decoration-wood-dark"
                  >
                    {COMPANY.phoneDisplay}
                  </a>{" "}
                  or reach out for a free consultation and site visit.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/contact"
                    className="inline-flex justify-center rounded-full bg-charcoal px-7 py-3 text-sm font-semibold text-cream transition hover:bg-wood-dark"
                  >
                    Contact
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex justify-center rounded-full border border-stone-300 bg-white px-7 py-3 text-sm font-semibold text-charcoal transition hover:border-wood-dark"
                  >
                    Services
                  </Link>
                </div>
              </aside>
            </div>

            <aside className="mt-12 hidden lg:mt-0 lg:block" aria-label="Article outline">
              <div className="sticky top-28 rounded-2xl border border-stone-200/90 bg-white p-6 shadow-sm">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-stone-500">
                  On this page
                </p>
                <ul className="mt-4 space-y-3 border-t border-stone-100 pt-4 text-sm leading-snug text-stone-600">
                  {post.sections.map((section, index) => (
                    <li key={section.heading}>
                      <a
                        href={`#${slugifyHeading(section.heading, index)}`}
                        className="border-l-2 border-transparent pl-3 transition hover:border-wood/40 hover:text-wood-dark"
                      >
                        {section.heading}
                      </a>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/blog"
                  className="mt-6 inline-block text-sm font-semibold text-wood-dark"
                >
                  ← All articles
                </Link>
              </div>
            </aside>
          </div>
        </div>

        {related.length > 0 ? (
          <section
            className="border-t border-stone-200 bg-stone-50 py-14 sm:py-20"
            aria-label="Related articles"
          >
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <h2 className="font-display text-2xl text-charcoal sm:text-3xl">
                Related reading
              </h2>
              <ul className="mt-10 grid gap-8 sm:grid-cols-3">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link
                      href={`/blog/${r.slug}`}
                      className="group block rounded-2xl border border-stone-200/90 bg-white p-5 shadow-sm transition hover:border-stone-300 hover:shadow-md"
                    >
                      <p className="text-[0.65rem] font-semibold uppercase tracking-wider text-wood-dark">
                        {r.category}
                      </p>
                      <p className="mt-2 font-display text-lg leading-snug text-charcoal group-hover:text-wood-dark">
                        {r.title}
                      </p>
                      <p className="mt-2 line-clamp-2 text-sm text-stone-600">
                        {r.description}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ) : null}
      </article>

      <CTASection />
    </>
  );
}
