import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'pledge',
  group: 'after',
  order: 20,
  tool: { kind: 'mini:pledge' },
  mini: { kind: 'mini:ceremonyday' },
  related: ['ceremony', 'part4', 'values', 'rights', 'certificate', 'day'],
  sources: ['au_ocb_pdf', 'au_ceremony'],
  en: {
    slug: 'citizenship-pledge',
    nav: 'The pledge',
    card: 'Both versions of the pledge, what each line commits you to and the 12-month deadline.',
    title: 'Citizenship Pledge Australia: Both Versions, Line by Line',
    description: 'The Australian citizenship pledge in full, with or without "under God", what each line means, when you say it and why it is due within 12 months of approval.',
    h1: 'The Australian citizenship pledge, word for word',
    intro: 'Enter the month your application was approved to see the last month for making the pledge. Both versions of the text follow.',
    resume: (h) => `The Australian citizenship pledge is a short public promise said out loud at a citizenship ceremony, and it is the moment you become a citizen. It reads: "From this time forward, under God, I pledge my loyalty to Australia and its people, whose democratic beliefs I share, whose rights and liberties I respect, and whose laws I will uphold and obey." Each person chooses whether to include the words "under God"; both versions have the same legal effect. The presiding officer asks you to repeat the pledge, and you may hold a holy book you have brought. Applicants who applied aged ${h.T.ages[0] - 2} or over must make the pledge, normally within ${h.R.pledgeWithinMonths} months of the approval of their application; otherwise the approval may be cancelled unless there is an acceptable reason with evidence. Children under ${h.R.childExemptUnder} do not have to make it but may. The three lines of the pledge match the parts of Our Common Bond: democratic beliefs, rights and liberties, and the law.`,
    faqs: (h) => [
      { q: 'Do I have to say "under God" in the citizenship pledge?', a: 'No. The words "under God" are optional, and Home Affairs says you can choose which version of the pledge to say. Both versions make you a citizen in exactly the same way. You may also hold a holy book of your choice while you speak, but you do not have to.' },
      { q: 'What happens if I do not make the pledge within 12 months?', a: `Home Affairs may cancel the approval of your application if you do not attend a ceremony within ${h.R.pledgeWithinMonths} months of approval and cannot give an acceptable reason, supported by evidence. If you cannot attend an invitation, you receive a non-attendance letter and a later invitation, so respond to invitations and tell the department about travel.` },
      { q: 'Is the pledge the same as an oath of allegiance to the King?', a: 'No. The pledge is a commitment to Australia and its people, their democratic beliefs, their rights and liberties and their laws. It does not mention the King. The King is head of state under the Constitution, but the promise a new citizen makes is to the country and its people.' },
    ],
    body: (h) => `
<h2>The two versions</h2>
<p><strong>With the optional words:</strong> "From this time forward, under God, I pledge my loyalty to Australia and its people, whose democratic beliefs I share, whose rights and liberties I respect, and whose laws I will uphold and obey."</p>
<p><strong>Without them:</strong> "From this time forward, I pledge my loyalty to Australia and its people, whose democratic beliefs I share, whose rights and liberties I respect, and whose laws I will uphold and obey."</p>
<p>The text is printed at the start of ${h.src('au_ocb_pdf', 'Our Common Bond')}, which explains that each person chooses whether or not to use the words "under God", and the Home Affairs ceremony page confirms that you pick the version you say.</p>
<h2>What each line commits you to</h2>
${h.table(['Words of the pledge', 'Where the booklet explains it'], [['loyalty to Australia and its people', 'Part 1, Australia and its people'], ['whose democratic beliefs I share', 'Part 2, parliamentary democracy and the rule of law'], ['whose rights and liberties I respect', 'Part 2, freedoms of speech, association and religion'], ['whose laws I will uphold and obey', 'Part 3, government and the law; Part 4, commitment to the rule of law']], 'Our reading of how the booklet is organised around the pledge.', ['l', 'l'])}
<p>The booklet itself says that as you read it you will understand the meaning behind the pledge and how to put it into practice. That is why the citizenship test and the pledge are linked: the test checks that you understand what you will promise, and the ${h.T.valuesQuestions} values questions check the part about rights, liberties and laws most closely.</p>
<h2>When and how it is said</h2>
<p>The pledge comes near the end of the ceremony, after the introduction, the speeches including the Minister's welcome message and the address to participants, and before the National Anthem. The presiding officer, who must be an Australian citizen, administers it; everyone becoming a citizen at that ceremony says it out loud. If it is not said, the person does not legally become a citizen. Home Affairs describes it as the final legal requirement for most applicants.</p>
<h2>The 12-month window</h2>
<p>The clock starts at approval. Nine in ten approved applicants have had the opportunity to attend a ceremony within ${h.PT.table.approvalToCeremony.p90}, so the ${h.R.pledgeWithinMonths}-month window is usually comfortable, but long trips can eat into it. If you are invited on a date you are away, you receive a non-attendance letter and another invitation later. The tool at the top of this page turns an approval month into the last month for the pledge.</p>
<h2>Children and the pledge</h2>
<p>Children under ${h.R.childExemptUnder} who become citizens on a parent's application do not have to attend or make the pledge, but they are welcome to do both. Many families choose to bring them so they share the moment. Teenagers who applied aged ${h.T.ages[0] - 2} or ${h.T.ages[0] - 1} must attend and make the pledge like adults. The ${h.a('ceremony', 'ceremony page')} covers what to bring and wear on the day.</p>`,
  },
});
