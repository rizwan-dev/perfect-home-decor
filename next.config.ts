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
      // A second batch of old Wix URLs, outside the /service/ tree, still
      // indexed by Google as of 2026-07-29 and 404ing live.
      { source: "/home-interior", destination: "/services/interior-design", permanent: true },
      { source: "/interior-painting", destination: "/services/home-painting", permanent: true },
      { source: "/portfolio", destination: "/projects", permanent: true },

      /**
       * Third batch, found by auditing the Search Console Pages export on
       * 2026-07-29 rather than by guessing: 26 old Wix URLs were still drawing
       * 406 impressions and 7 clicks a quarter straight into a 404. Mapped to
       * the closest equivalent page, most-trafficked first.
       *
       * `/painters-in-wagholi` alone carried 131 impressions, and Wagholi is
       * the term we already rank #1 for — the worst possible page to lose.
       */
      { source: "/painters-in-wagholi", destination: "/home-painting-in-wagholi", permanent: true },
      { source: "/painters-in-kharadi", destination: "/home-painting-in-kharadi", permanent: true },
      // The FAQ content lives in the homepage's `#faqs` section — /services
      // was checked and has essentially none, so it would have been a soft
      // mismatch for anyone arriving from the old FAQ page.
      { source: "/faqs", destination: "/#faqs", permanent: true },
      { source: "/book-now", destination: "/contact", permanent: true },
      { source: "/water-proofing", destination: "/services/home-painting", permanent: true },
      { source: "/exterior-painting", destination: "/services/home-painting", permanent: true },
      { source: "/door-grill-painting", destination: "/services/home-painting", permanent: true },
      { source: "/pop-and-false-ceiling", destination: "/services/false-ceiling", permanent: true },

      // Old Wix blog posts. Locality-specific ones go to that locality page —
      // it matches the searcher's intent better than a general guide does.
      {
        source: "/post/best-home-painting-services-in-kharadi-pune",
        destination: "/home-painting-in-kharadi",
        permanent: true,
      },
      {
        source: "/post/your-guide-to-finding-the-best-home-painting-service-company-in-kharadi-pune",
        destination: "/home-painting-in-kharadi",
        permanent: true,
      },
      {
        source: "/post/how-perfect-home-decor-ensures-the-best-quality-home-interiors-in-kharadi-pune",
        destination: "/interior-designer-in-kharadi",
        permanent: true,
      },
      {
        source: "/post/expert-home-interior-services-in-kharadi-for-modern-living",
        destination: "/interior-designer-in-kharadi",
        permanent: true,
      },
      {
        source: "/post/discover-the-best-painting-and-home-interior-service-provider-in-kharadi-perfect-home-decor",
        destination: "/interior-designer-in-kharadi",
        permanent: true,
      },
      {
        source: "/post/home-interior-design-in-lohegaon-pune-transform-your-space-with-perfect-home-decor",
        destination: "/interior-designer-in-lohegaon",
        permanent: true,
      },
      {
        source: "/post/discover-exceptional-home-interior-design-services-in-viman-nagar",
        destination: "/interior-designer-in-viman-nagar",
        permanent: true,
      },
      // Topic posts map to the equivalent evergreen guide.
      {
        source: "/post/create-stunning-living-room-interiors-for-indian-homes-living-room-design-ideas",
        destination: "/blog/living-room-interior-design-layout-lighting-pune",
        permanent: true,
      },
      {
        source: "/post/transform-your-home-with-stunning-wall-textures",
        destination: "/blog/wall-painting-pune-monsoon-timing-finishes",
        permanent: true,
      },
      {
        source: "/post/choosing-the-perfect-color-palette-for-your-pune-home-a-guide-to-selecting-the-right-colors-for-eve",
        destination: "/blog/wall-painting-pune-monsoon-timing-finishes",
        permanent: true,
      },
      {
        source: "/post/elevate-your-space-the-art-and-science-of-interior-painting-with-perfect-home-decor",
        destination: "/services/home-painting",
        permanent: true,
      },
      {
        source: "/post/transform-your-space-home-interior-design-services-in-pune",
        destination: "/blog/complete-guide-home-interior-design-pune",
        permanent: true,
      },
      {
        source: "/post/mastering-the-essentials-of-interior-design",
        destination: "/blog/complete-guide-home-interior-design-pune",
        permanent: true,
      },
      {
        source: "/post/brighten-your-home-this-diwali-with-perfect-home-decor-expert-painting-interior-design-services",
        destination: "/blog/how-to-get-your-home-ready-for-diwali-pune",
        permanent: true,
      },
      // Catch-alls last. The export only lists the top 40 pages, so there are
      // almost certainly more old /post/ and /portfolio-collections/ URLs
      // indexed below that cut-off — these stop all of them 404ing.
      { source: "/portfolio-collections/:slug*", destination: "/projects", permanent: true },
      { source: "/post/:slug*", destination: "/blog", permanent: true },
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
