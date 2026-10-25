/** Writing helpers handed to every page: links, figures read from params-2026.json, tables, bank counts. */
import { route, ROUTES, type Locale } from '../i18n/routes';
import { formatNumberL, money, pct, dateL } from './format-l';
import { BANK } from './banks-build';
import { CHAPTERS, TOPICS } from './banks';
import { passNeeded } from './engine/exam';
import P from '../data/params-2026.json';
import PA from '../data/params-a.json';
import PB from '../data/params-b.json';

export type SourceKey = keyof typeof P.sources;
const esc = (s: string | number) => String(s).replace(/&(?!(?:[a-z]+|#\d+);)/g, '&amp;').replace(/</g, '&lt;');
export function table(headers: string[], rows: Array<Array<string | number>>, caption: string | undefined, align: Array<'l' | 'r'>) {
  const al = (i: number) => (align[i] === 'r' ? 'text-right' : 'text-left');
  return `<div class="not-prose my-6 overflow-x-auto"><table class="journal w-full text-sm">${caption ? `<caption class="mb-2 text-left text-sm text-navy-600">${caption}</caption>` : ''}<thead><tr>${headers.map((h, i) => `<th scope="col" class="px-3 py-2 text-xs font-semibold uppercase tracking-wide text-navy-700 ${al(i)}">${h}</th>`).join('')}</tr></thead><tbody>${rows.map((r) => `<tr>${r.map((c, i) => `<td class="tabular-nums border-b border-navy-100 px-3 py-2 text-navy-800 ${al(i)}">${typeof c === 'number' ? esc(formatNumberL(c)) : c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
}

export function helpers(lang: Locale = 'en', strict = false) {
  const a = (id: string, text: string) => {
    if (!ROUTES.some((r) => r.id === id)) { if (strict) throw new Error(`Unknown page id in a link: ${id}`); return text; }
    return `<a href="${route(id, lang)}">${text}</a>`;
  };
  const ext = (url: string, text: string) => `<a href="${url}" target="_blank" rel="nofollow noopener noreferrer">${text}</a>`;
  const src = (k: SourceKey, text: string) => ext(P.sources[k].url, text);
  const aud = (n: number) => money(n);
  const num = (n: number, d = 0) => formatNumberL(n, 'en', d);
  const pc = (x: number, d = 0) => pct(x, 'en', d);
  const inTopic = (t: string) => BANK.filter((q) => q.topic === t).length;
  return {
    lang, a, ext, src, aud, num, pc, P,
    F: P.au.fees, T: P.au.test, R: P.au.residence, PT: P.au.processing, M: P.au.misc, H: P.au.history,
    /** Extra figures read on official pages, one file per writer (params-a.json, params-b.json). */
    A: PA as Record<string, any>, B: PB as Record<string, any>,
    date: (iso: string) => dateL(iso),
    table: (h: string[], r: Array<Array<string | number>>, c?: string, al: Array<'l' | 'r'> = []) => table(h, r, c, al),
    /** Size of the bank, of each part and of each topic, read from the JSON (never typed in a page). */
    count: { all: BANK.length, values: BANK.filter((q) => q.values).length },
    chapters: CHAPTERS,
    topics: TOPICS,
    inChapter: (i: number) => BANK.filter((q) => q.chapter === CHAPTERS[i]).length,
    inTopic,
    /** A question of the bank (by id), for a worked example in the text. */
    q: (id: string) => BANK.find((x) => x.id === id),
    need: passNeeded(),
  };
}
export type Helpers = ReturnType<typeof helpers>;
