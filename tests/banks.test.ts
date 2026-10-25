import { describe, expect, it } from 'vitest';
import { BANK } from '../src/lib/banks-build';
import { CHAPTERS, TOPICS } from '../src/lib/banks';
import { buildExam, buildPractice, lintBank, seedOf } from '../src/lib/engine/exam';
import P from '../src/data/params-2026.json';

describe('banque australienne', () => {
  it('propre, chaque question dans une partie et un thème connus', () => {
    expect(lintBank(BANK)).toEqual([]);
    for (const q of BANK) { expect(CHAPTERS).toContain(q.chapter); expect(Object.keys(TOPICS)).toContain(q.topic); }
    for (const c of CHAPTERS) expect(BANK.filter((q) => q.chapter === c).length).toBeGreaterThanOrEqual(20);
    for (const t of Object.keys(TOPICS)) expect(BANK.filter((q) => q.topic === t).length).toBeGreaterThanOrEqual(6);
  });
  it('questions de valeurs = partie 4', () => {
    for (const q of BANK) expect(!!q.values).toBe(q.chapter === CHAPTERS[3]);
  });
  it('aucun tiret cadratin, réponses réparties', () => {
    expect(JSON.stringify(BANK).includes('—')).toBe(false);
    const by = [0, 0, 0, 0]; BANK.forEach((q) => by[q.answer]++);
    expect(Math.max(...by) / BANK.length).toBeLessThan(0.4);
  });
  it('5 questions de valeurs dans chaque tirage', () => {
    for (let s = 1; s < 50; s++) {
      const e = buildExam(BANK, 'au', s);
      expect(e.questions).toHaveLength(P.au.test.questions);
      expect(new Set(e.questions.map((q) => q.id)).size).toBe(P.au.test.questions);
      expect(e.questions.filter((q) => q.values)).toHaveLength(P.au.test.valuesQuestions);
    }
  });
  it('série par partie et par thème', () => {
    const p = buildPractice(BANK, { chapter: CHAPTERS[2] }, seedOf('x'), 10);
    expect(p).toHaveLength(10);
    expect(p.every((q) => q.chapter === CHAPTERS[2])).toBe(true);
    expect(buildPractice(BANK, { topic: 'states' }, 3, 5).every((q) => q.topic === 'states')).toBe(true);
  });
});
