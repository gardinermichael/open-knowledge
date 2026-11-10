# API Reference: json-schema-builder.tsx

**Language**: TypeScript

**Source**: `agents-manage-ui/src/components/form/json-schema-builder.tsx`

---

## Functions

### addTag(tag: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tag | string | - | - |

**Returns**: (none)



### removeTag(tag: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tag | string | - | - |

**Returns**: (none)



### handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| event | React.KeyboardEvent<HTMLInputElement> | - | - |

**Returns**: (none)



### inputs(<div className = "flex gap-2 items-center" style={{ marginLeft: indentStyle }}>
      {prefix ||
        (hasInPreview && (
          <Tooltip>
            <TooltipTrigger asChild>
              {/* without the wrapping div the checkbox doesn't get the data-state="checked" attribute and the styles are not applied */}
              <div>
                <Checkbox
                  // !! fix warning: Checkbox is changing from uncontrolled to controlled.
                  checked={!!field.isPreview}
                  onCheckedChange={(checked)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| <div className | None | "flex gap-2 items-center" style={{ marginLeft: indentStyle }}>
      {prefix ||
        (hasInPreview && (
          <Tooltip>
            <TooltipTrigger asChild>
              {/* without the wrapping div the checkbox doesn't get the data-state="checked" attribute and the styles are not applied */}
              <div>
                <Checkbox
                  // !! fix warning: Checkbox is changing from uncontrolled to controlled.
                  checked={!!field.isPreview}
                  onCheckedChange={(checked | - |

**Returns**: (none)


