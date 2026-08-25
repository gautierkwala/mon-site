import { chromium } from "playwright";

const OUT = "/tmp/kwala-qa";
const BASE_URL = "http://localhost:3000";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
await page.goto(BASE_URL, { waitUntil: "networkidle" });

const section = page.locator("#on-coache");
await section.scrollIntoViewIfNeeded();
await page.waitForTimeout(400);

const read = (el) => {
  const cs = getComputedStyle(el);
  return {
    texte: el.textContent,
    fond: cs.backgroundColor,
    bordure: cs.borderTopColor,
    couleurTexte: cs.color,
    transition: cs.transitionProperty + " / " + cs.transitionDuration,
  };
};

// état AU REPOS
const prospection = section.locator("span", { hasText: /^Prospection$/ }).first();
const collectif = section.locator("span", { hasText: /^Coaching collectif$/ }).first();

console.log("--- AU REPOS ---");
console.log("Prospection      :", JSON.stringify(await prospection.evaluate(read)));
console.log("Coaching collectif:", JSON.stringify(await collectif.evaluate(read)));

await section.screenshot({ path: `${OUT}/05-tags-repos.png` });

// état SURVOLÉ
await prospection.hover();
await page.waitForTimeout(400); // laisse la transition se terminer
console.log("--- SURVOL sur 'Prospection' ---");
console.log("Prospection      :", JSON.stringify(await prospection.evaluate(read)));
console.log("Coaching collectif:", JSON.stringify(await collectif.evaluate(read)));

await section.screenshot({ path: `${OUT}/05-tags-hover.png` });

// vérifie qu'aucun autre tag n'a bougé
const autres = await section.locator("span").evaluateAll((els) =>
  els.map((el) => `${el.textContent} => ${getComputedStyle(el).backgroundColor}`)
);
console.log("--- TOUS LES TAGS PENDANT LE SURVOL ---");
autres.forEach((l) => console.log("  " + l));

await browser.close();
console.log("done");
