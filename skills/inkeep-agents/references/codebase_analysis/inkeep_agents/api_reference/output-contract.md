# API Reference: output-contract.ts

**Language**: TypeScript

**Source**: `agents-api/src/domains/run/agents/output-contract.ts`

---

## Functions

### resolveAllowText(outputContract: OutputContract | undefined)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| outputContract | OutputContract | undefined | - | - |

**Returns**: (none)



### deriveContractEnforcement(params: {
  outputContract: OutputContract | undefined;
  resolvedAllowText: boolean;
  hasStructuredOutput: boolean;
})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  outputContract: OutputContract | undefined;
  resolvedAllowText: boolean;
  hasStructuredOutput: boolean;
} | - | - |

**Returns**: (none)



### resolveContractToolChoice(params: {
  resolvedAllowText: boolean;
  hasStructuredOutput: boolean;
  hasArtifactComponents: boolean;
})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  resolvedAllowText: boolean;
  hasStructuredOutput: boolean;
  hasArtifactComponents: boolean;
} | - | - |

**Returns**: (none)



### getContractViolation(params: {
  ctx: AgentRunContext;
  response: ResolvedGenerationResponse;
  hasStructuredOutput: boolean;
})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  ctx: AgentRunContext;
  response: ResolvedGenerationResponse;
  hasStructuredOutput: boolean;
} | - | - |

**Returns**: (none)



### isContractViolation(params: {
  ctx: AgentRunContext;
  response: ResolvedGenerationResponse;
  hasStructuredOutput: boolean;
})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  ctx: AgentRunContext;
  response: ResolvedGenerationResponse;
  hasStructuredOutput: boolean;
} | - | - |

**Returns**: (none)



### enforceOutputContract(params: {
  ctx: AgentRunContext;
  response: ResolvedGenerationResponse;
  hasStructuredOutput: boolean;
  hasContractEnforcement: boolean;
  textResponse: string;
  span: Span;
  logger: { warn: (obj: Record<string, unknown>, msg: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  ctx: AgentRunContext;
  response: ResolvedGenerationResponse;
  hasStructuredOutput: boolean;
  hasContractEnforcement: boolean;
  textResponse: string;
  span: Span;
  logger: { warn: (obj: Record<string | - | - |
| unknown> | None | - | - |
| msg | string | - | - |

**Returns**: (none)



### addReferencedType(artifactId: unknown)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| artifactId | unknown | - | - |

**Returns**: (none)


