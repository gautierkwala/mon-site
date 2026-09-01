import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";



export default function robots(): MetadataRoute.Robots {
  return {
    // Aucun blocage par agent : les robots des assistants (GPTBot, ClaudeBot,
    // PerplexityBot...) doivent pouvoir lire le site pour pouvoir le citer.
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/test", "/5-ans"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
