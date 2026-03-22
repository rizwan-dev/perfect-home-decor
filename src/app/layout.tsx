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
    default: `${COMPANY.name} | Premium interiors & home services in Pune`,
    template: `%s | ${COMPANY.name}`,
  },
  description: COMPANY.tagline,
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: COMPANY.name,
    title: `${COMPANY.name} — Pune interiors`,
    description: COMPANY.tagline,
  },
  twitter: {
    card: "summary_large_image",
    title: COMPANY.name,
    description: COMPANY.tagline,
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
