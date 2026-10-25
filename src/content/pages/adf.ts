import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'adf',
  group: 'eligibility',
  order: 170,
  tool: { kind: 'mini:adf' },
  mini: { kind: 'mini:adffamily' },
  related: ['residence', 'concession', 'online', 'special', 'discretion'],
  sources: ['au_pr', 'au_concession', 'au_1298i', 'au_act'],
  en: {
    slug: 'defence-service-exemption',
    nav: 'Defence service exemption',
    card: 'Ninety days of service can lift the residence rule, waive the fee and, for some visas, cover the family.',
    title: 'Defence Force Citizenship Exemption 2026: Residence and Fee',
    description: 'Defence Force service and citizenship: 90 days in the permanent forces or 90 paid reserve days, the residence exemption, the nil fee and family members.',
    h1: 'Defence service and the residence requirement',
    intro: 'Enter your days of service to see whether the residence exemption is open, then check whether it reaches your family.',
    resume: (h) => `Permanent residents who serve in the Australian Defence Force can be exempt from the general residence requirement of ${h.R.lawfulYears} years on a visa and ${h.R.prMonths} months as a permanent resident. The Australian Citizenship Act 2007 has a defence service requirement, and Home Affairs sets out the conditions: appointment, enlistment or transfer into the permanent forces or reserves, then ${h.R.adfDays} days of service in the permanent forces, or a total of ${h.R.adfDays} paid service days in the navy, army or air force reserve, or discharge as medically unfit as a result of that service. It also applies if the member died while serving. Service of at least ${h.R.adfDays} days in the permanent forces also removes the application fee, which otherwise stands at ${h.aud(h.F.general)} on form 1298i of July 2026. Family members share the residence exemption when the member holds a Labour Agreement or Employer Nomination visa (classes AU, BV, EN or RN) granted on or after ${h.date(h.M.adfFamilyVisasSince)} and they were granted the same visa as members of the family unit. Claims are made on paper.`,
    faqs: (h) => [
      { q: 'Do reserve days count towards the fee exemption as well?', a: `No. The fee exemption on form 1298i is for persons who served a total of at least ${h.R.adfDays} days in the permanent forces of the Commonwealth. Paid reserve days can satisfy the residence exemption, but a reservist who has not served ${h.R.adfDays} days in the permanent forces pays the normal fee of ${h.aud(h.F.general)}, or the concession fee with a Pensioner Concession Card.` },
      { q: 'I joined the ADF after migrating for another reason. Is my family covered?', a: 'Your own residence exemption is available once the service condition is met, but Home Affairs says family members are not covered if you migrated for another purpose and later joined the permanent forces or reserves. They also miss out if they came on a visa other than the listed AU, BV, EN or RN classes. They must then meet the general residence requirement.' },
      { q: 'What proof of service does Home Affairs want?', a: 'A letter or discharge papers from the Australian Defence Force or the Australian Reserve Force stating when you served. The same document supports the fee exemption, which needs ADF papers specifying service dates. Send certified copies with a paper application, since claiming the defence service residence exemption is one of the cases where online lodgement is not used.' },
    ],
    body: (h) => `
<h2>The service condition</h2>
<p>The exemption comes from the defence service requirement of the ${h.src('au_act', 'Australian Citizenship Act 2007')}, and Home Affairs spells out three ways to meet it on its ${h.src('au_pr', 'criteria page')}. You must have been appointed, enlisted or transferred into the permanent forces or the reserves, and then:</p>
<ul>
<li>served ${h.R.adfDays} days in the permanent forces; or</li>
<li>served a total of ${h.R.adfDays} paid service days in the navy, army or air force reserve; or</li>
<li>been discharged as medically unfit for service as a result of that service.</li>
</ul>
<p>The exemption also applies if the member died while undertaking that service, which matters for the family.</p>
<h2>What the exemption removes, and what it leaves</h2>
<p>It lifts the general residence requirement: no need for ${h.R.lawfulYears} years on a visa, no ${h.R.prMonths}-month wait as a permanent resident and no absence count. You must still be a permanent resident when you apply and when Home Affairs decides. The citizenship test, the character requirement, identity from birth and a close and continuing link to Australia all still apply. An Australian police check is requested from age ${h.R.afpCheckFromAge}.</p>
<h2>The fee</h2>
${h.table(['Service', 'Residence exemption', 'Application fee'], [[`${h.R.adfDays} days in the permanent forces`, 'yes', 'nil'], [`${h.R.adfDays} paid reserve days, no permanent service`, 'yes', h.aud(h.F.general)], ['Medical discharge caused by service', 'yes', `${h.aud(h.F.general)} unless ${h.R.adfDays} permanent days were served`], ['Less service than this', 'no', h.aud(h.F.general)]], `Fees from form 1298i (July 2026) for an applicant aged ${h.T.ages[0]} to ${h.T.ages[1]}; concession with a Pensioner Concession Card.`, ['l', 'l', 'r'])}
<p>The nil fee needs a letter or discharge papers giving your service dates. Fee exemptions are claimed on paper only, as the ${h.a('concession', 'concession and exemption page')} explains.</p>
<h2>When the family is exempt too</h2>
<p>Partners and children share the residence exemption in one situation. You were granted one of these visas on or after ${h.date(h.M.adfFamilyVisasSince)}: Labour Agreement (Migrant) class AU, Labour Agreement (Residence) class BV, Employer Nomination (Permanent) class EN or Regional Employer Nomination (Permanent) class RN. Your family members were granted the same type of visa as members of the family unit in your application. And you meet the service condition. The second tool on this page checks the three conditions.</p>
<h2>When the family is not exempt</h2>
<p>Home Affairs lists three cases in which you and your family cannot use the family exemption:</p>
<ul>
<li>family members came later on a visa outside the four listed classes;</li>
<li>you migrated for another purpose and only then joined the permanent forces or the reserves;</li>
<li>you are already a citizen automatically, for example by birth in Australia, or by registration.</li>
</ul>
<p>Family members in these cases use the ${h.a('residence', 'general residence requirement')}; children under 16 are exempt from it anyway when they are permanent residents.</p>
<h2>Applying</h2>
<p>Claiming the Australian Defence Service residence exemption is one of the situations in which Home Affairs asks for a paper application. Applicants aged ${h.T.ages[0]} to ${h.T.ages[1]} use form 1300t; the fee, if any, is prepaid through ImmiAccount’s My Payments section, and the form goes with certified copies of your documents and your service letter. The ${h.a('online', 'online or paper page')} explains certification.</p>
<h2>Serving members born in Australia</h2>
<p>Some ADF members are already citizens without knowing it. A person born in Australia to a citizen or permanent resident parent, or who lived in Australia for the first ${h.M.bornResidentYears} years of life, is a citizen automatically and needs no conferral application at all; evidence of citizenship is a separate request costing ${h.aud(h.F.evidence)}. Check this first on the ${h.a('born', 'birth in Australia page')}, because automatic citizens cannot use the family exemption described above.</p>`,
  },
});
