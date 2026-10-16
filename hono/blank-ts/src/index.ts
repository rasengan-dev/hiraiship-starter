import { Hono } from 'hono';
import { logger } from 'hono/logger';

// Environment variables set on Hiraiship reach the app as bindings.
type Bindings = {
  GREETING?: string;
};

const app = new Hono<{ Bindings: Bindings }>();

app.use(logger());

app.get('/', (c) =>
  c.json({ message: c.env.GREETING ?? 'Welcome to your Hono app on Hiraiship!' }),
);

app.get('/health', (c) => c.json({ status: 'ok' }));

app.notFound((c) => c.json({ error: 'Not found' }, 404));

app.onError((error, c) => {
  console.error(error);
  return c.json({ error: 'Internal server error' }, 500);
});

// Hiraiship runs the default export as a Cloudflare Worker.
export default app;
