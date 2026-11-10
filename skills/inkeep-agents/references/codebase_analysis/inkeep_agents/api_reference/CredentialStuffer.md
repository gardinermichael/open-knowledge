# API Reference: CredentialStuffer.ts

**Language**: TypeScript

**Source**: `packages/agents-core/src/credential-stuffer/CredentialStuffer.ts`

---

## Classes

### CredentialStuffer

**Inherits from**: (none)

#### Methods

##### constructor(private credentialStoreRegistry: CredentialStoreRegistry, private contextResolver?: ContextResolverInterface, logger?: PinoLogger)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| private credentialStoreRegistry | CredentialStoreRegistry | - | - |
| private contextResolver? | ContextResolverInterface | - | - |
| logger? | PinoLogger | - | - |


##### getCredentials(context: CredentialContext, storeReference: CredentialStoreReference, mcpType?: MCPToolConfig['mcpType'])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| context | CredentialContext | - | - |
| storeReference | CredentialStoreReference | - | - |
| mcpType? | MCPToolConfig['mcpType'] | - | - |


##### generateCredentialKey(context: CredentialContext, storeReference: CredentialStoreReference, credentialStoreType: keyof typeof CredentialStoreType)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| context | CredentialContext | - | - |
| storeReference | CredentialStoreReference | - | - |
| credentialStoreType | keyof typeof CredentialStoreType | - | - |


##### getCredentialsFromHeaders(credentialContext: CredentialContext, headers: Record<string, string>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| credentialContext | CredentialContext | - | - |
| headers | Record<string | - | - |
| string> | None | - | - |


##### getCredentialHeaders({
    context, mcpType, storeReference, headers, }: CredentialResolverInput)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
    context | None | - | - |
| mcpType | None | - | - |
| storeReference | None | - | - |
| headers | None | - | - |
| } | CredentialResolverInput | - | - |


##### buildMcpServerConfig(context: CredentialContext, tool: MCPToolConfig, storeReference?: CredentialStoreReference, selectedTools?: string[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| context | CredentialContext | - | - |
| tool | MCPToolConfig | - | - |
| storeReference? | CredentialStoreReference | - | - |
| selectedTools? | string[] | - | - |



