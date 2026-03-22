import type { Metadata } from "next";
import { COMPANY, SITE_URL, type AreaSlug } from "./site";
import { locationContent } from "./locations-data";

export function locationPageMetadata(area: AreaSlug): Metadata {
  const c = locationContent[area];
  const path = `/interior-designer-in-${area}`;
  return {
    title: `Interior designer in ${c.areaLabel} | ${COMPANY.name}`,
    description: c.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      title: c.headline,
      description: c.metaDescription,
      url: `${SITE_URL}${path}`,
    },
  };
}
