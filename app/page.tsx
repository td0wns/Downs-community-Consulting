import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

const disciplines = [
  ['01', 'Predictive architecture', 'Distinguish genuine buying readiness from accumulated activity by weighing recent behaviour, context and the quality of each signal.', '/solutions/predictive-architecture'],
  ['02', 'Self-healing systems', 'Set clear rules so Salesforce and MCAE can spot drift, show uncertainty and bring records back into alignment.', '/solutions/self-healing-systems'],
  ['03', 'Intelligent orchestration', 'Use time-sensitive AI signals to support decisions while keeping control with your team.', '/solutions/ai-orchestration'],
];

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <section className="home-hero">
        <div className="home-hero-copy">
          <p className="overline">Salesforce · MCAE · Human systems</p>
          <h1>Systems that understand<br /><span>the people inside them.</span></h1>
          <p className="hero-intro">Downs Community Consulting designs Salesforce and Marketing Cloud Account Engagement around the way organisations work, accounting for changing circumstances, shared decisions and the relationships behind them.</p>
          <div className="hero-links">
            <a className="solid-button" href="/solutions">Explore solutions <ArrowRight size={16} /></a>
            <a className="line-link" href="/about">Meet the founder <ArrowUpRight size={15} /></a>
          </div>
        </div>
        <div className="home-hero-panel">
          <span className="panel-index">DCC / 01</span>
          <blockquote>“A record is never the whole relationship.”</blockquote>
          <p>Useful architecture connects the system’s view with the commercial and human context around it.</p>
          <div className="panel-axis" aria-hidden="true"><span>Systems</span><i /><span>Relationships</span></div>
        </div>
      </section>

      <section className="home-position section-shell">
        <p className="section-label">The problem</p>
        <div>
          <h2>Your platform can be technically correct<br />and commercially wrong.</h2>
          <p>A score can outlive the behaviour that earned it. A field can make an inference look like fact, while an automation may continue long after the circumstances have changed. DCC looks for these gaps between system logic and day-to-day reality and builds the controls needed to close them.</p>
        </div>
      </section>

      <section className="two-practices section-shell">
        <p className="section-label">One connected practice</p>
        <div className="practice-grid">
          <a href="/solutions" className="practice-card practice-dark">
            <span>System architecture</span>
            <h2>Revenue infrastructure that keeps pace with change.</h2>
            <p>Prediction, ongoing checks and controlled use of AI across Salesforce and MCAE.</p>
            <strong>View solutions <ArrowRight size={16} /></strong>
          </a>
          <a href="/community" className="practice-card practice-light">
            <span>The strategic lens</span>
            <h2>System design informed by the way trust and influence travel.</h2>
            <p>Community thinking accounts for relationships around buyers, employees and partners that individual records often miss.</p>
            <strong>Explore the thinking <ArrowRight size={16} /></strong>
          </a>
        </div>
      </section>

      <section className="disciplines section-shell">
        <div className="section-title-row">
          <p className="section-label">How we think</p>
          <h2>Three disciplines for making better decisions as information changes.</h2>
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
          <h2>Serious systems thinking,<br />grounded in ordinary human behaviour.</h2>
          <a className="solid-button light-button" href="/about">Meet Trevor Downs <ArrowRight size={16} /></a>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
