# API Reference: vercel-message-formatter.ts

**Language**: TypeScript

**Source**: `agents-api/src/utils/vercel-message-formatter.ts`

---

## Functions

### normalizeRole(role: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| role | string | - | - |

**Returns**: (none)



### getPartKind(p: { kind?: string; type?: string })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| p | { kind?: string; type?: string } | - | - |

**Returns**: (none)



### extractText(content: MessageContent)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| content | MessageContent | - | - |

**Returns**: (none)



### toVercelMessage(msg: {
    id: string;
    role: string;
    content: MessageContent;
    createdAt: string;
  }, hydration: ReplayHydrationContext)

**Async function**

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| msg | {
    id: string;
    role: string;
    content: MessageContent;
    createdAt: string;
  } | - | - |
| hydration | ReplayHydrationContext | - | - |

**Returns**: (none)


