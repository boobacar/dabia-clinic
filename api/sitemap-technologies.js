const fs = require("fs");
const path = require("path");

function readFileSafe(p) { try { return fs.readFileSync(p, "utf8"); } catch { return ""; } }
const today = () => new Date().toISOString().slice(0, 10);

module.exports = (req, res) => {
  const host = (req.headers["x-forwarded-host"] || req.headers.host || "www.cliniquedentairedabia.com").replace(/\/$/, "");
  const base = `https://${host}`;
  const src = readFileSafe(path.join(process.cwd(), "src", "data", "technologies.js"));
  const slugs = Array.from(src.matchAll(/slug:\s*"([^"]+)"/g)).map((m) => m[1]);
  const lm = today();
  const xml = `<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n${slugs
    .map(
      (slug) => `  <url>\n    <loc>${base}/infos/technologie/${slug}</loc>\n    <lastmod>${lm}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.6</priority>\n  </url>`
    )
    .join("\n")}\n</urlset>`;
  res.setHeader("Content-Type", "application/xml; charset=utf-8");
  res.status(200).send(xml);
};

