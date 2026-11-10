# API Reference: serialize.ts

**Language**: TypeScript

**Source**: `agents-manage-ui/src/features/agent/domain/serialize.ts`

---

## Functions

### safeJsonParse(value: string | object | undefined | null)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | string | object | undefined | null | - | - |

**Returns**: (none)



### hasNonEmptyProviderOptions(value: string | object | undefined | null)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | string | object | undefined | null | - | - |

**Returns**: (none)



### processModels(modelsData?: AgentModels)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| modelsData? | AgentModels | - | - |

**Returns**: (none)



### buildOutputContract(form: | {
        allowText?: boolean;
        requireComponent?: string[];
        requireArtifact?: string[];
        requireTransfer?: boolean;
        onViolation?: 'retry' | 'reject' | 'warn';
        retryBudget?: number;
      }
    | null
    | undefined)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| form | | {
        allowText?: boolean;
        requireComponent?: string[];
        requireArtifact?: string[];
        requireTransfer?: boolean;
        onViolation?: 'retry' | 'reject' | 'warn';
        retryBudget?: number;
      }
    | null
    | undefined | - | - |

**Returns**: (none)



### editorToPayload(nodes: Node[], edges: Edge[], formState: SerializeAgentFormState)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| nodes | Node[] | - | - |
| edges | Edge[] | - | - |
| formState | SerializeAgentFormState | - | - |

**Returns**: (none)



### addRelationship(agent: ExtendedAgent, relationshipType: 'canTransferTo' | 'canDelegateTo', targetId: string, isExternal = false, isTeamAgent = false, headers?: Record<string, string>, relationshipId?: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| agent | ExtendedAgent | - | - |
| relationshipType | 'canTransferTo' | 'canDelegateTo' | - | - |
| targetId | string | - | - |
| isExternal | None | false | - |
| isTeamAgent | None | false | - |
| headers? | Record<string | - | - |
| string> | None | - | - |
| relationshipId? | string | - | - |

**Returns**: (none)


