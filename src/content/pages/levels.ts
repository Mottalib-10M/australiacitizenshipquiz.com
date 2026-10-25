import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'levels',
  group: 'study',
  order: 110,
  tool: { kind: 'quiz', props: { mode: 'practice', topic: 'levels', n: 10, scopeSelect: false } },
  mini: { kind: 'mini:whichlevel' },
  related: ['part3', 'parliament', 'executive', 'states', 'constitution', 'courts'],
  sources: ['au_ocb_pdf', 'au_ocb'],
  en: {
    slug: 'three-levels-of-government',
    nav: 'Three levels of government',
    card: 'Federal, state or territory, and local: who runs what, from defence to rubbish collection.',
    title: 'Three Levels of Government in Australia: Who Does What',
    description: 'Three levels of government for the citizenship test: what the Australian Government, states and territories, and local councils each handle, and common traps.',
    h1: 'The three levels of government: federal, state or territory, and local',
    intro: 'Ten questions on who provides which service. Then use the tool below: choose a service and see which level is responsible.',
    resume: (h) => `Australia has three levels of government, and Our Common Bond says that, although some responsibilities overlap, each level generally provides different services. The Australian Government, also called the Federal or Commonwealth Government, handles taxation, national economic management, immigration and citizenship, employment assistance, postal services and communications, social security, defence, trade and commerce, airports and air safety, and foreign affairs. The ${h.A.states} state and ${h.A.mainlandTerritories} territory governments, each with its own parliament and based in its capital, are mainly responsible for hospitals and health, schools, roads and railways, forestry, police and ambulance services and public transport. Local councils, which may be called cities, shires, towns or municipalities, look after street signs, local roads and footpaths, drains, parks and pools, rubbish collection, libraries, building permits, food inspection, noise and animal control and local environmental issues; in the ACT, the territory government does this. Our bank has ${h.inTopic('levels')} questions on this topic.`,
    faqs: (h) => [
      { q: 'Who looks after local services in Canberra?', a: 'The Australian Capital Territory Government. The booklet lists the services of local government and adds the ACT Government in brackets next to local councils, because the states and the Northern Territory are divided into local government areas with councils, while in the ACT the territory government handles those local matters itself.' },
      { q: 'Are the three levels of government the same as the three powers?', a: 'No, and confusing them is one of the most common slips in Part 3. The three levels are federal, state or territory, and local: they divide services by geography. The three powers are legislative, executive and judicial: they divide the work of government by function, so that no person or group holds all the power.' },
      { q: 'Do I vote at every level of government?', a: 'Citizens vote in federal elections and in state or territory elections, where voting is compulsory, and they elect local councillors too. The booklet notes that voting may not be compulsory in local government elections in some states. Each level has elected representatives: MPs and senators, state or territory members, and councillors.' },
    ],
    body: (h) => `
<h2>The three lists from the booklet</h2>
${h.table(['Australian Government', 'State and territory governments', 'Local government (and the ACT Government)'], [
  ['taxation', 'hospitals and health services', 'street signs, traffic controls'],
  ['national economic management', 'schools', 'local roads, footpaths, bridges'],
  ['immigration and citizenship', 'roads and railways', 'drains'],
  ['employment assistance', 'forestry', 'parks, playgrounds, pools, sports grounds'],
  ['postal services, communications', 'police and ambulance services', 'camping grounds, caravan parks'],
  ['social security', 'public transport', 'food and meat inspection'],
  ['defence', '', 'noise and animal control'],
  ['trade and commerce', '', 'rubbish collection'],
  ['airports and air safety', '', 'libraries, halls, community centres'],
  ['foreign affairs', '', 'building permits, social planning, local environment'],
], 'Part 3 of Our Common Bond, "What do the three levels of government do?"', ['l', 'l', 'l'])}
<h2>A rule of thumb that works</h2>
<p>Ask how far the service reaches. If it concerns Australia as a whole or its relations with the world (borders, money, the armed forces, other countries, the post, pensions), it is federal. If it concerns people's daily lives across a whole state (where children study, where the sick are treated, how people travel, who answers an emergency call), it is state or territory. If it concerns your street (bins, footpaths, the park, the local library, whether you may build a shed), it is local. The tool below lets you test any service from the booklet's lists against this rule.</p>
<h2>Who leads each level</h2>
<ul>
<li><strong>Australian Government</strong>: led by the Prime Minister; its Parliament has two Houses, the House of Representatives and the Senate.</li>
<li><strong>States</strong>: each has its own parliament and constitution, led by a Premier, with a Governor representing the King.</li>
<li><strong>Territories</strong>: led by a Chief Minister; in the Northern Territory an Administrator, appointed by the Governor-General, has a role like a Governor's.</li>
<li><strong>Local government</strong>: a council of elected councillors, led by a Mayor or Shire President.</li>
</ul>
<h2>States versus territories</h2>
<p>A subtle point the booklet makes in this section: states have rights recognised by the Constitution and can pass laws in their own right, whereas laws made by self-governing territories can be altered or revoked by the Australian Government at any time. This explains why questions sometimes ask what distinguishes a state from a territory. The answer is not size or population but constitutional status. The ${h.a('states', 'states and territories page')} lists all eight with their capitals.</p>
<h2>Traps in this topic</h2>
<p>Police are a state and territory matter, but there is also a national force, the Australian Federal Police, which investigates crimes against federal laws and polices the ACT; see the ${h.a('courts', 'courts and police page')}. Road and traffic rules belong to the states and territories, yet local roads and footpaths belong to councils. Taxes are collected by all three levels: the booklet says state and territory governments and local councils also collect taxes to pay for services, even though taxation as a policy area appears in the federal list. Read the question carefully for words like "mainly" or "local".</p>
<h2>Why the booklet bothers with this</h2>
<p>Knowing which level does what is practical as well as testable. When a pothole appears in your street you call the council; when a school or hospital question arises you deal with the state or territory; for a pension, a tax matter or citizenship itself, you deal with the Australian Government. New citizens who understand the split also know which representative to contact about a concern, whether a councillor, a state member or a federal MP or senator.</p>
<h2>Learning the lists</h2>
<p>The lists are on page 29 of the ${h.src('au_ocb_pdf', 'testable section')}. Copy them into three columns, then cover two columns and recall them from the third. Repeat with the order shuffled. The practice set above mixes services from all three lists, and every explanation names the level, so a few rounds settle the topic.</p>`,
  },
});
