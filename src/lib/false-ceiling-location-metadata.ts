import type { Metadata } from "next";
import { SITE_URL, type AreaSlug } from "./site";
import { falseCeilingLocationContent } from "./false-ceiling-locations-data";
import { OG_IMAGE, ogImages } from "./og-image";

export function falseCeilingLocationPageMetadata(area: AreaSlug): Metadata {
  const c = falseCeilingLocationContent[area];
  const path = `/false-ceiling-in-${area}`;
  return {
    title: `False ceiling & POP in ${c.areaLabel}, Pune`,
    description: c.metaDescription,
    alternates: { canonical: path },
    keywords: c.metaKeywords,
    openGraph: {
      title: c.headline,
      description: c.metaDescription,
      url: `${SITE_URL}${path}`,
      images: ogImages(
        OG_IMAGE.falseCeiling,
        `False ceiling with cove lighting delivered in ${c.areaLabel}, Pune`,
      ),
    },
  };
}
