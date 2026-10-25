import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'failed',
  group: 'test',
  order: 100,
  tool: { kind: 'mini:attempts' },
  mini: { kind: 'mini:aupass' },
  related: ['mock', 'hardest', 'values', 'studyplan', 'refused', 'passmark'],
  sources: ['au_test', 'au_prepare'],
  en: {
    slug: 'failed-citizenship-test',
    nav: 'Failed the test?',
    card: 'What a fail changes, how many appointments you have, and how to pass next time.',
    title: 'Failed Citizenship Test Australia: Resit Rules, Next Steps',
    description: 'Failed the Australian citizenship test? The resit is free, your visa is safe, and refusal is possible after 3 appointments without a pass. Plan the next try.',
    h1: 'Failed the Australian citizenship test: what happens next',
    intro: 'Enter how many appointments you have had: the tool shows where you stand. Then use the time before the next one well.',
    resume: (h) => `Failing the Australian citizenship test does not end your application and does not touch your permanent visa. Home Affairs books another test appointment, and sitting the test again costs nothing because the application fee already covers it. The one limit to keep in mind: after ${h.T.appointmentsBeforeRefusal} test appointments without a pass, the department may refuse the application, and a new application would mean a new fee, currently ${h.aud(h.F.general)} for an adult on form 1300t. Most fails come from one of two causes. Either a single values question was missed, which fails the test even with ${h.T.questions - 1} correct answers out of ${h.T.questions}, or the mark fell just short of ${h.need}, usually because of Part 3 on government and the law. Your result screen gives no breakdown of the real test, but your practice tests do: find the part that costs you points, read it again in Our Common Bond, then take timed mock tests until you pass with a margin.`,
    faqs: (h) => [
      { q: 'How long do I wait to resit the citizenship test?', a: 'Home Affairs does not publish a fixed gap. It sends a new appointment letter, and waits for appointments vary by place and period. Use the time: two or three weeks of focused practice on the parts you found hard is usually enough to turn a near miss into a comfortable pass.' },
      { q: 'Will failing the citizenship test affect my visa?', a: 'No. The department says failing the test does not affect your visa. You remain a permanent resident with the same rights. The worst outcome of repeated fails is a refused citizenship application, which you can follow with a new application later, paying the fee again.' },
      { q: 'Can I see which questions I got wrong in the real test?', a: 'The result is displayed on the screen when you finish, but the department does not publish the questions, so you leave without a list of mistakes. That is why practice tests matter after a fail: they show by part where you lose points, and each missed question comes with its explanation.' },
    ],
    body: (h) => `
<h2>What a fail changes, and what it does not</h2>
${h.table(['Question', 'Answer from Home Affairs'], [['Is my application cancelled?', 'no, another appointment is offered'], ['Do I pay again?', 'no, the fee includes the test and resits'], ['Is my visa affected?', 'no'], ['Is there a limit?', `refusal possible after ${h.T.appointmentsBeforeRefusal} appointments without a pass`]], `Home Affairs test page, updated ${h.date(h.T.pageUpdated)}.`, ['l', 'l'])}
<h2>Find out why you failed</h2>
<p>The real result screen tells you pass or fail. To know why, reconstruct it. Take three ${h.a('mock', 'timed mock tests')} in the days after the attempt, with the marking set to "At the end". The result panel separates the two rules and gives a score for each part of the booklet. If the panel says "Failed on a values question", you know the cause; if your mark hovers around ${h.need}, look at the part with the lowest score.</p>
<p>Write down the questions you remember from the real test, even roughly. They point to topics: a question about the Senate, one about a national day, one about a value in a workplace situation. Check each topic in ${h.src('au_ocb_pdf', 'Our Common Bond')}.</p>
<h2>A two-week plan for the next attempt</h2>
<p><strong>Days 1 to 4.</strong> Read the part that cost you most, slowly, then practise it on its own: ${h.a('part1', 'Part 1')}, ${h.a('part2', 'Part 2')}, ${h.a('part3', 'Part 3')} or the ${h.a('values', 'values questions')}. Do not move on until a set of ten in that part comes back at nine or ten.</p>
<p><strong>Days 5 to 8.</strong> Read the whole testable section once more, quickly. Each day, do one set of ten values questions and one full ${h.a('free', 'practice test')}.</p>
<p><strong>Days 9 to 14.</strong> One timed mock test a day. The goal is ${h.need + 2} or more with no values mistake, three days running. The ${h.a('hardest', 'hardest questions page')} picks out the topics candidates confuse most, worth a last look.</p>
<h2>If English was the problem</h2>
<p>Some candidates know the facts but run out of time reading. Ask for help with the screen or the equipment when you return, and remember the headset option to listen to each question. If you asked for help in your application and completed at least ${h.num(h.T.assistedAmepHours)} hours of the Adult Migrant English Program, or have an impairment that needs extra time, the department may offer the Assisted Test with ${h.T.assistedMinutes} minutes. The ${h.a('english', 'English and Assisted Test page')} explains both.</p>
<h2>If the application is refused</h2>
<p>After ${h.T.appointmentsBeforeRefusal} appointments without a pass Home Affairs may refuse the application. The refusal letter states the reasons and the review options; the ${h.a('refused', 'page on refused applications')} explains what follows. A new application is possible, with a new fee, and the residence requirement is checked again on the new date, so count your recent trips before lodging it.</p>`,
  },
});
