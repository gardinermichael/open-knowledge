# API Reference: testRequest.ts

**Language**: TypeScript

**Source**: `agents-api/src/__tests__/utils/testRequest.ts`

---

## Functions

### isRunRoute(url: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| url | string | - | - |

**Returns**: (none)



### makeRequest(url: string, options: TestRequestOptions = {})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| url | string | - | - |
| options | TestRequestOptions | {} | - |

**Returns**: (none)



### makeRunRequest(url: string, options: RequestInit = {})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| url | string | - | - |
| options | RequestInit | {} | - |

**Returns**: (none)



### makeRunRequestWithContext(url: string, context: {
    tenantId?: string;
    projectId?: string;
    agentId?: string;
    subAgentId?: string;
  }, options: RequestInit = {})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| url | string | - | - |
| context | {
    tenantId?: string;
    projectId?: string;
    agentId?: string;
    subAgentId?: string;
  } | - | - |
| options | RequestInit | {} | - |

**Returns**: (none)


