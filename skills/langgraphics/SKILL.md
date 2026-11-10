---
name: langgraphics
description: Knowledge for building and working with LangGraphics (proactive-agent/langgraphics) — visual tracing and debugging for LangGraph/LangChain agents — from the GitHub repository, the project site (proactive-agent.org/langgraphics), and an automated codebase analysis of the repo.
---

# Langgraphics

Visualize live LangGraph execution and see how your agent thinks as it runs. This skill synthesizes three sources: the official project documentation (proactive-agent.org/langgraphics), the GitHub repository (proactive-agent/langgraphics), and an automated codebase analysis (C3.x pipeline) of the repo — Python package `langgraphics/` plus a React/TypeScript web frontend `langgraphics-web/`.

## 📚 Sources

This skill combines two source types, with the codebase treated as ground truth where they differ:

- ✅ **Official Documentation** — https://proactive-agent.org/langgraphics/ (high confidence; single page covering features and the `watch` quickstart)
- ✅ **GitHub Repository** — [proactive-agent/langgraphics](https://github.com/proactive-agent/langgraphics) (MIT, ~155 stars, 1 open issue, last updated 2026-11-09; README + releases history)
- ✅ **Codebase Analysis** — automated C3.x pipeline output over `langgraphics/` (Python), `langgraphics-web/` (TypeScript/React), plus `examples/` and `tests/` (architecture: high confidence; per-file API refs: medium)

**Source priority when sources differ:** code patterns from the repo > official docs > GitHub issues.

**Where the sources agree (high confidence):**

- The public integration surface is a single function: `watch(compiled_graph)`.
- It is local-only: an HTTP server + WebSocket on the user's machine; no account, no API key, nothing leaves the process.
- It does not change agent behavior — the wrapped graph returns identical results.
- Feature set: live execution graph, replay/step-through, inspect panel, subgraphs-in-place, per-node latency/token/cost, error surfacing.

## 📦 About

- **Repository:** [proactive-agent/langgraphics](https://github.com/proactive-agent/langgraphics)
- **Homepage:** https://proactive-agent.org/langgraphics
- **Author:** Artyom Vancyan · **License:** MIT · **Current release line:** `v0.1.0-beta.4` (2026-06-24)
- **Language:** Python package (`langgraphics/`, ~38% of repo) + TypeScript/React frontend (`langgraphics-web/`, ~56%)
- **Topics:** langgraph, langchain, tracing, visualization, real-time, workflow, langsmith, langfuse, studio, deepagents

LangGraphics is a **local-only** visual debugger for LangGraph/LangChain/DeepAgents workflows: it serves an HTTP + WebSocket pair that streams live execution events to a browser UI that opens automatically on first run.

### Repository layout (from codebase analysis)

| Path | What it is |
|------|-----------|
| `langgraphics/` | Python package: `watch.py` (entry point + servers), `streamer.py` (`Viewport` + `BroadcastingTracer`), `broadcaster.py` (`Broadcaster`), `formatter.py` (`Formatter`), `topology.py` (`extract`), `upstream.py` (model-metadata sync) |
| `langgraphics-web/` | React/TypeScript frontend: `GraphCanvas`, `InspectPanel`, `Controls`, `Metrics`, `CustomNode`, `layout.ts`, hooks `useWebSocket`/`useGraphState`/`useFocus` |
| `examples/` | Runnable example agents: `basic_agent.py`, `react_agent.py`, `deep_agent.py`, `error_agent.py`, `sync_agent.py`, `sub1_agent.py`, `sub2_agent.py`, `__common__.py` (fake chat model + simulated tool/retriever for offline runs) |
| `tests/` | Python tests (`tests/lib/`: topology, watching, formatter, upstream) + web tests (`tests/web/`), including `conftest.py` graph fixtures and `ws_collect` WebSocket test helper |

### Version history (from GitHub releases)

- `v0.1.0-beta.1` (2026-02-14) — first release: one-line integration, node classification, trace inspector UI, theme/direction via URL params
- `v0.1.0-beta.2` (2026-02-21) — refactored tracer onto LangChain's built-in tracing, formatter built on LangSmith utils, inspector input/output blocks
- `v0.1.0-beta.3` (2026-03-03) — inspect panel modes, multi-branch DAG traversal fix, per-node token/cost/latency tracking, per-step state inspect
- `v0.1.0-beta.4` (2026-06-24) — **replay mode**, **nested subgraph visualization**, upstream metadata sync

## 🧠 Key Concepts

- **`watch(graph)`** (`langgraphics/watch.py`) — the entire public integration surface. Signature: `watch(graph: ANY_GRAPH) -> ANY_GRAPH`. Wraps a compiled LangGraph; returns a graph that behaves identically (same return values, same invoke/stream methods) while streaming execution events to the visualizer. Internally it starts an HTTP server (`start_http_server(host, port) -> TCPServer`) and a WebSocket server (`start_ws_server(manager, host, port)`), extracts topology, and builds a `Viewport`.
- **`Viewport`** (`langgraphics/streamer.py`) — internal orchestration object. Constructor: `__init__(graph, ws, edge_lookup: dict[tuple[str, str], str], http_server: TCPServer)`. It implements `__getattr__` delegation so the wrapped graph's attributes pass through, and exposes `invoke`, `ainvoke`, `stream`, `astream`, `broadcast`, `shutdown`, plus internals `_emit_edge`, `_emit_error`, `_make_config`.
- **`Broadcaster`** (`langgraphics/broadcaster.py`) — fans messages out to connected WebSocket clients. `__init__(topology: dict[str, Any])`; methods `handler(websocket)`, `record(message)`, `broadcast(message)`, `shutdown()`.
- **`BroadcastingTracer`** (`langgraphics/streamer.py`) — a LangChain `AsyncBaseTracer` subclass that converts chain/LLM/tool/retriever run events into broadcast messages: `_on_chain_start/end/error`, `_on_llm_end/error`, `_on_tool_end/error`, `_on_retriever_end/error`, plus `_build_full_id`, `_persist_run`, `_emit_end`.
- **`Formatter`** (`langgraphics/formatter.py`) — serializes LangChain `Run` objects into UI payloads: `inputs(cls, run)` and `outputs(cls, run)` (classmethods wrapped by `@serialize`), `metrics(cls, run) -> dict`, `costs(cls, model, cached, total)`, `latency(seconds) -> str`, `extract(data, key)`, `norm(msg)`. Handles chat models, LLMs, tools, and retrievers — the exact message shapes are pinned by `tests/lib/test_formatter.py`.
- **Topology extraction** — `extract(graph) -> dict[str, Any]` in `langgraphics/topology.py` produces `{nodes, edges}` where each edge has `source`, `target`, `conditional`, and optional `label`. Sent over the WebSocket on connect; `test_topology.py` asserts sequential edge IDs, `__start__`/`__end__` sentinel nodes, and nested subgraph structure (sub1/sub2 examples exercise parallel branches and fan-in).
- **Frontend layout** — `computeLayout(topology, rankDir)` in `langgraphics-web/src/layout.ts` (`rankDir` defaults to `"TB"`, `"LR"` supported) with `_computeSubgraphLayout` for nested graphs. React hooks: `useWebSocket(url)`, `useGraphState`, `useFocus`. UI components: `GraphCanvas` (live rendering), `InspectPanel` (node input/output/state slice, tree or full view, per-step state), `Controls` (replay/step-through), `Metrics` (per-node latency/token/cost), `CustomNode`.
- **`upstream.py`** — `sync()` fetches model metadata (pricing for cost display) and caches it with a once-per-day refresh; covered by `tests/lib/test_upstream.py`.

## 🎯 When to Use This Skill

Use this skill when you need to:

- **Instrument a LangGraph/LangChain/DeepAgents agent for visual debugging** — wrap a compiled graph in `watch(...)` so runs appear live in a browser.
- **Understand LangGraphics features** — live execution graph, replay/step-through, inspect panel (node input/output/state slice), subgraph-in-place rendering, per-node latency/token/cost metrics, error surfacing.
- **Decide whether LangGraphics fits a project** — it is the local-only option: fully local, standalone, no API key, data stays local, no vendor lock-in (per the README's own comparison vs LangFuse and LangSmith, which it positions as lacking replay mode, one-line setup, and local-only operation). It does *not* do prompt evaluation — use LangFuse/LangSmith for that.
- **Find the minimal integration pattern** — one wrapper call on the compiled graph; no decorators, no refactoring, agent return values unchanged. Keep it in during active development or add it for a debugging session.
- **Debug LangGraph agent behavior** — find which branches were taken, where the agent looped, where it stopped, and what state each node produced.
- **Onboard to an unfamiliar graph** — README's stated use case: "a single run tells you more about the workflow than reading the graph definition ever could."
- **Explore the implementation** — read `streamer.py`, `broadcaster.py`, `formatter.py`, `topology.py`, `watch.py` for how tracing/broadcasting/serialization actually works, or the `langgraphics-web/` components and hooks for UI behavior.
- **Find real-world usage patterns** — `examples/` shows basic, React-style (tool-calling loop), Deep Agents, error-path, sync fan-out/fan-in, and nested-subgraph agents.

Do NOT use this skill for:

- LangGraph graph-building fundamentals (StateGraph, nodes, edges, state schemas) — use the `langgraph-fundamentals` skill.
- Deep Agents harness architecture — use the `deep-agents-*` skills.
- General LangChain agent construction — use `langchain-fundamentals`.
- Hosted/managed tracing or prompt evaluation — LangGraphics is a local visualizer, not a LangSmith/Langfuse replacement (the README comparison table is explicit about this boundary).

## ⚡ Quick Reference

### Install (from official docs)

```bash
pip install langgraphics
```

### Wrap a compiled LangGraph (canonical pattern — docs, README, and repo agree)

```python
from langgraph.graph import StateGraph, MessagesState
from langgraphics import watch

workflow = StateGraph(MessagesState)
workflow.add_node(...)
workflow.add_edge(...)

graph = watch(workflow.compile())

await graph.ainvoke({"messages": [...]})
```

This is the entire integration surface: build the graph as usual, compile it, pass the compiled graph through `watch(...)`, then invoke normally. The wrapper returns a graph that behaves identically — same return values, no agent code changes. The browser UI opens automatically.

### Sync and streaming variants (from codebase — `Viewport` implements all four)

```python
graph = watch(workflow.compile())

result = graph.invoke({"messages": [...]})          # sync
gen = graph.stream({"messages": [...]})             # sync stream iterator
result = await graph.ainvoke({"messages": [...]})   # async
agen = graph.astream({"messages": [...]})           # async stream iterator
```

`Viewport` defines `invoke`, `ainvoke`, `stream`, and `astream` explicitly (plus `__getattr__` passthrough for anything else the compiled graph exposes), so all standard LangGraph execution modes work unchanged.

### Example agent shapes (from codebase — `examples/`)

The repo's examples double as documentation for what `watch` handles:

```python
# examples/basic_agent.py — linear pipeline + tool loop
summariser_runner(state: State) -> dict
responder(state: State) -> dict
route_after_respond(state: State) -> Literal['tools', '__end__']   # conditional edge

# examples/sync_agent.py — fan-out / fan-in topology
initial_node -> sync_a, sync_b, sync_c (parallel) -> final_node

# examples/sub1_agent.py, sub2_agent.py — nested subgraphs
router(state) -> parallel branches -> summariser; sub2 nests subgraphs
                 two levels deep (node2a/node2b subgraphs)

# examples/deep_agent.py — DeepAgents integration
get_weather(city: str) -> str   # tool; agent built on deepagents harness
```

`test_topology.py` asserts the extracted topology for each: sequential edge IDs, `conditional: true` flags on conditional edges, `__start__`/`__end__` sentinels, and subgraph inner-node structure.

### Test-graph fixture pattern (from codebase — `tests/lib/conftest.py`)

```python
# fixtures used across the test suite
simple_graph()      # -> StateGraph with step_a -> step_b
branching_graph()   # -> StateGraph with conditional edges from 'process'
error_graph()       # -> StateGraph that raises inside a node

# Conditional-edge assertion pattern (from test suite)
topology = extract(branching_graph)
edges_by_source = {}
for e in topology['edges']:
    edges_by_source.setdefault(e['source'], []).append(e)
start_edges = edges_by_source.get('__start__', [])
assert len(start_edges) == 1
assert start_edges[0]['conditional'] is False
process_edges = edges_by_source.get('process', [])
assert len(process_edges) >= 1
for e in process_edges:
    assert e['conditional'] is True
```

### WebSocket test helper (from codebase — `tests/lib/conftest.py`)

```python
async def ws_collect(ws_port: int, timeout: float = 15.0):
    """Connect to the broadcaster's WebSocket and collect messages."""
    # returns AsyncIterator[tuple[list[dict], asyncio.Event]]
```

Also in `conftest.py`: `find_free_port()`, `safe_ainvoke(viewport, input)`, and state TypedDicts `SimpleState`/`CounterState`. Useful if you want to assert on the events LangGraphics emits rather than only watching the UI — `tests/lib/test_watching.py` shows the expected message sequences for linear, branching, and error graphs (`test_linear_message_sequence`, `test_error_emits_error_message`, `test_error_agent_edge_sequence_before_error`).

### Internal module map (from codebase analysis)

```python
# langgraphics/watch.py — entry point
def watch(graph): ...                          # -> ANY_GRAPH (Viewport wrapper)
def start_http_server(host, port) -> TCPServer
def start_ws_server(manager: Broadcaster, host, port) -> None
def collect_subgraph_edges(nodes: list, prefix: str) -> None   # recursive subgraph walk

# langgraphics/topology.py
def extract(graph) -> dict[str, Any]           # -> {nodes, edges}

# langgraphics/upstream.py
def sync() -> None                             # refresh model pricing metadata (~daily)
```

### Formatter API (from codebase — `langgraphics/formatter.py`)

```python
class Formatter:
    @classmethod
    def costs(cls, model: str, cached: int, total: int): ...
    @staticmethod
    def latency(seconds: float) -> str: ...
    @staticmethod
    def serialize(func): ...                    # decorator on inputs/outputs
    @staticmethod
    def extract(data: dict, key: str): ...
    @staticmethod
    def norm(msg: dict) -> dict: ...
    @classmethod
    def metrics(cls, run: Run) -> dict[str, Any]: ...
    @classmethod
    @serialize
    def inputs(cls, run: Run) -> list[dict]: ...
    @classmethod
    @serialize
    def outputs(cls, run: Run) -> list[dict]: ...
```

`Formatter` turns LangChain `Run` objects into the payloads the web UI renders — inputs/outputs extraction for chat models, LLMs, tools, and retrievers, plus latency and cost computation. `tests/lib/test_formatter.py` documents exactly which message/state shapes it handles (TestChatModelInputs/Outputs, TestLlmInputsOutputs, TestToolInputsOutputs, TestRetrieverInputsOutputs).

### Broadcaster API (from codebase — `langgraphics/broadcaster.py`)

```python
class Broadcaster:
    def __init__(self, topology: dict[str, Any]) -> None: ...
    def handler(self, websocket) -> None: ...   # per-client WS handler
    def record(self, message: str) -> None: ... # persist to run log (replay)
    def broadcast(self, message: str) -> None: ... # fan out to clients
    def shutdown(self) -> None: ...
```

### Frontend hooks and state types (from codebase — `langgraphics-web/src/`)

```typescript
// hooks/useWebSocket.ts
useWebSocket(url: string)          // connect() -> managed WebSocket
// hooks/useGraphState.ts, hooks/useFocus.ts — graph state + focus management
// shared types include Config and CounterState
```

## 📖 Reference Documentation

Organized by source:

- [Documentation](references/documentation/) — official project site content (`langgraphics_docs/other.md` is the full single-page doc)
- [GitHub](references/github/) — repository metadata, README (feature comparison table), releases history
- [API](references/api/merged_api.md) — merged API list with conflict flags
- [Conflicts](references/conflicts.md) — full conflict report (see Known Discrepancies)
- [Codebase Analysis](references/codebase_analysis/index.md) — C3.x pipeline output

### Codebase-analysis detail files

`references/codebase_analysis/proactive-agent_langgraphics/` contains:

- `ARCHITECTURE.md` — high-confidence overview (stack, patterns, workflows, entry points)
- `api_reference/*.md` — medium-confidence per-file API references:
  - **Python package:** `watch.md` (servers + `watch` + subgraph edge collection), `topology.md` (`extract`), `streamer.md` (`Viewport` + `BroadcastingTracer`), `broadcaster.md`, `formatter.md`, `upstream.md`
  - **Frontend:** `GraphCanvas.md`, `InspectPanel.md`, `Controls.md`, `Metrics.md`, `CustomNode.md`, `layout.md`, `main.md`, `useWebSocket.md`, `useGraphState.md`, `useFocus.md`, `statuses.test.md`, `global.d.md`
  - **Examples:** `basic_agent.md`, `react_agent.md`, `deep_agent.md`, `error_agent.md`, `sync_agent.md`, `sub1_agent.md`, `sub2_agent.md`, `__common__.md` (FakeMessageChatModel, SimulatedTool, SimulatedRetriever, State)
  - **Tests:** `conftest.md`, `test_formatter.md`, `test_topology.md`, `test_watching.md`, `test_upstream.md`
- `architecture_details/`, `configuration/`, `dependencies/`, `patterns/`, `guides/`, `examples/` — supporting JSON/markdown pipeline output

## ⚠️ Known Discrepancies

`references/conflicts.md` reports **231 conflicts: 0 high, 223 medium, 8 low**. Nearly all are the same class: an API symbol exists in code but is not mentioned in the official docs. This is expected — the docs intentionally cover only the public `watch` surface.

Practical guidance:

- **Use code for internals, docs for intent.** `Broadcaster`, `BroadcastingTracer`, `Formatter`, `Viewport`, `extract`, `computeLayout`, and all UI components/hooks are undocumented but real — trust `api_reference/*.md` for their signatures.
- **`watch` behavior on non-`ainvoke` methods:** docs show only `ainvoke`, but `Viewport` explicitly implements `invoke`/`stream`/`astream` — the code is authoritative here.
- **Do not import internals** (`Viewport`, `Broadcaster`, `Formatter`) in user code; they are implementation details with no stability guarantee. The only supported entry point is `langgraphics.watch`.
- If a future docs page documents an internal, prefer docs for intent and code for signature.

## 🧭 Working with This Skill

**Beginners:** start with the Quick Reference — install, `watch(workflow.compile())`, invoke. The wrapper is deliberately minimal; you do not need to understand the tracer/broadcaster internals to use it. The README comparison table is the fastest way to decide if LangGraphics fits vs LangFuse/LangSmith.

**Intermediate:** when debugging "why didn't my node appear" or "why is the graph empty," read `api_reference/streamer.md` (how `Viewport` emits edges/errors) and `api_reference/broadcaster.md` (fan-out + replay recording). `examples/error_agent.py` shows error surfacing; `examples/sync_agent.py` shows fan-out/fan-in; `examples/sub1_agent.py`/`sub2_agent.py` show nested subgraphs.

**Advanced:** the frontend layout engine (`layout.ts` → `computeLayout`, `_computeSubgraphLayout`) and the `Formatter` extraction logic are where behavior is defined for subgraphs and unusual state shapes. `tests/lib/test_formatter.py` pins exactly which message/state shapes the formatter handles; `tests/lib/test_topology.py` and `test_watching.py` pin the topology JSON and WebSocket message sequences — read them before extending either side of the protocol.

**Testing/debugging the events themselves:** use the `ws_collect` helper pattern from `tests/lib/conftest.py` to capture WebSocket messages and assert on node/edge/error events without a browser.

**Resolving conflicts:** see Known Discrepancies above. Short version: code wins for signatures and behavior, docs win for intended usage.

## 📦 Repository Info

- **Homepage:** https://proactive-agent.org/langgraphics
- **License:** MIT (Copyright 2026 Artyom Vancyan)
- **Latest release:** v0.1.0-beta.4 (2026-06-24)
- **Topics:** animation, graph, langgraph, real-time, visualization, live, realtime, workflow, langsmith, tracing, deepagents, langfuse, studio
- **Open Issues:** 1
- **Last Updated:** 2026-11-09
- **Languages:** TypeScript 56.1% · Python 38.2% · CSS 5.5% · HTML 0.2%

---

*Synthesized from official documentation, the GitHub repository, and automated codebase analysis by Skill Seekers*
