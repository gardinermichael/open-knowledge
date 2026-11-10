# API Reference: agent-generator.ts

**Language**: TypeScript

**Source**: `agents-cli/src/commands/pull-v4/generators/agent-generator.ts`

---

## Functions

### normalizeContextConfigId(contextConfig: unknown)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| contextConfig | unknown | - | - |

**Returns**: (none)



### normalizeStatusComponentId(statusComponent: unknown)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| statusComponent | unknown | - | - |

**Returns**: (none)



### normalizeStatusComponentSequence(statusComponents: unknown[] | undefined)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| statusComponents | unknown[] | undefined | - | - |

**Returns**: (none)



### normalizeStatusComponentIds(statusComponents: unknown[] | undefined)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| statusComponents | unknown[] | undefined | - | - |

**Returns**: (none)



### generateAgentDefinition({
  id, createdAt, updatedAt, ...data
}: AgentInput & Record<string, unknown>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  id | None | - | - |
| createdAt | None | - | - |
| updatedAt | None | - | - |
| ...data
} | AgentInput & Record<string | - | - |
| unknown> | None | - | - |

**Returns**: (none)



### writeAgentConfig(configObject: ObjectLiteralExpression, data: AgentOutput, referenceNames: AgentReferenceNames)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| configObject | ObjectLiteralExpression | - | - |
| data | AgentOutput | - | - |
| referenceNames | AgentReferenceNames | - | - |

**Returns**: (none)


