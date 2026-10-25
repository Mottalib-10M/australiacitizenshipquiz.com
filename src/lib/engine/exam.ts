/**
 * Examens blancs du test de citoyenneté australien : tirage reproductible (graine) et correction avec
 * les deux règles officielles lues dans params-2026.json : 75 % au total et les 5 questions de valeurs
 * toutes justes. Les questions sont adaptées d'Our Common Bond (CC BY 4.0) par Radif Partners.
 */
import P from '../../data/params-2026.json';

export type Country = 'au';
export interface Question {
  id: string;
  country: Country;
  lang: 'en';
  /** partie d'Our Common Bond où se trouve le fait */
  chapter: string;
  /** thème fin (states, symbols, parliament…) pour les pages thématiques */
  topic?: string;
  /** question sur les valeurs australiennes (5 par examen, toutes à réussir) */
  values?: boolean;
  q: string;
  options: string[];
  answer: number;
  explain: string;
  ref: { doc: string; section: string; url: string };
}
export interface Exam { country: Country; seed: number; questions: Question[] }
export interface Score {
  correct: number; total: number; valuesCorrect: number; valuesTotal: number;
  pass: boolean; reason: 'ok' | 'score' | 'values'; needed: number;
}

/** mulberry32 : même graine, même examen (lien partageable, hydratation). */
export function rng(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
function pick<T>(xs: T[], n: number, r: () => number): T[] {
  const a = [...xs];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(r() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a.slice(0, n);
}

export const examSize = (_c: Country = 'au'): number => P.au.test.questions;
export const passNeeded = (_c: Country = 'au'): number => Math.ceil((P.au.test.passPercent / 100) * P.au.test.questions);

export function buildExam(bank: Question[], _country: Country, seed: number): Exam {
  const r = rng(seed);
  const n = examSize(), v = P.au.test.valuesQuestions;
  const vals = bank.filter((q) => q.values), rest = bank.filter((q) => !q.values);
  if (vals.length < v || rest.length < n - v) throw new Error('banque trop petite');
  return { country: 'au', seed, questions: pick([...pick(vals, v, r), ...pick(rest, n - v, r)], n, r) };
}

/** answers[i] = index choisi pour la question i, ou null (compte comme faux). */
export function score(exam: Exam, answers: (number | null)[]): Score {
  const qs = exam.questions;
  const correct = qs.reduce((s, q, i) => s + (answers[i] === q.answer ? 1 : 0), 0);
  const needed = passNeeded();
  const vi = qs.map((q, i) => (q.values ? i : -1)).filter((i) => i >= 0);
  const valuesCorrect = vi.filter((i) => answers[i] === qs[i].answer).length;
  const valuesOk = valuesCorrect === vi.length, scoreOk = correct >= needed;
  return { correct, total: qs.length, valuesCorrect, valuesTotal: vi.length, needed, pass: valuesOk && scoreOk, reason: !valuesOk ? 'values' : scoreOk ? 'ok' : 'score' };
}

/** Contrôle d'une banque : identifiants uniques, réponse dans les options, source renseignée. */
export function lintBank(bank: Question[]): string[] {
  const errs: string[] = [];
  const seen = new Set<string>(), seenQ = new Set<string>();
  for (const q of bank) {
    if (seen.has(q.id)) errs.push(`${q.id} : identifiant en double`);
    if (seenQ.has(q.q)) errs.push(`${q.id} : question en double`);
    seen.add(q.id); seenQ.add(q.q);
    if (q.options.length < 2 || q.answer < 0 || q.answer >= q.options.length) errs.push(`${q.id} : réponse hors des options`);
    if (new Set(q.options).size !== q.options.length) errs.push(`${q.id} : options en double`);
    if (!q.ref?.doc || !q.ref?.section || !q.ref?.url) errs.push(`${q.id} : source manquante`);
    if (!q.explain || q.explain.length < 20) errs.push(`${q.id} : explication trop courte`);
  }
  return errs;
}

export interface Filter { chapter?: string | null; topic?: string | null; values?: boolean }
export const applyFilter = (bank: Question[], f: Filter = {}) =>
  bank.filter((q) => (!f.chapter || q.chapter === f.chapter) && (!f.topic || q.topic === f.topic) && (!f.values || q.values));

/** Série d'entraînement : `n` questions du filtre (toute la banque sans filtre), même graine → même série. */
export function buildPractice(bank: Question[], f: Filter | string | null, seed: number, n = 10): Question[] {
  const own = applyFilter(bank, typeof f === 'string' ? { chapter: f } : f ?? {});
  return pick(own, Math.min(n, own.length), rng(seed));
}
/** Graine stable tirée d'un texte (id de page) : le build et le navigateur tirent le même premier test. */
export function seedOf(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619) >>> 0;
  return h;
}
