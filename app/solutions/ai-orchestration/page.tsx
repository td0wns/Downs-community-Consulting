import { EditorialPage } from '@/components/editorial-page';

export const dynamic = 'force-static';

export default function AiOrchestration() {
  return <EditorialPage
    category="MCAE / Orchestration"
    title="Intelligent orchestration: using AI without giving it control"
    intro="AI can recognise patterns across more data than any team can review. Its output becomes commercially useful when teams can see the probability behind it, understand its limits and remain responsible for the decision."
    backHref="/solutions" backLabel="All solutions"
    nextHref="/community" nextLabel="The community approach"
    sections={[
      { heading: 'Intelligence should enter as a signal', paragraphs: ['Einstein or Agentforce may calculate outside MCAE, and their outputs can return as structured fields that inform qualification, segmentation and journey choice. AI then contributes evidence to a campaign decision without becoming the campaign operator.', 'The decision rules stay visible in MCAE, where teams can test, challenge and improve them.'] },
      { heading: 'Facts and estimates need different labels', paragraphs: ['A recorded reply is an observed event. An AI model identifying a familiar conversion pattern is an estimate. Both can support a decision, but they should not be presented as the same kind of truth.', 'A sound orchestration layer records what happened, keeps the model’s estimate separate and acts only when the combined evidence meets a defined level of confidence.'] },
      { heading: 'Disagreement is useful', paragraphs: ['AI is most valuable when it acts as a counterweight to established models and institutional habit. If an AI likelihood score repeatedly identifies prospects that conventional grading overlooks, there may be a pattern worth learning. If it favours noisy behaviour from poor-fit prospects, structural rules should restrain it.', 'Teams bring context that models cannot see, although they cannot examine every data point. The design should make space for disagreement instead of flattening everything into a single answer.'] },
      { heading: 'Guardrails need to be structural', paragraphs: ['A careful prompt is not a governance model. Journeys, decision fields, thresholds, ownership and expiry rules create boundaries that survive individual interactions with AI.'], list: ['Accept output only into defined decision-support fields', 'Keep confidence visible alongside the recommendation', 'Pass signals through existing eligibility and segmentation rules', 'Let probabilistic influence decay when its context expires', 'Escalate consequential or ambiguous decisions to a person'] },
      { heading: 'Calibration is continuous work', paragraphs: ['Teams need a record of what the model suggested, which action followed and whether the outcome justified the confidence placed in it. Their feedback can then improve the next round of orchestration.', 'DCC treats AI as an accelerant. In a controlled ratio, it sharpens responsiveness. If it outruns the data and the rules around it, the result is volatility rather than better judgement.'], quote: 'Good orchestration turns a prediction into action without losing sight of evidence or uncertainty.' },
    ]}
  />;
}
