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
- ACP agents (the in-app agent chat) receive OpenKnowledge's MCP tools automatically, so an MCP tool is also an ACP tool.

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
maxSteps: 25                    # agent/tool round trips before it stops
enabled: true
prompt: |
  Find notes changed in the last week and write a digest to digests/this-week.md.
```

- **Approval.** Workflow files live in the project, so a teammate or a cloned repo can add them. Nothing runs until you approve the file on this device under **Settings → Plugins → Workflows → Approve**, or with `POST /api/workflows/approve {"id": ...}`. The approval is tied to the file's SHA-256, so any edit needs approval again. Approvals are kept in `.ok/local/workflow-approvals.json`, which is per machine and never committed. Agents cannot approve: the `workflow` tool only lists and runs.
- **Schedules** use 5-field cron (no seconds), and a schedule that fires more often than every 5 minutes is rejected.
- **Default tools** are read-only: `search, exec, links, lint, audit, history`. Writing needs `write`, `edit`, `move`, `delete` or `checkpoint` listed explicitly. `workflow`, `install`, `import`, `share_link`, `config` and `preview_url` are never allowed.
- **Model keys** come from the server's environment: `ANTHROPIC_API_KEY` or `OPENAI_API_KEY`. `OPENAI_BASE_URL` points `openai:` models at any OpenAI-compatible endpoint (Ollama, LM Studio, OpenRouter, vLLM).
- **Each run** builds a LangGraph `StateGraph` (agent node → `ToolNode` → agent until there are no tool calls). It connects to the server's own `/mcp` endpoint through `@langchain/mcp-adapters`, so writes are attributed to the agent `workflow-<id>`. A run times out after 10 minutes, and the timeout also covers connecting to the model and to the tools. Only one run per workflow happens at a time, and server shutdown waits up to 5 seconds for runs to finish.
- **Run history** is kept in `<project>/.ok/local/workflow-runs.jsonl`, up to the last 200 runs.

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

### 4.2 Langfuse (user plugin, traces workflow runs)

Turn it on under **Settings → Plugins → Langfuse**, then fill in the host and public key there. Leave them empty to use `LANGFUSE_BASE_URL` (default `https://cloud.langfuse.com`) and `LANGFUSE_PUBLIC_KEY`. The secret key is only ever read from `LANGFUSE_SECRET_KEY` in the server's environment, and changing it needs a server restart.

Each run gets a `@langfuse/langchain` `CallbackHandler`, tagged `openknowledge`, `workflow` and `trigger:<schedule|api|mcp>`, with the workflow id as the Langfuse session. The handler is backed by its own OpenTelemetry `BasicTracerProvider` and `LangfuseSpanProcessor`, which are registered with `setLangfuseTracerProvider`. It never touches the app's own telemetry, and traces are flushed when each run ends. The plugin page shows whether tracing is ready or which credentials are missing.

Agents that run outside the app (Claude Code, Codex) are not traced by this plugin; set those up in each agent's own settings.

Files: `packages/server/src/workflows/langfuse-tracing.ts` and `packages/app/src/components/settings/LangfusePluginSection.tsx`.

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
| Workflows | user + server service + `/api/workflows*` + `workflow` agent tool | `plugin-guide` | built 2026-11-09; unit, DOM and live end-to-end tests pass |
| Langfuse | user + server tracing | `plugin-guide` | built 2026-11-09; export checked against a local collector |
