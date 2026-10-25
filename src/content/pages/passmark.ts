import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'passmark',
  group: 'test',
  order: 70,
  tool: { kind: 'mini:aupass' },
  mini: { kind: 'mini:margin' },
  related: ['values', 'mock', 'failed', 'test', 'changes', 'free'],
  sources: ['au_test', 'au_prepare', 'au_foi_tests'],
  en: {
    slug: 'citizenship-test-pass-mark',
    nav: 'Pass mark',
    card: '15 out of 20 and all five values questions: check any score against both rules.',
    title: 'Citizenship Test Pass Mark: 15 of 20 and All 5 Values Right',
    description: 'The Australian citizenship test pass mark is 75%, 15 of 20, with all 5 values questions right. Enter a score to see if it passes and how many mistakes are left.',
    h1: 'Australian citizenship test pass mark, explained with your own score',
    intro: 'Type a total and the number of values questions you got right: the calculator applies both rules and tells you which one decides.',
    resume: (h) => `The pass mark of the Australian citizenship test is ${h.T.passPercent}% overall, which on a test of ${h.T.questions} questions means ${h.need} correct answers, and on top of that all ${h.T.valuesQuestions} questions on Australian values must be right. The two conditions apply together and the values condition comes first: ${h.T.questions - 1} out of ${h.T.questions} with one values mistake is a fail, while ${h.need} out of ${h.T.questions} with all values questions right is a pass. So the most you can get wrong is ${h.T.questions - h.need} questions, all of them outside the values set. There is no partial credit, no weighting between parts and no negative marking for a wrong answer compared with a blank. The result appears on screen at the end of the test. Home Affairs set this rule for tests taken from ${h.date(h.T.valuesSince)}; before then the overall ${h.T.passPercent}% alone decided. The calculator above checks any score in a second.`,
    faqs: (h) => [
      { q: 'Is the pass mark 15 or 16 out of 20?', a: `It is ${h.need}, not more. Home Affairs states the mark as "at least ${h.T.passPercent}% overall", and ${h.T.passPercent}% of ${h.T.questions} is exactly ${h.need}. A score of ${h.need} is enough as long as the ${h.T.valuesQuestions} values questions are all among the correct answers.` },
      { q: 'Are some questions worth more than others?', a: 'No question carries extra points. What makes the values questions special is not their weight but the separate condition: every one of them must be right. Within the overall mark, a question on symbols counts exactly as much as one on the Constitution.' },
      { q: 'Is a blank answer better than a wrong one?', a: 'No. The test counts correct answers, so a blank and a wrong answer both fail to add a point. Since a guess can only help, answer every question, and use the remaining time to review the ones you were unsure of before you finish.' },
    ],
    body: (h) => `
<h2>Every passing and failing combination</h2>
${h.table(['Correct answers', 'Values questions right', 'Result'], [[h.T.questions, `${h.T.valuesQuestions} of ${h.T.valuesQuestions}`, 'pass'], [h.need, `${h.T.valuesQuestions} of ${h.T.valuesQuestions}`, 'pass, no margin'], [h.need - 1, `${h.T.valuesQuestions} of ${h.T.valuesQuestions}`, 'fail on the overall mark'], [h.T.questions - 1, `${h.T.valuesQuestions - 1} of ${h.T.valuesQuestions}`, 'fail on values'], [h.need, `${h.T.valuesQuestions - 1} of ${h.T.valuesQuestions}`, 'fail on values']], `Rule from the Home Affairs test page, updated ${h.date(h.T.pageUpdated)}.`, ['r', 'l', 'l'])}
<h2>Why two rules</h2>
<p>The overall mark checks knowledge: of Australia and its people, of the democratic beliefs, rights and liberties Australians share, and of government and the law. The values rule checks something the department treats as non-negotiable: an understanding of and commitment to the values the pledge asks new citizens to uphold. A candidate can afford to forget the year of Federation or the colour of a flag. Home Affairs has decided a candidate cannot afford to misunderstand freedom of speech, equality between men and women or the rule of law.</p>
<h2>How much margin to aim for</h2>
<p>On the day, a question can be misread or a well-known fact can slip. A practice score exactly at ${h.need} leaves no room for that. A sensible target is ${h.need + 2} or more on fresh practice tests, with no values mistake for several runs in a row. The second calculator on this page shows how many more mistakes you can afford from any position, which is a good way to see how thin a ${h.need}-point pass is.</p>
<h2>What the screen shows</h2>
<p>The test is taken on a computer or tablet and Home Affairs says the result is displayed when you finish. If it is a pass, the department carries on with the rest of the application. If not, it will offer another appointment; sitting again is free, and Home Affairs may refuse an application after ${h.T.appointmentsBeforeRefusal} appointments without a pass. The ${h.a('failed', 'page on failing')} explains how to prepare for the next attempt.</p>
<h2>Common misreadings of the rule</h2>
<p>Three mistakes come up often. The first is thinking the values questions are worth more points: they are not, they simply cannot be missed. The second is thinking there is a separate pass mark for each part of the booklet: there is not, the ${h.T.questions - h.T.valuesQuestions} other questions are pooled. The third is reading old material that gives the rule as ${h.T.passPercent}% alone. That was the rule before ${h.date(h.T.valuesSince)}, and plenty of older guides and videos still describe it. If a practice resource does not report the values questions separately, it is marking with the old rule.</p>
<p>One more detail: the ${h.T.valuesQuestions} values questions are part of the ${h.T.questions}, not added to them. A full test is ${h.T.questions} questions long, of which ${h.T.valuesQuestions} come from Part 4 of the booklet and ${h.T.questions - h.T.valuesQuestions} from the other three parts.</p>
<h2>What share of tests are passed?</h2>
<p>Home Affairs does not publish a regular pass rate. The most recent official figures we found are in a ${h.src('au_foi_tests', 'freedom of information release')} covering two financial years, all before the values rule took effect on ${h.date(h.T.valuesSince)}:</p>
${h.table(['Period', 'Tests passed', 'Tests failed', 'Share passed'], h.P.au.testResults.rows.map((r) => [r.period, h.num(r.pass), h.num(r.fail), h.pc(r.pass / r.total, 1)]), 'Home Affairs, FOI release FA 20/05/00442. Shares calculated by us from the counts.', ['l', 'r', 'r', 'r'])}
<p>These are attempts, not people: the department notes that most applicants who fail go on to pass at a later attempt. They also predate the rule that all ${h.T.valuesQuestions} values questions must be right, so they say nothing about the test as it is marked today. Take them as a reminder that between one attempt in eight and one in six failed even then, and prepare for the stricter rule.</p>
<h2>Practise with the real marking</h2>
<p>Every full test on this site applies both rules: the ${h.a('free', 'free practice tests')}, the ${h.a('mock', 'timed mock test')} and the test on the ${h.a('test', 'main test page')}. They always contain ${h.T.valuesQuestions} values questions, report them separately and tell you which rule failed. To work on the values rule alone, the ${h.a('values', 'values questions page')} draws only from Part 4 of the booklet.</p>`,
  },
});
