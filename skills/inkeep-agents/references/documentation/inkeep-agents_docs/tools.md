# Inkeep-Agents_Docs - Tools

**Pages:** 5

---

## Register MCP Servers as Tools - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/typescript-sdk/tools/mcp-tools

**Contents:**
- Register MCP Servers as Tools
  - Step 1: Get an MCP server URL
  - Step 2: Register the MCP server as a tool in your agent
- Custom Usage Instructions
- Tool Output Pipelines
- Tool Overrides
  - Tool Override Options
- Authentication
  - Custom Headers
- Selecting Tools

Learn how to add and configure MCP tools for your agents

MCP tools connect to external MCP servers, enabling integration with a wide ecosystem of tools and services. Registering them as tools is a two step process:

You need access to an MCP server before you can use its tools. Learn about connecting to Native servers, using Composio, using Gram, or building Custom servers in the MCP Servers tutorial.

You can provide custom instructions for how agents should use tools from an MCP server by adding a prompt field:

The custom prompt is provided to agents as usage guidelines for all tools from this server, helping them understand the specific context and best practices for using these tools.

MCP tool outputs can be passed directly as inputs to subsequent tools — including other MCP tools or function tools — without creating an artifact in between. Agents handle this automatically when tools are designed for sequential use.

For example, a search MCP tool's results can be passed directly into a content extraction MCP tool, with the intermediate data never surfacing to the user. See Function Tools — Tool Output Pipelines for more detail on designing pipeline-friendly tools.

You can customize how individual tools from an MCP server appear to agents using tool overrides. This is useful for simplifying complex tools or providing better names and descriptions:

If your MCP server requires authentication, we support various authentication methods (via credentials):

For OAuth flows and OAuth 2.1 flows, it's recommended to use the Visual Builder for easier configuration.

See Credentials for detailed examples and implementation guidance for each authentication type.

You can configure custom headers for your MCP server requests. Use credentials for sensitive information (API keys, tokens) and headers for non-sensitive metadata (user agent, version info, etc.).

If some tools are sensitive (delete, write, payments, etc.), you can require explicit user approval before they run. See Tool approvals.

Enable only specific tools from a server using MCP Server tool names in the activeTools field.

While activeTools in mcpTool limits which tools are available from the server, you can further refine tool access at the sub agent level using mcpTool.with. This allows different agents to use different subsets of tools from the same MCP server.

You can also configure MCP tools to switch based on your environment. This is useful when you want to use different MCP tool configurations for development vs production.

Creating environment-aware MCP tools is a two step process:

This pattern is useful if you want to keep track of different credentials for different environments. When you push your project using the Inkeep CLI inkeep push command with the --env flag, the credentials will be loaded from the appropriate environment file. For example, if you run inkeep push --env development, the credentials will be loaded from the environments/development.env.ts file.

The CLI respects these environment variables when using the --env flag:

Attach reusable instruction blocks to sub-agents

Create custom JavaScript functions that your agents can execute in secure sandboxes

Tell us how this can be better.

**Examples:**

Example 1 (typescript):
```typescript
import { subAgent, mcpTool } from "@inkeep/agents-sdk";

// Register an existing MCP server as a tool
const knowledgeBaseTool = mcpTool({
  id: "knowledge-base-tool",
  name: "knowledge_base",
  description: "Search the company knowledge base for information",
  serverUrl: "https://kb.yourcompany.com/mcp", // URL of your deployed MCP server
});

const qaAgent = subAgent({
  id: "qa-agent",
  name: "QA Agent",
  description: "Responsible for answering questions about the company knowledge base.",
  prompt: `You are a Question-Answer agent that can answer questions about the company knowledge base. You have access to the knowledge base tool to search for information.`,
  canUse: () => [knowledgeBaseTool],
});
```

Example 2 (julia):
```julia
import { mcpTool } from "@inkeep/agents-sdk";

const weatherTool = mcpTool({
  id: "weather-tool",
  name: "weather_api",
  description: "Get current weather information",
  serverUrl: "https://weather.example.com/mcp",
  prompt: `When using weather tools, always ask for the user's location first if not provided. 
           Format temperature responses in both Celsius and Fahrenheit for better user experience.
           Include weather alerts if any severe conditions are detected.`,
});
```

Example 3 (json):
```json
import { mcpTool } from "@inkeep/agents-sdk";
import { z } from "zod";

const apiTool = mcpTool({
  id: "complex-api-tool",
  name: "enterprise_api",
  description: "Enterprise API with many complex tools",
  serverUrl: "https://api.enterprise.com/mcp",
  toolOverrides: {
    // Override a specific tool by its original name
    "fetch_user_analytics_data_with_filters": {
      displayName: "get_user_stats", // Simpler name for agents
      description: "Get user statistics and analytics data", // Clearer description
      schema: z.object({
        userId: z.string().describe("User ID to fetch stats for"),
        timeframe: z.enum(["daily", "weekly", "monthly"]).describe("Time period for stats")
      })
    }
  }
});
```

Example 4 (sql):
```sql
import { mcpTool } from "@inkeep/agents-sdk";

const customHeadersTool = mcpTool({
  id: "enterprise-api",
  name: "enterprise_data",
  description: "Enterprise API with custom headers",
  serverUrl: "https://enterprise.example.com/mcp",
  headers: {
    "User-Agent": "Inkeep-Agent/1.0",
    "X-Client-Version": "2024.1",
  },
});
```

---

## Function Tools in Visual Builder - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/visual-builder/tools/function-tools

**Contents:**
- Function Tools in Visual Builder
- Overview
- Creating Function Tools
  - In an Agent
  - Function Code
  - Input Schema
  - Dependencies
- Example: Weather API Integration
- Execution Environment
  - Sandbox Execution

Create custom JavaScript functions that your agents can execute directly in the Visual Builder

Function tools allow you to create custom JavaScript functions that agents can execute in secure sandboxes. Unlike MCP servers that connect to external services, function tools run your own code directly within the agent framework.

Function tools are ideal for:

Function tools are created within an Agent and can be used by multiple Sub Agents in that Agent.

If a function tool performs sensitive actions, require explicit user approval before it runs. See Tool approvals.

Add a Function Tool Node: In the Agent editor, drag a "Function Tool" node from the node palette onto the canvas

Configure the Function Tool: Click on the function tool node to open the configuration panel in the right sidebar:

Write your JavaScript function in the Code editor. The function receives arguments based on your Input Schema and should return a result:

Define the parameters your function accepts using JSON Schema. This ensures proper validation and helps agents understand how to use your function:

The Input Schema field offers two editing modes, controlled by the JSON toggle:

If you need external packages for your code to run, then specify the desired version in dependencies; otherwise we always use the latest version.

Manual Override: Specify dependencies in the Dependencies field to pin to specific versions:

Here's a complete example of a function tool that fetches weather data:

Name: get_current_weather

Description: Get current weather information for any city using OpenWeatherMap API

Function tools run in secure, isolated sandboxes that provide a safe execution environment for your code.

Functions execute with the following characteristics:

When deploying, you can configure:

See Deploy to Vercel for deployment-specific configuration.

Agents can pass the output of one tool directly as the input to another — no artifact creation required. This is useful when intermediate results are purely processing steps that don't need to be saved or shown to the user.

For example, a function tool that fetches a webpage can pass its output directly into a second function tool that extracts the relevant content. The intermediate data never surfaces to the user. When designing tools meant to be used in sequence, ensure their return types match the input types of downstream tools.

MCP server tools work the same way — their outputs can be piped into function tools or other MCP tools in a pipeline.

Function tools provide powerful customization capabilities while maintaining security and performance through sandboxed execution.

Credentials are used to authenticate MCP servers.

Configure tool approval requirements in the Visual Builder to pause execution until a user approves the request.

Tell us how this can be better.

**Examples:**

Example 1 (javascript):
```javascript
// Example: BMI calculator
function calculateBMI({ weight, height }) {
  const bmi = weight / (height * height);
  let category = "Normal";
  if (bmi < 18.5) category = "Underweight";
  else if (bmi >= 30) category = "Obese";

  return { bmi: Math.round(bmi * 10) / 10, category };
}
```

Example 2 (json):
```json
{
  "type": "object",
  "properties": {
    "weight": {
      "type": "number",
      "description": "Weight in kilograms"
    },
    "height": {
      "type": "number",
      "description": "Height in meters"
    }
  },
  "required": ["weight", "height"]
}
```

Example 3 (javascript):
```javascript
// Dependencies auto-detected from imports
const axios = require("axios"); // latest axios version
const lodash = require("lodash"); // Uses latest lodash version
```

Example 4 (json):
```json
{
  "axios": "1.6.0",
  "lodash": "4.17.21"
}
```

---

## User-Level vs Project-Level MCP Servers - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/visual-builder/tools/user-vs-project-mcp

**Contents:**
- User-Level vs Project-Level MCP Servers
- Overview
- User-Level MCP Servers
  - Benefits
  - Considerations
- Project-Level MCP Servers
  - Benefits
  - Considerations
  - When Sharing an Agent
  - On this page

Understand the difference between user-level and project-level MCP servers and how they affect your team workflow

When creating a new MCP server in the Inkeep Visual Builder, you can choose to configure it at the user-level or project-level.

Understanding the difference between these two types is important for managing your team's access to agents and their associated tools.

User-level MCP servers are configured per individual user. When you create a user-level MCP server, each team member must authenticate with their own credentials to use the associated tools.

Project-level MCP servers use shared credentials that are configured at the project level. All team members in the project can use these servers without individual authentication.

When sharing an agent with your team, they'll need to authenticate their own credentials for any user-level MCPs before being able to use the agent. Make sure to communicate this requirement to your team members.

Create MCP servers that agents can use to access external services.

Credentials are used to authenticate MCP servers.

Tell us how this can be better.

---

## Register MCP Servers in Visual Builder - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/visual-builder/tools/mcp-servers

**Contents:**
- Register MCP Servers in Visual Builder
- Register an MCP server
- Viewing server details
- Editing server settings
- Tool overrides
- Authentication setup
  - OAuth 2.1/PKCE authentication
    - 1-click Install MCP servers
  - Manual credential setup
  - Dynamic credential pass-through

Create MCP servers that agents can use to access external services.

MCP servers provide tools that your agents can use to interact with external APIs and services. Once created, these servers are automatically synced to discover available tools, which can then be added to your agents.

To use MCP servers with your agents, you can:

See the MCP Servers tutorial for details on all recommended approaches.

Once you have access to an MCP server, you can register it with your agents.

Go to the MCP Servers tab in the left sidebar, then select "New MCP server".

Fill in the required server details:

After creating an MCP server, you can view its details:

Tool discovery requires a successful connection to the MCP server. If the server shows "Click to Login" in the status, use the button to initiate the authentication process.

To modify an existing MCP server:

For each enabled tool, you can configure overrides to customize how the tool appears to agents:

Tool overrides help simplify complex tools for agents by providing clearer names, better descriptions, and simplified parameter schemas. The original tool functionality remains unchanged.

If your MCP server requires authentication, you have three options: use the "Click to Login" button to authenticate via OAuth, manually create a credential, or dynamically pass credentials at runtime via headers.

Here's an example list of popular service-maintained MCP Servers that support 1-click install via the OAuth 2.1/PKCE authentication flow.

To add them to your project:

When you register the server, an authentication pop-up will appear and allow you to sign in. Your credentials will automatically be saved to your Nango Store or Keychain credential store.

For in-product copilots where each end user has their own credentials for the MCP server, you can pass credentials dynamically at runtime via HTTP headers instead of storing a single static credential.

The template is resolved at runtime using the validated header from the incoming request and sent as an outbound header to the MCP server on every tool call.

Header keys are converted to lowercase (e.g., Auth-Token becomes auth-token). Define schema properties to match the lowercased key exactly. See Headers — Forwarding Headers to MCP Servers for a full walkthrough.

For additional remote MCP servers you can connect to:

The Visual Builder requires Streamable HTTP or SSE transport to connect to MCP servers. If you have an MCP server that runs in stdio mode locally, you can use the following setup to connect to it.

Once you have created an MCP server, you can add it to your agents:

For tools that can make destructive changes, require explicit user approval before execution. See Tool approvals.

For detailed instructions on working with MCP servers in agents, see the Sub Agents page.

MCP tool outputs can be passed directly as inputs to subsequent tools — including other MCP servers or function tools — without creating an artifact in between. Agents handle this automatically when tools are designed for sequential use. See Function Tools — Tool Output Pipelines for more detail.

Choose between classic and durable execution modes for your agents.

Understand the difference between user-level and project-level MCP servers and how they affect your team workflow

Tell us how this can be better.

**Examples:**

Example 1 (json):
```json
{
  "Authorization": "Bearer {{headers.auth-token}}"
}
```

Example 2 (sass):
```sass
SUPABASE_ACCESS_TOKEN=YOUR_SUPABASE_ACCESS_TOKEN mcp-proxy --port 4444 --shell "npx -y @supabase/mcp-server-supabase@latest --read-only"
```

---

## Tool approvals in Visual Builder - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/visual-builder/tools/tool-approvals

**Contents:**
- Tool approvals in Visual Builder
- MCP tools
  - Open the MCP server node
  - Locate the Tool Configuration section
  - Enable approval for individual tools
  - Bulk toggle approvals
  - Save your changes
- Function tools
  - Open the function tool node
  - Enable the Require approval setting

Configure tool approval requirements in the Visual Builder to pause execution until a user approves the request.

Tool approvals let you mark specific tools as requiring user approval before execution. When an agent tries to run a tool that needs approval, execution pauses until your client approves or denies the request.

This is useful for tools that can make destructive changes, access sensitive data, or perform actions that should be reviewed by a human before proceeding.

For MCP servers, you can configure approval on individual tools or bulk toggle approval for all enabled tools.

In the Agent Builder canvas, click on an MCP server node that is connected to a Sub Agent. This opens the node editor in the right panel.

Find the Tool Configuration section. This displays all available tools from the MCP server with checkboxes to enable/disable each tool.

Each enabled tool has a Needs Approval? checkbox on the right side. Check this box for any tool that should require user approval before execution.

Use the checkbox in the Needs Approval? header to toggle approval for all enabled tools at once:

Clicking the header checkbox toggles between requiring approval for all enabled tools or none.

Click Save to apply your tool approval configuration.

Only enabled tools (checked in the tool list) can have approval configured. Disabled tools are not available to the agent and don't have approval settings.

For function tools, approval applies to the entire tool since each function tool node represents a single tool.

In the Agent Builder canvas, click on a function tool node that is connected to a Sub Agent. This opens the node editor in the right panel.

Scroll to find the Require approval checkbox. Check it to require user approval before this function tool executes.

Click Save to apply your changes.

When a tool with approval enabled is invoked:

For details on implementing the approval flow in your client application:

Create custom JavaScript functions that your agents can execute directly in the Visual Builder

Configure HTTP headers in the Visual Builder to pass dynamic context for personalized agent interactions.

Tell us how this can be better.

---
