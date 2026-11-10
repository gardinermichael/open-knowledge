# API Reference: command.tsx

**Language**: TypeScript

**Source**: `agents-manage-ui/src/components/ui/command.tsx`

---

## Functions

### Command({ className, ...props }: React.ComponentProps<typeof CommandPrimitive>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { className | None | - | - |
| ...props } | React.ComponentProps<typeof CommandPrimitive> | - | - |

**Returns**: (none)



### CommandDialog({
  title = 'Command Palette', description = 'Search for a command to run...', children, className, showCloseButton = true, ...props
}: React.ComponentProps<typeof Dialog> & {
  title?: string;
  description?: string;
  className?: string;
  showCloseButton?: boolean;
})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  title | None | 'Command Palette' | - |
| description | None | 'Search for a command to run...' | - |
| children | None | - | - |
| className | None | - | - |
| showCloseButton | None | true | - |
| ...props
} | React.ComponentProps<typeof Dialog> & {
  title?: string;
  description?: string;
  className?: string;
  showCloseButton?: boolean;
} | - | - |

**Returns**: (none)



### CommandInput({
  className, ...props
}: React.ComponentProps<typeof CommandPrimitive.Input>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  className | None | - | - |
| ...props
} | React.ComponentProps<typeof CommandPrimitive.Input> | - | - |

**Returns**: (none)



### CommandList({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.List>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { className | None | - | - |
| ...props } | React.ComponentProps<typeof CommandPrimitive.List> | - | - |

**Returns**: (none)



### CommandEmpty(props: React.ComponentProps<typeof CommandPrimitive.Empty>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| props | React.ComponentProps<typeof CommandPrimitive.Empty> | - | - |

**Returns**: (none)



### CommandGroup({
  className, ...props
}: React.ComponentProps<typeof CommandPrimitive.Group>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  className | None | - | - |
| ...props
} | React.ComponentProps<typeof CommandPrimitive.Group> | - | - |

**Returns**: (none)



### CommandSeparator({
  className, ...props
}: React.ComponentProps<typeof CommandPrimitive.Separator>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  className | None | - | - |
| ...props
} | React.ComponentProps<typeof CommandPrimitive.Separator> | - | - |

**Returns**: (none)



### CommandItem({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.Item>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { className | None | - | - |
| ...props } | React.ComponentProps<typeof CommandPrimitive.Item> | - | - |

**Returns**: (none)



### CommandShortcut({ className, ...props }: React.ComponentProps<'span'>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { className | None | - | - |
| ...props } | React.ComponentProps<'span'> | - | - |

**Returns**: (none)


