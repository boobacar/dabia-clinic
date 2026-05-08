import { readFile, writeFile, mkdir } from "node:fs/promises";
import { join, dirname } from "node:path";

const ROOT = process.cwd();
const DIST = join(ROOT, "dist");
const DOMAIN = "https://www.cliniquedentairedabia.com";
const POSTS_META_PATH = join(ROOT, "src", "data", "posts.meta.json");
const POSTS_SOURCE_PATH = join(ROOT, "src", "data", "posts.js");
const COMPETENCES_PATH = join(ROOT, "src", "data", "competences.js");
const TECHNOLOGIES_PATH = join(ROOT, "src", "data", "technologies.js");
const MANIFEST_PATH = join(DIST, ".vite", "manifest.json");

const PRIORITY_TAG_SLUGS = [
  "dentiste-dakar",
  "urgence-dentaire",
  "implant-dentaire",
  "orthodontie",
  "blanchiment-des-dents",
  "prix",
  "tarif-dentiste-dakar",
  "prevention",
  "douleur-dentaire",
  "detartrage",
  "gingivite",
  "mauvaise-haleine",
  "invisalign-dakar",
  "caries",
  "dentiste-pediatrique-dakar",
];

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
    title: "Dentiste Dakar : urgence, consultation et RDV rapide | Clinique DABIA",
    description:
      "Dentiste Dakar à Liberté 6 : consultation, urgence dentaire, implants, orthodontie et esthétique. Devis clair + rendez-vous rapide par appel, WhatsApp ou formulaire.",
    h1: "Dentiste Dakar – Clinique Dentaire DABIA",
    intro:
      "Consultations, urgences et soins complets à Dakar avec devis clair, plateau technique moderne et prise de rendez-vous rapide.",
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

const slugify = (str = "") =>
  str
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

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

function removeHomeHeroPreloads(html) {
  return html.replace(
    /\n\s*<link\s+rel=["']preload["']\s+as=["']image["']\s+href=["']\/hero1[^"']+["'][^>]*>/gi,
    "",
  );
}

function injectRouteImagePreload(html, cover) {
  if (!cover) return html;
  const preload = `    <link rel="preload" as="image" href="${esc(cover)}" media="(min-width: 1024px)" fetchpriority="high" />`;
  if (html.includes(preload)) return html;
  const heroPreloadComment = /(\n\s*<!-- Hero image preload[\s\S]*?-->\s*)/i;
  if (heroPreloadComment.test(html)) {
    return html.replace(heroPreloadComment, `$1${preload}\n`);
  }
  return html.replace("</head>", `${preload}\n</head>`);
}

function injectModulePreloads(html, files = []) {
  let out = html;
  for (const file of files) {
    if (!file || out.includes(`href="${file}"`)) continue;
    const preload = `    <link rel="modulepreload" crossorigin href="${esc(file)}" />`;
    const imagePreload = /(\n\s*<link\s+rel=["']preload["']\s+as=["']image["'][^>]*>\s*)/i;
    if (imagePreload.test(out)) {
      out = out.replace(imagePreload, `$1${preload}\n`);
    } else {
      out = out.replace("</head>", `${preload}\n</head>`);
    }
  }
  return out;
}

function injectServerH1(html, route) {
  const cover = route.cover
    ? `
      <style>@media (max-width:1023px){#root .seo-cover{display:none}}</style>
      <div class="seo-cover" style="margin:24px 0 0;border-radius:12px;overflow:hidden;aspect-ratio:16/9;background:#f3f4f6">
        <img src="${esc(route.cover)}" alt="${esc(route.h1)}" width="1200" height="675" loading="eager" decoding="async" fetchpriority="high" style="display:block;width:100%;height:100%;object-fit:cover" />
      </div>`
    : "";
  const shell = `
    <main style="max-width:880px;margin:40px auto;padding:0 16px;font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;line-height:1.5">
      <h1 style="font-size:clamp(1.8rem,4vw,2.6rem);margin:0 0 12px;color:#6b5d34">${esc(route.h1)}</h1>
      <p style="margin:0 0 18px;color:#374151">${esc(route.intro)}</p>
      <p style="margin:0;color:#111827">👉 <a href="/rendez-vous">Prendre rendez-vous</a> · <a href="tel:+221777039393">Appeler</a> · <a href="https://wa.me/221777039393">WhatsApp</a></p>
      ${cover}
    </main>`;

  return html.replace(/<div id="root"><\/div>/i, `<div id="root">${shell}</div>`);
}

function renderForRoute(baseHtml, route) {
  const url = absUrl(route.path);
  const title = route.title;
  const desc = esc(route.description);
  const ogType = route.type || "website";
  const image = route.cover ? `${DOMAIN}${route.cover}` : "/og-image.webp";

  let html = baseHtml;
  if (route.path !== "/") html = removeHomeHeroPreloads(html);
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
    /<meta[^>]*property=["']og:image["'][^>]*>/i,
    `<meta property="og:image" content="${esc(image)}" />`,
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
  html = upsertTag(
    html,
    /<meta[^>]*name=["']twitter:image["'][^>]*>/i,
    `<meta name="twitter:image" content="${esc(image)}" />`,
  );
  html = injectRouteImagePreload(html, route.cover);
  html = injectModulePreloads(html, route.modulePreloads);

  return injectServerH1(html, route);
}

async function readManifestEntries() {
  const raw = await readFileSafe(MANIFEST_PATH);
  if (!raw) return {};
  try {
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

function buildAssetManifest(entries) {
  const out = new Map();
  for (const [key, entry] of Object.entries(entries)) {
    if (!entry?.file) continue;
    const file = `/${entry.file}`;
    out.set(key.replace(/^\/+/, ""), file);
    if (entry.src) out.set(entry.src.replace(/^\/+/, ""), file);
  }
  return out;
}

function normalizePostImportPath(importPath) {
  if (!importPath) return "";
  if (importPath.startsWith("../")) return `src/${importPath.slice(3)}`;
  if (importPath.startsWith("./")) return `src/data/${importPath.slice(2)}`;
  return importPath.replace(/^\/+/, "");
}

function resolvePostAsset(importPath, manifest) {
  const sourcePath = normalizePostImportPath(importPath);
  return manifest.get(sourcePath) || "";
}

function extractPostCovers(postsSource, manifest) {
  const imports = new Map();
  for (const m of postsSource.matchAll(/import\s+([\w$]+)\s+from\s+["']([^"']+)["'];?/g)) {
    imports.set(m[1], m[2]);
  }

  const covers = new Map();
  for (const m of postsSource.matchAll(/slug:\s*"([^"]+)"[\s\S]*?cover:\s*([\w$]+),/g)) {
    const importPath = imports.get(m[2]);
    const cover = resolvePostAsset(importPath, manifest);
    if (cover) covers.set(m[1], cover);
  }
  return covers;
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

async function readPostsSource(manifest) {
  const src = await readFileSafe(POSTS_SOURCE_PATH);
  const covers = extractPostCovers(src, manifest);
  return Array.from(
    src.matchAll(
      /\{[\s\S]*?slug:\s*"([^"]+)",[\s\S]*?title:\s*"([^"]+)",[\s\S]*?description:\s*"([^"]+)",[\s\S]*?date:\s*"([0-9]{4}-[0-9]{2}-[0-9]{2})"/g
    )
  ).map((m) => ({
    slug: m[1],
    title: m[2],
    description: m[3],
    date: m[4],
    cover: covers.get(m[1]),
  }));
}

async function readTagSlugs() {
  const src = await readFileSafe(POSTS_SOURCE_PATH);
  const slugs = new Set(PRIORITY_TAG_SLUGS);

  for (const block of src.matchAll(/tags:\s*\[([\s\S]*?)\]/g)) {
    for (const match of block[1].matchAll(/"([^"]+)"|'([^']+)'/g)) {
      const slug = slugify(match[1] || match[2]);
      if (slug) slugs.add(slug);
    }
  }

  return Array.from(slugs).sort((a, b) => {
    const ai = PRIORITY_TAG_SLUGS.indexOf(a);
    const bi = PRIORITY_TAG_SLUGS.indexOf(b);
    if (ai !== -1 || bi !== -1) {
      if (ai === -1) return 1;
      if (bi === -1) return -1;
      return ai - bi;
    }
    return a.localeCompare(b);
  });
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

function buildRouteCatalog({ posts, competences, technologies, tagSlugs }) {
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
      cover: post.cover,
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

  for (const slug of tagSlugs) {
    const label = toTitleCase(slug.replaceAll("-", " "));
    routes.push({
      path: `/blog/tag/${slug}`,
      title: `${label} – Articles & conseils | Clinique Dentaire DABIA`,
      description: `Articles du blog de la Clinique Dentaire DABIA à Dakar sur le thème « ${label} ».`,
      h1: label,
      intro: `Retrouvez nos articles et conseils pratiques sur ${label.toLowerCase()} à Dakar.`,
      type: "website",
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

  const manifestEntries = await readManifestEntries();
  const manifest = buildAssetManifest(manifestEntries);
  const [metaPosts, sourcePosts, competences, technologies] = await Promise.all([
    readPostsMeta(),
    readPostsSource(manifest),
    readCompetences(),
    readTechnologies(),
  ]);
  const tagSlugs = await readTagSlugs();

  const posts = mergePosts(metaPosts, sourcePosts);
  const routes = buildRouteCatalog({
    posts,
    competences,
    technologies,
    tagSlugs,
  });

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
