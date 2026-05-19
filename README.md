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
