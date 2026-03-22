import type { Metadata } from "next";
import { COMPANY, SITE_URL, type AreaSlug } from "./site";
import { falseCeilingLocationContent } from "./false-ceiling-locations-data";

export function falseCeilingLocationPageMetadata(area: AreaSlug): Metadata {
  const c = falseCeilingLocationContent[area];
  const path = `/false-ceiling-in-${area}`;
  return {
    title: `False ceiling & POP in ${c.areaLabel}, Pune | ${COMPANY.name}`,
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
