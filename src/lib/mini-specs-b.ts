/** Mini-tools added for the eligibility and application pages (same contract as mini-specs.ts). */
import type { MiniSpec } from './mini-types';
import P from '../data/params-2026.json';
import B from '../data/params-b.json';
import { money, formatNumberL } from './format-l';

const R = P.au.residence, F = P.au.fees, PT = P.au.processing, M = P.au.misc, T = P.au.test;
const yn = [{ value: '0', label: 'No' }, { value: '1', label: 'Yes' }];
const clamp = (x: number, a: number, b: number) => Math.max(a, Math.min(b, Math.round(x)));
const N = (v: number) => formatNumberL(v);
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const monthOpts = MONTHS.map((m, i) => ({ value: String(i + 1), label: m }));
/** "42 days" or "5 months" from the official table to a number of months. */
const toMonths = (s: string) => (/day/.test(s) ? parseInt(s, 10) / 30.44 : parseInt(s, 10));
const addMonth = (m: number, y: number, k: number) => { const t = y * 12 + (m - 1) + Math.round(k); return `${MONTHS[t % 12]} ${Math.floor(t / 12)}`; };

export const SPECS_B: Record<string, () => MiniSpec> = {
  perks: () => ({
    title: 'What citizenship would change for me', cta: 'Which route to citizenship fits me', ctaPage: 'citizenship',
    inputs: [{ id: 'age', label: 'Your age', def: 30, max: 120, unit: 'yrs' }, { id: 'other', label: 'Will you keep another citizenship?', def: 1, options: yn }],
    run: (v) => {
      const a = clamp(v.age ?? 0, 0, 120), adult = a >= 18;
      return { head: ['New duties and rights', adult ? 'All of them apply' : 'Most start at 18'], rows: [['Voting in elections and referendums', adult ? 'compulsory: enrol after the pledge' : 'from 18'], ['Australian passport and free re-entry', 'yes'], ['Children born overseas', 'can apply by descent'], ['Standing for parliament', !adult ? 'from 18' : v.other ? 'not while a dual citizen' : 'open to you'], ['Jury service, defending Australia', 'if called on']] };
    },
  }),
  ties: () => ({
    title: 'Close and continuing link: what can I show?', cta: 'All the conditions in one place', ctaPage: 'requirements',
    inputs: [{ id: 'home', label: 'Home rented or owned in Australia?', def: 1, options: yn }, { id: 'work', label: 'Job or income in Australia?', def: 1, options: yn }, { id: 'fam', label: 'Partner or children living here?', def: 0, options: yn }, { id: 'away', label: `Planning ${B.linkStatementMonths} months or more overseas soon?`, def: 0, options: yn }],
    run: (v) => {
      const n = [v.home, v.work, v.fam].filter((x) => !!x).length;
      return { head: ['Kinds of evidence you can give', `${n} of 3`], rows: [['Home', v.home ? 'lease, title deed or rates notice' : 'gap: explain where you live'], ['Work or income', v.work ? 'contracts and pay slips' : 'gap: other commitments'], ['Family here', v.fam ? 'their passports or visa status' : 'not needed, but helps'], ['Statement on absence', v.away ? 'needed: explain the time away' : 'not needed']], note: 'Family or friends in Australia alone may not be enough, Home Affairs says; it weighs the whole picture.' };
    },
  }),
  conferralform: () => ({
    title: 'Which conferral form and fee are mine?', cta: 'Every citizenship fee', ctaPage: 'cost',
    inputs: [{ id: 'age', label: 'Age on the day Home Affairs gets your application', def: 35, max: 120, unit: 'yrs' }, { id: 'pcc', label: 'Pensioner Concession Card (primary holder or listed dependant under 18)?', def: 0, options: yn }, { id: 'ex', label: 'Fee exemption (90 days permanent forces, former child migrant, stateless)?', def: 0, options: yn }],
    run: (v) => {
      const a = clamp(v.age ?? 0, 0, 120), [lo, hi] = T.ages, general = a >= lo && a <= hi, child = a < 16;
      const form = child ? `on a parent’s form, or form ${B.conferralForms.other}` : general ? `form ${B.conferralForms.general}, general eligibility` : `form ${B.conferralForms.other}, other situations`;
      const fee = v.ex ? 0 : child ? 0 : general ? (v.pcc ? F.generalConcession : F.general) : (v.pcc ? F.otherSituationsConcession : F.otherSituations);
      return { head: ['Fee from form 1298i', money(fee)], rows: [['Application', form], ['Citizenship test', general ? 'yes' : 'no, an interview may be held'], ['Lodging', v.ex ? 'paper form only' : general ? 'online or paper' : 'see the form for your case']], note: child ? 'A child under 16 on a parent’s form pays nothing; one applying alone uses form 1290.' : undefined };
    },
  }),
  decide: () => ({
    title: 'When might Home Affairs decide my application?', cta: 'The ceremony stage', ctaPage: 'aftertest',
    inputs: [{ id: 'm', label: 'Month you applied', def: 10, options: monthOpts }, { id: 'y', label: 'Year', def: 2026, max: 2040 }, { id: 'k', label: 'Application', def: 0, options: [{ value: '0', label: 'Conferral' }, { value: '1', label: 'Descent' }] }],
    run: (v) => {
      const m = clamp(v.m ?? 1, 1, 12), y = clamp(v.y ?? 2026, 2020, 2040), D = v.k === 1 ? PT.table.descentDecision : PT.table.decision;
      return { head: ['Half of decisions by about', addMonth(m, y, toMonths(D.p50))], rows: [['A quarter by about', addMonth(m, y, toMonths(D.p25))], ['Three quarters by about', addMonth(m, y, toMonths(D.p75))], ['Nine in ten by about', addMonth(m, y, toMonths(D.p90))]], note: 'A guide from past decisions, not a promise: a complete file and quick replies help.' };
    },
  }),
  descentcheck: () => ({
    title: 'Can I apply for citizenship by descent?', cta: 'Fee for brothers and sisters', ctaPage: 'descent',
    inputs: [{ id: 'p', label: 'Was a parent an Australian citizen on the day you were born?', def: 1, options: yn }, { id: 'how', label: 'How that parent became a citizen', def: 0, options: [{ value: '0', label: 'Born in Australia, or by conferral' }, { value: '1', label: 'By descent, or by Hague adoption overseas' }] }, { id: 'yrs', label: 'Years that parent has spent lawfully in Australia', def: 5, max: 90, unit: 'yrs' }, { id: 'age', label: 'Your age', def: 25, max: 120, unit: 'yrs' }],
    run: (v) => {
      const par = !!v.p, viaDescent = v.how === 1, yrsOk = (v.yrs ?? 0) >= B.descentParentLawfulYears;
      const ok = par && (!viaDescent || yrsOk), a = clamp(v.age ?? 0, 0, 120);
      return { head: ['Citizenship by descent', !par ? 'Not through this parent' : ok ? 'Open to you' : 'Parent’s residence too short'], rows: [['Parent’s time in Australia', viaDescent ? `${B.descentParentLawfulYears} years lawfully needed: ${yrsOk ? 'met' : 'not met'}` : 'not required'], ['Good character', a >= 18 ? 'assessed (18 or over)' : 'not assessed'], ['Fee, form 118', money(F.descent)]] };
    },
  }),
  spouseabs: () => ({
    title: 'Would the spouse discretion cover my time away?', cta: 'Every ministerial discretion', ctaPage: 'discretion',
    inputs: [{ id: 'a', label: 'Days away in the 4 years before applying', def: 520, max: 1461, unit: 'days' }, { id: 'as', label: 'Of which overseas as a PR with your citizen partner', def: 300, max: 1461, unit: 'days' }, { id: 'b', label: 'Days away in the last 12 months', def: 120, max: 366, unit: 'days' }, { id: 'bs', label: 'Of which with your citizen partner', def: 60, max: 366, unit: 'days' }],
    run: (v) => {
      const a = clamp(v.a ?? 0, 0, 1461), as = clamp(v.as ?? 0, 0, a), b = clamp(v.b ?? 0, 0, Math.min(366, a)), bs = clamp(v.bs ?? 0, 0, b);
      const okNow = a <= R.maxAbsenceDays && b <= R.maxAbsenceLast12m, okWith = a - as <= R.maxAbsenceDays && b - bs <= R.maxAbsenceLast12m;
      return { head: ['Absence limits', okNow ? 'Met without any discretion' : okWith ? 'Met only if the discretion is applied' : 'Not met even with it'], rows: [['Without the discretion', `${N(a)} of ${R.maxAbsenceDays}, and ${N(b)} of ${R.maxAbsenceLast12m}`], ['If the time with your partner counts as in Australia', `${N(a - as)} of ${R.maxAbsenceDays}, and ${N(b - bs)} of ${R.maxAbsenceLast12m}`], ['Also needed', 'a close and continuing association with Australia']], note: 'The discretion is decided with your application and evidence; it cannot be assessed in advance.' };
    },
  }),
  release: () => ({
    title: 'When does a past prison sentence stop blocking approval?', cta: 'The character requirement', ctaPage: 'character',
    inputs: [{ id: 'm', label: 'Month of release', def: 6, options: monthOpts }, { id: 'y', label: 'Year of release', def: 2025, max: 2040 }, { id: 'rep', label: 'Repeat offender?', def: 0, options: yn }],
    run: (v) => {
      const m = clamp(v.m ?? 1, 1, 12), y = clamp(v.y ?? 2025, 1950, 2040), yrs = v.rep ? M.releaseYearsBlockRepeat : M.releaseYearsBlock;
      return { head: ['Approval barred until about', addMonth(m, y, yrs * 12)], rows: [['Applies to', `a sentence of ${M.sentenceMonths} months or more`], ['Bar after release', `${yrs} years${v.rep ? ' for a repeat offender' : ''}`], ['After that', 'good character still assessed']], note: 'Pending charges, parole, bail or good behaviour conditions also stop approval while they last.' };
    },
  }),
  specialwork: () => ({
    title: 'Travel-heavy work: do I fit the special residence rule?', cta: 'All special residence cases', ctaPage: 'special',
    inputs: [{ id: 'w', label: 'Years in a listed kind of work, in the last 4', def: 3, max: 4, decimals: 1, unit: 'yrs' }, { id: 'pr', label: 'Months as a permanent resident', def: 18, max: 600, unit: 'months' }, { id: 'd', label: 'Days in Australia in the last 4 years', def: 600, max: 1461, unit: 'days' }, { id: 'd12', label: 'Of which in the last 12 months', def: 140, max: 366, unit: 'days' }],
    run: (v) => {
      const S = R.special, ok1 = (v.w ?? 0) >= B.specialTravelWorkYears, ok2 = (v.pr ?? 0) >= S.travelPrYears * 12, ok3 = (v.d ?? 0) >= S.travelDays, ok4 = (v.d12 ?? 0) >= S.travelDaysLast12m;
      const n = [ok1, ok2, ok3, ok4].filter(Boolean).length;
      return { head: ['Conditions met', `${n} of 4`], rows: [[`${B.specialTravelWorkYears} years of listed work in ${B.specialTravelWorkWindowYears}`, ok1 ? 'met' : 'not yet'], [`${S.travelPrYears} year as a permanent resident`, ok2 ? 'met' : 'not yet'], [`${S.travelDays} days in Australia`, ok3 ? 'met' : 'short'], [`${S.travelDaysLast12m} days in the last year`, ok4 ? 'met' : 'short']], note: `You also need ${S.travelYears} years on a visa and the work at the time you apply.` };
    },
  }),
  adffamily: () => ({
    title: 'Does the defence exemption reach my family?', cta: 'The defence exemption in full', ctaPage: 'adf',
    inputs: [{ id: 'visa', label: 'Your visa: AU, BV, EN or RN class granted on or after 1 July 2007?', def: 1, options: yn }, { id: 'same', label: 'Family granted the same visa as members of your family unit?', def: 1, options: yn }, { id: 'svc', label: 'Service condition met (90 days permanent, 90 paid reserve days, or medical discharge)?', def: 1, options: yn }],
    run: (v) => {
      const ok = !!v.visa && !!v.same && !!v.svc;
      return { head: ['Family exemption from the residence rule', ok ? 'Likely' : 'Not on these answers'], rows: [['You', v.svc ? 'exempt from the general residence rule' : `service of ${R.adfDays} days needed`], ['Family members', ok ? 'exempt with you' : 'must meet the general rule'], ['Lodging', 'paper form, with service records']] };
    },
  }),
  exemptfee: () => ({
    title: 'Am I exempt from the citizenship fee?', cta: 'Concession and fee rules', ctaPage: 'concession',
    inputs: [{ id: 'k', label: 'Your situation', def: 0, options: [{ value: '0', label: 'At least 90 days in the permanent forces' }, { value: '1', label: 'British or Maltese former child migrant (1947 to 1967)' }, { value: '2', label: `Applying under the statelessness provision, s${B.statelessSection}` }, { value: '3', label: 'Pensioner Concession Card only' }, { value: '4', label: 'None of these' }] }],
    run: (v) => {
      const k = v.k ?? 0, ex = k <= 2;
      const proof = k === 0 ? 'ADF letter or discharge papers with service dates' : k === 1 ? 'letter from the Child Migrants Trust' : k === 2 ? 'evidence of statelessness' : k === 3 ? 'both sides of the card' : 'none';
      return { head: ['Fee on form 1300t', ex ? 'Nil' : k === 3 ? money(F.generalConcession) : money(F.general)], rows: [['Exemption', ex ? 'yes' : 'no'], ['Proof to send', proof], ['Lodging', ex ? 'paper form only' : 'online or paper']] };
    },
  }),
  refusedwhy: () => ({
    title: 'Refused: what usually comes next', cta: 'Review deadlines', ctaPage: 'refused',
    inputs: [{ id: 'k', label: 'Main reason in the letter', def: 0, options: [{ value: '0', label: 'Residence requirement not met' }, { value: '1', label: 'No pass after three test appointments' }, { value: '2', label: 'Identity not established' }, { value: '3', label: 'Character or a pending charge' }, { value: '4', label: 'Not living in Australia or no close link' }] }],
    run: (v) => {
      const k = v.k ?? 0;
      const next = ['wait until your date, then apply again', 'study, then apply again', 'gather documents covering identity from birth', 'read the letter: some bars end on a set date', 'show where you live and your ties'][k];
      const fix = ['residence calculator date', `a pass: ${T.passPercent}% and all values questions`, `${R.identityDocs} documents with name, photo, signature, address`, 'end of proceedings, parole or the waiting period', 'evidence of home, work, family'][k];
      return { head: ['Usual next step', next], rows: [['What a new application needs', fix], ['Review', 'the letter says if it is open and by when'], ['New fee if you reapply', money(F.general)]] };
    },
  }),
};
