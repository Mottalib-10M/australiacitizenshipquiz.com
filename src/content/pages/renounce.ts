import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'renounce',
  group: 'after',
  order: 60,
  tool: { kind: 'mini:renounce' },
  mini: { kind: 'mini:resume' },
  related: ['resume', 'dual', 'after', 'cost', 'certificate', 'citizenship'],
  sources: ['au_renounce', 'au_1298i', 'au_resume'],
  en: {
    slug: 'renounce-australian-citizenship',
    nav: 'Renouncing citizenship',
    card: 'Who can give up Australian citizenship, the $320 fee, the ex-citizen visa and review rights.',
    title: 'Renouncing Australian Citizenship: Rules, $320 Fee, Effects',
    description: 'Renouncing Australian citizenship in 2026: who can apply, why statelessness blocks it, the $320 fee on form 128, the ex-citizen visa and the way back.',
    h1: 'Renouncing Australian citizenship',
    intro: 'Answer one question above to see whether a renunciation can be approved, then read the conditions, the fee and what follows.',
    resume: (h) => `Renouncing Australian citizenship means asking Home Affairs to end it, on form 128. You may be eligible if you are already a citizen of another country, if you will be granted another citizenship as soon as the Australian one is cancelled, or if you were born or live in a country where you cannot become a citizen while you remain Australian. A renunciation that would leave you stateless is not approved. The fee on form 1298i of July 2026 is ${h.aud(h.F.renunciation)}; the Home Affairs page on giving up citizenship still shows an older ${h.aud(h.F.stale.renunciation)}. You stop being a citizen on the day the application is approved. If you are in Australia then, you automatically hold an ex-citizen visa, a permanent visa that does not allow re-entry, so a Resident Return visa is needed before travelling. You can no longer hold an Australian passport. If you renounced to keep or acquire another citizenship, or to avoid significant hardship, you may later be able to resume Australian citizenship.`,
    faqs: (h) => [
      { q: 'Why would anyone renounce Australian citizenship?', a: 'Home Affairs describes the typical cases: a person who must give it up to obtain or keep the citizenship of another country, or who lives in a country that does not allow its citizens to hold another nationality. Since Australia allows dual citizenship, renunciation is about the other country’s rules, not Australia’s.' },
      { q: 'Can I live in Australia after renouncing?', a: 'Yes, if you are in Australia when the renunciation is approved: you automatically become the holder of an ex-citizen visa, which is a permanent residence visa. It does not let you return after travelling, so apply for a Resident Return visa before leaving. Outside Australia, you need a passport and visa to come back.' },
      { q: 'How long does a renunciation take?', a: 'The Home Affairs page on giving up citizenship gives processing figures of 75% of applications within 11 months and 90% within 13 months, but the monthly processing table does not cover renunciations, so treat these as indicative. Incomplete forms, missing documents and checks can make it longer.' },
    ],
    body: (h) => `
<h2>Conditions</h2>
${h.table(['Condition', 'Detail'], [['Another citizenship', 'held already, or granted as soon as the Australian one is cancelled; adults must already hold it in the general case'], ['Or a legal obstacle abroad', 'born or living in a country where you cannot become a citizen while Australian'], ['No statelessness', 'the application is refused if you would be left without any citizenship'], ['Age', 'any age']], 'From the Home Affairs page on giving up citizenship.', ['l', 'l'])}
<h2>Fee and form</h2>
<p>The application is form 128. On ${h.src('au_1298i', 'form 1298i')} of July 2026 the fee is ${h.aud(h.F.renunciation)}. The ${h.src('au_renounce', 'Home Affairs page on giving up citizenship')} still printed ${h.aud(h.F.stale.renunciation)} when we checked on ${h.date(h.P.retrieved_at)}; the fee form is the schedule set under the Australian Citizenship Regulation 2016 and is indexed every 1 July, so we follow it. Most people can apply online in ImmiAccount. A paper application is required for a concession fee, members of the Australian Defence Force, stateless people, people with no current or expired passport and people who have not travelled into or out of Australia since ${h.M.noTravelSince}.</p>
<h2>What happens on approval</h2>
<p>Citizenship ends on the day the department approves the application. From then on you cannot hold an Australian passport. If you are in Australia on that day, you automatically become the holder of an ex-citizen visa, with no application needed. It is a permanent residence visa but does not allow you to re-enter if you leave, so apply for a Resident Return visa before any trip. If you are outside Australia, you need a valid passport and a visa to travel to Australia.</p>
<h2>If the application is refused</h2>
<p>The department sends a letter giving the reasons. Home Affairs says you can ask the Administrative Review Tribunal to review the decision, and the letter states where to lodge the request and the time limit.</p>
<h2>Children and other family</h2>
<p>A renunciation affects only the person named on the application. Under the rules for resumption, a child whose citizenship was revoked when a responsible parent's citizenship ended may later be able to resume it; the ${h.a('resume', 'resumption page')} lists every case.</p>
<h2>Think twice, and check the way back</h2>
<p>Renouncing is final for the time being, but not always forever. Resumption is open to people who renounced so that they could acquire or keep another citizenship, or to avoid significant hardship or detriment, at ${h.aud(h.F.resumption)}. Someone who renounced for another reason would have to go through conferral again as a permanent resident, with the residence requirement, the test and the ceremony. If the only reason to renounce is the other country's law, check that law first: some countries have relaxed their rules on dual nationality. The ${h.a('dual', 'dual citizenship page')} explains Australia's position since ${h.date(h.H.dualFrom)}.</p>`,
  },
});
