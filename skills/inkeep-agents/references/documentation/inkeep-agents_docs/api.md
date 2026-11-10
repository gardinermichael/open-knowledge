# Inkeep-Agents_Docs - Api

**Pages:** 34

---

## Webhooks - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/api-reference/webhooks

**Contents:**
- Webhooks
- List Webhook Destinations
  - Authorization
  - Path Parameters
  - Query Parameters
  - Response Body
  - 200application/json
  - 400application/problem+json
  - 401application/problem+json
  - 403application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

Agent IDs to scope this webhook to. Omit or empty for all agents.

Webhook destination description

Whether the webhook destination is enabled

Evaluator IDs to scope evaluation.failed events to. Omit or empty for all evaluators.

Event types to subscribe to

Custom HTTP headers as key-value pairs. Keys must be valid RFC 7230 token characters (alphanumeric plus !#$%&'*+-.^_`|~), max 128 chars. Values: 1-1000 chars. Reserved names: Connection, Keep-Alive, TE, Trailer, Transfer-Encoding, Upgrade, Proxy-Authorization, Proxy-Connection, Content-Length.

Webhook destination name

Slack channel ID for bot-based delivery. Provide either slackChannelId or url, not both.

Destination URL to POST events to. Provide either url or slackChannelId, not both.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

Agent IDs to scope this webhook to. Empty array for all agents.

Webhook destination description

Whether the webhook destination is enabled

Evaluator IDs to scope evaluation.failed events to. Empty array for all evaluators.

Event types to subscribe to

Custom HTTP headers as key-value pairs. Keys must be valid RFC 7230 token characters (alphanumeric plus !#$%&'*+-.^_`|~), max 128 chars. Values: 1-1000 chars. Reserved names: Connection, Keep-Alive, TE, Trailer, Transfer-Encoding, Upgrade, Proxy-Authorization, Proxy-Connection, Content-Length.

Webhook destination name

Slack channel ID for bot-based delivery. Provide either slackChannelId or url, not both.

Destination URL to POST events to. Provide either url or slackChannelId, not both.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Operations for managing users

Work app integrations (Slack, Teams, etc.)

**Examples:**

Example 1 (unknown):
```unknown
curl -X GET "https://api.pilot.inkeep.com/manage/tenants/tenant_123/projects/project-456/webhook-destinations"
```

Example 2 (json):
```json
{
  "data": [
    {
      "agentIds": [
        "string"
      ],
      "createdAt": "string",
      "description": "string",
      "enabled": true,
      "evaluatorIds": [
        "string"
      ],
      "eventTypes": [
        "conversation.created"
      ],
      "headers": {
        "property1": "string",
        "property2": "string"
      },
      "id": "string",
      "name": "string",
      "slackChannelId": "string",
      "updatedAt": "string",
      "url": "string"
    }
  ],
  "pagination": {
    "completedCount": 0,
    "limit": 10,
    "page": 1,
    "pages": 0,
    "total": 0
  }
}
```

Example 3 (json):
```json
{
  "code": "bad_request",
  "detail": "Bad Request",
  "instance": "/conversations/123",
  "requestId": "req_1234567890",
  "status": 400,
  "title": "Bad Request",
  "error": {
    "code": "bad_request",
    "message": "Bad Request"
  }
}
```

Example 4 (json):
```json
{
  "code": "unauthorized",
  "detail": "Unauthorized",
  "instance": "/conversations/123",
  "requestId": "req_1234567890",
  "status": 401,
  "title": "Unauthorized",
  "error": {
    "code": "unauthorized",
    "message": "Unauthorized"
  }
}
```

---

## Executions - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/api-reference/executions

**Contents:**
- Executions
- Create durable agent execution
  - Authorization
  - Request Body
  - Response Body
  - 200text/event-stream
  - 400application/json
  - 404application/json
- Get execution status
  - Authorization

Durable agent execution endpoints

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

The conversation messages

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Application-level event ingest and webhook delivery

Operations for managing external agents

**Examples:**

Example 1 (json):
```json
curl -X POST "https://api.pilot.inkeep.com/run/api/executions" \  -H "Content-Type: application/json" \  -d '{    "messages": [      {        "content": "string",        "role": "system"      }    ]  }'
```

Example 2 (json):
```json
{
  "error": "string"
}
```

Example 3 (json):
```json
{
  "error": "string"
}
```

Example 4 (unknown):
```unknown
curl -X GET "https://api.pilot.inkeep.com/run/api/executions/string"
```

---

## Workspaces - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/api-reference/workspaces

**Contents:**
- Workspaces
- List Workspaces
  - Authorization
  - Response Body
  - 200application/json
- Get Workspace
  - Authorization
  - Path Parameters
  - Response Body
  - 200application/json

Operations for managing Slack workspaces

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

Workflow trigger endpoints

Get started with Inkeep Enterprise

**Examples:**

Example 1 (unknown):
```unknown
curl -X GET "https://api.pilot.inkeep.com/work-apps/slack/workspaces"
```

Example 2 (json):
```json
{
  "workspaces": [
    {
      "connectionId": "string",
      "defaultAgentName": "string",
      "hasDefaultAgent": true,
      "teamDomain": "string",
      "teamId": "string",
      "teamName": "string",
      "tenantId": "string"
    }
  ]
}
```

Example 3 (unknown):
```unknown
curl -X GET "https://api.pilot.inkeep.com/work-apps/slack/workspaces/T012AB3C4"
```

Example 4 (json):
```json
{
  "connectionId": "string",
  "defaultAgent": {
    "agentId": "string",
    "grantAccessToMembers": true,
    "projectId": "string"
  },
  "teamId": "string",
  "teamName": "string",
  "tenantId": "string"
}
```

---

## Triggers - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/api-reference/triggers

**Contents:**
- Triggers
- List Triggers
  - Authorization
  - Path Parameters
  - Query Parameters
  - Response Body
  - 200application/json
  - 400application/problem+json
  - 401application/problem+json
  - 403application/problem+json

Operations for managing triggers

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

User ID of the user who created this trigger

Delay in ms between dispatching each user execution (0-600000)

Whether the trigger is enabled

JSON Schema for input validation

Message template with {{placeholder}} syntax

User ID to run the webhook as

Array of user IDs to run this trigger as (multi-user)

Configuration for webhook signature verification

Reference to credential containing signing secret

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

User ID of the user who created this trigger

Delay in ms between dispatching each user execution (0-600000)

Whether the trigger is enabled

JSON Schema for input validation

Message template with {{placeholder}} syntax

User ID to run the webhook as

Array of user IDs to run this trigger as (multi-user)

Configuration for webhook signature verification

Reference to credential containing signing secret

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

Start date for filtering (ISO8601)

End date for filtering (ISO8601)

Filter by invocation status

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

Trigger Invocation ID

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

Optional structured message parts (from original trace)

Specific associated user to rerun this trigger as

The user message to send to the agent

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

User ID to add to this trigger

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

User IDs to set on this trigger

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Operations for managing MCP tools

Operations for managing user profile

**Examples:**

Example 1 (unknown):
```unknown
curl -X GET "https://api.pilot.inkeep.com/manage/tenants/tenant_123/projects/project-456/agents/agent_789/triggers"
```

Example 2 (json):
```json
{
  "data": [
    {
      "authentication": "string",
      "createdAt": "string",
      "createdBy": "user_123",
      "description": "string",
      "dispatchDelayMs": 600000,
      "enabled": true,
      "id": "string",
      "inputSchema": "string",
      "messageTemplate": "string",
      "name": "string",
      "outputTransform": "string",
      "runAsUserId": "user_123",
      "signatureVerification": {
        "algorithm": "sha256",
        "componentJoin": {
          "separator": "string",
          "strategy": "concatenate"
        },
        "encoding": "hex",
        "signature": {
          "key": "string",
          "prefix": "string",
          "regex": "string",
          "source": "header"
        },
        "signedComponents": [
          {
            "key": "string",
            "regex": "string",
            "required": true,
            "source": "header",
            "value": "string"
          }
        ],
        "validation": {
          "allowEmptyBody": true,
          "headerCaseSensitive": false,
          "normalizeUnicode": false
        }
      },
      "signingSecretCredentialReferenceId": "string",
      "updatedAt": "string",
      "runAsUserIds": [
        "string"
      ],
      "userCount": 0,
      "webhookUrl": "string"
    }
  ],
  "pagination": {
    "completedCount": 0,
    "limit": 10,
    "page": 1,
    "pages": 0,
    "total": 0
  }
}
```

Example 3 (json):
```json
{
  "code": "bad_request",
  "detail": "Bad Request",
  "instance": "/conversations/123",
  "requestId": "req_1234567890",
  "status": 400,
  "title": "Bad Request",
  "error": {
    "code": "bad_request",
    "message": "Bad Request"
  }
}
```

Example 4 (json):
```json
{
  "code": "unauthorized",
  "detail": "Unauthorized",
  "instance": "/conversations/123",
  "requestId": "req_1234567890",
  "status": 401,
  "title": "Unauthorized",
  "error": {
    "code": "unauthorized",
    "message": "Unauthorized"
  }
}
```

---

## Functions - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/api-reference/functions

**Contents:**
- Functions
- List Functions
  - Authorization
  - Path Parameters
  - Query Parameters
  - Response Body
  - 200application/json
  - 400application/problem+json
  - 401application/problem+json
  - 403application/problem+json

Operations for managing functions

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Operations for managing function tools

GitHub App integration endpoints

**Examples:**

Example 1 (unknown):
```unknown
curl -X GET "https://api.pilot.inkeep.com/manage/tenants/tenant_123/projects/project-456/functions"
```

Example 2 (json):
```json
{
  "data": [
    {
      "createdAt": "string",
      "dependencies": "string",
      "executeCode": "string",
      "id": "string",
      "inputSchema": "string",
      "updatedAt": "string"
    }
  ],
  "pagination": {
    "completedCount": 0,
    "limit": 10,
    "page": 1,
    "pages": 0,
    "total": 0
  }
}
```

Example 3 (json):
```json
{
  "code": "bad_request",
  "detail": "Bad Request",
  "instance": "/conversations/123",
  "requestId": "req_1234567890",
  "status": 400,
  "title": "Bad Request",
  "error": {
    "code": "bad_request",
    "message": "Bad Request"
  }
}
```

Example 4 (json):
```json
{
  "code": "unauthorized",
  "detail": "Unauthorized",
  "instance": "/conversations/123",
  "requestId": "req_1234567890",
  "status": 401,
  "title": "Unauthorized",
  "error": {
    "code": "unauthorized",
    "message": "Unauthorized"
  }
}
```

---

## Slack - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/api-reference/slack

**Contents:**
- Slack
- Install Slack App
  - Query Parameters
  - Response Body
  - 302
- Slack OAuth Callback
  - Query Parameters
  - Response Body
  - 302
- Create Nango Connect Session

Slack App integration endpoints

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

Reusable instruction blocks that can be attached to multiple sub-agents and ordered for priority

Operations for managing sub agents

**Examples:**

Example 1 (unknown):
```unknown
curl -X GET "https://api.pilot.inkeep.com/work-apps/slack/install"
```

Example 2 (unknown):
```unknown
curl -X GET "https://api.pilot.inkeep.com/work-apps/slack/oauth_redirect"
```

Example 3 (json):
```json
curl -X POST "https://api.pilot.inkeep.com/work-apps/slack/users/connect" \  -H "Content-Type: application/json" \  -d '{    "userId": "string"  }'
```

Example 4 (json):
```json
{
  "connectUrl": "string",
  "sessionToken": "string"
}
```

---

## Scheduled Triggers - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/api-reference/scheduled-triggers

**Contents:**
- Scheduled Triggers
- List Scheduled Triggers
  - Authorization
  - Path Parameters
  - Query Parameters
  - Response Body
  - 200application/json
  - 400application/problem+json
  - 401application/problem+json
  - 403application/problem+json

Operations for managing scheduled triggers

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

User ID of the user who created this trigger

Cron expression in standard 5-field format (minute hour day month weekday)

IANA timezone for cron expression (e.g., America/New_York, Europe/London)

Scheduled trigger description

Delay in ms between dispatching each user workflow (0-600000)

Whether the trigger is enabled

Message template with {{placeholder}} syntax

Scheduled trigger name

Static payload for agent execution

Branch ref to run the agent from

Array of user IDs to run this trigger as (multi-user)

One-time execution timestamp

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

Include currently running invocations in results

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

User ID of the user who created this trigger

Cron expression in standard 5-field format (minute hour day month weekday)

IANA timezone for cron expression (e.g., America/New_York, Europe/London)

Scheduled trigger description

Delay in ms between dispatching each user workflow (0-600000)

Whether the trigger is enabled

Message template with {{placeholder}} syntax

Scheduled trigger name

Static payload for agent execution

Branch ref to run the agent from

Array of user IDs to run this trigger as (multi-user)

One-time execution timestamp

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

Start date for filtering (ISO8601)

End date for filtering (ISO8601)

Filter by invocation status

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

Scheduled Trigger Invocation ID

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

Scheduled Trigger Invocation ID

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

Scheduled Trigger Invocation ID to rerun

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

Target a specific user for the manual run

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

User ID to add to this trigger

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

User IDs to set on this trigger

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Operations for the resolved ref (branch name, tag name, or commit hash)

Reusable instruction blocks that can be attached to multiple sub-agents and ordered for priority

**Examples:**

Example 1 (unknown):
```unknown
curl -X GET "https://api.pilot.inkeep.com/manage/tenants/tenant_123/projects/project-456/agents/agent_789/scheduled-triggers"
```

Example 2 (json):
```json
{
  "data": [
    {
      "createdAt": "string",
      "createdBy": "string",
      "cronExpression": "string",
      "cronTimezone": "string",
      "datasetRunConfigId": "string",
      "description": "string",
      "dispatchDelayMs": -2147483648,
      "enabled": true,
      "id": "string",
      "maxRetries": -2147483648,
      "messageTemplate": "string",
      "name": "string",
      "nextRunAt": "2019-08-24T14:15:22Z",
      "payload": {
        "property1": null,
        "property2": null
      },
      "ref": "string",
      "retryDelaySeconds": -2147483648,
      "runAsUserId": "string",
      "runAt": "string",
      "timeoutSeconds": -2147483648,
      "updatedAt": "string",
      "lastRunAt": "2019-08-24T14:15:22Z",
      "lastRunConversationIds": [
        "string"
      ],
      "lastRunStatus": "completed",
      "lastRunSummary": {
        "completed": 0,
        "failed": 0,
        "pending": 0,
        "running": 0,
        "total": 0
      },
      "runAsUserIds": [
        "string"
      ],
      "userCount": 0
    }
  ],
  "pagination": {
    "completedCount": 0,
    "limit": 10,
    "page": 1,
    "pages": 0,
    "total": 0
  }
}
```

Example 3 (json):
```json
{
  "code": "bad_request",
  "detail": "Bad Request",
  "instance": "/conversations/123",
  "requestId": "req_1234567890",
  "status": 400,
  "title": "Bad Request",
  "error": {
    "code": "bad_request",
    "message": "Bad Request"
  }
}
```

Example 4 (json):
```json
{
  "code": "unauthorized",
  "detail": "Unauthorized",
  "instance": "/conversations/123",
  "requestId": "req_1234567890",
  "status": 401,
  "title": "Unauthorized",
  "error": {
    "code": "unauthorized",
    "message": "Unauthorized"
  }
}
```

---

## Artifact Components - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/api-reference/artifact-components

**Contents:**
- Artifact Components
- Associate Artifact Component with Agent
  - Authorization
  - Path Parameters
  - Request Body
  - Response Body
  - 201application/json
  - 400application/problem+json
  - 401application/problem+json
  - 403application/problem+json

Operations for managing artifact components

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

Operations for managing app credentials

Authentication endpoints for app credentials

**Examples:**

Example 1 (json):
```json
curl -X POST "https://api.pilot.inkeep.com/manage/tenants/tenant_123/projects/project-456/agents/agent_789/sub-agent-artifact-components" \  -H "Content-Type: application/json" \  -d '{    "agentId": "string",    "artifactComponentId": "resource_789",    "subAgentId": "resource_789"  }'
```

Example 2 (json):
```json
{
  "data": {
    "artifactComponentId": "string",
    "createdAt": "string",
    "id": "string",
    "subAgentId": "string"
  }
}
```

Example 3 (json):
```json
{
  "code": "bad_request",
  "detail": "Bad Request",
  "instance": "/conversations/123",
  "requestId": "req_1234567890",
  "status": 400,
  "title": "Bad Request",
  "error": {
    "code": "bad_request",
    "message": "Bad Request"
  }
}
```

Example 4 (json):
```json
{
  "code": "unauthorized",
  "detail": "Unauthorized",
  "instance": "/conversations/123",
  "requestId": "req_1234567890",
  "status": 401,
  "title": "Unauthorized",
  "error": {
    "code": "unauthorized",
    "message": "Unauthorized"
  }
}
```

---

## Entitlements - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/api-reference/entitlements

**Contents:**
- Entitlements
- List Org Entitlements
  - Authorization
  - Path Parameters
  - Response Body
  - 200application/json
  - 400application/problem+json
  - 401application/problem+json
  - 403application/problem+json
  - 404application/problem+json

Operations for managing organization entitlements

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Operations for managing data components

Operations for managing evaluations

**Examples:**

Example 1 (unknown):
```unknown
curl -X GET "https://api.pilot.inkeep.com/manage/tenants/tenant_123/entitlements"
```

Example 2 (json):
```json
{
  "entitlements": [
    {
      "maxValue": 10,
      "resourceType": "seat:admin"
    }
  ]
}
```

Example 3 (json):
```json
{
  "code": "bad_request",
  "detail": "Bad Request",
  "instance": "/conversations/123",
  "requestId": "req_1234567890",
  "status": 400,
  "title": "Bad Request",
  "error": {
    "code": "bad_request",
    "message": "Bad Request"
  }
}
```

Example 4 (json):
```json
{
  "code": "unauthorized",
  "detail": "Unauthorized",
  "instance": "/conversations/123",
  "requestId": "req_1234567890",
  "status": 401,
  "title": "Unauthorized",
  "error": {
    "code": "unauthorized",
    "message": "Unauthorized"
  }
}
```

---

## A2A - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/api-reference/a2a

**Contents:**
- A2A
- /run/agents/.well-known/agent.json
  - Authorization
  - Header Parameters
  - Response Body
  - 200application/json
  - 404

Agent-to-Agent communication endpoints

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Explore the Inkeep Agents API endpoints for managing, running, and evaluating agents.

Operations for managing agents

**Examples:**

Example 1 (unknown):
```unknown
curl -X GET "https://api.pilot.inkeep.com/run/agents/.well-known/agent.json"
```

Example 2 (json):
```json
{
  "defaultInputModes": [
    "string"
  ],
  "defaultOutputModes": [
    "string"
  ],
  "description": "string",
  "name": "string",
  "skills": [
    null
  ],
  "url": "string",
  "version": "string"
}
```

---

## Evaluations - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/api-reference/evaluations

**Contents:**
- Evaluations
- Trigger evaluation on a single conversation
  - Authorization
  - Path Parameters
  - Request Body
  - Response Body
  - 200application/json
  - 400application/problem+json
  - 401application/problem+json
  - 403application/problem+json

Operations for managing evaluations

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

Delay in ms between each item execution (overrides schedule default)

User ID to run dataset items as

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

Cron expression for the schedule

Timezone for the cron schedule

Whether the schedule is active

Number of retry attempts (0-10)

Seconds between retries (10-3600)

Execution timeout (30-780)

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

Override the branch/ref used by the new run

Override evaluator IDs. Defaults to the evaluators attached to the source run.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

Only include results whose conversation was created on or after this ISO timestamp

Only include results whose conversation was created on or before this ISO timestamp

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

Only include results whose conversation was created on or after this ISO timestamp

Only include results whose conversation was created on or before this ISO timestamp

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Operations for managing organization entitlements

Application-level event ingest and webhook delivery

**Examples:**

Example 1 (json):
```json
curl -X POST "https://api.pilot.inkeep.com/evals/tenants/tenant_123/projects/project-456/evaluate-conversation" \  -H "Content-Type: application/json" \  -d '{    "conversationId": "string"  }'
```

Example 2 (json):
```json
{
  "evaluationsTriggered": 0,
  "message": "string",
  "success": true
}
```

Example 3 (json):
```json
{
  "code": "bad_request",
  "detail": "Bad Request",
  "instance": "/conversations/123",
  "requestId": "req_1234567890",
  "status": 400,
  "title": "Bad Request",
  "error": {
    "code": "bad_request",
    "message": "Bad Request"
  }
}
```

Example 4 (json):
```json
{
  "code": "unauthorized",
  "detail": "Unauthorized",
  "instance": "/conversations/123",
  "requestId": "req_1234567890",
  "status": 401,
  "title": "Unauthorized",
  "error": {
    "code": "unauthorized",
    "message": "Unauthorized"
  }
}
```

---

## Context Configs - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/api-reference/context-configs

**Contents:**
- Context Configs
- List Context Configurations
  - Authorization
  - Path Parameters
  - Query Parameters
  - Response Body
  - 200application/json
  - 400application/problem+json
  - 401application/problem+json
  - 403application/problem+json

Operations for managing context configurations

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

Context variables configuration with fetch definitions

JSON Schema for validating request headers

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

Context variables configuration with fetch definitions

JSON Schema for validating request headers

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

CLI authentication endpoints

Operations for managing conversations

**Examples:**

Example 1 (unknown):
```unknown
curl -X GET "https://api.pilot.inkeep.com/manage/tenants/tenant_123/projects/project-456/agents/agent_789/context-configs"
```

Example 2 (json):
```json
{
  "data": [
    {
      "contextVariables": "string",
      "createdAt": "string",
      "headersSchema": {},
      "id": "string",
      "updatedAt": "string"
    }
  ],
  "pagination": {
    "completedCount": 0,
    "limit": 10,
    "page": 1,
    "pages": 0,
    "total": 0
  }
}
```

Example 3 (json):
```json
{
  "code": "bad_request",
  "detail": "Bad Request",
  "instance": "/conversations/123",
  "requestId": "req_1234567890",
  "status": 400,
  "title": "Bad Request",
  "error": {
    "code": "bad_request",
    "message": "Bad Request"
  }
}
```

Example 4 (json):
```json
{
  "code": "unauthorized",
  "detail": "Unauthorized",
  "instance": "/conversations/123",
  "requestId": "req_1234567890",
  "status": 401,
  "title": "Unauthorized",
  "error": {
    "code": "unauthorized",
    "message": "Unauthorized"
  }
}
```

---

## Agents - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/api-reference/agents

**Contents:**
- Agents
- List available agents
  - Authorization
  - Response Body
  - 200application/json
  - 401
  - 500
- Create Full Agent
  - Authorization
  - Path Parameters

Operations for managing agents

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

Agent-to-Agent communication endpoints

Operations for managing API keys

**Examples:**

Example 1 (unknown):
```unknown
curl -X GET "https://api.pilot.inkeep.com/manage/available-agents"
```

Example 2 (json):
```json
{
  "data": [
    {
      "agentId": "string",
      "agentName": "string",
      "projectId": "string"
    }
  ]
}
```

Example 3 (json):
```json
curl -X POST "https://api.pilot.inkeep.com/manage/tenants/tenant_123/projects/project-456/agent" \  -H "Content-Type: application/json" \  -d '{    "id": "resource_789",    "name": "string",    "subAgents": {      "property1": {        "id": "resource_789",        "name": "string",        "canUse": [          {            "toolId": "string"          }        ],        "type": "internal"      },      "property2": {        "id": "resource_789",        "name": "string",        "canUse": [          {            "toolId": "string"          }        ],        "type": "internal"      }    }  }'
```

Example 4 (json):
```json
{
  "data": {
    "contextConfigId": "string",
    "defaultSubAgentId": "my-default-subagent",
    "description": "string",
    "executionMode": "classic",
    "id": "resource_789",
    "models": {
      "base": {
        "allowedProviders": [
          "string"
        ],
        "fallbackModels": [
          "string"
        ],
        "model": "string",
        "providerOptions": {
          "property1": null,
          "property2": null
        }
      },
      "structuredOutput": {
        "allowedProviders": [
          "string"
        ],
        "fallbackModels": [
          "string"
        ],
        "model": "string",
        "providerOptions": {
          "property1": null,
          "property2": null
        }
      },
      "summarizer": {
        "allowedProviders": [
          "string"
        ],
        "fallbackModels": [
          "string"
        ],
        "model": "string",
        "providerOptions": {
          "property1": null,
          "property2": null
        }
      }
    },
    "name": "string",
    "prompt": "string",
    "statusUpdates": {
      "enabled": true,
      "numEvents": 1,
      "prompt": "string",
      "statusComponents": [
        {
          "description": "string",
          "detailsSchema": {
            "properties": {
              "property1": null,
              "property2": null
            },
            "required": [
              "string"
            ],
            "type": "object"
          },
          "type": "string"
        }
      ],
      "timeInSeconds": 1
    },
    "stopWhen": {
      "transferCountIs": 1
    },
    "contextConfig": {
      "contextVariables": {},
      "headersSchema": {},
      "id": "resource_789"
    },
    "externalAgents": {
      "property1": {
        "baseUrl": "http://example.com",
        "credentialReferenceId": "string",
        "description": "string",
        "id": "resource_789",
        "name": "string"
      },
      "property2": {
        "baseUrl": "http://example.com",
        "credentialReferenceId": "string",
        "description": "string",
        "id": "resource_789",
        "name": "string"
      }
    },
    "functionTools": {
      "property1": {
        "description": "string",
        "functionId": "string",
        "id": "resource_789",
        "name": "string"
      },
      "property2": {
        "description": "string",
        "functionId": "string",
        "id": "resource_789",
        "name": "string"
      }
    },
    "functions": {
      "property1": {
        "dependencies": {
          "property1": "string",
          "property2": "string"
        },
        "executeCode": "string",
        "id": "resource_789",
        "inputSchema": {
          "property1": null,
          "property2": null
        }
      },
      "property2": {
        "dependencies": {
          "property1": "string",
          "property2": "string"
        },
        "executeCode": "string",
        "id": "resource_789",
        "inputSchema": {
          "property1": null,
          "property2": null
        }
      }
    },
    "subAgents": {
      "property1": {
        "conversationHistoryConfig": "string",
        "createdAt": "string",
        "description": "string",
        "id": "resource_789",
        "models": {
          "base": {
            "allowedProviders": [
              "string"
            ],
            "fallbackModels": [
              "string"
            ],
            "model": "string",
            "providerOptions": {
              "property1": null,
              "property2": null
            }
          },
          "structuredOutput": {
            "allowedProviders": [
              "string"
            ],
            "fallbackModels": [
              "string"
            ],
            "model": "string",
            "providerOptions": {
              "property1": null,
              "property2": null
            }
          },
          "summarizer": {
            "allowedProviders": [
              "string"
            ],
            "fallbackModels": [
              "string"
            ],
            "model": "string",
            "providerOptions": {
              "property1": null,
              "property2": null
            }
          }
        },
        "name": "string",
        "outputContract": {
          "allowText": true,
          "onViolation": "retry",
          "requireArtifact": [
            "string"
          ],
          "requireComponent": [
            "string"
          ],
          "requireTransfer": true,
          "retryBudget": 0,
          "property1": null,
          "property2": null
        },
        "prompt": "string",
        "stopWhen": {
          "stepCountIs": 1
        },
        "updatedAt": "string",
        "artifactComponents": [
          "string"
        ],
        "canDelegateTo": [
          "string"
        ],
        "canTransferTo": [
          "string"
        ],
        "canUse": [
          {
            "agentToolRelationId": "string",
            "headers": {
              "property1": "string",
              "property2": "string"
            },
            "toolId": "string",
            "toolPolicies": {
              "property1": {
                "needsApproval": true
              },
              "property2": {
                "needsApproval": true
              }
            },
            "toolSelection": [
              "string"
            ]
          }
        ],
        "dataComponents": [
          "string"
        ],
        "skills": [
          {
            "alwaysLoaded": true,
            "id": "resource_789",
            "index": 0
          }
        ],
        "type": "internal"
      },
      "property2": {
        "conversationHistoryConfig": "string",
        "createdAt": "string",
        "description": "string",
        "id": "resource_789",
        "models": {
          "base": {
            "allowedProviders": [
              "string"
            ],
            "fallbackModels": [
              "string"
            ],
            "model": "string",
            "providerOptions": {
              "property1": null,
              "property2": null
            }
          },
          "structuredOutput": {
            "allowedProviders": [
              "string"
            ],
            "fallbackModels": [
              "string"
            ],
            "model": "string",
            "providerOptions": {
              "property1": null,
              "property2": null
            }
          },
          "summarizer": {
            "allowedProviders": [
              "string"
            ],
            "fallbackModels": [
              "string"
            ],
            "model": "string",
            "providerOptions": {
              "property1": null,
              "property2": null
            }
          }
        },
        "name": "string",
        "outputContract": {
          "allowText": true,
          "onViolation": "retry",
          "requireArtifact": [
            "string"
          ],
          "requireComponent": [
            "string"
          ],
          "requireTransfer": true,
          "retryBudget": 0,
          "property1": null,
          "property2": null
        },
        "prompt": "string",
        "stopWhen": {
          "stepCountIs": 1
        },
        "updatedAt": "string",
        "artifactComponents": [
          "string"
        ],
        "canDelegateTo": [
          "string"
        ],
        "canTransferTo": [
          "string"
        ],
        "canUse": [
          {
            "agentToolRelationId": "string",
            "headers": {
              "property1": "string",
              "property2": "string"
            },
            "toolId": "string",
            "toolPolicies": {
              "property1": {
                "needsApproval": true
              },
              "property2": {
                "needsApproval": true
              }
            },
            "toolSelection": [
              "string"
            ]
          }
        ],
        "dataComponents": [
          "string"
        ],
        "skills": [
          {
            "alwaysLoaded": true,
            "id": "resource_789",
            "index": 0
          }
        ],
        "type": "internal"
      }
    },
    "teamAgents": {
      "property1": {
        "description": "string",
        "id": "resource_789",
        "name": "string"
      },
      "property2": {
        "description": "string",
        "id": "resource_789",
        "name": "string"
      }
    },
    "tools": {
      "property1": {
        "capabilities": "string",
        "config": {
          "mcp": {
            "activeTools": [
              "string"
            ],
            "prompt": "string",
            "server": {
              "url": "http://example.com"
            },
            "toolOverrides": {
              "property1": {
                "description": "string",
                "displayName": "string",
                "schema": null,
                "transformation": "string"
              },
              "property2": {
                "description": "string",
                "displayName": "string",
                "schema": null,
                "transformation": "string"
              }
            },
            "transport": {
              "eventSourceInit": {
                "property1": null,
                "property2": null
              },
              "reconnectionOptions": {},
              "requestInit": {
                "property1": null,
                "property2": null
              },
              "sessionId": "string",
              "type": "streamable_http"
            }
          },
          "type": "mcp"
        },
        "credentialReferenceId": "string",
        "credentialScope": "string",
        "description": "string",
        "headers": {
          "property1": "string",
          "property2": "string"
        },
        "id": "resource_789",
        "imageUrl": "string",
        "isWorkApp": true,
        "lastError": "string",
        "name": "string"
      },
      "property2": {
        "capabilities": "string",
        "config": {
          "mcp": {
            "activeTools": [
              "string"
            ],
            "prompt": "string",
            "server": {
              "url": "http://example.com"
            },
            "toolOverrides": {
              "property1": {
                "description": "string",
                "displayName": "string",
                "schema": null,
                "transformation": "string"
              },
              "property2": {
                "description": "string",
                "displayName": "string",
                "schema": null,
                "transformation": "string"
              }
            },
            "transport": {
              "eventSourceInit": {
                "property1": null,
                "property2": null
              },
              "reconnectionOptions": {},
              "requestInit": {
                "property1": null,
                "property2": null
              },
              "sessionId": "string",
              "type": "streamable_http"
            }
          },
          "type": "mcp"
        },
        "credentialReferenceId": "string",
        "credentialScope": "string",
        "description": "string",
        "headers": {
          "property1": "string",
          "property2": "string"
        },
        "id": "resource_789",
        "imageUrl": "string",
        "isWorkApp": true,
        "lastError": "string",
        "name": "string"
      }
    },
    "triggers": {
      "property1": {
        "authentication": {
          "headers": [
            {
              "name": "string",
              "value": "string"
            }
          ]
        },
        "createdBy": "user_123",
        "description": "string",
        "dispatchDelayMs": 600000,
        "enabled": true,
        "id": "resource_789",
        "inputSchema": {
          "property1": null,
          "property2": null
        },
        "messageTemplate": "string",
        "name": "string",
        "outputTransform": {
          "jmespath": "string",
          "objectTransformation": {
            "property1": "string",
            "property2": "string"
          }
        },
        "runAsUserId": "user_123",
        "runAsUserIds": [
          "string"
        ],
        "signatureVerification": {
          "algorithm": "sha256",
          "componentJoin": {
            "separator": "string",
            "strategy": "concatenate"
          },
          "encoding": "hex",
          "signature": {
            "key": "string",
            "prefix": "string",
            "regex": "string",
            "source": "header"
          },
          "signedComponents": [
            {
              "key": "string",
              "regex": "string",
              "required": true,
              "source": "header",
              "value": "string"
            }
          ],
          "validation": {
            "allowEmptyBody": true,
            "headerCaseSensitive": false,
            "normalizeUnicode": false
          }
        },
        "signingSecretCredentialReferenceId": "string"
      },
      "property2": {
        "authentication": {
          "headers": [
            {
              "name": "string",
              "value": "string"
            }
          ]
        },
        "createdBy": "user_123",
        "description": "string",
        "dispatchDelayMs": 600000,
        "enabled": true,
        "id": "resource_789",
        "inputSchema": {
          "property1": null,
          "property2": null
        },
        "messageTemplate": "string",
        "name": "string",
        "outputTransform": {
          "jmespath": "string",
          "objectTransformation": {
            "property1": "string",
            "property2": "string"
          }
        },
        "runAsUserId": "user_123",
        "runAsUserIds": [
          "string"
        ],
        "signatureVerification": {
          "algorithm": "sha256",
          "componentJoin": {
            "separator": "string",
            "strategy": "concatenate"
          },
          "encoding": "hex",
          "signature": {
            "key": "string",
            "prefix": "string",
            "regex": "string",
            "source": "header"
          },
          "signedComponents": [
            {
              "key": "string",
              "regex": "string",
              "required": true,
              "source": "header",
              "value": "string"
            }
          ],
          "validation": {
            "allowEmptyBody": true,
            "headerCaseSensitive": false,
            "normalizeUnicode": false
          }
        },
        "signingSecretCredentialReferenceId": "string"
      }
    }
  }
}
```

---

## MCP Catalog - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/api-reference/mcp-catalog

**Contents:**
- MCP Catalog
- List MCP Server Catalog
  - Authorization
  - Path Parameters
  - Response Body
  - 200application/json
  - 400application/problem+json
  - 401application/problem+json
  - 403application/problem+json
  - 404application/problem+json

Operations for MCP catalog

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Operations for managing organization invitations

MCP (Model Context Protocol) endpoints

**Examples:**

Example 1 (unknown):
```unknown
curl -X GET "https://api.pilot.inkeep.com/manage/tenants/tenant_123/projects/project-456/mcp-catalog"
```

Example 2 (json):
```json
{
  "data": [
    {
      "authScheme": "string",
      "category": "string",
      "connectedAccountId": "string",
      "description": "string",
      "id": "string",
      "imageUrl": "http://example.com",
      "isOpen": true,
      "name": "string",
      "thirdPartyConnectAccountUrl": "http://example.com",
      "transport": "streamable_http",
      "url": "http://example.com"
    }
  ]
}
```

Example 3 (json):
```json
{
  "code": "bad_request",
  "detail": "Bad Request",
  "instance": "/conversations/123",
  "requestId": "req_1234567890",
  "status": 400,
  "title": "Bad Request",
  "error": {
    "code": "bad_request",
    "message": "Bad Request"
  }
}
```

Example 4 (json):
```json
{
  "code": "unauthorized",
  "detail": "Unauthorized",
  "instance": "/conversations/123",
  "requestId": "req_1234567890",
  "status": 401,
  "title": "Unauthorized",
  "error": {
    "code": "unauthorized",
    "message": "Unauthorized"
  }
}
```

---

## Improvements - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/api-reference/improvements

**Contents:**
- Improvements
- List Improvements
  - Authorization
  - Path Parameters
  - Response Body
  - 200application/json
  - 400application/problem+json
  - 401application/problem+json
  - 403application/problem+json
  - 404application/problem+json

Operations for agent improvement runs (copilot-assisted edits)

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

The conversation ID from the copilot chat

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

Free-form instructions or context to guide the improvement agent

One or more feedback IDs to base the improvement on

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

The follow-up instruction for the agent

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

GitHub App integration endpoints

Operations for managing organization invitations

**Examples:**

Example 1 (unknown):
```unknown
curl -X GET "https://api.pilot.inkeep.com/manage/tenants/tenant_123/projects/project-456/improvements"
```

Example 2 (json):
```json
{
  "data": [
    {
      "branchName": "string",
      "status": "string",
      "updatedAt": "string"
    }
  ]
}
```

Example 3 (json):
```json
{
  "code": "bad_request",
  "detail": "Bad Request",
  "instance": "/conversations/123",
  "requestId": "req_1234567890",
  "status": 400,
  "title": "Bad Request",
  "error": {
    "code": "bad_request",
    "message": "Bad Request"
  }
}
```

Example 4 (json):
```json
{
  "code": "unauthorized",
  "detail": "Unauthorized",
  "instance": "/conversations/123",
  "requestId": "req_1234567890",
  "status": 401,
  "title": "Unauthorized",
  "error": {
    "code": "unauthorized",
    "message": "Unauthorized"
  }
}
```

---

## Project Members - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/api-reference/project-members

**Contents:**
- Project Members
- List Project Members
  - Authorization
  - Path Parameters
  - Response Body
  - 200application/json
  - 400application/problem+json
  - 401application/problem+json
  - 403application/problem+json
  - 404application/problem+json

Operations for managing project members

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

OAuth authentication endpoints

Operations for managing project permissions

**Examples:**

Example 1 (unknown):
```unknown
curl -X GET "https://api.pilot.inkeep.com/manage/tenants/string/projects/string/members"
```

Example 2 (json):
```json
{
  "data": [
    {
      "role": "project_admin",
      "userId": "string"
    }
  ]
}
```

Example 3 (json):
```json
{
  "code": "bad_request",
  "detail": "Bad Request",
  "instance": "/conversations/123",
  "requestId": "req_1234567890",
  "status": 400,
  "title": "Bad Request",
  "error": {
    "code": "bad_request",
    "message": "Bad Request"
  }
}
```

Example 4 (json):
```json
{
  "code": "unauthorized",
  "detail": "Unauthorized",
  "instance": "/conversations/123",
  "requestId": "req_1234567890",
  "status": 401,
  "title": "Unauthorized",
  "error": {
    "code": "unauthorized",
    "message": "Unauthorized"
  }
}
```

---

## Users - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/api-reference/users

**Contents:**
- Users
- Create Nango Connect Session
  - Authorization
  - Request Body
  - Response Body
  - 200application/json
  - 400
  - 500
- Disconnect User
  - Authorization

Operations for managing users

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

User Project Memberships

Operations for managing user project memberships

**Examples:**

Example 1 (json):
```json
curl -X POST "https://api.pilot.inkeep.com/work-apps/slack/users/connect" \  -H "Content-Type: application/json" \  -d '{    "userId": "string"  }'
```

Example 2 (json):
```json
{
  "connectUrl": "string",
  "sessionToken": "string"
}
```

Example 3 (unknown):
```unknown
curl -X POST "https://api.pilot.inkeep.com/work-apps/slack/users/disconnect" \  -H "Content-Type: application/json" \  -d '{}'
```

Example 4 (json):
```json
{
  "success": true
}
```

---

## GitHub - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/api-reference/github

**Contents:**
- GitHub
- Get GitHub App installation URL
  - Authorization
  - Path Parameters
  - Response Body
  - 200application/json
  - 400application/problem+json
  - 401application/problem+json
  - 403application/problem+json
  - 404application/problem+json

GitHub App integration endpoints

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

Include disconnected installations in the response

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

The internal installation ID

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

The internal installation ID

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

The internal installation ID

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

The internal installation ID

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

The internal installation ID

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Operations for managing functions

Operations for agent improvement runs (copilot-assisted edits)

**Examples:**

Example 1 (unknown):
```unknown
curl -X GET "https://api.pilot.inkeep.com/manage/tenants/tenant_123/github/install-url"
```

Example 2 (json):
```json
{
  "url": "http://example.com"
}
```

Example 3 (json):
```json
{
  "code": "bad_request",
  "detail": "Bad Request",
  "instance": "/conversations/123",
  "requestId": "req_1234567890",
  "status": 400,
  "title": "Bad Request",
  "error": {
    "code": "bad_request",
    "message": "Bad Request"
  }
}
```

Example 4 (json):
```json
{
  "code": "unauthorized",
  "detail": "Unauthorized",
  "instance": "/conversations/123",
  "requestId": "req_1234567890",
  "status": 401,
  "title": "Unauthorized",
  "error": {
    "code": "unauthorized",
    "message": "Unauthorized"
  }
}
```

---

## Credentials - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/api-reference/credentials

**Contents:**
- Credentials
- List Credentials
  - Authorization
  - Path Parameters
  - Query Parameters
  - Response Body
  - 200application/json
  - 400application/problem+json
  - 401application/problem+json
  - 403application/problem+json

Operations for managing credentials

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

Operations for managing credential stores

Operations for managing data components

**Examples:**

Example 1 (unknown):
```unknown
curl -X GET "https://api.pilot.inkeep.com/manage/tenants/tenant_123/projects/project-456/credentials"
```

Example 2 (json):
```json
{
  "data": [
    {
      "createdAt": "string",
      "createdBy": "string",
      "credentialStoreId": "string",
      "externalAgents": [
        {
          "baseUrl": "string",
          "createdAt": "string",
          "credentialReferenceId": "string",
          "description": "string",
          "id": "string",
          "name": "string",
          "projectId": "string",
          "tenantId": "string",
          "updatedAt": "string"
        }
      ],
      "id": "string",
      "name": "string",
      "retrievalParams": "string",
      "toolId": "string",
      "tools": [
        {
          "capabilities": "string",
          "config": "string",
          "createdAt": "string",
          "credentialReferenceId": "string",
          "credentialScope": "string",
          "description": "string",
          "headers": "string",
          "id": "string",
          "imageUrl": "string",
          "isWorkApp": true,
          "lastError": "string",
          "name": "string",
          "projectId": "string",
          "tenantId": "string",
          "updatedAt": "string"
        }
      ],
      "type": "memory",
      "updatedAt": "string",
      "userId": "string"
    }
  ],
  "pagination": {
    "completedCount": 0,
    "limit": 10,
    "page": 1,
    "pages": 0,
    "total": 0
  }
}
```

Example 3 (json):
```json
{
  "code": "bad_request",
  "detail": "Bad Request",
  "instance": "/conversations/123",
  "requestId": "req_1234567890",
  "status": 400,
  "title": "Bad Request",
  "error": {
    "code": "bad_request",
    "message": "Bad Request"
  }
}
```

Example 4 (json):
```json
{
  "code": "unauthorized",
  "detail": "Unauthorized",
  "instance": "/conversations/123",
  "requestId": "req_1234567890",
  "status": 401,
  "title": "Unauthorized",
  "error": {
    "code": "unauthorized",
    "message": "Unauthorized"
  }
}
```

---

## SubAgents - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/api-reference/subagents

**Contents:**
- SubAgents
- Associate Function Tool with SubAgent
  - Authorization
  - Path Parameters
  - Request Body
  - Response Body
  - 201application/json
  - 400application/problem+json
  - 401application/problem+json
  - 403application/problem+json

Operations for managing sub agents

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

Custom HTTP headers as key-value pairs. Keys must be valid RFC 7230 token characters (alphanumeric plus !#$%&'*+-.^_`|~), max 128 chars. Values: 1-1000 chars. Reserved names: Connection, Keep-Alive, TE, Trailer, Transfer-Encoding, Upgrade, Proxy-Authorization, Proxy-Connection, Content-Length.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

Custom HTTP headers as key-value pairs. Keys must be valid RFC 7230 token characters (alphanumeric plus !#$%&'*+-.^_`|~), max 128 chars. Values: 1-1000 chars. Reserved names: Connection, Keep-Alive, TE, Trailer, Transfer-Encoding, Upgrade, Proxy-Authorization, Proxy-Connection, Content-Length.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

Custom HTTP headers as key-value pairs. Keys must be valid RFC 7230 token characters (alphanumeric plus !#$%&'*+-.^_`|~), max 128 chars. Values: 1-1000 chars. Reserved names: Connection, Keep-Alive, TE, Trailer, Transfer-Encoding, Upgrade, Proxy-Authorization, Proxy-Connection, Content-Length.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

Custom HTTP headers as key-value pairs. Keys must be valid RFC 7230 token characters (alphanumeric plus !#$%&'*+-.^_`|~), max 128 chars. Values: 1-1000 chars. Reserved names: Connection, Keep-Alive, TE, Trailer, Transfer-Encoding, Upgrade, Proxy-Authorization, Proxy-Connection, Content-Length.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

Custom HTTP headers as key-value pairs. Keys must be valid RFC 7230 token characters (alphanumeric plus !#$%&'*+-.^_`|~), max 128 chars. Values: 1-1000 chars. Reserved names: Connection, Keep-Alive, TE, Trailer, Transfer-Encoding, Upgrade, Proxy-Authorization, Proxy-Connection, Content-Length.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

Custom HTTP headers as key-value pairs. Keys must be valid RFC 7230 token characters (alphanumeric plus !#$%&'*+-.^_`|~), max 128 chars. Values: 1-1000 chars. Reserved names: Connection, Keep-Alive, TE, Trailer, Transfer-Encoding, Upgrade, Proxy-Authorization, Proxy-Connection, Content-Length.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

Slack App integration endpoints

Third-Party MCP Servers

Operations for managing third-party MCP servers

**Examples:**

Example 1 (json):
```json
curl -X POST "https://api.pilot.inkeep.com/manage/tenants/tenant_123/projects/project-456/agents/agent_789/sub-agent-function-tools" \  -H "Content-Type: application/json" \  -d '{    "functionToolId": "resource_789",    "subAgentId": "resource_789"  }'
```

Example 2 (json):
```json
{
  "data": {
    "createdAt": "string",
    "functionToolId": "string",
    "id": "string",
    "subAgentId": "string",
    "toolPolicies": "string",
    "updatedAt": "string"
  }
}
```

Example 3 (json):
```json
{
  "code": "bad_request",
  "detail": "Bad Request",
  "instance": "/conversations/123",
  "requestId": "req_1234567890",
  "status": 400,
  "title": "Bad Request",
  "error": {
    "code": "bad_request",
    "message": "Bad Request"
  }
}
```

Example 4 (json):
```json
{
  "code": "unauthorized",
  "detail": "Unauthorized",
  "instance": "/conversations/123",
  "requestId": "req_1234567890",
  "status": 401,
  "title": "Unauthorized",
  "error": {
    "code": "unauthorized",
    "message": "Unauthorized"
  }
}
```

---

## Invitations - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/api-reference/invitations

**Contents:**
- Invitations
- Invite Members
  - Authorization
  - Request Body
  - Response Body
  - 200application/json
  - 400application/problem+json
  - 401application/problem+json
  - 403application/problem+json
  - 422application/problem+json

Operations for managing organization invitations

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Operations for agent improvement runs (copilot-assisted edits)

Operations for MCP catalog

**Examples:**

Example 1 (json):
```json
curl -X POST "https://api.pilot.inkeep.com/manage/api/invitations" \  -H "Content-Type: application/json" \  -d '{    "emails": [      "user@example.com"    ],    "organizationId": "string",    "role": "owner"  }'
```

Example 2 (json):
```json
{
  "data": [
    {
      "compensated": true,
      "email": "string",
      "error": "string",
      "id": "string",
      "link": "string",
      "status": "success"
    }
  ]
}
```

Example 3 (json):
```json
{
  "code": "bad_request",
  "detail": "Bad Request",
  "instance": "/conversations/123",
  "requestId": "req_1234567890",
  "status": 400,
  "title": "Bad Request",
  "error": {
    "code": "bad_request",
    "message": "Bad Request"
  }
}
```

Example 4 (json):
```json
{
  "code": "unauthorized",
  "detail": "Unauthorized",
  "instance": "/conversations/123",
  "requestId": "req_1234567890",
  "status": 401,
  "title": "Unauthorized",
  "error": {
    "code": "unauthorized",
    "message": "Unauthorized"
  }
}
```

---

## Credential Stores - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/api-reference/credential-stores

**Contents:**
- Credential Stores
- List Credential Stores
  - Authorization
  - Path Parameters
  - Response Body
  - 200application/json
  - 400application/problem+json
  - 401application/problem+json
  - 403application/problem+json
  - 404application/problem+json

Operations for managing credential stores

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

Credential metadata. Keys are injected as HTTP headers on outbound MCP server requests, so they must be valid HTTP header names.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

RFC 8693 token exchange and platform discovery endpoints

Operations for managing credentials

**Examples:**

Example 1 (unknown):
```unknown
curl -X GET "https://api.pilot.inkeep.com/manage/tenants/tenant_123/projects/project-456/credential-stores"
```

Example 2 (json):
```json
{
  "data": [
    {
      "available": true,
      "id": "string",
      "reason": "string",
      "type": "memory"
    }
  ]
}
```

Example 3 (json):
```json
{
  "code": "bad_request",
  "detail": "Bad Request",
  "instance": "/conversations/123",
  "requestId": "req_1234567890",
  "status": 400,
  "title": "Bad Request",
  "error": {
    "code": "bad_request",
    "message": "Bad Request"
  }
}
```

Example 4 (json):
```json
{
  "code": "unauthorized",
  "detail": "Unauthorized",
  "instance": "/conversations/123",
  "requestId": "req_1234567890",
  "status": 401,
  "title": "Unauthorized",
  "error": {
    "code": "unauthorized",
    "message": "Unauthorized"
  }
}
```

---

## Credential Gateway - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/api-reference/credential-gateway

**Contents:**
- Credential Gateway
- Support Copilot platform catalog
  - Response Body
  - 200application/json
- Token Exchange (RFC 8693)
  - Request Body
  - Response Body
  - 200application/json
  - 400application/json
  - 401application/json

RFC 8693 token exchange and platform discovery endpoints

application/x-www-form-urlencoded

Operations for managing conversations

Operations for managing credential stores

**Examples:**

Example 1 (unknown):
```unknown
curl -X GET "https://api.pilot.inkeep.com/credential-gateway/.well-known/platforms"
```

Example 2 (json):
```json
{
  "platforms": [
    {
      "credentialRequired": true,
      "label": "string",
      "pageMatchers": [
        {
          "hostGlob": "string",
          "pageType": "string",
          "pathPattern": "string"
        }
      ],
      "slug": "string"
    }
  ]
}
```

Example 3 (sass):
```sass
curl -X POST "https://api.pilot.inkeep.com/credential-gateway/token" \  -H "Content-Type: application/x-www-form-urlencoded" \  -d 'audience=string&grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Atoken-exchange&inkeep_app_id=string&subject_token=string&subject_token_type=urn%3Aietf%3Aparams%3Aoauth%3Atoken-type%3Aaccess_token'
```

Example 4 (json):
```json
{
  "access_token": "string",
  "expires_in": 0,
  "issued_token_type": "urn:ietf:params:oauth:token-type:access_token",
  "token_type": "Bearer"
}
```

---

## Project Permissions - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/api-reference/project-permissions

**Contents:**
- Project Permissions
- Get Project Permissions
  - Authorization
  - Path Parameters
  - Response Body
  - 200application/json
  - 400application/problem+json
  - 401application/problem+json
  - 403application/problem+json
  - 404application/problem+json

Operations for managing project permissions

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Operations for managing project members

Operations for managing projects

**Examples:**

Example 1 (unknown):
```unknown
curl -X GET "https://api.pilot.inkeep.com/manage/tenants/string/projects/string/permissions"
```

Example 2 (json):
```json
{
  "data": {
    "canEdit": true,
    "canUse": true,
    "canView": true
  }
}
```

Example 3 (json):
```json
{
  "code": "bad_request",
  "detail": "Bad Request",
  "instance": "/conversations/123",
  "requestId": "req_1234567890",
  "status": 400,
  "title": "Bad Request",
  "error": {
    "code": "bad_request",
    "message": "Bad Request"
  }
}
```

Example 4 (json):
```json
{
  "code": "unauthorized",
  "detail": "Unauthorized",
  "instance": "/conversations/123",
  "requestId": "req_1234567890",
  "status": 401,
  "title": "Unauthorized",
  "error": {
    "code": "unauthorized",
    "message": "Unauthorized"
  }
}
```

---

## CLI - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/api-reference/cli

**Contents:**
- CLI
- Get CLI user info
  - Authorization
  - Response Body
  - 200application/json
  - 401
  - 404

CLI authentication endpoints

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

Chat completions endpoints

Operations for managing context configurations

**Examples:**

Example 1 (unknown):
```unknown
curl -X GET "https://api.pilot.inkeep.com/manage/api/cli/me"
```

Example 2 (json):
```json
{
  "organization": {
    "id": "string",
    "name": "string",
    "role": "string",
    "slug": "string"
  },
  "user": {
    "email": "string",
    "id": "string",
    "name": "string"
  }
}
```

---

## Branches - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/api-reference/branches

**Contents:**
- Branches
- List Branches
  - Authorization
  - Path Parameters
  - Response Body
  - 200application/json
  - 400application/problem+json
  - 401application/problem+json
  - 403application/problem+json
  - 404application/problem+json

Operations for managing branches

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

Branch name to create from. Defaults to tenant main branch.

Commit hash to create from. Mutually exclusive with fromBranch.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Authentication endpoints for app credentials

Operations for managing Slack channels

**Examples:**

Example 1 (unknown):
```unknown
curl -X GET "https://api.pilot.inkeep.com/manage/tenants/tenant_123/projects/project-456/branches"
```

Example 2 (json):
```json
{
  "data": [
    {
      "baseName": "string",
      "fullName": "string",
      "hash": "string"
    }
  ]
}
```

Example 3 (json):
```json
{
  "code": "bad_request",
  "detail": "Bad Request",
  "instance": "/conversations/123",
  "requestId": "req_1234567890",
  "status": 400,
  "title": "Bad Request",
  "error": {
    "code": "bad_request",
    "message": "Bad Request"
  }
}
```

Example 4 (json):
```json
{
  "code": "unauthorized",
  "detail": "Unauthorized",
  "instance": "/conversations/123",
  "requestId": "req_1234567890",
  "status": 401,
  "title": "Unauthorized",
  "error": {
    "code": "unauthorized",
    "message": "Unauthorized"
  }
}
```

---

## Apps - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/api-reference/apps

**Contents:**
- Apps
- List Tenant Apps
  - Authorization
  - Path Parameters
  - Query Parameters
  - Response Body
  - 200application/json
  - 400application/problem+json
  - 401application/problem+json
  - 403application/problem+json

Operations for managing app credentials

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

PEM-encoded public key

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

Operations for managing API keys

Operations for managing artifact components

**Examples:**

Example 1 (unknown):
```unknown
curl -X GET "https://api.pilot.inkeep.com/manage/tenants/tenant_123/apps"
```

Example 2 (json):
```json
{
  "data": [
    {
      "config": {
        "type": "web_client",
        "webClient": {
          "allowAnonymous": false,
          "allowedDomains": [
            "string"
          ],
          "audience": "string",
          "publicKeys": []
        }
      },
      "createdAt": "string",
      "defaultAgentId": "string",
      "defaultProjectId": "string",
      "description": "string",
      "enabled": true,
      "id": "string",
      "lastUsedAt": "string",
      "name": "string",
      "projectId": "string",
      "prompt": "string",
      "tenantId": "string",
      "type": "string",
      "updatedAt": "string"
    }
  ],
  "pagination": {
    "completedCount": 0,
    "limit": 10,
    "page": 1,
    "pages": 0,
    "total": 0
  },
  "role": "owner",
  "tenantHasAnyApps": true
}
```

Example 3 (json):
```json
{
  "code": "bad_request",
  "detail": "Bad Request",
  "instance": "/conversations/123",
  "requestId": "req_1234567890",
  "status": 400,
  "title": "Bad Request",
  "error": {
    "code": "bad_request",
    "message": "Bad Request"
  }
}
```

Example 4 (json):
```json
{
  "code": "unauthorized",
  "detail": "Unauthorized",
  "instance": "/conversations/123",
  "requestId": "req_1234567890",
  "status": 401,
  "title": "Unauthorized",
  "error": {
    "code": "unauthorized",
    "message": "Unauthorized"
  }
}
```

---

## Auth - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/api-reference/auth

**Contents:**
- Auth
- Create Anonymous Session
  - Path Parameters
  - Response Body
  - 200application/json
  - 400application/problem+json
  - 401application/problem+json
  - 403application/problem+json
  - 404application/problem+json
  - 422application/problem+json

Authentication endpoints for app credentials

App ID (e.g., app_a1b2c3d4e5f6)

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Operations for managing artifact components

Operations for managing branches

**Examples:**

Example 1 (unknown):
```unknown
curl -X POST "https://api.pilot.inkeep.com/run/auth/apps/string/anonymous-session"
```

Example 2 (json):
```json
{
  "expiresAt": "string",
  "token": "string"
}
```

Example 3 (json):
```json
{
  "code": "bad_request",
  "detail": "Bad Request",
  "instance": "/conversations/123",
  "requestId": "req_1234567890",
  "status": 400,
  "title": "Bad Request",
  "error": {
    "code": "bad_request",
    "message": "Bad Request"
  }
}
```

Example 4 (json):
```json
{
  "code": "unauthorized",
  "detail": "Unauthorized",
  "instance": "/conversations/123",
  "requestId": "req_1234567890",
  "status": 401,
  "title": "Unauthorized",
  "error": {
    "code": "unauthorized",
    "message": "Unauthorized"
  }
}
```

---

## Skills - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/api-reference/skills

**Contents:**
- Skills
- Attach Skill to Sub-Agent
  - Authorization
  - Path Parameters
  - Request Body
  - Response Body
  - 201application/json
  - 400application/problem+json
  - 401application/problem+json
  - 403application/problem+json

Reusable instruction blocks that can be attached to multiple sub-agents and ordered for priority

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Operations for managing scheduled triggers

Slack App integration endpoints

**Examples:**

Example 1 (json):
```json
curl -X POST "https://api.pilot.inkeep.com/manage/tenants/tenant_123/projects/project-456/agents/agent_789/sub-agent-skills" \  -H "Content-Type: application/json" \  -d '{    "agentId": "string",    "index": 0,    "skillId": "resource_789",    "subAgentId": "resource_789"  }'
```

Example 2 (json):
```json
{
  "data": {
    "alwaysLoaded": true,
    "createdAt": "string",
    "id": "string",
    "index": 0,
    "skillId": "string",
    "subAgentId": "string",
    "updatedAt": "string"
  }
}
```

Example 3 (json):
```json
{
  "code": "bad_request",
  "detail": "Bad Request",
  "instance": "/conversations/123",
  "requestId": "req_1234567890",
  "status": 400,
  "title": "Bad Request",
  "error": {
    "code": "bad_request",
    "message": "Bad Request"
  }
}
```

Example 4 (json):
```json
{
  "code": "unauthorized",
  "detail": "Unauthorized",
  "instance": "/conversations/123",
  "requestId": "req_1234567890",
  "status": 401,
  "title": "Unauthorized",
  "error": {
    "code": "unauthorized",
    "message": "Unauthorized"
  }
}
```

---

## Tools - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/api-reference/tools

**Contents:**
- Tools
- List SubAgent Tool Relations
  - Authorization
  - Path Parameters
  - Query Parameters
  - Response Body
  - 200application/json
  - 400application/problem+json
  - 401application/problem+json
  - 403application/problem+json

Operations for managing MCP tools

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

Custom HTTP headers as key-value pairs. Keys must be valid RFC 7230 token characters (alphanumeric plus !#$%&'*+-.^_`|~), max 128 chars. Values: 1-1000 chars. Reserved names: Connection, Keep-Alive, TE, Trailer, Transfer-Encoding, Upgrade, Proxy-Authorization, Proxy-Connection, Content-Length.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

Custom HTTP headers as key-value pairs. Keys must be valid RFC 7230 token characters (alphanumeric plus !#$%&'*+-.^_`|~), max 128 chars. Values: 1-1000 chars. Reserved names: Connection, Keep-Alive, TE, Trailer, Transfer-Encoding, Upgrade, Proxy-Authorization, Proxy-Connection, Content-Length.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

Skip MCP server discovery for faster response. Status will be "unknown".

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

Custom HTTP headers as key-value pairs. Keys must be valid RFC 7230 token characters (alphanumeric plus !#$%&'*+-.^_`|~), max 128 chars. Values: 1-1000 chars. Reserved names: Connection, Keep-Alive, TE, Trailer, Transfer-Encoding, Upgrade, Proxy-Authorization, Proxy-Connection, Content-Length.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

Custom HTTP headers as key-value pairs. Keys must be valid RFC 7230 token characters (alphanumeric plus !#$%&'*+-.^_`|~), max 128 chars. Values: 1-1000 chars. Reserved names: Connection, Keep-Alive, TE, Trailer, Transfer-Encoding, Upgrade, Proxy-Authorization, Proxy-Connection, Content-Length.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

Access mode: "all" means the MCP tool has access to all project repositories, "selected" means the tool is scoped to specific repositories

Internal repository IDs (required when mode="selected")

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

Channel access mode: "all" means the MCP tool can post to any channel, "selected" means the tool is scoped to specific channels

List of allowed channel IDs (only used when channelAccessMode is "selected")

Whether DM access is enabled for this tool

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Third-Party MCP Servers

Operations for managing third-party MCP servers

Operations for managing triggers

**Examples:**

Example 1 (unknown):
```unknown
curl -X GET "https://api.pilot.inkeep.com/manage/tenants/tenant_123/projects/project-456/agents/agent_789/sub-agent-tool-relations"
```

Example 2 (json):
```json
{
  "data": [
    {
      "createdAt": "string",
      "headers": "string",
      "id": "string",
      "selectedTools": "string",
      "subAgentId": "string",
      "toolId": "string",
      "toolPolicies": "string",
      "updatedAt": "string"
    }
  ],
  "pagination": {
    "completedCount": 0,
    "limit": 10,
    "page": 1,
    "pages": 0,
    "total": 0
  }
}
```

Example 3 (json):
```json
{
  "code": "bad_request",
  "detail": "Bad Request",
  "instance": "/conversations/123",
  "requestId": "req_1234567890",
  "status": 400,
  "title": "Bad Request",
  "error": {
    "code": "bad_request",
    "message": "Bad Request"
  }
}
```

Example 4 (json):
```json
{
  "code": "unauthorized",
  "detail": "Unauthorized",
  "instance": "/conversations/123",
  "requestId": "req_1234567890",
  "status": 401,
  "title": "Unauthorized",
  "error": {
    "code": "unauthorized",
    "message": "Unauthorized"
  }
}
```

---

## User Project Memberships - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/api-reference/user-project-memberships

**Contents:**
- User Project Memberships
- List User Project Memberships
  - Authorization
  - Path Parameters
  - Response Body
  - 200application/json
  - 400application/problem+json
  - 401application/problem+json
  - 403application/problem+json
  - 404application/problem+json

Operations for managing user project memberships

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Operations for managing user profile

Operations for managing users

**Examples:**

Example 1 (unknown):
```unknown
curl -X GET "https://api.pilot.inkeep.com/manage/tenants/string/users/string/project-memberships"
```

Example 2 (json):
```json
{
  "data": [
    {
      "projectId": "string",
      "role": "project_admin"
    }
  ]
}
```

Example 3 (json):
```json
{
  "code": "bad_request",
  "detail": "Bad Request",
  "instance": "/conversations/123",
  "requestId": "req_1234567890",
  "status": 400,
  "title": "Bad Request",
  "error": {
    "code": "bad_request",
    "message": "Bad Request"
  }
}
```

Example 4 (json):
```json
{
  "code": "unauthorized",
  "detail": "Unauthorized",
  "instance": "/conversations/123",
  "requestId": "req_1234567890",
  "status": 401,
  "title": "Unauthorized",
  "error": {
    "code": "unauthorized",
    "message": "Unauthorized"
  }
}
```

---

## MCP - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/api-reference/mcp

**Contents:**
- MCP
- MCP Protocol
  - Authorization
  - Header Parameters
  - Response Body
  - 200
  - 401
  - 404
  - 500

MCP (Model Context Protocol) endpoints

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Operations for MCP catalog

OAuth authentication endpoints

**Examples:**

Example 1 (unknown):
```unknown
curl -X POST "https://api.pilot.inkeep.com/run/v1/mcp"
```

---

## Chat - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/api-reference/chat

**Contents:**
- Chat
- Chat (Vercel Streaming Protocol)
  - Authorization
  - Request Body
  - Response Body
  - 200
  - 400application/problem+json
  - 401application/problem+json
  - 403application/problem+json
  - 404application/problem+json

Chat completions endpoints

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Override the agent execution mode for this request. Takes precedence over the agent config default. Falls back to classic if unset.

Headers data for template processing

Maximum tokens to generate

Client-supplied user message id. Optional; server generates one if omitted. Persisted as messages.id so events keyed to this id can join back to the message row. Constrained to the server id alphabet ([A-Za-z0-9_-]).

Per-turn properties (page url, referrer, etc.) for the conversation

Whether to stream the response

User properties to associate with the conversation

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Conversation ID for multi-turn chat

Override the agent execution mode for this request. Takes precedence over the agent config default. Falls back to classic if unset.

Frequency penalty (-2 to 2)

Headers data for template processing (validated against context config schema)

Maximum tokens to generate

Client-supplied user message id. Optional; server generates one if omitted. Persisted as messages.id so events keyed to this id can join back to the message row. Constrained to the server id alphabet ([A-Za-z0-9_-]).

The conversation messages

The model to use for the completion

Number of completions to generate

Presence penalty (-2 to 2)

Per-turn properties (page url, referrer, etc.) for the conversation

Whether to stream the response

Controls randomness (0-1)

Controls nucleus sampling

User properties to associate with the conversation

application/problem+json

Operations for managing Slack channels

CLI authentication endpoints

**Examples:**

Example 1 (json):
```json
curl -X POST "https://api.pilot.inkeep.com/run/api/chat" \  -H "Content-Type: application/json" \  -d '{    "messages": [      {        "role": "system"      }    ]  }'
```

Example 2 (json):
```json
{
  "code": "bad_request",
  "detail": "Bad Request",
  "instance": "/conversations/123",
  "requestId": "req_1234567890",
  "status": 400,
  "title": "Bad Request",
  "error": {
    "code": "bad_request",
    "message": "Bad Request"
  }
}
```

Example 3 (json):
```json
{
  "code": "unauthorized",
  "detail": "Unauthorized",
  "instance": "/conversations/123",
  "requestId": "req_1234567890",
  "status": 401,
  "title": "Unauthorized",
  "error": {
    "code": "unauthorized",
    "message": "Unauthorized"
  }
}
```

Example 4 (json):
```json
{
  "code": "forbidden",
  "detail": "Forbidden",
  "instance": "/conversations/123",
  "requestId": "req_1234567890",
  "status": 403,
  "title": "Forbidden",
  "error": {
    "code": "forbidden",
    "message": "Forbidden"
  }
}
```

---

## Feedback - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/api-reference/feedback

**Contents:**
- Feedback
- List Feedback
  - Authorization
  - Path Parameters
  - Query Parameters
  - Response Body
  - 200application/json
  - 400application/problem+json
  - 401application/problem+json
  - 403application/problem+json

Operations for managing feedback

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

Optionally filter by conversation ID

Optionally filter by message ID

Optionally filter by agent ID

Optionally filter by feedback type

Filter feedback created on or after this ISO timestamp

Filter feedback created on or before this ISO timestamp

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

Session-based authentication using HTTP-only cookies. Cookies are automatically sent by browsers. For server-side requests, include cookies with names starting with "better-auth." in the Cookie header.

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Bearer token authentication. Use this for API clients and service-to-service communication. Set the Authorization header to "Bearer ".

application/problem+json

application/problem+json

application/problem+json

application/problem+json

application/problem+json

Operations for managing external agents

Operations for managing function tools

**Examples:**

Example 1 (unknown):
```unknown
curl -X GET "https://api.pilot.inkeep.com/manage/tenants/tenant_123/projects/project-456/feedback"
```

Example 2 (json):
```json
{
  "data": [
    {
      "conversationId": "string",
      "createdAt": "string",
      "details": "string",
      "id": "string",
      "messageId": "string",
      "type": "string",
      "updatedAt": "string",
      "agentId": "string"
    }
  ],
  "pagination": {
    "completedCount": 0,
    "limit": 10,
    "page": 1,
    "pages": 0,
    "total": 0
  }
}
```

Example 3 (json):
```json
{
  "code": "bad_request",
  "detail": "Bad Request",
  "instance": "/conversations/123",
  "requestId": "req_1234567890",
  "status": 400,
  "title": "Bad Request",
  "error": {
    "code": "bad_request",
    "message": "Bad Request"
  }
}
```

Example 4 (json):
```json
{
  "code": "unauthorized",
  "detail": "Unauthorized",
  "instance": "/conversations/123",
  "requestId": "req_1234567890",
  "status": 401,
  "title": "Unauthorized",
  "error": {
    "code": "unauthorized",
    "message": "Unauthorized"
  }
}
```

---
