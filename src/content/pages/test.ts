import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'test',
  group: 'test',
  order: 10,
  tool: { kind: 'quiz', props: { mode: 'exam' } },
  mini: { kind: 'mini:aupass' },
  related: ['mock', 'values', 'passmark', 'questions', 'testday', 'exempt'],
  sources: ['au_test', 'au_prepare', 'au_ocb_pdf', 'au_1298i'],
  en: {
    slug: 'australian-citizenship-test',
    nav: 'The citizenship test',
    card: 'Format, pass rules and who sits it, with a 20-question test marked the official way.',
    title: 'Australian Citizenship Test 2026: Format, Rules, Practice',
    description: 'Australian citizenship test in 2026: 20 questions in 45 minutes, 75% overall plus all 5 values questions right. Take a marked practice test and see the rules.',
    h1: 'Australian citizenship test: format, pass rules and a marked practice test',
    intro: 'Sit a full practice test below, then read how the real one works, from the appointment letter to the result on screen.',
    resume: (h) => `The Australian citizenship test is a computer-based test of ${h.T.questions} multiple choice questions that most applicants for citizenship by conferral sit at a Home Affairs appointment. It lasts ${h.T.minutes} minutes and has two pass conditions that apply together: at least ${h.T.passPercent}% overall, which on ${h.T.questions} questions means ${h.need} correct answers, and every one of the ${h.T.valuesQuestions} questions on Australian values answered correctly. A score of ${h.T.questions - 1} with one values question wrong is a fail. The test is in English, with headsets so questions can be heard, and it checks basic English, knowledge of Australia and of the privileges and duties of citizenship, and commitment to Australian values. Applicants aged ${h.T.ages[0]} to ${h.T.ages[1]} on the day Home Affairs receives their application generally sit it. The application fee already pays for it, resits cost nothing, and failing has no effect on a permanent visa. Every question is drawn from the testable section of Our Common Bond.`,
    faqs: (h) => [
      { q: 'Is the Australian citizenship test multiple choice?', a: `Yes. All ${h.T.questions} questions are multiple choice, answered on a computer or a tablet at the test centre. There is no essay, no spoken part and no separate English exam: reading the questions is the English check. If reading English is hard, the headset lets you hear each question, and an Assisted Test with more time exists for some applicants.` },
      { q: 'When do I find out my citizenship test result?', a: 'Straight away. Home Affairs says the result is displayed on the screen once you finish the test. If you pass, the department goes on with the rest of the application, including character checks, and writes to you with its decision. If you fail, it books a new appointment for you at no cost.' },
      { q: 'Does the test change every year?', a: `The format has been stable since ${h.date(h.T.valuesSince)}, when the values questions and the rule that all of them must be right were added. Questions are drawn from the testable section of Our Common Bond, so a new edition of that booklet is what would change the content. On ${h.date(h.P.retrieved_at)} the booklet in use was the 2020 edition.` },
      { q: 'Can I take the test before I apply for citizenship?', a: 'No. The test is part of the application for citizenship by conferral. You apply first, Home Affairs checks your identity and eligibility, and only then sends a letter with the date, time and place of your test appointment. Preparing before you apply is still wise, because the wait for an appointment can be short.' },
    ],
    body: (h) => `
<h2>The test in one table</h2>
${h.table(['Point', 'What Home Affairs says'], [['Questions', `${h.T.questions}, multiple choice`], ['Values questions', `${h.T.valuesQuestions}, all must be right`], ['Overall mark', `at least ${h.T.passPercent}%, so ${h.need} of ${h.T.questions}`], ['Time', `${h.T.minutes} minutes; ${h.T.assistedMinutes} for an Assisted Test`], ['Language', `${h.T.languageOnly}, questions can be heard through a headset`], ['Who sits it', `most applicants aged ${h.T.ages[0]} to ${h.T.ages[1]}`], ['Cost', 'included in the application fee; resits free'], ['Attempts', `refusal possible after ${h.T.appointmentsBeforeRefusal} appointments without a pass`]], `Home Affairs test page, updated ${h.date(h.T.pageUpdated)}.`, ['l', 'l'])}
<h2>What the test is for</h2>
<p>Home Affairs gives the test four aims. Passing it shows a basic knowledge of English, an understanding of what becoming a citizen means, adequate knowledge of Australia and of the responsibilities and privileges of citizenship, and an understanding of and commitment to Australian values based on freedom, respect and equality. That is why there is no separate language exam for citizenship: the test is the language check, and a candidate who can read the practice questions above comfortably is at the right level.</p>
<h2>Where the questions come from</h2>
<p>Everything you need is in the testable section of ${h.src('au_ocb_pdf', 'Australian Citizenship: Our Common Bond')}, a booklet of about fifty pages in four parts: Australia and its people; democratic beliefs, rights and liberties; government and the law; and Australian values. The ${h.T.valuesQuestions} values questions come from the fourth part. The department advises using only its own resources, and says it does not endorse outside courses or paid apps. Our questions are adapted from that booklet under its CC BY 4.0 licence; they train on the same facts but are not the official questions, which are never published.</p>
<h2>Reading your practice result</h2>
<p>The panel next to the test keeps the two rules apart, because they fail people in different ways. The overall mark allows ${h.T.questions - h.need} mistakes. The values rule allows none, and it is checked first. A run with ${h.T.questions - 1} correct answers and one values mistake shows as a fail on values, which mirrors the real marking. When you finish, the result by part tells you which part of the booklet cost you points. Switch the marking to "At the end" to see nothing until you are done, as in the test room.</p>
<!--tool:mini:margin-->
<h2>From letter to result</h2>
<p>After you apply, Home Affairs checks your identity and eligibility, then writes with the date, time and place of your appointment. Appointments are held at departmental offices in most capital cities and at some Services Australia offices; people who apply from overseas sit the test after returning, save in exceptional cases. On the day you show an original photo identity document, staff discuss your application, confirm who you are and take your photo, and then you sit the test alone. The ${h.a('testday', 'test day page')} lists what to bring and the rules in the room, and the ${h.a('interview', 'interview page')} explains the conversation that comes first.</p>
<h2>If you fail</h2>
<p>A fail is not the end of the application. The department books another appointment, there is nothing more to pay, and your permanent visa is not affected. The limit is practical: after ${h.T.appointmentsBeforeRefusal} appointments without a pass, Home Affairs may refuse the application. The ${h.a('failed', 'page on failing the test')} explains how to use the time between attempts, and the ${h.a('mock', 'timed mock test')} reproduces the ${h.T.minutes}-minute limit.</p>
<h2>Who skips the test</h2>
<p>Applicants aged ${h.T.ages[0] - 1} or under, or ${h.T.ages[1] + 1} or over, when they apply do not sit it, nor do people with an incapacity that prevents them, and a few groups set by the law, such as some children of former citizens. They may still have an interview to confirm identity. Details and evidence are on the ${h.a('exempt', 'exemptions page')}.</p>`,
  },
});
