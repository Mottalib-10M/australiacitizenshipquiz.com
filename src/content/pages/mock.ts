import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'mock',
  group: 'test',
  order: 30,
  tool: { kind: 'quiz', props: { mode: 'exam', timed: true } },
  mini: { kind: 'mini:margin' },
  related: ['free', 'testday', 'failed', 'hardest', 'passmark', 'test'],
  sources: ['au_test', 'au_ocb_pdf'],
  en: {
    slug: 'citizenship-mock-test',
    nav: 'Timed mock test',
    card: 'The real conditions: 20 questions, a 45-minute clock and marking only at the end.',
    title: 'Citizenship Mock Test Australia: 45-Minute Timed Exam',
    description: 'Timed Australian citizenship mock test: 20 questions against a 45-minute clock, answers shown at the end, then your mark, the values check and weak parts.',
    h1: 'Australian citizenship mock test under exam conditions',
    intro: 'The clock starts with your first answer. Leave the marking on "At the end" to rehearse the real thing, where you see nothing until you finish.',
    resume: (h) => `A mock test is the last stage of preparation: it checks not what you know but whether you can show it under the conditions of the appointment. The real Australian citizenship test gives ${h.T.minutes} minutes for ${h.T.questions} multiple choice questions on a computer or tablet, with no notes, no phone and nobody to help. This mock test reproduces that: a ${h.T.minutes}-minute clock that starts on your first answer, ${h.T.valuesQuestions} values questions mixed among the ${h.T.questions}, and answers hidden until you press "See my result" or the time runs out, in which case the test is marked as it stands. The verdict uses both official rules, ${h.need} correct answers and all values questions right. Most candidates finish well inside the time, roughly two minutes a question, so the clock is less a threat than a reason to stay calm and read every option. Candidates who sit the Assisted Test have ${h.T.assistedMinutes} minutes instead.`,
    faqs: (h) => [
      { q: 'Is 45 minutes enough for the citizenship test?', a: `For most people, yes. ${h.T.minutes} minutes for ${h.T.questions} questions is a little over two minutes each, and the questions are short. Time runs short mainly for slow readers of English, which is why the headset option and the Assisted Test with ${h.T.assistedMinutes} minutes exist. Use this mock test to measure your own pace before the appointment.` },
      { q: 'Can I go back and change an answer in the mock test?', a: 'Yes. With the marking set to "At the end", the Previous and Next buttons let you review and change any answer before you finish, which is also the safest habit for the real test. Once you press "See my result", the answers are locked and the mistakes listed with their explanations.' },
      { q: 'What does the mock test do when time runs out?', a: 'It stops and marks what you have answered. Unanswered questions count as wrong, as they would in a real test that ended with blanks. If that happens to you, practise with the clock on until you finish with ten minutes to spare, and read the explanations of the questions you skipped.' },
    ],
    body: (h) => `
<h2>Exam conditions, one by one</h2>
${h.table(['In the test room', 'In this mock test'], [[`${h.T.minutes} minutes`, `${h.T.minutes}-minute clock from your first answer`], [`${h.T.questions} multiple choice questions`, `${h.T.questions} questions drawn from ${h.count.all}`], [`${h.T.valuesQuestions} values questions, all needed`, `${h.T.valuesQuestions} values questions, checked first`], ['Result shown at the end', 'answers hidden until you finish'], ['No phone, no notes, no helper', 'up to you: close the booklet and silence the phone'], ['Headset to hear the questions', 'not reproduced; read aloud if you plan to listen']], `Conditions from the Home Affairs test page, updated ${h.date(h.T.pageUpdated)}.`, ['l', 'l'])}
<h2>How to use a mock test properly</h2>
<p>A mock test is wasted if it is taken with the booklet open or the answers showing. Set the marking to "At the end", put your phone in another room, and start only when you have the full ${h.T.minutes} minutes. Answer every question, even the ones you are unsure of, because a blank is always wrong. At the end, read the list of missed questions slowly: each one shows the right answer and the fact behind it, and the result by part tells you where to go back in the booklet.</p>
<p>Then do something the real test will not let you do: write down the two or three facts you missed and check them in ${h.src('au_ocb_pdf', 'Our Common Bond')} at the heading given with each question. Coming back to the source fixes the fact far better than seeing the answer once.</p>
<h2>Reading your mark</h2>
<p>The test allows ${h.T.questions - h.need} wrong answers overall, but none among the values questions. The small calculator under the summary works it out for any mix of mistakes. A mock score of ${h.need} is a pass on paper and a warning in practice: a single misread question on the day would turn it into a fail. Aim for ${h.need + 2} or more on three fresh mock tests before your appointment, with no values mistake in any of them.</p>
<h2>Pacing</h2>
<p>Two minutes a question is generous for questions of one or two lines. If you run short, the cause is usually rereading options rather than not knowing. Read the question, predict the answer before looking at the options, then pick the option that matches. For questions with "not" or "which of these is", read the stem twice. Leave nothing for the last minute: there is no penalty for changing an answer, so answer first and review after.</p>
<h2>When you are ready</h2>
<p>You are ready for the appointment when fresh mock tests feel routine: comfortable time, a mark above ${h.need + 1}, and values questions answered without hesitation. If a values question still trips you, the ${h.a('values', 'values practice set')} drills only those. If one part keeps costing points, the ${h.a('hardest', 'hardest questions page')} picks the topics candidates confuse most. The ${h.a('testday', 'test day page')} covers what to bring and what happens before you sit down.</p>`,
  },
});
