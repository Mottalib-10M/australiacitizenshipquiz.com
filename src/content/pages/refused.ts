import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'refused',
  group: 'apply',
  order: 70,
  tool: { kind: 'mini:refused' },
  mini: { kind: 'mini:refusedwhy' },
  related: ['residence', 'character', 'failed', 'requirements', 'travel'],
  sources: ['au_pr', 'au_descent', 'au_test', 'au_processing'],
  en: {
    slug: 'application-refused',
    nav: 'Application refused',
    card: 'Why citizenship applications are refused, what the letter tells you, and how review or a new application works.',
    title: 'Citizenship Application Refused 2026: Reasons and Review',
    description: 'Citizenship application refused? The reasons Home Affairs must refuse, what the decision letter says about review and deadlines, and when to apply again.',
    h1: 'Citizenship application refused: reasons, review and a second attempt',
    intro: 'Enter how many days have passed since the letter, then read why applications fail and what each kind of refusal leaves open.',
    resume: (h) => `When Home Affairs refuses an Australian citizenship application, it writes to you with the reasons for the decision, where to lodge a request for review and the time limit for doing so, and whether the decision can be reviewed at all. The deadline in your letter is the one that counts, so read it the day it arrives. Some refusals are mandatory: the department must not approve an application if it is not satisfied of your identity, if criminal proceedings are pending, if less than ${h.M.releaseYearsBlock} years have passed since release from a prison sentence of ${h.M.sentenceMonths} months or more (${h.M.releaseYearsBlockRepeat} for a repeat offender), if you are assessed as a security risk, or if you ceased to be a citizen in the past ${h.M.ceasedMonthsBlock} months. Others follow from a missed condition, such as applying before the residence date, failing the test at ${h.T.appointmentsBeforeRefusal} appointments, or being outside Australia at decision time. A new application is possible once the cause is fixed, with a new fee of ${h.aud(h.F.general)}.`,
    faqs: (h) => [
      { q: 'Does a citizenship refusal affect my permanent visa?', a: 'The Home Affairs pages we read do not link a citizenship refusal to visa cancellation. For the test, the department says outright that failing does not affect your permanent visa or stop you living in Australia. A refusal on character grounds is a different matter, because the same facts can be examined under migration law; read your letter carefully and keep your visa conditions in mind.' },
      { q: 'Can I lodge a new citizenship application while a review is under way?', a: 'Nothing in the pages we read forbids it, but each application is a separate file with its own fee, and a new one is judged on the facts on its own lodging day. If the refusal was for applying too early, a fresh application after your residence date often fixes the problem faster than a review. If it was for character or identity, the cause usually needs to be resolved first.' },
      { q: 'Is a withdrawn application counted as a refusal?', a: `No. Home Affairs counts withdrawn and invalid applications as decisions in its processing statistics, alongside approvals and refusals, but they are distinct outcomes. Withdrawal is your choice; refusal is the department's decision with reasons and review rights. The fee rules for a withdrawal are not described on the pages we read, so ask the department before withdrawing.` },
    ],
    body: (h) => `
<h2>What the decision letter contains</h2>
<p>Home Affairs gives every decision in writing. For a refusal, its pages say the letter will tell you the reasons for the decision, where to lodge a request for a review and the time limits for requesting one. The conferral pages do not name a review body in general terms, so the letter itself is where you learn which body hears a review of your decision, and whether review is available at all. Treat the deadline in your own letter as the only reliable one, and note the date it arrived. The counter at the top of this page tracks how many days have gone by.</p>
<h2>Refusals Home Affairs cannot avoid</h2>
<p>The permanent resident page lists situations where the department must not approve an application, whatever else is in the file:</p>
${h.table(['Bar', 'When it lifts'], [
  ['Identity not established', 'when documents prove identity from birth'],
  ['Proceedings for an offence pending, including appeals', 'when the proceedings end'],
  [`Released less than ${h.M.releaseYearsBlock} years ago from a sentence of ${h.M.sentenceMonths} months or more`, `${h.M.releaseYearsBlock} years after release, ${h.M.releaseYearsBlockRepeat} for a repeat offender`],
  ['Parole, good behaviour or bail conditions in force', 'when the conditions end'],
  ['In prison or a psychiatric institution by court order', 'on release'],
  ['Assessed as a risk to national security', 'not stated'],
  [`Ceased to be a citizen in the past ${h.M.ceasedMonthsBlock} months`, `${h.M.ceasedMonthsBlock} months after cessation`],
  ['Outside Australia at decision time (most conferral cases)', 'on return'],
], 'Home Affairs permanent resident page, updated ' + h.date(h.R.pageUpdated) + '.', ['l', 'l'])}
<p>The last row has exceptions: applicants under a special residence requirement, or helped by the spouse or interdependent partner discretion, can be approved while abroad. The ${h.a('travel', 'travel page')} covers the timing of trips.</p>
<h2>Refusals for a missed condition</h2>
<p>Most refusals are less dramatic. The residence requirement is checked on the day the application arrives, so a file lodged before the date fails even if you qualify a week later; the ${h.a('residence', 'residence calculator')} prevents this. The test is the second common cause: Home Affairs may refuse after ${h.T.appointmentsBeforeRefusal} appointments without a pass, and the ${h.a('failed', 'page on failing the test')} explains how to prepare between attempts. Good character, assessed for applicants aged 18 or over, can also lead to refusal through convictions, court obligations, associations, domestic violence incidents or dishonesty in visa and citizenship dealings, as the ${h.a('character', 'character page')} details. Finally, the department must be satisfied you will live in Australia or keep a close and continuing link with it.</p>
<h2>Review or a fresh start</h2>
<p>A review asks whether the decision was right on the facts and law at the time. A new application starts again on the facts at its own lodging date. Which is better depends on the reason. If you applied a few weeks early, a new application after your residence date is usually simpler. If you think the department misread your evidence, review is the route, within the time limit. If a bar applies, such as a pending charge, neither will succeed until it lifts. The panel under the summary sets out the usual next step for each common reason.</p>
<h2>Before you apply again</h2>
<p>Read the reasons line by line and list each point the department was not satisfied about. Collect the missing evidence: identity documents from birth, overseas police certificates, proof of the link with Australia, or the residence figures. Check that the new application is complete, because Home Affairs names incomplete files and slow replies as the main causes of delay. A new conferral application pays the fee in force on the day, ${h.aud(h.F.general)} on form 1298i of July 2026. The ${h.a('requirements', 'requirements page')} works through every condition again.</p>`,
  },
});
