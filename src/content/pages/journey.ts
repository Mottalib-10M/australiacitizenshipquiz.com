import { definePage } from '../../lib/guide-types';
import type { Helpers } from '../../lib/helpers';

/** Window diagram: four years of lawful residence, the last twelve months as a permanent resident, with the two absence limits. */
const windowSvg = (h: Helpers) => {
  const { lawfulYears: Y, prMonths: PRM, maxAbsenceDays: A, maxAbsenceLast12m: A12 } = h.R;
  const x0 = 20, x1 = 620, w = (x1 - x0) / Y;
  const ticks = Array.from({ length: Y + 1 }, (_, i) => `<line x1="${x0 + i * w}" x2="${x0 + i * w}" y1="58" y2="96" stroke="var(--color-navy-300)" stroke-width="1"/><text x="${x0 + i * w}" y="112" font-size="12" text-anchor="middle" fill="var(--color-navy-600)">${i === Y ? 'apply' : `-${Y - i} yr${Y - i > 1 ? 's' : ''}`}</text>`).join('');
  return `<figure class="not-prose my-8 rounded-2xl border border-navy-200 bg-white p-5"><svg viewBox="0 0 640 170" class="h-auto w-full" role="img" aria-label="The residence window: ${Y} years of lawful residence before applying, the last ${PRM} months as a permanent resident, at most ${A} days away in the ${Y} years and ${A12} in the last 12 months.">
<text x="${x0}" y="20" font-size="14" font-weight="600" fill="var(--color-navy-900)">${Y} years of lawful residence, on any visa</text>
<rect x="${x0}" y="62" width="${(Y - 1) * w - 3}" height="30" rx="6" fill="var(--color-accent-300)"/>
<rect x="${x0 + (Y - 1) * w}" y="62" width="${w}" height="30" rx="6" fill="var(--color-accent-700)"/>
<text x="${x0 + ((Y - 1) * w) / 2}" y="82" font-size="13" text-anchor="middle" fill="var(--color-navy-900)">temporary or permanent visa</text>
<text x="${x0 + (Y - 0.5) * w}" y="82" font-size="13" font-weight="600" text-anchor="middle" fill="#ffffff">${PRM} months PR</text>
<path d="M${x0} 36 H${x1}" stroke="var(--color-navy-700)" stroke-width="2" marker-end="url(#ar)" marker-start="url(#ar)"/>
<text x="${(x0 + x1) / 2}" y="50" font-size="12" text-anchor="middle" fill="var(--color-navy-700)">at most ${A} days outside Australia in total</text>
<path d="M${x0 + (Y - 1) * w} 134 H${x1}" stroke="var(--color-accent-700)" stroke-width="2"/>
<text x="${x0 + (Y - 0.5) * w}" y="152" font-size="12" text-anchor="middle" fill="var(--color-accent-800)">at most ${A12} days away</text>
${ticks}
<defs><marker id="ar" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="var(--color-navy-700)"/></marker></defs>
</svg><figcaption class="mt-3 text-sm text-navy-600">The general residence requirement, counted back from the day you apply. All four conditions must hold on that day. Source: Home Affairs, permanent resident page.</figcaption></figure>`;
};

export default definePage({
  id: 'journey',
  group: 'apply',
  order: 5,
  tool: { kind: 'frise:steps' },
  mini: { kind: 'mini:prwait' },
  related: ['residence', 'application', 'test', 'processing', 'ceremony', 'prto'],
  sources: ['au_pr', 'au_rescalc', 'au_processing', 'au_ceremony', 'au_test'],
  en: {
    slug: 'how-long-does-citizenship-take',
    nav: 'From eligibility to ceremony',
    card: 'The whole road on one timeline: residence, application, test, decision, ceremony and pledge.',
    title: 'Australian Citizenship Timeline: How Long From PR to Pledge',
    description: 'How long Australian citizenship takes from permanent visa to pledge: 12 months to 4 years of residence, then up to 5 months to decide and 6 to a ceremony.',
    h1: 'From eligibility to ceremony: the whole Australian citizenship timeline',
    intro: 'Enter the date your permanent visa was granted: the timeline lays out every stage up to the pledge, with today marked.',
    resume: (h) => `Becoming an Australian citizen by conferral takes two periods of very different length. The first is the residence requirement: ${h.R.lawfulYears} years of lawful residence in Australia, of which the last ${h.R.prMonths} months as a permanent resident, with no more than ${h.R.maxAbsenceDays} days away in the ${h.R.lawfulYears} years and ${h.R.maxAbsenceLast12m} in the last year. Someone who lived ${h.R.lawfulYears - 1} years on temporary visas before the permanent one can apply ${h.R.prMonths} months after the grant; someone who arrived as a permanent resident waits the full ${h.R.lawfulYears} years. The second period starts when you lodge. In the Home Affairs table updated on ${h.date(h.PT.pageUpdated)}, nine in ten conferral applications were decided within ${h.PT.table.decision.p90}, the citizenship test being sat during that stage, and nine in ten approved applicants had the chance to attend a ceremony within ${h.PT.table.approvalToCeremony.p90} of approval. From lodging to ceremony, half of applicants took ${h.PT.table.applicationToCeremony.p50} or less and nine in ten ${h.PT.table.applicationToCeremony.p90}. You become a citizen when you make the pledge.`,
    faqs: (h) => [
      { q: 'What is the fastest route from permanent residence to Australian citizenship?', a: `Living in Australia lawfully for ${h.R.lawfulYears - 1} years on temporary visas before the permanent visa, so that ${h.R.prMonths} months as a permanent resident complete the ${h.R.lawfulYears} years, with few trips abroad. Then a complete application, a pass at the first test appointment and a council with short ceremony waits. Even then, the official table shows about ${h.PT.table.applicationToCeremony.p25} from lodging to ceremony for the fastest quarter.` },
      { q: 'Does the time between lodging and the ceremony count towards anything?', a: `Not towards the residence requirement, which is tested on the day you apply. It matters for other reasons: you keep your permanent visa until the pledge, you travel on your current passport, and the pledge must be made within ${h.R.pledgeWithinMonths} months of approval or the approval may be cancelled.` },
      { q: 'Why does the timeline show a range rather than a date?', a: `Because Home Affairs publishes its processing times as shares of applications decided within a time, not as a date for each file. The timeline adds up the fastest quarter at one end and nine in ten at the other. A missing document, an identity check or a busy council can put your own file beyond that range.` },
    ],
    body: (h) => `
<h2>The four stages at a glance</h2>
${h.table(['Stage', 'How long', 'Set by'], [['Residence requirement', `${h.R.prMonths} months to ${h.R.lawfulYears} years after the permanent visa`, 'the law, and your trips abroad'], ['Application to decision', `${h.PT.table.decision.p25} to ${h.PT.table.decision.p90}`, 'Home Affairs processing'], ['Approval to ceremony', `${h.PT.table.approvalToCeremony.p25} to ${h.PT.table.approvalToCeremony.p90}`, 'your local council'], ['Pledge', `within ${h.R.pledgeWithinMonths} months of approval`, 'the law']], `Ranges run from the fastest quarter to nine in ten applications, Home Affairs table of ${h.date(h.PT.pageUpdated)}.`, ['l', 'l', 'l'])}
<h2>Stage 1: the residence window</h2>
<p>The residence requirement is the longest stage for almost everyone, and the only one you control. It looks back from the day you apply, so the question is never how long you have been a permanent resident but whether the last ${h.R.lawfulYears} years, seen from a given day, meet all four limits.</p>
${windowSvg(h)}
<p>Trips matter twice: once against the ${h.R.maxAbsenceDays}-day total and once against the ${h.R.maxAbsenceLast12m}-day limit in the last year. A long holiday in the final months is the most common reason for a later date. The ${h.a('residence', 'residence calculator')} tests each day with your real trips, and the ${h.a('prto', 'PR to citizenship page')} covers the special cases such as New Zealand citizens.</p>
<h2>Stage 2: from lodging to decision</h2>
<p>Once you lodge, Home Affairs checks your identity and character, then invites you to an appointment where you sit the ${h.a('test', 'citizenship test')}. In the table updated on ${h.date(h.PT.pageUpdated)}, a quarter of conferral applications were decided within ${h.PT.table.decision.p25}, half within ${h.PT.table.decision.p50}, three quarters within ${h.PT.table.decision.p75} and nine in ten within ${h.PT.table.decision.p90}. Failing the test does not end the application, but each new appointment adds time, and after ${h.T.appointmentsBeforeRefusal} appointments without a pass the application may be refused. Preparing well before you lodge is the simplest way to keep this stage short.</p>
<h2>Stage 3: waiting for a ceremony</h2>
<p>Approval does not make you a citizen. Ceremonies are arranged mostly by local councils, so the wait depends on where you live; Home Affairs publishes ${h.src('au_ceremony_wait', 'wait times by council')}. Nationally, a quarter of approved applicants had a ceremony within ${h.PT.table.approvalToCeremony.p25}, half within ${h.PT.table.approvalToCeremony.p50} and nine in ten within ${h.PT.table.approvalToCeremony.p90}. The invitation arrives about ${h.R.invitationWeeksAhead} weeks ahead. The ${h.a('ceremony', 'ceremony page')} explains the day.</p>
<h2>Stage 4: the pledge, and after</h2>
<p>You become an Australian citizen at the moment you make the pledge, which must happen within ${h.R.pledgeWithinMonths} months of approval. You receive your certificate, can enrol to vote and, after waiting at least ${h.M.passportWaitDays} days, apply for an Australian passport. Until then, keep travelling on your current passport with a visa that lets you return.</p>`,
  },
});
