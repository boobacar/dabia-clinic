// Vérification navigateur (Playwright) des pages live après déploiement.
import { chromium } from "playwright-chromium";

const urls = [
  "https://www.cliniquedentairedabia.com/tourisme-dentaire-dakar",
  "https://www.cliniquedentairedabia.com/soins/implant-dentaire-etats-unis",
  "https://www.cliniquedentairedabia.com/pays",
];

const browser = await chromium.launch();
for (const url of urls) {
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  const errors = [];
  page.on("pageerror", (e) => errors.push(String(e).slice(0, 160)));
  page.on("console", (m) => {
    if (m.type() === "error") errors.push("console: " + m.text().slice(0, 160));
  });
  await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
  await page.waitForTimeout(1500);
  const info = await page.evaluate(() => ({
    title: document.title,
    h1: document.querySelector("h1")?.innerText?.slice(0, 110),
    h1Count: document.querySelectorAll("h1").length,
    rows: document.querySelectorAll("table tbody tr").length,
    countryLinks: document.querySelectorAll('a[href^="/pays/"]').length,
    faq: document.querySelectorAll("details").length,
    pillarLink: !!document.querySelector('a[href="/tourisme-dentaire-dakar"]'),
    schemaTypes: [...document.querySelectorAll('script[type="application/ld+json"]')].map((s) => {
      try {
        const j = JSON.parse(s.textContent);
        return Array.isArray(j) ? j[0]?.["@type"] : j["@type"];
      } catch {
        return "parse-error";
      }
    }),
    textLen: document.body.innerText.length,
  }));
  console.log("##", url, "\n", JSON.stringify(info, null, 1), "\n   erreurs console:", errors.length ? errors : "aucune");
  await page.close();
}
await browser.close();
