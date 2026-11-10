# API Reference: httpclienterrors.ts

**Language**: TypeScript

**Source**: `packages/agents-mcp/src/models/errors/httpclienterrors.ts`

---

## Classes

### HTTPClientError

**Inherits from**: Error

#### Methods

##### constructor(message: string, opts?: { cause?: unknown })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| message | string | - | - |
| opts? | { cause?: unknown } | - | - |




### UnexpectedClientError

**Inherits from**: HTTPClientError



### InvalidRequestError

**Inherits from**: HTTPClientError



### RequestAbortedError

**Inherits from**: HTTPClientError



### RequestTimeoutError

**Inherits from**: HTTPClientError



### ConnectionError

**Inherits from**: HTTPClientError


