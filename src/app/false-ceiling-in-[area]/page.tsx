import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FalseCeilingLocationLanding } from "@/components/FalseCeilingLocationLanding";
import { falseCeilingLocationPageMetadata } from "@/lib/false-ceiling-location-metadata";
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
  return falseCeilingLocationPageMetadata(area);
}

export default async function FalseCeilingAreaPage({ params }: Props) {
  const { area } = await params;
  if (!isAreaSlug(area)) notFound();
  return <FalseCeilingLocationLanding area={area} />;
}
