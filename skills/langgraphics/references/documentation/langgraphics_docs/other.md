# Langgraphics_Docs - Other

**Pages:** 1

---

## LangGraphics: see what your LangGraph agent actually did

**URL:** https://proactive-agent.org/langgraphics/

**Contents:**
- See what your agent actually did.
- Install LangGraphics
- Wrap the graph. Nothing else changes.
- A run you can read, not a log you have to.
  - Live execution graph
  - One-line setup
  - Inspect panel
  - Replay
  - Subgraphs in place
  - Cost and latency

A live visualization for LangGraph and DeepAgents. Wrap your compiled graph in one call and watch the run unfold in your browser: which branches it took, where it looped, and where it stopped.

Nodes light up as they start and stay marked once they're done, so the path through the graph is visible while it happens.

No refactoring and no decorators to sprinkle around. One call on the compiled graph, and your agent returns exactly what it did before.

Open a node to read its input, its output and the slice of state it produced, as a tree or in full.

A run is recorded as it happens, so you can play it back step by step as many times as you need to work out what went wrong.

Nested graphs are drawn inside their parent, so a DeepAgents run with sub-agents reads as easily as a flat one.

Per-node latency, token counts and spend, cached and total, next to the node that ran up the bill.

An HTTP server and a WebSocket on your own machine. No account, no API key, and nothing about your run leaves the process.

When a node raises, it's marked where it sits in the graph, with everything that led to it still on screen.

**Examples:**

Example 1 (unknown):
```unknown
$ pip install langgraphics
```

Example 2 (python):
```python
from langgraph.graph import StateGraph, MessagesState
from langgraphics import watch

workflow = StateGraph(MessagesState)
workflow.add_node(...)
workflow.add_edge(...)

graph = watch(workflow.compile())

await graph.ainvoke({"messages": [...]})
```

---
