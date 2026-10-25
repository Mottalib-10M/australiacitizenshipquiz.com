import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'part2',
  group: 'study',
  order: 30,
  tool: { kind: 'quiz', props: { mode: 'practice', chapter: 1, n: 10 } },
  mini: { kind: 'bank', props: { chapter: 1 } },
  related: ['ocb', 'rights', 'responsibilities', 'part4', 'values', 'part3'],
  sources: ['au_ocb_pdf', 'au_ocb', 'au_test'],
  en: {
    slug: 'democratic-beliefs-rights-and-liberties',
    nav: 'Part 2: Beliefs, rights, liberties',
    card: 'Rule of Law, the freedoms Australians share, equality and the duties and privileges of citizens.',
    title: 'Democratic Beliefs, Rights and Liberties: OCB Part 2 Guide',
    description: 'Part 2 of Our Common Bond: parliamentary democracy, the Rule of Law, freedoms of speech, association and religion, equality, and what citizens give and receive.',
    h1: 'Part 2 of Our Common Bond: democratic beliefs, rights and liberties',
    intro: 'Test yourself on ten Part 2 questions, then use the full list under the summary to see every answer with its explanation.',
    resume: (h) => `Part 2 of Our Common Bond is the shortest part of the testable section, pages ${h.A.partPages.p2[0]} to ${h.A.partPages.p2[1]}, and it explains the second line of the pledge: sharing Australia's democratic beliefs and respecting its rights and liberties. It sets out four beliefs (parliamentary democracy, the Rule of Law, living peacefully, and respect for every individual whatever their background), three freedoms (speech and expression, association, religion) and two equalities (between men and women, and equal opportunity, the "fair go"). It then lists what a citizen gives Australia, four responsibilities including voting from age ${h.A.voteAge} and jury service, and six privileges such as an Australian passport, standing for parliament and consular help overseas. It closes with participation in society and tax. Every freedom is limited by the law, a theme that returns in Part 4. Our bank has ${h.inChapter(1)} practice questions on Part 2.`,
    faqs: (h) => [
      { q: 'Why is voting listed both as a responsibility and as a privilege?', a: `Because the booklet presents it both ways. Citizens aged ${h.A.voteAge} or over must vote in federal, state and territory elections and in referendums, which makes it a duty. It is also something citizenship gives you, which is why it appears again in the list of privileges. A question can approach it from either side, so remember that both answers are correct in their context.` },
      { q: 'Does freedom of speech let me say anything I like?', a: 'No. Part 2 gives examples of what it allows, such as criticising the government, protesting peacefully and campaigning to change a law, and it repeats that the laws of Australia must be obeyed at all times. Part 4 adds clear limits: promoting violence against a group, making false allegations and encouraging others to break the law are not protected.' },
      { q: 'Is Defence Force service compulsory for new citizens?', a: 'No. The booklet says service in the Australian Defence Force is voluntary. What it lists as a responsibility is to defend Australia should the need arise, meaning a commitment to join with other citizens to protect the nation if that ever became necessary. Applying for a job in the Army, Navy or Air Force is listed separately as a privilege.' },
    ],
    body: (h) => `
<h2>The structure of Part 2</h2>
<p>Part 2 reads like a charter. Each heading is a principle, followed by one or two paragraphs of explanation and an example. Questions on it rarely ask for a date or a number; they ask you to recognise the principle behind a situation. That is why this part is best learned by restating each heading in your own words, and why it overlaps so much with the values part at the end of the booklet.</p>
${h.table(['Block', 'Headings in the booklet', 'Detailed page'], [
  ['Democratic beliefs', 'parliamentary democracy; Rule of Law; living peacefully; respect for all individuals', h.a('part3', 'Part 3 for how democracy works')],
  ['Freedoms', 'speech and expression; association; religion', h.a('rights', 'Rights and liberties')],
  ['Equalities', 'gender equality; equal opportunity and a fair go', h.a('rights', 'Rights and liberties')],
  ['What you give', 'obey the law; vote; defend Australia; jury service', h.a('responsibilities', 'Responsibilities of citizens')],
  ['What you receive', 'vote; children by descent; public service and Defence jobs; stand for parliament; passport; consular help', h.a('responsibilities', 'Responsibilities of citizens')],
  ['Taking part', 'community life, volunteering, paying tax', h.a('responsibilities', 'Responsibilities of citizens')],
], undefined, ['l', 'l', 'l'])}
<h2>The four beliefs in plain words</h2>
<p><strong>Parliamentary democracy</strong>: the government's power comes from citizens, who elect representatives, and those representatives must answer to voters at elections. <strong>Rule of Law</strong>: nobody is above the law, including leaders in government, religion, business and the police. <strong>Living peacefully</strong>: change happens through discussion, persuasion and the democratic process, and violence is rejected as a way to change a mind or a law. <strong>Respect for all</strong>: everyone has rights and equality under the law and is treated with dignity, whatever their race, origin, gender, sexual orientation, marital status, age, disability, culture, politics, wealth or religion.</p>
<h2>Freedoms with a common limit</h2>
<p>All three freedoms are described the same way: a broad permission followed by the reminder that the law still applies. You may say and write what you think, join or refuse to join any lawful group, and follow any religion or none. Protests must be peaceful and must not hurt people or damage property. Where a religious practice conflicts with Australian law, the law wins. The government is secular and Australia has no official religion, even though its heritage is described as Judaeo-Christian and public holidays fall on Christian days.</p>
<h2>Responsibilities and privileges: learn the two lists</h2>
<p>This is the most testable section of Part 2 because it is a pair of lists. The four responsibilities are short enough to recite. The six privileges are easier to remember as a journey: you vote, you raise a family (a child born overseas can become a citizen by descent), you work (public service or Defence Force), you may serve (stand for parliament if aged ${h.A.voteAge} or over and not a dual citizen), and you travel (passport, free re-entry and help from an embassy, high commission or consulate abroad, while still obeying local laws).</p>
<h2>Common confusions</h2>
<ul>
<li>Jury service is a responsibility for citizens on the electoral roll; it is not a privilege you apply for.</li>
<li>Voting is compulsory in federal, state and territory elections, but the booklet says it may not be in local elections in some states.</li>
<li>Equality of opportunity is not equal income: a fair go means results should come from talent, work and effort, not wealth or background.</li>
<li>Tax is paid on wages, business income and investments, and many goods and services are taxed too.</li>
</ul>
<h2>Revising Part 2 in one evening</h2>
<p>Read pages ${h.A.partPages.p2[0]} to ${h.A.partPages.p2[1]} of the ${h.src('au_ocb_pdf', 'booklet')} once, then close it and write the headings from memory: four beliefs, three freedoms, two equalities, four responsibilities, six privileges. Check what you missed, practise the set above, and finish by reading ${h.a('part4', 'Part 4')}, which takes the same ideas into everyday situations. Because Part 2 and Part 4 reinforce each other, an hour here also prepares you for the ${h.T.valuesQuestions} values questions that every test contains.</p>`,
  },
});
