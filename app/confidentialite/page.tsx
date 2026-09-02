import type { Metadata } from "next";
import { PageLegale } from "@/components/pages/PageLegale";
import { EMAIL, SIEGE_SOCIAL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité | Kwala",
  description:
    "Quelles données Kwala collecte sur kwala.fr, pourquoi, combien de temps elles sont conservées et comment exercer vos droits.",
  alternates: { canonical: "/confidentialite" },
};

export default function Confidentialite() {
  return (
    <PageLegale
      titre="Politique de confidentialité"
      chapeau="Ce site ne dépose aucun cookie et n’utilise aucun outil de mesure d’audience. Les seules données que nous recevons sont celles que vous nous transmettez volontairement, en remplissant un formulaire."
      miseAJour="2 septembre 2026"
    >
      <h2>Qui est responsable de vos données</h2>
      <p>
        Kwala, société par actions simplifiée dont le siège social est situé
        {SIEGE_SOCIAL}, immatriculée au RCS de Lyon sous le numéro 903 154 896,
        est responsable des traitements décrits ci-dessous. Pour toute question, écrivez à{" "}
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
      </p>

      <h2>Les données que nous collectons</h2>
      <p>
        Nous ne collectons aucune donnée à votre insu. Vous ne nous transmettez
        des informations que si vous remplissez l’un des deux formulaires du
        site.
      </p>

      <h3>Formulaire de contact</h3>
      <p>
        Nom, entreprise, adresse électronique, numéro de téléphone et contenu de
        votre message.
      </p>

      <h3>Formulaire d’inscription à un évènement</h3>
      <p>
        Nom, entreprise, adresse électronique, réponse de présence et, le cas
        échéant, nom de la personne qui vous accompagne.
      </p>

      <h2>Pourquoi nous les traitons</h2>
      <p>
        Ces données servent uniquement à répondre à votre demande, à vous
        recontacter au sujet d’un accompagnement, et à organiser les évènements
        auxquels vous vous inscrivez.
      </p>
      <p>
        La base légale est votre démarche volontaire : vous nous écrivez en vue
        d’une éventuelle relation commerciale. Nous n’utilisons pas vos
        coordonnées pour des envois publicitaires non sollicités, et nous ne les
        vendons ni ne les cédons à quiconque.
      </p>

      <h2>Combien de temps nous les conservons</h2>
      <p>
        Trois ans à compter de notre dernier échange, conformément à la
        recommandation de la CNIL pour les données de prospection. Au delà, elles
        sont supprimées. Si vous devenez client, les données nécessaires à la
        relation contractuelle et aux obligations comptables sont conservées
        pendant la durée légale applicable.
      </p>

      <h2>Qui d’autre y a accès</h2>
      <p>
        Nous faisons appel à des prestataires techniques, qui n’utilisent vos
        données que pour le service qu’ils nous rendent.
      </p>
      <ul>
        <li>
          Vercel Inc. héberge le site. Comme tout hébergeur, il traite les
          données techniques de connexion nécessaires à la diffusion des pages.
        </li>
        <li>
          Web3Forms achemine le contenu des formulaires vers notre boîte de
          réception. Les informations que vous saisissez transitent par ce
          service au moment de l’envoi.
        </li>
        <li>
          Trustfolio fournit le module d’affichage des témoignages présent sur
          la page d’accueil. Ce module est chargé depuis les serveurs de
          Trustfolio et, à ce titre, votre navigateur les contacte lors de
          l’affichage de la page.
        </li>
      </ul>

      <h2>Transferts en dehors de l’Union européenne</h2>
      <p>
        Certains de ces prestataires sont établis aux États-Unis ou y opèrent
        une partie de leur infrastructure. C’est le cas de notre hébergeur, et
        du service de suivi d’erreurs utilisé par le module de témoignages, qui
        reçoit des données techniques en cas de dysfonctionnement de ce module.
        Ces transferts s’appuient sur les garanties prévues par le règlement
        général sur la protection des données.
      </p>

      <h2>Cookies et mesure d’audience</h2>
      <p>
        Ce site ne dépose aucun cookie, ni de mesure d’audience, ni publicitaire,
        ni de préférence. Il n’utilise ni Google Analytics, ni aucun outil de
        suivi comparable. C’est la raison pour laquelle aucune bannière de
        consentement ne vous est présentée : il n’y a rien à consentir.
      </p>
      <p>
        Les polices de caractères sont servies depuis notre propre serveur et
        non depuis un service tiers : leur affichage ne communique donc aucune
        information vous concernant à un autre acteur.
      </p>

      <h2>Vos droits</h2>
      <p>
        Vous disposez d’un droit d’accès, de rectification, d’effacement, de
        limitation et d’opposition sur les données qui vous concernent, ainsi
        que d’un droit à la portabilité.
      </p>
      <p>
        Pour les exercer, écrivez à <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
        Nous répondons dans un délai d’un mois. Si notre réponse ne vous
        satisfait pas, vous pouvez saisir la Commission nationale de
        l’informatique et des libertés, sur{" "}
        <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">
          cnil.fr
        </a>
        .
      </p>

      <h2>Sécurité</h2>
      <p>
        Le site est diffusé exclusivement en HTTPS. Les envois de formulaires
        sont chiffrés en transit. L’accès à notre boîte de réception est protégé
        et limité aux membres de l’équipe qui en ont besoin.
      </p>

      <h2>Évolution de cette politique</h2>
      <p>
        Ce document peut être mis à jour si le site évolue, par exemple si un
        nouvel outil y est intégré. La date de dernière mise à jour figure en
        haut de cette page.
      </p>
    </PageLegale>
  );
}
