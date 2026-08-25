import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
await page.goto("http://localhost:4333/", { waitUntil: "networkidle" });

const headings = await page.evaluate(() =>
  Array.from(document.querySelectorAll("h1,h2,h3,h4,h5,h6")).map((el) => ({
    tag: el.tagName.toLowerCase(),
    text: el.textContent.trim().replace(/\s+/g, " ").slice(0, 60),
  }))
);

const images = await page.evaluate(() =>
  Array.from(document.querySelectorAll("img")).map((el) => ({
    src: el.getAttribute("src"),
    alt: el.getAttribute("alt"),
    hasAlt: el.hasAttribute("alt"),
  }))
);

console.log("=== HEADINGS ===");
headings.forEach((h) => console.log(h.tag, "-", h.text));

console.log("\n=== IMAGES (alt) ===");
images.forEach((img) => {
  const flag = !img.hasAlt ? "[NO ALT ATTR]" : img.alt === "" ? "[EMPTY ALT]" : "";
  if (flag) console.log(flag, img.src);
});
console.log(`\nTotal images: ${images.length}, empty/missing alt: ${images.filter(i => !i.alt).length}`);

await browser.close();
