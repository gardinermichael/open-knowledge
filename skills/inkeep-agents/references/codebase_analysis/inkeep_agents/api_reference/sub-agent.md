# API Reference: sub-agent.ts

**Language**: TypeScript

**Source**: `agents-cli/src/commands/pull-v4/generators/helpers/sub-agent.ts`

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



### collectCanUseReferences(canUse?: NormalizedCanUseEntry[], toolReferenceOverrides?: Record<string, string>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| canUse? | NormalizedCanUseEntry[] | - | - |
| toolReferenceOverrides? | Record<string | - | - |
| string> | None | - | - |

**Returns**: (none)



### collectCanDelegateToReferences(canDelegateTo: NormalizedCanDelegateToEntry[] | undefined, referenceOverrides: DelegateReferenceOverrides)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| canDelegateTo | NormalizedCanDelegateToEntry[] | undefined | - | - |
| referenceOverrides | DelegateReferenceOverrides | - | - |

**Returns**: (none)



### collectSkills(skills?: NormalizedSkillEntry[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| skills? | NormalizedSkillEntry[] | - | - |

**Returns**: (none)


