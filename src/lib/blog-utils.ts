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

/**
 * Topic groups for the guides hub — same posts as `blogPosts`, organised by
 * reader intent instead of publish date, matching how competitors structure
 * their guides sections. Every post's category maps to exactly one group.
 */
const GUIDE_GROUPS: { title: string; categories: string[] }[] = [
  {
    title: "Before you hire",
    categories: ["Home Interior Design", "Interior design", "Modular kitchen"],
  },
  {
    title: "Room by room",
    categories: [
      "Bedroom",
      "Kids room",
      "Living room",
      "Dining",
      "Study & office",
      "Storage",
    ],
  },
  {
    title: "Materials & technique",
    categories: ["Painting", "False ceiling", "Waterproofing"],
  },
  {
    title: "Seasonal",
    categories: ["Festivals"],
  },
];

export function getGuideGroups(): { title: string; posts: BlogPost[] }[] {
  return GUIDE_GROUPS.map((group) => ({
    title: group.title,
    posts: blogPosts.filter((p) => group.categories.includes(p.category)),
  })).filter((group) => group.posts.length > 0);
}
