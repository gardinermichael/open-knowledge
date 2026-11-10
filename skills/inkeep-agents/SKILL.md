---
name: inkeep-agents
description: Knowledge for building and working with inkeep/agents — the Inkeep agent framework — from the GitHub repository and the official docs site (docs.inkeep.com).
---

# Inkeep Agents

Inkeep Agents (`inkeep/agents`) is a TypeScript framework for building AI agents and multi-agent workflows. You can build them in a no-code **Visual Builder** or with the **TypeScript SDK**, and the two stay in **2-way sync** through `inkeep push` and `inkeep pull`. Under the hood it uses the Vercel AI SDK, so it works with `useChat` and other AI SDK primitives.

## 📚 Sources and Confidence

This skill combines two source types. Each answer should say which one it relies on.

| Source | What it gives you | Confidence | Where |
|---|---|---|---|
| **Official docs** (docs.inkeep.com, 150 pages) | Intended API, SDK usage, tutorials, deployment, REST API reference | **High**: the main source for "how do I…" | `references/documentation/` |
| **GitHub repository** (README, issues, releases) | Architecture, license, open bugs, changelogs | **High** for facts, **medium** for how current they are | `references/github/` |
| **Codebase analysis** (C2.5 API extraction, C3.x patterns) | Internal class and method signatures (`Agent`, `AgentSession`, `ArtifactService`, `BaseCompressor`, `AgentMcpManager`, `A2AClient`) | **Medium**: signatures are reliable, but parameter tables and framework labels are often garbled | `references/codebase_analysis/`, `references/api/merged_api.md` |

**Where the sources agree (high confidence):** the service split (`agents-api`, `agents-manage-ui`, `agents-sdk`, `agents-cli`, `agents-ui`), the Agent → Sub Agent → Tool model, MCP as the main tool mechanism, A2A support, and the `@inkeep/*` package names. The README, the docs and the directory layout all confirm these.

**Priority when sources differ:** code (what actually runs) > official docs (intended usage) > GitHub issues (real-world breakage). Apply that order only to *behaviour*. For *public API usage*, prefer the docs, because the code-analysis output mostly lists internal symbols that you should not import.

## 💡 When to Use This Skill

Use it when the user is:

- **Scaffolding a project**, for example running `npx @inkeep/create-agents`, `pnpm setup-dev`, or editing `inkeep.config.ts`.
- **Defining agents in code** with `agent()`, `subAgent()`, `project()`, `mcpTool()`, `dataComponent()`, `trigger()`, `headers()`, `contextConfig()`, `fetchDefinition()` or `loadSkills()`.
- **Designing multi-agent flows**: choosing between **transfer** (`canTransferTo`) and **delegate** (`canDelegateTo`), routing sub agents, or calling external A2A agents.
- **Adding tools**: registering MCP servers (Zapier, Composio, Exa, Stripe, Slack, Notion, custom), writing function tools, narrowing tools with `.with({ selectedTools })`, setting `toolOverrides`, or requiring tool approval.
- **Configuring models**: the project → agent → sub agent model hierarchy, the `base`/`structuredOutput`/`summarizer` slots, `providerOptions`, Vercel AI Gateway `fallbackModels` and `allowedProviders`, Azure, custom OpenAI-compatible providers, or prompt caching.
- **Talking to agents** through the React or JS chat widgets, the Vercel AI SDK provider (`@inkeep/ai-sdk-provider`), `/api/chat`, A2A JSON-RPC, the MCP server endpoint, Slack, or Zendesk.
- **Passing context**, such as request headers, `{{headers.x}}` templating, context fetchers, and `{{$conversation.id}}`.
- **Producing structured output** with data components, artifact components, or citations.
- **Running in production**: Docker Compose on AWS EC2, GCP, Azure or Hetzner, Vercel, SigNoz, Nango, Langfuse, Datadog, Sentry, S3 blob storage, email, or SSO.
- **Debugging** stalled agents (`stopWhen` limits), port conflicts, provider key errors, traces, or a broken quickstart.
- **Calling the Manage API**: webhooks, triggers, scheduled triggers, evaluations, credentials, skills, branches, and project members.
- **Reading the framework internals** (from codebase analysis): how `AgentSession` emits status updates, how `BaseCompressor` compacts history, or how `AgentMcpManager` builds MCP tool sets.

Do **not** use it for Inkeep's legacy hosted search/"Ask AI" product unless the question concerns the agent widgets in `talk-to-your-agents.md`. For generic Vercel AI SDK or MCP protocol questions with no Inkeep angle, use the upstream docs instead.

## 🧠 Key Concepts

From the docs (`other.md` → "Core concepts"), checked against the codebase layout.

| Term | Meaning |
|---|---|
| **Project** | Top-level container for related agents, MCP servers, credentials, skills and models. `inkeep push` and `inkeep pull` work on a **whole project**, never on one agent. |
| **Agent** | What users talk to or trigger. It is made of one or more Sub Agents, and every message enters through `defaultSubAgent`. |
| **Sub Agent** | A focused worker with a prompt, tools and relationships. The docs suggest **5–7 related tools** per sub agent. |
| **Transfer** (`canTransferTo`) | Hands the conversation over permanently. Use it when follow-up questions belong to the specialist. |
| **Delegate** (`canDelegateTo`) | Calls another sub agent (or an external A2A agent) as a sub-task, then resumes. Use it for "get X, then continue". |
| **Turn loop** | Execution loops among sub agents until one replies to the user. `stopWhen` caps it: `transferCountIs` at agent level, `stepCountIs` at sub agent level. |
| **Tools** | **MCP servers** (with credentials) or **function tools** (sandboxed JavaScript, with optional pinned npm dependencies). |
| **Data components / artifact components** | Structured JSON output, defined with Zod props. Data components render UI. Artifacts carry citable, persisted results. |
| **Context** | Request **headers** plus **context fetchers** (`fetchDefinition`, run at `initialization` or per request), templated into prompts as `{{...}}`. |
| **Triggers** | Webhook or scheduled entry points. Each one starts a new conversation asynchronously and returns an invocation ID. |
| **Skills** | `SKILL.md` folders attached to sub agents by `{ id, index }`. |
| **Credentials** | Stored through Nango or the keychain, resolved per environment (`INKEEP_ENV`). |

**Services** (README):

| Service | Role | Local port |
|---|---|---|
| `agents-api` | Manage, run and evals REST API, conversation state, OTEL traces | `3002` |
| `agents-manage-ui` | Visual Builder (writes to `agents-api`) | `3000` |
| `agents-sdk` | `@inkeep/agents-sdk` declarative definitions | — |
| `agents-cli` | `inkeep push`/`pull`/profiles | — |
| `agents-ui` | Embeddable chat components | — |

Local databases use ports `5432`–`5434` (Postgres/Doltgres) through `pnpm setup-dev`.

## 🎯 Quick Reference

Every example below comes from the **official docs** (high confidence) unless it is labelled otherwise. Fence labels have been corrected.

### 1. Scaffold and run locally (docs: Quick Start)

```bash
npx @inkeep/create-agents my-agents
cd my-agents
pnpm setup-dev   # Docker must be running
pnpm dev         # Visual Builder auto-opens at http://localhost:3000
```

Log in with `INKEEP_AGENTS_MANAGE_UI_USERNAME` and `INKEEP_AGENTS_MANAGE_UI_PASSWORD` from the root `.env`. If `pnpm push` then fails with Doltgres prepared-statement errors, see issue **#3465** under [Known Issues](#️-known-issues).

### 2. Minimal agent (GitHub README)

```typescript
import { agent, subAgent } from '@inkeep/agents-sdk';
import { consoleMcp } from './mcp';

const helloAgent = subAgent({
  id: 'hello-agent',
  name: 'Hello Agent',
  description: 'Says hello',
  canUse: () => [consoleMcp],
  prompt: 'Reply to the user and console log "hello world"',
});

export const basicAgent = agent({
  id: 'basic-agent',
  name: 'Basic Agent',
  defaultSubAgent: helloAgent,
  subAgents: () => [helloAgent],
});
```

The README and docs both use this shape, which is a good sign it is current. Relationships are **thunks** (`() => [...]`), so sub agents can refer to each other before both are declared.

### 3. Router plus specialists: transfer vs. delegate (docs: Sub Agent Relationships)

```typescript
const routerSubAgent = subAgent({
  id: 'support-router',
  prompt: 'For order inquiries, transfer to order specialist',
  canTransferTo: () => [orderSubAgent],
});

const mathSupervisor = subAgent({
  id: 'supervisor',
  prompt: 'Delegate to number producers, then add results together',
  canDelegateTo: () => [numberProducerA, numberProducerB],
});
```

External A2A agents are delegated to the same way: `canDelegateTo: () => [myExternalAgent]`.

### 4. Register an MCP server as a tool (docs: Register MCP Servers)

```typescript
import { subAgent, mcpTool } from '@inkeep/agents-sdk';

const knowledgeBaseTool = mcpTool({
  id: 'knowledge-base-tool',
  name: 'knowledge_base',
  description: 'Search the company knowledge base',
  serverUrl: 'https://kb.yourcompany.com/mcp',
});

const qaAgent = subAgent({
  id: 'qa-agent',
  name: 'QA Agent',
  prompt: 'You answer questions using the knowledge base tool.',
  canUse: () => [knowledgeBaseTool],
});
```

To narrow the tool surface, use `canUse: () => [zendeskMcpTool.with({ selectedTools: ['create_zendesk_ticket'] })]`. To rename or reword a tool for the model, use `toolOverrides`.

### 5. Environment-aware credentials (docs)

```typescript
export const stripeTool = mcpTool({
  id: 'stripe-tool',
  name: 'Stripe',
  serverUrl: 'https://mcp.stripe.com/mcp',
  credential: envSettings.getEnvironmentCredential('stripe_api_key'),
});
```

```bash
export INKEEP_ENV=production
inkeep push                    # uses production
inkeep push --env development  # flag overrides env var
```

### 6. Model configuration and inheritance (docs: Model Configuration)

```typescript
models: {
  base: {
    model: 'anthropic/claude-sonnet-4-5',
    providerOptions: { temperature: 0.7, maxOutputTokens: 2048 },
  },
},

const myAgent = agent({ models: { base: { model: 'openai/gpt-5.2' } } });
const mySubAgent = subAgent({
  models: { structuredOutput: { model: 'openai/gpt-4.1-mini' } },
});
```

The model slots are `base`, `structuredOutput` and `summarizer`, and each inherits **independently** down project → agent → sub agent. A pinned model (`anthropic/claude-sonnet-4-20250514`) never changes. An unpinned model (`anthropic/claude-sonnet-4-5`) follows the provider's latest version. When `AI_GATEWAY_API_KEY` is set, `fallbackModels` and `allowedProviders` become available.

### 7. Headers → context fetcher → prompt variables (docs: Headers in TypeScript SDK)

```typescript
import { z } from 'zod';
import { contextConfig, fetchDefinition, headers } from '@inkeep/agents-core';

const h = headers({ schema: z.object({ user_id: z.string(), auth_token: z.string() }) });

const userFetcher = fetchDefinition({
  id: 'user-info',
  trigger: 'initialization',
  fetchConfig: {
    url: `https://api.example.com/users/${h.toTemplate('user_id')}`,
    headers: { Authorization: `Bearer ${h.toTemplate('auth_token')}` },
    transform: 'user',
  },
  responseSchema: z.object({ user: z.object({ name: z.string() }) }),
  defaultValue: 'Guest User',
});

const ctx = contextConfig({ headers: h, contextVariables: { user: userFetcher } });
// prompt: `You help ${ctx.toTemplate('user.name')}.`
```

Use **lowercase** header keys. In Visual Builder JSON, the same headers are written as `"Authorization": "Bearer {{headers.auth-token}}"`.

### 8. Call an agent from your app (docs: Vercel AI SDK provider)

```typescript
import { streamText } from 'ai';
import { createInkeep } from '@inkeep/ai-sdk-provider';

const inkeep = createInkeep({
  baseURL: process.env.INKEEP_AGENTS_API_URL, // local: http://localhost:3002
  apiKey: '<your-agent-api-key>',             // agent ID is encoded in the key
  headers: { 'x-emit-operations': 'true' },   // stream tool events
});

const result = await streamText({ model: inkeep(), prompt: 'Plan an event in NYC' });
```

Install it with `npm install @inkeep/ai-sdk-provider ai`. For a raw HTTP call, `POST /api/chat` returns SSE (`x-vercel-ai-data-stream: v2`). Check the port discrepancy under [Known Discrepancies](#️-known-discrepancies) before copying the curl samples.

### 9. Webhook trigger (docs: Webhook Triggers in TypeScript SDK)

```typescript
import { agent, trigger, subAgent } from '@inkeep/agents-sdk';

const slackTrigger = trigger({
  name: 'Slack Messages',
  messageTemplate: 'New message from {{user.name}}: {{text}}',
});

export default agent({
  id: 'support-agent',
  name: 'Support Agent',
  defaultSubAgent: subAgent({ id: 'support', name: 'Support', prompt: 'Answer support questions.' }),
  triggers: () => [slackTrigger],
});
```

### 10. Structured output with a data component (docs)

```typescript
import { dataComponent } from '@inkeep/agents-sdk';
import { z } from 'zod';

export const taskList = dataComponent({
  id: 'task-list',
  name: 'TaskList',
  description: 'Display user tasks with status',
  props: z.object({
    tasks: z.array(z.object({
      id: z.string().describe('Unique task identifier'),
      title: z.string().describe('Task title'),
      completed: z.boolean().describe('Whether the task is completed'),
    })),
  }),
});
```

`.describe()` text reaches the model, so write it for the LLM, not for humans.

### 11. CLI config and push/pull (docs: Workspace Configuration, Push / Pull)

```typescript
// inkeep.config.ts
import { defineConfig } from '@inkeep/agents-cli/config';
import 'dotenv/config';

export default defineConfig({
  tenantId: 'my-company',
  agentsApi: { url: 'http://localhost:3002', apiKey: process.env.API_KEY },
  outputDirectory: './output',
});
```

```bash
inkeep push                                         # code → Visual Builder (whole project)
inkeep pull                                         # Visual Builder → code
inkeep push --agents-api-url https://api.production.com
```

Run these from the folder that holds `inkeep.config.ts`, whose `index.ts` exports a `project()`.

### 12. Skills attached to a Sub Agent (docs: Skills in TypeScript SDK)

```typescript
import path from 'node:path';
import { loadSkills, project, subAgent } from '@inkeep/agents-sdk';

const planner = subAgent({
  id: 'activities-planner',
  prompt: 'Help users plan activities based on current weather.',
  skills: () => [{ id: 'weather-safety-guardrails', index: 0 }],
});

export const myProject = project({
  id: 'my-project',
  name: 'My Project',
  agents: () => [myAgent],
  skills: () => loadSkills(path.join('my-project/skills')),
  models: { base: { model: 'openai/gpt-4o' } },
});
```

Skills live in `skills/<skill-id>/SKILL.md`, with optional `reference/` and `templates/` folders.

### 13. Function tool (docs: Function Tools in Visual Builder)

```javascript
function calculateBMI({ weight, height }) {
  const bmi = weight / (height * height);
  let category = 'Normal';
  if (bmi < 18.5) category = 'Underweight';
  else if (bmi >= 30) category = 'Obese';
  return { bmi: Math.round(bmi * 10) / 10, category };
}
```

You can pin npm dependencies with a version map such as `{ "axios": "1.6.0", "lodash": "4.17.21" }`.

### 14. Execution limits (docs: Agents API schema)

```json
{
  "stopWhen": { "transferCountIs": 1 },
  "subAgents": {
    "router": { "stopWhen": { "stepCountIs": 1 } }
  }
}
```

`transferCountIs` sits on the **agent**. `stepCountIs` sits on a **sub agent**. An agent that "stops mid-conversation" has usually hit one of them.

### 15. Self-host the external services (docs: Deployment)

```bash
git clone https://github.com/inkeep/agents-optional-local-dev inkeep-external-services
cd inkeep-external-services
./scripts/generate-env-from-example.sh   # creates .env from .env.docker.example
```

This brings up SigNoz, Nango, the OTEL Collector and Jaeger, and can take about 5 minutes. Set `NANGO_ENCRYPTION_KEY` once, because it **cannot be changed later**. In production, expose only port `3002` behind a gateway (docs: Azure VM guide). Docker Hub images may lag behind releases (issue **#2805**), so consider building your own image (`docker compose build && docker compose up -d`).

### 16. Prompt skeleton (docs: Agent Engineering guide)

```text
You are [role identity] who [what excellence looks like in practice].

You [concrete positive behavior].
You [concrete positive behavior].

## Operating principles
- Clarify before action on high-impact ambiguity.
- Weigh evidence by source authority and relevance.
```

For orchestrator prompts, the tutorials use `<workflow>` and `<rules>` blocks, for example "Always delegate in order: Meeting Finder → Company Research".

### From the codebase: internal runtime classes (medium confidence)

These classes are **internal to `agents-api`**. Use them to explain behaviour, not to import. The signatures come from C2.5 extraction.

| Class | Source | What it explains |
|---|---|---|
| `agent(config: AgentConfig)` | `packages/agents-sdk/src/agent.ts` | The public SDK entry point. Function tools are hoisted to **project level** on push. |
| `AgentSession` | `agents-api/src/domains/run/session/AgentSession.ts` | Per-message event log (`sendDataOperation`, `getEventsByAgent`) and **status updates** (`initializeStatusUpdates(config, summarizerModel, baseModel)`), plus `enableEmitOperations()` behind the `x-emit-operations` header and `waitForPendingArtifacts()`. |
| `BaseCompressor` | `agents-api/src/domains/run/compression/BaseCompressor.ts` | Conversation compression: `getHardLimit()`, `estimateTokens()`, `calculateContextSize()`, and `saveToolResultsAsArtifacts()`, which stores oversized tool results as artifacts. It uses the **summarizer** model slot. |
| `ArtifactService` | `agents-api/src/domains/run/artifacts/ArtifactService.ts` | `createArtifact`, `getArtifactSummary`/`getArtifactFull`, and validation of summary and full data against the artifact component's preview and full schemas. |
| `AgentMcpManager` | `agents-api/src/domains/run/agents/services/AgentMcpManager.ts` | `getToolSet(tool)`, `createMcpConnection`, `reportEmptyToolSet`. An MCP server that returns no tools is reported, not silently ignored. |
| `A2AClient` | (code-only) | `getAgentCard`, `sendMessage`, `sendMessageStream`, `getTask`, `cancelTask`, push-notification config, retry with `retryIntervalFromResponse`. |

**Docs and code agree** on status updates, `x-emit-operations`, and artifacts being saved from tool results. The code adds two things the docs don't spell out: oversized tool results are turned into artifacts during compression, and the summarizer model drives both status updates and compression. That is why an issue in one (#3586) can corrupt history.

## ⚠️ Known Discrepancies

The skill header says "Conflicts Detected: No", but `references/conflicts.md` lists **6,037** automated "conflicts" (32 high, 5,991 medium, 14 low). Almost all of them are noise, as the table below explains.

| # | Discrepancy | Sources | Guidance |
|---|---|---|---|
| 1 | **Chat endpoint port**: curl samples use `http://localhost:3003/api/chat`, while the AI SDK and custom UI docs use `http://localhost:3002` (`/run/api/chat`) | docs vs. docs | Prefer **3002**, which matches `inkeep.config.ts`, the deployment guides ("only expose 3002") and the README's single `agents-api` service. The 3003 samples look like they predate the API merge. Check `pnpm dev` output if unsure. |
| 2 | **License**: GitHub metadata says "Other", but the README says **Elastic License 2.0** plus Inkeep Supplemental Terms (fair-code) | GitHub API vs. README | Trust the README. ELv2 is *not* OSI open source, so flag it for anyone planning to offer the framework as a hosted service. |
| 3 | **Architecture labels**: codebase analysis reports "MVC, ASP.NET" (0.95) and "Rails, Express" | codebase analysis vs. README and docs | **False positive.** The repo is a TypeScript monorepo with a Hono-style API service, a Next.js manage UI and React chat components. Ignore those framework labels. |
| 4 | **Pattern counts**: the old summary said 56 patterns (44 Strategy, 13 Factory), but `ARCHITECTURE.md` reports 59 Strategy, 24 Factory, 14 Builder, 14 Observer, 9 Adapter and more | codebase analysis vs. codebase analysis | They come from different confidence thresholds (> 0.7 vs. all). Many hits are in `__tests__` (for example `MockAgent` as Builder at 0.5). Treat them as hints, not architecture. |
| 5 | **"Documented but not in code"** (high severity) for things like `characters`, `as`, `filtering`, `parts` | `conflicts.md` | **Tokenizer noise.** These are English words pulled from REST API pages, not real APIs. |
| 6 | **"In code but not documented"** (around 6,000 medium) for `A2AClient.*`, `Agent.*`, UI components (`AcceptInvitationPage`, `ActiveToolBadge`) | `merged_api.md` | These are expected internals. The public surface is `@inkeep/agents-sdk`, `@inkeep/agents-core` (headers/context), `@inkeep/agents-cli/config` and `@inkeep/ai-sdk-provider`. Don't recommend importing anything else. |
| 7 | **Model IDs** in examples (`gpt-5.2`, `claude-sonnet-4-5`, `gpt-4o`) differ from page to page | docs | All of them are only examples. Unpinned IDs drift. Pin a dated ID in production. |

## ⚠️ Known Issues

From `references/github/inkeep_agents/issues.md` (11 open issues at build time). Check them before you debug from first principles.

| Issue | Impact | Workaround / note |
|---|---|---|
| **#3465** | The quickstart breaks: unpinned `dolthub/doltgresql:latest` breaks `push` (prepared statements, dolt versioning). | Pin the Doltgres image tag in the compose file. |
| **#3585** | Cannot bootstrap a fresh new project. | Probably related to #3465. Check the DB container versions and re-run `pnpm setup-dev`. |
| **#3586** | If the summarizer fails during compression, history is **permanently replaced** with a placeholder or empty summary. | Give the `summarizer` slot a reliable model, and consider `fallbackModels`. |
| **#2805** | Docker Hub images have not been updated since v0.56.2. | Build a custom image (Deployment → "Build a Custom Docker Image"). |
| **#3024** | **Security**: unauthenticated tenant takeover through header injection in `runAuth` (dev/test mode). | Never expose dev/test-mode deployments publicly. Run production auth mode. |
| **#3534** | AI SDK v6 → v7 migration. | Check this issue before you upgrade `ai` alongside `@inkeep/ai-sdk-provider`. |
| #3550, #3551, #3557, #3288 | Feature requests and proposals (x402 payments, Memcode MCP, a Next.js MCP docs cookbook, Corsair). | Not available yet. |
| #3429 | Broken README link. | Use docs.inkeep.com. |

**Recent releases:** v0.68.2–v0.68.4 (2026-04-15). All `@inkeep/*` packages are bumped in **lock-step** (`agents-api`, `agents-cli`, `agents-core`, `agents-sdk`, `agents-manage-ui`, `agents-work-apps`, `ai-sdk-provider`, `create-agents`), so keep them on one version. The full history is in `references/github/inkeep_agents/releases.md` (about 470 KB, so search it rather than reading it whole).

## 🩺 Debugging Playbook

Synthesized from the docs' Troubleshooting Guide and the Agent Engineering troubleshooting page, plus the GitHub issues.

1. **Services unreachable or `pnpm dev` fails**: run `pnpm setup-dev` from the workspace root, and make sure Docker is running.
2. **Ports 5432/5433/5434 in use**: another Compose project holds them. Run `docker compose -p <project-name> down` (setup-dev prints the name), then re-run setup.
3. **The agent stops mid-conversation**: a `stopWhen` limit was hit (`transferCountIs` or `stepCountIs`).
4. **Provider errors**: missing or invalid AI provider key, no credits left, or rate limits. Transient errors and some provider errors are **retried automatically with exponential backoff**.
5. **Something broke**: open **Traces** → the conversation timeline → the error card. Use **Copy Trace** for a JSON export (metadata, timing, timeline), and **View in SigNoz** for distributed spans. Langfuse, Datadog and Sentry integrations are documented under Deployment and Guides.
6. **Weak or inconsistent answers**: don't rewrite the whole prompt. Match the symptom in the Agent Engineering troubleshooting page and add one targeted guardrail ("Operating principles" or "Prompt pitfalls to avoid").
7. **Auto-login fails at :3000**, or the CLI device code fails: the manage UI was unreachable when you approved. Restart `pnpm dev` and retry.

## 📖 Reference Files

| Path | Source type | Confidence | Contents and when to open it |
|---|---|---|---|
| `references/documentation/inkeep-agents_docs/typescript-sdk.md` | docs | high | Workspace config, prompt template variables, sub agent relationships, skills, models, project management, evaluations, headers, triggers, env credentials, data operations, keychain, data components. **Start here for SDK code.** |
| `.../agents.md` | docs | high | Visual Builder tutorials (meeting prep, Zendesk, in-product copilot), external A2A agents, the A2A and MCP endpoints, Slack app, React sidebar chat, Vercel AI SDK and AI Elements, custom UIs. |
| `.../talk-to-your-agents.md` | docs | high | Chat widgets (Embedded, Button, Custom Trigger for JS and Next.js), CSP, passing context to widgets, interactive components, styling, analytics, App Credentials. |
| `.../tools.md` | docs | high | MCP registration (SDK and UI), function tools, user-level vs. project-level MCP servers, tool approvals. |
| `.../visual-builder.md` | docs | high | Credentials, outbound webhooks, SSO, test suites, headers, webhook triggers, skills, guardrails, evaluations, Zendesk triggers, context fetchers. |
| `.../guides.md` | docs | high | Prompt writing, Agent Engineering best practices and troubleshooting, Langfuse, Composio, CLI profiles, prompt caching, custom MCP servers, multi-agent design, push/pull to remote, citations, human escalation. |
| `.../deployment.md` | docs | high | Docker (custom image), AWS EC2, GCP, Azure, Hetzner, Vercel, Datadog, Sentry, email, S3, Enterprise. |
| `.../other.md` | docs | high | **Core concepts**, Quick Start, Troubleshooting Guide, traces/OTEL, push/pull, isolated dev environments, data connectors (Context7, Pinecone, Ref, Unified Search), comparisons (n8n, Lindy, AgentKit), contributing. |
| `.../api.md` (≈215 KB) | docs | high | Full Manage/Run REST reference: webhooks, triggers, scheduled triggers, artifact components, evaluations, context configs, agents, sub agents, credentials, branches, skills, tools, MCP, chat, feedback. **Search by `## <Resource>` heading.** |
| `references/github/inkeep_agents/README.md` | GitHub | high | Positioning, architecture services, license (ELv2). |
| `references/github/inkeep_agents/issues.md` | GitHub | high (snapshot) | 11 open issues; see [Known Issues](#️-known-issues). |
| `references/github/inkeep_agents/releases.md` (≈470 KB) | GitHub | high | Per-package changesets. Search by version or package name. |
| `references/codebase_analysis/inkeep_agents/ARCHITECTURE.md` | codebase | medium | Directory sizes, pattern counts, 272 config files. Its framework labels are wrong (see Discrepancy #3). |
| `references/codebase_analysis/inkeep_agents/api_reference/*.md` | codebase | medium | About 1,600 per-file signature dumps (classes, methods, parameter tables). Use them for "how does the runtime do X". Parameter tables sometimes split generic types such as `Record<string, unknown>` across rows. |
| `references/codebase_analysis/inkeep_agents/{patterns,configuration,dependencies,architecture_details}/` | codebase | medium | Detected patterns (JSON and markdown), config file inventory, dependency graph. |
| `references/api/merged_api.md` (≈720 KB) | merged | low as a guide | Docs and code symbol merge. Almost every entry is flagged "exists in code but not documented". Use it only to check that a symbol exists. |
| `references/conflicts.md` | merged | informational | The automated conflict report. Read it alongside the [Known Discrepancies](#️-known-discrepancies) table. |

## 🧭 Working with This Skill

**Beginners.** Start with the Key Concepts table, then Quick Reference #1 → #2 → #4 → #11. Read `other.md` → "Core concepts" and "Quick Start". Build one agent with one sub agent and one MCP tool before you add relationships.

**Intermediate.** For multi-agent design, read `guides.md` → "Designing Multiagent Workflows" and use transfer vs. delegate (#3). Add context (#7), structured output (#10) and environment credentials (#5). Embed through `talk-to-your-agents.md` or the AI SDK provider (#8). Use push/pull to keep the Visual Builder and code in sync, remembering that it covers the **whole project**.

**Advanced.** For production, follow `deployment.md` together with Known Issues #2805, #3024 and #3465. Tune models per slot (#6), prompt caching, and `stopWhen` (#14). Add evaluations and test suites, plus Langfuse or SigNoz tracing. For runtime behaviour (compression, status updates, artifacts, MCP connection handling), read the codebase `api_reference/` files for `AgentSession`, `BaseCompressor`, `ArtifactService` and `AgentMcpManager`.

**Navigation tips**
- The large files (`api.md`, `releases.md`, `merged_api.md`) are meant to be searched: `rg -n '^## Triggers' references/documentation/inkeep-agents_docs/api.md`.
- Each docs section starts with `**URL:** https://docs.inkeep.com/...`. Cite that URL in answers.
- Code-analysis files are named after the source file (for example `AgentSession.md` ↔ `agents-api/src/domains/run/session/AgentSession.ts`).

**Resolving conflicts**
1. For runtime behaviour, trust the codebase signatures over the docs prose.
2. For public API usage and configuration, trust the docs, and confirm a symbol exists with `merged_api.md` if needed.
3. For "is this broken right now?", check `issues.md` and the latest `releases.md` entry. If the snapshot may be stale, say so and suggest checking GitHub.
4. Ignore conflict entries that are generic words or UI component names (see Discrepancies #5 and #6).

---

*Synthesized from the official documentation (docs.inkeep.com), the inkeep/agents GitHub repository, and automated codebase analysis by Skill Seekers. Snapshot: 2026-11-09, latest release v0.68.4.*
