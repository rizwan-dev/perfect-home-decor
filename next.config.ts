import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
