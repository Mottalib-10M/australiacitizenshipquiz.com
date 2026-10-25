/**
 * Banque de questions. `BANK` (import statique, banks-build.ts) sert au build seulement ; dans le
 * navigateur, `loadBank` charge la banque à la demande (un chunk), après une interaction.
 */
import type { Question } from './engine/exam';
export async function loadBank(): Promise<Question[]> {
  const m = await import('../data/questions/au.json');
  return (m.default as { questions: Question[] }).questions;
}
/** Les quatre parties de la section évaluée d'Our Common Bond, dans l'ordre du livret. */
export const CHAPTERS: string[] = ['Part 1: Australia and its people', 'Part 2: Democratic beliefs, rights and liberties', 'Part 3: Government and the law in Australia', 'Part 4: Australian values'];
/** Thèmes fins (champ `topic` des questions) et leur libellé. */
export const TOPICS: Record<string, string> = {
  first: 'Aboriginal and Torres Strait Islander peoples',
  history: 'Early history and Federation',
  states: 'States, territories and capitals',
  symbols: 'National symbols',
  days: 'National days and celebrations',
  people: 'People, land and identity',
  democracy: 'Parliamentary democracy and the rule of law',
  rights: 'Rights and liberties',
  responsibilities: 'Responsibilities and privileges of citizenship',
  constitution: 'The Constitution and referendums',
  levels: 'Three levels of government',
  parliament: 'Parliament, elections and voting',
  executive: 'The King, Governor-General and Prime Minister',
  courts: 'Courts, laws and police',
  values: 'Australian values',
};
