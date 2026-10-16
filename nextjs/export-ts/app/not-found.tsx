export default function NotFound() {
  return (
    <>
      <span className="badge">404</span>
      <h1>Page not found.</h1>
      <p className="subtitle">
        Exported as <code>404.html</code>, which Hiraiship serves for any unknown path.
      </p>
    </>
  );
}
