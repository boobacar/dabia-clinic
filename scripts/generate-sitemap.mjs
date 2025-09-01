// scripts/generate-sitemap.mjs
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const SITE = "https://www.cliniquedentairedabia.com";
const OUT_DIR = resolve(process.cwd(), "public");
if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });

// 1) Routes statiques (ajoute/retire selon ton site)
const staticRoutes = [
  "/",
  "/blog",
  "/rendez-vous",
  "/all-competences",
  "/infos/technologie",
  "/infos/post-visite",
  "/infos/enfants",
  "/personnel",
  "/rejoindre",
];

// 2) Articles du blog depuis le JSON (sans import d’images)
const postsMetaPath = resolve(process.cwd(), "src/data/posts.meta.json");
const posts = JSON.parse(readFileSync(postsMetaPath, "utf8"));

// URLs finales (statics + posts)
const urls = [
  ...staticRoutes.map((p) => ({
    loc: `${SITE}${p}`,
    lastmod: new Date().toISOString().slice(0, 10),
  })),
  ...posts.map((p) => ({
    loc: `${SITE}/blog/${p.slug}`,
    lastmod: p.date || new Date().toISOString().slice(0, 10),
  })),
];

// ===== SITEMAP =====
const sitemap =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  urls
    .map(
      (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${u.loc.includes("/blog/") ? "0.80" : "0.95"}</priority>
  </url>`
    )
    .join("\n") +
  `\n</urlset>\n`;

writeFileSync(resolve(OUT_DIR, "sitemap.xml"), sitemap, "utf8");

// ===== RSS =====
const rssItems = posts
  .sort((a, b) => (a.date < b.date ? 1 : -1))
  .map((p) => {
    const pub = new Date(p.date).toUTCString();
    return `<item>
  <title><![CDATA[${p.title}]]></title>
  <link>${SITE}/blog/${p.slug}</link>
  <guid isPermaLink="true">${SITE}/blog/${p.slug}</guid>
  <pubDate>${pub}</pubDate>
  <description><![CDATA[${p.description}]]></description>
</item>`;
  })
  .join("\n");

const rss =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<rss version="2.0">\n` +
  `<channel>
  <title>Clinique Dentaire DABIA – Blog</title>
  <link>${SITE}/blog</link>
  <description>Conseils dentaires, urgences, esthétique, technologies – Dakar</description>
  <language>fr-sn</language>
  ${rssItems}
</channel>
</rss>\n`;

writeFileSync(resolve(OUT_DIR, "rss.xml"), rss, "utf8");

// ===== robots.txt =====
const robots = `User-agent: *
Allow: /

Sitemap: ${SITE}/sitemap.xml
`;

writeFileSync(resolve(OUT_DIR, "robots.txt"), robots, "utf8");

console.log("✅ Generated sitemap.xml, rss.xml, robots.txt in /public");
