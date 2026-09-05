import { SectionIndex } from '@/components/section-index';

export const dynamic = 'force-static';

export default function Community() {
  return <SectionIndex
    eyebrow="The thinking behind the technology"
    title="No buyer, colleague or organisation acts alone."
    intro="Community is not a separate, softer service line. It is the strategic lens behind DCC’s work: a way to understand how trust, shared context and peer influence shape behaviour around the data a system can see."
    items={[
      { number: '01', label: 'How belief travels', title: 'Communication infrastructure', description: 'Why information acquires meaning and credibility when it is interpreted inside trusted networks.', href: '/community/communication-infrastructure' },
      { number: '02', label: 'How networks form', title: 'The architecture of community', description: 'A practical framework for proximity, repeated interaction and the conditions in which trust can develop.', href: '/community/architecture' },
      { number: '03', label: 'How trust compounds', title: 'The community funnel', description: 'Five relationship stages that explain the movement from first recognition to credible advocacy.', href: '/community/funnel' },
    ]}
  />;
}
