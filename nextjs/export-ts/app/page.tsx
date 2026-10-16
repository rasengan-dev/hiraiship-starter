export default function Home() {
  return (
    <>
      <span className="badge">Next.js · static export</span>
      <h1>Ready to ship.</h1>
      <p className="subtitle">
        Edit <code>app/page.tsx</code>, then deploy it with one command. vinext exports every route
        to HTML at build time.
      </p>
      <div className="terminal">
        <p>
          <span className="muted">$</span> npx hiraiship deploy
        </p>
        <p className="muted">✓ Next.js (vinext) detected · exported</p>
        <p>
          <span className="accent">→</span> https://my-app.hiraiship.app
        </p>
      </div>
    </>
  );
}
