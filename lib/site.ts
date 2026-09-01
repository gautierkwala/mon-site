// Source unique du domaine. Le site est servi sur www.kwala.fr : l'apex
// kwala.fr renvoie une redirection 308 vers www. Declarer l'apex ici faisait
// pointer TOUTES les URL canoniques et TOUTES les entrees du sitemap vers des
// adresses qui redirigent, ce qui dilue le signal envoye aux moteurs.
export const SITE_URL = "https://www.kwala.fr";

// NAP : nom, adresse, telephone. Ces trois informations doivent etre
// STRICTEMENT identiques ici, sur la fiche Google Business Profile et sur les
// annuaires. Google les recoupe pour juger de la fiabilite d'un etablissement
// local ; une divergence, meme minime, affaiblit le referencement local.
//
// A ce jour elles divergent : la fiche Google indique 11 rue Alsace Lorraine,
// le site 12 rue Royale. A trancher, puis a corriger ICI uniquement.
export const TELEPHONE = "+33623130149";

export const ADRESSE = {
  "@type": "PostalAddress",
  streetAddress: "12 rue Royale",
  postalCode: "69001",
  addressLocality: "Lyon",
  addressCountry: "FR",
};
