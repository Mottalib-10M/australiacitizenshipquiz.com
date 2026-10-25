import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'students',
  group: 'eligibility',
  order: 130,
  tool: { kind: 'mini:students' },
  mini: { kind: 'mini:prwait' },
  related: ['residence', 'prto', 'requirements', 'travel', 'test'],
  sources: ['au_pr', 'au_rescalc', 'au_1298i'],
  en: {
    slug: 'international-students',
    nav: 'International students',
    card: 'Years on a student or graduate visa count towards the four years, but not as permanent residence.',
    title: 'Citizenship for International Students 2026: Visa Time',
    description: 'Do years on a student visa count for Australian citizenship? Yes for the 4 years on a valid visa, not for the 12 months of permanent residence. See your date.',
    h1: 'Australian citizenship for former international students',
    intro: 'Enter your years on temporary visas and the months since your permanent visa to see how long is left, then find the exact month.',
    resume: (h) => `There is no citizenship pathway for international students as such: a student must first become a permanent resident, usually through a skilled, employer or partner visa, and then apply for citizenship by conferral. The good news is that study years are not wasted. The general residence requirement asks for ${h.R.lawfulYears} years living in Australia on a valid visa immediately before applying, and a student visa, a graduate visa or a temporary work visa is a valid visa for that count. The second condition is stricter: the last ${h.R.prMonths} months must be on a permanent visa, and only permanent residence counts for it. Absences are limited to ${h.R.maxAbsenceDays} days in the ${h.R.lawfulYears} years and ${h.R.maxAbsenceLast12m} days in the last year, so long trips home between semesters count against you. A graduate who arrived to study, stayed on and was granted permanent residence after more than ${h.R.lawfulYears - 1} years in Australia could therefore apply ${h.R.prMonths} months after the grant, as long as travel stayed within the limits. The fee is ${h.aud(h.F.general)}.`,
    faqs: (h) => [
      { q: 'Do semester breaks spent overseas reset my four years?', a: `No, they do not reset anything, but every full day away is counted. Within the ${h.R.lawfulYears} years before your application the total must stay at or below ${h.R.maxAbsenceDays} days, and at or below ${h.R.maxAbsenceLast12m} days in the final year. Several long summers at home can use up the allowance, so list your trips from your passport stamps or travel records before you choose a date.` },
      { q: 'Does time in Australia before my first student visa count?', a: `Only if you held a valid visa. A working holiday or visitor visa spent living in Australia is still time on a valid visa. What the rule looks at is the ${h.R.lawfulYears} years immediately before the day you apply, so a stay from many years ago that ended long before your current period is outside the window anyway.` },
      { q: 'Can I apply for citizenship while on a graduate visa?', a: `No. When you apply, and when Home Affairs decides, you must hold a permanent visa or be an eligible New Zealand citizen. A temporary graduate visa counts towards the ${h.R.lawfulYears} years on a valid visa but does not make you eligible to lodge. The application becomes possible ${h.R.prMonths} months after your permanent visa starts, at the earliest.` },
    ],
    body: (h) => `
<h2>Two clocks, one of which you can already run</h2>
<p>The ${h.a('residence', 'residence requirement')} has two clocks running side by side. The first counts ${h.R.lawfulYears} years of living in Australia on any valid visa, and your student years tick it along from the day you arrived. The second counts ${h.R.prMonths} months on a permanent visa, and it only starts when permanent residence is granted in Australia, or on your first entry to Australia on a permanent visa. You can apply on the first day both clocks are full and your travel fits the limits.</p>
<h2>Three common student timelines</h2>
${h.table(['Path', 'Before permanent residence', 'Earliest application'], [['Bachelor degree, graduate visa, then a skilled permanent visa', `more than ${h.R.lawfulYears} years on temporary visas`, `${h.R.prMonths} months after the permanent visa`], ['Short master’s, then a permanent visa straight away', `well under ${h.R.lawfulYears} years on temporary visas`, `${h.R.lawfulYears} years after arrival (the longer clock)`], ['Study, a long gap overseas, a new visa', 'only the recent continuous stay helps', `${h.R.lawfulYears} years on a visa counted back from the application`]], 'Each case assumes absences within the limits.', ['l', 'l', 'l'])}
<p>The second tool on this page turns the start of your permanent visa and your earlier years into a month, and the ${h.a('prto', 'page on moving from PR to citizenship')} explains the choice of the date in more depth.</p>
<h2>Gaps without a visa</h2>
<p>Time in Australia without a valid visa does not count towards the ${h.R.lawfulYears} years. Students who let a visa lapse before a new grant can lose that period. Home Affairs has a ministerial discretion for time spent as an unlawful non-citizen because of a departmental administrative error, but it covers errors by the department, not late renewals; the ${h.a('discretion', 'discretion page')} explains when it applies.</p>
<h2>Trips home</h2>
<p>Former students often travel more than other applicants: summer holidays, graduation visits, family events. The rule counts the days of departure and arrival as days in Australia and every other day abroad as absence. The limits are fixed totals, not per trip. If a planned trip would break the ${h.R.maxAbsenceLast12m}-day limit in the final year, moving your application date later is usually simpler than cancelling the trip. Test it in the ${h.a('residence', 'full calculator')}, which takes trips day by day.</p>
<h2>After you apply</h2>
<p>Most applicants aged ${h.T.ages[0]} to ${h.T.ages[1]} sit the ${h.a('test', 'citizenship test')}: ${h.T.questions} questions in ${h.T.minutes} minutes, with ${h.T.passPercent}% overall and all ${h.T.valuesQuestions} values questions right. Years of study in English help with the language side, but the content comes from Our Common Bond, not from university. Character checks apply from 18, and overseas police certificates may be needed for countries where you spent ${h.R.penalClearanceStayDays} days or more, if your total time outside Australia reached ${h.R.penalClearanceOutsideMonths} months in the last ${h.R.penalClearanceYears} years. Travel while the application is open is possible, but Home Affairs cannot approve a general eligibility application while you are overseas, as the ${h.a('travel', 'travel page')} explains.</p>
<h2>What it costs</h2>
<p>The application fee on form 1298i of July 2026 is ${h.aud(h.F.general)} for applicants aged ${h.T.ages[0]} to ${h.T.ages[1]}. Budget separately for English translations of any identity or character document in another language: Home Affairs asks for a NAATI-accredited translator when the translation is made in Australia, and the ${h.a('cost', 'cost page')} lets you add such expenses to the official fee.</p>
<h2>A checklist before you lodge</h2>
<p>Confirm the start date of your permanent visa in your grant letter, list every trip since the start of your ${h.R.lawfulYears}-year window, and check that no period without a visa sits inside it. Then gather identity documents covering your name from birth, including any change of name, and attach everything before you submit.</p>`,
  },
});
