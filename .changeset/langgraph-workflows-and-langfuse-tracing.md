---
'@inkeep/open-knowledge': patch
---

New beta Workflows and Langfuse plugins. Workflows run LangGraph agents, or a signed-in ACP agent such as Claude, Codex or Devin, from `.ok/workflows/*.yml` on a schedule, from Settings, through `POST /api/workflows/run`, or through the `workflow` agent tool. Langfuse traces each run and, optionally, each in-app agent chat turn.
