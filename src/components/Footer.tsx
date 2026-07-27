import Image from "next/image";
import Link from "next/link";
import { SocialIconLinks } from "@/components/SocialIconLinks";
import {
  AREAS,
  COMPANY,
  GOOGLE_BUSINESS_KNOWLEDGE_URL,
  whatsappLink,
} from "@/lib/site";
import { SERVICE_SLUGS } from "@/lib/services-data";

const serviceLabels: Record<string, string> = {
  "interior-design": "Interior design",
  "commercial-interior-design": "Commercial interiors",
  "modular-kitchen": "Modular kitchen",
  "home-painting": "Home painting",
  "false-ceiling": "False ceiling",
  "custom-furniture": "Custom furniture",
};

export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-white">
      {/* Pre-footer trust + action band */}
      <div className="border-b border-stone-200 bg-stone-50/70">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <p className="font-display text-2xl tracking-tight text-charcoal">
              Ready when you are.
            </p>
            <a
              href={GOOGLE_BUSINESS_KNOWLEDGE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-2 text-sm text-stone-600 transition hover:text-charcoal"
            >
              <span className="tracking-[0.1em] text-amber-500" aria-hidden>
                ★★★★★
              </span>
              <span>
                {COMPANY.googleStarRating}.0 on Google · {COMPANY.googleReviewCount}+ reviews
              </span>
            </a>
          </div>
          {/* Hidden on mobile: StickyMobileBar pins Call / WhatsApp / Consult
              to the viewport there, and CTASection sits directly above this —
              so these three were the same actions for the third time in one
              screen. Desktop has no sticky bar, so they stay. */}
          <div className="hidden flex-wrap gap-3 md:flex">
            <a
              href={`tel:${COMPANY.phoneTel}`}
              className="inline-flex items-center rounded-full border border-stone-300 px-6 py-3 text-sm font-semibold text-charcoal transition hover:border-wood-dark hover:text-wood-dark"
            >
              Call {COMPANY.phoneDisplay}
            </a>
            <a
              href={whatsappLink(
                `Hi ${COMPANY.name}, I'd like a free site visit. My area in Pune: `,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-stone-300 px-6 py-3 text-sm font-semibold text-charcoal transition hover:border-wood-dark hover:text-wood-dark"
            >
              WhatsApp
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-charcoal px-6 py-3 text-sm font-semibold text-cream shadow-sm transition hover:bg-wood-dark"
            >
              Book a free site visit
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image
              src="/images/brand/logo-lockup.webp"
              alt={COMPANY.name}
              width={1427}
              height={723}
              className="h-12 w-auto"
            />
            <p className="mt-3 text-sm leading-relaxed text-stone-600">
              Interior design, painting, false ceilings &amp; modular kitchens
              for Pune homes—honest quotations, tidy sites, and finishes that
              outlast the first monsoon.
            </p>
            <p className="mt-4 text-sm text-stone-600">{COMPANY.address}</p>
            <p className="mt-2 text-sm text-stone-500">{COMPANY.serviceAreaLine}</p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-stone-500">
              Services
            </p>
            <ul className="mt-4 space-y-2 text-sm text-stone-700">
              <li>
                <Link href="/services" className="font-medium hover:text-wood-dark">
                  All services
                </Link>
              </li>
              {SERVICE_SLUGS.map((slug) => (
                <li key={slug}>
                  <Link
                    href={`/services/${slug}`}
                    className="hover:text-wood-dark"
                  >
                    {serviceLabels[slug]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-stone-500">
              Areas
            </p>
            <ul className="mt-4 space-y-2 text-sm text-stone-700">
              {AREAS.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/interior-designer-in-${a.slug}`}
                    className="hover:text-wood-dark"
                  >
                    {a.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-stone-500">
              Contact
            </p>
            <ul className="mt-4 space-y-3 text-sm text-stone-700">
              <li>
                <a
                  href={`tel:${COMPANY.phoneTel}`}
                  className="font-medium hover:text-wood-dark"
                >
                  {COMPANY.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="hover:text-wood-dark"
                >
                  {COMPANY.email}
                </a>
              </li>
              <li className="text-stone-500">{COMPANY.hours}</li>
            </ul>
            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-full bg-charcoal px-5 py-2.5 text-sm font-semibold text-cream transition hover:bg-wood-dark"
            >
              Get free consultation
            </Link>
            <p className="mt-8 text-sm font-semibold uppercase tracking-wider text-stone-500">
              Connect
            </p>
            <SocialIconLinks className="mt-3" />
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-stone-200 pt-8 text-sm text-stone-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {COMPANY.name}. Pune, India.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/services" className="hover:text-charcoal">
              Services
            </Link>
            <Link href="/projects" className="hover:text-charcoal">
              Projects
            </Link>
            <Link href="/blog" className="hover:text-charcoal">
              Blog
            </Link>
            <Link href="/about" className="hover:text-charcoal">
              About
            </Link>
            <Link href="/contact" className="hover:text-charcoal">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
