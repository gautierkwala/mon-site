import { chromium } from "playwright";
const B = "http://localhost:3000";
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1280, height: 1400 } });

await p.goto(`${B}/blog`, { waitUntil: "networkidle" });
console.log("=== /blog ===");
console.log("h1 :", await p.locator("main h1").count(), "->", await p.locator("main h1").innerText());
console.log("liens articles dans le DOM :", await p.locator('main a[href^="/blog/"]').count());
console.log("cartes visibles :", await p.locator("main ul > li:not([hidden]) article").count());
console.log("boutons pagination :", await p.locator('nav[aria-label="Pagination"] button').count());
const tags = await p.locator('nav[aria-label="Filtrer par thème"] button').allTextContents();
console.log("filtres :", tags.join(" | "));
await p.locator("main").screenshot({ path: "/tmp/kwala-qa/blog-liste.png" });

// filtre par tag
await p.locator('nav[aria-label="Filtrer par thème"] button', { hasText: "Management" }).click();
await p.waitForTimeout(300);
console.log("\naprès filtre 'Management' -> cartes visibles :",
  await p.locator("main ul > li:not([hidden]) article").count(),
  "| pagination :", await p.locator('nav[aria-label="Pagination"] button').count());
console.log("liens toujours dans le DOM :", await p.locator('main a[href^="/blog/"]').count());

// page 2
await p.locator('nav[aria-label="Filtrer par thème"] button', { hasText: "Tous" }).click();
await p.waitForTimeout(300);
await p.locator('nav[aria-label="Pagination"] button', { hasText: "2" }).click();
await p.waitForTimeout(300);
console.log("page 2 -> cartes visibles :", await p.locator("main ul > li:not([hidden]) article").count());

// article
await p.goto(`${B}/blog/exemple-closing-negociation`, { waitUntil: "networkidle" });
console.log("\n=== /blog/[slug] ===");
console.log("h1 :", await p.locator("main h1").count(), "->", await p.locator("main h1").innerText());
console.log("h1 dans le corps MDX ?", await p.locator("main article div h1").count());
console.log("fil d'Ariane :", (await p.locator('nav[aria-label="Fil d\'Ariane"] li').allTextContents()).join(" "));
console.log("hero image :", await p.locator("main article img").first().getAttribute("src").then(s => s.slice(0, 55)));
console.log("blockquote:", await p.locator("main blockquote").count(), "| ol:", await p.locator("main ol").count());
console.log("CTA :", await p.locator('main a[href="/#contact"]').last().innerText());
console.log("à lire aussi :", await p.locator('section[aria-labelledby="articles-similaires"] li').count(), "articles");
console.log("title :", await p.title());
await p.locator("main").screenshot({ path: "/tmp/kwala-qa/blog-article.png", scale: "css" });
await b.close();
console.log("done");
