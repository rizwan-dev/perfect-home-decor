import type { Metadata } from "next";
import { LocationLanding } from "@/components/LocationLanding";
import { locationPageMetadata } from "@/lib/location-metadata";

export const metadata: Metadata = locationPageMetadata("kharadi");

export default function Page() {
  return <LocationLanding area="kharadi" />;
}
