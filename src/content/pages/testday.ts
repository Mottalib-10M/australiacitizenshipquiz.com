import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'testday',
  group: 'test',
  order: 80,
  tool: { kind: 'mini:testday' },
  mini: { kind: 'mini:assisted' },
  related: ['interview', 'mock', 'english', 'test', 'aftertest', 'failed'],
  sources: ['au_test', 'au_pr'],
  en: {
    slug: 'citizenship-test-day',
    nav: 'Test day',
    card: 'The appointment letter, the ID to bring, the room rules and what happens before the test starts.',
    title: 'Citizenship Test Day: Appointment, ID to Bring and Rules',
    description: 'Citizenship test day in Australia: what the appointment letter says, the photo ID to bring, why copies fail, room rules, childcare and how results are shown.',
    h1: 'Citizenship test day: the appointment, step by step',
    intro: 'Check you are ready with the short list above, then read what happens from the moment you arrive.',
    resume: (h) => `On the day of your citizenship test appointment you bring an original photo identity document, such as a passport, an Australian driver licence or an Australian proof of age card, plus any other document Home Affairs asked for in its letter. Certified copies and photos of an ID on a phone are not accepted, and without photo ID the appointment is moved to a later date. Children are not allowed in the test centre and there is no childcare, so arrange it beforehand. At the centre, staff discuss your application, confirm your identity and your eligibility to sit the test, and take your photo. Only then do you sit the test alone, on a computer or tablet, with your phone off and put away and no books or notes. The test has ${h.T.questions} questions and lasts ${h.T.minutes} minutes, or ${h.T.assistedMinutes} for an Assisted Test, and your result is displayed when you finish. Appointments take place at departmental offices in most capital cities and some Services Australia offices.`,
    faqs: (h) => [
      { q: 'Where is the citizenship test held?', a: 'At departmental offices in most Australian capital cities and at some Services Australia (Centrelink) offices. The appointment letter gives the exact address. People who lodged from outside Australia are invited to sit it after they return; in exceptional circumstances the department may arrange an appointment at an Australian embassy or consulate.' },
      { q: 'Can I reschedule my citizenship test appointment?', a: 'Yes. Home Affairs says to follow the instructions in your appointment letter if you need a new date. Do it as early as possible, and keep in mind that waits for appointments vary. Turning up without photo identification also leads to a new date, which only delays the application.' },
      { q: 'Can someone come into the test with me to help?', a: `No. Nobody can accompany you into the test to help. Tell the department in advance if you need help reading the screen or using the equipment; headsets let you listen to the questions, and an Assisted Test with ${h.T.assistedMinutes} minutes may be offered in the cases Home Affairs lists.` },
    ],
    body: (h) => `
<h2>Before the day</h2>
<p>The appointment letter is the starting point: it gives the date, time and place and lists any documents to bring. Before you go, make sure every document is attached to your application in ImmiAccount, and attach new ones if something has changed since you applied, such as your address or your name. A change that the department learns about at the desk can slow things down.</p>
${h.table(['Bring', 'Do not rely on'], [['Original passport, Australian driver licence or Australian proof of age card', 'certified copies of your ID'], ['Any other document named in the letter', 'a photo or scan of your ID on a phone'], ['Glasses if you read with them', 'notes, books or the booklet in the test room'], ['A plan for childcare', 'bringing children: they are not allowed in the centre']], 'From the Home Affairs page on the interview and test.', ['l', 'l'])}
<h2>On arrival</h2>
<p>Arrive on time. The appointment opens with the part people forget to prepare for: a conversation about your application. Staff confirm your identity against your documents and check that you are eligible to sit the test, then take a photo of you. The ${h.a('interview', 'interview page')} covers the kind of questions asked. Only once this is done do you move to the test itself.</p>
<h2>In the test room</h2>
<p>You will be told where to leave your belongings. The rules are simple: phone off and put away, no talking to other people, no books, paper or other material. The test runs on a computer or a tablet with a headset; if you cannot read English well, you can choose to listen to each question. You cannot bring anyone to help, but you can ask staff for help to read the screen or use the equipment, which is why it is worth mentioning any difficulty when you apply.</p>
<p>The test has ${h.T.questions} multiple choice questions and lasts ${h.T.minutes} minutes. An Assisted Test, with ${h.T.assistedMinutes} minutes, may be offered if you asked for help in your application and completed at least ${h.num(h.T.assistedAmepHours)} hours of English tuition under the Adult Migrant English Program, or if an impairment means you need more time. The calculator under the summary shows which version is likely to apply.</p>
<h2>The result</h2>
<p>The result is displayed when you finish. A pass means the department continues with your application; the ${h.a('aftertest', 'page on what comes after the test')} explains the decision, the ceremony invitation and the typical waits. A fail means another appointment, at no extra cost. Your permanent visa is not affected either way.</p>
<h2>The week before</h2>
<p>Do two or three ${h.a('mock', 'timed mock tests')} in quiet conditions, read the values part of the booklet once more and check the route to the centre. The night before, put your ID and the letter together. If you are anxious about English, try the practice tests reading each question aloud: it is close to the experience of listening through the headset.</p>`,
  },
});
