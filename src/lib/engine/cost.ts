/**
 * Frais officiels d'une demande de citoyenneté australienne, poste par poste, lus dans params-2026.json
 * (formulaire 1298i de Home Affairs, design date 07/26). Ce qui n'a pas de barème officiel (traductions,
 * photos, certificats de police étrangers) est saisi par l'utilisateur, jamais estimé ici.
 */
import P from '../../data/params-2026.json';

export interface Line { id: string; amount: number; each?: number; count?: number }
export interface Cost { currency: 'AUD'; lines: Line[]; total: number }
const sum = (lines: Line[]) => lines.reduce((s, l) => s + l.amount, 0);
const line = (id: string, each: number, count: number): Line => ({ id, each, count, amount: each * count });

export interface AuCostInput {
  /** adultes (16 ans et plus) qui demandent par conferral, cas général (formulaire 1300t) */
  adults: number;
  /** dont titulaires d'une Pensioner Concession Card (seule carte acceptée pour le tarif réduit) */
  concession: number;
  /** enfants de moins de 16 ans sur le formulaire d'un parent : gratuit */
  childrenUnder16: number;
  /** demandes « other situations » (formulaire 1290), plein tarif */
  other?: number;
  /** frais saisis par l'utilisateur (traductions, certificats de police étrangers…) */
  extra: number;
}
export function auCost(x: AuCostInput): Cost {
  const F = P.au.fees;
  const conc = Math.min(x.concession, x.adults);
  const lines: Line[] = [];
  if (x.adults - conc > 0) lines.push(line('general', F.general, x.adults - conc));
  if (conc > 0) lines.push(line('generalConcession', F.generalConcession, conc));
  if (x.childrenUnder16 > 0) lines.push(line('childOnParentForm', F.childOnParentForm, x.childrenUnder16));
  if (x.other && x.other > 0) lines.push(line('otherSituations', F.otherSituations, x.other));
  if (x.extra > 0) lines.push({ id: 'extra', amount: x.extra });
  return { currency: 'AUD', lines, total: sum(lines) };
}

/** Citoyenneté par filiation (formulaire 118) ou adoption (1272) : premier enfant plein tarif, frères et sœurs déposés ensemble au tarif réduit. */
export function siblingsCost(kind: 'descent' | 'adoption', children: number): Cost {
  const F = P.au.fees;
  const first = kind === 'descent' ? F.descent : F.adoption, next = kind === 'descent' ? F.descentSibling : F.adoptionSibling;
  const lines: Line[] = [];
  if (children > 0) lines.push(line(kind, first, 1));
  if (children > 1) lines.push(line(`${kind}Sibling`, next, children - 1));
  return { currency: 'AUD', lines, total: sum(lines) };
}
