// Convert src/assets/hero/*.jpeg to .webp with reasonable quality
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join, extname, basename } from 'node:path';

const sharp = (await import('sharp')).default;

const HERO_DIR = join(process.cwd(), 'src', 'assets', 'hero');

async function main() {
  const files = (await readdir(HERO_DIR)).filter(f => /\.jpe?g$/i.test(f));
  if (!files.length) {
    console.log('No JPEG hero images found.');
    return;
  }
  for (const f of files) {
    const srcPath = join(HERO_DIR, f);
    const outPath = join(HERO_DIR, basename(f, extname(f)) + '.webp');
    const buf = await readFile(srcPath);
    const image = sharp(buf).rotate();
    const meta = await image.metadata();
    const width = Math.min((meta.width || 1920), 1600); // cap width
    const out = await image
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 78 })
      .toBuffer();
    await writeFile(outPath, out);
    console.log('Converted', f, '->', outPath);
  }
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});

