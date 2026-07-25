import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FalseCeilingLocationLanding } from "@/components/FalseCeilingLocationLanding";
import { LocationLanding } from "@/components/LocationLanding";
import { ModularKitchenLocationLanding } from "@/components/ModularKitchenLocationLanding";
import { PaintingLocationLanding } from "@/components/PaintingLocationLanding";
import { falseCeilingLocationPageMetadata } from "@/lib/false-ceiling-location-metadata";
import { locationPageMetadata } from "@/lib/location-metadata";
import { modularKitchenLocationPageMetadata } from "@/lib/modular-kitchen-location-metadata";
import { paintingLocationPageMetadata } from "@/lib/painting-location-metadata";
import { AREAS, type AreaSlug } from "@/lib/site";

/**
 * One dynamic segment serves every locality landing family while keeping the
 * flat, keyword-rich URLs (e.g. /home-painting-in-kharadi). Next.js does not
 * support partial dynamic segments like `home-painting-in-[area]`, so the
 * service prefix is parsed out of the single slug here instead.
 */
const LOCATION_PAGE_FAMILIES = [
  { prefix: "interior-designer-in-" },
  { prefix: "home-painting-in-" },
  { prefix: "false-ceiling-in-" },
  { prefix: "modular-kitchen-in-" },
] as const;

type FamilyPrefix = (typeof LOCATION_PAGE_FAMILIES)[number]["prefix"];

function parseLocationSlug(
  slug: string,
): { prefix: FamilyPrefix; area: AreaSlug } | null {
  for (const family of LOCATION_PAGE_FAMILIES) {
    if (!slug.startsWith(family.prefix)) continue;
    const area = slug.slice(family.prefix.length);
    const match = AREAS.find((a) => a.slug === area);
    if (match) return { prefix: family.prefix, area: match.slug };
  }
  return null;
}

type Props = { params: Promise<{ locationSlug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCATION_PAGE_FAMILIES.flatMap((family) =>
    AREAS.map((a) => ({ locationSlug: `${family.prefix}${a.slug}` })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locationSlug } = await params;
  const parsed = parseLocationSlug(locationSlug);
  if (!parsed) return {};
  switch (parsed.prefix) {
    case "interior-designer-in-":
      return locationPageMetadata(parsed.area);
    case "home-painting-in-":
      return paintingLocationPageMetadata(parsed.area);
    case "false-ceiling-in-":
      return falseCeilingLocationPageMetadata(parsed.area);
    case "modular-kitchen-in-":
      return modularKitchenLocationPageMetadata(parsed.area);
  }
}

export default async function LocationPage({ params }: Props) {
  const { locationSlug } = await params;
  const parsed = parseLocationSlug(locationSlug);
  if (!parsed) notFound();
  switch (parsed.prefix) {
    case "interior-designer-in-":
      return <LocationLanding area={parsed.area} />;
    case "home-painting-in-":
      return <PaintingLocationLanding area={parsed.area} />;
    case "false-ceiling-in-":
      return <FalseCeilingLocationLanding area={parsed.area} />;
    case "modular-kitchen-in-":
      return <ModularKitchenLocationLanding area={parsed.area} />;
  }
}
