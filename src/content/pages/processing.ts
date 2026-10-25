import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'processing',
  group: 'apply',
  order: 50,
  tool: { kind: 'frise:processing' },
  mini: { kind: 'mini:decide' },
  related: ['aftertest', 'application', 'travel', 'ceremony', 'descent', 'certificate'],
  sources: ['au_processing', 'au_ceremony_wait', 'au_pr', 'au_descent'],
  en: {
    slug: 'citizenship-processing-times',
    nav: 'Processing times',
    card: 'The official percentiles for decisions, ceremonies, descent and certificates, read month by month.',
    title: 'Citizenship Processing Time 2026: Decision and Ceremony',
    description: 'Australian citizenship processing times in 2026: the official 25%, 50%, 75% and 90% figures for decisions and ceremonies, descent, certificates and the backlog.',
    h1: 'Australian citizenship processing times',
    intro: 'Enter the day you lodged: the timeline places the decision, the ceremony wait and the pledge on the official times, with today marked.',
    resume: (h) => `On the Home Affairs processing times page updated ${h.date(h.PT.pageUpdated)}, half of citizenship by conferral applications were decided within ${h.PT.table.decision.p50} and 90% within ${h.PT.table.decision.p90}. After approval, half of new citizens reached their ceremony within ${h.PT.table.approvalToCeremony.p50} and 90% within ${h.PT.table.approvalToCeremony.p90}. Counted from the day of application to the ceremony, the figures were ${h.PT.table.applicationToCeremony.p50} for half of applicants and ${h.PT.table.applicationToCeremony.p90} for 90%. Citizenship by descent took ${h.PT.table.descentDecision.p50} for half of decisions and ${h.PT.table.descentDecision.p90} for 90%, and evidence of citizenship ${h.PT.table.evidenceDecision.p90} for 90%. On ${h.date(h.PT.onHandDate)} the department held ${h.num(h.PT.onHand.conferral)} conferral applications and received ${h.num(h.PT.received.conferral)} more in ${h.PT.receivedMonth}. These are past results, not a promise: the older figure of ${h.B.prPageP90} for 90% still shown on the permanent resident page is superseded by this table, and a single file can take longer if documents are missing or checks with other agencies are slow.`,
    faqs: (h) => [
      { q: 'Why does the permanent resident page give longer times than the processing table?', a: `The permanent resident page still says 75% of applications take ${h.B.prPageP75} and 90% take ${h.B.prPageP90} from lodging to ceremony. The dedicated processing page, updated ${h.date(h.PT.pageUpdated)}, gives ${h.PT.table.applicationToCeremony.p75} and ${h.PT.table.applicationToCeremony.p90} for the same span. The processing page is the newer and more detailed source, so this site follows it.` },
      { q: 'Can I ask Home Affairs about my application if it is within the published times?', a: 'The department says that if your application is within the advertised processing times, there is no further information it can provide at that stage. If you applied online, ImmiAccount shows how far your application has progressed. Contacting the department makes more sense once you are past the 90% figure, or if your circumstances have changed.' },
      { q: 'Does a refused or withdrawn application count in the decision times?', a: 'Yes. Home Affairs explains that a decision in its table includes applications approved, refused, withdrawn and those that cannot be considered because they are invalid. Quick withdrawals and invalid applications can pull the early percentiles down, so the 25% figure is a less reliable guide for a complete, valid file than the 50% and 75% figures.' },
      { q: 'How long until my certificate arrives if I do not need a ceremony?', a: `Home Affairs posts certificates after approval for descent, adoption, resumption, evidence applications and conferral without a ceremony. In Australia, allow about ${h.PT.postageWeeksInAustralia} extra weeks for printing and registered post. Outside Australia without an Australian postal address, it can take about ${h.PT.postageWeeksOverseas} weeks, so give an Australian address before the file is finalised if you can.` },
    ],
    body: (h) => `
<h2>The official table</h2>
<p>Home Affairs publishes percentiles, not averages. Each figure is the time within which a share of the applications finalised in the reporting month were processed. The table below reproduces the ${h.src('au_processing', 'processing times page')} updated on ${h.date(h.PT.pageUpdated)}.</p>
${h.table(['Application and period', '25%', '50%', '75%', '90%'], [
  ['Conferral: application to decision', h.PT.table.decision.p25, h.PT.table.decision.p50, h.PT.table.decision.p75, h.PT.table.decision.p90],
  ['Conferral: approval to ceremony', h.PT.table.approvalToCeremony.p25, h.PT.table.approvalToCeremony.p50, h.PT.table.approvalToCeremony.p75, h.PT.table.approvalToCeremony.p90],
  ['Conferral: application to ceremony', h.PT.table.applicationToCeremony.p25, h.PT.table.applicationToCeremony.p50, h.PT.table.applicationToCeremony.p75, h.PT.table.applicationToCeremony.p90],
  ['Descent: application to decision', h.PT.table.descentDecision.p25, h.PT.table.descentDecision.p50, h.PT.table.descentDecision.p75, h.PT.table.descentDecision.p90],
  ['Evidence of citizenship: application to decision', h.PT.table.evidenceDecision.p25, h.PT.table.evidenceDecision.p50, h.PT.table.evidenceDecision.p75, h.PT.table.evidenceDecision.p90],
], `Home Affairs, citizenship processing times, updated ${h.date(h.PT.pageUpdated)}. Conferral covers general eligibility and other situations.`, ['l', 'r', 'r', 'r', 'r'])}
<h2>How to read a percentile</h2>
<p>Home Affairs gives its own reading: at the 25th percentile, 24 applications in every 100 took less than the figure shown; at the 50th, 49 in 100; at the 75th, 74 in 100; at the 90th, 89 in 100. In plain terms, the 90% column is the time by which almost every applicant had an answer, and one in ten waited longer. The first tool on this page places your own wait in one of these bands from the number of weeks since you lodged.</p>
<p>Two details change how the conferral figures should be used. A decision includes refusals, withdrawals and invalid applications, which tend to be quick. And the conferral rows include applications for which, in the reporting month, either a decision was reached or someone on the application became a citizen at a ceremony. The table is a snapshot of the past month, not a queue position.</p>
<h2>Decision, then ceremony</h2>
<p>For citizenship by conferral the wait has two stages. The first runs from lodging to the decision and includes the test or interview appointment, identity checks and character checks. The second runs from approval to the ceremony, where you make the pledge and become a citizen. The second stage depends mostly on your local council, because councils organise most ceremonies and your residential address decides which one you attend. The ${h.src('au_ceremony_wait', 'ceremony wait times page')} gives figures by council, counted from approval to ${h.date(h.PT.onHandDate)}. The invitation arrives about ${h.R.invitationWeeksAhead} weeks before the date, and the ${h.a('aftertest', 'page on the steps after the test')} follows that stage closely.</p>
<h2>Applications on hand and received</h2>
${h.table(['Application type', `On hand, ${h.date(h.PT.onHandDate)}`, `Received in ${h.PT.receivedMonth}`], [['Conferral (general eligibility and other situations)', h.PT.onHand.conferral, h.PT.received.conferral], ['Descent', h.PT.onHand.descent, h.PT.received.descent], ['Evidence of citizenship', h.PT.onHand.evidence, h.PT.received.evidence]], 'Conferral counts include children aged 15 or younger on a parent’s application. Figures come from a live system and may be revised slightly.', ['l', 'r', 'r'])}
<p>The ratio between the two columns gives a feel for the pipeline. With ${h.num(h.PT.onHand.conferral)} conferral applications on hand against ${h.num(h.PT.received.conferral)} received in a single month, the stock equalled about ${h.num(h.PT.onHand.conferral / h.PT.received.conferral, 1)} months of intake. For descent, ${h.num(h.PT.onHand.descent)} on hand against ${h.num(h.PT.received.descent)} received gives about ${h.num(h.PT.onHand.descent / h.PT.received.descent, 1)} months. Evidence of citizenship moves fastest: more applications arrived in the month (${h.num(h.PT.received.evidence)}) than were waiting at its end (${h.num(h.PT.onHand.evidence)}).</p>
<h2>Older figures still online</h2>
<p>Several Home Affairs pages carry older summaries. The ${h.src('au_pr', 'permanent resident page')} says 75% of applications are processed in ${h.B.prPageP75} and 90% in ${h.B.prPageP90} from lodging to ceremony, and that the ceremony is held within ${h.PT.ceremony90pct}. The ${h.src('au_descent', 'citizenship by descent page')} says 75% within ${h.B.descentPageP75} and 90% within ${h.B.descentPageP90}. Both are superseded by the processing table, which at its last update gave ${h.PT.table.applicationToCeremony.p90} for 90% of conferral applicants from lodging to ceremony and ${h.PT.table.descentDecision.p90} for 90% of descent decisions. The summary at the top of the processing page itself agrees with the table: 90% of conferral applications processed within ${h.PT.conferral90pct}, and 90% of approved applicants offered a ceremony within ${h.PT.ceremony90pct}.</p>
<h2>What slows a file down</h2>
<p>Home Affairs names four factors: whether the application is complete with all supporting documents, how promptly you answer requests for more information, the time it takes to check what you provided, and the time other agencies take, usually for character and national security checks. Three of the four are partly in your hands:</p>
<ul>
<li>attach every document before lodging, including English translations, and keep identity papers consistent from birth to today (the ${h.a('documents', 'documents page')} lists them);</li>
<li>answer any request quickly and in full, through ImmiAccount if you applied online;</li>
<li>report changes of address, name or contact details, since a ceremony invitation follows your residential address;</li>
<li>pay the correct fee: the department cannot process an application without it and may return the file.</li>
</ul>
<p>Some delays come from you after approval: missing a ceremony leads to a non-attendance letter and a wait for the next available place. Travel during processing is allowed, but most conferral applications cannot be approved while the applicant is overseas, as the ${h.a('travel', 'page on travelling while you wait')} explains.</p>
<h2>Applying from outside Australia</h2>
<p>Applications lodged from overseas take longer because of postage, and conferral applicants are invited to sit the test after returning to Australia, save in exceptional cases. For certificates sent by post, allow about ${h.PT.postageWeeksInAustralia} weeks of printing and registered post inside Australia and about ${h.PT.postageWeeksOverseas} weeks to an overseas address.</p>
<h2>Using the estimate wisely</h2>
<p>The second tool turns the month you applied into the months by which a quarter, half, three quarters and nine in ten of recent decisions were made. Treat it as a planning aid for leave, travel or a passport application, never as a date. If you are still waiting past the 90% mark, check ImmiAccount, confirm Home Affairs has your current details and answer any pending request; until then, the department says it has nothing more to add. Once approved, the ${h.a('ceremony', 'ceremony page')} explains the day itself and the ${h.a('certificate', 'certificate page')} what to do if your certificate has an error.</p>`,
  },
});
