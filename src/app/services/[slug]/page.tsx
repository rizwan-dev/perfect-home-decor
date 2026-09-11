import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/CTASection";
import { FaqAccordion } from "@/components/FaqAccordion";
import { HomeCostCalculator } from "@/components/HomeCostCalculator";
import { ProjectStrip } from "@/components/ProjectStrip";
import { Reveal } from "@/components/Reveal";
import { PricingBands } from "@/components/PricingBands";
import { projects } from "@/lib/projects-data";
import { SERVICE_OG, ogImages } from "@/lib/og-image";
import { serviceDetail } from "@/lib/services-detail-data";
import { SERVICE_GUIDES } from "@/lib/service-guides";
import { blogPosts } from "@/lib/blog-data";
import { JsonLd } from "@/components/JsonLd";
import { LeadForm } from "@/components/LeadForm";
import { SectionHeading } from "@/components/SectionHeading";
import { AREAS, COMPANY, SITE_URL } from "@/lib/site";
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from "@/lib/json-ld";
import {
  SERVICE_SLUGS,
  type ServiceSlug,
  servicePageCopy,
  servicesMeta,
} from "@/lib/services-data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (!isServiceSlug(slug)) return {};
  const s = servicesMeta[slug];
  const url = `${SITE_URL}/services/${slug}`;
  return {
    title: `${s.title} in Pune`,
    description: s.metaDescription ?? s.short,
    alternates: { canonical: `/services/${slug}` },
    openGraph: {
      title: `${s.title} | ${COMPANY.name}`,
      url,
      description: s.metaDescription ?? s.short,
      images: ogImages(SERVICE_OG[slug], `${s.title} by ${COMPANY.name}, Pune`),
    },
    keywords: s.keywords,
  };
}

function isServiceSlug(s: string): s is ServiceSlug {
  return (SERVICE_SLUGS as string[]).includes(s);
}

function serviceLocalityBlock(
  slug: ServiceSlug,
):
  | {
      title: string;
      description: string;
      urlPrefix: string;
      cardLeading: string;
    }
  | undefined {
  if (slug === "home-painting") {
    return {
      title: "Wall painting by area in Pune",
      description:
        "Detailed locality pages for home painting—monsoon-smart prep, society-friendly schedules, transparent BOQs, and FAQs for each zone we serve.",
      urlPrefix: "home-painting-in",
      cardLeading: "Painting in",
    };
  }
  if (slug === "false-ceiling") {
    return {
      title: "False ceiling (POP) by area in Pune",
      description:
        "Local guides for gypsum and POP ceilings—cove lighting, AC grills, RCPs, MC coordination, and realistic height-loss planning in your neighbourhood.",
      urlPrefix: "false-ceiling-in",
      cardLeading: "False ceiling in",
    };
  }
  if (slug === "modular-kitchen") {
    return {
      title: "Modular kitchen by area in Pune",
      description:
        "Area-specific kitchen pages—layouts, chimney coordination, BOQ discipline, and install logistics for towers and plotted homes in each locality.",
      urlPrefix: "modular-kitchen-in",
      cardLeading: "Modular kitchen in",
    };
  }
  return undefined;
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  if (!isServiceSlug(slug)) notFound();
  const meta = servicesMeta[slug];
  const copy = servicePageCopy[slug];
  const pageUrl = `${SITE_URL}/services/${slug}`;

  const faqItems = copy.faqs.map((f, i) => ({
    id: `faq-${slug}-${i}`,
    q: f.q,
    a: f.a,
  }));

  const relatedSlugs = SERVICE_SLUGS.filter((s) => s !== slug);

  // Guides relevant to this service. Service pages previously linked to none,
  // which left seven guides on a single inbound link from /blog.
  const guides = (SERVICE_GUIDES[slug] ?? [])
    .map((g) => blogPosts.find((p) => p.slug === g))
    .filter((p): p is (typeof blogPosts)[number] => Boolean(p));
  const localityBlock = serviceLocalityBlock(slug);
  const serviceProjects = projects.filter((p) => p.service === slug);
  const detail = serviceDetail[slug];

  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: meta.title,
          description: meta.short,
          url: pageUrl,
        })}
      />
      <JsonLd data={faqJsonLd(copy.faqs, { pageUrl })} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: meta.title, path: `/services/${slug}` },
        ])}
      />

      <section className="relative bg-charcoal">
        <div className="absolute inset-0">
          <Image
            src={meta.heroImage}
            alt={meta.title}
            fill
            fetchPriority="high"
            loading="eager"
            className="object-cover opacity-45"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/85 to-charcoal/55" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-cream/70">
            {COMPANY.name} · {COMPANY.city}
          </p>
          <nav
            className="mt-4 text-xs font-medium text-cream/65"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="transition hover:text-cream">
              Home
            </Link>
            <span className="mx-2 text-cream/35" aria-hidden>
              /
            </span>
            <Link href="/services" className="transition hover:text-cream">
              Services
            </Link>
            <span className="mx-2 text-cream/35" aria-hidden>
              /
            </span>
            <span className="text-cream">{meta.title}</span>
          </nav>
          <h1 className="mt-6 max-w-3xl font-display text-4xl leading-[1.1] tracking-tight text-cream sm:text-5xl lg:text-[3.25rem]">
            {meta.title} in Pune
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-cream/90 sm:text-lg">
            {meta.short}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/contact"
              className="inline-flex justify-center rounded-full bg-cream px-8 py-3.5 text-sm font-semibold text-charcoal shadow-lg transition hover:bg-white"
            >
              Request a consultation
            </Link>{" "}
            <a
              href={`tel:${COMPANY.phoneTel}`}
              className="inline-flex justify-center rounded-full border border-cream/45 px-8 py-3.5 text-sm font-semibold text-cream transition hover:bg-white/10"
            >
              Call {COMPANY.phoneDisplay}
            </a>{" "}
            <Link
              href="/projects"
              className="inline-flex justify-center rounded-full border border-cream/25 bg-white/5 px-8 py-3.5 text-sm font-semibold text-cream/95 backdrop-blur-sm transition hover:bg-white/10"
            >
              View projects
            </Link>
          </div>

          <dl className="mt-14 grid max-w-3xl grid-cols-2 gap-4 border-t border-white/15 pt-10 sm:grid-cols-4 sm:gap-6">
            <div>
              <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-cream/55">
                Experience
              </dt>
              <dd className="mt-1 font-display text-2xl text-cream">
                {COMPANY.yearsExperience}+ yrs
              </dd>
            </div>
            <div>
              <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-cream/55">
                Homes &amp; sites
              </dt>
              <dd className="mt-1 font-display text-2xl text-cream">
                {COMPANY.happyClients}+
              </dd>
            </div>
            <div>
              <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-cream/55">
                Communities
              </dt>
              <dd className="mt-1 font-display text-2xl text-cream">
                {COMPANY.landmarkCommunitiesServed}+
              </dd>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-cream/55">
                Coverage
              </dt>
              <dd className="mt-1 text-sm font-medium leading-snug text-cream/90">
                East Pune &amp; nearby
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14 lg:items-start">
            <div className="lg:col-span-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-wood-dark">
                Overview
              </p>
              <p className="mt-4 text-lg leading-relaxed text-stone-700 sm:text-xl">
                {copy.intro}
              </p>
              <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl bg-stone-100 shadow-[0_24px_48px_-28px_rgba(28,25,23,0.3)] ring-1 ring-stone-900/[0.05]">
                <Image
                  src={detail.overviewImage.src}
                  alt={detail.overviewImage.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 66vw"
                />
              </div>
            </div>
            <aside className="rounded-2xl border border-stone-200 bg-cream/50 p-6 shadow-sm lg:col-span-4 lg:sticky lg:top-28">
              <p className="font-display text-lg text-charcoal">Why companies &amp; families choose us</p>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-stone-600">
                <li className="flex gap-2">
                  <span className="text-wood-dark" aria-hidden>
                    ✓
                  </span>
                  <span>Documented BOQs and milestone billing—no verbal-only quotes.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-wood-dark" aria-hidden>
                    ✓
                  </span>
                  <span>Drawings and 3D sign-off before major spends.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-wood-dark" aria-hidden>
                    ✓
                  </span>
                  <span>Site discipline aligned to Pune society norms and schedules.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-wood-dark" aria-hidden>
                    ✓
                  </span>
                  <span>Single point of contact from design through handover.</span>
                </li>
              </ul>
              <p className="mt-6 border-t border-stone-200 pt-5 text-xs text-stone-500">
                {COMPANY.serviceAreaLine}
              </p>
            </aside>
          </div>
        </div>
      </section>

      <section className="border-b border-stone-200 bg-stone-50/70 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What’s included"
            title={`Everything ${meta.title.toLowerCase()} covers`}
            description="The concrete scope behind the word—so you know exactly what you are comparing when quotes land."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {detail.inclusions.map((item, i) => (
              <Reveal key={item.title} delay={(i % 3) * 80}>
                <div className="h-full rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_32px_-20px_rgba(28,25,23,0.22)]">
                  <div className="h-1 w-8 rounded-full bg-wood/70" aria-hidden />
                  <h3 className="mt-4 font-display text-lg text-charcoal">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-stone-200 bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Looks we deliver"
            title="Moods to bring to your site visit"
            description="Save the one closest to your taste—we’ll translate it to your light, layout, and budget."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {detail.gallery.map((g, i) => (
              <Reveal key={g.src} delay={(i % 3) * 90}>
                <figure className="group overflow-hidden rounded-3xl border border-stone-200/90 bg-white shadow-[0_1px_2px_rgba(28,25,23,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_rgba(28,25,23,0.28)]">
                  <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                    <Image
                      src={g.src}
                      alt={g.alt}
                      fill
                      className="object-cover transition duration-700 ease-out group-hover:scale-[1.05]"
                      sizes="(max-width:640px) 100vw, 33vw"
                      loading="lazy"
                    />
                  </div>
                  <figcaption className="px-5 py-4 font-display text-lg text-charcoal">
                    {g.caption}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-stone-200 bg-stone-50/40 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Choose your scope"
            title="Three ways to take this on"
            description="Same team and standards at every level—only the depth of work changes. Mix and match after the site visit."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3 lg:gap-8">
            {detail.tiers.map((tier, i) => (
              <Reveal key={tier.name} delay={(i % 3) * 90}>
                <div
                  className={`relative flex h-full flex-col rounded-3xl border p-7 transition duration-300 hover:-translate-y-1 ${
                    tier.featured
                      ? "border-wood/40 bg-cream/50 shadow-[0_24px_48px_-24px_rgba(107,83,68,0.35)]"
                      : "border-stone-200 bg-white shadow-sm hover:shadow-[0_20px_40px_-24px_rgba(28,25,23,0.22)]"
                  }`}
                >
                  {tier.featured ? (
                    <span className="absolute -top-3 left-7 rounded-full bg-wood-dark px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-cream">
                      Most chosen
                    </span>
                  ) : null}
                  <h3 className="font-display text-2xl text-charcoal">
                    {tier.name}
                  </h3>
                  <p className="mt-1 text-sm text-stone-500">{tier.tagline}</p>
                  <ul className="mt-6 flex-1 space-y-3 text-sm leading-relaxed text-stone-700">
                    {tier.points.map((point) => (
                      <li key={point} className="flex gap-2.5">
                        <span className="mt-0.5 text-wood-dark" aria-hidden>
                          ✓
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition ${
                      tier.featured
                        ? "bg-charcoal text-cream hover:bg-wood-dark"
                        : "border border-stone-300 text-charcoal hover:border-wood-dark hover:text-wood-dark"
                    }`}
                  >
                    Get this quoted free
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-stone-500">
            {detail.tiersNote}
          </p>
          {/* Ranges only on the full-home service — single-scope jobs are
              priced per unit, so a whole-flat band would mislead there. */}
          {slug === "interior-design" ? (
            <div className="mt-14 border-t border-stone-200 pt-12">
              <PricingBands />
            </div>
          ) : null}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5">
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-stone-500">
              Materials we specify
            </span>
            {detail.materials.map((m) => (
              <span
                key={m}
                className="rounded-full border border-stone-200 bg-stone-50 px-3.5 py-1.5 text-xs font-medium text-stone-600"
              >
                {m}
              </span>
            ))}
          </div>
        </div>
      </section>

      {slug === "interior-design" ? (
        <section className="border-b border-stone-200 bg-stone-50/70 py-14 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              align="center"
              eyebrow="Get your number"
              title="Estimate your home interior cost"
              description="Three quick picks—home size, spaces, and finish level—for a range built from real Pune projects, not a generic rate card."
            />
            <div className="mt-12">
              <HomeCostCalculator tiers={detail.tiers} />
            </div>
          </div>
        </section>
      ) : null}

      {localityBlock ? (
        <section className="border-b border-stone-200 bg-gradient-to-b from-cream/50 via-white to-stone-50/80 py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-wood-dark">
              Service areas
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-2xl tracking-tight text-charcoal sm:text-3xl">
              {localityBlock.title}
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-stone-600 sm:text-base">
              {localityBlock.description}
            </p>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {AREAS.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/${localityBlock.urlPrefix}-${a.slug}`}
                    className="group flex flex-col rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition hover:border-wood/30 hover:shadow-md"
                  >
                    <span className="font-display text-lg text-charcoal group-hover:text-wood-dark">
                      {localityBlock.cardLeading} {a.label}
                    </span>
                    <span className="mt-2 text-sm text-stone-600">
                      Local scope, FAQs &amp; process →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <section className="border-b border-stone-200 bg-stone-50/80 py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Outcomes"
            title="What you can expect when we own the details"
            description="Clear ownership across design, materials, and execution—so gaps between approval and site reality stay small."
          />
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:gap-8">
            {copy.benefits.map((b, i) => (
              <li
                key={b.title}
                className="relative overflow-hidden rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition hover:border-stone-300 hover:shadow-md lg:p-7"
              >
                <span
                  className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-wood/80 to-wood/20"
                  aria-hidden
                />
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-stone-500">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-display text-xl text-charcoal lg:text-[1.35rem]">
                  {b.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-600">
                  {b.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How we work"
            title="A defined process—milestones you can plan around"
            description="Every engagement follows a signed sequence so dates, dependencies, and approvals stay visible to your family or facilities team."
          />
          <div className="relative mt-12 max-w-3xl">
            <div
              className="absolute left-[1.15rem] top-3 bottom-3 hidden w-px bg-stone-200 sm:block"
              aria-hidden
            />
            <ol className="space-y-0">
              {copy.process.map((step, i) => (
                <li
                  key={step.step}
                  className="relative flex gap-5 pb-12 last:pb-0 sm:gap-8"
                >
                  <span className="relative z-[1] flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-stone-200 bg-white text-sm font-bold text-charcoal shadow-sm">
                    {i + 1}
                  </span>
                  <div className="min-w-0 pt-0.5">
                    <h3 className="font-display text-xl text-charcoal">
                      {step.step}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-stone-600">
                      {step.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <ProjectStrip
        projects={serviceProjects}
        eyebrow="Delivered work"
        title={`Recent ${meta.title.toLowerCase()} projects in Pune`}
        description="Real sites, real finishes—photographed as handed over, not staged."
      />

      <section className="border-t border-stone-200 bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-stone-200 bg-stone-50/80 p-8 sm:p-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-14">
              <div className="lg:w-64 lg:shrink-0">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-wood-dark">
                  Good to know
                </p>
                <h2 className="mt-2 font-display text-2xl tracking-tight text-charcoal sm:text-3xl">
                  Straight answers before you commit
                </h2>
              </div>
              <ul className="grid flex-1 gap-x-10 gap-y-5 sm:grid-cols-2">
                {detail.goodToKnow.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-relaxed text-stone-700"
                  >
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white text-[10px] font-bold text-wood-dark ring-1 ring-stone-200"
                      aria-hidden
                    >
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-stone-200 bg-cream/60 py-14 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="FAQs"
            title={`Common questions — ${meta.title}`}
            description="Quick answers for scope, timelines, and how we engage on Pune sites."
          />
          <FaqAccordion
            items={faqItems}
            className="mt-10"
            accordionName={`service-faq-${slug}`}
          />
        </div>
      </section>

      <section className="border-t border-stone-200 bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-14">
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-wood-dark">
                Next step
              </p>
              <h2 className="mt-3 font-display text-3xl tracking-tight text-charcoal sm:text-4xl">
                Discuss your {meta.title.toLowerCase()} scope
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-stone-600 sm:text-base">
                Share floor plans, photos, or a short brief—we&apos;ll respond with
                realistic next steps, typical lead times for this discipline in
                Pune, and whether a site visit makes sense first.
              </p>
              <ul className="mt-8 space-y-3 text-sm text-stone-600">
                <li className="flex gap-2">
                  <span className="text-wood-dark" aria-hidden>
                    ✓
                  </span>
                  <span>No obligation on the first call</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-wood-dark" aria-hidden>
                    ✓
                  </span>
                  <span>Same-day callback on most working days</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-wood-dark" aria-hidden>
                    ✓
                  </span>
                  <span>
                    Email{" "}
                    <a
                      href={`mailto:${COMPANY.email}`}
                      className="font-medium text-wood-dark underline decoration-wood/30 underline-offset-2 hover:decoration-wood-dark"
                    >
                      {COMPANY.email}
                    </a>{" "}
                    for formal quotes
                  </span>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-stone-200/90 bg-cream/30 p-1 shadow-[0_24px_50px_-28px_rgba(28,25,23,0.12)] sm:p-2 lg:max-w-xl lg:ml-auto">
                <LeadForm
                  source={`service:${slug}`}
                  variant="flush"
                  className="rounded-2xl bg-white p-4 sm:p-6"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-stone-200 bg-stone-50 py-12 sm:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
            Related services
          </p>
          <p className="mt-2 max-w-2xl text-sm text-stone-600">
            Explore adjacent scopes—many clients combine disciplines under one
            programme.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {relatedSlugs.map((s) => (
              <Link
                key={s}
                href={`/services/${s}`}
                className="inline-flex rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-medium text-charcoal shadow-sm transition hover:border-wood/35 hover:text-wood-dark"
              >
                {servicesMeta[s].title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {guides.length > 0 && (
        <section className="border-t border-stone-200 bg-white py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Guides"
              title={`Reading before you commit to ${meta.title.toLowerCase()}`}
              description="Long-form, Pune-specific reference pieces—written from our own sites, not generic décor advice."
            />
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {guides.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group flex h-full flex-col rounded-2xl border border-stone-200 bg-stone-50/60 p-5 transition hover:border-wood/40 hover:bg-white hover:shadow-sm"
                  >
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-wood-dark">
                      {post.category}
                    </p>
                    <p className="mt-2 font-display text-lg leading-snug text-charcoal transition group-hover:text-wood-dark">
                      {post.title}
                    </p>
                    <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-stone-600">
                      {post.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-wood-dark">
                      Read guide <span aria-hidden>→</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <CTASection
        title={`Ready to start your ${meta.title.toLowerCase()}?`}
        subtitle="Share floor plans or photos—we’ll suggest next steps and a realistic timeline for Pune sites."
      />
    </>
  );
}
