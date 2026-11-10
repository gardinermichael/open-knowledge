# API Reference: devSession.test.ts

**Language**: TypeScript

**Source**: `agents-api/src/__tests__/devSession.test.ts`

---

## Functions

### createMockAuth(overrides?: {
  findUserByEmail?: ReturnType<typeof vi.fn>;
  createSession?: ReturnType<typeof vi.fn>;
  secret?: string;
  sessionTokenName?: string;
  sessionTokenOptions?: Record<string, unknown>;
  expiresIn?: number;
})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| overrides? | {
  findUserByEmail?: ReturnType<typeof vi.fn>;
  createSession?: ReturnType<typeof vi.fn>;
  secret?: string;
  sessionTokenName?: string;
  sessionTokenOptions?: Record<string | - | - |
| unknown>;
  expiresIn? | number;
} | - | - |

**Returns**: (none)



### validHeaders()

**Returns**: (none)


