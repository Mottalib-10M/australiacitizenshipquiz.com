import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'parliament',
  group: 'study',
  order: 120,
  tool: { kind: 'quiz', props: { mode: 'practice', topic: 'parliament', n: 10, scopeSelect: false } },
  mini: { kind: 'bank', props: { topic: 'parliament' } },
  related: ['part3', 'constitution', 'executive', 'levels', 'responsibilities', 'after'],
  sources: ['au_ocb_pdf', 'au_ocb'],
  en: {
    slug: 'parliament-elections-and-voting',
    nav: 'Parliament and voting',
    card: 'Compulsory voting, the secret ballot, the two Houses, parties, forming a government and passing a Bill.',
    title: 'Parliament, Elections and Voting: Citizenship Test Guide',
    description: 'Parliament and voting for the citizenship test: compulsory voting, secret ballot, the AEC, House and Senate numbers, parties, and how a Bill becomes law.',
    h1: 'Parliament, elections and voting in Australia',
    intro: 'Ten questions on elections and Parliament. Every question on this topic, with its answer, is listed under the summary.',
    resume: (h) => `In Australia citizens aged ${h.A.voteAge} or over must enrol and vote in federal, state and territory elections and in referendums; if they do not vote and have no good reason, they may be fined. Voting is by secret ballot, so nobody may know how you voted unless you tell them, and the Australian Electoral Commission, which is independent of the government, runs federal elections and referendums and keeps the electoral roll. The Australian Parliament has two Houses. The House of Representatives, also called the Lower House or the People's House, has ${h.A.houseMembers} members elected in electorates, with seats shared by population. The Senate, called the Upper House, the House of Review or the States' House, has ${h.A.senators} senators: ${h.A.senatorsPerState} for each state and ${h.A.senatorsPerTerritory} each for the ACT and the Northern Territory. A Bill passed by a majority in both Houses becomes law when the Governor-General gives Royal Assent. Our bank has ${h.inTopic('parliament')} questions on this topic.`,
    faqs: (h) => [
      { q: 'Why does a small state have as many senators as a large one?', a: `Because the Senate is designed to represent the states equally. The booklet says all states are equally represented regardless of size or population, so each elects ${h.A.senatorsPerState} senators, while the two mainland territories elect ${h.A.senatorsPerTerritory} each. Population counts in the other House: the number of members for each state in the House of Representatives depends on how many people live there.` },
      { q: 'What happens if no single party wins a majority?', a: 'The booklet explains that the government is formed by the party or coalition of parties with a majority in the House of Representatives. Its glossary describes a coalition as two or more parties joining, usually to form a government or an opposition, for instance when no party has a majority on its own after an election.' },
      { q: 'Can I contact my member of parliament as a new citizen?', a: 'Yes. The booklet encourages it: citizens can contact their elected representative to raise concerns about government policy, and a representative who is told a law needs changing should consider the suggestion. This is presented as one of the ways every Australian has a say in the laws and policies of a government, between elections.' },
    ],
    body: (h) => `
<h2>Your vote, in four rules</h2>
<ul>
<li><strong>Compulsory.</strong> Citizens aged ${h.A.voteAge} and over must enrol and vote in federal, state and territory elections and referendums. Without a good reason, not voting can bring a fine. The booklet notes that local elections may be optional in some states.</li>
<li><strong>Enrolment first.</strong> If you are not correctly enrolled, you cannot vote.</li>
<li><strong>Secret.</strong> The secret ballot means you vote privately and freely; no one is entitled to know your choice.</li>
<li><strong>Independent referee.</strong> The Australian Electoral Commission (AEC), a Commonwealth agency, conducts federal elections and referendums and maintains the electoral roll, free from influence by parties or the government.</li>
</ul>
<p>Compulsory voting is presented as a way of making sure the people have a say in who governs and represents them. Part 4 returns to it as a sign of how much Australians value taking part.</p>
<h2>The two Houses compared</h2>
${h.table(['', 'House of Representatives', 'Senate'], [
  ['Other names', 'Lower House, People\'s House', 'Upper House, House of Review, States\' House'],
  ['Members', h.A.houseMembers, `${h.A.senators}`],
  ['How seats are shared', 'by population; one member per electorate', `${h.A.senatorsPerState} per state, ${h.A.senatorsPerTerritory} per mainland territory`],
  ['Role', 'consider, debate and vote on new laws; discuss national matters', 'the same, as a house of review'],
  ['Forms the government?', 'yes: majority party or coalition governs', 'no'],
], 'Part 3 of Our Common Bond.', ['l', 'l', 'l'])}
<h2>Parties, government and opposition</h2>
<p>A political party is a group of people who share ideas about how the country should be governed and work to turn them into laws. The booklet names the main ones: the Liberal Party of Australia, the Australian Labor Party, the Nationals and the Australian Greens. Most parliamentarians belong to a party; those who do not are independents, and anyone is free to join a party. After a federal election, the party or coalition with a majority in the House of Representatives generally forms the government and its leader becomes Prime Minister. The party or coalition with the second largest number of members forms the Opposition, led by the Leader of the Opposition.</p>
<h2>From Bill to law</h2>
${h.table(['Step', 'What happens'], [['1. Bill', 'a member of Parliament proposes a new law or a change to an existing one'], ['2. Debate', 'the House of Representatives and the Senate consider, debate and vote on it'], ['3. Majority', 'if a majority in each House agrees, it goes to the Governor-General'], ['4. Royal Assent', 'the Governor-General signs it and it becomes law']], undefined, ['l', 'l'])}
<p>State and territory parliaments make their own laws in a similar way. Remember that the Governor-General signs but does not debate: the decision is Parliament's, and Royal Assent is the formal last step. The ${h.a('executive', 'page on the King, Governor-General and Prime Minister')} explains the rest of the Governor-General's role.</p>
<h2>Numbers that are easy to mix up</h2>
<p>${h.A.senatorsPerState} is the number of senators per state, not the total. ${h.A.senators} is the total in the Senate. "${h.A.houseMembers}" is the size of the House of Representatives. ${h.A.voteAge} is the voting age, the same as the age for jury service and for standing for parliament. A good drill is to write the four numbers on a card with a label, then mix the labels up and match them again.</p>
<h2>Revising</h2>
<p>This topic spans the "How do I have my say?" section at the start of ${h.a('part3', 'Part 3')} and the pages on Parliament and law-making later on, pages 24 and 27 to 30 of the ${h.src('au_ocb_pdf', 'testable section')}. Do the practice set above, then open the full list of questions under the summary and read each explanation. Voting also appears among a citizen's duties and privileges on the ${h.a('responsibilities', 'responsibilities page')}.</p>`,
  },
});
