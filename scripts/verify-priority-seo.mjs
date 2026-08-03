import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

const root = process.cwd();
const read = (path) => readFile(join(root, path), "utf8");

const [
  home,
  indexHtml,
  shells,
  posts,
  postsMeta,
  blogPost,
  blogPostShell,
  rendezVous,
  urgency,
  seoComponent,
  mainEntry,
  seoHeadUtils,
  prerender,
  vercel,
  sitemapGenerator,
] = await Promise.all([
  read("src/pages/Home.jsx"),
  read("index.html"),
  read("scripts/generate-seo-shells.mjs"),
  read("src/data/posts.js"),
  read("src/data/posts.meta.json"),
  read("src/pages/BlogPost.jsx"),
  read("src/pages/BlogPostShell.jsx"),
  read("src/pages/RendezVous.jsx"),
  read("src/pages/UrgenceDentaire.jsx"),
  read("src/components/Seo.jsx"),
  read("src/main.jsx"),
  read("src/utils/seoHead.js"),
  read("scripts/prerender-routes.mjs"),
  read("vercel.json"),
  read("scripts/generate-sitemap.mjs"),
]);

const homeTitle = "Dentiste à Dakar – RDV rapide, urgence et devis | Clinique DABIA";
const homeDescription =
  "Dentiste à Dakar, Liberté 6 : consultation, urgence, détartrage, implant, orthodontie et esthétique. Appelez ou prenez rendez-vous en ligne rapidement.";
for (const [label, source] of [
  ["Home.jsx", home],
  ["index.html", indexHtml],
  ["generate-seo-shells.mjs", shells],
]) {
  assert.ok(source.includes(homeTitle), `${label} doit contenir le title prioritaire de l’accueil`);
  assert.ok(
    source.includes(homeDescription),
    `${label} doit contenir la description prioritaire de l’accueil`,
  );
}

const cbctTitle = "CBCT dentaire : c'est quoi, prix et RDV scanner 3D à Dakar | DABIA";
assert.ok(postsMeta.includes(cbctTitle), "posts.meta.json doit utiliser le title CBCT orienté rendez-vous");
assert.ok(
  postsMeta.includes('"heading": "CBCT dentaire à Dakar : prix, indications et scanner 3D"'),
  "posts.meta.json doit séparer le H1 visible du title SEO",
);
assert.ok(
  blogPostShell.includes("const displayTitle = post.heading || post.title"),
  "BlogPostShell doit utiliser un H1 naturel distinct du title SEO",
);
assert.ok(
  shells.includes("h1: post.heading || post.title"),
  "Le shell SSG doit utiliser le H1 naturel quand il est défini",
);
assert.ok(
  posts.includes('title: "CBCT dentaire à Dakar : prix, indications et scanner 3D"'),
  "Le H1 CBCT visible doit rester naturel et sans suffixe de marque",
);
assert.ok(
  posts.includes(`seoTitle: "${cbctTitle}"`),
  "posts.js doit définir le title SEO CBCT séparément du H1",
);
assert.ok(
  blogPost.includes("title={post.seoTitle || post.title}"),
  "BlogPost doit utiliser le title SEO quand il est défini",
);
assert.ok(
  posts.includes("## Combien coûte un CBCT à Dakar ?"),
  "L'article CBCT doit expliquer le prix/devis et la prise de rendez-vous",
);

// FAQ statique + FAQPage JSON-LD dans les shells blog (couche AEO)
assert.ok(
  shells.includes("faq: post.faq || []"),
  "Le shell SSG doit embarquer la FAQ des articles blog",
);
assert.ok(
  shells.includes("const faqMatch = window.match("),
  "Le générateur de shells doit extraire la FAQ des articles",
);
assert.ok(
  posts.includes('q: "Est-ce douloureux de faire un CBCT dentaire ?"'),
  "L'article CBCT doit exposer sa FAQ structurée (FAQPage)",
);

assert.match(vercel, /"source": "\/blog\/tag\/sos-dentiste"[\s\S]*?"destination": "\/urgence-dentaire-dakar"/, "Le tag SOS dentiste doit rediriger vers la page urgence");
assert.ok(urgency.includes("SOS dentiste à Dakar"), "La page urgence doit cibler explicitement SOS dentiste à Dakar");
assert.ok(
  sitemapGenerator.includes("readRedirectedTagSlugs"),
  "Le générateur de sitemap doit exclure les tags redirigés",
);

for (const expected of [
  'sendEvent("blog_cta_click"',
  'cta_position: "top"',
  'cta_position: "mid"',
  'cta_position: "bottom"',
  "Demander un bilan orthodontique",
  "Obtenir un devis après consultation",
  "Demander une prise en charge urgente",
  "Demander un bilan prothétique",
  "Réserver un bilan et un nettoyage",
  "Demander un bilan implantaire",
  "Prendre rendez-vous pour un bilan 3D",
]) {
  assert.ok(blogPost.includes(expected), `BlogPost.jsx doit contenir : ${expected}`);
}

for (const value of [
  "Prothèse dentaire",
  "Détartrage",
  "Détartrage AirFlow",
  "CBCT dentaire",
]) {
  assert.ok(
    rendezVous.includes(`value: "${value}"`),
    `Le formulaire doit afficher le soin prérempli : ${value}`,
  );
}
assert.ok(
  blogPost.includes('const CLINIC_PHONE = ["+221", "77", "703", "93", "93"].join("")'),
  "Le CTA téléphone doit construire un numéro composable sans valeur masquée",
);
assert.ok(
  blogPost.includes("href={`tel:${CLINIC_PHONE}`}"),
  "Le CTA téléphone doit utiliser le numéro composable",
);

assert.ok(
  prerender.includes('import { dedupeSeoHead } from "./prerender-seo-head.mjs"'),
  "Le pré-rendu doit importer le nettoyage des balises SEO singleton",
);
assert.ok(
  prerender.includes("await dedupeSeoHead(page)"),
  "Le nettoyage SEO doit être exécuté avant la sérialisation HTML",
);

assert.ok(
  seoComponent.includes('import { cleanupPrerenderedSeoHead } from "../utils/seoHead"'),
  "Seo.jsx doit importer le nettoyage client du head pré-rendu",
);
assert.ok(
  seoComponent.includes("cleanupPrerenderedSeoHead();"),
  "Seo.jsx doit supprimer les doublons statiques après hydratation",
);
assert.ok(
  shells.includes('import { markSeoShellHead } from "./seo-shell-head.mjs"'),
  "Le générateur doit marquer les balises SEO de fallback avant écriture",
);
assert.ok(
  shells.includes("markSeoShellHead(injectServerH1(html, route))"),
  "Chaque shell SEO doit être marqué avant sa sauvegarde",
);
assert.ok(
  shells.includes('data-seo-shell-guard="true"') &&
    shells.includes('data-seo-app-loading","true"'),
  "Chaque shell SEO doit activer sa garde visuelle avant le rendu navigateur",
);
assert.ok(
  shells.includes("window.setTimeout") &&
    shells.includes('removeAttribute("data-seo-app-loading")'),
  "La garde doit se désactiver si le bundle React ne démarre pas",
);
assert.ok(
  shells.includes("<noscript>"),
  "Le shell SEO doit rester visible lorsque JavaScript est désactivé",
);
assert.ok(
  seoHeadUtils.includes("export function removeSeoShellBody()") &&
    seoHeadUtils.includes("root.replaceChildren();") &&
    seoHeadUtils.includes('root.removeAttribute("data-seo-shell-root")'),
  "Le bundle React doit retirer le shell du body lorsqu’il est prêt",
);
assert.ok(
  mainEntry.includes("removeSeoShellBody, removeSeoShellHead"),
  "L’entrée React doit importer le retrait pré-montage du head et du body",
);
assert.ok(
  mainEntry.indexOf("removeSeoShellHead();") < mainEntry.indexOf("ReactDOM.createRoot") &&
    mainEntry.indexOf("removeSeoShellBody();") < mainEntry.indexOf("ReactDOM.createRoot"),
  "Le shell complet doit être retiré juste avant que React ne prenne possession du DOM",
);

console.log("✅ Contrats SEO prioritaires validés");
