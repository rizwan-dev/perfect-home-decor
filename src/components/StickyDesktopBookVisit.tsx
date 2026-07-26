import Link from "next/link";

/** Desktop-only sticky CTA; mobile uses `StickyMobileBar` + WhatsApp float. */
export function StickyDesktopBookVisit() {
  return (
    <Link
      data-site-float
      href="/contact"
      className="fixed bottom-28 right-5 z-[61] hidden shadow-lg shadow-stone-900/15 transition hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-charcoal md:inline-flex"
    >
      <span className="rounded-full bg-charcoal px-5 py-3 text-sm font-semibold text-cream ring-1 ring-white/10 transition hover:bg-wood-dark">
        Book visit
      </span>
    </Link>
  );
}
