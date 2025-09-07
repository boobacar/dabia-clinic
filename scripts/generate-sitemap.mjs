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
const POSTS_META_PATH = join(ROOT, "src", "data", "posts.meta.json");

const STATIC_ROUTES = [
  "/",
  "/a-propos",
  "/blog",
  "/rendez-vous",
  "/all-competences",
  "/infos/technologie",
  "/infos/post-visite",
  "/infos/enfants",
  "/infos/assurances",
  "/rejoindre",
];

// <<< AJOUTE ICI TES SLUGS DE COMPÉTENCES >>>
const COMPETENCE_SLUGS = [
  "esthétique-dentaire",
  "parodontologie",
  "implantologie",
  "endodontie",
  "facettes-dentaires",
  "orthodontie",
  "greffe-osseuse",
  "blanchiment-dentaire",
  "pedodontie",
];

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
  const today = iso();

  const posts = await readPostsMeta();
  console.log(`📝 Posts trouvés: ${posts.length}`);

  // 1) Statiques
  const staticXml = STATIC_ROUTES.map((path) =>
    urlNode({
      loc: abs(path),
      lastmod: today,
      changefreq: path === "/" ? "daily" : "weekly",
      priority: path === "/" ? "1.0" : "0.6",
    })
  );

  // 2) Compétences
  console.log(`🦷 Compétences ajoutées: ${COMPETENCE_SLUGS.length}`);
  const competencesXml = COMPETENCE_SLUGS.map((slug) =>
    urlNode({
      loc: abs(`/competences/${slug}`),
      lastmod: today,
      changefreq: "monthly",
      priority: "0.8",
    })
  );

  // 3) Blog
  const blogXml = posts.map((p) =>
    urlNode({
      loc: abs(`/blog/${p.slug}`),
      lastmod: iso(p.date || today),
      changefreq: "monthly",
      priority: "0.7",
    })
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
>
${[...staticXml, ...competencesXml, ...blogXml].join("\n")}
</urlset>`;

  await writeFile(join(DIST_DIR, "sitemap.xml"), xml, "utf8");
  await writeFile(
    join(DIST_DIR, "robots.txt"),
    `User-agent: *
Allow: /

Sitemap: ${abs("/sitemap.xml")}
`,
    "utf8"
  );

  console.log("✅ sitemap.xml et robots.txt générés dans dist/");
}

build().catch((e) => {
  console.error("❌ Erreur génération sitemap:", e);
  process.exit(1);
});
