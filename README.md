# hiraiship-starter

Starter projects for every framework [Hiraiship](https://hiraiship.com) deploys. Each one builds and deploys as is: `npx hiraiship deploy` from its folder, or import it from the dashboard.

| Starter | Folder | What Hiraiship deploys |
| --- | --- | --- |
| Vite + React | [`vite/react-ts`](vite/react-ts) | Static site, `dist/` |
| Rasengan.js | [`rasengan/blank-ts`](rasengan/blank-ts) | Server-rendered Worker + assets |
| Astro | [`astro/blank-ts`](astro/blank-ts) | Static site, `dist/` |
| React Router | [`react-router/spa-ts`](react-router/spa-ts) | Single-page app, `build/client` |
| Next.js (vinext) | [`nextjs/export-ts`](nextjs/export-ts) | Static export, `dist/client` |
| TanStack Start | [`tanstack-start/spa-ts`](tanstack-start/spa-ts) | Single-page app, `dist/client` |
| Hono | [`hono/blank-ts`](hono/blank-ts) | Worker |
| Futon | [`futon/blank-ts`](futon/blank-ts) | Worker |

Astro, React Router, Next.js and TanStack Start are deployed as static or single-page builds: a build with a server half is refused. Each starter's README says which setting keeps it deployable.

## Structure

```
meta.json            # key -> { path, framework, name, description, styles }
<framework>/<variant>/  # one complete, standalone project
scripts/
  check-meta.mjs     # meta.json and the folders agree
  sync-styles.mjs    # copies scripts/shared/* into every starter
  shared/            # the page styles and the Hiraiship logo mark (header + favicon)
```

Every leaf folder is standalone: its own `package.json`, `.gitignore`, README, styles. Nothing at the repository root ever ships with a starter. `meta.json` is the list a tool (a `create-hiraiship` CLI, the dashboard's templates) reads to offer them; its keys match each starter's `package.json` `name`.

## Developing

The root is a pnpm workspace for contributors only:

```bash
pnpm install
pnpm --filter astro-blank-ts dev
pnpm build          # builds every starter, one at a time
pnpm check          # meta.json matches the folders
```

The styles and the logo mark are copies of `scripts/shared/`. Edit them there, then `pnpm sync:styles`.

## Adding a starter

1. Add `<framework>/<variant>/`, a project that builds with nothing but `npm install` and its build command.
2. Name it `<framework>-<variant>` in its `package.json`.
3. Add it to `meta.json` (and to the table above), then run `pnpm install` and `pnpm check`.
4. Check it deploys: copy the folder out of the workspace (so it installs on its own, with npm) and run it through Hiraiship's `runBuild` (`@hiraiship/build`), or deploy it.

Keep dependency versions current by hand.
