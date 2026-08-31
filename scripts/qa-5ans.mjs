import { chromium } from "playwright";
// Navigateur VISIBLE obligatoire : api.web3forms.com est derriere une
// protection anti-bot Cloudflare, qui recale systematiquement le headless.
const b = await chromium.launch({ headless: false, args: ["--disable-blink-features=AutomationControlled"] });
const p = await b.newPage({ viewport: { width: 1440, height: 1100 } });
const envoyees = [];
p.on("request", r => { if (r.url().includes("web3forms")) envoyees.push(JSON.parse(r.postData() || "{}")); });

await p.goto("http://localhost:3100/5-ans", { waitUntil: "networkidle" });
await p.getByText("Oui", { exact: true }).click();
await p.fill("#evt-name", "TEST Playwright — ignorer");
await p.fill("#evt-company", "TEST — vérification technique");
await p.fill("#evt-guest", "Non");
await p.fill("#evt-email", "gautier@kwala.fr");
await p.click('form button[type="submit"]');
await p.waitForSelector('[role="status"]', { timeout: 20000 });
console.log("--- CONFIRMATION ---");
console.log(await p.locator('[role="status"]').innerText());
const d = { ...envoyees[0], access_key: envoyees[0].access_key.slice(0,8) + "…" };
console.log("\npayload :", JSON.stringify(d, null, 1));
await p.locator('[role="status"]').screenshot({ path: "/tmp/kwala-qa/5ans-succes.png" });
await b.close();
