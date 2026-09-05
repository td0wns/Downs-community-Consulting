import { EditorialPage } from '@/components/editorial-page';

export const dynamic = 'force-static';

export default function AiOrchestration() {
  return <EditorialPage
    category="MCAE / Orchestration"
    title="Intelligent orchestration: giving AI influence without surrendering control"
    intro="AI can recognise patterns at a scale no team can match. Its output becomes commercially useful when probability is visible, authority is bounded and people remain responsible for judgement."
    backHref="/solutions" backLabel="All solutions"
    nextHref="/community" nextLabel="The community approach"
    sections={[
      { heading: 'Intelligence should enter as a signal', paragraphs: ['Einstein or Agentforce may calculate outside MCAE, but their outputs can return as structured fields that inform qualification, segmentation and journey choice. This preserves an important boundary: AI contributes evidence; it does not quietly become the campaign operator.', 'The organisation gains distributed intelligence while the rules for action remain visible in the orchestration layer. That makes AI easier to test, challenge and improve.'] },
      { heading: 'Fact and probability are different materials', paragraphs: ['A recorded reply is an observed event. An AI model identifying a familiar conversion pattern is an estimate. Both can support a decision, but they should never be presented as the same kind of truth.', 'Good orchestration layers them deliberately. Observed behaviour establishes what happened. AI estimates what may follow. MCAE acts only when the combined evidence meets a defined level of confidence.'] },
      { heading: 'Disagreement is useful', paragraphs: ['AI is most valuable when it acts as a counterweight to established models and institutional habit. If an AI likelihood score repeatedly identifies prospects that conventional grading overlooks, there may be a pattern worth learning. If it favours noisy behaviour from poor-fit prospects, structural rules should restrain it.', 'People hold context but cannot examine every data point. Models process scale but do not understand every circumstance. The architecture should preserve that tension instead of hiding it behind a single answer.'] },
      { heading: 'Guardrails need to be structural', paragraphs: ['A careful prompt is not a governance model. Journeys, decision fields, thresholds, ownership and expiry rules create boundaries that survive individual interactions with AI.'], list: ['Accept output only into defined decision-support fields', 'Keep confidence visible alongside the recommendation', 'Pass signals through existing eligibility and segmentation rules', 'Let probabilistic influence decay when its context expires', 'Escalate consequential or ambiguous decisions to a person'] },
      { heading: 'Calibration is continuous work', paragraphs: ['Teams should be able to see what the model suggested, what action followed and whether the outcome justified the confidence placed in it. Their feedback then improves the next round of orchestration.', 'DCC treats AI as an accelerant. Added in a controlled ratio, it sharpens responsiveness. Allowed to outrun the data and the governance around it, it increases volatility rather than intelligence.'], quote: 'Prediction identifies readiness. Observation protects integrity. Orchestration converts governed intelligence into action.' },
    ]}
  />;
}
