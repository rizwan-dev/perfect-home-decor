import type { BlogPost } from "./blog-data";
import { blogPosts } from "./blog-data";

export function slugifyHeading(heading: string, index: number): string {
  const base = heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return base ? `${base}-${index}` : `section-${index}`;
}

export function estimateReadMinutes(post: BlogPost): number {
  const text = post.sections.map((s) => s.paragraphs.join(" ")).join(" ");
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(6, Math.round(words / 200));
}

export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const current = blogPosts.find((p) => p.slug === slug);
  if (!current) return [];
  const others = blogPosts.filter((p) => p.slug !== slug);
  const sameCategory = others.filter((p) => p.category === current.category);
  const rest = others.filter((p) => p.category !== current.category);
  return [...sameCategory, ...rest].slice(0, limit);
}
