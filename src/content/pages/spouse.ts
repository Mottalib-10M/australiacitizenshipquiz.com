import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'spouse',
  group: 'eligibility',
  order: 100,
  tool: { kind: 'mini:discretion' },
  mini: { kind: 'mini:spouseabs' },
  related: ['discretion', 'residence', 'requirements', 'conferral', 'travel'],
  sources: ['au_pr', 'au_rescalc', 'au_1298i'],
  en: {
    slug: 'citizenship-for-spouses',
    nav: 'Spouses and partners',
    card: 'Marriage to a citizen does not grant citizenship, but a discretion can count time spent overseas together.',
    title: 'Citizenship by Marriage 2026: Rules for Spouses of Citizens',
    description: 'Australian citizenship by marriage does not exist as such: spouses apply by conferral. See the residence rule, the partner discretion for time abroad, the fee.',
    h1: 'Citizenship for spouses and partners of Australian citizens',
    intro: 'Check below whether a discretion fits your case, then test how the partner discretion would change your count of days overseas.',
    resume: (h) => `Marrying an Australian citizen does not make a person a citizen, and there is no separate citizenship-by-marriage application. A husband, wife or de facto partner of a citizen first becomes a permanent resident, usually through a partner visa, and then applies for citizenship by conferral like any other permanent resident. The general residence requirement applies: ${h.R.lawfulYears} years living in Australia on a valid visa, the last ${h.R.prMonths} months on a permanent visa, and no more than ${h.R.maxAbsenceDays} days away in those ${h.R.lawfulYears} years, with at most ${h.R.maxAbsenceLast12m} in the final year. What marriage can change is the way time overseas is counted. If you spent time outside Australia as a permanent resident while married to, or in a de facto relationship with, a citizen, and kept a close and continuing association with Australia, the Minister may treat that time as presence in Australia. The fee for applicants aged ${h.T.ages[0]} to ${h.T.ages[1]} is ${h.aud(h.F.general)} on form 1298i of July 2026.`,
    faqs: (h) => [
      { q: 'Does my citizen husband or wife have to sponsor my citizenship application?', a: 'No. Sponsorship belongs to the partner visa, not to citizenship. You lodge the citizenship application in your own name as a permanent resident. Your partner only becomes part of the file if you ask for the spouse discretion, because you then send proof of their Australian citizenship and of your relationship, such as a marriage certificate or joint accounts.' },
      { q: 'Can a de facto partner use the spouse discretion?', a: `Yes. Home Affairs lists the spouse or de facto partner of an Australian citizen, and also a surviving spouse or de facto partner. A separate limb covers people who hold a permanent visa granted because of an interdependent relationship with a citizen. In every case the time abroad must have been spent as a permanent resident while in that relationship.` },
      { q: 'What if my Australian partner has died?', a: 'The discretion still exists for a surviving spouse or de facto partner. You would send the death certificate with proof of your partner’s citizenship and of the relationship during the time you spent overseas. The other conditions do not change: the time must have been spent as a permanent resident and you must show a close and continuing association with Australia.' },
      { q: 'Does marriage shorten the four years of residence?', a: `Not directly. The ${h.R.lawfulYears} years on a valid visa and the ${h.R.prMonths} months on a permanent visa still have to be met. The partner discretion deals with periods spent outside Australia as a permanent resident; it lets the Minister count them as time in Australia. It does not turn time on a temporary visa into permanent residence, which is a different discretion for hardship or error.` },
    ],
    body: (h) => `
<h2>No shortcut through marriage</h2>
<p>Australian law has no route that grants citizenship because of a wedding. The partner of a citizen follows the same path as other migrants: a permanent visa first, then an application for ${h.a('conferral', 'citizenship by conferral')} once the ${h.a('residence', 'residence requirement')} is met. A partner visa that is still temporary counts as time on a valid visa, but not as permanent residence, so the ${h.R.prMonths}-month clock only starts when the permanent stage is granted, or when you first enter Australia on that permanent visa.</p>
<h2>The four limbs of the partner discretion</h2>
<p>Home Affairs sets out the discretion in its ${h.src('au_pr', 'criteria for permanent residents')}. The Minister may treat a period overseas as presence in Australia as a permanent resident when all of these are true:</p>
<ul>
<li>you are the spouse or de facto partner, or the surviving spouse or de facto partner, of an Australian citizen when you apply;</li>
<li>you spent the time outside Australia while you were a permanent resident;</li>
<li>you were that citizen’s spouse or de facto partner during the period;</li>
<li>you had a close and continuing association with Australia during the period.</li>
</ul>
<p>A parallel limb covers people whose permanent visa was granted because of an interdependent relationship with a citizen and who stayed in that relationship while abroad.</p>
<h2>Who it helps in practice</h2>
<p>The typical case is a couple posted overseas for the citizen’s job, or living abroad for a few years to care for family, while the migrant partner already holds a permanent visa. Without the discretion, a long posting quickly breaks the limit of ${h.R.maxAbsenceDays} days away in ${h.R.lawfulYears} years. With it, the days spent abroad with the citizen partner can be set aside. The second calculator on this page shows the two counts side by side: your days as they stand, and the same days if the period with your partner is treated as time in Australia.</p>
<h2>Evidence Home Affairs asks for</h2>
<p>The discretion is never applied on a simple statement. The department lists proof of your partner’s citizenship (an Australian birth certificate, citizenship certificate or passport), proof of the relationship (marriage certificate, joint utility or bank accounts, joint lease or mortgage), a statement explaining why you were both overseas, such as a letter from an employer, and evidence of your close and continuing link with Australia. A death certificate is added for a surviving partner. The ${h.a('documents', 'documents page')} covers identity papers and police certificates, which are needed as well.</p>
<h2>Applying from overseas</h2>
<p>Most conferral applicants must be in Australia on the day Home Affairs decides the application. Applicants who were helped by the spouse or interdependent partner discretion are one of the stated exceptions, which matters for couples still living abroad. A ceremony and the pledge are still required, so plan a trip home for the invitation, which arrives about ${h.R.invitationWeeksAhead} weeks ahead.</p>
<h2>What the discretion cannot do</h2>
<p>It cannot be assessed before you apply: Home Affairs says eligibility for a discretion is decided only within an application. It does not replace the citizenship test, the character requirement or the identity checks. And it does not cover time abroad before you became a permanent resident. If your problem is time on a temporary visa rather than time overseas, read the ${h.a('discretion', 'page on every ministerial discretion')}, which explains the hardship and administrative error options.</p>
<h2>Cost for a couple</h2>
<p>Only the migrant partner applies, so one fee is paid: ${h.aud(h.F.general)} for an applicant aged ${h.T.ages[0]} to ${h.T.ages[1]}, or ${h.aud(h.F.generalConcession)} with a Pensioner Concession Card. Children under 16 who are permanent residents can be added to the same form at no charge.</p>`,
  },
});
