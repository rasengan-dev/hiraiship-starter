import { Link, Outlet, type LayoutComponent } from 'rasengan';

const RootLayout: LayoutComponent = () => {
  return (
    <main className="page">
      <header className="header">
        <Link to="/" style={{ textDecoration: 'none' }}>
          ⚡ hiraiship
        </Link>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <a href="https://docs.hiraiship.com" target="_blank" rel="noreferrer">
            Docs
          </a>
        </nav>
      </header>
      <section className="hero">
        <Outlet />
      </section>
      <footer className="footer">Hiraiship starter · Rasengan.js</footer>
    </main>
  );
};

export default RootLayout;
