import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

const approach = [
  ['01', 'Map proximity', 'Identify the interests, experiences, locations and products that bring people together and make exchange possible.', '/community/architecture'],
  ['02', 'Build participation', 'Give people a clear route from awareness and interaction towards engagement, buy-in and credible advocacy.', '/community/funnel'],
  ['03', 'Design the support', 'Use the right mix of leadership, events, communication, digital spaces and, where useful, Salesforce or MCAE to put the strategy into practice.', '/solutions'],
];

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <section className="home-hero">
        <div className="home-hero-copy">
          <p className="overline">Community strategy · Relationships · Action</p>
          <h1>Understand how people connect.<br /><span>Turn relationships into action.</span></h1>
          <p className="hero-intro">Downs Community Consulting helps organisations understand how people connect to one another, to ideas and to products, then turns those relationships into community strategies they can act on.</p>
          <div className="hero-links">
            <a className="solid-button" href="/community">Explore the approach <ArrowRight size={16} /></a>
            <a className="line-link" href="/solutions">See how it is applied <ArrowUpRight size={15} /></a>
          </div>
        </div>
        <div className="home-hero-panel">
          <span className="panel-index">DCC / 01</span>
          <blockquote>“Trust and familiarity move between people.”</blockquote>
          <p>DCC identifies where those relationships already exist, what strengthens them and how they can support products, teams and change.</p>
          <div className="panel-axis" aria-hidden="true"><span>Connection</span><i /><span>Action</span></div>
        </div>
      </section>

      <section className="home-position section-shell">
        <p className="section-label">The problem</p>
        <div>
          <h2>Most businesses can see individuals.<br />Few can see what passes between them.</h2>
          <p>Marketing data can record a click, an event can count attendance and a CRM can hold a customer record. None of those measures alone explains whose opinion carries weight, why a message is believed or how enthusiasm for a product becomes shared. Community strategy makes those relationships visible enough to work with.</p>
        </div>
      </section>

      <section className="two-practices section-shell">
        <p className="section-label">From insight to action</p>
        <div className="practice-grid">
          <a href="/community" className="practice-card practice-dark">
            <span>Understand the community</span>
            <h2>Find how trust, information and influence move.</h2>
            <p>Map the close, broad, digital and product communities around customers, staff, partners and the public.</p>
            <strong>Explore the approach <ArrowRight size={16} /></strong>
          </a>
          <a href="/solutions" className="practice-card practice-light">
            <span>Action the strategy</span>
            <h2>Design the conditions that help people participate.</h2>
            <p>Shape events, communication, leadership, marketing and supporting systems around the relationships that matter.</p>
            <strong>See practical applications <ArrowRight size={16} /></strong>
          </a>
        </div>
      </section>

      <section className="disciplines section-shell">
        <div className="section-title-row">
          <p className="section-label">A practical method</p>
          <h2>From understanding a community to giving people a reason to take part.</h2>
        </div>
        <div className="discipline-list">
          {approach.map(([number, title, text, href]) => (
            <a href={href} className="discipline-row" key={href}>
              <span>{number}</span><h3>{title}</h3><p>{text}</p><ArrowUpRight size={20} />
            </a>
          ))}
        </div>
      </section>

      <section className="grounded section-shell">
        <p className="section-label">Why DCC</p>
        <div>
          <h2>Community strategy built from experience,<br />then made practical for your organisation.</h2>
          <a className="solid-button light-button" href="/about">Meet Trevor Downs <ArrowRight size={16} /></a>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
