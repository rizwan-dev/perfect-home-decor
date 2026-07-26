import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Deliberately not listing /admin: robots.txt is public, so a Disallow
      // line would announce the path to anyone reading it. On this domain the
      // route 404s (see proxy.ts), and on the deployment host it is behind
      // Basic auth and sends X-Robots-Tag: noindex — so there is nothing to
      // gain by naming it here.
      disallow: ["/api/"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL.replace(/^https?:\/\//, ""),
  };
}
