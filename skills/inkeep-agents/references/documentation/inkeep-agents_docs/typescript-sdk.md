# Inkeep-Agents_Docs - Typescript-Sdk

**Pages:** 14

---

## Workspace Configuration - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/typescript-sdk/workspace-configuration

**Contents:**
- Workspace Configuration
- Overview
- Configuration hierarchy
  - 1. CLI Flags
  - 2. Environment Variables
  - 3. Config File Values
  - 4. Built-in Defaults
- Working with multiple configurations
  - Dynamic configuration
  - Multiple configuration files

Learn how to configure your workspace

The inkeep.config.ts file at the workspace root defines settings for all projects in this workspace. See Project Management for where this file should be placed.

http://localhost:3002

http://localhost:3000

Output directory for generated files

One can override the settings in inkeep.config.ts by setting the following settings in this order (highest to lowest priority):

Command-line flags override all other settings:

Environment variables override config file values:

Supported Environment Variables:

Values explicitly set in your inkeep.config.ts:

Default values used when not specified elsewhere:

You can use environment-based logic in your workspace config:

For workspaces requiring different configurations:

Learn how to configure and use external agents using the A2A protocol

Complete reference for the Inkeep CLI commands

Tell us how this can be better.

**Examples:**

Example 1 (sql):
```sql
import { defineConfig } from "@inkeep/agents-cli/config";
import "dotenv/config";

export default defineConfig({
  tenantId: 'my-company',
  agentsApi: {
    url: 'http://localhost:3002',
    apiKey: process.env.API_KEY, // Optional
  },
  outputDirectory: "./output",
});
```

Example 2 (markdown):
```markdown
# Override API URL
inkeep push --agents-api-url https://api.production.com

# Override config file location
inkeep pull --config /path/to/custom.config.ts
```

Example 3 (sass):
```sass
# Set via environment
export INKEEP_TENANT_ID=staging-tenant
export INKEEP_AGENTS_API_URL=https://api.staging.com

# Now CLI commands use these values
inkeep push
```

Example 4 (css):
```css
export default defineConfig({
  tenantId: 'my-tenant',
  agentsApi: {
    url: 'http://localhost:3002',
  },
});
```

---

## Prompt template variables - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/typescript-sdk/prompt-template-variables

**Contents:**
- Prompt template variables
- Overview
- Context variables and headers
- Conversation ID
  - When to use it
  - Example — Zendesk ticket correlation
  - Resolution behavior
  - Delegation and transfer
  - On this page

Reference for the template variables you can use inside agent prompts — contextVariable, headers, and $conversation.

Agent prompts support three template variable families. Each is rendered into the system prompt before the LLM sees it, so the model receives concrete values and can pass them through to tool calls as plain strings.

Template variables only resolve inside agent prompts. The same {{...}} syntax appears in some other templated fields (context fetcher URLs, MCP credential templates, team agent delegation headers), but those fields only resolve {{contextVariable.*}} and {{headers.*}}.

See Context Fetchers and Headers for full coverage — how to define them, how their schemas work, and how toTemplate() gives you type-safe references with autocomplete.

{{$conversation.id}} resolves to the current conversation's ID at prompt-render time. Works in any agent prompt — no contextConfig required.

When you want the LLM to pass the conversation ID into tool arguments. Typical use: writing to an external system (ticketing, CRM, analytics) where you want a correlation key that links the external record back to the conversation.

See the customer-support cookbook template for a complete working example.

When an agent delegates to a sub-agent via A2A or transfers control, the sub-agent's {{$conversation.id}} resolves to the parent's conversation ID — the user-initiated one. This ensures records written by delegated sub-agents correlate back to the conversation the user started.

Define context fetchers in the TypeScript SDK to pull real-time data from external APIs into agent prompts.

Define data component schemas for rich, interactive agent messages using the TypeScript SDK.

Tell us how this can be better.

**Examples:**

Example 1 (javascript):
```javascript
const zendeskAgent = subAgent({
  id: 'zendesk-agent',
  name: 'Zendesk Support Agent',
  description: 'Creates Zendesk tickets with conversation correlation',
  prompt: `You are a support agent with access to Zendesk.
    When creating a Zendesk ticket, set the "inkeep_conversation" custom field
    to {{$conversation.id}} so support engineers can trace the ticket back to
    this conversation.`,
  canUse: () => [zendeskMcpTool.with({ selectedTools: ['create_zendesk_ticket'] })],
});
```

---

## Sub Agent Relationships - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/typescript-sdk/agent-relationships

**Contents:**
- Sub Agent Relationships
- Understanding Sub Agent Relationships
  - Transfer Relationships
  - Delegation Relationships
- When to Use Each Relationship
  - Use Transfers for Complex Tasks
  - Use Delegation for Simple Tasks
- Types of Delegation Relationships
  - Sub Agent Delegation
  - External Agent Delegation

Learn how to add Sub Agent relationships to your agent

Sub Agent relationships are used to coordinate specialized Sub Agents for complex workflows. This framework implements Sub Agent relationships through using canDelegateTo() and canTransferTo(), allowing a parent Sub Agent to automatically coordinate specialized Sub Agents for complex workflows.

The framework supports two types of Sub Agent relationships:

Transfer relationships completely relinquish control from one Sub Agent to another. When a Sub Agent hands off to another:

Delegation relationships are used to pass a task from one Sub Agent to another while maintaining oversight:

Use canTransferTo when the task is complex and the user will likely want to ask follow-up questions to the specialized Sub Agent:

Use canDelegateTo when the task is simple and self-contained:

Sub agent delegation is used to delegate a task to a sub agent as seen above.

External agent delegation is used to delegate a task to an external agent.

You can also specify headers to include with every request to the external agent.

Team agent delegation is used to delegate a task to another agent in the same project.

You can also specify headers to include with every request to the team agent.

By default a sub-agent that declares canTransferTo may transfer. To require that a sub-agent hands off on every turn, see the Output Contract.

Configure AI models for your Agents and Sub Agents

Attach reusable instruction blocks to sub-agents

Tell us how this can be better.

**Examples:**

Example 1 (typescript):
```typescript
import { subAgent, agent } from "agent-sdk";

// Create specialized Sub Agents first
const qaSubAgent = subAgent({
  id: "qa-agent",
  name: "QA Sub Agent",
  description: "Answers product and service questions",
  prompt: "Provide accurate information using available tools. Hand back to router if unable to help.",
  canUse: () => [knowledgeBaseTool],
  canTransferTo: () => [routerSubAgent],
});

const orderSubAgent = subAgent({
  id: "order-agent",
  name: "Order Sub Agent",
  description: "Handles order-related inquiries and actions",
  prompt: "Assist with order tracking, modifications, and management.",
  canUse: () => [orderSystemTool],
  canTransferTo: () => [routerSubAgent],
});

// Create router Sub Agent that coordinates other Sub Agents
const routerSubAgent = subAgent({
  id: "router-agent",
  name: "Router Sub Agent",
  description: "Routes customer inquiries to specialized Sub Agents",
  prompt: `Analyze customer inquiries and route them appropriately:
    - Product questions → Hand off to QA Sub Agent
    - Order issues → Hand off to Order Sub Agent
    - Complex issues → Handle directly or escalate`,
  canTransferTo: () => [qaSubAgent, orderSubAgent],
});

// Create the agent with router as default entry point
const supportAgent = agent({
  id: "customer-support-agent",
  defaultSubAgent: routerSubAgent,
  subAgents: () => [routerSubAgent, qaSubAgent, orderSubAgent],
  models: {
    base: {
      model: "anthropic/claude-sonnet-4-5",
      providerOptions: {
        temperature: 0.5,
      },
    },
    structuredOutput: {
      model: "openai/gpt-4.1-mini",
    },
  },
});
```

Example 2 (javascript):
```javascript
// Sub Agents for specific tasks
const numberProducerA = subAgent({
  id: "number-producer-a",
  name: "Number Producer A",
  description: "Produces low-range numbers (0-50)",
  prompt: "Generate numbers between 0 and 50. Respond with a single integer.",
});

const numberProducerB = subAgent({
  id: "number-producer-b",
  name: "Number Producer B",
  description: "Produces high-range numbers (50-100)",
  prompt: "Generate numbers between 50 and 100. Respond with a single integer.",
});

// Coordinating Sub Agent that delegates tasks
const mathSupervisor = subAgent({
  id: "math-supervisor",
  name: "Math Supervisor",
  description: "Coordinates mathematical operations",
  prompt: `When given a math task:
    1. Delegate to Number Producer A for a low number
    2. Delegate to Number Producer B for a high number
    3. Add the results together and provide the final answer`,
  canDelegateTo: () => [numberProducerA, numberProducerB],
});

const mathAgent = agent({
  id: "math-delegation-agent",
  defaultSubAgent: mathSupervisor,
  subAgents: () => [mathSupervisor, numberProducerA, numberProducerB],
  models: {
    base: {
      model: "anthropic/claude-haiku-4-5",
      providerOptions: {
        temperature: 0.1,
      }
    }
  },
});
```

Example 3 (javascript):
```javascript
// TRANSFER: User will likely have follow-up questions about their order
const routerSubAgent = subAgent({
  id: "router",
  prompt: "For order inquiries, transfer to order specialist",
  canTransferTo: () => [orderSubAgent],
});

// DELEGATION: Just need a quick calculation, then continue
const mathSupervisor = subAgent({
  id: "supervisor",
  prompt: "Delegate to number producers, then add results together",
  canDelegateTo: () => [numberProducerA, numberProducerB],
});
```

Example 4 (javascript):
```javascript
import { myExternalAgent } from "./external-agents/external-agent-example";

const mathSupervisor = subAgent({
  id: "supervisor",
  prompt: "Delegate to the external agent to calculate the answer to the question",
  canDelegateTo: () => [myExternalAgent],
});
```

---

## Skills in TypeScript SDK - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/typescript-sdk/skills

**Contents:**
- Skills in TypeScript SDK
- Overview
- Defining Skills
  - File Structure
  - SKILL.md Format
  - Frontmatter Fields
- Loading Skills
- Attaching Skills to Sub-Agents
  - Reference by ID
  - Skill Reference Options

Attach reusable instruction blocks to sub-agents

Skills are reusable instruction blocks you can attach to sub-agents. They help you share behavioral rules, reasoning guidelines, and formatting standards across multiple sub-agents without duplicating prompt content.

For the Visual Builder approach, see Skills in the Visual Builder.

Skills are defined as SKILL.md files with YAML frontmatter. Each skill lives in its own directory. Any additional files under that skill directory are loaded and synced alongside SKILL.md.

The body content after the frontmatter contains the actual instructions in Markdown format.

The description is how the agent decides whether to load an on-demand skill, so make it specific and front-load the scenarios it applies to ("Use when…"). Keep it tight: descriptions are capped at 1024 characters, and every always-loaded skill — plus the outline of each on-demand skill — sits in the system prompt on every turn, so verbose descriptions cost context. See Tuning Agents.

Use loadSkills() to load all skills from a directory:

The loadSkills() function:

When you run inkeep push, the CLI syncs the full skill directory, including nested files. SKILL.md still provides the top-level skill name, description, metadata, and prompt content.

Add skills to a sub-agent using the skills configuration option.

Reference skills defined at the project level by their ID:

Define attached skills to subagents:

Skills can be loaded in two ways:

Set alwaysLoaded: true to include the skill content in every prompt:

Use for skills that apply to every interaction (brand voice, compliance rules).

When alwaysLoaded is false or omitted, skills appear as an outline in the system prompt. The agent can load the full content and any synced nested files when needed using the built-in load_skill tool.

Use for specialized instructions that only apply to certain requests.

A complete example with skills directory structure and usage:

Sub Agent Relationships

Learn how to add Sub Agent relationships to your agent

Learn how to add and configure MCP tools for your agents

Tell us how this can be better.

**Examples:**

Example 1 (unknown):
```unknown
skills/
├── weather-safety-guardrails/
│   ├── SKILL.md
│   └── reference/
│       └── safety-checklist.txt
└── structured-itinerary-responses/
    ├── SKILL.md
    └── templates/
        └── day/
            └── itinerary-card.html
```

Example 2 (yaml):
```yaml
---
name: "weather-safety-guardrails"
description: "Safety rules for weather-dependent activity recommendations"
metadata:
  author: acme-corp
  version: "1.0"
---

- Never recommend outdoor activities during severe weather alerts.
- Always mention indoor alternatives when precipitation exceeds 50%.
- Include safety disclaimers for extreme temperature conditions.
```

Example 3 (javascript):
```javascript
import path from 'node:path';
import { loadSkills, project } from '@inkeep/agents-sdk';
import { myAgent } from './agents/my-agent';

export const myProject = project({
  id: 'my-project',
  name: 'My Project',
  agents: () => [myAgent],
  skills: () => loadSkills(path.join('my-project/skills')),
  models: {
    base: {
      model: 'openai/gpt-4o',
    },
  },
});
```

Example 4 (json):
```json
import { subAgent } from '@inkeep/agents-sdk';

const activitiesPlanner = subAgent({
  id: 'activities-planner',
  name: 'Activities Planner',
  description: 'Plans activities based on weather conditions',
  prompt: 'Help users plan activities based on current weather.',
  skills: () => [
    { id: 'weather-safety-guardrails', index: 0 },
    { id: 'structured-itinerary-responses', index: 1 },
  ],
});
```

---

## Model Configuration - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/typescript-sdk/models

**Contents:**
- Model Configuration
- Configuration Hierarchy
- Model Types
- Supported Models
  - Pinned vs Unpinned Models
- Provider Options
  - How providerOptions works
  - Complete Examples
  - Context Window Override
- AI Gateway

Configure AI models for your Agents and Sub Agents

Configure models at Project (required), Agent, or Sub Agent levels. Settings inherit down the hierarchy.

You must configure at least the base model at the project level:

Override at agent or sub agent level:

Each model type inherits independently through the project → agent → sub agent hierarchy. structuredOutput and summarizer resolve to the most specific level that sets them, regardless of where base is configured — overriding only base at the agent or sub agent level does not change which structuredOutput or summarizer is used. They fall back to the resolved base only when no level sets them.

Pinned models include a specific date or version (e.g., anthropic/claude-sonnet-4-20250514) and always use that exact version.

Unpinned models use generic identifiers (e.g., anthropic/claude-sonnet-4-5) and let the provider choose the latest version, which may change over time as providers update their models.

The TypeScript SDK also provides constants for common models:

Inkeep Agents supports all Vercel AI SDK provider options.

providerOptions accepts two types of values:

This means you can mix them freely:

Constructor-level config (baseURL, headers, resourceName, apiVersion) is always specified at the top level of providerOptions, not nested under a provider key.

OpenAI with reasoning:

Anthropic with thinking:

Google with thinking:

Controlling reasoning:

Each provider exposes reasoning through providerOptions (see the examples above):

Whether a model reasons by default varies by provider and changes as models are updated — check the provider's own reference: Anthropic extended thinking, OpenAI reasoning, and Google thinking. As a rule of thumb, Anthropic and OpenAI models start with reasoning off (opt-in), while many Google models have it on by default (opt-out). For guidance on when to disable reasoning, see Tuning Agents.

When AI_GATEWAY_API_KEY is set, Anthropic, OpenAI, and Google models are automatically routed through Vercel AI Gateway for per-request cost tracking. No configuration changes are needed — your existing model strings work as-is. See AI Gateway below for fallback models, allowed providers, and advanced gateway configuration.

Azure OpenAI requires either resourceName (for standard Azure OpenAI deployments) or baseURL (for custom endpoints) in providerOptions. The AZURE_API_KEY environment variable must be set for authentication. Note that only one Azure OpenAI resource can be used at a time since authentication is handled via a single environment variable.

Custom OpenAI-compatible provider:

Custom OpenAI-compatible providers require a base URL to be specified in providerOptions.baseURL or providerOptions.baseUrl. The CUSTOM_LLM_API_KEY environment variable will be automatically used for authentication if present.

For custom or unlisted models, you can explicitly specify the context window size:

The contextWindowSize option is useful when:

This affects compression triggers and oversized artifact detection (artifacts exceeding 30% of the context window).

Vercel AI Gateway provides intelligent model routing, automatic failover, and per-request cost tracking. All AI Gateway features require AI_GATEWAY_API_KEY to be set in your environment.

When the gateway is active, Anthropic, OpenAI, and Google models are automatically routed through it — no configuration changes needed. This enables fallback models and allowed providers for those providers. Per-request cost tracking is available for any model routed through the gateway.

For self-hosted deployments, you can bring your own API keys (BYOK) for any provider by configuring them in your Vercel AI Gateway team settings.

Configure an ordered list of backup models that the gateway tries if the primary model fails or is unavailable:

If the primary model (anthropic/claude-sonnet-4-5) fails, the gateway automatically tries openai/gpt-5.2, then google/gemini-2.5-flash. If all models fail, the request errors.

Fallback models can be configured on any model slot (base, structuredOutput, summarizer). They inherit through the project → agent → sub agent hierarchy — even when a sub agent overrides the model itself, it still inherits fallbackModels from its parent unless it explicitly sets its own. All entries must use the provider/model format (e.g., "openai/gpt-5.2").

Restrict and prioritize which providers can serve requests. The order determines preference — the first provider in the list has the highest priority:

The gateway will try to serve the request via AWS Bedrock first. If Bedrock is unavailable, it falls back to Anthropic's direct API. When allowedProviders is set, the model string should omit the provider prefix (e.g., "claude-sonnet-4-5" instead of "anthropic/claude-sonnet-4-5") since the gateway determines which provider to use.

Available providers include: anthropic, openai, google, bedrock, azure, vertex.

Like fallbackModels, allowedProviders inherits through the project → agent → sub agent hierarchy even when the model is overridden at a lower level.

Both features can be used together. With this configuration, allowedProviders restricts and prioritizes which providers can serve the primary model, while fallbackModels defines alternative models to try if the primary model is unavailable:

You can also configure gateway routing directly via providerOptions for access to the full gateway provider options (order, only, models, byok, providerTimeouts, tags, zeroDataRetention).

providerOptions.gateway.caching and providerOptions.anthropic.cacheControl interact with Inkeep's default-on prompt caching. Inkeep applies its caching default only when you haven't set a value — if you set providerOptions.gateway.caching or providerOptions.anthropic.cacheControl explicitly, your value is preserved.

If you set both fallbackModels and providerOptions.gateway.models, fallbackModels takes precedence.

When using inkeep init, defaults are set based on your chosen provider:

Learn how to customize your Agents.

Sub Agent Relationships

Learn how to add Sub Agent relationships to your agent

Tell us how this can be better.

**Examples:**

Example 1 (css):
```css
// inkeep.config.ts
export default defineConfig({
  models: {
    base: {
      model: "anthropic/claude-sonnet-4-5",
      providerOptions: { temperature: 0.7, maxOutputTokens: 2048 }
    }
  }
});
```

Example 2 (css):
```css
const myAgent = agent({
  models: {
    base: { model: "openai/gpt-5.2" }  // Override project default
  }
});

const mySubAgent = subAgent({
  models: {
    structuredOutput: { model: "openai/gpt-4.1-mini" }  // Override for JSON output
  }
});
```

Example 3 (yaml):
```yaml
models: {
  base: {
    model: "anthropic/claude-sonnet-4-5",  // Unpinned - provider chooses version
    // vs
    model: "anthropic/claude-sonnet-4-20250514"  // Pinned - exact version
  }
}
```

Example 4 (yaml):
```yaml
import { Models } from "@inkeep/agents-sdk";

models: {
  base: {
    model: Models.ANTHROPIC_CLAUDE_SONNET_4_5,  // Type-safe constants
  }
}
```

---

## Project Management - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/typescript-sdk/project-management

**Contents:**
- Project Management
- Overview
- Workspace structure
- Architecture
- Project files and directories
  - index.ts
  - agents/
  - tools/
  - data-components/
  - external-agents/

Learn how to manage projects in the Inkeep Agent Framework

Projects are the top-level organizational unit in your Inkeep workspace. Each project contains its own agents, sub agents, tools, data components, and environment configurations.

After following the Quick Start guide, your workspace will be organized with the following directory structure:

The src/inkeep.config.ts file defines workspace configuration for all projects. See Workspace Configuration for details.

This project follows a workspace structure with the following services:

The project entry point inside each project directory that exports your project definition:

Contains agent definitions. Each file typically exports one agent:

See Agents & Sub Agents for more information about creating and configuring agents and sub agents.

Tool definitions that can be used by Sub Agents:

See MCP Tools and Function Tools for more information about creating and configuring MCP tools and function tools.

Data components for structured UI output:

See Data Components for more information about creating and configuring data components.

External agent definitions:

See External Agents for more information about creating and configuring external agents.

Environment-specific configurations for different deployment stages:

Use the inkeep add command to add template projects from the Inkeep Agents Cookbook to your workspace.

Ensure you have the Inkeep CLI installed.

Navigate to the src/projects directory:

To see all available project templates, run inkeep add without any arguments:

This displays a list of available project templates you can add to your workspace.

Add a specific project template using the --project flag:

For new projects, we recommend starting with a simple project template like docs-assistant, which you can customize to your needs.

After making changes to your project code, use inkeep push to sync your local TypeScript project to the Visual Builder. This allows you to continue development using the Visual Builder's drag-and-drop interface.

Ensure you have the Inkeep CLI installed.

Change to the directory containing your project's index.ts file:

Run the push command:

After pushing, refresh your Visual Builder. Your project and all its agents, Sub Agents, tools, and data components will be available in the Visual Builder.

Validate without pushing:

To validate your project without actually pushing changes, use the --json flag:

When you make changes in the Visual Builder (such as updating prompts or modifying agent configurations), use inkeep pull to sync those changes back to your local TypeScript project.

The inkeep pull command in-part leverages AI to sync your TypeScript files to the state of your Visual Builder, so at least one of the below environment variables to be defined:

The CLI prioritizes Anthropic → OpenAI → Google.

Here are the models used:

Change to the directory containing your project's index.ts file:

Run the pull command:

Check your project files to see the updates. For example, if you changed an agent's prompt in the Visual Builder:

The file should reflect the updated prompt from the Visual Builder.

See CLI Reference for more information about the inkeep pull command.

Use the inkeep add command to add custom MCP server templates from the Inkeep Agents Cookbook to your workspace. These templates provide starter code for common MCP server integrations that you can customize and deploy.

Ensure you have the Inkeep CLI installed.

Navigate to your workspace root directory (where your package.json is located):

The CLI will automatically detect the apps/mcp/app directory in your workspace.

To see all available MCP server templates, run inkeep add without any arguments:

This displays both project templates and MCP server templates you can add to your workspace.

Add a specific MCP server template using the --mcp flag:

The template will be added to apps/mcp/app/[template-name]/mcp/route.ts automatically.

The MCP server will be exposed at http://localhost:3000/[template-name]/mcp. Customize it with your API credentials and business logic, then register it as a tool using mcpTool:

See MCP Tools for more information about registering MCP servers as tools.

To build and run your own images you can follow the Build a Custom Docker Image docs.

This repostory contains a docker-compose.yml and a template Dockerfile for each service:

Fix common issues with sub agents.

Learn how to customize your Agents.

Tell us how this can be better.

**Examples:**

Example 1 (lua):
```lua
workspace-root/                 
├── package.json                 # Workspace package.json
├── .env                         # Workspace environment variables
├── src/  
│   ├── inkeep.config.ts         # Workspace configuration file
│   ├── projects/
│   │   ├── my-agent-project/
│   │   │   ├── index.ts
│   │   │   ├── agents/
│   │   │   │   ├── main-agent.ts
│   │   │   │   └── support-agent.ts
│   │   │   ├── tools/
│   │   │   │   ├── search-tool.ts
│   │   │   │   └── calculator-tool.ts
│   │   │   ├── data-components/
│   │   │   │   ├── user-profile.ts
│   │   │   │   └── product-catalog.ts
│   │   │   ├── external-agents/
│   │   │   │   ├── exernal-agent-example.ts
│   │   │   └── environments/
│   │   │       ├── index.ts
│   │   │       ├── development.env.ts
│   │   │       └── production.env.ts
│   │   └── another-project/       # Additional projects can coexist
│   │       ├── index.ts
│   │       └── ...
```

Example 2 (javascript):
```javascript
// Located inside project directory (e.g., my-agent-project/index.ts)
import { project } from '@inkeep/agents-sdk';
import { mainAgent } from './agents/main-agent';
import { supportAgent } from './agents/support-agent';
import { searchTool } from './tools/search-tool';
import { calculatorTool } from './tools/calculator-tool';
import { userProfile } from './data-components/user-profile';

export const myProject = project({
  id: 'my-agent-project',
  name: 'My Agent Project',
  description: 'A comprehensive multi-agent system',
  subAgents: () => [mainAgent, supportAgent],
  tools: () => [searchTool, calculatorTool],
  dataComponents: () => [userProfile],
});
```

Example 3 (javascript):
```javascript
// agents/customer-support.ts
import { agent, subAgent } from '@inkeep/agents-sdk';

const routerSubAgent = subAgent({
  id: 'support-router',
  name: 'Support Router',
  prompt: 'Route customer inquiries to appropriate specialists',
});

const billingSubAgent = subAgent({
  id: 'billing-specialist',
  name: 'Billing Specialist',
  prompt: 'Handle billing and payment inquiries',
});

export const customerSupportAgent = agent({
  defaultSubAgent: routerSubAgent,
  subAgents: () => [routerSubAgent, billingSubAgent],
});
```

Example 4 (lua):
```lua
// tools/database-query.ts
import { mcpTool } from '@inkeep/agents-sdk';

export const databaseQueryTool = mcpTool({
  id: 'db-query',
  name: 'Database Query Tool',
  description: 'Execute SQL queries against the database',
  inputSchema: {
    type: 'object',
    properties: {
      query: { type: 'string' },
      database: { type: 'string' }
    }
  },
  // Tool implementation...
});
```

---

## Evaluations in TypeScript SDK - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/typescript-sdk/evaluations

**Contents:**
- Evaluations in TypeScript SDK
- Setup: create a client
- End-to-end example
  - Step 1 — Create an evaluator
  - Step 2 — Create a test suite and add items
  - Step 3 — Create a run configuration
  - Step 4 — Trigger a run
  - Step 5 — Check run status
  - Step 6 (optional) — Evaluate a previous run after the fact
- Method reference

Manage evaluators, test suites, and batch evaluations programmatically with the TypeScript SDK

The TypeScript SDK provides an EvaluationClient that talks to the Evaluations API so you can manage evaluators, test suites, run configurations, trigger runs with scoring, and read results—all from code.

For full endpoint details and request/response shapes, see the Evaluations API reference.

The walkthrough below creates an evaluator, a test suite with items, a run configuration, triggers an evaluation, and checks the results. Each step builds on the previous one.

An evaluator defines how to score agent output. You provide a prompt, a JSON schema for the structured result, and a model to run the evaluation.

The schema should include a numeric score, a boolean passed, and a reasoning string so you get both a quantitative metric and a human-readable explanation for every evaluation.

A test suite is a named collection of items. Each item has input (the messages sent to the agent) and optional expectedOutput (reference answer).

A run configuration ties the test suite to one or more agents and optional default evaluators. It is a saved "recipe" you can trigger repeatedly.

Starting a run queues every item × agent combination. When evaluators are included, a batch evaluation job is automatically created for the resulting conversations.

The evaluatorIds on trigger is optional — omit it to use the defaults from the run configuration, or pass different ids to override.

Poll getDatasetRun or check the Test Suites page in the Visual Builder to watch items transition from pending to completed with evaluation scores.

If you ran a test suite without evaluators and want to score those conversations later, trigger a batch evaluation scoped to the run:

Suite configs group evaluators and optional agent filters and sample rates for continuous tests that evaluate a fraction of live conversations automatically.

To list results by job or run config, use the Evaluations API.

Learn about data operations emitted by agents and how to use the x-emit-operations header to control their visibility.

Learn how to configure and use external agents using the A2A protocol

Tell us how this can be better.

**Examples:**

Example 1 (sql):
```sql
import { EvaluationClient } from "@inkeep/agents-sdk";

const client = new EvaluationClient({
  tenantId: process.env.INKEEP_TENANT_ID!,
  projectId: process.env.INKEEP_PROJECT_ID!,
  apiUrl: "https://api.inkeep.com",
  apiKey: process.env.INKEEP_API_KEY,
});
```

Example 2 (kotlin):
```kotlin
const evaluator = (await client.createEvaluator({
  name: "Answer quality",
  description: "Checks correctness, helpfulness, and tone of agent replies",
  prompt: `You are an expert QA evaluator.

Given the full conversation between a user and an AI assistant, evaluate the **last assistant reply** on three dimensions:
1. **Correctness** — Is the information factually accurate? If an expected output is provided, does the reply match its intent?
2. **Helpfulness** — Does the reply fully address the user's question without unnecessary filler?
3. **Tone** — Is the reply professional, clear, and appropriately concise?

Return a JSON object with:
- "score": a number from 1 to 5 (1 = poor, 5 = excellent) reflecting overall quality.
- "passed": true if the reply is acceptable for production (score >= 4), false otherwise.
- "reasoning": 1-2 sentences explaining the score, citing specific strengths or issues.`,
  schema: {
    type: "object",
    properties: {
      score: {
        type: "number",
        description: "Overall quality score from 1 to 5",
      },
      passed: {
        type: "boolean",
        description: "Whether the reply meets production quality bar",
      },
      reasoning: {
        type: "string",
        description: "Brief explanation of the score",
      },
    },
    required: ["score", "passed", "reasoning"],
  },
  model: { model: "gpt-4o-mini" },
  passCriteria: {
    operator: "and",
    conditions: [{ field: "score", operator: ">=", value: 4 }],
  },
})) as { id: string };
```

Example 3 (json):
```json
const testSuite = (await client.createDataset({
  name: "Support FAQs",
})) as { id: string };

await client.createDatasetItem(testSuite.id, {
  input: {
    messages: [
      { role: "user", content: { text: "How do I reset my password?" } },
    ],
  },
  expectedOutput: [
    { role: "assistant", content: { text: "Go to Settings → Security → Reset password." } },
  ],
});

await client.createDatasetItems(testSuite.id, [
  {
    input: {
      messages: [{ role: "user", content: { text: "What are your hours?" } }],
    },
  },
  {
    input: {
      messages: [{ role: "user", content: { text: "Do you offer refunds?" } }],
    },
  },
]);
```

Example 4 (javascript):
```javascript
const runConfig = (await client.createDatasetRunConfig({
  name: "Support smoke test",
  datasetId: testSuite.id,
  agentIds: ["your-agent-id"],
  evaluatorIds: [evaluator.id],
})) as { id: string };
```

---

## Headers in TypeScript SDK - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/typescript-sdk/headers

**Contents:**
- Headers in TypeScript SDK
- Overview
- Passing context via headers
- Configuring headers
- How it works
- Using headers in your agents
  - In Context Fetchers
  - In Agent Prompts
  - In External Tools
- Verified claims from authenticated sessions

Define and validate HTTP headers in the TypeScript SDK to pass dynamic context for personalized agent interactions.

Headers allow you to pass request-specific values (like user IDs, authentication tokens, or organization metadata) to your Agent at runtime via HTTP headers. These values are validated, cached per conversation, and made available throughout your Agent system for:

Include context values as HTTP headers when calling your agent API. These headers are validated against your configured schema and cached for the conversation.

Header keys are normalized to lowercase. Define them as lowercase in your schema and reference them as lowercase in templates.

Define a schema for your headers and configure how it's used in your agent. You must include the headers schema in your context config.

Validation: Headers are validated against your configured schema when a request arrives

Caching: Validated context is cached per conversation for reuse across multiple interactions

Reuse: Subsequent requests with the same conversationId automatically use cached context values

Updates: Provide new header values to update the context for an ongoing conversation

Context values persist across conversation turns. To update them, send new header values with the same conversation ID.

Header values can be used in your agent prompts and fetch definitions using JSONPath template syntax {{headers.field_name}}. You can use the headers schema's toTemplate() method for type-safe templating with autocomplete and validation.

Use header values to fetch dynamic data from external APIs:

Reference context directly in agent prompts for personalization using the context config's template method:

Configure external agents or MCP servers with dynamic headers using the headers schema:

When using authenticated chat sessions, non-standard claims from the customer-signed JWT are automatically extracted and made available as verified claims in the conversation context. Unlike headers and userProperties, verified claims are cryptographically verified and cannot be modified by the client.

Verified claims are available at metadata.verifiedClaims in the execution context and are persisted in conversation metadata. Any non-standard claims in the JWT (e.g., email, org_id, role, or custom claims) are extracted automatically. Standard JWT claims (iss, aud, exp, iat, nbf, jti) are excluded.

Verified claims are limited to 1KB. Tokens with claims exceeding this limit are rejected.

You can reference verified claims to personalize agent behavior with trusted identity data:

Use verified claims for authorization and identity decisions. Use headers and userProperties for non-sensitive personalization like display preferences.

For setup instructions, see Authenticated chat sessions.

Pass tenant-specific configuration to customize agent behavior per customer:

Provide user identity and session information for personalized interactions:

Forward headers from your API gateway for consistent authentication:

When using the Inkeep chat components, the following headers are automatically sent with each request:

These headers are useful for providing time-aware responses:

If you receive a 400 error about invalid headers:

If context values aren't available in subsequent requests:

Understand how conversation history is managed and included in the context window for both main and delegated agents

Define context fetchers in the TypeScript SDK to pull real-time data from external APIs into agent prompts.

Tell us how this can be better.

**Examples:**

Example 1 (json):
```json
curl -N \
  -X POST "http://localhost:3003/api/chat" \
  -H "Authorization: Bearer $INKEEP_API_KEY" \
  -H "user_id: u_123" \
  -H "auth_token: t_abc" \
  -H "org_name: Acme Corp" \
  -H "Content-Type: application/json" \
  -d '{
    "messages": [ { "role": "user", "content": "What can you help me with?" } ],
    "conversationId": "conv-123"
  }'
```

Example 2 (elixir):
```elixir
import { z } from "zod";
import { agent, subAgent } from "@inkeep/agents-sdk";
import { contextConfig, fetchDefinition, headers } from '@inkeep/agents-core';


// Define schema for expected headers (use lowercase keys)
const personalAgentHeaders = headers({
  schema: z.object({
    user_id: z.string(),
    auth_token: z.string(),
    org_name: z.string().optional()
  });
});

// Create a context fetcher that uses header values with type-safe templating
const userFetcher = fetchDefinition({
  id: "user-info",
  name: "User Information",
  trigger: "initialization",
  fetchConfig: {
    url: `https://api.example.com/users/${personalAgentHeaders.toTemplate('user_id')}`,
    method: "GET",
    headers: {
      Authorization: `Bearer ${personalAgentHeaders.toTemplate('auth_token')}`,
    },
    transform: "user", // Extract user from response, for example if the response is { "user": { "name": "John Doe", "email": "john.doe@example.com" } }, the transform will return the user object
  },
  responseSchema: z.object({
    user: z.object({
      name: z.string(),
      email: z.string(),
    }),
  }),
  defaultValue: "Guest User"
});

// Configure context for your agent
const personalAgentContext = contextConfig({
  headers: personalAgentHeaders,
  contextVariables: {
    user: userFetcher,
  },
});

// Create a Sub Agent that uses context variables
const personalAssistant = subAgent({
  id: "personal-assistant",
  name: "Personal Assistant",
  description: "Personalized AI assistant",
  prompt: `You are a helpful assistant for ${personalAgentContext.toTemplate('user.name')} from ${personalAgentHeaders.toTemplate('org_name')}.

  User ID: ${personalAgentHeaders.toTemplate('user_id')}

  Provide personalized assistance based on their context.`,
});

// Attach context to your Agent
const myAgent = agent({
  id: "personal-agent",
  name: "Personal Assistant Agent",
  defaultSubAgent: personalAssistant,
  subAgents: () => [personalAssistant],
  contextConfig: personalAgentContext,
});
```

Example 3 (elixir):
```elixir
// Define schema for expected headers (use lowercase keys)
const personalAgentHeaders = headers({
  schema: z.object({
    user_id: z.string(),
    auth_token: z.string(),
    org_name: z.string().optional()
  });
});


const userDataFetcher = fetchDefinition({
  id: "user-data",
  name: "User Data",
  fetchConfig: {
    url: `https://api.example.com/users/${personalAgentHeaders.toTemplate('user_id')}/profile`,
    headers: {
      Authorization: `Bearer ${personalAgentHeaders.toTemplate('auth_token')}`,
      "X-Organization": personalAgentHeaders.toTemplate('org_name')
    },
    body: {
      includePreferences: true,
      userId: personalAgentHeaders.toTemplate('user_id')
    }
  },
  responseSchema: z.object({
    name: z.string(),
    preferences: z.record(z.unknown())
  })
});

// Configure context for your Agent
// You must include the headers schema and fetchers in your context config.
const personalAgentContext = contextConfig({
  headers: personalAgentHeaders,
  contextVariables: {
    user: userFetcher,
  },
});
```

Example 4 (yaml):
```yaml
// Create context config with both headers and fetchers
const userContext = contextConfig({
  headers: requestHeaders,
  contextVariables: {
    userName: userDataFetcher,
  },
});

const assistantAgent = subAgent({
  prompt: `You are an assistant for ${userContext.toTemplate('userName')} from ${requestHeaders.toTemplate('org_name')}.

  User context:
  - ID: ${requestHeaders.toTemplate('user_id')}
  - Organization: ${requestHeaders.toTemplate('org_name')}

  Provide help tailored to their organization's needs.`
});
```

---

## Triggers Overview - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/typescript-sdk/triggers/overview

**Contents:**
- Triggers Overview
- Message Format
- Overview
- Creating Triggers
  - Basic Trigger
  - Trigger with Structured Data Only
  - Trigger with Input Validation
  - Trigger with Authentication
- Configuration Options
  - Authentication Configuration

Create webhook endpoints that allow external services to invoke your agents

Triggers create webhook endpoints that allow external services (like GitHub, Slack, Stripe, or custom applications) to invoke your agents. When a webhook is received, the payload is validated, transformed, and used to start a new conversation with the agent.

When a trigger invokes an agent, it sends a multi-part message containing:

This allows agents to access both a human-readable summary via the text part and the full structured payload for detailed processing.

The data part is included whenever the webhook payload is not null/undefined. Even an empty object {} is included as a data part.

Triggers are useful for:

If you don't need a human-readable text message, you can omit messageTemplate and the agent will receive only the structured payload data:

The agent will receive:

Use JSON Schema or Zod to validate incoming webhook payloads:

Triggers support flexible header-based authentication. You can require any headers with expected values:

Header values are securely hashed before storage. The original values are never stored in the database.

Each incoming request must include all configured headers with matching values. If any header is missing or has an incorrect value, the request is rejected with a 401 or 403 status.

Message templates are optional and use {{placeholder}} syntax to interpolate values from the webhook payload. When provided, the interpolated text is included as a text part in the message alongside the structured data part:

Nested properties are accessed with dot notation ({{customer.email}}). Array length can be accessed with .length.

Transform incoming payloads before they reach the message template using outputTransform. You can choose between two approaches:

These options are mutually exclusive. Use either jmespath OR objectTransformation, not both. If both are provided, jmespath takes priority.

Use objectTransformation when you just need to remap fields from the payload. Each key becomes a field in the transformed output, and each value is a JMESPath path to extract from the input:

Use jmespath when you need more powerful transformations like filtering arrays, conditional logic, or complex restructuring. JMESPath is a query language for JSON:

Advanced JMESPath example - filtering and projecting arrays:

Object Transformation is converted to JMESPath under the hood. For example, { userName: "user.name" } becomes the JMESPath expression { userName: user.name }.

Beta Feature: Signature verification is currently in beta. The API may change in future releases.

For services that sign webhooks (like GitHub, Stripe, Slack), use signingSecret:

The framework automatically verifies HMAC-SHA256 signatures in the X-Signature-256 header.

For services like GitHub that sign webhooks, you often don't need header authentication—the signature verification provides security. Use signingSecret alone for these cases.

After pushing your agent configuration, each trigger gets a unique webhook URL:

You can find the full webhook URL in the Inkeep dashboard or via the API response when creating/listing triggers.

Every webhook invocation is tracked with:

Query invocation history via the API:

Here's a complete example with a GitHub webhook trigger that handles issue events:

Require explicit user approval before running selected tools using the TypeScript SDK.

Define scheduled triggers in the TypeScript SDK to run agents on a cron schedule or one-time execution

Tell us how this can be better.

**Examples:**

Example 1 (json):
```json
{
  "parts": [
    { "kind": "text", "text": "New order received: #12345" },
    { "kind": "data", "data": { "orderId": "12345", "total": 99.99 }, "metadata": { "source": "trigger" } }
  ]
}
```

Example 2 (javascript):
```javascript
import { agent, trigger, subAgent } from "@inkeep/agents-sdk";

const slackTrigger = trigger({
  name: "Slack Messages",
  description: "Handle incoming Slack messages",
  messageTemplate: "New message from {{user.name}}: {{text}}",
});

export default agent({
  id: "support-agent",
  name: "Support Agent",
  defaultSubAgent: subAgent({
    id: "support",
    name: "Support Assistant",
    prompt: "You help answer support questions.",
  }),
  triggers: () => [slackTrigger],
});
```

Example 3 (css):
```css
const dataTrigger = trigger({
  name: "Data Webhook",
  description: "Receives structured data for processing",
  // No messageTemplate - agent receives only the data part
  inputSchema: z.object({
    eventType: z.string(),
    payload: z.record(z.unknown()),
  }),
});
```

Example 4 (json):
```json
{
  "parts": [
    { "kind": "data", "data": { "eventType": "order.created", "payload": { ... } }, "metadata": { "source": "trigger" } }
  ]
}
```

---

## Environment-aware Credentials - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/typescript-sdk/credentials/env-aware-credentials

**Contents:**
- Environment-aware Credentials
  - Step 1: Define environment configurations
  - Step 2: Use the credentials in tools
  - CLI Environment Variables
  - On this page

Automatically load environment-specific credentials and switch between development and production configurations.

Environment-aware credentials enable automatic loading of environment-specific credentials (development, production, etc.) while keeping them cleanly separated and easily switchable via the CLI's --env flag.

Credentials are referenced in the TypeScript SDK using the envSettings object. Creating environment-aware credentials is a two step process:

This pattern is useful if you want to keep track of different credentials for different environments. When you push your project using the Inkeep CLI inkeep push command with the --env flag, the credentials will be loaded from the appropriate environment file. For example, if you run inkeep push --env development, the credentials will be loaded from the environments/development.env.ts file.

The CLI respects these environment variables when using the --env flag:

Environment Variables

Store simple API keys and bearer tokens using environment variables in development or production.

Understand how conversation history is managed and included in the context window for both main and delegated agents

Tell us how this can be better.

**Examples:**

Example 1 (javascript):
```javascript
import { mcpTool } from "@inkeep/agents-sdk";
import { envSettings } from "../environments";

export const stripeTool = mcpTool({
  id: 'stripe-tool',
  name: 'Stripe',
  serverUrl: 'https://mcp.stripe.com/mcp',
  credential: envSettings.getEnvironmentCredential('stripe_api_key'),
});
```

Example 2 (sass):
```sass
# Set environment name via environment variable
export INKEEP_ENV=production
inkeep push  # Uses production environment automatically

# Override via CLI (takes precedence)
inkeep push --env development  # Uses development instead
```

---

## Data Operations - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/typescript-sdk/data-operations

**Contents:**
- Data Operations
- Overview
- The x-emit-operations Header
  - Usage
  - CLI Usage
- Data Operation Types
  - Agent Events
    - agent_generate
    - agent_reasoning
  - Tool Execution Events

Learn about data operations emitted by agents and how to use the x-emit-operations header to control their visibility.

Data operations are detailed, real-time events that provide visibility into what agents are doing during execution. They include agent reasoning, tool executions, transfers, delegations, and artifact creation. By default, these operations are hidden from end users to keep the interface clean, but they can be enabled for debugging and monitoring purposes.

The x-emit-operations header controls whether data operations are included in the response stream. When set to true, the system will emit detailed operational events alongside the regular response content.

In the CLI, you can toggle data operations using the operations command:

Emitted when an agent generates content — text, structured data, or a mix of both.

generationType values:

data.parts[].type values:

When generationType is mixed_generation, data.parts is ordered by emission: a text part may precede a data component, appear between components, or follow them. Consumers that render agent responses should iterate parts in order and render each entry according to its type.

Emitted when an agent is reasoning through a request or planning its approach.

Emitted when an agent starts calling a tool or function.

When a tool requires user approval, the tool_call event includes additional fields:

Approval-specific fields:

See Tool approvals for complete configuration and integration details.

Emitted when a tool execution completes (success or failure). Tool results can include text, structured data, or multimedia content such as images.

Image Result Example:

The blob:// URI is an internal storage reference. When retrieved via the API or conversation history, these are automatically resolved to accessible media proxy URLs. See Images in Memory.

Emitted when control is transferred from one agent to another.

Emitted when an agent delegates a task to another agent.

Emitted when a delegated task is completed and returned.

Emitted when an agent creates or saves an artifact (document, chart, file, etc.).

See Artifact Components for how to define preview and non-preview fields in your artifact schemas.

Emitted when the agent runtime is starting up.

Emitted when an agent completes its task.

Emitted when an error occurs during execution.

Here's a complete example showing a request with data operations enabled:

This provides complete visibility into the agent's execution process, from initialization through reasoning, tool execution, artifact creation, and final response generation.

Constrain a sub-agent to emit structured output only, instead of free-text narration

Manage evaluators, test suites, and batch evaluations programmatically with the TypeScript SDK

Tell us how this can be better.

**Examples:**

Example 1 (json):
```json
curl -N \
  -X POST "http://localhost:3003/api/chat" \
  -H "Authorization: Bearer $INKEEP_API_KEY" \
  -H "Content-Type: application/json" \
  -H "x-emit-operations: true" \
  -d '{
    "messages": [
      { "role": "user", "content": "What can you do?" }
    ],
    "conversationId": "chat-1234"
  }'
```

Example 2 (markdown):
```markdown
# Start a chat session
inkeep chat

# Toggle data operations on/off
> operations
🔧 Emit operations: ON
Data operations will be shown during responses.

> operations
🔧 Emit operations: OFF
Data operations are hidden.
```

Example 3 (json):
```json
{
  "type": "data-operation",
  "data": {
    "type": "agent_generate",
    "label": "Agent search-agent generating response",
    "details": {
      "timestamp": 1726247200000,
      "agentId": "search-agent",
      "data": {
        "parts": [
          {
            "type": "text",
            "content": "I found 5 relevant documents..."
          }
        ],
        "generationType": "text_generation"
      }
    }
  }
}
```

Example 4 (json):
```json
{
  "type": "data-operation",
  "data": {
    "type": "agent_reasoning",
    "label": "Agent search-agent reasoning through request",
    "details": {
      "timestamp": 1726247200000,
      "agentId": "search-agent",
      "data": {
        "parts": [
          {
            "type": "text",
            "content": "I need to search for information about..."
          }
        ]
      }
    }
  }
}
```

---

## Use Keychain for Local Development - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/typescript-sdk/credentials/keychain

**Contents:**
- Use Keychain for Local Development
- Referencing credentials in SDK
  - Credential Configuration
  - On this page

Use the local keychain to store OAuth tokens and bearer credentials during development.

Keychain is the default method for storing credentials for every project. It is a locally stored credential store for OAuth tokens from OAuth2.1/PKCE flows and Bearer authentication, configured through Visual Builder and referenced in the TypeScript SDK.

Keychain lacks automatic token refresh, production suitability, and metadata header support, making Nango the recommended solution for production-ready credential management. See setup instructions for Nango here.

Here is an example of how to reference a credential in the TypeScript SDK for both Bearer Authentication and OAuth2.1/PKCE.

Set up Nango as an OAuth-capable credential store for your Inkeep agents.

Environment Variables

Store simple API keys and bearer tokens using environment variables in development or production.

Tell us how this can be better.

---

## Data Components in TypeScript SDK - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/typescript-sdk/structured-outputs/data-components

**Contents:**
- Data Components in TypeScript SDK
- What are Data Components?
- Defining Data Components
- Using in Agents
- Response Shape
- Frontend Integration
- Enforcing component emission
  - On this page

Define data component schemas for rich, interactive agent messages using the TypeScript SDK.

Data Components allow your agents to return rich, interactive content instead of just text. Think of them as reusable UI building blocks that your agent can populate with data.

For example, instead of returning "You have 3 tasks: Task #123 (shipped), Task #124 (processing)...", your agent can return a properly formatted task list component.

Data components are defined using the dataComponent builder function. We recommend using Zod schemas for type safety and better developer experience.

JSON Schema is also supported if you prefer traditional schema definitions.

Register data components with your agent:

When a user asks "Show me my tasks", the agent will respond with:

A response from a dataComponents-enabled agent can take three shapes, exposed on the agent_generate data operation as generationType:

The agent_generate event records parts with type: 'text' | 'data_component' | 'data_artifact' (plus 'tool_call' | 'tool_result' for internal tool events). Iterate parts in order and render each entry by its type. See Data Operations for the full event shape.

Create a React component that receives the props defined by your data component schema:

Register the component with the chat widget.

The agent will automatically return structured data that renders as your React component.

By default a sub-agent that declares data components may use them. To require that a sub-agent emits a specific data component on every turn — or forbid it from narrating in plain text — see the Output Contract.

Reference for the template variables you can use inside agent prompts — contextVariable, headers, and $conversation.

Learn how to use artifact components to store and retrieve data from the agent

Tell us how this can be better.

**Examples:**

Example 1 (javascript):
```javascript
import { dataComponent } from '@inkeep/agents-sdk';
import { z } from 'zod';

export const taskList = dataComponent({
  id: "task-list",
  name: "TaskList",
  description: "Display user tasks with status",
  props: z.object({
    tasks: z
      .array(
        z.object({
          id: z.string().describe("Unique task identifier"),
          title: z.string().describe("Task title"),
          completed: z.boolean().describe("Whether the task is completed"),
          priority: z.enum(["low", "medium", "high"]).describe("Task priority"),
        })
      )
      .describe("Array of user tasks"),
    totalCount: z.number().describe("Total number of tasks"),
    completedCount: z.number().describe("Number of completed tasks"),
  }),
});
```

Example 2 (elixir):
```elixir
import { agent } from '@inkeep/agents-sdk';
import { taskList } from './data-components/task-list';

const taskAgent = agent({
  id: "task-agent",
  name: "Task Agent",
  prompt: "Provide helpful answers and use data components when appropriate.",
  dataComponents: () => [taskList],
});
```

Example 3 (json):
```json
{
  "dataComponents": [
    {
      "id": "task-list",
      "name": "TaskList",
      "props": {
        "tasks": [
          { "id": "1", "title": "Review documentation", "completed": false },
          { "id": "2", "title": "Update website", "completed": true }
        ]
      }
    }
  ]
}
```

Example 4 (jsx):
```jsx
const TaskList = ({ tasks, totalCount, completedCount }) => (
  <div className="task-list">
    <h3>Your Tasks ({completedCount}/{totalCount} completed)</h3>
    {tasks.map((task) => (
      <div key={task.id} className={task.completed ? "completed" : ""}>
        {task.title}
      </div>
    ))}
  </div>
);
```

---

## Webhook Triggers in TypeScript SDK - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/typescript-sdk/triggers/webhooks

**Contents:**
- Webhook Triggers in TypeScript SDK
- Message Format
- Overview
- Creating Triggers
  - Basic Trigger
  - Trigger with Structured Data Only
  - Trigger with Input Validation
  - Trigger with Authentication
- Configuration Options
  - Authentication Configuration

Create webhook endpoints in the TypeScript SDK that allow external services to invoke your agents

Triggers create webhook endpoints that allow external services (like GitHub, Slack, Stripe, or custom applications) to invoke your agents. When a webhook is received, the payload is validated, transformed, and used to start a new conversation with the agent.

When a trigger invokes an agent, it sends a multi-part message containing:

This allows agents to access both a human-readable summary via the text part and the full structured payload for detailed processing.

The data part is included whenever the webhook payload is not null/undefined. Even an empty object {} is included as a data part.

Triggers are useful for:

**User-scoped MCP servers require a configured runAsUserId. Without runAsUserId set on the trigger, tools that require user-scoped credentials will fail. See User vs Project MCPs for more details.

If you don't need a human-readable text message, you can omit messageTemplate and the agent will receive only the structured payload data:

The agent will receive:

Use JSON Schema or Zod to validate incoming webhook payloads:

Triggers support flexible header-based authentication. You can require any headers with expected values:

Header values are securely hashed before storage. The original values are never stored in the database.

Each incoming request must include all configured headers with matching values. If any header is missing or has an incorrect value, the request is rejected with a 401 or 403 status.

Message templates are optional and use {{placeholder}} syntax to interpolate values from the webhook payload. When provided, the interpolated text is included as a text part in the message alongside the structured data part:

Nested properties are accessed with dot notation ({{customer.email}}). Array length can be accessed with .length.

Transform incoming payloads before they reach the message template using outputTransform. You can choose between two approaches:

These options are mutually exclusive. Use either jmespath OR objectTransformation, not both. If both are provided, jmespath takes priority.

Use objectTransformation when you just need to remap fields from the payload. Each key becomes a field in the transformed output, and each value is a JMESPath path to extract from the input:

Use jmespath when you need more powerful transformations like filtering arrays, conditional logic, or complex restructuring. JMESPath is a query language for JSON:

Advanced JMESPath example - filtering and projecting arrays:

Object Transformation is converted to JMESPath under the hood. For example, { userName: "user.name" } becomes the JMESPath expression { userName: user.name }.

Beta Feature: Signature verification is currently in beta. The API may change in future releases.

For services that sign webhooks (like GitHub, Stripe, Slack), use signingSecret:

The framework automatically verifies HMAC-SHA256 signatures in the X-Signature-256 header.

For services like GitHub that sign webhooks, you often don't need header authentication—the signature verification provides security. Use signingSecret alone for these cases.

By default, webhook triggers execute without a user identity — tools with user-scoped credentials will fail. Setting runAsUserId makes the trigger execute as a specific user, enabling access to their connected credentials (e.g., per-user OAuth tokens for GitHub, Slack, or Jira).

After pushing your agent configuration, each trigger gets a unique webhook URL:

You can find the full webhook URL in the Inkeep dashboard or via the API response when creating/listing triggers.

Every webhook invocation is tracked with:

Query invocation history via the API:

Here's a complete example with a GitHub webhook trigger that handles issue events:

Define scheduled triggers in the TypeScript SDK to run agents on a cron schedule or one-time execution

Choose a credential store for securely managing secrets in development and production.

Tell us how this can be better.

**Examples:**

Example 1 (json):
```json
{
  "parts": [
    { "kind": "text", "text": "New order received: #12345" },
    { "kind": "data", "data": { "orderId": "12345", "total": 99.99 }, "metadata": { "source": "trigger" } }
  ]
}
```

Example 2 (javascript):
```javascript
import { agent, trigger, subAgent } from "@inkeep/agents-sdk";

const slackTrigger = trigger({
  name: "Slack Messages",
  description: "Handle incoming Slack messages",
  messageTemplate: "New message from {{user.name}}: {{text}}",
});

export default agent({
  id: "support-agent",
  name: "Support Agent",
  defaultSubAgent: subAgent({
    id: "support",
    name: "Support Assistant",
    prompt: "You help answer support questions.",
  }),
  triggers: () => [slackTrigger],
});
```

Example 3 (css):
```css
const dataTrigger = trigger({
  name: "Data Webhook",
  description: "Receives structured data for processing",
  // No messageTemplate - agent receives only the data part
  inputSchema: z.object({
    eventType: z.string(),
    payload: z.record(z.unknown()),
  }),
});
```

Example 4 (json):
```json
{
  "parts": [
    { "kind": "data", "data": { "eventType": "order.created", "payload": { ... } }, "metadata": { "source": "trigger" } }
  ]
}
```

---
