import { EditorialPage } from '@/components/editorial-page';

export const dynamic = 'force-static';

export default function SelfHealingSystems() {
  return <EditorialPage
    category="MCAE / Observation"
    title="Self-healing systems: architecture that can recognise drift"
    intro="Automation can keep following its instructions after the facts have changed. A self-healing system notices the change and knows when to correct a record, exclude it or ask for help."
    backHref="/solutions" backLabel="All solutions"
    nextHref="/solutions/ai-orchestration" nextLabel="Intelligent orchestration"
    sections={[
      { heading: 'Drift is usually quiet', paragraphs: ['Most databases do not announce that they have become unreliable. A skipped field, outdated rule or loosening naming convention may seem harmless, especially when teams can compensate with a private spreadsheet or memory. Over time, those workarounds change who enters a journey, who reaches sales and which reports people believe.', 'That creates a damaging feedback loop. Weak inputs lead to poor decisions, confidence falls and more work moves outside the system. Self-healing design breaks the loop by dealing with its source.'] },
      { heading: 'Gates establish the minimum truth', paragraphs: ['A gate is a clear eligibility decision. It defines what must be true before a record can proceed and what should remove it when that truth no longer holds.', 'For example, a hard bounce, unsubscribe or loss of essential information can remove someone from every dependent audience automatically. Continued participation remains conditional, so historical membership never outranks present eligibility.'] },
      { heading: 'Not every source deserves equal authority', paragraphs: ['Complex journeys produce several versions of the truth. A salesperson may know where work actually takes place; a contract field may show the legal region; a marketing form may contain an older answer. These facts can differ without all being wrong.', 'DCC assigns ownership and an order of authority for each important decision. The system can then distinguish what is known, what has been inferred and what remains unresolved. The single source of truth is chosen deliberately instead of defaulting to whichever field was updated last.'] },
      { heading: 'Unknown is a valid system state', paragraphs: ['Rigid automation often forces incomplete information into yes or no. A self-healing design preserves a third state: not known. It can route the record for review, request better evidence or withhold an action until a threshold is met.', 'That restraint is useful. The platform corrects what the rules can safely address and makes the rest visible to the people with enough context to decide.'] },
      { heading: 'Look for proof of life', paragraphs: ['Tracking protection, shared inboxes and offline conversations leave parts of every journey unobserved. Some apparent inactivity is simply activity the system could not see. A deliberate reply, form submission or meaningful click provides stronger proof of life.', 'The result is a more honest account of what the organisation knows before it suppresses, prioritises or reclassifies a person.'] },
      { heading: 'Salesforce and MCAE need shared boundaries', paragraphs: ['A self-healing MCAE environment should not fight Salesforce for control. Each platform needs clear ownership of data and logic, while useful detail remains available to the teams that need it.', 'Salesforce supplies durable commercial context, while MCAE checks whether people still meet the conditions placed around them. Correction becomes part of the system’s routine operation instead of a periodic clean-up project.'], quote: 'Recovery starts with noticing the drift.' },
    ]}
  />;
}
