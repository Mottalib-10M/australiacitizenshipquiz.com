/**
 * "When can I apply?": the earliest date to apply for Australian citizenship by conferral under the
 * general residence requirement, counting every past and planned trip day by day with the Home Affairs
 * rule (departure and arrival days count as days in Australia). First render = build day and example
 * dates (RECETTE §17.5); today and a shared link are read after mount only.
 */
import { useEffect, useMemo, useState } from 'react';
import SelectField from '../ui/SelectField';
import { auEarliest, effectivePr, absenceBudget, type Earliest, type PrKind } from '../../lib/engine/eligibility';
import { dayNum, type Trip } from '../../lib/engine/dates';
import { dateL, formatNumberL } from '../../lib/format-l';
import { readParams, updateURL } from '../../lib/url-state';
import P from '../../data/params-2026.json';

declare const __BUILD_DAY__: string;
const iso = (s: string | null) => !!s && /^\d{4}-\d{2}-\d{2}$/.test(s);
const L = {
  kind: 'Your permanent visa', kinds: { pr: 'Permanent visa (most people)', scv: 'NZ citizen on a special category visa (SCV)', nz189: 'NZ citizen on a subclass 189 (NZ stream) visa' } as Record<PrKind, string>,
  lawful: 'First day you lived in Australia on any visa', pr: { pr: 'Date your permanent visa started', scv: 'Date your SCV was first granted', nz189: 'Date your 189 visa was granted' } as Record<PrKind, string>,
  trips: 'Trips outside Australia (past and planned)', left: 'Left on', back: 'Back on', add: 'Add a trip', remove: 'Remove trip',
  head: 'Earliest date you can apply', none: 'Not within 20 years with these trips', now: 'You can apply today', inDays: (d: number) => `in ${formatNumberL(d)} days`,
  checks: 'On that date', today: 'If you applied today',
  k: { lawful4y: 'Four years living in Australia on a visa', pr12m: 'Permanent resident for the last 12 months', absences: 'Days away in the four years', absences12m: 'Days away in the last 12 months', age: 'Aged 18 or over' } as Record<string, string>,
  ok: 'met', ko: 'not met', limit: 'limit', near: 'Within 5 days of a limit: check every date against your passport or your official movement records before you apply.',
  err: { order: 'A trip comes back before it leaves.', overlap: 'Two trips overlap.' },
  rule: 'Counting rule used by Home Affairs: the day you fly out and the day you land count as days in Australia; only the whole days in between are absences.',
  budget: (a: number, b: number) => `Still allowed today: ${formatNumberL(Math.max(0, a))} days away over four years and ${formatNumberL(Math.max(0, b))} in the last 12 months.`,
  deemed: (d: string) => `Home Affairs treats you as a permanent resident from ${d}.`,
  nowait: 'A 189 visa granted on or after 1 January 2023 needs no 12 months as a permanent resident.',
};
const DEF = { a: '2021-11-08', b: '2025-04-14', trips: [{ out: '2023-06-20', back: '2023-07-18' }, { out: '2026-12-19', back: '2027-01-09' }] as Trip[] };
interface Props { idPrefix?: string }

export default function ResidenceDate({ idPrefix = 'd' }: Props) {
  const [today, setToday] = useState(__BUILD_DAY__);
  const [kind, setKind] = useState<PrKind>('pr');
  const [a, setA] = useState(DEF.a);
  const [b, setB] = useState(DEF.b);
  const [trips, setTrips] = useState<Trip[]>(DEF.trips);
  const [touched, setTouched] = useState(false);
  useEffect(() => {
    setToday(new Date().toISOString().slice(0, 10));
    const u = readParams(window.location.search);
    const ua = u.get('a'), ub = u.get('b'), uk = u.get('k'), ut = u.get('t');
    if (iso(ua)) setA(ua!); if (iso(ub)) setB(ub!); if (uk === 'scv' || uk === 'nz189' || uk === 'pr') setKind(uk);
    if (ut) { const tt = ut.split(',').map((x) => x.split('_')).filter(([o, k]) => iso(o) && iso(k)).map(([o, k]) => ({ out: o, back: k })); if (tt.length) setTrips(tt); }
  }, []);
  useEffect(() => { if (touched) updateURL({ a, b, k: kind, t: trips.filter((t) => iso(t.out) && iso(t.back)).map((t) => `${t.out}_${t.back}`).join(',') }); }, [a, b, kind, trips, touched]);
  const touch = <T,>(f: (v: T) => void) => (v: T) => { setTouched(true); f(v); };
  const valid = trips.filter((t) => iso(t.out) && iso(t.back));
  const err = (() => {
    const s = [...valid].sort((x, y) => (x.out < y.out ? -1 : 1));
    for (let i = 0; i < s.length; i++) { if (s[i].back! < s[i].out) return L.err.order; if (i && s[i - 1].back! > s[i].out) return L.err.overlap; }
    return null;
  })();
  const eff = iso(b) ? effectivePr(kind, b) : null;
  const res: Earliest | null = useMemo(() => {
    if (err || !iso(a) || !eff) return null;
    return auEarliest({ lawfulStart: a, pr: eff.pr, nz189: eff.nz189, trips: valid }, today);
  }, [a, b, kind, trips, today, err]);
  const fmt = (v: unknown) => (typeof v === 'number' ? formatNumberL(v) : typeof v === 'string' && iso(v) ? dateL(v) : '');
  const inputCls = 'h-12 w-full rounded-lg border border-navy-300 bg-white px-3 text-navy-900 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20';
  const field = (id: string, label: string, val: string, set: (v: string) => void) => (
    <div className="grid min-w-0 grid-rows-subgrid row-span-3 content-start gap-y-0"><label htmlFor={`${idPrefix}-${id}`} className="mb-1 block text-sm font-medium text-navy-700">{label}</label><input id={`${idPrefix}-${id}`} type="date" value={val} onChange={(e) => set(e.target.value)} className={`${inputCls} min-w-0`} /><span /></div>
  );
  const date = res?.date ?? null;
  const days = date ? dayNum(date) - dayNum(today) : null;
  const v = res?.verdictAtDate ?? res?.verdictToday ?? null;
  const bud = !err ? absenceBudget(valid, today) : null;
  return (
    <div className="not-prose grid gap-5 lg:grid-cols-[minmax(0,1fr)_340px]">
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div className="grid gap-x-4 gap-y-3 sm:grid-cols-2">
          <div className="sm:col-span-2"><SelectField id={`${idPrefix}-kind`} label={L.kind} value={kind} onChange={touch((x: string) => setKind(x as PrKind))} options={(['pr', 'scv', 'nz189'] as PrKind[]).map((k) => ({ value: k, label: L.kinds[k] }))} /></div>
          {field('a', L.lawful, a, touch(setA))}
          {field('b', L.pr[kind], b, touch(setB))}
        </div>
        <fieldset className="rounded-xl border border-navy-200 bg-white p-4">
          <legend className="px-1 text-sm font-semibold text-navy-900">{L.trips}</legend>
          <div className="space-y-3">
            {trips.map((t, i) => (
              <div key={i} className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] items-end gap-3 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto]">
                {field(`o${i}`, L.left, t.out, touch((x: string) => setTrips((o) => o.map((y, j) => (j === i ? { ...y, out: x } : y)))))}
                {field(`r${i}`, L.back, t.back ?? '', touch((x: string) => setTrips((o) => o.map((y, j) => (j === i ? { ...y, back: x } : y)))))}
                <button type="button" onClick={() => { setTouched(true); setTrips((o) => o.filter((_, j) => j !== i)); }} className="col-span-2 mb-0 h-12 rounded-lg border border-navy-300 px-3 text-sm text-navy-800 hover:bg-navy-50 sm:col-span-1" aria-label={`${L.remove} ${i + 1}`}>×</button>
              </div>
            ))}
          </div>
          <button type="button" onClick={() => { setTouched(true); setTrips((o) => [...o, { out: today, back: today }]); }} className="mt-3 h-12 rounded-lg border border-navy-300 px-4 text-sm font-medium text-navy-800 hover:bg-navy-50">+ {L.add}</button>
          {err && <p role="status" className="mt-2 text-sm font-medium text-red-700">{err}</p>}
          <p className="mt-2 text-xs text-navy-700">{L.rule}</p>
        </fieldset>
      </form>
      <div data-resultat aria-live="polite" className="h-fit rounded-xl border border-accent-200 bg-accent-50/60 p-4 lg:sticky lg:top-20">
        <p className="text-sm font-medium text-navy-700">{L.head}</p>
        <p className="mt-1 text-3xl font-bold text-navy-900">{res ? (date ? (days !== null && days <= 0 ? L.now : dateL(date)) : L.none) : '…'}</p>
        {date && days !== null && days > 0 && <p className="text-sm text-navy-700">{L.inDays(days)}</p>}
        {v && (
          <>
            <p className="mt-3 text-sm font-semibold text-navy-900">{res?.verdictAtDate ? L.checks : L.today}</p>
            <table className="mt-1 w-full text-sm"><tbody className="divide-y divide-navy-200">
              {v.checks.map((c) => (
                <tr key={c.id}><td className="py-1.5 pr-2 text-navy-700">{L.k[c.id] ?? c.id}{typeof c.value === 'number' && typeof c.limit === 'number' ? ` (${fmt(c.value)} / ${L.limit} ${fmt(c.limit)})` : ''}</td><td className={`py-1.5 text-right font-medium ${c.ok ? 'text-green-800' : 'text-red-700'}`}>{c.ok ? L.ok : L.ko}</td></tr>
              ))}
            </tbody></table>
            {v.checks.some((c) => c.near) && <p className="mt-2 text-xs text-amber-800">{L.near}</p>}
          </>
        )}
        {bud && <p className="mt-2 text-xs text-navy-700">{L.budget(bud.left4y, bud.left12m)}</p>}
        {eff && kind !== 'pr' && (eff.nz189 ? <p className="mt-2 text-xs text-navy-700">{L.nowait}</p> : eff.pr !== b ? <p className="mt-2 text-xs text-navy-700">{L.deemed(dateL(eff.pr))}</p> : null)}
        <p className="mt-2 text-xs text-navy-700">Limits: {P.au.residence.lawfulYears} years, {P.au.residence.prMonths} months as a permanent resident, {P.au.residence.maxAbsenceDays} days away, {P.au.residence.maxAbsenceLast12m} in the last year.</p>
      </div>
    </div>
  );
}
