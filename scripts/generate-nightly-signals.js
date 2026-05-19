#!/usr/bin/env node

"use strict";

const fs = require("node:fs/promises");
const path = require("node:path");

const SCRIPT_VERSION = "nightly-signal-scaffold-0.1.0";
const SCHEMA_VERSION = "future-signals.candidates.v1";
const DEFAULT_OUTPUT = path.join("data", "live-signal-candidates.json");
const NIGHTLY_INPUT_CONTRACT = [
  "geo_signal_seed",
  "source_mix",
  "reference_class_prior",
  "leading_indicators",
  "disconfirmers",
  "previous_resolution_outcomes",
];

const SOURCE_REGISTRY = [
  {
    id: "gdelt-doc",
    name: "GDELT DOC 2.1",
    adapter: "gdeltDoc",
    evidenceType: "current_event",
    url: "https://api.gdeltproject.org/api/v2/doc/doc",
    requiresKey: false,
    enabledByDefault: true,
    docs: "https://www.gdeltproject.org/data.html",
  },
  {
    id: "world-bank-indicators",
    name: "World Bank Indicators",
    adapter: "worldBank",
    evidenceType: "structural",
    url: "https://api.worldbank.org/v2/country/WLD/indicator/EG.ELC.ACCS.ZS",
    requiresKey: false,
    enabledByDefault: true,
    docs: "https://datahelpdesk.worldbank.org/knowledgebase/articles/889392",
  },
  {
    id: "open-meteo",
    name: "Open-Meteo Forecast",
    adapter: "openMeteo",
    evidenceType: "observed_condition",
    url: "https://api.open-meteo.com/v1/forecast",
    requiresKey: false,
    enabledByDefault: true,
    docs: "https://open-meteo.com/en/docs",
  },
  {
    id: "nasa-power",
    name: "NASA POWER",
    adapter: "nasaPower",
    evidenceType: "physical_baseline",
    url: "https://power.larc.nasa.gov/api/temporal/daily/point",
    requiresKey: false,
    enabledByDefault: true,
    docs: "https://power.larc.nasa.gov/docs/services/api/",
  },
  {
    id: "usgs-earthquakes",
    name: "USGS Earthquake Catalog",
    adapter: "usgsEarthquakes",
    evidenceType: "hazard_event",
    url: "https://earthquake.usgs.gov/fdsnws/event/1/query",
    requiresKey: false,
    enabledByDefault: true,
    docs: "https://earthquake.usgs.gov/fdsnws/event/1/",
  },
  {
    id: "reliefweb",
    name: "ReliefWeb",
    adapter: "reliefWeb",
    evidenceType: "humanitarian_event",
    url: "https://api.reliefweb.int/v1/reports",
    requiresKey: false,
    enabledByDefault: true,
    docs: "https://apidoc.reliefweb.int/",
  },
  {
    id: "crossref",
    name: "Crossref",
    adapter: "crossref",
    evidenceType: "research_metadata",
    url: "https://api.crossref.org/works",
    requiresKey: false,
    enabledByDefault: true,
    docs: "https://www.crossref.org/documentation/retrieve-metadata/rest-api/",
  },
  {
    id: "arxiv",
    name: "arXiv",
    adapter: "arxiv",
    evidenceType: "research_preprint",
    url: "https://export.arxiv.org/api/query",
    requiresKey: false,
    enabledByDefault: false,
    docs: "https://info.arxiv.org/help/api/user-manual.html",
  },
  {
    id: "wikipedia",
    name: "Wikipedia / MediaWiki",
    adapter: "wikipedia",
    evidenceType: "entity_context",
    url: "https://en.wikipedia.org/w/api.php",
    requiresKey: false,
    enabledByDefault: true,
    docs: "https://www.mediawiki.org/wiki/API:Action_API",
  },
  {
    id: "wikidata",
    name: "Wikidata Query Service",
    adapter: "wikidataStub",
    evidenceType: "knowledge_graph",
    url: "https://query.wikidata.org/sparql",
    requiresKey: false,
    enabledByDefault: false,
    docs: "https://www.mediawiki.org/wiki/Wikidata_Query_Service/User_Manual",
  },
  {
    id: "nasa-firms",
    name: "NASA FIRMS",
    adapter: "keyedStub",
    evidenceType: "observed_condition",
    url: "https://firms.modaps.eosdis.nasa.gov/api/",
    requiresKey: true,
    keyEnv: "NASA_FIRMS_API_KEY",
    enabledByDefault: false,
    docs: "https://firms.modaps.eosdis.nasa.gov/api/",
  },
  {
    id: "openaq",
    name: "OpenAQ",
    adapter: "keyedStub",
    evidenceType: "observed_condition",
    url: "https://api.openaq.org/v3/latest",
    requiresKey: true,
    keyEnv: "OPENAQ_API_KEY",
    enabledByDefault: false,
    docs: "https://docs.openaq.org/",
  },
  {
    id: "guardian-open-platform",
    name: "Guardian Open Platform",
    adapter: "keyedStub",
    evidenceType: "current_event",
    url: "https://content.guardianapis.com/search",
    requiresKey: true,
    keyEnv: "GUARDIAN_API_KEY",
    enabledByDefault: false,
    docs: "https://open-platform.theguardian.com/documentation/",
  },
  {
    id: "nyt",
    name: "New York Times APIs",
    adapter: "keyedStub",
    evidenceType: "current_event",
    url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
    requiresKey: true,
    keyEnv: "NYT_API_KEY",
    enabledByDefault: false,
    docs: "https://developer.nytimes.com/docs",
  },
  {
    id: "eia",
    name: "EIA Open Data",
    adapter: "keyedStub",
    evidenceType: "energy_data",
    url: "https://api.eia.gov/v2/",
    requiresKey: true,
    keyEnv: "EIA_API_KEY",
    enabledByDefault: false,
    docs: "https://www.eia.gov/opendata/documentation.php",
  },
  {
    id: "openalex",
    name: "OpenAlex",
    adapter: "keyedStub",
    evidenceType: "research_metadata",
    url: "https://api.openalex.org/works",
    requiresKey: true,
    keyEnv: "OPENALEX_API_KEY",
    enabledByDefault: false,
    docs: "https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication",
  },
  {
    id: "faostat",
    name: "FAOSTAT",
    adapter: "registryStub",
    evidenceType: "food_baseline",
    url: "https://www.fao.org/faostat/",
    requiresKey: false,
    enabledByDefault: false,
    docs: "https://www.fao.org/statistics/highlights-archive/highlights-detail/faostat-launches-a-new-api-developer-portal-to-make-data-access-easier/en",
  },
  {
    id: "who-gho",
    name: "WHO Global Health Observatory",
    adapter: "registryStub",
    evidenceType: "health_baseline",
    url: "https://ghoapi.azureedge.net/api/",
    requiresKey: false,
    enabledByDefault: false,
    docs: "https://www.who.int/data/gho/info/gho-odata-api",
  },
  {
    id: "ilostat",
    name: "ILOSTAT",
    adapter: "registryStub",
    evidenceType: "labour_baseline",
    url: "https://ilostat.ilo.org/data/bulk/",
    requiresKey: false,
    enabledByDefault: false,
    docs: "https://ilostat.ilo.org/data/bulk/",
  },
  {
    id: "oecd",
    name: "OECD Data API",
    adapter: "registryStub",
    evidenceType: "structural",
    url: "https://sdmx.oecd.org/public/rest/",
    requiresKey: false,
    enabledByDefault: false,
    docs: "https://www.oecd.org/en/data/insights/data-explainers/2024/09/api.html",
  },
];

const SIGNAL_BLUEPRINTS = [
  {
    id: "nightly-grid-flexibility",
    title: "Grid Flexibility Becomes A Local Resilience Product",
    lat: 53.2,
    lon: -2.4,
    labelRank: 1,
    region: "UNITED KINGDOM / POWER",
    category: "Energy",
    horizon: "12-30 months",
    query: "grid flexibility demand response electricity prices renewables",
    summary:
      "Renewables variability, electrification, and price volatility make demand flexibility more practical at household and municipal scale.",
    implication:
      "Utilities, aggregators, and local authorities can turn flexible loads into resilience capacity before large grid upgrades land.",
    referenceClass:
      "consumer energy behavior changing when price signals and automation make flexibility low-friction",
    leadingIndicators: [
      "more households enrolling in automated demand-response tariffs",
      "distribution operators procuring flexibility before reinforcement",
      "vehicle-to-grid and heat-pump orchestration pilots moving into standard offers",
    ],
    disconfirmers: [
      "retail prices stabilize while flexibility enrollment stalls",
      "grid operators stop procuring local flexibility in constrained areas",
    ],
  },
  {
    id: "nightly-coastal-risk-pricing",
    title: "Coastal Risk Pricing Spreads Beyond Obvious Hotspots",
    lat: 29.5,
    lon: -90.2,
    labelRank: 2,
    region: "GULF COAST / RISK PRICING",
    category: "Climate",
    horizon: "12-36 months",
    query: "coastal insurance retreat property risk storm exposure premiums",
    summary:
      "Insurance withdrawals, rebuilding costs, and severe-weather exposure suggest risk pricing can migrate into lending, housing liquidity, and local budgets.",
    implication:
      "Insurability becomes a practical constraint on asset strategy, not a back-office procurement detail.",
    referenceClass: "physical climate risk becoming financial-market and household behavior",
    leadingIndicators: [
      "new exclusions or coverage caps in exposed coastal counties",
      "state-backed insurers taking a larger share of policies",
      "mortgage or municipal disclosures citing insurance availability",
    ],
    disconfirmers: [
      "private insurers re-enter exposed markets without large premium increases",
      "reinsurance costs fall while coverage availability improves",
    ],
  },
  {
    id: "nightly-cold-chain-infrastructure",
    title: "Cold Chains Become Cross-Sector Growth Infrastructure",
    lat: -1.3,
    lon: 36.8,
    labelRank: 3,
    region: "EAST AFRICA / FOOD + HEALTH",
    category: "Food systems",
    horizon: "24-48 months",
    query: "cold chain solar refrigeration vaccines food loss East Africa",
    summary:
      "Urban food demand, vaccine logistics, and solar refrigeration point toward cold-chain capacity as a shared health and food-system layer.",
    implication:
      "Cooling logistics may unlock agriculture, clinics, and retail reliability at the same time.",
    referenceClass: "multi-use infrastructure scaling when several constrained sectors need the same capability",
    leadingIndicators: [
      "solar cold-room projects expanding beyond pilots",
      "clinic and market logistics procurements using the same refrigeration networks",
      "food-loss programs linking finance to distributed cooling assets",
    ],
    disconfirmers: [
      "cold-chain utilization remains seasonal and project-dependent",
      "maintenance and finance costs prevent expansion beyond donor pilots",
    ],
  },
];

function parseArgs(argv) {
  const options = {
    output: DEFAULT_OUTPUT,
    dryRun: process.env.SIGNAL_GENERATOR_LIVE !== "1",
    limit: SIGNAL_BLUEPRINTS.length,
    sources: null,
    pretty: true,
  };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--output" && argv[i + 1]) {
      options.output = argv[i + 1];
      i += 1;
    } else if (arg === "--dry-run") {
      options.dryRun = true;
    } else if (arg === "--live") {
      options.dryRun = false;
    } else if (arg === "--compact") {
      options.pretty = false;
    } else if (arg === "--limit" && argv[i + 1]) {
      options.limit = Math.max(1, Number.parseInt(argv[i + 1], 10) || SIGNAL_BLUEPRINTS.length);
      i += 1;
    } else if (arg === "--source" && argv[i + 1]) {
      options.sources = argv[i + 1].split(",").map((source) => source.trim()).filter(Boolean);
      i += 1;
    } else if (arg === "--help") {
      printHelp();
      process.exit(0);
    } else {
      throw new Error(`Unknown argument: ${arg}`);
    }
  }

  return options;
}

function printHelp() {
  console.log(`Usage: node scripts/generate-nightly-signals.js [options]

Options:
  --output <file>   Write JSON to a specific path. Default: ${DEFAULT_OUTPUT}
  --dry-run         Use deterministic stub evidence. This is the default unless SIGNAL_GENERATOR_LIVE=1.
  --live            Try live adapters, then fall back source-by-source to stubs.
  --source <ids>    Comma-separated registry source ids to include.
  --limit <n>       Number of candidate signal blueprints to emit.
  --compact         Write compact JSON.
  --help            Show this help text.`);
}

function selectSources(options) {
  const allowed = options.sources ? new Set(options.sources) : null;
  return SOURCE_REGISTRY.filter((source) => {
    if (allowed) return allowed.has(source.id);
    return source.enabledByDefault || source.requiresKey === false;
  });
}

function makeRunId(date) {
  return `nightly-${date.toISOString().replace(/[:.]/g, "-")}`;
}

function stableScore(text, min, max) {
  let hash = 0;
  for (let i = 0; i < text.length; i += 1) {
    hash = (hash * 31 + text.charCodeAt(i)) >>> 0;
  }
  return min + (hash % (max - min + 1));
}

function isoDaysAgo(now, days) {
  const date = new Date(now.getTime() - days * 24 * 60 * 60 * 1000);
  return date.toISOString();
}

function isoDateCompact(date) {
  return date.toISOString().slice(0, 10).replace(/-/g, "");
}

function compactDateToIso(value) {
  const text = String(value);
  if (!/^\d{8}$/.test(text)) return new Date().toISOString();
  return new Date(`${text.slice(0, 4)}-${text.slice(4, 6)}-${text.slice(6, 8)}T00:00:00.000Z`).toISOString();
}

function formatMetric(value, unit) {
  const number = Number(value);
  if (!Number.isFinite(number)) return `n/a ${unit}`;
  return `${Math.round(number * 10) / 10} ${unit}`;
}

function firstText(value) {
  if (Array.isArray(value)) return String(value[0] || "").trim();
  return String(value || "").trim();
}

function firstXml(xml, tag) {
  const match = xml.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i"));
  return match?.[1]?.trim() || "";
}

function firstXmlAttribute(xml, tag, attribute) {
  const match = xml.match(new RegExp(`<${tag}[^>]*\\s${attribute}="([^"]+)"`, "i"));
  return match?.[1] || "";
}

function decodeXml(value) {
  return String(value)
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function sourceAvailable(source, dryRun) {
  if (dryRun) return false;
  if (!source.requiresKey) return true;
  return Boolean(process.env[source.keyEnv]);
}

async function fetchJson(url, timeoutMs = 15000) {
  if (typeof fetch !== "function") {
    throw new Error("global fetch is unavailable; use Node 18+ or dry-run mode");
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, {
      signal: controller.signal,
      headers: { "user-agent": `predict-future/${SCRIPT_VERSION}` },
    });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    return await response.json();
  } finally {
    clearTimeout(timeout);
  }
}

async function fetchText(url, timeoutMs = 15000) {
  if (typeof fetch !== "function") {
    throw new Error("global fetch is unavailable; use Node 18+ or dry-run mode");
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, {
      signal: controller.signal,
      headers: { "user-agent": `predict-future/${SCRIPT_VERSION} (nightly scaffold)` },
    });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    return await response.text();
  } finally {
    clearTimeout(timeout);
  }
}

async function gdeltDocAdapter(source, blueprint, now) {
  const params = new URLSearchParams({
    query: blueprint.query,
    mode: "artlist",
    format: "json",
    maxrecords: "5",
    sort: "hybridrel",
  });
  const url = `${source.url}?${params.toString()}`;
  const json = await fetchJson(url);
  const articles = Array.isArray(json.articles) ? json.articles : [];
  return articles.slice(0, 3).map((article, index) => ({
    sourceId: source.id,
    sourceName: source.name,
    sourceType: source.evidenceType,
    adapter: source.adapter,
    title: article.title || `${blueprint.title} report ${index + 1}`,
    url: article.url || url,
    observedAt: article.seendate ? normalizeGdeltDate(article.seendate) : now.toISOString(),
    capturedAt: now.toISOString(),
    summary: article.seendate
      ? `GDELT article match for "${blueprint.query}" observed at ${article.seendate}.`
      : `GDELT article match for "${blueprint.query}".`,
    confidence: stableScore(`${blueprint.id}:${source.id}:${index}`, 52, 76),
  }));
}

async function openMeteoAdapter(source, blueprint, now) {
  const params = new URLSearchParams({
    latitude: String(blueprint.lat),
    longitude: String(blueprint.lon),
    hourly: "temperature_2m,precipitation,wind_speed_10m",
    daily: "temperature_2m_max,temperature_2m_min,precipitation_sum",
    timezone: "UTC",
    forecast_days: "3",
  });
  const url = `${source.url}?${params.toString()}`;
  const json = await fetchJson(url);
  const firstDay = json.daily?.time?.[0] || now.toISOString().slice(0, 10);
  const maxTemp = json.daily?.temperature_2m_max?.[0];
  const rain = json.daily?.precipitation_sum?.[0];
  return [
    {
      sourceId: source.id,
      sourceName: source.name,
      sourceType: source.evidenceType,
      adapter: source.adapter,
      title: `${source.name}: ${blueprint.region} short-range weather signal`,
      url,
      observedAt: `${firstDay}T00:00:00.000Z`,
      capturedAt: now.toISOString(),
      summary: `Open-Meteo forecast near ${blueprint.region}: max temperature ${formatMetric(maxTemp, "C")} and precipitation ${formatMetric(rain, "mm")}.`,
      confidence: stableScore(`${blueprint.id}:${source.id}:weather`, 53, 72),
    },
  ];
}

async function nasaPowerAdapter(source, blueprint, now) {
  const end = isoDateCompact(now);
  const start = isoDateCompact(new Date(now.getTime() - 6 * 24 * 60 * 60 * 1000));
  const params = new URLSearchParams({
    latitude: String(blueprint.lat),
    longitude: String(blueprint.lon),
    start,
    end,
    community: "RE",
    parameters: "T2M,PRECTOTCORR,WS10M",
    format: "JSON",
  });
  const url = `${source.url}?${params.toString()}`;
  const json = await fetchJson(url);
  const parameters = json.properties?.parameter || {};
  const latestDate = Object.keys(parameters.T2M || {}).sort().pop();
  return [
    {
      sourceId: source.id,
      sourceName: source.name,
      sourceType: source.evidenceType,
      adapter: source.adapter,
      title: `${source.name}: recent physical baseline near ${blueprint.region}`,
      url,
      observedAt: latestDate ? compactDateToIso(latestDate) : now.toISOString(),
      capturedAt: now.toISOString(),
      summary: `NASA POWER baseline: T2M ${formatMetric(parameters.T2M?.[latestDate], "C")}, precipitation ${formatMetric(parameters.PRECTOTCORR?.[latestDate], "mm/day")}, wind ${formatMetric(parameters.WS10M?.[latestDate], "m/s")}.`,
      confidence: stableScore(`${blueprint.id}:${source.id}:power`, 54, 74),
    },
  ];
}

async function usgsEarthquakesAdapter(source, blueprint, now) {
  const start = new Date(now.getTime() - 14 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);
  const params = new URLSearchParams({
    format: "geojson",
    latitude: String(blueprint.lat),
    longitude: String(blueprint.lon),
    maxradiuskm: "1200",
    minmagnitude: "4.5",
    starttime: start,
    orderby: "time",
    limit: "3",
  });
  const url = `${source.url}?${params.toString()}`;
  const json = await fetchJson(url);
  const features = Array.isArray(json.features) ? json.features : [];
  return features.slice(0, 3).map((feature, index) => {
    const props = feature.properties || {};
    return {
      sourceId: source.id,
      sourceName: source.name,
      sourceType: source.evidenceType,
      adapter: source.adapter,
      title: props.title || `${source.name} event near ${blueprint.region}`,
      url: props.url || url,
      observedAt: props.time ? new Date(props.time).toISOString() : now.toISOString(),
      capturedAt: now.toISOString(),
      summary: `USGS event context near ${blueprint.region}: magnitude ${formatMetric(props.mag, "Mw")} at ${props.place || "regional location"}.`,
      confidence: stableScore(`${blueprint.id}:${source.id}:${index}`, 46, 66),
    };
  });
}

async function reliefWebAdapter(source, blueprint, now) {
  const params = new URLSearchParams({
    appname: "predict-the-future",
    limit: "3",
    preset: "latest",
    "query[value]": blueprint.query,
    "fields[include][]": "title",
  });
  params.append("fields[include][]", "url");
  params.append("fields[include][]", "date.created");
  params.append("fields[include][]", "source.name");
  const url = `${source.url}?${params.toString()}`;
  const json = await fetchJson(url);
  const rows = Array.isArray(json.data) ? json.data : [];
  return rows.slice(0, 3).map((row, index) => {
    const fields = row.fields || {};
    return {
      sourceId: source.id,
      sourceName: source.name,
      sourceType: source.evidenceType,
      adapter: source.adapter,
      title: fields.title || `${source.name} report near ${blueprint.region}`,
      url: fields.url || url,
      observedAt: fields.date?.created || now.toISOString(),
      capturedAt: now.toISOString(),
      summary: `ReliefWeb report match for "${blueprint.query}" from ${(fields.source || []).map((item) => item.name).filter(Boolean).join(", ") || "humanitarian source"}.`,
      confidence: stableScore(`${blueprint.id}:${source.id}:${index}`, 50, 70),
    };
  });
}

async function crossrefAdapter(source, blueprint, now) {
  const params = new URLSearchParams({
    query: blueprint.query,
    rows: "3",
    sort: "published",
    order: "desc",
  });
  if (process.env.CROSSREF_MAILTO) params.set("mailto", process.env.CROSSREF_MAILTO);
  const url = `${source.url}?${params.toString()}`;
  const json = await fetchJson(url);
  const rows = Array.isArray(json.message?.items) ? json.message.items : [];
  return rows.slice(0, 3).map((item, index) => {
    const published = item.published?.["date-parts"]?.[0] || item.created?.["date-parts"]?.[0];
    const publishedAt = Array.isArray(published)
      ? new Date(Date.UTC(published[0] || now.getUTCFullYear(), (published[1] || 1) - 1, published[2] || 1)).toISOString()
      : now.toISOString();
    return {
      sourceId: source.id,
      sourceName: source.name,
      sourceType: source.evidenceType,
      adapter: source.adapter,
      title: firstText(item.title) || `${source.name} research result for ${blueprint.title}`,
      url: item.URL || url,
      observedAt: publishedAt,
      capturedAt: now.toISOString(),
      summary: `Crossref research metadata match from ${item.publisher || "publisher metadata"}; DOI ${item.DOI || "not listed"}.`,
      confidence: stableScore(`${blueprint.id}:${source.id}:${index}`, 48, 68),
    };
  });
}

async function arxivAdapter(source, blueprint, now) {
  const params = new URLSearchParams({
    search_query: `all:${blueprint.query}`,
    start: "0",
    max_results: "3",
    sortBy: "submittedDate",
    sortOrder: "descending",
  });
  const url = `${source.url}?${params.toString()}`;
  const xml = await fetchText(url);
  return [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)].slice(0, 3).map((match, index) => {
    const entry = match[1];
    const title = decodeXml(firstXml(entry, "title") || `${source.name} preprint for ${blueprint.title}`);
    const updated = firstXml(entry, "updated") || now.toISOString();
    const link = firstXmlAttribute(entry, "link", "href") || url;
    const summary = decodeXml(firstXml(entry, "summary") || "").replace(/\s+/g, " ").trim();
    return {
      sourceId: source.id,
      sourceName: source.name,
      sourceType: source.evidenceType,
      adapter: source.adapter,
      title,
      url: link,
      observedAt: updated,
      capturedAt: now.toISOString(),
      summary: summary ? `arXiv preprint signal: ${summary.slice(0, 180)}.` : `arXiv preprint metadata match for "${blueprint.query}".`,
      confidence: stableScore(`${blueprint.id}:${source.id}:${index}`, 45, 65),
    };
  });
}

async function wikipediaAdapter(source, blueprint, now) {
  const params = new URLSearchParams({
    action: "query",
    generator: "search",
    gsrsearch: blueprint.query,
    gsrlimit: "3",
    prop: "extracts|info",
    exintro: "1",
    explaintext: "1",
    inprop: "url",
    format: "json",
    origin: "*",
  });
  const url = `${source.url}?${params.toString()}`;
  const json = await fetchJson(url);
  const pages = Object.values(json.query?.pages || {});
  return pages.slice(0, 3).map((page, index) => ({
    sourceId: source.id,
    sourceName: source.name,
    sourceType: source.evidenceType,
    adapter: source.adapter,
    title: page.title || `${source.name} context for ${blueprint.title}`,
    url: page.fullurl || url,
    observedAt: now.toISOString(),
    capturedAt: now.toISOString(),
    summary: page.extract
      ? `Wikipedia context: ${page.extract.replace(/\s+/g, " ").slice(0, 190)}.`
      : `Wikipedia entity/context match for "${blueprint.query}".`,
    confidence: stableScore(`${blueprint.id}:${source.id}:${index}`, 42, 60),
  }));
}

async function worldBankAdapter(source, blueprint, now) {
  const url = `${source.url}?format=json&per_page=3`;
  const json = await fetchJson(url);
  const rows = Array.isArray(json) && Array.isArray(json[1]) ? json[1] : [];
  return rows.slice(0, 2).map((row, index) => ({
    sourceId: source.id,
    sourceName: source.name,
    sourceType: source.evidenceType,
    adapter: source.adapter,
    title: `${row.indicator?.value || "World Bank indicator"}: ${row.country?.value || "World"}`,
    url,
    observedAt: row.date ? `${row.date}-12-31T00:00:00.000Z` : now.toISOString(),
    capturedAt: now.toISOString(),
    summary: `Structural context from World Bank indicator ${row.indicator?.id || "unknown"} for ${row.country?.value || "global data"}.`,
    confidence: stableScore(`${blueprint.id}:${source.id}:${index}`, 50, 70),
  }));
}

async function noaaStubAdapter(source, blueprint, now) {
  return stubEvidence(source, blueprint, now, 1);
}

async function keyedStubAdapter(source, blueprint, now) {
  return stubEvidence(source, blueprint, now, 1);
}

async function registryStubAdapter(source, blueprint, now) {
  return stubEvidence(source, blueprint, now, 1);
}

const ADAPTERS = {
  gdeltDoc: gdeltDocAdapter,
  worldBank: worldBankAdapter,
  openMeteo: openMeteoAdapter,
  nasaPower: nasaPowerAdapter,
  usgsEarthquakes: usgsEarthquakesAdapter,
  reliefWeb: reliefWebAdapter,
  crossref: crossrefAdapter,
  arxiv: arxivAdapter,
  wikipedia: wikipediaAdapter,
  noaaStub: noaaStubAdapter,
  keyedStub: keyedStubAdapter,
  registryStub: registryStubAdapter,
  wikidataStub: registryStubAdapter,
};

function normalizeGdeltDate(value) {
  const match = String(value).match(/^(\d{4})(\d{2})(\d{2})T?(\d{2})?(\d{2})?(\d{2})?/);
  if (!match) return new Date().toISOString();
  const [, year, month, day, hour = "00", minute = "00", second = "00"] = match;
  return new Date(`${year}-${month}-${day}T${hour}:${minute}:${second}Z`).toISOString();
}

function stubEvidence(source, blueprint, now, count = 2) {
  return Array.from({ length: count }, (_, index) => {
    const observedAt = isoDaysAgo(now, index + 1);
    return {
      sourceId: source.id,
      sourceName: source.name,
      sourceType: source.evidenceType,
      adapter: source.adapter,
      title: `${blueprint.title} stub evidence ${index + 1}`,
      url: source.url,
      observedAt,
      capturedAt: now.toISOString(),
      summary: `Dry-run ${source.evidenceType} evidence for "${blueprint.query}". Replace this with live adapter output when network and keys are available.`,
      confidence: stableScore(`${blueprint.id}:${source.id}:stub:${index}`, 45, 68),
    };
  });
}

async function collectEvidence(source, blueprint, now, dryRun) {
  if (!sourceAvailable(source, dryRun)) {
    return {
      source,
      status: source.requiresKey && !process.env[source.keyEnv] ? "missing_key_dry_run" : "dry_run",
      evidence: stubEvidence(source, blueprint, now),
      error: null,
    };
  }

  try {
    const adapter = ADAPTERS[source.adapter];
    if (!adapter) throw new Error(`No adapter registered for ${source.adapter}`);
    const evidence = await adapter(source, blueprint, now);
    const status = source.adapter.toLowerCase().includes("stub")
      ? "stub_adapter"
      : evidence.length
        ? "fetched"
        : "empty_fallback_stub";
    return {
      source,
      status,
      evidence: evidence.length ? evidence : stubEvidence(source, blueprint, now, 1),
      error: null,
    };
  } catch (error) {
    return {
      source,
      status: "error_fallback_stub",
      evidence: stubEvidence(source, blueprint, now, 1),
      error: error.message,
    };
  }
}

function buildCandidate(blueprint, evidenceGroups, now) {
  const evidence = evidenceGroups.flatMap((group) => group.evidence);
  const liveEvidenceCount = evidenceGroups
    .filter((group) => group.status === "fetched")
    .reduce((total, group) => total + group.evidence.length, 0);
  const sourceMix = evidenceGroups.map((group) => ({
    source_id: group.source.id,
    source_name: group.source.name,
    evidence_type: group.source.evidenceType,
    adapter: group.source.adapter,
    status: group.status,
    evidence_count: group.evidence.length,
    url: group.source.url,
    requires_key: group.source.requiresKey,
    error: group.error,
  }));
  const confidence = Math.round(
    Math.min(86, Math.max(45, 52 + liveEvidenceCount * 4 + evidence.length * 2 + sourceMix.length)),
  );
  const signalCount = evidence.length + liveEvidenceCount * 2;

  return {
    id: blueprint.id,
    kind: "candidate_signal",
    title: blueprint.title,
    lat: blueprint.lat,
    lon: blueprint.lon,
    labelRank: blueprint.labelRank,
    confidence,
    region: blueprint.region,
    category: blueprint.category,
    horizon: blueprint.horizon,
    signalCount,
    summary: blueprint.summary,
    implication: blueprint.implication,
    rationale: `Generated from ${sourceMix.length} registered source adapters with ${evidence.length} evidence items. Live fetches are optional; dry-run evidence preserves the browser ingestion contract.`,
    why: `This candidate is worth monitoring if ${blueprint.leadingIndicators[0]}.`,
    signals: evidence.slice(0, 4).map((item) => `${item.sourceName}: ${item.summary}`),
    sources: [...new Set(evidence.map((item) => item.sourceName))],
    evidence,
    ingestion: {
      geo_signal_seed: {
        id: blueprint.id,
        title: blueprint.title,
        lat: blueprint.lat,
        lon: blueprint.lon,
        region: blueprint.region,
        category: blueprint.category,
        horizon: blueprint.horizon,
        summary: blueprint.summary,
        implication: blueprint.implication,
      },
      source_mix: sourceMix,
      reference_class_prior: {
        label: blueprint.referenceClass,
        base_rate: stableScore(`${blueprint.id}:prior`, 54, 67),
        volatility: stableScore(`${blueprint.id}:volatility`, 55, 74),
        rationale: "Initial scaffold prior for later PFE scoring; replace with measured priors as resolution history accumulates.",
      },
      leading_indicators: blueprint.leadingIndicators.map((indicator, index) => ({
        id: `${blueprint.id}-leading-${index + 1}`,
        text: indicator,
        cadence: "nightly",
        evidence_source_names: evidence.slice(index, index + 2).map((item) => item.sourceName),
      })),
      disconfirmers: blueprint.disconfirmers.map((disconfirmer, index) => ({
        id: `${blueprint.id}-disconfirm-${index + 1}`,
        text: disconfirmer,
        check_cadence: "weekly",
      })),
      previous_resolution_outcomes: [],
    },
    generatedAt: now.toISOString(),
  };
}

async function generate(options) {
  const now = new Date();
  const sources = selectSources(options);
  const blueprints = SIGNAL_BLUEPRINTS.slice(0, options.limit);
  const candidates = [];
  const sourceRuns = new Map();

  for (const blueprint of blueprints) {
    const groups = [];
    for (const source of sources) {
      const group = await collectEvidence(source, blueprint, now, options.dryRun);
      groups.push(group);
      const existing = sourceRuns.get(source.id) || {
        id: source.id,
        name: source.name,
        adapter: source.adapter,
        statuses: {},
      };
      existing.statuses[group.status] = (existing.statuses[group.status] || 0) + 1;
      sourceRuns.set(source.id, existing);
    }
    candidates.push(buildCandidate(blueprint, groups, now));
  }

  const dryRun = candidates.every((candidate) =>
    candidate.ingestion.source_mix.every((source) => source.status !== "fetched"),
  );

  return {
    schemaVersion: SCHEMA_VERSION,
    generator: {
      name: "predict-the-future-nightly-signal-generator",
      version: SCRIPT_VERSION,
      runId: makeRunId(now),
      generatedAt: now.toISOString(),
      mode: dryRun ? "dry_run" : "mixed_or_live",
      cadenceTarget: "nightly-0100-local",
      dryRunRequested: options.dryRun,
    },
    contract: NIGHTLY_INPUT_CONTRACT,
    sourceRegistry: sources.map((source) => ({
      id: source.id,
      name: source.name,
      adapter: source.adapter,
      evidenceType: source.evidenceType,
      url: source.url,
      requiresKey: source.requiresKey,
      keyEnv: source.keyEnv || null,
      enabledByDefault: source.enabledByDefault,
      docs: source.docs || null,
    })),
    sourceRunSummary: [...sourceRuns.values()],
    candidates,
  };
}

async function main() {
  const options = parseArgs(process.argv.slice(2));
  const output = await generate(options);
  const destination = path.resolve(options.output);
  await fs.mkdir(path.dirname(destination), { recursive: true });
  await fs.writeFile(destination, JSON.stringify(output, null, options.pretty ? 2 : 0) + "\n", "utf8");
  console.log(`Wrote ${output.candidates.length} candidate signals to ${destination}`);
  console.log(`Mode: ${output.generator.mode}`);
}

main().catch((error) => {
  console.error(error.stack || error.message);
  process.exitCode = 1;
});
