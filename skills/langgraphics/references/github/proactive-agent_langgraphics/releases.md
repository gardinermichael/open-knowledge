# Releases: proactive-agent/langgraphics

## v0.1.0-beta.4: Release v0.1.0-beta.4

**Published**: 2026-06-24

## What's Changed

* Implement a replay mode (GH-111)
* Implement visualization support for nested subgraphs (GH-117)
* Add sync functionality to update with upstream metadata (GH-113)

## Thanks

* @Chajf for reporting the GH-19 issue

**Changelog**: https://github.com/proactive-agent/langgraphics/compare/v0.1.0-beta.3...v0.1.0-beta.4

## v0.1.0-beta.3: Release v0.1.0-beta.3

**Published**: 2026-03-03

## What's Changed

* Implement modes for the inspect panel (GH-7)
* Fix graph traversing for multi-branch DAGs (GH-8)
* Update image sources in README for dark/light modes (GH-9)
* Implement tracking for spent tokens, cost, and latency (GH-10)
* Add unit tests for metrics and a tool-call edge case (GH-12, GH-14)
* Create a workflow for updating models' metadata (GH-11, GH-13)
* Auto-update the models' metadata using the new workflow (GH-16)
* Add an inspect section for showing the state of the node at each step (GH-17)

## Thanks
* @tomercagan for reporting the GH-6 issue

**Changelog**: https://github.com/proactive-agent/langgraphics/compare/v0.1.0-beta.2...v0.1.0-beta.3

## v0.1.0-beta.2: Release v0.1.0-beta.2

**Published**: 2026-02-21

## What's Changed

* Refactor tracer - integrate built-in tracing mechanism (GH-2)
* Implement comprehensive formatter using LangSmith utils (GH-4)
* Complete the inspector panel for input and output blocks (GH-4)
* Refactor minor issues and add tests (GH-5)

**Changelog**: https://github.com/proactive-agent/langgraphics/compare/v0.1.0-beta.1...v0.1.0-beta.2

## v0.1.0-beta.1: Release v0.1.0-beta.1

**Published**: 2026-02-18

## What's Changed
 * Added Python backend support for node classification, state serialization, and callback-based sub-step tracking (GH-1)
 * Added comprehensive test coverage for node classification and depth map computation algorithms (GH-1)
 * Implemented React-based trace inspector UI with tree visualization and detail panels (GH-1)
 * Implement transfer of theme and direction parameters through URL params

**Changelog**: https://github.com/proactive-agent/langgraphics/compare/v0.1.0-beta...v0.1.0-beta.1

## v0.1.0-beta: Release v0.1.0-beta

**Published**: 2026-02-14

## What's Changed

This is the first release, introducing live graph visualization for [LangGraph](https://github.com/langchain-ai/langgraph) agents with a single-line integration.

**Changelog**: [`v0.0.0...v0.1.0-beta`](https://github.com/proactive-agent/langgraphics/commits/v0.1.0-beta)

