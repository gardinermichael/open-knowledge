# API Reference: project.ts

**Language**: TypeScript

**Source**: `agents-api/src/domains/run/utils/project.ts`

---

## Functions

### getAgentFromProject(params: {
  project: FullProjectSelectWithRelationIds;
  agentId: string;
})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  project: FullProjectSelectWithRelationIds;
  agentId: string;
} | - | - |

**Returns**: (none)



### getSubAgentFromProject(params: {
  project: FullProjectSelectWithRelationIds;
  agentId: string;
  subAgentId?: string;
})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  project: FullProjectSelectWithRelationIds;
  agentId: string;
  subAgentId?: string;
} | - | - |

**Returns**: (none)



### extractTransferRelations(params: {
  agent: AgentWithinContextOfProjectSelectWithRelationIds;
  canTransferTo: CanRelateToInternalSubAgent[];
})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  agent: AgentWithinContextOfProjectSelectWithRelationIds;
  canTransferTo: CanRelateToInternalSubAgent[];
} | - | - |

**Returns**: (none)



### parseDelegateRelations(params: {
  agent: AgentWithinContextOfProjectSelectWithRelationIds;
  project: FullProjectSelectWithRelationIds;
  canDelegateTo: CanDelegateToItem[];
})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  agent: AgentWithinContextOfProjectSelectWithRelationIds;
  project: FullProjectSelectWithRelationIds;
  canDelegateTo: CanDelegateToItem[];
} | - | - |

**Returns**: (none)



### getSubAgentRelations(params: {
  agent: AgentWithinContextOfProjectSelectWithRelationIds;
  project: FullProjectSelectWithRelationIds;
  subAgent: FullAgentSubAgentSelectWithRelationIds;
})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  agent: AgentWithinContextOfProjectSelectWithRelationIds;
  project: FullProjectSelectWithRelationIds;
  subAgent: FullAgentSubAgentSelectWithRelationIds;
} | - | - |

**Returns**: (none)



### getToolsForSubAgent(params: {
  agent: AgentWithinContextOfProjectSelectWithRelationIds;
  project: FullProjectSelectWithRelationIds;
  subAgent: FullAgentSubAgentSelectWithRelationIds;
})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  agent: AgentWithinContextOfProjectSelectWithRelationIds;
  project: FullProjectSelectWithRelationIds;
  subAgent: FullAgentSubAgentSelectWithRelationIds;
} | - | - |

**Returns**: (none)



### getDataComponentsForSubAgent(params: {
  project: FullProjectSelectWithRelationIds;
  subAgent: FullAgentSubAgentSelectWithRelationIds;
})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  project: FullProjectSelectWithRelationIds;
  subAgent: FullAgentSubAgentSelectWithRelationIds;
} | - | - |

**Returns**: (none)



### getArtifactComponentsForSubAgent(params: {
  project: FullProjectSelectWithRelationIds;
  subAgent: FullAgentSubAgentSelectWithRelationIds;
})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  project: FullProjectSelectWithRelationIds;
  subAgent: FullAgentSubAgentSelectWithRelationIds;
} | - | - |

**Returns**: (none)



### getSkillsForSubAgent(params: {
  project: ProjectWithSkills;
  subAgent: SubAgentWithSkills;
})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  project: ProjectWithSkills;
  subAgent: SubAgentWithSkills;
} | - | - |

**Returns**: (none)



### getTransferRelationsForTargetSubAgent(params: {
  agent: AgentWithinContextOfProjectSelectWithRelationIds;
  subAgentId: string;
})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  agent: AgentWithinContextOfProjectSelectWithRelationIds;
  subAgentId: string;
} | - | - |

**Returns**: (none)



### getExternalAgentRelationsForTargetSubAgent(params: {
  agent: AgentWithinContextOfProjectSelectWithRelationIds;
  project: FullProjectSelectWithRelationIds;
  subAgentId: string;
})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  agent: AgentWithinContextOfProjectSelectWithRelationIds;
  project: FullProjectSelectWithRelationIds;
  subAgentId: string;
} | - | - |

**Returns**: (none)



### buildRelationsForDescription(params: {
  agent: AgentWithinContextOfProjectSelectWithRelationIds;
  project: FullProjectSelectWithRelationIds;
  subAgent: FullAgentSubAgentSelectWithRelationIds;
})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  agent: AgentWithinContextOfProjectSelectWithRelationIds;
  project: FullProjectSelectWithRelationIds;
  subAgent: FullAgentSubAgentSelectWithRelationIds;
} | - | - |

**Returns**: (none)



### enhanceInternalRelation(params: {
  relation: InternalRelation;
  agent: AgentWithinContextOfProjectSelectWithRelationIds;
  project: FullProjectSelectWithRelationIds;
})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  relation: InternalRelation;
  agent: AgentWithinContextOfProjectSelectWithRelationIds;
  project: FullProjectSelectWithRelationIds;
} | - | - |

**Returns**: (none)



### enhanceTeamRelation(params: {
  relation: TeamRelation;
  project: FullProjectSelectWithRelationIds;
})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
  relation: TeamRelation;
  project: FullProjectSelectWithRelationIds;
} | - | - |

**Returns**: (none)


