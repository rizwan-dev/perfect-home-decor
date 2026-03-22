import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PaintingLocationLanding } from "@/components/PaintingLocationLanding";
import { paintingLocationPageMetadata } from "@/lib/painting-location-metadata";
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
  return paintingLocationPageMetadata(area);
}

export default async function HomePaintingAreaPage({ params }: Props) {
  const { area } = await params;
  if (!isAreaSlug(area)) notFound();
  return <PaintingLocationLanding area={area} />;
}
