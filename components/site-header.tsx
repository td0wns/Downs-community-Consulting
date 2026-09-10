import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const navigation = [
  ['Home', '/'],
  ['Community', '/community'],
  ['Solutions', '/solutions'],
  ['About', '/about'],
];

export function SiteHeader({ inverse = false }: { inverse?: boolean }) {
  return (
    <header className={`site-header ${inverse ? 'site-header-inverse' : ''}`}>
      <a href="/" className="logo-link" aria-label="Downs Community Consulting home">
        <Image src="/downs-community-consulting-logo.png" alt="Downs Community Consulting" width={220} height={90} priority />
      </a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {navigation.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
      </nav>
      <a className="nav-contact" href="/about#connect">Connect <ArrowUpRight size={15} /></a>
      <details className="mobile-menu">
        <summary>Menu</summary>
        <nav aria-label="Mobile navigation">
          {navigation.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
          <a href="/about#connect">Connect</a>
        </nav>
      </details>
    </header>
  );
}
