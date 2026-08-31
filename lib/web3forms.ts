/**
 * Cle publique Web3Forms. Elle est faite pour vivre cote navigateur, c'est le
 * fonctionnement nominal du service : elle n'ouvre aucun acces au compte, elle
 * identifie seulement la boite de reception destinataire.
 *
 * Partagee par le formulaire de contact et celui de l'evenement, pour qu'un
 * changement de cle ne soit fait qu'a un seul endroit.
 */
export const WEB3FORMS_KEY = "0c9b516a-2bf1-48b4-b25f-f955ee4a2aef";
export const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
