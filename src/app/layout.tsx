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
        <Footer />
        <WhatsAppFloat />
        <StickyDesktopBookVisit />
        <StickyMobileBar />
      </body>
    </html>
  );
}
