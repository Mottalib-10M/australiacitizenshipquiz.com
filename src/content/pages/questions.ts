import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'questions',
  group: 'test',
  order: 40,
  tool: { kind: 'bank', props: { chapter: 0 } },
  mini: { kind: 'mini:topicmix' },
  related: ['sample', 'values', 'hardest', 'ocb', 'free', 'part3'],
  sources: ['au_ocb_pdf', 'au_ocb', 'au_test'],
  en: {
    slug: 'citizenship-test-questions',
    nav: 'All practice questions',
    card: 'Every practice question with its answer, its explanation and where to check it in the booklet.',
    title: 'Citizenship Test Questions 2026: All Answers, by Part',
    description: 'Australian citizenship test questions with answers, sorted by the four parts of Our Common Bond and by topic, each with an explanation and the heading to check.',
    h1: 'Australian citizenship test questions with answers',
    intro: 'Pick a part of the booklet or a topic, open a question to see the answer, the explanation and the heading where the fact is written.',
    resume: (h) => `Home Affairs does not publish the questions of the Australian citizenship test, so any list of "real questions" found online is either a guess or an adaptation. This page is an adaptation, and says so: ${h.count.all} practice questions written by Radif Partners from the testable section of Australian Citizenship: Our Common Bond, which the Commonwealth publishes under the CC BY 4.0 licence. They are sorted the way the booklet is: Part 1, Australia and its people (${h.inChapter(0)} questions); Part 2, democratic beliefs, rights and liberties (${h.inChapter(1)}); Part 3, government and the law (${h.inChapter(2)}); and Part 4, Australian values (${h.inChapter(3)}), the source of the ${h.T.valuesQuestions} values questions in every test. Each question shows its answer, a sentence that explains it and the heading where it can be checked. Read a part here after reading it in the booklet, then test yourself on a full ${h.T.questions}-question run, where the order and the options change.`,
    faqs: (h) => [
      { q: 'Are these the actual Australian citizenship test questions?', a: 'No. The department keeps its question pool private and changes it. These questions cover the same facts, because they are written from the same booklet the test draws on, but the wording is ours. Anyone who sells "the real questions" is selling something the department has never released.' },
      { q: 'How many questions are in the official question pool?', a: `Home Affairs does not say. What it does say is that every question comes from the testable section of Our Common Bond, so learning the facts of the booklet covers the pool whatever its size. Our bank of ${h.count.all} questions is built to cover each heading of the four parts at least once.` },
      { q: 'Should I memorise the answers on this page?', a: 'Memorising answers works badly, because the real questions are worded differently and the options change. Read the explanation instead and make sure you could answer the question if it were asked another way. The full practice tests shuffle the options to stop answers being learned by position.' },
      { q: 'Which part of the booklet has the most questions?', a: `In our bank the largest share sits in Part 3 on government and the law, which is also the longest part of the booklet and the one candidates find hardest. Part 4 matters most per question, because each test includes ${h.T.valuesQuestions} values questions and one mistake there fails the test.` },
    ],
    body: (h) => `
<h2>The bank at a glance</h2>
${h.table(['Part of Our Common Bond', 'Questions in our bank'], [[h.chapters[0], h.inChapter(0)], [h.chapters[1], h.inChapter(1)], [h.chapters[2], h.inChapter(2)], [h.chapters[3], h.inChapter(3)], ['Total', h.count.all]], `Counts read from the question file at build time; booklet: testable section, © Commonwealth of Australia 2020, CC BY 4.0.`, ['l', 'r'])}
<h2>By topic</h2>
<p>The selector above also opens narrower topics, each with its own page: ${h.a('states', 'states and territories')} (${h.inTopic('states')} questions), ${h.a('symbols', 'national symbols')} (${h.inTopic('symbols')}), ${h.a('days', 'national days')} (${h.inTopic('days')}), ${h.a('levels', 'the three levels of government')} (${h.inTopic('levels')}), ${h.a('parliament', 'parliament and voting')} (${h.inTopic('parliament')}), ${h.a('constitution', 'the Constitution and referendums')} (${h.inTopic('constitution')}), ${h.a('executive', 'the King, the Governor-General and the Prime Minister')} (${h.inTopic('executive')}), ${h.a('courts', 'courts, laws and police')} (${h.inTopic('courts')}), ${h.a('rights', 'rights and liberties')} (${h.inTopic('rights')}) and ${h.a('responsibilities', 'responsibilities of citizens')} (${h.inTopic('responsibilities')}). Topics follow the headings of the booklet, so a topic page and the booklet chapter can be read side by side.</p>
<h2>How a question is written</h2>
<p>Each question starts from one sentence of fact in the booklet. We restate it as a question with one right answer and two or three wrong ones that a candidate could plausibly pick: a neighbouring state, a nearby date, a function that belongs to another level of government. The explanation then gives the fact in plain words and, where it helps, the reason behind it. The heading shown under "Where to check" is the place in ${h.src('au_ocb_pdf', 'the testable section')} where the fact sits, so you can confirm every answer against the source rather than trusting us.</p>
<p>Some facts are deliberately left out: who holds an office now, the names of current ministers, anything that has changed since the booklet was printed. The test draws on the booklet, and a question built on yesterday's news would teach the wrong thing.</p>
<h2>A good way to read the list</h2>
<p>Do not read the answers first. Open each question, answer it in your head, then check. Mark the ones you got wrong and come back to them the next day. Once a part feels easy, close this page and take a ${h.a('free', 'full practice test')}, where the same facts appear in a different order with the options shuffled. The ${h.a('sample', 'sample questions page')} gives a short mixed set when you only have five minutes, and the selector above jumps straight to any part or topic when you want to revise one area before bed.</p>
<h2>Values questions</h2>
<p>The ${h.inChapter(3)} questions of Part 4 are the source of the ${h.T.valuesQuestions} values questions in each test, and they are marked differently: all must be right. They test whether you understand values such as freedom of speech, equality of men and women, the rule of law and a fair go, and how they apply in everyday situations. The ${h.a('values', 'values questions page')} drills them on their own, with the same explanations as here.</p>`,
  },
});
