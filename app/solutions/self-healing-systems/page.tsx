import { EditorialPage } from '@/components/editorial-page';

export const dynamic = 'force-static';

export default function SelfHealingSystems() {
  return <EditorialPage
    category="MCAE / Observation"
    title="Self-healing systems: architecture that can recognise drift"
    intro="Automation keeps doing exactly what it was told, even after the facts have changed. A self-healing system makes that change visible and knows when to correct, exclude or ask for help."
    backHref="/solutions" backLabel="All solutions"
    nextHref="/solutions/ai-orchestration" nextLabel="Intelligent orchestration"
    sections={[
      { heading: 'Drift is usually quiet', paragraphs: ['Most databases do not announce that they have become unreliable. A field is skipped, an old rule remains active, naming conventions loosen and teams compensate with private spreadsheets or memory. Individually, each compromise looks harmless. Together, they change who enters a journey, who reaches sales and which reports people believe.', 'The danger is a feedback loop: weak inputs produce poor decisions, poor decisions reduce confidence and reduced confidence encourages more work outside the system. Self-healing design interrupts that loop at the level of architecture.'] },
      { heading: 'Gates establish the minimum truth', paragraphs: ['A gate is a clear eligibility decision. It defines what must be true before a record can proceed and what must remove it when that truth no longer holds.', 'For example, a hard bounce, unsubscribe or loss of essential information can cascade through dependent audiences automatically. The point is not the specific rule; it is that continued participation remains conditional. Historical membership never outranks present eligibility.'] },
      { heading: 'Not every source deserves equal authority', paragraphs: ['Complex journeys produce several versions of the truth. A salesperson may know where work actually takes place; a contract field may show the legal region; a marketing form may contain an older answer. These facts can differ without all being wrong.', 'DCC defines ownership and a hierarchy for each important decision. The system can then distinguish what is known, what has been inferred and what remains unresolved. A single source of truth becomes a governed decision about authority, not simply whichever field was updated last.'] },
      { heading: 'Unknown is a valid system state', paragraphs: ['Rigid automation often forces incomplete information into yes or no. A self-healing design preserves a third state: not known. It can route the record for review, request better evidence or withhold an action until a threshold is met.', 'This is a practical form of restraint. The platform corrects what the rules can safely correct and makes the rest visible to the people with the context to decide.'] },
      { heading: 'Look for proof of life', paragraphs: ['Tracking protection, shared inboxes and offline conversations leave parts of every journey unobserved. Rather than treating absence of tracking as absence of interest, the system can seek stronger proof-of-life signals such as a deliberate reply, form submission or meaningful click.', 'The objective is not perfect surveillance. It is a more honest account of what the organisation knows before it suppresses, prioritises or reclassifies a person.'] },
      { heading: 'Salesforce and MCAE need shared boundaries', paragraphs: ['A self-healing MCAE environment should not fight Salesforce for control. Each platform needs explicit ownership of data and logic, while useful nuance remains available to the teams that need it.', 'Seen together, Salesforce supplies durable commercial context and MCAE continually observes whether people still meet the conditions placed around them. Correction becomes an ordinary property of the system, not a periodic clean-up project.'], quote: 'A system can only recover alignment when it is designed to notice that alignment has been lost.' },
    ]}
  />;
}
