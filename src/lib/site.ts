export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://perfecthomedecor.in";

/** Google Search URL that opens the business knowledge panel (Google Business Profile). */
export const GOOGLE_BUSINESS_KNOWLEDGE_URL =
  "https://www.google.com/search?gs_ssp=eJzj4tVP1zc0LLFItiwrLLQ0YLRSNagwTko2SjY2MTUysDA0tkhNsTKoSLE0NEqzTDVIS0tKM0g2TfQSKkgtSktNLlHIyM9NVUhJTc4vAgAWphaG&q=perfect+home+decor&rlz=1C5GCCM_en&oq=per&gs_lcrp=EgZjaHJvbWUqEggBEC4YJxivARjHARiABBiKBTIGCAAQRRg7MhIIARAuGCcYrwEYxwEYgAQYigUyBggCEEUYOTIGCAMQRRg7MgoIBBAAGLEDGIAEMgoIBRAAGLEDGIAEMgYIBhBFGDwyBggHEEUYPNIBCDMxMDBqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8";

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
  streetAddress: "405, Jubilation Society, Ahwalwadi Road",
  /** Full mailing / visit address (single line) */
  address:
    "405, Jubilation Society, Ahwalwadi Road, Wagholi, Pune 412207, Maharashtra",
  /** Service coverage (separate from registered office) */
  serviceAreaLine:
    "Serving Kharadi, Wagholi, Viman Nagar, Lohegaon, Magarpatta, Kesnand & nearby Pune",
  phoneDisplay: "+91 90312 63531",
  phoneTel: "+919031263531",
  whatsappDisplay: "+91 90312 63531",
  whatsappE164: "919031263531",
  email: "perfecthomedecor.in@gmail.com",
  hours: "Mon–Sat: 10:00–19:00",
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
   */
  googleReviewCount: 560,
  facebookUrl: "https://www.facebook.com/theperfecthomedecor",
  instagramUrl: "https://www.instagram.com/perfecthomedecore/",
  mapEmbedUrl:
    "https://www.google.com/maps?q=Perfect+Home+Decor%2C+405%2C+Jubilation+Society%2C+Ahwalwadi+Road%2C+Wagholi%2C+Pune+412207&output=embed",
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
