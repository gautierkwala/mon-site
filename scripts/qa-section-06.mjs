import { chromium } from "playwright";
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
const s = page.locator("#offres");
await s.scrollIntoViewIfNeeded();
await page.waitForTimeout(700);
await s.screenshot({ path: "/tmp/kwala-qa/06-actuel-dirigeants.png" });
await page.getByRole("button", { name: "Pour vos équipes" }).click();
await page.waitForTimeout(900);
await s.screenshot({ path: "/tmp/kwala-qa/06-actuel-equipes.png" });
const info = await s.locator("img").first().evaluate((i) => ({
  src: i.currentSrc.slice(-60), naturel: `${i.naturalWidth}x${i.naturalHeight}`, alt: i.alt }));
console.log(JSON.stringify(info));
await browser.close(); console.log("done");
