import { EditorialPage } from '@/components/editorial-page';

export const dynamic = 'force-static';

export default function PredictiveArchitecture() {
  return <EditorialPage
    category="MCAE / Prediction"
    title="Predictive architecture: context, timing and signal integrity"
    intro="Scoring should model likelihood, not simply accumulate activity. Prediction becomes useful only when the signals beneath it remain defensible."
    backHref="/solutions" backLabel="All solutions"
    nextHref="/solutions/self-healing-systems" nextLabel="Self-healing systems"
    sections={[
      { heading: 'The illusion of engagement as intent', paragraphs: ['MCAE records intent signals, behavioural frequency and recency at scale. But not all observed behaviour carries equal predictive value. Opens, automated scans and privacy controls can introduce distortion; signals that cannot be trusted should not meaningfully influence a model.'], quote: 'The objective is not to measure activity. It is to approximate buying readiness with defensible signal integrity.' },
      { heading: 'Scoring as a revenue field', paragraphs: ['Behavioural intensity and engagement recency must be treated as separate dimensions. Without recency weighting, a score becomes historical memory rather than present intent.', 'Every scored signal requires a degradation pattern appropriate to its commercial relevance. A webinar registration may fade slowly; a pricing-page visit may decay rapidly. Without degradation, scoring accumulates inertia. With degradation, it reflects momentum.'] },
      { heading: 'Profiles that can change', paragraphs: ['If scoring measures behavioural readiness, profile grading measures structural suitability. Industry, role and organisational scale may be relatively stable, but even structural fit contains dynamic elements.', 'Match, mismatch and unknown states need defined consequences. Temporary commercial signals should influence suitability without being allowed to become permanent—and eventually misleading—truths.'] },
      { heading: 'Relational context', paragraphs: ['Organisations contain divisions, subsidiaries, partnerships and parallel stakeholders. Momentum within one part of an account often influences another.', 'Structured Salesforce synchronisation can pass those relational events into MCAE as explicit fields. Prediction at lead level without account context produces distortion; prediction informed by relational state reflects commercial reality.'] },
      { heading: 'Segmentation as an outcome', paragraphs: ['Segmentation should emerge from scoring, grading and a governed source-of-truth hierarchy—not sit beside them as a collection of ad hoc campaign lists.'], list: ['Healthier dynamic audiences', 'Reduced manual intervention', 'Context-aware journey allocation', 'Greater confidence in audience readiness'] },
      { heading: 'Probabilistic readiness', paragraphs: ['Scoring and grading model likelihood; they do not declare certainty. Where inference is applied, it must be bounded. Where data is insufficient, readiness should remain indeterminate.'], quote: 'Identify readiness. Reassess validity. Adjust classification.' },
    ]}
  />;
}
