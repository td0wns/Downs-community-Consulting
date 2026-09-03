import { SectionIndex } from '@/components/section-index';

export const dynamic = 'force-static';

export default function Community() {
  return <SectionIndex
    eyebrow="The community approach"
    title="Community as growth infrastructure."
    intro="Influence rarely emerges from broadcast communication alone. It develops where relationships, trust and shared experience shape how ideas are received and adopted."
    items={[
      { number: '01', label: 'Communication', title: 'Community as communication infrastructure', description: 'Why trusted networks transmit belief differently from traditional marketing channels.', href: '/community/communication-infrastructure' },
      { number: '02', label: 'Structure', title: 'The architecture of community', description: 'How proximity, repeated interaction and authentic shared context allow communities to form.', href: '/community/architecture' },
      { number: '03', label: 'Growth', title: 'The community funnel', description: 'A five-stage model for moving from awareness to participation, buy-in and advocacy.', href: '/community/funnel' },
    ]}
  />;
}
