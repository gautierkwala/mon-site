---
name: article-hebdo
description: Rédige et publie l'article de blog hebdomadaire de kwala.fr à partir des supports d'atelier Kwala. À utiliser quand Gautier demande l'article de la semaine, un nouvel article de blog, ou dit « publie l'article ».
---

# Article de blog hebdomadaire de kwala.fr

Tu rédiges et tu publies l'article de la semaine. Va au bout : un article écrit,
commité et poussé en production.

## Où sont les choses

- Le site : `/Users/gautiercolson/Projets/Actifs/mon-site`. Next.js App Router,
  articles MDX dans `content/blog/`, branche `main`, déploiement Vercel
  automatique à chaque push. **`~/Desktop/Website26` et `~/Projets/Archives/*`
  sont de vieilles copies trompeuses : n'y touche jamais.**
- La pile de sujets : `content/sujets-blog.md`.
- La matière première : `/Users/gautiercolson/Documents/Kwala/Formation & Supports`.
  Les supports utilisables sont les PDF d'atelier dans
  `Ressources (JAB, ateliers)/Ressources/PDF`. Extrais le texte avec `pypdf`.
- Les auteurs et leurs domaines : `lib/auteurs.ts`.

## Choix du sujet

1. Lis `content/sujets-blog.md` et prends le **premier sujet non coché**.
2. Vérifie dans `content/blog/` qu'aucun article ne couvre déjà ce sujet. Si
   c'est le cas, coche-le avec la mention « déjà couvert » et passe au suivant.
3. Si tous les sujets sont cochés, propose-en un nouveau à partir des supports
   non encore exploités, ajoute-le au fichier et signale-le.

## Écriture

Lis les PDF indiqués comme source, puis écris un article **original** qui
s'appuie sur leur substance. Ne recopie jamais un support : reformule
entièrement dans la voix de Kwala.

Gabarit de référence : `content/blog/debut-rendez-vous-commercial.mdx`.

- Frontmatter : `title`, `slug`, `date` (le jeudi de publication), `author`,
  `tag` (« Techniques de vente », « Prospection » ou « Management commercial »),
  `description` (une phrase, 150 à 200 caractères). **N'ajoute pas de champ
  `image`** tant qu'aucune photo n'est disponible : le gabarit s'en passe.
- `import { FaqArticle } from "@/components/blog/FaqArticle";` après le
  frontmatter.
- Une introduction qui pose le problème et contient un lien vers une page
  d'offre.
- Une section `## En bref` avec cinq puces.
- Quatre à six sections `## ...` séparées par `---`, dont au moins un tableau
  Markdown et au moins une citation `>`.
- Une dernière section sur les erreurs fréquentes.
- Un bloc `<FaqArticle questions={[...]} />` avec sept questions/réponses de
  trois à cinq phrases, rédigées pour être reprises telles quelles par un
  assistant IA.
- 1500 à 1900 mots. Vouvoiement, phrases courtes, pas de superlatifs, pas de
  « dans un monde où », pas d'emoji.
- Trois à six liens internes : au moins un vers `/formation-commerciale-lyon`,
  `/coaching-dirigeants-lyon` ou `/coaching-equipe-commerciale-lyon`, et deux ou
  trois vers des articles réellement présents dans `content/blog/`. Vérifie
  chaque slug avant de l'écrire.

**Interdits :** inventer un chiffre, une étude, un témoignage ou un cas client
nominatif ; reproduire du texte des livres du dossier parent (Cardone, Voss,
Sinek) ; citer la marque « JAB » ou ses supports ; republier un slug existant.

## Attribution

L'auteur est celui indiqué dans la pile de sujets, sauf si un autre coach
correspond manifestement mieux d'après `lib/auteurs.ts`. Vérifie ensuite la
répartition : compte les `author:` de `content/blog/*.mdx` et, à compétence
égale, choisis le coach qui en a le moins.

## Publication

1. `npx tsc --noEmit` puis `npm run build`. Les deux doivent passer et
   `/blog/<slug>` doit apparaître dans les pages générées.
2. Coche le sujet dans `content/sujets-blog.md` avec sa date et son slug.
3. `git add -A`, commit `content(blog): <sujet>`, ligne vide, puis
   `Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>`.
4. `git push origin main`.
5. Vérifie que `https://www.kwala.fr/blog/<slug>` répond 200 et que le slug
   figure dans `https://www.kwala.fr/sitemap.xml`.

Si le build échoue, corrige et recommence. Si le push est refusé, ne force
rien : laisse le commit en local et dis-le.

## Compte rendu

Termine par un message court : le titre publié, l'auteur, l'URL, les mots-clés
visés, et l'URL à coller dans la Search Console pour demander l'indexation.
Signale tout ce qui a bloqué.
