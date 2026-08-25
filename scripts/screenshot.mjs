import { chromium } from "playwright";

const OUT = process.env.QA_OUT_DIR || "/tmp/kwala-qa";
const BASE_URL = process.env.QA_BASE_URL || "http://localhost:3000";
const WIDTHS = (process.env.QA_WIDTHS || "1440,390").split(",").map(Number);
const SECTIONS = (process.env.QA_SECTIONS || "hero,partenaires,mieux-closer,vision").split(",");

const browser = await chromium.launch();

for (const width of WIDTHS) {
  const page = await browser.newPage({ viewport: { width, height: 1000 } });
  await page.goto(BASE_URL, { waitUntil: "networkidle" });
  await page.screenshot({ path: `${OUT}/site-${width}-viewport.png`, fullPage: true });
  await page.locator("header").screenshot({ path: `${OUT}/site-${width}-header.png` });
  for (const section of SECTIONS) {
    const locator = page.locator(`#${section}`);
    await locator.scrollIntoViewIfNeeded();
    await page.waitForTimeout(150);
    await locator.locator("img").evaluateAll((imgs) =>
      Promise.all(
        imgs
          .filter((img) => img.getClientRects().length > 0) // skip display:none (e.g. hidden md:block)
          .map((img) =>
            img.complete
              ? Promise.resolve()
              : new Promise((resolve) => {
                  img.addEventListener("load", resolve, { once: true });
                  img.addEventListener("error", resolve, { once: true });
                  setTimeout(resolve, 4000); // safety net, never hang the script
                })
          )
      )
    );
    await locator.screenshot({ path: `${OUT}/site-${width}-${section}.png` });
  }
  await page.close();
}

await browser.close();
console.log("done");
