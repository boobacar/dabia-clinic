// Convert selected staff images in src/assets to .webp
import { readFile, writeFile } from 'node:fs/promises';
import { join, extname, basename } from 'node:path';
const sharp = (await import('sharp')).default;

const ROOT = join(process.cwd(), 'src', 'assets');
const TARGETS = ['admin.jpeg', 'assistanteDent.jpeg', 'assistante.jpeg'];

async function convertOne(file) {
  const inPath = join(ROOT, file);
  const outPath = join(ROOT, basename(file, extname(file)) + '.webp');
  const buf = await readFile(inPath);
  const img = sharp(buf).rotate();
  const meta = await img.metadata();
  const width = Math.min(meta.width || 1200, 1200);
  const out = await img.resize({ width, withoutEnlargement: true }).webp({ quality: 78 }).toBuffer();
  await writeFile(outPath, out);
  console.log('Converted', file, '->', outPath);
}

async function main() {
  for (const f of TARGETS) {
    await convertOne(f).catch(err => console.warn('Skip', f, err?.message));
  }
}

main().catch(e => { console.error(e); process.exit(1); });

