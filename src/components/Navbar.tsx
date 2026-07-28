"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { COMPANY } from "@/lib/site";

const callButtonClass =
  "nav-call-btn group/call relative inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-semibold text-charcoal transition duration-200 hover:-translate-y-0.5 hover:border-wood-dark/50 hover:bg-cream/30 active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wood-dark focus-visible:ring-offset-2 focus-visible:ring-offset-cream";

function IconPhone({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
      />
    </svg>
  );
}

const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Guides" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [elevated, setElevated] = useState(false);

  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-cream/90 backdrop-blur-md transition-[box-shadow,border-color] duration-300 ${
        elevated
          ? "border-stone-200 shadow-[0_8px_30px_-18px_rgba(28,25,23,0.35)]"
          : "border-stone-200/80"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex shrink-0 items-center transition-opacity hover:opacity-80"
        >
          <Image
            src="/images/brand/logo-lockup.webp"
            alt={`${COMPANY.name} — interiors & home services, Pune`}
            width={1427}
            height={723}
            className="h-11 w-auto sm:h-12"
          />
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            if (item.label === "Services") {
              return (
                <div key={item.href} className="relative group">
                  <Link
                    href="/services"
                    className={`rounded-full px-3 py-2 text-sm font-medium transition ${
                      pathname.startsWith("/services")
                        ? "bg-white text-charcoal shadow-sm"
                        : "text-stone-600 hover:bg-white/70 hover:text-charcoal"
                    }`}
                  >
                    Services
                  </Link>
                  <div className="invisible absolute left-0 top-full z-50 pt-2 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <div className="min-w-[220px] rounded-2xl border border-stone-200 bg-white p-2 shadow-lg">
                      <ServiceMenuLinks />
                    </div>
                  </div>
                </div>
              );
            }
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3 py-2 text-sm font-medium transition ${
                  active
                    ? "bg-white text-charcoal shadow-sm"
                    : "text-stone-600 hover:bg-white/70 hover:text-charcoal"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden flex-wrap items-center justify-end gap-2 md:flex">
          <a
            href={`tel:${COMPANY.phoneTel}`}
            className={callButtonClass}
            aria-label={`Call ${COMPANY.phoneDisplay}`}
          >
            <IconPhone className="relative z-[1] h-4 w-4 shrink-0 text-wood-dark transition group-hover/call:scale-110 group-hover/call:text-wood-dark" />
            <span className="relative z-[1] whitespace-nowrap">Call</span>
          </a>
          <Link
            href="/contact"
            className="rounded-full bg-charcoal px-4 py-2 text-sm font-semibold text-cream shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-wood-dark hover:shadow-md active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
          >
            Free consultation
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-stone-200 bg-white text-charcoal md:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open ? (
        <div className="border-t border-stone-200 bg-cream px-4 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {nav.map((item) =>
              item.label === "Services" ? (
                <div key="services-m" className="flex flex-col gap-2 py-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                    Services
                  </span>
                  <ServiceMenuLinks onNavigate={() => setOpen(false)} />
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-3 py-2 text-stone-700 hover:bg-white"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ),
            )}
          </div>
          <div className="mt-4 flex flex-col gap-2">
            <a
              href={`tel:${COMPANY.phoneTel}`}
              className={`${callButtonClass} justify-center py-3`}
              aria-label={`Call ${COMPANY.phoneDisplay}`}
            >
              <IconPhone className="relative z-[1] h-5 w-5 shrink-0 text-wood-dark transition group-hover/call:scale-110" />
              <span className="relative z-[1]">Call</span>
            </a>
            <Link
              href="/contact"
              className="rounded-xl bg-charcoal py-3 text-center text-sm font-semibold text-cream shadow-sm transition active:scale-[0.99] hover:bg-wood-dark"
              onClick={() => setOpen(false)}
            >
              Get free consultation
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function ServiceMenuLinks({ onNavigate }: { onNavigate?: () => void }) {
  const links = [
    { href: "/services", label: "All services" },
    { href: "/services/interior-design", label: "Interior design" },
    {
      href: "/services/commercial-interior-design",
      label: "Commercial interiors",
    },
    { href: "/services/modular-kitchen", label: "Modular kitchen" },
    { href: "/services/home-painting", label: "Home painting" },
    { href: "/services/false-ceiling", label: "False ceiling" },
    { href: "/services/custom-furniture", label: "Custom furniture" },
  ];
  return (
    <>
      {links.map((l) => (
        <Link
          key={l.href}
          href={l.href}
          onClick={onNavigate}
          className="block rounded-xl px-3 py-2 text-sm text-stone-700 hover:bg-stone-50"
        >
          {l.label}
        </Link>
      ))}
    </>
  );
}
