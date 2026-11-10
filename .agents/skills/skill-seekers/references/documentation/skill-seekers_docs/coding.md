# Skill-Seekers_Docs - Coding

**Pages:** 3

---

## AI Coding Assistants | Skill Seekers Docs

**URL:** https://skillseekersweb.com/docs/integrations/coding

**Contents:**
- Documentation
  - About
  - Getting Started
  - Tutorials
  - Manual
    - Scraping
    - Enhancement
    - MCP
    - Platforms
    - Advanced

Give your IDE expert framework knowledge. Transform docs, repos, and codebases into AI coding rules.

Your AI coding assistant doesn’t know your frameworks:

Convert any source into .cursorrules, .windsurfrules, etc.:

Give Cursor Framework Knowledge →

**Examples:**

Example 1 (sql):
```sql
# From documentation
skill-seekers scrape --target claude --config react.json
cp output/react-claude/.cursorrules ./

# From GitHub repo (better!)
skill-seekers scrape --target claude --github facebook/react
cp output/react-claude/.cursorrules ./
```

Example 2 (lua):
```lua
function handleClick() {
  // Generic suggestion...
}
```

Example 3 (jsx):
```jsx
function Counter() {
  const [count, setCount] = useState(0);  // Suggests useState
  
  useEffect(() => {  // Knows lifecycle
    document.title = `Count: ${count}`;
  }, [count]);
  
  return <button onClick={() => setCount(c => c + 1)}>  // Knows patterns
    Count: {count}
  </button>;
}
```

---

## Cline | Skill Seekers Docs

**URL:** https://skillseekersweb.com/docs/integrations/coding/cline

**Contents:**
- Documentation
  - About
  - Getting Started
  - Tutorials
  - Manual
    - Scraping
    - Enhancement
    - MCP
    - Platforms
    - Advanced

VS Code extension with MCP support for advanced AI coding.

From VS Code Extensions marketplace.

This enables natural language commands in Cline:

**Examples:**

Example 1 (unknown):
```unknown
skill-seekers scrape --target claude --config configs/react.json
cp output/react-claude/.clinerules ./
```

Example 2 (unknown):
```unknown
skill-seekers scrape --config configs/react.json --target claude
```

Example 3 (unknown):
```unknown
cp output/react-claude/.clinerules ./my-project/
```

Example 4 (unknown):
```unknown
cd /path/to/Skill_Seekers
./setup_mcp.sh
```

---

## Continue.dev | Skill Seekers Docs

**URL:** https://skillseekersweb.com/docs/integrations/coding/continue

**Contents:**
- Documentation
  - About
  - Getting Started
  - Tutorials
  - Manual
    - Scraping
    - Enhancement
    - MCP
    - Platforms
    - Advanced

Universal AI coding plugin for VS Code, JetBrains, Vim.

From your IDE’s plugin marketplace.

Add to ~/.continue/config.json:

Type @react-docs in Continue chat to reference the framework knowledge.

**Examples:**

Example 1 (unknown):
```unknown
skill-seekers scrape --target markdown --config configs/react.json
```

Example 2 (unknown):
```unknown
skill-seekers scrape --config configs/react.json --target markdown
```

Example 3 (json):
```json
{
  "contextProviders": [
    {
      "name": "react-docs",
      "type": "file",
      "file": "/path/to/output/react-markdown/SKILL.md"
    }
  ]
}
```

---
