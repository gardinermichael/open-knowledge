# API Reference: friendly-schedule-builder.tsx

**Language**: TypeScript

**Source**: `agents-manage-ui/src/components/scheduled-triggers/friendly-schedule-builder.tsx`

---

## Functions

### toTimeString(hour: string, minute: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| hour | string | - | - |
| minute | string | - | - |

**Returns**: (none)



### parseTimeString(time: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| time | string | - | - |

**Returns**: (none)



### generateCronExpression(frequency: FrequencyType, options: {
    minuteInterval?: string;
    minute?: string;
    hour?: string;
    daysOfWeek?: string[];
    dayOfMonth?: string;
  })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| frequency | FrequencyType | - | - |
| options | {
    minuteInterval?: string;
    minute?: string;
    hour?: string;
    daysOfWeek?: string[];
    dayOfMonth?: string;
  } | - | - |

**Returns**: (none)



### TimezoneCombobox({ value, onChange }: { value: string; onChange: (tz: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { value | None | - | - |
| onChange } | { value: string; onChange: (tz: string | - | - |

**Returns**: (none)



### FriendlyScheduleBuilder({
  value, onChange, timezone = 'UTC', onTimezoneChange, className, }: FriendlyScheduleBuilderProps)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  value | None | - | - |
| onChange | None | - | - |
| timezone | None | 'UTC' | - |
| onTimezoneChange | None | - | - |
| className | None | - | - |
| } | FriendlyScheduleBuilderProps | - | - |

**Returns**: (none)



### updateCronExpression()

**Returns**: (none)



### TIMEZONE_OPTIONS(()

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ( | None | - | - |

**Returns**: (none)



### handleFrequencyChange(newFrequency: FrequencyType)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| newFrequency | FrequencyType | - | - |

**Returns**: (none)



### handleCustomCronChange(e: React.ChangeEvent<HTMLInputElement>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| e | React.ChangeEvent<HTMLInputElement> | - | - |

**Returns**: (none)



### handleDayToggle(day: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| day | string | - | - |

**Returns**: (none)


