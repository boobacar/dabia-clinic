import { readdir, unlink } from 'node:fs/promises';
import { join } from 'node:path';

const HERO_DIR = join(process.cwd(), 'src', 'assets', 'hero');

async function main() {
  const files = (await readdir(HERO_DIR)).filter(f => /\.jpe?g$/i.test(f));
  for (const f of files) {
    const p = join(HERO_DIR, f);
    await unlink(p).catch(() => {});
    console.log('Removed', f);
  }
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});

