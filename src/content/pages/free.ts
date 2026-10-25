import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'free',
  group: 'test',
  order: 20,
  tool: { kind: 'quiz', props: { mode: 'exam' } },
  mini: { kind: 'mini:topicmix' },
  related: ['mock', 'sample', 'questions', 'studyplan', 'ocb', 'test'],
  sources: ['au_prepare', 'au_ocb', 'au_ocb_pdf', 'au_test'],
  en: {
    slug: 'free-australian-citizenship-test',
    nav: 'Free practice tests',
    card: 'Unlimited free 20-question tests, new questions on every run, no account and no payment.',
    title: 'Free Citizenship Test Practice: Unlimited 20-Question Runs',
    description: 'Free Australian citizenship practice tests with no account, no trial, no limit: each run draws 20 new questions, 5 on values, marked as Home Affairs marks them.',
    h1: 'Free Australian citizenship practice tests, as many as you want',
    intro: 'No sign-up, no paywall after the first test, no email. Press "New set of questions" for a fresh 20-question test whenever you like.',
    resume: (h) => `A free Australian citizenship practice test should do three things: draw a full set of ${h.T.questions} questions, include exactly ${h.T.valuesQuestions} values questions as the real test does, and mark the result with both official rules, ${h.T.passPercent}% overall and every values question right. The test above does all three and has no limit: each new run draws again from a bank of ${h.count.all} questions adapted from Our Common Bond, ${h.count.values} of them on Australian values, so the number of different tests runs into the billions. Nothing is stored, nothing is sold and you never create an account. Home Affairs itself offers its booklet, an audio version and a short practice test free of charge, and it warns that it does not endorse paid test packages. Use the official booklet to learn and these runs to check yourself: when you pass several fresh tests in a row with no values mistake, you are ready for the appointment.`,
    faqs: (h) => [
      { q: 'Why are these practice tests free?', a: 'Because the material they come from is public. Our Common Bond is published by the Commonwealth under a Creative Commons licence that allows adaptation with attribution, and the rules of the test are on the Home Affairs website. Writing questions from it costs time, not licences, so the site charges nothing and shows no paywall, trial or premium tier.' },
      { q: 'Do I need to register to save my progress?', a: 'No, and there is nothing to save. Each test is marked in your browser and forgotten when you close the page. If you want to compare runs, note your score and the part that cost you points. The address bar keeps the code of the current test, so the same link replays the same questions.' },
      { q: 'How many free practice tests should I do before the real one?', a: `There is no official number. A useful target is to pass five fresh tests in a row with all ${h.T.valuesQuestions} values questions right and at least ${h.need + 2} correct answers, which leaves a margin for nerves. If one part keeps costing you points, switch to the practice page for that part before going back to full tests.` },
    ],
    body: (h) => `
<h2>What makes a practice test worth taking</h2>
<p>Many free quizzes ask ten questions picked at random and report a percentage. That trains memory, but it does not reproduce the decision made at the end of the real test. The official marking has two gates. The first is the values gate: the ${h.T.valuesQuestions} questions drawn from the fourth part of the booklet must all be right. The second is the overall mark of ${h.T.passPercent}%, which on ${h.T.questions} questions is ${h.need} correct answers. A practice tool that does not hold the values questions apart can tell you that you passed with ${h.T.questions - 1} out of ${h.T.questions} when the real test would have failed you. The runs above always contain ${h.T.valuesQuestions} values questions and report the two gates separately.</p>
<h2>How a fresh test is drawn</h2>
<p>When you press "New set of questions", the page takes ${h.T.valuesQuestions} questions from the ${h.count.values} values questions and ${h.T.questions - h.T.valuesQuestions} from the other ${h.count.all - h.count.values}, then shuffles them. The questions on the other three parts are not split evenly, because Home Affairs does not publish how many come from each part. Your result by part, shown when you finish, is the useful signal: if Part 3 on government and the law is where the mistakes gather, that is the chapter to read again.</p>
<h2>The free official resources</h2>
<p>Home Affairs gives away everything needed to pass. The testable section of ${h.src('au_ocb_pdf', 'Our Common Bond')} holds all the information the test draws on, and the department's ${h.src('au_prepare', 'preparation page')} points to a podcast version and to a revised practice test built into the booklet. The booklet is available in ${h.T.ocbLanguages} community languages, although the test itself is in English. The department says it does not endorse or recommend test packages from other individuals or organisations. This site is one of those outsiders: it sells nothing, and it says plainly that its questions are adapted, not official.</p>
<h2>A free routine in four weeks</h2>
${h.table(['Week', 'What to do', 'Tool on this site'], [['1', 'Read Parts 1 and 2 of the booklet once', h.a('part1', 'Part 1 practice') + ', ' + h.a('part2', 'Part 2 practice')], ['2', 'Read Parts 3 and 4, then all four parts again quickly', h.a('part3', 'Part 3 practice') + ', ' + h.a('values', 'values questions')], ['3', 'Two full tests a day, at the end of each one read the explanations', 'this page'], ['4', 'Timed tests under exam conditions', h.a('mock', '45-minute mock test')]], 'A plan, not a rule: adjust it with the study planner.', ['l', 'l', 'l'])}
<p>The ${h.a('studyplan', 'study planner')} turns the time you can give each day into a number of weeks. Most of the effort goes into Part 3, which covers the Constitution, parliament, elections and the courts, and into reading the values part closely enough that no values question can surprise you.</p>
<h2>Free does not mean careless</h2>
<p>Each question records the part and heading of the booklet where its fact sits, so you can check any answer you doubt. Questions about who holds an office today, or anything else that changes faster than the booklet, are left out, because the test draws on the booklet and not on the news. When Home Affairs changes a rule of the test or publishes a new edition of the booklet, the bank and this page are reviewed and the date at the foot of the page changes. Every figure you see here is read from the official page it links to.</p>`,
  },
});
