import { EditorialPage } from '@/components/editorial-page';

export const dynamic = 'force-static';

export default function CommunityFunnel() {
  return <EditorialPage
    category="Community / Volume 03"
    title="The community funnel: from recognition to advocacy"
    intro="A conventional funnel tracks movement towards a transaction. The community funnel tracks how familiarity, participation and shared trust grow over time."
    backHref="/community" backLabel="The community approach"
    nextHref="/about" nextLabel="About DCC"
    sections={[
      { heading: 'Five changes in the relationship', paragraphs: ['The stages are not a rigid checklist. They describe an increasing willingness to take part and help an organisation notice when it is asking for commitment before enough familiarity exists.'], list: ['Awareness: I recognise that this network exists', 'Interaction: I make a first meaningful contact', 'Engagement: I choose to take part again', 'Buy-in: I invest trust, time or identity in the relationship', 'Advocacy: I carry that confidence into another network'] },
      { heading: 'People can share touchpoints', paragraphs: ['In an individual journey, confidence must be built through repeated contact between the organisation and the prospect. Within a community, participants also learn from one another. One person’s credible experience can answer a question or reduce uncertainty for someone else.', 'Trust is not simply transferred like a data field, and no organisation owns it. But familiarity and evidence can travel through relationships, reducing the number of corporate touchpoints required to establish confidence.'] },
      { heading: 'Advocacy has value because it is voluntary', paragraphs: ['An advocate is persuasive precisely because the recommendation is recognisably their own. Over-script the message or reward it too aggressively and the relationship begins to resemble advertising.', 'Healthy advocacy gives new people a trusted route into awareness and interaction. Some later build enough experience to advocate in turn, creating a flywheel sustained by useful participation rather than promotional pressure.'] },
      { heading: 'Use the model as a diagnostic', paragraphs: ['The funnel can expose where a community experience is weak. High awareness with little interaction may indicate that the invitation lacks relevance. Repeated interaction without buy-in may point to poor delivery, unclear shared value or insufficient trust.', 'The community funnel sits alongside the commercial funnel. Marketing can create attention and Salesforce can record progression; the community lens explains how relationships alter the confidence behind that movement.'], quote: 'The strongest journey is not the one with the most touchpoints. It is the one in which each touchpoint has earned its weight.' },
    ]}
  />;
}
