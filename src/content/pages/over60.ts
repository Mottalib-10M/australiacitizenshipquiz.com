import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'over60',
  group: 'eligibility',
  order: 120,
  tool: { kind: 'mini:whosits' },
  mini: { kind: 'mini:online' },
  related: ['exempt', 'interview', 'residence', 'concession', 'cost'],
  sources: ['au_pr', 'au_test', 'au_1298i', 'au_concession'],
  en: {
    slug: 'citizenship-over-60',
    nav: 'Applicants aged 60 and over',
    card: 'No citizenship test from 60, a lower fee on the other situations form, and the same residence rule.',
    title: 'Citizenship Over 60 in 2026: No Test, Fee and Residence Rule',
    description: 'Applying for Australian citizenship at 60 or over: no citizenship test, the other situations form and fee, a possible interview and the residence rule kept.',
    h1: 'Australian citizenship for applicants aged 60 and over',
    intro: 'Enter your age on the day Home Affairs will receive your application to see whether you sit the test, then check how you can lodge.',
    resume: (h) => `An applicant who is ${h.T.ages[1] + 1} or older on the day Home Affairs receives a citizenship by conferral application does not sit the citizenship test. The general eligibility form ${h.B.conferralForms.general} is written for people aged ${h.T.ages[0]} to ${h.T.ages[1]}, so older applicants use the other situations application, form ${h.B.conferralForms.other}. Form 1298i of July 2026 sets its fee at ${h.aud(h.F.otherSituations)}, or ${h.aud(h.F.otherSituationsConcession)} for the primary holder of a valid Pensioner Concession Card; the Home Affairs permanent resident page still shows the older ${h.aud(h.B.stalePage.otherSituations)}. Age removes the test, not the residence requirement: you still need ${h.R.lawfulYears} years living in Australia on a valid visa, the last ${h.R.prMonths} months as a permanent resident, and no more than ${h.R.maxAbsenceDays} days away, ${h.R.maxAbsenceLast12m} of them at most in the final year. Character, identity and a close link with Australia are assessed as for everyone, an interview may be held to confirm identity, and you must be in Australia when the decision is made.`,
    faqs: (h) => [
      { q: 'Which day decides whether I am counted as 60 or over?', a: `The day Home Affairs receives your application. The test page says people aged ${h.T.ages[0]} to ${h.T.ages[1]} on that day generally sit the test, and those aged ${h.T.ages[1] + 1} or over when they apply do not. Turning 60 while the file is being processed does not change anything; turning 60 before you lodge does.` },
      { q: 'Is the interview for older applicants a test in disguise?', a: 'No. Home Affairs describes it as a way to confirm your identity and ask about your application, so that it is satisfied you understand what you are applying for. There is no score and no set of knowledge questions. Bring original photo identification and any documents named in your appointment letter.' },
      { q: 'Can I travel overseas for long periods once I have applied at 60?', a: `Be careful. For applications based on being aged 60 or over, Home Affairs must not approve the application while you are outside Australia, unless a special residence rule or the partner discretion helped you meet the residence requirement. Your trips before applying also count against the limit of ${h.R.maxAbsenceDays} days in ${h.R.lawfulYears} years.` },
      { q: 'Does the age pension give me the concession fee?', a: 'Only through the card. The concession needs a valid Pensioner Concession Card issued by Services Australia or the Department of Veterans’ Affairs, with your name as primary cardholder. Health Care Cards and Seniors Health Cards are not accepted. Send a copy of both sides of the card with the application, certified if you lodge on paper.' },
    ],
    body: (h) => `
<h2>What changes at 60</h2>
<p>Home Affairs lists applicants aged ${h.T.ages[1] + 1} or over at the time they apply among those who ${h.a('exempt', 'do not sit the citizenship test')}. For you, the knowledge and English requirements are not checked through the 20 questions on Our Common Bond, so there is no booklet to learn and no appointment to pass. The exemption is automatic and needs no medical evidence; your date of birth on your identity documents is the proof.</p>
<h2>What does not change</h2>
<p>Everything else in the conferral checklist applies. The ${h.a('residence', 'general residence requirement')} is the same as for a 30-year-old. Good character is assessed, and Home Affairs requests an Australian police check from age ${h.R.afpCheckFromAge}. Overseas police certificates are needed if, since turning 18 and within the last ${h.R.penalClearanceYears} years, you spent ${h.R.penalClearanceOutsideMonths} months or more outside Australia with ${h.R.penalClearanceStayDays} days or more in one country, which can catch retirees who spend long seasons abroad. A close and continuing link to Australia is assessed too, from where you live, your property and your family.</p>
<h2>The form and the fee</h2>
${h.table(['Situation', 'Form', 'Fee (form 1298i, July 2026)'], [[`Aged ${h.T.ages[0]} to ${h.T.ages[1]}`, h.B.conferralForms.general, h.aud(h.F.general)], [`Aged ${h.T.ages[1] + 1} or over`, h.B.conferralForms.other, h.aud(h.F.otherSituations)], [`Aged ${h.T.ages[1] + 1} or over, Pensioner Concession Card`, h.B.conferralForms.other, h.aud(h.F.otherSituationsConcession)], ['Fee exemption (for example 90 days in the permanent forces)', h.B.conferralForms.other, 'nil']], 'The permanent resident page still quotes older amounts; form 1298i is the fee schedule.', ['l', 'l', 'r'])}
<p>Form 1298i says fees are indexed on 1 July each year, so check the ${h.src('au_1298i', 'current fee form')} on the day you pay. The ${h.a('concession', 'concession page')} explains who counts as a primary cardholder.</p>
<h2>Online or on paper</h2>
<p>The Home Affairs pages we read describe online lodgement in ImmiAccount for applicants aged ${h.R.onlineAges[0]} to ${h.R.onlineAges[1]} who are not claiming a concession, and send people aged ${h.T.ages[1] + 1} or over to a separate page for their situation. Plan on following the instructions on form ${h.B.conferralForms.other} itself; a paper application goes with certified copies of your documents, and the fee is prepaid through ImmiAccount’s My Payments section unless you claim an exemption. The second tool on this page shows the lodging route for your age.</p>
<h2>The interview</h2>
<p>Instead of a test, Home Affairs may invite you to an interview. Staff confirm who you are, take your photo and talk through the application. Bring an original photo identity document such as a passport or an Australian driver licence; certified copies and phone images are not accepted. The ${h.a('interview', 'interview page')} describes the appointment step by step.</p>
<h2>Being in Australia for the decision</h2>
<p>For applications made on the basis of being aged 60 or over, the criteria page says Home Affairs must not approve while you are outside Australia, with two exceptions: a special residence requirement or the spouse and interdependent partner discretion. Long family visits abroad are best planned after the ceremony, where you make the pledge and become a citizen.</p>
<h2>Documents to gather</h2>
<p>Identity is assessed from birth, which can be harder for people who migrated decades ago. Home Affairs asks for ${h.R.identityDocs} documents that together show your birth name, date of birth and sex, a photograph, a signature and your current address. A full birth certificate is preferred; when it cannot be found, documents issued before your arrival that together confirm your identity can be used. British migrants who arrived before ${h.date(h.B.britishArrivedBefore)} without proof of entry can send employment, tax or school records instead, and the National Archives of Australia can help with older papers. The ${h.a('documents', 'documents page')} lists the rest.</p>`,
  },
});
