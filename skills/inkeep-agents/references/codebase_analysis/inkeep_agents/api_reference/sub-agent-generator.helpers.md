# API Reference: sub-agent-generator.helpers.ts

**Language**: TypeScript

**Source**: `agents-cli/src/commands/pull-v4/generators/sub-agent-generator.helpers.ts`

---

## Functions

### resolveSubAgentName(subAgentId: string, name?: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subAgentId | string | - | - |
| name? | string | - | - |

**Returns**: (none)



### resolveSubAgentVariableName(subAgentId: string, name?: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| subAgentId | string | - | - |
| name? | string | - | - |

**Returns**: (none)



### collectCanUseReferences(canUse?: unknown[], toolReferenceOverrides?: Record<string, string>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| canUse? | unknown[] | - | - |
| toolReferenceOverrides? | Record<string | - | - |
| string> | None | - | - |

**Returns**: (none)



### collectCanDelegateToReferences(canDelegateTo: unknown[] | undefined, referenceOverrides: DelegateReferenceOverrides)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| canDelegateTo | unknown[] | undefined | - | - |
| referenceOverrides | DelegateReferenceOverrides | - | - |

**Returns**: (none)



### collectSkills(skills?: unknown[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| skills? | unknown[] | - | - |

**Returns**: (none)


