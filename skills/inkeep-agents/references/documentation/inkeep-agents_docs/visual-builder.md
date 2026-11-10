# Inkeep-Agents_Docs - Visual-Builder

**Pages:** 11

---

## Manage Credentials in Visual Builder - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/visual-builder/tools/credentials

**Contents:**
- Manage Credentials in Visual Builder
- Adding a credential
  - On this page

Credentials are used to authenticate MCP servers.

The credentials page allows you to add credentials to your MCP servers.

Make sure your Visual Builder is running (if you haven't set it up yet, see Quick Start). Navigate to the Credentials tab in the left sidebar, click "New credential", and select "Bearer authentication".

To use the credential in an MCP server, you can reference it when creating or editing the MCP server. See the MCP Servers page for more information.

Understand the difference between user-level and project-level MCP servers and how they affect your team workflow

Create custom JavaScript functions that your agents can execute directly in the Visual Builder

Tell us how this can be better.

---

## Outbound Webhooks - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/visual-builder/outbound-webhooks

**Contents:**
- Outbound Webhooks
- Create a webhook
  - Configure the destination
  - Test the destination
- Event types
  - Agent scoping
  - Evaluator scoping
- Payload format
  - Conversation events
  - Feedback events

Receive real-time HTTP notifications when conversations, feedback, or custom events occur in your project

Outbound webhooks send HTTP POST requests to your server when events happen in your project — new conversations, conversation updates, feedback submissions, and custom events. Use them to sync data with external systems, trigger downstream workflows, or build real-time integrations.

Outbound webhooks push data from Inkeep to your server. For the reverse — external services triggering your agents — see Webhook Triggers.

Navigate to your project and select Outbound Webhooks in the left sidebar.

Fill in the required fields:

After creating the destination, use the Test action to send a sample payload to your URL. The test request uses a test event type with synthetic data and a 10-second timeout, so you can verify your endpoint is reachable before real events fire.

Each webhook destination subscribes to one or more event types. Your endpoint receives every event that matches the selected types and agent scope.

When you select specific agents on a webhook destination, only events originating from those agents trigger delivery. Leave the agents field empty to receive events from every agent in the project.

For evaluation.failed events, you can further scope a webhook destination to specific evaluators. When evaluators are selected, only failures from those evaluators trigger delivery. Leave the evaluators field empty to receive evaluation.failed events from all evaluators in the project.

Every delivery is an HTTP POST with Content-Type: application/json. The body follows a consistent envelope:

conversation.created and conversation.updated both deliver a conversation object inside data:

feedback.created delivers both the feedback and the associated conversation:

evaluation.failed fires when an evaluation result does not meet its pass criteria. The payload includes the evaluator name, the conversation ID, and the specific conditions that failed:

event.created delivers the persisted event object:

Webhook destinations pointing to Slack automatically receive rich formatted messages instead of raw JSON. This applies whether the URL was added via the OAuth flow or typed manually.

On the Outbound Webhooks page, click Connect Slack Channel. This starts a Slack OAuth flow that lets you pick a channel and grants an incoming-webhook URL.

After authorizing, you're redirected back to the webhook creation form with the Slack URL pre-filled. Select your event types and click Create.

The text field serves as the notification preview (mobile push, channel sidebar). The blocks array renders the rich card in the channel. Non-Slack URLs always receive the standard JSON envelope without text or blocks.

Inkeep delivers each event to each matching destination independently with automatic retries.

Webhook deliveries include any custom headers you configure on the destination.

The following reserved headers cannot be used as custom headers: Connection, Keep-Alive, TE, Trailer, Transfer-Encoding, Upgrade, Proxy-Authorization, Proxy-Connection, Content-Length.

The webhook destinations page shows all configured destinations with their name, URL, enabled status, and subscribed event types.

Toggle the Enabled switch to pause or resume delivery without deleting the destination.

Subscribe to error events to get notified when agent conversations encounter failures. Four error event types are available:

In the webhook destination form, use the Conversation error checkbox to subscribe to all four error types at once. Click Advanced to select specific error types individually.

Each error event type is independently subscribable via the eventTypes array — subscribe only to the types you care about.

conversation.execution.error

conversation.generation.error

conversation.tool.error

For MCP tools, this event only fires when all calls to the same server fail during a generation. If at least one call to the server succeeds, the failures are treated as warnings and no webhook is sent.

conversation.context.error

Log custom events that trigger event.created webhooks.

Receive inbound webhooks from external services to trigger agent conversations.

Manage webhook destinations via the REST API.

Wire Zendesk to POST tickets to an Inkeep webhook trigger so an agent can act on them.

Set up context fetchers in the Visual Builder to pull real-time data from external APIs into agent prompts.

Tell us how this can be better.

**Examples:**

Example 1 (json):
```json
{
  "type": "conversation.updated",
  "timestamp": "2026-05-12T14:30:00.000Z",
  "tenantId": "your-tenant-id",
  "projectId": "your-project-id",
  "agentId": "your-agent-id",
  "agentName": "Support Agent",
  "data": {
    // event-specific payload (see below)
  }
}
```

Example 2 (json):
```json
{
  "type": "conversation.created",
  "timestamp": "2026-05-12T14:30:00.000Z",
  "tenantId": "your-tenant-id",
  "projectId": "your-project-id",
  "agentId": "your-agent-id",
  "agentName": "Support Agent",
  "data": {
    "conversation": {
      "id": "conv_abc123",
      "agentId": "your-agent-id",
      "title": "How do I reset my password?",
      "userProperties": { "userId": "u_456" },
      "properties": { "pageUrl": "https://example.com/help" },
      "createdAt": "2026-05-12T14:29:50.000Z",
      "updatedAt": "2026-05-12T14:30:00.000Z",
      "messages": [
        {
          "id": "msg_001",
          "role": "user",
          "content": "How do I reset my password?",
          "parts": [{ "type": "text", "text": "How do I reset my password?" }],
          "createdAt": "2026-05-12T14:29:50.000Z"
        },
        {
          "id": "msg_002",
          "role": "assistant",
          "content": "You can reset your password from the Settings page...",
          "parts": [
            { "type": "text", "text": "You can reset your password from the Settings page..." }
          ],
          "createdAt": "2026-05-12T14:30:00.000Z"
        }
      ]
    }
  }
}
```

Example 3 (json):
```json
{
  "type": "feedback.created",
  "timestamp": "2026-05-12T14:31:00.000Z",
  "tenantId": "your-tenant-id",
  "projectId": "your-project-id",
  "agentId": "your-agent-id",
  "agentName": "Support Agent",
  "data": {
    "feedback": {
      "id": "fb_789",
      "conversationId": "conv_abc123",
      "messageId": "msg_002",
      "type": "positive",
      "details": null,
      "createdAt": "2026-05-12T14:31:00.000Z",
      "updatedAt": "2026-05-12T14:31:00.000Z"
    },
    "conversation": {
      "id": "conv_abc123",
      "agentId": "your-agent-id",
      "title": "How do I reset my password?",
      "userProperties": null,
      "properties": null,
      "createdAt": "2026-05-12T14:29:50.000Z",
      "updatedAt": "2026-05-12T14:30:00.000Z",
      "messages": [
        {
          "id": "msg_001",
          "role": "user",
          "content": "How do I reset my password?",
          "parts": [{ "type": "text", "text": "How do I reset my password?" }],
          "createdAt": "2026-05-12T14:29:50.000Z"
        },
        {
          "id": "msg_002",
          "role": "assistant",
          "content": "You can reset your password from the Settings page...",
          "parts": [
            { "type": "text", "text": "You can reset your password from the Settings page..." }
          ],
          "createdAt": "2026-05-12T14:30:00.000Z"
        }
      ]
    }
  }
}
```

Example 4 (json):
```json
{
  "type": "evaluation.failed",
  "timestamp": "2026-05-12T14:33:00.000Z",
  "tenantId": "your-tenant-id",
  "projectId": "your-project-id",
  "agentId": "your-agent-id",
  "agentName": "Support Agent",
  "data": {
    "evaluator": { "id": "evaluator_abc", "name": "Response Quality" },
    "conversation": {
      "id": "conv_abc123",
      "userProperties": { "id": "u_456", "name": "Jane", "email": "jane@example.com" },
      "properties": { "pageUrl": "https://example.com/help" }
    },
    "failedConditions": [
      {
        "field": "score",
        "operator": ">=",
        "value": 0.7,
        "actual": 0.3
      }
    ]
  }
}
```

---

## SSO Configuration - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/visual-builder/sso-configuration

**Contents:**
- SSO Configuration
- Prerequisites
- Managing Authentication Methods
- Adding an SSO Provider
  - Form Fields
- Configuring Your Identity Provider
- Auto-Provisioning vs Invitation-Based Access
  - Users who already have an account
- Editing an SSO Provider
- Removing an SSO Provider

Configure enterprise SSO providers for your organization on Inkeep Cloud

Organization admins can configure enterprise single sign-on (SSO) and control which authentication methods are available to their team — all from the Settings page.

SSO configuration is available on Inkeep Cloud deployments only. Self-hosted deployments configure OAuth providers at the deployment level. See Authentication Setup.

The Authentication Methods card lists every sign-in option available to your organization. Use the toggle on each row to enable or disable a method.

At least one sign-in method must remain enabled at all times. Disabling a method when it is the last active one is blocked.

If you use Google Workspace as your IdP, remove offline_access from the scopes list — Google Workspace does not support refresh tokens via the offline_access scope.

When you open the Add SSO Provider form, a read-only Callback / Redirect URI is displayed. Copy this URL and register it as the allowed redirect URI in your identity provider before saving.

The callback URL follows this pattern:

The provider ID is generated automatically based on your organization slug. You can copy the full URL directly from the form.

The Auto-provision members toggle controls what happens when a user signs in via SSO for the first time.

Use invitation-based access when you want explicit control over who joins your organization, or when you need to assign specific roles (such as Admin) to certain users before they sign in.

If a pending invitation exists for a user, auto-provisioning is skipped and the invitation's role assignment is preserved instead.

A first SSO sign-in does not attach to an existing account with the same email, such as one created with Google or a password. That sign-in fails, and the login page explains that the email already has an account with a different sign-in method. The user can keep signing in with that method. Linking an existing account to an SSO provider is not available in Settings, so users who will sign in through SSO should use it from their first sign-in.

You can update the display name, email domain, scopes, and auto-provision setting at any time. The issuer URL, client ID, and endpoints can only be changed while no user has signed in through the provider yet. After that, the change is refused. Removing the provider and adding it again does not get around this, because removing a provider unlinks its members (see Removing an SSO Provider).

Removing a provider deletes its configuration and unlinks every member who signed in through it. Adding a provider again, even for the same IdP, does not reconnect them: their accounts already exist, so their next SSO sign-in fails as described in Users who already have an account. Members who signed in only through this provider can no longer sign in, and there is no way to reconnect them in Settings. Make sure members have another sign-in method before removing a provider.

Multi-tenant authentication with organizations, team management, and fine-grained project permissions

Reusable instruction blocks you can attach to sub-agents

Tell us how this can be better.

**Examples:**

Example 1 (yaml):
```yaml
https://<your-api-domain>/api/auth/sso/callback/<provider-id>
```

---

## Test Suites - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/visual-builder/test-suites

**Contents:**
- Test Suites
- Where to find test suites
- Create a test suite
- Test suite items
  - Bulk upload from CSV
- Agents
- Run configurations and runs
  - Rerun a past run
- Programmatic access
- Related

Build fixed test cases, run agents against them, and evaluate outputs using test suites in the Visual Builder

A test suite is a named collection of items: each item supplies the messages sent to an agent (the input) and optionally the expected output you want to compare against. In the Visual Builder, test suites appear under Test Suites in the project sidebar.

Test suite runs execute those items against one or more agents, create conversations from each item, and can attach evaluators to score the results.

When you start a run with evaluators selected, the platform also creates a batch evaluation job scoped to that run’s conversations.

You need Edit permission on the project to create or change test suites, items, run configurations, and to start runs. See Access control.

From the Test Suites list, create a new suite and give it a name. The suite is empty until you add items.

From the Items tab on a test suite, choose Upload CSV to create many items at once. The file must be UTF-8 and include a header row.

Recognized headers (case-insensitive):

Each cell can contain either:

Rows with missing input or invalid JSON are skipped and reported before upload so you can fix them and re-try. Successfully parsed rows are sent to POST .../dataset-items/{datasetId}/items/bulk in a single request.

You can link agents to a test suite so you can filter or scope which agents are associated with that suite (for example when choosing who runs the items). Run configurations still declare which agents actually execute a given run.

A run configuration ties a test suite to:

Create a run configuration from the test suite detail page (Runs tab). When you start a run, the platform creates a test suite run and processes items. You need at least one item and at least one agent on the configuration before a run can start.

Open a run to see per-item invocations, conversation links, and evaluation output when evaluators are configured.

Each row on the Runs tab has a Rerun action, and the run detail page exposes a Rerun button in the header. Triggering a rerun creates a new row in the runs table using:

The rerun endpoint is POST .../dataset-runs/{runId}/rerun. The response includes the new datasetRunId so you can navigate straight to the in-progress run. Runs that were not created from a run configuration can't be rerun — the button is disabled for those rows.

Listing test suites supports an optional agentId query parameter on the list endpoint to restrict results to suites linked to that agent.

Configure evaluators, batch evaluations, and continuous tests in the Visual Builder

Learn how to talk to your agents

Tell us how this can be better.

**Examples:**

Example 1 (sass):
```sass
input,expectedOutput
"What is 2+2?","4"
"{""messages"":[{""role"":""system"",""content"":""Be terse.""},{""role"":""user"",""content"":""Ping""}]}","[{""role"":""assistant"",""content"":""Pong""}]"
```

---

## Headers in Visual Builder - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/visual-builder/headers

**Contents:**
- Headers in Visual Builder
- Overview
- Configuring Headers
- Sending Custom Headers
- Header Validation
- Using Headers in Your Agent Prompts
- Forwarding Headers to MCP Servers
  - On this page

Configure HTTP headers in the Visual Builder to pass dynamic context for personalized agent interactions.

Headers allow you to pass request-specific values (like user IDs, authentication tokens, or organization metadata) to your agent at runtime via HTTP headers. These values are validated and made available throughout your agent system for:

Here is an example of a valid headers schema:

Header keys are converted to lowercase before validation — for example, Auth-Token becomes auth-token. No other transformation is applied. A mismatch will cause a Context validation failed error.

You can generate custom schemas using this JSON Schema generator.

When you enter custom headers in the playground, they are validated in real-time against the configured headers schema. If the headers are invalid or missing required fields, the chat input is disabled and an error message is displayed. You must fix validation errors before you can send messages.

Here is an example of a valid prompt:

You can forward header values to MCP servers using {{headers.*}} templates. These templates are resolved at runtime from the incoming request headers before each tool call.

See MCP Servers — Dynamic credential pass-through for more on authentication.

Configure tool approval requirements in the Visual Builder to pause execution until a user approves the request.

Create and manage data components for rich, interactive agent messages using the Visual Builder.

Tell us how this can be better.

**Examples:**

Example 1 (json):
```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "user-id": {
      "type": "string"
    }
  },
  "required": [
    "user-id"
  ],
  "additionalProperties": {}
}
```

Example 2 (unknown):
```unknown
You are a helpful assistant for {{headers.user-id}}!.
```

Example 3 (json):
```json
{
  "Authorization": "Bearer {{headers.auth-token}}",
  "Tenant-Id": "{{headers.tenant-id}}"
}
```

---

## Webhook Triggers - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/visual-builder/triggers/webhooks

**Contents:**
- Webhook Triggers
- Create a webhook trigger
  - Open the triggers page
  - Start a new trigger
  - Configure and save
  - Verify the trigger
- Configuration reference
  - Required fields
  - Optional fields
  - Message templates

Create webhook endpoints that let external services invoke your agents via HTTP

Webhook triggers give you an HTTP endpoint that external services — like GitHub, Zendesk, Stripe, or PagerDuty — can POST to.

Incoming payloads are validated, transformed into a message, and used to start a new conversation asynchronously.

Navigate to your project and select Triggers in the left sidebar, then choose the Webhooks tab.

Click New Webhook Trigger. Select the agent you want the trigger to invoke, then click Continue.

Fill in the trigger settings described below, then click Create Trigger.

The new webhook URL appears in the webhooks tab — copy it into your external service's webhook configuration.

Templates use {{placeholder}} syntax to pull values from the (optionally transformed) payload. Nested properties use dot notation:

When the trigger fires, the agent receives a multi-part message: a text part generated from the template and a data part containing the full structured payload.

Triggers support flexible header-based authentication. Configure one or more headers that every incoming request must match:

Header values are securely hashed before storage — original values are never persisted. For services that sign webhooks, you can rely on the signing secret alone for security.

Transform incoming payloads before they reach the message template. Choose one approach:

Object Transformation maps input fields to output fields. For example, mapping payload.user.display_name → userName and payload.action.type → actionName.

JMESPath uses a full query language for advanced cases. For example, { activeUsers: join(', ', users[?active==true].name) } filters an array and joins the results. See jmespath.org for the full specification.

Object Transformation is converted to JMESPath under the hood. Start with object transformation and switch to JMESPath only when you need filtering, conditionals, or array operations.

By default, webhook triggers run without a user identity — tools requiring user-scoped credentials are skipped. Setting Run As Users makes the trigger execute as one or more specific users, enabling access to their connected credentials (e.g., per-user OAuth tokens for GitHub, Slack, or Jira).

Each selected user gets a separate execution and invocation record for every webhook request. When a run-as user is set, agents automatically use that user's profile timezone for time-aware responses.

View invocations from the trigger's dropdown menu to monitor activity, debug failures, and audit usage.

Every webhook invocation is tracked with:

Create webhook triggers using the TypeScript SDK.

Run agents on a recurring schedule or at a specific future time.

For synchronous conversations, use the Chat API.

Constrain what a sub agent can emit — require components, artifacts, or a transfer, and forbid free text — using the Guardrails section in the Visual Builder.

Run your Agents automatically on a recurring schedule or at a specific future time

Tell us how this can be better.

**Examples:**

Example 1 (json):
```json
New order received:
- Order ID: {{order.id}}
- Customer: {{customer.name}} ({{customer.email}})
- Total: ${{order.total}}

Please process this order and send a confirmation.
```

---

## Skills in Visual Builder - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/visual-builder/skills

**Contents:**
- Skills in Visual Builder
- Overview
- Browse and edit synced files
  - Create nested folders with file paths
- Create a skill
- Fields
- Writing effective descriptions
- Attach skills to sub-agents
- Always loaded and On-demand skills
  - How on-demand skills work

Reusable instruction blocks you can attach to sub-agents

Skills are reusable instruction blocks that you can attach to multiple sub-agents. They govern agent behavior, reasoning, and tool usage, helping you keep shared rules, tone, and formatting consistent across the agent graph while still allowing each sub-agent to focus on its own role.

When a skill is synced from code with inkeep push, Inkeep stores the full skill directory. SKILL.md remains the entry file, and any nested reference files or templates under the skill directory are synced with it.

The Skills view shows the full file tree for every synced skill directory. Opening a skill takes you to its SKILL.md entry file, and opening a nested reference file shows that file in a read-only editor by default.

Click Edit to open the full-page file editor.

When you add a file, use / in the file name to place it in a nested folder.

Write descriptions that include "Use when..." or "Use if..." phrases. This helps the agent decide when to load on-demand skills.

The description field is critical for on-demand skills. The agent uses it to decide whether to load the skill, so be specific about the scenarios where the skill applies.

Keep descriptions concise. They're capped at 1024 characters, but shorter is better: an always-loaded skill's description — and the outline entry for every on-demand skill — sits in the system prompt on every turn, so a tight, trigger-first description both routes better and costs less context. See Tuning Agents for the cost angle.

Open an agent in the Visual Builder, select a sub-agent node, and use the Skills picker to attach one or more skills.

Use Always loaded to include a skill in every prompt. It's off by default so skills load on demand unless you enable it.

On-demand skills appear as an outline in the system prompt. When the agent determines a skill is relevant based on its description, it calls the built-in load_skill tool to retrieve the full content and any synced nested files. This keeps prompts compact while still giving agents access to specialized instructions and templates when needed.

Configure enterprise SSO providers for your organization on Inkeep Cloud

Configure evaluators, batch evaluations, and continuous tests in the Visual Builder

Tell us how this can be better.

**Examples:**

Example 1 (elixir):
```elixir
Extracts text and tables from PDF files, fills PDF forms, and merges multiple PDFs. Use when working with PDF documents or when the user mentions PDFs, forms, or document extraction.
```

Example 2 (unknown):
```unknown
Helps with PDFs.
```

---

## Guardrails in Visual Builder - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/visual-builder/structured-outputs/output-contract

**Contents:**
- Guardrails in Visual Builder
- Open the Guardrails editor
- Require components or artifacts
- Forbid free text
- Require a transfer
- Choose what happens on a violation
- Field reference
- Related
  - On this page

Constrain what a sub agent can emit — require components, artifacts, or a transfer, and forbid free text — using the Guardrails section in the Visual Builder.

Each sub agent has a Guardrails section that defines its output contract: the set of rules its responses must satisfy. By default a sub agent can respond however it likes — narrate free text, emit a component, or transfer. Guardrails let you declare — and have the framework enforce — that a response takes a specific shape, instead of relying on prompt discipline alone.

This is most useful for multi-stage pipelines (for example query → select → respond) where the intermediate stages should hand off structured data rather than narrate to the user.

In the TypeScript SDK, this is the sub agent's outputContract. Guardrails configure the same contract visually.

The Components and Artifacts fields hold the data components and artifact components this sub agent can emit. The count badge next to each label reflects how many are selected.

Selecting a component or artifact only makes it available — click the selected chip to toggle whether it is required.

Uncheck Include text to stop the sub agent from emitting free-form prose. When unchecked, the sub agent can only respond with the components and artifacts above, a transfer, or tool calls. Leave it checked to allow narration alongside any required items.

When the sub agent has at least one transfer target, a Require transfer switch appears. Turn it on to make every response hand off to another sub agent instead of replying directly.

Require transfer is mutually exclusive with required components or artifacts. A turn ends one way — a transfer hands off, or a component or artifact is emitted, not both.

The On violation setting controls what the framework does when a response breaks a rule:

Configure intelligent status updates using structured components in the Visual Builder

Create webhook endpoints that let external services invoke your agents via HTTP

Tell us how this can be better.

---

## Evaluations in Visual Builder - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/visual-builder/evaluations

**Contents:**
- Evaluations in Visual Builder
- Where to find evaluations
- Evaluators
  - Creating an evaluator
  - Example Evaluator
  - Editing or deleting
- Batch evaluations
  - Creating a batch evaluation
  - Viewing results
- Continuous tests

Configure evaluators, batch evaluations, and continuous tests in the Visual Builder

The Visual Builder lets you define, manage, and run evaluations. You define evaluators (how to score agents), then run them in two ways: batch evaluations (one-time jobs over selected conversations) and continuous tests (automatic evaluation on a sample of live conversations). For fixed test cases (curated prompts and optional gold outputs), use test suites and test suite runs instead of batch evaluation over conversation history.

You need Edit permission on the project to create or change evaluators, batch evaluations, and continuous tests. See Access control for roles and permissions.

Evaluators define how agent responses are scored. Each evaluator has a prompt, a schema, and optionally a pass criteria to produce a score or structured output.

Go to Evaluations and open the Evaluators tab.

Save. The evaluator is then available for batch evaluations and continuous tests.

From the Evaluators list, open an evaluator to view or edit it, or use the delete action.

Batch evaluations run selected evaluators over a set of conversations once. In the Visual Builder you scope that set with a date range. The API and TypeScript SDK can also scope a job to specific test suite runs using test suite run IDs (datasetRunIds in the API)—for example to evaluate only conversations produced by a given test suite run. Starting a test suite run with evaluators creates a matching batch evaluation automatically.

For run-scoped jobs, use the Evaluations API or triggerBatchEvaluation with datasetRunIds, or attach evaluators when you trigger a test suite run from Test Suites.

From the Batch Evaluations list, open a job to see its results: per-conversation evaluation outputs, pass/fail if pass criteria are set, and status. You can filter and inspect individual results.

Continuous tests evaluate a sample of live conversations automatically. You specify which evaluators to run, which agents (optional), and a sample rate (e.g. 10% of conversations).

From the Continuous Tests list, open a config to see Results for that run config: all evaluation results triggered by that continuous test, with filters.

For programmatic access to the same concepts, see TypeScript SDK: Evaluations and the Evaluations API reference.

Reusable instruction blocks you can attach to sub-agents

Build fixed test cases, run agents against them, and evaluate outputs using test suites in the Visual Builder

Tell us how this can be better.

---

## Trigger Inkeep agents from Zendesk tickets - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/visual-builder/triggers/ticketing/zendesk

**Contents:**
- Trigger Inkeep agents from Zendesk tickets
- Prerequisites
- Option 1: Subscribe to a Zendesk event
- Option 2: Use a business rule trigger
  - Create the webhook
  - Create the trigger that fires it
  - Filter which tickets fire the webhook
- Next steps
- Routing agent
- Internal-note draft agent

Wire Zendesk to POST tickets to an Inkeep webhook trigger so an agent can act on them.

When something happens to a Zendesk ticket — a new one is created, an existing one is solved, a tag changes — you want Inkeep to know about it within seconds so an agent can act.

Zendesk offers two ways to fire a webhook, and each maps cleanly to a different use case:

Below are both paths. Pick the one that matches your need.

This is the leanest setup. Zendesk fires the webhook directly when the event happens — no business rule needed.

Following the Ticket Workflows tutorials? Use Option 2 below instead. Event subscriptions send Zendesk's fixed native payload — the ticket id arrives as detail.id, there's no ticket_id field, and you can't customize the body. The tutorials expect the custom JSON body with an explicit ticket_id, which only Option 2 lets you define.

In Zendesk, open Admin Center (gear icon → Admin Center) and go to Apps and integrations → Webhooks.

Click Create webhook.

For the connection type, choose Zendesk events. Add Ticket created (or whichever event you want to listen for — Ticket updated, Ticket solved, etc.) and click Next.

Fill in the webhook details:

Click Create webhook.

Use this path when you need to filter, send a custom JSON body, or fire on conditions that aren't standard Zendesk events.

In Zendesk, open Admin Center and go to Apps and integrations → Webhooks.

Click Create webhook.

For the connection type, choose Trigger or automation (not Zendesk events). Click Next.

Fill in the webhook details:

Click Create webhook.

In Admin Center, go to Objects and rules → Business rules → Triggers, then click Add trigger.

Give it a name (e.g. New ticket → Inkeep) and pick a category for organization.

Under Conditions → Meet ALL of the following, add:

Edit the trigger's Conditions to scope which tickets fire. The most common adjustments:

For the full list of conditions Zendesk supports, see Zendesk's trigger conditions reference.

Auto-tag every incoming ticket with the team that owns the problem.

Draft a KB-grounded reply as a private comment for reps to review.

Reply publicly when the KB is confident — stay quiet when it isn't.

Full reference for the Inkeep-side trigger configuration.

Run your Agents automatically on a recurring schedule or at a specific future time

Receive real-time HTTP notifications when conversations, feedback, or custom events occur in your project

Tell us how this can be better.

**Examples:**

Example 1 (json):
```json
{
  "ticket_id": "{{ticket.id}}",
  "subject": "{{ticket.title}}",
  "description": "{{ticket.description}}",
  "requester_name": "{{ticket.requester.name}}",
  "requester_email": "{{ticket.requester.email}}",
  "status": "{{ticket.status}}"
}
```

---

## Context Fetchers in Visual Builder - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/visual-builder/context-fetchers

**Contents:**
- Context Fetchers in Visual Builder
- Overview
- Key Features
- Context Fetchers vs Tools
- Basic Usage
- Defining Context Variables
- Using Credentials
  - Finding the Credential Reference ID
- Optional Context Fetches
- Using Context Variables

Set up context fetchers in the Visual Builder to pull real-time data from external APIs into agent prompts.

Context fetchers allow you to embed real-time data from external APIs into your agent prompts. Instead of hardcoding information in your agent prompt, context fetchers dynamically retrieve fresh data for each conversation.

Context Fetchers: Pre-populate agent prompts with dynamic data

Tools: Enable agents to take actions or fetch data during conversations

The keys that you define in the Context Variables JSON object are used to reference fetched data in your agent prompts. Each key in the JSON should map to a fetch definition with the following properties:

Here is an example of a valid Context Variables JSON object:

If your API requires authentication via a stored credential, add the credentialReferenceId field to your context variable definition:

To find the credential reference ID:

Use requiredToFetch when you want a fetch to only execute when certain headers are provided. This is useful for optional data that enhances the agent experience but isn't required.

Here's an example that fetches conversation history only when the x-conversation-id header is provided:

When x-conversation-id is not provided in the request headers:

Once you have defined your context variables, you can use them in your agent prompts.

Here is an example of an agent prompt using the context variable defined above:

Receive real-time HTTP notifications when conversations, feedback, or custom events occur in your project

Multi-tenant authentication with organizations, team management, and fine-grained project permissions

Tell us how this can be better.

**Examples:**

Example 1 (json):
```json
{
  "timeInfo": {
    "id": "time-info",
    "name": "Time Information",
    "trigger": "invocation",
    "fetchConfig": {
      "url": "https://world-time-api3.p.rapidapi.com/timezone/US/Pacific",
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "590c52974dmsh0da44377420ef4bp1c64ebjsnf8d55149e28d"
      }
    },
    "defaultValue": "Unable to fetch time information",
    "responseSchema": {
      "type": "object",
      "$schema": "http://json-schema.org/draft-07/schema#",
      "required": [
        "datetime"
      ],
      "properties": {
        "datetime": {
          "type": "string"
        },
        "timezone": {
          "type": "string"
        }
      }
    }
  }
}
```

Example 2 (json):
```json
{
  "projectDescription": {
    "id": "project-info",
    "name": "Project Information",
    "trigger": "initialization",
    "fetchConfig": {
      "url": "https://api.example.com/graphql",
      "body": {
        "query": "query GetProjectInfo { project { name description } }"
      },
      "method": "POST",
      "headers": {
        "Content-Type": "application/json"
      }
    },
    "defaultValue": "Unable to fetch project information",
    "credentialReferenceId": "u6zq98tz0lkloakuqbpdv"
  }
}
```

Example 3 (json):
```json
{
  "conversationHistory": {
    "id": "conversation-history",
    "name": "Conversation History",
    "trigger": "initialization",
    "fetchConfig": {
      "url": "https://api.example.com/conversations/{{headers.x-conversation-id}}",
      "method": "GET",
      "requiredToFetch": ["{{headers.x-conversation-id}}"]
    },
    "defaultValue": { "messages": [] }
  }
}
```

Example 4 (unknown):
```unknown
You are a helpful assistant, the time in the US Pacific timezone is {{timeInfo.datetime}}.
```

---
