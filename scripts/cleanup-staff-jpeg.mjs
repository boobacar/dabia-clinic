import { unlink } from 'node:fs/promises';
import { join } from 'node:path';
const ROOT = join(process.cwd(), 'src', 'assets');
const TARGETS = ['admin.jpeg', 'assistanteDent.jpeg', 'assistante.jpeg'];

async function main() {
  for (const f of TARGETS) {
    await unlink(join(ROOT, f)).catch(() => {});
    console.log('Removed', f);
  }
}

main().catch(e => { console.error(e); process.exit(1); });

