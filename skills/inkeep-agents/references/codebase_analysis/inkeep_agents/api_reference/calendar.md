# API Reference: calendar.tsx

**Language**: TypeScript

**Source**: `agents-manage-ui/src/components/ui/calendar.tsx`

---

## Functions

### Calendar({
  className, classNames, showOutsideDays = true, captionLayout = 'label', buttonVariant = 'ghost', formatters, components, ...props
}: React.ComponentProps<typeof DayPicker> & {
  buttonVariant?: React.ComponentProps<typeof Button>['variant'];
})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  className | None | - | - |
| classNames | None | - | - |
| showOutsideDays | None | true | - |
| captionLayout | None | 'label' | - |
| buttonVariant | None | 'ghost' | - |
| formatters | None | - | - |
| components | None | - | - |
| ...props
} | React.ComponentProps<typeof DayPicker> & {
  buttonVariant?: React.ComponentProps<typeof Button>['variant'];
} | - | - |

**Returns**: (none)



### CalendarDayButton({
  className, day, modifiers, ...props
}: React.ComponentProps<typeof DayButton>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  className | None | - | - |
| day | None | - | - |
| modifiers | None | - | - |
| ...props
} | React.ComponentProps<typeof DayButton> | - | - |

**Returns**: (none)


