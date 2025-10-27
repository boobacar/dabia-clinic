import { readdir, unlink } from 'node:fs/promises';
import { join } from 'node:path';
const BLOG_DIR = join(process.cwd(), 'src', 'assets', 'blog');

async function main() {
  const files = (await readdir(BLOG_DIR)).filter(f => /\.(jpe?g)$/i.test(f));
  for (const f of files) {
    await unlink(join(BLOG_DIR, f)).catch(() => {});
    console.log('Removed', f);
  }
}

main().catch(e => { console.error(e); process.exit(1); });

