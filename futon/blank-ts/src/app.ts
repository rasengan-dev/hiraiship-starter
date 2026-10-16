import { Futon, json, logger, cors } from '@rasenganjs/futon';

export const app = new Futon();

app.use(logger());
app.use(cors());

app.get('/', async (ctx) =>
  json({
    // Environment variables set on Hiraiship reach the app through `ctx.runtime.env`.
    message: (ctx.runtime.env?.GREETING as string | undefined) ?? 'Welcome to your Futon app on Hiraiship!',
  }),
);

app.get('/health', async () => json({ status: 'ok' }));

app.onError(async (error) => {
  console.error(error);
  return json({ error: 'Internal server error' }, { status: 500 });
});
