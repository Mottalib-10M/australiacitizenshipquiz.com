import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'first',
  group: 'study',
  order: 60,
  tool: { kind: 'quiz', props: { mode: 'practice', topic: 'first', n: 10, scopeSelect: false } },
  mini: { kind: 'mini:welcome' },
  related: ['part1', 'history', 'symbols', 'days', 'ceremony', 'ocb'],
  sources: ['au_ocb_pdf', 'au_ocb', 'au_ceremony'],
  en: {
    slug: 'aboriginal-and-torres-strait-islander-peoples',
    nav: 'First Australians',
    card: 'Who the first Australians are, where they come from, and the Welcome and Acknowledgement of Country.',
    title: 'Aboriginal and Torres Strait Islander Peoples: Test Facts',
    description: 'Aboriginal and Torres Strait Islander peoples for the citizenship test: origins, oldest continuous cultures, languages, the 1967 vote, and the two protocols.',
    h1: 'Aboriginal and Torres Strait Islander peoples: what the test expects',
    intro: 'Ten questions on the first Australians, drawn from Part 1 of the booklet and its glossary. The protocol tool below compares the two ceremonies people mix up.',
    resume: (h) => `Our Common Bond opens its testable section with Aboriginal and Torres Strait Islander peoples, Australia's first inhabitants, whose cultures and traditions are described as the oldest continuous ones in the world. Aboriginal people come historically from mainland Australia and Tasmania, and the archaeological record dates their arrival to between ${h.num(h.A.arrivalYearsAgo[0])} and ${h.num(h.A.arrivalYearsAgo[1])} years ago, while their own creation stories begin with the beginning of time. Torres Strait Islander people come from the islands between the northern tip of Queensland and Papua New Guinea. Their connection with the land lives in stories, art and dance. The booklet adds that ${h.A.indigenousLanguages} distinct Indigenous languages are valued, that Indigenous peoples make up about ${h.A.indigenousSharePercent} per cent of the population, and that they were counted in official population estimates only after the ${h.A.referendumYear} Referendum. Two protocols, Welcome to Country and Acknowledgement of Country, show respect for them. Our bank has ${h.inTopic('first')} questions on this topic.`,
    faqs: (h) => [
      { q: 'What is the difference between Aboriginal and Torres Strait Islander peoples?', a: 'They are two distinct peoples. Aboriginal people come historically from the Australian mainland and Tasmania. Torres Strait Islander people come from the islands that lie between the northern tip of Queensland and Papua New Guinea. Each has its own flag, and the booklet often names both together as Australia\'s first inhabitants and Indigenous peoples.' },
      { q: 'Will I see a Welcome to Country at my citizenship ceremony?', a: 'Possibly. The booklet says a ceremony may begin with a welcome from a representative of the Aboriginal and Torres Strait Islander people who are the traditional owners of the local land. It describes this protocol as one practised on traditional homelands for thousands of years, followed by words of welcome from community leaders.' },
      { q: 'Why does the test ask about the 1967 Referendum on this topic?', a: `Because it changed how Indigenous Australians were counted. The booklet notes that the population of ${h.A.pop1901} at Federation left out Aboriginal and Torres Strait Islander peoples, and that only after the ${h.A.referendumYear} Referendum were they included in official estimates. Part 3 adds that more than ${h.A.referendumYesPercent} per cent of voters said Yes.` },
    ],
    body: (h) => `
<h2>The facts to know, in one list</h2>
<ul>
<li><strong>First inhabitants.</strong> Aboriginal and Torres Strait Islander peoples were here first, and their cultures are the oldest continuous cultures and traditions in the world.</li>
<li><strong>Two origins.</strong> Aboriginal people: mainland and Tasmania. Torres Strait Islander people: the islands between Queensland's northern tip and Papua New Guinea.</li>
<li><strong>Time.</strong> ${h.num(h.A.arrivalYearsAgo[0])} to ${h.num(h.A.arrivalYearsAgo[1])} years ago according to archaeology; Australia Day material in the booklet speaks of about ${h.num(h.A.arrivalYearsAgo[1])} years.</li>
<li><strong>Connection to land.</strong> Expressed through stories, art and dance; age-old beliefs still guide communities today.</li>
<li><strong>Languages.</strong> ${h.A.indigenousLanguages} distinct Aboriginal and Torres Strait Islander languages, valued alongside English.</li>
<li><strong>Share of population.</strong> About ${h.A.indigenousSharePercent} per cent, according to the glossary.</li>
<li><strong>Counting.</strong> Included in official population estimates after the ${h.A.referendumYear} Referendum.</li>
</ul>
<h2>Welcome to Country and Acknowledgement of Country</h2>
<p>These two protocols are the part of this topic most likely to trip you up, because their names are close and they often happen at the same event. The comparison tool under this section sets them side by side. In short:</p>
${h.table(['', 'Welcome to Country', 'Acknowledgement of Country'], [
  ['Who gives it', 'an Aboriginal or Torres Strait Islander custodian of the local area', 'anyone; at meetings, often the chair or master of ceremonies'],
  ['When', 'usually the first item, opening the event', 'during the opening welcome and housekeeping'],
  ['Form', 'songs, dances, smoking ceremonies or speeches, in traditional language or English', 'a spoken statement'],
  ['Purpose', 'traditionally, to give visitors a safe and protected journey on that land', 'to recognise the land, respect Traditional Custodians and Elders past and present'],
], undefined, ['l', 'l', 'l'])}
<p>Both are performed to show respect for Aboriginal and Torres Strait Islander peoples. A simple way to remember the difference: a Welcome is given by the hosts, an Acknowledgement can be given by a guest.</p>
<h2>Where this topic appears elsewhere</h2>
<p>Indigenous Australians are not confined to the opening pages. The ${h.a('symbols', 'national symbols page')} covers the Australian Aboriginal Flag (black for the people, red for the earth, yellow for the sun) and the Torres Strait Islander Flag (green land, blue sea, black for the people, a white headdress and a white star). The opal legend, in which a rainbow touching the earth made the stone's colours, is Aboriginal. Australia Day, explained on the ${h.a('days', 'national days page')}, is described as honouring every Australian's contribution, starting with peoples who have been here for about ${h.num(h.A.arrivalYearsAgo[1])} years. And Queensland's entry on the ${h.a('states', 'states page')} mentions the Torres Strait Islands to its north.</p>
<h2>Common slips</h2>
<p>Do not reverse the two origins: Tasmania goes with Aboriginal people, the islands near Papua New Guinea with Torres Strait Islanders. Do not shorten the time range to a few thousand years, and do not mix up the archaeological range with the date of the First Fleet. Remember that the booklet speaks of "oldest continuous" cultures, not simply "old" ones: the continuity is the point. And when a question asks who may deliver an Acknowledgement of Country, "anyone" is the right answer, however surprising it looks.</p>
<h2>Revising this topic</h2>
<p>The material sits on the first pages of Part 1 and in the traditions section a few pages later, plus two glossary entries ("Aboriginal and Torres Strait Islander peoples" and "Indigenous"). Read those passages in the ${h.src('au_ocb_pdf', 'testable section')}, answer the practice set above until you reach nine or ten, then return to the rest of ${h.a('part1', 'Part 1')}. Because this topic is short, it is a good one to master first: it builds confidence and supplies easy marks.</p>`,
  },
});
