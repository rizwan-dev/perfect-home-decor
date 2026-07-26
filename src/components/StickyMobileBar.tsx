import Link from "next/link";
import { COMPANY, whatsappLink } from "@/lib/site";

export function StickyMobileBar() {
  const wa = whatsappLink(
    `Hi ${COMPANY.name}, I'd like a free consultation for my Pune home.`,
  );
  return (
    <div
      data-site-float
      className="fixed inset-x-0 bottom-0 z-50 border-t border-stone-200 bg-cream/95 px-3 py-2 backdrop-blur-md md:hidden">
      <div className="mx-auto flex max-w-lg gap-2">
        <a
          href={`tel:${COMPANY.phoneTel}`}
          className="flex flex-1 items-center justify-center rounded-full border border-stone-200 bg-white py-3 text-sm font-semibold text-charcoal"
        >
          Call
        </a>
        <a
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center rounded-full bg-[#25D366] py-3 text-sm font-semibold text-white"
        >
          WhatsApp
        </a>
        <Link
          href="/contact"
          className="flex flex-1 items-center justify-center rounded-full bg-charcoal py-3 text-sm font-semibold text-cream"
        >
          Consult
        </Link>
      </div>
    </div>
  );
}
