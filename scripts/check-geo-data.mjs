// scripts/check-geo-data.mjs — contrôle qualité de l'usine à pages géographiques.
// Usage : node scripts/check-geo-data.mjs
import {
  getAllGeoPages,
  GEO_COUNTRIES,
  GEO_COMPETENCES,
  GEO_FILIERES,
} from "../src/data/geoData.js";

const pages = getAllGeoPages();
const byFamily = pages.reduce((acc, p) => {
  acc[p.family] = (acc[p.family] || 0) + 1;
  return acc;
}, {});

console.log(`Pays: ${GEO_COUNTRIES.length}`);
console.log(`Compétences: ${GEO_COMPETENCES.length} — Filières: ${GEO_FILIERES.length}`);
console.log(`Pages générées: ${pages.length}`, byFamily);

let errors = 0;
const fail = (msg) => {
  errors++;
  if (errors <= 40) console.log("✗", msg);
};

// 1) doublons de chemin
const seen = new Set();
for (const p of pages) {
  if (seen.has(p.path)) fail(`doublon de chemin: ${p.path}`);
  seen.add(p.path);
}

// 2) placeholders non remplis
const PH = /\{[a-zA-Z]+\}/;
for (const p of pages) {
  const blob = [p.title, p.description, p.h1, p.intro, p.quickAnswer, ...(p.faq || []).flatMap((f) => [f.q, f.a])].join(" \n ");
  if (PH.test(blob)) fail(`${p.path} → placeholder non rempli: ${blob.match(PH)[0]}`);
}

// 3) fautes de français classiques dans les pages générées
// (on cible les erreurs RÉELLES de flexion : « en Sénégal », « du Côte d'Ivoire »,
//  « de Italie », « des Congo », apostrophe manquante après élision…)
const GRAMMAR = [
  /\ben (Sénégal|Mali|Niger|Tchad|Maroc|Cameroun|Gabon|Bénin|Togo|Congo|Cap-Vert|Canada|Portugal|Luxembourg|Nigeria|Madagascar|Burundi|Rwanda|Ghana|Angola)\b/g,
  /\bdu (Côte|Algérie|Italie|Espagne|Allemagne|Guinée|France|Belgique|Suisse|Tunisie|Mauritanie|Gambie|États|Pays)\b/g,
  /\bau (Côte|Guinée|France|Belgique|Suisse|Italie|Espagne|Allemagne|Tunisie|Algérie|Mauritanie|Gambie)\b/g,
  /\bde (Italie|Algérie|Espagne|Allemagne|États|Pays|Irlande|Angola|Égypte)\b/g,
  /\bdes (Congo|Sénégal|Mali|Maroc|Tunisie|Algérie|Italie|Espagne|Allemagne)\b/g,
  /\bde l' [A-ZÀ-Ý]/g,
  /\bd' [A-ZÀ-Ý]/g,
];
for (const p of pages) {
  const fields = [p.title, p.description, p.h1, p.intro, p.quickAnswer, ...(p.faq || []).flatMap((f) => [f.q, f.a])];
  for (const f of fields) {
    for (const re of GRAMMAR) {
      const g = f.match(re);
      if (g) fail(`grammaire « ${g.join(" / ")} » dans ${p.path} → « ${f.slice(0, 110)} »`);
    }
    if (/\s{2,}/.test(f)) fail(`espace parasite dans ${p.path} → « ${f.slice(0, 90)} »`);
    if (/[a-zà-ÿ] '|' [A-ZÀ-Ý]/.test(f)) fail(`apostrophe espacée dans ${p.path} → « ${f.slice(0, 90)} »`);
  }
}

// 4) longueurs SERP
let longTitles = 0;
let longDescs = 0;
for (const p of pages) {
  if (p.title.length > 88) {
    longTitles++;
    if (longTitles <= 5) console.log(`⚠ title ${p.title.length}: ${p.title} (${p.path})`);
  }
  if (p.description.length > 165) {
    longDescs++;
    if (longDescs <= 5) console.log(`⚠ desc ${p.description.length}: ${p.path}`);
  }
}
console.log(` Titles > 88 car.: ${longTitles} | Descriptions > 170 car.: ${longDescs}`);

// 5) champs obligatoires
for (const p of pages) {
  if (!p.title || !p.description || !p.h1 || !p.intro || !p.quickAnswer) fail(`${p.path} → champs SEO incomplets`);
  if (!p.pays?.flag) fail(`${p.path} → drapeau manquant`);
  if (!(p.faq || []).length >= 3) fail(`${p.path} → FAQ trop courte`);
}

console.log(errors === 0 ? "✅ check-geo-data: OK" : `❌ check-geo-data: ${errors} problème(s)`);
process.exit(errors === 0 ? 0 : 1);
