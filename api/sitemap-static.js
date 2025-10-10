const isoToday = () => new Date().toISOString().slice(0, 10);

module.exports = (req, res) => {
  const host = (req.headers["x-forwarded-host"] || req.headers.host || "www.cliniquedentairedabia.com").replace(/\/$/, "");
  const base = `https://${host}`;
  const lm = isoToday();
  const entries = [
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

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries
    .map(
      ([path, changefreq, priority]) =>
        `  <url>\n    <loc>${base}${path}</loc>\n    <lastmod>${lm}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`
    )
    .join("\n")}\n</urlset>`;
  res.setHeader("Content-Type", "application/xml; charset=utf-8");
  res.status(200).send(xml);
};

