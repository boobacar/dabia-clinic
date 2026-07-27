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

const cbctTitle = "CBCT dentaire à Dakar : prix, indications et RDV scanner 3D | DABIA";
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
assert.ok(posts.includes("## Prix et prise de rendez-vous"), "L’article CBCT doit expliquer le prix/devis et la prise de rendez-vous");

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

console.log("✅ Contrats SEO prioritaires validés");
