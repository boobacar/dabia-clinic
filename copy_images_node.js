const fs = require("fs");
const path = require("path");

const files = [
  [
    "blanchiment_efficace_senegal_1768864778430.png",
    "blanchiment_efficace_senegal.png",
  ],
  [
    "choisir_bon_dentiste_dakar_1768864764726.png",
    "choisir_bon_dentiste_dakar.png",
  ],
  ["detartrage_preventif_1768864866817.png", "detartrage_preventif.png"],
  ["gingivite_traitement_1768864826378.png", "gingivite_traitement.png"],
  [
    "implant_retrouver_sourire_1768864791906.png",
    "implant_retrouver_sourire.png",
  ],
  [
    "orthodontie_adulte_choix_1768864839099.png",
    "orthodontie_adulte_choix.png",
  ],
  ["remede_rage_dent_1768864814135.png", "remede_rage_dent.png"],
  [
    "sante_dentaire_enfants_senegal_1768864853312.png",
    "sante_dentaire_enfants_senegal.png",
  ],
];

const srcDir =
  "/Users/fallcon/.gemini/antigravity/brain/ff47ea3a-d0cc-4244-b5f0-1ff15efa9f7d";
const destDir = "/Users/fallcon/Documents/DEV/dabia-clinic/src/assets/blog";

console.log("Starting copy operation...");

if (!fs.existsSync(destDir)) {
  console.error(`Destination directory does not exist: ${destDir}`);
  process.exit(1);
}

files.forEach(([srcName, destName]) => {
  const srcPath = path.join(srcDir, srcName);
  const destPath = path.join(destDir, destName);
  try {
    if (!fs.existsSync(srcPath)) {
      console.error(`Source file not found: ${srcPath}`);
      return;
    }
    fs.copyFileSync(srcPath, destPath);
    console.log(`SUCCESS: Copied ${srcName} -> ${destName}`);
  } catch (err) {
    console.error(`FAILURE: Error copying ${srcName}: ${err.message}`);
  }
});
