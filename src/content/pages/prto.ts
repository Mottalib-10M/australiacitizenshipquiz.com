import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'prto',
  group: 'eligibility',
  order: 40,
  tool: { kind: 'mini:prwait' },
  mini: { kind: 'mini:eligible' },
  related: ['residence', 'requirements', 'students', 'processing', 'application'],
  sources: ['au_pr', 'au_rescalc', 'au_processing'],
  en: {
    slug: 'pr-to-citizenship',
    nav: 'From PR to citizenship',
    card: 'How long after your permanent visa you can apply, and how long the rest of the journey takes.',
    title: 'PR to Citizenship 2026: When You Can Apply After PR',
    description: 'PR to citizenship in Australia: the wait after a permanent visa is 12 months to 4 years, set by your time here before PR. See your month and the next steps.',
    h1: 'From PR to citizenship: how long after your permanent visa you can apply',
    intro: 'Give the month your permanent visa started and your years here before it: the tool returns the earliest month to apply if you have not travelled.',
    resume: (h) => `After a permanent visa, the wait before you can apply for Australian citizenship is at least ${h.R.prMonths} months and at most ${h.R.lawfulYears} years, depending on how long you lived in Australia on other visas first. The general residence requirement asks for ${h.R.lawfulYears} years living in Australia on a valid visa, of which the last ${h.R.prMonths} months on a permanent visa. A graduate who spent three years here on student and work visas before the grant therefore waits ${h.R.prMonths} months; someone who arrived on the permanent visa waits the full ${h.R.lawfulYears} years. Travel can push the date back: no more than ${h.R.maxAbsenceDays} days away in the ${h.R.lawfulYears} years and ${h.R.maxAbsenceLast12m} in the last year. Permanent residence starts on the grant date if you were in Australia, or on your first entry if the visa was granted offshore. Once lodged, the current Home Affairs table shows half of conferral applicants reaching their ceremony within ${h.PT.table.applicationToCeremony.p50} and nine in ten within ${h.PT.table.applicationToCeremony.p90}.`,
    faqs: (h) => [
      { q: 'Can I apply for citizenship exactly 12 months after my PR grant?', a: `Only if two other things are true that day: you have lived in Australia on a valid visa for the ${h.R.lawfulYears} years before it, and your absences stay within ${h.R.maxAbsenceDays} days over those years and ${h.R.maxAbsenceLast12m} days in the last 12 months. If your PR was granted while you were overseas, the ${h.R.prMonths} months start from your first entry on it, not the grant date.` },
      { q: 'My PR was granted offshore. When does my permanent residence start?', a: 'On the day you first entered Australia holding the permanent visa. If the visa was granted while you were in Australia, it starts on the grant date. The difference matters for a family that waits several months between an offshore grant and the move: those months do not count towards the year of permanent residence, nor towards the four years living in Australia.' },
      { q: 'Do I lose my PR if I wait years before applying for citizenship?', a: 'A permanent visa does not expire, but its travel facility does. If yours has lapsed or is about to and you need to travel, Home Affairs says to apply for a Resident Return visa before re-entering. Waiting to apply for citizenship has no penalty in itself, though the residence window always looks at the four years just before you lodge.' },
    ],
    body: (h) => `
<h2>The two clocks after a permanent visa</h2>
<p>Two periods run at the same time and both must be complete on the day you lodge. The first is the ${h.R.lawfulYears}-year clock of living in Australia on any valid visa: student, graduate, working holiday, skilled temporary, partner, bridging or permanent. The second is the ${h.R.prMonths}-month clock that only starts with the permanent visa. Whichever finishes later sets your date, which is what the tool above computes.</p>
${h.table(['Years in Australia before the permanent visa', 'Wait after the visa', 'Rule that decides'], [['0 (arrived on the PR)', `${h.R.lawfulYears} years`, `${h.R.lawfulYears} years on a visa`], ['1', `${h.R.lawfulYears - 1} years`, `${h.R.lawfulYears} years on a visa`], ['2', `${h.R.lawfulYears - 2} years`, `${h.R.lawfulYears} years on a visa`], ['3 or more', `${h.R.prMonths} months`, `${h.R.prMonths} months as a permanent resident`]], 'Without travel, and assuming no gap between visas.', ['l', 'r', 'l'])}
<h2>Travel moves the date</h2>
<p>The table assumes you stayed in Australia. Trips overseas do not stop either clock, but they count against two allowances: ${h.R.maxAbsenceDays} days over the ${h.R.lawfulYears} years and ${h.R.maxAbsenceLast12m} days over the last year. Departure and arrival days count as days here. If a long trip home falls in the last twelve months, waiting until part of it leaves the window is often the only fix. The ${h.a('residence', 'residence calculator')} handles trips one by one; the panel below checks the four conditions with totals you already know.</p>
<!--tool:mini:eligible-->
<h2>Gaps between visas</h2>
<p>The four years must be spent living in Australia on a valid visa. A period with no visa at all, for example between the expiry of one visa and the grant of the next without a bridging visa, does not count, and the four years may need to start again after it. The Minister can treat such a period as lawful only if it was caused by an administrative error of the department. If you had a gap, count only the time since it ended.</p>
<h2>From eligibility to ceremony</h2>
<p>Reaching the date is the start, not the end. You lodge the application in ImmiAccount (or on paper in some cases) and pay ${h.aud(h.F.general)} if you are aged ${h.T.ages[0]} to ${h.T.ages[1]}. Home Affairs checks identity and eligibility, invites most applicants to a test appointment, assesses character, decides, and then the local council invites you to a ceremony about ${h.R.invitationWeeksAhead} weeks ahead. The ${h.src('au_processing', 'processing times table')} updated ${h.date(h.PT.pageUpdated)} gives these figures for conferral:</p>
${h.table(['Stage', '50% within', '90% within'], [['Application to decision', h.PT.table.decision.p50, h.PT.table.decision.p90], ['Approval to ceremony', h.PT.table.approvalToCeremony.p50, h.PT.table.approvalToCeremony.p90], ['Application to ceremony', h.PT.table.applicationToCeremony.p50, h.PT.table.applicationToCeremony.p90]], undefined, ['l', 'r', 'r'])}
<p>These are past results, not promises. Incomplete documents, slow replies and character checks with other agencies lengthen them. The ${h.a('processing', 'processing times page')} has the full table and the size of the queue.</p>
<h2>Travel facility and living here</h2>
<p>A permanent visa lets you stay indefinitely, but the right to re-enter on it is time-limited. If its travel conditions have expired or are about to and you plan a trip, Home Affairs says to apply for a Resident Return visa before you leave. Keep this in mind during the year of permanent residence: you must be living in Australia when you apply and when the department decides, and an application on general eligibility cannot be approved while you are overseas. Lodging from abroad is allowed, but the decision waits for your return.</p>
<h2>Students and graduates</h2>
<p>For people who studied in Australia, the years on student and graduate visas usually fill the four-year clock before the permanent visa arrives, so the wait after the grant is just the ${h.R.prMonths} months. The ${h.a('students', 'international students page')} looks at long trips home during study, which are the usual trap. Then prepare the ${h.a('application', 'application')} so it is ready on your date.</p>`,
  },
});
