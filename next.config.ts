import type { NextConfig } from "next";

/** Localities that had a Wix `/service/best-interior-designer-in-<area>` page. */
const AREAS = [
  "wagholi",
  "kharadi",
  "viman-nagar",
  "lohegaon",
  "magarpatta",
  "kesnand",
] as const;

const nextConfig: NextConfig = {
  /**
   * Recover the old Wix URLs.
   *
   * Google still has `/service/best-interior-designer-in-wagholi` indexed and it
   * now 404s — we had assumed only the homepage ever ranked, which turned out to
   * be wrong. A 404 throws away whatever authority those pages accumulated;
   * a permanent redirect passes it to the equivalent new page instead.
   *
   * Order matters: the specific area rules must precede the catch-all.
   */
  async redirects() {
    return [
      ...AREAS.map((area) => ({
        source: `/service/best-interior-designer-in-${area}`,
        destination: `/interior-designer-in-${area}`,
        permanent: true,
      })),
      // Anything else under the old Wix /service/ tree lands on the hub rather
      // than a dead end. Better a relevant page than a 404.
      { source: "/service/:slug*", destination: "/services", permanent: true },
      { source: "/service", destination: "/services", permanent: true },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    /**
     * Next's default breakpoints jump 1200 -> 1920, so every full-bleed
     * `sizes="100vw"` image on a typical 1280–1512px laptop was served a 1920px
     * file — Lighthouse measured 274KB of waste across the four hero slides.
     * The two extra stops let the browser pick a close match instead. No
     * quality change: the image still covers the viewport at 1x.
     */
    deviceSizes: [640, 750, 828, 1080, 1200, 1366, 1600, 1920, 2048, 3840],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
