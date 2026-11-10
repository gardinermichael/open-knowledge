# Design Patterns

*Detected patterns from C3.1 analysis*

## examples/__common__.py

### Decorator

- **Class**: `FakeMessageChatModel`
- **Confidence**: 0.30

### Adapter

- **Class**: `FakeMessageChatModel`
- **Confidence**: 0.50

## langgraphics/formatter.py

### Decorator

- **Class**: `Formatter`
- **Confidence**: 0.30

## langgraphics/streamer.py

### Adapter

- **Class**: `BroadcastingTracer`
- **Confidence**: 0.50

### Observer

- **Class**: `BroadcastingTracer`
- **Confidence**: 0.65

### Observer

- **Class**: `Viewport`
- **Confidence**: 0.60

## tests/lib/conftest.py

### Strategy

- **Class**: `SimpleState`
- **Confidence**: 0.50

### Strategy

- **Class**: `CounterState`
- **Confidence**: 0.50

## tests/lib/test_formatter.py

### ChainOfResponsibility

- **Class**: `TestChainInputsOutputs`
- **Confidence**: 0.60

