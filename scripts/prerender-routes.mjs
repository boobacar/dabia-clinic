// scripts/prerender-routes.mjs
// Génère des pages HTML pré-rendues pour les routes clés (améliore LCP/INP)
import { createServer } from "node:http";
import { readFile, writeFile, stat, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname, extname, join } from "node:path";
import { chromium } from "playwright-chromium";

const ROOT = process.cwd();
const DIST_DIR = join(ROOT, "dist");
const PUBLIC_DIR = join(ROOT, "public");
const POSTS_META_PATH = join(ROOT, "src", "data", "posts.meta.json");
const PORT = Number(process.env.PRERENDER_PORT || 4178);
const ORIGIN = `http://localhost:${PORT}`;

const STATIC_ROUTES = [
  "/",
  "/blog",
  "/rendez-vous",
  "/dentiste-dakar",
  "/cabinet-dentaire-dakar",
  "/clinique-dentaire-dakar",
  "/urgence-dentaire-dakar",
  "/apropos",
  "/personnel",
  "/all-competences",
  "/infos/assurances",
  "/infos/post-visite",
  "/infos/enfants",
  "/infos/technologie",
  "/rejoindre",
  "/cabinet-dentaire-liberte-6",
  "/clinique-dentaire-parcelles-assainies",
  "/cabinet-dentaire-almadies",
  "/cabinet-dentaire-mermoz",
  "/cabinet-dentaire-point-e",
  "/cabinet-dentaire-sacre-coeur",
  "/cabinet-dentaire-yoff",
  "/cabinet-dentaire-hlm-grand-yoff",
  "/cabinet-dentaire-scat-urbam",
  "/cabinet-dentaire-ngor",
  "/cabinet-dentaire-ouakam",
  "/cabinet-dentaire-patte-d-oie",
  "/cabinet-dentaire-fann",
  "/cabinet-dentaire-plateau",
  "/galerie",
];

const mime = (filePath) => {
  const ext = extname(filePath).toLowerCase();
  if (ext === ".html") return "text/html";
  if (ext === ".js") return "application/javascript";
  if (ext === ".css") return "text/css";
  if (ext === ".json") return "application/json";
  if (ext === ".svg") return "image/svg+xml";
  if (ext === ".png") return "image/png";
  if (ext === ".jpg" || ext === ".jpeg") return "image/jpeg";
  if (ext === ".webp") return "image/webp";
  if (ext === ".ico") return "image/x-icon";
  return "application/octet-stream";
};

async function loadPostsMeta() {
  try {
    const raw = await readFile(POSTS_META_PATH, "utf8");
    const list = JSON.parse(raw);
    return Array.isArray(list) ? list.filter((p) => p?.slug) : [];
  } catch {
    return [];
  }
}

async function loadSlugs(filePath) {
  try {
    const src = await readFile(filePath, "utf8");
    return Array.from(src.matchAll(/slug:\s*"([^"]+)"/g)).map((m) => m[1]);
  } catch {
    return [];
  }
}

async function collectRoutes() {
  const routes = new Set(STATIC_ROUTES);
  const posts = await loadPostsMeta();
  posts.forEach((p) => routes.add(`/blog/${p.slug}`));

  const competencesSlugs = await loadSlugs(
    join(ROOT, "src", "data", "competences.js")
  );
  competencesSlugs.forEach((slug) => routes.add(`/competences/${slug}`));

  const techSlugs = await loadSlugs(
    join(ROOT, "src", "data", "technologies.js")
  );
  techSlugs.forEach((slug) => routes.add(`/infos/technologie/${slug}`));

  return Array.from(routes);
}

async function startStaticServer() {
  const indexHtml = await readFile(join(DIST_DIR, "index.html"), "utf8");
  const server = createServer(async (req, res) => {
    try {
      const url = new URL(req.url, ORIGIN);
      let filePath = join(DIST_DIR, decodeURIComponent(url.pathname));
      let stats;

      if (existsSync(filePath)) {
        stats = await stat(filePath);
        if (stats.isDirectory()) {
          filePath = join(filePath, "index.html");
        }
      }

      if (existsSync(filePath)) {
        const data = await readFile(filePath);
        res.writeHead(200, { "Content-Type": mime(filePath) });
        res.end(data);
        return;
      }

      // Fallback SPA -> index.html
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(indexHtml);
    } catch (e) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end(e?.message || "Server error");
    }
  });

  await new Promise((resolve) => server.listen(PORT, resolve));
  return () => new Promise((resolve) => server.close(resolve));
}

async function prerenderRoute(browser, route) {
  const page = await browser.newPage();
  const url = `${ORIGIN}${route}`;
  await page.goto(url, { waitUntil: "networkidle" });
  // petite pause pour laisser les Suspense/lazy se résoudre
  await page.waitForTimeout(500);
  const html = await page.content();
  await page.close();

  const outPath =
    route === "/"
      ? join(DIST_DIR, "index.html")
      : join(DIST_DIR, route.replace(/^\//, ""), "index.html");
  await mkdir(dirname(outPath), { recursive: true });
  await writeFile(outPath, html, "utf8");
  return outPath.replace(`${DIST_DIR}/`, "");
}

async function copyPublicFallback() {
  // s'assurer que CNAME/robots/sitemap restent dispo si le serveur regarde dist/
  for (const name of ["CNAME", "robots.txt", "sitemap.xml"]) {
    const src = join(PUBLIC_DIR, name);
    if (existsSync(src)) {
      const dest = join(DIST_DIR, name);
      await writeFile(dest, await readFile(src));
    }
  }
}

async function main() {
  const routes = await collectRoutes();
  console.log(`🗺️  Routes à pré-rendre: ${routes.length}`);
  const closeServer = await startStaticServer();

  let browser;
  try {
    browser = await chromium.launch({ headless: true });
  } catch (e) {
    console.warn("⚠️ Prerender Playwright indisponible sur cet environnement.");
    console.warn(`↳ Raison: ${e?.message || e}`);
    console.warn("↳ Fallback: build SPA conservé + fichiers publics copiés.");
    await closeServer();
    await copyPublicFallback();
    return;
  }

  const results = [];
  for (const route of routes) {
    try {
      const out = await prerenderRoute(browser, route);
      results.push(out);
      console.log(`✅ ${route} → ${out}`);
    } catch (e) {
      console.error(`❌ Échec ${route}:`, e.message);
    }
  }

  await browser.close();
  await closeServer();
  await copyPublicFallback();

  console.log("\nPré-rendu terminé.");
  console.log(`Fichiers écrits: ${results.length}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
