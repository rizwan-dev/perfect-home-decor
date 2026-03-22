import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ModularKitchenLocationLanding } from "@/components/ModularKitchenLocationLanding";
import { modularKitchenLocationPageMetadata } from "@/lib/modular-kitchen-location-metadata";
import { AREAS, type AreaSlug } from "@/lib/site";

type Props = { params: Promise<{ area: string }> };

export function generateStaticParams() {
  return AREAS.map((a) => ({ area: a.slug }));
}

function isAreaSlug(s: string): s is AreaSlug {
  return AREAS.some((a) => a.slug === s);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { area } = await params;
  if (!isAreaSlug(area)) return {};
  return modularKitchenLocationPageMetadata(area);
}

export default async function ModularKitchenAreaPage({ params }: Props) {
  const { area } = await params;
  if (!isAreaSlug(area)) notFound();
  return <ModularKitchenLocationLanding area={area} />;
}
