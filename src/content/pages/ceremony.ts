import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'ceremony',
  group: 'after',
  order: 10,
  tool: { kind: 'frise:ceremony' },
  mini: { kind: 'mini:ceremonyday' },
  related: ['pledge', 'certificate', 'after', 'aftertest', 'day', 'processing'],
  sources: ['au_ceremony', 'au_ceremony_wait', 'au_processing'],
  en: {
    slug: 'citizenship-ceremony',
    nav: 'Citizenship ceremony',
    card: 'The invitation, who must attend, what to bring and wear, and the order of the day.',
    title: 'Citizenship Ceremony Australia: Invitation, Day and ID',
    description: 'The Australian citizenship ceremony: invitation about 4 weeks ahead, who must attend, photo ID, what to wear, the order of the day and the 12-month pledge rule.',
    h1: 'The Australian citizenship ceremony, from invitation to certificate',
    intro: 'Enter your approval date: the timeline places the likely ceremony window, the pledge and your first passport application. Then read who attends and what to bring.',
    resume: (h) => `For most people the citizenship ceremony is the last legal step: you become an Australian citizen at the moment you make the pledge of commitment, not when your application is approved. Anyone who was ${h.T.ages[0] - 2} or older when they applied must attend, unless they have a permanent or enduring incapacity. The invitation comes from your local council or from Home Affairs about ${h.R.invitationWeeksAhead} weeks before the event and gives the date, time and place, which you cannot choose. Allow at least ${h.M.ceremonyAllowHours} hours; the ceremony itself takes about ${h.M.ceremonyLengthHours} hour, with a formal introduction, speeches including a welcome message from the Minister, an address to participants, the pledge and the National Anthem. Bring the invitation and one photo ID. Nine in ten approved applicants have had the chance to attend a ceremony within ${h.PT.table.approvalToCeremony.p90} of approval, and the pledge must be made within ${h.R.pledgeWithinMonths} months of approval or the approval may be cancelled.`,
    faqs: (h) => [
      { q: 'Can I choose the date of my citizenship ceremony?', a: `No. Home Affairs says you cannot choose where and when to attend. Local councils usually arrange ceremonies, and your invitation, sent about ${h.R.invitationWeeksAhead} weeks ahead, sets the date, time and place. If you cannot attend, you receive a non-attendance letter and a later invitation, but places are limited and the wait can be longer.` },
      { q: 'Can I bring guests to the citizenship ceremony?', a: 'Usually, yes. The invitation tells you whether you can invite guests and how many. Guests might be seated apart from you. Family and friends can take photos during and after the ceremony as long as they do not disrupt others, and organisers or media may also photograph or film the event.' },
      { q: 'What should I wear to my citizenship ceremony?', a: 'Formal or smart casual clothing, as Home Affairs puts it, reflecting the importance of the occasion. National or cultural dress is welcome. If the ceremony is outdoors, take a hat and sunscreen. Your invitation may give more detail on the dress expected at that particular ceremony.' },
    ],
    body: (h) => `
<h2>Who has to attend</h2>
${h.table(['Situation', 'Ceremony'], [[`Applied by conferral aged ${h.T.ages[0] - 2} or over`, 'required'], [`Child under ${h.R.childExemptUnder}`, 'not required, welcome to attend and make the pledge'], ['Citizenship by descent or adoption', 'not required'], ['Resuming citizenship', 'not required'], ['Permanent or enduring incapacity', 'not required'], ['Born in Papua to an Australian-born citizen, born to a former citizen, stateless born in Australia', 'not required']], 'From the Home Affairs ceremony page.', ['l', 'l'])}
<p>People who do not attend receive their certificate by registered post once the application is approved.</p>
<h2>What to bring</h2>
<p>Bring the invitation and one form of photo identification: an Australian driver licence, a passport or another official document with a photograph. Documents not in English must come with official translations. Without photo ID, bring at least three documents showing your name and address, such as bank statements, utility bills or credit card statements. Children under ${h.R.childExemptUnder} need no photo ID. If you want to make the pledge on a holy book, bring your own.</p>
<h2>The order of the ceremony</h2>
<p>Your invitation says when to arrive to register and find your seat. Most ceremonies then follow the same order: a formal introduction; speeches, including a welcome message from the Minister; an address to participants; the pledge of commitment; and the National Anthem. Every ceremony has a presiding officer, who must be an Australian citizen and who reads a statement on the obligations of citizenship. When the presiding officer asks, you say the pledge out loud. You choose which version to say, with or without the words "under God"; the ${h.a('pledge', 'pledge page')} gives both texts.</p>
<h2>After the pledge</h2>
<p>You should receive your citizenship certificate at the ceremony; if it is not ready, it is posted to you. It is issued in the legal name you held when the application was approved and is your proof of citizenship, needed for an Australian passport. New citizens aged 16 and over receive an Australian Electoral Commission sheet with a QR code to enrol to vote, which is compulsory from 18. Wait at least ${h.M.passportWaitDays} days before applying for a passport online, so that your details reach the system. The ${h.a('after', 'page on the first weeks as a citizen')} covers passport, voting and travel.</p>
<h2>Waiting times and travel</h2>
<p>The time from approval to ceremony depends on your council. In the national figures updated on ${h.date(h.PT.pageUpdated)}, a quarter of approved applicants had a ceremony within ${h.PT.table.approvalToCeremony.p25}, half within ${h.PT.table.approvalToCeremony.p50} and nine in ten within ${h.PT.table.approvalToCeremony.p90}. Home Affairs also publishes ${h.src('au_ceremony_wait', 'wait times by council')}. If you must travel before the ceremony, tell the department, travel on your current passport and keep a visa that lets you return; an invitation can still fall while you are away, in which case you receive a non-attendance letter and a later invitation. Missing the ${h.R.pledgeWithinMonths}-month deadline without an acceptable reason can lead to the approval being cancelled.</p>`,
  },
});
