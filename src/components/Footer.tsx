import Link from "next/link";
import { SocialIconLinks } from "@/components/SocialIconLinks";
import { AREAS, COMPANY } from "@/lib/site";
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
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-2xl text-charcoal">{COMPANY.name}</p>
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
