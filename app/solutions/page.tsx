import { SectionIndex } from '@/components/section-index';

export const dynamic = 'force-static';

export default function Solutions() {
  return <SectionIndex
    eyebrow="Salesforce & Marketing Cloud Account Engagement"
    title="Architecture for decisions that cannot rely on stale certainty."
    intro="DCC treats MCAE as more than a campaign engine. Connected properly to Salesforce, it can identify readiness, continuously test whether that judgement still holds and translate governed intelligence into the next appropriate action."
    items={[
      { number: '01', label: 'Identify readiness', title: 'Predictive architecture', description: 'Model likelihood using the strength, timing and relational context of a signal—not a lifetime total of activity.', href: '/solutions/predictive-architecture' },
      { number: '02', label: 'Protect integrity', title: 'Self-healing systems', description: 'Create rules that continually reassess eligibility, distinguish knowns from unknowns and surface drift before it compounds.', href: '/solutions/self-healing-systems' },
      { number: '03', label: 'Govern action', title: 'Intelligent orchestration', description: 'Use Einstein and Agentforce as bounded sources of probability, with visible confidence and human oversight.', href: '/solutions/ai-orchestration' },
    ]}
  />;
}
