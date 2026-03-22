import type { GooglePlaceReviewStats } from "@/lib/google-place-reviews";
import { COMPANY, GOOGLE_BUSINESS_KNOWLEDGE_URL, SITE_URL } from "./site";

export function localBusinessJsonLd(googleStats?: GooglePlaceReviewStats | null) {
  const rating = googleStats?.rating ?? COMPANY.googleStarRating;
  const reviewCount =
    googleStats?.userRatingsTotal ?? COMPANY.googleReviewCount;
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#business`,
    name: COMPANY.name,
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80",
    url: SITE_URL,
    telephone: COMPANY.phoneTel,
    email: COMPANY.email,
    sameAs: [
      GOOGLE_BUSINESS_KNOWLEDGE_URL,
      COMPANY.facebookUrl,
      COMPANY.instagramUrl,
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
      ],
      opens: "10:00",
      closes: "19:00",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: String(rating),
      bestRating: "5",
      worstRating: "1",
      reviewCount: String(reviewCount),
    },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Ananya K." },
        reviewBody:
          "They translated our ideas into a calmer, more cohesive home. Execution was predictable.",
        reviewRating: { "@type": "Rating", ratingValue: "5" },
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Rohit S." },
        reviewBody:
          "Society coordination was smooth and the finishing detail stood out.",
        reviewRating: { "@type": "Rating", ratingValue: "5" },
      },
    ],
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
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: input.title,
    description: input.description,
    datePublished: input.publishedAt,
    ...(input.image ? { image: [input.image] } : {}),
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

