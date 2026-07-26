import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { SectionHeading } from "@/components/SectionHeading";
import { homeFaqEntries } from "@/lib/home-faq";
import { COMPANY } from "@/lib/site";

export function HomeFaqSection() {
  return (
    <section
      id="faqs"
      className="scroll-mt-24 border-t border-stone-200/60 bg-stone-100/70 py-16 sm:py-24"
      aria-label="Frequently asked questions about interior design in Pune"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions we hear most often"
          description="How we quote, plan, and deliver in Pune—homes, kitchens, ceilings, and workplaces."
        />

        <nav
          className="mt-6 flex flex-wrap items-center gap-x-1 gap-y-1 text-[13px] text-stone-400"
          aria-label="Related pages"
        >
          <Link
            href="/services"
            className="px-2 py-1 text-stone-500 transition hover:text-charcoal"
          >
            Services
          </Link>
          <span className="text-stone-300" aria-hidden>
            ·
          </span>
          <Link
            href="/projects"
            className="px-2 py-1 text-stone-500 transition hover:text-charcoal"
          >
            Projects
          </Link>
          <span className="text-stone-300" aria-hidden>
            ·
          </span>
          <Link
            href="/contact"
            className="px-2 py-1 text-stone-500 transition hover:text-charcoal"
          >
            Contact
          </Link>
        </nav>

        <FaqAccordion
          items={homeFaqEntries}
          accordionName="home-faq"
          className="mt-10"
        />

        <footer className="mt-14 border-t border-stone-200/60 pt-12 text-center">
          <p className="font-display text-xl tracking-tight text-charcoal sm:text-2xl">
            Still unsure?
          </p>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-stone-500">
            Share your society, carpet area, and what you want to tackle first—we
            usually reply the same day on weekdays.
          </p>
          <div className="mt-8 flex flex-col items-stretch justify-center gap-2 sm:flex-row sm:items-center sm:justify-center sm:gap-3">
            <Link
              href="/contact"
              className="inline-flex justify-center rounded-full bg-charcoal px-7 py-3 text-sm font-medium text-cream transition hover:bg-charcoal/90"
            >
              Contact {COMPANY.name}
            </Link>
            <a
              href={`tel:${COMPANY.phoneTel}`}
              className="inline-flex justify-center rounded-full px-7 py-3 text-sm font-medium text-charcoal ring-1 ring-stone-200/90 transition hover:bg-stone-50"
            >
              {COMPANY.phoneDisplay}
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
}
