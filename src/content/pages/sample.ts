import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'sample',
  group: 'test',
  order: 50,
  tool: { kind: 'quiz', props: { mode: 'practice', n: 8, scopeSelect: false } },
  mini: { kind: 'mini:aupass' },
  related: ['questions', 'free', 'values', 'test', 'part1', 'studyplan'],
  sources: ['au_ocb_pdf', 'au_prepare', 'au_test'],
  en: {
    slug: 'sample-citizenship-test-questions',
    nav: 'Sample questions',
    card: 'Eight mixed sample questions with the answer after each one: a five-minute check.',
    title: 'Sample Citizenship Test Questions: 8 Quick Australian Ones',
    description: 'Sample Australian citizenship test questions: eight mixed questions with the answer and explanation after each, to see the style and level before a full test.',
    h1: 'Sample Australian citizenship test questions',
    intro: 'Eight questions from all four parts, corrected one by one. A quick way to see what the test asks before you study or sit a full run.',
    resume: (h) => `The questions in the Australian citizenship test are short, factual and multiple choice: one line of question, three or four options, one right answer. They test the facts of the four parts of Our Common Bond and, through ${h.T.valuesQuestions} of the ${h.T.questions} questions, whether you understand Australian values well enough to apply them to a situation. The sample above gives eight questions drawn from all four parts and shows the answer and its explanation as soon as you choose, so you can judge the style and the level in a few minutes. If you get six or more right without having studied, the booklet will feel familiar; if fewer, start with Part 1 and Part 3, which carry the most facts. Remember that the real test marks differently from a sample: ${h.need} correct answers out of ${h.T.questions} and every values question right, with the result shown on screen when you finish.`,
    faqs: (h) => [
      { q: 'What does a typical citizenship test question look like?', a: 'It is one short sentence with three or four answers, for example asking which level of government is responsible for a service, what a national day commemorates or what a value means in practice. There are no trick formats, no written answers and no spoken part. Reading carefully matters more than speed.' },
      { q: 'Is there an official sample test?', a: `Yes. The booklet Our Common Bond ends its testable section with a set of practice questions, and the Home Affairs preparation page links to it. It is short, which is why many candidates add longer practice. Our sample and full tests are adapted from the same booklet under its CC BY 4.0 licence.` },
      { q: 'Are true or false questions used in the test?', a: `Home Affairs describes the test as ${h.T.questions} multiple choice questions and does not publish their exact form. Some of our practice questions use a true or false format to vary the drill, but most have three or four options, which is the safer way to prepare.` },
    ],
    body: (h) => `
<h2>Three kinds of question</h2>
<p>Looking across the four parts of ${h.src('au_ocb_pdf', 'Our Common Bond')}, the questions fall into three families, and each one rewards a different way of studying.</p>
<p><strong>Plain facts.</strong> A date, a place, a name of an institution, a colour of a flag. These come mostly from Part 1 on Australia and its people and from the symbols. They are the easiest marks once the booklet has been read twice, and the hardest to guess without it.</p>
<p><strong>How the system works.</strong> Which level of government runs a service, what the Senate does, how a referendum passes, what the Governor-General's role is. These come from Parts 2 and 3. They reward understanding over memory: once you see why there are three levels of government, the questions answer themselves.</p>
<p><strong>Values in practice.</strong> A short situation and a choice: what freedom of speech allows and does not allow, what equality between men and women means at work, why everyone must obey the law. These are the values questions, drawn from Part 4, and the ${h.T.valuesQuestions} of them in each test must all be right.</p>
<h2>What the sample tells you</h2>
${h.table(['Your sample score', 'What it suggests'], [['7 or 8 of 8', 'You know the material; move on to full tests'], ['5 or 6 of 8', 'Read the booklet once more, then practise by part'], ['4 or fewer', 'Start with a plan: read each part, then practise it']], 'A rough guide from eight questions; a full test of 20 is the real check.', ['l', 'l'])}
<p>Eight questions are a small sample: one lucky guess moves the score a lot. Use it to decide where to start, not whether you are ready. Readiness shows on ${h.a('free', 'full 20-question tests')}, taken several times on fresh questions.</p>
<h2>Next steps after the sample</h2>
<p>If the plain facts went wrong, read ${h.a('part1', 'Part 1, Australia and its people')}, which covers the land, the first Australians, the early history, the states and territories, the symbols and the national days. If the system questions went wrong, ${h.a('part3', 'Part 3 on government and the law')} is the chapter to read slowly. If a values question went wrong, go straight to the ${h.a('values', 'values questions')}, because that is the one area where the real test forgives nothing.</p>
<p>When you want to see every question with its answer before testing yourself, the ${h.a('questions', 'full question list')} is sorted by part and by topic. The ${h.a('studyplan', 'study planner')} turns the time you have each day into a number of weeks until the appointment.</p>
<h2>A note on wording</h2>
<p>Real questions are worded by the department and are not published, so do not expect to meet these exact sentences. What carries over is the fact. If you can explain why an answer is right, you will recognise the same fact in another wording on the day. Each explanation on this site is written to give you that reason, not just the letter of the answer.</p>`,
  },
});
