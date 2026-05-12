/* ═══════════════════════════════════════════
DATA
═══════════════════════════════════════════ */
const WONDERS = [
  {
    num: "I", icon: "🏛", name: "The Great Pyramids of Giza",
    loc: "Egypt, c. 2560 BC",
    text: "Standing for over 4,500 years as the tallest human-built structures on earth, the pyramids served as eternal tombs for divine pharaohs. The Great Pyramid of Khufu required an estimated 2.3 million stone blocks, each averaging 2.5 tonnes — a logistical feat that still defies full explanation."
  },
  {
    num: "II", icon: "🧱", name: "The Ziggurats of Mesopotamia",
    loc: "Sumer & Akkad, c. 2100 BC",
    text: "Massive stepped temple-mountains such as the Great Ziggurat of Ur functioned simultaneously as government bureaus, treasury vaults, and astronomical observatories. Their tiered structure symbolized the cosmic mountain connecting earth to the heavens, housing the city's patron deity at its summit."
  },
  {
    num: "III", icon: "🐉", name: "Bronze Ritual Vessels of Shang China",
    loc: "Shang Dynasty, c. 1600–1046 BC",
    text: "Shang craftsmen cast intricate bronze ding cauldrons, jue goblets, and fang yi boxes with breathtaking precision. Used in elaborate ancestral ceremonies, these vessels were believed to carry offerings — grain, wine, and livestock — directly to the spirits of deceased kings and nobles."
  },
  {
    num: "IV", icon: "🌺", name: "The Great Temple of Tenochtitlán",
    loc: "Aztec Empire, c. 1325–1521 CE",
    text: "The Templo Mayor rose 45 metres above the heart of the Aztec capital, its twin shrines dedicated to Huitzilopochtli (god of war) and Tlaloc (god of rain). Excavations beginning in 1978 revealed seven layers of construction and over 7,000 ritual objects entombed within its foundations."
  },
  {
    num: "V", icon: "🌿", name: "Stone Palaces of the Classic Maya",
    loc: "Mesoamerica, c. 250–900 CE",
    text: "Cities like Tikal and Palenque featured multi-storey palace complexes, carved stelas recording royal genealogies, and sophisticated subterranean aqueducts. Tikal's reservoir system could store enough water to sustain its population of 100,000 through long dry seasons."
  },
  {
    num: "VI", icon: "⛰", name: "Machu Picchu",
    loc: "Inka Empire, c. 1450 CE",
    text: "Perched 2,430 metres above sea level, this Inka citadel was assembled using earthquake-resistant mortarless masonry — stones cut so precisely that a knife blade cannot be inserted between them. Its agricultural terraces, solar observatory, and sacred Intihuatana stone reveal a civilization of extraordinary sophistication."
  },
  {
    num: "VII", icon: "🎨", name: "The Urban Art of the Yoruba",
    loc: "West Africa, c. 500 CE–1500 CE",
    text: "The Yoruba city of Ile-Ife produced naturalistic bronze and terracotta portrait heads of astonishing realism — centuries before European Renaissance sculpture. Their city planning, palace compounds, and trade networks established one of the ancient world's most vibrant urban civilizations."
  },
];
const EMPIRES = [
  {
    era: "c. 508 BC", name: "The Golden Age of Greece",
    body: "Under statesman Cleisthenes, Athens introduced demokratia — 'rule by the people' — for the first time in recorded history. Citizens debated law in open assemblies, while philosophers like Socrates, Plato, and Aristotle laid the intellectual foundations for Western thought. This era also produced the Parthenon, the plays of Sophocles, and the histories of Herodotus.",
    side: "left"
  },
  {
    era: "221 BC", name: "The Qin Dynasty",
    body: "King Zheng of Qin conquered six rival states and declared himself Qin Shi Huangdi — 'First Emperor of Qin.' He standardized weights, measures, currency, and Chinese script across a unified empire of 40 million souls. His massive terracotta army of 8,000 soldiers, horses, and chariots was buried to guard him in the afterlife.",
    side: "right"
  },
  {
    era: "509 BC – 476 CE", name: "Rome: Republic to Empire",
    body: "Rome transformed from a small Latin city-state into the undisputed master of the Mediterranean world. At its height under Emperor Trajan (98–117 CE), the Roman Empire stretched from Britain to Mesopotamia and housed an estimated 70 million people. It fell in the west in 476 CE — not with a bang, but through centuries of fiscal crisis, political instability, and relentless pressure from Germanic federates.",
    side: "left"
  },
  {
    era: "c. 700s–1400s CE", name: "The Islamic Golden Age",
    body: "From Baghdad's House of Wisdom to the libraries of Córdoba, Islamic scholars preserved and expanded Greek knowledge while making original contributions in algebra, optics, medicine, and astronomy. Al-Khwarizmi invented algebra; Ibn Sina (Avicenna) wrote a medical encyclopedia used in European universities for 600 years; Al-Haytham formulated the first scientific theory of vision.",
    side: "right"
  },
  {
    era: "1206–1368 CE", name: "The Mongol Empire",
    body: "Genghis Khan united the nomadic Mongol tribes and launched the largest contiguous land empire in human history — spanning 24 million square kilometres. Though conquest was brutally violent (the sack of Baghdad in 1258 destroyed the Abbasid Caliphate), the subsequent Pax Mongolica enabled unprecedented trade along the Silk Road, connecting China to Europe for the first time.",
    side: "left"
  },
  {
    era: "1857–1947 CE", name: "The British Raj",
    body: "After suppressing the Indian Rebellion of 1857, the British Crown assumed direct rule over the subcontinent. The Raj built 67,000 km of railway — primarily to extract resources — while famine killed tens of millions due to deliberate policy. Gandhi's nonviolent resistance movement ultimately forced British withdrawal, and on August 15, 1947, India and Pakistan achieved independence.",
    side: "right"
  },
  {
    era: "1917–1991 CE", name: "The Soviet Union",
    body: "Born from the October Revolution led by Vladimir Lenin, the USSR became the world's first communist state and second nuclear superpower. It industrialized at breakneck speed, defeating Nazi Germany at the cost of 27 million lives, and launched the first satellite (Sputnik, 1957) and the first human into space (Yuri Gagarin, 1961). Its dissolution on December 25, 1991 ended the Cold War.",
    side: "left"
  },
];
const WARS = [
  {
    era: "264–146 BC", title: "The Punic Wars",
    subtitle: "Rome vs. Carthage — Three Wars, One Annihilation",
    body: "Three devastating conflicts between the Roman Republic and the maritime empire of Carthage (modern Tunisia) determined who would rule the Mediterranean world. The Second Punic War saw Carthaginian general Hannibal Barca cross the Alps with 37 war elephants and inflict Rome's worst-ever defeat at Cannae (216 BC), killing 50,000 Romans in a single afternoon. Rome ultimately triumphed: in 146 BC, Carthage was razed, its ground salted, and its 50,000 survivors sold into slavery.",
    extra: "Rome's victory transformed it from a regional power into the dominant force of the ancient Western world. The phrase 'Carthago delenda est' ('Carthage must be destroyed'), reportedly repeated by Senator Cato the Elder at the end of every speech regardless of topic, became infamous as an example of political obsession.",
    stats: [{ val:"3", label:"Wars" }, { val:"118 yrs", label:"Duration" }, { val:"50,000", label:"Killed at Cannae" }]
  },
  {
    era: "431–404 BC", title: "The Peloponnesian War",
    subtitle: "Athens vs. Sparta — The Greek Civil War",
    body: "What began as a power struggle between Athens (naval democracy) and Sparta (militaristic oligarchy) became a catastrophic civil war that consumed the entire Greek world for 27 years. Plague devastated Athens in 430 BC, killing roughly one-quarter of its population including the statesman Pericles. The disastrous Sicilian Expedition of 415–413 BC destroyed the Athenian navy and sealed the city's fate. Athens surrendered in 404 BC.",
    extra: "The war was meticulously documented by the Athenian general-historian Thucydides, who produced perhaps history's first work of scientific historiography. His 'Thucydides Trap' — the tendency for dominant powers to clash with rising rivals — is still cited today by political scientists studying US-China relations.",
    stats: [{ val:"27 yrs", label:"Duration" }, { val:"¼", label:"Athens Pop. Lost to Plague" }, { val:"404 BC", label:"Athens Falls" }]
  },
  {
    era: "1914–1918 CE", title: "World War I",
    subtitle: "The Chemists' War — Industrialised Slaughter",
    body: "Triggered by the assassination of Archduke Franz Ferdinand in Sarajevo on June 28, 1914, WWI became a four-year industrial nightmare of trench warfare, barbed wire, and machine guns. Germany's introduction of chlorine gas at Ypres in April 1915 marked the first large-scale use of chemical weapons in history. The war killed approximately 20 million people and collapsed four empires: the German, Austro-Hungarian, Russian, and Ottoman.",
    extra: "The 'Small Box Respirator' gas mask became the British soldier's most vital piece of equipment — soldiers retreating under fire would throw away their rifles and ammunition but never their respirators. The economic and psychological devastation of WWI directly sowed the seeds for the rise of fascism and the Second World War just two decades later.",
    stats: [{ val:"20M", label:"Dead" }, { val:"4", label:"Empires Collapsed" }, { val:"1,500+", label:"Chemical Agents Used (tonnes/day peak)" }]
  },
  {
    era: "1939–1945 CE", title: "World War II",
    subtitle: "The Deadliest Conflict in Human History",
    body: "Spanning six continents and every ocean, WWII consumed an estimated 70–85 million lives — the majority of them civilians. Hitler's Holocaust systematically murdered six million Jews and five million others. The Pacific War between Japan and the Allied powers culminated in the United States dropping atomic bombs on Hiroshima (August 6, 1945) and Nagasaki (August 9, 1945) — the only wartime use of nuclear weapons in history — killing 110,000–210,000 people and forcing Japan's surrender.",
    extra: "WWII accelerated technological development at a previously unimaginable pace: radar, jet engines, synthetic rubber, penicillin mass production, and the first programmable computers (like Colossus, used to crack Nazi codes) all emerged from the conflict. The post-war order — the United Nations, Bretton Woods, NATO, and the Marshall Plan — shaped global politics for the rest of the century.",
    stats: [{ val:"80M", label:"Estimated Dead" }, { val:"6M", label:"Holocaust Victims" }, { val:"2", label:"Atomic Bombs Used" }]
  },
];
const MINDS = [
  {
    era: "3500–1200 BC", icon: "⚙", title: "Ancient Innovation",
    body: "The Sumerians of Mesopotamia invented cuneiform writing (c. 3200 BC) — humanity's first writing system — along with the wheel, the plough, and bronze metallurgy. The Phoenicians developed a phonetic alphabet of 22 letters around 1050 BC, the ancestor of virtually every modern alphabet from Latin to Arabic to Hebrew.",
    names: ["Sumerians", "Phoenicians", "Egyptians"]
  },
  {
    era: "c. 624–322 BC", icon: "🧠", title: "The Greek Miracle",
    body: "Thales of Miletus became the world's first 'scientist' by seeking natural explanations for natural phenomena — leaving the gods out entirely. Pythagoras unlocked the mathematics of music and geometry. Hippocrates transformed medicine into an empirical discipline. Aristotle systematized biology, logic, politics, and ethics into a comprehensive worldview that dominated European thought for 1,800 years.",
    names: ["Thales", "Aristotle", "Pythagoras", "Hippocrates"]
  },
  {
    era: "105–1400 CE", icon: "🧭", title: "Chinese Advancements",
    body: "Chinese inventors gifted the world four technologies that fundamentally altered civilization: paper (Cai Lun, 105 CE), woodblock printing (c. 600 CE), gunpowder (9th century alchemists), and the magnetic compass (Song Dynasty, c. 1040 CE). Each technology eventually reached Europe via the Silk Road and triggered revolutions in communication, warfare, and navigation.",
    names: ["Cai Lun", "Bi Sheng", "Song Dynasty"]
  },
  {
    era: "1543–1642 CE", icon: "🔭", title: "The Scientific Revolution",
    body: "Nicolaus Copernicus shattered 1,400 years of geocentric cosmology when he placed the sun — not the earth — at the centre of the universe in De Revolutionibus (1543). Johannes Kepler used Mars's observed orbit to prove planets move in ellipses. Galileo Galilei turned the telescope skyward, discovered Jupiter's moons, and was placed under house arrest by the Inquisition for his trouble.",
    names: ["Copernicus", "Kepler", "Galileo"]
  },
  {
    era: "1687–1727 CE", icon: "🍎", title: "The Age of Newton",
    body: "Isaac Newton's Principia Mathematica (1687) stands as perhaps the greatest scientific work ever published. It unified celestial and terrestrial mechanics under a single law of universal gravitation, explained the tides, predicted the return of comets, and introduced calculus as a mathematical language. Newton also performed the first systematic analysis of light and colour using a glass prism.",
    names: ["Isaac Newton"]
  },
  {
    era: "1765–1879 CE", icon: "⚡", title: "Industrial Giants",
    body: "James Watt's improved steam engine (1769) converted heat into mechanical work efficiently enough to power mills, mines, and locomotives — igniting the Industrial Revolution. Michael Faraday discovered electromagnetic induction in 1831, laying the groundwork for electric motors and generators. Thomas Edison's practical incandescent light bulb (1879) extended productive human hours far beyond sunset.",
    names: ["James Watt", "Faraday", "Edison"]
  },
  {
    era: "1895–1945 CE", icon: "⚛", title: "Modern Physics",
    body: "Albert Einstein's Special (1905) and General (1915) Theories of Relativity overturned Newtonian physics, revealing that space and time are relative and that mass and energy are interchangeable (E=mc²). Marie Curie, the only person to win Nobel Prizes in two separate sciences (Physics 1903, Chemistry 1911), pioneered the study of radioactivity and discovered the elements polonium and radium.",
    names: ["Einstein", "Marie Curie", "Planck", "Bohr"]
  },
];
const FACTS = [
  { num:"01", icon:"🫒", label:"Roman Hygiene", body:"Ancient Romans did not use soap to clean their bodies. Instead, they would coat their skin with <strong>olive oil</strong>, then scrape it off along with dirt and dead skin using a curved metal tool called a strigil. Olive oil also served as a moisturiser, lamp fuel, cooking medium, and medicine — the Swiss Army knife of antiquity." },
  { num:"02", icon:"🪢", label:"Inka Logistics", body:"Despite governing an empire of 12 million people across 4,000 km of coastline and mountain terrain, the Inka had no written language. Instead, they recorded everything — census data, tax records, military counts, and possibly even narrative histories — using <strong>quipus</strong>: complex systems of knotted strings whose full meaning modern scholars are still deciphering." },
  { num:"03", icon:"🌽", label:"Maya Mythology", body:"According to the Popol Vuh, the Mayan creation epic, the gods made three failed attempts to create humanity — first from mud, then from wood. Only on the fourth attempt, fashioning human beings from <strong>ground yellow and white maize</strong>, did they succeed. To the Maya, corn was not merely food: it was the substance of the human soul." },
  { num:"04", icon:"😷", label:"WWI Survival", body:"British soldiers in the trenches of World War I were issued the 'Small Box Respirator' gas mask after the first chlorine attacks of 1915. The mask became so central to survival that even during panicked retreats, soldiers under fire would abandon their rifles, ammunition, and rations — but <strong>never their respirators</strong>. The mask was literally the difference between life and death." },
  { num:"05", icon:"✨", label:"Main Character Energy", body:"Medieval Catholic Christianity developed an elaborate cult of saints: believers would pray to specific saints for intercession, collect their physical relics, make pilgrimages to their shrines, and circulate stories of their miracles. Modern media scholars have noted striking parallels with <strong>the devotional culture surrounding social media influencers</strong> — parasocial worship repackaged for the algorithm age." },
  { num:"06", icon:"🐒", label:"The Monkey Genius", body:"In the 1950s on the Japanese island of Koshima, a macaque named <strong>Imo</strong> discovered she could wash sweet potatoes in the sea to remove grit — and the behaviour spread through her troop within years. Scientists observed this as a rare instance of non-human cultural transmission: invented behaviour spreading socially rather than genetically. Technology, it seems, is not exclusively human." },
];
const MARQUEE_ITEMS = ["Gold & Blood", "Empire & Ashes", "Faith & Reason", "War & Peace", "Discovery & Destruction", "Power & Collapse", "Memory & Myth"];

/* ═══════════════════════════════════════════
RENDER
═══════════════════════════════════════════ */
const marqueeEl = document.getElementById('marquee');
const marqueeContent = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map(t =>
  `<span>${t}</span><span class="dot">◆</span>`
).join('');
marqueeEl.innerHTML = marqueeContent + marqueeContent;

const wondersGrid = document.querySelector('.wonders-grid');
WONDERS.forEach((w, i) => {
  wondersGrid.innerHTML += `
    <div class="wonder-card" style="animation-delay:${i * 0.08}s">
      <div class="wonder-num">${w.num}</div>
      <span class="wonder-icon">${w.icon}</span>
      <div class="wonder-name">${w.name}</div>
      <div class="wonder-loc">${w.loc}</div>
      <p class="wonder-text">${w.text}</p>
      <div class="wonder-bar"></div>
    </div>`;
});

const timeline = document.querySelector('.timeline');
EMPIRES.forEach((e) => {
  const isLeft = e.side === 'left';
  timeline.innerHTML += `
    <div class="timeline-item ${e.side}">
      ${isLeft
        ? `<div class="timeline-content"><div class="timeline-era">${e.era}</div><div class="timeline-name">${e.name}</div><p class="timeline-body">${e.body}</p></div><div class="timeline-spacer"></div>`
        : `<div class="timeline-spacer"></div><div class="timeline-content"><div class="timeline-era">${e.era}</div><div class="timeline-name">${e.name}</div><p class="timeline-body">${e.body}</p></div>`}
    </div>`;
});

const warsGrid = document.querySelector('.wars-grid');
WARS.forEach((w, i) => {
  const stats = w.stats.map(s => `<div class="war-stat"><span class="war-stat-val">${s.val}</span><span class="war-stat-label">${s.label}</span></div>`).join('');
  warsGrid.innerHTML += `
    <div class="war-card" style="animation-delay:${i * 0.12}s">
      <div class="war-banner"></div>
      <div class="war-inner">
        <div class="war-era">${w.era}</div>
        <div class="war-title">${w.title}</div>
        <div class="war-subtitle">${w.subtitle}</div>
        <p class="war-body">${w.body}</p>
        <div class="war-stats">${stats}</div>
        <button class="war-toggle" onclick="toggleWar(this)">Read More <span class="arrow">▼</span></button>
        <div class="war-expand">${w.extra}</div>
      </div>
    </div>`;
});

const mindsGrid = document.querySelector('.minds-grid');
MINDS.forEach((m, i) => {
  const tags = m.names.map(n => `<span class="mind-tag">${n}</span>`).join('');
  mindsGrid.innerHTML += `
    <div class="mind-card" style="animation-delay:${i * 0.08}s">
      <div class="mind-glow"></div>
      <div class="mind-era">${m.era}</div>
      <span class="mind-icon">${m.icon}</span>
      <div class="mind-title">${m.title}</div>
      <p class="mind-body">${m.body}</p>
      <div class="mind-names">${tags}</div>
    </div>`;
});

const factsMasonry = document.querySelector('.facts-masonry');
FACTS.forEach((f, i) => {
  factsMasonry.innerHTML += `
    <div class="fact-card" style="animation-delay:${i * 0.1}s">
      <div class="fact-num">${f.num}</div>
      <span class="fact-icon">${f.icon}</span>
      <div class="fact-label">${f.label}</div>
      <p class="fact-body">${f.body}</p>
    </div>`;
});

/* ═══════════════════════════════════════════
INTERACTIONS
═══════════════════════════════════════════ */
function toggleWar(btn) {
  btn.classList.toggle('open');
  const expand = btn.nextElementSibling;
  expand.classList.toggle('open');
  btn.querySelector('.arrow').style.transform = expand.classList.contains('open') ? 'rotate(180deg)' : '';
  btn.childNodes[0].textContent = expand.classList.contains('open') ? 'Show Less ' : 'Read More ';
}

const cursor = document.getElementById('cursor');
const cursorDot = document.getElementById('cursorDot');
let mx = 0, my = 0, cx = 0, cy = 0;
document.addEventListener('mousemove', e => {
  mx = e.clientX;
  my = e.clientY;
  cursorDot.style.left = mx + 'px';
  cursorDot.style.top = my + 'px';
});
(function animCursor() {
  cx += (mx - cx) * 0.15;
  cy += (my - cy) * 0.15;
  cursor.style.left = cx + 'px';
  cursor.style.top = cy + 'px';
  requestAnimationFrame(animCursor);
})();

document.querySelectorAll('a, button, .wonder-card, .war-card, .mind-card, .fact-card').forEach(el => {
  el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
  el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
});

window.addEventListener('scroll', () => {
  const p = window.scrollY / (document.body.scrollHeight - window.innerHeight);
  document.getElementById('progress-bar').style.width = (p * 100) + '%';
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.wonder-card, .timeline-item, .war-card, .mind-card, .fact-card').forEach(el => observer.observe(el));
