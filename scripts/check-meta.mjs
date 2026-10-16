// Checks that every meta.json entry points at a starter whose
// package.json name matches its key, and that no starter is missing
// from meta.json. Run with `pnpm check`.
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const meta = JSON.parse(readFileSync(join(root, 'meta.json'), 'utf-8'));
const errors = [];

for (const [key, entry] of Object.entries(meta)) {
  const pkgPath = join(root, entry.path, 'package.json');
  if (!existsSync(pkgPath)) {
    errors.push(`${key}: ${entry.path}/package.json not found`);
    continue;
  }
  const { name } = JSON.parse(readFileSync(pkgPath, 'utf-8'));
  if (name !== key) errors.push(`${key}: package.json name is "${name}"`);
  if (entry.styles && !existsSync(join(root, entry.path, entry.styles))) {
    errors.push(`${key}: styles file ${entry.styles} not found`);
  }
}

const listed = new Set(Object.values(meta).map((entry) => entry.path));
for (const group of readdirSync(root)) {
  if (group.startsWith('.') || ['node_modules', 'scripts'].includes(group)) continue;
  if (!statSync(join(root, group)).isDirectory()) continue;
  for (const variant of readdirSync(join(root, group))) {
    const path = `${group}/${variant}`;
    if (existsSync(join(root, path, 'package.json')) && !listed.has(path)) {
      errors.push(`${path}: not listed in meta.json`);
    }
  }
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log(`meta.json: ${Object.keys(meta).length} starters OK`);
