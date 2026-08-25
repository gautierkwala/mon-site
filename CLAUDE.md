# Projet Kwala.fr

## Stack
Next.js (App Router) + TypeScript + Tailwind CSS. Déploiement Vercel.

## Source de vérité
Figma : https://www.figma.com/design/nkHSm6H9VmgkOG0Ot9T8VP/Kwala.fr
- Frame principale desktop 1440px : node 132:2581
- Frame "Offre Équipe" : node 132-5150

## Couleurs (variables Figma — utiliser UNIQUEMENT celles-ci)
onyx: #12130f (texte principal)
white: #ffffff
wisteria: #8093f1 (accent / CTA)
alabaster: #eae7e4 (fond clair)
dust: #e1ddd8 (fond tags et cartes)

## Typographie
- Asap : titres et UI (Regular, Medium, SemiBold, Italic, Medium Italic, Bold Italic)
- DM Sans : paragraphes (Regular, Medium)
Les deux via next/font/google, self-hostées.

## Structure (ordre vertical)
00 HEADER / 01 HERO / 02 PARTENAIRES / 03 MIEUX CLOSER / 04 VISION /
05 ON COACHE TOUTES LES CASES / 06 NOS OFFRES / 07 RÉSULTATS /
08 COACHING EN LIGNE / 09 AVANT LUMPUR / FOOTER

## Règles impératives
1. Un composant par section dans /components, nommé d'après le calque Figma.
2. Les décors répétitifs (confettis, pointillés, fond ondulé) sont exportés en UNE image WebP par section, en background-image, jamais en SVG inline. Interdiction absolue d'inliner les ~2200 vecteurs.
3. Toutes les photos via next/image, format WebP, avec alt text.
4. Responsive : desktop 1440px fidèle au Figma. Mobile (390px) et tablette (768px) à concevoir logiquement — pas de maquette mobile fournie. Grilles multi-colonnes → 1 colonne. Menu header → burger.
5. HTML sémantique : un seul h1 (le titre Hero), header/nav/main/section/footer.
6. Après chaque section codée : screenshot Playwright en 1440 et 390, comparaison avec la frame Figma, correction des écarts avant de passer à la suivante.
7. Ne jamais coder plusieurs sections d'un coup sans validation intermédiaire.
