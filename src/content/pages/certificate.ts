import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'certificate',
  group: 'after',
  order: 40,
  tool: { kind: 'mini:evidence' },
  mini: { kind: 'mini:born' },
  related: ['after', 'ceremony', 'born', 'descent', 'cost', 'processing'],
  sources: ['au_evidence', 'au_1298i', 'au_processing', 'au_ceremony'],
  en: {
    slug: 'citizenship-certificate',
    nav: 'Citizenship certificate',
    card: 'Who receives one, how to get evidence of citizenship, the fee, the wait and the rules.',
    title: 'Citizenship Certificate Australia: Evidence, Fee and Wait',
    description: 'The Australian citizenship certificate: given at the ceremony or posted; evidence of citizenship costs $290 on form 119, 90% decided in 15 days; fixing errors.',
    h1: 'The Australian citizenship certificate and evidence of citizenship',
    intro: 'Work out the fee and the usual wait above, then see when you receive a certificate automatically and when you apply for one.',
    resume: (h) => `An Australian citizenship certificate is the official document showing that a person is an Australian citizen. New citizens by conferral normally receive it at their ceremony, just after making the pledge; if it is not ready, Home Affairs posts it. People who become citizens without a ceremony, such as by descent, adoption or resumption, receive it by registered post once their application is approved. Anyone else who needs proof, for example a person who became a citizen at birth in Australia or who has lost a certificate, applies for evidence of Australian citizenship on form 119. The fee on form 1298i of July 2026 is ${h.aud(h.F.evidence)}, with no fee when replacing a document lost in a listed natural disaster within ${h.M.evidenceDisasterMonths} months. In the table updated on ${h.date(h.PT.pageUpdated)}, nine in ten evidence applications were decided within ${h.PT.table.evidenceDecision.p90}, plus about ${h.PT.postageWeeksInAustralia} weeks for printing and postage in Australia. The certificate is needed for an Australian passport.`,
    faqs: (h) => [
      { q: 'Do I need a citizenship certificate if I was born in Australia?', a: 'Not to be a citizen: if you meet the rule for citizenship by birth, you already are one. But some situations call for proof, such as a first passport when a birth certificate does not show your parents were citizens or permanent residents. Evidence of citizenship, applied for on form 119, gives you that proof.' },
      { q: 'What do I do if my certificate has a mistake on it?', a: `Tell Home Affairs as soon as possible. If the department made the error and you report it within ${h.M.certificateErrorWeeks} weeks of receiving the certificate, you may not need a new application. After that, or if the error came from details you gave, you apply to change your evidence, and the fee can be refunded only for a departmental error.` },
      { q: 'Can I laminate or write on my citizenship certificate?', a: 'Do not. It is an offence under section 39 of the Australian Citizenship Act 2007 to alter the certificate or let someone else alter it, and you must not write on it. Home Affairs warns that some agencies and organisations may refuse laminated or damaged certificates.' },
    ],
    body: (h) => `
<h2>How each new citizen receives a certificate</h2>
${h.table(['How you became a citizen', 'Certificate'], [['Conferral, with a ceremony', 'handed over after the pledge, or posted if not ready'], [`Conferral, no ceremony (child under ${h.R.childExemptUnder}, incapacity)`, 'posted by registered mail on approval'], ['Descent or adoption', 'posted on approval'], ['Resumption', 'posted on approval'], ['Birth in Australia', 'none automatically; apply for evidence if you need proof']], 'From the Home Affairs ceremony, processing and evidence pages.', ['l', 'l'])}
<p>The certificate is issued in the legal name you held when the application was approved. You become a citizen when you make the pledge, not when the certificate is printed; the document is evidence of a status you already have.</p>
<h2>Applying for evidence of citizenship</h2>
<p>Evidence of citizenship is applied for online in ImmiAccount. You can be any age; for a child under ${h.R.childExemptUnder}, a responsible parent applies. Each person needs a separate application: children cannot be included on a parent's. The fee is ${h.aud(h.F.evidence)} per application on ${h.src('au_1298i', 'form 1298i')}. No fee is payable when the application replaces evidence lost, destroyed or damaged in a natural disaster on the department's list, made within ${h.M.evidenceDisasterMonths} months of the date given for that disaster. Missing documents, unpaid fees or details that need checking slow the decision.</p>
<h2>Waiting times</h2>
${h.table(['Share of evidence applications', 'Decided within'], [['25%', h.PT.table.evidenceDecision.p25], ['50%', h.PT.table.evidenceDecision.p50], ['75%', h.PT.table.evidenceDecision.p75], ['90%', h.PT.table.evidenceDecision.p90]], `Home Affairs processing times, updated ${h.date(h.PT.pageUpdated)}.`, ['l', 'r'])}
<p>After approval, allow about ${h.PT.postageWeeksInAustralia} extra weeks for printing and postage in Australia. Outside Australia without an Australian postal address, printing and postage can take about ${h.PT.postageWeeksOverseas} weeks, so Home Affairs suggests giving an Australian address if possible. On ${h.date(h.PT.onHandDate)} the department had ${h.num(h.PT.onHand.evidence)} evidence applications on hand and had received ${h.num(h.PT.received.evidence)} in ${h.PT.receivedMonth}.</p>
<h2>Looking after it</h2>
<p>The certificate is an important legal document. You will need it to apply for an Australian passport, and you may need it to apply for some jobs or to join the Australian Defence Force. Keep it flat and unmarked: altering it is an offence under section 39 of the Act, and laminated or damaged certificates may be refused. Tell Home Affairs if it is lost or stolen; a replacement is an application for evidence of citizenship, at the fee above.</p>
<h2>Errors on a certificate</h2>
<p>If your name or date of birth is printed wrongly, contact the department straight away. If the mistake was the department's and you report it within ${h.M.certificateErrorWeeks} weeks of receiving the certificate, you may not need to apply for a change. Later, or when the error came from the details you supplied, you apply to change your evidence. The fee is refunded only when the department made the error. The ${h.a('after', 'page on the first weeks as a citizen')} explains what to do with the certificate next.</p>`,
  },
});
