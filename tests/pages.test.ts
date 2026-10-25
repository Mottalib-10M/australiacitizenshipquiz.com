/**
 * Contrôle rapide des pages de contenu, sans build (RECETTE §7, §11, §21) : longueurs du titre et de la
 * description, bloc citable, FAQ, corps, liens internes valides, aucun tiret cadratin ni mot interdit.
 * `npm run check` refait ces contrôles sur le HTML compilé ; ce test sert à écrire une page vite et juste.
 */
import { describe, expect, it } from 'vitest';
import { PAGES } from '../src/lib/guides';
import { helpers } from '../src/lib/helpers';
import { SPEC_KINDS } from '../src/lib/mini-specs';
import { PLAN } from './plan';

const base = helpers('en', false);
const linked: string[] = [];
const h = { ...base, a: (id: string, text: string) => { linked.push(id); return base.a(id, text); } };
const KNOWN = new Set([...PLAN.map((x) => x.id), 'home', 'method', 'about', 'widget', 'contact', 'editorial', 'privacy', 'terms', 'cookies']);
const words = (s: string) => s.replace(/<!--.*?-->/g, ' ').replace(/<[^>]+>/g, ' ').replace(/&[a-z]+;/g, ' ').split(/\s+/).filter(Boolean).length;
const FORBIDDEN = /google|first result|premier résultat|chatgpt|reddit|wikipedia|\bapp store\b|udemy|citizenshiptest\.com|australiancitizenshiptest|migration agent we recommend/i;
const allFaqs = new Map<string, string>();

describe('pages de contenu', () => {
  it('ids et slugs uniques', () => {
    expect(new Set(PAGES.map((p) => p.en.slug)).size).toBe(PAGES.length);
  });
  for (const p of PAGES) {
    it(p.id, () => {
      const e = p.en;
      const title = e.title, desc = e.description;
      expect(title.length, `title ${title.length}: ${title}`).toBeGreaterThanOrEqual(50);
      expect(title.length, `title ${title.length}: ${title}`).toBeLessThanOrEqual(60);
      expect(desc.length, `description ${desc.length}`).toBeGreaterThanOrEqual(150);
      expect(desc.length, `description ${desc.length}`).toBeLessThanOrEqual(160);
      expect(/^(how|what|when|why|which|australia\b|calculator|about|faq)/i.test(title), 'title start').toBe(false);
      linked.length = 0;
      const resume = e.resume(h as any), faqs = e.faqs(h as any), body = e.body(h as any);
      for (const id of linked) expect(KNOWN.has(id), `h.a link to unknown id ${id}`).toBe(true);
      const plan = PLAN.find((x) => x.id === p.id);
      expect(plan, 'page in tests/plan.ts').toBeTruthy();
      expect(e.slug).toBe(plan!.slug);
      expect(p.group).toBe(plan!.group);
      expect(words(resume), 'resume words').toBeGreaterThanOrEqual(130);
      expect(faqs.length, 'faq count').toBeGreaterThanOrEqual(3);
      expect(faqs.length, 'faq count').toBeLessThanOrEqual(5);
      for (const f of faqs) {
        const w = words(f.a);
        expect(w, `faq answer words (${f.q})`).toBeGreaterThanOrEqual(40);
        expect(w, `faq answer words (${f.q})`).toBeLessThanOrEqual(90);
        expect(allFaqs.has(f.q), `faq question repeated on ${allFaqs.get(f.q)}: ${f.q}`).toBe(false);
        allFaqs.set(f.q, p.id);
      }
      expect(words(body), 'body words').toBeGreaterThanOrEqual(450);
      expect(/<h1/i.test(body)).toBe(false);
      const all = [title, desc, e.h1, e.intro, e.card, e.nav, resume, body, ...faqs.flatMap((f) => [f.q, f.a])].join(' ');
      expect(all.includes('—'), 'em dash').toBe(false);
      expect(all.includes('undefined') || all.includes('NaN') || all.includes('[object'), 'template leak').toBe(false);
      expect(FORBIDDEN.test(all), `forbidden word: ${all.match(FORBIDDEN)?.[0]}`).toBe(false);
      for (const m of body.matchAll(/<!--tool:mini:([a-z0-9]+)/g)) expect(SPEC_KINDS, 'mini spec').toContain(m[1]);
      for (const t of [p.tool, p.mini]) if (t?.kind.startsWith('mini:')) expect(SPEC_KINDS).toContain(t.kind.slice(5));
      expect(p.tool, 'main tool').toBeTruthy();
      for (const r of p.related) expect(KNOWN.has(r), `related ${r}`).toBe(true);
      for (const s of p.sources) expect(Object.keys(h.P.sources), `source ${s}`).toContain(s);
    });
  }
});
