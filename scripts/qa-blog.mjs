import { chromium } from "playwright";
const B = "http://localhost:3000";
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1200, height: 1000 } });

await p.goto(`${B}/blog`, { waitUntil: "networkidle" });
console.log("LISTE (plus recent d'abord)");
for (const [i, t] of (await p.locator("main li h2 a").allTextContents()).entries())
  console.log(`  ${i + 1}. ${t}`);
const liens = await p.locator("main li h2 a").evaluateAll((a) => a.map((x) => x.getAttribute("href")));
console.log("  hrefs :", liens.join(", "));

await p.goto(`${B}/blog/exemple-closing-negociation`, { waitUntil: "networkidle" });
console.log("\nARTICLE");
console.log("  title       :", await p.title());
console.log("  description :", (await p.locator('meta[name="description"]').getAttribute("content"))?.slice(0, 60), "...");
console.log("  canonical   :", await p.locator('link[rel="canonical"]').getAttribute("href").catch(() => "absent"));

const corps = await p.locator("main article").innerText();
console.log("  frontmatter visible dans le rendu ?", /---|title:|description:|tags:/.test(corps) ? "OUI - PROBLEME" : "non");
console.log("  h2:", await p.locator("main article h2").count(),
            "| ol:", await p.locator("main article ol").count(),
            "| blockquote:", await p.locator("main article blockquote").count());

// gfm : la 2e page a une liste a puces
await p.goto(`${B}/blog/exemple-prospection-telephonique`, { waitUntil: "networkidle" });
console.log("  (autre article) ul:", await p.locator("main article ul").count());

const r = await p.goto(`${B}/blog/slug-inexistant`);
console.log("\nSlug inconnu -> HTTP", r.status());

// navigation depuis le header d'un article
await p.goto(`${B}/blog/exemple-closing-negociation`, { waitUntil: "networkidle" });
console.log("header 'Nos offres' ->", await p.locator("header a", { hasText: "Nos offres" }).first().getAttribute("href"));
await p.locator("main article").screenshot({ path: "/tmp/kwala-qa/blog-article.png" });
await b.close();
console.log("done");
