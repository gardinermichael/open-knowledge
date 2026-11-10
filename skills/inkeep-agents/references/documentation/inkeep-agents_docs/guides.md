# Inkeep-Agents_Docs - Guides

**Pages:** 24

---

## Writing High-Quality Prompts - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/guides/agent-engineering/prompt-structure

**Contents:**
- Writing High-Quality Prompts
- 1. Role and mission
- 2. Scope and non-goals
- 3. Operating principles
- 4. Workflow checklist
- 5. Tool-use policy
- 6. Output format
- 7. Uncertainty and escalation
- 8. Few-shot examples (optional)
  - On this page

A complete guide to writing sub agent prompts: structure, operating principles, role and personality statements, output formats, and escalation rules.

A well-structured prompt is the foundation of reliable agent behavior. This page covers the recommended sections for a sub agent prompt and how to write each one effectively.

Use the Agent Prompt for shared instructions

The Agent Prompt is inherited by all sub-agents in an agent and is often underutilized. Use it for instructions you don't want to repeat across every sub-agent: MCP tool usage guidelines, global constraints, output conventions, and other rules that apply universally. Reserve sub-agent prompts for role-specific behavior.

Structure your sub-agent prompt in this order:

The role and mission sets the sub agent's identity and paradigm in 2-4 sentences. It should:

Write in second person ("You are...", "Do..."). Avoid first-person commitments ("I will...") unless the agent is expected to do so.

Use scope and non-goals to prevent the agent from accidentally overreaching. Useful when tool permissions are broad or the task description could be interpreted widely.

Use a mix of direct requirements and suggestions:

Use a checklist to guide the agent's behavior. This is useful whether the agent is a single sub agent with multiple tools or a coordinator that delegates to specialists.

Make tool usage explicit — which tools to prefer, in what order, and what to avoid:

The output format is the most important section for multi-agent integration. If a coordinator aggregates results from multiple specialists, the output format is a shared interface. Define it precisely:

Define when the agent should ask for help vs proceed with assumptions:

Design AI agents that are focused, safe, and reliable. Learn the principles, patterns, and techniques for building high-quality agent systems.

Design multiagent workflows with coordinator sub agents that delegate to specialists, aggregate results and drive the overall process forward.

Tell us how this can be better.

**Examples:**

Example 1 (unknown):
```unknown
You are [role identity] who [what excellence looks like in practice].

You [concrete positive behavior].
You [concrete positive behavior].
You [concrete positive behavior].
```

Example 2 (unknown):
```unknown
You are a security-focused reviewer who identifies vulnerabilities
before they reach production.

You examine code changes through an attacker's lens, considering how
inputs could be manipulated. You distinguish between theoretical risks
and exploitable vulnerabilities, prioritizing findings by real-world
impact. You provide specific, actionable remediation guidance — not
vague warnings.
```

Example 3 (markdown):
```markdown
## Scope
- Triage incoming customer support tickets about billing and subscriptions
- Ask clarifying questions to gather missing account or invoice details
- Classify issue severity and route tickets to the correct support queue

## Non-goals
- Handling legal disputes, chargebacks, or fraud investigations
- Answering product roadmap or engineering implementation questions
- Creating new policies that are not documented in the support playbook
```

Example 4 (markdown):
```markdown
## Operating principles
- Clarify before proceeding: if instructions are ambiguous, surface
  what's unclear rather than filling gaps with assumptions
- Weigh sources appropriately: official docs and established patterns
  take precedence over examples or inferred conventions
- Model downstream effects: before making a change, consider what it
  could break and what constraints it might conflict with
- Match confidence to certainty: if multiple valid approaches exist,
  present them with tradeoffs rather than silently picking one
```

---

## Using Langfuse for LLM Observability - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/guides/observability/langfuse-usage

**Contents:**
- Using Langfuse for LLM Observability
- Quick Start
  - 1. Setup Langfuse Account
  - 2. Configure Langfuse
    - What This Configuration Does
- Dataset setup and execution
    - 1. Clone the Agents Repository
    - 2. Initialize Dataset with Sample Data
    - 3. Run Dataset Items to Generate Traces
- Running LLM Evaluations in Langfuse Dashboard

Complete guide to using Langfuse for LLM observability, tracing, and analytics in the Inkeep Agent Framework

Langfuse is an open-source LLM engineering platform that provides specialized observability for AI applications, including token usage tracking, model performance analytics, and detailed LLM interaction tracing.

First, create a Langfuse account and get your API keys:

To integrate Langfuse with your Inkeep Agent Framework instrumentation, you need to modify your instrumentation file to include the Langfuse span processor.

Replace the default setup with a custom NodeSDK configuration:

Set your environment variables:

Update your instrumentation file:

Make sure to install the required dependencies in your agents API directory: bash cd apps/agents-api pnpm add @opentelemetry/sdk-node @langfuse/otel

Use the Inkeep Agent Cookbook which provides ready-to-use scripts for creating and running Langfuse dataset evaluations programmatically.

Set up environment variables in a .env file:

Run the basic Langfuse example to initialize a dataset with sample user messages:

Run dataset items to generate traces that can be evaluated:

Langfuse provides a powerful web interface for running LLM evaluations without writing code. You can create datasets, set up evaluators, and run evaluations directly in the dashboard.

Before creating evaluators, you need to configure a default LLM connection for evaluations:

Setting up the LLM Connection:

You have two main options:

Langfuse provides a comprehensive catalog of pre-built evaluators

To use a managed evaluator:

Once you've selected a managed evaluator, you can edit it to target your dataset runs. This is particularly useful for evaluating agent performance against known test cases.

Click "+ Create Custom Evaluator" button

Fill in evaluator details:

Complete guide to using SigNoz for observability, monitoring, tracing in the Inkeep Agent Framework

CLI Observability with Langfuse

Track LLM operations during pull command with Langfuse

Tell us how this can be better.

**Examples:**

Example 1 (sass):
```sass
LANGFUSE_PUBLIC_KEY=pk-lf-xxxxxxxxxx
LANGFUSE_SECRET_KEY=sk-lf-xxxxxxxxxx
LANGFUSE_BASE_URL=https://us.cloud.langfuse.com
```

Example 2 (lua):
```lua
import {
  defaultSpanProcessors,
  defaultContextManager,
  defaultResource,
  defaultTextMapPropagator,
  defaultInstrumentations,
} from "@inkeep/agents-api/instrumentation";
import { NodeSDK } from "@opentelemetry/sdk-node";
import { LangfuseSpanProcessor } from "@langfuse/otel";

export const defaultSDK = new NodeSDK({
  resource: defaultResource,
  contextManager: defaultContextManager,
  textMapPropagator: defaultTextMapPropagator,
  spanProcessors: [...defaultSpanProcessors, new LangfuseSpanProcessor()],
  instrumentations: defaultInstrumentations,
});

defaultSDK.start();
```

Example 3 (powershell):
```powershell
git clone https://github.com/inkeep/agents.git
cd agents/agents-cookbook/evals/langfuse-dataset-example
```

Example 4 (sass):
```sass
# Langfuse configuration (required for both scripts)
LANGFUSE_PUBLIC_KEY=your_langfuse_public_key
LANGFUSE_SECRET_KEY=your_langfuse_secret_key
LANGFUSE_BASE_URL=https://cloud.langfuse.com

# Chat API configuration (for dataset runner)
INKEEP_AGENTS_RUN_API_KEY=your_api_key
INKEEP_AGENTS_RUN_API_URL=your_chat_api_base_url

# Execution context (for dataset runner)
INKEEP_TENANT_ID=your_tenant_id
INKEEP_PROJECT_ID=your_project_id
INKEEP_AGENT_ID=your_agent_id
```

---

## Publish drafts to your Zendesk Help Center - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/guides/agents/content-writer/publish-to-help-center

**Contents:**
- Publish drafts to your Zendesk Help Center
- Overview
- Prerequisites
- Connect the Zendesk MCP
- What lands
  - On this page

Connect your Zendesk Help Center so the Content Writer files customer-facing articles — as staff-only drafts your team reviews before they go live.

Connect your Zendesk Help Center and the Content Writer gains a place to write for customers: every customer-facing answer becomes a draft article, filed in the right section, waiting for a human to publish. A "how do I add a teammate?" resolution turns into a Help Center draft in about 30 seconds — no one writes it from scratch.

Connect your Zendesk workspace to the Zendesk MCP server in your project. The service account, API token, and required headers are covered in Content Writer enterprise setup → Zendesk integration.

Open the server's page and confirm Active Tools lists the four tools the Content Writer uses:

If Active Tools reads 0 tools, the connection isn't authenticated yet — finish the connector setup before going further.

On your Content Writer's canvas, connect the Zendesk MCP to the KB Article Agent — the sub agent that writes Help Center articles. (The other sub agents don't need Zendesk access.)

That's it — your Content Writer can now draft into your Help Center.

When a ticket is solved, the Content Writer reads the resolution, calls list_sections to find the section that best fits the topic, and writes a complete, publish-ready article in valid Help Center HTML. It files that as:

From there, review and publish.

Turn resolved support tickets and product changes into drafted documentation — a developer-docs PR or a customer Help Center article — with a human approving every change.

Point the Content Writer at a Notion database so drafts land as rows in your internal wiki — ready to review without leaving Notion.

Tell us how this can be better.

---

## Leverage Composio MCP Server Library - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/guides/mcp-servers/composio-mcp-servers

**Contents:**
- Leverage Composio MCP Server Library
- Overview
  - Step 1: Create a Composio Account
  - Step 2: Configure Your MCP Servers
  - Step 3: Retrieve Your API Key
  - Step 4: Add API Key to Environment
  - Step 5: Restart and Verify
  - On this page

Connect to Composio MCP servers for access to 10,000+ out-of-box integrations

Composio provides access to over 10,000 pre-built MCP servers for popular services and integrations.

Sign up for a Composio account at composio.dev

After creating a new organization and then a new project, navigate to the MCP configurations section and create configs for the MCP servers you want to use.

Copy your Composio API key from the Settings tab.

Add your Composio API key to your root .env file:

Restart your development servers by pressing Control + C and running pnpm dev again (pressing r will not work).

Open the Visual Builder and navigate to the MCP Servers tab. Click +New MCP Server, then select the Popular MCP Servers tab and search for "composio" to see your configured Composio MCP servers.

Connect to Native MCP servers provided by SaaS vendors

Generate an MCP server from an OpenAPI spec using Gram and connect it to your Inkeep agents.

Tell us how this can be better.

**Examples:**

Example 1 (sass):
```sass
COMPOSIO_API_KEY=your-composio-api-key
```

---

## Set up a CLI profile - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/guides/cli/setup-profile

**Contents:**
- Set up a CLI profile
- Prerequisites
- Step 1: Create a profile
- Step 2: Set the active profile
- Step 3: Log in
- Managing multiple profiles
- What's next
- Push to Remote
- Pull from Remote
  - On this page

Create a CLI profile and authenticate with remote Inkeep instance

Profile setup is only required when pushing or pulling to a remote deployment (e.g. Inkeep Enterprise or a self-hosted deployment). If you're pushing or pulling locally, you can skip this step.

A CLI profile tells the CLI where to connect and how to authenticate with a remote deployment. This tutorial walks you through creating a profile and logging in.

Profiles let you manage multiple environments (remote, local, staging) from the same CLI. Create a profile for remote Inkeep instance:

The CLI prompts you to configure the profile:

You can verify the profile was created by running inkeep profile list.

Set the profile you created as the active profile:

Confirm which profile is active:

Authenticate with your active profile:

Once authenticated, you'll see confirmation:

Your credentials are securely stored in your system keychain. You only need to log in once per profile.

You can create profiles for different environments and switch between them:

To authenticate a specific profile without switching:

To remove a profile you no longer need:

For a full list of profile commands, see the CLI Reference.

Push local agent configurations to remote Inkeep instance

Pull agent configurations from remote Inkeep instance to your local project

Learn how to use the Inkeep CLI for common workflows

Push your local agent configurations to remote Inkeep instance

Tell us how this can be better.

**Examples:**

Example 1 (elixir):
```elixir
npm install -g @inkeep/agents-cli
```

Example 2 (unknown):
```unknown
inkeep profile add <profile-name>
```

Example 3 (unknown):
```unknown
inkeep profile use <profile-name>
```

Example 4 (unknown):
```unknown
inkeep profile current
```

---

## Prompt Caching - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/guides/observability/prompt-caching

**Contents:**
- Prompt Caching
- How it works
- Cache states
- Observe cache behavior
  - Conversation trace timeline
  - Cost dashboard
- Control caching
  - Disable globally with an environment variable
  - Override per agent with providerOptions
- Scope and limitations

How Inkeep caches Anthropic prompt prefixes by default, how to observe cache behavior, and how to control it

Inkeep enables Anthropic prompt caching by default for the main agent generation call. Caching lets the provider reuse a previously sent prompt prefix (the tool definitions plus the system prompt) instead of reprocessing it on every turn, so repeated input tokens are billed at the provider's reduced cache-read rate. No configuration is required — caching is on out of the box, and its effect is visible on the conversation trace timeline and the cost dashboard.

Inkeep currently attaches caching only to the main agent generation call. Other call sites (status updates, distillation, artifact metadata) get whatever automatic caching the provider already offers. Savings depend on workload: prefixes that stay stable across turns within the cache window are reused, while per-turn unique content (such as retrieval payloads) is never cacheable.

Caching attaches at the model call based on how the agent routes to Anthropic:

Both modes use Anthropic's default 5-minute ephemeral cache. The first turn writes the prefix to the cache (a cache-creation cost), and subsequent turns within the window read it back at the reduced rate.

Caching only applies above the provider's minimum cacheable prefix size (1,024 tokens for Claude Sonnet 4.5/4.6; 4,096 tokens for Claude Haiku 4.5 and Opus 4.5+). Calls below that floor are simply not cached — eligibility is delegated to the provider, not enforced by Inkeep.

Every LLM generation span carries cache telemetry, from which Inkeep derives one of five cache states per call:

In the Manage UI, open a conversation's trace timeline. Each LLM call row shows a cache-state badge next to its per-call cost. The badge encodes state through an icon, a label, and a color variant (not color alone):

The cost dashboard includes a Cost by Cache Participation breakdown table alongside the existing Cost by Model, Agent, Provider, and Generation Type tables. It groups spend into cached, cache-write, and uncached buckets so you can see how much of your input cost benefited from caching. A Cache-read Tokens stat card summarizes cache-read volume across the selected time range.

Set INKEEP_PROMPT_CACHING_ENABLED to turn Inkeep-attached caching off across the deployment — useful for A/B testing caching versus no caching, or for self-hosters who want to opt out.

This variable is parsed as a boolean (Zod's stringbool). Caching is disabled by any case-insensitive falsy value: false, 0, no, off, n, or disabled. Truthy values (true, 1, yes, on, y, enabled) or leaving it unset keep caching enabled, and any other value is rejected at startup.

Inkeep attaches its caching default only when an agent has not set one itself: providerOptions.gateway.caching in gateway mode, or per-message providerOptions.anthropic.cacheControl on system messages in direct (Anthropic) mode. If an agent supplies its own non-null value, Inkeep preserves it instead of overriding it.

There is no clean per-agent off switch today, in either gateway or direct mode. In direct mode, setting cacheControl: null in an agent's model config does not disable caching: Inkeep attaches cacheControl to system messages, and a null value falls back to the default regardless. The gateway's caching option likewise has no per-agent off value. To disable Inkeep-attached caching, use the INKEEP_PROMPT_CACHING_ENABLED deployment kill switch. A productized per-agent caching control is planned for a future release.

CLI Observability with Langfuse

Track LLM operations during pull command with Langfuse

Learn how to connect your data sources to your agents through MCP servers

Tell us how this can be better.

**Examples:**

Example 1 (sass):
```sass
# Disable Inkeep-attached prompt caching for the whole deployment
INKEEP_PROMPT_CACHING_ENABLED=false
```

---

## Agent Engineering Best Practices - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/guides/agent-engineering

**Contents:**
- Agent Engineering Best Practices
- Who this is for
- Section overview
- Prompt Structure
- Multiagent Workflows
- Tuning Agents
- Troubleshooting
  - On this page

Design AI agents that are focused, safe, and reliable. Learn the principles, patterns, and techniques for building high-quality agent systems.

Agent engineering is the discipline of designing AI agents that reliably accomplish their goals. This section covers the full lifecycle of agent design — from writing effective prompts, to coordinating specialists, to troubleshooting and iterating on prompts.

These best practices apply to anyone designing AI agents with Inkeep — whether you're building a single-purpose sub agent or a multi-agent system.

Write high-quality sub agent prompts

Design coordinator sub agents that delegate to specialists

Balance cost, latency, and quality with model, reasoning, caching, and limit knobs

Diagnose common issues with agents and apply targeted fixes

Upgrade the packages that make up the Inkeep Agent Framework

A complete guide to writing sub agent prompts: structure, operating principles, role and personality statements, output formats, and escalation rules.

Tell us how this can be better.

---

## Connect to Native MCP Servers - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/guides/mcp-servers/native-mcp-servers

**Contents:**
- Connect to Native MCP Servers
  - MCPs with OAuth 2.1/PKCE support
  - Next steps
- The TypeScript SDK
- The Visual Builder
  - On this page

Connect to Native MCP servers provided by SaaS vendors

The fastest way to get started is by connecting to existing MCP servers provided directly by SaaS providers that offer them.

These servers often implement OAuth 2.1 with PKCE for secure authentication that allow for 1-click authentication without the need for API keys.

Here's an example list of popular service-maintained MCP Servers that support 1-click install via the OAuth 2.1/PKCE authentication flow.

To add them to your project:

When you register the server, an authentication pop-up will appear and allow you to sign in. Your credentials will automatically be saved to your Nango Store or Keychain credential store.

Once you have your server, you can register it in one of:

Add your MCP server as a tool for your agents in the TypeScript SDK

Add your MCP server as a tool for your agents in the Visual Builder

Learn about the recommended ways to use MCP servers with your agents

Connect to Composio MCP servers for access to 10,000+ out-of-box integrations

Tell us how this can be better.

---

## Build an AI SDR chatbot without code - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/guides/agents/ai-sdr-chatbot

**Contents:**
- Build an AI SDR chatbot without code
- Overview
- Prerequisites
- Create the sales-booking skill
- Create the scheduler data component
- Teach the agent when to book
- Render the scheduler and confirm the booking in your app
- Test the full flow
- Next steps
  - On this page

Step-by-step tutorial to build a public chatbot that answers product and pricing questions from your knowledge base, then books a meeting in-chat the moment a visitor shows sales intent.

In this tutorial, you'll build a public-facing AI SDR chatbot in the Inkeep Visual Builder. It does two jobs in a single conversation — no handoff:

After they book, the agent confirms the meeting in-chat and keeps answering questions. One agent meets the visitor at the speed they expect: instant answers, and a booked meeting while the intent is still warm.

The agent logic is configured entirely in the Visual Builder (no code). The in-chat booking experience requires a small React component (~60 lines) to render the Cal.com calendar.

You'll need Inkeep to run this. The agent is built in the Inkeep Visual Builder, and the in-chat experience — the chat thread, citations, and the booking calendar — is rendered by the Inkeep embedded chat UI. Both require an Inkeep account. Get Inkeep →

A skill is a reusable instruction block you attach to a sub agent. Putting the booking SOP in a skill — rather than the agent prompt — keeps the trigger list and the acknowledge-then-book flow in one place. When you later add a second intent path, you drop in another skill instead of rewriting the prompt.

Go to the Skills tab in the left sidebar, then click Create skill.

Swap the trigger examples for your own product's language. Keep the body shorter than your instinct says — the agent doesn't need ceremony, and an always-loaded skill sits in the prompt on every turn.

A data component lets the agent emit a structured UI block — here, the booking calendar — that your app renders. You'll define the schema now and wire up the React renderer later.

Go to the Data Components tab in the left sidebar, then select New data component.

Paste the schema below into the Props schema field, then click Save.

Your sub agent already answers from the knowledge base with citations. Now give it the one override that makes the booking flow fire: on a sales-intent turn, skip docs Q&A and surface the scheduler instead.

Open your agent canvas and click the sub agent to open its config.

Replace the Prompt with the version below.

Scroll to the Skills picker and add book-meeting-with-sales. Turn on Always loaded so the booking SOP is in every prompt without a load_skill round-trip.

Scroll to Data Components and add SalesScheduler.

Click Save Changes in the top right corner.

Replace [Your Product] with your product name. This prompt assumes you've already added the citation artifact from the Citations guide.

The agent emits a SalesScheduler component; your app renders it as a booking button that opens a Cal.com modal. After the visitor books, Cal.com fires a callback — you relay that back to the agent as a chat message so it can confirm the meeting. This is the interactive components pattern: a components map plus chatFunctionsRef to submit on the user's behalf.

Because SalesScheduler is rendered by the Inkeep widget — not your own React tree — it can't call chatFunctionsRef directly. So it dispatches a window-level inkeep-send-message event; your host component listens for that event and relays it via submitMessage.

First, register the component and listen for the booking relay in your chat settings:

Then build the scheduler component. It opens the Cal.com calendar in a modal and, on a successful booking, dispatches inkeep-send-message with the meeting details:

Replace YOUR_APP_ID with the App ID from your project's Apps settings (see App Credentials), and your-name/30min with your Cal.com event path.

The round-trip: the visitor books → Cal.com fires bookingSuccessfulV2 → your component dispatches inkeep-send-message → the listener calls submitMessage → the agent receives "I've just booked a meeting…" and confirms it, following step 3 of the skill.

Click Try it in the top right corner of the Visual Builder. Ask a product question your docs cover — e.g. "What does the product do?". The agent searches the knowledge base and answers with citations. No scheduler.

Now show sales intent — "How much does it cost?" or "Can I get a demo?". The agent responds with a short acknowledgement and emits the SalesScheduler component.

In your embedded app, pick a time and book. Confirm the agent replies with a booking confirmation and offers to keep answering questions.

When working correctly, one agent carries the visitor from "what is this?" to a booked meeting and back to Q&A — all in the same thread, no human handoff.

Add a second intent path — say, routing enterprise visitors to a different calendar or capturing a qualified lead — by dropping in another skill and a matching data component. The booking skill you built here is the template: trigger list, acknowledge-then-act SOP, one component to render. No prompt rewrite needed.

Build a logged-in, account-aware copilot that diagnoses live account, integration, and usage state and resolves issues in-product — without escalating to a human.

Step-by-step tutorial to build a fact finder agent using the TypeScript SDK with web search and citations.

Tell us how this can be better.

**Examples:**

Example 1 (elixir):
```elixir
Use when the visitor shows sales intent — pricing, quotes, demos, trials, talking to a rep, buying, or "set up a call / next steps". Renders the SalesScheduler so they can book without leaving chat. Not for general product Q&A.
```

Example 2 (markdown):
```markdown
# Book a meeting with sales

When the visitor signals they want to talk to a human, render an in-chat scheduler so they can book in seconds.

## Trigger on
- Pricing — "how much", "pricing", "quote", "cost"
- Sales / demo — "talk to sales", "see a demo", "get a trial"
- Buying / next steps — "purchasing", "licensing", "set up a call"

Just exploring how things work? Don't trigger — keep answering from the docs.

## What to do
1. Acknowledge in one plain-text sentence, customized to what they asked (pricing -> "Happy to connect you with our team — they can walk through pricing.").
2. Render the SalesScheduler component. No input needed.
3. After they book, confirm the date and time they mention, note the calendar invite is sent automatically, and offer to keep answering questions.

## Rules
- The acknowledgement and the scheduler must appear in the SAME response.
- Acknowledgement text comes BEFORE the component, never inside it.
- Never list time slots as text — the calendar handles selection.
- Never invent meeting times or invite details.
```

Example 3 (json):
```json
{
  "type": "object",
  "properties": {
    "calLink": {
      "type": "string",
      "description": "Cal.com booking path, e.g. \"your-name/30min\". If omitted, the component falls back to the placeholder you hardcode in the renderer — replace it with your real Cal.com path."
    },
    "title": {
      "type": "string",
      "description": "Title shown above the calendar"
    }
  }
}
```

Example 4 (yaml):
```yaml
You help prospective customers understand [Your Product] and connect with the sales team.

# Sales intent
When the visitor shows sales intent, follow the SOP in the "book-meeting-with-sales" skill. On a sales-intent turn:
- Do NOT search the knowledge base, answer from docs, or save citations — even if the docs could answer. Surface the booking flow instead.

# Everything else
For genuine product or how-it-works questions:
1. Search the knowledge base before answering.
2. Save every fact you reference as a `citation` artifact before using it.
3. Cite via saved artifacts — never paste raw URLs.
4. If the docs don't cover it, say so plainly. Don't invent facts.

# Rules
- Render at most ONE data component per response.
- Put any intro text in plain text BEFORE the component, never wrapped inside it.

Tone: Direct, neutral, first person on behalf of the company.
```

---

## Add citations to your customer assistant - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/guides/agents/customer-assistant/citations

**Contents:**
- Add citations to your customer assistant
- Overview
- Prerequisites
- Why citations are wired this way
  - Why an artifact, not a URL in the text
  - Why the artifact must be named citation
- Create the citation artifact
- Attach the citation artifact to your sub agent
- Update the prompt to cite consistently
- Test your agent

Auto-render inline source pills and a Sources list on every customer-assistant answer.

In this guide, you'll add citations to the customer assistant you built in Setup. Once wired up, every fact the assistant references gets saved as a structured citation artifact that the Inkeep widget auto-renders as inline source pills and a Sources list below the answer.

The easy thing for an AI to do is paste [Title](URL) into its response. That breaks down fast:

An artifact is a structured record the agent saves. It has a fixed schema (title, url, content, etc.), gets persisted in storage, and can be referenced by ID across the conversation. The widget knows how to find these and render them.

The Inkeep widget has a built-in contract: any artifact named exactly citation with url as a preview field gets auto-rendered — no frontend code required. The widget produces inline source pills with the response text and a Sources list beneath the answer.

If you name it something else (source, reference, link), the artifact still saves correctly, but the widget won't auto-render it. You'd need to write a custom React component to display it. For a customer assistant, you want the auto-render — name it citation.

In the Visual Builder, click Artifact Components in the left sidebar, then New Artifact Component.

Paste the JSON schema below into the Props schema field, then click Save.

Go to your agent canvas: Agents → Customer assistant.

Click the sub agent on the canvas to open its config in the right sidebar.

Scroll to the Artifact Components section and add the citation artifact you just created.

Click Save Changes in the top right corner.

Attaching the artifact tells the agent the artifact exists, but the agent still needs to be told when and how to use it. LLMs won't reliably save artifacts unless the prompt explicitly says so — leave it implicit and you'll get inconsistent or missing citations.

Replace your sub agent's prompt with the version below.

The phrase "BEFORE using it" matters. Without it, the agent will often write the answer first and skip saving the citation. The widget can only render what was saved as an artifact — so the order matters.

Click Save Changes in the top right corner.

Click Try it in the top right corner to open the chat interface.

Ask a product question your docs should be able to answer — for example, "How do I get started?" or "What are the main features?"

Step-by-step tutorial to build an AI assistant that answers your customers' questions, grounded in your knowledge base via Inkeep Unified Search.

Teach your assistant when to hand off to a human — and wire it up to your ticketing system so the support team gets the question with full conversation context already attached.

Tell us how this can be better.

**Examples:**

Example 1 (json):
```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string",
      "description": "URL of the source document",
      "inPreview": true
    },
    "title": {
      "type": "string",
      "description": "Title of the source document",
      "inPreview": true
    },
    "content": {
      "type": "array",
      "description": "Array of structured content blocks from documentation",
      "items": {
        "type": "object",
        "properties": {
          "text": { "type": "string", "description": "The text content with markdown formatting" },
          "type": { "type": "string", "description": "Type of content (text, image, etc.)" }
        }
      }
    },
    "context": {
      "type": "string",
      "description": "Context of the source document",
      "inPreview": true
    },
    "record_type": {
      "type": "string",
      "description": "Type of record (documentation)",
      "inPreview": true
    }
  },
  "required": ["url", "title", "content"]
}
```

Example 2 (yaml):
```yaml
You are a customer assistant for [Your Product]. Answer customer questions using the official documentation.

How to answer:
1. Always search the knowledge base first to look up relevant docs before answering.
2. Save every fact you reference as a `citation` artifact (`url`, `title`, `content`, `context`, `record_type`) BEFORE using it in your answer.
3. Cite via saved artifact references — never paste raw URLs or `[Title](URL)` lines in the response text.
4. If the docs don't cover it, say so plainly. Don't invent facts.

Tone: Direct, neutral, no fluff. Speak in the first person on behalf of the company.
```

---

## Build a confidence-gated auto-reply agent for Zendesk - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/guides/agents/ticket-workflows/auto-reply

**Contents:**
- Build a confidence-gated auto-reply agent for Zendesk
- Overview
- Prerequisites
- Expose the Inkeep QA confidence tool
- Create the Autoreply agent
- Connect the MCPs
- Create the webhook trigger
- Wire Zendesk to fire the trigger
- Test the agent
  - On this page

Reply publicly to the customer when the knowledge base is sure of the answer — and stay quiet when it isn't.

In this tutorial, you'll build an Autoreply agent in the Inkeep Visual Builder. When a new ticket lands in Zendesk, the agent will:

The contract is: high confidence → customer gets replied to; anything less → a human takes over. You get deflection on the easy stuff and human review on the hard stuff, automatically.

Inkeep's QA API answers a question against your knowledge base, and it can call custom tools you define as part of answering. You'll use that capability to grade each answer with a confidence level and return it alongside the answer and its citations. That confidence level is what makes safe auto-reply possible — it's how the agent knows whether the KB is sure enough about the answer to send it to a customer.

The five confidence levels:

To make this available to your agent, expose it as a tool called ask_with_confidence(question) → { answer, confidence, citations }. The cleanest way is a thin Custom MCP that wraps the Inkeep QA API — see Build Custom MCP Servers for the Next.js template and the inkeep add --mcp CLI flow. Deploy it and grab the public URL.

confidence isn't a built-in field — you define it. Inkeep's QA API supports custom tool calls: you register a tool the answering model invokes to grade how well the KB covers the question, and your MCP surfaces that grade as confidence. The five levels above are the example taxonomy this tutorial uses — adjust them to fit your bar for sending a public reply.

Once it's deployed, register it as a Custom Server MCP in the Visual Builder:

Click MCP Servers in the left sidebar, then New MCP Server → Custom Server.

In the Visual Builder, go to the Agents tab in the left sidebar and click Create agent.

Click the Default Sub Agent on the canvas to configure it. Fill in:

Tool names to verify before you save:

On the agent canvas, drag and drop an MCP block from the top left toolbar. Select Inkeep QA (with confidence) and connect it to the Autoreply Decider sub agent.

Click the MCP block and restrict Active Tools to only ask_with_confidence (it's likely the only tool exposed anyway).

Drag a second MCP block onto the canvas. Select your Zendesk MCP and connect it to the Autoreply Decider sub agent.

Click the Zendesk MCP block and restrict Active Tools to only the two tools this agent uses: the internal-comment tool and the public-comment tool. Leave everything else off.

Click Save Changes in the top right corner.

The trigger is the door Zendesk knocks on to wake the agent up.

Go to Triggers in the left sidebar and click New Webhook Trigger.

Select the Autoreply Decider agent you just built as the agent this trigger will invoke, then click Continue.

Click Create Trigger. Copy the webhook URL that appears — you'll need it in the next section.

Now set up Zendesk so every new ticket POSTs to the trigger URL you just copied.

See Trigger Inkeep agents from Zendesk tickets — paste your trigger URL into the Zendesk webhook's Endpoint URL. Come back here when you're done.

Send a test ticket your KB should be confident about — pick a common FAQ your docs cover (e.g., "How do I get started with [your product]?"). Within ~15 seconds, both a public reply and an internal audit note should appear on the ticket.

Send a second test ticket your KB shouldn't be confident about (e.g., "What's the best wifi router for my apartment?"). Within ~15 seconds, only an internal audit note should appear — marked Auto-reply blocked. The customer sees nothing. That's the gate doing its job.

Draft a KB-grounded reply as a private comment on every new Zendesk ticket — the human rep reviews and sends.

Turn resolved support tickets and product changes into drafted documentation — a developer-docs PR or a customer Help Center article — with a human approving every change.

Tell us how this can be better.

**Examples:**

Example 1 (yaml):
```yaml
# Your job

For every incoming Zendesk ticket, decide whether it's safe to answer the customer publicly based on KB confidence:

- ALWAYS post an internal audit note (rep-only) with the answer + confidence
- ONLY post a public reply when confidence is `very_confident`

# Workflow

1. Read the customer's question from the trigger message
2. Call **ask_with_confidence** once with the question. It returns `{ answer, confidence, citations }`
3. Post the internal audit note (format below)
4. If `confidence === "very_confident"`, also post a public reply (format below)

# Internal audit note (always)

When `very_confident`:

🤖 INKEEP AUTO-REPLY — Confidence: very_confident ✅
A public reply has been posted to the customer.

Answer:
<answer verbatim from the tool>

Sources:
- <citation 1>
- <citation 2>

Otherwise (any other confidence value):

🤖 INKEEP AUTO-REPLY — Confidence: <value> ⛔
Auto-reply blocked. A human should handle this.

Closest answer the KB had:
<answer verbatim>

# Public reply (only when very_confident)

<answer verbatim>

Sources:
- <citation 1>
- <citation 2>

# Rules

- Call ask_with_confidence exactly once per ticket
- Use the answer verbatim in both comments — don't paraphrase
- Only post a public reply when confidence is exactly `very_confident` — never any other value
- If ask_with_confidence errors, do nothing — don't post any comments
```

---

## Run it automatically on solved tickets - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/guides/agents/content-writer/run-it-automatically

**Contents:**
- Run it automatically on solved tickets
- Overview
- Prerequisites
- Wire the triggers
- Other ways to feed it
- Where it reports
- Next steps
  - On this page

Wire your Content Writer to solved tickets and merged PRs so every resolution becomes a draft — no one has to remember to ask.

The Content Writer earns its keep when nobody has to trigger it. Once it's wired to your support tool and repo, every solved ticket and merged PR becomes a draft automatically — the moment someone resolves something new, it's already being written up.

The trigger wiring touches your Zendesk and GitHub accounts, so it's set up once in the enterprise setup guide:

Once those are in place, resolving a tagged ticket or merging a PR drafts documentation on its own.

The inkeep_content_writer tag is the gate: only solved tickets carrying it run the Content Writer. That's how you choose exactly which resolutions become drafts — add the tag as part of resolving, or have an upstream rule add it.

As it works, the Content Writer posts progress and the final draft link to Slack. Connect the Slack work app to your project, then invite it to the channel your docs team watches — type /invite @Inkeep in that channel — and that's where it reports.

One agent, two destinations. Tag a ticket and your Content Writer drafts a docs PR or a Help Center article — exactly where you want it.

Every draft waits for a human. Review it where it already lives — a GitHub PR or a Zendesk draft — then publish, automatically if you want.

Tell us how this can be better.

---

## MCP Server Options - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/guides/mcp-servers/overview

**Contents:**
- MCP Server Options
- Choose your approach
- Get started
- Native MCP Servers
- Composio MCP Servers
- Custom MCP Servers
- Gram
  - On this page

Learn about the recommended ways to use MCP servers with your agents

MCP servers enable your agents to fetch real-time information and take action on your systems, services, and applications.

Select the option that best fits your needs:

Connect to pre-built servers from providers like Atlassian, Linear, Notion, and more. No building required.

Access thousands of out-of-box MCP servers through Composio's platform.

Build your own custom MCP servers using Inkeep templates or Vercel's Next.js template.

Convert OpenAPI specs into MCP servers using Gram by Speakeasy.

Step-by-step tutorial to build a fact finder agent using the TypeScript SDK with web search and citations.

Connect to Native MCP servers provided by SaaS vendors

Tell us how this can be better.

---

## Draft into a Notion database - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/guides/agents/content-writer/draft-into-notion

**Contents:**
- Draft into a Notion database
- Overview
- Prerequisites
- Connect Notion
- Create the Drafts database
  - On this page

Point the Content Writer at a Notion database so drafts land as rows in your internal wiki — ready to review without leaving Notion.

If your team lives in Notion, the Content Writer can draft there. Each draft becomes a new row in a Notion database — title, summary, source, and a link back to the ticket — so your writers triage and edit without leaving the tool they already use.

The Notion MCP signs in with a single click — no custom OAuth app to register.

Register the Notion MCP server in your project (server URL https://mcp.notion.com/mcp).

Open the server's page and click Login. Authorize Inkeep in the Notion popup and choose the workspace to share.

Back on the server page, confirm Active Tools is greater than zero — the Notion tools are now available.

On the canvas, connect the Notion MCP to the Page Drafter — the sub agent that writes Notion drafts.

The agent files each draft as a row, so give it a database with the columns it fills in.

In Notion, create a database (e.g. Content Writer Drafts) and share it with your Inkeep connection: open the database → ••• → Connections → add the Inkeep connector.

Add these properties:

Copy the database's link — in Notion, open the database and click ••• → Copy link — and send it to your Inkeep account team. They point the Page Drafter at that database, so new drafts file into it.

Now every draft lands as a row — full content in the page body, metadata in the columns — ready to review and publish.

Connect your Zendesk Help Center so the Content Writer files customer-facing articles — as staff-only drafts your team reviews before they go live.

One agent, two destinations. Tag a ticket and your Content Writer drafts a docs PR or a Help Center article — exactly where you want it.

Tell us how this can be better.

---

## Build Custom MCP Servers - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/guides/mcp-servers/custom-mcp-servers

**Contents:**
- Build Custom MCP Servers
- When to Build Custom MCP Servers
- Getting Started
    - Creating from a template
    - Using Vercel's Template
    - Deploying to Vercel
  - Next steps
- The TypeScript SDK
- The Visual Builder
  - On this page

Build your own custom MCP servers

Build custom MCP servers when:

If pre-built servers meet your needs, consider Native MCP servers, Composio's platform, or Gram instead.

The Quick Start workspace includes a Next.js app in the apps/mcp/app/ directory that you can use to expose your MCP servers. Each MCP server you create will be exposed on a separate route on this app.

You can add a custom MCP server template from our template library for common use cases using the CLI.

This will automatically add a custom MCP server template to your Quick Start workspace. After customizing and deploying it, you can register it.

If you want to create a custom MCP server, you can use Vercel's Next.js MCP template as a starting point:

From the workspace root, add the Vercel template:

Rename the template to your desired server name:

Update the basePath inside apps/mcp/app/[server-name]/mcp/route.ts to /[server-name]:

Customize the template with your desired tools.

You can access the server at http://localhost:3006/[server-name]/mcp. Register it with your agents using the mcpTool function.

Or you register the MCP server as a tool in the Visual Builder (see here).

Follow the instructions in Deploy to Vercel. If you have already deployed to Vercel, you can simply update the deployment by pushing to the same repository.

Enable Fluid compute and set maxDuration to 800 in apps/mcp/app/[server-name]/[transport]/route.ts if you're on a Pro or Enterprise plan and have long-running operations.

Once you have your server, you can register it in one of:

Add your MCP server as a tool for your agents in the TypeScript SDK

Add your MCP server as a tool for your agents in the Visual Builder

Generate an MCP server from an OpenAPI spec using Gram and connect it to your Inkeep agents.

Learn how to use the Inkeep CLI for common workflows

Tell us how this can be better.

**Examples:**

Example 1 (unknown):
```unknown
inkeep add --mcp [server-name]
```

Example 2 (unknown):
```unknown
inkeep add --mcp vercel-template
```

Example 3 (unknown):
```unknown
mv apps/mcp/app/vercel-template apps/mcp/app/[server-name]
```

Example 4 (json):
```json
{
  basePath: "/[server-name]",
  verboseLogs: true,
  maxDuration: 60,
  disableSse: true,
}
```

---

## CLI Tutorials - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/guides/cli/overview

**Contents:**
- CLI Tutorials
- What you'll learn
- Set Up a CLI Profile
- Push to Remote
- Pull from Remote
- Prerequisites
- Quick reference
  - On this page

Learn how to use the Inkeep CLI for common workflows

The Inkeep CLI is your primary tool for managing your Inkeep agents and MCP servers. These guides walk you through common CLI workflows.

Create a profile and authenticate with a remote deployment (only needed for remote push/pull)

Push your local agent configurations to remote Inkeep instance

Pull agent configurations from remote Inkeep instance to your local project

Before starting these tutorials, ensure you have:

For a complete list of CLI commands and options, see the CLI Reference.

Build your own custom MCP servers

Create a CLI profile and authenticate with remote Inkeep instance

Tell us how this can be better.

**Examples:**

Example 1 (elixir):
```elixir
npm install -g @inkeep/agents-cli
```

---

## Pull from remote Inkeep instance - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/guides/cli/pull-from-remote

**Contents:**
- Pull from remote Inkeep instance
- Prerequisites
- Step 1: Choose your pull target
  - Option A: Pull into an existing project
  - Option B: Pull a new project from the remote instance
- Step 2: Run the pull command
  - For an existing project
  - For a new project
- Step 3: Resolve merge conflicts
  - Interactive conflict resolution

Pull agent configurations from a remote Inkeep instance, resolve merge conflicts interactively, and sync your local TypeScript project

This tutorial walks you through pulling agent configurations from a remote Inkeep instance to your local project. Use pull to bootstrap a local project from the Visual Builder, sync remote changes made by teammates, or set up a new development environment.

You have two options depending on whether the project already exists locally.

If you already have a local project directory with an index.ts file, navigate into it:

If you don't have the project locally yet, you'll specify the project ID in the next step. The CLI creates a new directory for it automatically.

Run inkeep pull from the directory that contains your inkeep.config.ts, or from any subdirectory below it.

From inside your project directory, run:

The pull command uses smart comparison to detect what changed. If nothing has changed remotely, it tells you the project is already up to date.

Specify the project ID:

This creates a ./my-project-id/ directory with the full TypeScript project structure:

When your local state has diverged from the remote instance, inkeep pull detects conflicts and launches an interactive terminal UI so that you can resolve them.

The resolver presents conflicts one at a time. Each conflict shows the entity type, entity ID, and what each side did (added, modified, or deleted).

You can set a row level default to either ours or theirs. Ours refers to your local state, and theirs refers to the remote state. This default will be applied to all columns on the entity.

When both sides modified the same entity, you can resolve at a per-column granularity. Set a row default, then optionally override individual columns using the arrow keys.

After resolving all conflicts, a summary screen shows your choices:

Press Enter to apply the resolutions and continue the pull, p to go back and adjust, or Esc/q to cancel.

To skip the interactive UI and resolve all conflicts automatically, use the --conflict-strategy flag:

After pulling (and resolving any conflicts), the CLI runs a two-stage validation:

If validation passes, you'll see:

Review the generated files to confirm they look correct. If validation fails, the CLI reports specific differences so you can investigate.

Once pulled, your project is a standard TypeScript project using @inkeep/agents-sdk builder APIs. You can:

To pull every project from your tenant at once:

Each project is created as a subdirectory in the current directory. The CLI handles existing and new projects differently:

To regenerate all files from scratch, ignoring local changes:

This bypasses the smart comparison and rebuilds every TypeScript file from the remote configuration. Use this when your local files are in a broken state or you want a clean slate that matches the remote instance exactly.

The --introspect flag overwrites all local files. Commit or back up any local changes you want to keep before using it.

Generate environment-specific credential files by passing the --env flag:

This generates credential configurations in environments/production.env.ts instead of the default environments/development.env.ts.

To inspect the raw project data without generating TypeScript files:

This outputs the project configuration as JSON, which is useful for debugging or piping into other tools.

Push local changes back to remote instance

Full reference for all CLI commands and options

Push your local agent configurations to remote Inkeep instance

Complete guide to using SigNoz for observability, monitoring, tracing in the Inkeep Agent Framework

Tell us how this can be better.

**Examples:**

Example 1 (elixir):
```elixir
npm install -g @inkeep/agents-cli
```

Example 2 (sass):
```sass
export ANTHROPIC_API_KEY=your-key    # Recommended
export OPENAI_API_KEY=your-key       # Alternative
export GOOGLE_GENERATIVE_AI_API_KEY=your-key  # Alternative
```

Example 3 (unknown):
```unknown
cd my-project
```

Example 4 (unknown):
```unknown
inkeep pull
```

---

## Designing Multiagent Workflows - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/guides/agent-engineering/multiagent-workflows

**Contents:**
- Designing Multiagent Workflows
- Single vs multi-agent
- Sequential vs parallel delegation
- Transfers vs delegation relationships
- Designing the coordinator prompt
  - On this page

Design multiagent workflows with coordinator sub agents that delegate to specialists, aggregate results and drive the overall process forward.

A multi-agent workflow uses a coordinator sub agent that delegates subtasks to specialized sub agents, aggregates their results, and drives the overall process forward.

The first design decision is whether your Agent needs one sub agent or several.

A single sub agent is usually enough when:

A multi-agent workflow is worth it when:

When your coordinator delegates work, you usually choose between two patterns: sequential (one step at a time) or parallel (multiple steps at once). Pick based on whether tasks depend on each other.

Use sequential delegation when:

Use parallel delegation when:

Define the transfer and delegation relationships between the coordinator and the specialized sub agents. See Sub Agent Relationships section for more details.

The coordinator sub agent is the agent which will delegate tasks to the specialized sub agents. Its prompt should describe the overall workflow: what phases to run, when to delegate, and how to aggregate results. See section on workflow checklist for more details.

A complete guide to writing sub agent prompts: structure, operating principles, role and personality statements, output formats, and escalation rules.

The knobs Inkeep gives you to balance cost, latency, quality, and reliability — model choice per slot, reasoning effort, prompt caching, output contracts, description hygiene, and execution limits.

Tell us how this can be better.

---

## Troubleshooting - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/guides/agent-engineering/troubleshooting

**Contents:**
- Troubleshooting
- Quick symptom picker
- Copy-paste guardrails by category
- Common issues and fixes
  - Ambiguity and assumptions
  - Evidence and source quality
  - Decision boundaries and risk
  - Output clarity and structure
  - Deterministic operations
- Adding fixes to your prompt

Fix common issues with sub agents.

If your sub agent gives weak or inconsistent results, you usually do not need a full prompt rewrite. Start by matching symptoms, apply one targeted prompt fix, and testing again.

Use these snippets as starting points.

You can add these guardrails in three ways. If you are new to prompt writing, start with Option A.

Use operating principles for defaults, then add a short "watch-outs" block near the end of the prompt.

The knobs Inkeep gives you to balance cost, latency, quality, and reliability — model choice per slot, reasoning effort, prompt caching, output contracts, description hygiene, and execution limits.

Learn how to manage projects in the Inkeep Agent Framework

Tell us how this can be better.

**Examples:**

Example 1 (markdown):
```markdown
## Prompt pitfalls to avoid

- If requirements are unclear on a high-impact decision, ask before proceeding.
- When sources conflict, acknowledge the conflict and separate evidence from inference.
- Lead with key findings and avoid repeated wording.
```

Example 2 (markdown):
```markdown
## Operating principles

- Clarify before action on high-impact ambiguity.
- Weigh evidence by source authority and relevance.
- Match confidence to certainty and provide options when needed.
```

---

## Push to remote Inkeep instance - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/guides/cli/push-to-remote

**Contents:**
- Push to remote Inkeep instance
- Prerequisites
- Step 1: Navigate to your project
- Step 2: Push to remote Inkeep instance
  - Handling conflicts
- Step 3: Verify the push
- Push all projects at once
- What's next
- Pull from Remote
- CLI Reference

Push your local agent configurations to remote Inkeep instance

This tutorial walks you through pushing agent configurations to a remote Inkeep instance.

Navigate to your project directory. A project directory contains an index.ts file that exports a project definition:

Run inkeep push from the directory that contains your inkeep.config.ts, or from any subdirectory below it.

Run the push command:

If the remote instance has changed since your last pull, the CLI detects conflicts and aborts the push.

To resolve conflicts, run inkeep pull first — the interactive merge UI walks you through each conflict. Then push again.

To skip conflict detection and overwrite the remote state:

After a successful push, the CLI prints a deployment summary with resource counts. You can also verify by opening the Visual Builder to see your updated configurations.

If you have multiple projects in a workspace, push them all:

Pull agent configurations from remote Inkeep instance to your local project

Full reference for all CLI commands and options

Create a CLI profile and authenticate with remote Inkeep instance

Pull agent configurations from a remote Inkeep instance, resolve merge conflicts interactively, and sync your local TypeScript project

Tell us how this can be better.

**Examples:**

Example 1 (elixir):
```elixir
npm install -g @inkeep/agents-cli
```

Example 2 (unknown):
```unknown
cd my-project
```

Example 3 (unknown):
```unknown
inkeep push
```

Example 4 (unknown):
```unknown
inkeep push --force
```

---

## CLI Observability with Langfuse - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/guides/observability/cli-observability

**Contents:**
- CLI Observability with Langfuse
- Overview
- Setup
  - 1. Create a Langfuse Account
  - 2. Get API Keys
  - 3. Configure Environment Variables
  - 4. Run Pull Command
- Viewing Traces
  - In Langfuse Dashboard
  - Trace Metadata

Track LLM operations during pull command with Langfuse

The Inkeep CLI includes built-in observability for tracking LLM operations during the pull command. This allows you to monitor costs, latency, and quality of AI-generated code across different LLM providers.

When you run inkeep pull, the CLI uses LLMs to generate TypeScript files for your agents, tools, and components. With Langfuse integration enabled, you can:

Sign up for a free account at cloud.langfuse.com (EU region) or us.cloud.langfuse.com (US region).

From your Langfuse dashboard:

Add these variables to your .env file in your project root:

Now when you run inkeep pull, all LLM operations will be traced to Langfuse:

Each trace includes rich metadata:

Compare costs across different LLM providers:

Find slow generation steps:

Monitor placeholder optimization impact:

Check if Langfuse is enabled:

Verify API keys are set:

If traces appear but lack metadata:

For complete control over your data, you can self-host Langfuse:

See Langfuse self-hosting docs for details.

Complete guide to using Langfuse for LLM observability, tracing, and analytics in the Inkeep Agent Framework

How Inkeep caches Anthropic prompt prefixes by default, how to observe cache behavior, and how to control it

Tell us how this can be better.

**Examples:**

Example 1 (sass):
```sass
# Enable Langfuse tracing
LANGFUSE_ENABLED=true

# Your Langfuse credentials
LANGFUSE_SECRET_KEY=sk-lf-your-secret-key-here
LANGFUSE_PUBLIC_KEY=pk-lf-your-public-key-here

# Langfuse API URL (defaults to EU cloud)
LANGFUSE_BASEURL=https://cloud.langfuse.com  # or https://us.cloud.langfuse.com for US

# Your LLM provider API keys (at least one required)
ANTHROPIC_API_KEY=your-anthropic-key
OPENAI_API_KEY=your-openai-key
GOOGLE_GENERATIVE_AI_API_KEY=your-google-key
```

Example 2 (unknown):
```unknown
inkeep pull --project my-agent-project
```

Example 3 (yaml):
```yaml
Service: inkeep-agents-cli
├── generate-agent-file
│   ├── Model: claude-sonnet-4-5
│   ├── Tokens: 12,543 input / 3,421 output
│   ├── Duration: 8.3s
│   └── Metadata:
│       ├── fileType: agent
│       ├── placeholderCount: 12
│       └── promptSize: 25,891 chars
```

Example 4 (bash):
```bash
# Should output: true
echo $LANGFUSE_ENABLED
```

---

## Add human escalation to your customer assistant - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/guides/agents/customer-assistant/escalation

**Contents:**
- Add human escalation to your customer assistant
- Overview
- Prerequisites
- Why escalation works this way
  - Why intent-driven is the primary path
- What your ticketing MCP needs to expose
- Attach your ticketing MCP to the agent
- Update the prompt to escalate with intent
- Test the intent flow
- Add the always-on escalation button

Teach your assistant when to hand off to a human — and wire it up to your ticketing system so the support team gets the question with full conversation context already attached.

Add human escalation to the customer assistant you built in Setup. The agent recognizes when it can't help and creates a support ticket with the full conversation as context. A safety-net button at the end lets customers reach a human at any time.

A static "Contact support" form makes the customer leave the chat and re-explain their issue from scratch. The agent already knows the question, what it tried, and where it got stuck — so it can create the ticket with all that context already attached. The support rep opens the ticket and sees the full story.

Throughout this guide, we'll assume your ticketing MCP exposes a tool with this shape:

Tool name: create_support_ticket

If your real MCP has different field names, adjust the prompt and tool call accordingly. The pattern is the same.

Make sure your ticketing MCP is registered in MCP Servers with valid credentials (same flow as Inkeep Unified Search in Setup).

Go to your agent canvas: Agents → Customer assistant.

Drag and drop an MCP block from the top left toolbar onto the canvas. Select your ticketing MCP and connect it to your sub agent.

Click Save Changes in the top right corner.

The agent now has the ability to create tickets, but it needs to be told when to escalate and what to put in the ticket. Without explicit instructions, the agent will either escalate too eagerly or not at all.

Add these sections to your existing sub agent prompt:

The bullet about the user repeating the same question after you've already answered matters. Without it, the agent keeps re-phrasing the same answer instead of recognizing the loop and escalating.

Click Save Changes in the top right corner.

Click Try it in the top right corner to open the chat interface.

Try each escalation trigger to confirm the agent handles them:

In each case, the agent should ask for your email (if not present), then call create_support_ticket, then confirm with the follow-up message.

The intent flow handles most cases, but the customer should always be able to reach a human in one click. The Inkeep widget supports custom triggers — you can add a button anywhere in your UI that submits a pre-defined message to the agent.

The pattern, in pseudo-code:

When the button is clicked, the agent receives "I need to talk to a human" — which is one of the explicit asks in the prompt — and runs the same escalation flow. No separate ticketing path needed.

The exact API depends on which Inkeep widget you're using (Embedded Chat, Chat Button, Side Bar Chat). See the Chat Components Overview for the full reference.

Auto-render inline source pills and a Sources list on every customer-assistant answer.

Auto-tag every incoming Zendesk ticket with the team that owns the problem area.

Tell us how this can be better.

**Examples:**

Example 1 (json):
```json
{
  "subject": "Short, 1-sentence issue summary",
  "description": "Full conversation context: what the customer asked, what the agent tried, what's still blocking. Quoted user messages where useful.",
  "customer_email": "where the support team should follow up"
}
```

Example 2 (json):
```json
{
  "ticket_id": "TCK-12345",
  "status": "new",
  "requester_email": "customer@example.com"
}
```

Example 3 (sql):
```sql
When to escalate (call `create_support_ticket`):
- The user explicitly asks for a human: "talk to a human", "speak to support", "I need help"
- You searched the knowledge base and found nothing relevant
- The user repeats the same question after you've already answered
- The user expresses frustration or sounds stuck

How to escalate:
1. If you don't have the user's email (no `x-user-email` header), ask once:
   "I'll get this to our support team — what email should they follow up on?"
   Wait for the user's reply before continuing.
2. Once you have the email, call `create_support_ticket` with:
   - `subject`: 1-sentence summary
   - `description`: full conversation context. Quote the user's question; note what you searched, what you found, what's still blocking.
   - `customer_email`: the email you collected (or from `x-user-email`)
3. After the tool returns, confirm:
   "I've opened a support ticket — our team will follow up shortly."
```

Example 4 (jsx):
```jsx
// Inside your chat component
const chatRef = useRef<AIChatFunctions | null>(null);

<>
  <InkeepEmbeddedChat
    aiChatSettings={{
      baseUrl: "...",
      appId: "...",
      chatFunctionsRef: chatRef,
    }}
  />
  <button onClick={() => chatRef.current?.submitMessage("I need to talk to a human")}>
    Talk to support
  </button>
</>
```

---

## Send each draft to the right place - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/guides/agents/content-writer/route-drafts-to-the-right-surface

**Contents:**
- Send each draft to the right place
- Overview
- Prerequisites
- Route with a tag
- Route by content
  - On this page

One agent, two destinations. Tag a ticket and your Content Writer drafts a docs PR or a Help Center article — exactly where you want it.

The same resolved ticket can belong in two very different places. A bug fix in the CLI belongs in your developer docs. A "how do I invite a teammate?" belongs in your Help Center. Your Content Writer drafts to both — and you decide which one each draft lands in.

This page is about routing — choosing which surface each draft goes to.

The fastest, most predictable control is a tag on the ticket. Tag it, and the draft goes exactly where you said — an explicit tag always wins.

Try it: resolve a ticket about inviting a teammate, add the kb-writer tag, and mark it Solved. Within about 30 seconds a draft Help Center article appears, written from the resolution — and the agent drops the link in your team's Slack channel.

These tag names aren't magic — the Router Agent is simply instructed to honor them, so they're yours to rename or extend in its instructions.

Leave a ticket untagged and your Content Writer's Router Agent decides, from what the resolution is actually about:

That default is good out of the box. To bend it to your product, open the Router Agent and add your own rules to its routing instructions — plain English, no code:

Now "my invoice shows the wrong tax" routes to your Help Center even though no one tagged it — because you taught the agent what your customers ask about.

Drafts land on the destinations you've connected — set those up in Publish to your Help Center or Draft into Notion. Then review and publish what your routing produces.

Point the Content Writer at a Notion database so drafts land as rows in your internal wiki — ready to review without leaving Notion.

Wire your Content Writer to solved tickets and merged PRs so every resolution becomes a draft — no one has to remember to ask.

Tell us how this can be better.

**Examples:**

Example 1 (markdown):
```markdown
- Anything about billing, invoices, or refunds → Help Center article
- Anything that names a CLI command or an SDK method → docs PR
- When a ticket fits both, prefer the Help Center (a customer asked it)
```

---

## Review, approve, and publish - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/guides/agents/content-writer/review-and-publish

**Contents:**
- Review, approve, and publish
- Overview
- Review where the draft already lives
- Publish on approval
- Prove it's working
- Next steps
  - On this page

Every draft waits for a human. Review it where it already lives — a GitHub PR or a Zendesk draft — then publish, automatically if you want.

Nothing the Content Writer makes goes live on its own. A code change becomes an open pull request; a customer answer becomes an unpublished draft. Both wait for you. The agent does the audit and the first draft; your team does the judgment — and that approval step is the whole point.

You don't learn a new tool. Drafts show up where your team already reviews work, linked from Slack:

Once you trust a surface, drop the last manual step:

Start with publish-on-click, and automate only the surfaces you've watched long enough to trust.

Track three numbers to show the program's impact to leadership:

You compile these from where the drafts live — published vs. rejected articles in Zendesk, merged vs. closed PRs in GitHub, draft statuses in Notion — rather than from a single built-in dashboard.

Wire your Content Writer to solved tickets and merged PRs so every resolution becomes a draft — no one has to remember to ask.

Deploy an AI copilot into your Zendesk ticket sidebar that grounds its drafts in your team's internal context — prior resolved threads the customer-facing bot never saw — so agents get answers, sources, and next steps without leaving the ticket.

Tell us how this can be better.

---
