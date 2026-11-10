# API Reference: chart.tsx

**Language**: TypeScript

**Source**: `agents-manage-ui/src/components/ui/chart.tsx`

---

## Functions

### useChart()

**Returns**: (none)



### ChartContainer({
  id, className, children, config, ...props
}: React.ComponentProps<'div'> & {
  config: ChartConfig;
  children: React.ComponentProps<typeof RechartsPrimitive.ResponsiveContainer>['children'];
})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  id | None | - | - |
| className | None | - | - |
| children | None | - | - |
| config | None | - | - |
| ...props
} | React.ComponentProps<'div'> & {
  config: ChartConfig;
  children: React.ComponentProps<typeof RechartsPrimitive.ResponsiveContainer>['children'];
} | - | - |

**Returns**: (none)



### ChartTooltipContent({
  active, payload, className, indicator = 'dot', hideLabel = false, hideIndicator = false, label, labelFormatter, labelClassName, formatter, color, nameKey, labelKey, }: React.ComponentProps<typeof RechartsPrimitive.Tooltip> &
  React.ComponentProps<'div'> & {
    hideLabel?: boolean;
    hideIndicator?: boolean;
    indicator?: 'line' | 'dot' | 'dashed';
    nameKey?: string;
    labelKey?: string;
  })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  active | None | - | - |
| payload | None | - | - |
| className | None | - | - |
| indicator | None | 'dot' | - |
| hideLabel | None | false | - |
| hideIndicator | None | false | - |
| label | None | - | - |
| labelFormatter | None | - | - |
| labelClassName | None | - | - |
| formatter | None | - | - |
| color | None | - | - |
| nameKey | None | - | - |
| labelKey | None | - | - |
| } | React.ComponentProps<typeof RechartsPrimitive.Tooltip> &
  React.ComponentProps<'div'> & {
    hideLabel?: boolean;
    hideIndicator?: boolean;
    indicator?: 'line' | 'dot' | 'dashed';
    nameKey?: string;
    labelKey?: string;
  } | - | - |

**Returns**: (none)



### ChartLegendContent({
  className, hideIcon = false, payload, verticalAlign = 'bottom', nameKey, }: React.ComponentProps<'div'> &
  Pick<RechartsPrimitive.LegendProps, 'payload' | 'verticalAlign'> & {
    hideIcon?: boolean;
    nameKey?: string;
  })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  className | None | - | - |
| hideIcon | None | false | - |
| payload | None | - | - |
| verticalAlign | None | 'bottom' | - |
| nameKey | None | - | - |
| } | React.ComponentProps<'div'> &
  Pick<RechartsPrimitive.LegendProps | - | - |
| 'payload' | 'verticalAlign'> & {
    hideIcon? | boolean;
    nameKey?: string;
  } | - | - |

**Returns**: (none)



### getPayloadConfigFromPayload(config: ChartConfig, payload: unknown, key: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| config | ChartConfig | - | - |
| payload | unknown | - | - |
| key | string | - | - |

**Returns**: (none)



### ChartStyle({ id, config }: { id: string; config: ChartConfig })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { id | None | - | - |
| config } | { id: string; config: ChartConfig } | - | - |

**Returns**: (none)



### tooltipLabel(()

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ( | None | - | - |

**Returns**: (none)


