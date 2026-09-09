import type { Metadata } from "next";
import { PageLegale } from "@/components/pages/PageLegale";
import { EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Confidentialité : extension LinkedIn vers Kwal'App | Kwala",
  description:
    "Quelles données l'extension Chrome interne de Kwala lit sur LinkedIn, où elles sont envoyées et ce qui n'est jamais collecté.",
  alternates: { canonical: "/extension-linkedin-confidentialite" },
};

export default function ConfidentialiteExtension() {
  return (
    <PageLegale
      titre="Politique de confidentialité : extension LinkedIn vers Kwal'App"
      chapeau="Cette extension Chrome est un outil interne de Kwala, réservé à son équipe de coachs. Elle copie les coordonnées professionnelles affichées sur une fiche LinkedIn vers la base Airtable de Kwala, sur action explicite de l'utilisateur."
      miseAJour="2 septembre 2026"
    >
      <h2>Les données traitées</h2>
      <p>
        Lorsque l&rsquo;utilisateur clique sur « Ajouter dans Kwal&rsquo;App » depuis une
        fiche de profil LinkedIn, l&rsquo;extension lit les informations professionnelles
        affichées sur cette page :
      </p>
      <ul>
        <li>nom et prénom ;</li>
        <li>entreprise et intitulé de poste ;</li>
        <li>
          adresse électronique et numéro de téléphone, lorsque la personne les a
          elle-même publiés sur son profil ;
        </li>
        <li>adresse du profil LinkedIn ;</li>
        <li>
          informations publiques de la page de l&rsquo;entreprise associée : nom, site web,
          secteur d&rsquo;activité et siège.
        </li>
      </ul>
      <p>
        L&rsquo;extension conserve également, dans le navigateur, l&rsquo;adresse des profils
        déjà envoyés, afin de signaler les doublons. Cette liste ne quitte jamais le poste.
      </p>

      <h2>À quoi elles servent</h2>
      <p>
        Ces informations sont transmises uniquement à la base Airtable dont
        l&rsquo;utilisateur a lui-même renseigné les identifiants dans les options de
        l&rsquo;extension. Elles alimentent le suivi commercial de Kwala.
      </p>

      <h2>Aucun transfert à des tiers</h2>
      <p>
        Aucune donnée n&rsquo;est transmise à l&rsquo;éditeur de l&rsquo;extension, à un
        serveur intermédiaire, à un service de mesure d&rsquo;audience ou à un annonceur.
        Il n&rsquo;y a ni traçage, ni publicité, ni revente de données.
      </p>
      <p>
        Les seules destinations réseau de l&rsquo;extension sont <code>linkedin.com</code>,
        pour lire la page consultée et la page publique de l&rsquo;entreprise, et{" "}
        <code>api.airtable.com</code>, pour créer la fiche du contact.
      </p>

      <h2>Où sont conservés les identifiants</h2>
      <p>
        Le jeton d&rsquo;accès Airtable et les réglages sont conservés dans le stockage
        local du navigateur de l&rsquo;utilisateur. Ils n&rsquo;en sortent que pour appeler
        l&rsquo;interface de programmation d&rsquo;Airtable, et ne sont transmis ni à Kwala,
        ni à un tiers.
      </p>

      <h2>Aucune collecte en arrière-plan</h2>
      <p>
        L&rsquo;extension ne lit aucune page tant que l&rsquo;utilisateur n&rsquo;a pas
        cliqué sur son bouton. Elle n&rsquo;effectue aucune requête périodique, aucune
        collecte automatisée, et ne lit aucune page autre que celle affichée à
        l&rsquo;écran.
      </p>

      <h2>Personnes concernées</h2>
      <p>
        Les personnes dont les coordonnées professionnelles sont enregistrées peuvent
        demander l&rsquo;accès, la rectification ou la suppression de leurs données en
        écrivant à <a href={`mailto:${EMAIL}`}>{EMAIL}</a>. La suppression est effectuée
        dans la base Airtable de Kwala.
      </p>

      <h2>Contact</h2>
      <p>
        Pour toute question relative à cette extension :{" "}
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
      </p>
    </PageLegale>
  );
}
