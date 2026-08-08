import type { Metadata } from "next";
import { SITE_URL, type AreaSlug } from "./site";
import { modularKitchenLocationContent } from "./modular-kitchen-locations-data";
import { OG_IMAGE, ogImages } from "./og-image";

export function modularKitchenLocationPageMetadata(area: AreaSlug): Metadata {
  const c = modularKitchenLocationContent[area];
  const path = `/modular-kitchen-in-${area}`;
  return {
    title: `Modular kitchen in ${c.areaLabel}, Pune`,
    description: c.metaDescription,
    alternates: { canonical: path },
    keywords: c.metaKeywords,
    openGraph: {
      title: c.headline,
      description: c.metaDescription,
      url: `${SITE_URL}${path}`,
      images: ogImages(
        OG_IMAGE.modularKitchen,
        `Modular kitchen delivered in ${c.areaLabel}, Pune`,
      ),
    },
  };
}
