---
name: deepagents
description: Knowledge about Deep Agents (langchain-ai/deepagents): the batteries-included agent harness from LangChain — planning/subagents/filesystem/MEMORY tools, the deepagents Python package, middleware stack, quickstart/deploy guides, examples, and the docs.langchain.com OSS Python reference.
---

# Deep Agents (`deepagents`)

Deep Agents is LangChain's open-source **agent harness**: an opinionated agent that works out of the box. You can extend, override, or replace any part of it. It sits on top of LangChain's `create_agent`, which sits on top of the LangGraph runtime. Out of the box it adds planning (a todo list), a pluggable virtual filesystem, subagent delegation, context management (summarization and offloading), skills, persistent memory, and human-in-the-loop approval.

```
LangGraph (graph runtime: streaming, checkpoints, persistence)
  └─ langchain.agents.create_agent (minimal harness + middleware)
       └─ deepagents.create_deep_agent (opinionated harness: todos, filesystem, subagents, skills, memory, summarization)
```

## 📚 Sources and How They Were Combined

This skill draws on several sources. Each one has a different confidence level:

| Source | What it contributes | Confidence |
|---|---|---|
| **Official docs**: docs.langchain.com/oss/python/deepagents (≈40 pages) | Intended API, every Quick Reference snippet, guides | High |
| **GitHub repo**: `langchain-ai/deepagents` (README, 41 recent issues, release notes) | Positioning, FAQ, known bugs, release cadence | High |
| **Codebase analysis (C3.x)**: architecture, patterns, test examples, guides | How the code actually behaves, from tests | Medium (auto-extracted) |

**Where sources agree (high confidence):** `create_deep_agent` is the single entry point. The default backend is `StateBackend`. Subagents run with isolated context. `interrupt_on` requires a checkpointer. Backends share one contract (`ls` / `read` / `write` / `edit` / `grep` / `glob`). The docs describe this contract, and the codebase tests exercise it the same way for every backend.

**Priority when sources differ:** code and tests come first, then the official docs, then GitHub issues. See [Known Discrepancies](#️-known-discrepancies) below.

**About "multi-repository":** the analysis pipeline reports two "repositories", `index.md` and `langchain-ai_deepagents`. In fact there is only **one** repo. `index.md` is just the navigation page for the codebase-analysis output. That one repo is a monorepo containing several packages, listed in [Package Map](#-package-map-monorepo).

## 💡 When to Use This Skill

Use this skill when the user:

- **Imports or mentions** `deepagents`, `create_deep_agent`, `deepagents.backends`, `SubAgent` dicts, `CompiledSubAgent`, `AsyncSubAgent`, `RubricMiddleware`, `FilesystemPermission`, `HarnessProfile`, `ProviderProfile`, `register_provider_profile`, `register_harness_profile`, `langchain_quickjs.CodeInterpreterMiddleware`, `deepagents_acp`, `deepagents-code` / `dcode`, `deepagents_talon`, or `managed-deepagents` / `mda`.
- **Builds a long-running or multi-step agent** that needs planning, delegation to subagents, or a scratch filesystem for offloading large tool outputs.
- **Adds persistent memory** (`AGENTS.md`, `/memories/`) or **skills** (`SKILL.md` folders), including isolation per user or per assistant.
- **Chooses or configures a backend**: `StateBackend` (ephemeral), `FilesystemBackend` (local disk), `LocalShellBackend`, `StoreBackend` (LangGraph store), `ContextHubBackend`, `CompositeBackend` (routing by path), or sandboxes (LangSmith, Daytona, Modal, Runloop, Vercel).
- **Needs human-in-the-loop approval** (`interrupt_on`) or **filesystem permission rules** (`FilesystemPermission`).
- **Streams** progress from an agent or its subagents (`stream_events(version="v3")`, `stream(..., subgraphs=True)`, `useStream` in React/Vue/Svelte/Angular).
- **Deploys** a deep agent (`langgraph.json`, LangSmith Agent Server) or exposes it over **A2A**, **ACP** (IDEs), **AG-UI**, or **MCP**.
- **Hardens an agent for production**: retries, fallbacks, tool-error handling, rate limits, rubric-graded iteration, async background subagents.
- **Upgrades** `deepagents` from v0.6.x to v0.7, or asks about recent `langchain` / `langchain-core` changelog items.
- **Debugs** a backend, a skill, or version behavior, and wants real usage taken from the repo's tests.
- **Compares** Deep Agents with the Claude Agent SDK, plain LangChain `create_agent`, or raw LangGraph.

**Skip this skill** for plain `langchain.agents.create_agent` questions that use no Deep Agents features. Note, though, that the Deep Agents docs reuse many LangChain middleware that work in both, such as `ModelRetryMiddleware`, `ToolRetryMiddleware`, `ToolErrorMiddleware`, `HumanInTheLoopMiddleware`, and `MCPAdapter`.

**Choosing a layer (from the README FAQ):** use **Deep Agents** when you want the full harness. Use **`create_agent`** when you want a lighter harness without the bundled middleware. Drop down to **LangGraph** when the agent loop is the wrong shape entirely. These layers compose: any `CompiledStateGraph` can be passed in as a subagent.

## 🧠 Key Concepts

| Concept | What it is | Where to look |
|---|---|---|
| **Harness** | `create_deep_agent(...)` returns a compiled LangGraph graph. Call it with `.invoke`, `.stream`, or `.stream_events`. | Overview, Customize |
| **Middleware stack** | The harness builds its features from middleware: todo list, filesystem, subagents, summarization, skills, memory, and HITL. Add your own with `middleware=[...]`. | Customize, Profiles |
| **Backend** | Where the agent's virtual filesystem lives. Every backend exposes `ls`, `read`, `write`, `edit`, `grep`, and `glob`, and returns result objects with `.error`, `.entries`, `.matches`, and `.file_data`. | Backends |
| **CompositeBackend** | Routes path prefixes such as `/memories/` and `/skills/` to different backends. Everything else goes to `default`. | Memory, Backends |
| **Subagent** | A delegated agent with an **isolated context window**. It can be a dict spec (`name`, `description`, `system_prompt`, `tools`, `model`), a `CompiledSubAgent` wrapping any runnable, or an `AsyncSubAgent` running as a separately deployed graph. | Subagents, Async subagents |
| **Memory** | Files such as `AGENTS.md` that load into context on every run (`memory=[...]`). They persist if routed to a `StoreBackend`. | Memory |
| **Skills** | Folders containing a `SKILL.md`. Only the frontmatter loads at first, and the agent reads the full body when it needs it (progressive disclosure). Set with `skills=[...]`. | Skills |
| **Pinned skills** *(from code)* | The `pinned_skills` state key injects the **current** `SKILL.md` text as a snapshot. Pinning again appends the new version, and unreadable skills are skipped. | Codebase tests (below) |
| **Permissions** | An ordered list of `FilesystemPermission` rules. **The first match wins.** Modes are `allow`, `deny`, and `interrupt`. | Permissions |
| **HITL** | `interrupt_on={tool: True / False / {"allowed_decisions": [...]}}`. Decisions are approve, edit, reject, and respond. Requires a checkpointer. | Human-in-the-loop |
| **Profiles** | `ProviderProfile` holds model init kwargs for a provider or model. `HarnessProfile` trims tools or middleware and adds prompt suffixes for a specific model. Model-level profiles inherit from provider-level ones. | Models, Profiles |
| **Rubric** | `RubricMiddleware` uses an LLM judge to grade output and loop until it passes or `max_iterations` is reached. | Grading rubrics |
| **Security model** | The project "trusts the LLM": the agent can do anything its tools allow. **Enforce boundaries at the tool or sandbox level**, not in the prompt. | README → Security |

## 📦 Package Map (monorepo)

These packages were found by codebase analysis, ranked by how often each path appears in the references:

| Path | Package / purpose |
|---|---|
| `libs/deepagents/deepagents/` | **The SDK**: `create_deep_agent`, backends, middleware (`middleware/_blob_offload.py`, …), profiles (`profiles/_builtin_profiles.py`) |
| `libs/code/deepagents_code/` | **Deep Agents Code (`dcode`)**: a terminal coding agent similar to Claude Code. Install with `curl -LsSf https://langch.in/dcode \| bash` |
| `libs/talon/deepagents_talon/` | **Talon**: a host that connects agents to messaging channels (pairing, cron jobs, MCP, fleet import) |
| `libs/acp/deepagents_acp/` | Agent Client Protocol server for IDEs |
| `libs/partners/quickjs/` | `langchain-quickjs`: `CodeInterpreterMiddleware`, a JS sandbox with programmatic tool calling (`_ptc.py`) |
| `libs/partners/{daytona,modal,runloop,vercel}/` | Sandbox backend integrations |
| `libs/evals/` (`deepagents_harbor`) | Eval datasets and Harbor task generation |

A JS/TS port exists separately: [`langchain-ai/deepagentsjs`](https://github.com/langchain-ai/deepagentsjs).

## 🎯 Quick Reference

Every snippet below is short and comes from the **official docs** unless it is marked *From codebase*. Most doc pages repeat each snippet once per provider tab (Gemini, OpenAI, Anthropic, OpenRouter). Only one variant is shown here, so swap in your own model string. Any LangChain chat model that supports tool calling works.

### 1. Install and run your first agent
*Official docs: Quickstart. Matches the README.*

```bash
pip install deepagents               # or: uv add deepagents
pip install -U "langchain[openai]"   # provider extra for your model
```

```python
from deepagents import create_deep_agent

def get_weather(city: str) -> str:
    """Get weather for a given city."""
    return f"It's always sunny in {city}!"

agent = create_deep_agent(
    model="openai:gpt-5.5",
    tools=[get_weather],
    system_prompt="You are a helpful assistant",
)
agent.invoke({"messages": [{"role": "user", "content": "what is the weather in sf"}]})
```

### 2. Typical customization: tools, memory, and skills together
*Official docs: Customize Deep Agents*

```python
agent = create_deep_agent(
    model="anthropic:claude-sonnet-5",
    system_prompt="You are a helpful assistant.",
    tools=[search, fetch_url],
    memory=["./AGENTS.md"],
    skills=["./skills/"],
)
```

### 3. Subagents: a dict spec plus a precompiled graph
*Official docs: Subagents*

```python
from deepagents import CompiledSubAgent, create_deep_agent
from langchain.agents import create_agent

research_subagent = {
    "name": "research-agent",
    "description": "Used to research more in depth questions",
    "system_prompt": "You are a great researcher",
    "tools": [internet_search],
    "model": "openai:gpt-5.5",  # optional; defaults to the main agent's model
}
custom_subagent = CompiledSubAgent(
    name="data-analyzer",
    description="Specialized agent for complex data analysis tasks",
    runnable=create_agent(model="openai:gpt-5.5", tools=[], system_prompt="You analyze data."),
)
agent = create_deep_agent(model="google_genai:gemini-3.6-flash",
                          subagents=[research_subagent, custom_subagent])
```

The `description` is what the main agent reads when it decides whether to delegate, so write it as a routing hint.

### 4. Human-in-the-loop approval
*Official docs: Human-in-the-loop. The Fault tolerance page uses the same pattern.*

```python
from langgraph.checkpoint.memory import MemorySaver

agent = create_deep_agent(
    model="openai:gpt-5.5",
    tools=[remove_file, fetch_file, notify_email],
    interrupt_on={
        "remove_file": True,   # all decisions: approve, edit, reject, respond
        "fetch_file": False,   # never interrupt
        "notify_email": {"allowed_decisions": ["approve", "reject"]},  # no editing
    },
    checkpointer=MemorySaver(),  # required
)
```

The v0.7-era changelog also documents `HumanInTheLoopMiddleware(interrupt_on={...}, interrupt_mode="per_call")` for interrupting once per call.

### 5. Persistent memory per user with CompositeBackend
*Official docs: Memory*

```python
from deepagents.backends import CompositeBackend, StateBackend, StoreBackend

agent = create_deep_agent(
    model="google_genai:gemini-3.6-flash",
    memory=["/memories/preferences.md"],
    skills=["/skills/"],
    backend=CompositeBackend(
        default=StateBackend(),  # scratch files stay ephemeral
        routes={
            "/memories/": StoreBackend(namespace=lambda rt: (rt.server_info.user.identity,)),
            "/skills/":   StoreBackend(namespace=lambda rt: (rt.server_info.user.identity,)),
        },
    ),
)
```

Namespace by `rt.server_info.user.identity` to isolate each user. Namespace by `rt.server_info.assistant_id` to share across all users of one assistant.

### 6. Filesystem permissions: sandbox writes to `/workspace`
*Official docs: Permissions. The first match wins, so order matters.*

```python
from deepagents import FilesystemPermission, create_deep_agent

agent = create_deep_agent(
    model=model, backend=backend,
    permissions=[
        FilesystemPermission(operations=["read", "write"], paths=["/workspace/.env"], mode="deny"),
        FilesystemPermission(operations=["read", "write"], paths=["/workspace/**"], mode="allow"),
        FilesystemPermission(operations=["read", "write"], paths=["/**"], mode="deny"),
    ],
)
```

`mode="interrupt"` pauses for approval instead of denying. It needs a `checkpointer`.

### 7. Running code in a sandbox backend
*Official docs: Sandboxes*

```python
from deepagents.backends import LangSmithSandbox
from langsmith.sandbox import SandboxClient

client = SandboxClient()
ls_sandbox = client.create_sandbox()
agent = create_deep_agent(
    model="anthropic:claude-sonnet-4-6",
    system_prompt="You are a Python coding assistant with sandbox access.",
    backend=LangSmithSandbox(sandbox=ls_sandbox),
)
try:
    agent.invoke({"messages": [{"role": "user", "content": "Create a small Python package and run pytest"}]})
finally:
    client.delete_sandbox(ls_sandbox.name)
```

Other providers plug into the same `backend=` slot, for example `pip install langchain-daytona`. The repo also contains partner packages for Modal, Runloop, and Vercel.

### 8. Streaming subagent events (v3 event API)
*Official docs: Event streaming*

```python
stream = agent.stream_events(
    {"messages": [{"role": "user", "content": "Write me a haiku about the sea"}]},
    version="v3",
)
for message in stream.messages:            # coordinator output
    print("[coordinator]", message.text)
for subagent in stream.subagents:          # each delegated subagent
    print(subagent.name, subagent.path, subagent.status)
    for call in subagent.tool_calls:
        print(f"[{subagent.name} tool]", call.tool_name, call.input)
```

At a lower level, use `agent.stream(..., stream_mode="updates", subgraphs=True, version="v2")`. There, a non-empty `chunk["ns"]` means the event came from a subagent.

### 9. Model parameters and provider/harness profiles
*Official docs: Models and Profiles*

```python
from langchain.chat_models import init_chat_model
from deepagents import (HarnessProfile, ProviderProfile,
                        register_harness_profile, register_provider_profile)

register_provider_profile("openai", ProviderProfile(init_kwargs={"temperature": 0}))
register_provider_profile("openai:gpt-5.5", ProviderProfile(init_kwargs={"reasoning_effort": "medium"}))  # inherits temperature=0

register_harness_profile("my_provider:my-model:tag",
    HarnessProfile(excluded_tools=frozenset({"execute"}),
                   system_prompt_suffix="Respond in under 100 words."))

agent = create_deep_agent(model=init_chat_model("google_genai:gemini-3.6-flash", thinking_level="medium"))
```

`HarnessProfile` can also drop middleware, for example `excluded_middleware={"SummarizationMiddleware"}`.

### 10. Production resilience: retries, tool errors, rubric grading
*Official docs: Fault tolerance and Grading rubrics. The retry and error middleware come from LangChain and also work with `create_deep_agent(middleware=[...])`.*

```python
from langchain.agents.middleware import ModelRetryMiddleware, ToolRetryMiddleware
from deepagents import RubricMiddleware
from langgraph.checkpoint.memory import InMemorySaver

agent = create_deep_agent(
    model="openai:gpt-5.5",
    tools=[search_tool, fetch_url_tool],
    middleware=[
        ModelRetryMiddleware(max_retries=3, backoff_factor=2.0, initial_delay=1.0),
        ToolRetryMiddleware(max_retries=2, tools=["search", "fetch_url"],
                            retry_on=(TimeoutError, ConnectionError)),
        RubricMiddleware(model="anthropic:claude-haiku-4-5", max_iterations=3),
    ],
    checkpointer=InMemorySaver(),
)
```

To turn tool exceptions into messages the model can read, use `ToolErrorMiddleware(on_error)`. Its callback receives `(exc, request)`, returns a string to send back to the model, or returns `None` to re-raise the exception.

### 11. Deploying with `langgraph.json`
*Official docs: Going to production and AG-UI*

```json
{
  "dependencies": ["."],
  "graphs": { "agent": "./agent.py:agent" },
  "env": ".env"
}
```

For per-user runtime data, pass `context_schema=Context` (a dataclass) to `create_deep_agent`, then `context=Context(user_id=...)` on `invoke`. Reuse the same `thread_id` for follow-up turns.

### 12. The backend contract
*From codebase: a shared backend test (`CRUD + search operations should behave consistently`)*

Every backend, whether state, store, filesystem, or ContextHub, has to pass this test. It is the most reliable spec available for building a custom backend:

```python
assert backend.write('/a.md', 'hello\nworld').error is None
assert backend.write('/notes/day1.md', 'first note').error is None

root_paths = {e['path'] for e in backend.ls('/').entries}            # includes '/notes' (dir)
assert {m['path'] for m in backend.grep('hello').matches} >= {'/a.md'}
assert '/a.md' in {m['path'] for m in backend.glob('*.md').matches}

edit = backend.edit('/a.md', 'world', 'earth')
assert edit.error is None and edit.occurrences == 1
assert 'earth' in backend.read('/a.md').file_data['content']
```

Errors come back **as values** (`.error`) and are not raised. Custom backends should do the same so the agent can see the failure and recover.

### 13. Pinned skills are snapshots
*From codebase: skills middleware tests. This is not covered in the official docs.*

```python
write_skill(tmp_path, 'crm', content=_skill_md('crm', 'Manage customer requests', 'Version one.'))
agent.invoke({'messages': [HumanMessage('turn 1')], 'pinned_skills': ['crm']}, CONFIG)
write_skill(tmp_path, 'crm', content=_skill_md('crm', 'Manage customer requests', 'Version two.'))
agent.invoke({'messages': [HumanMessage('turn 2')]}, CONFIG)          # still sees "Version one."
agent.invoke({'messages': [HumanMessage('turn 3')], 'pinned_skills': ['crm']}, CONFIG)
# context now holds BOTH snapshots, each wrapped as:
# <skill name="crm" path="/skills/crm/SKILL.md">\nVersion one.\n</skill>
```

A related test shows that a pinned skill whose `SKILL.md` gets deleted or becomes unreadable is **skipped silently**, and the run still completes.

### More patterns, in brief

```python
# Async (background) subagents running as separate deployed graphs
from deepagents import AsyncSubAgent
AsyncSubAgent(name="researcher", description="Research agent", graph_id="researcher")
# no url = co-deployed (ASGI); url="https://..." = remote HTTP; webhook=..., notify_parent=False

# Code interpreter / dynamic subagents   (pip install -U "deepagents[quickjs]")
from langchain_quickjs import CodeInterpreterMiddleware
create_deep_agent(model=..., middleware=[CodeInterpreterMiddleware()])

# Browser automation   (pip install langchain-stagehand)
from langchain_stagehand import StagehandMiddleware
create_deep_agent(model=..., middleware=[StagehandMiddleware(stagehand=stagehand)])

# Local disk backend for skills
from deepagents.backends.filesystem import FilesystemBackend
create_deep_agent(model=..., backend=FilesystemBackend(root_dir="./my-project"),
                  skills=["./my-project/skills/"])

# OpenAI Responses API without server-side data retention (changelog)
create_deep_agent(model=init_chat_model("openai:...", use_responses_api=True,
                  store=False, include=["reasoning.encrypted_content"]))
```

```python
# MCP tools (pip install "langchain[mcp]") — docs show this with create_agent; tools pass to create_deep_agent the same way
from langchain.mcp import MCPAdapter
async with MCPAdapter("https://example.com/mcp") as adapter:
    tools = await adapter.list_tools()
    agent = create_deep_agent(model="anthropic:claude-sonnet-5", tools=tools)

# Serve to IDEs over Agent Client Protocol   (pip install deepagents-acp)
from acp import run_agent
from deepagents_acp.server import AgentServerACP
await run_agent(AgentServerACP(agent))  # agent built with checkpointer=MemorySaver()
```

```bash
# Managed Deep Agents templates
uvx --from managed-deepagents mda init deep-research     # or: content-builder
```

## 🧭 Working with This Skill

### Beginners
1. Start with Quick Reference **#1**. The agent can already plan, read and write its virtual files, and delegate, all without extra configuration.
2. Add your own `tools=[...]`, then a `system_prompt`. Answer conceptual questions from the "Deep Agents overview" and "Quickstart" sections of `references/documentation/deepagents_docs/oss.md`.
3. The default `StateBackend` is **ephemeral per thread**. Files disappear when the thread ends. If a user wants persistence, move on to #5.

### Intermediate
- **Persistence:** use `CompositeBackend` with `StoreBackend` routes (#5), together with a checkpointer and a stable `thread_id`.
- **Safety:** add `interrupt_on` (#4) for destructive tools and `FilesystemPermission` (#6) for path rules. Both need a checkpointer.
- **Delegation:** add subagents (#3) when a subtask would flood the main context. Keep subagent tool lists narrow.
- **UI:** use `stream_events(version="v3")` (#8), or `useStream` on the frontend.

### Advanced
- **Model-specific tuning:** use `HarnessProfile` and `ProviderProfile` (#9).
- **Custom backends:** implement the contract from #12. The docs also include an "S3-style backend skeleton" on the Backends page.
- **Background work:** use `AsyncSubAgent` with co-deployed or remote graphs. Also check the open issue about per-request headers (#7579).
- **Code execution:** choose a sandbox backend (#7) or the QuickJS `CodeInterpreterMiddleware`. The QuickJS middleware runs in-process; OS-level isolation is still an open request (#7588).
- **Quality loops:** use `RubricMiddleware` (#10).
- **Deployment:** use `langgraph.json` (#11), then A2A, ACP, AG-UI, or MCP endpoints.

### Navigation tips
- `oss.md` is a single file of about 4,200 lines, with one `## <Page> - Docs by LangChain` heading per doc page. Search the headings, for example `rg -n '^## ' references/documentation/deepagents_docs/oss.md`, then read only the section you need.
- Doc examples repeat once per provider. Read the first variant and skip the rest.
- For "how does X actually behave", search `references/codebase_analysis/langchain-ai_deepagents/examples/test_examples.json` for the class or function name.

## 📖 Reference Files

| Path | Contents | Source type | Confidence |
|---|---|---|---|
| `references/documentation/deepagents_docs/oss.md` | Every Deep Agents doc page, ~40 sections: overview, quickstart, customize, models, profiles, backends, sandboxes, memory, skills, subagents, async and dynamic subagents, permissions, HITL, streaming, event streaming, fault tolerance, rubrics, retrieval/RAG, MCP, ACP, A2A, AG-UI, going to production, tutorials (deep research, content builder, data analysis), Claude Agent SDK comparison | Official docs | **High** |
| `references/documentation/deepagents_docs/python.md` | The Python changelog page: deepagents v0.7.0 and the v0.6→v0.7 migration, langchain v1.4.x, Responses API retention | Official docs | **High** |
| `references/github/langchain-ai_deepagents/README.md` | Positioning, principles, FAQ (Deep Agents vs LangChain vs LangGraph), security model | GitHub | **High** |
| `references/github/langchain-ai_deepagents/issues.md` | 41 recent issues (bugs and feature requests) | GitHub | High (point in time) |
| `references/github/langchain-ai_deepagents/releases.md` | Release notes for every package, with PR links and git logs (~12k lines) | GitHub | High |
| `references/conflicts.md` | The doc-vs-code conflict report (see below) | Analysis | Informational |
| `references/codebase_analysis/index.md` | Navigation page for the codebase-analysis output | Codebase analysis | n/a |
| `.../langchain-ai_deepagents/ARCHITECTURE.md` | Auto-generated overview: Repository and Service Layer patterns (0.75), 924 Python files, 267 config files, 1,093 how-to guides, 3,150 test examples | Codebase analysis | Medium |
| `.../langchain-ai_deepagents/api_reference/index.md` | Index of per-file API references (signatures + docstrings). The per-module files were trimmed for size — clone the repo for full detail | Codebase analysis | Medium |
| `.../langchain-ai_deepagents/examples/test_examples.json` | Usage examples extracted from tests: the best source for real behavior | Codebase analysis | Medium–High |
| `.../langchain-ai_deepagents/patterns/` | Detected design patterns: Strategy 228, Observer 39, Adapter 19, Command 7, Builder 4 (confidence > 0.7) | Codebase analysis | Medium |
| `.../langchain-ai_deepagents/guides/`, `configuration/`, `dependencies/` | How-to guides, config file patterns, and the dependency graph, all extracted from code | Codebase analysis | Medium |

**Reading the pattern counts:** "Strategy ×228" mostly reflects the pluggable design. Backends, sandboxes, profiles, and middleware are all interchangeable implementations behind one protocol. That matches what the docs say about extensibility.

## ⚠️ Known Discrepancies

The skill header says "Conflicts Detected: No", but `references/conflicts.md` lists **23,954 doc-vs-code conflicts** (0 high, 19,662 medium, 4,292 low). Almost all of them have the form *"API exists in code but not in documentation"*. Here is how to read them:

1. **Code with no docs is mostly internal, not a contradiction.** The flagged symbols mostly belong to `deepagents_talon` (`ChannelMessage`, `AgentRuntime`, `AckTracker`), the `dcode` TUI (`AgentSelectorScreen`), test helpers, or private `_` functions. **Rule:** only treat a symbol as public API if the docs or `from deepagents import ...` examples use it. If you have to rely on an undocumented symbol, say so and point to the test that exercises it.
2. **Model strings change between pages.** The README uses `openai:gpt-6-astra`. Most docs use `openai:gpt-5.5`, `anthropic:claude-sonnet-5`, and `google_genai:gemini-3.6-flash`. The Sandboxes and Rubric pages use `claude-sonnet-4-6` and `claude-haiku-4-5`. These are only examples, since any tool-calling model works. Use whatever model the user has.
3. **Some doc examples use `create_agent`, not `create_deep_agent`.** The Fault tolerance and MCP pages show LangChain's `create_agent`. The middleware and tools are the same objects, so pass them to `create_deep_agent(middleware=..., tools=...)`. *(The docs and the layering both support this. It is not shown verbatim in the docs.)*
4. **Code-fence language tags in the scraped docs are wrong.** Some Python snippets in `oss.md` / `python.md` are tagged `sass`, `lua`, or `sql`. Treat them as Python.
5. **The Homepage URL differs.** Repo metadata says `docs.langchain.com/deepagents`, while the docs and README use `docs.langchain.com/oss/python/deepagents/overview`. Prefer the `/oss/python/...` URLs.
6. **Pinned-skill behavior (#13) appears only in tests.** Its edge cases are clear (snapshots, append on re-pin, unreadable skills skipped), but the docs do not cover them. Trust the tests, and say so when you rely on them.
7. **Versions.** The docs changelog covers deepagents v0.7.0. The latest releases are 0.7.33 and 0.7.34 (2026-11-05). In a monorepo checkout, editable installs report versions such as `0.7.1+editable`, as covered by `dcode` version-report tests. Before calling something a regression, check `releases.md` for newer fixes.

## 🐛 Known Issues (recent, open)

*From `references/github/langchain-ai_deepagents/issues.md`*

- **#7617**: `deepagents-code --acp` fails with an import error.
- **#7600**: ACP `session/cancel` leaves a prompt waiting on a graph operation that should be cancellable.
- **#7593**: In virtual mode, `FilesystemBackend` shows wrong filenames for symlinks.
- **#7592**: Request to validate paths in `StateBackend` methods (defense in depth).
- **#7588**: Request for optional OS-level process isolation for QuickJS `CodeInterpreterMiddleware`.
- **#7579**: Request for `AsyncSubAgent` per-request headers, such as forwarding caller credentials to a remote subagent.
- **#7587**: (`dcode`) Subcommands swallow piped stdin and hang on open pipes.
- **#7531**: (`dcode`) Fails to start on Windows because `colorama` is missing.
- **#7616**: Request for rolling-window progress budgets for Nemotron Ultra.
- **#7599**: (Talon) Media retention skips downloads when `MEDIA_DIR` is overridden per channel.

### Recent Releases
- **langchain-quickjs==0.3.12** (2026-11-07): the per-call `timeout` can now be disabled. Fixed shutdown blocking in `CodeInterpreterMiddleware.__del__` and the resolution of nested schema `$ref`s in PTC signatures.
- **deepagents==0.7.34** and **0.7.33** (2026-11-05).

## 📦 About

**Repository:** [langchain-ai/deepagents](https://github.com/langchain-ai/deepagents) · **Language:** Python (98.9%) · **License:** MIT · **Stars:** 31,137 · **Open issues:** 247 · **Last updated:** 2026-11-09
**Docs:** https://docs.langchain.com/oss/python/deepagents/overview · **API reference:** https://reference.langchain.com/python/deepagents/
**Topics:** deepagents, langchain, langgraph, ai, python, typescript, harness, harness-engineering
**Inspiration:** Claude Code. The project tries to identify what makes Claude Code general-purpose and push that further (README).

---

*Synthesized from official documentation, the GitHub repository, and codebase analysis by Skill Seekers. Enhanced with source attribution and discrepancy notes.*
