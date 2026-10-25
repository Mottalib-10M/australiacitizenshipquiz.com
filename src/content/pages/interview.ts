import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'interview',
  group: 'test',
  order: 90,
  tool: { kind: 'mini:docs' },
  mini: { kind: 'mini:whosits' },
  related: ['testday', 'exempt', 'over60', 'children', 'documents', 'aftertest'],
  sources: ['au_interview', 'au_test', 'au_pr'],
  en: {
    slug: 'citizenship-interview',
    nav: 'Citizenship interview',
    card: 'Who is interviewed instead of tested, what is checked and what to bring.',
    title: 'Citizenship Interview Australia: Who, What It Checks, ID',
    description: 'The Australian citizenship interview: who has one instead of the test, what is checked at 16 or 17, at 60 and over or with an impairment, and the ID to bring.',
    h1: 'The Australian citizenship interview',
    intro: 'Check your identity documents above, then see what the interview is for and how it differs from the test appointment.',
    resume: (h) => `The citizenship interview is a meeting with a Home Affairs officer to confirm your identity and discuss your application. It takes two forms. Applicants aged ${h.T.ages[0]} to ${h.T.ages[1]} meet an officer at the start of their test appointment, before they sit the test. Applicants who do not sit the test, such as people aged ${h.T.ages[0] - 2} or ${h.T.ages[0] - 1}, people aged ${h.T.ages[1] + 1} or over and people with an incapacity, may be called to an interview on its own. At ${h.T.ages[0] - 2} or ${h.T.ages[0] - 1}, the officer may check that you understand the nature of your application, have a basic knowledge of English and understand the responsibilities and privileges of citizenship. From ${h.T.ages[1] + 1}, or with a hearing, speech or sight impairment, the check is that you understand what you are applying for, and a family member or another person can come with you; an interpreter can be arranged. Bring an original photo ID: copies and phone images are refused.`,
    faqs: (h) => [
      { q: 'What questions are asked at the citizenship interview?', a: 'Home Affairs does not publish a list. It says the officer confirms your identity and discusses your application, so expect questions on the details you gave: names, dates, addresses, travel, family. For 16 and 17 year olds, the officer may also check basic English and an understanding of what citizenship involves.' },
      { q: 'Can I bring an interpreter to the citizenship interview?', a: `If you are aged ${h.T.ages[1] + 1} or over, have a hearing, speech or sight impairment, or claim an incapacity, Home Affairs says it can arrange an interpreter at the appointment and that a family member or another person can attend with you. This differs from the test itself, which you sit alone.` },
      { q: 'Does everyone who skips the test get an interview?', a: 'Not necessarily. The department says applicants who do not need to sit the test may have an interview, and that it will contact you with the details if it needs one. If no interview is needed, the application simply continues to a decision.' },
    ],
    body: (h) => `
<h2>Two settings, one purpose</h2>
${h.table(['', 'Test appointment', 'Interview on its own'], [['Who', `most applicants aged ${h.T.ages[0]} to ${h.T.ages[1]}`, `people who do not sit the test, if Home Affairs asks`], ['What happens', 'identity and eligibility checked, photo taken, then the test', 'identity confirmed and application discussed'], ['Someone with you', 'no, the test is sat alone', 'a family member or another person, in the cases listed'], ['Interpreter', 'no; the test is in English with a listen option', 'can be arranged in the cases listed'], ['ID', 'original photo ID', 'original photo ID']], `From the Home Affairs pages on the interview and test (test page updated ${h.date(h.T.pageUpdated)}).`, ['l', 'l', 'l'])}
<h2>What the officer checks, by situation</h2>
<p><strong>Aged ${h.T.ages[0] - 2} or ${h.T.ages[0] - 1}.</strong> Teenagers of this age apply on their own form and do not sit the test, but they may have to show three things: that they understand the nature of the application, that they have a basic knowledge of English, and that they understand the responsibilities and privileges of citizenship. Reading the ${h.a('responsibilities', 'responsibilities of citizens')} and the values in ${h.a('part4', 'Part 4 of the booklet')} is good preparation.</p>
<p><strong>Aged ${h.T.ages[1] + 1} or over, or with a hearing, speech or sight impairment.</strong> The officer may check that you understand what you are applying for. A family member or another person can attend, and an interpreter can be arranged. There is no knowledge test.</p>
<p><strong>With a permanent or enduring incapacity.</strong> The department may need to verify the claim of incapacity, usually through the medical evidence provided with the application. Again, someone can attend with you and an interpreter can be arranged.</p>
<h2>Identity documents</h2>
<p>Bring an original photo identity document, such as a passport, an Australian driver licence or an Australian proof of age card. The department does not accept certified copies or electronic images, and an appointment without photo ID is moved to a later date. The identity documents provided with the application are a separate matter: Home Affairs asks for ${h.R.identityDocs} documents that together show your birth name, date of birth and sex, a photo, a signature and your current address. The checklist at the top of this page tells you which element is missing.</p>
<h2>After the interview</h2>
<p>Processing continues and the department writes when it needs more information or when it has decided. If the application is approved and a ceremony is required, the invitation usually arrives about ${h.R.invitationWeeksAhead} weeks before the date. If no ceremony is required, for example for a child under 16 on a parent's form, the certificate is posted by registered mail once the application is approved. The ${h.a('aftertest', 'page on the steps after the test')} gives the current official waits.</p>
<h2>Preparing without stress</h2>
<p>Read your own application again before the interview, because the questions are about it. Bring any document the letter mentions, and note changes since you applied (a new address, a new passport, a trip) so you can mention them. If you sit the test at the same appointment, the ${h.a('testday', 'test day page')} covers the rest of the morning.</p>`,
  },
});
