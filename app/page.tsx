import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

const disciplines = [
  ['01', 'Predictive architecture', 'Model buying readiness using defensible signals, temporal context and transparent confidence.', '/solutions/predictive-architecture'],
  ['02', 'Self-healing systems', 'Build MCAE environments that reassess reality, surface uncertainty and correct drift.', '/solutions/self-healing-systems'],
  ['03', 'AI orchestration', 'Place Einstein and Agentforce inside clear guardrails so intelligence accelerates rather than destabilises.', '/solutions/ai-orchestration'],
];

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <section className="home-hero">
        <div className="home-hero-copy">
          <p className="overline">Salesforce · MCAE · Community strategy</p>
          <h1>Complex systems.<br /><span>Human answers.</span></h1>
          <p className="hero-intro">Downs Community Consulting helps organisations design revenue and engagement systems that remain credible when data, behaviour and circumstances change.</p>
          <div className="hero-links">
            <a className="solid-button" href="/solutions">Explore solutions <ArrowRight size={16} /></a>
            <a className="line-link" href="/about">Meet the founder <ArrowUpRight size={15} /></a>
          </div>
        </div>
        <div className="home-hero-panel">
          <span className="panel-index">DCC / 01</span>
          <blockquote>“Sustainable growth does not come from campaigns alone.”</blockquote>
          <p>It emerges when marketing infrastructure, human relationships and community networks operate as one coherent system.</p>
          <div className="panel-axis" aria-hidden="true"><span>Systems</span><i /><span>Relationships</span></div>
        </div>
      </section>

      <section className="home-position section-shell">
        <p className="section-label">What we see</p>
        <div>
          <h2>Most systems do not fail loudly.<br />They drift quietly.</h2>
          <p>Rules outlive their context. Data acquires false certainty. Teams compensate with workarounds. We expose the assumptions underneath the architecture, then rebuild around evidence, change and the people who actually use it.</p>
        </div>
      </section>

      <section className="two-practices section-shell">
        <p className="section-label">Two connected practices</p>
        <div className="practice-grid">
          <a href="/solutions" className="practice-card practice-dark">
            <span>Revenue systems</span>
            <h2>Automation that can recognise when reality has changed.</h2>
            <p>Salesforce and MCAE architecture for prediction, observation and responsible orchestration.</p>
            <strong>View solutions <ArrowRight size={16} /></strong>
          </a>
          <a href="/community" className="practice-card practice-light">
            <span>Community infrastructure</span>
            <h2>Growth built through trust, proximity and participation.</h2>
            <p>Strategic frameworks for understanding how relationships become durable commercial infrastructure.</p>
            <strong>Explore the approach <ArrowRight size={16} /></strong>
          </a>
        </div>
      </section>

      <section className="disciplines section-shell">
        <div className="section-title-row">
          <p className="section-label">Selected expertise</p>
          <h2>Built for organisations where simplistic answers become expensive.</h2>
        </div>
        <div className="discipline-list">
          {disciplines.map(([number, title, text, href]) => (
            <a href={href} className="discipline-row" key={href}>
              <span>{number}</span><h3>{title}</h3><p>{text}</p><ArrowUpRight size={20} />
            </a>
          ))}
        </div>
      </section>

      <section className="grounded section-shell">
        <p className="section-label">The principle</p>
        <div>
          <h2>Rigorous enough for the boardroom.<br />Grounded enough for the real world.</h2>
          <a className="solid-button light-button" href="/about">Why DCC exists <ArrowRight size={16} /></a>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
