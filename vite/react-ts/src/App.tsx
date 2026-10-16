import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="page">
      <header className="header">
        <span>⚡ hiraiship</span>
        <nav>
          <a href="https://docs.hiraiship.com" target="_blank" rel="noreferrer">
            Docs
          </a>
        </nav>
      </header>

      <section className="hero">
        <span className="badge">Vite + React · static site</span>
        <h1>Ready to ship.</h1>
        <p className="subtitle">
          Edit <code>src/App.tsx</code>, then deploy it with one command. Hiraiship builds{' '}
          <code>dist/</code> and serves it from the edge.
        </p>
        <p className="subtitle">
          <button type="button" onClick={() => setCount((n) => n + 1)}>
            Clicked {count} times
          </button>
        </p>

        <div className="terminal">
          <p>
            <span className="muted">$</span> npx hiraiship deploy
          </p>
          <p className="muted">✓ Vite detected · built in 3s</p>
          <p>
            <span className="accent">→</span> https://my-app.hiraiship.app
          </p>
        </div>
      </section>

      <footer className="footer">Hiraiship starter · Vite</footer>
    </main>
  );
}
