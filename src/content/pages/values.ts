import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'values',
  group: 'test',
  order: 60,
  tool: { kind: 'quiz', props: { mode: 'practice', values: true, n: 10, scopeSelect: false } },
  mini: { kind: 'mini:margin' },
  related: ['part4', 'changes', 'rights', 'passmark', 'test', 'mock'],
  sources: ['au_ocb_pdf', 'au_test', 'au_prepare'],
  en: {
    slug: 'australian-values-questions',
    nav: 'Values questions',
    card: 'The five questions that must all be right: drill them on their own, with explanations.',
    title: 'Australian Values Questions: Practice for the 5/5 Rule',
    description: 'Australian values questions for the citizenship test: practise the five that must all be right, on freedom, equality, rule of law and a fair go, each explained.',
    h1: 'Australian values questions: practise the part that allows no mistake',
    intro: 'Ten questions at a time drawn only from Part 4 of Our Common Bond, corrected one by one. In the real test, five of these must all be right.',
    resume: (h) => `Since ${h.date(h.T.valuesSince)}, every Australian citizenship test includes ${h.T.valuesQuestions} questions on Australian values, and all ${h.T.valuesQuestions} must be answered correctly, whatever the overall mark. They come from Part 4 of Our Common Bond, which describes values based on freedom, respect, fairness and equality of opportunity: commitment to the rule of law, parliamentary democracy, freedom of speech, of association and of religion, equality of all people under the law, including men and women, equality of opportunity and a fair go, and mutual respect and tolerance. The questions rarely ask for a definition. They put a situation and ask what the value means in practice: whether a religious rule can override Australian law, whether a peaceful protest is allowed, how a job should be filled, what to do when the police make a lawful request. The set above draws ten of our ${h.count.values} values questions at a time. Aim for ten out of ten, every time, before the appointment.`,
    faqs: (h) => [
      { q: 'What happens if I get one Australian values question wrong?', a: `You fail the test, even with ${h.T.questions - 1} correct answers out of ${h.T.questions}. Home Affairs sets two conditions: at least ${h.T.passPercent}% overall and all ${h.T.valuesQuestions} values questions right. The result screen will show a fail, and the department books another appointment at no cost, so the setback is time, not money.` },
      { q: 'Are the values questions harder than the others?', a: 'Not in content, since Part 4 is one of the shortest parts of the booklet. They feel harder because there is no room for a slip and because the wrong options can sound reasonable. Reading Part 4 closely and practising until the right answer is obvious is the remedy.' },
      { q: 'Do I have to agree with Australian values to pass?', a: 'The test checks understanding of and commitment to the values as the booklet describes them, and the pledge at the ceremony is a public commitment to them. Whatever your private views, the answers expected are those the booklet gives: for example, that Australian law applies to everyone even where it differs from religious law.' },
    ],
    body: (h) => `
<h2>The values Part 4 describes</h2>
${h.table(['Value', 'What it means in a test question'], [['Commitment to the rule of law', 'everyone is equal before the law, nobody is above it, the law is obeyed even when nobody is watching'], ['Parliamentary democracy', 'laws are made by elected parliaments; power comes from the people; voting is compulsory'], ['Freedom of speech', 'ideas can be expressed freely within the law; peaceful protest is part of democracy; inciting violence is never acceptable'], ['Freedom of association', 'people may join or leave any lawful group; nobody can be forced to join'], ['Freedom of religion', 'no official religion; religious laws have no legal status; practices such as polygamy or forced marriage are illegal'], ['Equality under the law', 'equal rights regardless of gender, sexual orientation, age, disability, religion, race or origin'], ['Equality of opportunity, a fair go', 'jobs go to the best skills and experience, not gender, wealth or ethnicity'], ['Mutual respect and tolerance', 'violence and intimidation are illegal; disagreement is peaceful; racism has no place']], `Summary in our words of Part 4 of ${'Our Common Bond'} (testable section, CC BY 4.0).`, ['l', 'l'])}
<h2>How values questions are built</h2>
<p>Most values questions describe a short situation. A colleague is offered a promotion: should it go to the person with the best skills, or to the one with the right background? A group wants to protest against a government decision: may it, and on what condition? A family's religious custom conflicts with Australian law: which applies? The answer is always the one the booklet gives, and the wrong options are built to sound like common opinions. That is why reading ${h.src('au_ocb_pdf', 'Part 4 of Our Common Bond')} itself, slowly, beats reading summaries of it.</p>
<h2>The traps that cost people the test</h2>
<p><strong>"Only when" answers.</strong> Options such as "obey the law only when the police are present" or "free speech only for citizens" add a condition that the booklet does not. The values apply to everyone in Australia, all the time.</p>
<p><strong>Freedom without limits.</strong> Freedom of speech and of association are real, but within the law: protests must be peaceful, speech must not incite violence, and making false allegations is illegal. An option that treats a freedom as unlimited is wrong.</p>
<p><strong>Culture or religion over the law.</strong> The booklet says religious laws have no legal status in Australia and that Australian law must be followed where it differs. Any option that lets a custom override the law is wrong.</p>
<p><strong>Equality read as sameness.</strong> Equality of men and women means equal rights and equal opportunity, including in education, work, voting, the defence force, the police and the courts; it does not mean ignoring skills. Jobs go to the best qualified person.</p>
<h2>How to train for five out of five</h2>
<p>Treat the values questions as a separate exam. Practise sets of ten until you score ten several times in a row, then mix them back into ${h.a('mock', 'full timed tests')}. Read the explanation even when you were right, because the reasoning carries over to new situations. If a question surprises you, look up the value in the booklet and read the whole paragraph around it. The ${h.a('part4', 'Part 4 page')} goes through the community side of the values too: making a contribution, mateship and helping those in need.</p>
<h2>Since when the rule applies</h2>
<p>The values questions and the all-five rule were introduced for tests taken on or after ${h.date(h.T.valuesSince)}, together with revised questions and an updated booklet. Before that date, the test had no separate values condition. The ${h.a('changes', 'page on test changes')} compares the two rules on the same set of answers.</p>`,
  },
});
