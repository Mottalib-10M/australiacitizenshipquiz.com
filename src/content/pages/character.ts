import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'character',
  group: 'eligibility',
  order: 140,
  tool: { kind: 'mini:character' },
  mini: { kind: 'mini:release' },
  related: ['requirements', 'documents', 'refused', 'conferral', 'descent'],
  sources: ['au_pr', 'au_descent', 'au_act'],
  en: {
    slug: 'character-requirement',
    nav: 'Character requirement',
    card: 'Good character from age 18: what Home Affairs weighs, and the bars that stop approval outright.',
    title: 'Citizenship Character Test 2026: Good Character Explained',
    description: 'The Australian citizenship character test: good character from 18, convictions, court obligations, honesty, police checks, and the bars after a prison sentence.',
    h1: 'The character requirement for Australian citizenship',
    intro: 'Check how the character rules apply at your age, then see when a past prison sentence stops blocking approval.',
    resume: (h) => `Every applicant for Australian citizenship by conferral aged 18 or over must be of good character, which Home Affairs defines as the enduring moral qualities of a person. The question is whether you are likely to uphold and obey Australian law and keep the other commitments of the pledge. The department may consider recorded criminal convictions, obligations to a court in Australia or overseas, association with people of concern, reported domestic violence, and honesty in dealings with the Australian community, including false or misleading information in a visa or citizenship application. On top of that judgement, the law sets hard bars: no approval while charges are pending, while you are on parole, bail or a good behaviour order, while you are held in prison or a psychiatric institution by court order, or within ${h.M.releaseYearsBlock} years of release from a sentence of ${h.M.sentenceMonths} months or more (${h.M.releaseYearsBlockRepeat} years for a repeat offender). Home Affairs requests an Australian police check for applicants aged ${h.R.afpCheckFromAge} or over.`,
    faqs: (h) => [
      { q: 'Do I have to declare a conviction that has been spent or happened overseas?', a: 'Answer the questions on the form fully and honestly. Home Affairs counts honesty itself as part of good character, and lists providing false or misleading information in a visa or citizenship application among the things it may consider. Overseas records are checked through penal clearance certificates, so a conviction abroad is likely to surface whether or not it is declared.' },
      { q: 'Does a traffic fine count against good character?', a: 'The criteria page talks about recorded criminal convictions and obligations to a court, not about fines in general. What matters is the whole record and what it says about obeying the law in future. An unpaid fine that has become a court obligation is a different matter: settle anything outstanding before you apply.' },
      { q: 'Is character assessed for children in my application?', a: `The good character requirement applies to applicants aged 18 or over. Children under 16 on a parent’s form are not assessed for it. The Australian police check that Home Affairs requests itself starts at age ${h.R.afpCheckFromAge}, so a teenager aged ${h.R.afpCheckFromAge} or 17 applying alone will have that check made.` },
      { q: 'Can a family violence report affect my application without a conviction?', a: 'Yes, it can be considered. Home Affairs lists incidents of reported domestic violence among the matters it may weigh, separately from convictions. A report is not an automatic refusal, but it is part of the overall assessment, and the decision letter must give reasons if the application is refused on character grounds.' },
    ],
    body: (h) => `
<h2>Judgement first, then fixed bars</h2>
<p>The character rules have two layers. The first is an overall assessment of good character, made case by case from your record and conduct. The second is a list of situations in which Home Affairs must not approve the application at all, however strong the rest of the file is. Understanding which layer affects you tells you whether to wait, to gather evidence, or to apply now. The ${h.src('au_pr', 'Home Affairs criteria')} set out both.</p>
<h2>What the assessment looks at</h2>
<ul>
<li>recorded criminal convictions, in Australia and abroad;</li>
<li>obligations you may have to a court in Australia or overseas;</li>
<li>association with people of concern;</li>
<li>incidents of reported domestic violence;</li>
<li>honesty in your dealings with the Australian community, including information given in earlier visa or citizenship applications.</li>
</ul>
<p>The test is forward-looking: whether you are likely to uphold and obey the laws of Australia and meet the commitments you will make in the pledge.</p>
<h2>The bars that stop approval</h2>
${h.table(['Situation', 'Effect'], [['Proceedings for an offence against an Australian law are pending, including an appeal or review', 'no approval until they end'], ['Released from prison less than ' + h.M.releaseYearsBlock + ' years ago after a sentence of ' + h.M.sentenceMonths + ' months or more', 'no approval until the period ends'], ['The same, for a repeat offender', `${h.M.releaseYearsBlockRepeat} years instead of ${h.M.releaseYearsBlock}`], ['Subject to parole, bail, good behaviour or similar court conditions', 'no approval while they apply'], ['In prison or a psychiatric institution by court order at the time of decision', 'no approval']], 'Home Affairs criteria for permanent residents, updated October 2026.', ['l', 'l'])}
<p>The second tool on this page turns a release date into the month after which the prison bar no longer applies. Passing that month does not mean approval: the good character assessment still takes place.</p>
<h2>Police checks</h2>
<p>Home Affairs requests a National Police Checking Service check on your behalf if you are ${h.R.afpCheckFromAge} or over; you do not order it. Overseas penal clearance certificates are your responsibility. For permanent visa holders they are needed when, since turning 18 and within the last ${h.R.penalClearanceYears} years or since your first permanent visa (whichever is more recent), you spent ${h.R.penalClearanceOutsideMonths} months or more outside Australia in total and ${h.R.penalClearanceStayDays} days or more in one country. The ${h.a('documents', 'documents and police certificates page')} explains how to get them, and the special case of New Zealand, where Home Affairs asks the Ministry of Justice itself.</p>
<h2>Descent applicants too</h2>
<p>Character is not only a conferral issue. ${h.a('descent', 'Citizenship by descent')} applicants aged 18 or over must also be of good character, assessed on the same factors, and Home Affairs requests an Australian police check if they have spent time in Australia since turning 18.</p>
<h2>Timing your application</h2>
<p>If a bar applies to you, an application lodged now cannot be approved while the bar lasts, so the fee is better spent later. Wait until proceedings close, until court conditions end, or until the release period passes. Separately, a person who ceased to be an Australian citizen cannot be approved within ${h.M.ceasedMonthsBlock} months of that cessation, and anyone assessed as a risk to national security cannot be approved. If your application is refused, the ${h.a('refused', 'refusal page')} explains the letter and the review it may offer.</p>
<h2>Preparing your answers</h2>
<p>Gather court records for any conviction before you start the form, in Australia and abroad, and check whether any court order still applies to you, such as parole, bail or a good behaviour order. Keep your account consistent with what you declared in earlier visa applications: a discrepancy is itself a matter Home Affairs can weigh under honesty.</p>`,
  },
});
