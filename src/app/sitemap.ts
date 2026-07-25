import type { MetadataRoute } from "next";
import { AREAS, SITE_URL } from "@/lib/site";
import { blogPosts } from "@/lib/blog-data";
import { SERVICE_SLUGS } from "@/lib/services-data";

/**
 * Stable content-change marker. Bump when site content meaningfully changes —
 * `new Date()` at build time makes every deploy look like a full-site change,
 * which teaches crawlers to distrust lastModified.
 */
const LAST_CONTENT_UPDATE = new Date("2026-07-25");

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_URL;
  const staticPaths = ["", "/about", "/contact", "/projects", "/services", "/blog"];
  const entries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${base}${path || "/"}`,
    lastModified: LAST_CONTENT_UPDATE,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));

  for (const slug of SERVICE_SLUGS) {
    entries.push({
      url: `${base}/services/${slug}`,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: "monthly",
      priority: 0.9,
    });
  }

  for (const a of AREAS) {
    entries.push({
      url: `${base}/interior-designer-in-${a.slug}`,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: "monthly",
      priority: 0.85,
    });
    entries.push({
      url: `${base}/home-painting-in-${a.slug}`,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: "monthly",
      priority: 0.84,
    });
    entries.push({
      url: `${base}/false-ceiling-in-${a.slug}`,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: "monthly",
      priority: 0.84,
    });
    entries.push({
      url: `${base}/modular-kitchen-in-${a.slug}`,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: "monthly",
      priority: 0.84,
    });
  }

  for (const post of blogPosts) {
    entries.push({
      url: `${base}/blog/${post.slug}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: "monthly",
      priority: 0.75,
    });
  }

  return entries;
}
