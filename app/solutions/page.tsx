import { SectionIndex } from '@/components/section-index';

export const dynamic = 'force-static';

export default function Solutions() {
  return <SectionIndex
    eyebrow="Marketing Cloud Account Engagement"
    title="The strategic revenue core."
    intro="MCAE can align data, intent and timing into coordinated commercial action. These three connected layers—prediction, observation and orchestration—turn it from a campaign executor into revenue infrastructure."
    items={[
      { number: '01', label: 'Prediction', title: 'Predictive architecture', description: 'Design scoring, grading and segmentation around likelihood, recency and commercial context—not accumulated activity.', href: '/solutions/predictive-architecture' },
      { number: '02', label: 'Observation', title: 'Self-healing systems', description: 'Use gates, explicit truth hierarchies and continuous reassessment to keep automation aligned as reality changes.', href: '/solutions/self-healing-systems' },
      { number: '03', label: 'Orchestration', title: 'MCAE and Agentforce', description: 'Synchronise AI-derived signals into governed fields that can inform journeys without taking control of them.', href: '/solutions/ai-orchestration' },
    ]}
  />;
}
