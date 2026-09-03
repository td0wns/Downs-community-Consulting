import { EditorialPage } from '@/components/editorial-page';

export const dynamic = 'force-static';

export default function CommunityArchitecture() {
  return <EditorialPage
    category="Community / Volume 02"
    title="The architecture of community"
    intro="Communities rarely form randomly. They emerge where some form of proximity creates repeated interaction and the conditions for trust."
    backHref="/community" backLabel="The community approach"
    nextHref="/community/funnel" nextLabel="The community funnel"
    sections={[
      { heading: 'Proximity creates the conditions', paragraphs: ['Proximity may be physical, professional, social or ideological. The critical factor is not shared identity alone but repeated interaction within a meaningful context.', 'Topic labels describe what communities discuss. Proximity explains how they actually form.'] },
      { heading: 'Four structural types', paragraphs: ['Close communities combine frequent interaction with high trust. Broad communities offer scale with less relational depth. Digital communities create accessibility across distance. Product communities form around shared practical experience.'], list: ['Close: dense trust and frequent interaction', 'Broad: wider reach and potential energy', 'Digital: accessible, scalable proximity', 'Product: practical experience and credible advocacy'] },
      { heading: 'Structures overlap', paragraphs: ['A digital product community may contain close communities built through long collaboration. A broad professional network may develop smaller, higher-trust groups.', 'Community strategy rarely starts from nothing. It starts by identifying and cultivating the networks already surrounding an organisation.'] },
      { heading: 'Authenticity is the boundary', paragraphs: ['Proximity alone does not guarantee community. Forced engagement and transactional branding fail because participants recognise when shared value is not genuine.', 'Organisations cannot fabricate proximity where none exists. They can create conditions for relationships to develop—and avoid suffocating them once they do.'] },
    ]}
  />;
}
