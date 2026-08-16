import type { GooglePlaceReviewStats } from "@/lib/google-place-reviews";
import { COMPANY, GOOGLE_BUSINESS_KNOWLEDGE_URL, SITE_URL } from "./site";

export function localBusinessJsonLd(googleStats?: GooglePlaceReviewStats | null) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#business`,
    name: COMPANY.name,
    image: `${SITE_URL}/images/stock/living-room-interior-warm-lighting-pune.webp`,
    logo: `${SITE_URL}/images/brand/logo.webp`,
    url: SITE_URL,
    telephone: COMPANY.phoneTel,
    email: COMPANY.email,
    sameAs: [
      GOOGLE_BUSINESS_KNOWLEDGE_URL,
      COMPANY.facebookUrl,
      COMPANY.instagramUrl,
      COMPANY.linkedinUrl,
      COMPANY.twitterUrl,
      COMPANY.pinterestUrl,
      COMPANY.youtubeUrl,
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.streetAddress,
      addressLocality: COMPANY.addressLocality,
      addressRegion: COMPANY.state,
      postalCode: COMPANY.postalCode,
      addressCountry: COMPANY.country,
    },
    areaServed: [
      "Kharadi",
      "Wagholi",
      "Viman Nagar",
      "Lohegaon",
      "Magarpatta",
      "Hadapsar",
      "Kesnand",
      "Pune",
    ],
    geo: {
      "@type": "GeoCoordinates",
      latitude: COMPANY.latitude,
      longitude: COMPANY.longitude,
    },
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "09:00",
      closes: "21:00",
    },
    // aggregateRating is only emitted when live Google Places data is
    // available — hardcoded fallback ratings without visible on-page reviews
    // risk a structured-data manual action.
    ...(googleStats?.source === "google"
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: String(googleStats.rating),
            bestRating: "5",
            worstRating: "1",
            reviewCount: String(googleStats.userRatingsTotal),
          },
        }
      : {}),
  };
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function serviceJsonLd(input: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: input.url,
    provider: { "@id": `${SITE_URL}/#business` },
    areaServed: { "@type": "City", name: "Pune" },
  };
}

export function blogPostingJsonLd(input: {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  author: string;
  image?: string;
  articleSection?: string;
  keywords?: string[];
}) {
  const url = `${SITE_URL}/blog/${input.slug}`;
  const absoluteImage = input.image?.startsWith("/")
    ? `${SITE_URL}${input.image}`
    : input.image;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: input.title,
    description: input.description,
    datePublished: input.publishedAt,
    ...(absoluteImage ? { image: [absoluteImage] } : {}),
    ...(input.articleSection
      ? { articleSection: input.articleSection }
      : {}),
    ...(input.keywords?.length
      ? { keywords: input.keywords.join(", ") }
      : {}),
    author: {
      "@type": "Organization",
      name: input.author,
    },
    publisher: {
      "@type": "Organization",
      name: COMPANY.name,
      url: SITE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    url,
  };
}

export function faqJsonLd(
  items: { q: string; a: string }[],
  options?: { pageUrl?: string },
) {
  const pageUrl = options?.pageUrl ?? SITE_URL;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    url: pageUrl,
    name: `Frequently asked questions — ${COMPANY.name}`,
    about: {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#business`,
      name: COMPANY.name,
      url: SITE_URL,
    },
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

