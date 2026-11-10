# Inkeep-Agents_Docs - Other

**Pages:** 17

---

## Pricing - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/pricing

**Contents:**
- Pricing
  - Open Source
  - Enterprise
- Feature Comparison
  - Building Agents
  - Core Framework
  - Talk to Your Agents (Out of the Box)
  - Building Agent UIs
  - Unified AI Search (Managed RAG)
  - Insights & Analytics

Learn about Inkeep's pricing plans and features

Inkeep offers two ways to get started: Open Source (free forever), and Enterprise (managed platform with dedicated support).

Everything you need to create AI Agents

Everything in Open Source plus:

Compare Lindy with Inkeep

Step-by-step tutorial to build an AI assistant that answers your customers' questions, grounded in your knowledge base via Inkeep Unified Search.

Tell us how this can be better.

---

## Spans and Traces - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/community/contributing/spans

**Contents:**
- Spans and Traces
- Overview
- Getting Started with Spans
  - 1. Import Required Dependencies
  - 2. Get the Tracer
- Creating and Using Spans
- Setting Span Attributes
  - Basic Attributes
- Adding Events to Spans
  - Recording Important Milestones

OpenTelemetry spans for distributed tracing and observability in the Inkeep Agent Framework

The Inkeep Agent Framework uses OpenTelemetry for distributed tracing and observability. Spans provide detailed visibility into the execution flow of agents, context resolution, tool execution, and other framework operations.

The framework provides a convenient setSpanWithError utility function that handles error recording and status setting:

LLM generation spans carry cache telemetry emitted by the gateway cost middleware. These attributes are defined in packages/agents-core/src/constants/otel-attributes.ts and consumed by the Manage UI trace timeline and cost dashboard.

gen_ai.usage.input_tokens (the existing total) is cache-inclusive and unchanged. no_cache_input_tokens is derivable as input_tokens − cache_read − cache_creation and is not emitted.

cache_state is not emitted as a span attribute — it is computed by consumers (Manage UI, the pnpm cache-debug CLI) from the four attributes above plus prior-turn signature comparison:

When adding new span attributes, follow the same append-only rule: additions to USAGE_COST_AGGREGATION_ORDER in signoz-stats.ts must be appended, never reordered, because the consumer side uses positional indexing.

The span naming convention follows a hierarchical structure that mirrors your code organization.

The framework automatically sets up OpenTelemetry instrumentation in src/instrumentation.ts:

See src/agents/Agent.ts for span usage in agent generation and tool execution.

Example from Agent.ts:

Spans provide powerful observability into your Inkeep Agent Framework operations. By following these patterns:

This will give you comprehensive visibility into your agent operations, making debugging and performance optimization much easier.

How branch-scoped database connections work in the Inkeep Agent Framework

Environment Configuration

How to configure the environment variables for the Inkeep Agent Framework

Tell us how this can be better.

**Examples:**

Example 1 (sql):
```sql
import { SpanStatusCode, type Span } from "@opentelemetry/api";
import { getTracer, setSpanWithError } from "../tracer";
```

Example 2 (elixir):
```elixir
// Use the centralized tracer utility
const tracer = getTracer("your-service-name");
```

Example 3 (json):
```json
return tracer.startActiveSpan(
  "context.resolve",
  {
    attributes: {
      "context.config_id": contextConfig.id,
      "context.trigger_event": options.triggerEvent,
    },
  },
  async (span: Span) => {
    try {
      // Your operation logic here
      return result;
    } catch (error) {
      // Use setSpanWithError for consistent error handling
      setSpanWithError(span, error);
      throw error;
    }
  }
);
```

Example 4 (json):
```json
span.setAttributes({
  "user.id": userId,
  "request.method": "POST",
});
```

---

## Core concepts - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/concepts

**Contents:**
- Core concepts
- Agents
- Tools
- Sub Agent relationships
- Sub Agent 'turn'
- Chatting with an Agent
- React UI
- API (Vercel format)
- A2A protocol
- MCP server

Learn about the key building blocks of Inkeep - Agents, Sub Agents, tools, data components, and more.

In Inkeep, an Agent is the top-level entity you can interface with via conversational experiences (chat) or trigger programmatically (via API).

Under the hood, an Agent is made up of one or more Sub Agents that work together to respond to a user or complete a task.

When you send a message to an Agent, it is first received by a Default Sub Agent that decides what to do next.

In a simple Agent, there may be only one Sub Agent with a few tools available to it.

Tools are actions that a Sub Agent can take, like looking up information or performing a task on apps and APIs.

In Inkeep, tools can be added to Sub Agents as:

MCP Servers: Connect to external services and APIs via the Model Context Protocol. You can:

Register any of these with their associated Credentials for your Agents to use.

Function Tools: Custom JavaScript functions that Agents can execute directly without the need for standing up an MCP server.

Typically, you want a Sub Agent to handle narrow, well-defined tasks. As a general rule of thumb, keep Sub Agents to be using 5-7 related tools at a time.

When your scenario gets complex, it can be useful to break up your logic into multiple Sub Agents that are specialized in specific parts of your task or workflow. This is often referred to as a "Multi-agent" system.

A Sub Agent can be configured to:

When it's a Sub Agent's turn, it can choose to:

An Agent's execution stays in this loop until one of the Sub Agents chooses to respond to the user with a final result.

Sub Agents in Inkeep are designed to respond to the user as a single, cohesive unit by default.

You can talk to an Inkeep Agent in a few ways, including:

Drop-in chat components for React apps with streaming and rich UI.

POST /api/chat, SSE (text/event-stream), x-vercel-ai-data-stream: v2.

JSON-RPC messages at /agents/a2a with blocking and streaming modes.

HTTP JSON-RPC endpoint at /v1/mcp with session header management.

Webhook and scheduled triggers for event-driven Agent invocation.

Mention @Inkeep or use /inkeep commands to talk to agents in Slack.

Triggers are webhook endpoints that allow external services to invoke your Agents. When a webhook is received, the payload is validated, transformed into a message, and used to start a new conversation.

Triggers are useful for:

Each trigger can be configured with:

When a webhook is received, the trigger creates a new conversation and invokes the Agent asynchronously, returning immediately with an invocation ID for tracking.

Learn how triggers work and when to use them.

Define triggers in code with the SDK.

You can authenticate with your Agent using:

API keys are the recommended approach for production server-to-server use, providing secure, scoped access to your Agents without exposing secrets to end-users. For app-based integrations such as web clients and authenticated end-user experiences, use App Credentials.

Sometimes, you want your Agent to reply not in plain text but with specific types of well-defined information, often called 'Structured Outputs' (JSON).

With Inkeep, there are a few ways to do this:

Beyond using Tools to fetch information, Sub Agents also receive information via:

Headers and fetched context can then be referenced explicitly as {{variables}} in Sub Agent prompts. Learn more here.

Quick reference to the key docs for building with the Visual Builder or the TypeScript SDK.

The Visual Builder and TypeScript SDK work seamlessly together—define your Sub Agents in code, push them to the Visual Builder, and iterate visually.

You can organize your related MCP Servers, Credentials, Agents, and more into Projects. A Project is generally used to represent a set of related scenarios.

For example, you may create one Project for your support team that has all the MCP servers and Agents related to customer support.

The Inkeep CLI bridges your TypeScript SDK project and the Visual Builder.

Run the following from your project (the folder that contains your inkeep.config.ts) which has an index.ts file that exports a project.

Push and pull operate at the project level (not individual agents). Define agents in your project and push/pull the whole project.

See the CLI Reference for full command details.

Once you've built your Agents, you can deploy them using:

Self-host your Agents using Docker for full control and flexibility.

Deploy your Agents to Vercel for easy serverless hosting.

The Inkeep Agent framework is composed of several key services and libraries that work together:

Set up SigNoz to enable full observability with traces and live debugging capabilities for your agents.

Compare n8n with Inkeep

Tell us how this can be better.

**Examples:**

Example 1 (unknown):
```unknown
inkeep push
```

Example 2 (unknown):
```unknown
inkeep pull
```

---

## Connect Your Data with Context7 - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/connect-your-data/context7

**Contents:**
- Connect Your Data with Context7
- Supported data sources
- Getting started
  - Step 1: Check if your library is already available
  - Step 2: Create an account
  - Step 3: Connect your data sources
  - Step 4: Get the Context7 Library ID
  - Step 5: Register the MCP server
  - Step 6: Use the Context7 MCP server in your agent
    - Specifying a library ID

Learn how to connect your code repositories and documentation to your agents using Context7

Context7 specializes in connecting code repositories and technical documentation to your agents. It's particularly well-suited for developers who want their agents to have access to library documentation, API specs, and code repositories.

With Context7 you can connect:

Context7 maintains a library of pre-indexed documentation for popular libraries and frameworks. Before creating an account, check if your library is already available:

Visit context7.com and browse the list of available libraries. If your library is listed, you can use it immediately without additional setup.

If your library is already available in Context7's library, you can skip directly to Step 4 to get the library ID and register the MCP server.

If your library isn't listed or you want to connect custom sources:

To use a specific library with your agents, you'll need the Context7 Library ID. You can find this ID in the library's URL on context7.com.

How to find the Library ID:

If you don't know the library ID, the Context7 MCP server can automatically match libraries based on your query using the resolve-library-id tool. See the "Automatic library matching" section below for details.

Register the Context7 MCP server as a tool in your agent configuration:

Using TypeScript SDK:

Using Visual Builder:

Once your Context7 MCP server is registered, you can use it with a specific library ID (from Step 4) or let it automatically match libraries based on your query.

If you know which library you want to use, specify its Context7 Library ID in your agent's prompt. This allows the Context7 MCP server to skip the library-matching step and directly retrieve documentation.

If you don't specify a library ID, the Context7 MCP server will automatically match libraries based on your query. The server uses the resolve-library-id tool to identify the appropriate library, then uses the get_library_docs tool to retrieve the relevant documentation.

This approach works well when:

Connect documents to your agents using Pinecone Assistant's MCP server

Learn how to connect your documentation and code repositories to your agents using Ref

Tell us how this can be better.

**Examples:**

Example 1 (javascript):
```javascript
import { mcpTool, subAgent } from "@inkeep/agents-sdk";

const context7Tool = mcpTool({
  id: "context7-docs",
  name: "context7_search",
  description: "Search code documentation and library references",
  serverUrl: "https://mcp.context7.com/mcp",
});

const devAgent = subAgent({
  id: "dev-agent",
  name: "Developer Assistant",
  description: "Helps with code questions using library documentation",
  prompt: `You are a developer assistant with access to code documentation.`,
  canUse: () => [context7Tool],
});
```

Example 2 (javascript):
```javascript
const devAgent = subAgent({
  id: "react-agent",
  name: "React Assistant",
  description: "Helps with React development",
  prompt: `You are a React development assistant. Use library ID "websites/inkeep" 
    when searching for documentation. Use the get_library_docs tool to find React 
    documentation and examples.`,
  canUse: () => [context7Tool],
});
```

---

## Troubleshooting Guide - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/troubleshooting

**Contents:**
- Troubleshooting Guide
- Overview
- Step 1: Check the Timeline
  - What to Look For
  - Error Cards in the Timeline
  - Copy Trace for Debugging
    - What's Included in the Trace Export
    - How to Use Copy Trace
- Step 2: Check SigNoz
  - Accessing SigNoz from the Timeline

Learn how to diagnose and resolve issues when something breaks in your Inkeep agent system.

This guide provides a structured methodology for debugging problems across different components of your agent system.

The timeline is your first stop for understanding what happened during a conversation or agent execution. Navigate to the Traces sections to view in depth details per conversation. Within each conversation, you'll find an error card that is clickable whenever something goes wrong during agent execution.

Clicking on this error card reveals:

This detailed error information helps you pinpoint exactly what went wrong and where in your agent's execution chain.

The Copy Trace button in the timeline view allows you to export the entire conversation trace as JSON. This is particularly useful for offline analysis and debugging complex flows.

When you click Copy Trace, the system exports a JSON object containing:

This exported trace contains all the activities shown in the timeline, making it easy to share complete execution context with team members or support.

SigNoz provides distributed tracing and observability for your agent system, offering deeper insights when the built-in timeline isn't sufficient.

You can easily access SigNoz directly from the timeline view. In the Traces section, click on any activity in the conversation timeline to view its details. Within the activity details, you'll find a "View in SigNoz" button that takes you directly to the corresponding span in SigNoz for deeper analysis.

If your agent stops mid-conversation, it may have hit a configured stopWhen limit:

See Configuring StopWhen for more details.

If pnpm dev fails or services aren't reachable, the most common cause is that pnpm setup-dev hasn't been run (or Docker containers have stopped).

For the quickstart template, the same applies: run pnpm setup-dev from the workspace root before pnpm dev.

If pnpm setup-dev reports that ports 5432, 5433, or 5434 are in use by another Docker Compose project, stop that project first:

The setup script tells you the exact project name and command. After stopping the conflicting project, re-run pnpm setup-dev.

When running pnpm dev from your quickstart workspace, you will see an interactive terminal interface. This interface allows you to inspect the logs of each running service. You can navigate between services using the up and down arrow keys.

To terminate the running services, click press q or esc in the terminal.

This usually means the manage UI was unreachable when you tried to approve the device code.

If auto-login isn't working when you open http://localhost:3000:

AI Provider key not defined or invalid:

Running out of credits:

Rate limiting by AI providers:

When calling agents the system automatically retries certain errors using exponential backoff.

The following errors are automatically retried:

These transient network issues are also automatically retried:

Give your agents the ability to post messages to Slack channels and DMs via the MCP protocol.

Explore the Inkeep Agents API endpoints for managing, running, and evaluating agents.

Tell us how this can be better.

**Examples:**

Example 1 (json):
```json
{
  "metadata": {
    "conversationId": "unique-conversation-id",
    "traceId": "distributed-trace-id",
    "agentId": "agent-identifier",
    "agentName": "Agent Name",
    "exportedAt": "2025-10-14T12:00:00.000Z"
  },
  "timing": {
    "startTime": "2025-10-14T11:59:00.000Z",
    "endTime": "2025-10-14T12:00:00.000Z",
    "durationMs": 60000
  },
  "timeline": [
    // Array of all activities with complete details:
    // - Agent messages and responses
    // - Tool calls and results
    // - Agent transfers
    // - Artifact information
    // - Execution context
  ]
}
```

Example 2 (unknown):
```unknown
docker compose -p <project-name> down
```

---

## OpenAI AgentKit vs Inkeep - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/comparisons/openai-agent-kit

**Contents:**
- OpenAI AgentKit vs Inkeep
- Overview
  - Building Agents
  - Developer Platform
  - Unified AI Search & RAG
  - Interact with your AI Agents in...
  - Building Agent UIs
  - AI Agents for...
  - Insights & Analytics
  - Authentication and Authorization

Compare OpenAI AgentKit with Inkeep

OpenAI AgentKit provides strong UI components (ChatKit) and basic agent building, but limits you to OpenAI models with manual knowledge management. Inkeep offers multi-agent orchestration, 2-way code-UI sync, automated knowledge ingestion, multi-provider support, and enterprise-grade content intelligence.

Compare CrewAI with Inkeep

Compare Lindy with Inkeep

Tell us how this can be better.

---

## n8n vs Inkeep - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/comparisons/n8n

**Contents:**
- n8n vs Inkeep
- Overview
  - Building Agents
  - Workflow Automation
  - Developer Platform
  - Unified AI Search & RAG
  - Interact with your AI Agents in...
  - Building Agent UIs
  - AI Agents for...
  - Insights & Analytics

Compare n8n with Inkeep

n8n excels at deterministic, rule-based workflow automation where each step follows a predefined path. Inkeep, by contrast, is built for agentic workflows and conversational AI-driven systems that reason, adapt, and make decisions dynamically.

Learn about the key building blocks of Inkeep - Agents, Sub Agents, tools, data components, and more.

Compare CrewAI with Inkeep

Tell us how this can be better.

---

## Live Debugger, Traces, and OTEL Telemetry - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/get-started/traces

**Contents:**
- Live Debugger, Traces, and OTEL Telemetry
- Overview
- Setup Options
- Option 1: SigNoz Cloud Setup
  - Video walkthrough available
  - Step 1: Create a SigNoz Cloud Project
  - Step 2: Save Your SigNoz Credentials
  - Step 3: Configure Your Root .env File
  - Step 4: Verify Cloud Setup
- Option 2: Local SigNoz Setup

Set up SigNoz to enable full observability with traces and live debugging capabilities for your agents.

The Inkeep Agent Framework provides powerful traces and live debugging capabilities powered by SigNoz. Setting up SigNoz gives you:

You can set up SigNoz in two ways:

Follow along with our visual guide to see each step in action.

You'll need to collect three pieces of information from your SigNoz dashboard:

By default, the retention period for conversation data and traces is set to 15 days. To set a longer retention period, navigate to the General tab on the Settings page in SigNoz.

Restart your development environment:

Generate some traces by interacting with your agents

Open your SigNoz cloud dashboard and navigate to "Traces" to see your agent traces

Run pnpm setup-dev first to set up core databases and migrations. setup-dev:optional only starts optional services.

Run the following from your project root:

Restart your dev server after setup completes:

Open SigNoz at http://localhost:3080 to view traces. Jaeger is available at http://localhost:16686.

Use pnpm optional:status to check service health, pnpm optional:stop to stop optional services, or pnpm optional:reset to start fresh.

Follow along with our visual guide to see each step in action.

If you prefer manual setup:

Clone the Inkeep optional local development services repository:

Run the following command to start SigNoz and related services:

When you visit http://localhost:3080, you can sign up with your desired credentials.

In your root project directory (e.g., my-agents), update your .env file:

To get your SigNoz API key:

By default, the retention period for conversation data and traces is set to 15 days. To set a longer retention period, navigate to the General tab on the Settings page in SigNoz.

Restart your Inkeep agents:

Make some requests to your agents to generate traces

Open SigNoz at http://localhost:3080 and navigate to the "Traces" section to see your agent traces

Once SigNoz is set up, you can access traces and live debugging in two ways:

If you're using the Visual Builder:

The traces overview shows conversation metrics and recent activity:

Click on any conversation to see detailed execution flow:

The Copy Trace button in the timeline view allows you to export the entire conversation trace as JSON. This is particularly useful for offline analysis and debugging complex flows.

When you click Copy Trace, the system exports a JSON object containing:

This exported trace contains all the activities shown in the timeline, making it easy to share complete execution context with team members or support.

Each conversation records how quickly the agent started responding. The conversation detail view shows the time to first token — the time from request arrival to the first user-visible text token.

Three interaction-level timings are recorded as span attributes (in seconds) on the request span, and surfaced in the assistant message's span panel:

The gap between the model timing and the visible-text timing reflects the framework's own parsing and buffering overhead. All three are queryable in SigNoz by conversation.id and agent.id.

For detailed analysis and further debugging:

For more detailed information on using traces, see the SigNoz Usage guide.

👉 For additional observability or a dedicated Evals platform, you can connect to any OTEL-based provider. For example, check out the Langfuse Usage guide for end-to-end instructions.

Next, we recommend setting up the Nango credential store for production-ready credential management. See Credentials to get started.

Install Skills and MCP to help AI coding assistants build Inkeep agents.

Learn about the key building blocks of Inkeep - Agents, Sub Agents, tools, data components, and more.

Tell us how this can be better.

**Examples:**

Example 1 (sass):
```sass
# SigNoz
SIGNOZ_URL=https://<your-organization>.signoz.cloud
SIGNOZ_API_KEY=<your-api-key>

OTEL_EXPORTER_OTLP_TRACES_ENDPOINT=https://ingest.us.signoz.cloud:443/v1/traces
OTEL_EXPORTER_OTLP_TRACES_HEADERS="signoz-ingestion-key=<your-ingestion-key>"
```

Example 2 (unknown):
```unknown
pnpm setup-dev:optional
```

Example 3 (unknown):
```unknown
git clone https://github.com/inkeep/agents-optional-local-dev .optional-services
cd .optional-services
```

Example 4 (unknown):
```unknown
docker compose --profile signoz up -d
```

---

## Push / Pull - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/get-started/push-pull

**Contents:**
- Push / Pull
- Push code to visual
  - Video walkthrough available
  - Step 1: Install the Inkeep CLI
  - Step 2: Download a template project
  - Step 3: Push code to visual
  - Step 4: Chat with your agent
- Run inkeep pull
  - Prerequisite
  - Step 1: Make an edit visually

Push and pull your agents to and from the Visual Builder

With Inkeep, you can define your agents in code, push them to the Visual Builder, and continue developing with the intuitive drag-and-drop interface. You can switch back to code any time.

Let's walk through the process.

Follow along with our visual guide to see each step in action.

Navigate to the src/projects directory.

Add the docs assistant agent using inkeep add.

Find the downloaded code in src/projects/docs-assistant.

inkeep add imports a template project from our cookbook library.

Navigate to your docs assistant project.

Use inkeep push to push the code to the Visual Builder.

To validate your project without pushing, use the --json flag: inkeep push --json

Refresh http://localhost:3000, switch to the Docs Assistant project (in the bottom left).

Under Agents, click on the Docs Assistant agent and press Try it. Ask a question about Inkeep.

Make some changes, like changing a prompt, and let's walk through inkeep pull.

The inkeep pull command in-part leverages AI to sync your TypeScript files to the state of your Visual Builder, so at least one of the below environment variables to be defined:

The CLI prioritizes Anthropic → OpenAI → Google.

Here are the models used:

Make an edit to the docs assistant agent in the UI, such as changing the prompt of the agent.

Navigate to your docs assistant project.

Use inkeep pull to pull the code from the Visual Builder to your local project.

Check the src/projects/docs-assistant/agents/docs-assistant.ts file for the updated prompt.

Next, we recommend setting up observability to see live traces of your agent. See Traces to get started.

Set up SigNoz to enable live debugging capabilities for your agents

Get started with Inkeep Agents in <5min

Install Skills and MCP to help AI coding assistants build Inkeep agents.

Tell us how this can be better.

**Examples:**

Example 1 (elixir):
```elixir
pnpm install -g @inkeep/agents-cli
```

Example 2 (unknown):
```unknown
cd src/projects
```

Example 3 (unknown):
```unknown
inkeep add --project docs-assistant
```

Example 4 (unknown):
```unknown
cd docs-assistant
```

---

## Connect Your Data with Pinecone - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/connect-your-data/pinecone

**Contents:**
- Connect Your Data with Pinecone
- Supported data sources
- Getting started
  - Step 1: Create a Pinecone account
  - Step 2: Create an Assistant
  - Step 3: Upload your files
  - Step 4: Get your MCP server URL
  - Step 5: Register the MCP server
  - Step 6: Use the Pinecone Assistant MCP server in your agent
  - On this page

Connect documents to your agents using Pinecone Assistant's MCP server

Pinecone is a vector database, and Pinecone Assistant helps you build production-grade chat and agent applications. Connect your documents and files to your agents using Pinecone Assistant's MCP server for semantic search and retrieval.

With Pinecone Assistant you can connect:

Test your assistant in the Assistant playground. Try uploading an Apple 10-K PDF file from Apple's investor relations page and ask it to summarize the document.

Register the Pinecone MCP server as a tool in your agent configuration. Replace <your-mcp-url> with the MCP URL you copied in Step 4.

Using TypeScript SDK:

You can create your credential using keychain, nango, or environment variables, but in this example we use environment variables.

Using Visual Builder:

Add a Pinecone credential:

Register the MCP server:

Add the MCP tool to your sub agent:

Once you have registered your MCP server as a tool and connected it to your agent, your agent can use the Pinecone Assistant tool to search and retrieve relevant content from your uploaded documents.

The Pinecone tool provides a get_context function that retrieves relevant document snippets from your knowledge base. When your agent calls this tool, it will:

Search semantically: Use vector similarity search to find the most relevant content based on the query

Return formatted snippets: Each result includes:

Learn how to connect your data sources to your agents using Inkeep Unified Search's comprehensive knowledge base platform

Learn how to connect your code repositories and documentation to your agents using Context7

Tell us how this can be better.

---

## Quick Start - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/get-started/quick-start

**Contents:**
- Quick Start
- Launch your first agent
  - Prerequisites
  - Step 1: Create a new agents project
  - Step 2: Run the setup script
  - Step 3: Launch the dev environment
  - Step 4: Login to the Visual Builder
  - Step 5: Chat with your agent
  - Next steps
  - On this page

Get started with Inkeep Agents in <5min

Before getting started, ensure you have the following installed on your system:

You can verify by running:

Run the quickstart script on a target folder:

Navigate to the folder

Open the folder using your coding editor. To open with Cursor, you can run cursor .

Ensure Docker Desktop (or Docker daemon) is running before running the setup script.

The Visual Builder will auto-open at http://localhost:3000.

Use the credentials from your root .env file (INKEEP_AGENTS_MANAGE_UI_USERNAME and INKEEP_AGENTS_MANAGE_UI_PASSWORD) to log in when the Visual Builder opens.

Navigate to the Activities Planner agent at http://localhost:3000 and ask about fun activities at a location of your choice:

Inkeep is a platform for building Agent Chat Assistants and AI Workflows.

Push and pull your agents to and from the Visual Builder

Tell us how this can be better.

**Examples:**

Example 1 (unknown):
```unknown
node --version
pnpm --version
docker --version
```

Example 2 (elixir):
```elixir
npx @inkeep/create-agents my-agents
```

Example 3 (unknown):
```unknown
cd my-agents
```

Example 4 (unknown):
```unknown
pnpm setup-dev
```

---

## Isolated Development Environments - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/community/contributing/isolated-environments

**Contents:**
- Isolated Development Environments
- Overview
- Quick start
- Commands
- How it works
- Environment variables
- Running multiple environments
- Cleanup
  - On this page

Run multiple parallel dev environments with zero port conflicts

The default pnpm setup-dev uses fixed host ports (5432, 5433, etc.), so only one dev stack can run at a time. Isolated environments remove this limitation — each instance gets its own Docker containers, volumes, and network with dynamically assigned ports.

The default pnpm setup-dev workflow is unchanged. Isolated environments are opt-in — use them only when you need parallelism.

The <name> can be anything descriptive — a feature name, ticket ID, or branch name (e.g., feature-auth, prd-6168, billing-v2).

Each isolated environment is a separate Docker Compose project:

The backing services are the same as pnpm setup-dev: Doltgres (manage DB), Postgres (runtime DB), SpiceDB + its Postgres (authorization).

Running source <(./scripts/isolated-env.sh env <name>) exports:

These override the values in your .env file for the current shell session. Run pnpm dev in the same shell to connect to the isolated instance.

You can also set app ports manually without using isolated environments:

Each environment is fully independent — separate databases, separate data, separate ports.

down removes containers and volumes, so all data is deleted. If you just want to stop containers and keep data, use docker compose -p agents-<name> stop directly.

Each isolated environment gets its own backing services (databases, authorization) and app ports. Running source <(./scripts/isolated-env.sh env <name>) before pnpm dev ensures both the backing services and the application layer (agents-api, agents-manage-ui) use isolated ports with zero collisions.

Environment Configuration

How to configure the environment variables for the Inkeep Agent Framework

Tell us how this can be better.

**Examples:**

Example 1 (markdown):
```markdown
# 1. Create a fully provisioned isolated environment
pnpm setup-dev --isolated feature-auth

# 2. Point your shell at it
source <(./scripts/isolated-env.sh env feature-auth)

# 3. Run the app against the isolated backing services
pnpm dev

# 4. Tear down when done
./scripts/isolated-env.sh down feature-auth
```

Example 2 (sass):
```sass
# Backing service connections
INKEEP_AGENTS_MANAGE_DATABASE_URL=postgresql://appuser:password@localhost:<doltgres-port>/inkeep_agents
INKEEP_AGENTS_RUN_DATABASE_URL=postgresql://appuser:password@localhost:<postgres-port>/inkeep_agents
SPICEDB_ENDPOINT=localhost:<spicedb-grpc-port>

# App ports (so parallel pnpm dev sessions don't collide)
AGENTS_API_PORT=<random-port>
MANAGE_UI_PORT=<random-port>

# API URL overrides (so manage-ui reaches the correct agents-api)
INKEEP_AGENTS_API_URL=http://localhost:<agents-api-port>
PUBLIC_INKEEP_AGENTS_API_URL=http://localhost:<agents-api-port>
NEXT_PUBLIC_INKEEP_AGENTS_API_URL=http://localhost:<agents-api-port>
```

Example 3 (sass):
```sass
AGENTS_API_PORT=4002 MANAGE_UI_PORT=4000 pnpm dev
```

Example 4 (markdown):
```markdown
# Start two environments
./scripts/isolated-env.sh setup feature-auth
./scripts/isolated-env.sh setup feature-billing

# Check what's running
./scripts/isolated-env.sh status

# Work on one
source <(./scripts/isolated-env.sh env feature-auth)
pnpm dev

# Switch to the other (in a new terminal)
source <(./scripts/isolated-env.sh env feature-billing)
pnpm dev
```

---

## Lindy vs Inkeep - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/comparisons/lindy

**Contents:**
- Lindy vs Inkeep
- Overview
  - Building Agents
  - Developer Platform
  - Unified AI Search & RAG
  - Interact with your AI Agents in...
  - Building Agent UIs
  - AI Agents for...
  - Insights & Analytics
  - Authentication and Authorization

Compare Lindy with Inkeep

Inkeep is a developer-first platform with a TypeScript SDK, 2-way code-UI sync, and graph-based multi-agent orchestration for building sophisticated AI systems, while Lindy is a no-code workflow automation tool designed for business users who prefer visual-only configuration.

Compare OpenAI AgentKit with Inkeep

Learn about Inkeep's pricing plans and features

Tell us how this can be better.

---

## Contribute to Inkeep Open Source project - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/community/contributing/overview

**Contents:**
- Contribute to Inkeep Open Source project
- Launch the Visual Builder
  - Prerequisites
  - Step 1: Clone the repository
  - Step 2: Run the setup script
  - Step 3: Run the agent framework
  - Step 4: Start building!
- Push your project
  - Step 1: Download the Inkeep CLI
  - Step 2: Push the project

How to contribute to the Inkeep Agent Framework

Thank you for your interest in contributing to the Agent Framework! This document provides guidelines and information for contributors.

Before getting started, ensure you have the following installed on your system:

Ensure Docker Desktop (or Docker daemon) is running, then run:

Safe to re-run at any time. Each step is additive — it won't drop tables, delete projects, or reset credentials. Migrations apply only what's new, and existing data is preserved. If Docker containers are already running, setup skips startup and proceeds to migrations.

If another Docker Compose project is using the required ports, setup tells you exactly which project is blocking and the command to stop it.

Need to run multiple dev environments in parallel (e.g., working on two features, or running AI agent sessions side-by-side)? See Isolated Environments.

Add API keys for the AI providers you want to use in the root .env or ~/.inkeep/config. ANTHROPIC_API_KEY is required.

Open http://localhost:3000 in the browser — you'll be signed in automatically. Start building agents right away.

A key advantage of the Inkeep agent framework is its seamless code-to-visual workflow: define your agents programmatically, push them to the Visual Builder, and continue developing with the intuitive drag-and-drop interface.

Follow the steps below to push your project using the Inkeep CLI.

The CLI reads tenantId and API URLs from the nearest inkeep.config.ts (it searches parent directories). The cookbook templates default to tenantId: 'default' and agentsApi.url: 'http://localhost:3002'. Update agents-cookbook/template-projects/inkeep.config.ts if needed.

Set up all optional local services — Nango (credential store), SigNoz (traces), OTEL Collector, and Jaeger — with one command:

This clones agents-optional-local-dev into .optional-services/, starts services via Docker Compose, and writes the required env vars to your .env. Restart pnpm dev to pick up the new variables.

Use pnpm optional:status to check service health, pnpm optional:stop to stop optional services, or pnpm optional:reset to start fresh.

The repo includes a conductor.json that automatically configures Claude Code workspaces with the correct permissions and skills. No manual setup needed.

This project uses Husky for Git hooks to maintain code quality. The hooks are automatically installed when you run pnpm install.

The pre-commit hook runs pnpm lint-staged, which:

The pre-push hook runs pnpm format and validates changeset package names before pushing. If a changeset references an invalid workspace package, the push will fail with an error listing valid package names.

While we recommend running all checks, there are legitimate cases where you might need to bypass hooks:

Note: Use these bypass mechanisms sparingly. They're intended for:

When developing the CLI, you can run the local version directly without global installation:

During development, you may need to test both the local development version and the published npm package:

For more CLI setup options, see the CLI docs: https://docs.inkeep.com/guides/cli/overview

We recommend conventional commit format (not enforced by tooling):

Our CI pipeline runs on all pull requests and includes:

These checks must pass before a PR can be merged. Pre-commit uses lint-staged, pre-push runs pnpm format and changeset validation, and CI is the source of truth.

PRs that touch migration files in packages/agents-core/drizzle/manage/ or packages/agents-core/drizzle/runtime/ are automatically validated by a CI guard (scripts/check-migration-lineage.mjs). The check is skipped for PRs that don't modify these directories.

The script verifies that migrations are append-only and immutable, following the lineage from main:

If the check fails with a "rebase and regenerate" error, your branch has stale migrations that conflict with newer ones on main. To fix this, rebase your branch on main and regenerate your migrations with the appropriate pnpm db:generate command.

When you change the manage-schema, you should verify that the schema change can be merged from the main schema branch into existing project branches containing real data. Doltgres is still in beta and there may be discrepancies between valid postgres and doltgres behavior. These discrepancies may cause migrations to fail when merged into project branches.

Data backfills will not be applied when merging schema changes into project branches. If your migration requires a data backfill, run it manually after merging schema changes:

Many of our best coding practices for AI assistants live in AGENTS.md. We render it below for reference.

This file provides guidance for AI coding agents (Claude Code, Cursor, Codex, Amp, etc.) when working with code in this repository.

Iteration: Fresh regression: cd <pkg> && pnpm test --run <file>; then touched lint/typecheck/guards, widened for inputs/consumers.

Pre-push: pnpm format. Optional: pnpm check (in agents-private, pnpm check:agents from its root, since public/agents' precheck/prebuild hooks and a real install there move links into a second store) runs lint, typecheck, tests, format:check, knip and the repo's guards; agents-private CI runs its parts.

Create a changeset for any user-facing change to a published package:

Valid package names: agents-cli, agents-core, agents-api, agents-manage-ui, agents-work-apps, agents-sdk, create-agents, ai-sdk-provider

Target audience: Developers consuming these packages

When to create a changeset (MANDATORY):

When NOT to create a changeset:

Multiple changes in one PR: If a PR affects multiple packages independently, create separate changesets for each with specific messages. If changes are tightly coupled (e.g., updating types in core that SDK depends on), use a single changeset listing both packages.

The root typescript devDependency in public/agents/package.json is a peer anchor, not a stray pin: it keeps tsdown, rolldown-plugin-dts and knip resolved against TypeScript 6 while another importer in the shared root lockfile declares typescript@^7. Do not remove it, and do not bump it past 6.x, without re-running pnpm build for every public/agents package first.

All TypeScript packages under public/agents/packages/ and public/agents/agents-*/ should extend the shared strict baseline at public/agents/tsconfig.base.json. This file defines the monorepo's strictness contract: strict, noUncheckedIndexedAccess, exactOptionalPropertyTypes, noImplicitOverride, noFallthroughCasesInSwitch, forceConsistentCasingInFileNames, skipLibCheck, esModuleInterop, resolveJsonModule, isolatedModules, moduleDetection: force, and verbatimModuleSyntax: false.

When creating a new workspace package under public/agents/packages/<name>/, the tsconfig.json should extend the base:

Only override target/module/output settings in the per-package config. Strictness flags live in the base; do not duplicate them.

A package that legitimately cannot extend the base (e.g., needs older target, needs non-strict mode for generated code) should:

Unexplained opt-outs drift the monorepo's strictness contract and should be caught in review.

The base lives at public/agents/tsconfig.base.json. After Copybara mirrors the subtree to inkeep/agents, the base lives at /tsconfig.base.json on the public repo (prefix stripped). The relative extends path from packages/<name>/tsconfig.json is ../../tsconfig.base.json in both repos, portable across the mirror boundary.

Browser-based visual tests (screenshot comparisons) run Chromium inside a Docker container so screenshots are identical across macOS and Linux CI.

Deliberately not chained into the default test script (that made pnpm test fail with an opaque ws://127.0.0.1:3100 code=1006 on any machine without the server). CI runs them as an explicit step in Agents Extended Validation.

⚠️ NEVER delete pnpm-lock.yaml and regenerate it from scratch. Deleting the lockfile and running pnpm install allows the resolver to pick different (often lower) versions of transitive dependencies, causing silent downgrades that break tests or change runtime behavior.

Correct approach when the lockfile has merge conflicts or needs updating:

Start from the base branch's lockfile — check out the pnpm-lock.yaml from the target base (usually main):

Re-install to layer your branch's dependency changes on top (in agents-private, pnpm install:all from its root, after step 1 for each conflicted lockfile):

This preserves all existing resolutions from main and only adds/updates what your branch's package.json changes require.

Commit the updated lockfile with your other changes.

Why this matters: The lockfile pins exact transitive dependency versions. Regenerating from scratch lets the resolver freely re-resolve the entire tree, which can silently pick different versions even when package.json ranges haven't changed. Starting from the base lockfile ensures only your intentional changes affect resolution.

When changing dependencies: regenerate and commit every affected lockfile. In agents-private, run pnpm install:all from its root, where LOCKFILE_ROOTS in scripts/check-monorepo-traps.mjs defines the enforced install boundaries.

This is the Inkeep Agent Framework - a multi-agent AI system with A2A (Agent-to-Agent) communication capabilities. The system provides OpenAI Chat Completions compatible API while supporting sophisticated agent orchestration.

The agents-api package contains all API domains under a single service:

The following routes use PUT as the canonical method because they perform full-resource replacement or upsert semantics, not partial updates:

These routes still register a PATCH method for backward compatibility (with x-speakeasy-ignore: true).

All update routes register both PUT and PATCH methods using openapiRegisterPutPatchRoutesForLegacy() from agents-api/src/utils/openapiDualRoute.ts. The legacy method gets x-speakeasy-ignore: true and a suffixed operationId (e.g., update-agent-put). To find all legacy routes, search for usages of this helper. When legacy methods are no longer needed, remove the helper calls and replace with single app.openapi() registrations.

All existing PUT update routes remain functional — they share the same handler as PATCH. New update routes must use PATCH as canonical (or PUT for upsert/set-replace semantics). Do not remove existing PUT routes without a deprecation period.

Use the shared mock factories instead of defining inline mocks. This prevents drift when the real API changes.

Do NOT define inline logger mocks ({ info: vi.fn(), warn: vi.fn(), ... }) — use the factory.

Required environment variables in .env files:

Run multiple full dev stacks simultaneously with zero port conflicts. Each isolated environment gets its own Docker containers, volumes, and network with dynamically assigned ports.

When to use: Running multiple features in parallel, AI coding agents executing concurrently, or testing against an isolated database without affecting the default environment.

This repo is a product with multiple user-facing surfaces and shared contracts. A “small” change in one place can have real side effects elsewhere.

Rule: Do NOT implement additional work beyond what the user requested. If you identify likely cross-surface impacts, flag them and ask the user to get full clarity and ensure high degree of product-level thinking. You can flag prior to starting new work/tasks, but also if you identify ambiguities or additional things to consider mid-execution.

If the request is NOT backed by a PRD, a well-specced artifact, or clearly scoped small task, pause and ask targeted, highly relevant questions when the blast radius is unclear. When applicable, suggest user make a PRD; offer to help with the spec skill if it is installed.

Your goal is to AVOID:

Your responsibility is to think through the work that is being done from all dimensions and considerations.

This product has 50+ customer-facing and 100+ internal tooling/devops surfaces with complex dependency chains. When planning or implementing any feature or change, load the relevant surface area skill to map the blast radius and plan "to-dos" of all areas that need to be addressed before writing a line of code:

Tip: Start with audience-impact to quickly identify who cares and how changes propagate, then load the catalog skills for detailed surface tracing. Both catalog skills include dependency graphs, breaking change impact matrices, and transitive chain tracing.

ALL new work MUST include these three components - NO EXCEPTIONS:

✅ 2. Agent Builder UI Components

Fix a red in a test you added or edited, or naming a file you changed, at its cause; note any other in one line without chasing it, and make no green claim. Before marking any feature complete, verify:

The user may override this workflow (e.g., work directly on main).

Git worktrees allow you to work on multiple features simultaneously without switching branches in your main working directory. This is especially useful when you need to quickly switch context between different Linear tickets or have multiple features in progress.

Cut each worktree from a fresh base (in agents-private, run every worktree command below from its root):

Important Conventions:

✅ Use worktrees when:

Reference: git-worktree documentation

Any code in agents-api or agents-work-apps that makes internal A2A calls or self-referencing API calls (i.e. calling another route on the same service) MUST use getInProcessFetch() from @inkeep/agents-core instead of the global fetch.

All API routes in agents-api must use createProtectedRoute() from @inkeep/agents-core/middleware instead of the plain createRoute() from @hono/zod-openapi. This is enforced by Biome lint rules and ensures every route has explicit authorization metadata (x-authz) in the OpenAPI spec.

// Also update agents-docs/source.config.ts to include the new page in navigation

Replace service with the current service name (e.g., inkeep-agents-api in prod, inkeep-agents-api-test in tests). If using SigNoz/OTLP, point to that host/port instead of localhost.

Debugging Agent Transfers:

Debugging Tool Calls:

Debugging Task Delegation:

Debugging Performance Issues:

CLAUDE.md is a symlink to AGENTS.md: edit AGENTS.md. AGENTS.md may load in part or not at all.

Non-obvious caveats for Cursor Cloud agents bringing this subtree up in an ephemeral Linux VM (standard commands are documented above):

Human-only workflows (process, PR etiquette, roadmap context) belong in this guide and the broader contributing docs above.

If you have questions about contributing, please:

Thank you for contributing!

License for the Inkeep Agent Framework

How the Inkeep Agent Framework ensures data integrity with project constraints

Tell us how this can be better.

**Examples:**

Example 1 (unknown):
```unknown
git clone https://github.com/inkeep/agents.git
cd agents
```

Example 2 (unknown):
```unknown
pnpm setup-dev
```

Example 3 (sass):
```sass
ANTHROPIC_API_KEY=sk-ant-xyz789
OPENAI_API_KEY=sk-xxx # optional
GOOGLE_GENERATIVE_AI_API_KEY=sk-xxx # optional
```

Example 4 (elixir):
```elixir
pnpm add -g @inkeep/agents-cli
```

---

## Connect Your Data with Ref - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/connect-your-data/ref

**Contents:**
- Connect Your Data with Ref
- Supported data sources
- Getting started
  - Step 1: Create an account
  - Step 2: Upload your resources
  - Step 3: Get your MCP server URL
  - Step 4: Register the MCP server
  - Step 5: Use the Ref MCP server in your agent
  - On this page

Learn how to connect your documentation and code repositories to your agents using Ref

Ref provides a simple and focused solution for connecting your documentation and code repositories to your agents. With support for GitHub repositories, PDFs, and Markdown files, Ref is perfect for teams that need straightforward documentation access.

With Ref you can connect:

Register the Ref MCP server as a tool in your agent configuration. Replace <your-api-key> with your actual API key from Step 3.

Using TypeScript SDK:

Using Visual Builder:

Once your have registered your MCP server as a tool and connected it to your agent, it's now ready to use! Click on the "Try it" button to test it out.

Learn how to connect your code repositories and documentation to your agents using Context7

Connect websites to your agents using Firecrawl

Tell us how this can be better.

**Examples:**

Example 1 (sass):
```sass
import { mcpTool, subAgent } from "@inkeep/agents-sdk";

const refTool = mcpTool({
  id: "ref-documentation",
  name: "ref_search",
  description: "Search uploaded documentation and code repositories",
  serverUrl: "https://api.ref.tools/mcp?apiKey=ref-<your-api-key>",
});

const docAgent = subAgent({
  id: "doc-agent",
  name: "Documentation Assistant",
  description: "Answers questions using uploaded documentation",
  prompt: `You are a documentation assistant with access to company documentation`,
  canUse: () => [refTool],
});
```

---

## The No-Code + Code Agent Builder - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/overview

**Contents:**
- The No-Code + Code Agent Builder
- Two ways to build
  - No-Code Visual Builder
  - TypeScript Agents SDK
- Use cases
- Platform Overview
- Our Approach
- Next Steps
- Follow the <1min Quick Start
- Conceptual Overview

Inkeep is a platform for building Agent Chat Assistants and AI Workflows.

With Inkeep, you can build AI Agents with a No-Code Visual Builder and Developer SDK. Agents can be edited in either with full 2-way sync, so technical and non-technical teams can create and manage their Agents in one platform.

A drag-and-drop canvas so any team can create and own the Agents they care about.

A code-first framework so engineering teams can build with the tools they expect.

The Visual Builder and TypeScript SDK are fully interoperable: your technical and non-technical teams can edit and manage Agents in either format and switch or collaborate with others at any time.

Inkeep Agents can operate as Agentic AI Chat Assistants, for example:

Agents can also be used for Agentic Workflow Automation like:

Inkeep Open Source includes:

Interested in a managed platform? Sign up for a demo for Inkeep Enterprise and learn more here. You can view a full feature comparison here.

Inkeep is designed to be extensible and open: you can use the LLM provider of your choice, use Agents via open protocols, and with a fair-code license and great devex, easily deploy and self-host Agents in your own infra.

Join our community to get support, stay up to date, and share feedback.

Get started with the Visual Builder and TypeScript SDK in under 5 minutes.

Learn about the key concepts of building Agents with Inkeep.

Get started with Inkeep Agents in <5min

Tell us how this can be better.

**Examples:**

Example 1 (javascript):
```javascript
import { agent, subAgent } from "@inkeep/agents-sdk";
import { consoleMcp } from "./mcp";

const helloAgent = subAgent({
  id: "hello-agent",
  name: "Hello Agent",
  description: "Says hello",
  canUse: () => [consoleMcp],
  prompt: `Reply to the user and console log "hello world" with fun variations like h3llo world`,
});

export const basicAgent = agent({
  id: "basic-agent",
  name: "Basic Agent",
  description: "A basic agent",
  defaultSubAgent: helloAgent,
  subAgents: () => [helloAgent],
});
```

---

## Connect Your Data with Inkeep Unified Search - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/connect-your-data/inkeep

**Contents:**
- Connect Your Data with Inkeep Unified Search
- Supported data sources
- Getting started
  - Step 1: Set up your Inkeep account
  - Step 2: Connect your data sources
  - Step 3: Get your MCP server URL
  - Step 4: Register the MCP server
  - Step 5: Use the Inkeep MCP server in your agent
  - On this page

Learn how to connect your data sources to your agents using Inkeep Unified Search's comprehensive knowledge base platform

Inkeep Unified Search is part of Inkeep's Enterprise offering. Connect 25+ data sources to create a unified knowledge base that your agents can access.

Inkeep Unified Search supports a wide variety of data sources:

If you don't have an Inkeep account yet, you can:

Once your data sources are connected and indexed, obtain your Inkeep MCP server URL from your Inkeep dashboard:

Register your Inkeep MCP server as a tool in your agent configuration:

Using TypeScript SDK:

Using Visual Builder:

Once your have registered your MCP server as a tool and connected it to your agent, it's now ready to use! Click on the "Try it" button to test it out.

Learn how to connect your data sources to your agents through MCP servers

Connect documents to your agents using Pinecone Assistant's MCP server

Tell us how this can be better.

**Examples:**

Example 1 (javascript):
```javascript
import { mcpTool, subAgent } from "@inkeep/agents-sdk";

const inkeepTool = mcpTool({
  id: "inkeep-knowledge-base",
  name: "knowledge_base",
  description: "Search the company knowledge base powered by Inkeep",
  serverUrl: "YOUR_INKEEP_MCP_SERVER_URL", // From your Inkeep dashboard
});

const supportAgent = subAgent({
  id: "support-agent",
  name: "Support Agent",
  description: "Answers questions using the company knowledge base",
  prompt: `You are a support agent with access to the company knowledge base.`,
  canUse: () => [inkeepTool],
});
```

---
