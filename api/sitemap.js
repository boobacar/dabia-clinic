// api/sitemap.js — Monolithic urlset sitemap (with image namespace)
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

module.exports = (req, res) => {
  const host = (req.headers["x-forwarded-host"] || req.headers.host || "www.cliniquedentairedabia.com").replace(/\/$/, "");
  const base = `https://${host}`;
  const today = new Date().toISOString().slice(0, 10);

  // 1) Static pages
  const STATIC = [
    ["/", "daily", "1.0"],
    ["/blog", "weekly", "0.7"],
    ["/rendez-vous", "weekly", "0.7"],
    ["/dentiste-dakar", "weekly", "0.8"],
    ["/cabinet-dentaire-dakar", "weekly", "0.8"],
    ["/urgence-dentaire-dakar", "weekly", "0.8"],
    ["/apropos", "monthly", "0.6"],
    ["/personnel", "monthly", "0.6"],
    ["/all-competences", "weekly", "0.7"],
    ["/infos/assurances", "monthly", "0.5"],
    ["/infos/post-visite", "monthly", "0.5"],
    ["/infos/enfants", "monthly", "0.5"],
    ["/infos/technologie", "monthly", "0.6"],
    ["/rejoindre", "monthly", "0.4"],
    // localités
    ["/cabinet-dentaire-liberte-6", "monthly", "0.7"],
    ["/clinique-dentaire-parcelles-assainies", "monthly", "0.7"],
    ["/cabinet-dentaire-almadies", "monthly", "0.7"],
    ["/cabinet-dentaire-mermoz", "monthly", "0.7"],
    ["/cabinet-dentaire-point-e", "monthly", "0.7"],
    ["/cabinet-dentaire-sacre-coeur", "monthly", "0.7"],
    ["/cabinet-dentaire-yoff", "monthly", "0.7"],
    ["/cabinet-dentaire-hlm-grand-yoff", "monthly", "0.7"],
    ["/cabinet-dentaire-scat-urbam", "monthly", "0.7"],
    ["/cabinet-dentaire-ngor", "monthly", "0.7"],
    ["/cabinet-dentaire-ouakam", "monthly", "0.7"],
    ["/cabinet-dentaire-patte-d-oie", "monthly", "0.7"],
    ["/cabinet-dentaire-fann", "monthly", "0.7"],
    ["/cabinet-dentaire-plateau", "monthly", "0.7"],
  ];

  // 2) Competences
  const competencesSrc = readFileSafe(path.join(process.cwd(), "src", "data", "competences.js"));
  const compSlugs = Array.from(competencesSrc.matchAll(/slug:\s*"([^"]+)"/g)).map((m) => m[1]);

  // 3) Technologies
  const techSrc = readFileSafe(path.join(process.cwd(), "src", "data", "technologies.js"));
  const techSlugs = Array.from(techSrc.matchAll(/slug:\s*"([^"]+)"/g)).map((m) => m[1]);

  // 4) Blog posts with covers for image:image
  const postsJs = readFileSafe(path.join(process.cwd(), "src", "data", "posts.js"));
  const importMap = new Map();
  for (const m of postsJs.matchAll(/import\s+(\w+)\s+from\s+"([^"]+)";/g)) importMap.set(m[1], m[2]);
  const posts = Array.from(postsJs.matchAll(/slug:\s*"([^"]+)"[\s\S]*?date:\s*"([0-9-]+)"[\s\S]*?cover:\s*(\w+),/g)).map(
    (m) => ({ slug: m[1], date: m[2], coverVar: m[3] })
  );

  const buf = [];
  const pushUrl = (loc, lastmod = today, changefreq = "monthly", priority = "0.7", image) => {
    buf.push(
      `  <url>\n    <loc>${base}${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>${
        image
          ? `\n    <image:image>\n      <image:loc>${image.loc}</image:loc>${
              image.title ? `\n      <image:title><![CDATA[${image.title}]]></image:title>` : ""
            }${
              image.caption ? `\n      <image:caption><![CDATA[${image.caption}]]></image:caption>` : ""
            }\n    </image:image>`
          : ""
      }\n  </url>`
    );
  };

  // Static
  STATIC.forEach(([p, cf, pr]) => pushUrl(p, today, cf, pr));
  // Competences
  compSlugs.forEach((slug) => pushUrl(`/competences/${slug}`, today, "monthly", "0.8"));
  // Technologies
  techSlugs.forEach((slug) => pushUrl(`/infos/technologie/${slug}`, today, "monthly", "0.6"));
  // Blog posts with image tag
  posts.forEach(({ slug, date, coverVar }) => {
    const rel = importMap.get(coverVar) || "/og-image.jpg";
    const imgAbs = rel.startsWith("http") ? rel : `${base}${rel.startsWith("/") ? rel : `/${rel}`}`;
    pushUrl(`/blog/${slug}`, iso(date), "monthly", "0.7", {
      loc: imgAbs,
      caption: `Clinique Dentaire DABIA – ${slug}`,
    });
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${buf.join("\n")}\n</urlset>`;

  res.setHeader("Content-Type", "application/xml; charset=utf-8");
  res.status(200).send(xml);
};
