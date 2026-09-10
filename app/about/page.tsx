import { ArrowUpRight } from 'lucide-react';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

export const dynamic = 'force-static';

export default function About() {
  return (
    <main>
      <SiteHeader />
      <header className="about-hero">
        <p className="overline">About Downs Community Consulting</p>
        <h1>Technology is only useful<br />when it reflects reality.</h1>
        <blockquote>DCC brings technical architecture and human context into the same conversation.</blockquote>
      </header>
      <section className="about-story section-shell">
        <p className="section-label">The consultancy</p>
        <div>
          <h2>Relationships are part of the system.</h2>
          <p>Downs Community Consulting designs Salesforce and MCAE environments for complex organisations. The work gives marketing and sales teams a clearer view of readiness, tighter control over changing data and a better basis for decisions where customer relationships meet.</p>
          <p>The name matters because community shapes how DCC approaches technical work. People influence one another, trust moves through networks and few decisions belong to one isolated record. Good architecture accounts for those relationships while keeping the rules clear.</p>
        </div>
      </section>
      <section className="founder-story section-shell">
        <p className="section-label">The founder</p>
        <div>
          <h2>Trevor Downs</h2>
          <p>Trevor has worked in events and community-led organisations since 2010, across B2B, consumer, charity, trade-show and digital settings. That work taught him to think in systems long before he used the term. Budgets, data, technology, suppliers, audiences and last-minute human decisions all had to hold together in public.</p>
          <p>It also revealed a pattern that became difficult to ignore. Information does not move evenly through an organisation. People trust familiar voices, borrow confidence from their peers and respond differently as circumstances change. Community strategy gave that pattern a framework. Salesforce and MCAE provide an environment where it can be put to work at scale.</p>
          <p>Trevor now brings that combined perspective to revenue architecture, drawing on experience in project delivery, market research, leadership, CRM operations and international events. He starts with the real journey, keeps uncertainty visible and builds systems that teams can use with confidence.</p>
        </div>
      </section>
      <section className="connect-section section-shell" id="connect">
        <p className="section-label">Connect</p>
        <div>
          <h2>If your system is active but no longer feels aligned, let’s talk.</h2>
          <div className="connect-links">
            <a href="https://www.linkedin.com/in/trevor-downs-77a65a2b0" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={18} /></a>
            <a href="https://www.salesforce.com/trailblazer/c8v5bjn0x8ky04vsee" target="_blank" rel="noreferrer">Trailhead <ArrowUpRight size={18} /></a>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
