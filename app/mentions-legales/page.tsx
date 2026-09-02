import type { Metadata } from "next";
import { PageLegale } from "@/components/pages/PageLegale";
import { ADRESSE_LISIBLE, EMAIL, SIEGE_SOCIAL, TELEPHONE, TELEPHONE_LISIBLE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mentions légales | Kwala",
  description:
    "Mentions légales du site kwala.fr : éditeur, directeur de la publication, hébergeur et propriété intellectuelle.",
  alternates: { canonical: "/mentions-legales" },
};

export default function MentionsLegales() {
  return (
    <PageLegale
      titre="Mentions légales"
      chapeau="Les informations ci-dessous identifient l’éditeur et l’hébergeur du site kwala.fr, conformément à la loi pour la confiance dans l’économie numérique."
      miseAJour="2 septembre 2026"
    >
      <h2>Éditeur du site</h2>
      <p>
        Le site kwala.fr est édité par Kwala, société par actions simplifiée
        au capital de 10 200 euros.
      </p>
      <ul>
        <li>Siège social : {SIEGE_SOCIAL}</li>
        <li>Adresse d’accueil : {ADRESSE_LISIBLE}</li>
        <li>SIREN : 903 154 896</li>
        <li>SIRET du siège : 903 154 896 00026</li>
        <li>Immatriculée au RCS de Lyon sous le numéro 903 154 896</li>
        <li>Numéro de TVA intracommunautaire : FR75903154896</li>
        <li>Code APE : 70.22Z, conseil pour les affaires et autres conseils de gestion</li>
        <li>
          Téléphone : <a href={`tel:${TELEPHONE}`}>{TELEPHONE_LISIBLE}</a>
        </li>
        <li>
          Courriel : <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </li>
      </ul>

      <h2>Directeur de la publication</h2>
      <p>Gautier Colson, président de Kwala.</p>

      <h2>Hébergeur</h2>
      <p>
        Le site est hébergé par Vercel Inc., société de droit américain dont le
        siège est situé à San Francisco, en Californie, aux États-Unis. Site :{" "}
        <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
          vercel.com
        </a>
        .
      </p>

      <h2>Propriété intellectuelle</h2>
      <p>
        L’ensemble des contenus présents sur ce site, notamment les textes, les
        articles de blog, les photographies, les illustrations, les logos et la
        charte graphique, est la propriété de Kwala ou de ses partenaires, et
        protégé par le droit de la propriété intellectuelle.
      </p>
      <p>
        Toute reproduction, représentation, modification ou exploitation, totale
        ou partielle, sans autorisation écrite préalable de Kwala, est interdite.
        La citation d’un extrait reste possible dès lors que la source est
        clairement mentionnée et qu’un lien renvoie vers la page d’origine.
      </p>
      <p>
        Les marques et logos de tiers reproduits sur ce site, notamment ceux des
        partenaires et des entreprises accompagnées, demeurent la propriété de
        leurs titulaires respectifs et sont affichés avec leur accord.
      </p>

      <h2>Liens vers d’autres sites</h2>
      <p>
        Ce site comporte des liens vers des sites tiers, ainsi qu’un module
        d’affichage de témoignages fourni par Trustfolio. Kwala n’exerce aucun
        contrôle sur le contenu de ces sites et ne saurait être tenue
        responsable de leur disponibilité, de leur contenu ni de l’usage qui en
        est fait.
      </p>

      <h2>Responsabilité</h2>
      <p>
        Kwala s’efforce d’assurer l’exactitude et la mise à jour des
        informations publiées sur ce site. Les contenus sont fournis à titre
        informatif et ne constituent ni un conseil personnalisé, ni un
        engagement contractuel. Toute prestation fait l’objet d’un devis et de
        conditions convenues séparément.
      </p>

      <h2>Signaler un contenu ou nous écrire</h2>
      <p>
        Pour toute question relative à ce site, à un contenu publié ou à
        l’exercice de vos droits, écrivez à{" "}
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>, ou par courrier à l’adresse du
        siège social indiquée plus haut.
      </p>
      <p>
        Le traitement de vos données personnelles est décrit dans notre{" "}
        <a href="/confidentialite">politique de confidentialité</a>.
      </p>
    </PageLegale>
  );
}
