// scripts/generate-sitemap.mjs
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join } from "node:path";
import process from "node:process";

const SITE_URL =
  process.env.SITE_URL?.replace(/\/+$/, "") ||
  "https://www.cliniquedentairedabia.com";

const ROOT = process.cwd();
const DIST_DIR = join(ROOT, "dist");
const PUBLIC_DIR = join(ROOT, "public");
const PUBLIC_SITEMAPS_DIR = join(PUBLIC_DIR, "sitemaps");
const POSTS_META_PATH = join(ROOT, "src", "data", "posts.meta.json");

const STATIC_ROUTES = [
  "/",
  "/blog",
  "/rendez-vous",
  "/dentiste-dakar",
  "/cabinet-dentaire-dakar",
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
];

// Pages clés à recrawler souvent
const IMPORTANT_ROUTES = new Set([
  "/",
  "/blog",
  "/rendez-vous",
  "/dentiste-dakar",
  "/cabinet-dentaire-dakar",
  "/urgence-dentaire-dakar",
  "/all-competences",
  "/infos/technologie",
]);

const readFileSafe = async (p) => {
  try {
    return await readFile(p, "utf8");
  } catch {
    return "";
  }
};

const iso = (d = new Date()) => new Date(d).toISOString().slice(0, 10);
const abs = (p) => `${SITE_URL}${p.startsWith("/") ? p : `/${p}`}`;

const urlNode = ({ loc, lastmod, changefreq = "weekly", priority = "0.7" }) =>
  `
  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`.trim();

async function ensureDist() {
  if (!existsSync(DIST_DIR)) await mkdir(DIST_DIR, { recursive: true });
}

async function ensurePublic() {
  if (!existsSync(PUBLIC_DIR)) await mkdir(PUBLIC_DIR, { recursive: true });
  if (!existsSync(PUBLIC_SITEMAPS_DIR)) await mkdir(PUBLIC_SITEMAPS_DIR, { recursive: true });
}

async function readPostsMeta() {
  try {
    const raw = await readFile(POSTS_META_PATH, "utf8");
    const list = JSON.parse(raw);
    return (Array.isArray(list) ? list : []).filter((p) => p?.slug);
  } catch (e) {
    console.warn("⚠️ Impossible de lire posts.meta.json :", e?.message);
    return [];
  }
}

async function build() {
  await ensureDist();
  await ensurePublic();
  const today = iso();
  const AGGR_DAYS = Number(process.env.SITEMAP_AGGRESSIVE_DAYS || 90); // jours récents marqués comme lastmod=today

  const posts = await readPostsMeta();
  console.log(`📝 Posts trouvés: ${posts.length}`);

  // 1) Statiques
  const staticXml = STATIC_ROUTES.map((path) => {
    const isImportant = IMPORTANT_ROUTES.has(path);
    return urlNode({
      loc: abs(path),
      lastmod: today,
      changefreq: isImportant ? "daily" : "weekly",
      priority: isImportant ? "1.0" : "0.6",
    });
  });

  // 2) Compétences (depuis src/data/competences.js)
  const compSrc = await readFileSafe(join(ROOT, "src", "data", "competences.js"));
  const compSlugs = Array.from(compSrc.matchAll(/slug:\s*"([^"]+)"/g)).map((m) => m[1]);
  console.log(`🦷 Compétences ajoutées: ${compSlugs.length}`);
  const competencesXml = compSlugs.map((slug) =>
    urlNode({ loc: abs(`/competences/${slug}`), lastmod: today, changefreq: "monthly", priority: "0.8" })
  );

  // 3) Blog
  // Articles récents: lastmod=today pour accélérer le recrawl
  const now = Date.now();
  const msPerDay = 24 * 60 * 60 * 1000;
  const blogXml = posts.map((p) => {
    const d = p.date ? new Date(p.date) : new Date();
    const isRecent = Math.abs(now - d.getTime()) <= AGGR_DAYS * msPerDay;
    return urlNode({
      loc: abs(`/blog/${p.slug}`),
      lastmod: isRecent ? today : iso(p.date || today),
      changefreq: isRecent ? "daily" : "monthly",
      priority: isRecent ? "0.8" : "0.7",
    });
  });

  // 4) Technologies (depuis src/data/technologies.js)
  const techSrc = await readFileSafe(join(ROOT, "src", "data", "technologies.js"));
  const techSlugs = Array.from(techSrc.matchAll(/slug:\s*"([^"]+)"/g)).map((m) => m[1]);
  console.log(`🛠️  Technologies ajoutées: ${techSlugs.length}`);
  const techXml = techSlugs.map((slug) =>
    urlNode({ loc: abs(`/infos/technologie/${slug}`), lastmod: today, changefreq: "monthly", priority: "0.6" })
  );

  const xml = `<?xml version=\"1.0\" encoding=\"UTF-8\"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
>
${[...staticXml, ...competencesXml, ...blogXml, ...techXml].join("\n")}
</urlset>`;

  await writeFile(join(DIST_DIR, "sitemap.xml"), xml, "utf8");
  // Fichier pratique pour demande de recrawl manuel (Search Console)
  const reindexList = [
    ...STATIC_ROUTES.filter((p) => IMPORTANT_ROUTES.has(p)).map(abs),
    ...posts
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 12)
      .map((p) => abs(`/blog/${p.slug}`)),
  ].join("\n");
  await writeFile(join(DIST_DIR, "reindex-urls.txt"), reindexList, "utf8");
  await writeFile(
    join(DIST_DIR, "robots.txt"),
    `User-agent: *
Allow: /

Sitemap: ${abs("/sitemap.xml")}
`,
    "utf8"
  );

  console.log("✅ sitemap.xml, robots.txt et reindex-urls.txt générés dans dist/");

  // Generate public sitemap index + section files for local dev (Vite)
  const indexXml = `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <sitemap>\n    <loc>${SITE_URL}/sitemaps/sitemap-static.xml</loc>\n    <lastmod>${today}</lastmod>\n  </sitemap>\n  <sitemap>\n    <loc>${SITE_URL}/sitemaps/sitemap-competences.xml</loc>\n    <lastmod>${today}</lastmod>\n  </sitemap>\n  <sitemap>\n    <loc>${SITE_URL}/sitemaps/sitemap-blog.xml</loc>\n    <lastmod>${today}</lastmod>\n  </sitemap>\n  <sitemap>\n    <loc>${SITE_URL}/sitemaps/sitemap-technologies.xml</loc>\n    <lastmod>${today}</lastmod>\n  </sitemap>\n  <sitemap>\n    <loc>${SITE_URL}/sitemaps/sitemap-images.xml</loc>\n    <lastmod>${today}</lastmod>\n  </sitemap>\n</sitemapindex>`;
  await writeFile(join(PUBLIC_DIR, "sitemap.xml"), indexXml, "utf8");
  const wrap = (nodes) => `<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n${nodes.join("\n")}\n</urlset>`;
  await writeFile(join(PUBLIC_SITEMAPS_DIR, "sitemap-static.xml"), wrap(staticXml), "utf8");
  await writeFile(join(PUBLIC_SITEMAPS_DIR, "sitemap-competences.xml"), wrap(competencesXml), "utf8");
  await writeFile(join(PUBLIC_SITEMAPS_DIR, "sitemap-blog.xml"), wrap(blogXml), "utf8");
  await writeFile(join(PUBLIC_SITEMAPS_DIR, "sitemap-technologies.xml"), wrap(techXml), "utf8");
  // Images sitemap
  const postsJs = await readFile(join(ROOT, "src", "data", "posts.js"), "utf8").catch(() => "");
  const imports = new Map();
  for (const m of postsJs.matchAll(/import\s+(\w+)\s+from\s+"([^"]+)";/g)) imports.set(m[1], m[2]);
  const imgNodes = [];
  for (const m of postsJs.matchAll(/slug:\s*"([^"]+)"[\s\S]*?cover:\s*(\w+),/g)) {
    const slug = m[1];
    const varName = m[2];
    const rel = imports.get(varName) || "/og-image.jpg";
    const imgAbs = abs(rel);
    imgNodes.push(`  <url>\n    <loc>${abs(`/blog/${slug}`)}</loc>\n    <image:image xmlns:image=\"http://www.google.com/schemas/sitemap-image/1.1\">\n      <image:loc>${imgAbs}</image:loc>\n    </image:image>\n  </url>`);
  }
  const wrapImg = (nodes) => `<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\" xmlns:image=\"http://www.google.com/schemas/sitemap-image/1.1\">\n${nodes.join("\n")}\n</urlset>`;
  await writeFile(join(PUBLIC_SITEMAPS_DIR, "sitemap-images.xml"), wrapImg(imgNodes), "utf8");
  console.log("✅ sitemap index + sections générés dans public/ pour le dev local");
}

build().catch((e) => {
  console.error("❌ Erreur génération sitemap:", e);
  process.exit(1);
});
