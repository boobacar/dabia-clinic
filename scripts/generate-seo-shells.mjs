import { readFile, writeFile, mkdir } from "node:fs/promises";
import { join, dirname } from "node:path";

const ROOT = process.cwd();
const DIST = join(ROOT, "dist");
const DOMAIN = "https://www.cliniquedentairedabia.com";
const POSTS_META_PATH = join(ROOT, "src", "data", "posts.meta.json");
const POSTS_SOURCE_PATH = join(ROOT, "src", "data", "posts.js");
const COMPETENCES_PATH = join(ROOT, "src", "data", "competences.js");
const TECHNOLOGIES_PATH = join(ROOT, "src", "data", "technologies.js");

const STATIC_PATHS = [
  "/",
  "/blog",
  "/rendez-vous",
  "/dentiste-dakar",
  "/cabinet-dentaire-dakar",
  "/urgence-dentaire-dakar",
  "/apropos",
  "/personnel",
  "/all-competences",
  "/infos/assurances",
  "/infos/post-visite",
  "/infos/enfants",
  "/infos/technologie",
  "/rejoindre",
  "/cabinet-dentaire-liberte-6",
  "/clinique-dentaire-parcelles-assainies",
  "/cabinet-dentaire-almadies",
  "/cabinet-dentaire-mermoz",
  "/cabinet-dentaire-point-e",
  "/cabinet-dentaire-sacre-coeur",
  "/cabinet-dentaire-yoff",
  "/cabinet-dentaire-hlm-grand-yoff",
  "/cabinet-dentaire-scat-urbam",
  "/cabinet-dentaire-ngor",
  "/cabinet-dentaire-ouakam",
  "/cabinet-dentaire-patte-d-oie",
  "/cabinet-dentaire-fann",
  "/cabinet-dentaire-plateau",
  "/galerie",
];

const STATIC_OVERRIDES = {
  "/": {
    title: "Dentiste Dakar : Urgence & Soins Sans Douleur | Clinique DABIA",
    description:
      "Clinique dentaire à Dakar : urgences, détartrage, implants, orthodontie et esthétique. Prenez rendez-vous rapidement par téléphone, WhatsApp ou formulaire.",
    h1: "Clinique Dentaire DABIA à Dakar",
    intro:
      "Soins dentaires modernes à Dakar avec une équipe expérimentée et un accompagnement personnalisé.",
  },
  "/blog": {
    title: "Blog dentaire à Dakar – Conseils, urgences, prix",
    description:
      "Articles clairs et fiables par la Clinique Dentaire DABIA : urgences dentaires à Dakar, blanchiment, implants, orthodontie, prévention, enfants.",
    h1: "Blog de la Clinique Dentaire DABIA",
    intro:
      "Conseils pratiques, urgences, technologies et guides prix pour mieux prendre soin de votre sourire à Dakar.",
  },
  "/rendez-vous": {
    title: "Rendez-vous dentiste à Dakar – formulaire express | DABIA",
    description:
      "Prenez rendez-vous chez le dentiste à Dakar en 1 minute : formulaire express, appel direct ou WhatsApp.",
    h1: "Prendre rendez-vous chez le dentiste à Dakar",
    intro:
      "Réservez votre consultation rapidement via formulaire, téléphone ou WhatsApp.",
  },
  "/dentiste-dakar": {
    title: "Dentiste à Dakar : consultation, urgence et RDV rapide | Clinique DABIA",
    description:
      "Dentiste à Dakar (Liberté 6 – Sicap Foire) : consultation, urgence, implants, orthodontie et esthétique. RDV rapide par téléphone, WhatsApp ou formulaire.",
    h1: "Dentiste à Dakar – Clinique Dentaire DABIA",
    intro:
      "Consultations, urgences et soins complets à Dakar avec devis clair et prise de rendez-vous rapide.",
  },
  "/cabinet-dentaire-dakar": {
    title: "Cabinet dentaire à Dakar : devis clair & RDV rapide | DABIA",
    description:
      "Cabinet dentaire à Dakar : prévention, esthétique, implants, orthodontie et urgences. Devis transparent + prise de rendez-vous rapide.",
    h1: "Cabinet dentaire à Dakar – Clinique DABIA",
    intro:
      "Un cabinet dentaire moderne à Dakar pour vos soins, urgences et plans de traitement personnalisés.",
  },
  "/urgence-dentaire-dakar": {
    title: "Urgence dentaire à Dakar : rage de dent, abcès, dent cassée | DABIA",
    description:
      "Urgence dentaire à Dakar : douleur, gonflement, dent cassée. Conseils immédiats + prise en charge rapide par appel, WhatsApp ou RDV.",
    h1: "Urgence dentaire à Dakar – prise en charge rapide",
    intro:
      "Rage de dent, abcès, gonflement ou dent cassée : contactez la clinique pour une orientation immédiate.",
  },
};

const esc = (s) =>
  String(s || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

const readFileSafe = async (p) => {
  try {
    return await readFile(p, "utf8");
  } catch {
    return "";
  }
};

const absUrl = (path) => `${DOMAIN}${path === "/" ? "/" : path}`;

function toTitleCase(text) {
  return text
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function labelFromPath(path) {
  if (path === "/") return "Accueil";
  const segment = decodeURIComponent(path.split("/").filter(Boolean).pop() || "");
  return toTitleCase(segment.replaceAll("-", " "));
}

function defaultRouteMeta(path) {
  const label = labelFromPath(path);
  return {
    path,
    title: `${label} | Clinique Dentaire DABIA`,
    description: `Clinique Dentaire DABIA à Dakar : ${label}.`,
    h1: label,
    intro: `Informations utiles sur ${label.toLowerCase()} à la Clinique Dentaire DABIA.`,
    type: "website",
  };
}

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
  const url = absUrl(route.path);
  const title = route.title;
  const desc = esc(route.description);
  const ogType = route.type || "website";

  let html = baseHtml;
  html = upsertTag(html, /<title>[\s\S]*?<\/title>/i, `<title>${esc(title)}</title>`);
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
    /<meta[^>]*property=["']og:type["'][^>]*>/i,
    `<meta property="og:type" content="${ogType}" />`,
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

  return injectServerH1(html, route);
}

async function readPostsMeta() {
  try {
    const raw = await readFile(POSTS_META_PATH, "utf8");
    const list = JSON.parse(raw);
    return (Array.isArray(list) ? list : []).filter((p) => p?.slug);
  } catch {
    return [];
  }
}

async function readPostsSource() {
  const src = await readFileSafe(POSTS_SOURCE_PATH);
  return Array.from(
    src.matchAll(
      /\{[\s\S]*?slug:\s*"([^"]+)",[\s\S]*?title:\s*"([^"]+)",[\s\S]*?description:\s*"([^"]+)",[\s\S]*?date:\s*"([0-9]{4}-[0-9]{2}-[0-9]{2})"/g
    )
  ).map((m) => ({
    slug: m[1],
    title: m[2],
    description: m[3],
    date: m[4],
  }));
}

async function readCompetences() {
  const src = await readFileSafe(COMPETENCES_PATH);
  return Array.from(src.matchAll(/titre:\s*"([^"]+)"[\s\S]*?slug:\s*"([^"]+)"/g)).map(
    (m) => ({ title: m[1], slug: m[2] })
  );
}

async function readTechnologies() {
  const src = await readFileSafe(TECHNOLOGIES_PATH);
  return Array.from(src.matchAll(/slug:\s*"([^"]+)"[\s\S]*?titre:\s*"([^"]+)"/g)).map(
    (m) => ({ slug: m[1], title: m[2] })
  );
}

function mergePosts(metaPosts, sourcePosts) {
  const merged = new Map();
  for (const p of sourcePosts) merged.set(p.slug, { ...p });
  for (const p of metaPosts) {
    merged.set(p.slug, {
      ...(merged.get(p.slug) || {}),
      ...p,
    });
  }
  return Array.from(merged.values()).filter((p) => p?.slug);
}

function buildRouteCatalog({ posts, competences, technologies }) {
  const routes = [];

  for (const path of STATIC_PATHS) {
    const override = STATIC_OVERRIDES[path];
    routes.push({
      ...defaultRouteMeta(path),
      ...(override || {}),
      path,
      type: "website",
    });
  }

  for (const post of posts) {
    routes.push({
      path: `/blog/${post.slug}`,
      title: post.title || `Article de blog | Clinique Dentaire DABIA`,
      description:
        post.description ||
        "Article du blog de la Clinique Dentaire DABIA à Dakar.",
      h1: post.title || "Article de blog",
      intro:
        post.description ||
        "Découvrez nos conseils et informations pratiques en santé bucco-dentaire.",
      type: "article",
    });
  }

  for (const item of competences) {
    routes.push({
      path: `/competences/${item.slug}`,
      title: `${item.title} à Dakar | Clinique Dentaire DABIA`,
      description: `${item.title} à Dakar : indications, bénéfices et prise en charge à la Clinique Dentaire DABIA.`,
      h1: item.title,
      intro: `Découvrez ${item.title.toLowerCase()} à la Clinique Dentaire DABIA à Dakar.`,
      type: "website",
    });
  }

  for (const item of technologies) {
    routes.push({
      path: `/infos/technologie/${item.slug}`,
      title: `${item.title} – Technologies dentaires à Dakar`,
      description: `${item.title} à la Clinique Dentaire DABIA : précision, sécurité et confort pour vos soins dentaires à Dakar.`,
      h1: item.title,
      intro: `Technologie utilisée à la Clinique Dentaire DABIA pour améliorer votre prise en charge.`,
      type: "article",
    });
  }

  const deduped = new Map();
  for (const route of routes) {
    deduped.set(route.path, route);
  }
  return Array.from(deduped.values());
}

async function main() {
  const indexPath = join(DIST, "index.html");
  const base = await readFile(indexPath, "utf8");

  const [metaPosts, sourcePosts, competences, technologies] = await Promise.all([
    readPostsMeta(),
    readPostsSource(),
    readCompetences(),
    readTechnologies(),
  ]);

  const posts = mergePosts(metaPosts, sourcePosts);
  const routes = buildRouteCatalog({ posts, competences, technologies });

  for (const route of routes) {
    const html = renderForRoute(base, route);
    const out =
      route.path === "/"
        ? join(DIST, "index.html")
        : join(DIST, route.path.replace(/^\//, ""), "index.html");
    await mkdir(dirname(out), { recursive: true });
    await writeFile(out, html, "utf8");
    console.log(`SEO shell generated: ${route.path}`);
  }

  console.log(`✅ SEO shells générés: ${routes.length} routes`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
