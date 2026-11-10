# API Reference: form.tsx

**Language**: TypeScript

**Source**: `agents-manage-ui/src/components/ui/form.tsx`

---

## Functions

### useFormField()

**Returns**: (none)



### FormItem({ className, ...props }: ComponentProps<'div'>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { className | None | - | - |
| ...props } | ComponentProps<'div'> | - | - |

**Returns**: (none)



### FormLabel({
  children, ...props
}: ComponentProps<typeof LabelPrimitive.Root> & {
  isRequired?: boolean;
  tooltip?: string;
})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  children | None | - | - |
| ...props
} | ComponentProps<typeof LabelPrimitive.Root> & {
  isRequired?: boolean;
  tooltip?: string;
} | - | - |

**Returns**: (none)



### FormControl(props: ComponentProps<typeof SlotPrimitive.Slot>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| props | ComponentProps<typeof SlotPrimitive.Slot> | - | - |

**Returns**: (none)



### FormDescription({ className, ...props }: ComponentProps<'p'>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { className | None | - | - |
| ...props } | ComponentProps<'p'> | - | - |

**Returns**: (none)



### flatNestedFieldMessage(node: unknown, path: string[] = [])

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| node | unknown | - | - |
| path | string[] | [] | - |

**Returns**: (none)



### FormMessage({ className, children, ...props }: ComponentProps<'p'>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { className | None | - | - |
| children | None | - | - |
| ...props } | ComponentProps<'p'> | - | - |

**Returns**: (none)


