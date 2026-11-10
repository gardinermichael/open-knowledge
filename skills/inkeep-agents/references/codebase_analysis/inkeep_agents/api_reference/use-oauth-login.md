# API Reference: use-oauth-login.ts

**Language**: TypeScript

**Source**: `agents-manage-ui/src/hooks/use-oauth-login.ts`

---

## Functions

### useOAuthLogin({
  tenantId, projectId, onFinish, }: UseOAuthLoginProps)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  tenantId | None | - | - |
| projectId | None | - | - |
| onFinish | None | - | - |
| } | UseOAuthLoginProps | - | - |

**Returns**: (none)



### openOAuthPopupAndWait(oauthUrl: string, toolId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| oauthUrl | string | - | - |
| toolId | string | - | - |

**Returns**: (none)



### navigateToTool(toolId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| toolId | string | - | - |

**Returns**: (none)



### handleOAuthLoginManually(toolId: string, thirdPartyConnectAccountUrl?: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| toolId | string | - | - |
| thirdPartyConnectAccountUrl? | string | - | - |

**Returns**: (none)



### handleOAuthLoginWithNangoMCPGeneric({
    toolId, mcpServerUrl, toolName, credentialScope, }: {
    toolId: string;
    mcpServerUrl: string;
    toolName: string;
    credentialScope?: 'project' | 'user';
  })

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
    toolId | None | - | - |
| mcpServerUrl | None | - | - |
| toolName | None | - | - |
| credentialScope | None | - | - |
| } | {
    toolId: string;
    mcpServerUrl: string;
    toolName: string;
    credentialScope?: 'project' | 'user';
  } | - | - |

**Returns**: (none)



### handleOAuthLoginWithComposio({
    toolId, mcpServerUrl, toolName, thirdPartyConnectAccountUrl, credentialScope, }: {
    toolId: string;
    mcpServerUrl: string;
    toolName: string;
    thirdPartyConnectAccountUrl: string;
    credentialScope: 'project' | 'user';
  })

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
    toolId | None | - | - |
| mcpServerUrl | None | - | - |
| toolName | None | - | - |
| thirdPartyConnectAccountUrl | None | - | - |
| credentialScope | None | - | - |
| } | {
    toolId: string;
    mcpServerUrl: string;
    toolName: string;
    thirdPartyConnectAccountUrl: string;
    credentialScope: 'project' | 'user';
  } | - | - |

**Returns**: (none)



### completeFlow(success: boolean, error?: Error)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| success | boolean | - | - |
| error? | Error | - | - |

**Returns**: (none)



### handleMessage(event: MessageEvent)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| event | MessageEvent | - | - |

**Returns**: (none)



### cleanup()

**Returns**: (none)


