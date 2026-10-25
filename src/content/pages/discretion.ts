import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'discretion',
  group: 'eligibility',
  order: 150,
  tool: { kind: 'mini:discretion' },
  mini: { kind: 'mini:budget' },
  related: ['spouse', 'residence', 'special', 'adf', 'requirements'],
  sources: ['au_pr', 'au_rescalc', 'au_act'],
  en: {
    slug: 'ministerial-discretion',
    nav: 'Ministerial discretion',
    card: 'Six ways the Minister can count time that would otherwise fall short of the residence rule.',
    title: 'Ministerial Discretion 2026: Residence Rule for Citizenship',
    description: 'Australian citizenship ministerial discretion: administrative error, hardship, prison time, partners of citizens abroad. When it applies and what to send.',
    h1: 'Ministerial discretion and the residence requirement',
    intro: 'Pick the situation closest to yours to see whether a discretion could apply, then count the days you can still spend overseas.',
    resume: (h) => `A ministerial discretion lets the Minister for citizenship count a period that would otherwise not satisfy the general residence requirement of ${h.R.lawfulYears} years on a valid visa, ${h.R.prMonths} months as a permanent resident, and no more than ${h.R.maxAbsenceDays} days away (${h.R.maxAbsenceLast12m} in the last year). Home Affairs lists six cases: unlawful presence caused by an administrative error, treated as lawful; temporary residence caused by an administrative error, treated as permanent; time in prison or a psychiatric institution, counted where it would be unreasonable not to; temporary residence treated as permanent where waiting would cause significant hardship or disadvantage; time overseas as a permanent resident with a citizen spouse or de facto partner; and the same for a partner in an interdependent relationship. None is automatic. You ask for it in your application, send supporting evidence, and the decision is made with the application itself: Home Affairs says eligibility for a discretion cannot be assessed in advance. Discretions do not replace the test, character or identity rules.`,
    faqs: (h) => [
      { q: 'Can I ask Home Affairs whether a discretion will be granted before I pay the fee?', a: `No. The criteria page states that eligibility to have a discretion applied cannot be assessed in advance of an application. You must lodge, pay the fee of ${h.aud(h.F.general)} for applicants aged ${h.T.ages[0]} to ${h.T.ages[1]}, and send your evidence with it. If the discretion is not applied and you fall short, the application can be refused.` },
      { q: 'What counts as an administrative error by the department?', a: 'A mistake by Home Affairs that left you unlawful, or on a temporary visa, when you should have held a lawful or permanent status. You need proof of the departmental error affecting your status, such as correspondence acknowledging it. A visa that lapsed because you applied late is not a departmental error.' },
      { q: 'What does significant hardship or disadvantage mean here?', a: 'It is the test for treating time on a temporary visa as permanent residence. Home Affairs asks for a statement supporting the claim that you would suffer significant hardship or disadvantage if the requirement were not varied. The page gives no list of qualifying situations, so the statement and its evidence carry the case. Inconvenience alone is unlikely to be enough.' },
    ],
    body: (h) => `
<h2>Why discretions exist</h2>
<p>The residence rule is mechanical: a day is either lawful or not, permanent or not, in Australia or not. Discretions give the Minister room in a few situations where the mechanical count would be unfair. They only touch the residence requirement. The ${h.a('requirements', 'other requirements')}, from good character to the test and a close link with Australia, are assessed as usual.</p>
<h2>The six discretions</h2>
${h.table(['Situation', 'What the Minister may do', 'Key evidence'], [['Unlawful in Australia because of an administrative error', 'treat the period as lawful presence', 'proof of the departmental error'], ['On a temporary visa because of an administrative error', 'treat the period as permanent residence', 'proof of the departmental error'], ['In prison or a psychiatric institution', 'count the period if not doing so would be unreasonable', 'statement on the circumstances of the confinement'], ['On a temporary visa, with significant hardship if you wait', 'treat the period as permanent residence', 'statement on the hardship or disadvantage'], ['Overseas as a permanent resident with a citizen spouse or de facto partner', 'treat the period as presence in Australia', 'partner’s citizenship, relationship, reason for being overseas'], ['Overseas on an interdependent relationship visa with a citizen', 'treat the period as presence in Australia', 'partner’s citizenship, reason for being overseas, link with Australia']], 'From the Home Affairs criteria page for permanent residents.', ['l', 'l', 'l'])}
<h2>Errors by the department</h2>
<p>Two of the six fix the consequences of a Home Affairs mistake. If the department’s error left you unlawful, the time can be treated as lawful; if it left you on a temporary visa when you should have been permanent, the time can be treated as permanent residence. Both need documents showing the error. Gaps caused by your own late renewal do not fit here.</p>
<h2>Prison and psychiatric confinement</h2>
<p>By default, time in prison or in a psychiatric institution does not count as residence. The Minister may count it if, taking into account the circumstances that led to the confinement, it would be unreasonable not to. This is separate from the character bars: someone released less than ${h.M.releaseYearsBlock} years ago from a sentence of ${h.M.sentenceMonths} months or more cannot be approved anyway, as the ${h.a('character', 'character page')} explains.</p>
<h2>Hardship</h2>
<p>The hardship discretion converts temporary residence into permanent residence for the count. It suits someone who has lived in Australia for years on temporary visas, has recently become a permanent resident and would face significant hardship or disadvantage if made to wait the full ${h.R.prMonths} months. It does not reduce the ${h.R.lawfulYears} years on a valid visa, and it does not erase absences.</p>
<h2>Partners of citizens</h2>
<p>The two partner discretions are the only ones on this list that also allow approval while you are outside Australia. They are covered in detail on the ${h.a('spouse', 'page for spouses and partners')}, with a calculator that shows how your days away look if the time with your partner is counted.</p>
<h2>Other routes before a discretion</h2>
<p>Check whether a rule already exempts you. Children under 16, people born to a former citizen who lost citizenship before ${h.date(h.H.dualFrom)}, and people born in Papua before ${h.date(h.M.papuaBefore)} to an Australian-born citizen parent do not need to meet the residence requirement. Defence service has its own ${h.a('adf', 'exemption')}, and athletes, security-cleared staff and some travelling professionals have a ${h.a('special', 'special residence requirement')}. If none applies, the simplest answer is often to wait: the second tool counts the days you can still spend overseas, and the ${h.a('residence', 'residence calculator')} gives your first date.</p>`,
  },
});
