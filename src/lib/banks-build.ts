/** Accès au build à la banque (jamais importé par un composant client). */
import AU from '../data/questions/au.json';
import type { Question } from './engine/exam';
export const BANK: Question[] = AU.questions as Question[];
