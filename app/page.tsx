import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

const disciplines = [
  ['01', 'Predictive architecture', 'Separate genuine buying readiness from accumulated activity by weighting context, recency and signal quality.', '/solutions/predictive-architecture'],
  ['02', 'Self-healing systems', 'Give Salesforce and MCAE the rules to recognise drift, expose uncertainty and recover alignment.', '/solutions/self-healing-systems'],
  ['03', 'Intelligent orchestration', 'Turn AI output into governed, time-sensitive signals that support decisions without quietly taking control.', '/solutions/ai-orchestration'],
];

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <section className="home-hero">
        <div className="home-hero-copy">
          <p className="overline">Salesforce · MCAE · Human systems</p>
          <h1>Systems that understand<br /><span>the people inside them.</span></h1>
          <p className="hero-intro">Downs Community Consulting designs Salesforce and Marketing Cloud Account Engagement around the way organisations actually work: through changing context, shared decisions and human relationships.</p>
          <div className="hero-links">
            <a className="solid-button" href="/solutions">Explore solutions <ArrowRight size={16} /></a>
            <a className="line-link" href="/about">Meet the founder <ArrowUpRight size={15} /></a>
          </div>
        </div>
        <div className="home-hero-panel">
          <span className="panel-index">DCC / 01</span>
          <blockquote>“A record is never the whole relationship.”</blockquote>
          <p>Useful architecture connects what the system can observe with the commercial and human context it cannot afford to ignore.</p>
          <div className="panel-axis" aria-hidden="true"><span>Systems</span><i /><span>Relationships</span></div>
        </div>
      </section>

      <section className="home-position section-shell">
        <p className="section-label">The problem</p>
        <div>
          <h2>Your platform can be technically correct<br />and commercially wrong.</h2>
          <p>Scores remember behaviour long after its relevance has faded. Fields present inference as fact. Automations keep acting after the circumstances that justified them have changed. DCC finds that gap between system logic and lived reality, then closes it deliberately.</p>
        </div>
      </section>

      <section className="two-practices section-shell">
        <p className="section-label">One connected practice</p>
        <div className="practice-grid">
          <a href="/solutions" className="practice-card practice-dark">
            <span>System architecture</span>
            <h2>Revenue infrastructure that stays useful as reality changes.</h2>
            <p>Prediction, continuous observation and governed orchestration across Salesforce and MCAE.</p>
            <strong>View solutions <ArrowRight size={16} /></strong>
          </a>
          <a href="/community" className="practice-card practice-light">
            <span>The strategic lens</span>
            <h2>Architecture informed by how trust and influence actually move.</h2>
            <p>Community thinking reveals the relationships around a buyer, employee or partner that isolated records miss.</p>
            <strong>Explore the thinking <ArrowRight size={16} /></strong>
          </a>
        </div>
      </section>

      <section className="disciplines section-shell">
        <div className="section-title-row">
          <p className="section-label">How we think</p>
          <h2>Three disciplines for turning changing information into better action.</h2>
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
        <p className="section-label">Why DCC</p>
        <div>
          <h2>Serious systems thinking,<br />without losing sight of ordinary human behaviour.</h2>
          <a className="solid-button light-button" href="/about">Meet Trevor Downs <ArrowRight size={16} /></a>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
