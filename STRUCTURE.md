# Repository Structure — Autognose (自知)

> Created 2026-09-12 per team instruction. Individual placements marked `[OPEN]` are still
> confirmable. This document exists so the tree is traceable to a decision, not invented ad hoc.
> See `AGENT.md` §1 (file structure requires team confirmation) and §7.

## Decisions on record

| Item | Value | Source |
|---|---|---|
| Milestone | Open-source release | Team, 2026-09-11 |
| Target user | Open-source developers, already running a retrieval stack | Team |
| Delivery form | Library | Team |
| Architecture | **Thick (厚-C)** — owns knowledge-state storage **and** lifecycle/governance | Team, 2026-09-12 |
| Repo topology | Single repo, multiple modules (monorepo) | Follows from "thick" |
| Layout language | English directory names; document contents stay bilingual | Team instruction |

## Top level

```
spec/        language-neutral contract: JSON Schema + spec prose
packages/    the implementation, one module per responsibility
apps/        runnable surfaces (service now, CLI later)
tests/       conformance + integration
research/    existing artefacts: survey, boundary report, scope
site/        published positioning page (has its own Pages pipeline)
assets/      shared non-code resources
.github/     CI/CD — pages.yml already present, builds from ./site
```

Agent-facing documents (`AGENT.md`, `THINKING.md`, `README.md`, `LICENSE`, this file) stay at
the root deliberately: contributor and agent tooling expects them there.

## `packages/` — mapped to the survey's component blueprint

The origin of this split is §6.2 of the survey (图 6-1). Its stated design constraint is that
all components must share **one** knowledge-state representation — which is why `schema` is a
separate package rather than a module inside `state`.

| Package | Responsibility | Blueprint origin |
|---|---|---|
| `schema` | The language-neutral contract: state fields, action vocabulary, validation. No business logic. | C1 |
| `ingest` | Turn raw documents into state-carrying items: provenance extraction, normalisation, dedup. | C3, write path |
| `state` | Store and query knowledge state: fields, timestamps, supersession links, dependency graph. | C1 + C3 + C4 |
| `lifecycle` | Governance: review cycles, retirement, change notification, feedback from eval signals. | C7 + C4 |
| `judge` | The decider: given a question and evidence, emit one action plus reason and confidence. | C2 + C5 + C6 |
| `eval` | Metrics: abstention precision/recall, accuracy, calibration (ECE / Brier). | C8 |

`apps/service` is the thin HTTP shell anticipated by the delivery-form decision. It is a
deferred deliverable and holds no logic of its own.

## Corrections to earlier assumptions

Two things I asserted before checking, now resolved by fact:

1. **Pages does not serve from the repo root.** `.github/workflows/pages.yml` sets Jekyll's
   `source: ./site`. Root-level files are therefore irrelevant to the published site, and
   adding directories at the root cannot break it. My earlier warning about "moving root files
   breaks the live page" was wrong.
2. **Nothing has deployed yet.** `pages.yml` is untracked, so it has never run on the remote;
   `https://oasis-ai-lab.github.io/Autognose/` returns HTTP 404 as of 2026-09-12. The 404 has
   nothing to do with the root layout.

## Open items carried into this structure

- **Schema fields undecided (D5).** `packages/schema` and `packages/state` are blocked on it.
  The directories exist but must stay empty until the field set is agreed.
- **"Thick" means the meta-layer now owns a knowledge layer.** Survey 图 2-1 defines the
  meta-layer as owning neither knowledge nor retrieval. This tree deliberately departs from
  that figure. The trade-off is recorded in `SCOPE.md`.
- **No dependencies declared yet.** `pyproject.toml` is pending the tech-stack decisions in
  `SCOPE.md` §2 — notably whether `pydantic` is the single runtime dependency.
- **The survey is deliberately not tracked.** `.gitignore` excludes
  `self-aware-knowledge-base.html` by name. It sits at the repository root but is not part of the
  published repository. Consequence to keep in mind: `site/index.md` §5 tells readers the
  repository contains "a boundary report, a survey of the problem" — the survey half of that
  promise is not visible to anyone who clones. Either the claim or the ignore rule has to change.
- **Placement `[OPEN]`:** `BOUNDARY_REPORT.md` and `SCOPE.md` are tracked at the root. Their
  intended home is `research/`, but nothing has been moved, because moving them changes paths
  that `README.md`, `site/index.md` and each other refer to.
