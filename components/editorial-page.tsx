import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

type Section = { heading: string; paragraphs: string[]; quote?: string; list?: string[] };

export function EditorialPage({
  category,
  title,
  intro,
  sections,
  backHref,
  backLabel,
  nextHref,
  nextLabel,
}: {
  category: string;
  title: string;
  intro: string;
  sections: Section[];
  backHref: string;
  backLabel: string;
  nextHref?: string;
  nextLabel?: string;
}) {
  return (
    <main>
      <SiteHeader />
      <header className="editorial-hero">
        <p className="overline">{category}</p>
        <h1>{title}</h1>
        <p>{intro}</p>
      </header>
      <div className="editorial-shell">
        <aside>
          <Link href={backHref}><ArrowLeft size={14} /> {backLabel}</Link>
          <span>Downs Community Consulting</span>
        </aside>
        <article className="editorial-body">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.quote && <blockquote>{section.quote}</blockquote>}
              {section.list && <ul>{section.list.map((item) => <li key={item}>{item}</li>)}</ul>}
            </section>
          ))}
          {nextHref && nextLabel && (
            <Link className="next-article" href={nextHref}>
              <span>Continue reading</span><strong>{nextLabel}</strong><ArrowRight size={20} />
            </Link>
          )}
        </article>
      </div>
      <SiteFooter />
    </main>
  );
}
