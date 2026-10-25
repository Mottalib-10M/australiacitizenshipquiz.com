/** Mini-tools added for the Our Common Bond pages (same contract as mini-specs.ts). */
import type { MiniSpec } from './mini-types';
import P from '../data/params-2026.json';
import A from '../data/params-a.json';
import { formatNumberL } from './format-l';

const T = P.au.test, M = P.au.misc;
const clamp = (x: number, a: number, b: number) => Math.max(a, Math.min(b, Math.round(x)));
const N = (v: number) => formatNumberL(v);
const pl = (n: number, w: string) => `${N(n)} ${w}${n === 1 ? '' : 's'}`;
const opts = (xs: string[]) => xs.map((label, i) => ({ value: String(i), label }));
const pick = <X,>(xs: X[], v: number | undefined): X => xs[clamp(v ?? 0, 0, xs.length - 1)];
const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const weekday = (y: number, m: number, d: number) => DAYS[new Date(Date.UTC(y, m - 1, d)).getUTCDay()];
const yearOf = (iso: string) => Number(iso.slice(0, 4));

/** The eight states and mainland territories, as Part 1 and Part 3 of the booklet describe them. */
const PLACES = [
  { name: 'New South Wales', kind: 'State', cap: 'Sydney', note: 'first British colony; Sydney is the largest city', icons: 'Sydney Harbour Bridge, Opera House' },
  { name: 'Victoria', kind: 'State', cap: 'Melbourne', note: 'smallest mainland state', icons: 'Melbourne Cricket Ground, 12 Apostles, Royal Exhibition Building' },
  { name: 'Queensland', kind: 'State', cap: 'Brisbane', note: 'second largest state', icons: 'Great Barrier Reef, Torres Strait Islands to the north' },
  { name: 'Western Australia', kind: 'State', cap: 'Perth', note: 'largest state', icons: 'Ningaloo Coast, Margaret River, the Kimberley' },
  { name: 'South Australia', kind: 'State', cap: 'Adelaide', note: 'rugged coast and wine regions', icons: 'Barossa Valley, Flinders Ranges' },
  { name: 'Tasmania', kind: 'State', cap: 'Hobart', note: 'smallest state, across Bass Strait', icons: 'Cradle Mountain, Port Arthur, Bay of Fires' },
  { name: 'Australian Capital Territory', kind: 'Territory', cap: 'Canberra', note: 'home of the national capital', icons: 'Parliament House, High Court of Australia' },
  { name: 'Northern Territory', kind: 'Territory', cap: 'Darwin', note: 'tropical north, red desert south', icons: 'Uluru, Kata Tjuta, Kings Canyon' },
];

const FLAGS = [
  { name: 'Australian National Flag', colours: 'blue, white and red', parts: [['Union Jack (top left)', 'British settlement and the laws and institutions inherited'], ['Commonwealth Star', `${A.starPoints} points: one for each state, one for the territories`], ['Southern Cross (right)', 'stars seen in the southern sky']] },
  { name: 'Australian Aboriginal Flag', colours: 'black, red and yellow', parts: [['Black top half', 'the Aboriginal peoples of Australia'], ['Red bottom half', 'the earth and its ceremonial significance'], ['Yellow circle', 'the sun']] },
  { name: 'Torres Strait Islander Flag', colours: 'green, blue, black and white', parts: [['Green stripes', 'the land'], ['Blue centre panel', 'the sea'], ['Black lines', 'the Torres Strait Islander people'], ['White headdress', 'all Torres Strait Islanders'], ['White star', 'the island groups; white for peace']] },
];

const LEVEL = ['The Australian Government', 'State and territory governments', 'Local government (and the ACT Government)'];
const SERVICES: Array<[string, number]> = [
  ['Taxation', 0], ['Immigration and citizenship', 0], ['Defence', 0], ['Foreign affairs', 0], ['Social security (pensions, family support)', 0], ['Postal services and communications', 0], ['Airports and air safety', 0], ['Trade and commerce', 0], ['Employment assistance', 0],
  ['Hospitals and health services', 1], ['Schools', 1], ['Police and ambulance services', 1], ['Public transport', 1], ['Roads and railways', 1], ['Forestry', 1], ['Road and traffic rules', 1],
  ['Rubbish collection', 2], ['Building permits', 2], ['Parks, playgrounds and pools', 2], ['Local roads, footpaths and bridges', 2], ['Street signs and traffic controls', 2], ['Local libraries and community centres', 2], ['Food and meat inspection', 2], ['Noise and animal control', 2],
];

const ROLES: Array<[string, string, string, string]> = [
  ['The King of Australia', 'Head of State', 'national', 'does not take a day-to-day part in government'],
  ['Governor-General', 'represents the King in Australia', 'national', 'appointed by the King on the Prime Minister\'s advice; neutral'],
  ['Governor', 'represents the King in a state', 'state', 'role similar to the Governor-General'],
  ['Administrator', 'similar to a Governor, in the Northern Territory', 'territory', 'appointed by the Governor-General'],
  ['Prime Minister', 'leads the Australian Government', 'national', 'generally leads the party or coalition with a majority in the House of Representatives'],
  ['Premier', 'leads a state government', 'state', 'state governments sit in their capital city'],
  ['Chief Minister', 'leads a territory government', 'territory', 'territory laws can be changed by the Australian Government'],
  ['Government minister', 'responsible for an area of government (a portfolio)', 'national or state', 'an MP chosen by the government leader'],
  ['Member of Parliament (MP)', 'represents the people in the Australian Parliament or a state parliament', 'national or state', 'elected'],
  ['Senator', 'represents a state or territory in the Australian Parliament', 'national', 'elected'],
  ['Mayor or Shire President', 'leads a local government', 'local', 'local council leader'],
  ['Councillor', 'member of a local council', 'local', 'elected by local citizens'],
];

const ACTIONS: Array<[string, boolean, string]> = [
  ['Criticise the government in public', true, 'freedom of speech'],
  ['Protest peacefully against a decision', true, 'freedom of speech and association'],
  ['Damage property during a protest', false, 'protests must be peaceful and harm no one'],
  ['Join a trade union or a political party', true, 'freedom of association'],
  ['Be forced to join a group', false, 'nobody can be made to join or to stay'],
  ['Follow any religion, or none', true, 'freedom of religion'],
  ['Follow a religious rule that breaks Australian law', false, 'Australian law prevails'],
  ['Express views through art, film or music', true, 'freedom of expression'],
  ['Make false allegations about someone', false, 'illegal even with freedom of speech'],
  ['Encourage others to break the law', false, 'illegal even with freedom of speech'],
  ['Promote violence against a group', false, 'against Australian values and the law'],
];

const DUTIES: Array<[string, string, string]> = [
  ['Obey the laws of Australia', 'Responsibility', 'everyone in Australia'],
  ['Vote in federal, state or territory elections and referendums', 'Responsibility and privilege', `citizens aged ${A.voteAge} or over`],
  ['Defend Australia should the need arise', 'Responsibility', 'citizens; Defence Force service itself is voluntary'],
  ['Serve on a jury if called', 'Responsibility', `citizens aged ${A.voteAge} or over on the electoral roll`],
  ['Apply for an Australian passport and re-enter freely', 'Privilege', 'citizens'],
  ['Seek election to parliament', 'Privilege', `citizens aged ${A.voteAge} or over who are not dual citizens`],
  ['Work in the Australian Public Service or Defence Force', 'Privilege', 'citizens may apply'],
  ['Ask for consular help overseas', 'Privilege', 'citizens; local laws still apply abroad'],
  ['Apply for citizenship by descent for a child born overseas', 'Privilege', 'citizen parents'],
  ['Pay tax', 'Legal requirement', 'everyone who earns income in Australia'],
];

const STEPS: Array<[string, string]> = [
  ['Arrest a person suspected of breaking the law', 'The police'],
  ['Investigate a crime against a federal law', 'The Australian Federal Police'],
  ['General policing in the ACT', 'The Australian Federal Police'],
  ['Decide guilt in a jury trial', 'The jury, after hearing the evidence'],
  ['Explain the law to the jury', 'The judge'],
  ['Set the penalty after a guilty verdict', 'The judge'],
  ['Decide a case without a jury', 'The judge or magistrate, on the evidence before the court'],
  ['Appoint judges and magistrates', 'The government (it cannot remove them for their decisions)'],
  ['Have the final say in applying and interpreting the law', 'The High Court of Australia'],
];

const MILESTONES: Array<[number, string]> = [
  [yearOf(A.firstFleetDate), `First Fleet of ${A.firstFleetShips} ships arrives; colony of New South Wales`],
  [A.goldRushYear, 'Gold rush in New South Wales and Victoria'],
  [A.constitutionActYear, 'Constitution passed within a British Act of Parliament'],
  [yearOf(A.federationDate), 'Federation: the Commonwealth of Australia'],
  [yearOf(A.anzacDate), 'Anzac landing at Gallipoli (World War I)'],
  [A.referendumYear, `Referendum: over ${A.referendumYesPercent}% vote Yes`],
  [Number(A.bushfireSeason.slice(0, 4)), `Bushfire season of ${A.bushfireSeason}`],
  [yearOf(T.valuesSince), 'Values questions added to the citizenship test'],
];

const pages = (k: keyof typeof A.partPages) => A.partPages[k][1] - A.partPages[k][0] + 1;
const PARTS: Array<[string, keyof typeof A.partPages]> = [['Part 1', 'p1'], ['Part 2', 'p2'], ['Part 3', 'p3'], ['Part 4', 'p4'], ['Glossary', 'glossary']];

export const SPECS_A: Record<string, () => MiniSpec> = {
  ocbplan: () => ({
    title: 'How long to read Our Common Bond twice?', cta: 'Start with Part 1', ctaPage: 'part1',
    inputs: [{ id: 'm', label: 'Minutes of reading a day', def: 20, max: 240, unit: 'min' }, { id: 'wpm', label: 'Your English reading speed', def: 150, max: 400, unit: 'words/min', help: 'About 150 for a careful reader in a second language.' }],
    run: (v) => {
      const m = clamp(v.m ?? 0, 0, 240), wpm = clamp(v.wpm ?? 0, 0, 400);
      const total = PARTS.reduce((s, [, k]) => s + pages(k), 0);
      const daysFor = (k: keyof typeof A.partPages) => (m && wpm ? Math.ceil(((M.ocbWordsTestable * pages(k)) / total) * 2 / wpm / m) : 0);
      const all = m && wpm ? Math.ceil((M.ocbWordsTestable * 2) / wpm / m) : 0;
      return { head: ['Two full readings', all ? pl(all, 'day') : 'add time and speed'], rows: PARTS.map(([n, k]) => [`${n} (pages ${A.partPages[k][0]} to ${A.partPages[k][1]})`, all ? pl(Math.max(1, daysFor(k)), 'day') : '-'] as [string, string]), note: `Based on about ${N(M.ocbWordsTestable)} words in the testable section, shared by page count.` };
    },
  }),
  stateinfo: () => ({
    title: 'One state or territory at a glance', cta: 'How the Senate seats are shared', ctaPage: 'parliament',
    inputs: [{ id: 's', label: 'State or territory', def: 0, options: opts(PLACES.map((p) => p.name)) }],
    run: (v) => {
      const p = pick(PLACES, v.s), st = p.kind === 'State';
      return { head: ['Capital city', p.cap], rows: [['Type', st ? 'State (rights recognised by the Constitution)' : 'Mainland territory'], ['Leader of its government', st ? 'Premier' : 'Chief Minister'], ['Senators', `${st ? A.senatorsPerState : A.senatorsPerTerritory} of ${A.senators}`], ['Remember', p.note], ['Icons named in the booklet', p.icons]] };
    },
  }),
  flags: () => ({
    title: 'What each part of a flag means', cta: 'National days to know', ctaPage: 'days',
    inputs: [{ id: 'f', label: 'Flag', def: 0, options: opts(FLAGS.map((f) => f.name)) }],
    run: (v) => {
      const f = pick(FLAGS, v.f);
      return { head: ['Colours', f.colours], rows: f.parts as Array<[string, string]>, note: 'All three flags are officially recognised; each state and territory also has its own.' };
    },
  }),
  daysyear: () => ({
    title: 'Australia Day and Anzac Day in a given year', cta: 'The history behind both dates', ctaPage: 'history',
    inputs: [{ id: 'y', label: 'Year', def: P.year, max: 2100 }],
    run: (v) => {
      const y = clamp(v.y ?? P.year, yearOf(A.anzacDate), 2100);
      const fy = yearOf(A.firstFleetDate), ay = yearOf(A.anzacDate);
      return { head: ['26 January falls on a', weekday(y, 1, 26)], rows: [['25 April falls on a', weekday(y, 4, 25)], ['Years since the First Fleet', N(y - fy)], ['Years since the Gallipoli landing', N(y - ay)]], note: 'Australia Day is a public holiday in every state and territory; Anzac Day is a day of remembrance.' };
    },
  }),
  timeline: () => ({
    title: 'Where a year sits in the booklet\'s history', cta: 'Practise the history questions', ctaPage: 'history',
    inputs: [{ id: 'y', label: 'Year', def: 1900, max: 2100 }],
    run: (v) => {
      const y = clamp(v.y ?? 1900, 0, 2100);
      const before = [...MILESTONES].reverse().find(([yr]) => yr <= y), after = MILESTONES.find(([yr]) => yr > y);
      return { head: ['Last milestone', before ? `${before[0]}: ${before[1]}` : 'before European settlement'], rows: [['Next milestone', after ? `${after[0]}: ${after[1]}` : 'none listed after this year'], ['Indigenous presence', `${N(A.arrivalYearsAgo[0])} to ${N(A.arrivalYearsAgo[1])} years, by the archaeological record`]] };
    },
  }),
  whichlevel: () => ({
    title: 'Which level of government handles it?', cta: 'How Parliament makes laws', ctaPage: 'parliament',
    inputs: [{ id: 's', label: 'Service', def: 0, options: opts(SERVICES.map((s) => s[0])) }],
    run: (v) => {
      const [name, lv] = pick(SERVICES, v.s);
      const others = SERVICES.filter((s) => s[1] === lv && s[0] !== name).slice(0, 3).map((s) => s[0].toLowerCase()).join(', ');
      return { head: ['Responsible level', LEVEL[lv]], rows: [['Service', name], ['Same level also handles', others], ['Caution', 'some responsibilities overlap between levels']] };
    },
  }),
  refmaj: () => ({
    title: 'Would this referendum change the Constitution?', cta: 'See how Parliament works', ctaPage: 'parliament',
    inputs: [{ id: 'yes', label: 'Yes vote across the nation', def: 55, max: 100, unit: '%' }, { id: 'st', label: `States with a Yes majority (of ${A.states})`, def: 3, max: A.states }],
    run: (v) => {
      const yes = clamp(v.yes ?? 0, 0, 100), st = clamp(v.st ?? 0, 0, A.states), needSt = Math.floor(A.states / 2) + 1;
      const ok1 = yes > 50, ok2 = st >= needSt;
      return { head: ['Constitution changed?', ok1 && ok2 ? 'Yes: double majority' : 'No'], rows: [['National majority', ok1 ? 'met' : 'not met'], ['Majority of states', `${st} of ${A.states}, ${needSt} needed: ${ok2 ? 'met' : 'not met'}`], [`${A.referendumYear} Referendum`, `over ${A.referendumYesPercent}% Yes`]] };
    },
  }),
  leader: () => ({
    title: 'Who is who in Australian government', cta: 'Practise the questions on leaders', ctaPage: 'executive',
    inputs: [{ id: 'r', label: 'Title', def: 1, options: opts(ROLES.map((r) => r[0])) }],
    run: (v) => {
      const [n, role, lvl, how] = pick(ROLES, v.r);
      return { head: [n, role], rows: [['Level', lvl], ['How the post is held', how]] };
    },
  }),
  freedom: () => ({
    title: 'Is this protected in Australia?', cta: 'Practise the values questions', ctaPage: 'values',
    inputs: [{ id: 'a', label: 'Action', def: 0, options: opts(ACTIONS.map((x) => x[0])) }],
    run: (v) => {
      const [n, ok, why] = pick(ACTIONS, v.a);
      return { head: ['Protected?', ok ? 'Yes, within the law' : 'No'], rows: [['Action', n], ['Why', why]], note: 'Every freedom is exercised within Australian law, and others\' freedoms must be respected.' };
    },
  }),
  duty: () => ({
    title: 'Responsibility or privilege?', cta: 'What changes after the ceremony', ctaPage: 'after',
    inputs: [{ id: 'd', label: 'Item', def: 1, options: opts(DUTIES.map((x) => x[0])) }],
    run: (v) => {
      const [n, kind, who] = pick(DUTIES, v.d);
      return { head: ['Classed as', kind], rows: [['Item', n], ['Applies to', who]] };
    },
  }),
  court: () => ({
    title: 'Who does what in the justice system?', cta: 'Back to Part 3 of the booklet', ctaPage: 'part3',
    inputs: [{ id: 's', label: 'Step', def: 3, options: opts(STEPS.map((x) => x[0])) }],
    run: (v) => {
      const [n, who] = pick(STEPS, v.s);
      return { head: ['Done by', who], rows: [['Step', n], ['Principle', 'innocent until found guilty; courts and police independent of government']] };
    },
  }),
  welcome: () => ({
    title: 'Welcome or Acknowledgement of Country?', cta: 'What happens at the ceremony', ctaPage: 'ceremony',
    inputs: [{ id: 'p', label: 'Protocol', def: 0, options: opts(['Welcome to Country', 'Acknowledgement of Country']) }],
    run: (v) => {
      const w = (v.p ?? 0) === 0;
      return w
        ? { head: ['Given by', 'an Aboriginal or Torres Strait Islander custodian of the area'], rows: [['When', 'usually the first item of an event'], ['Forms', 'songs, dances, smoking ceremonies, speeches'], ['Language', 'traditional language or English']] }
        : { head: ['Given by', 'anyone, often the chair or master of ceremonies'], rows: [['When', 'with the opening welcome and housekeeping'], ['Recognises', 'that the gathering is on Indigenous land'], ['Pays respect to', 'Traditional Custodians, Elders past and present, Indigenous people present']] };
    },
  }),
  ocblang: () => ({
    title: 'Is the booklet published in my language?', cta: 'How English is checked on the day', ctaPage: 'english',
    inputs: [{ id: 'l', label: 'Language', def: 2, options: opts([...A.languages, 'Another language']) }],
    run: (v) => {
      const i = clamp(v.l ?? 0, 0, A.languages.length), ok = i < A.languages.length;
      return { head: ['Testable section in this language', ok ? 'Yes' : 'Not in the list'], rows: [['Language of the test itself', `${T.languageOnly} only`], ['Listening on the day', 'headsets let you hear each question'], ['Translations available', `${T.ocbLanguages} community languages`]], note: ok ? 'Learn the facts in your language, then revise the key words in English.' : 'Study the English edition with the Our Common Bond podcast and the practice test.' };
    },
  }),
};
