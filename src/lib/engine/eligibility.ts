/**
 * Date à partir de laquelle on peut demander la citoyenneté australienne par conferral (general
 * residence requirement, s. 22 de l'Australian Citizenship Act 2007) : 4 ans de résidence régulière,
 * 12 mois de résidence permanente, au plus 365 jours d'absence sur 4 ans dont 90 sur les 12 derniers mois.
 *
 * Moteur pur : toutes les limites viennent de params-2026.json (P), « aujourd'hui » est un argument.
 * Ne juge que la condition de séjour (et l'âge) : caractère, test et lien avec l'Australie sont rappelés
 * comme conditions à remplir, jamais tranchés ici.
 */
import P from '../../data/params-2026.json';
import { type Iso, type Trip, addDays, addMonths, addYears, dayNum, maxIso, totalAbsent } from './dates';

export interface Check {
  id: string;
  ok: boolean;
  /** valeur constatée (jours, date…) et limite de la règle, pour l'affichage */
  value?: number | Iso | null;
  limit?: number | Iso;
  /** à moins de `near` jours de la limite : le résultat dépend du relevé exact des dates */
  near?: boolean;
}
export interface Verdict {
  /** date de demande examinée */
  on: Iso;
  ok: boolean;
  checks: Check[];
}
export interface Earliest {
  /** première date de dépôt possible à partir de `today` (null si aucune dans l'horizon) */
  date: Iso | null;
  verdictToday: Verdict;
  verdictAtDate: Verdict | null;
}

const NEAR = 5; // jours : marge sous laquelle on conseille de vérifier les tampons et relevés officiels
const HORIZON_DAYS = 365 * 20;

function search(today: Iso, start: Iso, test: (on: Iso) => Verdict): Earliest {
  const verdictToday = test(today);
  let d = maxIso(today, start);
  const stop = dayNum(today) + HORIZON_DAYS;
  while (dayNum(d) <= stop) {
    const v = test(d);
    if (v.ok) return { date: d, verdictToday, verdictAtDate: v };
    d = addDays(d, 1);
  }
  return { date: null, verdictToday, verdictAtDate: null };
}

/* ------------------------------------------------------------------ Australie */
export interface AuInput {
  /** début de la résidence régulière (premier séjour sur un visa valide) */
  lawfulStart: Iso;
  /** début de la résidence permanente (date de délivrance du visa permanent sur place, ou première entrée avec lui) */
  pr: Iso;
  /** Néo-Zélandais titulaire d'un visa 189 (NZ stream) délivré le 1/1/2023 ou après : pas de 12 mois de RP exigés */
  nz189?: boolean;
  birth?: Iso | null;
  trips: Trip[];
}
export function auVerdict(x: AuInput, on: Iso): Verdict {
  const R = P.au.residence;
  const from4 = addYears(on, -R.lawfulYears), to = addDays(on, -1);
  const abs = totalAbsent(x.trips, from4, to);
  const l12 = totalAbsent(x.trips, addMonths(on, -12), to);
  const prLimit = x.nz189 ? on : addMonths(on, -R.prMonths);
  const checks: Check[] = [
    // La période de 4 ans peut commencer à l'étranger si la personne était déjà venue avant (FOI fa-250801434).
    { id: 'lawful4y', ok: x.lawfulStart <= from4, value: x.lawfulStart, limit: from4 },
    { id: 'pr12m', ok: x.pr <= prLimit, value: x.pr, limit: prLimit },
    { id: 'absences', ok: abs <= R.maxAbsenceDays, value: abs, limit: R.maxAbsenceDays, near: Math.abs(R.maxAbsenceDays - abs) <= NEAR },
    { id: 'absences12m', ok: l12 <= R.maxAbsenceLast12m, value: l12, limit: R.maxAbsenceLast12m, near: Math.abs(R.maxAbsenceLast12m - l12) <= NEAR },
  ];
  if (x.birth) checks.push({ id: 'age', ok: addYears(x.birth, 18) <= on, value: x.birth, limit: addYears(on, -18) });
  return { on, ok: checks.every((c) => c.ok), checks };
}
export function auEarliest(x: AuInput, today: Iso): Earliest {
  const R = P.au.residence;
  const starts = [addYears(x.lawfulStart, R.lawfulYears), x.nz189 ? x.pr : addMonths(x.pr, R.prMonths)];
  if (x.birth) starts.push(addYears(x.birth, 18));
  return search(today, maxIso(...starts), (on) => auVerdict(x, on));
}

/** Type de visa permanent : cas général, Néo-Zélandais avec SCV (special category visa) ou visa 189 (NZ stream). */
export type PrKind = 'pr' | 'scv' | 'nz189';
/**
 * Date de début de la résidence permanente retenue par Home Affairs et dispense des 12 mois :
 * SCV délivré avant le 1/7/2022 → RP réputée au 1/7/2022 ; 189 NZ délivré en 2022 → RP réputée au
 * 1/1/2022 ; 189 NZ délivré le 1/1/2023 ou après → pas de 12 mois de RP exigés.
 */
export function effectivePr(kind: PrKind, grant: Iso): { pr: Iso; nz189: boolean } {
  const R = P.au.residence;
  if (kind === 'scv') return { pr: maxIso(grant, R.scvDeemedFrom), nz189: false };
  if (kind === 'nz189') return grant >= R.nz189NoWaitFrom ? { pr: grant, nz189: true } : { pr: maxIso(grant, R.nz189DeemedFrom), nz189: false };
  return { pr: grant, nz189: false };
}
/** Jours d'absence encore permis à une date donnée (sur 4 ans et sur 12 mois). */
export function absenceBudget(trips: Trip[], on: Iso) {
  const R = P.au.residence;
  const to = addDays(on, -1);
  const abs = totalAbsent(trips, addYears(on, -R.lawfulYears), to);
  const l12 = totalAbsent(trips, addMonths(on, -12), to);
  return { abs, l12, left4y: R.maxAbsenceDays - abs, left12m: R.maxAbsenceLast12m - l12 };
}
