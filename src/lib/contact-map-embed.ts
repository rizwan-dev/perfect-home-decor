import { COMPANY } from "@/lib/site";

/** iframe src: optional custom embed, or Embed API + GOOGLE_PLACE_ID, else address fallback. */
export function getContactMapIframeSrc(): string {
  const custom = process.env.NEXT_PUBLIC_GOOGLE_MAPS_IFRAME_SRC?.trim();
  if (custom) return custom;

  const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_KEY?.trim();
  const placeId = process.env.GOOGLE_PLACE_ID?.trim();
  if (key && placeId) {
    const url = new URL("https://www.google.com/maps/embed/v1/place");
    url.searchParams.set("key", key);
    url.searchParams.set("q", `place_id:${placeId}`);
    url.searchParams.set("zoom", "16");
    return url.toString();
  }

  return COMPANY.mapEmbedUrl;
}
