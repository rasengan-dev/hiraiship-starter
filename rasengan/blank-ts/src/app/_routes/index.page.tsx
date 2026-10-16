import { type PageComponent } from 'rasengan';

const Page: PageComponent = () => {
  return (
    <>
      <span className="badge">Rasengan.js</span>
      <h1>Ready to ship.</h1>
      <p className="subtitle">
        Edit <code>src/app/_routes/index.page.tsx</code>, then deploy it with one command.
        Hiraiship follows <code>rasengan.config.js</code>: SPA, prerendered or server-rendered.
      </p>
      <div className="terminal">
        <p>
          <span className="muted">$</span> npx hiraiship deploy
        </p>
        <p className="muted">✓ Rasengan.js detected · built</p>
        <p>
          <span className="accent">→</span> https://my-app.hiraiship.app
        </p>
      </div>
    </>
  );
};

Page.metadata = {
  title: 'Rasengan.js on Hiraiship',
  description: 'A Rasengan.js starter deployed with Hiraiship',
};

export default Page;
