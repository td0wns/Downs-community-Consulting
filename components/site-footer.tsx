import Image from 'next/image';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <Image src="/downs-community-consulting-logo.png" alt="Downs Community Consulting" width={250} height={110} />
        <p>Where rigorous systems thinking<br />meets human relationships.</p>
      </div>
      <div className="footer-links">
        <nav aria-label="Footer navigation">
          <a href="/solutions">Solutions</a>
          <a href="/community">Community</a>
          <a href="/about">About</a>
        </nav>
        <p>© {new Date().getFullYear()} Downs Community Consulting</p>
      </div>
    </footer>
  );
}
