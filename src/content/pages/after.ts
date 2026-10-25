import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'after',
  group: 'after',
  order: 50,
  tool: { kind: 'mini:passport' },
  mini: { kind: 'mini:dual' },
  related: ['certificate', 'ceremony', 'responsibilities', 'dual', 'parliament', 'renounce'],
  sources: ['au_ceremony', 'au_pr', 'au_ocb_pdf'],
  en: {
    slug: 'after-becoming-a-citizen',
    nav: 'After you become a citizen',
    card: 'Passport, enrolling to vote, travel and jury duty: the first weeks after the pledge.',
    title: 'After Becoming an Australian Citizen: Passport, Vote, Travel',
    description: 'After the pledge: wait 10 days before applying for a passport, enrol to vote from 18, travel on your Australian passport and know the duties you now have.',
    h1: 'After you become an Australian citizen: the first steps',
    intro: 'Enter your age to see what applies now. The checklist below covers the passport, voting, travel and your new duties.',
    resume: (h) => `You become an Australian citizen at the moment you make the pledge, and a few practical steps follow. Keep your citizenship certificate safe: it is the evidence you need for an Australian passport, which you can apply for once you hold it, waiting at least ${h.M.passportWaitDays} days after the ceremony so that your details reach the system, as Home Affairs advises. From then on, Australian citizens should use their Australian passport to leave and enter Australia. If you are 18 or older you must enrol to vote, and voting in federal, state and territory elections and referendums is compulsory; new citizens aged 16 and over receive an enrolment sheet at the ceremony. Citizenship also brings other duties described in Our Common Bond, such as serving on a jury if called and defending Australia should the need arise, and privileges such as standing for parliament, applying for public service jobs and seeking consular help overseas. Australia has allowed dual citizenship since ${h.date(h.H.dualFrom)}, but your other country's law decides whether you keep its nationality.`,
    faqs: (h) => [
      { q: 'How soon can I apply for an Australian passport after the ceremony?', a: `Once you have your citizenship certificate. Home Affairs advises waiting at least ${h.M.passportWaitDays} days after the pledge before applying online with the Australian Passport Office, because your citizenship details can take time to appear in the system. People who resume citizenship apply once they have received evidence from the department.` },
      { q: 'Do I have to enrol to vote after becoming a citizen?', a: 'Yes, if you are 18 or older. Enrolling and voting are compulsory for adult citizens in federal, state and territory elections and in referendums. At the ceremony, new citizens aged 16 and over receive an Australian Electoral Commission sheet with a QR code to enrol online; forms are also available from the commission.' },
      { q: 'Can I keep my old passport after becoming Australian?', a: `Australia does not ask you to give up another citizenship: dual citizenship has been possible since ${h.date(h.H.dualFrom)}. Whether you keep your other nationality depends on that country's law. Home Affairs says Australian citizens should use their Australian passport to travel into and out of Australia.` },
    ],
    body: (h) => `
<h2>Checklist for the first month</h2>
${h.table(['Step', 'When', 'Detail'], [['Keep the certificate safe', 'at the ceremony', 'flat, unmarked, never laminated'], ['Apply for an Australian passport', `at least ${h.M.passportWaitDays} days after the pledge`, 'the certificate is your proof of citizenship'], ['Enrol to vote', 'now if 18 or over', 'compulsory; QR code sheet given at the ceremony'], ['Update records', 'when convenient', 'employer, bank or agencies that recorded you as a permanent resident'], ['Plan travel on the new passport', 'from the first trip', 'Australian citizens use the Australian passport to enter and leave']], 'From the Home Affairs ceremony and permanent resident pages.', ['l', 'l', 'l'])}
<h2>Passport and travel</h2>
<p>The citizenship certificate is what the Australian Passport Office asks for as proof of citizenship. Home Affairs advises waiting at least ${h.M.passportWaitDays} days after the ceremony before applying online, because your new status takes time to appear in the system. Until you hold the Australian passport, think twice about travelling: Australian citizens are expected to use their Australian passport to enter and leave the country. If you had to travel between approval and the ceremony, you did so on your current passport with a valid visa to return, as the ${h.a('travel', 'page on travel while waiting')} explains.</p>
<h2>Voting and elections</h2>
<p>Part 2 of ${h.src('au_ocb_pdf', 'Our Common Bond')} lists voting as a responsibility of citizens: those aged 18 or over must enrol and vote in federal, state and territory elections and in referendums. At the ceremony, every new citizen aged 16 and over receives an Australian Electoral Commission enrolment sheet with a QR code. You can also enrol with a form from any commission office. The ${h.a('parliament', 'page on parliament and voting')} explains how the system works.</p>
<h2>Duties and privileges</h2>
<p>Our Common Bond lists the responsibilities of citizens: obeying the law, voting, defending Australia should the need arise, and serving on a jury if called. It also lists privileges: voting, applying for children born overseas to become citizens by descent, seeking election to parliament (for citizens aged 18 or over who are not dual citizens), applying for an Australian passport, asking for consular help overseas and applying for work in the Australian Public Service or the defence force. The ${h.a('responsibilities', 'responsibilities page')} goes through each one.</p>
<h2>Children born later</h2>
<p>A child born in Australia after you become a citizen is an Australian citizen by birth, because a parent was a citizen at the time of birth. A child born overseas can apply for citizenship by descent; the ${h.a('descent', 'descent page')} covers the form and the fee of ${h.aud(h.F.descent)}.</p>
<h2>Keeping or losing citizenship</h2>
<p>Australian citizenship is not lost by taking another citizenship today, since dual citizenship has been allowed since ${h.date(h.H.dualFrom)}. It can be given up voluntarily by renunciation, at ${h.aud(h.F.renunciation)}, and in some circumstances regained by resumption. The ${h.a('renounce', 'renunciation page')} and the ${h.a('dual', 'dual citizenship page')} explain both.</p>`,
  },
});
