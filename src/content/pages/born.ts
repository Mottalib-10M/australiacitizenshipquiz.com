import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'born',
  group: 'eligibility',
  order: 80,
  tool: { kind: 'mini:born' },
  mini: { kind: 'mini:evidence' },
  related: ['citizenship', 'children', 'descent', 'certificate', 'after'],
  sources: ['au_birth', 'au_evidence', 'au_processing', 'au_1298i', 'au_test'],
  en: {
    slug: 'born-in-australia',
    nav: 'Born in Australia',
    card: 'When a baby born in Australia is a citizen at birth, when at age 10, and how to prove it.',
    title: 'Born in Australia: Citizenship by Birth and the 10-Year Rule',
    description: 'Born in Australia: a citizen at birth if a parent was a citizen or permanent resident, or at age 10 after living here. The 1986 change and how to prove it.',
    h1: 'Born in Australia: when a child is a citizen by birth',
    intro: 'Answer two questions to see whether you, or your child, became a citizen at birth or on the tenth birthday, then see what proof costs.',
    resume: (h) => `Being born in Australia does not make every child an Australian citizen. Home Affairs explains that the answer depends on the date of birth. Most children born in Australia before ${h.date(h.M.birthRuleFrom)} are citizens by birth, unless a parent had diplomatic privileges or was a consular officer of another country. A child born on or after that date is a citizen at birth only if at least one parent was an Australian citizen or a permanent resident on the day of the birth. A child born here to parents who were neither, for example two temporary visa holders, automatically becomes a citizen on the ${h.M.bornResidentYears}th birthday if they have lived most of their life in Australia. No application is needed in either case, but there is no certificate either: proof is the full birth certificate plus the parent’s status, or an evidence of citizenship certificate on form ${h.B.evidenceForm}, which costs ${h.aud(h.F.evidence)} on form 1298i and is decided in ${h.PT.table.evidenceDecision.p90} or less for nine applications in ten.`,
    faqs: (h) => [
      { q: 'Is a baby born in Australia to parents on temporary visas a citizen?', a: `Not at birth, if born on or after ${h.date(h.M.birthRuleFrom)}. At that point the baby is not a citizen. If the child then lives most of the first ${h.M.bornResidentYears} years in Australia, citizenship arrives automatically on the tenth birthday. If a parent becomes a permanent resident before that, the child can be included in that parent’s later citizenship application.` },
      { q: 'I was born in Sydney in 1980 to visiting parents. Am I a citizen?', a: `Probably yes. Home Affairs says most children born in Australia before ${h.date(h.M.birthRuleFrom)} are citizens by birth, whatever the parents’ visas, unless a parent had diplomatic privileges or was a consular officer of another country. To prove it, apply for evidence of citizenship with your full Australian birth certificate; the department checks the facts and issues a certificate.` },
      { q: 'Does a baby born in Australia need a citizenship certificate to get a passport?', a: 'Not necessarily. A citizen by birth has no certificate, because nothing was granted. The full birth certificate, with evidence of a parent’s citizenship or permanent residence on the birth date, is what shows the child’s status. An evidence of citizenship certificate is an optional, official confirmation that some families get to avoid gathering the parent’s papers each time.' },
    ],
    body: (h) => `
<h2>Three rules, set by the date of birth</h2>
${h.table(['Born in Australia', 'Citizen?', 'When'], [[`before ${h.date(h.M.birthRuleFrom)}`, 'yes, in most cases', 'at birth (not children of foreign diplomats or consular officers)'], [`on or after ${h.date(h.M.birthRuleFrom)}, a parent a citizen or permanent resident`, 'yes', 'at birth'], [`on or after ${h.date(h.M.birthRuleFrom)}, neither parent a citizen or permanent resident`, 'not at birth', `on the ${h.M.bornResidentYears}th birthday, after living most of that time in Australia`]], `From the ${h.date(h.P.retrieved_at)} reading of the Home Affairs help text on citizenship by birth.`, ['l', 'l', 'l'])}
<p>The ${h.src('au_birth', 'Home Affairs explanation')} is short, and its key word is the date. A birth before ${h.date(h.M.birthRuleFrom)} falls under the old, broad rule; a birth on or after it falls under the parent rule and the ten-year rule. Everything else on this page follows from those two dates.</p>
<h2>The parent rule</h2>
<p>For a birth on or after ${h.date(h.M.birthRuleFrom)}, one parent is enough, and the test is that parent’s status on the day of birth. A citizen by any route counts: born here, by descent, by conferral. A permanent resident counts too, so a baby born a week after a parent’s permanent visa was granted in Australia is a citizen, while a baby born a week before is not. A parent who becomes a permanent resident or citizen later does not change the child’s status at birth; the child then needs the ten-year rule, or an application of their own.</p>
<h2>The ten-year rule</h2>
<p>A child born in Australia to parents who were neither citizens nor permanent residents automatically becomes a citizen on the ${h.M.bornResidentYears}th birthday, provided they have lived most of their life in Australia. There is no form and no fee; the change happens by law. It matters for families who stayed on temporary or bridging visas for years, and for children whose parents never regularised their stay. To prove it later, the child applies for evidence of citizenship with records of their life in Australia, such as school enrolments.</p>
<h2>Stateless children born here</h2>
<p>A child born in Australia who has never been a citizen of any country and is not entitled to another nationality can apply for citizenship by conferral. Home Affairs lists such applicants among those who do not sit the citizenship test and are not required to attend a ceremony, and no fee is charged under the statelessness provision, section ${h.B.statelessSection} as named on form 1298i.</p>
<h2>Getting proof: evidence of citizenship</h2>
<p>A citizen by birth was never granted anything, so has no certificate. Most people never need one: a full birth certificate with the parent’s status does the job. Others prefer a single document. The ${h.src('au_evidence', 'evidence of citizenship application')} on form ${h.B.evidenceForm} costs ${h.aud(h.F.evidence)}, nothing if a certificate was lost in a listed natural disaster within the last ${h.M.evidenceDisasterMonths} months. On the current table, half of these applications are decided in ${h.PT.table.evidenceDecision.p50} and nine in ten in ${h.PT.table.evidenceDecision.p90}, plus about ${h.PT.postageWeeksInAustralia} weeks for printing and postage in Australia.</p>
<!--tool:mini:evidence-->
<h2>Born overseas instead?</h2>
<p>A child born outside Australia to an Australian citizen parent is not a citizen automatically, but can apply by descent, usually soon after the birth. The ${h.a('descent', 'descent page')} explains it. A child born overseas to permanent residents becomes a citizen by conferral, usually on a parent’s form before age 16: see the ${h.a('children', 'children page')}. Once citizenship is established, the ${h.a('after', 'after citizenship page')} covers the passport and enrolling to vote at 18.</p>`,
  },
});
