import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'changes',
  group: 'test',
  order: 130,
  tool: { kind: 'mini:oldnew' },
  mini: { kind: 'mini:aupass' },
  related: ['values', 'passmark', 'cost', 'test', 'part4', 'processing'],
  sources: ['au_prepare', 'au_test', 'au_1298i', 'au_history'],
  en: {
    slug: 'citizenship-test-changes',
    nav: 'Changes and new rules',
    card: 'What changed in the test since 2020, the July 2026 fees and what has not changed.',
    title: 'Citizenship Test Changes: Values Rule and 2026 Fee Update',
    description: 'Changes to the Australian citizenship test: values questions since November 2020, the 5/5 rule, July 2026 fee indexation and which official pages are outdated.',
    h1: 'Changes to the Australian citizenship test and its rules',
    intro: 'Type a score and the number of values questions missed: the tool shows the verdict under the rule in force and under the old 75% rule.',
    resume: (h) => `The last change to the Australian citizenship test itself took effect for tests sat on or after ${h.date(h.T.valuesSince)}. Home Affairs revised the questions, added questions on Australian values and introduced a rule for everyone: all ${h.T.valuesQuestions} values questions must be answered correctly, together with a mark of at least ${h.T.passPercent}% overall. The study booklet, Our Common Bond, was updated at the same time with a new part on Australian values and a revised practice test. Since then the format has stayed the same: ${h.T.questions} questions, ${h.T.minutes} minutes, in English. What does change every year is the fee: citizenship fees are indexed to the consumer price index on 1 July, and form 1298i of July 2026 sets the general conferral fee at ${h.aud(h.F.general)}. Several Home Affairs web pages still show older amounts, such as ${h.aud(h.F.stale.general)}, so always check the fee form. On ${h.date(h.P.retrieved_at)} no further change to the test had been announced on the Home Affairs website.`,
    faqs: (h) => [
      { q: 'When did the Australian values questions start?', a: `For tests sat on or after ${h.date(h.T.valuesSince)}. From that date every applicant sits the updated test, with revised questions, ${h.T.valuesQuestions} questions on Australian values and the requirement that all of them are right, on top of the ${h.T.passPercent}% overall mark.` },
      { q: 'Why do some websites still say the citizenship fee is $285?', a: `Because that figure is still printed on some Home Affairs pages that have not been updated. The fee schedule is form 1298i, which since July 2026 gives ${h.aud(h.F.general)} for general eligibility and ${h.aud(h.F.generalConcession)} with a Pensioner Concession Card. Fees are indexed every 1 July.` },
      { q: 'Is a new citizenship test coming in 2027?', a: `On ${h.date(h.P.retrieved_at)}, the Home Affairs test and preparation pages announced no new change. Any change would come with an updated booklet and a start date, as the 2020 change did. This page and the question bank are reviewed whenever the department publishes one.` },
    ],
    body: (h) => `
<h2>Timeline of the test</h2>
${h.table(['Date', 'Change'], [[String(h.H.firstCeremonyYear), 'first Australian citizenship ceremony'], [String(h.H.testSince), 'a short multiple-choice citizenship test is introduced'], [h.date(h.T.valuesSince), `revised questions, ${h.T.valuesQuestions} values questions, all must be right; Our Common Bond updated`], ['1 July each year', 'citizenship fees indexed to the consumer price index'], ['July 2026', `form 1298i: general eligibility ${h.aud(h.F.general)}, concession ${h.aud(h.F.generalConcession)}`]], 'Home Affairs history of citizenship, test preparation page and form 1298i.', ['l', 'l'])}
<h2>The 2020 change in practice</h2>
<p>Before ${h.date(h.T.valuesSince)}, a candidate passed with ${h.T.passPercent}% overall, whatever the questions missed. Since then, the ${h.T.valuesQuestions} values questions form a gate of their own. The tool above shows the effect on the same answers: a candidate with ${h.T.questions - 2} correct answers and one values mistake would have passed under the old rule and fails under the current one. Home Affairs explains on its ${h.src('au_prepare', 'preparation page')} that the booklet was updated at the same time and contains all the information needed, including the values and a revised practice test.</p>
<p>For candidates, the practical lesson is simple: study material written before late 2020 is incomplete. It lacks the values part of the booklet and marks with the old rule. Every test on this site uses the current rule and always includes ${h.T.valuesQuestions} values questions.</p>
<h2>Fees: a yearly change</h2>
<p>Citizenship fees are set in the Australian Citizenship Regulation 2016 and indexed on 1 July each year. The current schedule is ${h.src('au_1298i', 'form 1298i')}, design date July 2026. The table compares it with what some Home Affairs pages still showed when we checked on ${h.date(h.P.retrieved_at)}.</p>
${h.table(['Application', 'Form 1298i (July 2026)', 'Older figure still on a web page'], [['Conferral, general eligibility', h.aud(h.F.general), h.aud(h.F.stale.general)], ['Renunciation', h.aud(h.F.renunciation), h.aud(h.F.stale.renunciation)], ['Resumption', h.aud(h.F.resumption), h.aud(h.F.stale.resumption)]], 'This site follows the fee form and flags the outdated pages.', ['l', 'r', 'r'])}
<p>Processing times change monthly rather than yearly; the ${h.a('processing', 'processing page')} gives the table Home Affairs updated on ${h.date(h.PT.pageUpdated)}.</p>
<h2>What has not changed</h2>
<p>The residence requirement for most permanent residents has stayed at ${h.R.lawfulYears} years of lawful residence, including ${h.R.prMonths} months as a permanent resident, with at most ${h.R.maxAbsenceDays} days away in the ${h.R.lawfulYears} years and ${h.R.maxAbsenceLast12m} in the last year. The test format has stayed at ${h.T.questions} questions in ${h.T.minutes} minutes. The pledge, the ceremony and the rule that you become a citizen only when you make the pledge are unchanged. Dual citizenship has been allowed since ${h.date(h.H.dualFrom)}.</p>
<h2>How this site follows changes</h2>
<p>The figures on every page are read from one data file, checked against the Home Affairs pages and the fee form, and dated at the foot of each page. A script compares the fee form and the processing table with that file; until the site is published it is run by hand, and automatically each month once publication is done. When the department announces a change to the test, the bank and the pages are revised before the start date.</p>`,
  },
});
