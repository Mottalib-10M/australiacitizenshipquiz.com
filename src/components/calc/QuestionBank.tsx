/**
 * Question list: one part of Our Common Bond (or one topic) at a time, every question with its answer
 * and explanation in the HTML (native <details>, readable without JavaScript). First render = the part
 * or topic chosen for the page at build time; another one is loaded only when the visitor picks it.
 */
import { useState } from 'react';
import SelectField from '../ui/SelectField';
import { loadBank, CHAPTERS, TOPICS } from '../../lib/banks';
import type { Question } from '../../lib/engine/exam';

interface Props { scope: string; initial: Question[]; total: number; idPrefix?: string }
const labelOf = (k: string) => (k.startsWith('t:') ? TOPICS[k.slice(2)] : k === 'v' ? 'Australian values questions' : CHAPTERS[Number(k.slice(2))]);
export default function QuestionBank({ scope: s0, initial, total, idPrefix = 'b' }: Props) {
  const [scope, setScope] = useState(s0);
  const [qs, setQs] = useState<Question[]>(initial);
  const [loading, setLoading] = useState(false);
  const pick = async (k: string) => {
    setScope(k); setLoading(true);
    const all = await loadBank();
    setQs(all.filter((q) => (k === 'v' ? q.values : k.startsWith('t:') ? q.topic === k.slice(2) : q.chapter === CHAPTERS[Number(k.slice(2))]))); setLoading(false);
  };
  const options = [...CHAPTERS.map((c, i) => ({ value: `c:${i}`, label: c })), { value: 'v', label: 'Australian values questions' }, ...Object.entries(TOPICS).filter(([k]) => k !== 'values').map(([k, v]) => ({ value: `t:${k}`, label: v }))];
  return (
    <div className="not-prose grid gap-5 lg:grid-cols-[minmax(0,1fr)_300px]">
      <div>
        <form className="grid gap-3 sm:grid-cols-2" onSubmit={(e) => e.preventDefault()}>
          <SelectField id={`${idPrefix}-scope`} label="Part or topic" value={scope} onChange={pick} options={options} />
        </form>
        {loading ? <p className="mt-4 text-navy-700">Loading…</p> : (
          <ol className="mt-4 space-y-2">
            {qs.map((q, i) => (
              <li key={q.id}>
                <details className="group rounded-lg border border-navy-200 bg-white">
                  <summary className="cursor-pointer px-4 py-3 font-medium text-navy-900"><span className="tabular-nums mr-2 text-navy-600">{i + 1}.</span>{q.q}</summary>
                  <div className="px-4 pb-4 text-sm text-navy-800">
                    <ul className="mb-2 space-y-1">{q.options.map((o, j) => <li key={j} className={j === q.answer ? 'font-semibold text-green-800' : 'text-navy-700'}>{j === q.answer ? '✓ ' : '· '}{o}</li>)}</ul>
                    <p>{q.explain}</p>
                    <p className="mt-1 text-xs text-navy-600">Where to check: {q.ref.section}</p>
                  </div>
                </details>
              </li>
            ))}
          </ol>
        )}
      </div>
      <div data-resultat className="h-fit rounded-xl border border-accent-200 bg-accent-50/60 p-4 lg:sticky lg:top-20">
        <p className="text-sm font-medium text-navy-700">{labelOf(scope)}</p>
        <p className="tabular-nums mt-1 text-4xl font-bold text-navy-900">{qs.length}</p>
        <p className="text-sm text-navy-700">questions here, {total} in the whole bank. Open one to see the answer and where to check it in Our Common Bond.</p>
      </div>
    </div>
  );
}
