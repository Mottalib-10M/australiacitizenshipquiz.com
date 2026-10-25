import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'ocb',
  group: 'study',
  order: 10,
  tool: { kind: 'quiz', props: { mode: 'practice', n: 10, scopeSelect: true } },
  mini: { kind: 'mini:ocbplan' },
  related: ['part1', 'part2', 'part3', 'part4', 'languages', 'studyplan'],
  sources: ['au_ocb', 'au_ocb_pdf', 'au_prepare', 'ccby'],
  en: {
    slug: 'our-common-bond',
    nav: 'Our Common Bond',
    card: 'The four testable parts of the official booklet, what each one covers and how to read it.',
    title: 'Our Common Bond: The Citizenship Test Booklet Explained',
    description: 'Our Common Bond is the official source of citizenship test facts. See what its four testable parts cover, how long they take to read, and practise each part.',
    h1: 'Our Common Bond: the booklet behind every citizenship test question',
    intro: 'Pick a part of the booklet in the practice set below, or all four at once, and check what you already know before you start reading.',
    resume: (h) => `Australian Citizenship: Our Common Bond is the resource booklet published by the Department of Home Affairs, and Home Affairs says every question in the citizenship test is based on it. Only its testable section counts, and that section has ${h.T.guideParts} parts: Australia and its people; Australia's democratic beliefs, rights and liberties; government and the law in Australia; and Australian values. It runs from page ${h.A.partPages.p1[0]} to page ${h.A.partPages.glossary[1]} of the 2020 edition, roughly ${h.num(h.M.ocbWordsTestable)} words including a glossary of ${h.A.glossaryTerms} terms. The ${h.T.valuesQuestions} values questions of every test come from the fourth part, and all of them must be answered correctly. The booklet is free to download in English and in ${h.T.ocbLanguages} community languages, although the test itself is in ${h.T.languageOnly} only. Our practice bank turns the same facts into ${h.count.all} questions written in our own words; the official test questions are not published.`,
    faqs: (h) => [
      { q: 'Is everything in Our Common Bond examined?', a: `No. Only the testable section is used for questions: the four parts and the glossary between the markers "the start of the testable section" and "the end of the testable section". The welcome message, the explanation of the ceremony and the pledge at the front, and the list of websites at the back, are useful background but are not the source of test questions.` },
      { q: 'Which edition of Our Common Bond should I read?', a: `Read the edition linked from the Home Affairs Our Common Bond page. On ${h.date(h.P.retrieved_at)} that was the 2020 edition, which introduced the Australian values part used for the ${h.T.valuesQuestions} values questions. Older printed copies or summaries copied elsewhere may leave out that part, so download the testable section again before you start.` },
      { q: 'Can I reuse the booklet text in my own notes?', a: 'Yes. The booklet is published by the Commonwealth under a Creative Commons Attribution 4.0 licence, so you may copy and adapt it for your own study as long as you credit the source. The Commonwealth Coat of Arms is excluded from that licence. Our questions are adapted from it on the same basis.' },
      { q: 'How many practice questions does this site have for each part?', a: `The bank holds ${h.count.all} questions in total: ${h.inChapter(0)} on Part 1, ${h.inChapter(1)} on Part 2, ${h.inChapter(2)} on Part 3 and ${h.inChapter(3)} on Part 4. Part 4 has its own pool because the real test always includes ${h.T.valuesQuestions} values questions, so practice should cover that part as heavily as the other three together.` },
    ],
    body: (h) => `
<h2>What the booklet is, and what it is not</h2>
<p>Our Common Bond is a study booklet, not a list of questions. Home Affairs writes that all of the information needed to pass is in its first four parts and that nobody has to buy any other package to succeed. The department also says it does not endorse outside material that promises a pass. Our practice questions follow that rule: they come only from the ${h.src('au_ocb_pdf', 'testable section of Our Common Bond')} and are rewritten in plain English, so they help you learn the facts rather than memorise an answer key. The real questions are drawn at random and are never published.</p>
<h2>The four testable parts at a glance</h2>
${h.table(['Part', 'Pages', 'Main subjects', 'Practice questions'], [
  [h.a('part1', 'Part 1: Australia and its people'), `${h.A.partPages.p1[0]} to ${h.A.partPages.p1[1]}`, 'First Australians, settlement, Federation, states, symbols, national days', h.inChapter(0)],
  [h.a('part2', 'Part 2: Democratic beliefs, rights and liberties'), `${h.A.partPages.p2[0]} to ${h.A.partPages.p2[1]}`, 'Rule of Law, freedoms, equality, duties and privileges of citizens', h.inChapter(1)],
  [h.a('part3', 'Part 3: Government and the law'), `${h.A.partPages.p3[0]} to ${h.A.partPages.p3[1]}`, 'Voting, Constitution, Parliament, the three levels, courts and police', h.inChapter(2)],
  [h.a('part4', 'Part 4: Australian values'), `${h.A.partPages.p4[0]} to ${h.A.partPages.p4[1]}`, 'Values in daily life: law, freedoms, equality, respect, community', h.inChapter(3)],
  ['Glossary', `${h.A.partPages.glossary[0]} to ${h.A.partPages.glossary[1]}`, `${h.A.glossaryTerms} terms with example sentences`, 'spread across parts'],
], 'Page numbers of the 2020 edition of the testable section.', ['l', 'l', 'l', 'r'])}
<p>Parts 1 and 3 are the longest and full of names, dates and numbers. Part 2 is short but dense, because nearly every sentence is a principle. Part 4 repeats many ideas from Part 2 but turns them into situations: what you should do if a neighbour plans a crime, whether a religious rule can override the law, whether a woman with better skills may get a job ahead of a man.</p>
<h2>How the parts feed the test</h2>
<p>A test has ${h.T.questions} questions. ${h.T.valuesQuestions} of them come from Part 4 and must all be right, and the others are spread across the rest of the booklet. To pass you need ${h.need} correct answers overall, so the margin is small: ${h.T.questions - h.need} mistakes at most, none of them on values. In practice this means two things. You cannot skip a part, because any of them can supply several questions on the day. And Part 4 deserves more than its page count suggests, because a single slip there fails the whole test.</p>
<h2>Reading it efficiently</h2>
<p>The calculator under this section estimates how many days two full readings take at your pace. A method that works for most people:</p>
<ul>
<li><strong>First pass, for meaning.</strong> Read one part a day without notes. If English is not your first language, read the same part in your own language first; the booklet exists in ${h.T.ocbLanguages} community languages (see the ${h.a('languages', 'page on translations')}).</li>
<li><strong>Second pass, for facts.</strong> Write down every number, date, name and list: ${h.A.firstFleetShips} ships, ${h.A.senatorsPerState} senators per state, the three levels of government, the four responsibilities of a citizen.</li>
<li><strong>Practice by part.</strong> Use the set above with one part selected until you score well, then mix all four.</li>
<li><strong>Full tests last.</strong> Finish with the ${h.a('mock', 'timed mock test')} to get used to ${h.T.minutes} minutes for ${h.T.questions} questions.</li>
</ul>
<h2>Traps that come from the booklet itself</h2>
<p>Some facts look alike and are easy to swap. Victoria is the smallest mainland state, but Tasmania is the smallest state. The Senate is the States' House, the House of Representatives the People's House. Legislative, executive and judicial are the three powers; federal, state and local are the three levels. Voting is compulsory in federal, state and territory elections and in referendums, but the booklet says it may not be compulsory in local elections in some states. The topic pages, such as the ${h.a('states', 'states and territories page')}, set these pairs side by side.</p>
<h2>Where to download it</h2>
<p>The English testable section and the translations are on the ${h.src('au_ocb', 'Home Affairs Our Common Bond page')}. The ${h.src('au_prepare', 'test preparation page')} adds a podcast and an official practice test. Nothing else is required, and the department warns against paying for unofficial material.</p>`,
  },
});
