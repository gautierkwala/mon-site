import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { AUTEURS } from "@/lib/auteurs";
import { SITE_URL } from "@/lib/site";



export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    // Pages de destination commerciales : priorite juste sous l'accueil,
    // ce sont les cibles des requetes "coaching commercial Lyon".
    {
      url: `${SITE_URL}/coaching-dirigeants-lyon`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/formation-commerciale-lyon`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/coaching-equipe-commerciale-lyon`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/blog`,
      // La liste bouge a chaque publication : on date sur l'article le plus
      // recent plutot que sur la date du build.
      lastModified: posts[0] ? new Date(`${posts[0].date}T12:00:00Z`) : new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    // Pages auteurs : elles portent le signal d'expertise rattache aux
    // articles, elles ont vocation a etre explorees.
    ...AUTEURS.map((a) => ({
      url: `${SITE_URL}/blog/auteurs/${a.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.4,
    })),
    // Pages legales : indexables mais sans enjeu de positionnement.
    ...["/mentions-legales", "/confidentialite"].map((chemin) => ({
      url: `${SITE_URL}${chemin}`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
    ...posts.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: new Date(`${post.date}T12:00:00Z`),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
