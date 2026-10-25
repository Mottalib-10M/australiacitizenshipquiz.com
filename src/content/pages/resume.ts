import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'resume',
  group: 'after',
  order: 70,
  tool: { kind: 'mini:resume' },
  mini: { kind: 'mini:dual' },
  related: ['renounce', 'dual', 'cost', 'certificate', 'citizenship', 'descent'],
  sources: ['au_resume', 'au_1298i', 'au_processing'],
  en: {
    slug: 'resume-australian-citizenship',
    nav: 'Resuming citizenship',
    card: 'Five ways back to Australian citizenship, form 132, the $255 fee and no ceremony.',
    title: 'Resume Australian Citizenship: Who Qualifies, $255 Fee',
    description: 'Resuming Australian citizenship: the five cases that qualify, including loss before 4 April 2002, paper form 132, the $255 fee, and no test or ceremony.',
    h1: 'Resuming Australian citizenship',
    intro: 'Choose how you lost your citizenship above to see whether resumption is open to you, then read the conditions and the steps.',
    resume: (h) => `Resumption lets a former Australian citizen become a citizen again without going through conferral. Home Affairs lists five situations: you lost citizenship by becoming a citizen of another country as an adult before ${h.date(h.H.dualFrom)}; you renounced it to acquire or keep another citizenship; you renounced it to avoid significant hardship or detriment; your citizenship was revoked as a child when your responsible parent's citizenship ended; or you were a citizen by registration or naturalisation and lost it after living outside Australia and New Guinea for seven years in a row between 26 January 1949 and 8 October 1958. The application is made on paper with form 132, at any age, from inside or outside Australia. The fee on form 1298i of July 2026 is ${h.aud(h.F.resumption)}, with no fee for children under ${h.R.childExemptUnder} on a parent's form; the Home Affairs page still shows an older ${h.aud(h.F.stale.resumption)}. There is no test and no ceremony: the certificate arrives by registered post after approval.`,
    faqs: (h) => [
      { q: 'I became a citizen of another country in the 1990s. Am I still Australian?', a: `Probably not, if you were 18 or over and took the step yourself. Section 17 of the Australian Citizenship Act 1948 ended the Australian citizenship of adults who acquired another nationality, until that rule was removed on ${h.date(h.H.dualFrom)}. You are one of the groups who can apply to resume citizenship on form 132.` },
      { q: 'Do I need to live in Australia to resume my citizenship?', a: 'You can apply from inside or outside Australia. If you apply from inside and need to travel while the application is processed, tell Home Affairs and make sure you have a valid passport and a visa that lets you return. From outside, you need a passport and visa to travel to Australia until citizenship is resumed.' },
      { q: 'When can I get an Australian passport after resuming?', a: 'Once your application is approved and you have received evidence of citizenship from Home Affairs, which arrives by registered post. Allow about two weeks for printing and postage in Australia and around six weeks overseas without an Australian address. If you leave Australia before then, travel on another passport with a valid visa.' },
    ],
    body: (h) => `
<h2>The five cases that qualify</h2>
${h.table(['How citizenship was lost', 'Can resume?'], [[`Became an adult citizen of another country before ${h.date(h.H.dualFrom)}`, 'yes'], ['Renounced to acquire or keep another citizenship', 'yes'], ['Renounced to avoid significant hardship or detriment', 'yes'], ["Revoked as a child when a responsible parent's citizenship ended", 'yes'], ['Citizen by registration or naturalisation, seven years outside Australia and New Guinea between 1949 and 1958', 'yes'], ['Renounced for any other reason', 'no; conferral as a permanent resident instead']], 'From the Home Affairs page on becoming a citizen again.', ['l', 'l'])}
<h2>The loss before 2002</h2>
<p>The most common case is historic. Section 17 of the Australian Citizenship Act 1948 provided that Australians over 18 who took action to acquire the nationality of another country ceased to be Australian on that acquisition. The rule stopped applying on ${h.date(h.H.dualFrom)}, when dual citizenship became possible, but the loss was not reversed automatically: resumption is the way back. The tool on the ${h.a('dual', 'dual citizenship page')} helps check whether a past naturalisation abroad ended your Australian citizenship.</p>
<h2>Applying</h2>
<p>Resumption is applied for on paper with form 132, posted with the documents and the payment. The fee is ${h.aud(h.F.resumption)} on ${h.src('au_1298i', 'form 1298i')}, the July 2026 schedule; the ${h.src('au_resume', 'Home Affairs page')} still printed ${h.aud(h.F.stale.resumption)} on ${h.date(h.P.retrieved_at)}. Children under ${h.R.childExemptUnder} on the same form as a responsible parent pay nothing. Tell the department about any change of name or contact details while it decides, and send any extra or original documents it asks for.</p>
<h2>After approval</h2>
<p>There is no citizenship test and no ceremony for resumption. The certificate is sent by registered post after approval; allow about ${h.PT.postageWeeksInAustralia} weeks for printing and postage in Australia, and about ${h.PT.postageWeeksOverseas} weeks overseas if you gave no Australian postal address. If the department made an error on the certificate, tell it within ${h.M.certificateErrorWeeks} weeks to avoid a new application. You can then apply for an Australian passport, and if you are 18 or over you must enrol to vote.</p>
<h2>Resumption or conferral?</h2>
<p>When resumption is open to you, it is usually the simpler path. Conferral as a permanent resident requires a permanent visa, ${h.R.lawfulYears} years of lawful residence with at most ${h.R.maxAbsenceDays} days away, the citizenship test for applicants aged ${h.T.ages[0]} to ${h.T.ages[1]}, a ceremony and a fee of ${h.aud(h.F.general)}. Resumption has its own criteria, set out in full on the Home Affairs page, but no citizenship test and no ceremony, and it costs ${h.aud(h.F.resumption)}. Someone who renounced for a reason outside the five cases, however, has only conferral, and the ${h.a('residence', 'residence calculator')} then gives the first possible date.</p>
<h2>Children of former citizens</h2>
<p>Children of people who lost citizenship can have routes of their own. A child born overseas to a parent who was an Australian citizen at the time of birth may apply for citizenship by descent; the ${h.a('descent', 'descent page')} covers it. Some children of former citizens who lost citizenship in specific circumstances also have their own provisions under conferral and do not sit the test, as the ${h.a('exempt', 'exemptions page')} notes.</p>`,
  },
});
