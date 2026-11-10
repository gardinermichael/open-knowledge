# API Reference: dialog.tsx

**Language**: TypeScript

**Source**: `agents-manage-ui/src/components/ui/dialog.tsx`

---

## Functions

### Dialog(props: React.ComponentProps<typeof DialogPrimitive.Root>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| props | React.ComponentProps<typeof DialogPrimitive.Root> | - | - |

**Returns**: (none)



### DialogTrigger(props: React.ComponentProps<typeof DialogPrimitive.Trigger>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| props | React.ComponentProps<typeof DialogPrimitive.Trigger> | - | - |

**Returns**: (none)



### DialogPortal(props: React.ComponentProps<typeof DialogPrimitive.Portal>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| props | React.ComponentProps<typeof DialogPrimitive.Portal> | - | - |

**Returns**: (none)



### DialogClose(props: React.ComponentProps<typeof DialogPrimitive.Close>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| props | React.ComponentProps<typeof DialogPrimitive.Close> | - | - |

**Returns**: (none)



### DialogOverlay({
  className, ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  className | None | - | - |
| ...props
} | React.ComponentProps<typeof DialogPrimitive.Overlay> | - | - |

**Returns**: (none)



### DialogContent({
  className, children, showCloseButton = true, variant = 'default', position = 'center', size = 'default', ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> &
  VariantProps<typeof dialogContentVariants> & {
    showCloseButton?: boolean;
  })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  className | None | - | - |
| children | None | - | - |
| showCloseButton | None | true | - |
| variant | None | 'default' | - |
| position | None | 'center' | - |
| size | None | 'default' | - |
| ...props
} | React.ComponentProps<typeof DialogPrimitive.Content> &
  VariantProps<typeof dialogContentVariants> & {
    showCloseButton?: boolean;
  } | - | - |

**Returns**: (none)



### DialogHeader({ className, ...props }: React.ComponentProps<'div'>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { className | None | - | - |
| ...props } | React.ComponentProps<'div'> | - | - |

**Returns**: (none)



### DialogFooter({ className, ...props }: React.ComponentProps<'div'>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { className | None | - | - |
| ...props } | React.ComponentProps<'div'> | - | - |

**Returns**: (none)



### DialogTitle({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Title>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { className | None | - | - |
| ...props } | React.ComponentProps<typeof DialogPrimitive.Title> | - | - |

**Returns**: (none)



### DialogDescription({
  className, ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  className | None | - | - |
| ...props
} | React.ComponentProps<typeof DialogPrimitive.Description> | - | - |

**Returns**: (none)


