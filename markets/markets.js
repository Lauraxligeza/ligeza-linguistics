const marketData = {
  dach: {
    title: 'DACH & Nordics',
    primary: 'Cognitive certainty',
    risk: 'Loss avoidance & regulatory exposure',
    bias: 'Analytical validation before commitment',
  },
  'western-europe': {
    title: 'Western Europe',
    primary: 'Perceived quality',
    risk: 'Status dilution & inconsistency',
    bias: 'Heuristic judgment through tone and aesthetics',
  },
  cee: {
    title: 'Central & Eastern Europe',
    primary: 'Value preservation',
    risk: 'Financial downside & reliability',
    bias: 'Pragmatic comparison, delayed trust formation',
  },
  us: {
    title: 'United States',
    primary: 'Perceived upside',
    risk: 'Opportunity cost',
    bias: 'Fast, confidence-led decision making',
  },
  latam: {
    title: 'Latin America (LATAM)',
    primary: 'Social reassurance',
    risk: 'Friction & uncertainty',
    bias: 'Momentum-based validation',
  },
  mena: {
    title: 'MENA',
    primary: 'Authority & legitimacy',
    risk: 'Social hierarchy violations',
    bias: 'Endorsement-led trust formation',
  },
  japan: {
    title: 'Japan',
    primary: 'Psychological safety (Anshin)',
    risk: 'Ambiguity & social disruption',
    bias: 'Risk minimisation through completeness and predictability',
  },
  korea: {
    title: 'South Korea',
    primary: 'Social proof & status alignment',
    risk: 'Reputation loss',
    bias: 'Collective validation before adoption',
  },
  china: {
    title: 'China',
    primary: 'Pragmatic utility & momentum',
    risk: 'Information asymmetry',
    bias: 'Rapid trust formation through ecosystem signals',
  },
  sea: {
    title: 'Southeast Asia (SG / MY / TH)',
    primary: 'Stability & relationship trust',
    risk: 'Uncertainty & long-term reliability',
    bias: 'Gradual commitment through reassurance',
  },
  india: {
    title: 'India',
    primary: 'Value optimisation',
    risk: 'Overcommitment & mismatch',
    bias: 'High-comparison, logic-first evaluation',
  },
};

const mapPoints = document.querySelectorAll('.map-point');
const panelTitle = document.querySelector('.market-panel__title');
const panelPrimary = document.querySelector('[data-field="primary"]');
const panelRisk = document.querySelector('[data-field="risk"]');
const panelBias = document.querySelector('[data-field="bias"]');

const setMarket = (key) => {
  const data = marketData[key];
  if (!data) return;
  if (panelTitle) panelTitle.textContent = data.title;
  if (panelPrimary) panelPrimary.textContent = data.primary;
  if (panelRisk) panelRisk.textContent = data.risk;
  if (panelBias) panelBias.textContent = data.bias;
  mapPoints.forEach((point) => {
    const isActive = point.dataset.market === key;
    point.classList.toggle('is-active', isActive);
    point.setAttribute('aria-pressed', isActive ? 'true' : 'false');
  });
};

mapPoints.forEach((point) => {
  const key = point.dataset.market;
  point.addEventListener('mouseenter', () => setMarket(key));
  point.addEventListener('focus', () => setMarket(key));
  point.addEventListener('click', () => setMarket(key));
});

const marketRealityData = {
  dach: {
    title: 'DACH & Nordics',
    pattern: 'Risk minimisation through certainty',
    summary:
      'Trust is built through structure, precision, and compliance. Buyers expect detailed information, proof, and clear accountability before committing.',
    note:
      'Country-level analysis refines this further (e.g. Germany vs Nordics differ in tone and tolerance, but share a certainty-first logic).',
  },
  'western-europe': {
    title: 'Western Europe',
    pattern: 'Perceived quality and coherence',
    summary:
      'Brand value is judged through tone, aesthetics, and restraint. Aggressive messaging or generic presentation undermines credibility.',
    note:
      'Country-level analysis distinguishes nuance, formality, and emotional framing across markets like France, Spain, and Italy.',
  },
  'eastern-europe': {
    title: 'Eastern Europe',
    pattern: 'Value preservation and execution reliability',
    summary:
      'Buyers are highly sensitive to pricing logic, efficiency, and delivery. Errors, friction, or unclear value signals quickly erode trust.',
    note:
      'Country-level analysis accounts for local economic context and risk tolerance.',
  },
  latam: {
    title: 'Latin America (LATAM)',
    pattern: 'Social validation and momentum',
    summary:
      'Trust is built relationally. Local payment access, social proof, and reassurance matter more than speed alone.',
    note: 'Country-level analysis adapts messaging, proof, and flow market by market.',
  },
  mena: {
    title: 'MENA',
    pattern: 'Authority and legitimacy',
    summary:
      'Credibility is shaped by hierarchy, status, and cultural alignment. Tone, symbolism, and presentation strongly influence trust.',
    note: 'Country-level analysis adjusts for local norms and expectations.',
  },
  'global-english': {
    title: 'Global English Markets',
    pattern: 'Shared language, divergent logic',
    summary:
      'While language overlaps, expectations do not. Tone, compliance signals, and value framing differ significantly across regions.',
    note: 'Country-level analysis separates markets like the US, UK, and Australia.',
  },
};

const marketTabs = document.querySelectorAll('.switcher-tab');
const outputMarket = document.querySelector('[data-output="market"]');
const outputPattern = document.querySelector('[data-output="pattern"]');
const outputSummary = document.querySelector('[data-output="summary"]');
const outputNote = document.querySelector('[data-output="note"]');

let activeMarket = 'dach';

const setMarketReality = (market) => {
  const data = marketRealityData[market];
  if (!data) return;
  activeMarket = market;
  marketTabs.forEach((tab) => {
    const isActive = tab.dataset.market === market;
    tab.classList.toggle('is-active', isActive);
    tab.setAttribute('aria-pressed', isActive ? 'true' : 'false');
  });
  if (outputMarket) outputMarket.textContent = data.title;
  if (outputPattern) outputPattern.textContent = data.pattern;
  if (outputSummary) outputSummary.textContent = data.summary;
  if (outputNote) outputNote.textContent = data.note;
};

marketTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    setMarketReality(tab.dataset.market);
  });
});

setMarketReality(activeMarket);
