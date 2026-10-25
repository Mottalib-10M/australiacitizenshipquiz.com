import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'nz',
  group: 'eligibility',
  order: 110,
  tool: { kind: 'mini:nzdate' },
  mini: { kind: 'mini:budget' },
  related: ['residence', 'requirements', 'documents', 'test', 'cost'],
  sources: ['au_pr', 'au_rescalc', 'au_1298i'],
  en: {
    slug: 'new-zealand-citizens',
    nav: 'New Zealand citizens',
    card: 'SCV and NZ stream 189 holders: when permanent residence starts for citizenship and what still applies.',
    title: 'NZ Citizens and Australian Citizenship 2026: SCV and 189',
    description: 'New Zealand citizens on an SCV or a subclass 189 NZ stream visa: when you count as a permanent resident for citizenship, the 4-year rule, police checks, fees.',
    h1: 'Australian citizenship for New Zealand citizens',
    intro: 'Pick your visa and the year it was granted to see when Home Affairs treats you as a permanent resident, then check your days away.',
    resume: (h) => `New Zealand citizens living in Australia on a Special Category visa (subclass 444, the SCV) are treated as permanent residents for citizenship purposes. If the SCV was granted before ${h.date(h.R.scvDeemedFrom)}, permanent residence is counted from ${h.date(h.R.scvDeemedFrom)}, which made people eligible from ${h.date(h.R.scvEligibleFrom)}; an SCV first granted on or after that date counts from its grant date. Holders of the New Zealand stream of the Skilled Independent (subclass 189) visa granted during 2022 count as permanent residents from ${h.date(h.R.nz189DeemedFrom)}, and those granted on or after ${h.date(h.R.nz189NoWaitFrom)} can apply from the grant date, without the usual ${h.R.prMonths} months on a permanent visa. Every other part of the general residence requirement stays: ${h.R.lawfulYears} years living in Australia on a valid visa, no more than ${h.R.maxAbsenceDays} days away in that time and no more than ${h.R.maxAbsenceLast12m} in the last year. Applicants aged ${h.T.ages[0]} to ${h.T.ages[1]} sit the test and pay ${h.aud(h.F.general)}.`,
    faqs: (h) => [
      { q: 'Does my SCV still count as permanent residence while I am overseas?', a: 'Yes, provided you held an SCV immediately before you left. Home Affairs says SCV holders continue to be considered permanent residents for citizenship purposes while outside Australia on that condition. Days overseas still count against the absence limits, so a long stay in New Zealand can push back your date even though your status is kept.' },
      { q: 'Do I need a New Zealand police certificate?', a: `Only if your time abroad meets the trigger: since turning 18, in the last ${h.R.penalClearanceYears} years, a total of ${h.R.penalClearanceOutsideMonths} months or more outside Australia and ${h.R.penalClearanceStayDays} days or more in one country. Even then you do not request it yourself. Home Affairs asks the New Zealand Ministry of Justice directly, after getting your consent in the application or by contacting you.` },
      { q: 'I was outside Australia on 1 July 2023. Do the SCV changes apply to me?', a: 'They can. The page says the changes apply if you were outside Australia on that date and last held an SCV, or a Special Purpose Visa as airline crew, immediately before leaving. They do not apply if you were outside Australia because you were removed or deported under the Migration Act 1958, unless the visa cancellation was revoked.' },
      { q: 'Are my New Zealand family members on a 189 visa covered too?', a: `Yes, if they are New Zealand citizens holding the Skilled Independent (subclass 189) visa as your family members. Home Affairs applies the same start date to them. Children under 16 do not need to meet the residence rule at all and can be added to a parent’s form free of charge, provided they are permanent residents or SCV holders.` },
    ],
    body: (h) => `
<h2>Two visas, two sets of dates</h2>
<p>Since 2022 Home Affairs has moved the start of permanent residence for many New Zealanders. Which rule applies depends on the visa you hold, as set out on the ${h.src('au_pr', 'permanent resident criteria page')}.</p>
${h.table(['Visa', 'Granted', 'Permanent resident for citizenship from', 'Can apply from'], [['SCV (subclass 444)', `before ${h.date(h.R.scvDeemedFrom)}`, h.date(h.R.scvDeemedFrom), h.date(h.R.scvEligibleFrom)], ['SCV (subclass 444)', `on or after ${h.date(h.R.scvDeemedFrom)}`, 'grant date', `grant date + ${h.R.prMonths} months`], ['189, New Zealand stream', 'during 2022', h.date(h.R.nz189DeemedFrom), h.date(h.R.nz189EligibleFrom)], ['189, New Zealand stream', `on or after ${h.date(h.R.nz189NoWaitFrom)}`, 'grant date', 'grant date']], 'Only the permanent residence date changes; the four-year and absence rules still apply.', ['l', 'l', 'l', 'l'])}
<h2>What the SCV change means for long-term residents</h2>
<p>A New Zealander who has lived in Sydney or Perth since the 2000s on an SCV already has years of lawful residence. Before 2022, an SCV did not count as permanent residence, so many needed a separate permanent visa first. Now the SCV itself is enough. For an SCV granted before ${h.date(h.R.scvDeemedFrom)}, the ${h.R.prMonths} months of permanent residence ran out on ${h.date(h.R.scvEligibleFrom)}, and from then on the question is only whether your travel fits the absence limits.</p>
<h2>The 189 New Zealand stream</h2>
<p>For the subclass 189 New Zealand stream the change is even larger: a grant on or after ${h.date(h.R.nz189NoWaitFrom)} removes the ${h.R.prMonths}-month wait entirely. You still need ${h.R.lawfulYears} years on a valid visa immediately before applying, and most holders of this stream reached the visa after years on an SCV, which counts as a valid visa. The second calculator below tells you how many days you can still spend overseas before a limit breaks.</p>
<h2>Trips across the Tasman</h2>
<p>Frequent visits home are the main risk. Every full day outside Australia counts as absence, while the days you leave and arrive count as days in Australia. The limits are ${h.R.maxAbsenceDays} days in the ${h.R.lawfulYears} years before you apply, and ${h.R.maxAbsenceLast12m} days in the final ${h.R.prMonths} months. The ${h.a('residence', 'residence calculator')} counts your trips one by one and gives the first date that works.</p>
<h2>The rest of the application</h2>
<p>New Zealanders follow the normal conferral process. Applicants aged ${h.T.ages[0]} to ${h.T.ages[1]} sit the ${h.a('test', 'citizenship test')}, the character requirement applies from 18, and identity must be proven from birth with ${h.R.identityDocs} documents. A New Zealand passport covers the photo and signature; a full birth certificate covers birth name, date of birth and sex. The fee is ${h.aud(h.F.general)}, or ${h.aud(h.F.generalConcession)} with a Pensioner Concession Card, as set out on ${h.src('au_1298i', 'form 1298i')}.</p>
<h2>Do you need to become a citizen?</h2>
<p>Many New Zealanders live in Australia for decades on an SCV. Citizenship adds the right to vote, an Australian passport, the right to apply for jobs in the Australian Public Service and the Defence Force, and the ability to apply for citizenship by descent for children born overseas. Australian law has allowed dual citizenship since ${h.date(h.H.dualFrom)}, but New Zealand’s own rules are a separate question to check before you apply; the ${h.a('dual', 'dual citizenship page')} explains the Australian side.</p>
<h2>Children in a New Zealand family</h2>
<p>A child under 16 can be added to a parent’s application free of charge and does not need to meet the residence requirement, as long as the child is a permanent resident or an SCV holder when you apply and when Home Affairs decides. Teenagers aged 16 or 17 apply on their own and must meet the general rule themselves. A child born in Australia may already be a citizen: the ${h.a('born', 'page on birth in Australia')} explains when that happens, including the rule for children who live here for their first ${h.M.bornResidentYears} years.</p>`,
  },
});
