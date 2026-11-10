# API Reference: index.py

**Language**: Python

**Source**: `examples/llm-wiki/index.py`

---

## Functions

### empty_index_text(topic: str) → str

Build default index markdown for empty wikis.

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| topic | str | - | - |

**Returns**: `str`



### _index_fallback_title(path: Path) → str

Create a human-readable title from a markdown file path.

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| path | Path | - | - |

**Returns**: `str`



### _strip_markdown_inline(text: str) → str

Strip basic inline markdown to plain text for index snippets.

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| text | str | - | - |

**Returns**: `str`



### _page_title_for_index(relative_path: Path, content: str) → str

Extract a display title for an index entry.

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| relative_path | Path | - | - |
| content | str | - | - |

**Returns**: `str`



### _page_summary_for_index(content: str) → str

Extract a one-line summary for an index entry from page content.

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| content | str | - | - |

**Returns**: `str`



### _page_metadata_for_index(content: str) → tuple[str, ...]

Extract compact optional metadata for an index entry.

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| content | str | - | - |

**Returns**: `tuple[str, ...]`



### _index_category_for_page(relative_path: Path) → str

Determine an index category label for a wiki page path.

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| relative_path | Path | - | - |

**Returns**: `str`



### _build_index_text(topic: str, wiki_dir: Path) → str

Construct index markdown for current wiki pages.

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| topic | str | - | - |
| wiki_dir | Path | - | - |

**Returns**: `str`



### refresh_index(topic: str, workspace_dir: Path) → None

Rebuild `/wiki/index.md` from current markdown pages.

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| topic | str | - | - |
| workspace_dir | Path | - | - |

**Returns**: `None`


