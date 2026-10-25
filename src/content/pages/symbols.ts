import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'symbols',
  group: 'study',
  order: 90,
  tool: { kind: 'quiz', props: { mode: 'practice', topic: 'symbols', n: 10, scopeSelect: false } },
  mini: { kind: 'mini:flags' },
  related: ['part1', 'days', 'first', 'states', 'ceremony', 'pledge'],
  sources: ['au_ocb_pdf', 'au_ocb'],
  en: {
    slug: 'national-symbols',
    nav: 'National symbols',
    card: 'Three flags and what each part means, the Coat of Arms, wattle, green and gold, the opal and the anthem.',
    title: 'National Symbols of Australia: Flags, Emblems and Anthem',
    description: 'National symbols for the citizenship test: the three official flags and their meanings, the Coat of Arms, golden wattle, green and gold, opal and the anthem.',
    h1: 'Australia\'s national symbols: what each one stands for',
    intro: 'Ten questions on flags and emblems to start. Below the summary, choose a flag to see its colours and the meaning of every element.',
    resume: (h) => `Part 1 of Our Common Bond describes three officially recognised flags and five national emblems. The Australian National Flag is blue, white and red: the Union Jack in the top left recalls British settlement and inherited laws and institutions, the Commonwealth Star beneath it has ${h.A.starPoints} points (one per state and one for the territories), and the Southern Cross on the right is a group of stars in the southern sky. The Australian Aboriginal Flag is black (the people), red (the earth) and yellow (the sun). The Torres Strait Islander Flag is green (land), blue (sea) and black (the people), with a white dancer's headdress and a white star for the island groups and peace. The Commonwealth Coat of Arms shows a shield for the states and federation held by a kangaroo and an emu. The national flower is the golden wattle, the colours green and gold, the gemstone the opal, and the anthem Advance Australia Fair. Our bank has ${h.inTopic('symbols')} questions on symbols.`,
    faqs: (h) => [
      { q: 'Which flags are officially recognised in Australia?', a: 'The booklet names three: the Australian National Flag, which is the official flag of the nation, and the Australian Aboriginal Flag and the Torres Strait Islander Flag, which are officially recognised and may be flown in the community. Each state and territory also has a flag of its own, shown alongside the map in the booklet.' },
      { q: 'Why are Australian sports teams dressed in green and gold?', a: 'Because green and gold are the national colours, and the booklet explains that they come from the golden wattle, the national flower, with its bright green leaves and golden yellow blossoms. It adds that national sports teams usually wear these colours, which is a handy way to remember the link between the flower and the colours.' },
      { q: 'When is the national anthem sung?', a: 'On occasions of national importance. The booklet gives two examples: Australian citizenship ceremonies, where everyone sings Advance Australia Fair together near the end, and major sporting events. The anthem has two verses printed in the booklet; the test focuses on its title and its use rather than on reciting the lyrics.' },
    ],
    body: (h) => `
<h2>The three flags compared</h2>
${h.table(['Flag', 'Colours', 'Elements and meaning'], [
  ['Australian National Flag', 'blue, white, red', `Union Jack: British settlement and inherited laws and institutions; Commonwealth Star: ${h.A.starPoints} points for the states and territories; Southern Cross: stars of the southern sky`],
  ['Australian Aboriginal Flag', 'black, red, yellow', 'black top: Aboriginal peoples; red bottom: the earth, of ceremonial significance; yellow circle: the sun'],
  ['Torres Strait Islander Flag', 'green, blue, black, white', 'green: land; blue: sea; black lines: the people; white headdress: all Torres Strait Islanders; white star: island groups and peace'],
], undefined, ['l', 'l', 'l'])}
<p>Flag questions are almost always about matching: a colour to a flag, or an element to its meaning. The quickest way to secure them is to learn each flag from top to bottom, as if describing it to someone who cannot see it, then use the tool below to check yourself.</p>
<h2>The Commonwealth Coat of Arms</h2>
<p>The Coat of Arms is the official symbol of the Commonwealth. It represents national unity and marks the authority and property of the Commonwealth. Four elements to know: the shield in the centre stands for the six states and federation; a kangaroo and an emu, both native animals, support it on either side; a gold Commonwealth Star sits above; and the background is golden wattle. Note that the Coat of Arms is excluded from the booklet's open licence, which is why sites like this one never reproduce it.</p>
<h2>Flower, colours, gemstone</h2>
<ul>
<li><strong>Golden wattle</strong>, the national flower: a small tree of south-eastern Australia with bright green leaves and golden yellow flowers in spring. Every state and territory also has its own floral emblem.</li>
<li><strong>Green and gold</strong>, the national colours, taken from the wattle and worn by national sports teams.</li>
<li><strong>Opal</strong>, the national gemstone. In an Aboriginal legend, a rainbow touched the earth and created its colours.</li>
</ul>
<h2>Advance Australia Fair</h2>
<p>The national anthem is Advance Australia Fair, sung on occasions of national importance such as citizenship ceremonies and major sporting events. Its second verse mentions the Southern Cross, the same constellation that appears on the flag, and speaks of boundless plains to share for those who have come across the seas, a line many new citizens find meaningful. At your ceremony, everyone sings the anthem together after the pledge; the ${h.a('ceremony', 'ceremony page')} explains the order of events.</p>
<h2>Pairs that get swapped</h2>
<p>Green and gold are the national colours, not the colours of any flag. The Aboriginal Flag's yellow circle is the sun; the red half is the earth, not blood or desert. On the Torres Strait Islander Flag, green is land and blue is sea, and the star's whiteness means peace. The Commonwealth Star has ${h.A.starPoints} points, not six: the extra one is for the territories, which ties this topic to the ${h.a('states', 'states and territories page')}. And only the golden wattle is named as the national flower, so any other plant offered as an answer is a distractor.</p>
<h2>Five minutes a day</h2>
<p>This topic is ideal for short, repeated sessions. Read pages 14 to 16 of the ${h.src('au_ocb_pdf', 'testable section')} once, then each day describe the three flags aloud and name the five emblems. Use the practice set above every second day. Most people master symbols within a week, which frees time for the longer parts of the booklet. If you remember best by sight, colour each flag on a card and write the meaning of every element on the back: colouring the Torres Strait Islander Flag alone fixes five meanings at once.</p>`,
  },
});
