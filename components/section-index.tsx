import { ArrowUpRight } from 'lucide-react';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

export type IndexItem = { number: string; label: string; title: string; description: string; href: string };

export function SectionIndex({ eyebrow, title, intro, items }: { eyebrow: string; title: string; intro: string; items: IndexItem[] }) {
  return (
    <main>
      <SiteHeader />
      <header className="index-hero">
        <p className="overline">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{intro}</p>
      </header>
      <section className="index-list section-shell">
        {items.map((item) => (
          <a className="index-item" href={item.href} key={item.href}>
            <span className="index-number">{item.number}</span>
            <div><small>{item.label}</small><h2>{item.title}</h2><p>{item.description}</p></div>
            <ArrowUpRight size={24} />
          </a>
        ))}
      </section>
      <SiteFooter />
    </main>
  );
}
