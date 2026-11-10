# API Reference: context.ts

**Language**: TypeScript

**Source**: `agents-api/src/domains/run/context/context.ts`

---

## Functions

### determineContextTrigger(tenantId: string, projectId: string, conversationId: string)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| projectId | string | - | - |
| conversationId | string | - | - |

**Returns**: (none)



### handleContextConfigChange(executionContext: FullExecutionContext, conversationId: string, newContextConfigId: string, credentialStores?: CredentialStoreRegistry)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| executionContext | FullExecutionContext | - | - |
| conversationId | string | - | - |
| newContextConfigId | string | - | - |
| credentialStores? | CredentialStoreRegistry | - | - |

**Returns**: (none)



### handleContextResolution({
  executionContext, conversationId, headers, credentialStores, prefetchedDestinations, conversationUserProperties, conversationProperties, }: {
  executionContext: FullExecutionContext;
  conversationId: string;
  headers: Record<string, unknown>;
  credentialStores?: CredentialStoreRegistry;
  prefetchedDestinations?: WebhookDestinationSelect[];
  conversationUserProperties?: Record<string, unknown> | null;
  conversationProperties?: Record<string, unknown> | null;
})

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  executionContext | None | - | - |
| conversationId | None | - | - |
| headers | None | - | - |
| credentialStores | None | - | - |
| prefetchedDestinations | None | - | - |
| conversationUserProperties | None | - | - |
| conversationProperties | None | - | - |
| } | {
  executionContext: FullExecutionContext;
  conversationId: string;
  headers: Record<string | - | - |
| unknown>;
  credentialStores? | CredentialStoreRegistry;
  prefetchedDestinations?: WebhookDestinationSelect[];
  conversationUserProperties?: Record<string | - | - |
| unknown> | null;
  conversationProperties? | Record<string | - | - |
| unknown> | null;
} | None | - | - |

**Returns**: (none)


