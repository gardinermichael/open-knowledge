# API Reference: inheritance-indicator.tsx

**Language**: TypeScript

**Source**: `agents-manage-ui/src/components/ui/inheritance-indicator.tsx`

---

## Functions

### InheritanceIndicator({
  isExplicit = false, inheritedFrom, tooltip, size = 'sm', position = 'inline', }: InheritanceIndicatorProps)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  isExplicit | None | false | - |
| inheritedFrom | None | - | - |
| tooltip | None | - | - |
| size | None | 'sm' | - |
| position | None | 'inline' | - |
| } | InheritanceIndicatorProps | - | - |

**Returns**: (none)



### getModelInheritanceStatus(currentLevel: 'project' | 'agent' | 'subagent', currentValue: any, parentValue: any, grandparentValue?: any)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| currentLevel | 'project' | 'agent' | 'subagent' | - | - |
| currentValue | any | - | - |
| parentValue | any | - | - |
| grandparentValue? | any | - | - |

**Returns**: (none)



### getExecutionLimitInheritanceStatus(currentLevel: 'project' | 'agent', limitType: 'transferCountIs' | 'stepCountIs', currentValue: any, parentValue: any)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| currentLevel | 'project' | 'agent' | - | - |
| limitType | 'transferCountIs' | 'stepCountIs' | - | - |
| currentValue | any | - | - |
| parentValue | any | - | - |

**Returns**: (none)


