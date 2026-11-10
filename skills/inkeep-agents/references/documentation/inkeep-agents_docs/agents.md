# Inkeep-Agents_Docs - Agents

**Pages:** 20

---

## Build a meeting prep agent without code - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/guides/agents/meeting-prep-assistant

**Contents:**
- Build a meeting prep agent without code
- Overview
  - Video walkthrough available
- Prerequisites
- Creating the Sub Agents
  - Step 1: Create the meeting prep agent
  - Step 2: Configure the meeting prep coordinator sub agent
  - Step 3: Create the meeting finder sub agent
  - Step 4: Create the company research sub agent
- Adding MCP tools

Step-by-step tutorial to build a meeting prep agent using the Visual Builder with Google Calendar and web search tools.

In this tutorial, you'll build a meeting prep assistant agent using the Inkeep Visual Builder. When you ask "Can you help me prep for my upcoming Acme meeting?", the agent will:

Follow along with our visual guide to see each step in action.

Go to the Agents tab in the left sidebar, then select Create Agent.

Provide the following details:

The default sub agent will serve as the coordinator that orchestrates the workflow.

Click on the Default Sub Agent to configure it.

Provide the following details:

Drag and drop a Sub Agent block from the top left toolbar onto the canvas.

Configure the sub agent with:

Connect the Meeting Finder sub agent to the Meeting Prep Coordinator.

Click on the connector and change the relationship type from Transfer to Delegate.

Drag and drop another Sub Agent block onto the canvas.

Configure the sub agent with:

Connect the Company Research sub agent to the Meeting Prep Coordinator using the connector.

Click on the connector and change the relationship type from Transfer to Delegate.

Click Save Changes in the top right corner to save your agent configuration.

To enable your agent to access Google Calendar and perform web research, you'll need to add MCP tools. We'll use Zapier MCP, which provides pre-built MCP servers for many popular services.

Learn more on how to create MCP servers in our MCP Servers guide.

Create a Zapier MCP account here.

Click + New MCP Server in the top right corner. When prompted to select an MCP Client, choose Other.

Click + Add Tool and select Google Calendar. Then select the Find Events tool, click Connect, and complete the OAuth flow to authorize access.

Navigate to the Connect tab and copy the Server URL. You'll need this to register the tool in the Visual Builder.

In the Visual Builder, go to the MCP Servers tab in the left sidebar, then select + New MCP Server.

Select Custom Server and enter the Server URL you copied from Zapier. Give it a descriptive name (e.g., "Google Calendar"), and for Credential, select No Authentication.

Click Save to register the Google Calendar server.

Repeat the same process for the Exa MCP Server. The MCP Server URL is https://mcp.exa.ai/mcp.

Navigate to the agent canvas: Agents > Meeting prep agent.

Drag and drop an MCP block from the top left toolbar onto the canvas.

Select the Google Calendar MCP tool and connect it to the Meeting Finder sub agent.

Add another MCP block, select the Exa MCP tool, and connect it to the Company Research sub agent.

Click Save Changes in the top right corner to save your configuration.

Ensure you have at least one upcoming meeting with an external company on your Google Calendar. If you don't have one, create a test meeting.

Click Try it in the top right corner to open the chat interface.

Test your agent by asking: "Can you help me prep for my upcoming [company name] meeting?"

When working correctly, the agent will:

Deploy an AI copilot into your Zendesk ticket sidebar that grounds its drafts in your team's internal context — prior resolved threads the customer-facing bot never saw — so agents get answers, sources, and next steps without leaving the ticket.

Build a logged-in, account-aware copilot that diagnoses live account, integration, and usage state and resolves issues in-product — without escalating to a human.

Tell us how this can be better.

**Examples:**

Example 1 (lua):
```lua
Orchestrate specialized agents to prepare for a meeting.

<workflow>
1. Greet & Find Meeting:
   - Greet user, understand which company
   - Announce: "Finding meeting with [Company]..."
   - Delegate to Meeting Finder
   - VERBOSE: Summarize meeting found (date, time, participants)

2. Company Research:
   - Announce: "Researching [Company]..."
   - Delegate to Company research
   - VERBOSE: Summarize company insights (what they do, products)

3. Create Prep:
   - Announce: "Creating prep summary..."
   - Encouraging closing message
</workflow>

<rules>
- Always delegate in order: Meeting Finder → Company Research
- BE VERBOSE after each delegation returns
- Show progress and insights clearly
- Proceed automatically
</rules>
```

Example 2 (elixir):
```elixir
Find the external meeting to prep for using Google Calendar.

<workflow>
1. Search upcoming meetings for target company
2. Filter: ONLY meetings with external email domain (e.g., @nvidia.com)
3. Skip internal-only meetings entirely
4. Present first external meeting:
   - Date/time, duration
   - Title and link
   - External attendees (name + email)
   - Internal team (list all @inkeep.com emails)
5. Return to coordinator
</workflow>

<rules>
- Never mention internal meetings
- Automatically use first external meeting found
- List all internal participant emails explicitly
- Return to coordinator after finding meeting
- Do not pass in a start_time parameter
</rules>
```

Example 3 (typescript):
```typescript
Research the company to understand what they do.

<workflow>
1. Exa: Scrape company website
   - Show key info found
2. Analyze:
   - What does company do?
   - Key products/services
   - Market position
3. Present summary with talking points
4. Return to coordinator
</workflow>

<rules>
- Brief explanations under 200 chars
- Show findings immediately
- Proceed automatically
</rules>
```

---

## Get started with the Visual Agent Builder - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/visual-builder/sub-agents

**Contents:**
- Get started with the Visual Agent Builder
- Overview
- Creating your first Agent
  - Agent Prompt
- Default Sub Agent
- Trying the Agent
- Adding tools
- Add other Sub Agents
  - Sub Agent configuration
- Adding data components

Create Agents with a No-Code Visual Agent Builder

An Agent is the top-level entity you can chat and interact with in the Visual Builder.

An Agent is made up of one or more Sub Agents. The Sub Agents that make up an Agent can delegate or transfer control to each other, share context, or use tools to respond to a user or complete a task.

You can use the Visual Builder to add Sub Agents to an Agent, give Sub Agents tools, and connect Sub Agents with each other to establish their relationships.

Go to the Agents tab in the left sidebar. Then select "Create Agent".

Provide a name, prompt, and description.

You can configure an Agent-level prompt that gets automatically added to all Sub Agents that make up the Agent. This provides consistent context and behavior guidelines so Sub Agents respond and act as one cohesive unit.

Once an Agent is created, you can always edit the prompt by:

When you create an Agent, it'll have a Default Sub Agent by default. This is the Sub Agent that first receives and processes a user message.

Configure its name and prompt, then click Save.

To try the Agent, ensure it has at least one Sub Agent, then save the Agent by clicking the "Save changes" button in the top right corner.

Then, click the Try it button in the top right corner and type into the chat input.

Tools are used to perform actions in the Agent. You can register MCP tools in the Visual Builder. See the MCP Servers page to get started.

Once you have an MCP Server registered, you can add it to a Sub Agent by dragging and dropping the MCP block from the top left onto the Canvas.

To connect the tool to the Sub Agent, click the "+" icon at the top of the MCP block, then drag the connector to the Sub Agent. A line will appear, indicating that the tool is connected to the Sub Agent.

To delete a tool, click on the tool box and then hit the backspace key.

When you have tasks that get more complex, you'll likely want to create more Sub Agents that are specialized in narrow tasks and have prompts and tools focused on their roles.

To create more Sub Agents:

When connected, a line will appear showing the relationship between the Sub Agents.

The following are configurable options for the Sub Agent through the Visual Builder:

Data components are used to render rich UI components directly in the chat. Before adding a data component, you will first need to create a data component. See the Data Components page for more information.

Then, add the data component to your Sub Agent by clicking the Sub Agent box and then selecting which data components you want to add.

To create artifact components, see the Artifact Components page for details.

Add the artifact component to your Sub Agent by clicking on the Sub Agent box in the Agent, then selecting which artifact components you want to add.

When a Sub Agent uses a tool, it can choose to save the result as an artifact according to the defined schema. Preview fields (marked inPreview: true in the schema) are available immediately in the agent's context and streamed to clients. Non-preview fields are persisted in storage and can be retrieved on demand. Agents can also pass artifacts directly to tools, which receive the complete data including all non-preview fields. See Artifact Components for more details.

Team agents are agents that are part of the same project. You can add team agents to your Agent by dragging and dropping the Team Agent block from the top left onto the Canvas. You can configure custom headers to send on every request to the team agent by clicking on the team agent box and then populating the Headers field with your custom headers.

External agents let you integrate agents built outside of Inkeep (using other frameworks or platforms) into your Agent. You can add an external agent to your Agent by dragging and dropping the External Agent block from the top left onto the Canvas.

You can configure custom headers to send on every request to the external agent by clicking on the external agent box and then populating the Headers field with your custom headers.

Configure Runtime Limits

Customize execution limits, timeouts, and constraints for your deployment

Choose between classic and durable execution modes for your agents.

Tell us how this can be better.

---

## Widget Changelog - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/talk-to-your-agents/changelog

**Contents:**
- Widget Changelog
- 0.15.19
  - Patch Changes
- 0.15.18
  - Patch Changes
- 0.15.17
  - Patch Changes
  - On this page

Changelog for the @inkeep/agents-ui-cloud package

Content Security Policy

Configure CSP for Inkeep's UI components.

A custom AI SDK provider that lets you use Inkeep agents with generateText, streamText, and other AI SDK functions.

Tell us how this can be better.

---

## Slack MCP Tool - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/talk-to-your-agents/slack/mcp-tool

**Contents:**
- Slack MCP Tool
- Create a Slack MCP tool
  - Open MCP Servers
  - Select Slack from Work Apps
  - Configure channel access
  - Create
- Available tools
  - post-channel-message
  - post-direct-message
  - get-slack-user

Give your agents the ability to post messages to Slack channels and DMs via the MCP protocol.

The Slack MCP tool lets your agents post messages to Slack — channels, threads, and DMs. Unlike the Slack Work App (where users talk to agents in Slack), the MCP tool gives agents the ability to act on Slack as part of their workflows.

The Slack MCP tool requires an installed Slack workspace. Follow the installation guide first if you haven't set up the Slack app yet.

Navigate to MCP Servers in the sidebar and click New MCP server.

Switch to the Work Apps tab and select the Slack card. If your organization has a Slack workspace installed, you'll see the channel configuration dialog.

If no workspace is installed, the dialog prompts you to install the Slack app first.

Choose how the agent can interact with Slack:

Channel access and DM access are independent — you can allow all channels but disable DMs, or allow selected channels and also enable DMs.

Click Create to create the Slack MCP tool. It appears in your MCP servers list and can be added to any agent.

The Slack MCP server exposes the following tools:

Posts a message to a Slack channel.

Sends a direct message to a Slack user.

The agent knows how to send a DM to the user asking the question out of the box — no additional prompting or configuration is required.

Looks up a Slack user by their user ID, email address, or name. Provide exactly one parameter:

When searching by name, the agent should clarify with the user if multiple results are returned.

To change channel access after creation:

The MCP tool enforces access rules at runtime:

Access configuration is per-tool — different agents can have different Slack MCP tools with different channel restrictions.

How to talk to Inkeep agents in Slack — commands, mentions, and tips.

Learn how to diagnose and resolve issues when something breaks in your Inkeep agent system.

Tell us how this can be better.

---

## Logging events with the Events API - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/talk-to-your-agents/events

**Contents:**
- Logging events with the Events API
- Overview
- Endpoint
- Authentication
- Request body
- Responses
- Idempotency
- User attribution
- Free-form events
- Forward-anchored events

Log application-level events for the agents framework using the existing run-API auth.

The Events API is a write-only ingest endpoint for application-level events emitted from any context that already authenticates against the run API: browser widgets, server-side agent code, or external SDK consumers. Events are persisted to the run-database, scoped per project, and serve as the source of truth for downstream analytics and outbound webhook delivery.

Choose the authentication method:

See Authentication → Run API for more details.

Both 200 and 201 responses share the shape { "data": { /* persisted event */ } }. The persisted row includes a server-controlled serverMetadata object alongside the caller-supplied metadata. serverMetadata.authMethod reflects the authentication strategy that produced the request; this field cannot be set or overridden by the caller (the request schema does not accept serverMetadata).

Pass a stable id value on retries. If a row with that (tenantId, projectId, id) triple already exists, the server returns 200 with the original row — the original createdAt is preserved and the event is not modified. This makes browser-side fire-and-forget calls safe to retry.

userProperties is a free-form JSON object — the framework accepts arbitrary keys with arbitrary values and stores the object as-is. The fields below are recommended conventions for cross-product consistency, not server-validated shapes:

The server does not validate field types within userProperties — { userId: 123 } and { userId: "u_abc" } are both accepted. Customers should pick a convention and stick to it within their own data.

userProperties is caller-trusted analytics attribution metadata. Caller-supplied values always win on every authentication path — the server never overrides them. When userProperties is absent from the request body, the server resolves it from the message anchor (when messageId is supplied), then the conversation anchor (when conversationId is supplied or derivable from the message), and finally falls back to null. The server does not merge individual fields — userProperties is treated as an opaque object — and does not auto-fill from the authenticated execution context. For server-verified user identity, read conversation.userId (the cryptographically verified sub claim from JWT auth, populated on every chat turn).

The chat-handler write path (the indirect source of conversation/message anchors) drops widget-synthesized auto-mint identities (identificationType of 'ANONYMOUS' or 'COOKIED') and strips the identificationType marker from anything else. This keeps placeholder anonymous identities from polluting webhook payloads. Direct POST /run/v1/events callers receive the same defense — auto-mint shapes in the request body are filtered the same way before persistence.

For server-authoritative auth audit (which authentication strategy was used), see serverMetadata.authMethod — that field is server-controlled and immutable to callers.

PII content placed in userProperties is the caller's responsibility — the framework does not redact or allowlist field contents.

The schema accepts events with no anchor (conversationId, messageId, and agentId are all independently optional). Receivers downstream of the events table define their own policy for non-anchored events.

conversationId and messageId are not foreign keys — events may reference an anchor ID for a row that does not yet exist in the conversations or messages table. This is the expected pattern for clients that mint a conversationId client-side and fire user_message_submitted before the chat handler creates the corresponding conversation row.

Webhook consumers that fetch the conversation on receipt may briefly observe a 404. Treat the event payload as the source of truth and retry the conversation fetch if needed.

Conversation deletion still removes any matching events — the framework cleans events up at the application layer when a conversation is deleted. Events anchored only by messageId (with conversationId left null) are reclaimed at project deletion rather than at conversation deletion. Events whose conversationId is never created (e.g. typos, never-completed flows) also persist until project deletion.

This API does not validate that conversationId or messageId reference existing rows. Events with unresolvable anchors are accepted with 201. To catch typos in anchor IDs, validate IDs client-side.

The framework does not ship an event-name registry. The type field is a free-form string and consumers define their own vocabulary. Two precedents to follow if you're authoring a consumer:

Webhook destinations subscribe to event families (conversation events, feedback events, event.created), not to specific type values. Receivers filter on type after delivery — this keeps the framework decoupled from any particular event vocabulary.

After a successful insert, the route dispatches the persisted event to every webhook destination subscribed to the event.created family for the project (and matching the resolved agent scope). Delivery is fire-and-forget — the existing webhook delivery infrastructure handles retries, signing, and SSRF protection. Subscribe a destination by checking the Event Created option on the webhook destination form.

Webhook dispatch requires both an agent scope (agentId either supplied in the request body or inferred from the API key's authenticated context) and a resolved ref on the request. Free-form events without an agentId — or events authenticated without a resolvable agent ref — are still persisted to the events table, but no webhook fires for them. Operators can confirm via the 'Skipping event.created webhook dispatch' debug log on the run-events logger when this code path is taken.

Learn about details of the Vercel AI SDK data stream protocol that powers the `/run/api/chat` API endpoint.

Invoke your Agents automatically via webhooks or scheduled executions

Tell us how this can be better.

**Examples:**

Example 1 (json):
```json
{
  "id": "optional-client-supplied-id",
  "type": "user_message_submitted",
  "agentId": "support-agent",
  "conversationId": "conv-abc",
  "messageId": "msg-xyz",
  "properties": { "source": "chat-widget" },
  "userProperties": { "userId": "u_123", "plan": "pro" },
  "metadata": { "appVersion": "1.4.2" }
}
```

---

## Install and Set Up the Slack App - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/talk-to-your-agents/slack/installation

**Contents:**
- Install and Set Up the Slack App
- Prerequisites
- Install the app
  - Open the Work Apps dashboard
  - Install to Slack
  - Verify the installation
- Configure agents
- Onboard your team
- Configuration
- Using the Slack App

Admin guide — install the Inkeep Slack app, configure agents, and onboard your team.

This guide is for workspace administrators. It walks you through installing the Inkeep Slack app, configuring which agents respond, and getting your team onboarded.

The Slack integration is only available for Inkeep Enterprise.

Navigate to your Inkeep dashboard and select Work Apps from the sidebar. You'll see the Slack integration card.

Click Install on the Slack card. This redirects you to Slack's OAuth consent screen where you authorize the Inkeep bot to join your workspace.

The app requests 19 Slack scopes for reading messages, posting replies, and managing conversations.

After authorizing, you're redirected back to the dashboard. The Slack card now shows your workspace as Installed with the workspace name.

Verify the bot is active by typing /inkeep help in any Slack channel.

Only one Slack workspace can be connected to your Inkeep tenant. To switch workspaces, uninstall the existing one first.

After installing, set up which agent responds to your team's requests. See the full Configuration guide for details.

Channel defaults take priority over the workspace default. If you remove a channel default, that channel falls back to the workspace default agent.

Account linking happens automatically — when an unlinked user first interacts with the bot (via @Inkeep or /inkeep), they receive a prompt with a Link Account button. After clicking it and signing in to Inkeep, their original question is automatically answered. This only needs to happen once per user.

Alternatively, users can link proactively by running /inkeep link in any channel.

The link button uses a short-lived JWT token (10 minutes) for security. If it expires, the user can simply ask their question again to get a new prompt, or run /inkeep link manually.

Set up workspace defaults, channel defaults, and manage users

Share this with your team — full command and usage reference

To remove the Slack app from your workspace:

This removes the bot from your workspace, deletes all user link mappings, and cleans up channel configurations.

Connect your Inkeep agents to Slack.

Admin guide — set up workspace and channel default agents for the Slack integration.

Tell us how this can be better.

---

## Using the Slack App - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/talk-to-your-agents/slack/commands

**Contents:**
- Using the Slack App
- Before you start
- Mentioning @Inkeep
  - Thread context
- Slash command — /inkeep
  - Agent picker modal
- Message shortcuts
- Direct messages
- Which agent responds?
- Tool approvals

How to talk to Inkeep agents in Slack — commands, mentions, and tips.

This guide is for all team members using the Inkeep Slack app. You'll learn how to ask questions, understand which agent responds, and get the most out of the integration.

You need to link your Slack account to Inkeep (one-time setup). The first time you interact with the bot — via @Inkeep or any /inkeep command — you'll automatically receive a Link Account button. Click it, sign in to Inkeep, and your original question will be answered automatically.

You can also link proactively by running /inkeep link in any channel.

Run /inkeep status to confirm your account is linked.

Mention @Inkeep in any channel to ask a question. The agent responds in a thread.

The @Inkeep message itself is posted to the channel by Slack — this is standard Slack behavior and can't be suppressed.

When you use @Inkeep inside a thread, the agent automatically receives the full conversation history as context. This is useful for:

Use the /inkeep slash commands to talk to an agent or manage your Inkeep integration.

Running /inkeep with no arguments opens a modal where you can:

To continue a conversation, @Inkeep the bot in the response thread — the agent receives the full thread as context.

You can send any message to an agent using Slack's message shortcuts:

This opens a modal where you pick a project and agent, add any additional instructions (optional), then submit. The agent's response appears as a threaded reply on the target message, with the original message text as context.

You can mention @Inkeep or use /inkeep commands in your DMs for private conversations.

DMs use your workspace default agent. Channel-specific agent overrides do not apply in DMs. You must have your account linked and have access to the agent's project.

The agent that handles your request depends on how your admin configured the workspace:

Run /inkeep status to see exactly which agent is active in the current channel and whether it's a channel default or workspace default.

Some agents use tools that require your approval before they run. When this happens, you'll see an interactive message in the thread with the tool name, its inputs, and Approve / Deny buttons.

Only the person who started the conversation can approve or deny. If you're not the requester, you'll see an error if you try to click the buttons.

If you don't respond within a few minutes, the approval request expires. The message updates to show "Expired" and the agent is notified.

If you frequently use agents that require tool approvals, make sure your account is linked (/inkeep link) beforehand to avoid interruptions.

Click the Link Account button in the prompt to connect your Slack and Inkeep accounts. This is a one-time setup per user. If you don't see the button, run /inkeep link to get a new link.

Ask your workspace admin to set a workspace or channel default agent in the Inkeep dashboard at Work Apps → Slack.

The agent took too long to respond. Try again — if the issue persists, ask your admin to check that the Inkeep deployment is running and healthy.

Admin guide — set up workspace and channel default agents for the Slack integration.

Give your agents the ability to post messages to Slack channels and DMs via the MCP protocol.

Tell us how this can be better.

---

## Add External Agents to your Agent - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/typescript-sdk/external-agents

**Contents:**
- Add External Agents to your Agent
- Creating an External Agent
- External Agent Relationships
- External Agent Options
  - On this page

Learn how to configure and use external agents using the A2A protocol

External agents let you integrate agents built outside of Inkeep (using other frameworks or platforms) into your Agent. They communicate over the A2A (Agent‑to‑Agent) protocol so your Inkeep sub-agents can delegate tasks to them as if they were native. Note that Inkeep Agents are available via an A2A endpoint themselves and used from other platforms.

Learn more about A2A:

Examples platforms that expose Agents in A2A-format:

Any agent that exposes an A2A‑compatible HTTP endpoint can be integrated by providing its baseUrl plus headers/auth (static or dynamic).

Every external agent needs a unique identifier, name, description, base URL for A2A communication, and optional authentication configuration:

Agents can be configured to delegate tasks to external agents.

Configure authentication by providing a credential reference.

When delegating to an external agent, you can specify headers to include with every request to the external agent. These headers can be dynamic variables that are resolved at runtime.

Manage evaluators, test suites, and batch evaluations programmatically with the TypeScript SDK

Workspace Configuration

Learn how to configure your workspace

Tell us how this can be better.

**Examples:**

Example 1 (sql):
```sql
import { externalAgent } from "@inkeep/agents-sdk";

const technicalSupportAgent = externalAgent({
  id: "technical-support-agent",
  name: "Technical Support Team",
  description: "External technical support specialists for complex issues",
  baseUrl: "https://api.example.com/agents/technical-support", // A2A endpoint
});
```

Example 2 (javascript):
```javascript
import { subAgent, agent } from "@inkeep/agents-sdk";
import { myExternalAgent } from "./external-agents/exernal-agent-example";

// Define the customer support sub-agent with delegation capabilities
const supportSubAgent = subAgent({
  id: "support-agent",
  name: "Customer Support Sub-Agent",
  description: "Handles customer inquiries and escalates technical issues",
  prompt: `You are a customer support sub-agent that handles general customer inquiries.`,
  canDelegateTo: () => [myExternalAgent],
});

// Create the customer support agent with external agent capabilities
export const supportAgent = agent({
  id: "customer-support-agent",
  name: "Customer Support System",
  description: "Handles customer inquiries and escalates to technical teams when needed",
  defaultSubAgent: supportSubAgent,
  subAgents: () => [supportSubAgent],
});
```

Example 3 (sass):
```sass
const myExternalAgent = externalAgent({
  // Required
  id: "external-support-agent",
  name: "External Support Agent", // Human-readable agent name
  description: "External AI agent for specialized support", // Agent's purpose
  baseUrl: "https://api.example.com/agents/support", // A2A endpoint URL
  // Optional - Credential Reference
  credentialReference: myCredentialReference,
});
```

Example 4 (javascript):
```javascript
const supportSubAgent = subAgent({
  id: "support-agent",
  name: "Customer Support Sub-Agent",
  description: "Handles customer inquiries and escalates technical issues",
  prompt: `You are a customer support sub-agent that handles general customer inquiries.`,
  canDelegateTo: () => [myExternalAgent.with({ headers: { Authorization: "Bearer {{headers.Authorization}}" } })],
});
```

---

## Build a Zendesk ticket-routing agent - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/guides/agents/ticket-workflows/routing

**Contents:**
- Build a Zendesk ticket-routing agent
- Overview
- Prerequisites
- Create the Classifier agent
- Connect the Zendesk MCP tool
- Create the webhook trigger
- Wire Zendesk to fire the trigger
- Test the agent
  - On this page

Auto-tag every incoming Zendesk ticket with the team that owns the problem area.

In this tutorial, you'll build a ticket-routing agent in the Inkeep Visual Builder. When a new ticket lands in Zendesk, the agent will:

The result is an inbox that sorts itself.

In the Visual Builder, go to the Agents tab in the left sidebar and click Create agent.

Click the Default Sub Agent on the canvas to configure it. Fill in:

About the taxonomy in the prompt: the # Team taxonomy section below is your product map in plain English. When your team reorgs or adds a new product surface, you edit this section — no code changes, no retraining. The taxonomy shown is an example for an Inkeep-style team structure; replace it with your own team names and the categories they own.

Things to substitute before you save:

On the agent canvas, drag and drop an MCP block from the top left toolbar.

Select your Zendesk MCP and connect it to the Classifier sub agent.

Click on the MCP block and restrict Active Tools to only the tool that updates a ticket's custom field — in our example MCP that's update_ticket_custom_field, but your MCP may name it differently. This agent only writes one thing, so leaving other tools enabled invites mistakes.

Click Save Changes in the top right corner.

The trigger is the door Zendesk knocks on to wake the agent up.

Go to Triggers in the left sidebar and click New Webhook Trigger.

Select the Classifier agent you just built as the agent this trigger will invoke, then click Continue.

Click Create Trigger. Copy the webhook URL that appears — you'll need it in the next section.

Now set up Zendesk so every new ticket POSTs to the trigger URL you just copied.

See Trigger Inkeep agents from Zendesk tickets — paste your trigger URL into the Zendesk webhook's Endpoint URL. Come back here when you're done.

From an outside email address, send a test ticket to your Zendesk support address with a question that clearly belongs to one of your teams (e.g., "How do I update my billing details?" for the Account team).

Switch to the Zendesk tab, find the new ticket, and refresh.

Within about 10 seconds, the ticket's custom field flips from blank to the matching team value, written by the agent.

Teach your assistant when to hand off to a human — and wire it up to your ticketing system so the support team gets the question with full conversation context already attached.

Draft a KB-grounded reply as a private comment on every new Zendesk ticket — the human rep reviews and sends.

Tell us how this can be better.

**Examples:**

Example 1 (markdown):
```markdown
# Your job

For every incoming Zendesk ticket, identify the team that owns the problem area and write that team's tag to the ticket's custom field. One ticket → one custom-field write.

Classify by what the customer needs help with, not by what they wrote about — customers often describe their setup before their actual problem.

# Team taxonomy

- **Product** — questions about how the product works
- **Account** — login, billing, account access
- **Other** — anything off-topic or that doesn't fit

# Write the tag

Call **update_ticket_custom_field** exactly once with:

- `ticket_id` — from the trigger message
- `custom_field_id` — `[YOUR_CUSTOM_FIELD_ID]`
- `value` — `product` for Product, `account` for Account, `other` for Other
```

---

## Build an internal-note draft agent for Zendesk - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/guides/agents/ticket-workflows/internal-note-draft

**Contents:**
- Build an internal-note draft agent for Zendesk
- Overview
- Prerequisites
- Create the Reply Drafter agent
- Connect the MCPs
- Create the webhook trigger
- Wire Zendesk to fire the trigger
- Test the agent
  - On this page

Draft a KB-grounded reply as a private comment on every new Zendesk ticket — the human rep reviews and sends.

In this tutorial, you'll build a Reply Drafter agent in the Inkeep Visual Builder. When a new ticket lands in Zendesk, the agent will:

The rep opens the ticket and the draft is already there — they review, tweak, and send. The work shifts from writing to reviewing.

In the Visual Builder, go to the Agents tab in the left sidebar and click Create agent.

Click the Default Sub Agent on the canvas to configure it. Fill in:

Tool names to verify before you save:

On the agent canvas, drag and drop an MCP block from the top left toolbar. Select your Inkeep Unified Search MCP and connect it to the Reply Drafter sub agent.

Click the MCP block and restrict Active Tools to only the knowledge-base search tool — the agent doesn't need anything else from this MCP.

Drag a second MCP block onto the canvas. Select your Zendesk MCP and connect it to the Reply Drafter sub agent.

Click the Zendesk MCP block and restrict Active Tools to only the tool that posts an internal/private comment — this agent only writes internal comments, so leaving other tools enabled invites mistakes.

Click Save Changes in the top right corner.

The trigger is the door Zendesk knocks on to wake the agent up.

Go to Triggers in the left sidebar and click New Webhook Trigger.

Select the Reply Drafter agent you just built as the agent this trigger will invoke, then click Continue.

Click Create Trigger. Copy the webhook URL that appears — you'll need it in the next section.

Now set up Zendesk so every new ticket POSTs to the trigger URL you just copied.

See Trigger Inkeep agents from Zendesk tickets — paste your trigger URL into the Zendesk webhook's Endpoint URL. Come back here when you're done.

From an outside email address, send a test ticket to your Zendesk support address with a question your knowledge base should be able to answer (e.g., "How do I get started with [product]?").

Switch to the Zendesk tab, find the new ticket, and refresh.

Within about 15 seconds, an internal comment appears on the ticket containing the AI's draft reply and the docs it cited. The customer sees nothing yet — the draft is for the rep, not the customer.

Auto-tag every incoming Zendesk ticket with the team that owns the problem area.

Reply publicly to the customer when the knowledge base is sure of the answer — and stay quiet when it isn't.

Tell us how this can be better.

**Examples:**

Example 1 (yaml):
```yaml
# Your job

For every incoming Zendesk ticket, search your knowledge base for relevant docs and post a draft reply as a **private (internal) comment** on the ticket. Never reply publicly — the comment is for a human rep to review and send.

# How to draft

1. Read the customer's question from the trigger message
2. Call **search-knowledge-base** to find relevant docs
3. Write a clear, 2-3 paragraph draft reply grounded in what the docs say
4. If the docs don't cover the question, say so plainly in the draft — don't invent facts

# Post the comment

Call **add_internal_ticket_comment** exactly once with:

- `ticket_id` — from the trigger message
- `body` — the draft, formatted like this:

✍️ Draft reply

[Your drafted answer here, 2-3 paragraphs]

Sources:
- [URL 1]
- [URL 2]

— Drafted by AI. Review before sending.
```

---

## Configure Slack Agents - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/talk-to-your-agents/slack/configuration

**Contents:**
- Configure Slack Agents
- Workspace default
  - Open the Slack dashboard
  - Set the default agent
  - Remove the default agent (optional)
- Channel defaults
  - Open channel defaults
  - Filter and select channels
  - Assign an agent
  - Grant access to channel members

Admin guide — set up workspace and channel default agents for the Slack integration.

This page is for workspace administrators. Regular team members should see Using the Slack App for usage instructions.

After installing the Slack app, configure which agents respond to your team's messages. You can set a workspace-wide default and optionally assign different agents to specific channels.

The workspace default agent responds to all @Inkeep mentions and /inkeep commands across every channel — unless a channel has its own default.

Navigate to Work Apps → Slack in the Inkeep dashboard. Select your installed workspace.

In the Agent Configuration section, select a project and agent from the dropdowns. Click Save.

This agent handles all requests in channels without a channel-specific default.

To clear the workspace default, open the dropdown and select Remove default agent. Channels without a channel-specific agent will no longer have a fallback.

Channel defaults let you assign a specific agent to individual channels. This is useful when different channels need different expertise — for example, a support agent for #support and a technical agent for #engineering.

In the Slack dashboard, scroll to the Channel Defaults section. You'll see a list of channels where the Inkeep bot is a member.

Channels only appear in this list if the Inkeep bot is a member. To add a channel, open it in Slack, add @Inkeep as a member, and the channel will then be available for configuration. If the list is empty, the bot hasn't been added to any channels yet.

Use the filter buttons to view All, Private, or Slack Connect channels.

Choose a project and agent for the selected channels. You can configure channels individually or use bulk actions to assign the same agent to multiple channels at once.

When you assign an agent to a channel, a Grant access to members toggle appears in the channel's agent selector. This controls whether channel members can use the assigned agent without being explicit project members.

This toggle defaults to enabled — assigning an agent to a channel automatically grants access to all channel members. Disable it if you want to control project access separately (e.g., for channels where only certain members should use the agent).

The grant access setting applies per channel. Workspace defaults grant access by default — the toggle is only available in the UI for channel-level overrides.

When a team member uses @Inkeep or /inkeep, the app resolves which agent to use:

Channel defaults take priority over the workspace default. If you remove a channel default, that channel falls back to the workspace default agent.

The dashboard shows all users who have linked their Slack accounts to Inkeep. You can:

The dashboard includes a health check that verifies:

If the health check shows issues, try reinstalling the Slack app from the dashboard.

Share this with your team — command reference and usage guide

Explore the Slack API endpoints

Admin guide — install the Inkeep Slack app, configure agents, and onboard your team.

How to talk to Inkeep agents in Slack — commands, mentions, and tips.

Tell us how this can be better.

---

## Talk to your agent via A2A (JSON-RPC) - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/talk-to-your-agents/a2a

**Contents:**
- Talk to your agent via A2A (JSON-RPC)
- Authentication
- Endpoints
- Message Send (Blocking)
- Message Send (Non-blocking)
- Streaming Messages (SSE)
- Task APIs
- Agent Card Discovery
- Notes & Behavior
- Development Notes

Use the Agent2Agent JSON-RPC protocol to send messages to your agent and receive results, with optional streaming.

The A2A (Agent-to-Agent) endpoint lets third-party agents, agent platforms, or agent workspaces interact with your Inkeep Agent using a standard agent protocol.

Here are some example platforms that you can add Inkeep Agents to:

Choose the authentication method:

See Authentication → Run API for more details.

Set configuration.blocking to false. The server immediately returns a task, and you can poll or stream updates.

Currently, tasks/get and tasks/cancel return stubbed responses, and tasks/resubscribe returns a mock SSE event. For live progress updates, use message/stream.

Use Vercel AI Elements to quickly assemble production-ready chat interfaces that connect to your Inkeep agent.

Connect your Inkeep agents to Slack.

Tell us how this can be better.

**Examples:**

Example 1 (json):
```json
{
  "jsonrpc": "2.0",
  "method": "message/send",
  "id": 1,
  "params": {
    "message": {
      "messageId": "msg-123",
      "role": "user",
      "parts": [
        { "kind": "text", "text": "Hello!" }
      ],
      "contextId": "conv-123",
      "kind": "message"
    },
    "configuration": {
      "acceptedOutputModes": ["text", "text/plain"],
      "blocking": true
    }
  }
}
```

Example 2 (json):
```json
{
  "jsonrpc": "2.0",
  "result": {
    "kind": "message",
    "messageId": "auto-generated",
    "role": "agent",
    "parts": [ { "kind": "text", "text": "..." } ],
    "taskId": "task-...",
    "contextId": "conv-123"
  },
  "id": 1
}
```

Example 3 (json):
```json
{
  "jsonrpc": "2.0",
  "result": {
    "kind": "task",
    "id": "task-...",
    "contextId": "conv-123",
    "status": { "state": "completed", "timestamp": "..." },
    "artifacts": [
      {
        "artifactId": "...",
        "parts": [
          { "kind": "data", "data": { "type": "transfer", "targetSubAgentId": "other-agent-id" } },
          { "kind": "text", "text": "Transfer reason text" }
        ]
      }
    ]
  },
  "id": 1
}
```

Example 4 (json):
```json
{
  "jsonrpc": "2.0",
  "result": {
    "kind": "task",
    "id": "task-...",
    "contextId": "conv-123",
    "status": { "state": "completed", "timestamp": "..." },
    "artifacts": [ { "artifactId": "...", "parts": [ { "kind": "text", "text": "..." } ] } ]
  },
  "id": 1
}
```

---

## MCP Server - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/talk-to-your-agents/mcp-server

**Contents:**
- MCP Server
- Authentication
- MCP Server Implementation
- Available Tools
  - send-query-to-agent
- Using with Cursor
  - Quick Install (Inkeep Hosted Docs MCP)
  - Manual Configuration
    - Example
- Session Management (Required by MCP HTTP Transport)

Learn how to use the MCP server to talk to your agents

The MCP server allows you to talk to your agents through the Model Context Protocol.

Choose the authentication method:

See Authentication → Run API for more details.

The MCP server is implemented in the @inkeep/agents-api library and provides a standard interface for agent communication.

The MCP server exposes one core tool:

Sends a query to your agent's default sub-agent. This tool:

Example usage in Cursor: When the MCP server is configured, Cursor will automatically discover this tool and you can use it by asking questions. The tool will route your query to the appropriate sub-agent in your agent and return the response.

Install the Inkeep Agents documentation MCP server with one click:

Add the following configuration to your Cursor MCP settings.

Example when using an API key for auth:

Session management is required by MCP’s HTTP transport. If Mcp-Session-Id is missing or invalid on follow-up requests, the server will return a JSON-RPC error (e.g., "Session not found").

Learn how to talk to your agents

Learn about details of the Vercel AI SDK data stream protocol that powers the `/run/api/chat` API endpoint.

Tell us how this can be better.

**Examples:**

Example 1 (json):
```json
{
  "AgentName": {
    "type": "mcp",
    "url": "http://<your-agents-api-url>/run/v1/mcp",
    "headers": {
      "Authorization": "Bearer <agent_api_key>"
    }
  }
}
```

---

## Add Sidebar Chat to React - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/talk-to-your-agents/react/side-bar-chat

**Contents:**
- Add Sidebar Chat to React
- Installation
- Quick Start
- Configuration Options
  - Required Props
- Props
  - InkeepBaseSettings
    - ColorModeConfig
    - UserProperties
  - InkeepAIChatSettings

Integrate Inkeep's sidebar chat component into your React application for seamless agent conversations.

The InkeepSidebarChat component provides a slide-out panel interface for conversing with your agents. It can be positioned on either side of your application and supports both manual triggering and automatic element triggers.

Whether to autofocus the chat input on load.

Configuration for the base settings.

InkeepBaseSettings | undefined

Configuration for the chat.

(InkeepAIChatSettings & { shouldAutoFocusInput?: boolean; }) | undefined

The position of the sidebar chat. This also influences the resizing of the component.

"left" | "right" | undefined

The minimum width of the sidebar chat.

The maximum width of the sidebar chat.

The default width of the sidebar chat.

OpenSettingsSidebar | undefined

The display name of your organization that will be shown in various UI elements. For example, this may appear in chat messages or headers.

The primary brand color used throughout the widget UI. This color will be used to generate a cohesive color scheme. Should be provided as a valid CSS color value (hex, rgb, etc).

Settings to control the color mode (light/dark) behavior. Can be used to sync with your application's theme or set a forced color mode.

ColorModeConfig | undefined

Theme customization settings for the widget. Allows customizing colors, typography, component styles, and more.

UserTheme | undefined

Custom icon overrides for the default icon set. Allows replacing any of the built-in icons with your own components.

CustomIconMap | undefined

Properties to identify and provide context about the current user. Used for personalization and analytics tracking.

UserProperties | undefined

Authentication token for the current user. Used for authenticated API requests if required.

Async callback that returns a JWT for authenticated chat sessions. When provided, the widget uses JWT-based auth instead of anonymous sessions. The callback is re-invoked automatically on 401 responses to refresh the token.

(() => Promise<string>) | undefined

Additional properties to be sent with analytics events. These properties will be merged with the event properties.

Record<string, unknown> | undefined

Handler for analytics events from the widget.

((event: InkeepCallbackEvent) => Promise<void>) | undefined

The analytics event object

Promise that resolves when the event is logged

Handler for feedback events from the widget.

((feedback: InkeepFeedback & { properties?: Record<string, unknown>; }) => Promise<InkeepFeedback>) | undefined

Whether to bypass the captcha challenge. Only enable this flag if using a server side API type api key, otherwise the api requests will fail without the challenge solution.

Privacy and cookie preferences configuration.

PrivacyPreferences | undefined

Function to transform source data before display.

TransformSource | undefined

The original source data

The type of source data

The options for the transform source

The transformed source data

Reference to the shadow DOM host element if using custom Shadow DOM. Required when embedding the widget within a Shadow DOM.

HTMLElement | null | undefined

Reference to the root element where the widget is mounted. Used for positioning and event handling.

HTMLElement | null | undefined

Custom tags for widget identification. Used in analytics to segment and filter widget instances. Array of string identifiers.

Instance of the Prism syntax highlighting library. Required for code block syntax highlighting functionality.

Query parameters to automatically append to URLs in the widget. Useful for tracking or maintaining context in navigation. Object mapping parameter names to values.

UrlQueryParam | undefined

Base-level filters to apply to all search and chat operations. These are typically organization or user-level filters.

SearchAndChatFilters | undefined

Configuration for syncing the widget's color mode with an external element.

This allows the widget to automatically match its color mode (light/dark) with your application's theme. The widget will observe changes to specified attributes on a target element and update its appearance accordingly.

SyncColorMode | undefined

List of all available colorMode names

Forced colorMode name for the current page

Whether to switch between dark and light colorModes based on prefers-color-scheme

Disable all CSS transitions when switching colorModes

Whether to indicate to browsers which color scheme is used (dark or light) for built-in UI like inputs and buttons

Key used to store colorMode setting in localStorage

Default colorMode name (for v0.0.12 and lower the default was light). If enableSystem is false, the default colorMode is light

HTML attribute modified based on the active colorMode. Accepts class and data-* (meaning any data attribute, data-mode, data-color, etc.)

"class" | (string & {}) | undefined

Mapping of colorMode name to HTML attribute value. Object where key is the colorMode name and value is the attribute value

ValueObject | undefined

Nonce string to pass to the inline script for CSP headers

Record<string, string> | undefined

App ID for requests, can be generated in the Inkeep dashboard

Base API URL for token exchange, captcha challenge, and the chat run api

https://api.agents.inkeep.com

Base API URL for analytics events (POST /run/v1/events). Defaults to baseUrl when not set.

Context to be passed to the chatstream API.

Record<string, unknown> | undefined

Files to be passed to the chatstream API. Attached to the next outgoing message. Re-queued whenever the array content changes (diffed by filename, mediaType, and size), so new or updated files are sent on the next message. Already-sent files are not re-attached unless the content changes.

FileUIPart[] | undefined

Transform the file attachments displayed on a user message before they render as chips. Called per message at render time with the message's file parts, for live and history-loaded messages alike. The input includes all of the message's file parts regardless of MIME type; the widget's accepted-file-types filter is re-applied to the returned list, so unsupported types still never render. Return the parts to display: omit entries to hide them, or return shallow-modified copies (for example, with a friendlier filename) to rename them. Display-only, so it does not affect what is sent to the agent, stored, or visible to the LLM. Not a security boundary: hidden parts are still sent, stored in conversation history, and present in client memory, and if the transformer throws or returns a non-array, the widget fails open and renders the original untransformed parts. Null entries in a returned array are dropped, treated as intent to omit rather than as a failure. Every returned (whitelisted) part is displayed verbatim, so returning entries that were not in the input adds chips for files the user never attached. Must be pure and cheap, since it runs on every message render. Return new or copied objects and do not mutate the input parts.

((files: FileUIPart[]) => Array<FileUIPart | null | undefined>) | undefined

The placeholder text to display in the chat input field when empty. Use this to provide guidance on what kind of questions users can ask. "Ask me anything about our API documentation..."

A welcome message shown at the start of a new chat session. Supports markdown formatting for rich text styling. Use this to introduce the AI assistant's capabilities and set expectations. "👋 Hi! I'm here to help you with technical questions about our API..."

The name of the product/service/topic that the chat assistant specializes in. This helps contextualize the chat experience for users. If not provided, defaults to the organization name from base settings. "MongoDB Atlas" or "React Router"

The display name for the AI assistant in the chat interface. Choose a name that reflects the assistant's role and your brand. "Atlas Assistant" or "DevBot"

URL to the AI assistant's avatar image. Should be a square image, recommended size 40x40px. Supports common image formats (PNG, JPG, SVG).

You can pass a string or an object to configure for different color modes. { light: 'https://example.com/avatar-light.png', dark: 'https://example.com/avatar-dark.png', }

string | { light: string; dark: string; } | undefined

URL to the user's avatar image in the chat interface. Should be a square image, recommended size 40x40px. Falls back to a default user icon if not provided.

Controls whether links in chat messages open in new browser tabs. Enable this to help users maintain their chat context when following links.

Custom heading text for the example questions section. Use this to better describe your suggested queries. "Common Questions" or "Try asking about..."

A list of pre-written questions users can click to quickly start a conversation. These should reflect common use cases and help users understand the AI assistant's capabilities. ["How do I reset my password?", "What are the API rate limits?"] or [{ value: "How do I reset my password?", label: "How do I reset my password?" }, { value: "What are the API rate limits?", label: "What are the API rate limits?" }]

string[] | { value: string; label: string; }[] | undefined

Whether to visually emphasize the first example question. Use this to draw attention to the most important or common query.

Enables the ability to share chat conversations via URL. Useful for allowing users to share helpful conversations with teammates.

The base URL path used when generating shareable chat links. Should match your application's routing structure. "/shared-chats/" or "/support/conversations/"

Controls the visibility of the copy chat button. Allows users to copy the entire chat transcript to their clipboard.

Unique identifier for loading a specific conversation. Use this to restore a previous conversation state. If the conversation is not found, a new conversation is started.

Pre-fetched conversation messages to render without fetching. Requires conversationId to be set.

Message[] | undefined

When enabled, prevents users from sending new messages. Useful for displaying archived or shared chat sessions.

Whether to make conversations public by default.

"public" | "private" | undefined

Controls the visibility of the chat history button, which opens the list of previous chats.

Configuration for the chat's disclaimer message. Use this to display important notices about AI limitations or data usage.

AIChatDisclaimerSettings | undefined

Callback function triggered whenever the user modifies their input message.

((message: string) => void) | undefined

The current content of the input field

React ref for accessing the chat component's methods. Enables programmatic control of chat functions from parent components.

Ref<AIChatFunctions> | undefined

Array of actions available in the "Get Help" menu. Use this to provide alternative support options like contact forms or documentation links.

GetHelpOption[] | undefined

Array of actions available rendered after each message.

CustomMessageAction[] | undefined

Custom labels for the chat interface's action buttons. Use this for internationalization or to better match your application's terminology.

AIChatToolbarButtonLabels | undefined

Filters to apply to the chat results.

SearchAndChatFilters | undefined

Components to be rendered in the chat interface.

ComponentsConfig<any> | undefined

ComponentsConfig<any> | undefined

Controls whether the chat automatically scrolls to the bottom during streaming. When false, streaming auto-scroll is disabled but the chat still scrolls to bottom when the user sends a new message.

Programmatically sends a message in the chat.

(message?: string) => void

Optional message text. If omitted, sends the current input value.

Programmatically updates the text in the chat input field.

(message: string) => void

The new message text to set

Resets the chat to its initial state. Removes all messages and resets the chat.

Displays a form overlay in the chat interface.

(formSettings: AIChatFormSettings, getHelpOption?: GetHelpOption) => void

Configuration object defining the form's fields and behavior

Optional getHelpOption that triggered the form (for analytics)

Programmatically sets focus to the chat input field. Useful after programmatic updates or when showing the chat interface.

Controls whether the disclaimer message is shown. Enable this when you need to display important notices or legal disclaimers.

The main text content of the disclaimer message. Should clearly communicate important information about AI usage or limitations. "AI responses are generated automatically and may require verification."

Additional information shown when hovering over the disclaimer. Use this to provide more detailed explanations or context.

InkeepCustomIcon | undefined

Action to be performed when the option is clicked.

Icon to be displayed next to the label.

InkeepCustomIcon | undefined

Action to be performed when the option is clicked.

Text shown on the button that clears the chat history. "Clear Chat" or "Start Over"

Text shown on the button that generates a shareable chat link. "Share Chat" or "Get Link"

Text shown on the button that opens the help options menu. "Get Help" or "Support Options"

Text shown on the button that stops the AI from generating a response. "Stop" or "Cancel Response"

Text shown on the button that copies the chat transcript. "Copy Chat" or "Copy Transcript"

{ [key: string]: any; } | undefined

((props: { message: Message; renderComponent: (name: string, props: Record<string, unknown>) => React.ReactNode; renderMarkdown: (text: string) => React.ReactNode; }, target: HTMLElement, context: null) => void | React.ReactNode) | undefined

((props: { tool: ToolUIPart; approve: (approved?: boolean) => Promise<void>; renderMarkdown: (text: string) => React.ReactNode; }, target: HTMLElement, context: null) => void | React.ReactNode) | undefined

The trigger selector for the sidebar chat.

'[data-inkeep-sidebar-chat-trigger]'

Threshold factor for auto-closing when resizing. When dragging below (minWidth * autoCloseThreshold), the sidebar will auto-close.

0.7 (70% of minimum width)

Controls whether the component is open.

Handler called when the component opens or closes.

((isOpen: boolean) => void) | undefined

Whether the component is open by default.

The key to trigger the component when pressed with Cmd (Mac) / Ctrl (Windows).

Set to null to disable the shortcut.

string | null | undefined

Create custom UI elements to trigger Inkeep modals with complete control over appearance and behavior.

Integrate Inkeep's embedded chat component directly into your React application for inline agent conversations.

Tell us how this can be better.

**Examples:**

Example 1 (yaml):
```yaml
colorMode: {
  sync: {
    // Watch the document root for theme changes
    target: document.documentElement,
    // Monitor the data-theme attribute
    attributes: ['data-theme'],
    // Determine dark mode based on attribute value
    isDarkMode: (attrs) => attrs['data-theme'] === 'dark',
    // Optional callback when color mode changes
    onChange: (mode) => console.log('Color mode changed to:', mode)
  }
}
```

Example 2 (yaml):
```yaml
action: {
  type: 'open_form',
  formSettings: {
    title: 'Open Form',
    description: 'Open a form',
  },
}
```

Example 3 (yaml):
```yaml
action: {
  type: 'open_link',
  url: 'https://example.com',
}
```

Example 4 (yaml):
```yaml
action: {
  type: 'invoke_callback',
  callback: (args: InvokeCallbackArgs) => {
    console.log(args)
  },
}
```

---

## Slack Work App - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/talk-to-your-agents/slack/overview

**Contents:**
- Slack Work App
- Key features
- Which agent handles my request?
- Get started
- Admin: Install & Configure
- Using the Slack App
- Dashboard Configuration
- Slack MCP Tool
  - On this page

Connect your Inkeep agents to Slack.

The Slack Work App brings your Inkeep agents directly into Slack. Team members can talk to agents by mentioning @Inkeep or by using /inkeep commands.

The Slack integration is only available for Inkeep Enterprise.

The app uses an agent resolution priority to decide which agent responds:

If no agent is configured at either level, the bot prompts you to ask an admin to set one up in the dashboard.

Use /inkeep status in any channel to see which agent is active for that channel and how it was resolved.

Guide for Slack workspace admins — install the app, set up agents, manage users

Guide for all team members — how to ask questions, link your account, and use commands

Guide for admins — workspace defaults, channel defaults, and user management

Give agents the ability to post messages to Slack channels and DMs

Use the Agent2Agent JSON-RPC protocol to send messages to your agent and receive results, with optional streaming.

Admin guide — install the Inkeep Slack app, configure agents, and onboard your team.

Tell us how this can be better.

---

## Use Inkeep agents with Vercel AI SDK - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/talk-to-your-agents/vercel-ai-sdk/inkeep-provider

**Contents:**
- Use Inkeep agents with Vercel AI SDK
- Overview
- Installation
- Basic Usage
  - Text Generation
  - Streaming Responses
- Configuration
  - Provider Settings
  - Provider Options
- Tool Call Observability

A custom AI SDK provider that lets you use Inkeep agents with generateText, streamText, and other AI SDK functions.

The @inkeep/ai-sdk-provider package is a custom AI SDK provider that exposes Inkeep agents through the Vercel AI SDK. This lets you call your agents with generateText() and streamText().

If connecting to Inkeep Enterprise, use https://api.agents.inkeep.com/run/api/chat as your INKEEP_AGENTS_API_URL.

Pass options when creating a provider instance:

To receive tool call and result events in your stream, include the x-emit-operations header:

Tool approvals are interactive: when a tool requires approval, you must approve/deny the pending tool call for the run to continue. For end-user UIs, prefer the Chat API and implement Tool approvals.

Text events (always emitted):

Tool events (requires x-emit-operations: true):

Control events (always emitted):

Build React chat interfaces with streaming responses.

Use prebuilt UI components for chat experiences.

Learn about the underlying HTTP API endpoint.

Changelog for the @inkeep/agents-ui-cloud package

Use the Vercel AI SDK's useChat hook to build React chat interfaces that stream responses from your agent.

Tell us how this can be better.

**Examples:**

Example 1 (elixir):
```elixir
npm install @inkeep/ai-sdk-provider ai
```

Example 2 (elixir):
```elixir
import { generateText } from 'ai';
import { createInkeep } from '@inkeep/ai-sdk-provider';

const inkeep = createInkeep({
  baseURL: process.env.INKEEP_AGENTS_API_URL, // Required, for local development this is typically http://localhost:3002
  apiKey: '<your-agent-api-key>', // Created in the Agents Dashboard
  // headers: { // Optional if you are developing locally and don't want to use an api key
  //   'x-inkeep-agent-id': 'your-agent-id',
  //   'x-inkeep-tenant-id': 'your-tenant-id',
  //   'x-inkeep-project-id': 'your-project-id',
  // },
});

const { text } = await generateText({
  model: inkeep(),
  prompt: 'What is the weather in NYC?',
});

console.log(text);
```

Example 3 (javascript):
```javascript
import { streamText } from 'ai';
import { createInkeep } from '@inkeep/ai-sdk-provider';

const inkeep = createInkeep({
  baseURL: process.env.INKEEP_AGENTS_API_URL,
  apiKey: '<your-agent-api-key>', // The agent ID is encoded in the API key
  headers: {
    'x-emit-operations': 'true', // Enable tool event streaming
  },
});

const result = await streamText({
  model: inkeep(),
  prompt: 'Plan an event in NYC',
});

for await (const chunk of result.textStream) {
  process.stdout.write(chunk);
}
```

Example 4 (css):
```css
createInkeep({
  baseURL: string,        // Required. Your agents-run-api URL
  apiKey?: string,        // Optional. Bearer token for authentication
  headers?: Record<string, string>, // Optional. Additional headers
})
```

---

## Build chat UIs with Vercel AI Elements - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/talk-to-your-agents/vercel-ai-sdk/ai-elements

**Contents:**
- Build chat UIs with Vercel AI Elements
- Overview
- Using AI Elements
- Install (one-liner)
- Component quick reference
  - On this page

Use Vercel AI Elements to quickly assemble production-ready chat interfaces that connect to your Inkeep agent.

Vercel AI Elements is a set of prebuilt, headless-first UI primitives for building AI chat interfaces. Think of it as a shadcn/ui-like library of UI components for conversational experiences.

The library works out of the box with Inkeep Agents via the /run/api/chat API endpoint since it follows the streaming protocol used by AI Elements.

For fully custom useChat hooks and lower-level control, see the useChat guide.

This CLI adds selected components to your project under @/components/ai-elements/ and wires up any required shadcn/ui primitives.

See the AI Elements site for detailed props and examples.

Use the Vercel AI SDK's useChat hook to build React chat interfaces that stream responses from your agent.

Use the Agent2Agent JSON-RPC protocol to send messages to your agent and receive results, with optional streaming.

Tell us how this can be better.

**Examples:**

Example 1 (javascript):
```javascript
import { Conversation, Message, PromptInput, Actions } from '@ai-sdk/react-elements';
import { useChat } from '@ai-sdk/react';

export default function ChatWithElements() {
  const { messages, sendMessage } = useChat({
    transport: new DefaultChatTransport({
      api: "${process.env.NEXT_PUBLIC_INKEEP_AGENTS_API_URL}/run/api/chat",
      headers: {
        "x-inkeep-tenant-id": "default",
        "x-inkeep-project-id": "activities-planner",
        "x-inkeep-agent-id": "activities-planner",
      },
    })
  });

  return (
    <Conversation messages={messages}>
      {messages.map(message => (
        <Message key={message.id} message={message}>
          <Actions message={message} />
        </Message>
      ))}
      <PromptInput onSubmit={sendMessage} />
    </Conversation>
  );
}
```

Example 2 (elixir):
```elixir
npx ai-elements@latest
```

---

## Build an in-product copilot without code - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/guides/agents/in-product-copilot

**Contents:**
- Build an in-product copilot without code
- Overview
- Prerequisites
- Set up the agent
  - Create the copilot agent
  - Define the headers schema
  - Configure the sub agent
- Register and connect your MCP servers
  - Register the Product MCP server
  - Connect it with header forwarding

Build a logged-in, account-aware copilot that diagnoses live account, integration, and usage state and resolves issues in-product — without escalating to a human.

Who this is for: product teams adding a copilot for logged-in end users, embedded inside your application. (For a copilot your support agents run inside the Zendesk ticket sidebar, see Support Copilot.)

In this tutorial, you'll build an in-product copilot using the Inkeep Visual Builder. It's embedded in your application, acts on behalf of the signed-in user, and — instead of handing problems to a human — diagnoses and fixes them in product.

When a user says "My Slack integration stopped working and we can't add new users", the copilot will:

It knows who the user is because your application forwards the signed-in user's credentials to your MCP server on every tool call.

Go to the Agents tab in the left sidebar, then select Create Agent. Provide the following details:

The headers schema tells Inkeep which headers to expect and validate on every incoming request. These values come from your host application at runtime and identify the signed-in user.

On the agent settings pane, scroll down to Headers schema and enter the following:

Click Save to apply the schema.

Header keys are normalized to lowercase before validation. Always define schema properties in lowercase (e.g., auth-token, not authToken).

Click on the Default Sub Agent to configure it. Provide the following details:

The {{headers.user-id}} template is resolved at runtime from the validated request headers. You can reference any key defined in the headers schema. Replace [Your Product] with your product name.

Because each user has their own token, you don't store a single static credential. Instead, credentials are forwarded dynamically from the incoming request headers.

Go to the MCP Servers tab in the left sidebar, then select + New MCP Server. Fill in the server details:

Click Create to register the server.

Leaving the credential blank is intentional. Auth will be injected per-request via header forwarding in the next step.

Navigate to the agent canvas: Agents → Product copilot. Drag and drop an MCP block from the top left toolbar onto the canvas, then select the Product API MCP server and connect it to the Product copilot sub agent.

Click on the connection line between the MCP server and the sub agent. In the Headers field, enter:

Click Save Changes in the top right corner.

The {{headers.*}} templates are resolved at runtime from the validated incoming request headers. On every tool call to the MCP server, Inkeep replaces the template with the actual header value from the current request — so the copilot always acts as the signed-in user.

To let the copilot answer "how do I…" and conceptual questions from your docs, also connect Inkeep Unified Search as an MCP server and attach it to the same sub agent. The copilot will reach for it on knowledge questions and stay on the account tools for diagnosis and fixes.

The copilot's diagnosis and fixes land as rich cards, not walls of text. You define these as data components: name each one and give it a JSON schema, and the agent fills it in with real tool results. Create them in the Data Components tab, then attach them to the sub agent — see Data Components for the full walkthrough.

This copilot uses four:

Pass the signed-in user's credentials as custom headers from your chat component. The chat component sends these headers with every request to the agent API.

Replace YOUR_APP_ID with the App ID from your project's Apps settings. See App Credentials for setup details.

Click Try it in the top right corner to open the chat interface. Click the Custom headers button and enter test values:

Click Apply, then send a message like "My Slack integration stopped working and we can't add new users — can you fix it?"

The copilot should chain its read tools (account, integration status, usage), render the Account Overview and Integration Health Check cards, rotate the Slack credential, confirm with an Action Result, and — if seats are maxed — render a Plan Recommendation. Verify in your MCP server logs that the Authorization and X-User-Id headers arrive populated from the values you entered.

After embedding the chat component, sign in as a test user and interact with the copilot. Confirm that:

Step-by-step tutorial to build a meeting prep agent using the Visual Builder with Google Calendar and web search tools.

Step-by-step tutorial to build a public chatbot that answers product and pricing questions from your knowledge base, then books a meeting in-chat the moment a visitor shows sales intent.

Tell us how this can be better.

**Examples:**

Example 1 (json):
```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "auth-token": {
      "type": "string",
      "description": "The signed-in user's API token, forwarded to MCP servers."
    },
    "user-id": {
      "type": "string",
      "description": "The signed-in user's ID."
    }
  },
  "required": ["auth-token", "user-id"],
  "additionalProperties": {}
}
```

Example 2 (yaml):
```yaml
You are an in-product copilot for [Your Product], assisting the signed-in user (id {{headers.user-id}}). You can see their live account state through your tools. Your job is to diagnose issues and RESOLVE them in product — you do not escalate to a human, you act.

How to handle a turn:
1. Chain reads aggressively. When the question implies several lookups ("Slack is broken AND we can't add users"), call all the relevant read tools BEFORE rendering anything.
2. Render the diagnostic cards (Account Overview and/or Integration Health Check) with the real values the tools returned.
3. State in one short sentence what you found and what you're about to do.
4. Call the write tool to fix it, then render an Action Result confirming the change.
5. If usage or seats suggest an upgrade, recommend the right plan and render a Plan Recommendation. If the user accepts ("yes", "upgrade"), change the plan and confirm.

If a knowledge-base search tool is connected, use it for "how do I…" or conceptual questions and answer from the docs — and if the answer reveals something fixable on this account, resolve it rather than just linking a doc. If no knowledge-base tool is connected, say you can only help with account operations rather than guessing.

Rules:
- Never render a card without first calling the tool behind it. Use real returned values — never placeholders.
- Execute routine writes (e.g. rotating a credential) without asking — just do it and confirm with an Action Result.
- For hard-to-reverse writes (plan changes, seat removals, deletions), render a recommendation card first and wait for the user to accept ("yes", "upgrade") before executing.
- Never invent account details, IDs, or statuses.
```

Example 3 (json):
```json
{
  "Authorization": "Bearer {{headers.auth-token}}",
  "X-User-Id": "{{headers.user-id}}"
}
```

Example 4 (json):
```json
{
  "auth-token": "test-token-abc123",
  "user-id": "user-42"
}
```

---

## Create custom UIs using the Vercel AI SDK - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/talk-to-your-agents/vercel-ai-sdk/use-chat

**Contents:**
- Create custom UIs using the Vercel AI SDK
- Overview
- Using useChat
- Basic Configuration
- Configuration Options
  - API Endpoint
- Authentication
  - Optional Configuration
- Headers
- Complete Example

Use the Vercel AI SDK's useChat hook to build React chat interfaces that stream responses from your agent.

Agents built with Inkeep have an /api/chat API endpoint that is compatible with Vercel AI SDK's streaming protocol, so it works out of the box with Vercel's AI SDK ecosystem.

To build totally custom UIs, you have two options in the AI SDK ecosystem:

If your agent uses tools that require user confirmation, the stream can include tool approval requests. See Tool approvals.

Install the Vercel AI SDK in your React application:

Here's a minimal example of using useChat with your agent:

The api parameter should point to your Run API's chat endpoint:

Choose the authentication method:

See Authentication → Run API for more details.

To pass required headers (validated against your Context Config), include them as custom headers:

See Headers for details.

Here's a more complete example with conversation management and custom styling:

For production deployments, store configuration in environment variables:

In local development, the Agents API runs at http://localhost:3002. For production, update this to your deployed API URL.

Explore Vercel's prebuilt UI components library built on shadcn/ui for rapid development.

Use prebuilt React components for a complete chat UI experience.

Learn about the underlying HTTP API and streaming protocol.

A custom AI SDK provider that lets you use Inkeep agents with generateText, streamText, and other AI SDK functions.

Use Vercel AI Elements to quickly assemble production-ready chat interfaces that connect to your Inkeep agent.

Tell us how this can be better.

**Examples:**

Example 1 (elixir):
```elixir
npm install ai @ai-sdk/react
```

Example 2 (jsx):
```jsx
"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { useState } from "react";

export default function Page() {
  const { messages, sendMessage } = useChat({
    transport: new DefaultChatTransport({
      api: "${process.env.NEXT_PUBLIC_INKEEP_AGENTS_API_URL}/run/api/chat", // 
      headers: {
        "x-inkeep-tenant-id": "default",
        "x-inkeep-project-id": "activities-planner",
        "x-inkeep-agent-id": "activities-planner",
      },
    }),
  });
  const [input, setInput] = useState("");

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="space-y-4 mb-4">
        {messages.map((message) => (
          <div key={message.id} className="border rounded p-3">
            <div className="font-semibold mb-2">
              {message.role === "user" ? "👤 User" : "🤖 Assistant"}
            </div>

            <div className="space-y-2">
              {message.parts.map((part, partIndex) => {
                const partKey = `${message.id}-${part.type}-${partIndex}`;

                if (part.type === "text") {
                  return (
                    <div key={partKey} className="whitespace-pre-wrap">
                      {part.text}
                    </div>
                  );
                }
                
                return null;
              })}
            </div>
          </div>
        ))}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (input.trim()) {
            sendMessage({ text: input });
            setInput("");
          }
        }}
        className="flex gap-2"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about weather, request confirmation, or ask for location..."
          className="flex-1 p-2 border rounded"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Send
        </button>
      </form>

      <div className="mt-4 text-sm text-gray-600">
        <p>Try asking:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>"What's the weather in New York?"</li>
          <li>"Can you get my location?"</li>
          <li>"Ask me to confirm something"</li>
        </ul>
      </div>
    </div>
  );
}
```

Example 3 (lua):
```lua
const { messages, sendMessage, status } = useChat({
  api: 'http://localhost:3002/run/api/chat',
  headers: { /* ... */ },

  // Handle completion
  onFinish: (message) => {
    console.log('Agent finished responding:', message);
  },

  // Handle errors
  onError: (error) => {
    console.error('Chat error:', error);
  },
});
```

Example 4 (css):
```css
const { messages, sendMessage } = useChat({
  api: 'http://localhost:3002/run/api/chat',
  headers: {
    'Authorization': `Bearer ${apiKey}`,
    // Custom context headers
    'x-user-id': 'user-123',
    'x-organization-id': 'org-456',
  },
});
```

---

## Chat Components Overview - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/talk-to-your-agents

**Contents:**
- Chat Components Overview
- Available Components
- Installation
- Framework Support
- Setup
- Pass context to the widget
- Customization
  - On this page

Pre-built chat components to integrate Inkeep agents into your application

The Inkeep chat components provide pre-built UI elements to quickly integrate conversational AI into your application. These components handle the chat interface, message streaming, and user interactions out of the box.

The chat components are available for:

To use chat components, create an app credential — this configures domain restrictions, agent access, and end-user identity for your widget.

See App Credentials for the full auth flow details, security model, and API-based setup.

Send page, session, and user context to your agent so it can give personalized, situation-aware responses. See Pass context to the widget for automatic headers, custom headers, and user properties.

Learn how to customize the appearance and behavior of chat components in the Styling guide.

Invoke your Agents automatically via webhooks or scheduled executions

Learn how to use the chat button component in React

Tell us how this can be better.

---
