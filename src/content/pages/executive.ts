import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'executive',
  group: 'study',
  order: 140,
  tool: { kind: 'quiz', props: { mode: 'practice', topic: 'executive', n: 10, scopeSelect: false } },
  mini: { kind: 'mini:leader' },
  related: ['part3', 'parliament', 'constitution', 'levels', 'courts', 'pledge'],
  sources: ['au_ocb_pdf', 'au_ocb'],
  en: {
    slug: 'king-governor-general-and-prime-minister',
    nav: 'King, Governor-General, PM',
    card: 'Head of State, the Governor-General\'s duties, the Prime Minister, ministers, Cabinet and every leader title.',
    title: 'Governor-General, King and Prime Minister: Test Guide',
    description: 'Who leads Australia, for the citizenship test: the King as Head of State, the Governor-General\'s role, the Prime Minister, Cabinet, Premiers and other titles.',
    h1: 'The King, the Governor-General and the Prime Minister',
    intro: 'Ten questions on Australia\'s leaders. Under the summary, pick any title in the tool to see what that office does and at which level.',
    resume: (h) => `Our Common Bond describes Australia as a constitutional monarchy: the King of Australia is Head of State but must act according to the Constitution, has no day-to-day role in government, and, because he does not live in Australia, his powers are delegated to the Governor-General. The King appoints the Governor-General as his representative on the advice of the Prime Minister. The Governor-General is not part of the government and must stay neutral; the role includes giving Royal Assent to Bills, ceremonial duties, approving the appointment of the government, ministers and federal judges, starting the process for a federal election, and acting as Commander-in-Chief of the Australian Defence Force, plus reserve powers for specific circumstances. Each state has a Governor, and the Northern Territory an Administrator. The government itself is led by the Prime Minister, leader of the party or coalition with a majority in the House of Representatives, who recommends ministers; the ministers with the most important portfolios form Cabinet. Our bank has ${h.inTopic('executive')} questions on this topic.`,
    faqs: (h) => [
      { q: 'Is the Governor-General the leader of the government?', a: 'No. The leader of the Australian Government is the Prime Minister. The Governor-General represents the King, acts independently of every political party and is not part of the government. The role is formal and constitutional: signing Bills into law, approving appointments, starting the election process and serving as Commander-in-Chief, with reserve powers for specific circumstances only.' },
      { q: 'What does the King actually do in Australian government?', a: 'Very little day to day. The booklet says the King does not have a day-to-day role in government and, since he does not live in Australia, his powers are delegated to the Governor-General. He appoints the Governor-General on the Prime Minister\'s advice. In each state, a Governor represents him in a similar way.' },
      { q: 'What is a portfolio?', a: 'An area of government for which a minister is responsible, such as employment, Indigenous Affairs or the Treasury, to use the booklet\'s examples. Ministers are members of the House of Representatives or senators recommended by the Prime Minister and approved by the Governor-General. Those with the most important portfolios form the Cabinet, the key decision-making body.' },
    ],
    body: (h) => `
<h2>The chain from Crown to government</h2>
<p>The executive is the part of government that puts laws into practice. The booklet places in it the Prime Minister, the ministers and the Governor-General, and it explains how they connect to the monarch. Learn the chain in order and most questions answer themselves:</p>
<ol>
<li><strong>The King of Australia</strong> is Head of State, within the limits of the Constitution, with no day-to-day role.</li>
<li><strong>The Governor-General</strong> is appointed by the King on the Prime Minister's advice and exercises the King's powers in Australia, neutrally.</li>
<li><strong>The Prime Minister</strong> leads the government, as leader of the party or coalition with a majority in the House of Representatives.</li>
<li><strong>Ministers</strong>, recommended by the Prime Minister and approved by the Governor-General, run portfolios and government departments.</li>
<li><strong>Cabinet</strong>, the ministers with the most important portfolios, takes the key decisions.</li>
</ol>
<h2>The Governor-General's five duties</h2>
${h.table(['Duty', 'What it means'], [
  ['Royal Assent', 'signs every Bill passed by Parliament so it becomes law'],
  ['Ceremonial duties', 'carries out the formal ceremonies of the office'],
  ['Appointments', 'approves the government, ministers, federal judges and other officials'],
  ['Elections', 'starts the process for a federal election'],
  ['Commander-in-Chief', 'of the Australian Defence Force'],
], 'Plus reserve powers, used only in specific circumstances.', ['l', 'l'])}
<p>Note the word neutral. The Governor-General is not part of the government, does not lead a party and must remain above politics, even though many of the duties above touch on government business.</p>
<h2>Every leader title in the booklet</h2>
${h.table(['Title', 'Who it is'], [
  ['Head of State', 'the King of Australia'],
  ['Governor-General', 'the Head of State\'s representative in Australia'],
  ['Governor', 'the Head of State\'s representative in a state'],
  ['Prime Minister', 'leader of the Australian Government'],
  ['Premier', 'leader of a state government'],
  ['Chief Minister', 'leader of a territory government'],
  ['Government minister', 'an MP chosen by a government leader to run an area of government'],
  ['Member of Parliament', 'elected representative in the Australian or a state parliament'],
  ['Senator', 'elected representative of a state or territory in the Australian Parliament'],
  ['Mayor or Shire President', 'leader of a local government'],
  ['Councillor', 'elected member of a local council'],
], 'From "Who are some of Australia\'s leaders?" in Part 3.', ['l', 'l'])}
<h2>Traditions behind the system</h2>
<p>The booklet notes that Australian parliamentary democracy blends British and North American traditions in a way that is uniquely Australian, and that within it the leader of the Australian Government is the Prime Minister. You will not be asked to analyse those traditions, but the idea helps explain why Australia has both a monarch as Head of State and a Prime Minister who leads the government from Parliament.</p>
<h2>Classic confusions</h2>
<p>Governor-General against Governor: the first is national, the second is in a state. Premier against Prime Minister: state leader against national leader. Chief Minister against Premier: territory against state. Administrator: the Northern Territory's equivalent of a Governor, appointed by the Governor-General. And the Prime Minister recommends ministers, but it is the Governor-General who approves their appointment and that of the Prime Minister. The tool below returns the role and level of each title, which is a quick way to test yourself.</p>
<h2>Revising</h2>
<p>The material is on pages 26 to 27 and 30 of the ${h.src('au_ocb_pdf', 'testable section')}. Our questions describe offices, not the people who hold them, because those names change; the booklet itself names the King at the time it was printed. Pair this page with the ${h.a('parliament', 'Parliament page')}, since forming a government depends on the House of Representatives, and with the ${h.a('constitution', 'Constitution page')} for the separation of powers.</p>`,
  },
});
