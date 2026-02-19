import { readFile, writeFile, mkdir } from "node:fs/promises";
import { join, dirname } from "node:path";

const DIST = join(process.cwd(), "dist");
const DOMAIN = "https://www.cliniquedentairedabia.com";

const ROUTES = [
  {
    path: "/dentiste-dakar",
    title: "Dentiste à Dakar (Liberté 6) – RDV rapide | Clinique DABIA",
    description:
      "Dentiste à Dakar (Liberté 6 – Sicap Foire) : urgences, implants, aligneurs, facettes, enfants. RDV rapide par téléphone, WhatsApp ou formulaire.",
  },
  {
    path: "/cabinet-dentaire-dakar",
    title: "Cabinet dentaire à Dakar – Devis clair & RDV rapide | DABIA",
    description:
      "Cabinet dentaire moderne à Dakar: prévention, esthétique, implants, orthodontie et urgences. Devis clair + prise de rendez-vous rapide (appel/WhatsApp).",
  },
  {
    path: "/urgence-dentaire-dakar",
    title: "Urgence dentaire à Dakar – Prise en charge rapide | DABIA",
    description:
      "Urgence dentaire à Dakar : douleur, gonflement, dent cassée. Conseils immédiats + prise en charge rapide. Appelez ou WhatsApp la Clinique DABIA.",
  },
  {
    path: "/rendez-vous",
    title: "Rendez-vous dentiste à Dakar – Formulaire express | DABIA",
    description:
      "Prenez rendez-vous chez le dentiste à Dakar en 1 minute: formulaire express, appel direct ou WhatsApp. Clinique Dentaire DABIA (Liberté 6).",
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
