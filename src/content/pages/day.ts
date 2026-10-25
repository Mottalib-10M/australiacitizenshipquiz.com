import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'day',
  group: 'after',
  order: 30,
  tool: { kind: 'mini:citday' },
  mini: { kind: 'mini:timeline' },
  related: ['ceremony', 'pledge', 'days', 'changes', 'part4', 'citizenship'],
  sources: ['au_day', 'au_history', 'au_ceremony'],
  en: {
    slug: 'australian-citizenship-day',
    nav: 'Australian Citizenship Day',
    card: '17 September: why that date, what happens and how it differs from Australia Day.',
    title: 'Australian Citizenship Day: 17 September, History, Events',
    description: 'Australian Citizenship Day falls on 17 September: why that date was chosen, when it began, what councils hold that week and how it differs from Australia Day.',
    h1: 'Australian Citizenship Day, 17 September',
    intro: 'Pick a year to see which weekday 17 September falls on, then read where the day comes from and what happens around it.',
    resume: (h) => `Australian Citizenship Day is celebrated every year on ${h.H.citizenshipDayDate}. The Australian Government established it in ${h.H.citizenshipDaySince}, following a recommendation of the Australian Citizenship Council in its 2000 report, itself prompted by a proposal from the 1999 National Schools Constitutional Convention. The date marks the anniversary of the renaming, in ${h.H.renamedYear}, of the Nationality and Citizenship Act 1948 as the Australian Citizenship Act 1948. Home Affairs presents it as a day for all Australians, by birth or by choice, to reflect on the meaning of citizenship and on what unites them. The department and local councils mark it with special citizenship ceremonies, affirmation ceremonies in which existing citizens restate their commitment, and community events, and schools are encouraged to take part. It is not a public holiday. Since the first ceremony in ${h.H.firstCeremonyYear}, ${h.H.newCitizensSince1949} people have become Australian citizens, according to Home Affairs.`,
    faqs: (h) => [
      { q: 'Is Australian Citizenship Day a public holiday?', a: 'No. Unlike Australia Day on 26 January, which is a public holiday in every state and territory, Australian Citizenship Day on 17 September is a day of celebration and reflection without a day off. It is marked by special ceremonies and community and school events organised around that date.' },
      { q: 'Can I become a citizen on Australian Citizenship Day?', a: 'Many councils hold citizenship ceremonies on or around 17 September, so it is possible, but you cannot choose your ceremony date. Your invitation sets the date, time and place. If your invitation happens to fall that week, you join a group of new citizens on the day dedicated to citizenship.' },
      { q: 'What is an affirmation ceremony?', a: 'An affirmation ceremony lets people who are already Australian citizens, including those born in Australia, publicly affirm their loyalty and commitment to Australia. It has no legal effect on citizenship. Home Affairs lists affirmation ceremonies among the events held for Australian Citizenship Day, alongside special citizenship ceremonies.' },
    ],
    body: (h) => `
<h2>Why 17 September</h2>
<p>The choice of date goes back to a change of name. In ${h.H.renamedYear}, the Nationality and Citizenship Act 1948, the law that created Australian citizenship from ${h.H.firstCeremonyYear}, was renamed the Australian Citizenship Act 1948. Home Affairs explains that ${h.H.citizenshipDayDate} was chosen because it is the anniversary of that renaming. The idea of a day for citizenship came from students: the 1999 National Schools Constitutional Convention proposed it, the Australian Citizenship Council recommended it in 2000, and the government established it in ${h.H.citizenshipDaySince}.</p>
<h2>Milestones of Australian citizenship</h2>
${h.table(['Year', 'Event'], [[String(h.H.firstCeremonyYear), 'first citizenship ceremony, with seven men from Czechoslovakia, Denmark, France, Greece, Norway, Spain and Yugoslavia'], [String(h.H.renamedYear), 'the Act is renamed the Australian Citizenship Act'], [String(h.H.citizenshipDaySince), 'Australian Citizenship Day introduced on 17 September'], [String(new Date(h.H.dualFrom).getUTCFullYear()), 'dual citizenship provisions: taking another citizenship no longer ends Australian citizenship'], [String(h.H.testSince), 'a short multiple-choice citizenship test is introduced']], 'From the Home Affairs history of Australian citizenship.', ['l', 'l'])}
<h2>What happens around the day</h2>
<p>Home Affairs and local councils promote the day by holding special citizenship ceremonies, affirmation ceremonies and other events. The Australian Citizenship Ceremonies Code encourages councils to hold a ceremony on or around ${h.H.citizenshipDayDate}. Schools and community groups are encouraged to organise activities on what citizenship means. For people waiting for their own ceremony, the week can bring an invitation, but dates are set by councils, not chosen by applicants; the ${h.a('ceremony', 'ceremony page')} explains how invitations work.</p>
<h2>Citizenship Day and Australia Day</h2>
<p>The two days are often confused. Australia Day, on 26 January, is a public holiday marking the arrival of the First Fleet at Sydney Cove in 1788, and many citizenship ceremonies are held on it too. Our Common Bond covers Australia Day and Anzac Day in Part 1, which is why they appear in the test; the ${h.a('days', 'national days page')} drills them. Australian Citizenship Day is a newer observance focused on citizenship itself, and it is not a public holiday.</p>
<h2>Taking part as a resident or a citizen</h2>
<p>You do not need to be a citizen to join the events. Councils open many Citizenship Day activities to the whole community, and schools use the week to talk about what citizenship means. Existing citizens, whether born in Australia or naturalised years ago, can take part in an affirmation ceremony, which Home Affairs lists among the events of the day: a public restatement of commitment to Australia that has no legal effect on anyone's status. For someone still preparing for the test, it is a good occasion to see a ceremony, hear the pledge said aloud and understand what the last step of the journey looks like.</p>
<h2>A day to reflect on the values</h2>
<p>Home Affairs links the day to the values new citizens commit to, such as respect for the freedom and dignity of the individual, freedom of religion, speech and association, commitment to the rule of law, parliamentary democracy, equality of opportunity for all people, and a fair go for all that embraces mutual respect, tolerance and compassion for those in need. They are the subject of the ${h.T.valuesQuestions} values questions in every test. If you are preparing for the test around ${h.H.citizenshipDayDate}, the ${h.a('part4', 'Part 4 page')} is a fitting place to start.</p>`,
  },
});
