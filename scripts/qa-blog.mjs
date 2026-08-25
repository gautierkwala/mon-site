import { chromium } from "playwright";
const B = "http://localhost:3000";
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1280, height: 1400 } });

await p.goto(`${B}/blog`, { waitUntil: "networkidle" });
console.log("=== /blog ===");
console.log("h1:", await p.locator("main h1").count(), "| liens articles:", await p.locator('main a[href^="/blog/"]').count());
console.log("filtres:", (await p.locator('nav[aria-label="Filtrer par thème"] button').allTextContents()).join(" | "));
const casse = await p.locator("main img").evaluateAll((imgs) =>
  imgs.filter((i) => i.naturalWidth === 0).map((i) => i.currentSrc));
console.log("images cassees:", casse.length ? casse : "aucune");
await p.locator("main").screenshot({ path: "/tmp/kwala-qa/blog-liste-reel.png" });

const slug = "blog-methode-meddic-qualification-b2b";
await p.goto(`${B}/blog/${slug}`, { waitUntil: "networkidle" });
console.log("\n=== /blog/" + slug + " ===");
console.log("title:", await p.title());
console.log("h1:", await p.locator("main h1").count(), "->", (await p.locator("main h1").innerText()).slice(0, 55));
console.log("h2 dans le corps:", await p.locator("main article h2").count(), "| listes:", await p.locator("main article ul, main article ol").count());
console.log("liens sortants restants vers kwala.fr/#10 :", await p.locator('main a[href*="kwala.fr/#10"]').count());
const c2 = await p.locator("main img").evaluateAll((i) => i.filter((x) => x.naturalWidth === 0).length);
console.log("images cassees:", c2);
console.log("a lire aussi:", await p.locator('section[aria-labelledby="articles-similaires"] li').count());
await p.locator("main").screenshot({ path: "/tmp/kwala-qa/blog-article-reel.png", scale: "css" });
await b.close();
console.log("done");
