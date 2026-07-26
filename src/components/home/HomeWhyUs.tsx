import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { COMPANY } from "@/lib/site";

function Icon({ path }: { path: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d={path} />
    </svg>
  );
}

const reasons = [
  {
    title: "Free site visit & design",
    body: "We measure your flat and share layouts before you pay for execution.",
    icon: "M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6",
  },
  {
    title: "Item-by-item quotation",
    body: "Every line priced separately—compare fairly and trim what you don't need.",
    icon: "M9 12h6m-6 4h6m-6-8h6M6 3h12a1 1 0 011 1v16a1 1 0 01-1 1H6a1 1 0 01-1-1V4a1 1 0 011-1z",
  },
  {
    title: "One accountable team",
    body: "Designer, carpenter, painter and electrician coordinated by one manager.",
    icon: "M17 20h5v-2a3 3 0 00-5.4-1.8M17 20H7m10 0v-2c0-.7-.1-1.3-.4-1.8M7 20H2v-2a3 3 0 015.4-1.8M7 20v-2c0-.7.1-1.3.4-1.8m0 0a5 5 0 019.2 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  },
  {
    title: "Branded materials",
    body: "Asian Paints & Berger systems, Gyproc ceilings, branded boards and hardware.",
    icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
  },
  {
    title: "Monsoon-aware schedules",
    body: "Painting and curing planned around Pune's humidity, not rushed through it.",
    icon: "M3 15a4 4 0 014-4 5 5 0 019.6-1.4A3.5 3.5 0 1118 16H7a4 4 0 01-4-1zM8 20l1-2m3 2l1-2m3 2l1-2",
  },
  {
    title: "Clean, snag-free handover",
    body: "Floors protected, debris removed, and a shared snag list we actually close.",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  },
] as const;

export function HomeWhyUs() {
  return (
    <section className="border-y border-stone-200 bg-cream/50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-wood-dark">
              Why choose us
            </p>
            <h2 className="mt-3 text-balance font-display text-3xl tracking-tight text-charcoal sm:text-4xl">
              Why Pune families hand us the keys
            </h2>
            <p className="mt-5 text-base leading-relaxed text-stone-600">
              The discipline of a national brand with the access of a local
              studio—one number that always picks up.
            </p>
            <dl className="mt-8 grid grid-cols-2 gap-5 border-t border-stone-200 pt-7">
              <div>
                <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-stone-500">
                  Homes delivered
                </dt>
                <dd className="mt-1 font-display text-3xl text-charcoal">
                  {COMPANY.happyClients}+
                </dd>
              </div>
              <div>
                <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-stone-500">
                  Google rating
                </dt>
                <dd className="mt-1 font-display text-3xl text-charcoal">
                  {COMPANY.googleStarRating}.0★
                </dd>
              </div>
            </dl>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-charcoal px-7 py-3.5 text-sm font-semibold text-cream transition hover:-translate-y-0.5 hover:bg-wood-dark"
            >
              Book a free site visit
              <span aria-hidden>→</span>
            </Link>
          </div>

          <ul className="grid gap-5 sm:grid-cols-2 lg:col-span-8 lg:gap-6">
            {reasons.map((r, i) => (
              <li key={r.title}>
                <Reveal delay={(i % 2) * 80}>
                  <div className="flex h-full gap-4 rounded-2xl border border-stone-200/90 bg-white p-6 shadow-[0_1px_2px_rgba(28,25,23,0.04)] transition duration-300 hover:-translate-y-1 hover:border-stone-300 hover:shadow-[0_20px_40px_-24px_rgba(28,25,23,0.22)]">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cream text-wood-dark ring-1 ring-stone-200/80">
                      <Icon path={r.icon} />
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-display text-lg leading-snug text-charcoal">
                        {r.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-stone-600">
                        {r.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
