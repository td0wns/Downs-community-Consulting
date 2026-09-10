import Image from 'next/image';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <Image src="/downs-community-consulting-logo.png" alt="Downs Community Consulting" width={250} height={110} />
        <p>Community strategy designed around<br />how people connect, decide and act.</p>
      </div>
      <div className="footer-links">
        <nav aria-label="Footer navigation">
          <a href="/">Home</a>
          <a href="/community">Community</a>
          <a href="/solutions">Solutions</a>
          <a href="/about">About</a>
        </nav>
        <p>© {new Date().getFullYear()} Downs Community Consulting</p>
      </div>
    </footer>
  );
}
