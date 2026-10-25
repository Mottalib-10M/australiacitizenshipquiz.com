/** Mise en forme en anglais d'Australie (RECETTE §4 : une locale par langue). */
export type L = 'en';
export type Cur = 'AUD';
export const langTag = (_lang: L = 'en') => 'en-AU';
const cache = new Map<string, Intl.NumberFormat>();
function nf(o: Intl.NumberFormatOptions) {
  const k = JSON.stringify(o);
  if (!cache.has(k)) cache.set(k, new Intl.NumberFormat('en-AU', o));
  return cache.get(k)!;
}
export const formatNumberL = (v: number, _lang: L = 'en', d = 0) => nf({ minimumFractionDigits: d, maximumFractionDigits: d }).format(v);
/** $595 : un seul pays, une seule monnaie, le dollar australien s'écrit comme sur le formulaire 1298i. */
export const money = (v: number, _cur: Cur = 'AUD', lang: L = 'en') => {
  const cents = Math.round(v * 100) % 100 !== 0;
  return `$${formatNumberL(v, lang, cents ? 2 : 0)}`;
};
export const pct = (v: number, lang: L = 'en', d = 0) => `${formatNumberL(v * 100, lang, d)}%`;
/** "2026-10-25" → "25 October 2026" (UTC, jamais décalé d'un jour). */
export const dateL = (iso: string, _lang: L = 'en') => new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
