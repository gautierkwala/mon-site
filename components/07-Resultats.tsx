import { BlocTemoignages } from "./pages/BlocTemoignages";
import { TEMOIGNAGES_ACCUEIL } from "@/lib/temoignages";

/**
 * Les avis clients de l'accueil.
 *
 * Le carrousel Trustfolio a ete remplace par les memes avis en texte. Il
 * rendait ses cartes dans une iframe cross-origin, impossible a styler, dont
 * le contenu n'etait lu ni par Google ni par les assistants ; ses cartes
 * faisaient 689px de large quelle que soit la largeur du conteneur, donc
 * illisibles sur telephone ; et il defilait trop vite. La verification
 * Trustfolio reste affichee, avec la note, le nombre d'avis et le lien vers
 * le profil.
 */
export function Resultats() {
  return (
    <div id="resultats">
      <BlocTemoignages
        surtitre="Des résultats concrets et rapides"
        titre="Ce qu’en disent nos clients"
        temoignages={TEMOIGNAGES_ACCUEIL}
      />
    </div>
  );
}
