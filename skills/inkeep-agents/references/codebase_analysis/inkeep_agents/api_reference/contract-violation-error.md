# API Reference: contract-violation-error.ts

**Language**: TypeScript

**Source**: `agents-api/src/domains/run/errors/contract-violation-error.ts`

---

## Classes

### ContractViolationError

**Inherits from**: Error

#### Methods

##### constructor(params: {
    subAgentId: string;
    policy: ContractViolationPolicy;
    attemptedRetries: number;
    lastResponseText: string;
    reason: string;
  })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| params | {
    subAgentId: string;
    policy: ContractViolationPolicy;
    attemptedRetries: number;
    lastResponseText: string;
    reason: string;
  } | - | - |



