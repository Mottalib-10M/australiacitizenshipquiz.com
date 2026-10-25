import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'studyplan',
  group: 'test',
  order: 140,
  tool: { kind: 'mini:studyplan' },
  mini: { kind: 'mini:topicmix' },
  related: ['ocb', 'part1', 'free', 'mock', 'languages', 'hardest'],
  sources: ['au_prepare', 'au_ocb', 'au_ocb_pdf'],
  en: {
    slug: 'citizenship-test-study-plan',
    nav: 'Study plan',
    card: 'How many weeks you need from the time you have, and a part-by-part plan to follow.',
    title: 'Citizenship Test Study Plan: Weeks Needed, Part by Part',
    description: 'A study plan for the Australian citizenship test: work out how many weeks you need from your daily time, then follow it part by part through Our Common Bond.',
    h1: 'A study plan for the Australian citizenship test',
    intro: 'Enter the minutes you can spare each day and how many days a week: the planner gives the number of weeks. The plan itself follows.',
    resume: (h) => `Preparing for the Australian citizenship test means learning the testable section of Our Common Bond, about ${h.M.ocbPagesTestable} pages and roughly ${h.num(h.M.ocbWordsTestable)} words in four parts, well enough to answer ${h.T.questions} questions in ${h.T.minutes} minutes with all ${h.T.valuesQuestions} values questions right. A realistic plan has three stages: read each part and practise it on its own, read the whole booklet a second time, then take full timed tests until you pass with a margin. The planner above prices that plan in hours, around two readings of the booklet, a set of practice per part and eight mock tests, and divides it by the time you have. With thirty minutes a day, five days a week, most people are ready in about a month; with an hour a day, in two weeks. Start before you apply: the appointment letter can arrive soon after lodging, and a calm month of preparation is worth more than a hurried week.`,
    faqs: (h) => [
      { q: 'How long does it take to study for the Australian citizenship test?', a: 'It depends on your English and on the time you can give. Reading the booklet twice, practising each part and taking a few full tests adds up to roughly fifteen to twenty hours, which is three to five weeks for most people studying half an hour a day. Strong readers can do it faster.' },
      { q: 'Which part of Our Common Bond should I study first?', a: 'Start with Part 1, which sets the scene: the land, the first Australians, the early history, the states and territories, the symbols and the national days. Then read Part 2 and Part 3, which explain democracy, rights, government and the law, and finish with Part 4 on values, which you should read more than once.' },
      { q: 'Is the podcast enough to prepare?', a: 'The Our Common Bond podcast is a good way to revise on the move, but listening alone rarely fixes details such as dates, numbers of senators or the role of each level of government. Use it alongside the written booklet and regular practice questions, not instead of them.' },
    ],
    body: (h) => `
<h2>Stage 1: one part at a time</h2>
${h.table(['Part of the booklet', 'What it covers', 'Practise it'], [[h.chapters[0], 'land, first Australians, history, states and territories, symbols, national days', h.a('part1', 'Part 1 practice')], [h.chapters[1], 'parliamentary democracy, rule of law, freedoms, responsibilities and privileges of citizens', h.a('part2', 'Part 2 practice')], [h.chapters[2], 'Constitution, three levels of government, parliament, elections, courts, police', h.a('part3', 'Part 3 practice')], [h.chapters[3], 'the values behind the pledge and the community', h.a('part4', 'Part 4 practice')]], 'Parts and contents of the testable section of Our Common Bond.', ['l', 'l', 'l'])}
<p>For each part, read it once without notes, then answer a practice set of ten questions on that part. Read every explanation, including those for the questions you got right. Move on when a set comes back at eight or more. Part 3 usually takes twice as long as the others; give it two sessions.</p>
<h2>Stage 2: the second reading</h2>
<p>Read the four parts again, faster, with a pencil. This time write down only what still surprises you: a date, the number of states, which level of government runs schools or rubbish collection. That list, rarely longer than a page, is what you revise in the last week. In the same week, do a set of ten ${h.a('values', 'values questions')} every day: they are the questions where one mistake fails the test.</p>
<h2>Stage 3: full tests</h2>
<p>Take full ${h.a('free', '20-question practice tests')}, then the ${h.a('mock', 'timed mock test')} with the marking at the end. The target is ${h.need + 2} or more with no values mistake on three fresh tests in a row. When a test goes badly, go back to stage 1 for the part that cost the points rather than repeating full tests.</p>
<h2>Using the official resources</h2>
<p>The department's ${h.src('au_prepare', 'preparation page')} recommends three things: reading ${h.src('au_ocb_pdf', 'Our Common Bond')}, listening to its podcast and doing its practice test. The booklet is available in ${h.T.ocbLanguages} community languages if reading English slows you down; the test, though, is in English, so finish your preparation in English. Home Affairs adds that it does not endorse paid test packages from other organisations; nothing on this site is for sale.</p>
<h2>If you have little time</h2>
<p>If your appointment is a week away, cut stage 2 short. Read Part 4 twice and Part 3 once, skim Parts 1 and 2, and do one full test and one values set each day. The ${h.a('hardest', 'hardest questions page')} lists the topics candidates confuse most, which is where a week of revision pays off best. The second calculator on this page lets you imagine how the ${h.T.questions - h.T.valuesQuestions} non-values questions might split between parts, to decide where to spend your last hours; Home Affairs does not publish the real split.</p>`,
  },
});
