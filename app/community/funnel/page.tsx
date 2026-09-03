import { EditorialPage } from '@/components/editorial-page';

export const dynamic = 'force-static';

export default function CommunityFunnel() {
  return <EditorialPage
    category="Community / Volume 03"
    title="The five stages of the community funnel"
    intro="Traditional funnels measure a path to purchase. A community funnel tracks the formation of relationships—and the transition from attention to advocacy."
    backHref="/community" backLabel="The community approach"
    nextHref="/about" nextLabel="About DCC"
    sections={[
      { heading: 'From awareness to advocacy', paragraphs: ['Awareness begins with recognition. Interaction is the first meaningful contact. Engagement is a voluntary decision to participate. Buy-in represents commitment. Advocacy turns that commitment outward into credible recommendation.'], list: ['Awareness — recognising the community', 'Interaction — making first contact', 'Engagement — choosing to participate', 'Buy-in — committing to the relationship', 'Advocacy — extending trust into new networks'] },
      { heading: 'Shared trust reduces friction', paragraphs: ['In a conventional funnel, each prospect accumulates confidence through individual touchpoints. Within a trusted community, members can transfer confidence to one another by making positive experience visible.', 'The community performs credibility-building work that marketing would otherwise need to manufacture repeatedly.'] },
      { heading: 'The advocate flywheel', paragraphs: ['Advocates recommend an organisation because they believe in it, not because they have been instructed to promote it. That independence gives their influence credibility.', 'As new participants arrive through advocacy, some eventually become advocates themselves. The funnel becomes a self-reinforcing flywheel.'] },
      { heading: 'Sustainable growth infrastructure', paragraphs: ['The community funnel complements rather than replaces traditional marketing. Marketing attracts attention; community sustains belief. Together they create stronger retention, more credible recommendations and more resilient growth.'], quote: 'Relationships, cultivated intentionally, remain the most durable driver of business growth.' },
    ]}
  />;
}
