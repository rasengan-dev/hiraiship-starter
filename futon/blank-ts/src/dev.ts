// Local development only: a Node server around the same app.
// Hiraiship deploys `src/index.ts`, never this file.
import { NodeDevAdapter } from '@rasenganjs/runtime/adapters/node';
import { app } from './app';

const port = Number(process.env.PORT ?? 3000);
const host = process.env.HOST ?? '0.0.0.0';

new NodeDevAdapter({ port, host }).serve(app, {
  onListening: () => console.log(`Futon app listening on http://localhost:${port}`),
});
