import type { ServiceSlug } from "./services-data";

/**
 * Which guides each service page links to.
 *
 * Written to fix a real internal-linking gap. An inbound-link crawl of the
 * sitemap on 2026-08-09 found seven guides with exactly **one** inbound link —
 * the /blog index and nothing else — while the six slugs hardcoded in
 * LOCATION_GUIDES (see LocationLanding.tsx) each had seven. Those seven weakly
 * linked guides also drew zero Search Console impressions in July. Service
 * pages linked to no guides at all, which is the gap this closes.
 *
 * Mapped by topic rather than evenly: the guide has to be genuinely useful to
 * someone reading that service page, or the link is noise. Every guide appears
 * at least once, so none is left on a single inbound link.
 */
export const SERVICE_GUIDES: Record<ServiceSlug, string[]> = {
  "interior-design": [
    "complete-guide-home-interior-design-pune",
    "home-interior-design-kharadi-2bhk-3bhk-guide",
    "society-permission-interior-work-kharadi-pune",
    "living-room-interior-design-layout-lighting-pune",
    "bedroom-interior-design-pune-wardrobes-lighting",
    "kids-room-child-bedroom-interior-pune",
    "dining-area-interior-design-compact-flats-pune",
  ],
  "commercial-interior-design": [
    "office-cafe-interior-design-kharadi-pune",
    "home-office-study-room-interior-design-pune",
    "complete-guide-home-interior-design-pune",
  ],
  "modular-kitchen": [
    "modular-kitchen-pune-checklist-before-you-sign",
    "dining-area-interior-design-compact-flats-pune",
    "complete-guide-home-interior-design-pune",
  ],
  "home-painting": [
    "wall-painting-pune-monsoon-timing-finishes",
    "waterproofing-solutions-bathrooms-balconies-pune",
    "how-to-get-your-home-ready-for-diwali-pune",
    "false-ceiling-pop-pune-height-lighting-guide",
  ],
  "false-ceiling": [
    "false-ceiling-pop-pune-height-lighting-guide",
    "living-room-interior-design-layout-lighting-pune",
    "wall-painting-pune-monsoon-timing-finishes",
  ],
  "custom-furniture": [
    "modular-wardrobes-dressing-room-storage-pune",
    "bedroom-interior-design-pune-wardrobes-lighting",
    "home-office-study-room-interior-design-pune",
    "kids-room-child-bedroom-interior-pune",
  ],
};
