import { EditorialPage } from '@/components/editorial-page';

export default function CommunicationInfrastructure() {
  return <EditorialPage
    category="Community / Volume 01"
    title="Community as communication infrastructure"
    intro="Community is not a marketing tactic. It is the oldest and most resilient communication infrastructure humanity has produced."
    backHref="/community" backLabel="The community approach"
    nextHref="/community/architecture" nextLabel="The architecture of community"
    sections={[
      { heading: 'The strategic misunderstanding', paragraphs: ['Community programmes are often isolated within marketing or events. This understates their value and limits their organisational impact.', 'In practical terms, a community is a group of people who exchange information freely, where trust within the group increases receptivity to those ideas.'] },
      { heading: 'Trust is the transmission layer', paragraphs: ['Marketing channels distribute information. Communities transmit belief. Traditional marketing persuades from the outside; community communication is validated internally through relationships and shared experience.'], quote: 'Community-driven growth is not the absence of strategy. It is the presence of trusted transmission.' },
      { heading: 'Internal and external communities', paragraphs: ['Employees, partners and collaborators form internal communities that can accelerate change. Clients, enthusiasts, peers and user groups form external communities that amplify reputation and advocacy.', 'Both operate through the same mechanism: trust improves the movement and adoption of ideas.'] },
      { heading: 'Infrastructure, not promotion', paragraphs: ['Once community is recognised as infrastructure, the question changes. Instead of asking how a community can promote a product, organisations can ask how it shapes the environment in which ideas spread.', 'The strongest organisations do not simply market to communities. They build systems in which communities become durable drivers of influence.'] },
    ]}
  />;
}
