import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'english',
  group: 'test',
  order: 120,
  tool: { kind: 'mini:assisted' },
  mini: { kind: 'mini:whosits' },
  related: ['languages', 'testday', 'exempt', 'sample', 'studyplan', 'test'],
  sources: ['au_test', 'au_prepare', 'au_ocb'],
  en: {
    slug: 'citizenship-test-english',
    nav: 'English and the Assisted Test',
    card: 'No separate English exam: the test itself checks basic English, with a headset and an Assisted Test.',
    title: 'Citizenship English Test: Level, Help and the Assisted Test',
    description: 'English for Australian citizenship: no separate language exam, basic English checked by the test itself, questions you can hear and a 90-minute Assisted Test.',
    h1: 'English and the Australian citizenship test',
    intro: 'Answer three questions: the tool tells you whether the standard or the Assisted Test is likely, and how long you will have.',
    resume: (h) => `Australia does not ask citizenship applicants for an English exam such as IELTS. The citizenship test is the language check: Home Affairs says passing it shows a basic knowledge of English, along with knowledge of Australia and of the values of citizenship. The test is in ${h.T.languageOnly} only, but the computers and tablets have headsets, and a candidate who cannot read English can choose to listen to the questions. Staff can help you read the screen or use the equipment if you ask. Candidates who requested help in their application and completed at least ${h.num(h.T.assistedAmepHours)} hours of English tuition under the Adult Migrant English Program, or who have an impairment needing extra time, may be offered the Assisted Test, with ${h.T.assistedMinutes} minutes instead of ${h.T.minutes}. The study booklet, Our Common Bond, exists in ${h.T.ocbLanguages} community languages, so the facts can be learned in your own language before practising them in English.`,
    faqs: (h) => [
      { q: 'Do I need IELTS or another English test for Australian citizenship?', a: 'No. For citizenship by conferral, Home Affairs uses the citizenship test itself to check a basic knowledge of English. An English test may have been part of an earlier visa, but there is no separate language certificate in the citizenship application. Applicants aged 16 or 17 may have basic English checked at an interview instead.' },
      { q: 'Can I take the citizenship test in my own language?', a: `No. The test is in ${h.T.languageOnly} only. What you can do is study the booklet in your language, since it is published in ${h.T.ocbLanguages} community languages, then practise in English so the words of the test are familiar. On the day, the headset lets you hear each question if reading is the harder part.` },
      { q: 'What is the Assisted Test?', a: `A version of the citizenship test with ${h.T.assistedMinutes} minutes instead of ${h.T.minutes}. Home Affairs may offer it if you asked for help in your application and either completed at least ${h.num(h.T.assistedAmepHours)} hours of English tuition under the Adult Migrant English Program, or have an impairment at the time of the test that means you need extra time.` },
    ],
    body: (h) => `
<h2>What "basic English" means here</h2>
<p>The level is set by the test, not by a scale. If you can read a short question, understand three or four short answers and choose one in about two minutes, you have the English the test needs. The questions use the vocabulary of ${h.src('au_ocb', 'Our Common Bond')}: parliament, referendum, Constitution, rule of law, freedom of association. Those words are the real hurdle, more than grammar, and they can be learned like any list.</p>
<h2>Help on the day</h2>
${h.table(['Help', 'Who can have it'], [['Headset to listen to the questions', 'any candidate who prefers to hear them'], ['Help to read the screen or use the computer', 'any candidate who tells staff'], [`Assisted Test, ${h.T.assistedMinutes} minutes`, `help asked for in the application, plus ${h.num(h.T.assistedAmepHours)} AMEP hours or an impairment`], ['A helper sitting with you', 'nobody: the test is sat alone']], `Home Affairs test page, updated ${h.date(h.T.pageUpdated)}.`, ['l', 'l'])}
<h2>Learning the facts in your language first</h2>
<p>Home Affairs translates the booklet into ${h.T.ocbLanguages} community languages, and offers a podcast version in English. A good method for candidates whose English is still developing: read a part of the booklet in your language to understand it, read the same part in English to learn the words, then do the ${h.a('part1', 'practice sets for that part')} in English. The ${h.a('languages', 'page on the translated booklet')} explains how to use the two versions together. The department also points learners to AMEP Online, its free English site with easy material on the citizenship test.</p>
<h2>A short word list worth knowing</h2>
<p>These words appear again and again in the testable section: <em>Commonwealth</em> (the federal level of government), <em>Governor-General</em> (the King's representative), <em>House of Representatives</em> and <em>Senate</em> (the two houses of federal parliament), <em>referendum</em> (a vote to change the Constitution), <em>rule of law</em>, <em>jury</em>, <em>compulsory voting</em>, <em>mateship</em>, <em>fair go</em>. Each one is explained in the booklet's glossary. When a practice question uses a word you do not know, look it up before moving on.</p>
<h2>Practising reading speed</h2>
<p>Take the ${h.a('mock', 'timed mock test')} with the clock on. If you finish with less than ten minutes left, practise reading questions aloud and predicting the answer before you look at the options; it speeds things up and is close to the experience of listening through the headset. If speed stays a problem and you completed AMEP tuition, mention it when you ask for help: the Assisted Test exists for that case.</p>
<h2>Teenagers and seniors</h2>
<p>Applicants aged 16 or 17 do not sit the test, but an officer may check their basic English at an interview. Applicants aged ${h.T.ages[1] + 1} or over do not sit the test and are not checked on English; they may be interviewed to confirm they understand the application, and an interpreter can be arranged. The ${h.a('exempt', 'exemptions page')} lists every group that skips the test.</p>`,
  },
});
