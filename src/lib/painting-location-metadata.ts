import type { Metadata } from "next";
import { SITE_URL, type AreaSlug } from "./site";
import { paintingLocationContent } from "./painting-locations-data";

export function paintingLocationPageMetadata(area: AreaSlug): Metadata {
  const c = paintingLocationContent[area];
  const path = `/home-painting-in-${area}`;
  return {
    title: `Wall painting in ${c.areaLabel}, Pune`,
    description: c.metaDescription,
    alternates: { canonical: path },
    keywords: c.metaKeywords,
    openGraph: {
      title: c.headline,
      description: c.metaDescription,
      url: `${SITE_URL}${path}`,
    },
  };
}
