import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'languages',
  group: 'study',
  order: 180,
  tool: { kind: 'mini:assisted' },
  mini: { kind: 'mini:ocblang' },
  related: ['english', 'ocb', 'studyplan', 'testday', 'part1', 'exempt'],
  sources: ['au_ocb', 'au_test', 'au_prepare', 'au_ocb_pdf'],
  en: {
    slug: 'our-common-bond-languages',
    nav: 'Booklet in other languages',
    card: 'The 40 translations of the testable section, how to study bilingually, and why the test stays in English.',
    title: 'Our Common Bond in Other Languages: 40 Translations Listed',
    description: 'Our Common Bond is translated into 40 community languages, from Arabic to Vietnamese, but the citizenship test is in English. How to use a translation well.',
    h1: 'Our Common Bond in your language, the test in English',
    intro: 'Check first which version of the test is likely for you. Further down, look up whether the booklet is published in your language.',
    resume: (h) => `Home Affairs publishes the testable section of Australian Citizenship: Our Common Bond in English and in ${h.T.ocbLanguages} community languages, among them Arabic, Chinese (simplified and traditional), Dari, Hindi, Nepali, Persian, Spanish, Tamil, Urdu and Vietnamese. The translations exist to help people prepare, but the citizenship test itself is conducted in ${h.T.languageOnly} only and all its questions are based on the booklet. On the day, the computers and tablets have headsets so a candidate who cannot read English can listen to each question. Applicants who asked for help in their application and completed at least ${h.num(h.T.assistedAmepHours)} hours of English tuition under the Adult Migrant English Program, or who have an impairment needing extra time, may be offered an Assisted Test lasting ${h.T.assistedMinutes} minutes instead of ${h.T.minutes}. The sensible method is to understand the facts in your own language, then learn them in English, because the English wording is what you will see on screen.`,
    faqs: (h) => [
      { q: 'Is the translated booklet word for word the same as the English one?', a: 'It is a translation of the same testable section, published on the same Home Affairs page, so it contains the same facts. The questions in the test are written in English, though, and some terms such as Royal Assent, electorate or fair go have no perfect equivalent. Check those terms in the English glossary after reading the translation.' },
      { q: 'Can an interpreter help me during the citizenship test?', a: 'No. Home Affairs says you cannot bring anyone to help you with the test. Interpreters are mentioned for interviews, not for the test itself. What you can ask for is help reading the screen or using the computer or tablet, and the headset lets you listen to the questions and answer options.' },
      { q: 'Which official listening resources exist for the booklet?', a: `Home Affairs lists the Our Common Bond podcast, an official practice test that looks like the real one, and the AMEPOnline citizenship modules, which teach the booklet with characters, storylines and activities for English learners. Together with the ${h.T.ocbLanguages} translations, these are the free resources the department points to.` },
    ],
    body: (h) => `
<h2>The ${h.T.ocbLanguages} languages</h2>
<p>The ${h.src('au_ocb', 'Home Affairs Our Common Bond page')} offers the testable section for download in the following community languages, in addition to English:</p>
${h.table(['Languages A to K', 'Languages K to Z'], (() => { const L = h.A.languages as string[]; const half = Math.ceil(L.length / 2); return Array.from({ length: half }, (_, i) => [L[i], L[i + half] ?? '']); })(), `List read on the Home Affairs page (updated ${h.date(h.A.ocbPageUpdated)}).`, ['l', 'l'])}
<p>The tool further down this page lets you pick a language and confirms whether a translation exists. If yours is missing, the English edition, read alongside the podcast, is the route the department offers.</p>
<h2>Why the test stays in English</h2>
<p>Home Affairs gives four aims for the test, and the first is to show a basic knowledge of the English language. That is why the translations are a study aid only: the department makes the facts accessible in other languages, then checks them in English. There is no separate language exam for citizenship, so the test does both jobs at once. The ${h.a('english', 'page on English and the Assisted Test')} explains the expected level and the support available in the test room.</p>
<h2>A bilingual study method</h2>
<ol>
<li><strong>Understand first.</strong> Read one part of the booklet in your language, without notes, so the ideas are clear.</li>
<li><strong>Read the same part in English.</strong> Keep the translation open beside it and underline the English words for each key fact: names of institutions, numbers, titles.</li>
<li><strong>Build a word list.</strong> The English glossary at the end of the testable section has ${h.A.glossaryTerms} entries with example sentences; these are the words the questions use.</li>
<li><strong>Practise only in English.</strong> Use the practice sets on the study pages, starting with ${h.a('part1', 'Part 1')}, so that you recognise facts in the form they will take on screen.</li>
<li><strong>Listen.</strong> If reading is slow, practise with listening too, since you can choose to hear the questions on the day.</li>
</ol>
<h2>Words that translate badly</h2>
<p>Some English terms in the booklet carry an Australian meaning that a translation may soften. Learn these in English even if you studied everything else in your language: fair go (equal opportunity, not equal income), mateship (helping each other in hard times), Royal Assent (the Governor-General's signature that turns a Bill into law), electorate (a district that elects a member of the House of Representatives), secular (separate from religion), double majority (the two conditions of a referendum) and Rule of Law (nobody is above the law). Each appears in our explanations, so meeting them in practice questions fixes them quickly.</p>
<h2>Support on the day</h2>
<p>The tool at the top of this page estimates whether the standard test or the Assisted Test is likely. In both, the test is in English, headsets are provided, staff can help you read the screen or use the equipment, and nobody may come in to help you. Children are not allowed in the test centre, and you need an original photo identity document; the ${h.a('testday', 'test day page')} has the full checklist.</p>
<h2>Free means free</h2>
<p>Every resource mentioned here is free from Home Affairs: the booklet in English and in translation, the podcast, the official practice test and the AMEPOnline modules. The department states that it does not endorse paid external products claiming to help with the test. Our own practice questions are free too, written from the ${h.src('au_ocb_pdf', 'English testable section')} under its open licence.</p>`,
  },
});
