# API Reference: skill-selector.tsx

**Language**: TypeScript

**Source**: `agents-manage-ui/src/components/skills/skill-selector.tsx`

---

## Functions

### reorderSkills(skills: AgentSkill[], fromId: AgentSkill['id'], toId: AgentSkill['id'])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| skills | AgentSkill[] | - | - |
| fromId | AgentSkill['id'] | - | - |
| toId | AgentSkill['id'] | - | - |

**Returns**: (none)



### updateSkillAlwaysLoaded(skills: AgentSkill[], id: AgentSkill['id'], alwaysLoaded: boolean)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| skills | AgentSkill[] | - | - |
| id | AgentSkill['id'] | - | - |
| alwaysLoaded | boolean | - | - |

**Returns**: (none)



### handleDrop(targetId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| targetId | string | - | - |

**Returns**: (none)



### handleToggle(id: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | string | - | - |

**Returns**: (none)



### handleAlwaysLoadedChange(id: string, checked: CheckboxPrimitive.CheckedState)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | string | - | - |
| checked | CheckboxPrimitive.CheckedState | - | - |

**Returns**: (none)


