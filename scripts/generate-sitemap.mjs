import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Adjust if your project structure differs
const ROOT = path.resolve(__dirname, "..");
const PUBLIC = path.join(ROOT, "public");
const SRC = path.join(ROOT, "src");

// Dynamically import posts
const { POSTS } = await import(path.join(SRC, "data", "posts.js"));

const BASE_URL = "https://www.cliniquedentairedabia.com";

const staticRoutes = [
  "/",
  "/rendez-vous",
  "/all-competences",
  "/infos/technologie",
  "/infos/post-visite",
  "/infos/enfants",
  "/personnel",
  "/blog",
];

function iso(d) {
  return new Date(d).toISOString();
}

function makeSitemap() {
  const urls = [
    ...staticRoutes.map((loc) => ({
      loc: `${BASE_URL}${loc}`,
      lastmod: iso(Date.now()),
    })),
    ...POSTS.map((p) => ({
      loc: `${BASE_URL}/blog/${p.slug}`,
      lastmod: iso(p.date),
    })),
  ];

  const body = urls
    .map(
      (u) =>
        `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${u.lastmod}</lastmod>\n  </url>`
    )
    .join("\n");

  return (
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`
  );
}

function makeRss() {
  const items = POSTS.map(
    (p) =>
      `    <item>\n      <title><![CDATA[${
        p.title
      }]]></title>\n      <link>${BASE_URL}/blog/${
        p.slug
      }</link>\n      <guid>${BASE_URL}/blog/${
        p.slug
      }</guid>\n      <pubDate>${new Date(
        p.date
      ).toUTCString()}</pubDate>\n      <description><![CDATA[${
        p.description
      }]]></description>\n    </item>`
  ).join("\n");

  return (
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<rss version="2.0">\n  <channel>\n    <title>Clinique Dentaire DABIA – Blog</title>\n    <link>${BASE_URL}/blog</link>\n    <description>Conseils dentaires à Dakar</description>\n${items}\n  </channel>\n</rss>`
  );
}

function makeRobots() {
  return `User-agent: *\nAllow: /\n\nSitemap: ${BASE_URL}/sitemap.xml\n`;
}

fs.mkdirSync(PUBLIC, { recursive: true });
fs.writeFileSync(path.join(PUBLIC, "sitemap.xml"), makeSitemap());
fs.writeFileSync(path.join(PUBLIC, "rss.xml"), makeRss());
fs.writeFileSync(path.join(PUBLIC, "robots.txt"), makeRobots());

console.log("Generated sitemap.xml, rss.xml, robots.txt in /public");
