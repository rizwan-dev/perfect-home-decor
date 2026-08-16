import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { StickyDesktopBookVisit } from "@/components/StickyDesktopBookVisit";
import { StickyMobileBar } from "@/components/StickyMobileBar";
import { JsonLd } from "@/components/JsonLd";
import { getGooglePlaceReviewStats } from "@/lib/google-place-reviews";
import { COMPANY, SITE_URL } from "@/lib/site";
import { localBusinessJsonLd } from "@/lib/json-ld";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${COMPANY.name} | Interior Designer in Pune — Painting, False Ceiling & Modular Kitchens`,
    template: `%s | ${COMPANY.name}`,
  },
  description: `${COMPANY.name}: interior design, home painting, false ceilings (POP), modular kitchens & wallpaper across Kharadi, Wagholi, Viman Nagar & East Pune. Free site visit, transparent quotes.`,
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: COMPANY.name,
    // Root default; inner pages override it. Without this the homepage shipped
    // no og:url at all, so shares could be attributed to whatever URL the
    // scraper happened to fetch (apex, or a *.vercel.app preview).
    url: SITE_URL,
    title: `${COMPANY.name} — Interiors, painting & false ceilings in Pune`,
    description: `Turnkey home interiors and single-scope work with one accountable team. ${COMPANY.serviceAreaLine}.`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY.name} — Interiors & home services, Pune`,
    description: `Interior design, painting, false ceilings, modular kitchens & wallpaper. Free site visit across East Pune.`,
  },
  robots: {
    index: true,
    follow: true,
  },
  /**
   * Pinterest domain claim. Verifying the domain attributes every pin sourced
   * from this site back to the account (logo + profile link on the pin), which
   * also makes the `sameAs` entry in LocalBusiness one Google can corroborate.
   *
   * `verification.other` renders the key verbatim as the meta name, so this
   * emits <meta name="p:domain_verify" content="…" /> — Pinterest requires
   * that exact name. Keep it after the claim is confirmed: removing the tag
   * un-verifies the domain.
   */
  verification: {
    other: {
      "p:domain_verify": "15c54535a88d8840a646f283f3c37d47",
    },
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const googleStats = await getGooglePlaceReviewStats();

  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${cormorant.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full pb-[4.5rem] md:pb-0">
        <JsonLd data={localBusinessJsonLd(googleStats)} />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer
          googleRating={googleStats.rating}
          googleReviewCount={googleStats.userRatingsTotal}
        />
        <WhatsAppFloat />
        <StickyDesktopBookVisit />
        <StickyMobileBar />
      </body>
    </html>
  );
}
