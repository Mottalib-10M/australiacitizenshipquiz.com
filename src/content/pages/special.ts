import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'special',
  group: 'eligibility',
  order: 160,
  tool: { kind: 'mini:special' },
  mini: { kind: 'mini:specialwork' },
  related: ['residence', 'discretion', 'adf', 'requirements', 'travel'],
  sources: ['au_pr', 'au_act', 'au_rescalc'],
  en: {
    slug: 'special-residence-requirement',
    nav: 'Special residence requirement',
    card: 'Athletes, security-cleared staff and travelling professionals: shorter or different day counts.',
    title: 'Special Residence Requirement 2026: Athletes and Travel Work',
    description: 'The special residence requirement for Australian citizenship: Olympic and national team athletes, NV2 roles, crew, executives, scientists and their day counts.',
    h1: 'The special residence requirement',
    intro: 'Choose your case and enter your days in Australia to see whether they add up, then check the conditions for travel-heavy work.',
    resume: (h) => `The special residence requirement replaces the general residence rule for two groups of permanent residents. The first is people seeking to engage in an activity of benefit to Australia that requires citizenship: athletes in an Australian team supported by the Olympic or Paralympic committees, Commonwealth Games Australia, Tennis Australia (Davis Cup or Billie Jean King Cup) or Cricket Australia, and people offered a Commonwealth job that needs a Negative Vetting 2 or higher security clearance. They need ${h.R.special.benefitPrYears} years of ordinary residence on a permanent visa, with at least ${h.R.special.benefitDays} days in Australia in that time and ${h.R.special.benefitDaysLast12m} in the last year, and must show there is not enough time to meet the general rule. The second group works in listed jobs that require regular travel: ship and aircraft crew, resources installation staff, ASX 200 chief executives and executive managers, PhD researchers, scientists, renowned medical specialists, Distinguished Talent holders and senior ministers of religion. They need ${h.R.special.travelYears} years on a visa including ${h.R.special.travelPrYears} as a permanent resident, and ${h.R.special.travelDays} days in Australia, ${h.R.special.travelDaysLast12m} in the last year.`,
    faqs: (h) => [
      { q: 'Can a professional footballer or golfer use the athlete rule?', a: 'Only the organisations named by Home Affairs qualify: the Australian Olympic and Paralympic committees, Commonwealth Games Australia, Tennis Australia for the Davis Cup or Billie Jean King Cup, and Cricket Australia for men’s or women’s international matches. An athlete outside those teams uses the general residence rule, unless the sport falls under a Distinguished Talent visa used for the travel-heavy work route.' },
      { q: 'How many years of travel-heavy work do I need before applying?', a: `You must be in a listed kind of work when you apply and have done it for a total of at least ${h.B.specialTravelWorkYears} years in the past ${h.B.specialTravelWorkWindowYears}, with regular travel outside Australia required by that work. Employer letters, contracts, pay slips, logbooks or shift schedules show it, and they must link the periods abroad to the job.` },
      { q: 'Do I have to stay in the listed work after I become a citizen?', a: 'The Australian Citizenship Act 2007 provides for revocation by the Minister in connection with the special residence requirements, so the activity or work you relied on matters after approval too. Revocation is not presented as routine, but give accurate evidence about the activity or the work you are doing or intend to do, and keep records of your employment and travel.' },
    ],
    body: (h) => `
<h2>Two very different routes</h2>
<p>Both routes sit in the ${h.src('au_act', 'Australian Citizenship Act 2007')}and on the ${h.src('au_pr', 'Home Affairs criteria page')}. One shortens the wait for people whom Australia needs as citizens quickly. The other lowers the number of days in Australia for people whose job keeps them abroad, but keeps the full four years.</p>
${h.table(['Point', 'Activity of benefit to Australia', 'Work with regular travel'], [['Who', 'national team athletes; NV2 or higher Commonwealth roles', 'crew, resources installations, executives, researchers, specialists, talent visa holders, senior religious leaders'], ['Time on a visa', `${h.R.special.benefitPrYears} years, all on a permanent visa`, `${h.R.special.travelYears} years, the last ${h.R.special.travelPrYears} on a permanent visa`], ['Days in Australia', `${h.R.special.benefitDays} in the ${h.R.special.benefitPrYears} years`, `${h.R.special.travelDays} in the ${h.R.special.travelYears} years`], ['Days in the last year', h.R.special.benefitDaysLast12m, h.R.special.travelDaysLast12m], ['General rule for comparison', `${h.R.lawfulYears} years, ${h.R.maxAbsenceDays} days away at most`, `${h.R.maxAbsenceLast12m} days away at most in the last year`]], 'Day counts from the Home Affairs criteria page, updated October 2026.', ['l', 'l', 'l'])}
<h2>Activities of benefit to Australia</h2>
<p>Two conditions come before any day count: you must need to be a citizen to take part in the activity, and you must not have enough time to meet the general rule. For an athlete, the evidence is a letter from the head of the organisation saying you have a reasonable prospect of selection, plus a letter listing the qualifying events, their dates, which ones require citizenship and the last date you can become a citizen and still be selected. For a security-cleared role, the agency head confirms a reasonable prospect of employment, that the job needs Negative Vetting 2 or higher, why it benefits Australia, why citizenship is needed and why the general rule cannot be met in time.</p>
<h2>Work that requires regular travel</h2>
<p>The listed kinds of work are:</p>
<ul>
<li>crew of a ship or aircraft, on duty;</li>
<li>work on a resources installation or sea installation;</li>
<li>chief executive officer or executive manager of an S&amp;P/ASX All Australian 200 company (an executive manager reports directly to the most senior person);</li>
<li>research and development of benefit to Australia by a PhD scientist or academic employed by an Australian university;</li>
<li>scientists employed by CSIRO or by a member institute of AAMRI;</li>
<li>internationally renowned medical specialists who are fellows of a listed college;</li>
<li>work in the field of a Distinguished Talent or Global Talent visa processed under the Distinguished Talent pathway (academia and research, the arts, a profession or a sport);</li>
<li>senior leadership as a minister of religion.</li>
</ul>
<p>The second tool on this page checks the ${h.B.specialTravelWorkYears} years of listed work and the day counts together.</p>
<h2>Being overseas when Home Affairs decides</h2>
<p>General eligibility applicants must be in Australia at the time of decision. People who met one of the special residence requirements are an exception, which is useful for crew and executives on rotation. A ceremony is still needed to make the pledge, so keep the invitation, sent about ${h.R.invitationWeeksAhead} weeks ahead, in mind when you plan postings.</p>
<h2>If you do not fit</h2>
<p>Many frequent travellers are not on the list, for example consultants or engineers on overseas projects. They use the ${h.a('residence', 'general residence requirement')}. If the time abroad was spent with an Australian citizen partner, the ${h.a('discretion', 'partner discretion')} may help instead.</p>
<p>Whatever the route, the documents Home Affairs lists must be attached when you apply, because a special residence claim is assessed with the application itself. Keep an accurate record of your days in and out of Australia, since the counts are strict minimums.</p>`,
  },
});
