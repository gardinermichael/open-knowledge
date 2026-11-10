# API Reference: apierror.ts

**Language**: TypeScript

**Source**: `packages/agents-mcp/src/models/errors/apierror.ts`

---

## Classes

### APIError

**Inherits from**: Error

#### Methods

##### constructor(message: string, public readonly httpMeta: {
      response: Response;
      request: Request;
      body: string;
    })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| message | string | - | - |
| public readonly httpMeta | {
      response: Response;
      request: Request;
      body: string;
    } | - | - |



