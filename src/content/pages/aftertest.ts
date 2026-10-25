import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'aftertest',
  group: 'apply',
  order: 90,
  tool: { kind: 'mini:aftertest' },
  mini: { kind: 'mini:pledge' },
  related: ['ceremony', 'processing', 'pledge', 'travel', 'certificate', 'after'],
  sources: ['au_test', 'au_processing', 'au_ceremony_wait', 'au_ceremony', 'au_pr'],
  en: {
    slug: 'after-the-citizenship-test',
    nav: 'After the test',
    card: 'From a pass on screen to the pledge: approval letter, council invitation, wait times and deadlines.',
    title: 'After the Citizenship Test 2026: Approval to Ceremony Times',
    description: 'After the citizenship test: what happens once you pass, how approval is notified, ceremony waits by council, 4-week invitation and 12-month pledge deadline.',
    h1: 'After the citizenship test: from a pass to the ceremony',
    intro: 'Enter the month you passed to see when most approved applicants reach their ceremony, then follow each stage that comes after the test room.',
    resume: (h) => `After the citizenship test, a pass shows on the screen straight away and Home Affairs carries on processing the rest of your application, including character and security checks; it writes to you if it needs more information and again when it decides. If you are approved and applied at ${h.B.ceremonyAttendFromAge} or over, you become a citizen only at a ceremony, usually held by the local council for your residential address, which you cannot choose. The invitation arrives about ${h.R.invitationWeeksAhead} weeks before the date. In the Home Affairs table updated on ${h.date(h.PT.pageUpdated)}, a quarter of approved applicants reached their ceremony within ${h.PT.table.approvalToCeremony.p25} of approval, half within ${h.PT.table.approvalToCeremony.p50}, and nine in ten within ${h.PT.table.approvalToCeremony.p90}; counted from lodging, half took ${h.PT.table.applicationToCeremony.p50}. The pledge must be made within ${h.R.pledgeWithinMonths} months of approval or the approval may be cancelled. A failed test leads instead to a new appointment at no cost, with a possible refusal after ${h.T.appointmentsBeforeRefusal} appointments without a pass.`,
    faqs: (h) => [
      { q: 'How will I know my citizenship application has been approved?', a: 'Home Affairs writes to you when it makes a decision. Online applicants can also follow progress in ImmiAccount. The approval letter is not the end: if you need to attend a ceremony, a separate invitation follows from your council or the department, about four weeks before the event, giving the date, time and place.' },
      { q: 'Why do ceremony waits differ so much between councils?', a: `Home Affairs says the wait depends on demand in your local government area, and that having family members linked to your application may also affect it. Ceremonies are organised mostly by councils, each with its own calendar. The department publishes a search by council showing approved applicants and wait times, calculated from approval to ${h.date(h.PT.onHandDate)}.` },
      { q: 'Am I a citizen once I pass the test?', a: 'No. Passing meets the knowledge and language requirements, but the department still has to decide the whole application. Even after approval, applicants who applied at 16 or over become citizens only when they make the pledge at a ceremony. Those not required to attend become citizens on approval and receive their certificate by registered post.' },
    ],
    body: (h) => `
<h2>Stage by stage after the test</h2>
${h.table(['Stage', 'What happens', 'Typical timing'], [
  ['Test result', 'shown on screen at the end', 'immediately'],
  ['Remaining checks', 'character, security, any extra documents', `half of decisions within ${h.PT.table.decision.p50} of lodging`],
  ['Decision', 'approval or refusal in writing', `nine in ten within ${h.PT.table.decision.p90} of lodging`],
  ['Invitation', 'letter from council or Home Affairs', `about ${h.R.invitationWeeksAhead} weeks before the ceremony`],
  ['Ceremony', 'pledge, then certificate', `half within ${h.PT.table.approvalToCeremony.p50} of approval`],
  ['Deadline', 'pledge made', `within ${h.R.pledgeWithinMonths} months of approval`],
], 'Home Affairs processing table, updated ' + h.date(h.PT.pageUpdated) + ', and permanent resident page.', ['l', 'l', 'l'])}
<h2>Between the pass and the decision</h2>
<p>A pass meets two requirements at once: knowledge of Australia and basic English. It does not settle the rest. Home Affairs keeps checking identity, good character and national security, and it may ask for extra or original documents. Answer quickly, since the department names slow replies among the causes of delay, and report any change of name, address or contact details. If the test was close to the end of processing, the decision can follow soon after; the ${h.a('processing', 'processing times page')} shows how decisions are spread.</p>
<h2>If you did not pass</h2>
<p>Failing does not affect your permanent visa. The department books another appointment and there is nothing extra to pay. The risk is cumulative: after ${h.T.appointmentsBeforeRefusal} appointments without a pass, it may refuse the application. Use the time on the part of Our Common Bond that cost you points, and train with the ${h.a('mock', 'timed mock test')}.</p>
<h2>The invitation and your council</h2>
<p>Ceremonies are usually organised by local government councils, and which one you attend is set by your current residential address. You cannot pick the date or place. The invitation, from your council or Home Affairs, comes about ${h.R.invitationWeeksAhead} weeks ahead and states whether you can bring guests. Waits vary with local demand; the ${h.src('au_ceremony_wait', 'ceremony wait times search')} gives figures for each council, calculated from approval to ${h.date(h.PT.onHandDate)}. Moving house after approval can change the council, so tell the department.</p>
<h2>The pledge deadline</h2>
<p>You must make the pledge of commitment within ${h.R.pledgeWithinMonths} months of approval. If you do not attend a ceremony in that time and cannot give an acceptable reason, supported by evidence, the approval may be cancelled. Missing one ceremony is not fatal: you receive a non-attendance letter and later a new invitation, without needing to contact anyone, but places are limited. The panel under the summary gives the month your deadline falls in. Plan any travel with this in mind, as the ${h.a('travel', 'travel page')} explains.</p>
<h2>Who skips the ceremony</h2>
<p>Children under 16 on a parent's application become citizens at the same time as the parent and may make the pledge if they wish. People assessed as having a permanent or enduring incapacity, and a few other groups set out on the ${h.src('au_ceremony', 'ceremony page')}, are not required to attend. They become citizens on approval and receive the certificate by registered post; Home Affairs suggests allowing about ${h.PT.postageWeeksInAustralia} weeks for printing and postage in Australia.</p>
<h2>On the day and after</h2>
<p>Allow at least ${h.M.ceremonyAllowHours} hours; the ceremony itself takes about ${h.M.ceremonyLengthHours}. Bring the invitation and photo identification. You become a citizen when you make the pledge, and the certificate is handed over or posted. Only then can you apply for an Australian passport, and if you are 18 or over you must enrol to vote. The ${h.a('ceremony', 'ceremony guide')}, the ${h.a('pledge', 'pledge wording')} and the ${h.a('after', 'first steps as a citizen')} cover each part.</p>`,
  },
});
