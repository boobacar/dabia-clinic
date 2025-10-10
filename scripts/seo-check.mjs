// scripts/seo-check.mjs – petits contrôles qualité SEO
import { readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join } from "node:path";

const ROOT = process.cwd();

async function checkImagesAlt(files) {
  const issues = [];
  for (const f of files) {
    const path = join(ROOT, f);
    if (!existsSync(path)) continue;
    const src = await readFile(path, "utf8");
    const re = /<img\b(?![^>]*\balt=)[^>]*>/gi;
    let m;
    while ((m = re.exec(src))) {
      issues.push({ file: f, index: m.index, snippet: m[0].slice(0, 120) + "…" });
    }
  }
  return issues;
}

async function checkSeoUsage(files) {
  const misses = [];
  for (const f of files) {
    const path = join(ROOT, f);
    if (!existsSync(path)) continue;
    const src = await readFile(path, "utf8");
    if (src.includes("<Seo")) continue;
    // simple heuristic: page components should include Seo
    misses.push(f);
  }
  return misses;
}

async function main() {
  const pageFiles = [
    "src/pages/Home.jsx",
    "src/pages/Blog.jsx",
    "src/pages/BlogPost.jsx",
    "src/pages/RendezVous.jsx",
    "src/pages/Competences.jsx",
    "src/pages/CompetenceDetail.jsx",
    "src/pages/Assurances.jsx",
    "src/pages/PostVisite.jsx",
    "src/pages/ZoneEnfants.jsx",
    "src/pages/APropos.jsx",
    "src/pages/CabinetDentaireDakar.jsx",
    "src/pages/DentisteDakar.jsx",
    "src/pages/UrgenceDentaire.jsx",
  ];

  const componentFiles = [
    "src/components/CompetencesGrid.jsx",
    "src/components/StaffCard.jsx",
    "src/components/BlogTeasers.jsx",
  ];

  const altIssues = await checkImagesAlt([...pageFiles, ...componentFiles]);
  const seoMiss = await checkSeoUsage(pageFiles);

  if (altIssues.length) {
    console.log("\n❗ Images sans alt:");
    for (const i of altIssues) {
      console.log(`- ${i.file} @${i.index}: ${i.snippet}`);
    }
  } else {
    console.log("✅ Tous les <img> trouvés ont un alt (dans les fichiers scannés)");
  }

  if (seoMiss.length) {
    console.log("\n❗ Pages sans <Seo> (à vérifier):");
    seoMiss.forEach((f) => console.log("-", f));
  } else {
    console.log("✅ Toutes les pages scannées référencent <Seo>");
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

