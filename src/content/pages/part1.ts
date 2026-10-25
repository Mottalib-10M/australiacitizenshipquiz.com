import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'part1',
  group: 'study',
  order: 20,
  tool: { kind: 'quiz', props: { mode: 'practice', chapter: 0, n: 10 } },
  mini: { kind: 'bank', props: { chapter: 0 } },
  related: ['ocb', 'first', 'history', 'states', 'symbols', 'days'],
  sources: ['au_ocb_pdf', 'au_ocb', 'au_prepare'],
  en: {
    slug: 'australia-and-its-people',
    nav: 'Part 1: Australia and its people',
    card: 'First Australians, settlement, Federation, states and capitals, symbols and national days.',
    title: 'Our Common Bond Part 1: Australia and Its People Guide',
    description: 'Part 1 of Our Common Bond covers First Australians, 1788, the gold rush, Federation, eight capitals, flags, emblems and national days. Key facts and practice.',
    h1: 'Part 1 of Our Common Bond: Australia and its people',
    intro: 'Ten questions on Part 1 are ready below; the full list with answers follows the summary, so you can check a fact as soon as you miss it.',
    resume: (h) => `Part 1 of the testable section of Our Common Bond, pages ${h.A.partPages.p1[0]} to ${h.A.partPages.p1[1]}, is the part with the most hard facts to learn. It starts with Aboriginal and Torres Strait Islander peoples, whose cultures are the oldest continuous ones in the world and whose arrival the archaeological record places between ${h.num(h.A.arrivalYearsAgo[0])} and ${h.num(h.A.arrivalYearsAgo[1])} years ago. It then follows European settlement from the ${h.A.firstFleetShips} ships of the First Fleet on ${h.date(h.A.firstFleetDate)}, the gold rush of ${h.A.goldRushYear} and Federation in ${h.A.federationDate.slice(0, 4)}, before describing the ${h.A.states} states and ${h.A.mainlandTerritories} mainland territories with their capitals. It ends with traditions and symbols: Welcome to Country, Australia Day, Anzac Day, the three officially recognised flags, the Coat of Arms, the golden wattle, green and gold, the opal and the national anthem. Our bank has ${h.inChapter(0)} practice questions on this part, but the official questions themselves are never published.`,
    faqs: (h) => [
      { q: 'Which topics in Part 1 produce the most mistakes?', a: 'The swaps are predictable: smallest state against smallest mainland state, the meaning of each colour on the two Indigenous flags, the date of Anzac Day against Australia Day, and the number of points on the Commonwealth Star. Each of these appears in a short list in the booklet, which makes them easy to confuse under time pressure.' },
      { q: 'Do I need to know the words of the national anthem?', a: 'The booklet prints the two verses of Advance Australia Fair, but what it asks you to understand is that it is the national anthem and that it is sung on occasions of national importance, such as citizenship ceremonies and major sporting events. Knowing a few lines helps at the ceremony, where everyone sings it together.' },
      { q: 'Are the state icons like Uluru or the Barossa Valley worth learning?', a: `Yes, at least loosely. The booklet names two or three icons for each state and territory, and matching a landmark with its state is a natural question. A good habit is to learn each place as a set: name, capital, size and its icons, as the table on this page does for all ${h.A.states + h.A.mainlandTerritories} of them.` },
    ],
    body: (h) => `
<h2>What Part 1 asks you to understand</h2>
<p>The booklet opens Part 1 by linking it to the pledge: new citizens promise loyalty to Australia and its people, so they should know who those people are, where the country came from and what it celebrates. Expect questions that test recognition (a date, a capital, a colour) more than reasoning. That makes Part 1 the most rewarding part to revise with lists and flashcards, and the one where a second reading pays off most. It is split into six areas, each with its own study page.</p>
${h.table(['Area', 'What to retain', 'Study page'], [
  ['Aboriginal and Torres Strait Islander peoples', 'oldest continuous cultures; where each people comes from; Welcome and Acknowledgement of Country', h.a('first', 'First Australians')],
  ['Settlement and Federation', `${h.A.firstFleetShips} convict ships, Captain Arthur Phillip, gold rush of ${h.A.goldRushYear}, Federation in ${h.A.federationDate.slice(0, 4)}`, h.a('history', 'History and Federation')],
  ['Migration and the people', `population of ${h.A.pop1901} in ${h.A.federationDate.slice(0, 4)}, post-war European migration, English as national language`, h.a('history', 'History and Federation')],
  ['States and territories', `${h.A.states} states, ${h.A.mainlandTerritories} mainland territories, eight capitals, largest and smallest`, h.a('states', 'States and territories')],
  ['National days', 'Australia Day on 26 January, Anzac Day on 25 April', h.a('days', 'National days')],
  ['Flags and symbols', 'three flags, Coat of Arms, golden wattle, green and gold, opal, anthem', h.a('symbols', 'National symbols')],
], undefined, ['l', 'l', 'l'])}
<h2>The people: three waves to keep in order</h2>
<p>The story the booklet tells is one of layers. First come Aboriginal peoples, from the mainland and Tasmania, and Torres Strait Islander people, from the islands between Queensland and Papua New Guinea. Then the British and Irish: convicts first, because British jails were overflowing, then free settlers whose heritage shaped politics and culture. Then the world: Chinese miners during the gold rush were the first large non-European group, a wave of Europeans arrived after World War II, and recent migration and refugee programs bring people from everywhere to join family, build a new life or escape poverty, war or persecution. Keep that order in mind and most history questions answer themselves.</p>
<h2>Numbers in Part 1</h2>
<ul>
<li>${h.num(h.A.arrivalYearsAgo[0])} to ${h.num(h.A.arrivalYearsAgo[1])} years: arrival of Aboriginal peoples according to archaeology.</li>
<li>${h.A.indigenousLanguages}: distinct Aboriginal and Torres Strait Islander languages valued today.</li>
<li>${h.A.firstFleetShips}: ships in the First Fleet, which arrived on ${h.date(h.A.firstFleetDate)}.</li>
<li>${h.A.goldRushYear}: start of the gold rush; within ${h.A.goldRushDoubledYears} years the population had more than doubled.</li>
<li>${h.A.pop1901}: population at Federation, not counting Indigenous peoples, who were included in official estimates only after the ${h.A.referendumYear} Referendum.</li>
<li>${h.A.starPoints}: points on the Commonwealth Star, six for the states and one for the territories.</li>
</ul>
<h2>Where people lose marks</h2>
<p>Most errors in Part 1 come from near-misses rather than gaps. Canberra is the capital but Sydney is the largest city. The ACT sits between Sydney and Melbourne. Western Australia is the largest state, Queensland the second largest. The Aboriginal Flag is black, red and yellow; the Torres Strait Islander Flag is green, blue, black and white; the national flag is blue, white and red; and the national colours are green and gold, taken from the wattle. A Welcome to Country is given by a local custodian, while anyone may give an Acknowledgement of Country.</p>
<h2>A two-session plan for this part</h2>
<p>Session one: read pages ${h.A.partPages.p1[0]} to ${h.A.partPages.p1[1]} of the ${h.src('au_ocb_pdf', 'testable section')} and draw a rough map with the eight capitals, then answer the ten questions above. Session two: open the question list below this summary, cover the answers and say each one aloud before revealing it. Questions you miss twice go on a card. When you reach eight or more out of ten on repeated sets, move on to ${h.a('part2', 'Part 2')}, which is shorter but asks you to understand principles rather than recall names.</p>
<h2>How Part 1 links to the rest of the booklet</h2>
<p>Federation reappears in Part 3, this time from the angle of the Constitution, so learning ${h.A.federationDate.slice(0, 4)} here earns marks twice. English as the national language comes back in Part 4 as a value. And the ${h.A.referendumYear} Referendum, mentioned in Part 1 for the population count, is used in Part 3 as the example of how the Constitution changes. Reading the parts in order is therefore worthwhile: each one builds on facts introduced earlier.</p>`,
  },
});
