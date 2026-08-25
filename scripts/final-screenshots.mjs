import { chromium } from "playwright";

const OUT = process.env.QA_OUT_DIR || "/tmp/kwala-qa";
const BASE_URL = process.env.QA_BASE_URL || "http://localhost:4333";
const WIDTHS = [1440, 768, 390];

const browser = await chromium.launch();

for (const width of WIDTHS) {
  const page = await browser.newPage({ viewport: { width, height: 1000 } });
  await page.goto(BASE_URL, { waitUntil: "networkidle" });

  // scroll through the whole page to trigger every lazy-loaded image
  await page.evaluate(async () => {
    const step = window.innerHeight;
    const height = document.body.scrollHeight;
    for (let y = 0; y < height; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 120));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(300);

  await page.screenshot({ path: `${OUT}/final-${width}.png`, fullPage: true });
  await page.close();
  console.log(`done ${width}`);
}

await browser.close();
