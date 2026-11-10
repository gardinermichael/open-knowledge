# API Reference: builderFunctions.ts

**Language**: TypeScript

**Source**: `packages/agents-sdk/src/builderFunctions.ts`

---

## Functions

### agent(config: AgentConfig)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| config | AgentConfig | - | - |

**Returns**: (none)



### project(config: ProjectConfig)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| config | ProjectConfig | - | - |

**Returns**: (none)



### subAgent(config: SubAgentConfig)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| config | SubAgentConfig | - | - |

**Returns**: (none)



### credential(config: CredentialReferenceApiInsert)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| config | CredentialReferenceApiInsert | - | - |

**Returns**: (none)



### mcpServer(config: MCPServerConfig)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| config | MCPServerConfig | - | - |

**Returns**: (none)



### mcpTool(config: MCPToolConfig)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| config | MCPToolConfig | - | - |

**Returns**: (none)



### artifactComponent(config: ArtifactComponentConfig)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| config | ArtifactComponentConfig | - | - |

**Returns**: (none)



### dataComponent(config: DataComponentConfig)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| config | DataComponentConfig | - | - |

**Returns**: (none)



### statusComponent(config: StatusComponentConfig)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| config | StatusComponentConfig | - | - |

**Returns**: (none)



### agentMcp(config: AgentMcpConfig)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| config | AgentMcpConfig | - | - |

**Returns**: (none)



### functionTool(config: FunctionToolConfig)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| config | FunctionToolConfig | - | - |

**Returns**: (none)



### trigger(config: Omit<TriggerApiInsert, 'id'> & { id?: string })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| config | Omit<TriggerApiInsert | - | - |
| 'id'> & { id? | string } | - | - |

**Returns**: (none)


