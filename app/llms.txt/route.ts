import { getAllPosts } from "@/lib/blog";
import { AUTEURS } from "@/lib/auteurs";
import { QUESTIONS } from "@/components/11-Questions";
import { ADRESSE_LISIBLE, SITE_URL, TELEPHONE_LISIBLE, EMAIL } from "@/lib/site";

// Convention llms.txt : un resume court et factuel du site, en Markdown, a
// destination des assistants (ChatGPT, Perplexity, Claude...). Il ne remplace
// pas les pages, il donne un point d'entree ou l'essentiel est deja
// desambiguise : qui, quoi, ou, et les reponses aux questions courantes.
//
// Genere depuis les memes sources que le site (articles, FAQ, coordonnees) :
// il ne peut pas se desynchroniser du contenu reel.
export const dynamic = "force-static";

export function GET() {
  const posts = getAllPosts();

  const texte = `# Kwala

> Kwala est un cabinet de coaching commercial B2B installé à Lyon. Il accompagne
> les dirigeants, les entrepreneurs et les équipes commerciales à générer plus de
> rendez-vous et à conclure davantage, par de l'entraînement sur leurs dossiers
> réels plutôt que par des cours théoriques.

## En bref

- Activité : coaching commercial B2B, en formation-action
- Deux publics : dirigeants et entrepreneurs qui vendent eux-mêmes ; équipes commerciales B2B
- Lieu : ${ADRESSE_LISIBLE}. Sessions en présentiel à Lyon, et partout en France pour les équipes
- Durée d'un accompagnement : 3 à 12 mois
- Financement : éligible à un budget OPCO via l'organisme de formation porteur. Kwala n'est pas certifié Qualiopi en propre
- Contact : ${EMAIL}, ${TELEPHONE_LISIBLE}

## Pages principales

- [Coaching commercial à Lyon pour dirigeants](${SITE_URL}/coaching-dirigeants-lyon) : accompagnement des dirigeants et entrepreneurs qui portent eux-mêmes le développement commercial
- [Coaching commercial d'équipe à Lyon](${SITE_URL}/coaching-equipe-commerciale-lyon) : accompagnement des équipes commerciales B2B
- [Blog](${SITE_URL}/blog) : ${posts.length} articles sur la vente B2B, la prospection et le management commercial

## Questions fréquentes

${QUESTIONS.map((q) => `### ${q.question}\n\n${q.reponse}`).join("\n\n")}

## Les coachs

${AUTEURS.map(
  (a) => `- [${a.nom}](${SITE_URL}/blog/auteurs/${a.slug}), ${a.role} : ${a.expertises.join(", ").toLowerCase()}`
).join("\n")}

## Articles

${posts.map((p) => `- [${p.title}](${SITE_URL}/blog/${p.slug}) : ${p.description}`).join("\n")}
`;

  return new Response(texte, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
