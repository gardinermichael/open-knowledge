# API Reference: ContextResolver.ts

**Language**: TypeScript

**Source**: `agents-api/src/domains/run/context/ContextResolver.ts`

---

## Classes

### ContextResolver

**Inherits from**: (none)

#### Methods

##### constructor(executionContext: FullExecutionContext, credentialStoreRegistry?: CredentialStoreRegistry)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| executionContext | FullExecutionContext | - | - |
| credentialStoreRegistry? | CredentialStoreRegistry | - | - |


##### resolve(contextConfig: ContextConfigApiSelect, options: ContextResolutionOptions)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| contextConfig | ContextConfigApiSelect | - | - |
| options | ContextResolutionOptions | - | - |


##### resolveSingleFetchDefinition(contextConfig: ContextConfigApiSelect, definition: ContextFetchDefinition, templateKey: string, options: ContextResolutionOptions, requestHash: string, result: ContextResolutionResult)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| contextConfig | ContextConfigApiSelect | - | - |
| definition | ContextFetchDefinition | - | - |
| templateKey | string | - | - |
| options | ContextResolutionOptions | - | - |
| requestHash | string | - | - |
| result | ContextResolutionResult | - | - |


##### resolveHeaders(conversationId: string, contextConfigId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| conversationId | string | - | - |
| contextConfigId | string | - | - |


##### createRequestHash(headers: Record<string, unknown>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| headers | Record<string | - | - |
| unknown> | None | - | - |


##### clearCache(tenantId: string, projectId: string, conversationId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | string | - | - |
| conversationId | string | - | - |



