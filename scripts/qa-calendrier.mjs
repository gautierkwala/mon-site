import { chromium } from "playwright";
import { readFileSync } from "node:fs";

const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1440, height: 1100 } });
await p.goto("http://localhost:3100/5-ans", { waitUntil: "networkidle" });

const boutons = p.getByRole("button", { name: "Ajouter au calendrier" });
console.log("boutons visibles avant reponse :", await boutons.count());

// Le bouton est dans le <form> : on verifie qu'il ne le soumet pas.
const envois = [];
p.on("request", r => { if (r.url().includes("web3forms")) envois.push(r.url()); });

const [dl] = await Promise.all([p.waitForEvent("download"), boutons.first().click()]);
console.log("nom du fichier :", dl.suggestedFilename());
const chemin = "/tmp/kwala-qa/" + dl.suggestedFilename();
await dl.saveAs(chemin);

await p.waitForTimeout(800);
console.log("appels web3forms declenches :", envois.length, "(doit etre 0)");

const brut = readFileSync(chemin, "utf8");
console.log("\n--- CONTENU (\\r\\n affiches) ---");
console.log(brut.replace(/\r\n/g, "\\r\\n\n"));

const octets = readFileSync(chemin);
const lignes = brut.split("\r\n").filter(Boolean);
const controles = [
  ["toutes les lignes en CRLF", !/[^\r]\n/.test(brut)],
  ["BEGIN/END VCALENDAR", brut.startsWith("BEGIN:VCALENDAR") && brut.trimEnd().endsWith("END:VCALENDAR")],
  ["VERSION:2.0", lignes.includes("VERSION:2.0")],
  ["UID present", lignes.some(l => l.startsWith("UID:"))],
  ["DTSTAMP present", lignes.some(l => l.startsWith("DTSTAMP:"))],
  ["DTSTART = 16h30 UTC", lignes.includes("DTSTART:20261015T163000Z")],
  ["DTEND = 20h00 UTC", lignes.includes("DTEND:20261015T200000Z")],
  ["titre exact", lignes.includes("SUMMARY:5 ans de Kwala")],
  ["virgules du lieu echappees", lignes.some(l => l.startsWith("LOCATION:") && l.includes("Woraces\\,") && l.includes("Jordan\\,"))],
  ["description exacte", lignes.includes("DESCRIPTION:Une soirée pour célébrer les 5 ans de Kwala.")],
  ["aucune ligne > 75 octets", lignes.every(l => Buffer.byteLength(l, "utf8") <= 75)],
  ["accents lisibles (UTF-8)", octets.includes(Buffer.from("célébrer", "utf8"))],
];
console.log("\n--- CONTROLES ---");
let ko = 0;
for (const [nom, ok] of controles) { if (!ok) ko++; console.log((ok ? "OK   " : "ECHEC") + "  " + nom); }

// Le bouton doit rester accessible apres la reponse au formulaire.
await p.getByText("Oui", { exact: true }).click();
await p.fill("#evt-name", "TEST");
await p.fill("#evt-company", "TEST");
await p.fill("#evt-guest", "Non");
await p.fill("#evt-email", "test@example.com");
await p.route("**/api.web3forms.com/**", r =>
  r.fulfill({ status: 200, contentType: "application/json", body: '{"success":true}' }));
await p.click('form button[type="submit"]');
await p.waitForSelector('[role="status"]', { timeout: 15000 });
console.log("\nbouton present sur l'ecran de confirmation :", await boutons.count() === 1 ? "OK" : "ECHEC");
await p.locator('[role="status"]').screenshot({ path: "/tmp/kwala-qa/5ans-succes-calendrier.png" });

await b.close();
console.log(ko === 0 ? "\nTOUT EST VERT" : `\n${ko} CONTROLE(S) EN ECHEC`);
process.exit(ko === 0 ? 0 : 1);
