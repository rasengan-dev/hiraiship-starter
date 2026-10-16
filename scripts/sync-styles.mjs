// Copies scripts/shared/styles.css and hiraiship.svg (the logo mark, also the favicon) into every starter
// (each one must stay standalone, so they're copies, not imports).
import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const meta = JSON.parse(readFileSync(join(root, 'meta.json'), 'utf-8'));

for (const [key, entry] of Object.entries(meta)) {
  if (!entry.styles) continue;
  copyFileSync(join(root, 'scripts/shared/styles.css'), join(root, entry.path, entry.styles));
  mkdirSync(join(root, entry.path, 'public'), { recursive: true });
  copyFileSync(join(root, 'scripts/shared/hiraiship.svg'), join(root, entry.path, 'public/hiraiship.svg'));
  console.log(`synced ${key}`);
}
