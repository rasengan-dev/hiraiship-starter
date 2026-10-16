import { toWinterCgHandler } from '@rasenganjs/futon';
import { app } from './app';

// Hiraiship runs the default export as a Cloudflare Worker.
// `toWinterCgHandler` passes the Worker's `env` on to `ctx.runtime.env`.
export default { fetch: toWinterCgHandler(app) };
