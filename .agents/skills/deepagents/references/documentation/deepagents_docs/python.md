# Deepagents_Docs - Python

**Pages:** 1

---

## Changelog - Docs by LangChain

**URL:** https://docs.langchain.com/oss/python/deepagents/changelog-py

**Contents:**
- Changelog
- ​langchain-core v1.7.0
  - ​Upgrade clients before the server
  - ​Breaking changes
- ​langchain v1.4.6
  - ​Features
- ​langchain v1.4.0
  - ​Features
  - ​Migrating
- ​deepagents v0.7.0

Log of updates and improvements to our Python packages

Migrate a deepagents codebase from v0.6.x to v0.7.

Disable data retention with the Responses API

Was this page helpful?

**Examples:**

Example 1 (lua):
```lua
HumanInTheLoopMiddleware(interrupt_on={...}, interrupt_mode="per_call")
```

Example 2 (unknown):
```unknown
pip install "langchain[mcp]"
```

Example 3 (unknown):
```unknown
uv add "langchain[mcp]"
```

Example 4 (lua):
```lua
from langchain.chat_models import init_chat_model

agent = create_deep_agent(
    model=init_chat_model(
        "openai:...",
        use_responses_api=True,
        store=False,
        include=["reasoning.encrypted_content"],
    )
)
```

---
