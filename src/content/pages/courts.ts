import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'courts',
  group: 'study',
  order: 150,
  tool: { kind: 'quiz', props: { mode: 'practice', topic: 'courts', n: 10, scopeSelect: false } },
  mini: { kind: 'mini:court' },
  related: ['part3', 'constitution', 'responsibilities', 'part4', 'levels', 'character'],
  sources: ['au_ocb_pdf', 'au_ocb'],
  en: {
    slug: 'courts-laws-and-police',
    nav: 'Courts, laws and police',
    card: 'Independent courts, juries, police and the AFP, serious crimes, family violence and road rules.',
    title: 'Courts, Laws and Police in Australia: Citizenship Test Facts',
    description: 'Courts, laws and police for the citizenship test: independent judges, juries, innocent until proven guilty, state police and the AFP, crimes and road rules.',
    h1: 'Courts, laws and police: how laws are enforced in Australia',
    intro: 'Ten questions on courts, police and offences. The tool under the summary tells you who carries out each step of the justice process.',
    resume: (h) => `The last section of Part 3 of Our Common Bond explains how laws are enforced. Courts are independent: they decide whether a person has broken the law and set the penalty, using only the evidence before them. Judges and magistrates are the highest authority in a court; the government appoints them but cannot remove them for decisions it dislikes. People are innocent until found guilty and may be represented by a lawyer. In some cases a jury of ordinary citizens, chosen at random, decides guilt after the judge explains the law; in a criminal trial the judge then sets the penalty. Police keep the peace, protect life and property, are independent of the government and can arrest suspects; each state and the Northern Territory has its own force, and the Australian Federal Police handles federal crimes and policing in the ACT. Offering a bribe to police is a crime, and ignorance of the law is no excuse. Our bank has ${h.inTopic('courts')} questions on this topic.`,
    faqs: (h) => [
      { q: 'Does the Australian Federal Police replace state police?', a: 'No. Each state and the Northern Territory has its own police force dealing with crimes under state and territory law. The Australian Federal Police is the national force: it investigates crimes against federal laws, such as drug trafficking, crimes against national security and crimes against the environment, and it also carries out general policing in the Australian Capital Territory.' },
      { q: 'Can the police decide that someone is guilty?', a: 'No. The police may arrest a person they believe has broken the law and bring them before a court, and they may give evidence. But the booklet is clear that the court decides whether a person is guilty or not. Separating the roles of police and courts protects the presumption that people are innocent until found guilty.' },
      { q: 'Which serious crimes does the booklet list?', a: 'Murder, assault, sexual assault, violence against people or property, armed robbery or theft, sexual relations with anyone under the legal age of consent, dangerous driving, possession of illegal drugs and fraud. It adds that domestic and family violence is a very serious crime whether committed by a man or a woman, and that anyone in danger should contact the police.' },
    ],
    body: (h) => `
<h2>Who does what</h2>
${h.table(['Actor', 'Role according to the booklet'], [
  ['Courts', 'independent; decide if the law was broken and the penalty, on the evidence alone'],
  ['Judges and magistrates', 'highest authority in a court; appointed by government, cannot be removed for their decisions'],
  ['Jury', 'ordinary citizens chosen at random; decide innocent or guilty in some cases'],
  ['Police', 'keep peace and order, protect life and property; independent of government; can arrest'],
  ['Australian Federal Police', 'federal crimes (drug trafficking, national security, environment); policing in the ACT'],
  ['High Court of Australia', 'ultimate power to apply and interpret the law'],
], undefined, ['l', 'l'])}
<h2>Principles to remember</h2>
<ul>
<li><strong>Innocent until proven guilty.</strong> A person is considered innocent until a court finds them guilty.</li>
<li><strong>Right to a lawyer.</strong> Everyone may be represented by a lawyer in court.</li>
<li><strong>Independence.</strong> Nobody can tell a judge or magistrate what to decide; police and courts are independent of the government.</li>
<li><strong>No excuse of ignorance.</strong> You can be charged for breaking a law even if you did not know it existed.</li>
<li><strong>No bribes.</strong> Bribing the police is a serious crime, and even offering a bribe is a crime.</li>
</ul>
<h2>Jury trials, step by step</h2>
<p>Jury service is listed in Part 2 as a responsibility of citizens aged ${h.A.voteAge} or over who are on the electoral roll. Part 3 explains what happens in court. The jury is a group of ordinary citizens chosen at random from the general population. The judge explains the law to them. They listen to the evidence and decide whether the accused is innocent or guilty. If they find the person guilty in a criminal trial, the judge, not the jury, decides the penalty. Questions often test that last split.</p>
<h2>Family violence</h2>
<p>The booklet gives this subject unusual space. Everyone has the right to safe and positive relationships. Violence towards another person is illegal and very serious, including inside the home and within marriage. Domestic and family violence covers behaviour or threats that aim to control a partner through fear or threats to their safety: hitting, cutting a family member off from friends and family, or threatening children or pets. It is not accepted and is against the law, and an offender can go to jail whether a man or a woman. Anyone in danger, or who knows someone in danger, should contact the police.</p>
<h2>Road rules</h2>
<p>Road and traffic rules are set by state and territory governments, and breaking them can lead to a fine or prison. To drive you need a local driver's licence and a registered car. Everybody in a car must wear a seatbelt, and babies and young children need an approved car seat. Driving after taking drugs or above the blood alcohol limit is illegal, and so is using a hand-held mobile device while driving. These rules are a reminder that the law reaches daily habits, not only serious crime.</p>
<h2>Links with the values part</h2>
<p>Several of these points return in ${h.a('part4', 'Part 4')}: obeying a lawful request from the police, the strict age of consent, violence of any kind being illegal, and reporting suspected serious crimes or child abuse. If you know this page well, a fair number of values questions become straightforward too. For how good character is assessed in a citizenship application, a separate matter from the test, see the ${h.a('character', 'character requirement page')}.</p>
<h2>Revising</h2>
<p>Read pages 31 and 32 of the ${h.src('au_ocb_pdf', 'testable section')}, then use the tool below: pick each step of the justice process and say who performs it before revealing the answer. Finish with the practice set above.</p>`,
  },
});
