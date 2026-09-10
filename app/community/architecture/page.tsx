import { EditorialPage } from '@/components/editorial-page';

export const dynamic = 'force-static';

export default function CommunityArchitecture() {
  return <EditorialPage
    category="Community / Volume 02"
    title="The architecture of community: proximity, repetition and choice"
    intro="Shared interests may give people a reason to meet. Community begins when meaningful proximity leads to repeated interaction and, in time, trust."
    backHref="/community" backLabel="The community approach"
    nextHref="/community/funnel" nextLabel="The community funnel"
    sections={[
      { heading: 'Proximity is more than geography', paragraphs: ['People can be close because they share a place, profession, challenge, identity, belief or practical experience. What matters is that this proximity creates credible reasons to meet again.', 'A topic describes what a group discusses. Proximity helps explain why its members keep returning, whose experience carries weight and how the network behaves when the organisation is not present.'] },
      { heading: 'Different structures produce different value', paragraphs: ['Not every community should be judged by the same measures. Some create deep trust among a small number of people; others create access, reach or a shared body of practical knowledge.'], list: ['Close communities: frequent interaction and dense personal trust', 'Broad communities: wider reach with looser individual ties', 'Digital communities: accessible proximity across distance and time', 'Product communities: credibility grounded in shared use and experience'] },
      { heading: 'Real communities overlap', paragraphs: ['A large professional network may contain small groups whose members have worked together for years. A digital product community may develop local relationships, specialist circles and recognised voices. Influence often becomes transferable through these overlapping layers.', 'Useful community strategy therefore starts with observation. Before launching a new platform or programme, identify the networks already surrounding the organisation and understand what participants receive from them.'] },
      { heading: 'Participation cannot be manufactured', paragraphs: ['An organisation can provide a place, useful material and reasons for people to meet. It cannot force trust into existence. When every interaction is transactional or every conversation is steered toward a sale, participants recognise the bargain.', 'An organisation’s role is to create good conditions, contribute real value and leave enough room for relationships to belong to the people in them. Strong architecture supports that agency instead of trying to automate it away.'], quote: 'You can design the conditions for community. You cannot manufacture the relationship.' },
    ]}
  />;
}
