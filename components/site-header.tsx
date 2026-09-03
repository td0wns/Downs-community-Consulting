import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const navigation = [
  ['Solutions', '/solutions'],
  ['Community', '/community'],
  ['About', '/about'],
];

export function SiteHeader({ inverse = false }: { inverse?: boolean }) {
  return (
    <header className={`site-header ${inverse ? 'site-header-inverse' : ''}`}>
      <Link href="/" className="logo-link" aria-label="Downs Community Consulting home">
        <Image src="/downs-community-consulting-logo.png" alt="Downs Community Consulting" width={220} height={90} priority />
      </Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {navigation.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
      </nav>
      <Link className="nav-contact" href="/about#connect">Connect <ArrowUpRight size={15} /></Link>
      <details className="mobile-menu">
        <summary>Menu</summary>
        <nav aria-label="Mobile navigation">
          {navigation.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
          <Link href="/about#connect">Connect</Link>
        </nav>
      </details>
    </header>
  );
}
