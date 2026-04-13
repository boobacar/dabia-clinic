import { readFile, writeFile, mkdir } from "node:fs/promises";
import { join, dirname } from "node:path";

const DIST = join(process.cwd(), "dist");
const DOMAIN = "https://www.cliniquedentairedabia.com";

const ROUTES = [
  {
    path: "/dentiste-dakar",
    title: "Dentiste à Dakar : consultation, urgence et RDV rapide | Clinique DABIA",
    description:
      "Dentiste à Dakar (Liberté 6 – Sicap Foire) : consultation, urgence, implants, orthodontie et esthétique. RDV rapide par téléphone, WhatsApp ou formulaire.",
    h1: "Dentiste à Dakar – Clinique Dentaire DABIA",
    intro:
      "Consultations, urgences et soins complets à Dakar avec devis clair et prise de rendez-vous rapide.",
  },
  {
    path: "/cabinet-dentaire-dakar",
    title: "Cabinet dentaire à Dakar : devis clair & RDV rapide | DABIA",
    description:
      "Cabinet dentaire à Dakar : prévention, esthétique, implants, orthodontie et urgences. Devis transparent + prise de rendez-vous rapide.",
    h1: "Cabinet dentaire à Dakar – Clinique DABIA",
    intro:
      "Un cabinet dentaire moderne à Dakar pour vos soins, urgences et plans de traitement personnalisés.",
  },
  {
    path: "/urgence-dentaire-dakar",
    title: "Urgence dentaire à Dakar : rage de dent, abcès, dent cassée | DABIA",
    description:
      "Urgence dentaire à Dakar : douleur, gonflement, dent cassée. Conseils immédiats + prise en charge rapide par appel, WhatsApp ou RDV.",
    h1: "Urgence dentaire à Dakar – prise en charge rapide",
    intro:
      "Rage de dent, abcès, gonflement ou dent cassée : contactez la clinique pour une orientation immédiate.",
  },
  {
    path: "/rendez-vous",
    title: "Rendez-vous dentiste à Dakar – formulaire express | DABIA",
    description:
      "Prenez rendez-vous chez le dentiste à Dakar en 1 minute : formulaire express, appel direct ou WhatsApp.",
    h1: "Prendre rendez-vous chez le dentiste à Dakar",
    intro:
      "Réservez votre consultation rapidement via formulaire, téléphone ou WhatsApp.",
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

function injectServerH1(html, route) {
  const shell = `
    <main style="max-width:880px;margin:40px auto;padding:0 16px;font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;line-height:1.5">
      <h1 style="font-size:clamp(1.8rem,4vw,2.6rem);margin:0 0 12px;color:#6b5d34">${esc(route.h1)}</h1>
      <p style="margin:0 0 18px;color:#374151">${esc(route.intro)}</p>
      <p style="margin:0;color:#111827">👉 <a href="/rendez-vous">Prendre rendez-vous</a> · <a href="tel:+221777039393">Appeler</a> · <a href="https://wa.me/221777039393">WhatsApp</a></p>
    </main>`;

  return html.replace(/<div id="root"><\/div>/i, `<div id="root">${shell}</div>`);
}

function renderForRoute(baseHtml, route) {
  const url = `${DOMAIN}${route.path}`;
  const title = route.title;
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

  html = injectServerH1(html, route);
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
