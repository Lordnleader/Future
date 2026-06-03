# Codex News Research Automation

This project can use a Codex automation as an overnight research analyst without
adding a paid news API. The automation writes a structured digest, then the
existing nightly generator turns that digest into validated prediction evidence.

## What Codex Research Adds

The deterministic pipeline already collects open data from GDELT, World Bank,
Open-Meteo, NASA POWER, USGS, ReliefWeb, Crossref, and Wikipedia. The Codex
automation adds broader editorial research:

- global news network reporting from the last 24 hours
- public reports from international agencies, central banks, regulators, and
  research institutions
- comparisons against themes that have persisted across roughly the last 60 days
- contradictions and disconfirming evidence, not only confirming headlines
- links and source names for the evidence it uses

The automation does not publish prose directly to the site. It writes structured
evidence to `data/research/codex-news-digest.json`, then runs
`scripts/generate-nightly-signals.js --live --research-input
data/research/codex-news-digest.json`.

## Digest Schema

```json
{
  "schemaVersion": "future-signals.codex-research.v1",
  "generatedAt": "2026-06-03T01:00:00.000Z",
  "researchWindow": {
    "recentHours": 24,
    "comparisonDays": 60
  },
  "items": [
    {
      "title": "Short source headline or report title",
      "summary": "One or two sentences describing the signal and why it matters.",
      "url": "https://example.com/report",
      "sourceName": "Source name",
      "publishedAt": "2026-06-03T00:10:00.000Z",
      "region": "Region or GLOBAL",
      "category": "Energy",
      "relatedSignalIds": ["nightly-grid-flexibility"],
      "terms": ["grid", "flexibility", "capacity"],
      "direction": "strengthens",
      "confidence": 72
    }
  ]
}
```

`relatedSignalIds` is preferred because it removes ambiguity. If it is missing,
the generator falls back to keyword overlap against each nightly signal
blueprint.

## No-Cost Boundary

The automation must not use:

- paid news APIs
- OpenAI API calls
- News API or any paid aggregator
- sources that require purchase, subscription, or hidden usage fees

It may use:

- Codex's built-in web research in the user's existing Codex environment
- publicly accessible article pages
- free RSS pages
- free official reports and datasets
- the repository's existing open-data generator

## Publishing Flow

1. Pull the latest `main`.
2. Research the last 24 hours of global news and public reports.
3. Compare findings with roughly the last 60 days of patterns already present in
   `data/predictions/latest.json`.
4. Write `data/research/codex-news-digest.json`.
5. Run the generator with `--research-input`.
6. Run syntax and contract checks.
7. Commit and push only if the research digest or generated prediction files
   changed.

The GitHub Action also reads the digest when present, so the normal static-site
publishing path remains intact.
