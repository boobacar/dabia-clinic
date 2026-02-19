import { readFile, writeFile, mkdir } from "node:fs/promises";
import { join, dirname } from "node:path";

const DIST = join(process.cwd(), "dist");
const DOMAIN = "https://www.cliniquedentairedabia.com";

const ROUTES = [
  {
    path: "/dentiste-dakar",
    title: "Dentiste à Dakar – Clinique Dentaire DABIA",
    description:
      "Dentiste à Dakar (Liberté 6 – Sicap Foire) : urgences, implants, aligneurs, facettes, enfants. Rendez-vous rapides à la Clinique DABIA.",
  },
  {
    path: "/cabinet-dentaire-dakar",
    title: "Cabinet dentaire à Dakar – DABIA",
    description:
      "Cabinet dentaire moderne à Dakar: prévention, esthétique, implants, orthodontie, urgences. Technologies CBCT et scanner intra-oral.",
  },
  {
    path: "/urgence-dentaire-dakar",
    title: "Urgence dentaire à Dakar – Clinique Dentaire DABIA",
    description:
      "Douleur aiguë, gonflement, dent cassée ? Conseils immédiats et prise en charge rapide à Dakar. Appelez la Clinique DABIA.",
  },
  {
    path: "/rendez-vous",
    title: "Prendre rendez-vous dentiste à Dakar – Clinique DABIA",
    description:
      "Prenez rendez-vous en ligne avec la Clinique Dentaire DABIA à Dakar. Option rapide: appel, WhatsApp ou formulaire express.",
  },
];

const esc = (s) =>
  s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

function upsertTag(html, regex, replacement) {
  if (regex.test(html)) return html.replace(regex, replacement);
  return html.replace("</head>", `${replacement}\n</head>`);
}

function renderForRoute(baseHtml, route) {
  const url = `${DOMAIN}${route.path}`;
  const title = `${route.title} | Clinique Dentaire DABIA`;
  const desc = esc(route.description);

  let html = baseHtml;
  html = upsertTag(html, /<title>[^<]*<\/title>/i, `<title>${esc(title)}</title>`);
  html = upsertTag(
    html,
    /<meta[^>]*name=["']description["'][^>]*>/i,
    `<meta name="description" content="${desc}" />`,
  );
  html = upsertTag(
    html,
    /<link[^>]*rel=["']canonical["'][^>]*>/i,
    `<link rel="canonical" href="${url}" />`,
  );
  html = upsertTag(
    html,
    /<meta[^>]*property=["']og:title["'][^>]*>/i,
    `<meta property="og:title" content="${esc(title)}" />`,
  );
  html = upsertTag(
    html,
    /<meta[^>]*property=["']og:description["'][^>]*>/i,
    `<meta property="og:description" content="${desc}" />`,
  );
  html = upsertTag(
    html,
    /<meta[^>]*property=["']og:url["'][^>]*>/i,
    `<meta property="og:url" content="${url}" />`,
  );
  html = upsertTag(
    html,
    /<meta[^>]*name=["']twitter:title["'][^>]*>/i,
    `<meta name="twitter:title" content="${esc(title)}" />`,
  );
  html = upsertTag(
    html,
    /<meta[^>]*name=["']twitter:description["'][^>]*>/i,
    `<meta name="twitter:description" content="${desc}" />`,
  );

  return html;
}

async function main() {
  const indexPath = join(DIST, "index.html");
  const base = await readFile(indexPath, "utf8");

  for (const route of ROUTES) {
    const html = renderForRoute(base, route);
    const out = join(DIST, route.path.replace(/^\//, ""), "index.html");
    await mkdir(dirname(out), { recursive: true });
    await writeFile(out, html, "utf8");
    console.log(`SEO shell generated: ${route.path}`);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
