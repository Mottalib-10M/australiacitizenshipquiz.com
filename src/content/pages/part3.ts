import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'part3',
  group: 'study',
  order: 40,
  tool: { kind: 'quiz', props: { mode: 'practice', chapter: 2, n: 10 } },
  mini: { kind: 'bank', props: { chapter: 2 } },
  related: ['ocb', 'levels', 'parliament', 'constitution', 'executive', 'courts'],
  sources: ['au_ocb_pdf', 'au_ocb', 'au_prepare'],
  en: {
    slug: 'government-and-the-law',
    nav: 'Part 3: Government and the law',
    card: 'Voting, Federation, the Constitution, the three powers, Parliament, three levels, courts and police.',
    title: 'Government and the Law in Australia: OCB Part 3 Guide',
    description: 'Part 3 of Our Common Bond explained: voting, the Constitution, separation of powers, the Head of State, Parliament, three levels of government and the courts.',
    h1: 'Part 3 of Our Common Bond: government and the law in Australia',
    intro: 'Start with ten Part 3 questions. Every question in this part, with its answer, is listed under the summary for quick checking.',
    resume: (h) => `Part 3 of Our Common Bond, pages ${h.A.partPages.p3[0]} to ${h.A.partPages.p3[1]}, explains the third promise of the pledge: to uphold and obey the laws of Australia. It covers how citizens have their say (compulsory voting from ${h.A.voteAge}, secret ballot, the independent Australian Electoral Commission), why the colonies federated on ${h.date(h.A.federationDate)}, what the Constitution set up and how a referendum changes it by double majority, and how power is split between Parliament, the executive and the judges. It names Australia's leaders from the King and Governor-General to mayors, describes the House of Representatives (${h.A.houseMembers} members) and the Senate (${h.A.senators} senators), states and territories, local councils and who provides which services. It ends with how laws are made and enforced: courts, juries, police, criminal and traffic offences. It is the part with the most numbers and titles; our bank holds ${h.inChapter(2)} practice questions on it.`,
    faqs: (h) => [
      { q: 'Is Part 3 harder than the other parts?', a: 'It is the most technical. Part 3 introduces many titles that sound alike (Governor, Governor-General, Premier, Prime Minister, Chief Minister, Administrator) and several numbers. The ideas themselves are simple once you sort them into who makes laws, who carries them out and who judges. Allow two readings and use the topic pages to learn each group of facts separately.' },
      { q: 'Do I need to know the names of current politicians?', a: 'The booklet names the four main parties (Liberal, Labor, the Nationals and the Greens) and the King at the time of printing, but what it asks you to understand is how offices work: who leads a state, who signs Bills into law, how a government is formed. Our bank avoids questions on who holds an office today, because those answers change.' },
      { q: 'Which numbers from Part 3 are worth memorising?', a: `Four of them: ${h.A.senatorsPerState} senators for each state and ${h.A.senatorsPerTerritory} for each mainland territory, ${h.A.senators} senators in total, ${h.A.houseMembers} members in the House of Representatives, and voting from age ${h.A.voteAge}. Add the date of Federation, ${h.date(h.A.federationDate)}, and the ${h.A.referendumYear} Referendum with its Yes vote of over ${h.A.referendumYesPercent} per cent.` },
    ],
    body: (h) => `
<h2>A map of Part 3</h2>
<p>Part 3 moves from the citizen outwards: first your vote, then the history of the system, then the rules that hold it together, then the people and institutions, and finally the law in daily life. Each block has a dedicated study page with its own practice set.</p>
${h.table(['Section of the booklet', 'Core idea', 'Study page', 'Questions'], [
  ['How do I have my say?', 'compulsory voting, secret ballot, the AEC, contacting your MP', h.a('parliament', 'Parliament and voting'), h.inTopic('parliament')],
  ['Federation and the Constitution', 'six colonies united; Constitution; referendum; High Court', h.a('constitution', 'Constitution and referendums'), h.inTopic('constitution')],
  ['Power and leaders', 'three powers; King, Governor-General, Prime Minister', h.a('executive', 'Head of State and Prime Minister'), h.inTopic('executive')],
  ['How Australia is governed', 'two Houses; states and territories; local councils; services', h.a('levels', 'Three levels of government'), h.inTopic('levels')],
  ['How laws are made and enforced', 'Bills and Royal Assent; courts, juries, police, offences', h.a('courts', 'Courts, laws and police'), h.inTopic('courts')],
], 'Questions counted by topic across the whole bank.', ['l', 'l', 'l', 'r'])}
<h2>Three ideas that unlock the whole part</h2>
<p><strong>Power is divided.</strong> The Constitution separates legislative power (Parliament makes laws), executive power (the Prime Minister, ministers and Governor-General put them into practice) and judicial power (judges interpret and apply them). The aim is that no single person or group holds all the power. Courts and judges are independent of Parliament and government.</p>
<p><strong>Government is layered.</strong> There are three levels: the Australian Government, six state and two territory governments, and local councils. They generally provide different services, with some overlap. Defence and citizenship are federal, schools and hospitals belong to the states and territories, rubbish collection and building permits to councils.</p>
<p><strong>The Crown is above politics.</strong> The King of Australia is Head of State but has no day-to-day role, and must act within the Constitution. His powers are delegated to the Governor-General, who is neutral, signs Bills into law, approves ministers and is Commander-in-Chief. The government itself is led by the Prime Minister.</p>
<h2>Titles that look alike</h2>
${h.table(['Title', 'Role'], [['Governor-General', 'the King\'s representative for the whole of Australia'], ['Governor', 'the King\'s representative in a state'], ['Administrator', 'similar to a Governor, in the Northern Territory, appointed by the Governor-General'], ['Prime Minister', 'leader of the Australian Government'], ['Premier', 'leader of a state government'], ['Chief Minister', 'leader of a territory government'], ['Mayor or Shire President', 'leader of a local council']], undefined, ['l', 'l'])}
<h2>The law in daily life</h2>
<p>The last pages of Part 3 are practical. People are innocent until a court finds them guilty, everyone may have a lawyer, and in a jury trial the jury decides guilt while the judge sets the penalty. Police keep the peace, are independent of government, and offering them a bribe is itself a crime. Not knowing a law is no excuse. Domestic and family violence, including controlling behaviour and isolating someone from family, is a serious crime. On the road, everyone wears a seatbelt, young children need an approved seat, and using a hand-held phone while driving is illegal.</p>
<h2>How to revise it</h2>
<p>Read pages ${h.A.partPages.p3[0]} to ${h.A.partPages.p3[1]} of the ${h.src('au_ocb_pdf', 'testable section')} with a pencil and sort every fact into one of three columns: makes laws, carries them out, judges them. Then do one practice set per study page above, starting with the ${h.a('levels', 'three levels of government')}, where a quick table of services settles many questions. Part 3 rewards structure more than memory: once the boxes are clear, the details fall into place.</p>`,
  },
});
