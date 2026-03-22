import { COMPANY } from "@/lib/site";

export type GooglePlaceReviewStats = {
  rating: number;
  userRatingsTotal: number;
  /** `google` when Places API returned data; `fallback` if env missing or request failed */
  source: "google" | "fallback";
};

/**
 * Live rating + review count from Google Maps / Business (Places Details API).
 *
 * Setup (server-only — never expose the key to the browser):
 * 1. Google Cloud Console → enable **Places API** (Classic) for your project.
 * 2. Create an API key; restrict it (IP for Node server, or HTTP referrer if you only call from Vercel).
 * 3. Find **Place ID**: https://developers.google.com/maps/documentation/places/web-service/place-id
 *    (search your business, copy Place ID like `ChIJ...`).
 * 4. Set in `.env.local`:
 *    GOOGLE_PLACES_API_KEY=...
 *    GOOGLE_PLACE_ID=...
 *
 * Cached for 1 hour via Next.js Data Cache (`revalidate: 3600`).
 * If unset or the API errors, values fall back to `COMPANY.googleStarRating` / `googleReviewCount`.
 */
export async function getGooglePlaceReviewStats(): Promise<GooglePlaceReviewStats> {
  const key = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  const fallback = (): GooglePlaceReviewStats => ({
    rating: COMPANY.googleStarRating,
    userRatingsTotal: COMPANY.googleReviewCount,
    source: "fallback",
  });

  if (!key?.trim() || !placeId?.trim()) {
    return fallback();
  }

  const url = new URL("https://maps.googleapis.com/maps/api/place/details/json");
  url.searchParams.set("place_id", placeId.trim());
  url.searchParams.set("fields", "rating,user_ratings_total");
  url.searchParams.set("key", key.trim());

  try {
    const res = await fetch(url.toString(), {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      console.warn("[Google Places] HTTP", res.status);
      return fallback();
    }

    const data = (await res.json()) as {
      status: string;
      error_message?: string;
      result?: { rating?: number; user_ratings_total?: number };
    };

    if (data.status !== "OK" || !data.result) {
      console.warn(
        "[Google Places]",
        data.status,
        data.error_message ?? "",
      );
      return fallback();
    }

    const { rating, user_ratings_total: total } = data.result;
    if (typeof rating !== "number" || typeof total !== "number") {
      return fallback();
    }

    return {
      rating,
      userRatingsTotal: total,
      source: "google",
    };
  } catch (e) {
    console.warn("[Google Places] fetch failed", e);
    return fallback();
  }
}

/** Display helper: 5 → "5", 4.7 → "4.7" */
export function formatGoogleRating(rating: number): string {
  const r = Math.round(rating * 10) / 10;
  return Number.isInteger(r) ? String(r) : r.toFixed(1);
}
