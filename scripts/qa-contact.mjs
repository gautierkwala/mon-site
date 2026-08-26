import { chromium } from "playwright";
const B = "http://localhost:3100";
// Navigateur VISIBLE obligatoire : api.web3forms.com est derriere une
// protection anti-bot Cloudflare, qui recale systematiquement le headless.
const b = await chromium.launch({ headless: false, args: ["--disable-blink-features=AutomationControlled"] });

// ---------- 1. Envoi reel ----------
const p = await b.newPage({ viewport: { width: 1280, height: 1000 } });
const requetes = [];
p.on("request", (r) => { if (r.url().includes("web3forms")) requetes.push(JSON.parse(r.postData() || "{}")); });

await p.goto(B, { waitUntil: "networkidle" });
await p.locator("#contact").scrollIntoViewIfNeeded();
await p.fill("#contact-name", "TEST Playwright — ignorer");
await p.fill("#contact-company", "TEST — vérification technique du formulaire");
await p.fill("#contact-email", "gautier@kwala.fr");
await p.fill("#contact-phone", "0000000000");
await p.fill("#contact-message", "TEST AUTOMATISE — ceci n'est pas une vraie demande. Envoi de controle du branchement Web3Forms depuis Playwright.");

console.log("botcheck present :", await p.locator('input[name="botcheck"]').count(),
            "| visible :", await p.locator('input[name="botcheck"]').isVisible());

await p.click('#contact button[type="submit"]');
// Etat de chargement
const enCours = await p.locator('#contact button[type="submit"]')
  .filter({ hasText: "Envoi en cours" }).count().catch(() => 0);
console.log("bouton 'Envoi en cours…' capte :", enCours > 0 ? "oui" : "trop rapide pour etre capte");

await p.waitForSelector('#contact [role="status"]', { timeout: 20000 });
console.log("\n--- CONFIRMATION ---");
console.log(await p.locator('#contact [role="status"]').innerText());
console.log("formulaire encore present :", await p.locator("#contact form").count());
console.log("\npayload envoye :", JSON.stringify({ ...requetes[0], access_key: requetes[0].access_key.slice(0,8) + "…" }, null, 1));
await p.locator("#contact").screenshot({ path: "/tmp/kwala-qa/contact-succes.png" });
await p.close();

// ---------- 2. Chemin d'erreur reseau ----------
const q = await b.newPage({ viewport: { width: 1280, height: 1000 } });
await q.route("**/api.web3forms.com/**", (route) => route.abort("failed"));
await q.goto(B, { waitUntil: "networkidle" });
await q.locator("#contact").scrollIntoViewIfNeeded();
await q.fill("#contact-name", "Test erreur");
await q.fill("#contact-email", "test@example.com");
await q.fill("#contact-message", "Test du chemin d'erreur.");
await q.click('#contact button[type="submit"]');
await q.waitForSelector('#contact [role="alert"]', { timeout: 10000 });
console.log("\n--- ERREUR RESEAU ---");
console.log((await q.locator('#contact [role="alert"]').innerText()).replace(/\n+/g, " "));
console.log("libelle du bouton :", await q.locator('#contact button[type="submit"]').innerText());
console.log("champs conserves :", await q.inputValue("#contact-name"));
await q.locator("#contact").screenshot({ path: "/tmp/kwala-qa/contact-erreur.png" });
await b.close();
