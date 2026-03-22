import type { Metadata } from "next";
import { LocationLanding } from "@/components/LocationLanding";
import { locationPageMetadata } from "@/lib/location-metadata";

export const metadata: Metadata = locationPageMetadata("lohegaon");

export default function Page() {
  return <LocationLanding area="lohegaon" />;
}
