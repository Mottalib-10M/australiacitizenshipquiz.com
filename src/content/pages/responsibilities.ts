import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'responsibilities',
  group: 'study',
  order: 170,
  tool: { kind: 'quiz', props: { mode: 'practice', topic: 'responsibilities', n: 10, scopeSelect: false } },
  mini: { kind: 'mini:duty' },
  related: ['part2', 'rights', 'parliament', 'after', 'pledge', 'dual'],
  sources: ['au_ocb_pdf', 'au_ocb'],
  en: {
    slug: 'responsibilities-of-citizens',
    nav: 'Responsibilities of citizens',
    card: 'The four duties and six privileges of a citizen, plus tax and taking part in community life.',
    title: 'Responsibilities and Privileges of Citizenship: Test Guide',
    description: 'Citizens\' responsibilities and privileges for the test: obey the law, vote, defend Australia, serve on a jury, and six privileges from a passport to parliament.',
    h1: 'Responsibilities and privileges of Australian citizens',
    intro: 'Ten questions on what citizens give and receive. Under the summary, the tool sorts any item into responsibility or privilege and says who it applies to.',
    resume: (h) => `Part 2 of Our Common Bond sets out what a citizen gives Australia and what Australia gives in return. There are four responsibilities: obey the laws of Australia; vote in federal, state or territory elections and in referendums; defend Australia should the need arise; and serve on a jury if called. There are six privileges: vote in those same elections and referendums; apply for a child born overseas to become a citizen by descent; apply for jobs in the Australian Public Service or the Australian Defence Force; seek election to parliament, if aged ${h.A.voteAge} or over and not a dual citizen; apply for an Australian passport and re-enter Australia freely; and ask for consular help from an Australian official while overseas. Voting appears on both lists. The booklet adds that service in the Defence Force is voluntary, that jury service falls to citizens aged ${h.A.voteAge} or over on the electoral roll, and that paying tax is required by law and funds services. Our bank has ${h.inTopic('responsibilities')} questions on this topic.`,
    faqs: (h) => [
      { q: 'Can a dual citizen stand for parliament in Australia?', a: `Not while holding the other citizenship. The booklet says Australian citizens aged ${h.A.voteAge} or over who are not dual citizens can seek election to parliament at the federal, state or territory level. Holding two citizenships is otherwise allowed where the other country's laws permit it, and a dual citizen keeps every other privilege on the list.` },
      { q: 'What help can an Australian embassy give me overseas?', a: 'The booklet says officials at an embassy, high commission or consulate can help citizens in times of need, including emergencies such as civil unrest or natural disasters, can issue emergency passports, and can give advice and support after an accident, serious illness or death. It also reminds citizens that the laws of the country they are in still apply.' },
      { q: 'Where does the money from taxes go?', a: 'According to the booklet, taxes pay for government-funded healthcare and education, defence, roads and railways, and social security. Tax on income from a job, a business or investments is collected by the Australian Taxation Office, many goods and services are taxed too, and state and territory governments and local councils also raise taxes for their services.' },
    ],
    body: (h) => `
<h2>The two lists side by side</h2>
${h.table(['Responsibilities: what you give', 'Privileges: what you receive'], [
  ['obey the laws of Australia', 'vote in federal, state or territory elections and referendums'],
  ['vote in federal, state or territory elections and referendums', 'apply for a child born overseas to become a citizen by descent'],
  ['defend Australia should the need arise', 'apply for work in the Australian Public Service or Defence Force'],
  ['serve on a jury if called', 'seek election to parliament'],
  ['', 'apply for an Australian passport and re-enter freely'],
  ['', 'ask for consular assistance while overseas'],
], 'Part 2 of Our Common Bond.', ['l', 'l'])}
<p>Four and six: learn the counts first, then the items. Voting sits on both sides because it is a duty and also something only citizenship gives. A favourite question asks which item is a responsibility rather than a privilege, so the left column must be secure.</p>
<h2>Each responsibility explained</h2>
<p><strong>Obeying the law.</strong> Representatives make laws to keep society orderly, free and safe and to protect rights, and everyone in Australia must obey them, citizens and non-citizens alike.</p>
<p><strong>Voting.</strong> Compulsory for citizens aged ${h.A.voteAge} or over in federal, state and territory elections and in referendums, which are votes to change the Constitution. It gives citizens a say in how Australia is governed. Local elections may be optional in some states.</p>
<p><strong>Defending Australia.</strong> Defence Force service is voluntary, but citizens are expected to be committed to joining together to defend the nation and its way of life if it ever became necessary.</p>
<p><strong>Jury service.</strong> Citizens aged ${h.A.voteAge} or over who are on the electoral roll can be called. A jury of ordinary men and women hears the evidence and decides guilty or not guilty, which helps keep courts open and fair.</p>
<h2>Each privilege explained</h2>
<ul>
<li><strong>Public jobs.</strong> Work for the Australian Government, for example at Services Australia or the Australian Taxation Office, or in the Army, Navy or Air Force.</li>
<li><strong>Parliament.</strong> Citizens aged ${h.A.voteAge} or over who are not dual citizens may stand at federal, state or territory level, described as an honour and a serious responsibility.</li>
<li><strong>Passport and return.</strong> Citizens may live freely in Australia, hold an Australian passport and come back from overseas without a visa.</li>
<li><strong>Consular help.</strong> Australia has embassies, high commissions or consulates in many countries.</li>
<li><strong>Children by descent.</strong> A citizen can apply for a child born overseas to become a citizen by descent; the ${h.a('descent', 'citizenship by descent page')} covers the procedure.</li>
</ul>
<h2>Beyond the lists: taking part and paying tax</h2>
<p>The booklet encourages active citizenship: joining neighbourhood and community organisations, volunteering, joining arts or cultural groups and taking part in political life. Paying tax is described as a legal requirement and a direct contribution, funding healthcare, education, defence, transport and social security. The Australian Taxation Office collects income tax and helps people understand their rights and obligations.</p>
<h2>Traps</h2>
<p>Jury service is a duty, not an opportunity you sign up for. Defence Force service is voluntary; defending Australia if needed is the duty. A passport is a privilege, not an obligation. Consular help does not place you above foreign law. And the age of ${h.A.voteAge} applies to voting, jury service and standing for parliament alike.</p>
<h2>Revising</h2>
<p>Read pages 20 to 22 of the ${h.src('au_ocb_pdf', 'testable section')}. Recite the four duties, then the six privileges, from memory; check with the tool below, then do the practice set above. The ${h.a('after', 'page on life after the ceremony')} shows how these privileges are used in practice, from enrolling to vote to applying for a passport.</p>`,
  },
});
