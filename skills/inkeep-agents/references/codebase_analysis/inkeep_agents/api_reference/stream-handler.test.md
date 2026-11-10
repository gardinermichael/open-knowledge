# API Reference: stream-handler.test.ts

**Language**: TypeScript

**Source**: `agents-api/src/domains/run/agents/streaming/__tests__/stream-handler.test.ts`

---

## Functions

### makeStreamResult({
  fullStreamEvents, partialOutputDeltas, text = '', steps = [], output, finishReason = 'stop', }: {
  fullStreamEvents: Array<Record<string, unknown>>;
  partialOutputDeltas: Array<unknown>;
  text?: string;
  steps?: unknown[];
  output?: unknown;
  finishReason?: string;
})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  fullStreamEvents | None | - | - |
| partialOutputDeltas | None | - | - |
| text | None | '' | - |
| steps | None | [] | - |
| output | None | - | - |
| finishReason | None | 'stop' | - |
| } | {
  fullStreamEvents: Array<Record<string | - | - |
| unknown>>;
  partialOutputDeltas | Array<unknown>;
  text?: string;
  steps?: unknown[];
  output?: unknown;
  finishReason?: string;
} | - | - |

**Returns**: (none)



### makeMockParser(calls: ParserCall[])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| calls | ParserCall[] | - | - |

**Returns**: (none)


