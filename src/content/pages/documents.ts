import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'documents',
  group: 'apply',
  order: 60,
  tool: { kind: 'mini:penal' },
  mini: { kind: 'mini:docs' },
  related: ['application', 'character', 'online', 'children', 'interview'],
  sources: ['au_pr', 'au_descent'],
  en: {
    slug: 'documents-and-police-certificates',
    nav: 'Documents and police checks',
    card: 'Identity from birth, the three documents, overseas police certificates and translations, explained.',
    title: 'Citizenship Documents 2026: Identity and Police Certificates',
    description: 'Citizenship documents in 2026: 3 identity documents for name, photo, signature and address, overseas police certificates after 12 months abroad, translations.',
    h1: 'Citizenship documents: identity, police certificates and translations',
    intro: 'Enter your time abroad to see whether an overseas police certificate is likely, then work through the identity evidence Home Affairs expects.',
    resume: (h) => `Citizenship documents fall into three groups. Identity comes first, assessed from birth: Home Affairs asks for ${h.R.identityDocs} documents that together show your birth name, date of birth and sex, a photograph, a signature and your current residential address, with a full birth certificate as the preferred proof of birth details. Character comes second: if you are a permanent visa holder, you give an overseas police certificate (a penal clearance certificate) for each country where you spent ${h.R.penalClearanceStayDays} days or more, when your time outside Australia since turning 18 adds up to ${h.R.penalClearanceOutsideMonths} months or more in the last ${h.R.penalClearanceYears} years or since your first permanent visa, whichever is more recent. New Zealand certificates are requested by the department itself, and an Australian police check is requested for everyone aged ${h.R.afpCheckFromAge} or over. Supporting evidence comes third: proof for any exemption, discretion or concession, and documents linking you to children on the form. Anything not in English needs an English translation alongside the original, by a NAATI-accredited translator if done in Australia.`,
    faqs: (h) => [
      { q: 'What if I cannot get a full birth certificate for my citizenship file?', a: 'Home Affairs accepts one of several alternatives: an adoption order, an ImmiCard, a Document for Travel to Australia, a family or household registration document, or documents issued before your arrival that together confirm your identity from birth. The aim is a chain from birth to today, so also include any marriage, divorce or name change records that link your birth name to your current one.' },
      { q: 'Should I get a New Zealand police certificate myself?', a: 'No. If New Zealand is one of the countries that triggers the certificate rule, Home Affairs asks applicants not to obtain it themselves. The department requests it directly from the New Zealand Ministry of Justice, after getting your consent. If you did not give consent in the application, it will contact you for it before making the request.' },
      { q: 'Does a translation done overseas need NAATI accreditation?', a: 'No. Home Affairs says translators outside Australia do not have to be NAATI accredited; in Australia, you should use one who is. Wherever it is done, each translation must give the translator’s full name, address, telephone number, and qualifications and experience in the language, all written in English. Send the original document with the translation.' },
    ],
    body: (h) => `
<h2>Identity: three documents, four facts</h2>
<p>Home Affairs must not approve a citizenship application if it is not satisfied of your identity, and it looks at identity from birth to the present. The ${h.R.identityDocs} documents do not each need to prove everything; together they must cover four facts.</p>
${h.table(['Fact to prove', 'Typical documents'], [
  ['Birth name, date of birth, sex', 'full birth certificate; otherwise adoption order, ImmiCard, DFTTA, household registration, or pre-arrival documents together'],
  ['Photograph', 'passport, Australian driver licence, national identity card, proof of age card, UNHCR document'],
  ['Signature', 'passport, driver licence, Titre de Voyage, Certificate of Identity, military, aircrew or seafarer identity document'],
  ['Current residential address', 'electricity, gas or water bill; rates notice; rental contract; bank statement'],
], 'Examples listed on the Home Affairs permanent resident page.', ['l', 'l'])}
<p>Name changes need their own proof: an official marriage or divorce certificate (not a commemorative one), a change of name certificate from a registry of births, deaths and marriages or the overseas equivalent, or other official papers linking your names. A change of sex or gender is shown by a statement from a registered medical practitioner or psychologist, an Australian travel document showing your sex, or a registry certificate reflecting the change. The checker under the summary shows which of the four facts your documents leave uncovered.</p>
<h2>Children aged 15 or younger</h2>
<p>For a child on your application, give a full birth certificate or household registration document showing the parents, a passport or travel document, evidence linking birth name and current name if they differ, and one passport-sized photograph. Add parenting orders and adoption papers where they exist. You also show that you are the responsible parent, as the ${h.a('children', 'children page')} explains.</p>
<h2>Overseas police certificates</h2>
<p>A penal clearance certificate shows whether a person has a criminal record outside Australia, and it feeds the ${h.a('character', 'character assessment')}. For permanent visa holders, all four conditions must apply: you lived or travelled outside Australia after turning 18; this was within the last ${h.R.penalClearanceYears} years or since your first permanent visa, whichever is more recent; you spent ${h.R.penalClearanceOutsideMonths} months or more outside Australia in total; and you spent ${h.R.penalClearanceStayDays} days or more in that country. For New Zealand citizens on a Special Category visa, the window is simply the last ${h.R.penalClearanceYears} years. Each certificate comes from the government or police authority of the country concerned; Home Affairs publishes country guidance under its offices outside Australia. It may also ask you for a certificate directly even where the rule does not require one.</p>
<p>In Australia, you do nothing: for applicants aged ${h.R.afpCheckFromAge} or over, the department requests a check from the National Police Checking Service on your behalf. For citizenship by descent the threshold for the Australian check is 18, as the ${h.src('au_descent', 'descent page')} states.</p>
<h2>Supporting evidence for your situation</h2>
<p>Claims beyond the general rule need proof. Examples Home Affairs gives include defence discharge papers with service dates, proof of an administrative error affecting your residence status, a statement on significant hardship, proof of a spouse's citizenship with evidence of the relationship, specialist medical evidence for an incapacity, proof of birth in Papua before ${h.date(h.M.papuaBefore)} to an Australian citizen parent, and both sides of a Pensioner Concession Card. British migrants without proof of entry who arrived before ${h.date(h.B.britishArrivedBefore)} give employment, tax or school records instead.</p>
<h2>A link with Australia</h2>
<p>Home Affairs must be satisfied that you are likely to live in Australia or keep a close and continuing link while abroad. If you will be overseas for ${h.B.linkStatementMonths} months or more in the next few years, include a statement explaining why, with supporting papers such as employment contracts, property deeds or leases, school enrolment letters or return tickets.</p>
<h2>Preparing the files</h2>
<p>Online, scan every original in colour, keep each multi-page document in one file and attach each document once. On paper, every copy and translation must be certified by an Australian citizen in a designated occupation who is not related to you. The ${h.a('online', 'online or paper page')} compares the two, and the ${h.a('interview', 'interview page')} covers the originals to bring on the day.</p>`,
  },
});
