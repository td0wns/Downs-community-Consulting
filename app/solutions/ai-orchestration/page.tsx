import { EditorialPage } from '@/components/editorial-page';

export default function AiOrchestration() {
  return <EditorialPage
    category="MCAE / Orchestration"
    title="Intelligent orchestration: guardrails for AI-driven revenue systems"
    intro="AI becomes useful when it is treated as a governed intelligence signal—not when it is granted unbounded authority over the system."
    backHref="/solutions" backLabel="All solutions"
    nextHref="/community" nextLabel="The community approach"
    sections={[
      { heading: 'From enhancement to orchestration', paragraphs: ['When MCAE functions as the observation layer, signals from Einstein or Agentforce can return as structured, synchronised fields. They can inform segmentation, scoring, grading and journey routing without operating campaigns directly.', 'Intelligence becomes distributed, but orchestration remains governed within MCAE.'] },
      { heading: 'Observed fact and statistical probability', paragraphs: ['Traditional attribution remains defensible because it records observable interaction. AI adds a probabilistic layer by identifying recurring patterns across successful outcomes.', 'The mistake is allowing probability to replace observation. Recorded behaviour establishes fact. AI estimates likelihood. MCAE orchestrates according to calibrated confidence.'] },
      { heading: 'A counterweight, not a replacement', paragraphs: ['Einstein Lead Scoring can complement profile grading. Disagreement between traditional models and AI is useful: it exposes the blind spots of both.', 'Human teams carry context but are limited in scale. AI processes scale but struggles with nuance. The productive architecture makes that tension visible.'] },
      { heading: 'Guardrails, not prompts', paragraphs: ['Journeys, segments, thresholds and profile hierarchies provide durable boundaries. AI output should enter through controlled fields, degrade over time and require sufficient confidence before triggering automation.'], list: ['Limit output to defined decision-support fields', 'Route signals through segmentation logic', 'Apply degradation to probabilistic signals', 'Require confidence thresholds before action'] },
      { heading: 'The accelerant principle', paragraphs: ['Data is the fuel of the revenue engine. AI is an accelerant. In controlled ratios it improves responsiveness; without calibration it creates volatility.', 'Blocking AI is defensive. Governing AI is architectural.'], quote: 'Acceleration without governance produces instability. Governed acceleration produces advantage.' },
    ]}
  />;
}
