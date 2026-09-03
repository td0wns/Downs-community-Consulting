import Image from 'next/image';
import {
  ArrowDownRight,
  ArrowRight,
  CircleCheck,
  Layers3,
  Network,
  Radar,
  RefreshCcw,
  Scale,
} from 'lucide-react';

const capabilities = [
  {
    number: '01',
    icon: RefreshCcw,
    title: 'Self-healing MCAE architecture',
    text: 'Automation that continually reassesses eligibility as data, signals and certainty change—keeping audiences clean without constant manual repair.',
  },
  {
    number: '02',
    icon: Layers3,
    title: 'A defensible source of truth',
    text: 'Clear decision hierarchies across Salesforce and MCAE, so every field and gate is driven by the most reliable signal available.',
  },
  {
    number: '03',
    icon: Radar,
    title: 'Adaptive audience segmentation',
    text: 'Qualifier-first segments that respond to changing circumstances instead of preserving outdated assumptions.',
  },
  {
    number: '04',
    icon: Scale,
    title: 'Attribution with honest limits',
    text: 'Decision-ready insight for low-observability environments—weighted, contextual and explicit about what cannot be known.',
  },
  {
    number: '05',
    icon: Network,
    title: 'Relational journey design',
    text: 'Journeys that account for colleagues, divisions and parent organisations, reflecting how complex buying decisions actually happen.',
  },
];

const principles = [
  ['Find the truth', 'Establish where reliable information lives, where it conflicts and where uncertainty is being concealed.'],
  ['Design for change', 'Build rules that remain useful when people, priorities and data inevitably move.'],
  ['Make it usable', 'Translate technical integrity into decisions that commercial and operational teams can act on.'],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Downs Community Consulting home">
          <span className="brand-mark" aria-hidden="true">DCC</span>
          <span className="brand-name">Downs Community<br />Consulting</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#expertise">Expertise</a>
          <a href="#approach">Approach</a>
          <a href="#insight">Insight</a>
        </nav>
        <a className="header-cta" href="#approach">The approach <ArrowRight size={16} /></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Salesforce &amp; marketing automation consultancy</p>
          <h1>Clarity for complex<br /><em>revenue systems.</em></h1>
          <p className="hero-lede">
            I design resilient Salesforce and MCAE architectures for organisations where simplistic answers create expensive problems.
          </p>
          <div className="hero-actions">
            <a className="button button-light" href="#expertise">Explore the work <ArrowDownRight size={17} /></a>
            <a className="text-link" href="#approach">How I work <ArrowRight size={15} /></a>
          </div>
          <div className="hero-credentials" aria-label="Core disciplines">
            <span>Salesforce</span><i /> <span>MCAE</span><i /> <span>Systems architecture</span>
          </div>
        </div>

        <div className="hero-art" aria-hidden="true">
          <Image
            src="/dcc-systems-network.png"
            alt=""
            fill
            priority
            sizes="(max-width: 860px) 100vw, 50vw"
            className="hero-image"
          />
          <div className="signal-card">
            <span className="signal-label">Designed around reality</span>
            <div className="signal-list">
              <span><CircleCheck size={15} /> Observable</span>
              <span><CircleCheck size={15} /> Relational</span>
              <span><CircleCheck size={15} /> Resilient</span>
            </div>
          </div>
        </div>
      </section>

      <section className="statement section-pad">
        <p className="section-kicker">The premise</p>
        <div>
          <h2>When the system matters,<br />assumptions are expensive.</h2>
          <p>
            Most automation does not fail loudly. It drifts—through stale data, inherited rules and confidence that the evidence cannot support. Downs Community Consulting makes those hidden assumptions visible, then designs systems capable of correcting themselves.
          </p>
        </div>
      </section>

      <section className="expertise section-pad" id="expertise">
        <div className="section-heading">
          <p className="section-kicker">Selected expertise</p>
          <h2>Architecture that stays<br />true as reality changes.</h2>
        </div>
        <div className="capability-grid">
          {capabilities.map(({ number, icon: Icon, title, text }, index) => (
            <article className={`capability-card ${index === 0 ? 'featured' : ''}`} key={title}>
              <div className="capability-top"><span>{number}</span><Icon size={23} strokeWidth={1.5} /></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="approach" id="approach">
        <div className="approach-intro">
          <p className="section-kicker light">The community approach</p>
          <h2>Rigour without<br /><em>remoteness.</em></h2>
          <p>
            Good architecture begins by listening to the people living with the system. The goal is not theoretical perfection; it is clarity that survives contact with the organisation.
          </p>
        </div>
        <ol className="principles">
          {principles.map(([title, text], index) => (
            <li key={title}>
              <span>0{index + 1}</span>
              <div><h3>{title}</h3><p>{text}</p></div>
            </li>
          ))}
        </ol>
      </section>

      <section className="insight section-pad" id="insight">
        <div className="insight-heading">
          <p className="section-kicker">Current thinking</p>
          <h2>Useful ideas for systems<br />that cannot rely on certainty.</h2>
        </div>
        <article className="insight-feature">
          <div className="insight-meta"><span>Architecture note</span><span>08 min read</span></div>
          <h3>Predictive architecture in MCAE: designing for context, timing and signal integrity</h3>
          <p>
            Scoring should model likelihood, not simply accumulate activity. A practical examination of degradation, relational context and the difference between engagement and intent.
          </p>
          <a href="/insights/predictive-architecture">
            Read the article <ArrowRight size={16} />
          </a>
        </article>
      </section>

      <section className="conversation section-pad" id="conversation">
        <div>
          <p className="section-kicker">A useful starting point</p>
          <h2>Bring me the system<br />everyone works around.</h2>
        </div>
        <div className="conversation-copy">
          <p>
            If your Salesforce or MCAE environment technically works but no longer feels trustworthy, the first step is to understand why. We can start with the architecture, the evidence and the decisions it needs to support.
          </p>
          <a className="button button-dark" href="#expertise">
            Explore the core disciplines <ArrowRight size={17} />
          </a>
        </div>
      </section>

      <footer>
        <div className="brand footer-brand">
          <span className="brand-mark" aria-hidden="true">DCC</span>
          <span className="brand-name">Downs Community<br />Consulting</span>
        </div>
        <p>Complex systems. Clearer decisions.</p>
        <p>© {new Date().getFullYear()} Downs Community Consulting</p>
      </footer>
    </main>
  );
}
