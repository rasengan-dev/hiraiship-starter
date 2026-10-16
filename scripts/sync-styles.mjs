// Copies scripts/shared/styles.css and favicon.svg into every starter
// (each one must stay standalone, so they're copies, not imports).
import { copyFileSync, existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const meta = JSON.parse(readFileSync(join(root, 'meta.json'), 'utf-8'));

for (const [key, entry] of Object.entries(meta)) {
  if (!entry.styles) continue;
  copyFileSync(join(root, 'scripts/shared/styles.css'), join(root, entry.path, entry.styles));
  if (existsSync(join(root, entry.path, 'public'))) {
    copyFileSync(join(root, 'scripts/shared/favicon.svg'), join(root, entry.path, 'public/favicon.svg'));
  }
  console.log(`synced ${key}`);
}
