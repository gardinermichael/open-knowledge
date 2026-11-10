# API Reference: auth-detection.ts

**Language**: TypeScript

**Source**: `packages/agents-core/src/utils/auth-detection.ts`

---

## Functions

### discoverScopes(resourceMetadata?: OAuthProtectedResourceMetadata, metadata?: OAuthMetadata)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| resourceMetadata? | OAuthProtectedResourceMetadata | - | - |
| metadata? | OAuthMetadata | - | - |

**Returns**: (none)



### discoverMcpMetadata(mcpServerUrl: string, logger?: PinoLogger)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| mcpServerUrl | string | - | - |
| logger? | PinoLogger | - | - |

**Returns**: (none)



### initiateMcpOAuthFlow({
  mcpServerUrl, redirectUri, state, clientName = 'Inkeep Agent Framework', clientUri = 'https://inkeep.com', logoUri, defaultClientId = 'mcp-client', logger, }: {
  mcpServerUrl: string;
  redirectUri: string;
  state: string;
  clientName?: string;
  clientUri?: string;
  logoUri?: string;
  defaultClientId?: string;
  logger?: PinoLogger;
})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  mcpServerUrl | None | - | - |
| redirectUri | None | - | - |
| state | None | - | - |
| clientName | None | 'Inkeep Agent Framework' | - |
| clientUri | None | 'https://inkeep.com' | - |
| logoUri | None | - | - |
| defaultClientId | None | 'mcp-client' | - |
| logger | None | - | - |
| } | {
  mcpServerUrl: string;
  redirectUri: string;
  state: string;
  clientName?: string;
  clientUri?: string;
  logoUri?: string;
  defaultClientId?: string;
  logger?: PinoLogger;
} | - | - |

**Returns**: (none)



### exchangeMcpAuthorizationCode({
  mcpServerUrl, metadata, clientInformation, authorizationCode, codeVerifier, redirectUri, resourceUrl, logger, }: {
  mcpServerUrl: string;
  metadata: any;
  clientInformation: any;
  authorizationCode: string;
  codeVerifier: string;
  redirectUri: string;
  resourceUrl?: string;
  logger?: PinoLogger;
})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  mcpServerUrl | None | - | - |
| metadata | None | - | - |
| clientInformation | None | - | - |
| authorizationCode | None | - | - |
| codeVerifier | None | - | - |
| redirectUri | None | - | - |
| resourceUrl | None | - | - |
| logger | None | - | - |
| } | {
  mcpServerUrl: string;
  metadata: any;
  clientInformation: any;
  authorizationCode: string;
  codeVerifier: string;
  redirectUri: string;
  resourceUrl?: string;
  logger?: PinoLogger;
} | - | - |

**Returns**: (none)


