import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { SectionHeading } from "@/components/SectionHeading";
import { homeFaqEntries } from "@/lib/home-faq";
import { COMPANY } from "@/lib/site";

const topicNav = [
  { href: "#faq-who-pune", label: "About & coverage" },
  { href: "#faq-scope-services", label: "Scope" },
  { href: "#faq-2bhk-3bhk-cost", label: "Pricing & BOQ" },
  { href: "#faq-timeline-kitchen-home", label: "Timelines" },
  { href: "#faq-society-mc", label: "Societies" },
  { href: "#faq-commercial-spaces", label: "Commercial" },
] as const;

export function HomeFaqSection() {
  return (
    <section
      id="faqs"
      className="relative scroll-mt-24 border-t border-stone-200/90 bg-stone-50 py-20 sm:py-28"
      aria-label="Frequently asked questions about interior design in Pune"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-stone-300/60 to-transparent"
        aria-hidden
      />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow="FAQ"
          title="Questions we hear most often"
          description="Straight answers on how we quote, plan, and deliver in Pune—homes, modular kitchens, and commercial spaces."
        />

        <p className="mx-auto mt-8 max-w-2xl text-pretty text-center text-sm leading-relaxed text-stone-500 sm:text-[15px]">
          Planning an{" "}
          <Link
            href="/services/interior-design"
            className="font-medium text-wood-dark underline decoration-stone-300/80 underline-offset-[3px] transition hover:decoration-wood-dark"
          >
            interior
          </Link>
          ,{" "}
          <Link
            href="/services/modular-kitchen"
            className="font-medium text-wood-dark underline decoration-stone-300/80 underline-offset-[3px] transition hover:decoration-wood-dark"
          >
            kitchen
          </Link>
          ,{" "}
          <Link
            href="/services/false-ceiling"
            className="font-medium text-wood-dark underline decoration-stone-300/80 underline-offset-[3px] transition hover:decoration-wood-dark"
          >
            ceiling
          </Link>
          , or{" "}
          <Link
            href="/services/commercial-interior-design"
            className="font-medium text-wood-dark underline decoration-stone-300/80 underline-offset-[3px] transition hover:decoration-wood-dark"
          >
            commercial
          </Link>{" "}
          scope? Browse{" "}
          <Link
            href="/projects"
            className="font-medium text-wood-dark underline decoration-stone-300/80 underline-offset-[3px] transition hover:decoration-wood-dark"
          >
            projects
          </Link>{" "}
          or{" "}
          <Link
            href="/contact"
            className="font-medium text-wood-dark underline decoration-stone-300/80 underline-offset-[3px] transition hover:decoration-wood-dark"
          >
            book a consultation
          </Link>
          .
        </p>

        <p className="mt-6 text-center text-xs font-medium tracking-wide text-stone-400">
          <span className="text-stone-500">{homeFaqEntries.length} topics</span>
          <span className="mx-2 text-stone-300" aria-hidden>
            ·
          </span>
          Free first visit
          <span className="mx-2 text-stone-300" aria-hidden>
            ·
          </span>
          Homes &amp; workplaces
        </p>

        <nav
          className="mx-auto mt-10 max-w-2xl border-y border-stone-200/80 py-5"
          aria-label="Jump to FAQ topic"
        >
          <p className="text-center text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-stone-400">
            Jump to topic
          </p>
          <ul className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm sm:gap-x-5">
            {topicNav.map((t) => (
              <li key={t.href}>
                <a
                  href={t.href}
                  className="text-stone-500 transition hover:text-wood-dark"
                >
                  {t.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <FaqAccordion
          items={homeFaqEntries}
          accordionName="home-faq"
          className="mt-10"
        />

        <div className="mt-16 rounded-3xl border border-stone-200/80 bg-white px-8 py-10 text-center shadow-[0_2px_24px_-16px_rgba(28,25,23,0.12)] sm:px-12 sm:py-12">
          <p className="font-display text-2xl tracking-tight text-charcoal sm:text-[1.65rem]">
            Still unsure?
          </p>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-stone-600">
            Share your society, carpet area, and what you want to tackle first—we
            usually reply the same day on weekdays.
          </p>
          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:justify-center">
            <Link
              href="/contact"
              className="inline-flex justify-center rounded-full bg-charcoal px-8 py-3.5 text-sm font-semibold text-cream transition hover:bg-wood-dark"
            >
              Contact {COMPANY.name}
            </Link>
            <a
              href={`tel:${COMPANY.phoneTel}`}
              className="inline-flex justify-center rounded-full border border-stone-200 bg-stone-50/80 px-8 py-3.5 text-sm font-semibold text-charcoal transition hover:border-stone-300 hover:bg-white"
            >
              {COMPANY.phoneDisplay}
            </a>
          </div>
          <p className="mt-6">
            <Link
              href="/services"
              className="text-sm font-medium text-wood-dark underline decoration-stone-300/80 underline-offset-[3px] transition hover:decoration-wood-dark"
            >
              View all services
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
