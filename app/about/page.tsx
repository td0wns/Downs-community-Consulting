import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

export default function About() {
  return (
    <main>
      <SiteHeader />
      <header className="about-hero">
        <p className="overline">About DCC</p>
        <h1>Built around one<br />persistent belief.</h1>
        <blockquote>Sustainable growth does not come from campaigns alone.</blockquote>
      </header>
      <section className="about-story section-shell">
        <p className="section-label">The consultancy</p>
        <div>
          <h2>Relationships are not the soft edge of strategy. They are part of the infrastructure.</h2>
          <p>Downs Community Consulting helps organisations understand and use the strategic value of community within modern business environments. The work connects technical marketing systems with the networks of people that ultimately drive trust, reputation and advocacy.</p>
          <p>That means designing engagement systems around relationships, developing communities around shared expertise, and aligning technology with long-term growth rather than short-term activity.</p>
        </div>
      </section>
      <section className="founder-story section-shell">
        <p className="section-label">The founder</p>
        <div>
          <h2>Trevor Downs</h2>
          <p>Trevor’s work focuses on how organisations grow through relationships, systems and community structures. His study of Ancient History revealed a pattern that continued throughout his professional career: lasting institutions are rarely built through isolated effort. They emerge through communities sharing knowledge, trust and purpose.</p>
          <p>Across the charity sector, B2B events, coaching, project management and marketing operations, the same principle remained visible. The organisations achieving the most sustainable growth understood how to cultivate strong networks around customers, partners, advocates and internal teams.</p>
          <p>Today, that thinking informs hands-on work with Salesforce Marketing Cloud Account Engagement, Pardot and Mailchimp—building automation frameworks that connect marketing activity with structured, human customer journeys.</p>
        </div>
      </section>
      <section className="connect-section section-shell" id="connect">
        <p className="section-label">Connect</p>
        <div>
          <h2>If you are trying to build something that lasts, let’s compare notes.</h2>
          <div className="connect-links">
            <Link href="https://www.linkedin.com/in/trevor-downs-77a65a2b0" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={18} /></Link>
            <Link href="https://www.salesforce.com/trailblazer/c8v5bjn0x8ky04vsee" target="_blank" rel="noreferrer">Trailhead <ArrowUpRight size={18} /></Link>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
