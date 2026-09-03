import { EditorialPage } from '@/components/editorial-page';

export default function SelfHealingSystems() {
  return <EditorialPage
    category="MCAE / Observation"
    title="Self-healing systems: certainty, uncertainty and change"
    intro="Modern MCAE instances rarely fail because features are missing. They fail because assumptions quietly decay while the automation keeps running."
    backHref="/solutions" backLabel="All solutions"
    nextHref="/solutions/ai-orchestration" nextLabel="MCAE and Agentforce"
    sections={[
      { heading: 'The hidden feedback loop', paragraphs: ['Grading, scoring, segmentation and attribution create the fields and decisions that can support a self-healing database. Yet MCAE is often treated as out of sight and out of mind. Gaps in user input compound, marketing performance degrades, and the system begins to reinforce its own failure.'] },
      { heading: 'Gates create a clear decision', paragraphs: ['Breaking the cycle begins with a gate: a rule capable of making an explicit yes-or-no decision. When that gate defines the eligible prospect audience, continued membership becomes conditional.', 'A cascading unsubscribe is one example. If a prospect hard bounces, unsubscribes or loses critical information, dependent dynamic lists remove them automatically—regardless of the programmes they once belonged to.'] },
      { heading: 'A hierarchy of truth', paragraphs: ['Every gate needs a minimum acceptable state and every important attribute needs an identified source of truth. Those sources are not equally reliable or equally relevant, so they must be arranged into a deliberate hierarchy.', 'Changes in Salesforce can then adjust a prospect’s position automatically. The system makes its own state legible: what is known, what is inferred and what remains unresolved.'] },
      { heading: 'Self-healing without assumption', paragraphs: ['AI can play a useful role, but neither Salesforce nor MCAE should make assumptions on behalf of the organisation. Logic should fire from fact and, where appropriate, bounded inference—never concealed uncertainty.', 'Unknowns should be segmented and surfaced for review. Where evidence cannot support a confident outcome, the decision remains human.'] },
      { heading: 'Observation over attribution', paragraphs: ['Attribution only records what it can observe. Tracking protection, shared inboxes and colleague-to-colleague handoffs leave large parts of a buying journey invisible.', 'Proof-of-life signals—deliberate replies, form submissions and tracked clicks—can provide stronger evidence than passive activity. The aim is not perfect visibility, but better-calibrated decisions.'] },
      { heading: 'One underlying architecture', paragraphs: ['A self-healing MCAE environment should not compete with Salesforce. Each platform needs clear ownership of data and logic, with nuance retained where it belongs. Ideally, both are understood as two expressions of the same architecture.'], quote: 'A system can only correct itself when it can recognise that it is misaligned.' },
    ]}
  />;
}
