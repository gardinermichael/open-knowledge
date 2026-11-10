# API Reference: sub-agent-generator.ts

**Language**: TypeScript

**Source**: `agents-cli/src/commands/pull-v4/generators/sub-agent-generator.ts`

---

## Functions

### normalizeCanUseEntries(canUse?: unknown[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| canUse? | unknown[] | - | - |

**Returns**: (none)



### normalizeCanDelegateToEntries(canDelegateTo?: unknown[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| canDelegateTo? | unknown[] | - | - |

**Returns**: (none)



### normalizeSkills(skills?: unknown[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| skills? | unknown[] | - | - |

**Returns**: (none)



### generateSubAgentDefinition({
  subAgentId, ...data
}: SubAgentInput & Record<string, unknown>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  subAgentId | None | - | - |
| ...data
} | SubAgentInput & Record<string | - | - |
| unknown> | None | - | - |

**Returns**: (none)



### collectCanUseToolIds(canUse?: NormalizedCanUseEntry[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| canUse? | NormalizedCanUseEntry[] | - | - |

**Returns**: (none)



### collectDelegateTargetIds(canDelegateTo: NormalizedCanDelegateToEntry[] | undefined, canTransferTo: string[] | undefined, currentSubAgentId: string, referenceOverrides: {
    subAgents?: Record<string, string>;
    agents?: Record<string, string>;
    externalAgents?: Record<string, string>;
  })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| canDelegateTo | NormalizedCanDelegateToEntry[] | undefined | - | - |
| canTransferTo | string[] | undefined | - | - |
| currentSubAgentId | string | - | - |
| referenceOverrides | {
    subAgents?: Record<string | - | - |
| string>;
    agents? | Record<string | - | - |
| string>;
    externalAgents? | Record<string | - | - |
| string>;
  } | None | - | - |

**Returns**: (none)



### resolveDelegateTargetType(targetId: string, referenceOverrides: {
    subAgents?: Record<string, string>;
    agents?: Record<string, string>;
    externalAgents?: Record<string, string>;
  })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| targetId | string | - | - |
| referenceOverrides | {
    subAgents?: Record<string | - | - |
| string>;
    agents? | Record<string | - | - |
| string>;
    externalAgents? | Record<string | - | - |
| string>;
  } | None | - | - |

**Returns**: (none)



### writeSubAgentConfig(configObject: ObjectLiteralExpression, templateReferences: {
    contextReference?: string;
    headersReference?: string;
  }, referenceNames: {
    tools?: Record<string, string>;
    subAgents?: Record<string, string>;
    agents?: Record<string, string>;
    externalAgents?: Record<string, string>;
    dataComponents?: Record<string, string>;
    artifactComponents?: Record<string, string>;
  }, {
    dataComponents, name, canDelegateTo: _canDelegateTo, canTransferTo, skills: _skills, artifactComponents, canUse: _canUse, normalizedCanDelegateTo, normalizedCanUse, normalizedSkills, referenceOverrides: _referenceOverrides, referencePathOverrides: _referencePathOverrides, contextConfigId: _contextConfigId, contextConfigReference: _contextConfigReference, contextConfigHeadersReference: _contextConfigHeadersReference, ...rest
  }: SubAgentOutput)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| configObject | ObjectLiteralExpression | - | - |
| templateReferences | {
    contextReference?: string;
    headersReference?: string;
  } | - | - |
| referenceNames | {
    tools?: Record<string | - | - |
| string>;
    subAgents? | Record<string | - | - |
| string>;
    agents? | Record<string | - | - |
| string>;
    externalAgents? | Record<string | - | - |
| string>;
    dataComponents? | Record<string | - | - |
| string>;
    artifactComponents? | Record<string | - | - |
| string>;
  } | None | - | - |
| {
    dataComponents | None | - | - |
| name | None | - | - |
| canDelegateTo | _canDelegateTo | - | - |
| canTransferTo | None | - | - |
| skills | _skills | - | - |
| artifactComponents | None | - | - |
| canUse | _canUse | - | - |
| normalizedCanDelegateTo | None | - | - |
| normalizedCanUse | None | - | - |
| normalizedSkills | None | - | - |
| referenceOverrides | _referenceOverrides | - | - |
| referencePathOverrides | _referencePathOverrides | - | - |
| contextConfigId | _contextConfigId | - | - |
| contextConfigReference | _contextConfigReference | - | - |
| contextConfigHeadersReference | _contextConfigHeadersReference | - | - |
| ...rest
  } | SubAgentOutput | - | - |

**Returns**: (none)



### addEntry(type: NormalizedDelegateTargetType, id: unknown)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| type | NormalizedDelegateTargetType | - | - |
| id | unknown | - | - |

**Returns**: (none)


