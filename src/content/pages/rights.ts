import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'rights',
  group: 'study',
  order: 160,
  tool: { kind: 'quiz', props: { mode: 'practice', topic: 'rights', n: 10, scopeSelect: false } },
  mini: { kind: 'mini:freedom' },
  related: ['part2', 'part4', 'values', 'responsibilities', 'pledge', 'courts'],
  sources: ['au_ocb_pdf', 'au_ocb'],
  en: {
    slug: 'rights-and-liberties',
    nav: 'Rights and liberties',
    card: 'Freedom of speech, association and religion, equality and a fair go, and where each freedom stops.',
    title: 'Rights and Liberties in Australia: Freedoms and Their Limits',
    description: 'Rights and liberties for the citizenship test: freedom of speech, expression, association and religion, gender equality and a fair go, and the limits of each.',
    h1: 'Rights and liberties: the freedoms Australians share, and their limits',
    intro: 'Ten questions on freedoms and equality. Below the summary, choose an action in the tool to see whether it is protected and why.',
    resume: (h) => `At the citizenship ceremony new citizens pledge to respect Australia's rights and liberties, and Part 2 of Our Common Bond lists them. Freedom of speech lets people say and write what they think, criticise the government, protest peacefully and campaign to change laws; freedom of expression extends this to art, film, music and literature and to meeting in public or private for discussion. Freedom of association is the right to form and join lawful groups such as parties, unions or religious and cultural groups, and the right not to join. Freedom of religion means Australia has no official religion, its government is secular and people may follow any faith or none. Two equalities complete the list: men and women have equal rights, and everyone deserves a fair go, with success based on talent and effort rather than wealth or background. Each freedom stops where the law begins: protests must be peaceful, and where a religious practice conflicts with Australian law, the law prevails. Our bank has ${h.inTopic('rights')} questions on this topic.`,
    faqs: (h) => [
      { q: 'Can I refuse to join a trade union or political party?', a: 'Yes. Freedom of association works both ways. People may join any lawful organisation, such as a political party, trade union, or religious, cultural or social group, and they may also decide not to join. The booklet says no one can be forced to join, and Part 4 adds that no one can be forced to leave a group either.' },
      { q: 'Why does Australia have Christian public holidays if it has no official religion?', a: 'Because of history, not law. The booklet describes Australia\'s heritage as Judaeo-Christian and notes that many Australians describe themselves as Christians, which is why Good Friday, Easter Sunday and Christmas Day are public holidays. The government itself is secular, operating separately from religious bodies, and treats all citizens equally whatever they believe.' },
      { q: 'Is a fair go the same as everyone earning the same?', a: 'No. The booklet defines a fair go as equal opportunity: what someone achieves should result from their talents, work and effort rather than their wealth or background, so that there are no formal class distinctions. It concerns the chance to succeed, not equal outcomes, and Part 4 links it to hiring the person with the best skills and experience.' },
    ],
    body: (h) => `
<h2>Each freedom and its limit</h2>
${h.table(['Freedom', 'What it allows', 'Where it stops'], [
  ['Speech', 'say and write what you think; criticise the government; peaceful protest; campaign to change laws', 'must obey the law; respect others\' freedom of speech'],
  ['Expression', 'views through art, film, music, literature; meet in public or private for discussion', 'same limits as speech'],
  ['Association', 'form or join any lawful group; choose not to join', 'gatherings must be peaceful, injure no one, damage no property'],
  ['Religion', 'follow any religion or none; government treats all beliefs equally', 'Australian law prevails over religious practice'],
], 'Part 2 of Our Common Bond.', ['l', 'l', 'l'])}
<p>The pattern is identical for all four: a wide permission, followed by the reminder that the laws of Australia apply at all times. In questions, an answer that presents a freedom as unlimited is almost always wrong, and an answer that removes the freedom entirely is wrong too. The right answer usually contains both the freedom and the condition.</p>
<h2>The two equalities</h2>
<p><strong>Gender equality.</strong> Men and women have equal rights in Australia, and discriminating against a person because of their gender is against the law. More broadly, laws protect people from being treated differently because of their gender, race, disability or age.</p>
<p><strong>Equality of opportunity, the fair go.</strong> What a person achieves should depend on their talent, work and effort, not on wealth or background. This is why the booklet says Australian society has no formal class distinctions. The glossary defines a fair go as everyone, whatever their background, having an equal chance to succeed.</p>
<h2>Respect as the foundation</h2>
<p>These rights sit on a principle stated just before them: every individual has rights and equality under the law, whatever their background, and Australians are expected to treat one another with dignity and respect regardless of race, country of origin, gender, sexual orientation, marital status, age, disability, heritage, culture, politics, wealth or religion. The long list is worth reading slowly once, because questions sometimes borrow a word from it.</p>
<h2>How Part 4 extends the picture</h2>
<p>${h.a('part4', 'Part 4')} restates the same freedoms as Australian values and adds sharper examples. Newspapers, radio and television share freedom of speech. Promoting violence against a group, making false allegations and encouraging others to break the law are illegal. Religious laws have no legal status, and polygamy and forced marriage are crimes. Men and women have equal access to education, work, the Defence Force and the police. Because the values questions must all be right, revising rights here and values there is time doubly well spent; the ${h.a('values', 'values question page')} drills them on their own.</p>
<h2>Liberties in the glossary</h2>
<p>The booklet's glossary defines liberty as personal freedom and independence and gives freedom of speech, expression, religion and association as the liberties Australians value. "Secular" is defined as separate from religion, and "equality" as being the same in status. If a question uses one of these words, its glossary meaning is the one intended.</p>
<h2>A worked example</h2>
<p>Imagine a group unhappy with a new local law. It may write to newspapers, criticise the decision publicly, form an association, collect signatures and hold a peaceful march: all of that is protected. It may not block people by force, damage shop windows or threaten the councillors who voted for the law. Members of the group may belong to any religion or none, and none of them can be made to join. Thinking through a scene like this is the fastest way to see where each freedom ends.</p>
<h2>Revising</h2>
<p>Read pages 18 to 20 of the ${h.src('au_ocb_pdf', 'testable section')}. Then use the tool below, which lists everyday actions (criticising the government, damaging property at a protest, following a religion, making a false allegation) and says whether each is protected and why. When you can predict every answer, do the practice set above.</p>`,
  },
});
