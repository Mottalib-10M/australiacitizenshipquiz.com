import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'concession',
  group: 'apply',
  order: 40,
  tool: { kind: 'mini:concession' },
  mini: { kind: 'mini:exemptfee' },
  related: ['cost', 'online', 'adf', 'over60', 'application'],
  sources: ['au_concession', 'au_1298i', 'au_pr'],
  en: {
    slug: 'fee-concession',
    nav: 'Fee concession',
    card: 'The reduced citizenship fee needs a Pensioner Concession Card; three groups pay no fee at all.',
    title: 'Citizenship Fee Concession 2026: Pensioner Card, Exemptions',
    description: 'Citizenship fee concession in 2026: $85 instead of $595 with a valid Pensioner Concession Card. Health Care Cards do not count. Who pays no fee, how to claim.',
    h1: 'Citizenship fee concession: who pays less, and who pays nothing',
    intro: 'Choose the card you hold to see the fee you would pay, then check the three fee exemptions below the summary.',
    resume: (h) => `The citizenship fee concession cuts the general eligibility fee from ${h.aud(h.F.general)} to ${h.aud(h.F.generalConcession)}, and the other situations fee from ${h.aud(h.F.otherSituations)} to ${h.aud(h.F.otherSituationsConcession)}, under form 1298i of July 2026. Only one card opens it: a valid, unexpired Pensioner Concession Card issued by Services Australia or the Department of Veterans' Affairs, with your name as the primary cardholder, or with you listed as a dependant if you are 17 or younger. Health Care Cards, student cards and Seniors Health Cards are refused for this purpose, however low your income. You prove the concession with both sides of the card: a scan for an online application, a certified copy on paper. Separately, three groups pay no fee at all and must apply on paper: people with at least 90 days in the permanent forces, British and Maltese former child migrants who arrived alone between ${h.date(h.M.childMigrantsFrom)} and ${h.date(h.M.childMigrantsTo)}, and applicants under the statelessness provision. Children under 16 on a parent's form pay nothing in any case.`,
    faqs: (h) => [
      { q: 'Does a Seniors Health Card give the reduced citizenship fee?', a: `No. Home Affairs names the Seniors Health Card, the Health Care Card and student cards as cards that cannot be used. Only a valid Pensioner Concession Card qualifies. Without one, an applicant aged 60 or over pays the full other situations fee of ${h.aud(h.F.otherSituations)} rather than the concession amount of ${h.aud(h.F.otherSituationsConcession)}.` },
      { q: 'My Pensioner Concession Card expires next month: can I still use it?', a: 'The card must not be expired, and Home Affairs reads that at the time you apply with a copy of both sides attached. If it is still valid on the day you lodge, it meets the condition as written. If it lapses before you lodge, the concession is no longer available until you hold a valid card again, so apply while it is current.' },
      { q: 'Can my teenage son use my Pensioner Concession Card?', a: `If he is 17 or younger and listed as a dependant on your valid Pensioner Concession Card, yes. A 16 or 17 year old applies on his own on form ${h.B.conferralForms.other}, so the concession takes his fee from ${h.aud(h.F.otherSituations)} to ${h.aud(h.F.otherSituationsConcession)}. A child of 15 or younger on your form pays nothing anyway, card or not.` },
    ],
    body: (h) => `
<h2>The concession in numbers</h2>
${h.table(['Application', 'Full fee', 'With a Pensioner Concession Card', 'Saving'], [
  [`Form ${h.B.conferralForms.general}, general eligibility`, h.aud(h.F.general), h.aud(h.F.generalConcession), h.aud(h.F.general - h.F.generalConcession)],
  [`Form ${h.B.conferralForms.other}, other situations`, h.aud(h.F.otherSituations), h.aud(h.F.otherSituationsConcession), h.aud(h.F.otherSituations - h.F.otherSituationsConcession)],
  ['Child under 16 on a parent’s form', 'nil', 'nil', 'none'],
], 'Form 1298i, design date 07/26. The concession applies only to conferral forms.', ['l', 'r', 'r', 'r'])}
<p>The concession exists only for conferral, the route for permanent residents. Descent, adoption, renunciation, resumption and evidence applications have a single fee each, listed on the ${h.a('cost', 'cost page')}.</p>
<h2>The card: three conditions</h2>
<p>Home Affairs sets three tests. First, the card is a Pensioner Concession Card issued by the Australian Government, through Services Australia or the Department of Veterans' Affairs. Second, your name appears on it as primary cardholder, or you are 17 or younger and listed as a dependant. Third, it has not expired. The ${h.src('au_concession', 'concessions page')} shows examples of both issuers' cards, front and back, so you can compare yours. A partner who is not the primary holder and is over 17 does not qualify through the other person's card.</p>
<h2>Cards that do not work</h2>
<p>The list of refusals is short and firm: Health Care Cards, Student Cards and Seniors Health Cards cannot be used to get the reduced fee. This catches many retirees, who hold a Seniors Health Card and assume it counts. The fee form repeats the rule word for word, so there is no discretion to argue at lodgement.</p>
<h2>How to claim it</h2>
<p>Attach both sides of the card to the application. The fee concessions page, updated in July 2026, says eligible applicants can apply online in ImmiAccount with a scan, while a paper application needs a certified copy. Be aware that the summary box on the permanent resident page still lists concession holders among those who must apply on paper; the ${h.a('online', 'online or paper page')} sets out that contradiction. Either way the card goes in with the application, not later.</p>
<h2>No fee at all: the three exemptions</h2>
<p>An exemption is different from a concession: the fee is nil, and the application must be on paper, never online. Form 1298i grants it to:</p>
<ul>
<li>people who served at least 90 days in total in the permanent forces of the Commonwealth, with a letter or discharge papers from the Australian Defence Force giving service dates (the ${h.a('adf', 'defence service page')} covers the related residence exemption);</li>
<li>British and Maltese former child migrants who came to Australia without their parents between ${h.date(h.M.childMigrantsFrom)} and ${h.date(h.M.childMigrantsTo)} under the Commonwealth Child Migration Scheme, with a letter from the Child Migrants Trust;</li>
<li>people applying under the statelessness provision, section ${h.B.statelessSection} of the Australian Citizenship Act 2007.</li>
</ul>
<p>The panel under the summary tells you which of these, if any, fits, and what proof to send.</p>
<h2>A worked example</h2>
<p>Take a household of three: a mother of 52 who is the primary holder of a Pensioner Concession Card, her son of 17 listed as a dependant on that card, and her daughter of 11. The mother pays ${h.aud(h.F.generalConcession)} on form ${h.B.conferralForms.general} instead of ${h.aud(h.F.general)}. The son applies alone on form ${h.B.conferralForms.other} and pays ${h.aud(h.F.otherSituationsConcession)} instead of ${h.aud(h.F.otherSituations)}. The daughter goes on her mother's form at no charge. The family total is ${h.aud(h.F.generalConcession + h.F.otherSituationsConcession)}, against ${h.aud(h.F.general + h.F.otherSituations)} without the card.</p>
<h2>When the fee changes</h2>
<p>Home Affairs warns that citizenship fees usually rise on 1 July each year with indexation, and the concession amounts move with them. Several department pages still showed older amounts in October 2026, including ${h.aud(h.B.stalePage.generalConcession)} for the concession; form 1298i, which lists ${h.aud(h.F.generalConcession)}, is the schedule we follow. Applicants aged 60 or over should also read the ${h.a('over60', 'page for older applicants')}, since they use the other situations form.</p>`,
  },
});
