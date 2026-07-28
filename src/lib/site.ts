/**
 * Canonical origin — `www`, deliberately.
 *
 * Vercel serves www as the primary domain and 308s the apex to it, and the
 * business has been indexed at www.perfecthomedecor.in for years (the previous
 * Wix site lived there, so backlinks, directory listings and the Google
 * Business Profile all point at www). Emitting apex canonicals while the server
 * redirects apex → www would contradict itself on every page; matching the
 * hostname Google already associates with the business also avoids stacking a
 * hostname migration on top of a full site rebuild.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.perfecthomedecor.in";

/**
 * Stable link to the Google Business Profile (Maps listing).
 * CID 15641839200569855066 == ftid 0x3bc2c345208138ed:0xd912f9e0ffbf0c5a;
 * Places API Place ID: ChIJ7TiBIEXDwjsRWgy__-D5Etk (see .env.example).
 */
export const GOOGLE_BUSINESS_KNOWLEDGE_URL =
  "https://maps.google.com/?cid=15641839200569855066";

export const COMPANY = {
  name: "Perfect Home Decor",
  legalName: "Perfect Home Decor",
  tagline: "Premium interiors & home services in Pune",
  city: "Pune",
  /** Locality for postal address */
  addressLocality: "Wagholi",
  state: "Maharashtra",
  country: "IN",
  postalCode: "412207",
  streetAddress: "405, Jubilation Society, Awhalwadi Road",
  /**
   * Verified against the Google Business Profile via the Places API
   * (Place ID ChIJ7TiBIEXDwjsRWgy__-D5Etk) on 2026-07-27. Publishing `geo` in
   * LocalBusiness schema helps Google tie the site to the map listing, which is
   * where most local interior searches actually convert.
   */
  latitude: 18.573855,
  longitude: 73.9872958,
  /** Full mailing / visit address (single line) */
  address:
    "405, Jubilation Society, Awhalwadi Road, Wagholi, Pune 412207, Maharashtra",
  /** Service coverage (separate from registered office) */
  serviceAreaLine:
    "Serving Kharadi, Wagholi, Viman Nagar, Lohegaon, Magarpatta, Kesnand & nearby Pune",
  phoneDisplay: "+91 90312 63531",
  phoneTel: "+919031263531",
  whatsappDisplay: "+91 90312 63531",
  whatsappE164: "919031263531",
  /**
   * Public contact address, shown on every page and in LocalBusiness schema.
   * Zoho-hosted on the domain, with MX, SPF and DKIM (selector `zmail`) all
   * published — so replies authenticate and clear the domain's DMARC policy,
   * which is set to p=quarantine.
   *
   * Lead-form enquiries are delivered here too. Set LEAD_EMAIL_TO to send them
   * somewhere else without changing the address shown on the site.
   */
  email: "info@perfecthomedecor.in",
  hours: "Every day: 9:00 AM – 9:00 PM",
  yearsExperience: 12,
  /** Completed projects / clients served */
  happyClients: 1000,
  /** Residential & commercial interior projects delivered (marketing stat). */
  projectsDelivered: 1000,
  /**
   * Approximate gated communities & towers with delivered work—used for homepage
   * credibility band (tune to your portfolio).
   */
  landmarkCommunitiesServed: 45,
  /** Overall star rating shown on Google Business Profile */
  googleStarRating: 5,
  /**
   * Fallback review count when `GOOGLE_PLACES_API_KEY` + `GOOGLE_PLACE_ID` are not set
   * or the Places API request fails. Prefer configuring env for live counts.
   * Matches the live Google Business Profile as of 2026-07-25 (5.0★, 570 reviews).
   */
  googleReviewCount: 570,
  facebookUrl: "https://www.facebook.com/theperfecthomedecor",
  instagramUrl: "https://www.instagram.com/perfecthomedecore/",
  /** Keyless embed pinned to the exact Maps listing via CID (not an address search). */
  mapEmbedUrl: "https://maps.google.com/maps?cid=15641839200569855066&output=embed",
} as const;

export function whatsappLink(message: string) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${COMPANY.whatsappE164}?text=${text}`;
}

export const AREAS = [
  { slug: "kharadi", label: "Kharadi" },
  { slug: "wagholi", label: "Wagholi" },
  { slug: "viman-nagar", label: "Viman Nagar" },
  { slug: "lohegaon", label: "Lohegaon" },
  { slug: "magarpatta", label: "Magarpatta" },
  { slug: "kesnand", label: "Kesnand" },
] as const;

export type AreaSlug = (typeof AREAS)[number]["slug"];
