import { describe, expect, it } from 'vitest';
import { absentDaysIn, addYears, checkTrips } from '../src/lib/engine/dates';
import { auEarliest, auVerdict, effectivePr, absenceBudget } from '../src/lib/engine/eligibility';
import { buildExam, lintBank, passNeeded, score, type Question } from '../src/lib/engine/exam';
import { auCost, siblingsCost } from '../src/lib/engine/cost';
import AU from '../src/data/questions/au.json';

describe('comptage des absences (jours entiers seulement, FOI fa-250801434)', () => {
  it('parti le 22, revenu le 23 → aucune absence', () => {
    expect(absentDaysIn({ out: '2025-09-22', back: '2025-09-23' }, '2020-01-01', '2030-01-01')).toBe(0);
  });
  it('lundi → vendredi : mardi, mercredi, jeudi', () => {
    expect(absentDaysIn({ out: '2026-10-05', back: '2026-10-09' }, '2020-01-01', '2030-01-01')).toBe(3);
  });
  it('coupe le voyage aux bornes de la fenêtre', () => {
    expect(absentDaysIn({ out: '2026-01-01', back: '2026-01-31' }, '2026-01-10', '2026-01-19')).toBe(10);
  });
  it('29 février → 28 février', () => {
    expect(addYears('2024-02-29', 1)).toBe('2025-02-28');
  });
  it('refuse les voyages qui se chevauchent', () => {
    expect(checkTrips([{ out: '2026-01-01', back: '2026-01-10' }, { out: '2026-01-05', back: '2026-01-07' }])).toMatch(/chevauchent/);
    expect(checkTrips([{ out: '2026-01-01', back: '2026-01-10' }, { out: '2026-01-10', back: '2026-01-12' }])).toBeNull();
  });
});

describe('general residence requirement', () => {
  it('exemple du document FOI (Mr Barnaby) : admissible le 1/1/2020', () => {
    const x = { lawfulStart: '2016-01-01', pr: '2019-01-01', trips: [{ out: '2017-09-07', back: '2018-06-30' }, { out: '2019-03-23', back: '2019-05-29' }] };
    const v = auVerdict(x, '2020-01-01');
    expect(v.ok).toBe(true);
    expect(v.checks.find((c) => c.id === 'absences')!.value).toBe(361);
  });
  it('4 ans de séjour régulier et 12 mois de RP', () => {
    expect(auEarliest({ lawfulStart: '2023-03-15', pr: '2026-08-01', trips: [] }, '2026-10-24').date).toBe('2027-08-01');
    expect(auEarliest({ lawfulStart: '2023-03-15', pr: '2025-01-01', trips: [] }, '2026-10-24').date).toBe('2027-03-15');
  });
  it('Néo-Zélandais : 189 après le 1/1/2023 sans 12 mois, SCV ancien réputé RP au 1/7/2022', () => {
    expect(auEarliest({ lawfulStart: '2020-01-01', pr: '2026-09-01', nz189: true, trips: [] }, '2026-10-24').date).toBe('2026-10-24');
    expect(effectivePr('scv', '2010-05-01')).toEqual({ pr: '2022-07-01', nz189: false });
    expect(effectivePr('scv', '2024-05-01')).toEqual({ pr: '2024-05-01', nz189: false });
    expect(effectivePr('nz189', '2022-06-01')).toEqual({ pr: '2022-06-01', nz189: false });
    expect(effectivePr('nz189', '2023-02-01')).toEqual({ pr: '2023-02-01', nz189: true });
    const x = effectivePr('scv', '2010-05-01');
    expect(auEarliest({ lawfulStart: '2010-05-01', pr: x.pr, trips: [] }, '2023-01-01').date).toBe('2023-07-01');
  });
  it('plus de 90 jours dehors l’année précédente repousse la date', () => {
    const x = { lawfulStart: '2018-01-01', pr: '2020-01-01', trips: [{ out: '2026-05-01', back: '2026-08-31' }] };
    const r = auEarliest(x, '2026-10-24');
    expect(r.verdictToday.ok).toBe(false);
    expect(auVerdict(x, r.date!).ok).toBe(true);
  });
  it('budget d’absences restant', () => {
    const b = absenceBudget([{ out: '2026-01-01', back: '2026-01-12' }], '2026-10-25');
    expect(b).toMatchObject({ abs: 10, l12: 10, left4y: 355, left12m: 80 });
  });
});

describe('examens blancs', () => {
  const synth = (n: number, values = 0): Question[] =>
    Array.from({ length: n }, (_, i) => ({
      id: `au-${i}`, country: 'au', lang: 'en', chapter: 'x', values: i < values,
      q: `q${i}`, options: ['a', 'b', 'c', 'd'], answer: i % 4, explain: 'explication suffisamment longue',
      ref: { doc: 'd', section: 's', url: 'https://example.org' },
    }));
  it('20 questions, 15 pour réussir', () => {
    expect(buildExam(synth(60, 15), 'au', 1).questions).toHaveLength(20);
    expect(passNeeded()).toBe(15);
  });
  it('même graine, même examen', () => {
    const b = synth(80, 20);
    expect(buildExam(b, 'au', 42).questions.map((q) => q.id)).toEqual(buildExam(b, 'au', 42).questions.map((q) => q.id));
    expect(buildExam(b, 'au', 42).questions.map((q) => q.id)).not.toEqual(buildExam(b, 'au', 43).questions.map((q) => q.id));
  });
  it('5 questions de valeurs, toutes à réussir', () => {
    const e = buildExam(synth(60, 15), 'au', 7);
    expect(e.questions.filter((q) => q.values)).toHaveLength(5);
    expect(score(e, e.questions.map((q) => q.answer)).pass).toBe(true);
    const first = e.questions.findIndex((q) => q.values);
    const ans = e.questions.map((q, i) => (i === first ? (q.answer + 1) % 4 : q.answer));
    expect(score(e, ans)).toMatchObject({ correct: 19, pass: false, reason: 'values' });
    const six = e.questions.map((q, i) => (!q.values && i < 30 ? null : q.answer));
    const nulls = six.filter((x) => x === null).length;
    expect(score(e, six).pass).toBe(20 - nulls >= 15);
  });
  it('la banque est propre', () => {
    expect(lintBank(AU.questions as Question[])).toEqual([]);
  });
});

describe('frais officiels (formulaire 1298i, juillet 2026)', () => {
  it('595 $, 85 $ avec la Pensioner Concession Card, enfants de moins de 16 ans gratuits', () => {
    expect(auCost({ adults: 2, concession: 1, childrenUnder16: 2, extra: 0 }).total).toBe(595 + 85);
    expect(auCost({ adults: 1, concession: 0, childrenUnder16: 0, other: 1, extra: 0 }).total).toBe(595 + 365);
  });
  it('filiation : 380 $ puis 160 $ par frère ou sœur', () => {
    expect(siblingsCost('descent', 3).total).toBe(380 + 2 * 160);
    expect(siblingsCost('adoption', 1).total).toBe(380);
  });
});
