const fs = require("fs");
const path = require("path");

function readFileSafe(p) { try { return fs.readFileSync(p, "utf8"); } catch { return ""; } }
function iso(s) { const d = new Date(s); return Number.isNaN(d.getTime()) ? new Date().toISOString().slice(0,10) : d.toISOString().slice(0,10); }

module.exports = (req, res) => {
  const host = (req.headers["x-forwarded-host"] || req.headers.host || "www.cliniquedentairedabia.com").replace(/\/$/, "");
  const base = `https://${host}`;
  const src = readFileSafe(path.join(process.cwd(), "src", "data", "posts.js"));
  const matches = Array.from(src.matchAll(/slug:\s*"([^"]+)"[\s\S]*?date:\s*"([0-9-]+)"/g)).map((m) => ({ slug: m[1], date: m[2] }));
  const xml = `<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n${matches
    .map(
      ({ slug, date }) => `  <url>\n    <loc>${base}/blog/${slug}</loc>\n    <lastmod>${iso(date)}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>`
    )
    .join("\n")}\n</urlset>`;
  res.setHeader("Content-Type", "application/xml; charset=utf-8");
  res.status(200).send(xml);
};

