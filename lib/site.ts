// Source unique du domaine. Le site est servi sur www.kwala.fr : l'apex
// kwala.fr renvoie une redirection 308 vers www. Declarer l'apex ici faisait
// pointer TOUTES les URL canoniques et TOUTES les entrees du sitemap vers des
// adresses qui redirigent, ce qui dilue le signal envoye aux moteurs.
export const SITE_URL = "https://www.kwala.fr";
