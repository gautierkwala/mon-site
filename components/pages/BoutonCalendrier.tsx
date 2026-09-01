"use client";

// Le fichier .ics est genere dans le navigateur au moment du clic : aucune
// dependance, aucune route serveur. Ce format standard (RFC 5545) est lu
// nativement par Google Agenda, Apple Calendrier et Outlook, ce qui evite
// d'avoir un lien different par plateforme.

const EVENEMENT = {
  titre: "5 ans de Kwala",
  // Horaires en UTC. Le 15 octobre 2026, Paris est encore a l'heure d'ete
  // (CEST, UTC+2) : le changement d'heure a lieu le 25 octobre. 18h30 locales
  // valent donc 16h30 UTC, et 22h00 valent 20h00 UTC. Passer par UTC evite
  // d'embarquer un bloc VTIMEZONE, source classique d'incompatibilites.
  debut: "20261015T163000Z",
  fin: "20261015T200000Z",
  lieu: "Les Woraces, 1 rue Camille Jordan, 69001 Lyon",
  description: "Une soirée pour célébrer les 5 ans de Kwala.",
  // Identifiant stable : si l'invite telecharge le fichier deux fois, son
  // agenda met a jour l'evenement existant au lieu d'en creer un doublon.
  uid: "5-ans-kwala-20261015@kwala.fr",
};

// RFC 5545, section 3.3.11 : l'antislash, le point-virgule, la virgule et le
// saut de ligne doivent etre echappes. L'adresse en contient deux.
function echapper(valeur: string) {
  return valeur
    .replace(/\\/g, "\\\\")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,")
    .replace(/\n/g, "\\n");
}

// RFC 5545, section 3.1 : une ligne ne doit pas depasser 75 octets. On compte
// bien des octets et non des caracteres, un accent en valant deux en UTF-8.
function plier(ligne: string) {
  const encodeur = new TextEncoder();
  if (encodeur.encode(ligne).length <= 75) return ligne;

  const morceaux: string[] = [];
  let courant = "";
  let taille = 0;

  // Parcours par point de code : une paire de substitution reste entiere.
  for (const caractere of ligne) {
    const poids = encodeur.encode(caractere).length;
    // Les lignes de continuation commencent par une espace, qui compte.
    const maximum = morceaux.length === 0 ? 75 : 74;
    if (taille + poids > maximum) {
      morceaux.push(courant);
      courant = "";
      taille = 0;
    }
    courant += caractere;
    taille += poids;
  }
  morceaux.push(courant);
  return morceaux.join("\r\n ");
}

function horodatage(date: Date) {
  return date.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
}

function construireIcs() {
  const lignes = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Kwala//Invitation 5 ans//FR",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${EVENEMENT.uid}`,
    `DTSTAMP:${horodatage(new Date())}`,
    `DTSTART:${EVENEMENT.debut}`,
    `DTEND:${EVENEMENT.fin}`,
    `SUMMARY:${echapper(EVENEMENT.titre)}`,
    `DESCRIPTION:${echapper(EVENEMENT.description)}`,
    `LOCATION:${echapper(EVENEMENT.lieu)}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ];
  // Retours chariot obligatoires : Outlook refuse un fichier en simples \n.
  return lignes.map(plier).join("\r\n") + "\r\n";
}

export function BoutonCalendrier({ className = "" }: { className?: string }) {
  function telecharger() {
    const fichier = new Blob([construireIcs()], {
      type: "text/calendar;charset=utf-8",
    });
    const url = URL.createObjectURL(fichier);
    const lien = document.createElement("a");
    lien.href = url;
    lien.download = "5-ans-kwala.ics";
    document.body.appendChild(lien);
    lien.click();
    lien.remove();
    // Liberation differee : certains navigateurs lisent encore l'URL apres le
    // clic, la revoquer immediatement annulerait le telechargement.
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  return (
    <button
      // Indispensable : sans ce type, le bouton envoie le formulaire qui
      // l'entoure au lieu de declencher le telechargement.
      type="button"
      onClick={telecharger}
      className={`w-full rounded-sm border border-white/15 bg-white/5 px-6 py-4 font-dm-sans text-[15px] font-medium text-white transition-colors hover:border-wisteria hover:bg-white/10 active:scale-[0.98] ${className}`}
    >
      Ajouter au calendrier
    </button>
  );
}
