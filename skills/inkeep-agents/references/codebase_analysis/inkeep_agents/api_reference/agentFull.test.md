# API Reference: agentFull.test.ts

**Language**: TypeScript

**Source**: `agents-api/src/__tests__/manage/routes/crud/agentFull.test.ts`

---

## Functions

### createTestToolData(id: string, suffix = '')

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | string | - | - |
| suffix | None | '' | - |

**Returns**: (none)



### createFullAgentData(agentId?: string, options?: {
      includeDataComponents?: boolean;
      includeArtifactComponents?: boolean;
      includeContextConfig?: boolean;
      includeExternalAgent?: boolean;
    }, tenantId?: string, projectIdParam?: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| agentId? | string | - | - |
| options? | {
      includeDataComponents?: boolean;
      includeArtifactComponents?: boolean;
      includeContextConfig?: boolean;
      includeExternalAgent?: boolean;
    } | - | - |
| tenantId? | string | - | - |
| projectIdParam? | string | - | - |

**Returns**: (none)



### createTestAgent(tenantId: string, agentData?: ReturnType<typeof createFullAgentData>)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tenantId | string | - | - |
| agentData? | ReturnType<typeof createFullAgentData> | - | - |

**Returns**: (none)


