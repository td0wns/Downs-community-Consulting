import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PredictiveArchitecture() {
  return (
    <main className="article-page">
      <header className="article-nav">
        <Link className="brand" href="/">
          <span className="brand-mark" aria-hidden="true">DCC</span>
          <span className="brand-name">Downs Community<br />Consulting</span>
        </Link>
        <Link className="article-back" href="/"><ArrowLeft size={16} /> Back to the consultancy</Link>
      </header>

      <article>
        <header className="article-hero">
          <p className="eyebrow"><span /> Architecture note · 08 min read</p>
          <h1>Predictive architecture in MCAE</h1>
          <p>Designing for context, timing and signal integrity.</p>
        </header>

        <div className="article-body">
          <p className="article-lede">Modern MCAE instances rarely fail because scoring or grading are missing. They fail because those mechanisms are treated as reporting metrics rather than structural decision engines.</p>

          <h2>Engagement is not the same as intent</h2>
          <p>MCAE is a powerful observation layer, but not every recorded behaviour has equal predictive value. Email opens, automated scans and privacy controls all introduce distortion. Signals that cannot be trusted should not meaningfully influence a predictive model.</p>
          <blockquote>The objective is not to measure activity. It is to approximate buying readiness with defensible signal integrity.</blockquote>

          <h2>Scoring needs a sense of time</h2>
          <p>Without recency weighting, a score becomes historical memory rather than present intent. Every signal needs a degradation pattern appropriate to its commercial relevance. A webinar registration may fade slowly; a pricing-page visit may decay quickly.</p>
          <p>Without degradation, scoring accumulates inertia. With degradation, it reflects momentum—and prediction depends on momentum.</p>

          <h2>Profiles must remain conditional</h2>
          <p>If scoring measures behavioural readiness, profile grading measures structural suitability. Industry, role and organisational scale may be relatively stable, but even structural fit contains dynamic elements. Match, mismatch and unknown states should each have defined consequences.</p>
          <p>Durable truths and temporary signals must be handled differently. A short-lived commercial event can improve relevance without being allowed to become a permanent—and eventually misleading—classification.</p>

          <h2>Context travels across relationships</h2>
          <p>Business reality extends beyond individual prospects. Divisions, subsidiaries, colleagues and partner organisations influence one another. Through deliberate Salesforce synchronisation, relational events can become explicit, bounded signals inside MCAE.</p>
          <p>Prediction at lead level without account context produces distortion. Prediction informed by relational state is closer to commercial reality.</p>

          <h2>Segmentation should be an outcome</h2>
          <p>Rather than assembling lists independently for every campaign, segmentation should emerge from scoring, grading and a well-governed source-of-truth hierarchy. Stable qualification and shifting opportunity can be evaluated separately, then combined.</p>
          <ul>
            <li>Healthier dynamic audiences</li>
            <li>Less manual intervention</li>
            <li>Context-aware journey allocation</li>
            <li>Greater confidence in readiness</li>
          </ul>

          <h2>Readiness is probabilistic</h2>
          <p>A predictive system should model likelihood without pretending to certainty. Where inference is used, it must be bounded. Where evidence is insufficient, readiness should remain indeterminate.</p>
          <p className="article-close">Identify readiness. Reassess validity. Adjust classification. That continuous loop is what turns MCAE from an activity recorder into a system that models commercial timing.</p>
        </div>
      </article>
    </main>
  );
}
