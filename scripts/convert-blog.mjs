// Convert src/assets/blog/*.jpg|*.jpeg to .webp
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join, extname, basename } from 'node:path';
const sharp = (await import('sharp')).default;

const BLOG_DIR = join(process.cwd(), 'src', 'assets', 'blog');

async function main() {
  const files = (await readdir(BLOG_DIR)).filter(f => /\.(jpe?g)$/i.test(f));
  if (!files.length) {
    console.log('No JPEG blog images found.');
    return;
  }
  for (const f of files) {
    const inPath = join(BLOG_DIR, f);
    const outPath = join(BLOG_DIR, basename(f, extname(f)) + '.webp');
    const buf = await readFile(inPath);
    const img = sharp(buf).rotate();
    const meta = await img.metadata();
    const width = Math.min(meta.width || 1600, 1600);
    const out = await img.resize({ width, withoutEnlargement: true }).webp({ quality: 78 }).toBuffer();
    await writeFile(outPath, out);
    console.log('Converted', f, '->', outPath);
  }
}

main().catch(e => { console.error(e); process.exit(1); });

