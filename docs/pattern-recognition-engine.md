# Pattern Recognition Engine

`scripts/pattern-recognition-engine.js` is the nightly forecasting layer for
Predict the Future. It does not call Codex, OpenAI, or any paid API. It is a
deterministic JavaScript engine that scores open-data evidence collected by
`scripts/generate-nightly-signals.js`.

## What It Does

Every nightly candidate is treated as a forecast question, not as a headline.
The engine asks:

1. What is the outside-view reference class?
2. What changed in the last 24 hours?
3. Does that match or break the last 60 days of evidence?
4. Is there structural support underneath the news?
5. What would prove this forecast wrong?
6. Can this be scored later with a Brier score?

The output is stored on each prediction as `patternModel`. The browser preserves
that field and uses `patternModel.uiModel` for the visible forecast readout.
Older JSON still works because the client keeps the existing PFE-2.1 fallback.

## Evidence Windows

The engine separates evidence into three windows:

- `recent_24h`: fresh reports, physical observations, hazard events, and other
  time-sensitive items from roughly the last day.
- `prior_60d`: recent history that gives the last-day signal a comparison set.
- `structural_baseline`: slower context such as World Bank indicators, research
  metadata, Wikipedia context, and older observations.

This is the core pattern-recognition move. A single new article is not enough.
The model asks whether that article is repeating an existing pattern,
accelerating it, contradicting it, or introducing a new adjacent term that was
not present in the comparison window.

## Scoring Dimensions

Each signal gets 0-100 scores for:

- `baseRate`: the reference-class prior before nightly evidence updates.
- `recencyPulse`: how strong the last-24-hour evidence is.
- `persistence`: whether the same pattern was present in the 60-day/background
  comparison set.
- `acceleration`: whether the recent window is stronger than the comparison.
- `novelty`: whether new terms/domains have entered the pattern.
- `sourceDiversity`: whether evidence comes from independent source families.
- `evidenceQuality`: source reliability, recency, confidence, and live/fallback
  status.
- `contradiction`: disconfirming evidence and fallback-heavy source quality.
- `impact`: likely systemic importance if the signal resolves.
- `falsifiability`: whether the forecast has explicit indicators and
  disconfirmers.
- `uncertainty`: volatility, long horizons, weak evidence, and contradiction.

Those dimensions produce:

- `forecast.probability`: calibrated probability for the signal strengthening
  within its stated horizon.
- `confidence`: how strongly the platform should present the forecast.
- `scenarioSpread`: base, acceleration, and break cases.
- `leadingIndicators`: what should move next if the forecast is right.
- `falsifiers`: what should weaken or kill the forecast.
- `brierTracking`: a binary forecast record that can later be scored.

## Forecasting Ideas It Borrows

The engine follows the Superforecasting / Good Judgment discipline of using
probabilities, reference classes, open-minded updating, aggregation, and explicit
scorekeeping. The Good Judgment Project won the IARPA forecasting tournament by
combining debiasing training, teams/prediction markets, superforecaster
selection, and aggregation algorithms:
https://journals.sagepub.com/doi/10.1177/0963721414534257

Good Judgment describes the original tournament as four years, 500 questions,
and over one million forecasts, with the Good Judgment Project outperforming the
field:
https://goodjudgment.com/about/

The model also follows the research emphasis that geopolitical forecasting is
hard for pure algorithms, but algorithms are useful as aggregators, partitioning
frameworks, and aids to human judgment:
https://journals.sagepub.com/doi/10.1177/17456916231185339

For calibration, the engine emits Brier-score-ready records because proper
scoring rules encourage honest probabilistic forecasts and can assess
calibration and sharpness:
https://academic.oup.com/jrsssb/article/69/2/243/7109375

Recent forecasting benchmark work reinforces the same product principle: future
event forecasts need dynamic, timestamped questions with known submission times
to avoid leakage and allow real scoring:
https://arxiv.org/abs/2409.19839

## Why It Avoids Obvious Predictions

The engine is not trying to summarize the loudest current headline. It boosts
signals when the fresh evidence connects to:

- a reference class with a meaningful base rate
- a persistent 60-day pattern
- a structural baseline
- multiple independent domains
- a hidden variable such as insurance language, working-capital tolerance,
  credible fallback capacity, or community consent

That means the readout is usually second-order: not "there was a storm", but
"insurance wording and credit friction are moving before migration data".

## No-Cost Boundary

The nightly run remains free by design:

- no OpenAI or Codex API call
- no paid news API requirement
- optional keyed sources only run when the user supplies their own keys
- source failures fall back per source instead of blocking the run
- GitHub Actions only commits generated JSON when data changes

A future Codex research layer can be added manually or behind an explicit
approval switch, but it should not run automatically until cost and usage limits
are clear.

## How It Can Improve Later

The engine now emits `brierTracking` records. Once predictions resolve, future
work can:

- store outcomes in a small resolution ledger
- calculate Brier scores by category, horizon, source mix, and archetype
- tune scoring weights toward dimensions that actually improve calibration
- down-weight sources or archetypes that create overconfident forecasts
- compare deterministic forecasts with optional human or prediction-market
  priors when free data is available
