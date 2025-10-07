// api/sitemap.js — Génération dynamique du sitemap
const fs = require("fs");
const path = require("path");

function iso(dateStr) {
  if (!dateStr) return new Date().toISOString().slice(0, 10);
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) return new Date().toISOString().slice(0, 10);
  return d.toISOString().slice(0, 10);
}

function readFileSafe(p) {
  try {
    return fs.readFileSync(p, "utf8");
  } catch {
    return "";
  }
}

function extractByRegex(source, regex) {
  const out = [];
  let m;
  while ((m = regex.exec(source))) out.push(m.slice(1));
  return out;
}

module.exports = (req, res) => {
  const host = (req.headers["x-forwarded-host"] || req.headers.host || "www.cliniquedentairedabia.com").replace(/\/$/, "");
  const base = `https://${host}`;

  // Pages statiques principales
  const today = new Date().toISOString().slice(0, 10);
  const staticPages = [
    ["/", today, "daily", "1.0"],
    ["/blog", today, "weekly", "0.7"],
    ["/rendez-vous", today, "weekly", "0.7"],
    ["/dentiste-dakar", today, "weekly", "0.8"],
    ["/cabinet-dentaire-dakar", today, "weekly", "0.8"],
    ["/urgence-dentaire-dakar", today, "weekly", "0.8"],
    ["/apropos", today, "monthly", "0.6"],
    ["/personnel", today, "monthly", "0.6"],
    ["/all-competences", today, "weekly", "0.7"],
    ["/infos/assurances", today, "monthly", "0.5"],
    ["/infos/post-visite", today, "monthly", "0.5"],
    ["/infos/enfants", today, "monthly", "0.5"],
    ["/infos/technologie", today, "monthly", "0.6"],
    ["/rejoindre", today, "monthly", "0.4"],
    ["/cabinet-dentaire-liberte-6", today, "monthly", "0.7"],
    ["/clinique-dentaire-parcelles-assainies", today, "monthly", "0.7"],
    ["/cabinet-dentaire-almadies", today, "monthly", "0.7"],
    ["/cabinet-dentaire-mermoz", today, "monthly", "0.7"],
    ["/cabinet-dentaire-point-e", today, "monthly", "0.7"],
    ["/cabinet-dentaire-sacre-coeur", today, "monthly", "0.7"],
    ["/cabinet-dentaire-yoff", today, "monthly", "0.7"],
    ["/cabinet-dentaire-hlm-grand-yoff", today, "monthly", "0.7"],
    ["/cabinet-dentaire-scat-urbam", today, "monthly", "0.7"],
    ["/cabinet-dentaire-ngor", today, "monthly", "0.7"],
    ["/cabinet-dentaire-ouakam", today, "monthly", "0.7"],
    ["/cabinet-dentaire-patte-d-oie", today, "monthly", "0.7"],
    ["/cabinet-dentaire-fann", today, "monthly", "0.7"],
    ["/cabinet-dentaire-plateau", today, "monthly", "0.7"],
  ];

  // Compétences dynamiques: lire src/data/competences.js
  const competencesSrc = readFileSafe(
    path.join(process.cwd(), "src", "data", "competences.js")
  );
  const compSlugs = extractByRegex(
    competencesSrc,
    /slug:\s*"([^"]+)"/g
  ).map((m) => m[0]);
  const competences = compSlugs.map((slug) => [
    `/competences/${slug}`,
    today,
    "monthly",
    "0.8",
  ]);

  // Articles: extraire slug + date depuis src/data/posts.js (pas d'import côté Node)
  const postsSrc = readFileSafe(path.join(process.cwd(), "src", "data", "posts.js"));
  const postMatches = extractByRegex(
    postsSrc,
    /slug:\s*"([^"]+)"[\s\S]*?date:\s*"([0-9-]+)"/g
  );
  const posts = postMatches.map(([slug, date]) => [
    `/blog/${slug}`,
    iso(date),
    "monthly",
    "0.7",
  ]);

  // Technologies: lire src/data/technologies.js
  const technologiesSrc = readFileSafe(
    path.join(process.cwd(), "src", "data", "technologies.js")
  );
  const techSlugs = extractByRegex(
    technologiesSrc,
    /slug:\s*"([^"]+)"/g
  ).map((m) => m[0]);
  const techUrls = techSlugs.map((slug) => [
    `/infos/technologie/${slug}`,
    today,
    "monthly",
    "0.6",
  ]);

  const entries = [...staticPages, ...competences, ...posts, ...techUrls];

  const urlsXml = entries
    .map(([loc, lastmod, changefreq, priority]) => `  <url>\n    <loc>${base}${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`)
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlsXml}
</urlset>`;

  res.setHeader("Content-Type", "application/xml; charset=utf-8");
  res.status(200).send(xml);
};
