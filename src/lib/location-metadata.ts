import type { Metadata } from "next";
import { SITE_URL, type AreaSlug } from "./site";
import { locationContent } from "./locations-data";
import { OG_IMAGE, ogImages } from "./og-image";

export function locationPageMetadata(area: AreaSlug): Metadata {
  const c = locationContent[area];
  const path = `/interior-designer-in-${area}`;
  return {
    title: `Home Interior Design in ${c.areaLabel}`,
    description: c.metaDescription,
    keywords: [
      `home interior ${c.areaLabel}`,
      `home interior design ${c.areaLabel}`,
      `home interior service ${c.areaLabel}`,
      `interior designer ${c.areaLabel}`,
      `interior design ${c.areaLabel} Pune`,
      "interior designer Pune",
    ],
    alternates: { canonical: path },
    openGraph: {
      title: c.headline,
      description: c.metaDescription,
      url: `${SITE_URL}${path}`,
      images: ogImages(
        OG_IMAGE.interiors,
        `Home interior design delivered in ${c.areaLabel}, Pune`,
      ),
    },
  };
}
