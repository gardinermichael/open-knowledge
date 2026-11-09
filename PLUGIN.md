# Making an OpenKnowledge Plugin

This is a fork-only guide. Upstream OpenKnowledge has no plugin loader: every entry under **Settings → Plugins** is code compiled into the app, turned on or off by a config flag. "Making a plugin" therefore means adding a built-in feature that follows the same shape as the existing ones.

There are two kinds:

| Kind | Scope | Shared with project? | Existing examples | Config key |
|---|---|---|---|---|
| **Project plugin** (lint) | project | yes (committed config) | markdownlint, Frontmatter schemas, OKF | `contentRules.<id>` |
| **User plugin** (feature) | user / this device | no | Themes, Slidev | any user-scoped key, e.g. `slides.enabled` |

Pick a **project plugin** when the plugin checks or fixes document content. Pick a **user plugin** for anything else: a UI feature, an integration, a background service.

---

## 1. User plugin

Model: **Slidev**. It has a toggle, its own settings page, an editor action, and a desktop-only part that runs an external CLI.

### 1.1 Config flag

`packages/core/src/config/schema.ts`. Add a top-level user-scoped object next to `slides`:

```ts
myPlugin: z
  .looseObject({
    enabled: z
      .boolean()
      .register(fieldRegistry, {
        scope: 'user',
        agentSettable: false,
        reload: 'live',
        defaultScope: 'user',
        description: 'Whether the My Plugin plugin appears in Settings → Plugins. …',
      })
      .default(false),
  })
  .default({ enabled: false }),
```

Every field must be `.register(fieldRegistry, …)`. Put the plugin's own settings (endpoints, keys, schedules) in the same object. Never store secrets in a project-scoped field; project config is committed to git.

### 1.2 Toggle row

`packages/app/src/components/settings/LintingSection.tsx`, in `UserPluginsManageSection` (the `settings-user-plugins-list` block). Copy the Slidev row:

- read: `const myEnabled = userConfig?.myPlugin?.enabled === true;`
- write: `userBinding.patch({ myPlugin: { enabled: next } })`, show a `toast.error` if `!result.ok`
- on enable: `notifyPluginEnabled({ pluginId: 'my-plugin', label: t\`My Plugin\` })`
- give it ids and test ids in the `settings-plugin-toggle-<id>` pattern

### 1.3 Sidebar entry

`packages/app/src/components/settings/SettingsDialogShell.tsx`:

```ts
const myPluginEnabled = merged?.myPlugin?.enabled === true;
…
// in the 'plugins' group items:
...(myPluginEnabled ? [{ id: 'plugin:my-plugin', label: t`My Plugin` }] : []),
```

### 1.4 Settings page

Create `packages/app/src/components/settings/MyPluginSection.tsx`, using `SlidesPluginSection.tsx` or `ThemePluginSection.tsx` as the template.

Register it in `packages/app/src/components/settings/SettingsDialogBody.tsx`:

```ts
const MyPluginSection = lazySection(async () => (await import('./MyPluginSection')).MyPluginSection);
…
if (activeId === 'plugin:my-plugin') {
  return <MyPluginSection />;
}
```

This branch **must come before** the `activeId.startsWith('plugin:')` fallthrough, which sends every other `plugin:*` id to the lint plugin page.

### 1.5 The feature itself

Where the code goes depends on what the plugin does:

| The plugin… | Put it in | Reference |
|---|---|---|
| changes editor UI | `packages/app` (read the flag with `useConfigContextOptional()?.merged?.myPlugin?.enabled`) | `EditorToolbar.tsx` slides action |
| runs a native process or window (desktop only) | `packages/desktop`: IPC channel in `src/shared/ipc-channels.ts`, handler in `src/main/index.ts` (`handle('ok:slides:dispatch', …)`), preload bridge in `src/preload/*-bridge.ts`, type in `packages/core/src/desktop-bridge.ts` | `slidev-server.ts`, `slides-window.ts`, `ipc/slides.ts` |
| runs in the background, or works headless/CLI | `packages/server`, wired in `server-factory.ts` | `idle-shutdown.ts`, `telemetry.ts` |

Process safety (from `AGENTS.md`): only signal a `ChildProcess` you spawned, while you still hold it. Never signal a pid read from a file, `ps`, or stdout.

### 1.6 Strings, tests, changeset

- Wrap all user-facing text in Lingui (`t\`…\``, `<Trans>`), then run `pnpm --dir packages/app run i18n` to update all 13 locale catalogs.
- Tests to extend: `LintingSection.dom.test.tsx` (toggle and hash navigation), `SettingsDialogBody.sections.dom.test.tsx` (dispatch before the fallthrough), plus a test for the new section.
- No code comments; `pnpm run lint` enforces this (see `AGENTS.md`).
- Add a `.changeset/<name>.md` with `'@inkeep/open-knowledge': patch`.

---

## 2. Project (lint) plugin

Model: **OKF**. A project lint plugin gets a toggle and a settings page from shared code, so you register metadata instead of hand-writing UI.

### 2.1 Register the id

`packages/core/src/markdown/lint/types.ts`:

```ts
export const LINT_PLUGIN_IDS = ['markdownlint', 'frontmatter', 'okf', 'my-rules'] as const;
```

Add a `MyRulesSlice` type next to `OkfSlice`.

### 2.2 Implement `LintPlugin`

`packages/core/src/markdown/lint/plugins.ts`:

```ts
const myRulesPlugin: LintPlugin<'my-rules', MyRulesSlice> = {
  id: 'my-rules',
  sliceSchema: z.object({ enabled: z.boolean() }),
  defaultSlice: { enabled: false },
  async lint(text, slice, ctx) { return [/* LintDiagnostic[] */]; },
  fix(text, slice) { return text; },
};

export const LINT_PLUGINS = [markdownlintPlugin, frontmatterPlugin, okfPlugin, myRulesPlugin] as const;
```

A `LintDiagnostic` uses a zero-based `range`, a `severity`, `source: 'my-rules'`, a `code`, a `message`, and optional `fixes`. Look at `markdownlint-runner.ts` `toDiagnostic` and `okf-runner.ts` for examples. Rule implementations go in their own folder, like `rules/` and `okf-project/`.

Implement the optional `frontmatter` hooks only if the plugin supplies JSON Schemas for frontmatter.

### 2.3 Persisted config

- `packages/core/src/markdown/lint/config-schemas.ts`: add `myRules?` to `PersistedLinterConfig` and map it in `toEffectiveBase`.
- `packages/core/src/config/schema.ts`: add `'my-rules'` under `contentRules` with a registered, project-scoped `enabled` field.

`toEffectiveBase` is the single loader used by the server (`server-factory.ts` `readLinterBaseConfig`), the CLI (`commands/lint.ts`), MCP `exec`, and the app's source editor. Once the plugin is mapped there, all four pick it up.

### 2.4 UI metadata

- `packages/app/src/components/settings/lint-plugin-meta.ts`: add `{ id: 'my-rules', label: 'My rules', docUrl: '…' }`. The toggle on the project Plugins page and the `plugin:my-rules` sidebar entry are generated from this list.
- `packages/app/src/components/settings/lint-plugins.tsx`: add `'my-rules': MyRulesPluginSection` to `SECTIONS`. It is a `Record` over every `LintPluginId`, so typecheck fails until the entry exists. Write the component next to `OkfPluginSection` in `LintingSection.tsx`, or in its own file. `SettingsDialogBody`'s `plugin:*` fallthrough renders it through `LINT_PLUGIN_UI`.

### 2.5 Tests

Put tests next to the rules in `packages/core/src/markdown/lint/`, then run `pnpm --dir packages/core run test`.

---

## 3. Server-side plugin pieces

These steps come from building the Workflows and Langfuse plugins. Use them when a plugin needs a background service, an HTTP API, or an agent tool.

### 3.1 A background service

1. Put the service in its own folder, e.g. `packages/server/src/workflows/`, with a factory in `index.ts`.
2. Create it in `server-factory.ts` next to `acpRegistry` (`options.ephemeral ? null : createX(...)`), add `readonly x: X | null` to the server instance interface, and return it.
3. Start it in `boot.ts` right after `updateServerLockPort(...)`, which is the first point where the bound URL (`boundBaseUrl`) is known. Stop it in the `destroy` steps with `runStep('x.stop', ...)`.
4. Read user-scope settings fresh each time with `readConfigSafely({ absPath: resolveConfigPath('user', projectDir, homedirOverride) })`. Settings then apply live without a restart.
5. Keep per-machine state (run history, caches) in `lockDir` (`getLocalDir(projectDir)`), never in a committed folder.

### 3.2 HTTP routes

- Write `packages/server/src/http/<name>-routes.ts` returning `createApiRouteGroup({ '/api/x': handler }, { mutating: [...] })`. Use `withValidation` (zod body), `methodRouter` (GET), `successResponse` (schema-validated) and `errorResponse`. Problem types must come from the list in `packages/core/src/schemas/api/_envelope.ts`.
- Register the group in `api-extension.ts`: create it next to `documentRefreshRoutes` and add it to the `nativeGroups` array. Pass the service in through a getter option (`getWorkflowService`), so the routes exist even before the service starts.
- Every `/api/*` route goes through the same admission policy (loopback and origin checks) as the built-in routes.

### 3.3 An agent (MCP) tool

- Write `packages/server/src/mcp/tools/<name>.ts` with a `register(server, deps)` function that calls the plugin's HTTP routes through `httpGet` and `httpPost` (see `checkpoint.ts`). Register it in `mcp/tools/index.ts`.
- **Plugin tools must be opt-in.** `description-contract.uncached.test.ts` caps the whole tool list at 60,000 characters of descriptions and schemas, and core tools already use almost all of it. Register the tool only when its plugin is on: add a flag to `RegisterAllToolsOptions` and set it at both call sites (`mcp-http.ts` for HTTP and ACP agents, `packages/cli/src/mcp/server.ts` for stdio). The flag is read when an agent session starts, so an agent has to reconnect after the plugin is turned on.
- Add the tool name to `OPEN_KNOWLEDGE_MCP_PLUGIN_TOOLS` in `packages/core/src/constants/mcp.ts`, not to `OPEN_KNOWLEDGE_MCP_TOOLS`. The core list must equal what is served by default.
- Never let an agent approve its own work. Approval endpoints stay off the MCP tool surface.
- If the tool spends money or writes, add it to `OK_GATED_TOOL_NAMES` in `packages/core/src/handoff/terminal-launch.ts`, so Claude Code launched from the app asks before using it. Then update the expected `ask` lists in `terminal-launch.test.ts`.
- ACP agents (the in-app agent chat) receive OpenKnowledge's MCP tools automatically, so an MCP tool is also an ACP tool, **but only if they actually reach the fork's code.** Two things send them to the installed OpenKnowledge.app instead, whose build doesn't have your tool:
  - **The agent already has OpenKnowledge configured.** If `~/.claude.json` or `~/.codex/config.toml` already has OpenKnowledge's managed entry (a script starting `# ok-mcp`), the server doesn't add its own (`harnessAlreadyHasOkMcp` in `acp/thread-manager.ts`). That entry runs the installed app's `ok.sh mcp`.
  - **`ok mcp` hands off to the installed app.** Even the fork's own `ok mcp` passes itself to the app's bundled CLI when it is installed (stderr shows `mcp-bundle-proxy` with mode `bundled`). Set `OK_BUNDLE_PROXY=0` or pass `--no-bundle-proxy` to stop that.

  To check, list the tools from the fork's own MCP: run `OK_BUNDLE_PROXY=0 node packages/cli/dist/cli.mjs mcp` from inside the knowledge base and look for your tool. The server's HTTP endpoint, `<server>/mcp`, always serves the fork's tools.

### 3.4 Dependencies

- The repo refuses npm versions newer than 3 days (`minimumReleaseAge`); `pnpm add` picks the newest version old enough.
- The CLI bundles the server's dependencies. A static `import()` of a dependency is bundled as a lazy chunk, so load heavy libraries (LangChain providers) with `await import('...')` where they are used.
- **Duplicate `@modelcontextprotocol/sdk`.** A dependency that brings in the SDK's optional peer `@cfworker/json-schema` (LangChain does) makes pnpm resolve a second copy of the SDK for the server, and the CLI typecheck then fails with `McpServer is not assignable to McpServer`. Fix: add `@cfworker/json-schema` to `packages/cli` `dependencies` and to `alwaysBundlePureJsDeps` in `packages/cli/tsdown.config.ts`.
- Run `pnpm run notices` after adding dependencies.

### 3.5 Lint rules that new code trips

- TypeScript parameter properties (`constructor(private x)`) are rejected (`erasableSyntaxOnly`). Assign fields in the constructor.
- `useCallback` and `useMemo` are banned (React Compiler). Hook effects must list exact dependencies, so move helper functions out of the component.
- Deprecated APIs are errors (`typescript(no-deprecated)`). For example, use `MCPAdapter({ servers })` and `listTools()`, and `.loose()` instead of `.passthrough()`.
- UI text may not end with `…` (`ok(microcopy-ellipsis)`).
- After adding UI strings, run `pnpm --dir packages/app run i18n`. New strings fall back to English in other locales until someone translates them.

---

## 4. Worked examples

### 4.1 Workflows (user plugin + server service + API + agent tool)

Turn it on under **Settings → Plugins → Workflows**. It is per device, so a shared project does not run each schedule once per collaborator.

Define a workflow in `<project>/.ok/workflows/<id>.yml`. The file name is the id (lowercase, digits, hyphens):

```yaml
name: Weekly digest
description: Summarize last week's changes
schedule: "0 9 * * 1"          # cron; omit for manual-only
timezone: Europe/London         # optional
model: anthropic:claude-sonnet-5-5   # or openai:<model>
tools: [search, exec, write]    # OpenKnowledge tools the agent may use
maxSteps: 25                    # model turns before it stops
maxToolCalls: 50                # tool calls before it stops (default 50, max 500)
enabled: true
trace: true                     # false keeps this workflow out of Langfuse
prompt: |
  Find notes changed in the last week and write a digest to digests/this-week.md.
```

- **Approval.** Workflow files live in the project, so a teammate or a cloned repo can add them. Nothing runs until you approve the file on this device under **Settings → Plugins → Workflows → Approve**, or with `POST /api/workflows/approve {"id": ...}`. The approval is tied to the file's SHA-256, so any edit needs approval again. Approvals are kept in `.ok/local/workflow-approvals.json`, which is per machine and never committed. Agents cannot approve: the `workflow` tool only lists and runs.
- **Tracing.** While the Langfuse plugin is on, every workflow is traced; `trace: false` opts one workflow out, its runs are recorded with `traced: false`, and Settings shows "Not traced". Changing the field edits the file, so it needs approval again.
- **Schedules** use 5-field cron (no seconds), and a schedule that fires more often than every 5 minutes is rejected.
- **Default tools** are read-only: `search, exec, links, lint, audit, history`. Writing needs `write`, `edit`, `move`, `delete` or `checkpoint` listed explicitly. `workflow`, `install`, `import`, `share_link`, `config` and `preview_url` are never allowed.
- **Model keys** come from the server's environment: `ANTHROPIC_API_KEY` or `OPENAI_API_KEY`. `OPENAI_BASE_URL` points `openai:` models at any OpenAI-compatible endpoint (Ollama, LM Studio, OpenRouter, vLLM).
- **Each run** builds a LangGraph `StateGraph` that goes agent node → tools node → agent, until the model makes no more tool calls.
  - The tools node runs one call at a time, because LangGraph's `ToolNode` runs a turn's calls in parallel and two writes could race. It also enforces `maxToolCalls`.
  - Tool results, including MCP `isError` results, go back to the model, as do bad arguments (`ToolInputParsingException`) and unknown tool names. Any other thrown error (transport, auth) ends the run.
  - A run that ends with an empty reply fails.
  - Closing the tool connection and flushing Langfuse each get 10 seconds, so cleanup can't hang a finished run. It connects to the server's own `/mcp` endpoint through `@langchain/mcp-adapters`, so writes are attributed to the agent `workflow-<id>`. A run times out after 10 minutes, and the timeout also covers connecting to the model and to the tools. Only one run per workflow happens at a time, and server shutdown waits up to 5 seconds for runs to finish.
- **Run history** is kept in `<project>/.ok/local/workflow-runs.jsonl`, up to the last 200 runs. Each record says which runner ran it, and for an ACP run which agent and version.

**Agent guidance.** The `open-knowledge` project skill, installed by `ok init`, routes workflow requests to `references/workflows.md` (`packages/server/assets/skills/project/references/workflows.md`). It covers the fields, how to choose tools and a runner, how to write an unattended prompt, and the check-then-test loop through the `workflow` tool. It is clear that only the user approves. Update it whenever the workflow format changes.

**Runners.** `runner` picks how the prompt runs. Leaving it out means `{ type: langgraph }`, everything above, which needs a model API key. An ACP runner runs the prompt with an agent you are already signed in to:

```yaml
runner:
  type: acp
  agent: claude-acp        # or codex-acp, devin, cmd, dcode, …
  source: custom           # optional: registry | custom (default: custom first, then registry)
  model: opus              # optional: picks the agent's own model option (exact or unique partial match)
```

A top-level `model:` on an ACP workflow is rejected; use `runner.model`. There is no `auto` runner on purpose, because the same approved file would then behave differently depending on which keys a machine has.

How an ACP run works (`workflows/acp-runner.ts`):

- **Starting the agent.** It spawns the agent itself; it doesn't use a hidden panel chat. The panel cancels a turn nobody is watching, and the panel's permission store auto-allows reads and saved grants. Registry agents must already be installed, which happens the first time you open them in the agent panel. A workflow never downloads one.
- **What the agent gets.** It is started without OpenKnowledge's filesystem or terminal access. It gets one HTTP MCP server, `<server>/mcp`, sent with `x-ok-tool-allowlist: <tools>`. The server then disables every other tool for that session. The header can only narrow the tool list, never widen it, and the LangGraph runner sends it too. An agent that can't use HTTP MCP gets a local `ok mcp` process instead, with the tool list in `OK_MCP_TOOL_ALLOWLIST` and `OK_BUNDLE_PROXY=0`. `ok mcp` never hands off to the installed app while an allowlist is set, because the app would ignore it.
- **Permissions refuse by default.** A request is allowed once only when it is an exactly identified OpenKnowledge tool from `tools:`. Many agents send a permission request carrying only the tool-call id, so the runner merges in what earlier `session/update` reports said about that call, waiting up to 1 second for one. Everything else is cancelled straight away, and "always allow" is never chosen.
- **Not a sandbox.** An agent's own built-in tools, such as reading files, may never ask permission. Confining an agent completely needs an OS sandbox or a restricted user account.
- **Limits.** `maxToolCalls` counts the agent's `tool_call` updates and cancels the turn when exceeded. On timeout the runner sends `session/cancel`, waits 3 seconds, then fails the run. On every path it closes the connection and terminates the agent process tree it started.
- **Tracing.** With Langfuse on and `trace` not false, the run is traced through the agent-chat tracer with workflow naming: `workflow:<id>`, environment `…_workflow`, tags `runner:acp` and the agent id.

**Custom ACP agents** are listed in `<project>/.ok/local/acp-agents.json` or, for every project, `~/.ok/acp-agents.json`. The project file wins when ids clash. They appear in the agent panel and can be used as workflow runners:

```json
[
  { "id": "devin", "name": "Devin", "command": "/opt/homebrew/bin/devin", "args": ["acp"] },
  { "id": "cmd", "name": "Command Code", "command": "/Users/me/.local/bin/cmd", "args": ["acp"] },
  { "id": "dcode", "name": "Deep Agents Code", "command": "/Users/me/.local/bin/dcode",
    "args": ["--acp", "-M", "openai_codex:<model>", "--no-tracing"] }
]
```

Use absolute paths, because a server started from the desktop app may not have your shell's `PATH`.

Gotchas found while connecting these agents:

- **Devin** titles its MCP calls "Calling search from open-knowledge". `identifyOpenKnowledgeToolCall` in core now recognises that wording, for known OpenKnowledge server names only.
- **dcode** needs the `deepagents-acp` extra for `--acp`; without it, `initialize` never answers. A fresh install pulls `agent-client-protocol` 1.0, which removed `audio_block`. Pin it, and since dcode 0.2.5 needs Python 3.14:
  ```
  uv tool install --reinstall --python 3.14 'deepagents-code==0.2.5' --with 'deepagents-acp==0.0.13' --with 'agent-client-protocol==0.12.1'
  ```
  Even then, **don't use dcode as a workflow runner.** In ACP mode (0.2.5) it ignores the MCP servers a client sends, so it never gets OpenKnowledge's tools. It also never reports its own `read_file`, `write_file`, `execute` and similar calls over ACP, so `tools:`, `maxToolCalls` and the permission rule can't apply to it. It is fine in the side panel, where you're watching. Its one-shot mode, `-n`, also needs `-M <provider:model>` and `< /dev/null`, or it waits for input.
- **Tests** run with a temporary `HOME`, so a live agent started from a test can't find its saved sign-in. It reports "not signed in", or hits an account limit that has nothing to do with OpenKnowledge.

Triggering:

| From | How |
|---|---|
| Schedule | cron in the YAML, while the plugin is on |
| Settings | **Plugins → Workflows → Run now** |
| HTTP | `curl -X POST localhost:<port>/api/workflows/run -H 'content-type: application/json' -d '{"id":"weekly-digest","wait":true}'` |
| Approve (a person, once per file version) | Settings, or `POST /api/workflows/approve` |
| List / history | `GET /api/workflows`, `GET /api/workflows/runs?id=<id>` or `?runId=<runId>` |
| Agents (MCP and ACP) | the `workflow` tool: `{action:"list"}`, `{action:"run", id, wait?}`, `{action:"runs", id?, runId?}` |

`wait: true` waits up to about 55 seconds, then returns the run as still running. Poll `/api/workflows/runs?runId=` for the result.

Files: `packages/server/src/workflows/*`, `packages/server/src/http/workflow-routes.ts`, `packages/server/src/mcp/tools/workflow.ts`, and in `packages/app/src`: `components/settings/{ExtensionPluginToggles,WorkflowsPluginSection}.tsx` and `lib/workflows-client.ts`.

### 4.2 Langfuse (user plugin, traces workflow runs and in-app agent chats)

Turn it on under **Settings → Plugins → Langfuse**, then fill in the host and public key there. Leave them empty to use `LANGFUSE_BASE_URL` (default `https://cloud.langfuse.com`) and `LANGFUSE_PUBLIC_KEY`. The secret key is only ever read from `LANGFUSE_SECRET_KEY` in the server's environment, and changing it needs a server restart.

Each run gets a `@langfuse/langchain` `CallbackHandler`, tagged `openknowledge`, `workflow` and `trigger:<schedule|api|mcp>`, with the workflow id as the Langfuse session. The handler is backed by its own OpenTelemetry `BasicTracerProvider` and `LangfuseSpanProcessor`, which are registered with `setLangfuseTracerProvider`. It never touches the app's own telemetry, and traces are flushed when each run ends. The plugin page shows whether tracing is ready or which credentials are missing.

In Langfuse, each run is one trace named `workflow:<id>`. Each model call appears as a generation named after the workflow's `model` (for example `anthropic:claude-sonnet-5-5`), and each tool call as a tool observation.

Two gotchas came up while building this:

- **Start each run in its own trace.** The server has its own OpenTelemetry tracing. A run started from the API or MCP inherits the HTTP request's span, so the Langfuse root span ends up as a child of a span Langfuse never receives, and the trace has no name. `LangfuseTracing.runTraced` fixes this: it runs the graph under `ROOT_CONTEXT`, with `propagateAttributes({ traceName })` setting the trace name.
- **Name the model run.** The CLI bundle minifies class names, so the default name for an LLM run comes out as gibberish such as `yl`. Pass a `runName` when invoking the model.

**Agent chats.** Chats in the agent panel, and Ask AI when it opens a chat there, are traced too unless **Trace agent chats** (`langfuse.traceAgentChats`, default on) is turned off. Each turn is one trace named `<agent name> Turn` (for example `Claude Agent Turn`), with the chat's thread id as the Langfuse session and the tags `openknowledge`, `agent-chat` and the agent id. A trace holds:

- an agent span with the prompt and the reply;
- a generation under it, named after the model chosen in the chat when the agent reports one, carrying token usage and cost when the agent sends them;
- one tool observation per tool call;
- an event for each permission answer.

Long text is cut at 20,000 characters.

This works through a hook that any server-side plugin can use. `AcpThreadManager` takes an optional `threadObserver` (`acp/thread-observer.ts`) and calls it with every thread event before chunks are merged, and with the prompt's token usage before `turn_ended`. It also calls `onThreadClosed` first thing in `closeThread`, because closing the connection rejects the pending prompt and no `turn_ended` follows. The calls are wrapped so that an observer which throws can't drop an event from the chat. `AgentChatTracer` (`langfuse/agent-chat-tracer.ts`) is the Langfuse observer. One `LangfuseTracing` is created in `server-factory.ts` and shared between workflows and chats. Each `beginRun` must be matched by exactly one `finishRun`, because exporters are shut down only when no run is open.

**Naming follows the `langfuse-trace-init` convention** (the `.kills` skill that wires up tracing for agent CLIs), so OpenKnowledge traces sit next to `Claude Code Turn` and `Codex Turn` traces:

- **Environment:** `<prefix>-<project dir>_<agent>`, for example `macbookpro-team-wiki_claude`. The agent suffix is the ACP id without `-acp`, so in-app Claude chats share `_claude` with Claude Code in the same project; workflows use `_workflow`.
- **Prefix:** comes from `LANGFUSE_TRACE_PREFIX`, then `prefix` in `~/.config/langfuse-trace/agents.json`, then the short hostname.
- **Project segment:** the knowledge base's folder name, lowercased, with other characters folded to `-` and cut so the whole id fits Langfuse's 40-character limit. Langfuse drops traces whose environment breaks that rule.
- **Override:** an explicit `LANGFUSE_TRACING_ENVIRONMENT` wins.
- **User:** `userId` comes from `LANGFUSE_USER_ID`.

The deriver is `langfuse/trace-environment.ts`, and its tests mirror the `langfuse-trace-env` script. Every observation in a turn, not only the root, has to be created inside `propagateAttributes`. Otherwise the children are filed under `default`.

In-app chats aren't traced by the Claude Code hook. The in-app Claude Agent runs as an Agent SDK session (`entrypoint: sdk-ts`), and the `langfuse-observability` hook doesn't fire for those. So this plugin doesn't double-count them.

Agents running in a terminal (Claude Code or Codex launched from Ask AI's terminal option, or on their own) are outside OpenKnowledge and are not traced; set those up in each agent's own settings.

Files: `packages/server/src/workflows/langfuse-tracing.ts`, `packages/server/src/langfuse/agent-chat-tracer.ts` and `packages/app/src/components/settings/LangfusePluginSection.tsx`.

---

## 5. Before you build

```bash
pnpm install
pnpm run lint && pnpm run typecheck
pnpm --dir packages/<pkg> run test
pnpm run check
pnpm --filter @inkeep/open-knowledge-app run dev
```

### Building the web app

`pnpm run build` builds everything except the desktop app. The web UI (`packages/app`, Vite) is copied into `packages/cli/dist/public`, and the CLI's `start` command serves it on localhost. The web app always needs that local server running behind it.

```bash
TURBO_CACHE_DIR="$PWD/.turbo-cache" pnpm run build
```

**Rust toolchain gotcha.** `packages/native-config` requires the exact Rust release in `rust-toolchain.toml`. If Homebrew's `rust` formula is installed, its `rustc` comes first on PATH, shadows rustup, and the build fails with `rustc X is not the declared Rust release Y`. Put rustup's proxies first for the build:

```bash
PATH="/opt/homebrew/opt/rustup/bin:$PATH" pnpm run build
```

### Running the built web app

Use a scratch project so nothing touches your editor configs:

```bash
mkdir /path/to/scratch-kb && cd /path/to/scratch-kb
node <repo>/packages/cli/dist/cli.mjs init --no-mcp --no-skills --local-only
node <repo>/packages/cli/dist/cli.mjs start -p 47913
```

Then open `http://127.0.0.1:47913/`. Desktop-only plugin parts (such as the Slidev window) do nothing in the browser.

### Building and installing the desktop app (macOS)

```bash
cd packages/desktop
PATH="/opt/homebrew/opt/rustup/bin:$PATH" PKG_CONFIG_PATH="/opt/homebrew/opt/xz/lib/pkgconfig" bash -c '
  pnpm run build:desktop &&
  node scripts/stage-parcel-watcher.mjs &&
  CSC_IDENTITY_AUTO_DISCOVERY=false node scripts/run-electron-builder.mjs --mac --arm64 --dir --publish never -c.mac.identity=null'
# result: dist-desktop/mac-arm64/OpenKnowledge.app (ad-hoc sealed, not notarized)
```

- **`node-liblzma` needs Homebrew's `xz`, found through `pkg-config`.** If the `pkg-config` on your `PATH` isn't Homebrew's (ServBay ships its own), set `PKG_CONFIG_PATH` as above.
- **Build for Apple Silicon only (`--arm64`).** Homebrew's `liblzma` is arm64-only, so a universal build fails on the Intel half.
- **The version shows as `0.0.0-unknown`.** Release CI stamps the real version; only the About screen shows it.
- **Turn updates off before first launch.** Otherwise the updater, fed from `openknowledge.ai/updates`, replaces the fork with the official release. Quit the app, back up the installed one, `ditto` the build into `/Applications`, then set `"updateMode": "off"` in `~/Library/Application Support/OpenKnowledge/state.json`. The desktop log (`~/.ok/logs/desktop.<date>.log`) should then say `skipping checkForUpdates — updates are turned off`.
- **Expect a keychain prompt.** The build is unsigned, so macOS may ask once before it reads keychain items the signed app saved.

## 6. Keeping the fork current

```bash
git fetch origin
git rebase origin/main   # on your plugin branch
git push fork <branch> --force-with-lease
```

`origin` is `inkeep/open-knowledge` and `fork` is your copy. Keep plugin code in new files wherever possible so rebases only conflict on the small registration points listed above.

---

## Plugin log

| Plugin | Kind | Branch | Status |
|---|---|---|---|
| Workflows | user + server service + `/api/workflows*` + `workflow` agent tool | `plugin-guide` | built 2026-11-09; unit, DOM and live end-to-end tests pass. 2026-11-09: hardened LangGraph runner (serial tools, maxToolCalls, bounded cleanup); ACP runner added, live-tested with Devin |
| Langfuse | user + server tracing (workflows and agent chats) | `plugin-guide` | built 2026-11-09; 2026-11-09 fix: traces now named `workflow:<id>` and detached from the server's request span, checked in Langfuse Cloud; agent-chat tracing added 2026-11-09, checked in Langfuse Cloud with the example ACP agent |
