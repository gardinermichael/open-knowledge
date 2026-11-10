# API Reference: sidebar.tsx

**Language**: TypeScript

**Source**: `agents-manage-ui/src/components/ui/sidebar.tsx`

---

## Functions

### useSidebar()

**Returns**: (none)



### SidebarProvider({
  defaultOpen = true, open: openProp, onOpenChange: setOpenProp, className, style, children, ...props
}: React.ComponentProps<'div'> & {
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  defaultOpen | None | true | - |
| open | openProp | - | - |
| onOpenChange | setOpenProp | - | - |
| className | None | - | - |
| style | None | - | - |
| children | None | - | - |
| ...props
} | React.ComponentProps<'div'> & {
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean | - | - |

**Returns**: (none)



### setOpen(value: boolean | ((value: boolean)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | boolean | ((value: boolean | - | - |

**Returns**: (none)



### toggleSidebar()

**Returns**: (none)



### handleKeyDown(event: KeyboardEvent)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| event | KeyboardEvent | - | - |

**Returns**: (none)



### Sidebar({
  side = 'left', variant = 'sidebar', collapsible = 'offcanvas', className, children, onMouseEnter, onMouseLeave, ...props
}: React.ComponentProps<'div'> & {
  side?: 'left' | 'right';
  variant?: 'sidebar' | 'floating' | 'inset';
  collapsible?: 'offcanvas' | 'icon' | 'none';
})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  side | None | 'left' | - |
| variant | None | 'sidebar' | - |
| collapsible | None | 'offcanvas' | - |
| className | None | - | - |
| children | None | - | - |
| onMouseEnter | None | - | - |
| onMouseLeave | None | - | - |
| ...props
} | React.ComponentProps<'div'> & {
  side?: 'left' | 'right';
  variant?: 'sidebar' | 'floating' | 'inset';
  collapsible?: 'offcanvas' | 'icon' | 'none';
} | - | - |

**Returns**: (none)



### SidebarTrigger({ className, onClick, ...props }: React.ComponentProps<typeof Button>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { className | None | - | - |
| onClick | None | - | - |
| ...props } | React.ComponentProps<typeof Button> | - | - |

**Returns**: (none)



### SidebarRail({ className, ...props }: React.ComponentProps<'button'>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { className | None | - | - |
| ...props } | React.ComponentProps<'button'> | - | - |

**Returns**: (none)



### SidebarInset({ className, ...props }: React.ComponentProps<'main'>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { className | None | - | - |
| ...props } | React.ComponentProps<'main'> | - | - |

**Returns**: (none)



### SidebarInput({ className, ...props }: React.ComponentProps<typeof Input>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { className | None | - | - |
| ...props } | React.ComponentProps<typeof Input> | - | - |

**Returns**: (none)



### SidebarHeader({ className, ...props }: React.ComponentProps<'div'>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { className | None | - | - |
| ...props } | React.ComponentProps<'div'> | - | - |

**Returns**: (none)



### SidebarFooter({ className, ...props }: React.ComponentProps<'div'>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { className | None | - | - |
| ...props } | React.ComponentProps<'div'> | - | - |

**Returns**: (none)



### SidebarSeparator({ className, ...props }: React.ComponentProps<typeof Separator>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { className | None | - | - |
| ...props } | React.ComponentProps<typeof Separator> | - | - |

**Returns**: (none)



### SidebarContent({ className, ...props }: React.ComponentProps<'div'>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { className | None | - | - |
| ...props } | React.ComponentProps<'div'> | - | - |

**Returns**: (none)



### SidebarGroup({ className, ...props }: React.ComponentProps<'div'>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { className | None | - | - |
| ...props } | React.ComponentProps<'div'> | - | - |

**Returns**: (none)



### SidebarGroupLabel({
  className, asChild = false, ...props
}: React.ComponentProps<'div'> & { asChild?: boolean })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  className | None | - | - |
| asChild | None | false | - |
| ...props
} | React.ComponentProps<'div'> & { asChild?: boolean } | - | - |

**Returns**: (none)



### SidebarGroupAction({
  className, asChild = false, ...props
}: React.ComponentProps<'button'> & { asChild?: boolean })

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  className | None | - | - |
| asChild | None | false | - |
| ...props
} | React.ComponentProps<'button'> & { asChild?: boolean } | - | - |

**Returns**: (none)



### SidebarGroupContent({ className, ...props }: React.ComponentProps<'div'>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { className | None | - | - |
| ...props } | React.ComponentProps<'div'> | - | - |

**Returns**: (none)



### SidebarMenu({ className, ...props }: React.ComponentProps<'ul'>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { className | None | - | - |
| ...props } | React.ComponentProps<'ul'> | - | - |

**Returns**: (none)



### SidebarMenuItem({ className, ...props }: React.ComponentProps<'li'>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { className | None | - | - |
| ...props } | React.ComponentProps<'li'> | - | - |

**Returns**: (none)



### SidebarMenuButton({
  asChild = false, isActive = false, variant = 'default', size = 'default', tooltip, className, ...props
}: React.ComponentProps<'button'> & {
  asChild?: boolean;
  isActive?: boolean;
  tooltip?: string | React.ComponentProps<typeof TooltipContent>;
} & VariantProps<typeof sidebarMenuButtonVariants>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  asChild | None | false | - |
| isActive | None | false | - |
| variant | None | 'default' | - |
| size | None | 'default' | - |
| tooltip | None | - | - |
| className | None | - | - |
| ...props
} | React.ComponentProps<'button'> & {
  asChild?: boolean;
  isActive?: boolean;
  tooltip?: string | React.ComponentProps<typeof TooltipContent>;
} & VariantProps<typeof sidebarMenuButtonVariants> | - | - |

**Returns**: (none)



### SidebarMenuAction({
  className, asChild = false, showOnHover = false, ...props
}: React.ComponentProps<'button'> & {
  asChild?: boolean;
  showOnHover?: boolean;
})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  className | None | - | - |
| asChild | None | false | - |
| showOnHover | None | false | - |
| ...props
} | React.ComponentProps<'button'> & {
  asChild?: boolean;
  showOnHover?: boolean;
} | - | - |

**Returns**: (none)



### SidebarMenuBadge({ className, ...props }: React.ComponentProps<'div'>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { className | None | - | - |
| ...props } | React.ComponentProps<'div'> | - | - |

**Returns**: (none)



### SidebarMenuSkeleton({
  className, showIcon = false, ...props
}: React.ComponentProps<'div'> & {
  showIcon?: boolean;
})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  className | None | - | - |
| showIcon | None | false | - |
| ...props
} | React.ComponentProps<'div'> & {
  showIcon?: boolean;
} | - | - |

**Returns**: (none)



### SidebarMenuSub({ className, ...props }: React.ComponentProps<'ul'>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { className | None | - | - |
| ...props } | React.ComponentProps<'ul'> | - | - |

**Returns**: (none)



### SidebarMenuSubItem({ className, ...props }: React.ComponentProps<'li'>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| { className | None | - | - |
| ...props } | React.ComponentProps<'li'> | - | - |

**Returns**: (none)



### SidebarMenuSubButton({
  asChild = false, size = 'md', isActive = false, className, ...props
}: React.ComponentProps<'a'> & {
  asChild?: boolean;
  size?: 'sm' | 'md';
  isActive?: boolean;
})

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| {
  asChild | None | false | - |
| size | None | 'md' | - |
| isActive | None | false | - |
| className | None | - | - |
| ...props
} | React.ComponentProps<'a'> & {
  asChild?: boolean;
  size?: 'sm' | 'md';
  isActive?: boolean;
} | - | - |

**Returns**: (none)


