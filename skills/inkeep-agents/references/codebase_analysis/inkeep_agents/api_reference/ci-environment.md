# API Reference: ci-environment.ts

**Language**: TypeScript

**Source**: `agents-cli/src/utils/ci-environment.ts`

---

## Functions

### detectCIEnvironment()

**Async function**

**Returns**: (none)



### loadCIEnvironmentConfig()

**Returns**: (none)



### logCIConfig(config: CIEnvironmentConfig, reason: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| config | CIEnvironmentConfig | - | - |
| reason | string | - | - |

**Returns**: (none)



### getAuthHeaders(config: { accessToken?: string; apiKey?: string }, isCI: boolean = false)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| config | { accessToken?: string; apiKey?: string } | - | - |
| isCI | boolean | false | - |

**Returns**: (none)



### validateCIConfig(config: CIEnvironmentConfig)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| config | CIEnvironmentConfig | - | - |

**Returns**: (none)


