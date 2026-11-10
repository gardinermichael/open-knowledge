# API Reference: relationTools.ts

**Language**: TypeScript

**Source**: `agents-api/src/domains/run/agents/relationTools.ts`

---

## Functions

### getDelegationMetadata(params: {
  isInternal: boolean;
  callingAgentId: string;
  delegationId: string;
  metadata: DelegationMetadata;
})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  isInternal: boolean;
  callingAgentId: string;
  delegationId: string;
  metadata: DelegationMetadata;
} | - | - |

**Returns**: (none)



### createDelegateToAgentTool({
  delegateConfig, callingAgentId, executionContext, contextId, metadata, sessionId, credentialStoreRegistry, agentRunContext, }: {
  delegateConfig: DelegateRelation;
  callingAgentId: string;
  executionContext: FullExecutionContext;
  contextId: string;
  metadata: DelegationMetadata;
  sessionId?: string;
  credentialStoreRegistry?: CredentialStoreRegistry;
  agentRunContext?: import('./agent-types')

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  delegateConfig | None | - | - |
| callingAgentId | None | - | - |
| executionContext | None | - | - |
| contextId | None | - | - |
| metadata | None | - | - |
| sessionId | None | - | - |
| credentialStoreRegistry | None | - | - |
| agentRunContext | None | - | - |
| } | {
  delegateConfig: DelegateRelation;
  callingAgentId: string;
  executionContext: FullExecutionContext;
  contextId: string;
  metadata: DelegationMetadata;
  sessionId?: string;
  credentialStoreRegistry?: CredentialStoreRegistry;
  agentRunContext?: import('./agent-types' | - | - |

**Returns**: (none)



### buildTransferRelationConfig(params: BuildTransferRelationConfigParams, credentialStoreRegistry?: CredentialStoreRegistry)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | BuildTransferRelationConfigParams | - | - |
| credentialStoreRegistry? | CredentialStoreRegistry | - | - |

**Returns**: (none)



### createTransferToAgentTool({
  transferConfig, callingAgentId, streamRequestId, }: {
  transferConfig: AgentConfig;
  callingAgentId: string;
  streamRequestId?: string;
})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  transferConfig | None | - | - |
| callingAgentId | None | - | - |
| streamRequestId | None | - | - |
| } | {
  transferConfig: AgentConfig;
  callingAgentId: string;
  streamRequestId?: string;
} | - | - |

**Returns**: (none)


