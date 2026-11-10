# API Reference: button-group.tsx

**Language**: TypeScript

**Source**: `agents-manage-ui/src/components/ui/button-group.tsx`

---

## Functions

### ButtonGroup({
  className, orientation, ...props
}: React.ComponentProps<'div'> & VariantProps<typeof buttonGroupVariants>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  className | None | - | - |
| orientation | None | - | - |
| ...props
} | React.ComponentProps<'div'> & VariantProps<typeof buttonGroupVariants> | - | - |

**Returns**: (none)



### ButtonGroupText({
  className, asChild = false, ...props
}: React.ComponentProps<'div'> & {
  asChild?: boolean;
})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  className | None | - | - |
| asChild | None | false | - |
| ...props
} | React.ComponentProps<'div'> & {
  asChild?: boolean;
} | - | - |

**Returns**: (none)



### ButtonGroupSeparator({
  className, orientation = 'vertical', ...props
}: React.ComponentProps<typeof Separator>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  className | None | - | - |
| orientation | None | 'vertical' | - |
| ...props
} | React.ComponentProps<typeof Separator> | - | - |

**Returns**: (none)


