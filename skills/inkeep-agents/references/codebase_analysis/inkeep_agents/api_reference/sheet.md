# API Reference: sheet.tsx

**Language**: TypeScript

**Source**: `agents-manage-ui/src/components/ui/sheet.tsx`

---

## Functions

### Sheet(props: React.ComponentProps<typeof SheetPrimitive.Root>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| props | React.ComponentProps<typeof SheetPrimitive.Root> | - | - |

**Returns**: (none)



### SheetTrigger(props: React.ComponentProps<typeof SheetPrimitive.Trigger>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| props | React.ComponentProps<typeof SheetPrimitive.Trigger> | - | - |

**Returns**: (none)



### SheetClose(props: React.ComponentProps<typeof SheetPrimitive.Close>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| props | React.ComponentProps<typeof SheetPrimitive.Close> | - | - |

**Returns**: (none)



### SheetPortal(props: React.ComponentProps<typeof SheetPrimitive.Portal>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| props | React.ComponentProps<typeof SheetPrimitive.Portal> | - | - |

**Returns**: (none)



### SheetOverlay({
  className, ...props
}: React.ComponentProps<typeof SheetPrimitive.Overlay>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  className | None | - | - |
| ...props
} | React.ComponentProps<typeof SheetPrimitive.Overlay> | - | - |

**Returns**: (none)



### SheetContent({
  className, children, side = 'right', ...props
}: React.ComponentProps<typeof SheetPrimitive.Content> & {
  side?: 'top' | 'right' | 'bottom' | 'left';
})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  className | None | - | - |
| children | None | - | - |
| side | None | 'right' | - |
| ...props
} | React.ComponentProps<typeof SheetPrimitive.Content> & {
  side?: 'top' | 'right' | 'bottom' | 'left';
} | - | - |

**Returns**: (none)



### SheetHeader({ className, ...props }: React.ComponentProps<'div'>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { className | None | - | - |
| ...props } | React.ComponentProps<'div'> | - | - |

**Returns**: (none)



### SheetFooter({ className, ...props }: React.ComponentProps<'div'>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { className | None | - | - |
| ...props } | React.ComponentProps<'div'> | - | - |

**Returns**: (none)



### SheetTitle({ className, ...props }: React.ComponentProps<typeof SheetPrimitive.Title>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { className | None | - | - |
| ...props } | React.ComponentProps<typeof SheetPrimitive.Title> | - | - |

**Returns**: (none)



### SheetDescription({
  className, ...props
}: React.ComponentProps<typeof SheetPrimitive.Description>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  className | None | - | - |
| ...props
} | React.ComponentProps<typeof SheetPrimitive.Description> | - | - |

**Returns**: (none)


