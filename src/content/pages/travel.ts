import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'travel',
  group: 'apply',
  order: 80,
  tool: { kind: 'mini:travel' },
  mini: { kind: 'mini:budget' },
  related: ['residence', 'processing', 'aftertest', 'ceremony', 'nz'],
  sources: ['au_pr', 'au_ceremony', 'au_test'],
  en: {
    slug: 'travel-while-waiting',
    nav: 'Travel while waiting',
    card: 'Trips abroad after you apply: approval, test appointments, the ceremony invitation and your return visa.',
    title: 'Travel While Citizenship Is Processed: 2026 Rules and Risks',
    description: 'Travel while your Australian citizenship application is processed: no approval abroad, tell Home Affairs first, hold a return visa, and protect the ceremony.',
    h1: 'Travelling while your citizenship application is being processed',
    intro: 'Enter the length of the trip to see its effect, then check the four things to settle before you book.',
    resume: (h) => `You can travel while your Australian citizenship application is being processed, but in most cases Home Affairs cannot approve the application while you are outside Australia, so a long trip can hold up the decision. The exceptions are applicants who met a special residence requirement and those helped by the spouse or interdependent partner discretion. Before you leave, tell the department through the travel section of its After you apply page, make sure your passport is valid, and check that your permanent visa still lets you re-enter; if its travel facility has expired or is about to, apply for a Resident Return visa. Until the ceremony you travel on your current passport, not an Australian one. After approval, you must make the pledge within ${h.R.pledgeWithinMonths} months or the approval may be cancelled, and a ceremony invitation, sent about ${h.R.invitationWeeksAhead} weeks ahead, can arrive for a date when you are away, leading to a non-attendance letter and a wait for the next place. Trips taken before you apply count against the absence limits of ${h.R.maxAbsenceDays} and ${h.R.maxAbsenceLast12m} days.`,
    faqs: (h) => [
      { q: 'Does a trip after I apply count against the 90-day absence limit?', a: `The residence requirement is set out as conditions you must meet "when you apply", measured over the ${h.R.lawfulYears} years and the 12 months immediately before the day you apply. Travel after lodging therefore does not enter that calculation. It can still matter in other ways: approval cannot normally happen while you are abroad, and long absences bear on whether you keep a close and continuing link with Australia.` },
      { q: 'Can I sit the citizenship test at an embassy while I am overseas?', a: 'Only in exceptional circumstances. Home Affairs says that if you lodge from outside Australia, it will invite you to a test appointment after you return, and in exceptional circumstances may arrange one at an Australian embassy or consulate. If you applied in Australia, your appointment is in Australia, so a trip that covers the appointment date means rescheduling as your letter explains.' },
      { q: 'What happens if my ceremony invitation arrives while I am abroad?', a: `Home Affairs says this can happen even after you have told it about your travel. You may receive a non-attendance letter, then a further invitation to the next available ceremony; you do not need to contact the department. Places are limited, so the wait can be long, and the pledge must still be made within ${h.R.pledgeWithinMonths} months of approval unless you have an acceptable reason.` },
    ],
    body: (h) => `
<h2>Four checks before you book</h2>
${h.table(['Check', 'Why'], [
  ['Tell Home Affairs', 'it asks to be told of travel plans while it processes the application or before the ceremony'],
  ['Valid passport', 'you travel on your current passport until you are a citizen'],
  ['Right to return', 'a permanent visa’s travel facility can expire; a Resident Return visa restores it'],
  ['Dates of appointments and approval', 'approval cannot normally happen abroad; test appointments are in Australia'],
], 'From the Home Affairs permanent resident and ceremony pages.', ['l', 'l'])}
<h2>Approval needs you in Australia</h2>
<p>For applications based on general eligibility, on an incapacity, or on being 60 or over or having a hearing, speech or sight impairment, the department must not approve while you are outside Australia. Two groups escape this: applicants who met one of the special residence requirements, and applicants for whom the spouse or interdependent partner discretion was applied. For everyone else, a trip that overlaps the decision simply moves the decision to after your return. With half of recent conferral decisions made within ${h.PT.table.decision.p50} of lodging, the weeks right after applying are the most sensitive. The ${h.a('processing', 'processing times page')} has the full table.</p>
<h2>Your visa and passport on the way back</h2>
<p>A permanent visa lets you live in Australia indefinitely, but its permission to travel in and out has its own expiry. Home Affairs tells applicants to make sure they hold a valid visa that allows re-entry, and to apply for a Resident Return visa if the travel conditions have expired or are about to. Until you make the pledge you are not a citizen, so you cannot travel on an Australian passport; you use your current one. New Zealand citizens on a Special Category visa keep being treated as permanent residents for citizenship while abroad, provided they held the visa immediately before leaving, as the ${h.a('nz', 'New Zealand page')} explains.</p>
<h2>Trips between approval and ceremony</h2>
<p>Once approved, you wait for an invitation from your council or the department, sent about ${h.R.invitationWeeksAhead} weeks before the event. You cannot choose the date. Home Affairs says travel before the ceremony should not stop you attending it, or it will delay you becoming a citizen. If you miss your ceremony you receive a non-attendance letter and later a new invitation, and if you do not attend within ${h.R.pledgeWithinMonths} months of approval without an acceptable, evidenced reason, the approval may be cancelled. The ${h.a('aftertest', 'page on the stage after the test')} lays out that timeline, and the ${h.a('ceremony', 'ceremony page')} the day itself.</p>
<h2>Trips before you apply</h2>
<p>Travel before lodging is where the residence rule bites. Over the ${h.R.lawfulYears} years before the day you apply you can be absent for at most ${h.R.maxAbsenceDays} days in total, and no more than ${h.R.maxAbsenceLast12m} of them in the final 12 months. The days you leave and arrive count as days in Australia. The panel under the summary shows how many days you can still spend away before your planned date; for a precise answer with real dates, use the ${h.a('residence', 'residence calculator')}.</p>
<h2>Long absences and the link with Australia</h2>
<p>Home Affairs must be satisfied that you are likely to live in Australia, or keep a close and continuing link while overseas. It looks at your travel: why you went, how often and for how long. If you expect to be overseas for ${h.B.linkStatementMonths} months or more in the next few years, include a statement explaining why, with evidence such as an employer's letter, a study offer or return tickets.</p>`,
  },
});
