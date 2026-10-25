import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'part4',
  group: 'study',
  order: 50,
  tool: { kind: 'quiz', props: { mode: 'practice', chapter: 3, n: 10 } },
  mini: { kind: 'bank', props: { chapter: 3 } },
  related: ['values', 'part2', 'rights', 'responsibilities', 'ocb', 'pledge'],
  sources: ['au_ocb_pdf', 'au_ocb', 'au_test'],
  en: {
    slug: 'australian-values',
    nav: 'Part 4: Australian values',
    card: 'Each value of Part 4 with the concrete example the booklet uses, from the Rule of Law to mateship.',
    title: 'Australian Values: Our Common Bond Part 4 Explained',
    description: 'Australian values in Part 4 of Our Common Bond: each heading with the example the booklet gives, the laws it cites and the community values behind the 5/5 rule.',
    h1: 'Part 4 of Our Common Bond: Australian values, heading by heading',
    intro: 'Answer ten Part 4 questions first; below the summary you can open every values question in the bank with its answer.',
    resume: (h) => `Part 4 of Our Common Bond, pages ${h.A.partPages.p4[0]} to ${h.A.partPages.p4[1]}, describes Australian values based on freedom, respect, fairness and equality of opportunity, and asks new citizens to live them out in everyday life. It has two halves. The first, "Our values", covers commitment to the Rule of Law, parliamentary democracy, freedom of speech, association and religion, equality of all people under the law, a fair go, and mutual respect and tolerance. The second, "Our community", covers making a contribution, compassion and mateship, English as the national language, helping to keep society safe and loyalty to Australia. Almost every heading comes with a concrete legal example, such as polygamy and forced marriage being crimes, the age of consent of ${h.A.consentAges[0]} or ${h.A.consentAges[1]}, or divorce being open to either spouse. Each test draws ${h.T.valuesQuestions} values questions from this part and all must be right; our bank has ${h.inChapter(3)} of them.`,
    faqs: (h) => [
      { q: 'Is Part 4 just a repeat of Part 2?', a: 'Partly. The freedoms and the Rule of Law appear in both, but Part 4 goes further with concrete legal examples and adds a whole community section that Part 2 lacks: making a contribution, mateship and volunteering, English, reporting serious crime or child abuse, cyber abuse and loyalty. Read both, but expect Part 4 to supply the situations used in values questions.' },
      { q: 'Does Part 4 say anything about dual citizenship?', a: `Yes, under loyalty. Australian citizens may also hold another citizenship if the other country's laws allow it. Even so, a dual citizen in Australia must obey all Australian laws at all times, and some Australian laws continue to apply overseas, for example the ban on sexual activity with a child under ${h.A.childAbroadAge}.` },
      { q: `Why does Part 4 mention the ${h.A.bushfireSeason} bushfires?`, a: 'As an example of Australians coming together in a crisis. The booklet describes multicultural communities collecting money, clothes and food for people affected, and donations of water for firefighters and communities. It illustrates the value of compassion and mateship: helping one another in hard times, whatever your background.' },
    ],
    body: (h) => `
<h2>Our values: each heading and its example</h2>
<p>Part 4 is written to be applied. Instead of abstract statements, nearly every value is attached to a case you could meet in real life, and those cases are the raw material of values questions. The table pairs each heading with the example the booklet itself uses.</p>
${h.table(['Heading', 'Example given in the booklet'], [
  ['Commitment to the Rule of Law', 'follow the law even if no one is watching; Australian law applies whatever your culture'],
  ['Parliamentary democracy', 'laws come from elected parliaments; compulsory voting shows that taking part matters'],
  ['Freedom of speech', 'newspapers, radio and television share the same freedom; peaceful protest is tolerated; false allegations are illegal'],
  ['Freedom of association', 'join or leave any lawful group; protests must not injure people or damage property'],
  ['Freedom of religion', 'religious laws have no legal status; polygamy and forced marriage are crimes'],
  ['Equality of all people under the law', 'Buddhists treated like Christians; two men or two women may marry; either spouse may seek a divorce'],
  ['Equality of opportunity and a fair go', 'jobs go to the best skills and experience; migrants have become leaders through hard work'],
  ['Mutual respect and tolerance', `age of consent ${h.A.consentAges[0]} or ${h.A.consentAges[1]}; obey lawful police requests; racism has no place, online or at sport`],
], undefined, ['l', 'l'])}
<h2>Our community: the half people forget</h2>
<p>The second half of Part 4 is less about rights and more about conduct. It is short, but each paragraph contains a clear "should".</p>
<ul>
<li><strong>Making a contribution</strong>: everyone is expected to take part in society and to try to support themselves and their family when able.</li>
<li><strong>Compassion for those in need</strong>: mateship means helping each other, such as bringing a meal to an elderly neighbour; volunteering builds skills and belonging.</li>
<li><strong>English as the national language</strong>: it unites society, helps with education and work, and applicants undertake to make reasonable efforts to learn it if it is not their first language.</li>
<li><strong>Helping to keep society safe</strong>: report a suspected serious crime to the authorities as soon as possible, report child abuse to the police, and know that many forms of cyber abuse are illegal.</li>
<li><strong>Loyalty to Australia</strong>: dual citizens follow all Australian laws in Australia; sharing official secrets on social media or stirring up fear of an ethnic community undermines Australia.</li>
</ul>
<h2>The laws Part 4 points to</h2>
<p>Several values are illustrated by criminal law rather than by ideals, and those are the most straightforward questions to answer: polygamy and forced marriage can lead to prison; physical violence against a spouse or partner is a crime; verbal and physical abuse are both illegal; a relationship with a person under the age of consent is illegal in every state and territory; and sexual activity with a child under ${h.A.childAbroadAge} is illegal for Australians even overseas. When a question asks whether a custom or a family agreement can make one of these acceptable, the answer is always no.</p>
<h2>Reading Part 4 for the test</h2>
<p>Read pages ${h.A.partPages.p4[0]} to ${h.A.partPages.p4[1]} of the ${h.src('au_ocb_pdf', 'testable section')} twice, aloud if possible, because the vocabulary (tolerance, intimidation, consent, undermine) is also what the questions use. After each heading, close the booklet and state its example in one sentence. Then practise with the set above. The ${h.a('values', 'values question page')} drills Part 4 on its own and explains the five-out-of-five rule; the ${h.a('rights', 'rights and liberties page')} gives the background from Part 2 for the three freedoms.</p>
<h2>Why this part decides so many results</h2>
<p>With ${h.T.questions} questions and ${h.need} needed, a candidate can miss ${h.T.questions - h.need} ordinary questions and still pass, but cannot miss a single values question. Part 4 fills ${h.pc((h.A.partPages.p4[1] - h.A.partPages.p4[0] + 1) / (h.A.partPages.glossary[1] - h.A.partPages.p1[0] + 1))} of the testable pages, yet ${h.pc(h.T.valuesQuestions / h.T.questions)} of every test comes from it. Giving it at least that share of your study time is simply arithmetic.</p>`,
  },
});
