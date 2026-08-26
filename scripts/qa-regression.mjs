import { chromium } from "playwright";

// Capture de reference visuelle. Meme protocole avant et apres : c'est ce qui
// permet de prouver qu'un changement destine aux grands ecrans n'a rien touche
// en dessous de 1440.
const DOSSIER = process.argv[2] || "ref";
const LARGEURS = [390, 768, 1024, 1440, 1920, 2560];
const PAGES = [["accueil", "/"], ["blog", "/blog"], ["article", "/blog/hello-world"]];

const b = await chromium.launch();
for (const [nomPage, url] of PAGES) {
  for (const W of LARGEURS) {
    // Animations figees : le bandeau partenaires defile en boucle infinie,
    // sa phase differe donc a chaque capture et pollue la comparaison. Le
    // site respecte deja prefers-reduced-motion, on s'appuie dessus.
    const p = await b.newPage({ viewport: { width: W, height: 1000 }, reducedMotion: "reduce" });
    // Le widget Trustfolio est un tiers au rendu non deterministe : on le
    // neutralise des deux cotes de la comparaison, sinon il pollue le diff.
    await p.route("**://*.trustfolio.co/**", (r) => r.abort());
    await p.route("**://*.trustfolio.io/**", (r) => r.abort());
    await p.goto(`http://localhost:3100${url}`, { waitUntil: "networkidle" });
    // Deroulement complet pour declencher tout le chargement differe.
    await p.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 600) {
        window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 80));
      }
      window.scrollTo(0, 0);
    });
    await p.waitForTimeout(1200);
    await p.screenshot({ path: `/tmp/kwala-qa/${DOSSIER}/${nomPage}-${W}.png`, fullPage: true });
    await p.close();
  }
}
await b.close();
console.log(`captures ecrites dans /tmp/kwala-qa/${DOSSIER}`);
