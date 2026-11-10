# API Reference: oauthService.ts

**Language**: TypeScript

**Source**: `agents-api/src/utils/oauthService.ts`

---

## Classes

### OAuthService

**Inherits from**: (none)

#### Methods

##### constructor(config: OAuthClientConfig = {})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| config | OAuthClientConfig | {} | - |


##### initiateOAuthFlow(params: {
    tenantId: string;
    projectId: string;
    toolId: string;
    userId?: string;
    mcpServerUrl: string;
    baseUrl?: string; // Optional override for the base URL
  })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
    tenantId: string;
    projectId: string;
    toolId: string;
    userId?: string;
    mcpServerUrl: string;
    baseUrl?: string; // Optional override for the base URL
  } | - | - |


##### exchangeCodeForTokens(params: {
    code: string;
    codeVerifier: string;
    clientInformation: any;
    metadata: any;
    resourceUrl?: string;
    mcpServerUrl: string;
    baseUrl?: string; // Optional override for the base URL
  })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
    code: string;
    codeVerifier: string;
    clientInformation: any;
    metadata: any;
    resourceUrl?: string;
    mcpServerUrl: string;
    baseUrl?: string; // Optional override for the base URL
  } | - | - |




## Functions

### storePKCEVerifier(state: string, codeVerifier: string, toolId: string, tenantId: string, projectId: string, userId: string | undefined, clientInformation: any, metadata: any, resourceUrl?: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| state | string | - | - |
| codeVerifier | string | - | - |
| toolId | string | - | - |
| tenantId | string | - | - |
| projectId | string | - | - |
| userId | string | undefined | - | - |
| clientInformation | any | - | - |
| metadata | any | - | - |
| resourceUrl? | string | - | - |

**Returns**: (none)



### retrievePKCEVerifier(state: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| state | string | - | - |

**Returns**: (none)


