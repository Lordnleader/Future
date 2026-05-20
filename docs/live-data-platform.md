# Live Data Platform

Predict the Future is a static site fed by a nightly evidence pipeline. GitHub
Pages stays simple: it serves HTML, JS, assets, and generated JSON. GitHub
Actions does the live work at night, writes `data/live-signal-candidates.json`,
and writes browser-ready `data/predictions/latest.json`.

## Architecture

1. `scripts/generate-nightly-signals.js` runs at 01:00 Europe/London or on demand.
2. The script queries free/open APIs where possible and falls back per source if
   a key is missing or an endpoint fails.
3. Output is normalized into candidate signals with evidence URLs, observed
   timestamps, source names, leading indicators, disconfirmers, and reference
   class priors.
4. The generator also emits `data/predictions/latest.json`, a compact set of
   browser-ready predictions that preserve the same PFE input contract.
5. The browser fetches the latest prediction JSON in the background, hydrates it
   through PFE-2.1, and keeps the current hand-authored model as a fallback so
   the globe never goes blank.

## Source Registry

Default live/no-key sources:

- GDELT DOC 2.1 for global news/event evidence.
- World Bank Indicators for structural economic and development baselines.
- Open-Meteo for current forecast and physical-condition context.
- NASA POWER for recent climate and energy-relevant physical baselines.
- USGS Earthquake Catalog for hazard events.
- ReliefWeb for humanitarian and disaster reports.
- Crossref for research metadata.
- Wikipedia / MediaWiki for entity and context enrichment.

Optional/keyed or lower-priority sources already represented in the registry:

- NASA FIRMS, OpenAQ, Guardian Open Platform, New York Times APIs, EIA Open Data,
  OpenAlex, FAOSTAT, WHO GHO, ILOSTAT, OECD, arXiv, and Wikidata.

## Secrets To Add Later

The generator works without secrets, but these unlock stronger source coverage:

- `NASA_FIRMS_API_KEY`
- `OPENAQ_API_KEY`
- `GUARDIAN_API_KEY`
- `NYT_API_KEY`
- `EIA_API_KEY`
- `OPENALEX_API_KEY`
- `CROSSREF_MAILTO`

## Nightly Research

The deterministic API pipeline should be the source of record. A separate Codex
nightly research scan can run at 1am to search broader web/news sources and
propose candidate signals, but those candidates should still be validated into
the same JSON contract before they appear as live data-backed predictions.

## Current Browser Contract

`data/predictions/latest.json` uses `future-signals.predictions.v1` and exposes a
`signals` array. Each signal carries geography, copy, source names, evidence
items, `sourceMix`, `referenceClassPrior`, `leadingIndicators`, and
`disconfirmers`. The browser merges these nightly signals ahead of the static
fallback set, then recalculates PFE-2.1 scores client-side so the site can show
fresh predictions without a build step.
