"use strict";

const PATTERN_ENGINE_VERSION = "PFE-3.0-deterministic";

const MS_PER_HOUR = 60 * 60 * 1000;
const MS_PER_DAY = 24 * MS_PER_HOUR;

const categoryPriors = {
  AI: {
    baseRate: 64,
    volatility: 72,
    referenceClass: "compute adoption under power, memory, and deployment constraints",
    impact: 76,
  },
  Biotechnology: {
    baseRate: 54,
    volatility: 65,
    referenceClass: "lab capability crossing into industrial scale",
    impact: 62,
  },
  Cities: {
    baseRate: 59,
    volatility: 57,
    referenceClass: "urban costs changing before migration or asset-price data",
    impact: 66,
  },
  Climate: {
    baseRate: 62,
    volatility: 70,
    referenceClass: "physical risk becoming financial or policy behavior",
    impact: 72,
  },
  Energy: {
    baseRate: 68,
    volatility: 60,
    referenceClass: "energy reliability repricing under capacity stress",
    impact: 73,
  },
  "Food systems": {
    baseRate: 61,
    volatility: 66,
    referenceClass: "food-system pressure compounding across climate, logistics, and households",
    impact: 69,
  },
  Geopolitics: {
    baseRate: 57,
    volatility: 74,
    referenceClass: "strategic ambiguity converting into option-value spending",
    impact: 78,
  },
  Infrastructure: {
    baseRate: 66,
    volatility: 56,
    referenceClass: "infrastructure fragility becoming a procurement rule",
    impact: 74,
  },
  Labour: {
    baseRate: 63,
    volatility: 52,
    referenceClass: "capacity shortages changing service quality before headline data",
    impact: 65,
  },
  Logistics: {
    baseRate: 65,
    volatility: 68,
    referenceClass: "route disruption becoming balance-sheet friction",
    impact: 76,
  },
  Manufacturing: {
    baseRate: 60,
    volatility: 58,
    referenceClass: "industrial redundancy becoming a trust and qualification asset",
    impact: 70,
  },
  Materials: {
    baseRate: 58,
    volatility: 64,
    referenceClass: "material scarcity filtered through proof, processing, and consent",
    impact: 71,
  },
  Robotics: {
    baseRate: 55,
    volatility: 61,
    referenceClass: "automation adoption where work is repetitive and scarcity is measurable",
    impact: 64,
  },
  Water: {
    baseRate: 67,
    volatility: 63,
    referenceClass: "water stress coupling into power, food, and legitimacy",
    impact: 75,
  },
  default: {
    baseRate: 56,
    volatility: 58,
    referenceClass: "weak-signal convergence across geography, institutions, and behavior",
    impact: 62,
  },
};

const archetypeRules = [
  {
    name: "Chokepoint repricing",
    terms: ["shipping", "route", "port", "corridor", "cable", "subsea", "logistics"],
    hiddenVariable: "working-capital tolerance",
    pressurePath: "security risk -> insurance wording -> route time -> working capital",
    nonObviousThesis:
      "contracts, inventory days, and insurance language can move before the visible shortage arrives",
    leadingIndicators: ["insurance exclusions", "route persistence", "inventory days", "blank sailings"],
    laggingIndicators: ["consumer prices", "formal route redesign", "new infrastructure announcements"],
    falsifier: "war-risk premiums fall while routing normalizes for at least two reporting cycles",
  },
  {
    name: "Physical constraint",
    terms: ["water", "heat", "cooling", "drought", "rainfall", "river", "snowpack", "hydro", "storm"],
    hiddenVariable: "the point where environmental stress becomes an operating cost",
    pressurePath: "physical stress -> operating limits -> public policy -> asset repricing",
    nonObviousThesis:
      "the useful forecast is when a physical condition becomes a budget line, not when it becomes a headline",
    leadingIndicators: ["allocation rules", "utility peak-load data", "insurer wording", "operating-hour changes"],
    laggingIndicators: ["migration statistics", "asset-price resets", "new zoning maps"],
    falsifier: "buffers improve and price, policy, and operating behavior decouple from physical stress",
  },
  {
    name: "Capacity gap",
    terms: ["labour", "worker", "skills", "care", "staffing", "installer", "productivity", "shortage"],
    hiddenVariable: "usable human capacity at the exact moment demand peaks",
    pressurePath: "demographic pressure -> labour scarcity -> service reliability -> automation demand",
    nonObviousThesis:
      "the constraint can appear in service reliability before it appears in national labour statistics",
    leadingIndicators: ["vacancy duration", "wage premia", "overtime and absenteeism", "automation procurement"],
    laggingIndicators: ["headline unemployment", "national productivity data", "formal shortage declarations"],
    falsifier: "work redesign or labour supply expands faster than the service bottleneck",
  },
  {
    name: "Resilience premium",
    terms: ["grid", "power", "microgrid", "battery", "outage", "energy", "infrastructure", "backup"],
    hiddenVariable: "credible fallback capacity",
    pressurePath: "reliability shock -> backup demand -> procurement change -> capital allocation",
    nonObviousThesis:
      "buyers start paying for continuity and controllability while headline capacity still looks adequate",
    leadingIndicators: ["backup procurement", "capacity-market prices", "interconnection queues", "outage recurrence"],
    laggingIndicators: ["new central generation", "headline demand forecasts", "post-crisis policy packages"],
    falsifier: "central reliability improves before users change procurement or financing behavior",
  },
  {
    name: "Trust bottleneck",
    terms: ["minerals", "materials", "lithium", "copper", "nickel", "carbon", "license", "consent"],
    hiddenVariable: "whether the supply story can survive public scrutiny",
    pressurePath: "strategic demand -> permitting friction -> proof requirements -> supply reliability",
    nonObviousThesis:
      "volume is not enough when buyers, regulators, and communities require defensible proof",
    leadingIndicators: ["permitting velocity", "traceability rules", "community benefit language", "buyer audits"],
    laggingIndicators: ["mine output", "commodity price spikes", "national supply targets"],
    falsifier: "substitution, cleaner processing, or local consent removes the credibility bottleneck",
  },
  {
    name: "Strategic optionality",
    terms: ["manufacturing", "redundancy", "defense", "nearshoring", "fabs", "supply", "semiconductor"],
    hiddenVariable: "time saved when concentrated assumptions fail",
    pressurePath: "geopolitical uncertainty -> duplicated capacity -> qualification cycles -> pricing power",
    nonObviousThesis:
      "already-qualified fallback capacity becomes valuable before disruption makes the need obvious",
    leadingIndicators: ["qualification cycles", "supplier audits", "subsidy conditions", "dual-source contracts"],
    laggingIndicators: ["completed factories", "trade statistics", "headline reshoring claims"],
    falsifier: "buyers stop paying for redundancy and reconcentrate supply without disruption",
  },
  {
    name: "Institutional ambiguity",
    terms: ["governance", "arctic", "treaty", "sovereignty", "diplomacy", "security", "conflict"],
    hiddenVariable: "who can act before rules become clear",
    pressurePath: "ambiguous rules -> risk premium -> strategic positioning -> infrastructure investment",
    nonObviousThesis:
      "ambiguity itself becomes expensive because actors must buy options before institutions settle the rules",
    leadingIndicators: ["treaty language", "inspection disputes", "insurance wording", "dual-use infrastructure"],
    laggingIndicators: ["formal rule changes", "new institutions", "resolved territorial claims"],
    falsifier: "coordination becomes credible before option-value spending accelerates",
  },
];

const domainTerms = {
  physical: ["heat", "water", "drought", "rainfall", "river", "snowpack", "storm", "fire", "cooling"],
  capital: ["insurance", "credit", "capital", "premium", "price", "finance", "bond", "market"],
  policy: ["policy", "regulation", "public", "rules", "permitting", "subsidy", "compliance"],
  capacity: ["labour", "skills", "worker", "grid", "power", "housing", "storage", "capacity"],
  security: ["security", "conflict", "defense", "sanctions", "sovereignty", "naval", "treaty"],
  technology: ["ai", "automation", "robotics", "data", "compute", "semiconductor", "battery", "sensor"],
  logistics: ["shipping", "route", "port", "corridor", "cable", "subsea", "freight", "cold chain"],
  legitimacy: ["trust", "consent", "legitimacy", "household", "community", "health", "migration"],
};

const sourceReliability = {
  arXiv: 64,
  Crossref: 70,
  Eurostat: 78,
  FAOSTAT: 76,
  GDELT: 56,
  "GDELT DOC 2.1": 56,
  IEA: 78,
  ILOSTAT: 74,
  "NASA FIRMS": 76,
  "NASA POWER": 77,
  NOAA: 78,
  "OECD AI": 75,
  "Open-Meteo Forecast": 74,
  "OpenStreetMap Overpass": 63,
  ReliefWeb: 68,
  "UN Population": 78,
  USGS: 77,
  "USGS Earthquake Catalog": 77,
  "V-Dem": 72,
  "WHO GHO": 76,
  "Wikipedia / MediaWiki": 58,
  "World Bank Indicators": 78,
  "World Values Survey": 70,
};

const sourceGroups = {
  arXiv: "research",
  Crossref: "research",
  Eurostat: "official",
  FAOSTAT: "official",
  GDELT: "event stream",
  "GDELT DOC 2.1": "event stream",
  IEA: "sector data",
  ILOSTAT: "official",
  "NASA FIRMS": "remote sensing",
  "NASA POWER": "physical data",
  NOAA: "physical data",
  "OECD AI": "sector data",
  "Open-Meteo Forecast": "physical data",
  "OpenStreetMap Overpass": "geography",
  ReliefWeb: "humanitarian",
  "UN Population": "official",
  USGS: "geography",
  "USGS Earthquake Catalog": "hazard",
  "V-Dem": "institutional",
  "WHO GHO": "official",
  "Wikipedia / MediaWiki": "context",
  "World Bank Indicators": "official",
  "World Values Survey": "survey",
};

const positiveEvidenceTerms = [
  "accelerat",
  "adopt",
  "approval",
  "capacity",
  "constraint",
  "demand",
  "expansion",
  "funding",
  "investment",
  "policy",
  "procurement",
  "risk",
  "shortage",
  "stress",
  "surge",
  "warning",
];

const contradictionTerms = [
  "decline",
  "delay",
  "easing",
  "falling",
  "improved",
  "normalizes",
  "pause",
  "reversal",
  "stable",
  "weaken",
];

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, Number.isFinite(value) ? value : min));
}

function round(value) {
  return Math.round(clamp(value, 0, 100));
}

function uniqueItems(items) {
  return [...new Set((items || []).map((item) => String(item || "").trim()).filter(Boolean))];
}

function sentence(value) {
  const text = String(value || "").trim();
  if (!text) return "";
  return /[.!?]$/.test(text) ? text : `${text}.`;
}

function parseDate(value) {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? null : date;
}

function parseHorizonMonths(horizon) {
  const matches = String(horizon || "").match(/\d+/g)?.map(Number) || [36];
  if (matches.length === 1) return { min: matches[0], max: matches[0] };
  return { min: Math.min(matches[0], matches[1]), max: Math.max(matches[0], matches[1]) };
}

function addMonths(date, months) {
  const next = new Date(date.getTime());
  next.setUTCMonth(next.getUTCMonth() + months);
  return next;
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function includesTerm(text, term) {
  const normalized = String(term || "").toLowerCase();
  if (!normalized) return false;
  if (!/^[a-z0-9 ]+$/.test(normalized)) return text.includes(normalized);
  return new RegExp(`(^|[^a-z0-9])${escapeRegExp(normalized)}(?=[^a-z0-9]|$)`).test(text);
}

function countMatches(text, terms) {
  return terms.filter((term) => includesTerm(text, term)).length;
}

function tokenize(text) {
  return uniqueItems(
    String(text || "")
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, " ")
      .split(/\s+/)
      .filter((token) => token.length > 3 && !commonTokens.has(token)),
  );
}

const commonTokens = new Set([
  "about",
  "across",
  "before",
  "become",
  "becomes",
  "being",
  "could",
  "from",
  "have",
  "into",
  "more",
  "near",
  "than",
  "that",
  "their",
  "this",
  "with",
]);

function overlapTerms(left, right, limit = 6) {
  const rightSet = new Set(right);
  return left.filter((term) => rightSet.has(term)).slice(0, limit);
}

function textForEvidence(item) {
  return `${item.title || ""} ${item.summary || ""} ${item.sourceName || ""}`.toLowerCase();
}

function textForCandidate(candidate) {
  return [
    candidate.title,
    candidate.region,
    candidate.category,
    candidate.summary,
    candidate.implication,
    candidate.rationale,
    candidate.why,
    ...(candidate.signals || []),
    ...(candidate.sources || []),
  ]
    .join(" ")
    .toLowerCase();
}

function inferArchetype(candidate) {
  const text = textForCandidate(candidate);
  return (
    archetypeRules.find((rule) => rule.terms.some((term) => includesTerm(text, term))) ||
    archetypeRules[0]
  );
}

function inferDomains(candidate, evidence) {
  const text = `${textForCandidate(candidate)} ${(evidence || []).map(textForEvidence).join(" ")}`;
  return Object.entries(domainTerms)
    .map(([domain, terms]) => ({
      domain,
      terms: terms.filter((term) => includesTerm(text, term)),
    }))
    .filter((entry) => entry.terms.length > 0);
}

function sourceStatusFor(candidate, sourceId) {
  const match = (candidate.ingestion?.source_mix || candidate.sourceMix || []).find(
    (source) => source.source_id === sourceId || source.sourceId === sourceId,
  );
  return match?.status || "unknown";
}

function reliabilityForEvidence(item) {
  return sourceReliability[item.sourceName] || sourceReliability[item.sourceId] || 58;
}

function qualityForEvidence(item, candidate, now) {
  const observed = parseDate(item.observedAt);
  const ageDays = observed ? Math.max(0, (now.getTime() - observed.getTime()) / MS_PER_DAY) : 90;
  const recencyScore = clamp(100 - ageDays * 1.4, 30, 100);
  const sourceScore = reliabilityForEvidence(item);
  const confidenceScore = Number.isFinite(Number(item.confidence)) ? Number(item.confidence) : 55;
  const status = sourceStatusFor(candidate, item.sourceId);
  const liveAdjustment = status === "fetched" ? 8 : status.includes("fallback") ? -12 : status === "dry_run" ? -8 : 0;
  const urlAdjustment = item.url ? 3 : -4;
  return round(sourceScore * 0.38 + confidenceScore * 0.28 + recencyScore * 0.24 + liveAdjustment + urlAdjustment);
}

function classifyEvidenceWindow(item, now) {
  const observed = parseDate(item.observedAt);
  const sourceType = String(item.sourceType || "").toLowerCase();
  const ageHours = observed ? (now.getTime() - observed.getTime()) / MS_PER_HOUR : Number.POSITIVE_INFINITY;
  const ageDays = ageHours / 24;
  const structuralTypes = new Set([
    "entity_context",
    "knowledge_graph",
    "research_metadata",
    "research_preprint",
    "structural",
  ]);

  if (structuralTypes.has(sourceType) || ageDays > 60) return "structural_baseline";
  if (ageHours <= 30) return "recent_24h";
  return "prior_60d";
}

function summarizeWindow(items) {
  const qualities = items.map((item) => item.quality);
  const averageQuality = qualities.length
    ? Math.round(qualities.reduce((sum, value) => sum + value, 0) / qualities.length)
    : 0;
  const sources = uniqueItems(items.map((item) => item.sourceName));
  const groups = uniqueItems(sources.map((source) => sourceGroups[source] || "general"));
  const terms = tokenize(items.map(textForEvidence).join(" ")).slice(0, 16);

  return {
    count: items.length,
    sources,
    sourceGroups: groups,
    averageQuality,
    terms,
    topEvidence: items
      .slice()
      .sort((a, b) => b.quality - a.quality)
      .slice(0, 4)
      .map((item) => ({
        sourceId: item.sourceId,
        sourceName: item.sourceName,
        title: item.title,
        observedAt: item.observedAt,
        quality: item.quality,
        url: item.url,
      })),
  };
}

function buildEvidenceWindows(candidate, now) {
  const windows = {
    recent_24h: [],
    prior_60d: [],
    structural_baseline: [],
  };

  for (const item of candidate.evidence || []) {
    const normalized = {
      ...item,
      window: classifyEvidenceWindow(item, now),
      quality: qualityForEvidence(item, candidate, now),
    };
    windows[normalized.window].push(normalized);
  }

  return {
    recent_24h: summarizeWindow(windows.recent_24h),
    prior_60d: summarizeWindow(windows.prior_60d),
    structural_baseline: summarizeWindow(windows.structural_baseline),
    raw: windows,
  };
}

function buildEvidencePairs(evidenceWindows) {
  const recent = evidenceWindows.raw.recent_24h.slice().sort((a, b) => b.quality - a.quality);
  const comparators = [...evidenceWindows.raw.prior_60d, ...evidenceWindows.raw.structural_baseline]
    .slice()
    .sort((a, b) => b.quality - a.quality);

  return recent.slice(0, 4).map((recentItem) => {
    const recentTokens = tokenize(textForEvidence(recentItem));
    const best = comparators
      .map((item) => ({
        item,
        overlap: overlapTerms(recentTokens, tokenize(textForEvidence(item)), 8),
      }))
      .sort((a, b) => b.overlap.length - a.overlap.length || b.item.quality - a.item.quality)[0];
    const comparator = best?.item || null;
    const overlap = best?.overlap || [];

    return {
      recent: {
        sourceName: recentItem.sourceName,
        title: recentItem.title,
        observedAt: recentItem.observedAt,
        quality: recentItem.quality,
        url: recentItem.url,
      },
      comparator: comparator
        ? {
            sourceName: comparator.sourceName,
            title: comparator.title,
            observedAt: comparator.observedAt,
            window: comparator.window,
            quality: comparator.quality,
            url: comparator.url,
          }
        : null,
      overlapTerms: overlap,
      interpretation: comparator
        ? `Recent ${recentItem.sourceName} evidence is paired with ${comparator.sourceName} ${comparator.window.replace(/_/g, " ")} context${overlap.length ? ` around ${overlap.slice(0, 3).join(", ")}` : ""}.`
        : "Recent evidence has no strong 60-day comparator yet; treat as a novelty signal until persistence improves.",
    };
  });
}

function referencePrior(candidate) {
  const category = categoryPriors[candidate.category] || categoryPriors.default;
  const livePrior = candidate.ingestion?.reference_class_prior || candidate.referenceClassPrior || {};
  return {
    label: livePrior.label || candidate.referenceClass || category.referenceClass,
    baseRate: clamp(Number(livePrior.base_rate) || category.baseRate, 5, 95),
    volatility: clamp(Number(livePrior.volatility) || category.volatility, 5, 95),
    categoryImpact: category.impact,
  };
}

function countEvidenceTermMatches(items, terms) {
  return items.reduce((total, item) => total + countMatches(textForEvidence(item), terms), 0);
}

function computeScores(candidate, evidenceWindows, archetype, domains, prior) {
  const recent = evidenceWindows.recent_24h;
  const prior60 = evidenceWindows.prior_60d;
  const structural = evidenceWindows.structural_baseline;
  const rawRecent = evidenceWindows.raw.recent_24h;
  const horizon = parseHorizonMonths(candidate.horizon);
  const sourceNames = uniqueItems((candidate.evidence || []).map((item) => item.sourceName));
  const groups = uniqueItems(sourceNames.map((source) => sourceGroups[source] || "general"));
  const candidateText = textForCandidate(candidate);
  const positiveHits = countEvidenceTermMatches(rawRecent, positiveEvidenceTerms);
  const contradictionHits = countEvidenceTermMatches(rawRecent, contradictionTerms);
  const leadingOverlap = countMatches(
    `${candidateText} ${rawRecent.map(textForEvidence).join(" ")}`,
    (candidate.ingestion?.leading_indicators || candidate.leadingIndicators || []).map((item) => item.text || item),
  );
  const disconfirmationOverlap = countMatches(
    rawRecent.map(textForEvidence).join(" "),
    (candidate.ingestion?.disconfirmers || candidate.disconfirmers || []).map((item) => item.text || item),
  );
  const recentTermNovelty = recent.terms.filter((term) => !prior60.terms.includes(term) && !structural.terms.includes(term)).length;
  const sharedTerms = overlapTerms(recent.terms, [...prior60.terms, ...structural.terms], 20).length;
  const sourceStatuses = candidate.ingestion?.source_mix || [];
  const liveSourceCount = sourceStatuses.filter((source) => source.status === "fetched").length;
  const weakSourceCount = sourceStatuses.filter((source) => {
    const status = String(source.status || "");
    return status !== "fetched" && status !== "stub_adapter";
  }).length;
  const fallbackCount = sourceStatuses.filter((source) => String(source.status || "").includes("fallback")).length;

  const baseRate = clamp(
    prior.baseRate + (structural.averageQuality - 55) * 0.08 + Math.min(structural.count, 5) * 1.4,
    5,
    95,
  );
  const recencyPulse = clamp(
    38 + recent.count * 6 + recent.averageQuality * 0.24 + positiveHits * 4.5 - weakSourceCount * 2.5,
    5,
    98,
  );
  const persistence = clamp(
    34 + prior60.count * 4.2 + structural.count * 2.7 + sharedTerms * 2.8 + prior60.averageQuality * 0.15,
    5,
    98,
  );
  const acceleration = clamp(
    42 + (recent.averageQuality - prior60.averageQuality) * 0.3 + Math.max(0, recent.count - prior60.count * 0.25) * 6 + positiveHits * 3.8,
    5,
    98,
  );
  const novelty = clamp(
    36 + recentTermNovelty * 5.2 + domains.length * 4.6 + countMatches(candidateText, ["before", "hidden", "quiet", "non-obvious"]) * 7,
    5,
    96,
  );
  const sourceDiversity = clamp(
    22 + groups.length * 8 + sourceNames.length * 1.2 + liveSourceCount * 4 - weakSourceCount * 2.8,
    5,
    98,
  );
  const evidenceQuality = clamp(
    22 +
      recent.averageQuality * 0.28 +
      prior60.averageQuality * 0.18 +
      structural.averageQuality * 0.18 +
      liveSourceCount * 4 -
      weakSourceCount * 2.2,
    5,
    98,
  );
  const contradiction = clamp(contradictionHits * 12 + disconfirmationOverlap * 16 + fallbackCount * 1.1, 0, 88);
  const impact = clamp(prior.categoryImpact + domains.length * 3 + countMatches(candidateText, ["system", "strategic", "security", "infrastructure"]) * 2.5, 12, 96);
  const falsifiability = clamp(
    36 +
      (candidate.ingestion?.disconfirmers || candidate.disconfirmers || []).length * 8 +
      (candidate.ingestion?.leading_indicators || candidate.leadingIndicators || []).length * 6 +
      sourceNames.length * 1.5,
    5,
    96,
  );
  const uncertainty = clamp(
    88 -
      evidenceQuality * 0.18 -
      sourceDiversity * 0.12 -
      persistence * 0.12 -
      falsifiability * 0.1 +
      prior.volatility * 0.16 +
      Math.max(0, horizon.max - 36) * 0.25 +
      contradiction * 0.3 +
      weakSourceCount * 1.4,
    10,
    82,
  );
  const convergence = clamp(
    30 + domains.length * 8 + groups.length * 4 + sharedTerms * 3 + leadingOverlap * 5 - contradiction * 0.12,
    5,
    98,
  );

  const weighted =
    baseRate * 0.12 +
    recencyPulse * 0.12 +
    persistence * 0.12 +
    acceleration * 0.12 +
    novelty * 0.08 +
    sourceDiversity * 0.1 +
    evidenceQuality * 0.14 +
    convergence * 0.09 +
    impact * 0.08 +
    falsifiability * 0.05 -
    contradiction * 0.1 -
    uncertainty * 0.04;

  const rawProbability = clamp(
    baseRate +
      (recencyPulse - 50) * 0.18 +
      (persistence - 50) * 0.16 +
      (acceleration - 50) * 0.14 +
      (convergence - 50) * 0.12 +
      (impact - 50) * 0.06 -
      contradiction * 0.13 -
      uncertainty * 0.05,
    6,
    92,
  );
  const liveShare = liveSourceCount / Math.max(1, sourceStatuses.length);
  const probability = clamp(
    baseRate + (rawProbability - baseRate) * clamp(0.28 + liveShare * 0.72, 0.28, 1) - weakSourceCount * 0.8,
    6,
    92,
  );
  const confidence = clamp(weighted - weakSourceCount * 1.7 - (liveSourceCount === 0 ? 8 : 0), 20, 92);

  return {
    baseRate: round(baseRate),
    recencyPulse: round(recencyPulse),
    persistence: round(persistence),
    acceleration: round(acceleration),
    novelty: round(novelty),
    sourceDiversity: round(sourceDiversity),
    evidenceQuality: round(evidenceQuality),
    contradiction: round(contradiction),
    impact: round(impact),
    falsifiability: round(falsifiability),
    convergence: round(convergence),
    uncertainty: round(uncertainty),
    probability: round(probability),
    confidence: round(confidence),
    sourceFamilies: groups,
    domainCount: domains.length,
    horizon,
  };
}

function convictionBand(scores) {
  if (scores.confidence >= 78 && scores.uncertainty <= 38 && scores.recencyPulse >= 70) {
    return "High-conviction inflection";
  }
  if (scores.confidence >= 72 && scores.contradiction <= 28) return "Strong structured watch";
  if (scores.acceleration >= 72 && scores.uncertainty > 45) return "Fast-moving but uncertain";
  if (scores.confidence >= 64) return "Structured watch";
  return "Early signal";
}

function normalizeIndicatorItems(items) {
  return uniqueItems((items || []).map((item) => item.text || item)).slice(0, 4);
}

function buildLeadingIndicators(candidate, archetype, domains) {
  const nightly = normalizeIndicatorItems(candidate.ingestion?.leading_indicators || candidate.leadingIndicators);
  const domainHints = domains.flatMap((entry) => entry.terms).slice(0, 4);
  return uniqueItems([
    ...nightly,
    ...archetype.leadingIndicators,
    domainHints.length ? `${domainHints.slice(0, 3).join(", ")} appearing together in fresh reporting` : "",
    `${archetype.hiddenVariable} becoming visible in procurement, pricing, or policy language`,
  ]).slice(0, 5);
}

function buildFalsifiers(candidate, archetype) {
  const nightly = normalizeIndicatorItems(candidate.ingestion?.disconfirmers || candidate.disconfirmers);
  return uniqueItems([
    ...nightly,
    archetype.falsifier,
    `the recent 24-hour evidence pulse falls back below the 60-day baseline for two consecutive runs`,
    "official data and observed market behavior stop moving in the same direction",
  ]).slice(0, 4);
}

function buildScenarioSpread(candidate, scores, archetype, leadingIndicators, falsifiers) {
  let base = Math.round(clamp(42 + scores.probability * 0.22 - scores.uncertainty * 0.08, 38, 68));
  let upside = Math.round(clamp(16 + scores.acceleration * 0.12 + scores.impact * 0.07 - scores.contradiction * 0.05, 14, 34));
  let downside = 100 - base - upside;
  if (downside < 10) {
    const adjustment = 10 - downside;
    base -= Math.ceil(adjustment * 0.7);
    upside -= Math.floor(adjustment * 0.3);
    downside = 10;
  }
  if (downside > 44) {
    const adjustment = downside - 44;
    base += Math.ceil(adjustment * 0.65);
    upside += Math.floor(adjustment * 0.35);
    downside = 44;
  }

  return {
    weights: { base, upside, downside },
    baseCase: {
      probability: base,
      summary: `${base}% base case: ${sentence(candidate.summary)} The hinge is ${archetype.hiddenVariable}.`,
    },
    upsideCase: {
      probability: upside,
      summary: `${upside}% acceleration case: if ${leadingIndicators[0]}, this can move from watchlist to operating assumption before consensus data catches up.`,
    },
    downsideCase: {
      probability: downside,
      summary: `${downside}% break case: downgrade the forecast if ${falsifiers[0]}`,
    },
  };
}

function buildForecast(candidate, scores, prior, now) {
  const horizon = scores.horizon;
  const dueAt = addMonths(now, horizon.max).toISOString();
  const probability = scores.probability;
  const direction = probability >= prior.baseRate ? "strengthen" : "weaken";

  return {
    statement: `${candidate.title} will ${direction} as an observable ${candidate.category.toLowerCase()} signal within ${candidate.horizon}.`,
    probability,
    priorProbability: Math.round(prior.baseRate),
    updateDelta: Math.round(probability - prior.baseRate),
    openedAt: now.toISOString(),
    dueAt,
    horizonMonths: horizon,
    resolutionCriteria: [
      `Resolve positive if at least two leading indicators materially appear before ${dueAt.slice(0, 10)}.`,
      "Resolve negative if the listed falsifiers dominate for two consecutive nightly runs.",
      "Keep unresolved if evidence remains mixed without observable market, policy, or operating behavior.",
    ],
  };
}

function buildBrierTracking(candidate, forecast) {
  return {
    forecastId: `${candidate.id}:${forecast.openedAt.slice(0, 10)}:${PATTERN_ENGINE_VERSION}`,
    scoreType: "brier_binary",
    probability: forecast.probability / 100,
    outcome: null,
    status: "open",
    openedAt: forecast.openedAt,
    dueAt: forecast.dueAt,
    resolutionCriteria: forecast.resolutionCriteria,
  };
}

function buildEvidenceStack(model) {
  const windows = model.evidenceWindows;
  return [
    `Outside view: ${model.referenceClass.label}; prior ${model.forecast.priorProbability}% before nightly evidence updates.`,
    `24-hour pulse: ${windows.recent_24h.count} items, average quality ${windows.recent_24h.averageQuality}/100; update delta ${model.forecast.updateDelta >= 0 ? "+" : ""}${model.forecast.updateDelta} points.`,
    `60-day comparison: ${windows.prior_60d.count} comparator items plus ${windows.structural_baseline.count} structural baseline items.`,
    `Pattern test: ${model.archetype.name} maps ${model.archetype.pressurePath}.`,
    `Disconfirmation test: ${model.falsifiers[0]}`,
  ];
}

function buildUiModel(candidate, model) {
  const scenario = model.scenarioSpread;
  return {
    version: model.version,
    generatedAt: model.generatedAt,
    score: model.confidence,
    scores: {
      baseRate: model.scores.baseRate,
      evidence: model.scores.evidenceQuality,
      weakSignalBurst: model.scores.recencyPulse,
      convergence: model.scores.convergence,
      causalTension: model.scores.persistence,
      friction: model.scores.acceleration,
      asymmetry: model.scores.impact,
      leadLag: model.scores.falsifiability,
      timing: Math.max(20, 100 - model.scores.uncertainty),
      falsifiability: model.scores.falsifiability,
      novelty: model.scores.novelty,
      uncertainty: model.scores.uncertainty,
      sourceDiversity: model.evidenceWindows.recent_24h.sourceGroups.length + model.evidenceWindows.prior_60d.sourceGroups.length,
      sourceReliability: model.scores.evidenceQuality,
      domains: model.domains.map((entry) => entry.domain),
      referenceClass: model.referenceClass.label,
    },
    scenarioWeights: scenario.weights,
    convictionBand: model.convictionBand,
    archetype: model.archetype.name,
    hiddenVariable: model.archetype.hiddenVariable,
    pressurePath: model.archetype.pressurePath,
    leadingIndicators: model.leadingIndicators,
    disconfirmers: model.falsifiers,
    baseCase: scenario.baseCase.summary,
    upsideCase: scenario.upsideCase.summary,
    downsideCase: scenario.downsideCase.summary,
    nonObviousRead: model.nonObviousRead,
    confidenceReason: model.reasoningSummary,
    executiveRead: `${candidate.region}. ${model.convictionBand}: ${candidate.summary}`,
    evidenceStack: model.evidenceStack,
    automationContract: model.automationContract,
  };
}

function buildPatternModel(candidate, options = {}) {
  const now = options.now instanceof Date ? options.now : new Date(options.now || Date.now());
  const evidenceWindows = buildEvidenceWindows(candidate, now);
  const evidencePairs = buildEvidencePairs(evidenceWindows);
  const archetype = inferArchetype(candidate);
  const domains = inferDomains(candidate, candidate.evidence || []);
  const prior = referencePrior(candidate);
  const scores = computeScores(candidate, evidenceWindows, archetype, domains, prior);
  const leadingIndicators = buildLeadingIndicators(candidate, archetype, domains);
  const falsifiers = buildFalsifiers(candidate, archetype);
  const scenarioSpread = buildScenarioSpread(candidate, scores, archetype, leadingIndicators, falsifiers);
  const forecast = buildForecast(candidate, scores, prior, now);
  const brierTracking = buildBrierTracking(candidate, forecast);
  const band = convictionBand(scores);
  const topDomains = domains.map((entry) => entry.domain).slice(0, 3);
  const reasoningSummary = `${PATTERN_ENGINE_VERSION} assigns ${scores.confidence}/100 confidence and ${forecast.probability}% probability after pairing the ${evidenceWindows.recent_24h.count}-item 24-hour pulse with ${evidenceWindows.prior_60d.count} 60-day comparators and ${evidenceWindows.structural_baseline.count} structural baselines. Strongest dimensions: recency pulse ${scores.recencyPulse}, persistence ${scores.persistence}, acceleration ${scores.acceleration}; contradiction ${scores.contradiction}.`;
  const nonObviousRead = `${archetype.nonObviousThesis}. The model is watching ${archetype.hiddenVariable} rather than the headline theme itself${topDomains.length ? `, because the evidence crosses ${topDomains.join(", ")}` : ""}.`;

  const model = {
    version: PATTERN_ENGINE_VERSION,
    generatedAt: now.toISOString(),
    cadence: "nightly-0100-local",
    costModel: "no paid APIs, no LLM/API calls, deterministic open-source JavaScript",
    referenceClass: prior,
    archetype: {
      name: archetype.name,
      hiddenVariable: archetype.hiddenVariable,
      pressurePath: archetype.pressurePath,
      nonObviousThesis: archetype.nonObviousThesis,
      laggingIndicators: archetype.laggingIndicators,
    },
    domains,
    evidenceWindows: {
      recent_24h: evidenceWindows.recent_24h,
      prior_60d: evidenceWindows.prior_60d,
      structural_baseline: evidenceWindows.structural_baseline,
    },
    evidencePairs,
    scores,
    confidence: scores.confidence,
    convictionBand: band,
    forecast,
    leadingIndicators,
    falsifiers,
    scenarioSpread,
    reasoningSummary,
    nonObviousRead,
    brierTracking,
    automationContract: [
      "geo_signal_seed",
      "source_mix",
      "time_windowed_evidence",
      "reference_class_prior",
      "leading_indicators",
      "disconfirmers",
      "previous_resolution_outcomes",
      "brier_score_tracking",
    ],
  };

  model.evidenceStack = buildEvidenceStack(model);
  model.uiModel = buildUiModel(candidate, model);
  return model;
}

module.exports = {
  PATTERN_ENGINE_VERSION,
  buildPatternModel,
};
