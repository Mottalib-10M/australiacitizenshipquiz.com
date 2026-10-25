import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'exempt',
  group: 'test',
  order: 110,
  tool: { kind: 'mini:whosits' },
  mini: { kind: 'mini:child' },
  related: ['over60', 'children', 'interview', 'english', 'test', 'born'],
  sources: ['au_test', 'au_interview', 'au_pr'],
  en: {
    slug: 'citizenship-test-exemptions',
    nav: 'Who skips the test',
    card: 'Under 18, 60 and over, incapacity and three special groups: who does not sit the test.',
    title: 'Citizenship Test Exemptions: Under 18, Over 60, Incapacity',
    description: 'Who skips the Australian citizenship test: applicants under 18 or 60 and over, people with an incapacity, three special groups, and what replaces the test.',
    h1: 'Who does not have to sit the Australian citizenship test',
    intro: 'Enter your age on the day your application is received: the tool says whether you sit the test. The full list of exemptions follows.',
    resume: (h) => `Home Affairs lists six groups of applicants for citizenship by conferral who do not sit the citizenship test: people aged ${h.T.ages[0] - 1} or under when they apply; people aged ${h.T.ages[1] + 1} or over when they apply; the child of a former Australian citizen who lost citizenship in specific circumstances; people born in Papua before ${h.date(h.M.papuaBefore)} to an Australian citizen born in what is now Australia; people born in Australia who are stateless; and people unable to sit the test because of an incapacity or impairment. Age is taken on the day the department receives the application, so a 59-year-old who applies a week before turning 60 sits the test. Those who skip the test may still be called to an interview, where the officer confirms identity and, depending on the case, checks that the applicant understands the application. Skipping the test does not mean skipping the other requirements: residence, character and the ceremony still apply to most of these applicants.`,
    faqs: (h) => [
      { q: 'Do I need to sit the citizenship test if I am over 60?', a: `No, if you are ${h.T.ages[1] + 1} or older on the day Home Affairs receives your application. You may be interviewed so the officer can confirm your identity and check that you understand what you are applying for. A family member can come with you and an interpreter can be arranged. The residence requirement still applies.` },
      { q: 'How do I claim an exemption for incapacity?', a: 'Tell the department in your application and provide evidence from a medical practitioner about the condition and how it prevents you from understanding the test. Home Affairs may need to verify the claim, sometimes at an interview where a family member or another person can attend with you. The decision rests on the evidence, not on the diagnosis alone.' },
      { q: 'Does a child under 16 sit the citizenship test?', a: `No. Applicants aged ${h.T.ages[0] - 1} or under when the application is made do not sit the test. A child under ${h.R.childExemptUnder} can be included on a parent's form at no fee, and does not have to meet the residence requirement or attend the ceremony, although children are welcome to make the pledge.` },
    ],
    body: (h) => `
<h2>The six exemptions</h2>
${h.table(['Group', 'What replaces the test'], [[`Aged ${h.T.ages[0] - 1} or under when applying`, `possible interview; at ${h.T.ages[0] - 2} or ${h.T.ages[0] - 1}, basic English and understanding may be checked`], [`Aged ${h.T.ages[1] + 1} or over when applying`, 'possible interview to check you understand the application'], ['Child of a former citizen who lost citizenship in specific circumstances', 'no test'], [`Born in Papua before ${h.date(h.M.papuaBefore)} to an Australian citizen born in Australia`, 'no test'], ['Born in Australia and stateless', 'no test'], ['Incapacity or impairment preventing the test', 'medical evidence, possible interview']], `Home Affairs test page, updated ${h.date(h.T.pageUpdated)}.`, ['l', 'l'])}
<h2>Age counts on the day of receipt</h2>
<p>The age band of ${h.T.ages[0]} to ${h.T.ages[1]} is checked on the day Home Affairs receives the application, not on the day of the decision or the appointment. Someone who turns ${h.T.ages[1] + 1} while the application is being processed still sits the test; someone who applies on or after their ${h.T.ages[1] + 1}th birthday does not. If you are close to a birthday, the choice of lodging date matters, but it should never push you to lodge before the ${h.a('residence', 'residence requirement')} is met: an application lodged before the residence requirement is met can be refused.</p>
<h2>Teenagers aged ${h.T.ages[0] - 2} and ${h.T.ages[0] - 1}</h2>
<p>A child of ${h.T.ages[0] - 2} or ${h.T.ages[0] - 1} cannot be included on a parent's form and applies alone, through the "other situations" form, at ${h.aud(h.F.otherSituations)} on form 1298i. They do not sit the test, but at an interview they may have to show they understand the application, have a basic knowledge of English and understand the responsibilities and privileges of citizenship. They also have to meet the residence requirement, unless they show it would cause significant hardship. The ${h.a('children', 'page on children')} covers the under-16 case.</p>
<h2>Incapacity</h2>
<p>The exemption covers a permanent or enduring physical or mental incapacity that means the person cannot understand the nature of the application, or cannot demonstrate the knowledge the test checks. It is not a shortcut for nervousness or limited English: for those, Home Affairs offers headsets, help with the screen and, in the cases it lists, the Assisted Test described on the ${h.a('english', 'English page')}. People exempt for incapacity are also not required to attend the ceremony.</p>
<h2>The three rarer groups</h2>
<p>The child of a former citizen who lost citizenship in the circumstances the law sets out, a person born in Papua before ${h.date(h.M.papuaBefore)} to an Australian-born citizen, and a stateless person born in Australia are each covered by their own provisions of the Australian Citizenship Act 2007. They are not asked to sit the test, and some of them use a specific application form rather than the general one. The ${h.a('born', 'page on people born in Australia')} explains the main rule of citizenship by birth.</p>
<h2>Exempt from the test, not from the rest</h2>
<p>An exemption from the test changes one step. The residence requirement still applies, save for children under ${h.R.childExemptUnder} and the specific groups the law exempts; character is assessed from age 18; most applicants aged 16 or over at the time of applying must attend a ceremony and make the pledge; and the fee depends on the form. The ${h.a('over60', 'page for applicants aged 60 and over')} looks at that case in detail.</p>`,
  },
});
