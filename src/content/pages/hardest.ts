import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'hardest',
  group: 'test',
  order: 150,
  tool: { kind: 'quiz', props: { mode: 'practice', chapter: 2, n: 10, scopeSelect: true } },
  mini: { kind: 'mini:margin' },
  related: ['part3', 'levels', 'constitution', 'executive', 'values', 'mock'],
  sources: ['au_ocb_pdf', 'au_test'],
  en: {
    slug: 'hardest-citizenship-test-questions',
    nav: 'Hardest questions',
    card: 'The topics candidates mix up most, with a practice set that starts on Part 3.',
    title: 'Hardest Citizenship Test Questions: Topics People Mix Up',
    description: 'The hardest Australian citizenship test questions: levels of government, the Senate, referendums, the Governor-General and values traps. Practise each one here.',
    h1: 'The hardest Australian citizenship test questions, and why',
    intro: 'The set above starts on Part 3, where most points are lost. Switch to any part or topic with the selector.',
    resume: (h) => `The questions that cost candidates most in the Australian citizenship test are not obscure facts but pairs of similar ideas that are easy to swap: which level of government is responsible for a service, what the House of Representatives does compared with the Senate, how a referendum passes compared with an ordinary law, what the Governor-General does compared with the Prime Minister, and the difference between the Constitution and an act of parliament. Most of them sit in Part 3 of Our Common Bond, on government and the law, which is also the longest part of the testable section. The other source of lost points is the values questions, where an answer that sounds reasonable adds a condition the booklet does not. Because ${h.T.valuesQuestions} values questions must all be right and only ${h.T.questions - h.need} mistakes are allowed in total, two confusions can decide the result. The practice set above starts on Part 3 and the sections below take the classic mix-ups one by one.`,
    faqs: (h) => [
      { q: 'What is the hardest part of the Australian citizenship test?', a: 'For most candidates, Part 3 of the booklet on government and the law: the Constitution, the three levels of government, parliament, elections, the courts. It has the most technical vocabulary and the most look-alike facts. The values questions are not harder in content, but they allow no mistake at all.' },
      { q: 'How do I stop mixing up federal, state and local responsibilities?', a: 'Learn one or two anchor examples for each level and reason from them. Defence, immigration and foreign affairs are federal; schools, hospitals and police are run by the states and territories; rubbish collection, local roads and parks are for local councils. Most questions on levels can be solved from those anchors.' },
      { q: 'Are there trick questions in the citizenship test?', a: 'Home Affairs does not describe any. What candidates call trick questions are usually options that differ by one word, such as "only", "always" or "never", or a function given to the wrong institution. Reading the question and each option to the end, without rushing, removes most of them.' },
    ],
    body: (h) => `
<h2>The classic mix-ups</h2>
${h.table(['People confuse', 'The distinction to remember'], [['Federal, state and local government', 'national matters (defence, immigration, foreign affairs) vs services close to home run by states (schools, hospitals, police) vs local councils (rubbish, local roads, parks)'], ['House of Representatives and Senate', 'the government is formed in the House of Representatives; the Senate is the house of review where each state has equal representation'], ['A law and a change to the Constitution', 'parliament passes laws; changing the Constitution needs a referendum'], ['Governor-General and Prime Minister', "the Governor-General represents the King; the Prime Minister leads the government"], ['The King and the head of government', 'the King is head of state; the Prime Minister is head of the government'], ['Courts and parliament', 'parliaments make laws; courts interpret and apply them independently']], 'Our summary of Part 3 of Our Common Bond (testable section, CC BY 4.0).', ['l', 'l'])}
<p>Each row has its own page with a practice set: ${h.a('levels', 'three levels of government')}, ${h.a('parliament', 'parliament, elections and voting')}, ${h.a('constitution', 'the Constitution and referendums')}, ${h.a('executive', 'the King, the Governor-General and the Prime Minister')} and ${h.a('courts', 'courts, laws and police')}.</p>
<h2>Referendums, the most failed topic</h2>
<p>A referendum question usually tests one idea: the Constitution can only be changed by a vote of the people. The booklet explains that a change needs a double majority: a majority of voters across the nation and a majority of voters in a majority of the states. Candidates often pick an option that gives the decision to parliament alone or to the High Court. Parliament proposes the change, the people decide. Read the ${h.src('au_ocb_pdf', 'booklet')} paragraph on referendums twice; it is short and pays off.</p>
<h2>Values questions with a hidden condition</h2>
<p>A values question becomes hard when a wrong option adds a condition that sounds like common sense. "People are free to protest if the government agrees", "you should obey the law when the police are nearby", "a job should go to someone from your own community". The booklet's version never has those conditions: protest is free if peaceful and lawful, the law applies at all times, a job goes to the best skills and experience. If an option narrows a value, it is almost always wrong. The ${h.a('values', 'values questions page')} drills only these.</p>
<h2>Numbers and dates</h2>
<p>A few figures recur: the number of states and territories, the year of Federation, the voting age, the date of Australia Day and of Anzac Day. They are easy marks once learned and costly when guessed. Make a small card with the dozen figures of Part 1 and Part 3 and read it each day of the last week. The ${h.a('states', 'states and territories page')} and the ${h.a('days', 'national days page')} have the details.</p>
<h2>How to train on hard questions</h2>
<p>Use the selector above to pick one difficult topic at a time and answer ten questions. When you miss one, read the explanation, then find the paragraph in the booklet. Go back to the same topic the next day: a confusion fixed once tends to return. Finish each session with a mixed ${h.a('mock', 'timed mock test')} to check that the fix holds when the topic is surrounded by others.</p>`,
  },
});
