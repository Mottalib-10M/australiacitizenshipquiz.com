/**
 * Mini-tools of the pages (RECETTE §9.3): one subject = one calculation, always read from
 * params-2026.json or the site's engines, never a second formula typed in a page.
 */
import type { MiniSpec } from './mini-types';
import P from '../data/params-2026.json';
import { auCost, siblingsCost } from './engine/cost';
import { money, formatNumberL, pct } from './format-l';
import { passNeeded } from './engine/exam';
import { SPECS_A } from './mini-specs-a';
import { SPECS_B } from './mini-specs-b';

const T = P.au.test, R = P.au.residence, F = P.au.fees, PT = P.au.processing;
const yn = [{ value: '0', label: 'No' }, { value: '1', label: 'Yes' }];
const clamp = (x: number, a: number, b: number) => Math.max(a, Math.min(b, Math.round(x)));
const N = (v: number) => formatNumberL(v);
const pl = (n: number, w: string) => `${N(n)} ${w}${n === 1 ? '' : 's'}`;
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const monthOpts = MONTHS.map((m, i) => ({ value: String(i + 1), label: m }));
/** Months written in the official table ("5 months", "42 days") to a number of months. */
const toMonths = (s: string) => (/day/.test(s) ? parseInt(s, 10) / 30.44 : parseInt(s, 10));
const addMonth = (m: number, y: number, k: number) => { const t = y * 12 + (m - 1) + k; return `${MONTHS[t % 12]} ${Math.floor(t / 12)}`; };

const SPECS: Record<string, () => MiniSpec> = {
  aupass: () => ({
    title: 'Did I pass the Australian citizenship test?', cta: 'Take a full 20-question practice test', ctaPage: 'test',
    inputs: [{ id: 'right', label: 'Correct answers in total', def: 16, max: T.questions, unit: `/ ${T.questions}` }, { id: 'vals', label: 'Of which values questions', def: 5, max: T.valuesQuestions, unit: `/ ${T.valuesQuestions}` }],
    run: (v) => {
      const n = T.questions, need = passNeeded(), vq = T.valuesQuestions;
      const vals = clamp(v.vals ?? 0, 0, vq), r = Math.max(vals, clamp(v.right ?? 0, 0, n));
      const ok = r >= need && vals === vq;
      return { head: ['Result', ok ? 'Pass' : 'Fail'], rows: [['Overall', `${r} of ${n} (${pct(r / n)}), ${need} needed`], ['Values questions', `${vals} of ${vq}, all ${vq} needed`], ['Why', ok ? 'Both rules met' : vals < vq ? 'A values question was missed' : `${pl(need - r, 'more correct answer')} needed`]] };
    },
  }),
  margin: () => ({
    title: 'How many questions can I get wrong?', cta: 'Practise the values questions', ctaPage: 'values',
    inputs: [{ id: 'wv', label: 'Wrong answers on values questions', def: 0, max: T.valuesQuestions }, { id: 'wo', label: 'Wrong answers on the other 15', def: 3, max: T.questions - T.valuesQuestions }],
    run: (v) => {
      const wv = clamp(v.wv ?? 0, 0, T.valuesQuestions), wo = clamp(v.wo ?? 0, 0, T.questions - T.valuesQuestions);
      const allowed = T.questions - passNeeded(), left = allowed - wv - wo, ok = wv === 0 && left >= 0;
      return { head: ['Still a pass?', ok ? (left === 0 ? 'Yes, with no margin left' : `Yes, ${pl(left, 'more mistake')} allowed`) : 'No'], rows: [['Mistakes allowed in total', `${allowed}, none on values`], ['Your score', `${T.questions - wv - wo} of ${T.questions}`], ['Rule broken', wv > 0 ? 'values questions' : left < 0 ? '75% overall' : 'none']] };
    },
  }),
  oldnew: () => ({
    title: 'Same answers, old rule and current rule', cta: 'Practise the values questions', ctaPage: 'values',
    inputs: [{ id: 'right', label: 'Correct answers out of 20', def: 17, max: 20 }, { id: 'wv', label: 'Values questions missed', def: 1, max: 5 }],
    run: (v) => {
      const r = clamp(v.right ?? 0, 0, 20), wv = clamp(v.wv ?? 0, 0, Math.min(5, 20 - r));
      const now = r >= passNeeded() && wv === 0;
      return { head: ['Under the current rule', now ? 'Pass' : 'Fail'], rows: [['Score', `${pct(r / 20)} (${passNeeded()} needed)`], ['Values questions', wv ? `${wv} missed: fails since ${MONTHS[10]} 2020` : 'all right'], ['75% alone would give', r >= passNeeded() ? 'a pass' : 'a fail']], note: 'The values questions and the all-five rule apply to tests taken from 15 November 2020.' };
    },
  }),
  whosits: () => ({
    title: 'Do I have to sit the citizenship test?', cta: 'See every exemption', ctaPage: 'exempt',
    inputs: [{ id: 'age', label: 'Age on the day Home Affairs receives your application', def: 34, max: 120, unit: 'yrs' }, { id: 'inc', label: 'A condition that stops you understanding the test?', def: 0, options: yn }],
    run: (v) => {
      const a = clamp(v.age ?? 0, 0, 120), [lo, hi] = T.ages;
      const res = a < lo ? `No test: under ${lo}` : a > hi ? `No test: aged ${hi + 1} or over` : v.inc ? 'Possible exemption, with medical evidence' : 'Yes, you sit the test';
      return { head: ['Citizenship test', res], rows: [['Ages who sit it', `${lo} to ${hi}`], ['Test fee', 'included in the application fee'], ['Interview', a > hi || a < lo ? 'possible, to confirm identity' : 'at the test appointment']] };
    },
  }),
  attempts: () => ({
    title: 'Where a failed attempt leaves me', cta: 'Train on a full mock test', ctaPage: 'mock',
    inputs: [{ id: 'n', label: 'Test appointments attended so far without passing', def: 1, max: 6 }],
    run: (v) => {
      const n = clamp(v.n ?? 0, 0, 6), cap = T.appointmentsBeforeRefusal, left = cap - n;
      return { head: ['Appointments before a possible refusal', left > 0 ? `${left} left` : 'None left'], rows: [['Cost of each new attempt', 'nil, resits are free'], ['Refusal can be considered after', `${cap} appointments without a pass`], ['Effect on your visa', 'none']], note: left > 0 ? 'Use the gap between appointments to work on the part you missed.' : 'Home Affairs may refuse the application; a refusal can be reviewed.' };
    },
  }),
  assisted: () => ({
    title: 'Which version of the test applies to me?', cta: 'See how the test is taken', ctaPage: 'english',
    inputs: [{ id: 'amep', label: 'Adult Migrant English Program hours completed', def: 0, max: 2000, unit: 'hrs' }, { id: 'imp', label: 'An impairment that needs extra time?', def: 0, options: yn }, { id: 'ask', label: 'Asked for help in your application?', def: 1, options: yn }],
    run: (v) => {
      const amep = clamp(v.amep ?? 0, 0, 2000), assisted = !!v.ask && (amep >= T.assistedAmepHours || !!v.imp);
      return { head: ['Likely format', assisted ? 'Assisted test' : 'Standard test'], rows: [['Time allowed', `${assisted ? T.assistedMinutes : T.minutes} minutes`], ['Language', 'English only, with a listen option'], ['Assisted test offered with', `a request for help, plus ${N(T.assistedAmepHours)} AMEP hours or an impairment`]] };
    },
  }),
  studyplan: () => ({
    title: 'How many weeks do I need to prepare?', cta: 'Start with Part 1', ctaPage: 'part1',
    inputs: [{ id: 'm', label: 'Minutes you can study a day', def: 30, max: 300, unit: 'min' }, { id: 'd', label: 'Days a week', def: 5, max: 7 }],
    run: (v) => {
      const m = clamp(v.m ?? 0, 0, 300), d = clamp(v.d ?? 0, 0, 7);
      // Plan: read the ~12,600 words of the testable section twice at 150 words a minute, plus 8 mock tests of 45 minutes and part practice.
      const need = Math.round((12600 * 2) / 150 + 8 * T.minutes + 4 * 30);
      const perWeek = m * d, weeks = perWeek ? Math.ceil(need / perWeek) : 0;
      return { head: ['Time to be ready', perWeek ? pl(weeks, 'week') : 'add some time'], rows: [['Plan in total', `${N(Math.round(need / 60))} hours`], ['Reading the testable section twice', `${N(Math.round((12600 * 2) / 150 / 60))} hours`], ['Mock tests of 45 minutes', '8']], note: 'Based on reading the four parts twice, a set of practice per part and eight full mock tests.' };
    },
  }),
  routes: () => ({
    title: 'Which way to citizenship fits me?', cta: 'Check the residence date', ctaPage: 'residence',
    inputs: [{ id: 'b', label: 'Where were you born?', def: 1, options: [{ value: '0', label: 'In Australia' }, { value: '1', label: 'Outside Australia' }] }, { id: 'p', label: 'A parent was an Australian citizen when you were born?', def: 0, options: yn }, { id: 'pr', label: 'Do you hold a permanent visa?', def: 1, options: yn }],
    run: (v) => {
      const inAu = v.b === 0, par = !!v.p, pr = !!v.pr;
      const route = inAu && par ? 'Citizen by birth, no application' : !inAu && par ? 'Citizenship by descent (form 118)' : pr ? 'Citizenship by conferral' : inAu ? 'Check the 10-year rule for people born in Australia' : 'A permanent visa comes first';
      return { head: ['Most likely route', route], rows: [['Fee', !inAu && par ? money(F.descent) : pr ? `${money(F.general)} (aged 18 to 59)` : 'none yet'], ['Test', pr && !par ? 'yes, aged 18 to 59' : 'no'], ['Ceremony', pr && !par ? 'yes, aged 16 or over' : 'no']] };
    },
  }),
  eligible: () => ({
    title: 'Do I meet the main conditions today?', cta: 'Find my exact date', ctaPage: 'residence',
    inputs: [{ id: 'y', label: 'Years living in Australia on a visa', def: 4, max: 60, decimals: 1, unit: 'yrs' }, { id: 'pr', label: 'Months as a permanent resident', def: 14, max: 720, unit: 'months' }, { id: 'abs', label: 'Days away in the last 4 years', def: 120, max: 1461, unit: 'days' }, { id: 'abs12', label: 'Of which in the last 12 months', def: 30, max: 366, unit: 'days' }],
    run: (v) => {
      const ok1 = (v.y ?? 0) >= R.lawfulYears, ok2 = (v.pr ?? 0) >= R.prMonths, ok3 = (v.abs ?? 0) <= R.maxAbsenceDays, ok4 = (v.abs12 ?? 0) <= R.maxAbsenceLast12m;
      const n = [ok1, ok2, ok3, ok4].filter(Boolean).length;
      return { head: ['Residence conditions met', `${n} of 4`], rows: [[`${R.lawfulYears} years on a visa`, ok1 ? 'met' : 'not yet'], [`${R.prMonths} months as a permanent resident`, ok2 ? 'met' : 'not yet'], [`At most ${R.maxAbsenceDays} days away`, ok3 ? 'met' : 'over'], [`At most ${R.maxAbsenceLast12m} in the last year`, ok4 ? 'met' : 'over']], note: 'Character, the test and a close link with Australia are checked too.' };
    },
  }),
  prwait: () => ({
    title: 'Earliest month after my permanent visa', cta: 'Count my trips day by day', ctaPage: 'residence',
    inputs: [{ id: 'm', label: 'Month your permanent visa started', def: 3, options: monthOpts }, { id: 'y', label: 'Year', def: 2026, max: 2040 }, { id: 'before', label: 'Years on other visas before that', def: 3, max: 30, decimals: 1, unit: 'yrs' }],
    run: (v) => {
      const m = clamp(v.m ?? 1, 1, 12), y = clamp(v.y ?? 2026, 1990, 2040), before = Math.max(0, v.before ?? 0);
      const wait = Math.max(R.prMonths, Math.ceil((R.lawfulYears - before) * 12));
      return { head: ['Not before', addMonth(m, y, wait)], rows: [['Months to wait after the visa', N(wait)], ['Rule that sets the date', wait === R.prMonths ? `${R.prMonths} months as a permanent resident` : `${R.lawfulYears} years on a visa`], ['Travel', 'can push the date back']] };
    },
  }),
  budget: () => ({
    title: 'How many days can I still spend overseas?', cta: 'Test a trip in the full calculator', ctaPage: 'residence',
    inputs: [{ id: 'abs', label: 'Days away in the 4 years before your planned date', def: 200, max: 1461, unit: 'days' }, { id: 'abs12', label: 'Of which in the 12 months before it', def: 40, max: 366, unit: 'days' }],
    run: (v) => {
      const a = clamp(v.abs ?? 0, 0, 1461), b = clamp(v.abs12 ?? 0, 0, Math.min(366, a));
      const left = Math.min(R.maxAbsenceDays - a, R.maxAbsenceLast12m - b);
      return { head: ['Days you can still add', left >= 0 ? N(left) : 'None: over a limit'], rows: [['Four-year limit', `${N(a)} of ${R.maxAbsenceDays} used`], ['Last-12-months limit', `${N(b)} of ${R.maxAbsenceLast12m} used`], ['Departure and arrival days', 'count as days in Australia']] };
    },
  }),
  nzdate: () => ({
    title: 'When a New Zealand citizen counts as a permanent resident', cta: 'Work out my full date', ctaPage: 'residence',
    inputs: [{ id: 'k', label: 'Your visa', def: 0, options: [{ value: '0', label: 'Special category visa (SCV)' }, { value: '1', label: 'Subclass 189 (NZ stream)' }] }, { id: 'y', label: 'Year it was first granted', def: 2015, max: 2040 }],
    run: (v) => {
      const y = clamp(v.y ?? 2015, 1973, 2040);
      if (v.k === 1) return y >= 2023 ? { head: ['Permanent resident from', 'the grant date'], rows: [['12 months as a PR', 'not needed'], ['Still needed', '4 years on a visa, absence limits']] } : { head: ['Permanent resident from', y === 2022 ? '1 January 2022' : 'the grant date'], rows: [['Eligible from', y === 2022 ? 'about 1 January 2023' : 'grant date + 12 months'], ['Still needed', '4 years on a visa, absence limits']] };
      return { head: ['Permanent resident from', y < 2022 || (y === 2022) ? (y < 2022 ? '1 July 2022' : 'the grant date if on or after 1 July 2022') : 'the grant date'], rows: [['SCV granted before 1 July 2022', 'PR from 1 July 2022'], ['Earliest possible application', y < 2022 ? '1 July 2023' : 'grant date + 12 months'], ['Still needed', '4 years in Australia, absence limits']] };
    },
  }),
  child: () => ({
    title: 'How a child becomes a citizen with me', cta: 'Fees for the whole family', ctaPage: 'cost',
    inputs: [{ id: 'age', label: 'Child’s age when you apply', def: 9, max: 17, unit: 'yrs' }],
    run: (v) => {
      const a = clamp(v.age ?? 0, 0, 17), small = a < R.childExemptUnder;
      return { head: ['How the child applies', small ? 'On your form' : 'Own application'], rows: [['Fee', small ? 'nil' : `${money(F.otherSituations)} (form 1290, other situations)`], ['Residence requirement', small ? 'not required' : 'must be met'], ['Test and ceremony', small ? 'no test, ceremony optional' : 'no test, ceremony required']] };
    },
  }),
  born: () => ({
    title: 'Born in Australia: citizen at birth?', cta: 'See how citizenship by birth works', ctaPage: 'born',
    inputs: [{ id: 'p', label: 'A parent was a citizen or permanent resident at your birth?', def: 0, options: yn }, { id: 'y', label: 'Age, if you have lived most of your life in Australia', def: 10, max: 100, unit: 'yrs' }],
    run: (v) => {
      const par = !!v.p, y = clamp(v.y ?? 0, 0, 100);
      return { head: ['Your status', par ? 'Citizen from birth' : y >= 10 ? 'Citizen on your 10th birthday' : 'Not yet a citizen'], rows: [['Rule (born on or after 20 August 1986)', par ? 'a parent was a citizen or permanent resident' : 'citizen on the 10th birthday after living most of that time in Australia'], ['Application needed', par || y >= 10 ? 'no; evidence of citizenship is optional' : 'not yet'], ['Evidence fee', money(F.evidence)]] };
    },
  }),
  descentfee: () => ({
    title: 'Citizenship by descent: fee for my children', cta: 'All citizenship fees', ctaPage: 'cost',
    inputs: [{ id: 'n', label: 'Children applying at the same time', def: 2, max: 10 }],
    run: (v) => {
      const c = siblingsCost('descent', clamp(v.n ?? 1, 0, 10));
      return { head: ['Total fee', money(c.total)], rows: [['First child', money(F.descent)], ['Each sibling at the same time', money(F.descentSibling)], ['90% decided within', PT.table.descentDecision.p90]] };
    },
  }),
  dual: () => ({
    title: 'Did I lose my Australian citizenship?', cta: 'See how to resume citizenship', ctaPage: 'resume',
    inputs: [{ id: 'y', label: 'Year you took another citizenship', def: 1995, max: 2040 }, { id: 'adult', label: 'Were you 18 or over then?', def: 1, options: yn }],
    run: (v) => {
      const y = clamp(v.y ?? 2000, 1949, 2040), lost = y < 2002 && !!v.adult;
      return { head: ['Your Australian citizenship', lost ? 'Probably lost then' : 'Kept'], rows: [['Dual citizenship allowed from', '4 April 2002'], ['If lost before that date', `resumption, ${money(F.resumption)}`], ['Other country’s law', 'check it separately']], note: 'Taking another citizenship as an adult before 4 April 2002 ended Australian citizenship in most cases.' };
    },
  }),
  penal: () => ({
    title: 'Which countries need a police certificate?', cta: 'See the documents list', ctaPage: 'documents',
    inputs: [{ id: 'm', label: 'Total months outside Australia in the last 10 years (since age 18)', def: 14, max: 120, unit: 'months' }, { id: 'd', label: 'Longest stay in one country in that time', def: 120, max: 3650, unit: 'days' }],
    run: (v) => {
      const m = clamp(v.m ?? 0, 0, 120), d = clamp(v.d ?? 0, 0, 3650);
      const need = m >= R.penalClearanceOutsideMonths && d >= R.penalClearanceStayDays;
      return { head: ['Overseas police certificate', need ? 'Likely needed' : 'Not on these figures'], rows: [['Trigger', `${R.penalClearanceOutsideMonths} months or more outside Australia in total`], ['And', `${R.penalClearanceStayDays} days or more in one country`], ['Australian police check', `aged ${R.afpCheckFromAge} or over, requested by Home Affairs`]] };
    },
  }),
  docs: () => ({
    title: 'Do my identity documents cover everything?', cta: 'The full application checklist', ctaPage: 'application',
    inputs: [{ id: 'bd', label: 'A document with birth name, date of birth and sex?', def: 1, options: yn }, { id: 'ph', label: 'A document with a photo?', def: 1, options: yn }, { id: 'sg', label: 'A document with a signature?', def: 1, options: yn }, { id: 'ad', label: 'A document with your current address?', def: 0, options: yn }],
    run: (v) => {
      const miss = [['birth name, birth date and sex', v.bd], ['photo', v.ph], ['signature', v.sg], ['residential address', v.ad]].filter(([, x]) => !x).map(([l]) => l as string);
      return { head: ['Identity documents', miss.length ? `${miss.length} missing` : 'Covered'], rows: [['Documents asked for', `${R.identityDocs}, together covering all four`], ['Missing', miss.length ? miss.join(', ') : 'nothing'], ['Copies', 'online: scans; paper: certified copies']] };
    },
  }),
  online: () => ({
    title: 'Online or on paper?', cta: 'How the application works', ctaPage: 'application',
    inputs: [{ id: 'age', label: 'Your age', def: 35, max: 120, unit: 'yrs' }, { id: 'pp', label: 'Do you have a passport or travel document?', def: 1, options: yn }, { id: 'c', label: 'Asking for a full fee exemption?', def: 0, options: yn }],
    run: (v) => {
      const a = clamp(v.age ?? 0, 0, 120), [lo, hi] = R.onlineAges, paper = a < lo || a > hi || !v.pp || !!v.c;
      return { head: ['How to apply', paper ? 'Paper form' : 'Online in ImmiAccount'], rows: [['Online allowed for', `ages ${lo} to ${hi}`], ['Paper also for', 'fee exemption, no passport, no travel since July 1990, defence or stateless cases'], ['Concession card', 'pages differ: the fee concessions page says online with a scan of both sides']] };
    },
  }),
  concession: () => ({
    title: 'Can I pay the concession fee?', cta: 'All citizenship fees', ctaPage: 'cost',
    inputs: [{ id: 'card', label: 'Card you hold', def: 0, options: [{ value: '0', label: 'Pensioner Concession Card' }, { value: '1', label: 'Health Care Card' }, { value: '2', label: 'Seniors Health Card' }, { value: '3', label: 'Student card' }, { value: '4', label: 'None' }] }, { id: 'main', label: 'Primary cardholder, or a dependant aged 17 or under?', def: 1, options: yn }],
    run: (v) => {
      const ok = v.card === 0 && !!v.main;
      return { head: ['Fee to pay', ok ? money(F.generalConcession) : money(F.general)], rows: [['Concession accepted', ok ? 'yes' : 'no'], ['Only card accepted', 'Pensioner Concession Card'], ['How to apply', ok ? 'online with a scan of both sides of the card (fee concessions page)' : 'online or paper']] };
    },
  }),
  auproc: () => ({
    title: 'Where my application stands against the official times', cta: 'See the full processing table', ctaPage: 'processing',
    inputs: [{ id: 'w', label: 'Weeks since you applied', def: 10, max: 260, unit: 'weeks' }],
    run: (v) => {
      const w = clamp(v.w ?? 0, 0, 260), mo = (w * 7) / 30.44;
      const D = PT.table.decision, band = mo < toMonths(D.p25) ? 'faster than 25% of decisions' : mo < toMonths(D.p50) ? 'between the 25% and 50% marks' : mo < toMonths(D.p75) ? 'between the 50% and 75% marks' : mo < toMonths(D.p90) ? 'between the 75% and 90% marks' : 'past the 90% mark';
      return { head: ['Your wait so far', band], rows: [['Half of decisions within', D.p50], ['90% of decisions within', D.p90], ['Application to ceremony, 90%', PT.table.applicationToCeremony.p90]], note: `Home Affairs table updated ${PT.pageUpdated.split('-').reverse().join('/')}.` };
    },
  }),
  timeline: () => ({
    title: 'When might my ceremony be?', cta: 'Processing times in detail', ctaPage: 'processing',
    inputs: [{ id: 'm', label: 'Month you applied', def: 10, options: monthOpts }, { id: 'y', label: 'Year', def: 2026, max: 2040 }],
    run: (v) => {
      const m = clamp(v.m ?? 1, 1, 12), y = clamp(v.y ?? 2026, 2020, 2040), A = PT.table.applicationToCeremony;
      return { head: ['Half of applicants by', addMonth(m, y, toMonths(A.p50))], rows: [['A quarter by', addMonth(m, y, Math.round(toMonths(A.p25)))], ['Three quarters by', addMonth(m, y, toMonths(A.p75))], ['Nine in ten by', addMonth(m, y, toMonths(A.p90))]], note: 'From the current Home Affairs table; your own wait depends on your file and your council.' };
    },
  }),
  aftertest: () => ({
    title: 'From test day to ceremony', cta: 'What happens at the ceremony', ctaPage: 'ceremony',
    inputs: [{ id: 'm', label: 'Month you passed the test', def: 11, options: monthOpts }, { id: 'y', label: 'Year', def: 2026, max: 2040 }],
    run: (v) => {
      const m = clamp(v.m ?? 1, 1, 12), y = clamp(v.y ?? 2026, 2020, 2040), C = PT.table.approvalToCeremony;
      return { head: ['Ceremony for half of approved applicants by', addMonth(m, y, toMonths(C.p50))], rows: [['Invitation sent about', `${R.invitationWeeksAhead} weeks before`], ['Nine in ten by', addMonth(m, y, toMonths(C.p90))], ['Pledge deadline after approval', `${R.pledgeWithinMonths} months`]], note: 'Counted from approval, which often follows the test closely.' };
    },
  }),
  pledge: () => ({
    title: 'How long do I have to make the pledge?', cta: 'Your ceremony day', ctaPage: 'ceremony',
    inputs: [{ id: 'm', label: 'Month your application was approved', def: 9, options: monthOpts }, { id: 'y', label: 'Year', def: 2026, max: 2040 }],
    run: (v) => {
      const m = clamp(v.m ?? 1, 1, 12), y = clamp(v.y ?? 2026, 2020, 2040);
      return { head: ['Pledge by the end of', addMonth(m, y, R.pledgeWithinMonths)], rows: [['Rule', `within ${R.pledgeWithinMonths} months of approval`], ['If you miss it', 'approval may be cancelled'], ['Typical wait to a ceremony (90%)', PT.table.approvalToCeremony.p90]] };
    },
  }),
  evidence: () => ({
    title: 'Evidence of citizenship: fee and wait', cta: 'All citizenship fees', ctaPage: 'cost',
    inputs: [{ id: 'n', label: 'Certificates to apply for', def: 1, max: 10 }, { id: 'dis', label: 'Lost in a listed natural disaster in the last 18 months?', def: 0, options: yn }],
    run: (v) => {
      const n = clamp(v.n ?? 1, 0, 10), each = v.dis ? 0 : F.evidence;
      return { head: ['Fee', money(each * n)], rows: [['Per application', each ? money(each) : 'nil'], ['90% decided within', PT.table.evidenceDecision.p90], ['Postage in Australia', `about ${PT.postageWeeksInAustralia} more weeks`]] };
    },
  }),
  renounce: () => ({
    title: 'Giving up Australian citizenship: what it takes', cta: 'How to resume later', ctaPage: 'resume',
    inputs: [{ id: 'other', label: 'Do you hold, or will you get, another citizenship?', def: 1, options: yn }],
    run: (v) => ({ head: ['Renunciation', v.other ? 'Can be approved' : 'Refused: you would be stateless'], rows: [['Fee', money(F.renunciation)], ['Form', '128'], ['Living in Australia after', 'an ex-citizen visa is granted']] }),
  }),
  resume: () => ({
    title: 'Can I become an Australian citizen again?', cta: 'Fees in detail', ctaPage: 'cost',
    inputs: [{ id: 'why', label: 'How you lost it', def: 0, options: [{ value: '0', label: 'Took another citizenship as an adult before 4 April 2002' }, { value: '1', label: 'Renounced it to keep or get another citizenship' }, { value: '2', label: 'Renounced it to avoid hardship' }, { value: '3', label: 'Renounced it for another reason' }] }],
    run: (v) => {
      const ok = (v.why ?? 0) <= 2;
      return { head: ['Resumption', ok ? 'Open to you' : 'Not through resumption'], rows: [['Fee', ok ? money(F.resumption) : 'n/a'], ['Form', ok ? '132' : 'conferral as a permanent resident'], ['Ceremony', ok ? 'not required' : 'required']] };
    },
  }),
  special: () => ({
    title: 'Special residence: do my days add up?', cta: 'The general rule, day by day', ctaPage: 'residence',
    inputs: [{ id: 'k', label: 'Your case', def: 1, options: [{ value: '0', label: 'Elite athlete or NV2-cleared specialist' }, { value: '1', label: 'Work that needs regular travel' }] }, { id: 'd', label: 'Days in Australia in the period', def: 500, max: 1461, unit: 'days' }, { id: 'd12', label: 'Of which in the last 12 months', def: 130, max: 366, unit: 'days' }],
    run: (v) => {
      const S = R.special, ath = v.k === 0, need = ath ? S.benefitDays : S.travelDays, need12 = ath ? S.benefitDaysLast12m : S.travelDaysLast12m;
      const ok = (v.d ?? 0) >= need && (v.d12 ?? 0) >= need12;
      return { head: ['Days in Australia', ok ? 'Enough' : 'Short'], rows: [['Needed in the period', `${need} days over ${ath ? `${S.benefitPrYears} years as a PR` : `${S.travelYears} years`}`], ['Needed in the last year', `${need12} days`], ['Permanent residence', ath ? `${S.benefitPrYears} years` : `${S.travelPrYears} year`]] };
    },
  }),
  adf: () => ({
    title: 'Defence service: residence exemption', cta: 'The general residence rule', ctaPage: 'residence',
    inputs: [{ id: 'd', label: 'Days served in the permanent forces', def: 60, max: 10000, unit: 'days' }, { id: 'r', label: 'Paid days in the reserves', def: 0, max: 10000, unit: 'days' }],
    run: (v) => {
      const ok = (v.d ?? 0) >= R.adfDays || (v.r ?? 0) >= R.adfDays;
      return { head: ['Residence exemption', ok ? 'Available' : 'Not yet'], rows: [['Service needed', `${R.adfDays} days permanent, or ${R.adfDays} paid reserve days`], ['Fee with 90 days permanent service', 'nil'], ['How to apply', 'paper form']] };
    },
  }),
  students: () => ({
    title: 'Does my student visa time count?', cta: 'Find my exact date', ctaPage: 'residence',
    inputs: [{ id: 's', label: 'Years in Australia on temporary visas (student, graduate, work)', def: 3, max: 30, decimals: 1, unit: 'yrs' }, { id: 'p', label: 'Months since your permanent visa', def: 6, max: 360, unit: 'months' }],
    run: (v) => {
      const s = Math.max(0, v.s ?? 0), p = clamp(v.p ?? 0, 0, 360), total = s + p / 12;
      const wait = Math.max(0, Math.ceil(Math.max((R.lawfulYears - total) * 12, R.prMonths - p)));
      return { head: ['Months still to wait', wait ? N(wait) : 'None on these figures'], rows: [['Time on a visa counted', `${formatNumberL(Math.min(total, 99), 'en', 1)} years of ${R.lawfulYears}`], ['As a permanent resident', `${N(p)} of ${R.prMonths} months`], ['Gaps with no visa', 'do not count']] };
    },
  }),
  ceremonyday: () => ({
    title: 'Planning the ceremony day', cta: 'The pledge, word for word', ctaPage: 'pledge',
    inputs: [{ id: 'g', label: 'Guests coming with you', def: 2, max: 20 }, { id: 'k', label: 'Children under 16 becoming citizens with you', def: 1, max: 10 }],
    run: (v) => {
      const g = clamp(v.g ?? 0, 0, 20), k = clamp(v.k ?? 0, 0, 10);
      return { head: ['Time to allow', 'about 2 hours'], rows: [['Ceremony itself', 'about 1 hour'], ['People in your group', N(1 + g + k)], ['Children under 16', k ? 'welcome to make the pledge, not required' : 'none']], note: 'Bring the invitation and photo identification; guest places depend on the council.' };
    },
  }),
  citday: () => ({
    title: 'Australian Citizenship Day in a given year', cta: 'Ceremonies and how to be invited', ctaPage: 'ceremony',
    inputs: [{ id: 'y', label: 'Year', def: 2027, max: 2100 }],
    run: (v) => {
      const y = clamp(v.y ?? 2027, 2001, 2100), wd = new Date(Date.UTC(y, 8, 17)).toLocaleDateString('en-AU', { weekday: 'long', timeZone: 'UTC' });
      return { head: ['17 September falls on a', wd], rows: [['Celebrated since', '2001'], ['Anniversary of', 'the 1973 renaming of the Act'], ['Council ceremonies', 'encouraged on or around that day']] };
    },
  }),
  passport: () => ({
    title: 'After the pledge: passport and voting', cta: 'Your citizenship certificate', ctaPage: 'certificate',
    inputs: [{ id: 'age', label: 'Your age', def: 34, max: 120, unit: 'yrs' }],
    run: (v) => {
      const a = clamp(v.age ?? 0, 0, 120);
      return { head: ['Passport application', 'wait at least 10 days'], rows: [['Enrolling to vote', a >= 18 ? 'required now' : 'required from 18'], ['Proof for the passport', 'citizenship certificate'], ['Travel', 'on the Australian passport once issued']] };
    },
  }),
  refused: () => ({
    title: 'Refused: how long to ask for a review?', cta: 'Check the residence rule again', ctaPage: 'residence',
    inputs: [{ id: 'd', label: 'Days since the refusal letter', def: 7, max: 365, unit: 'days' }],
    run: (v) => {
      const d = clamp(v.d ?? 0, 0, 365);
      return { head: ['Review window', 'set out in your decision letter'], rows: [['Days already passed', N(d)], ['Review options', 'listed in the decision letter'], ['Alternative', 'a new application once you qualify']], note: 'The letter states the deadline and whether the decision can be reviewed; act well before it.' };
    },
  }),
  travel: () => ({
    title: 'Travelling while my application is open', cta: 'Processing times', ctaPage: 'processing',
    inputs: [{ id: 'w', label: 'Weeks you plan to be away', def: 3, max: 104, unit: 'weeks' }],
    run: (v) => {
      const w = clamp(v.w ?? 0, 0, 104);
      return { head: ['Effect on approval', w ? 'Cannot be approved while you are away' : 'None'], rows: [['Before leaving', 'valid passport and Resident Return visa'], ['Tell Home Affairs', 'yes, before you go'], ['Days away in this trip', N(Math.max(0, w * 7 - 2))]], note: 'Days of departure and arrival count as days in Australia.' };
    },
  }),
  character: () => ({
    title: 'Character: what Home Affairs looks at', cta: 'The full list of requirements', ctaPage: 'requirements',
    inputs: [{ id: 'age', label: 'Your age', def: 30, max: 120, unit: 'yrs' }, { id: 'y', label: 'Years since release from a prison sentence of 12 months or more (0 if none)', def: 0, max: 60, unit: 'yrs' }],
    run: (v) => {
      const a = clamp(v.age ?? 0, 0, 120), y = clamp(v.y ?? 0, 0, 60);
      return { head: ['Good character test', a >= 18 ? 'Applies to you' : 'Not assessed under 18'], rows: [['Release from a 12-month sentence', y > 0 && y < 2 ? 'less than 2 years ago: cannot approve' : y >= 2 ? `${y} years ago: assessed case by case` : 'none declared'], ['Police checks', `Australia from ${R.afpCheckFromAge}, overseas if required`], ['Pending court case', 'blocks approval']] };
    },
  }),
  discretion: () => ({
    title: 'Is there a discretion for my situation?', cta: 'The general residence rule', ctaPage: 'residence',
    inputs: [{ id: 'k', label: 'Your situation', def: 0, options: [{ value: '0', label: 'Spouse of a citizen, living overseas with them' }, { value: '1', label: 'Government administrative error affected my visa' }, { value: '2', label: 'Significant hardship if I wait' }, { value: '3', label: 'Time in prison or psychiatric confinement' }, { value: '4', label: 'None of these' }] }],
    run: (v) => {
      const k = v.k ?? 0, rows: Array<[string, string]> = [['Spouse or partner abroad', 'close and continuing association with Australia'], ['Administrative error', 'time can be treated as permanent residence'], ['Prison', 'time inside does not count as residence']];
      return { head: ['Ministerial discretion', k === 4 ? 'Not on this list' : k === 3 ? 'Works against you' : 'May apply'], rows, note: 'A discretion is decided case by case with evidence; it is never automatic.' };
    },
  }),
  family: () => ({
    title: 'Conferral fee for my household', cta: 'All fees and other applications', ctaPage: 'cost',
    inputs: [{ id: 'a', label: 'Adults aged 18 to 59', def: 2, max: 10 }, { id: 'k', label: 'Children under 16 on a parent’s form', def: 2, max: 10 }, { id: 't', label: 'Teenagers aged 16 or 17', def: 0, max: 10 }],
    run: (v) => {
      const c = auCost({ adults: clamp(v.a ?? 0, 0, 10), concession: 0, childrenUnder16: clamp(v.k ?? 0, 0, 10), other: clamp(v.t ?? 0, 0, 10), extra: 0 });
      return { head: ['Fees to pay', money(c.total)], rows: [['Each adult', money(F.general)], ['Each 16 or 17 year old', money(F.otherSituations)], ['Children under 16', 'nil on a parent’s form']] };
    },
  }),
  topicmix: () => ({
    title: 'How a test of 20 can split across the four parts', cta: 'Practise one part at a time', ctaPage: 'ocb',
    inputs: [{ id: 'p1', label: 'Questions you expect from Part 1', def: 4, max: 15 }, { id: 'p2', label: 'From Part 2', def: 4, max: 15 }, { id: 'p3', label: 'From Part 3', def: 7, max: 15 }],
    run: (v) => {
      const p1 = clamp(v.p1 ?? 0, 0, 15), p2 = clamp(v.p2 ?? 0, 0, 15 - p1), p3 = clamp(v.p3 ?? 0, 0, 15 - p1 - p2), rest = 15 - p1 - p2 - p3;
      return { head: ['Values questions (Part 4)', `${T.valuesQuestions}, fixed`], rows: [['Other questions', `${p1} + ${p2} + ${p3}${rest ? ` + ${rest} unassigned` : ''} = 15`], ['Allowed mistakes', `${T.questions - passNeeded()}, none on values`], ['Share of the test on values', pct(T.valuesQuestions / T.questions)]], note: 'Home Affairs does not publish how the 15 other questions split between parts; this is your own guess to plan revision.' };
    },
  }),
  testday: () => ({
    title: 'Test day checklist', cta: 'What the interview checks', ctaPage: 'interview',
    inputs: [{ id: 'id', label: 'Original photo ID documents packed', def: 1, max: 6 }, { id: 'kids', label: 'Bringing children along?', def: 0, options: yn }],
    run: (v) => {
      const n = clamp(v.id ?? 0, 0, 6);
      return { head: ['Ready?', n >= 1 && !v.kids ? 'Yes' : 'Not yet'], rows: [['Originals with a photo', n ? 'packed' : 'missing: no copies or phone images'], ['Children in the test room', v.kids ? 'not allowed: arrange care' : 'none'], ['Time in the test', `${T.minutes} minutes for ${T.questions} questions`]] };
    },
  }),
};
const ALL: Record<string, () => MiniSpec> = { ...SPECS, ...SPECS_A, ...SPECS_B };
export function getSpec(kind: string, _lang: 'en' = 'en'): MiniSpec {
  const f = ALL[kind];
  if (!f) throw new Error(`Unknown mini-tool: ${kind}`);
  return f();
}
export const SPEC_KINDS = Object.keys(ALL);
