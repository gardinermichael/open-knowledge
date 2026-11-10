# API Reference: speakeasy.ts

**Language**: TypeScript

**Source**: `agents-api/src/utils/speakeasy.ts`

---

## Functions

### createSpeakeasyPagination(type: 'offsetLimit', config?: Partial<{
    inputs: SpeakeasyPaginationInput[];
    outputs: SpeakeasyPaginationOutputs;
  }>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| type | 'offsetLimit' | - | - |
| config? | Partial<{
    inputs: SpeakeasyPaginationInput[];
    outputs: SpeakeasyPaginationOutputs;
  }> | - | - |

**Returns**: (none)



### createSpeakeasyPagination(type: 'cursor', config: {
    inputs: SpeakeasyPaginationInput[];
    outputs: SpeakeasyPaginationOutputs;
  })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| type | 'cursor' | - | - |
| config | {
    inputs: SpeakeasyPaginationInput[];
    outputs: SpeakeasyPaginationOutputs;
  } | - | - |

**Returns**: (none)



### createSpeakeasyPagination(type: 'offsetLimit' | 'cursor', config?: Partial<{
    inputs: SpeakeasyPaginationInput[];
    outputs: SpeakeasyPaginationOutputs;
  }>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| type | 'offsetLimit' | 'cursor' | - | - |
| config? | Partial<{
    inputs: SpeakeasyPaginationInput[];
    outputs: SpeakeasyPaginationOutputs;
  }> | - | - |

**Returns**: (none)


