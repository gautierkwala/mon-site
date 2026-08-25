import { chromium } from "playwright";
const browser = await chromium.launch();
for (const width of [1440, 768, 390]) {
  const page = await browser.newPage({ viewport: { width, height: 1000 } });
  await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
  const s = page.locator("#coaching-en-ligne");
  await s.scrollIntoViewIfNeeded();
  await page.waitForTimeout(600);
  await s.locator("img").first().evaluate((img) =>
    img.complete ? null : new Promise((r) => { img.onload = r; img.onerror = r; setTimeout(r, 5000); })
  );
  await page.waitForTimeout(300);
  const info = await s.locator("img").first().evaluate((img) => {
    const r = img.getBoundingClientRect();
    return { naturel: `${img.naturalWidth}x${img.naturalHeight}`,
             affiche: `${Math.round(r.width)}x${Math.round(r.height)}`,
             ratioAffiche: (r.width / r.height).toFixed(2), alt: img.alt };
  });
  console.log(width, JSON.stringify(info));
  await s.screenshot({ path: `/tmp/kwala-qa/08-final-${width}.png` });
  await page.close();
}
await browser.close();
console.log("done");
