# API Reference: input-group.tsx

**Language**: TypeScript

**Source**: `agents-manage-ui/src/components/ui/input-group.tsx`

---

## Functions

### InputGroup({ className, ...props }: React.ComponentProps<'div'>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { className | None | - | - |
| ...props } | React.ComponentProps<'div'> | - | - |

**Returns**: (none)



### InputGroupAddon({
  className, align = 'inline-start', ...props
}: React.ComponentProps<'div'> & VariantProps<typeof inputGroupAddonVariants>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  className | None | - | - |
| align | None | 'inline-start' | - |
| ...props
} | React.ComponentProps<'div'> & VariantProps<typeof inputGroupAddonVariants> | - | - |

**Returns**: (none)



### InputGroupButton({
  className, type = 'button', variant = 'ghost', size = 'xs', ...props
}: Omit<React.ComponentProps<typeof Button>, 'size'> &
  VariantProps<typeof inputGroupButtonVariants>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  className | None | - | - |
| type | None | 'button' | - |
| variant | None | 'ghost' | - |
| size | None | 'xs' | - |
| ...props
} | Omit<React.ComponentProps<typeof Button> | - | - |
| 'size'> &
  VariantProps<typeof inputGroupButtonVariants> | None | - | - |

**Returns**: (none)



### InputGroupText({ className, ...props }: React.ComponentProps<'span'>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { className | None | - | - |
| ...props } | React.ComponentProps<'span'> | - | - |

**Returns**: (none)



### InputGroupInput({ className, ...props }: React.ComponentProps<'input'>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { className | None | - | - |
| ...props } | React.ComponentProps<'input'> | - | - |

**Returns**: (none)



### InputGroupTextarea({ className, ...props }: React.ComponentProps<'textarea'>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { className | None | - | - |
| ...props } | React.ComponentProps<'textarea'> | - | - |

**Returns**: (none)


