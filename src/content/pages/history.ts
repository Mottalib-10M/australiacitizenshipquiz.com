import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'history',
  group: 'study',
  order: 70,
  tool: { kind: 'quiz', props: { mode: 'practice', topic: 'history', n: 10, scopeSelect: false } },
  mini: { kind: 'mini:timeline' },
  related: ['part1', 'constitution', 'first', 'states', 'days', 'part3'],
  sources: ['au_ocb_pdf', 'au_ocb', 'au_history'],
  en: {
    slug: 'australian-history-and-federation',
    nav: 'History and Federation',
    card: 'From the First Fleet to Federation and post-war migration: the dates and reasons the booklet gives.',
    title: 'History and Federation for the Citizenship Test: Key Dates',
    description: 'Australian history for the citizenship test: the First Fleet in 1788, convicts, the 1851 gold rush, Federation in 1901 and waves of migration, with the reasons.',
    h1: 'Australian history and Federation: the dates and the reasons',
    intro: 'Ten questions on early history and Federation. Under the summary, the timeline tool places any year between the milestones the booklet mentions.',
    resume: (h) => `The history in Our Common Bond is brief and built around a handful of dates. European settlement began when the ${h.A.firstFleetShips} convict ships of the First Fleet arrived from Great Britain on ${h.date(h.A.firstFleetDate)}, because British jails could no longer hold all the people convicted under harsh laws; Captain Arthur Phillip became the first Governor of New South Wales. Free settlers from Britain and Ireland followed, shaping culture and politics. A gold rush began in ${h.A.goldRushYear} in New South Wales and Victoria, Chinese miners became the first large non-European group, and the population more than doubled within ${h.A.goldRushDoubledYears} years. On ${h.date(h.A.federationDate)} the six self-governing colonies united as the Commonwealth of Australia under a Constitution passed in ${h.A.constitutionActYear}. After World War II a wave of European migrants arrived, and later programs brought people from across the world. Our bank has ${h.inTopic('history')} questions on this topic.`,
    faqs: (h) => [
      { q: 'Why did the colonies decide to federate?', a: 'The booklet gives practical and emotional reasons. Practically, each colony had its own laws on trade, transport, defence, immigration and postage, so moving goods between them was slow and costly, enforcing the law across borders was difficult and defence was weak. Emotionally, an Australian identity was forming through sporting teams that represented Australia and through songs, poems, stories and art.' },
      { q: 'Was Captain James Cook the first Governor of New South Wales?', a: 'No. The booklet names Captain Arthur Phillip as the first Governor of the colony of New South Wales, the colony set up when the First Fleet arrived. Cook does not appear in the testable section at all, so if his name is offered as an answer to a question about the first Governor, it is a distractor.' },
      { q: 'How many colonies joined the federation in 1901?', a: `Six. Before ${h.A.federationDate.slice(0, 4)}, Australia was made up of six separate British colonies, each governing itself with its own constitution. On ${h.date(h.A.federationDate)} they became the states of the Commonwealth of Australia. That is why the Commonwealth Star on the flag has a point for each of the ${h.A.states} states, plus one for the territories.` },
    ],
    body: (h) => `
<h2>The timeline the booklet gives</h2>
${h.table(['When', 'What happened', 'Why it matters for the test'], [
  [`${h.num(h.A.arrivalYearsAgo[0])} to ${h.num(h.A.arrivalYearsAgo[1])} years ago`, 'Aboriginal peoples arrive, according to archaeology', 'oldest continuous cultures'],
  [h.date(h.A.firstFleetDate), `First Fleet of ${h.A.firstFleetShips} ships lands; colony of New South Wales`, 'start of European settlement; Australia Day'],
  [String(h.A.goldRushYear), 'gold found in New South Wales and Victoria', 'population doubles; first large non-European migration'],
  [String(h.A.constitutionActYear), 'Constitution passed within a British Act of Parliament', 'legal basis of the nation'],
  [h.date(h.A.federationDate), 'six colonies federate as the Commonwealth of Australia', 'parliament, government and High Court created'],
  [h.date(h.A.anzacDate), 'Anzac landing at Gallipoli, World War I', 'Anzac Day'],
  ['after World War II', 'large wave of European migrants', 'first big non-British wave'],
  [String(h.A.referendumYear), 'Referendum: Indigenous peoples counted in the Census', 'constitutional change by the people'],
], 'Dates as printed in the testable section of Our Common Bond (2020).', ['l', 'l', 'l'])}
<h2>Convicts, then settlers</h2>
<p>The booklet explains the convict colony as a British answer to a British problem: harsh laws filled the jails, so the government shipped prisoners to the other side of the world. The colony of New South Wales survived under its first Governor, Captain Arthur Phillip, and grew as more convicts and free settlers arrived. Other colonies followed elsewhere on the continent. Early free settlers came from Great Britain and Ireland, and that shared heritage strongly shaped Australia's culture, politics and recent history.</p>
<h2>Gold and the first non-European migrants</h2>
<p>The gold rush that began in ${h.A.goldRushYear} drew people from all over the world to New South Wales and Victoria. Chinese arrivals of this period were the first large group of migrants from outside Europe, and within ${h.A.goldRushDoubledYears} years the population had more than doubled. Victoria still shows the wealth of those years in many fine buildings from the 1850s, which is how the gold rush also turns up on the ${h.a('states', 'states page')}.</p>
<h2>Federation in ${h.A.federationDate.slice(0, 4)}</h2>
<p>Federation is told twice in the booklet. Part 1 gives the result: the colonies became a federation of states, and national democratic institutions, the national parliament, government and High Court, were set up under the new Constitution. Part 3 gives the reasons and the legal mechanism: six self-governing colonies with separate laws found trade, transport, law enforcement and defence difficult; a sense of national identity was growing; and the Constitution, passed in ${h.A.constitutionActYear} as part of a British Act, took effect on ${h.date(h.A.federationDate)}. The ${h.a('constitution', 'Constitution page')} covers what that document contains.</p>
<h2>The twentieth century and today</h2>
<p>At Federation the population was ${h.A.pop1901}, not counting Aboriginal and Torres Strait Islander peoples. In the first half of the century migration rose and fell, with programs encouraging British settlers. After World War II millions of Europeans had to leave their homelands and many came to Australia. In recent decades migration and refugee programs have brought people from all over the world, and the population has grown steadily more diverse, while the aim remains a cohesive, unified nation.</p>
<h2>How to remember it</h2>
<p>Learn four anchor years (${h.A.firstFleetDate.slice(0, 4)}, ${h.A.goldRushYear}, ${h.A.federationDate.slice(0, 4)}, ${h.A.referendumYear}) and attach one sentence to each. Most history questions ask for a date, a name or a reason, and each anchor carries all three. Then try the timeline tool below with years that fall between them, and finish with the practice set above. The ${h.src('au_history', 'Home Affairs history of Australian citizenship')} is interesting background, but the test only uses the ${h.src('au_ocb_pdf', 'booklet')}.</p>`,
  },
});
