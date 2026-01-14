import { readdir, readFile, writeFile } from "node:fs/promises";
import { join, extname, basename } from "node:path";

// Dynamic import for sharp to avoid require issues if using ESM
const sharp = (await import("sharp")).default;

const HERO_DIR = join(process.cwd(), "src", "assets", "hero");

async function main() {
  console.log(`Scanning ${HERO_DIR} for .webp images...`);
  const files = (await readdir(HERO_DIR)).filter((f) => /\.webp$/i.test(f));

  if (!files.length) {
    console.log("No WebP hero images found.");
    return;
  }

  let count = 0;
  for (const f of files) {
    // Skip if it is already a mobile version
    if (f.endsWith("-mobile.webp")) continue;

    const srcPath = join(HERO_DIR, f);
    const mobileName = basename(f, ".webp") + "-mobile.webp";
    const outPath = join(HERO_DIR, mobileName);

    // Check if mobile version already exists (optional: skip or overwrite. I'll overwrite to be safe/update)
    // Actually, let's just create it.

    try {
      const buf = await readFile(srcPath);
      const image = sharp(buf);
      const meta = await image.metadata();

      // Only resize if the source is larger than 640
      if (meta.width <= 640) {
        console.log(`Skipping ${f} (width ${meta.width} <= 640)`);
        continue;
      }

      const out = await image
        .resize({ width: 640, withoutEnlargement: true })
        .webp({ quality: 80 })
        .toBuffer();

      await writeFile(outPath, out);
      console.log(`Generated ${mobileName} from ${f}`);
      count++;
    } catch (err) {
      console.error(`Failed to process ${f}:`, err);
    }
  }
  console.log(`Finished. generated ${count} mobile images.`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
