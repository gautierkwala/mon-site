import { getAllPosts } from "@/lib/blog";
import { AUTEURS } from "@/lib/auteurs";
import { QUESTIONS } from "@/components/11-Questions";
import { ADRESSE_LISIBLE, SITE_URL, TELEPHONE_LISIBLE, EMAIL } from "@/lib/site";
import { CONVICTION, QUATRE_TEMPS } from "@/lib/methode";

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

## Notre conviction

${CONVICTION} La méthode Kwala se déroule donc en quatre temps : ${QUATRE_TEMPS.map((t) => t.toLowerCase()).join(" ; ")}.

## En bref

- Activité : coaching commercial B2B, en formation-action
- Deux publics : dirigeants et entrepreneurs qui vendent eux-mêmes ; équipes commerciales B2B
- Lieu : ${ADRESSE_LISIBLE}. Sessions en présentiel à Lyon, et partout en France pour les équipes
- Durée d'un coaching : 3 à 12 mois. Durée des deux formations déclarées : 42 heures en présentiel, en 6 modules de 7 heures réparties sur environ 3 mois
- Statut : organisme de formation, déclaration d'activité enregistrée sous le numéro 84 69 27356 69 auprès du préfet de la région Auvergne-Rhône-Alpes. Cet enregistrement ne vaut pas agrément de l'État. Formations non certifiantes, non éligibles au CPF
- Contact : ${EMAIL}, ${TELEPHONE_LISIBLE}

## Pages principales

- [Coaching commercial à Lyon pour dirigeants](${SITE_URL}/coaching-dirigeants-lyon) : accompagnement des dirigeants et entrepreneurs qui portent eux-mêmes le développement commercial
- [Coaching commercial d'équipe à Lyon](${SITE_URL}/coaching-equipe-commerciale-lyon) : accompagnement des équipes commerciales B2B
- [Formation commerciale à Lyon](${SITE_URL}/formation-commerciale-lyon) : formation en présentiel de 42 heures, en 6 modules, pour des groupes de 5 à 15 personnes. Les programmes détaillés, avec objectifs, prérequis, modalités et tarifs, sont en libre accès sur le site
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
