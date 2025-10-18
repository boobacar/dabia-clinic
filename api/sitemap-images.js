const fs = require("fs");
const path = require("path");

function readFileSafe(p) {
  try {
    return fs.readFileSync(p, "utf8");
  } catch {
    return "";
  }
}

module.exports = (req, res) => {
  const host = (
    req.headers["x-forwarded-host"] ||
    req.headers.host ||
    "www.cliniquedentairedabia.com"
  ).replace(/\/$/, "");
  const base = `https://${host}`;
  const postsJs = readFileSafe(
    path.join(process.cwd(), "src", "data", "posts.js")
  );

  // Build import variable -> relative path map
  const importMap = new Map();
  for (const m of postsJs.matchAll(/import\s+(\w+)\s+from\s+"([^"]+)";/g)) {
    importMap.set(m[1], m[2]);
  }
  // Extract slug, title and cover variable per post
  const entries = [];
  for (const m of postsJs.matchAll(
    /slug:\s*"([^"]+)"[\s\S]*?title:\s*"([^"]+)"[\s\S]*?cover:\s*(\w+),/g
  )) {
    const slug = m[1];
    const title = m[2];
    const varName = m[3];
    const rel = importMap.get(varName) || "/og-image.webp";
    const imgAbs = rel.startsWith("http")
      ? rel
      : `${base}${rel.startsWith("/") ? rel : `/${rel}`}`;
    entries.push({ slug, img: imgAbs, title });
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${entries
    .map(
      ({ slug, img, title }) =>
        `  <url>\n    <loc>${base}/blog/${slug}</loc>\n    <image:image>\n      <image:loc>${img}</image:loc>\n      <image:title><![CDATA[${title}]]></image:title>\n      <image:caption><![CDATA[${title} – Clinique Dentaire DABIA]]></image:caption>\n    </image:image>\n  </url>`
    )
    .join("\n")}\n</urlset>`;

  res.setHeader("Content-Type", "application/xml; charset=utf-8");
  res.status(200).send(xml);
};
