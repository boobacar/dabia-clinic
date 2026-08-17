import { readFile, writeFile, mkdir } from "node:fs/promises";
import { join, dirname } from "node:path";
import { markSeoShellHead } from "./seo-shell-head.mjs";
import { competenceContent } from "../src/data/competenceContent.js";

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
  "/clinique-dentaire-dakar",
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
  "/cabinet-dentaire-vdn",
  "/en/dental-clinic-dakar",
  "/galerie",
];

const STATIC_OVERRIDES = {
  "/": {
    title: "Dentiste à Dakar – RDV rapide, urgence et devis | Clinique DABIA",
    description:
      "Dentiste à Dakar, Liberté 6 : consultation, urgence, détartrage, implant, orthodontie et esthétique. Appelez ou prenez rendez-vous en ligne rapidement.",
    h1: "Clinique Dentaire DABIA à Dakar",
    intro:
      "Votre dentiste à Dakar — soins modernes, équipe expérimentée et accompagnement personnalisé.",
  },
  "/cabinet-dentaire-vdn": {
    title: "Clinique dentaire VDN Dakar – RDV rapide & urgences | DABIA",
    description:
      "Clinique dentaire à deux pas de la VDN (Voie de Dégagement Nord), Sicap Foire Liberté 6 : urgences, détartrage, implants, orthodontie, esthétique. Prise de rendez-vous rapide.",
    h1: "Clinique dentaire proche de la VDN (Dakar)",
    intro:
      "La Clinique Dentaire DABIA accueille les patient·es de la VDN, Mermoz, Yoff et Sicap Foire pour tous les soins dentaires. Située à deux pas de la Voie de Dégagement Nord, elle reçoit les urgences et propose détartrage, implants, orthodontie et esthétique avec un devis clair.",
    faq: [
      {
        q: "Où se trouve la clinique dentaire près de la VDN à Dakar ?",
        a: "La Clinique Dentaire DABIA est située à Sicap Foire, 2 voies Liberté 6 (à 150m du Uno), à deux pas de la VDN, facilement accessible depuis Mermoz, Yoff et les Almadies.",
      },
      {
        q: "Quels soins sont proposés près de la VDN ?",
        a: "Urgences dentaires, détartrage, soins des caries, implants, orthodontie, facettes et blanchiment, avec devis détaillé et prise de rendez-vous rapide.",
      },
      {
        q: "Comment prendre rendez-vous à la clinique près de la VDN ?",
        a: "Par téléphone, WhatsApp ou via le formulaire en ligne : confirmation rapide par l'équipe de la Clinique DABIA.",
      },
    ],
  },
  "/en/dental-clinic-dakar": {
    title: "Dentist Near Me in Dakar — Accepting New Patients | DABIA",
    description:
      "English-speaking dentist near you in Dakar, Senegal. New patients welcome — implants, emergency care, teeth whitening. Clear quotes, fast appointments at DABIA Clinic, Liberté 6.",
    h1: "Dental clinic in Dakar for complete and modern care",
    intro:
      "Looking for an English-speaking dentist near you in Dakar? DABIA Clinic (Liberté 6, Sicap Foire) welcomes new patients for consultations, emergencies, implants, orthodontics and cosmetic dentistry — with clear quotes and fast appointments by phone or WhatsApp.",
    faq: [
      {
        q: "Is there an English-speaking dentist near me in Dakar?",
        a: "Yes. DABIA Clinic in Dakar (Sicap Foire, Liberté 6) provides English-speaking dental care and welcomes new patients for consultations, emergencies and treatments.",
      },
      {
        q: "How do I book an appointment at DABIA Clinic?",
        a: "Book online in about a minute, call directly, or send a WhatsApp message. The team confirms your appointment quickly.",
      },
      {
        q: "Does DABIA Clinic accept new patients?",
        a: "Yes, DABIA Clinic welcomes new patients for all treatments: check-ups, cleanings, implants, orthodontics and cosmetic dentistry.",
      },
    ],
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
    title: "Prendre RDV dentiste à Dakar — Consultation en ligne rapide | DABIA",
    description:
      "Prenez rendez-vous chez le dentiste à Dakar en 1 minute. Consultation, urgence, détartrage, implant ou orthodontie. Formulaire en ligne, appel ou WhatsApp.",
    h1: "Prendre RDV chez le dentiste à Dakar — Consultation & Urgence",
    intro:
      "Formulaire rapide pour réserver votre consultation, urgence ou soin à la Clinique DABIA. Confirmation rapide par l'équipe.",
  },
  "/dentiste-dakar": {
    title: "Dentiste Dakar : urgence, consultation et RDV rapide | Clinique DABIA",
    description:
      "Dentiste Dakar à Liberté 6 : consultation, urgence dentaire, implants, orthodontie et esthétique. Devis clair + rendez-vous rapide par appel, WhatsApp ou formulaire.",
    h1: "Dentiste Dakar – Clinique Dentaire DABIA",
    intro:
      "À la recherche d'un dentiste près de chez vous à Dakar ? La Clinique DABIA (Liberté 6, Sicap Foire) est facilement accessible depuis la VDN, Mermoz, Yoff et les Almadies. Consultations, urgences et soins complets avec devis clair et prise de rendez-vous rapide.",
  },
  "/cabinet-dentaire-dakar": {
    title: "Cabinet dentaire à Dakar : devis clair & RDV rapide | DABIA",
    description:
      "Cabinet dentaire à Dakar : prévention, esthétique, implants, orthodontie et urgences. Devis transparent + prise de rendez-vous rapide.",
    h1: "Cabinet dentaire à Dakar – Clinique DABIA",
    intro:
      "Un cabinet dentaire moderne à Dakar pour vos soins, urgences et plans de traitement personnalisés.",
  },
  "/clinique-dentaire-dakar": {
    title: "Clinique dentaire Dakar Liberté 6 : urgence, implants, devis | DABIA",
    description:
      "Clinique dentaire à Dakar Sicap Foire Liberté 6 : urgence dentaire 24h, implants, orthodontie, facettes, blanchiment. Consultation, devis clair, RDV rapide.",
    h1: "Clinique dentaire à Dakar pour soins, urgences et devis clairs",
    intro:
      "Diagnostic, explication des options, devis détaillé et suivi pour vos soins dentaires à Dakar.",
  },
  "/urgence-dentaire-dakar": {
    title: "SOS dentiste à Dakar : urgence, douleur, abcès | Clinique DABIA",
    description:
      "SOS dentiste à Dakar : douleur, abcès, gonflement ou dent cassée. Appelez la Clinique DABIA, contactez-nous sur WhatsApp ou demandez un RDV urgent.",
    h1: "SOS dentiste à Dakar – urgence dentaire rapide",
    intro:
      "Rage de dent, abcès, gonflement ou dent cassée : contactez la clinique pour une orientation immédiate.",
  },
  "/infos/assurances": {
    title: "Assurances & IPM à Dakar : prise en charge des soins dentaires | DABIA",
    description:
      "IPM, mutuelles et assurances santé au Sénégal : comment sont pris en charge vos soins dentaires à la Clinique DABIA (Dakar). Dossier, remboursement et devis.",
    h1: "Assurances, IPM et mutuelles : prise en charge à la Clinique DABIA",
    intro:
      "Vous avez une IPM (Institution de Prévoyance Maladie), une mutuelle ou une assurance santé ? La Clinique Dentaire DABIA à Dakar vous aide à préparer votre dossier de prise en charge et vous remet un devis détaillé avant tout soin.",
    faq: [
      {
        q: "L'IPM Senelec ou une IPM prend-elle en charge les soins dentaires ?",
        a: "La plupart des IPM et mutuelles au Sénégal prennent en charge une partie des soins dentaires. La Clinique DABIA vous remet un devis et le dossier nécessaire à votre demande de prise en charge.",
      },
      {
        q: "Comment préparer mon dossier d'assurance pour des soins dentaires ?",
        a: "Présentez votre carte d'assuré et votre pièce d'identité. La clinique établit un devis détaillé et les documents requis pour votre IPM ou mutuelle avant le début des soins.",
      },
      {
        q: "Les soins esthétiques (blanchiment, facettes) sont-ils remboursés ?",
        a: "La prise en charge dépend du contrat de votre IPM ou mutuelle. Le devis vous indique clairement les postes couverts et ceux qui restent à votre charge.",
      },
    ],
  },
  "/apropos": {
    title: "À propos – Clinique Dentaire DABIA (Dakar)",
    description:
      "Découvrez l’histoire, les valeurs, l’équipe et les engagements qualité de la Clinique Dentaire DABIA à Dakar (Liberté 6).",
    h1: "À propos de la Clinique Dentaire DABIA",
    intro:
      "Située à Sicap Foire (Liberté 6), la Clinique Dentaire DABIA accompagne les patients de Dakar avec des soins précis, des explications claires et un suivi humain : soins du quotidien, urgences, esthétique du sourire, implants, réhabilitations et orthodontie.",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        name: "À propos – Clinique Dentaire DABIA (Dakar)",
        description:
          "Découvrez l’histoire, les valeurs, l’équipe et les engagements qualité de la Clinique Dentaire DABIA à Dakar (Liberté 6).",
        url: "https://www.cliniquedentairedabia.com/apropos",
        mainEntity: {
          "@type": "Dentist",
          name: "Clinique Dentaire DABIA",
          url: "https://www.cliniquedentairedabia.com/",
        },
      },
    ],
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
    /\n\s*<link\s+rel=["']preload["']\s+as=["']image["']\s+href=["']\/hero4[^"']+["'][^>]*>/gi,
    "",
  );
}

function injectRouteImagePreload(html, cover) {
  if (!cover) return html;
  const preload = `    <link rel="preload" as="image" href="${esc(cover)}" fetchpriority="high" />`;
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
  const guard = `    <script data-seo-shell-guard="true">(function(){var html=document.documentElement;html.setAttribute("data-seo-app-loading","true");window.setTimeout(function(){html.removeAttribute("data-seo-app-loading");},8000);}());</script>\n    <style>html[data-seo-app-loading="true"] #root[data-seo-shell-root="true"]{visibility:visible}</style>\n    <noscript><style>#root[data-seo-shell-root="true"]{visibility:visible}</style></noscript>`;
  const guardedHtml = html.replace("</head>", `${guard}\n</head>`);

  // ── Contenu statique riche pour les crawlers LLM (GPTBot, ClaudeBot…) ──
  // Ce contenu est visible dans le HTML brut AVANT le rendu JS ; il est
  // remplacé par l'application React au montage (removeSeoShellBody).
  const sections = [];
  if (route.pointsForts?.length) {
    sections.push(`<h2 style="font-size:1.35rem;margin:26px 0 10px;color:#6b5d34">Points clés du traitement</h2><ul style="margin:0 0 18px;padding-left:22px">${route.pointsForts
      .map((p) => `<li style="margin:6px 0">${esc(p)}</li>`)
      .join("")}</ul>`);
  }
  if (route.deroule?.length) {
    sections.push(`<h2 style="font-size:1.35rem;margin:26px 0 10px;color:#6b5d34">Comment se déroule le traitement ?</h2><ol style="margin:0 0 18px;padding-left:22px">${route.deroule
      .map((d) => `<li style="margin:6px 0">${esc(d)}</li>`)
      .join("")}</ol>`);
  }
  if (route.faq?.length) {
    sections.push(`<h2 style="font-size:1.35rem;margin:26px 0 10px;color:#6b5d34">Questions fréquentes</h2>${route.faq
      .map(
        (f) =>
          `<div style="margin:0 0 14px"><h3 style="font-size:1.05rem;margin:0 0 4px;color:#111827">${esc(f.q)}</h3><p style="margin:0;color:#374151">${esc(f.a)}</p></div>`
      )
      .join("")}`);
  }

  // FAQPage JSON-LD statique (marqué data-seo-shell → retiré au montage React,
  // qui réinjecte le même bloc via le composant Seo)
  let faqJsonLd = "";
  if (route.faq?.length) {
    const faq = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: route.faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    };
    faqJsonLd = `\n    <script type="application/ld+json" data-seo-shell="true">${JSON.stringify(faq)}</script>`;
  }

  // JSON-LD supplémentaires statiques (ex. AboutPage/Person pour l'entity anchor)
  let extraJsonLd = "";
  if (route.jsonLd?.length) {
    extraJsonLd = route.jsonLd
      .map(
        (b) =>
          `\n    <script type="application/ld+json" data-seo-shell="true">${JSON.stringify(b)}</script>`
      )
      .join("");
  }

  // Liens internes statiques vers les compétences (relie les articles blog
  // à fort trafic vers les pages compétences sous-exploitées)
  let competenceLinksSection = "";
  if (route.competenceLinks?.length) {
    competenceLinksSection = `<h2 style="font-size:1.35rem;margin:26px 0 10px;color:#6b5d34">Voir aussi</h2><p style="margin:0 0 18px;color:#374151">${route.competenceLinks
      .map(
        (c) =>
          `<a style="color:#bb2988;text-decoration:underline" href="${esc(c.to)}">${esc(c.label)}</a>`
      )
      .join(" · ")}</p>`;
  }

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
      ${route.bodyHtml || sections.join("\n")}
      ${competenceLinksSection}
      ${cover}
    </main>`;

  const withFaqHead = guardedHtml.replace(
    "</head>",
    `${faqJsonLd}${extraJsonLd}\n</head>`,
  );
  return withFaqHead.replace(
    /<div id="root"><\/div>/i,
    `<div id="root" data-seo-shell-root="true">${shell}</div>`,
  );
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

  return markSeoShellHead(injectServerH1(html, route));
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
  const matches = Array.from(
    src.matchAll(
      /\{[\s\S]*?slug:\s*"([^"]+)",[\s\S]*?title:\s*"([^"]+)",[\s\S]*?description:\s*"([^"]+)",[\s\S]*?date:\s*"([0-9]{4}-[0-9]{2}-[0-9]{2})"/g
    )
  );
  const posts = [];
  for (const m of matches) {
    const block = m[0];
    const slug = m[1];
    // Le regex principal s'arrête à `date:` — utilise une fenêtre élargie
    // autour du slug pour capturer tags + faq (jusqu'à 60 KB après)
    const slugIdx = src.indexOf(`slug: "${slug}"`);
    const window = slugIdx !== -1 ? src.slice(slugIdx, slugIdx + 60000) : block;
    const tagsMatch = window.match(/tags:\s*\[([\s\S]*?)\]/);
    const tags = tagsMatch
      ? Array.from(tagsMatch[1].matchAll(/"([^"]+)"|'([^']+)'/g)).map(
          (t) => t[1] || t[2]
        )
      : [];
    // Le contenu est désormais chargé depuis src/data/content/<slug>.json
    // (posts.js ne contient plus le markdown, pour alléger le bundle client).
    let content = "";
    try {
      const cf = await readFileSafe(
        join(ROOT, "src", "data", "content", `${slug}.json`)
      );
      if (cf) content = JSON.parse(cf).content || "";
    } catch {
      content = "";
    }
    // FAQ de l'article (rendue en statique + FAQPage JSON-LD pour les crawlers LLM)
    const faqMatch = window.match(
      /faq:\s*\[([\s\S]*?)\]\s*,?\n\s*(?:author|cover|pinned|readingMinutes|content|date|category|tags|\})/
    );
    let faq = [];
    if (faqMatch) {
      const qs = Array.from(
        faqMatch[1].matchAll(/q:\s*"((?:[^"\\]|\\.)*)"/g)
      ).map((mm) => mm[1]);
      const as = Array.from(
        faqMatch[1].matchAll(/a:\s*"((?:[^"\\]|\\.)*)"/g)
      ).map((mm) => mm[1]);
      faq = qs
        .map((q, i) => ({ q, a: as[i] || "" }))
        .filter((f) => f.q && f.a)
        .slice(0, 6);
    }
    posts.push({
      slug,
      title: m[2],
      description: m[3],
      date: m[4],
      cover: covers.get(slug),
      tags,
      content,
      faq,
    });
  }
  return posts;
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

// Mapping tags → pages compétences (liens internes statiques dans les shells SSG)
const COMPETENCE_LINK_MAP = [
  {
    keys: ["implant", "implantologie", "bridge", "prothèse", "prothese", "all-on-4", "dentier"],
    to: "/competences/implantologie",
    label: "Implantologie",
  },
  {
    keys: ["orthodontie", "aligneur", "bagues", "invisalign", "appareil dentaire", "bracket"],
    to: "/competences/orthodontie",
    label: "Orthodontie",
  },
  {
    keys: ["facette", "facettes", "hollywood smile", "sourire"],
    to: "/competences/facettes-dentaires",
    label: "Facettes dentaires",
  },
  {
    keys: ["blanchiment", "blanchir", "eclat", "taches"],
    to: "/competences/blanchiment-dentaire",
    label: "Blanchiment dentaire",
  },
  {
    keys: ["detartrage", "parodont", "gingivite", "gencive", "saignement", "tartre", "plaque dentaire", "surfacage"],
    to: "/competences/parodontologie",
    label: "Parodontologie",
  },
  {
    keys: ["devitalisation", "dévitalisation", "canalaire", "canal", "endodontie", "nerf dentaire", "pulpe"],
    to: "/competences/endodontie",
    label: "Endodontie",
  },
  {
    keys: ["enfant", "pédodontie", "pedodontie", "pédiatrique", "biberon", "scellant", "première visite"],
    to: "/competences/pedodontie",
    label: "Pédodontie (soins enfants)",
  },
  {
    keys: ["greffe", "osseuse", "os", "sinus"],
    to: "/competences/greffe-osseuse",
    label: "Greffe osseuse",
  },
  {
    keys: ["esthetique", "esthétique", "sourire", "facette", "blanchiment", "éclat"],
    to: "/competences/esthétique-dentaire",
    label: "Esthétique dentaire",
  },
  {
    keys: ["urgence", "douleur", "rage de dent", "abcès", "abces", "dent cassée", "gonflement", "traumatisme", "nuit", "weekend", "24"],
    to: "/urgence-dentaire-dakar",
    label: "Urgence dentaire à Dakar",
  },
];

function competenceLinksForPost(post) {
  if (!post?.tags?.length) return [];
  // Normalise les accents : « détartrage » == « detartrage » pour le matching
  const norm = (s) =>
    String(s || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  const out = [];
  const seen = new Set();
  for (const m of COMPETENCE_LINK_MAP) {
    if (
      m.keys.some((k) =>
        post.tags.some((t) => norm(t).includes(norm(k)))
      )
    ) {
      if (!seen.has(m.to)) {
        seen.add(m.to);
        out.push(m);
      }
    }
  }
  return out.slice(0, 3);
}

// Convertit le début d'un article markdown en HTML statique simple pour les
// crawlers LLM : Quick Answer (premier paragraphe) + H2/H3 + listes + FAQ.
// Limite volontairement à ~1200 mots pour garder des shells raisonnables.
function markdownToStaticHtml(markdown, maxChars = 7000) {
  if (!markdown) return "";
  let out = "";
  let remaining = markdown;
  for (const line of remaining.split("\n")) {
    if (out.length >= maxChars) break;
    const t = line.trim();
    if (!t) continue;
    if (t.startsWith("### ")) {
      out += `<h3 style="font-size:1.05rem;margin:16px 0 6px;color:#111827">${esc(t.slice(4))}</h3>`;
    } else if (t.startsWith("## ")) {
      out += `<h2 style="font-size:1.35rem;margin:22px 0 8px;color:#6b5d34">${esc(t.slice(3))}</h2>`;
    } else if (t.startsWith("# ")) {
      out += `<h2 style="font-size:1.35rem;margin:22px 0 8px;color:#6b5d34">${esc(t.slice(2))}</h2>`;
    } else if (t.startsWith("- ") || t.startsWith("* ")) {
      out += `<li style="margin:4px 0">${esc(t.slice(2))}</li>`;
    } else if (/^\d+\.\s/.test(t)) {
      out += `<li style="margin:4px 0">${esc(t.replace(/^\d+\.\s/, ""))}</li>`;
    } else if (t.startsWith("> ")) {
      out += `<p style="margin:12px 0;color:#6b5d34;font-style:italic">${esc(t.slice(2))}</p>`;
    } else if (t.startsWith("**") && t.endsWith("**")) {
      out += `<p style="margin:0 0 14px;color:#111827"><strong>${esc(t.slice(2, -2))}</strong></p>`;
    } else {
      out += `<p style="margin:0 0 14px;color:#374151">${esc(t)}</p>`;
    }
  }
  return out;
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
    const competenceLinks = competenceLinksForPost(post);
    const bodyHtml = markdownToStaticHtml(post.content);
    routes.push({
      path: `/blog/${post.slug}`,
      title: post.title || `Article de blog | Clinique Dentaire DABIA`,
      description:
        post.description ||
        "Article du blog de la Clinique Dentaire DABIA à Dakar.",
      h1: post.heading || post.title || "Article de blog",
      intro:
        post.description ||
        "Découvrez nos conseils et informations pratiques en santé bucco-dentaire.",
      type: "article",
      cover: post.cover,
      // Contenu statique pour les crawlers LLM (Quick Answer + premières sections)
      bodyHtml,
      // FAQ statique + FAQPage JSON-LD (mêmes questions que le rendu client)
      faq: post.faq || [],
      // Liens internes statiques vers les pages compétences (le sub : links as real HTML)
      competenceLinks,
    });
  }

  for (const item of competences) {
    const content = competenceContent[item.slug] || {};
    routes.push({
      path: `/competences/${item.slug}`,
      title: `${item.title} à Dakar | Clinique Dentaire DABIA`,
      description: `${item.title} à Dakar : indications, bénéfices et prise en charge à la Clinique Dentaire DABIA.`,
      h1: item.title,
      intro:
        content.quickAnswer ||
        `Découvrez ${item.title.toLowerCase()} à la Clinique Dentaire DABIA à Dakar.`,
      // Contenu statique supplémentaire (lu par les crawlers LLM avant le rendu JS)
      pointsForts: content.pointsForts || [],
      deroule: content.deroule || [],
      faq: content.faq || [],
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
