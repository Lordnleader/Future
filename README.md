# Predict the Future

Predict the Future is a quiet intelligence interface for place-based future signals.
It uses a pale, globe-first homepage to surface directional forecasts drawn from
multi-signal convergence, source quality, weak-signal momentum, and falsifiable
scenario logic.

## Run Locally

```bash
python3 -m http.server 4173
```

Open `http://localhost:4173`.

## Deploy

This is a static site with no build step and no paid services. GitHub Pages can serve the repository root directly.

## Prediction Engine

The browser currently uses `PFE-2.1`, a deterministic forecast model in `src/main.js`.
It scores every geographic signal across reference-class prior, source mix, weak-signal
burst, cross-domain convergence, causal tension, friction, asymmetry, lead/lag clarity,
timing, falsifiability, and scenario uncertainty.

The long-term nightly generator should emit the same contract the page already exposes:

- `geo_signal_seed`
- `source_mix`
- `reference_class_prior`
- `leading_indicators`
- `disconfirmers`
- `previous_resolution_outcomes`

The site also exposes `window.__futurePredictionEngineState()` for QA so a future 1am
automation can verify version, score range, scenario weights, selected archetype, and
reference class after generation.

## Nightly Signal Data

The first live-data scaffold is in `scripts/generate-nightly-signals.js`. It runs
with plain Node, needs no npm install, and writes both
`data/live-signal-candidates.json` and the browser-ready
`data/predictions/latest.json`.

```bash
node scripts/generate-nightly-signals.js --dry-run
node scripts/generate-nightly-signals.js --live
```

GitHub Actions is configured in `.github/workflows/nightly-signals.yml` to run the
generator nightly at 01:00 Europe/London and commit changed prediction data. The
homepage fetches `data/predictions/latest.json` in the background and keeps the
hand-authored signal set as a fallback, so the globe never goes blank if a source
is temporarily unavailable. See `docs/live-data-platform.md` for the source
registry, optional API keys, and the path from candidate signals to fully
data-backed predictions.
