import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'online',
  group: 'apply',
  order: 20,
  tool: { kind: 'mini:online' },
  mini: { kind: 'mini:conferralform' },
  related: ['application', 'concession', 'documents', 'cost', 'adf'],
  sources: ['au_pr', 'au_concession', 'au_1298i'],
  en: {
    slug: 'apply-online-or-on-paper',
    nav: 'Online or paper',
    card: 'Who can apply in ImmiAccount, who must post form 1300t, and how scans differ from certified copies.',
    title: 'Citizenship Application Online 2026: ImmiAccount or Paper',
    description: 'Apply for Australian citizenship online in ImmiAccount or on paper form 1300t: who must post the form, how to pay, scans versus certified copies, 2026 rules.',
    h1: 'Applying for citizenship online or on paper: which channel is yours',
    intro: 'Answer three questions to see which channel fits you, then read what changes between a file built in ImmiAccount and one sent by post.',
    resume: (h) => `Most permanent residents aged ${h.R.onlineAges[0]} to ${h.R.onlineAges[1]} apply for Australian citizenship online, in their ImmiAccount, attaching colour scans of the original documents and paying ${h.aud(h.F.general)} at the moment of lodging. Paper form ${h.B.conferralForms.general} is required instead if you have no current or expired passport or other travel document, have not travelled in or out of Australia since ${h.M.noTravelSince}, claim a fee exemption, claim the defence service residence exemption, or were born outside Australia and are stateless. Teenagers aged 16 or 17 and members of the Australian Defence Force are also sent to paper by the Home Affairs summary. On paper you send certified copies, signed by an Australian citizen in a designated occupation who is not related to you, and you pre-pay the fee through ImmiAccount before posting. Pensioner Concession Card holders are the grey area: one Home Affairs page lists them under paper, while the newer fee concessions page, updated on 24 July 2026, says they can apply online with a scan of both sides of the card.`,
    faqs: (h) => [
      { q: 'Do I need certified copies if I apply in ImmiAccount?', a: 'No. Online, Home Affairs asks for legible colour scans of the original documents, English and non-English, with each multi-page document saved as a single file. Certification is a paper-application requirement, covering originals, non-English documents and their translations. The department may still ask to see originals later, and you bring an original photo ID to your appointment.' },
      { q: 'Can I switch from a paper application to ImmiAccount after posting it?', a: 'The pages we read do not describe converting a posted paper file into an online one. Once lodged, a paper application is handled as a paper file, and changes of name, address or contact details are reported through the steps for applicants on paper. If you have not posted it yet and you qualify for the online channel, nothing stops you from applying online instead.' },
      { q: 'Why does a person who has not travelled since 1990 need the paper form?', a: `Home Affairs lists "have not travelled into or out of Australia since ${h.M.noTravelSince}" among the cases for paper, alongside having no passport or travel document. It does not give a reason. In practice, the online form relies on travel and passport records, so applicants without them supply their history through certified documents instead.` },
    ],
    body: (h) => `
<h2>Two channels, one set of rules</h2>
<p>Online and paper applications are assessed against the same criteria and the same fee schedule. What differs is how you identify yourself, how you send documents and how you pay. Neither channel is faster by rule; Home Affairs says delays come from incomplete files and verification, not from the channel. This site only explains the options: the application itself is lodged by you, in ImmiAccount or on the form downloaded from the ${h.src('au_pr', 'Home Affairs permanent resident page')}.</p>
${h.table(['Point', 'Online (ImmiAccount)', 'Paper (form ' + h.B.conferralForms.general + ')'], [
  ['Who uses it', `most applicants aged ${h.R.onlineAges[0]} to ${h.R.onlineAges[1]}`, 'the listed exceptions'],
  ['Documents', 'colour scans of originals', 'certified copies'],
  ['Fee', 'paid when you lodge', 'pre-paid in ImmiAccount, receipt posted'],
  ['Fee exemption', 'not possible', 'required'],
  ['Changes after lodging', 'updated in ImmiAccount', 'steps for applying on paper'],
  ['Progress check', 'in ImmiAccount', 'letters from the department'],
], 'From the Home Affairs permanent resident page, updated ' + h.date(h.R.pageUpdated) + '.', ['l', 'l', 'l'])}
<h2>Who has to use paper</h2>
<p>The criteria section of the permanent resident page gives five cases for paper: no current or expired passport or travel document (a Document for Travel to Australia, ImmiCard, PLO56 or Titre de Voyage counts as one), no travel in or out of Australia since ${h.M.noTravelSince}, eligibility for a fee exemption, a claim to the Australian Defence Force residence exemption, and being stateless after birth outside Australia. Its summary box adds 16 and 17 year olds applying on their own and anyone part of the Australian Defence Force. The fee exemptions are narrow: at least 90 days in the permanent forces, British and Maltese former child migrants, and the statelessness provision of section ${h.B.statelessSection}. Form 1298i is explicit that a fee exemption cannot be claimed online.</p>
<h2>The concession card contradiction</h2>
<p>The Home Affairs summary box on the permanent resident page tells applicants eligible for a fee concession to complete and post a paper application. The ${h.src('au_concession', 'fee concessions page')}, updated on 24 July 2026, says the opposite for concessions: applicants who qualify can apply online through ImmiAccount, attaching a scan of both sides of their Pensioner Concession Card, and only paper applicants need a certified copy. The same page keeps paper compulsory for fee exemptions. Form 1298i also speaks of providing "a copy of both sides" with certified copies only for paper. We read the newer and more detailed page as the current position, but the department's own pages disagree; if ImmiAccount does not offer you the concession fee, the paper form remains open. The checker at the top follows the stricter reading.</p>
<h2>Building an online file</h2>
<p>An online application starts in ImmiAccount, where you create an account if you do not have one. Home Affairs asks you to translate any document not in English (with the original attached too), scan every original in colour, save multi-page documents as one file, and attach each document only once even if it proves several things. Pay at lodgement, then keep the receipt. You can later attach new documents, for example after a change of address or name, and check progress from the same account.</p>
<h2>Building a paper file</h2>
<p>On paper, every copy must be certified, including non-English documents and their translations. The certifier must be an Australian citizen, work in an occupation on the department's designated list and not be related to you by birth, marriage or de facto relationship. Pre-pay through My Payments in ImmiAccount, then post the form, the certified copies and the payment receipt to the address printed on the form. Applicants claiming a fee exemption post the same package without a receipt. Keep a copy of the whole application before it leaves your hands.</p>
<h2>Which form, which fee</h2>
<p>Form ${h.B.conferralForms.general} covers general eligibility for applicants aged ${h.T.ages[0]} to ${h.T.ages[1]} at ${h.aud(h.F.general)}. Applicants on another basis, such as people aged 60 or over or teenagers applying alone, use form ${h.B.conferralForms.other} at ${h.aud(h.F.otherSituations)}. The panel under the summary returns the form and fee for your age and card; the ${h.a('cost', 'cost page')} has every fee and the ${h.a('documents', 'documents page')} the evidence to attach.</p>`,
  },
});
