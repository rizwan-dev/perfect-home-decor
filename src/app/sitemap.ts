import type { MetadataRoute } from "next";
import { AREAS, SITE_URL } from "@/lib/site";
import { blogPosts } from "@/lib/blog-data";
import { SERVICE_SLUGS } from "@/lib/services-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_URL;
  const staticPaths = ["", "/about", "/contact", "/projects", "/services", "/blog"];
  const entries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${base}${path || "/"}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));

  for (const slug of SERVICE_SLUGS) {
    entries.push({
      url: `${base}/services/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    });
  }

  for (const a of AREAS) {
    entries.push({
      url: `${base}/interior-designer-in-${a.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    });
    entries.push({
      url: `${base}/home-painting-in-${a.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.84,
    });
    entries.push({
      url: `${base}/false-ceiling-in-${a.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.84,
    });
    entries.push({
      url: `${base}/modular-kitchen-in-${a.slug}`,
      lastModified: new Date(),
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
