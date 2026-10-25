import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'days',
  group: 'study',
  order: 100,
  tool: { kind: 'quiz', props: { mode: 'practice', topic: 'days', n: 10, scopeSelect: false } },
  mini: { kind: 'mini:daysyear' },
  related: ['part1', 'history', 'symbols', 'day', 'ceremony', 'first'],
  sources: ['au_ocb_pdf', 'au_ocb', 'au_day'],
  en: {
    slug: 'national-days',
    nav: 'National days',
    card: 'Australia Day and Anzac Day: dates, origins, how each is marked, and the details the test checks.',
    title: 'National Days in Australia: Australia Day and Anzac Day',
    description: 'National days for the citizenship test: Australia Day on 26 January and Anzac Day on 25 April, what each marks, how it is observed and the facts people confuse.',
    h1: 'National days: Australia Day and Anzac Day explained',
    intro: 'Ten practice questions on the two national days. Below, enter a year to see the weekday of each date and how long ago each event took place.',
    resume: (h) => `Our Common Bond names two important days for Australians. Australia Day, on 26 January each year, marks the anniversary of the arrival of the First Fleet from Great Britain on ${h.date(h.A.firstFleetDate)}. It is a public holiday in every state and territory and the biggest annual public holiday in the country, a day to reflect on history and on the contribution of every Australian, from Aboriginal and Torres Strait Islander peoples, present for about ${h.num(h.A.arrivalYearsAgo[1])} years, to recent arrivals. It is marked by events across Australia, including special citizenship ceremonies, and the Prime Minister announces the Australian of the Year Awards in Canberra. Anzac Day, on 25 April, is named after the Australian and New Zealand Army Corps, which landed at Gallipoli in Türkiye on ${h.date(h.A.anzacDate)} during World War I. It is a solemn day to remember all Australians who served and died in wars, conflicts and peacekeeping operations. Our bank has ${h.inTopic('days')} questions on this topic.`,
    faqs: (h) => [
      { q: 'Is Anzac Day a celebration like Australia Day?', a: 'No. The booklet describes Australia Day as a celebration and a time to reflect on shared achievements, while Anzac Day is called a solemn day. On Anzac Day Australians remember the sacrifice of those who served and died, honour the courage and commitment of servicemen and women, and reflect on the many different meanings of war.' },
      { q: 'Can I become a citizen on Australia Day?', a: 'Many people do. The booklet notes that Australia Day is marked by events across the country, including special citizenship ceremonies. Councils organise these ceremonies, and the date you are invited to depends on where you live and when your application is approved. The ceremony page explains how invitations are sent and what happens on the day.' },
      { q: 'What does ANZAC stand for?', a: `Australian and New Zealand Army Corps. It was the force that landed at Gallipoli in Türkiye on ${h.date(h.A.anzacDate)}, in World War I. Anzac Day takes both its name and its date from that landing. Remember that it was World War I; the booklet mentions World War II only in connection with migration from Europe.` },
    ],
    body: (h) => `
<h2>The two days side by side</h2>
${h.table(['', 'Australia Day', 'Anzac Day'], [
  ['Date', '26 January', '25 April'],
  ['What it recalls', `First Fleet arrives from Great Britain, ${h.A.firstFleetDate.slice(0, 4)}`, `Anzac landing at Gallipoli, Türkiye, ${h.A.anzacDate.slice(0, 4)}`],
  ['Tone', 'celebration and reflection', 'solemn remembrance'],
  ['Who is honoured', 'every Australian\'s contribution, from the first peoples to newcomers', 'all who served and died in wars, conflicts and peacekeeping'],
  ['Notable events', 'citizenship ceremonies; Australian of the Year Awards announced by the Prime Minister in Canberra', 'commemorations of servicemen and women'],
  ['Public holiday', 'yes, in every state and territory; the biggest of the year', 'not described as such in the booklet'],
], undefined, ['l', 'l', 'l'])}
<h2>Australia Day in more detail</h2>
<p>The booklet presents 26 January as a national day for everyone. It recalls the First Fleet, but its message is wider: communities reflect on Australian history and on the people who built shared achievements, and the day acknowledges the contribution of Aboriginal and Torres Strait Islander peoples, of families here for generations, and of people who have come from all corners of the world. That is why so many councils choose it for citizenship ceremonies. The Australian of the Year Awards are announced by the Prime Minister in Canberra as part of the celebrations, a detail that has appeared in practice questions because it ties a person to a place.</p>
<h2>Anzac Day in more detail</h2>
<p>The name is an acronym: Australian and New Zealand Army Corps. The date is that of the landing at Gallipoli, in Türkiye, in ${h.A.anzacDate.slice(0, 4)}. The booklet stresses that the day remembers not only that campaign but the sacrifice of all Australians who served and died in wars, conflicts and peacekeeping operations, and the courage and commitment of all servicemen and women. It is a day of reflection rather than festivity.</p>
<h2>Other days you may meet</h2>
<p>Two more sets of dates are worth knowing, even though the booklet does not list them under national days. Part 2 notes public holidays on Christian days such as Good Friday, Easter Sunday and Christmas Day, as a sign of Australia's Judaeo-Christian heritage. And Australian Citizenship Day, held on ${h.H.citizenshipDayDate} each year since ${h.H.citizenshipDaySince} according to ${h.src('au_day', 'Home Affairs')}, celebrates citizenship itself; it is outside the testable section, but the ${h.a('day', 'Citizenship Day page')} explains it.</p>
<h2>Mistakes to avoid</h2>
<ul>
<li>Swapping the dates: 26 January is Australia Day, 25 April is Anzac Day. Both dates are the same every year, whatever the weekday.</li>
<li>Placing Gallipoli in World War II. The landing was in World War I.</li>
<li>Thinking Australia Day marks Federation. Federation happened on ${h.date(h.A.federationDate)}; Australia Day marks ${h.A.firstFleetDate.slice(0, 4)}.</li>
<li>Thinking the Governor-General announces the Australian of the Year. The booklet says the Prime Minister does.</li>
</ul>
<h2>Why the dates matter beyond the test</h2>
<p>Both days belong to the civic life you join as a citizen. Australia Day is the date many councils choose for ceremonies, so it may well be the day you make the pledge and receive your certificate. Anzac Day is when communities gather to remember, and knowing what it stands for explains why it is observed with such quiet respect. Understanding the meaning, not only the date, also protects you against answer options that describe the right day with the wrong purpose.</p>
<h2>Learning the topic</h2>
<p>The material is a single page of the ${h.src('au_ocb_pdf', 'testable section')}, page 13, so one careful reading is enough. Write each day on a card with its date, its origin and one phrase about its tone, then do the practice set above. The year tool below is a light way to fix the dates: try your own ceremony year and see which weekday each day falls on.</p>`,
  },
});
