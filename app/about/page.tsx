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
          <h2>Relationships are not outside the system. They are part of what makes it work.</h2>
          <p>Downs Community Consulting designs Salesforce and MCAE environments for complex organisations. The aim is not more automation for its own sake. It is a clearer view of readiness, stronger control over changing data and better decisions at the point where marketing, sales and customer relationships meet.</p>
          <p>The name matters. Community is the lens DCC brings to technical work: people influence one another, trust moves through networks and decisions rarely belong to a single isolated record. Good architecture makes room for that reality while remaining disciplined enough to govern it.</p>
        </div>
      </section>
      <section className="founder-story section-shell">
        <p className="section-label">The founder</p>
        <div>
          <h2>Trevor Downs</h2>
          <p>Trevor has worked in events and community-led organisations since 2010, across B2B, consumer, charity, trade-show and digital settings. That work was an education in systems before it carried the label: budgets, data, technology, suppliers, audiences and last-minute human decisions all had to hold together in public.</p>
          <p>It also made one pattern difficult to ignore. Information does not move evenly through an organisation. People trust familiar voices, borrow confidence from their peers and respond differently as circumstances change. Community strategy gave that pattern a framework; Salesforce and MCAE provide an environment in which it can be operationalised at scale.</p>
          <p>Trevor now applies that combined perspective to revenue architecture, drawing on experience in project delivery, market research, leadership, CRM operations and international events. The approach is practical by design: understand the real journey, make uncertainty visible and build only what teams can confidently use.</p>
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
