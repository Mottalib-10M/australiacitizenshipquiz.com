# Adding or editing a page

One page = one file `src/content/pages/<id>.ts` exporting `definePage({...})` (types in
`src/lib/guide-types.ts`). The file name must equal `id`. Model: `src/content/pages/test.ts`. The page is built at
`/en/<en.slug>/`; menus, footer, home lists and sitemap follow by themselves. The planned pages, their slug, group,
target query and suggested tool are listed in `tests/plan.ts`: a new page is added there first.

## Fields

- `group`: `test`, `study`, `eligibility`, `apply` or `after`; `order`: position in its group (10, 20, 30…).
- `tool`: the main tool, shown right under the H1 (first screen, RECETTE §5). Every page has one:
  - `{ kind: 'quiz', props: { mode: 'exam' } }`: a full 20-question test (5 values questions), `timed: true` for the 45-minute clock;
  - `{ kind: 'quiz', props: { mode: 'practice', chapter: 0..3 | topic: '<topic>' | values: true, n: 10, scopeSelect: true|false } }`;
  - `{ kind: 'bank', props: { chapter: 0..3 } }` or `{ topic }`: every question with its answer, one part or topic at a time;
  - `{ kind: 'date' }`: earliest date to apply, trips day by day (general residence requirement);
  - `{ kind: 'cost', props: { kind?: 'conferral'|'descent'|'adoption'|'renunciation'|'resumption'|'evidence' } }`: official fees;
  - `{ kind: 'mini:<spec>' }`, specs in `src/lib/mini-specs.ts` (+ `mini-specs-a.ts`, `mini-specs-b.ts`).
- `mini`: a second tool under the citable block (optional, same kinds).
- In a body, `<!--tool:mini:budget-->` or `<!--tool:quiz|{"mode":"practice","topic":"states","n":5}-->` places a tool between paragraphs.
- `related`: 4–6 page ids (`home` allowed).
- `sources`: keys of `src/data/params-2026.json` → `sources` (Home Affairs pages, form 1298i, the Act, Our Common Bond).

Topics of the question bank (`topic` field, `src/lib/banks.ts`): `first`, `history`, `states`, `symbols`, `days`, `people`,
`democracy`, `rights`, `responsibilities`, `constitution`, `levels`, `parliament`, `executive`, `courts`, `values`.

## Text rules (checked by `npx vitest run tests/pages.test.ts`, then `npm run check` on the built HTML)

- `title` 50–60 characters, key term first ("Citizenship Ceremony 2026: …", "Australian Citizenship Cost 2026: …"), never
  "How…", "What…", "Australia…", "Calculator…". "Australian citizenship" and "Australian values" may open a title
  because they are the query itself (`scripts/titres-exceptions.txt`).
- `description` 150–160 characters.
- `resume(h)`: ONE paragraph of at least 130 words answering the page's query with figures; shown folded after its first sentence.
- `faqs(h)`: 3–5 questions unique to the page across the whole site, each answer 40–90 words.
- `body(h)`: HTML with `<h2>` sections, at least 450 words (aim for 550–750). No `<h1>`.
- No em dash anywhere; colon, comma or parentheses instead. Australian/British spelling (licence, programme, recognised).
- Pages must read differently (check-unique fails above 30 % shared text between two pages): no shared boilerplate paragraphs.
- Links only to official sources (`h.src(key, text)`) and internal pages (`h.a(id, text)`). Never a competitor, app,
  course, law firm, migration agent or affiliate; never mention Google, "first result" or any other private site.
- Never present the site as a government body; no coat of arms or official logo. The page template already shows
  "Independent, non-government site" under every H1.

## Figures

Never type a fee, a limit, a date rule or a count: read them through `h` (`src/lib/helpers.ts`): `h.T` (test),
`h.R` (residence), `h.F` (fees), `h.PT` (processing), `h.M` (misc limits), `h.H` (history), `h.P` (whole params file),
`h.aud(n)`, `h.num(n)`, `h.pc(x)`, `h.date(iso)`, `h.need` (correct answers to pass), `h.count.all|values`,
`h.inChapter(i)`, `h.inTopic(t)`, `h.chapters`, `h.topics`, `h.table(headers, rows, caption, align)`.
A fact that is not on an official page (Home Affairs, form 1298i, the Australian Citizenship Act 2007, Our Common Bond)
is not written. When an official page contradicts the fee form, follow form 1298i and say which page is out of date.

## Data

- `src/data/params-2026.json`: rules, fees and processing times read on the Home Affairs website (date in
  `retrieved_at`). `scripts/update-data.py` compares form 1298i and the processing table with it; the workflow
  `.github/workflows/update-data.yml` will run it monthly once the repository is published (manual check until then).
- `src/data/questions/au.json`: practice questions adapted by Radif Partners from the testable section of
  Australian Citizenship: Our Common Bond (© Commonwealth of Australia 2020, CC BY 4.0, Coat of Arms excluded).
  `npx vitest run` lints the bank.
