/**
 * Open Graph share images.
 *
 * Next.js merges metadata **shallowly**: a page that exports its own
 * `openGraph` block replaces the root block wholesale — including the image
 * that `src/app/opengraph-image.jpg` injects. See
 * node_modules/next/dist/docs/01-app/03-api-reference/04-functions/generate-metadata.md
 * ("Metadata objects ... are shallowly merged", "All openGraph fields from
 * app/layout.js are replaced").
 *
 * The practical result: for months only the homepage shipped an og:image, so
 * every other page shared to WhatsApp as a bare link with no preview. Any
 * `openGraph` block anywhere in this app must therefore carry its own
 * `images` — hence this helper.
 *
 * Paths are relative; `metadataBase` in the root layout resolves them.
 */

import type { ServiceSlug } from "./services-data";

/**
 * Photographs of our own delivered work, chosen so each share shows the
 * service being described. Landscape only — the portrait shots in
 * /images/projects crop badly to Open Graph's 1.91:1.
 */
export const OG_IMAGE = {
  interiors: "/images/projects/living-room-led-ceiling-marble-tv-unit-pune.webp",
  painting: "/images/projects/bedroom-led-profile-ceiling-pune.webp",
  falseCeiling: "/images/projects/false-ceiling-led-cove-lighting-pune.webp",
  modularKitchen: "/images/projects/modular-kitchen-grey-white-granite-pune.webp",
  furniture: "/images/projects/tv-unit-marble-panel-design-pune.webp",
  wallpaper: "/images/projects/wooden-false-ceiling-wallpaper-pune.webp",
  /** Branded card, already a true 1200x630 — used where no project photo fits. */
  brand: "/opengraph-image.jpg",
} as const;

/** Each service page shares a photo of that service, not a generic card. */
export const SERVICE_OG: Record<ServiceSlug, string> = {
  "interior-design": OG_IMAGE.interiors,
  "commercial-interior-design": OG_IMAGE.interiors,
  "modular-kitchen": OG_IMAGE.modularKitchen,
  "home-painting": OG_IMAGE.painting,
  "false-ceiling": OG_IMAGE.falseCeiling,
  "custom-furniture": OG_IMAGE.furniture,
};

export function ogImages(url: string, alt: string) {
  return [{ url, alt }];
}
