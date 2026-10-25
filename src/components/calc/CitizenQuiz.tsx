/**
 * Mock test and practice sets (main tool). First render = the questions drawn at build time for this
 * page (RECETTE §17.5); a new draw, another part or a shared link only change things after mount.
 * The score panel applies both official rules from params-2026.json: 75 % overall and all five
 * values questions right. Nothing leaves the browser.
 */
import { useEffect, useRef, useState } from 'react';
import SelectField from '../ui/SelectField';
import { buildExam, buildPractice, passNeeded, type Filter, type Question } from '../../lib/engine/exam';
import { loadBank, CHAPTERS, TOPICS } from '../../lib/banks';
import { readParams, updateURL } from '../../lib/url-state';
import P from '../../data/params-2026.json';

const L = {
  scope: 'Questions from', all: 'Whole booklet (mixed)', valuesOnly: 'Australian values only', q: (i: number, n: number) => `Question ${i} of ${n}`,
  next: 'Next', prev: 'Previous', finish: 'See my result', again: 'New set of questions', loading: 'Loading the questions…',
  right: 'Correct.', wrong: 'Not quite.', answer: 'Right answer:', score: 'Your score', answered: 'answered',
  feedback: 'Answers', asYouGo: 'As I go', atEnd: 'At the end', hidden: 'Answer saved. You see the marking at the end, as in the real test.',
  pass: (need: number, n: number) => `Pass mark: ${need} of ${n} (75%)`, practice: (n: number) => `Practice set of ${n} questions, target 75%`,
  values: (r: number, n: number) => `Values questions: ${r} of ${n} (all ${n} needed)`,
  status: { start: 'Pick an answer to start', on: 'On track to pass', risk: 'One more mistake fails it', pass: 'Passed', fail: 'Below the pass mark', values: 'Failed on a values question' },
  canMiss: (k: number) => (k <= 0 ? 'No more mistakes allowed' : `You can still miss ${k}`),
  byChapter: 'Result by part of Our Common Bond', review: 'Questions you missed', none: 'No mistakes.', timeLeft: 'Time left', timeUp: 'Time is up: the test is marked as it stands.',
  note: 'Practice questions adapted by Radif Partners from Our Common Bond. Not the official test questions.',
};
const short = (c: string) => c.replace(/^Part (\d): .*/, 'Part $1');

interface Props {
  mode?: 'exam' | 'practice'; filter?: Filter; timed?: boolean; n?: number; scopeSelect?: boolean;
  initial: Question[]; seed: number; idPrefix?: string;
}
const scopeKey = (f: Filter) => (f.values ? 'v' : f.topic ? `t:${f.topic}` : f.chapter ? `c:${CHAPTERS.indexOf(f.chapter)}` : '');
const scopeOf = (k: string): Filter => (k === 'v' ? { values: true } : k.startsWith('t:') ? { topic: k.slice(2) } : k.startsWith('c:') ? { chapter: CHAPTERS[Number(k.slice(2))] } : {});

export default function CitizenQuiz({ mode = 'exam', filter: f0 = {}, timed = false, n: size = 10, scopeSelect = mode === 'practice', initial, seed: s0, idPrefix = 'q' }: Props) {
  const [scope, setScope] = useState(scopeKey(f0));
  const [qs, setQs] = useState<Question[]>(initial);
  const [answers, setAnswers] = useState<Array<number | null>>(() => initial.map(() => null));
  const [cur, setCur] = useState(0);
  const [instant, setInstant] = useState(mode === 'practice');
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [left, setLeft] = useState<number | null>(null);
  const started = useRef<number | null>(null);
  const seedRef = useRef(s0);

  const draw = async (k: string, seed: number) => {
    setLoading(true);
    const bank = await loadBank();
    const next = mode === 'practice' ? buildPractice(bank, scopeOf(k), seed, size) : buildExam(bank, 'au', seed).questions;
    seedRef.current = seed;
    setQs(next); setAnswers(next.map(() => null)); setCur(0); setDone(false); setLoading(false); started.current = null; setLeft(null);
  };
  useEffect(() => { // shared link (?seed=…): applied after the first render only
    const s = Number(readParams(window.location.search).get('seed'));
    if (s && s !== s0) draw(scope, s);
  }, []);
  useEffect(() => { // timer of the mock test: starts on the first answer
    if (!timed || done) return;
    const id = window.setInterval(() => {
      if (started.current == null) return;
      const rem = P.au.test.minutes * 60 - Math.floor((Date.now() - started.current) / 1000);
      setLeft(Math.max(0, rem)); if (rem <= 0) setDone(true);
    }, 1000);
    return () => window.clearInterval(id);
  }, [timed, done]);

  const n = qs.length;
  const isExam = mode === 'exam';
  const need = isExam ? passNeeded() : Math.ceil(n * 0.75);
  const answeredN = answers.filter((a) => a !== null).length;
  const right = qs.reduce((s, q, i) => s + (answers[i] === q.answer ? 1 : 0), 0);
  const wrongN = answeredN - right;
  const vIdx = isExam ? qs.map((q, i) => (q.values ? i : -1)).filter((i) => i >= 0) : [];
  const vRight = vIdx.filter((i) => answers[i] === qs[i].answer).length;
  const vWrong = vIdx.filter((i) => answers[i] !== null && answers[i] !== qs[i].answer).length;
  const canMiss = n - need - wrongN;
  const showAll = instant || done;
  const status: keyof typeof L.status = !answeredN ? 'start'
    : (showAll && vWrong > 0) ? 'values'
    : (done || answeredN === n) ? (right >= need && vWrong === 0 ? 'pass' : 'fail')
    : !showAll ? 'start' : canMiss < 0 ? 'fail' : canMiss === 0 ? 'risk' : 'on';
  const q = qs[cur];
  const a = answers[cur];
  const choose = (i: number) => {
    if (done || (showAll && a !== null)) return;
    if (started.current == null) started.current = Date.now();
    setAnswers((o) => o.map((x, j) => (j === cur ? i : x)));
  };
  const newTest = () => { const s = Math.floor(Math.random() * 2 ** 31); updateURL({ seed: s }); draw(scope, s); };
  const byChapter = CHAPTERS.map((name) => {
    const idx = qs.map((x, i) => (x.chapter === name ? i : -1)).filter((i) => i >= 0);
    return { name, n: idx.length, r: idx.filter((i) => answers[i] === qs[i].answer).length };
  }).filter((x) => x.n);
  const mm = left == null ? P.au.test.minutes * 60 : left;
  const clock = `${Math.floor(mm / 60)}:${String(mm % 60).padStart(2, '0')}`;
  const good = status === 'pass' || status === 'on';
  const tone = status === 'start' ? 'text-navy-700' : good ? 'text-green-800' : 'text-red-700';
  const scopes = [{ value: '', label: L.all }, ...CHAPTERS.map((c, i) => ({ value: `c:${i}`, label: c })), { value: 'v', label: L.valuesOnly }, ...Object.entries(TOPICS).filter(([k]) => k !== 'values').map(([k, v]) => ({ value: `t:${k}`, label: v }))];

  return (
    <div className="not-prose grid gap-5 lg:grid-cols-[minmax(0,1fr)_300px]">
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        {scopeSelect && (
          <div className="grid gap-3 sm:grid-cols-2">
            <SelectField id={`${idPrefix}-scope`} label={L.scope} value={scope} onChange={(v) => { setScope(v); draw(v, seedRef.current); }} options={scopes} />
          </div>
        )}
        <div className="rounded-xl border border-navy-200 bg-white p-4 sm:p-5">
          <div className="flex flex-wrap items-center justify-between gap-2 text-sm text-navy-700">
            <span>{L.q(cur + 1, n)}</span>
            {isExam && (
              <span className="inline-grid grid-flow-col auto-cols-fr overflow-hidden rounded-lg border border-navy-300 text-xs" role="group" aria-label={L.feedback}>
                <button type="button" aria-pressed={instant} onClick={() => setInstant(true)} className={`h-full px-2.5 py-1.5 ${instant ? 'bg-accent-700 text-white' : 'bg-white text-navy-800'}`}>{L.asYouGo}</button>
                <button type="button" aria-pressed={!instant} onClick={() => setInstant(false)} className={`h-full px-2.5 py-1.5 ${!instant ? 'bg-accent-700 text-white' : 'bg-white text-navy-800'}`}>{L.atEnd}</button>
              </span>
            )}
          </div>
          {loading && <p className="mt-3 text-navy-700">{L.loading}</p>}
          {q && !loading && (
            <fieldset className="mt-3">
              <legend className="text-lg font-semibold leading-snug text-navy-900">{q.q}</legend>
              <div className="mt-4 grid gap-2">
                {q.options.map((o, i) => {
                  const picked = a === i, isRight = i === q.answer, shown = showAll && a !== null;
                  const cls = !shown ? (picked ? 'border-accent-700 bg-accent-50 text-navy-900' : 'border-navy-300 bg-white hover:border-accent-500 hover:bg-accent-50') : isRight ? 'border-green-700 bg-green-50 text-green-900' : picked ? 'border-red-700 bg-red-50 text-red-900' : 'border-navy-200 bg-white text-navy-600';
                  return <button key={i} type="button" onClick={() => choose(i)} aria-pressed={picked} className={`min-h-12 rounded-lg border px-4 py-2.5 text-left text-base ${cls}`}>{o}</button>;
                })}
              </div>
              {a !== null && (
                <div className="mt-4 border-l-4 border-accent-700 bg-accent-50 px-4 py-3 text-sm text-navy-800" aria-live="polite">
                  {showAll ? <p><strong>{a === q.answer ? L.right : L.wrong}</strong>{a !== q.answer && <> {L.answer} {q.options[q.answer]}.</>} {q.explain}</p> : <p>{L.hidden}</p>}
                </div>
              )}
              <div className="mt-4 flex flex-wrap gap-3">
                {cur > 0 && <button type="button" onClick={() => setCur(cur - 1)} className="h-12 rounded-lg border border-navy-300 px-5 font-medium text-navy-800 hover:bg-navy-50">{L.prev}</button>}
                {cur < n - 1 && <button type="button" onClick={() => setCur(cur + 1)} className="h-12 rounded-lg bg-accent-700 px-5 font-semibold text-white hover:bg-accent-800">{L.next}</button>}
                {!done && answeredN > 0 && (cur === n - 1 || answeredN === n) && <button type="button" onClick={() => setDone(true)} className="h-12 rounded-lg bg-accent-700 px-5 font-semibold text-white hover:bg-accent-800">{L.finish}</button>}
                <button type="button" onClick={newTest} className="h-12 rounded-lg border border-navy-300 px-5 font-medium text-navy-800 hover:bg-navy-50">{L.again}</button>
              </div>
            </fieldset>
          )}
        </div>
        {done && (
          <div className="rounded-xl border border-navy-200 bg-white p-4 text-sm">
            {left === 0 && <p className="mb-2 font-medium text-red-700">{L.timeUp}</p>}
            <p className="font-semibold text-navy-900">{L.review}</p>
            {qs.every((x, i) => answers[i] === x.answer) ? <p className="mt-2 text-navy-700">{L.none}</p> : (
              <ol className="mt-2 list-decimal space-y-2 pl-5 text-navy-800">{qs.map((x, i) => (answers[i] !== x.answer ? <li key={x.id}><span className="font-medium">{x.q}</span> {L.answer} {x.options[x.answer]}. <span className="text-navy-700">{x.explain}</span></li> : null))}</ol>
            )}
          </div>
        )}
      </form>
      <div data-resultat aria-live="polite" className="h-fit rounded-xl border border-accent-200 bg-accent-50/60 p-4 lg:sticky lg:top-20">
        <p className="text-sm font-medium text-navy-700">{L.score}</p>
        <p className="tabular-nums mt-1 text-4xl font-bold text-navy-900">{showAll ? right : answeredN}<span className="text-xl font-semibold text-navy-700"> / {showAll ? answeredN : n}</span></p>
        <p className="text-sm text-navy-700">{answeredN} / {n} {L.answered}</p>
        <div className="mt-3 h-2 w-full overflow-hidden rounded bg-navy-200" aria-hidden="true"><div className="h-2 bg-accent-700" style={{ width: `${(answeredN / Math.max(1, n)) * 100}%` }} /></div>
        <p className={`mt-3 text-base font-semibold ${tone}`}>{L.status[status]}</p>
        <table className="mt-2 w-full text-sm"><tbody className="divide-y divide-navy-200">
          <tr><td className="py-1.5 text-navy-700">{isExam ? L.pass(need, n) : L.practice(n)}</td></tr>
          {showAll && <tr><td className="py-1.5 text-navy-700">{L.canMiss(canMiss)}</td></tr>}
          {vIdx.length > 0 && showAll && <tr><td className="py-1.5 text-navy-700">{L.values(vRight, vIdx.length)}</td></tr>}
          {timed && <tr><td className="tabular-nums py-1.5 text-navy-700">{L.timeLeft}: {clock}</td></tr>}
        </tbody></table>
        {done && byChapter.length > 1 && (
          <div className="mt-3"><p className="text-sm font-semibold text-navy-900">{L.byChapter}</p>
            <ul className="mt-1 space-y-1 text-xs text-navy-700">{byChapter.map((b) => <li key={b.name} className="flex justify-between gap-2"><span>{short(b.name)}</span><span className="tabular-nums">{b.r}/{b.n}</span></li>)}</ul></div>
        )}
        <p className="mt-3 text-xs text-navy-700">{L.note}</p>
      </div>
    </div>
  );
}
