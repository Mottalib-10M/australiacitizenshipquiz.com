/** Étapes des frises (RECETTE §17.6) : chaque durée vient du tableau officiel des délais de Home Affairs
 *  ou de la règle de résidence, lus dans params-2026.json ; rien n'est tapé ici. */
import P from '../data/params-2026.json';
import type { FriseLabels, FriseStep } from '../components/ui/Frise';

const PT = P.au.processing, R = P.au.residence, M = P.au.misc;
/** « 36 days », « 5 months » → jours. */
export const toDays = (s: string) => (/day/.test(s) ? parseInt(s, 10) : /week/.test(s) ? parseInt(s, 10) * 7 : Math.round(parseInt(s, 10) * 30.44));
const D = PT.table.decision, C = PT.table.approvalToCeremony;
const upd = PT.pageUpdated.split('-').reverse().join('/');
const times = { label: `Home Affairs processing times, updated ${upd}`, href: P.sources.au_processing.url };
const cer = { label: 'Home Affairs: citizenship ceremonies', href: P.sources.au_ceremony.url };
const res = { label: 'Home Affairs: residence requirement', href: P.sources.au_pr.url };

const decision: FriseStep = { id: 'decision', title: 'Test, interview and decision', detail: `From lodging to a decision: a quarter of applications within ${D.p25}, nine in ten within ${D.p90}. The test appointment falls inside this stage.`, minDays: toDays(D.p25), maxDays: toDays(D.p90), source: times };
const wait: FriseStep = { id: 'wait', title: 'Wait for a ceremony', detail: `From approval to ceremony: a quarter within ${C.p25}, nine in ten within ${C.p90}. Your council sends the invitation about ${R.invitationWeeksAhead} weeks ahead.`, minDays: toDays(C.p25), maxDays: toDays(C.p90), source: times };
const pledge: FriseStep = { id: 'pledge', title: 'Ceremony and pledge', detail: `You become a citizen when you make the pledge, which must happen within ${R.pledgeWithinMonths} months of approval.`, minDays: 0, maxDays: 0, source: cer };

export const FRISES: Record<string, { steps: FriseStep[]; start: string; help: string; caption: string; defaultStart: string }> = {
  processing: {
    steps: [{ id: 'lodge', title: 'Application lodged', detail: 'The clock starts on the day you lodge, online or on paper.', minDays: 0, maxDays: 0 }, decision, wait, pledge],
    start: 'Date you lodged your application', help: 'Change it to your own date: every step moves with it.',
    caption: `Each bar is a stage of a conferral application, as long as the official times: the shortest quarter to nine in ten applications, in the Home Affairs table updated ${upd}. A guide from past applications, not a promise.`,
    defaultStart: PT.onHandDate,
  },
  ceremony: {
    steps: [{ id: 'approved', title: 'Application approved', detail: 'Home Affairs tells you by letter or in ImmiAccount; you are not a citizen yet.', minDays: 0, maxDays: 0 }, wait, pledge, { id: 'passport', title: 'Apply for a passport', detail: `Home Affairs advises waiting at least ${M.passportWaitDays} days after the ceremony so that your details reach the system.`, minDays: M.passportWaitDays, maxDays: M.passportWaitDays, source: cer }],
    start: 'Date your application was approved', help: 'Your approval letter or ImmiAccount shows it.',
    caption: `From approval to the pledge and the first passport application. The wait for a ceremony uses the Home Affairs table updated ${upd}; councils differ, and some are faster or slower.`,
    defaultStart: PT.onHandDate,
  },
  steps: {
    steps: [
      { id: 'pr', title: 'Permanent visa granted', detail: 'The day you become a permanent resident.', minDays: 0, maxDays: 0 },
      { id: 'residence', title: 'Meet the residence requirement', detail: `At least ${R.prMonths} months as a permanent resident, within ${R.lawfulYears} years of lawful residence: ${R.prMonths} months if you already had ${R.lawfulYears - 1} years on other visas, ${R.lawfulYears} years if you arrived as a permanent resident. Absences can add time.`, minDays: R.prMonths * 30.44 | 0, maxDays: R.lawfulYears * 365 + 1, source: res },
      { id: 'lodge', title: 'Lodge the application', detail: 'Online in ImmiAccount for most applicants, with the fee and identity documents.', minDays: 0, maxDays: 0 },
      decision, wait, pledge,
    ],
    start: 'Date your permanent visa was granted', help: 'Your visa grant letter shows it.',
    caption: `The whole road from permanent residence to citizenship. The first bar is the residence requirement; the next ones use the Home Affairs processing table updated ${upd}. Trips abroad and a slow file make it longer.`,
    defaultStart: '2025-07-01',
  },
};
export const FRISE_LABELS = (caption: string, start: string, help: string): FriseLabels => ({
  start, startHelp: help, end: 'Estimated end', between: 'between', and: 'and', today: 'Today', done: 'Done', current: 'In progress', upcoming: 'Coming up',
  day: 'day', days: 'days', week: 'week', weeks: 'weeks', month: 'month', months: 'months', milestone: 'milestone', caption,
});
