import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'states',
  group: 'study',
  order: 80,
  tool: { kind: 'quiz', props: { mode: 'practice', topic: 'states', n: 10, scopeSelect: false } },
  mini: { kind: 'mini:stateinfo' },
  related: ['part1', 'levels', 'parliament', 'history', 'symbols', 'first'],
  sources: ['au_ocb_pdf', 'au_ocb'],
  en: {
    slug: 'states-and-territories',
    nav: 'States and territories',
    card: 'Six states, two mainland territories, eight capitals, the largest and smallest, and each one\'s icons.',
    title: 'States and Territories of Australia: Citizenship Test Facts',
    description: 'Australia\'s 6 states and 2 mainland territories for the citizenship test: capitals, largest and smallest, landmarks from Our Common Bond, and how states differ.',
    h1: 'States and territories of Australia: capitals, sizes and icons',
    intro: 'Practise ten questions on the states and territories, then pick any of them in the tool below to see its capital, leader title and Senate seats.',
    resume: (h) => `The Commonwealth of Australia is a federation of ${h.A.states} states and ${h.A.mainlandTerritories} mainland territories, each with its own capital, and Canberra, in the Australian Capital Territory, is the national capital. The states are New South Wales (Sydney), Victoria (Melbourne), Queensland (Brisbane), Western Australia (Perth), South Australia (Adelaide) and Tasmania (Hobart); the territories are the Australian Capital Territory (Canberra) and the Northern Territory (Darwin). Our Common Bond adds a few ranking facts that are easy to test: New South Wales was the first British colony and Sydney is the largest city, Western Australia is the largest state, Queensland the second largest, Victoria the smallest mainland state and Tasmania the smallest state of all, across Bass Strait. Part 3 explains that states have rights recognised by the Constitution while territories do not, and that each state elects ${h.A.senatorsPerState} senators against ${h.A.senatorsPerTerritory} for each territory. Our bank has ${h.inTopic('states')} questions on this topic.`,
    faqs: (h) => [
      { q: 'Is Canberra a state capital?', a: 'No. Canberra is the capital of Australia and lies in the Australian Capital Territory, which is a territory, not a state. The booklet places the ACT between Sydney and Melbourne and notes that national institutions such as Parliament House and the High Court of Australia are located there. Each state and mainland territory also has a capital of its own.' },
      { q: 'What is the practical difference between a state and a territory?', a: `States have rights recognised by the Constitution and can pass laws in their own right. Laws made by a self-governing territory can be changed or overturned by the Australian Government at any time. States are led by a Premier and have a Governor, while territories have a Chief Minister. In the Senate, a state has ${h.A.senatorsPerState} seats and a territory ${h.A.senatorsPerTerritory}.` },
      { q: 'Why does the booklet say "mainland" territories?', a: `Because the count of ${h.A.mainlandTerritories} refers only to the two self-governing territories on the mainland, the Australian Capital Territory and the Northern Territory. The Commonwealth Star on the national flag reflects the same structure: six points for the six states and a seventh point for the territories, rather than one per territory.` },
    ],
    body: (h) => `
<h2>All eight in one table</h2>
${h.table(['State or territory', 'Abbreviation', 'Capital', 'Remember it by'], [
  ['New South Wales', 'NSW', 'Sydney', 'first British colony; largest city; Harbour Bridge and Opera House'],
  ['Victoria', 'Vic.', 'Melbourne', 'smallest mainland state; gold-rush buildings; MCG, 12 Apostles'],
  ['Queensland', 'Qld', 'Brisbane', 'second largest; Great Barrier Reef; Torres Strait Islands to the north'],
  ['Western Australia', 'WA', 'Perth', 'largest state; desert east, farms and wine south-west; mining'],
  ['South Australia', 'SA', 'Adelaide', 'rugged coast, wine regions; Barossa Valley, Flinders Ranges'],
  ['Tasmania', 'Tas.', 'Hobart', 'smallest state; Bass Strait; Cradle Mountain, Port Arthur'],
  ['Australian Capital Territory', 'ACT', 'Canberra', 'national capital; Parliament House, High Court'],
  ['Northern Territory', 'NT', 'Darwin', 'tropical north, red desert south; Uluru, Kata Tjuta'],
], 'As described in Part 1 of Our Common Bond.', ['l', 'l', 'l', 'l'])}
<h2>The ranking facts</h2>
<p>Questions on this topic often hinge on a superlative, and the booklet supplies exactly five of them. Learn them as a group so they cannot drift apart:</p>
<ul>
<li><strong>Largest state:</strong> Western Australia.</li>
<li><strong>Second largest:</strong> Queensland.</li>
<li><strong>Smallest mainland state:</strong> Victoria.</li>
<li><strong>Smallest state:</strong> Tasmania, the island state.</li>
<li><strong>Largest city:</strong> Sydney (not Canberra, which is the capital).</li>
</ul>
<h2>Landmarks by state</h2>
<p>The booklet calls certain places icons, meaning well-known images. They make natural questions because they test whether you can place a famous name on the map. Picture the country clockwise from the north. The Northern Territory has Uluru, Kata Tjuta and Kings Canyon. Queensland has the Great Barrier Reef along its east coast and tropical rainforests. New South Wales has the Sydney Harbour Bridge and the Opera House. Victoria has the Melbourne Cricket Ground, the 12 Apostles and the Royal Exhibition Building. Tasmania has Cradle Mountain, Port Arthur and the Bay of Fires. South Australia has the Barossa Valley and the Flinders Ranges. Western Australia completes the loop with the Ningaloo Coast, Margaret River and the Kimberley.</p>
<h2>How states and territories are governed</h2>
<p>This topic continues in Part 3. Each state has its own parliament and constitution, a Premier at the head of its government and a Governor who represents the King. Territories are led by a Chief Minister, and in the Northern Territory an Administrator appointed by the Governor-General plays a role similar to a Governor. The states and the Northern Territory are divided into local government areas run by councils; in the ACT, the territory government also handles local services. The ${h.a('levels', 'three levels of government page')} lists who provides what, and the ${h.a('parliament', 'Parliament page')} explains why small and large states have the same number of senators.</p>
<h2>Why capitals come up so often</h2>
<p>Capitals are the simplest facts in the booklet to turn into a question, so expect them. Two traps recur. The first is Canberra: it is the national capital and the home of Parliament House and the High Court, but it is neither the largest city nor a state capital, because it sits in a territory. The second is Darwin, sometimes guessed as the capital of Queensland or Western Australia because of its tropical setting; it belongs to the Northern Territory. A gentler trap is Hobart against Adelaide: both are smaller capitals, one on the island state and one on the southern coast of the mainland. Saying the eight pairs aloud, place first and capital second, fixes them within a few days.</p>
<h2>Revising with a sketch</h2>
<p>Draw the outline of Australia, divide it roughly into the eight regions and write each capital and one icon. Do it from memory twice. Then use the tool below to check each one: it shows the capital, whether the place is a state or a territory, the title of its leader and its Senate seats. When the sketch comes out right without help, the practice set above should be easy. The map and the descriptions are on pages 10 and 11 of the ${h.src('au_ocb_pdf', 'testable section')}.</p>`,
  },
});
