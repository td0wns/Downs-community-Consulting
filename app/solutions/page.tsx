import { SectionIndex } from '@/components/section-index';

export const dynamic = 'force-static';

export default function Solutions() {
  return <SectionIndex
    eyebrow="Salesforce & Marketing Cloud Account Engagement"
    title="Architecture for decisions made with changing data."
    intro="DCC uses MCAE for more than campaign delivery. Working with Salesforce, it can identify likely readiness, check whether the evidence still holds and guide the next action under clear rules."
    items={[
      { number: '01', label: 'Identify readiness', title: 'Predictive architecture', description: 'Model likelihood from the strength, timing and relational context of a signal instead of relying on a lifetime activity total.', href: '/solutions/predictive-architecture' },
      { number: '02', label: 'Protect integrity', title: 'Self-healing systems', description: 'Create rules that keep reassessing eligibility, distinguish knowns from unknowns and flag drift before it spreads through the system.', href: '/solutions/self-healing-systems' },
      { number: '03', label: 'Govern action', title: 'Intelligent orchestration', description: 'Treat Einstein and Agentforce as sources of probability, keeping confidence visible and important decisions under human oversight.', href: '/solutions/ai-orchestration' },
    ]}
  />;
}
