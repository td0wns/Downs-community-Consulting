import Image from 'next/image';
import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <Image src="/downs-community-consulting-logo.png" alt="Downs Community Consulting" width={250} height={110} />
        <p>Where rigorous systems thinking<br />meets human relationships.</p>
      </div>
      <div className="footer-links">
        <nav aria-label="Footer navigation">
          <Link href="/solutions">Solutions</Link>
          <Link href="/community">Community</Link>
          <Link href="/about">About</Link>
        </nav>
        <p>© {new Date().getFullYear()} Downs Community Consulting</p>
      </div>
    </footer>
  );
}
