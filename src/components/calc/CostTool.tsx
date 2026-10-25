/**
 * Official fees for an Australian citizenship application, line by line, from form 1298i (July 2026):
 * conferral for a household, descent or adoption with siblings, renunciation, resumption and evidence.
 * Costs without an official scale (translations, overseas police certificates) are typed by the
 * visitor, never estimated.
 */
import { useMemo, useState } from 'react';
import NumberField from '../ui/NumberField';
import SelectField from '../ui/SelectField';
import { auCost, siblingsCost, type Cost } from '../../lib/engine/cost';
import { money } from '../../lib/format-l';
import P from '../../data/params-2026.json';

type K = 'conferral' | 'descent' | 'adoption' | 'renunciation' | 'resumption' | 'evidence';
const KINDS: Record<K, string> = { conferral: 'Citizenship by conferral (permanent residents)', descent: 'Citizenship by descent (born overseas)', adoption: 'Citizenship by Hague adoption', renunciation: 'Giving up (renouncing) citizenship', resumption: 'Resuming citizenship', evidence: 'Evidence of citizenship (certificate)' };
const LINE: Record<string, string> = { general: 'Conferral, general eligibility', generalConcession: 'Conferral, Pensioner Concession Card', childOnParentForm: 'Child under 16 on a parent’s form', otherSituations: 'Conferral, other situations', extra: 'Your other costs', descent: 'Descent, first child', descentSibling: 'Descent, each sibling applying at the same time', adoption: 'Adoption, first child', adoptionSibling: 'Adoption, each sibling at the same time', renunciation: 'Renunciation', resumption: 'Resumption', evidence: 'Evidence of citizenship' };
interface Props { kind?: K; idPrefix?: string }
export default function CostTool({ kind: k0 = 'conferral', idPrefix = 'c' }: Props) {
  const [kind, setKind] = useState<K>(k0);
  const [v, setV] = useState({ adults: 2, concession: 0, kids: 1, other: 0, extra: 0, children: 2, people: 1 });
  const set = (k: keyof typeof v) => (x: number) => setV((o) => ({ ...o, [k]: Math.max(0, Math.round(x)) }));
  const F = P.au.fees;
  const cost: Cost = useMemo(() => {
    if (kind === 'conferral') return auCost({ adults: v.adults, concession: v.concession, childrenUnder16: v.kids, other: v.other, extra: v.extra });
    if (kind === 'descent' || kind === 'adoption') return siblingsCost(kind, v.children);
    const each = kind === 'renunciation' ? F.renunciation : kind === 'resumption' ? F.resumption : F.evidence;
    return { currency: 'AUD', lines: v.people ? [{ id: kind, each, count: v.people, amount: each * v.people }] : [], total: each * v.people };
  }, [v, kind]);
  const f = (id: keyof typeof v, label: string, max: number, unit = '') => <NumberField key={id} id={`${idPrefix}-${id}`} label={label} value={v[id]} onChange={set(id)} max={max} unit={unit} tag="en-AU" />;
  const fields = kind === 'conferral' ? [f('adults', 'Applicants aged 18 to 59 (form 1300t)', 10), f('concession', 'Of the 18 to 59s, Pensioner Concession Card holders', 10), f('kids', 'Children under 16 on a parent’s form', 10), f('other', 'Other situations, such as aged 16 or 17 (form 1290)', 10), f('extra', 'Other costs you expect (translations, police certificates)', 100000, '$')]
    : kind === 'descent' || kind === 'adoption' ? [f('children', 'Children applying at the same time', 10)]
    : [f('people', 'Number of applications', 10)];
  return (
    <div className="not-prose grid gap-5 lg:grid-cols-[minmax(0,1fr)_340px]">
      <form className="grid content-start gap-x-4 gap-y-3 sm:grid-cols-2" onSubmit={(e) => e.preventDefault()}>
        <div className="sm:col-span-2"><SelectField id={`${idPrefix}-kind`} label="What you are applying for" value={kind} onChange={(x) => setKind(x as K)} options={(Object.keys(KINDS) as K[]).map((k) => ({ value: k, label: KINDS[k] }))} /></div>
        {fields}
      </form>
      <div data-resultat aria-live="polite" className="h-fit rounded-xl border border-accent-200 bg-accent-50/60 p-4">
        <p className="text-sm font-medium text-navy-700">Fees to pay Home Affairs</p>
        <p className="tabular-nums mt-1 text-4xl font-bold text-navy-900">{money(cost.total)}</p>
        <table className="mt-3 w-full text-sm"><tbody className="divide-y divide-navy-200">
          {cost.lines.map((l) => <tr key={l.id}><td className="py-1.5 pr-2 text-navy-700">{LINE[l.id] ?? l.id}{l.count && l.count > 1 && l.each !== undefined ? ` (${l.count} × ${money(l.each)})` : ''}</td><td className="tabular-nums py-1.5 text-right text-navy-900">{l.amount === 0 ? 'nil' : money(l.amount)}</td></tr>)}
        </tbody></table>
        <p className="mt-2 text-xs text-navy-700">Form {F.form}. Fees are indexed every 1 July; a card payment surcharge may apply. This site takes no fee and sends no application.</p>
      </div>
    </div>
  );
}
