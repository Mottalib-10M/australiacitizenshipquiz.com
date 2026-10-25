import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'constitution',
  group: 'study',
  order: 130,
  tool: { kind: 'quiz', props: { mode: 'practice', topic: 'constitution', n: 10, scopeSelect: false } },
  mini: { kind: 'mini:refmaj' },
  related: ['part3', 'history', 'parliament', 'executive', 'courts', 'levels'],
  sources: ['au_ocb_pdf', 'au_ocb'],
  en: {
    slug: 'constitution-and-referendums',
    nav: 'Constitution and referendums',
    card: 'What the Constitution set up, the separation of powers, and how a referendum needs a double majority.',
    title: 'Constitution and Referendums: Australian Citizenship Test',
    description: 'The Australian Constitution for the citizenship test: passed in 1900, in force from 1901, the three powers, the High Court and the double majority for a change.',
    h1: 'The Australian Constitution and referendums',
    intro: 'Ten questions on the Constitution and referendums. The tool under the summary checks whether a given result would meet the double majority.',
    resume: (h) => `The Commonwealth of Australia Constitution Act 1900, known as the Australian Constitution, is the legal document that sets out the basic rules for governing Australia; the glossary of Our Common Bond calls it the supreme law, which the government must follow. It was first passed as part of a British Act of Parliament in ${h.A.constitutionActYear} and came into effect on ${h.date(h.A.federationDate)}, when the colonies became one independent nation. It created the Parliament of the Commonwealth, with a House of Representatives and a Senate, and the High Court of Australia, which has the ultimate power to apply and interpret the law. It divides government power into legislative, executive and judicial, so that no single person or group holds it all. The people can change it by voting in a referendum, and a change needs a double majority: a majority of voters nationally and a majority of voters in a majority of states. In ${h.A.referendumYear}, over ${h.A.referendumYesPercent} per cent voted Yes to count Aboriginal peoples in the Census. Our bank has ${h.inTopic('constitution')} questions on this topic.`,
    faqs: (h) => [
      { q: 'What exactly is a double majority?', a: `Two conditions met at the same time. First, more than half of all voters across Australia must vote Yes. Second, in a majority of the states, more than half of the voters must vote Yes; with ${h.A.states} states, that means at least ${Math.floor(h.A.states / 2) + 1}. A national Yes vote that wins only three states fails, and so does a win in most states with a national No.` },
      { q: 'Who has the final word on what Australia\'s laws mean?', a: 'The High Court of Australia. The booklet says the Constitution established the High Court and gave it the ultimate power to apply and interpret the laws of Australia. Like all courts, it is independent of Parliament and government, which is part of the separation of powers the Constitution sets up.' },
      { q: 'Is voting in a referendum compulsory?', a: `Yes, for citizens aged ${h.A.voteAge} or over. The booklet lists voting in a referendum alongside federal, state and territory elections as a responsibility of citizens, and Part 3 repeats that voting is compulsory when there is a referendum on constitutional change. The Australian Electoral Commission conducts referendums, as it does federal elections.` },
    ],
    body: (h) => `
<h2>The Constitution in six facts</h2>
${h.table(['Question', 'Answer from the booklet'], [
  ['Full name', 'Commonwealth of Australia Constitution Act 1900'],
  ['How it was passed', `as part of a British Act of Parliament, ${h.A.constitutionActYear}`],
  ['In force from', h.date(h.A.federationDate)],
  ['What it created', 'the Parliament (House of Representatives and Senate) and the High Court'],
  ['How it controls power', 'divides it into legislative, executive and judicial'],
  ['How it changes', 'referendum with a double majority'],
], undefined, ['l', 'l'])}
<h2>Why a Constitution was needed</h2>
<p>Before ${h.A.federationDate.slice(0, 4)}, each of the six colonies had its own constitution and its own laws on defence, immigration, postage, trade and transport. Uniting them into one nation required a single set of rules above those of the colonies, defining the national institutions and how power would be shared. That is the job the Constitution does. Its legal origin in a British Act of Parliament is a frequent question, as is the date it took effect, which is also the date of Federation. The ${h.a('history', 'history and Federation page')} covers the reasons people wanted to unite.</p>
<h2>Separation of powers</h2>
<p>The booklet explains how the power of government is controlled by dividing it three ways:</p>
<ul>
<li><strong>Legislative power</strong>, to make and change laws, belongs to Parliament, made up of elected representatives.</li>
<li><strong>Executive power</strong>, to put laws into practice, belongs to the Prime Minister, ministers and the Governor-General; ministers run government departments.</li>
<li><strong>Judicial power</strong>, to interpret and apply laws, belongs to judges. Courts and judges are independent of Parliament and government.</li>
</ul>
<p>The purpose is stated plainly: to stop one person or group from holding all the power. If a question asks why the powers are separated, that is the answer.</p>
<h2>Referendums</h2>
<p>A referendum is a vote by all voters on a proposed change to the Constitution. It is the way the booklet gives for changing the Constitution, and it puts the decision in the hands of citizens. Voting in one is compulsory for citizens aged ${h.A.voteAge} or over. The bar is high on purpose: the double majority requires both a national majority and majorities in at least ${Math.floor(h.A.states / 2) + 1} of the ${h.A.states} states. The tool below shows how a result is judged: enter a national Yes share and a number of states, and it tells you whether the change would pass.</p>
<h2>The ${h.A.referendumYear} Referendum</h2>
<p>The booklet uses one referendum as its example, and it appears in two parts. In Part 1, it explains why Aboriginal and Torres Strait Islander peoples were not counted in population estimates before ${h.A.referendumYear}. In Part 3, it illustrates the power of the people to change the Constitution: more than ${h.A.referendumYesPercent} per cent of Australians voted Yes to allow Aboriginal peoples to be counted in the Census. Learn the year and the percentage together.</p>
<h2>Constitutional monarchy</h2>
<p>The Constitution also shapes the role of the Crown. Australia is a constitutional monarchy: the King is Head of State but must act in accordance with the Constitution, and his powers are delegated to the Governor-General. The ${h.a('executive', 'Head of State page')} goes into that relationship. For this topic, the key idea is that the Constitution sits above everyone, including the monarch and the government.</p>
<h2>Revising</h2>
<p>Read pages 25 and 26 of the ${h.src('au_ocb_pdf', 'testable section')} and the glossary entries for Constitution, referendum, constitutional monarchy and the three powers. Then answer the practice set above. Many questions here are definitions, so saying each one aloud in your own words is the best preparation.</p>`,
  },
});
