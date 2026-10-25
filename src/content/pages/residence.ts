import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'residence',
  group: 'eligibility',
  order: 30,
  tool: { kind: 'date' },
  mini: { kind: 'mini:budget' },
  related: ['requirements', 'prto', 'travel', 'discretion', 'special', 'nz'],
  sources: ['au_rescalc', 'au_pr', 'au_foi', 'au_act'],
  en: {
    slug: 'residence-requirement-calculator',
    nav: 'Residence calculator',
    card: 'Enter your visa dates and trips to find the first day you meet the 4-year residence rule.',
    title: 'Residence Requirement Calculator 2026: Earliest Date',
    description: 'Residence requirement calculator for Australian citizenship: enter visa dates and trips to get the first day you meet the 4-year, 12-month and 90-day rules.',
    h1: 'Residence requirement calculator: your earliest date to apply for citizenship',
    intro: 'Add the date you started living here on a visa, the date your permanent visa began and each trip overseas: the calculator returns the first day all three rules are met.',
    resume: (h) => `The general residence requirement for Australian citizenship is three tests that must all be passed on the day you apply. First, you must have been living in Australia on a valid visa for the ${h.R.lawfulYears} years immediately before that day. Second, you must have held a permanent visa (or, for a New Zealand citizen, a Special Category visa) for the last ${h.R.prMonths} months of that period. Third, your time outside Australia in the ${h.R.lawfulYears} years must not exceed ${h.R.maxAbsenceDays} days in total, and no more than ${h.R.maxAbsenceLast12m} of those days may fall in the final 12 months. Home Affairs counts the day you leave and the day you return as days in Australia, so a trip that leaves on a Monday and comes back the next Monday costs six days, not eight. The calculator above applies these rules to your own dates. Children under ${h.R.childExemptUnder} do not need to meet the requirement, and time without a visa never counts.`,
    faqs: (h) => [
      { q: 'Does the day I fly out count as a day overseas?', a: `No. A Home Affairs document released under freedom of information states that days on which an applicant arrived from or departed for outside Australia count as days in Australia for the general residence calculation. Only the full days in between count as absence. A weekend trip to Bali leaving Friday and returning Monday therefore uses two days of the ${h.R.maxAbsenceDays}-day allowance, not four.` },
      { q: 'If I apply one day too early, can Home Affairs wait until I qualify?', a: 'No. The residence requirement is tested on the day the application is lodged, not on the day it is decided. An application lodged before the qualifying date does not meet the rule and can be refused; you would then have to apply again once you qualify. Add a margin of a few days to the date the calculator shows, and check again if you travel in the meantime.' },
      { q: 'Does time on a bridging visa count towards the four years?', a: `The rule counts time living in Australia on a valid visa, and a bridging visa is a visa. What never counts is time as an unlawful non-citizen, with no visa at all, unless the Minister finds that was caused by an administrative error. Only the last ${h.R.prMonths} months must be on a permanent visa or a Special Category visa.` },
    ],
    body: (h) => `
<h2>The three rules the calculator checks</h2>
${h.table(['Rule', 'Limit', 'Window'], [['Living in Australia on a valid visa', `${h.R.lawfulYears} years`, 'immediately before the day you apply'], ['Holding a permanent visa or SCV', `${h.R.prMonths} months`, 'immediately before the day you apply'], ['Total time away', `no more than ${h.R.maxAbsenceDays} days`, `the ${h.R.lawfulYears} years before you apply`], ['Time away in the last year', `no more than ${h.R.maxAbsenceLast12m} days`, 'the 12 months before you apply']], `Rules of the Home Affairs permanent resident page, updated ${h.date(h.R.pageUpdated)}.`, ['l', 'r', 'l'])}
<p>The four years and the twelve months are both counted backwards from the day you lodge. That is why the answer is a date rather than a yes or no: each new day pushes the window forward, an old trip drops out of it, and a new one may enter. If you go overseas after using the calculator, run it again with the new trip.</p>
<h2>How days away are counted</h2>
<p>A ${h.src('au_foi', 'Home Affairs document released under freedom of information')} sets out the counting method: days on which you arrived from overseas or departed Australia are counted as days in Australia for the general residence calculation. A trip therefore costs the number of nights abroad minus one. Two weeks away, leaving on the 1st and returning on the 15th, uses thirteen days. The calculator applies the same method, so its total can be lower than a simple count from your passport stamps.</p>
<p>The ${h.R.maxAbsenceLast12m}-day limit is often the binding one. Someone who spent ${h.R.maxAbsenceDays - 100} days overseas in four years is well inside the four-year limit, but if ${h.R.maxAbsenceLast12m + 10} of those days fall in the last twelve months, the date moves back until enough of the recent trip leaves the window. The small panel below shows how many days you can still spend away before your planned date.</p>
<!--tool:mini:budget-->
<h2>When does permanent residence start?</h2>
<p>Your permanent residence begins on the day the permanent visa was granted if you were in Australia at the time, or on the day you first entered Australia holding it if it was granted while you were overseas. An offshore grant followed by a late first entry can therefore cost months. New Zealand citizens on a Special Category visa have their own rules: those granted the visa before ${h.date(h.R.scvDeemedFrom)} are treated as permanent residents from that date, and holders of a New Zealand stream subclass 189 visa granted on or after ${h.date(h.R.nz189DeemedFrom)} do not need the ${h.R.prMonths} months at all. The ${h.a('nz', 'New Zealand citizens page')} explains both.</p>
<h2>Time that may count differently</h2>
<p>The Minister can treat some periods as if they met the rule. Time spent unlawfully, or on a temporary visa, because of an administrative error by the department can be counted as lawful or permanent residence. Time on a temporary visa can be counted as permanent residence if waiting would cause significant hardship. Time spent overseas as a permanent resident with an Australian citizen spouse or partner can be counted as time in Australia if you kept a close and continuing association with Australia. Time in prison or a psychiatric institution does not count unless the Minister finds it unreasonable to exclude it. None of this can be assessed before you apply: the ${h.a('discretion', 'ministerial discretion page')} lists the evidence for each case.</p>
<h2>Who does not need the rule</h2>
<p>Children under ${h.R.childExemptUnder} on a parent’s form, people born to a former citizen who lost citizenship before ${h.date(h.H.dualFrom)}, people born in Papua before ${h.date(h.M.papuaBefore)} to an Australian-born citizen parent, and members of the defence forces with ${h.R.adfDays} days of qualifying service are exempt from the general rule. Elite athletes, some security-cleared staff and people whose work involves regular travel can use the lower day counts of the ${h.a('special', 'special residence requirement')}.</p>
<h2>Check against the official tool</h2>
<p>Home Affairs offers its own ${h.src('au_rescalc', 'residence calculator')}. Use it as a second check before lodging, with exactly the same dates. If the two results differ by a day, trust the later date. The ${h.a('prto', 'PR to citizenship page')} shows the wait in months when you have not travelled, and the ${h.a('travel', 'travel page')} explains what happens if you go overseas after applying.</p>`,
  },
});
