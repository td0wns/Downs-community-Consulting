import { EditorialPage } from '@/components/editorial-page';

export const dynamic = 'force-static';

export default function CommunicationInfrastructure() {
  return <EditorialPage
    category="Community / Volume 01"
    title="Communication infrastructure: how trust changes what people hear"
    intro="Marketing can place information in front of an audience. Community shapes whether that information is believed, repeated and acted upon."
    backHref="/community" backLabel="The community approach"
    nextHref="/community/architecture" nextLabel="The architecture of community"
    sections={[
      { heading: 'Community is often placed in the wrong box', paragraphs: ['Organisations frequently treat community as an events programme, a social channel or a group of enthusiastic customers. Those can all be expressions of community, but none explains its strategic value.', 'For DCC, a community is a network in which people exchange information and existing trust changes their receptivity to it. That definition makes community relevant well beyond promotion: it affects internal change, customer confidence, partner behaviour and the adoption of new ideas.'] },
      { heading: 'Information and belief travel differently', paragraphs: ['A campaign distributes a message from an organisation to an individual. Inside a community, that message is interpreted through shared experience and discussed by people who already have relationships with one another.', 'The same network can validate a useful message or spread a poor experience just as quickly. Familiarity and peer validation change how people receive the information.'], quote: 'Marketing creates a touchpoint. Trust determines how much weight that touchpoint carries.' },
      { heading: 'The same mechanism operates inside and outside', paragraphs: ['Employees, leaders, suppliers and delivery partners form internal networks. Customers, prospects, professional peers and advocates form external ones. In both cases, informal conversation often moves faster than the formal communication designed to direct it.', 'A sound strategy therefore asks who already carries credibility, where people compare experience and which relationships influence the next decision. Those questions improve both communication planning and the systems used to record its outcomes.'] },
      { heading: 'Why this matters to Salesforce architecture', paragraphs: ['A platform sees fields, activities and object relationships. People experience reputation, memory and the opinions of others. Neither view is sufficient alone.', 'Community thinking helps DCC identify the context that deserves a structured signal: a trusted referral, activity elsewhere in an account, a partner relationship or an internal hand-off. The point is to represent consequential interactions without trying to digitise every human exchange.'] },
    ]}
  />;
}
