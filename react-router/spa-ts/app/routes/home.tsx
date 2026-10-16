export function meta() {
  return [{ title: 'React Router on Hiraiship' }];
}

export default function Home() {
  return (
    <>
      <span className="badge">React Router · single-page app</span>
      <h1>Ready to ship.</h1>
      <p className="subtitle">
        Edit <code>app/routes/home.tsx</code>, then deploy it with one command. Every path serves
        the app's shell, and the router renders the right route.
      </p>
      <div className="terminal">
        <p>
          <span className="muted">$</span> npx hiraiship deploy
        </p>
        <p className="muted">✓ React Router detected · SPA mode</p>
        <p>
          <span className="accent">→</span> https://my-app.hiraiship.app
        </p>
      </div>
    </>
  );
}
