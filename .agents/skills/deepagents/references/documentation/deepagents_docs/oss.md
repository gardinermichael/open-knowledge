# Deepagents_Docs - Oss

**Pages:** 43

---

## Dynamic subagents - Docs by LangChain

**URL:** https://docs.langchain.com/oss/python/deepagents/dynamic-subagents

**Contents:**
- On this page
- Dynamic subagents
- ​Quickstart
- ​How it works
- ​Patterns
  - ​Classify and act
  - ​Fan-out and synthesize
  - ​Adversarial verification
  - ​Generate and filter
  - ​Tournament

Use interpreters to dispatch and orchestrate Deep Agents subagents from code

Example: classify and act

Example: fan-out and synthesize

Example: adversarial verification

Example: generate and filter

Example: loop until done

Was this page helpful?

**Examples:**

Example 1 (json):
```json
from deepagents import create_deep_agent
from langchain_quickjs import CodeInterpreterMiddleware

agent = create_deep_agent(
    model="google_genai:gemini-3.6-flash",
    subagents=[{
        "name": "reviewer",
        "description": "Reviews code for security issues, citing lines and severity",
        "system_prompt": "You are a security-focused code reviewer. Report issues with line numbers and severity.",
    }],
    middleware=[CodeInterpreterMiddleware()],
)
```

Example 2 (json):
```json
from deepagents import create_deep_agent
from langchain_quickjs import CodeInterpreterMiddleware

agent = create_deep_agent(
    model="openai:gpt-5.5",
    subagents=[{
        "name": "reviewer",
        "description": "Reviews code for security issues, citing lines and severity",
        "system_prompt": "You are a security-focused code reviewer. Report issues with line numbers and severity.",
    }],
    middleware=[CodeInterpreterMiddleware()],
)
```

Example 3 (json):
```json
from deepagents import create_deep_agent
from langchain_quickjs import CodeInterpreterMiddleware

agent = create_deep_agent(
    model="anthropic:claude-sonnet-5",
    subagents=[{
        "name": "reviewer",
        "description": "Reviews code for security issues, citing lines and severity",
        "system_prompt": "You are a security-focused code reviewer. Report issues with line numbers and severity.",
    }],
    middleware=[CodeInterpreterMiddleware()],
)
```

Example 4 (json):
```json
from deepagents import create_deep_agent
from langchain_quickjs import CodeInterpreterMiddleware

agent = create_deep_agent(
    model="openrouter:z-ai/glm-5.2",
    subagents=[{
        "name": "reviewer",
        "description": "Reviews code for security issues, citing lines and severity",
        "system_prompt": "You are a security-focused code reviewer. Report issues with line numbers and severity.",
    }],
    middleware=[CodeInterpreterMiddleware()],
)
```

---

## Build a content builder agent - Docs by LangChain

**URL:** https://docs.langchain.com/oss/python/deepagents/content-builder

**Contents:**
- On this page
- Build a content builder agent
- ​Overview
  - ​Key concepts
- ​Prerequisites
- ​Choose your path
  - ​Setup
  - ​Build the agent
  - ​Run the agent
  - ​Setup

Build a content writing agent with brand voice, skills, subagents, and image generation using Managed Deep Agents or the Deep Agents SDK

Add brand instructions

Create project directory

Was this page helpful?

**Examples:**

Example 1 (sql):
```sql
uvx --from managed-deepagents mda init content-builder
cd content-builder
```

Example 2 (typescript):
```typescript
ANTHROPIC_API_KEY=<ANTHROPIC_API_KEY>
GOOGLE_API_KEY=<GOOGLE_API_KEY>
TAVILY_API_KEY=<TAVILY_API_KEY>
LANGSMITH_API_KEY=<LANGSMITH_API_KEY>
```

Example 3 (unknown):
```unknown
uv add tavily-python google-genai pillow
```

Example 4 (python):
```python
import os
from pathlib import Path
from typing import Literal

from langchain.tools import tool

# Project root (parent of tools/)
PROJECT_DIR = Path(__file__).resolve().parent.parent


@tool
def web_search(
    query: str,
    max_results: int = 5,
    topic: Literal["general", "news"] = "general",
) -> dict:
    """Search the web for current information.

    Args:
        query: The search query (be specific and detailed)
        max_results: Number of results to return (default: 5)
        topic: "general" for most queries, "news" for current events

    Returns:
        Search results with titles, URLs, and content excerpts.
    """
    try:
        from tavily import TavilyClient

        api_key = os.environ.get("TAVILY_API_KEY")
        if not api_key:
            return {"error": "TAVILY_API_KEY not set"}

        client = TavilyClient(api_key=api_key)
        return client.search(query, max_results=max_results, topic=topic)
    except Exception as e:
        return {"error": f"Search failed: {e}"}


@tool
def generate_cover(prompt: str, slug: str) -> str:
    """Generate a cover image for a blog post.

    Args:
        prompt: Detailed description of the image to generate.
        slug: Blog post slug. Image saves to blogs/<slug>/hero.png
    """
    try:
        from google import genai

        client = genai.Client()
        response = client.models.generate_content(
            model="gemini-2.5-flash-image",
            contents=[prompt],
        )

        for part in response.parts:
            if part.inline_data is not None:
                image = part.as_image()
                output_path = PROJECT_DIR / "blogs" / slug / "hero.png"
                output_path.parent.mkdir(parents=True, exist_ok=True)
                image.save(str(output_path))
                return f"Image saved to {output_path}"

        return "No image generated"
    except Exception as e:
        return f"Error: {e}"


@tool
def generate_social_image(prompt: str, platform: str, slug: str) -> str:
    """Generate an image for a social media post.

    Args:
        prompt: Detailed description of the image to generate.
        platform: Either "linkedin" or "tweets"
        slug: Post slug. Image saves to <platform>/<slug>/image.png
    """
    try:
        from google import genai

        client = genai.Client()
        response = client.models.generate_content(
            model="gemini-2.5-flash-image",
            contents=[prompt],
        )

        for part in response.parts:
            if part.inline_data is not None:
                image = part.as_image()
                output_path = PROJECT_DIR / platform / slug / "image.png"
                output_path.parent.mkdir(parents=True, exist_ok=True)
                image.save(str(output_path))
                return f"Image saved to {output_path}"

        return "No image generated"
    except Exception as e:
        return f"Error: {e}"
```

---

## Customize Deep Agents - Docs by LangChain

**URL:** https://docs.langchain.com/oss/python/deepagents/customization

**Contents:**
- On this page
- Customize Deep Agents
- ​Model
- ​Tools
  - ​MCP tools
- ​System prompt
- ​Middleware
  - ​Deep Agents stack
    - ​Bare stack
    - ​Full stack

Learn how to customize Deep Agents with system prompts, tools, subagents, and more

Full function signature

General-purpose subagent prompt

Adjust when summarization triggers

Summarize with a cheaper model

Update the prompt cache TTL

Restrict the enabled filesystem tools

Customize how the skill catalog appears in the system prompt

Suppress the auto-generated skill catalog

Was this page helpful?

**Examples:**

Example 1 (python):
```python
from deepagents import create_deep_agent

agent = create_deep_agent(
    model="google_genai:gemini-3.6-flash",
    system_prompt="You are a helpful assistant.",
    tools=[search, fetch_url],
    memory=["./AGENTS.md"],
    skills=["./skills/"],
)
```

Example 2 (python):
```python
from deepagents import create_deep_agent

agent = create_deep_agent(
    model="openai:gpt-5.5",
    system_prompt="You are a helpful assistant.",
    tools=[search, fetch_url],
    memory=["./AGENTS.md"],
    skills=["./skills/"],
)
```

Example 3 (python):
```python
from deepagents import create_deep_agent

agent = create_deep_agent(
    model="anthropic:claude-sonnet-5",
    system_prompt="You are a helpful assistant.",
    tools=[search, fetch_url],
    memory=["./AGENTS.md"],
    skills=["./skills/"],
)
```

Example 4 (python):
```python
from deepagents import create_deep_agent

agent = create_deep_agent(
    model="openrouter:z-ai/glm-5.2",
    system_prompt="You are a helpful assistant.",
    tools=[search, fetch_url],
    memory=["./AGENTS.md"],
    skills=["./skills/"],
)
```

---

## Models - Docs by LangChain

**URL:** https://docs.langchain.com/oss/python/deepagents/models

**Contents:**
- On this page
- Models
- ​Supported models
  - ​Suggested models
  - ​Model evaluations
- ​Configure model parameters
  - ​Provider profiles
  - ​OpenAI and the Responses API
- ​Select a model at runtime
- View example trace

Configure model providers and parameters for Deep Agents

Was this page helpful?

**Examples:**

Example 1 (sass):
```sass
from langchain.chat_models import init_chat_model
from deepagents import create_deep_agent

model = init_chat_model(
    model="google_genai:gemini-3.6-flash",
    thinking_level="medium",
)
agent = create_deep_agent(model=model)
```

Example 2 (sass):
```sass
from langchain_google_genai import ChatGoogleGenerativeAI
from deepagents import create_deep_agent

model = ChatGoogleGenerativeAI(
    model="gemini-3.1-pro-preview",
    thinking_level="medium",
)
agent = create_deep_agent(model=model)
```

Example 3 (sass):
```sass
from deepagents import ProviderProfile, register_provider_profile

# Provider-wide default: every openai model gets temperature=0.
register_provider_profile(
    "openai",
    ProviderProfile(init_kwargs={"temperature": 0}),
)

# Model-level override: gpt-5.5 additionally gets a specific reasoning effort.
# Inherits temperature=0 from the provider-level profile above.
register_provider_profile(
    "openai:gpt-5.5",
    ProviderProfile(init_kwargs={"reasoning_effort": "medium"}),
)
```

Example 4 (sass):
```sass
from langchain.chat_models import init_chat_model
from deepagents import create_deep_agent

model = init_chat_model("openai:gpt-5.5", use_responses_api=False)
agent = create_deep_agent(model=model)
```

---

## Build a data analysis agent - Docs by LangChain

**URL:** https://docs.langchain.com/oss/python/deepagents/data-analysis

**Contents:**
- On this page
- Build a data analysis agent
- ​Overview
  - ​Key concepts
- ​Setup
  - ​Installation
  - ​Optional dependencies
  - ​LangSmith
- ​Set up the backend
  - ​Upload sample data

Build an agent that analyzes data files, generates visualizations, and shares results

Agent-generated analysis report and visualization dashboard delivered to Slack

Was this page helpful?

**Examples:**

Example 1 (unknown):
```unknown
pip install deepagents
```

Example 2 (unknown):
```unknown
pip install langsmith slack-sdk
```

Example 3 (lua):
```lua
export LANGSMITH_TRACING="true"
export LANGSMITH_API_KEY="..."
```

Example 4 (python):
```python
import getpass
import os

os.environ["LANGSMITH_TRACING"] = "true"
os.environ["LANGSMITH_API_KEY"] = getpass.getpass()
```

---

## Context engineering in Deep Agents - Docs by LangChain

**URL:** https://docs.langchain.com/oss/python/deepagents/context-engineering

**Contents:**
- On this page
- Context engineering in Deep Agents
- ​Types of context
- ​Input context
- System prompt
- Memory
- Skills
- Tool prompts
  - ​System prompt
  - ​Memory

Control what context your deep agent has access to and how it is managed across long-running tasks

Was this page helpful?

**Examples:**

Example 1 (python):
```python
from deepagents import create_deep_agent

agent = create_deep_agent(
    model="google_genai:gemini-3.6-flash",
    system_prompt=(
        "You are a research assistant specializing in scientific literature. "
        "Always cite sources. Use subagents for parallel research on different topics."
    ),
)
```

Example 2 (python):
```python
from deepagents import create_deep_agent

agent = create_deep_agent(
    model="openai:gpt-5.5",
    system_prompt=(
        "You are a research assistant specializing in scientific literature. "
        "Always cite sources. Use subagents for parallel research on different topics."
    ),
)
```

Example 3 (python):
```python
from deepagents import create_deep_agent

agent = create_deep_agent(
    model="anthropic:claude-sonnet-5",
    system_prompt=(
        "You are a research assistant specializing in scientific literature. "
        "Always cite sources. Use subagents for parallel research on different topics."
    ),
)
```

Example 4 (python):
```python
from deepagents import create_deep_agent

agent = create_deep_agent(
    model="openrouter:z-ai/glm-5.2",
    system_prompt=(
        "You are a research assistant specializing in scientific literature. "
        "Always cite sources. Use subagents for parallel research on different topics."
    ),
)
```

---

## OpenWiki - Docs by LangChain

**URL:** https://docs.langchain.com/oss/python/deepagents/openwiki

**Contents:**
- OpenWiki
- ​Get started
- ​Modes
- ​Capabilities
- Repository wikis
- Coding-agent integrations
- Search and link
- Personal brain
- Grounded Claims
- Automatic updates

CLI that writes and maintains agent wikis so coding agents work faster

Was this page helpful?

**Examples:**

Example 1 (unknown):
```unknown
npm install -g openwiki
openwiki --init
```

---

## Browser use - Docs by LangChain

**URL:** https://docs.langchain.com/oss/python/deepagents/browser-use

**Contents:**
- On this page
- Browser use
- ​Understand the basics
  - ​Use Stagehand with local or remote browsers
  - ​Other browser tools
- ​Use Stagehand with Browserbase
- ​Choose a browser scope
- ​Test an app with Chrome in a LangSmith sandbox
  - ​Prepare the sandbox snapshot
  - ​Create the QA agent

Give a deep agent a browser so it can take actions on websites and test web apps end to end.

Was this page helpful?

**Examples:**

Example 1 (unknown):
```unknown
pip install langchain-stagehand deepagents langchain-openai
```

Example 2 (unknown):
```unknown
export OPENAI_API_KEY="your-openai-api-key"
export BROWSERBASE_API_KEY="your-browserbase-api-key"
```

Example 3 (python):
```python
import asyncio
import os

from deepagents import create_deep_agent
from langchain_stagehand import StagehandMiddleware
from stagehand import Stagehand, browserbase


async def main():
    browser = await browserbase.launch(api_key=os.environ["BROWSERBASE_API_KEY"])
    try:
        stagehand = await Stagehand.create(browser=browser)
        agent = create_deep_agent(
            model="openai:gpt-5.5-2026-04-23",
            middleware=[StagehandMiddleware(stagehand=stagehand)],
        )
        result = await agent.ainvoke({
            "messages": [{
                "role": "user",
                "content": (
                    "On opentable.com, find a table for two in San Francisco this Friday "
                    "at 7 PM. Stop before confirming, and report the restaurant, time, and booking link."
                ),
            }]
        })
        print(result["messages"][-1].content_blocks)
    finally:
        await browser.close()


asyncio.run(main())
```

Example 4 (elixir):
```elixir
npm install -g agent-browser@latest
agent-browser install --with-deps
```

---

## A2A endpoint in Agent Server - Docs by LangChain

**URL:** https://docs.langchain.com/oss/python/deepagents/a2a

**Contents:**
- On this page
- A2A endpoint in Agent Server
- ​Protocol version
- ​Supported methods
  - ​Return before the run finishes
  - ​Task history in responses
  - ​Interrupts
- ​Agent card discovery
- ​Optional capabilities
  - ​Declare input and output modes

Use the A2A protocol to enable agent-to-agent communication with distributed tracing in LangSmith.

Was this page helpful?

**Examples:**

Example 1 (json):
```json
"supportedInterfaces": [
  {
    "url": "https://your-deployment/a2a/{assistant_id}",
    "protocolBinding": "JSONRPC",
    "protocolVersion": "1.0"
  }
]
```

Example 2 (json):
```json
{
  "jsonrpc": "2.0",
  "id": "1",
  "method": "SendMessage",
  "params": {
    "message": {
      "role": "ROLE_USER",
      "parts": [{"text": "hello"}],
      "messageId": "message-1"
    },
    "configuration": {"returnImmediately": true}
  }
}
```

Example 3 (json):
```json
{
  "jsonrpc": "2.0",
  "id": "1",
  "method": "SendMessage",
  "params": {
    "message": {
      "role": "ROLE_USER",
      "parts": [{"text": "Second request"}],
      "messageId": "message-2",
      "contextId": "8b1f0e5c-9a3d-4f27-b0c8-2e6a5d4c1b7a"
    },
    "configuration": {"historyScope": "task"}
  }
}
```

Example 4 (json):
```json
{"jsonrpc": "2.0", "id": "2", "method": "GetTask",
 "params": {"id": "<taskId>", "historyScope": "task"}}
```

---

## Async subagents - Docs by LangChain

**URL:** https://docs.langchain.com/oss/python/deepagents/async-subagents

**Contents:**
- On this page
- Async subagents
- ​When to use async subagents
- ​Configure async subagents
- ​Use the async subagent tools
  - ​Understand the lifecycle
  - ​Deliver results through your app
- ​Handle subagents waiting for input
- ​Understand state management
  - ​Find a supervisor’s subagent threads

Launch background subagents that run concurrently while the supervisor continues interacting with the user

Was this page helpful?

**Examples:**

Example 1 (sass):
```sass
from deepagents import AsyncSubAgent, create_deep_agent

async_subagents = [
    AsyncSubAgent(
        name="researcher",
        description="Research agent for information gathering and synthesis",
        graph_id="researcher",
        # No url → ASGI transport (co-deployed in the same deployment)
    ),
    AsyncSubAgent(
        name="coder",
        description="Coding agent for code generation and review",
        graph_id="coder",
        # url="https://coder-deployment.langsmith.dev"  # Optional: HTTP transport for remote
    ),
]

agent = create_deep_agent(
    model="google_genai:gemini-3.6-flash",
    subagents=async_subagents,
)
```

Example 2 (json):
```json
{
  "graphs": {
    "supervisor": "./src/supervisor.py:graph",
    "researcher": "./src/researcher.py:graph",
    "coder": "./src/coder.py:graph"
  }
}
```

Example 3 (go):
```go
for message in state["messages"]:
    if event := message.additional_kwargs.get("deepagents_notification"):
        print(event["agent_name"], event["status"])  # success, error, timeout, cancelled, or waiting
```

Example 4 (sass):
```sass
from deepagents import AsyncSubAgent

async_subagents = [
    AsyncSubAgent(
        name="researcher",
        description="Research agent for information gathering and synthesis",
        graph_id="researcher",
        webhook="https://my-app.example.com/hooks/subagent-finished",
        notify_parent=False,  # Your app delivers the result
    ),
]
```

---

## Interpreters - Docs by LangChain

**URL:** https://docs.langchain.com/oss/python/deepagents/interpreters

**Contents:**
- On this page
- Interpreters
- ​Why use interpreters?
- Programmatic tool calling (PTC)
- Dynamic subagents
- Stateful work
- Deterministic transforms
- ​Choose a pattern
- ​Quickstart
- ​How interpreters work

Run lightweight code inside Deep Agents to compose tools, orchestrate subagents, and transform structured data

Was this page helpful?

**Examples:**

Example 1 (unknown):
```unknown
pip install -U "deepagents[quickjs]"
```

Example 2 (unknown):
```unknown
uv add "deepagents[quickjs]"
```

Example 3 (python):
```python
from deepagents import create_deep_agent
from langchain_quickjs import CodeInterpreterMiddleware

agent = create_deep_agent(
    model="google_genai:gemini-3.6-flash",
    middleware=[CodeInterpreterMiddleware()],
)
```

Example 4 (python):
```python
from deepagents import create_deep_agent
from langchain_quickjs import CodeInterpreterMiddleware

agent = create_deep_agent(
    model="openai:gpt-5.5",
    middleware=[CodeInterpreterMiddleware()],
)
```

---

## Deep Agents overview - Docs by LangChain

**URL:** https://docs.langchain.com/oss/python/deepagents

**Contents:**
- On this page
- Deep Agents overview
- ​Choose how to run Deep Agents
- Managed Deep Agents
- Deep Agents SDK
- ​Self-host with the SDK
  - ​Try it
  - ​Quickstart
- View example trace
- ​Core capabilities

Agent harness for planning, subagents, and file-system context, available as Managed Deep Agents or the Deep Agents SDK

Supported multimodal file extensions

Running without the default filesystem tools

Restricting filesystem tools

Was this page helpful?

**Examples:**

Example 1 (python):
```python
from deepagents import create_deep_agent


def get_weather(city: str) -> str:
    """Get weather for a given city."""
    return f"It's always sunny in {city}!"


agent = create_deep_agent(
    model="google_genai:gemini-3.6-flash",
    tools=[get_weather],
    system_prompt="You are a helpful assistant",
)

# Run the agent
agent.invoke(
    {"messages": [{"role": "user", "content": "what is the weather in sf"}]}
)
```

Example 2 (python):
```python
from deepagents import create_deep_agent


def get_weather(city: str) -> str:
    """Get weather for a given city."""
    return f"It's always sunny in {city}!"


agent = create_deep_agent(
    model="openai:gpt-5.5",
    tools=[get_weather],
    system_prompt="You are a helpful assistant",
)

# Run the agent
agent.invoke(
    {"messages": [{"role": "user", "content": "what is the weather in sf"}]}
)
```

Example 3 (python):
```python
from deepagents import create_deep_agent


def get_weather(city: str) -> str:
    """Get weather for a given city."""
    return f"It's always sunny in {city}!"


agent = create_deep_agent(
    model="anthropic:claude-sonnet-5",
    tools=[get_weather],
    system_prompt="You are a helpful assistant",
)

# Run the agent
agent.invoke(
    {"messages": [{"role": "user", "content": "what is the weather in sf"}]}
)
```

Example 4 (python):
```python
from deepagents import create_deep_agent


def get_weather(city: str) -> str:
    """Get weather for a given city."""
    return f"It's always sunny in {city}!"


agent = create_deep_agent(
    model="openrouter:z-ai/glm-5.2",
    tools=[get_weather],
    system_prompt="You are a helpful assistant",
)

# Run the agent
agent.invoke(
    {"messages": [{"role": "user", "content": "what is the weather in sf"}]}
)
```

---

## Subagent streaming - Docs by LangChain

**URL:** https://docs.langchain.com/oss/python/deepagents/frontend/subagent-streaming

**Contents:**
- On this page
- Subagent streaming
- ​Why selector-based subagent streams
- ​Setting up useStream
- ​Submitting messages
- ​The SubagentDiscoverySnapshot
- ​Building the SubagentCard
- ​Progress tracking
- ​Rendering messages with subagent cards
- ​Best practices

Display specialist subagents with streaming content, progress tracking, and collapsible cards

Was this page helpful?

**Examples:**

Example 1 (lua):
```lua
import { useStream } from "@langchain/react";
import { AIMessage, HumanMessage } from "langchain";

const AGENT_URL = "http://localhost:2024";

export function DeepAgentChat() {
  const stream = useStream<typeof myAgent>({
    apiUrl: AGENT_URL,
    assistantId: "deep_agent_subagent_cards",
  });
  const subagents = [...stream.subagents.values()];
  const subagentsByCallId = new Map(subagents.map((s) => [s.id, s]));

  return (
    <div>
      {stream.messages.map((msg) => {
        const turnSubagents = AIMessage.isInstance(msg)
          ? (msg.tool_calls ?? [])
              .map((tc) => subagentsByCallId.get(tc.id ?? ""))
              .filter((s): s is NonNullable<typeof s> => !!s)
          : [];

        return (
          <div key={msg.id}>
            {HumanMessage.isInstance(msg) && <HumanBubble>{msg.text}</HumanBubble>}
            {AIMessage.isInstance(msg) && msg.text.trim() && (
              <AIBubble>{msg.text}</AIBubble>
            )}
            {turnSubagents.map((subagent) => (
              <SubagentCard key={subagent.id} stream={stream} subagent={subagent} />
            ))}
          </div>
        );
      })}
    </div>
  );
}
```

Example 2 (vue):
```vue
<script setup lang="ts">
import { computed } from "vue";
import { useStream } from "@langchain/vue";
import { AIMessage, HumanMessage } from "langchain";

const AGENT_URL = "http://localhost:2024";

const stream = useStream<typeof myAgent>({
  apiUrl: AGENT_URL,
  assistantId: "deep_agent_subagent_cards",
});

const subagentsByCallId = computed(
  () => new Map([...stream.subagents.value.values()].map((s) => [s.id, s]))
);

function subagentsForMessage(msg: unknown) {
  if (!AIMessage.isInstance(msg)) return [];
  return (msg.tool_calls ?? [])
    .map((tc) => subagentsByCallId.value.get(tc.id ?? ""))
    .filter(Boolean);
}
</script>

<template>
  <div>
    <div
      v-for="msg in stream.messages.value"
      :key="msg.id"
    >
      <HumanBubble v-if="HumanMessage.isInstance(msg)">
        {{ msg.text }}
      </HumanBubble>
      <AIBubble v-else-if="AIMessage.isInstance(msg) && msg.text.trim()">
        {{ msg.text }}
      </AIBubble>
      <SubagentCard
        v-for="subagent in subagentsForMessage(msg)"
        :key="subagent.id"
        :stream="stream"
        :subagent="subagent"
      />
    </div>
  </div>
</template>
```

Example 3 (typescript):
```typescript
<script lang="ts">
  import { useStream } from "@langchain/svelte";

  const AGENT_URL = "http://localhost:2024";

  const stream = useStream<typeof myAgent>({
    apiUrl: AGENT_URL,
    assistantId: "deep_agent_subagent_cards",
  });
</script>

<div>
  {#each stream.messages as msg (msg.id)}
    <Message {msg} />
  {/each}
  {#each [...stream.subagents.values()] as subagent (subagent.id)}
    <SubagentCard {stream} {subagent} />
  {/each}
</div>
```

Example 4 (jsx):
```jsx
import { Component, computed } from "@angular/core";
import { injectStream } from "@langchain/angular";

const AGENT_URL = "http://localhost:2024";

@Component({
  selector: "app-deep-agent-chat",
  template: `
    @for (msg of stream.messages(); track msg.id) {
      <app-message [message]="msg" />
    }
    @for (subagent of subagents(); track subagent.id) {
      <app-subagent-card [stream]="stream" [subagent]="subagent" />
    }
  `,
})
export class DeepAgentChatComponent {
  stream = injectStream<typeof myAgent>({
    apiUrl: AGENT_URL,
    assistantId: "deep_agent_subagent_cards",
  });

  subagents = computed(() => [...this.stream.subagents().values()]);
}
```

---

## Profiles - Docs by LangChain

**URL:** https://docs.langchain.com/oss/python/deepagents/profiles

**Contents:**
- On this page
- Profiles
- ​Harness profiles
- ​Registration keys
- ​Merge semantics
- ​Provider profiles
- ​Load profiles from config files
- ​Ship a profile as a plugin
- ​Related

Package per-provider and per-model defaults that Deep Agents applies when a model is selected

Lookup order for preconfigured model instances

Was this page helpful?

**Examples:**

Example 1 (sass):
```sass
from deepagents import (
    GeneralPurposeSubagentProfile,
    HarnessProfile,
    register_harness_profile,
)

register_harness_profile(
    "openai:gpt-6-astra",
    HarnessProfile(
        system_prompt_suffix="Respond in under 100 words.",
        excluded_tools={"execute"},
        excluded_middleware={"SummarizationMiddleware"},
        general_purpose_subagent=GeneralPurposeSubagentProfile(enabled=False),
    ),
)
```

Example 2 (sass):
```sass
from deepagents import HarnessProfile, register_harness_profile

# Set defaults for a hypothetical provider.
register_harness_profile(
    "my_provider",
    HarnessProfile(
        excluded_tools=frozenset({"execute"}),
        system_prompt_suffix="Respond in under 500 words.",
    ),
)

# Override the prompt suffix for one model; inherit the excluded tool.
register_harness_profile(
    "my_provider:my-model:tag",
    HarnessProfile(system_prompt_suffix="Respond in under 100 words."),
)
```

Example 3 (sass):
```sass
register_harness_profile(
    "my_provider:my-model:tag",
    HarnessProfile(excluded_tools=frozenset({"grep"})),
)
```

Example 4 (json):
```json
from deepagents import ProviderProfile, register_provider_profile

register_provider_profile(
    "my_provider",
    ProviderProfile(init_kwargs={"temperature": 0.7, "timeout": 30}),
)
register_provider_profile(
    "my_provider:my-model:tag",
    ProviderProfile(init_kwargs={"temperature": 0}),
)
```

---

## Grading rubrics - Docs by LangChain

**URL:** https://docs.langchain.com/oss/python/deepagents/rubric

**Contents:**
- On this page
- Grading rubrics
- ​Configure the middleware
- ​Pass rubric on invocation
  - ​Rubric verdicts
- ​Observe iteration progress
  - ​Grader pass events
- ​Persist rubrics across invocations
- ​Example: generate vetted Python code

LLM-as-a-judge grading for agents that iterate against a rubric until done

Define RubricMiddleware

Pass it to a deep agent

Invoke with a human message and rubric

Was this page helpful?

**Examples:**

Example 1 (sass):
```sass
from deepagents import RubricMiddleware, create_deep_agent
from langgraph.checkpoint.memory import InMemorySaver

agent = create_deep_agent(
    model="google_genai:gemini-3.6-flash",
    middleware=[
        RubricMiddleware(
            model="anthropic:claude-haiku-4-5",
            max_iterations=3,
        ),
    ],
    checkpointer=InMemorySaver(),
)
```

Example 2 (sass):
```sass
from deepagents import RubricMiddleware, create_deep_agent
from langgraph.checkpoint.memory import InMemorySaver

agent = create_deep_agent(
    model="openai:gpt-5.5",
    middleware=[
        RubricMiddleware(
            model="anthropic:claude-haiku-4-5",
            max_iterations=3,
        ),
    ],
    checkpointer=InMemorySaver(),
)
```

Example 3 (sass):
```sass
from deepagents import RubricMiddleware, create_deep_agent
from langgraph.checkpoint.memory import InMemorySaver

agent = create_deep_agent(
    model="anthropic:claude-sonnet-5",
    middleware=[
        RubricMiddleware(
            model="anthropic:claude-haiku-4-5",
            max_iterations=3,
        ),
    ],
    checkpointer=InMemorySaver(),
)
```

Example 4 (sass):
```sass
from deepagents import RubricMiddleware, create_deep_agent
from langgraph.checkpoint.memory import InMemorySaver

agent = create_deep_agent(
    model="openrouter:z-ai/glm-5.2",
    middleware=[
        RubricMiddleware(
            model="anthropic:claude-haiku-4-5",
            max_iterations=3,
        ),
    ],
    checkpointer=InMemorySaver(),
)
```

---

## Comparison with Claude Agent SDK - Docs by LangChain

**URL:** https://docs.langchain.com/oss/python/deepagents/comparison

**Contents:**
- On this page
- Comparison with Claude Agent SDK
- ​At a glance
- ​Main differences
  - ​Agent and execution environment
  - ​Multi-tenancy
  - ​A production agent server
  - ​Managed cloud or self-hosted
  - ​LLM
  - ​Ecosystems

Compare LangChain Deep Agents and Managed Deep Agents with the Claude Agent SDK to choose the right tool for your use case.

Was this page helpful?

---

## Multimodal inputs and outputs - Docs by LangChain

**URL:** https://docs.langchain.com/oss/python/deepagents/multimodal

**Contents:**
- On this page
- Multimodal inputs and outputs
- ​Multimodal user input
- ​Built-in read_file tool
- ​Custom tool outputs
- ​Context compression and multimodal content

Use images, audio, video, and documents with Deep Agents when your model supports multimodal inputs and tool results

Supported multimodal file extensions

Was this page helpful?

**Examples:**

Example 1 (json):
```json
result = agent.invoke({
    "messages": [{
        "role": "user",
        "content": [
            {"type": "text", "text": "What is in this screenshot?"},
            {"type": "image", "url": "https://example.com/screenshot.png"},
        ],
    }],
})
```

Example 2 (python):
```python
from langchain.tools import tool


@tool
def capture_screenshot() -> list[dict]:
    """Capture a screenshot of the current page."""
    return [
        {"type": "text", "text": "Screenshot of the current page:"},
        {"type": "image", "url": "https://example.com/page.png"},
    ]
```

Example 3 (json):
```json
# Before — model receives image blocks in older turns
[
    HumanMessage(
        content=[
            {"type": "text", "text": "What trends do you see in this chart?"},
            {"type": "image", "base64": IMG, "mime_type": "image/png"},
        ]
    ),
    ToolMessage(
        content=[
            {"type": "text", "text": "Updated chart:"},
            {"type": "image", "base64": IMG, "mime_type": "image/png"},
        ],
        tool_call_id="call_chart_1",
    ),
    AIMessage(content="Revenue rose in Q3 based on the chart trend."),
    HumanMessage(content="Reply with one sentence summarizing our analysis."),
]

# After — those turns collapse to text; image blocks are gone
{"content": (
    "User asked about trends in a chart screenshot. "
    "Tool returned an updated chart. Agent identified Q3 revenue growth."
)}
```

---

## Event streaming - Docs by LangChain

**URL:** https://docs.langchain.com/oss/python/deepagents/event-streaming

**Contents:**
- On this page
- Event streaming
- ​Stream subagents
- View example trace
- ​Subagent stream fields
- ​Track subagent lifecycle
- View example trace
- ​Stream messages
- View example trace
- ​Stream tool calls

Stream subagents, messages, tool calls, and final output from Deep Agents.

Was this page helpful?

**Examples:**

Example 1 (json):
```json
stream = agent.stream_events(
    {
        "messages": [{"role": "user", "content": "Write me a haiku about the sea"}],
    },
    version="v3",
)

subagent_names: list[str] = []
for subagent in stream.subagents:
    print(subagent.name, subagent.path, subagent.status)

    for message in subagent.messages:
        print(message.text)

    subagent_names.append(subagent.name)
```

Example 2 (typescript):
```typescript
stream = agent.stream_events(input, version="v3")

running = 0
completed = 0
failed = 0

for subagent in stream.subagents:
    running += 1
    print(f"{subagent.name}: started")

    try:
        _ = subagent.output
        running -= 1
        completed += 1
        print(f"{subagent.name}: completed")
    except Exception:
        running -= 1
        failed += 1
        print(f"{subagent.name}: failed")
```

Example 3 (yaml):
```yaml
stream = agent.stream_events(input, version="v3")

coordinator_messages: list[str] = []
for message in stream.messages:
    print("[coordinator]", message.text)
    coordinator_messages.append(message.text)

for subagent in stream.subagents:
    for message in subagent.messages:
        print(f"[{subagent.name}]", message.text)
```

Example 4 (sass):
```sass
stream = agent.stream_events(input, version="v3")

coordinator_tool_names: list[str] = []
for call in stream.tool_calls:
    print("[coordinator tool]", call.tool_name, call.input)
    print(call.completed, call.error)
    coordinator_tool_names.append(call.tool_name)

for subagent in stream.subagents:
    for call in subagent.tool_calls:
        print(f"[{subagent.name} tool]", call.tool_name, call.input)
        for delta in call.output_deltas:
            print(delta, end="", flush=True)

        if call.completed and call.error is None:
            print(call.output)
        elif call.error is not None:
            print(call.error)
```

---

## Human-in-the-loop - Docs by LangChain

**URL:** https://docs.langchain.com/oss/python/deepagents/human-in-the-loop

**Contents:**
- On this page
- Human-in-the-loop
- ​Basic configuration
- ​Decision types
- ​Conditional interrupts
- ​Handle interrupts
- ​Handle interrupts with streaming
- ​Multiple tool calls
- ​Rejection messages
- ​Edit tool arguments

Learn how to configure human approval for sensitive tool operations

Was this page helpful?

**Examples:**

Example 1 (python):
```python
from langchain.tools import tool
from deepagents import create_deep_agent
from langgraph.checkpoint.memory import MemorySaver


@tool
def remove_file(path: str) -> str:
    """Delete a file from the filesystem."""
    return f"Deleted {path}"


@tool
def fetch_file(path: str) -> str:
    """Read a file from the filesystem."""
    return f"Contents of {path}"


@tool
def notify_email(to: str, subject: str, body: str) -> str:
    """Send an email."""
    return f"Sent email to {to}"


# Checkpointer is REQUIRED for human-in-the-loop
checkpointer = MemorySaver()

agent = create_deep_agent(
    model="google_genai:gemini-3.6-flash",
    tools=[remove_file, fetch_file, notify_email],
    interrupt_on={
        "remove_file": True,  # Default: approve, edit, reject, respond
        "fetch_file": False,  # No interrupts needed
        "notify_email": {"allowed_decisions": ["approve", "reject"]},  # No editing
    },
    checkpointer=checkpointer,  # Required!
)
```

Example 2 (python):
```python
from langchain.tools import tool
from deepagents import create_deep_agent
from langgraph.checkpoint.memory import MemorySaver


@tool
def remove_file(path: str) -> str:
    """Delete a file from the filesystem."""
    return f"Deleted {path}"


@tool
def fetch_file(path: str) -> str:
    """Read a file from the filesystem."""
    return f"Contents of {path}"


@tool
def notify_email(to: str, subject: str, body: str) -> str:
    """Send an email."""
    return f"Sent email to {to}"


# Checkpointer is REQUIRED for human-in-the-loop
checkpointer = MemorySaver()

agent = create_deep_agent(
    model="openai:gpt-5.5",
    tools=[remove_file, fetch_file, notify_email],
    interrupt_on={
        "remove_file": True,  # Default: approve, edit, reject, respond
        "fetch_file": False,  # No interrupts needed
        "notify_email": {"allowed_decisions": ["approve", "reject"]},  # No editing
    },
    checkpointer=checkpointer,  # Required!
)
```

Example 3 (python):
```python
from langchain.tools import tool
from deepagents import create_deep_agent
from langgraph.checkpoint.memory import MemorySaver


@tool
def remove_file(path: str) -> str:
    """Delete a file from the filesystem."""
    return f"Deleted {path}"


@tool
def fetch_file(path: str) -> str:
    """Read a file from the filesystem."""
    return f"Contents of {path}"


@tool
def notify_email(to: str, subject: str, body: str) -> str:
    """Send an email."""
    return f"Sent email to {to}"


# Checkpointer is REQUIRED for human-in-the-loop
checkpointer = MemorySaver()

agent = create_deep_agent(
    model="anthropic:claude-sonnet-5",
    tools=[remove_file, fetch_file, notify_email],
    interrupt_on={
        "remove_file": True,  # Default: approve, edit, reject, respond
        "fetch_file": False,  # No interrupts needed
        "notify_email": {"allowed_decisions": ["approve", "reject"]},  # No editing
    },
    checkpointer=checkpointer,  # Required!
)
```

Example 4 (python):
```python
from langchain.tools import tool
from deepagents import create_deep_agent
from langgraph.checkpoint.memory import MemorySaver


@tool
def remove_file(path: str) -> str:
    """Delete a file from the filesystem."""
    return f"Deleted {path}"


@tool
def fetch_file(path: str) -> str:
    """Read a file from the filesystem."""
    return f"Contents of {path}"


@tool
def notify_email(to: str, subject: str, body: str) -> str:
    """Send an email."""
    return f"Sent email to {to}"


# Checkpointer is REQUIRED for human-in-the-loop
checkpointer = MemorySaver()

agent = create_deep_agent(
    model="openrouter:z-ai/glm-5.2",
    tools=[remove_file, fetch_file, notify_email],
    interrupt_on={
        "remove_file": True,  # Default: approve, edit, reject, respond
        "fetch_file": False,  # No interrupts needed
        "notify_email": {"allowed_decisions": ["approve", "reject"]},  # No editing
    },
    checkpointer=checkpointer,  # Required!
)
```

---

## Quickstart - Docs by LangChain

**URL:** https://docs.langchain.com/oss/python/deepagents/quickstart

**Contents:**
- On this page
- Quickstart
- ​Prerequisites
- ​Step 1: Install dependencies
- ​Step 2: Set up your API keys
- ​Step 3: Create a search tool
- ​Step 4: Create a deep agent
- ​Step 5: Set up LangSmith tracing
- ​Step 6: Run the agent
- ​How does it work?

Build your first deep agent in minutes

Build the Deep Agents research quickstart

Connect LangChain docs MCP servers

Install LangChain Skills

Was this page helpful?

**Examples:**

Example 1 (unknown):
```unknown
pip install deepagents
```

Example 2 (unknown):
```unknown
uv init
uv add deepagents
uv sync
```

Example 3 (unknown):
```unknown
pip install tavily-python
```

Example 4 (unknown):
```unknown
export GOOGLE_API_KEY="your-api-key"
```

---

## Customize Deep Agents - Docs by LangChain

**URL:** https://docs.langchain.com/oss/python/deepagents/customization/

**Contents:**
- On this page
- Customize Deep Agents
- ​Model
- ​Tools
  - ​MCP tools
- ​System prompt
- ​Middleware
  - ​Deep Agents stack
    - ​Bare stack
    - ​Full stack

Learn how to customize Deep Agents with system prompts, tools, subagents, and more

Full function signature

General-purpose subagent prompt

Adjust when summarization triggers

Summarize with a cheaper model

Update the prompt cache TTL

Restrict the enabled filesystem tools

Customize how the skill catalog appears in the system prompt

Suppress the auto-generated skill catalog

Was this page helpful?

**Examples:**

Example 1 (python):
```python
from deepagents import create_deep_agent

agent = create_deep_agent(
    model="google_genai:gemini-3.6-flash",
    system_prompt="You are a helpful assistant.",
    tools=[search, fetch_url],
    memory=["./AGENTS.md"],
    skills=["./skills/"],
)
```

Example 2 (python):
```python
from deepagents import create_deep_agent

agent = create_deep_agent(
    model="openai:gpt-5.5",
    system_prompt="You are a helpful assistant.",
    tools=[search, fetch_url],
    memory=["./AGENTS.md"],
    skills=["./skills/"],
)
```

Example 3 (python):
```python
from deepagents import create_deep_agent

agent = create_deep_agent(
    model="anthropic:claude-sonnet-5",
    system_prompt="You are a helpful assistant.",
    tools=[search, fetch_url],
    memory=["./AGENTS.md"],
    skills=["./skills/"],
)
```

Example 4 (python):
```python
from deepagents import create_deep_agent

agent = create_deep_agent(
    model="openrouter:z-ai/glm-5.2",
    system_prompt="You are a helpful assistant.",
    tools=[search, fetch_url],
    memory=["./AGENTS.md"],
    skills=["./skills/"],
)
```

---

## Quickstart - Docs by LangChain

**URL:** https://docs.langchain.com/oss/python/deepagents/quickstart/

**Contents:**
- On this page
- Quickstart
- ​Prerequisites
- ​Step 1: Install dependencies
- ​Step 2: Set up your API keys
- ​Step 3: Create a search tool
- ​Step 4: Create a deep agent
- ​Step 5: Set up LangSmith tracing
- ​Step 6: Run the agent
- ​How does it work?

Build your first deep agent in minutes

Build the Deep Agents research quickstart

Connect LangChain docs MCP servers

Install LangChain Skills

Was this page helpful?

**Examples:**

Example 1 (unknown):
```unknown
pip install deepagents
```

Example 2 (unknown):
```unknown
uv init
uv add deepagents
uv sync
```

Example 3 (unknown):
```unknown
pip install tavily-python
```

Example 4 (unknown):
```unknown
export GOOGLE_API_KEY="your-api-key"
```

---

## Backends - Docs by LangChain

**URL:** https://docs.langchain.com/oss/python/deepagents/backends

**Contents:**
- On this page
- Backends
- ​Quickstart
- ​Built-in backends
  - ​StateBackend
  - ​FilesystemBackend (local disk)
  - ​LocalShellBackend (local shell)
  - ​StoreBackend (LangGraph store)
    - ​Namespace factories
  - ​ContextHubBackend

Choose and configure filesystem backends for Deep Agents. You can specify routes to different backends, implement virtual filesystems, and enforce policies.

Example: S3-style backend skeleton

Was this page helpful?

**Examples:**

Example 1 (sass):
```sass
from deepagents import create_deep_agent
from deepagents.backends import StateBackend

# By default we provide a StateBackend
agent = create_deep_agent(model="google_genai:gemini-3.6-flash")

# Under the hood, it looks like
agent2 = create_deep_agent(
    model="google_genai:gemini-3.6-flash",
    backend=StateBackend(),
)
```

Example 2 (sass):
```sass
from deepagents import create_deep_agent
from deepagents.backends import StateBackend

# By default we provide a StateBackend
agent = create_deep_agent(model="openai:gpt-5.5")

# Under the hood, it looks like
agent2 = create_deep_agent(
    model="openai:gpt-5.5",
    backend=StateBackend(),
)
```

Example 3 (sass):
```sass
from deepagents import create_deep_agent
from deepagents.backends import StateBackend

# By default we provide a StateBackend
agent = create_deep_agent(model="anthropic:claude-sonnet-5")

# Under the hood, it looks like
agent2 = create_deep_agent(
    model="anthropic:claude-sonnet-5",
    backend=StateBackend(),
)
```

Example 4 (sass):
```sass
from deepagents import create_deep_agent
from deepagents.backends import StateBackend

# By default we provide a StateBackend
agent = create_deep_agent(model="openrouter:z-ai/glm-5.2")

# Under the hood, it looks like
agent2 = create_deep_agent(
    model="openrouter:z-ai/glm-5.2",
    backend=StateBackend(),
)
```

---

## Retrieval - Docs by LangChain

**URL:** https://docs.langchain.com/oss/python/deepagents/retrieval

**Contents:**
- On this page
- Retrieval
- ​Building a knowledge base
- Tutorial: Semantic search
  - ​From retrieval to RAG
  - ​Retrieval pipeline
  - ​Building blocks
- Document loaders
- Text splitters
- Embedding models

Show Extended example: Agentic RAG for LangGraph's llms.txt

Was this page helpful?

**Examples:**

Example 1 (python):
```python
import requests
from langchain.tools import tool
from langchain.chat_models import init_chat_model
from langchain.agents import create_agent


@tool
def fetch_url(url: str) -> str:
    """Fetch text content from a URL"""
    response = requests.get(url, timeout=10.0)
    response.raise_for_status()
    return response.text

system_prompt = """\
Use fetch_url when you need to fetch information from a web-page; quote relevant snippets.
"""

agent = create_agent(
    model="claude-sonnet-4-6",
    tools=[fetch_url], # A tool for retrieval
    system_prompt=system_prompt,
)
```

Example 2 (python):
```python
import requests
from langchain.agents import create_agent
from langchain.messages import HumanMessage
from langchain.tools import tool
from markdownify import markdownify


ALLOWED_DOMAINS = ["https://docs.langchain.com/"]
LLMS_TXT = 'https://docs.langchain.com/llms.txt'


@tool
def fetch_documentation(url: str) -> str:
    """Fetch and convert documentation from a URL"""
    if not any(url.startswith(domain) for domain in ALLOWED_DOMAINS):
        return (
            "Error: URL not allowed. "
            f"Must start with one of: {', '.join(ALLOWED_DOMAINS)}"
        )
    response = requests.get(url, timeout=10.0)
    response.raise_for_status()
    return markdownify(response.text)


# We will fetch the content of llms.txt, so this can
# be done ahead of time without requiring an LLM request.
llms_txt_content = requests.get(LLMS_TXT).text

# System prompt for the agent
system_prompt = f"""
You are an expert Python developer and technical assistant.
Your primary role is to help users with questions about LangGraph and related tools.

Instructions:

1. If a user asks a question you're unsure about—or one that likely involves API usage,
   behavior, or configuration—you MUST use the `fetch_documentation` tool to consult the relevant docs.
2. When citing documentation, summarize clearly and include relevant context from the content.
3. Do not use any URLs outside of the allowed domain.
4. If a documentation fetch fails, tell the user and proceed with your best expert understanding.

You can access official documentation from the following approved sources:

{llms_txt_content}

You MUST consult the documentation to get up to date documentation
before answering a user's question about LangGraph.

Your answers should be clear, concise, and technically accurate.
"""

tools = [fetch_documentation]

model = init_chat_model("claude-sonnet-4-6", max_tokens=32_000)

agent = create_agent(
    model=model,
    tools=tools,
    system_prompt=system_prompt,
    name="Agentic RAG",
)

response = agent.invoke({
    'messages': [
        HumanMessage(content=(
            "Write a short example of a langgraph agent using the "
            "prebuilt create react agent. the agent should be able "
            "to look up stock pricing information."
        ))
    ]
})

print(response['messages'][-1].content)
```

---

## Agent Client Protocol (ACP) - Docs by LangChain

**URL:** https://docs.langchain.com/oss/python/deepagents/acp

**Contents:**
- On this page
- Agent Client Protocol (ACP)
- ​Quickstart
- Example coding agent
- ​Clients
  - ​Zed
  - ​Toad

Expose Deep Agents over the Agent Client Protocol (ACP) to integrate with code editors and IDEs.

Was this page helpful?

**Examples:**

Example 1 (unknown):
```unknown
pip install deepagents-acp
```

Example 2 (unknown):
```unknown
uv add deepagents-acp
```

Example 3 (python):
```python
import asyncio

from acp import run_agent
from deepagents import create_deep_agent
from langgraph.checkpoint.memory import MemorySaver

from deepagents_acp.server import AgentServerACP


async def main() -> None:
    agent = create_deep_agent(
        model="google_genai:gemini-3.6-flash",
        # You can customize your deep agent here: set a custom prompt,
        # add your own tools, attach middleware, or compose subagents.
        system_prompt="You are a helpful coding assistant",
        checkpointer=MemorySaver(),
    )

    server = AgentServerACP(agent)
    await run_agent(server)

if __name__ == "__main__":
    asyncio.run(main())
```

Example 4 (python):
```python
import asyncio

from acp import run_agent
from deepagents import create_deep_agent
from langgraph.checkpoint.memory import MemorySaver

from deepagents_acp.server import AgentServerACP


async def main() -> None:
    agent = create_deep_agent(
        model="openai:gpt-5.5",
        # You can customize your deep agent here: set a custom prompt,
        # add your own tools, attach middleware, or compose subagents.
        system_prompt="You are a helpful coding assistant",
        checkpointer=MemorySaver(),
    )

    server = AgentServerACP(agent)
    await run_agent(server)

if __name__ == "__main__":
    asyncio.run(main())
```

---

## Memory - Docs by LangChain

**URL:** https://docs.langchain.com/oss/python/deepagents/memory

**Contents:**
- On this page
- Memory
- ​How memory works
- ​Scoped memory
  - ​Agent-scoped memory
  - ​User-scoped memory
- ​Advanced usage
  - ​Episodic memory
  - ​Organization-level memory
  - ​Background consolidation

Add persistent memory to agents built with Deep Agents so they learn and improve across conversations

Full example: seed memory and invoke

Full example: isolated memory across users

Was this page helpful?

**Examples:**

Example 1 (sass):
```sass
from deepagents import create_deep_agent
from deepagents.backends import CompositeBackend, StateBackend, StoreBackend

agent = create_deep_agent(
    model="google_genai:gemini-3.6-flash",
    memory=["/memories/AGENTS.md"],
    skills=["/skills/"],
    backend=CompositeBackend(
        default=StateBackend(),
        routes={
            "/memories/": StoreBackend(
                namespace=lambda rt: (
                    rt.server_info.assistant_id,
                ),
            ),
            "/skills/": StoreBackend(
                namespace=lambda rt: (
                    rt.server_info.assistant_id,
                ),
            ),
        },
    ),
)
```

Example 2 (json):
```json
from langchain_core.utils.uuid import uuid7

from deepagents import create_deep_agent
from deepagents.backends import CompositeBackend, StateBackend, StoreBackend
from deepagents.backends.utils import create_file_data
from langgraph.store.memory import InMemoryStore

store = InMemoryStore()  # Use platform store when deploying to LangSmith

# Seed the memory file
store.put(
    ("my-agent",),
    "/memories/AGENTS.md",
    create_file_data("""## Response style
- Keep responses concise
- Use code examples where possible
"""),
)

# Seed a skill
store.put(
    ("my-agent",),
    "/skills/langgraph-docs/SKILL.md",
    create_file_data("""---
name: langgraph-docs
description: Fetch relevant LangGraph documentation to provide accurate guidance.
---

# langgraph-docs

Use the fetch_url tool to read https://docs.langchain.com/llms.txt, then fetch relevant pages.
"""),
)

agent = create_deep_agent(
    model="google_genai:gemini-3.6-flash",
    memory=["/memories/AGENTS.md"],
    skills=["/skills/"],
    backend=lambda rt: CompositeBackend(
        default=StateBackend(rt),
        routes={
            "/memories/": StoreBackend(
                rt, namespace=lambda rt: ("my-agent",)
            ),
            "/skills/": StoreBackend(
                rt, namespace=lambda rt: ("my-agent",)
            ),
        },
    ),
    store=store,
)

# Thread 1: the agent learns a new preference and saves it to memory
config1 = {"configurable": {"thread_id": str(uuid7())}}
agent.invoke(
    {"messages": [{"role": "user", "content": "I prefer detailed explanations. Remember that."}]},
    config=config1,
)

# Thread 2: the agent reads memory and applies the preference
config2 = {"configurable": {"thread_id": str(uuid7())}}
agent.invoke(
    {"messages": [{"role": "user", "content": "Explain how transformers work."}]},
    config=config2,
)
```

Example 3 (sass):
```sass
from deepagents import create_deep_agent
from deepagents.backends import CompositeBackend, StateBackend, StoreBackend

agent = create_deep_agent(
    model="google_genai:gemini-3.6-flash",
    memory=["/memories/preferences.md"],
    skills=["/skills/"],
    backend=CompositeBackend(
        default=StateBackend(),
        routes={
            "/memories/": StoreBackend(
                namespace=lambda rt: (rt.server_info.user.identity,),
            ),
            "/skills/": StoreBackend(
                namespace=lambda rt: (rt.server_info.user.identity,),
            ),
        },
    ),
)
```

Example 4 (json):
```json
from langchain_core.utils.uuid import uuid7

from deepagents import create_deep_agent
from deepagents.backends import CompositeBackend, StateBackend, StoreBackend
from deepagents.backends.utils import create_file_data
from langgraph.store.memory import InMemoryStore


store = InMemoryStore()  # Use platform store when deploying to LangSmith

# Seed preferences for two users
store.put(
    ("user-alice",),
    "/memories/preferences.md",
    create_file_data("""## Preferences
- Likes concise bullet points
- Prefers Python examples
"""),
)
store.put(
    ("user-bob",),
    "/memories/preferences.md",
    create_file_data("""## Preferences
- Likes detailed explanations
- Prefers TypeScript examples
"""),
)

# Seed a skill for Alice
store.put(
    ("user-alice",),
    "/skills/langgraph-docs/SKILL.md",
    create_file_data("""---
name: langgraph-docs
description: Fetch relevant LangGraph documentation to provide accurate guidance.
---

# langgraph-docs

Use the fetch_url tool to read https://docs.langchain.com/llms.txt, then fetch relevant pages.
"""),
)

agent = create_deep_agent(
    model="google_genai:gemini-3.6-flash",
    memory=["/memories/preferences.md"],
    skills=["/skills/"],
    backend=lambda rt: CompositeBackend(
        default=StateBackend(rt),
        routes={
            "/memories/": StoreBackend(
                rt,
                namespace=lambda rt: (rt.server_info.user.identity,),
            ),
            "/skills/": StoreBackend(
                rt,
                namespace=lambda rt: (rt.server_info.user.identity,),
            ),
        },
    ),
    store=store,
)

# When deployed, each authenticated request resolves
# `rt.server_info.user.identity` to the calling user, so Alice and Bob
# automatically see only their own preferences.
agent.invoke(
    {"messages": [{"role": "user", "content": "How do I read a CSV file?"}]},
    config={"configurable": {"thread_id": str(uuid7())}},
)
```

---

## Todo list - Docs by LangChain

**URL:** https://docs.langchain.com/oss/python/deepagents/frontend/todo-list

**Contents:**
- On this page
- Todo list
- ​How it works
- ​Setting up useStream
- ​Building the TodoList component
- ​Progress bar
- ​Individual todo items
- ​Calculating progress
- ​Combining with chat messages
- ​Use cases

Track agent progress with a real-time todo list synced from agent state

Was this page helpful?

**Examples:**

Example 1 (python):
```python
from deepagents import create_deep_agent
from langchain.agents.middleware import TodoListMiddleware

agent = create_deep_agent(
    model="google_genai:gemini-3.6-flash",
    middleware=[TodoListMiddleware()],
)
```

Example 2 (python):
```python
from deepagents import create_deep_agent
from langchain.agents.middleware import TodoListMiddleware

agent = create_deep_agent(
    model="openai:gpt-5.5",
    middleware=[TodoListMiddleware()],
)
```

Example 3 (python):
```python
from deepagents import create_deep_agent
from langchain.agents.middleware import TodoListMiddleware

agent = create_deep_agent(
    model="anthropic:claude-sonnet-5",
    middleware=[TodoListMiddleware()],
)
```

Example 4 (python):
```python
from deepagents import create_deep_agent
from langchain.agents.middleware import TodoListMiddleware

agent = create_deep_agent(
    model="openrouter:z-ai/glm-5.2",
    middleware=[TodoListMiddleware()],
)
```

---

## Model Context Protocol (MCP) - Docs by LangChain

**URL:** https://docs.langchain.com/oss/python/deepagents/mcp

**Contents:**
- On this page
- Model Context Protocol (MCP)
- ​Install
- ​Quickstart
- View example trace
- ​Transports
- ​Next steps
- Tools
- Connections
- Authentication

Connect LangChain agents to MCP servers with MCPAdapter.

LangChain docs MCP server

Was this page helpful?

**Examples:**

Example 1 (unknown):
```unknown
pip install "langchain[mcp]"
```

Example 2 (unknown):
```unknown
uv add "langchain[mcp]"
```

Example 3 (python):
```python
from langchain.agents import create_agent
from langchain.mcp import MCPAdapter


async def main():
    async with MCPAdapter("https://example.com/mcp") as adapter:
        tools = await adapter.list_tools()
        agent = create_agent("claude-sonnet-5", tools)
        return await agent.ainvoke({"messages": [{"role": "user", "content": "..."}]})
```

Example 4 (python):
```python
from langchain.agents import create_agent
from langchain.mcp import MCPAdapter


async def main():
    async with MCPAdapter("https://docs.langchain.com/mcp") as adapter:
        tools = await adapter.list_tools()
        agent = create_agent("claude-sonnet-5", tools)
        return await agent.ainvoke(
            {
                "messages": [
                    {
                        "role": "user",
                        "content": "How do I add short-term memory to a LangChain agent?",
                    }
                ]
            }
        )
```

---

## Retrieval - Docs by LangChain

**URL:** https://docs.langchain.com/oss/python/deepagents/retrieval/

**Contents:**
- On this page
- Retrieval
- ​Building a knowledge base
- Tutorial: Semantic search
  - ​From retrieval to RAG
  - ​Retrieval pipeline
  - ​Building blocks
- Document loaders
- Text splitters
- Embedding models

Show Extended example: Agentic RAG for LangGraph's llms.txt

Was this page helpful?

**Examples:**

Example 1 (python):
```python
import requests
from langchain.tools import tool
from langchain.chat_models import init_chat_model
from langchain.agents import create_agent


@tool
def fetch_url(url: str) -> str:
    """Fetch text content from a URL"""
    response = requests.get(url, timeout=10.0)
    response.raise_for_status()
    return response.text

system_prompt = """\
Use fetch_url when you need to fetch information from a web-page; quote relevant snippets.
"""

agent = create_agent(
    model="claude-sonnet-4-6",
    tools=[fetch_url], # A tool for retrieval
    system_prompt=system_prompt,
)
```

Example 2 (python):
```python
import requests
from langchain.agents import create_agent
from langchain.messages import HumanMessage
from langchain.tools import tool
from markdownify import markdownify


ALLOWED_DOMAINS = ["https://docs.langchain.com/"]
LLMS_TXT = 'https://docs.langchain.com/llms.txt'


@tool
def fetch_documentation(url: str) -> str:
    """Fetch and convert documentation from a URL"""
    if not any(url.startswith(domain) for domain in ALLOWED_DOMAINS):
        return (
            "Error: URL not allowed. "
            f"Must start with one of: {', '.join(ALLOWED_DOMAINS)}"
        )
    response = requests.get(url, timeout=10.0)
    response.raise_for_status()
    return markdownify(response.text)


# We will fetch the content of llms.txt, so this can
# be done ahead of time without requiring an LLM request.
llms_txt_content = requests.get(LLMS_TXT).text

# System prompt for the agent
system_prompt = f"""
You are an expert Python developer and technical assistant.
Your primary role is to help users with questions about LangGraph and related tools.

Instructions:

1. If a user asks a question you're unsure about—or one that likely involves API usage,
   behavior, or configuration—you MUST use the `fetch_documentation` tool to consult the relevant docs.
2. When citing documentation, summarize clearly and include relevant context from the content.
3. Do not use any URLs outside of the allowed domain.
4. If a documentation fetch fails, tell the user and proceed with your best expert understanding.

You can access official documentation from the following approved sources:

{llms_txt_content}

You MUST consult the documentation to get up to date documentation
before answering a user's question about LangGraph.

Your answers should be clear, concise, and technically accurate.
"""

tools = [fetch_documentation]

model = init_chat_model("claude-sonnet-4-6", max_tokens=32_000)

agent = create_agent(
    model=model,
    tools=tools,
    system_prompt=system_prompt,
    name="Agentic RAG",
)

response = agent.invoke({
    'messages': [
        HumanMessage(content=(
            "Write a short example of a langgraph agent using the "
            "prebuilt create react agent. the agent should be able "
            "to look up stock pricing information."
        ))
    ]
})

print(response['messages'][-1].content)
```

---

## Deep Agents overview - Docs by LangChain

**URL:** https://docs.langchain.com/oss/python/deepagents/overview

**Contents:**
- On this page
- Deep Agents overview
- ​Choose how to run Deep Agents
- Managed Deep Agents
- Deep Agents SDK
- ​Self-host with the SDK
  - ​Try it
  - ​Quickstart
- View example trace
- ​Core capabilities

Agent harness for planning, subagents, and file-system context, available as Managed Deep Agents or the Deep Agents SDK

Supported multimodal file extensions

Running without the default filesystem tools

Restricting filesystem tools

Was this page helpful?

**Examples:**

Example 1 (python):
```python
from deepagents import create_deep_agent


def get_weather(city: str) -> str:
    """Get weather for a given city."""
    return f"It's always sunny in {city}!"


agent = create_deep_agent(
    model="google_genai:gemini-3.6-flash",
    tools=[get_weather],
    system_prompt="You are a helpful assistant",
)

# Run the agent
agent.invoke(
    {"messages": [{"role": "user", "content": "what is the weather in sf"}]}
)
```

Example 2 (python):
```python
from deepagents import create_deep_agent


def get_weather(city: str) -> str:
    """Get weather for a given city."""
    return f"It's always sunny in {city}!"


agent = create_deep_agent(
    model="openai:gpt-5.5",
    tools=[get_weather],
    system_prompt="You are a helpful assistant",
)

# Run the agent
agent.invoke(
    {"messages": [{"role": "user", "content": "what is the weather in sf"}]}
)
```

Example 3 (python):
```python
from deepagents import create_deep_agent


def get_weather(city: str) -> str:
    """Get weather for a given city."""
    return f"It's always sunny in {city}!"


agent = create_deep_agent(
    model="anthropic:claude-sonnet-5",
    tools=[get_weather],
    system_prompt="You are a helpful assistant",
)

# Run the agent
agent.invoke(
    {"messages": [{"role": "user", "content": "what is the weather in sf"}]}
)
```

Example 4 (python):
```python
from deepagents import create_deep_agent


def get_weather(city: str) -> str:
    """Get weather for a given city."""
    return f"It's always sunny in {city}!"


agent = create_deep_agent(
    model="openrouter:z-ai/glm-5.2",
    tools=[get_weather],
    system_prompt="You are a helpful assistant",
)

# Run the agent
agent.invoke(
    {"messages": [{"role": "user", "content": "what is the weather in sf"}]}
)
```

---

## Agent User Interaction Protocol (AG-UI) - Docs by LangChain

**URL:** https://docs.langchain.com/oss/python/deepagents/ag-ui

**Contents:**
- On this page
- Agent User Interaction Protocol (AG-UI)
- ​Quickstart
  - ​Install dependencies
  - ​Create a deep agent
  - ​Serve the agent
  - ​Connect the AG-UI adapter
- AG-UI LangGraph adapter on npm
- ​Stream events
- ​Connect a frontend

Expose deep agents over the Agent User Interaction Protocol (AG-UI) to stream events to any AG-UI client or frontend.

Was this page helpful?

**Examples:**

Example 1 (unknown):
```unknown
pip install deepagents "langgraph-cli[inmem]"
```

Example 2 (unknown):
```unknown
uv add deepagents "langgraph-cli[inmem]"
```

Example 3 (python):
```python
from deepagents import create_deep_agent

agent = create_deep_agent(
    model="anthropic:claude-sonnet-4-6",
    system_prompt="You are an expert researcher.",
)
```

Example 4 (json):
```json
{
  "dependencies": ["."],
  "graphs": {
    "deep_agent": "./agent.py:agent"
  },
  "env": ".env"
}
```

---

## Build a deep research agent - Docs by LangChain

**URL:** https://docs.langchain.com/oss/python/deepagents/deep-research

**Contents:**
- On this page
- Build a deep research agent
- ​Overview
  - ​Key concepts
- ​Prerequisites
- ​Choose your path
  - ​Setup
  - ​Build the agent
  - ​Run the agent
  - ​Setup

Build a multi-step web research agent with subagent delegation using Managed Deep Agents or the Deep Agents SDK

Install search dependencies

Add orchestrator instructions

Create project directory

Was this page helpful?

**Examples:**

Example 1 (sql):
```sql
uvx --from managed-deepagents mda init deep-research
cd deep-research
```

Example 2 (typescript):
```typescript
ANTHROPIC_API_KEY=<ANTHROPIC_API_KEY>
TAVILY_API_KEY=<TAVILY_API_KEY>
LANGSMITH_API_KEY=<LANGSMITH_API_KEY>
```

Example 3 (typescript):
```typescript
GOOGLE_API_KEY=<GOOGLE_API_KEY>
TAVILY_API_KEY=<TAVILY_API_KEY>
LANGSMITH_API_KEY=<LANGSMITH_API_KEY>
```

Example 4 (unknown):
```unknown
uv add tavily-python httpx markdownify
```

---

## Sandboxes - Docs by LangChain

**URL:** https://docs.langchain.com/oss/python/deepagents/sandboxes

**Contents:**
- On this page
- Sandboxes
- ​Why use sandboxes?
- ​Basic usage
- View example trace
- View example trace
- ​Available providers
- ​Lifecycle and scoping
  - ​Thread-scoped (default)
  - ​Assistant-scoped

Execute code in isolated environments with sandbox backends

Was this page helpful?

**Examples:**

Example 1 (unknown):
```unknown
pip install langsmith
```

Example 2 (unknown):
```unknown
uv add langsmith
```

Example 3 (json):
```json
from deepagents import create_deep_agent
from deepagents.backends import LangSmithSandbox
from langchain_anthropic import ChatAnthropic
from langsmith.sandbox import SandboxClient

client = SandboxClient()
ls_sandbox = client.create_sandbox()
backend = LangSmithSandbox(sandbox=ls_sandbox)

agent = create_deep_agent(
    model=ChatAnthropic(model="claude-sonnet-4-6"),
    system_prompt="You are a Python coding assistant with sandbox access.",
    backend=backend,
)
try:
    result = agent.invoke(
        {
            "messages": [
                {
                    "role": "user",
                    "content": "Create a small Python package and run pytest",
                }
            ]
        }
    )
finally:
    client.delete_sandbox(ls_sandbox.name)
```

Example 4 (unknown):
```unknown
pip install langchain-daytona
```

---

## Overview - Docs by LangChain

**URL:** https://docs.langchain.com/oss/python/deepagents/frontend/overview

**Contents:**
- On this page
- Overview
- ​Architecture
- ​What the SDK exposes
- ​Patterns
- Subagent streaming
- Todo list
- Sandbox
- ​Related patterns

Build UIs that display real-time subagent streams, task progress, and sandbox for Deep Agents

Was this page helpful?

**Examples:**

Example 1 (json):
```json
from deepagents import create_deep_agent

agent = create_deep_agent(
    model="google_genai:gemini-3.6-flash",
    tools=[get_weather],
    system_prompt="You are a helpful assistant",
    subagents=[
        {
            "name": "researcher",
            "description": "Research assistant",
            "system_prompt": "You are a research assistant.",
        }
    ],
)
```

Example 2 (lua):
```lua
import { useStream } from "@langchain/react";

function App() {
  const stream = useStream<typeof agent>({
    apiUrl: "http://localhost:2024",
    assistantId: "agent",
  });

  // Deep agent state beyond messages
  const todos = stream.values?.todos;
  const subagents = [...stream.subagents.values()];
}
```

---

## Permissions - Docs by LangChain

**URL:** https://docs.langchain.com/oss/python/deepagents/permissions

**Contents:**
- On this page
- Permissions
- ​Basic usage
- ​Rule structure
- ​Pause for human approval
- ​Examples
  - ​Isolate to a workspace directory
  - ​Protect specific files
  - ​Read-only memory
  - ​Deny all access

Control filesystem access with declarative permission rules for Deep Agents

Was this page helpful?

**Examples:**

Example 1 (sass):
```sass
from deepagents import FilesystemPermission, create_deep_agent


# Read-only agent: deny all writes
agent = create_deep_agent(
    model=model,
    backend=backend,
    permissions=[
        FilesystemPermission(
            operations=["write"],
            paths=["/**"],
            mode="deny",
        ),
    ],
)
```

Example 2 (sass):
```sass
from deepagents import FilesystemPermission, create_deep_agent
from langgraph.checkpoint.memory import InMemorySaver

agent = create_deep_agent(
    model=model,
    permissions=[
        # Pause for approval before writing anything under /secrets.
        FilesystemPermission(
            operations=["write"],
            paths=["/secrets/**"],
            mode="interrupt",
        ),
    ],
    # Interrupt mode requires a checkpointer to pause and resume.
    checkpointer=InMemorySaver(),
)
```

Example 3 (sass):
```sass
agent = create_deep_agent(
    model=model,
    backend=backend,
    permissions=[
        FilesystemPermission(
            operations=["read", "write"],
            paths=["/workspace/**"],
            mode="allow",
        ),
        FilesystemPermission(
            operations=["read", "write"],
            paths=["/**"],
            mode="deny",
        ),
    ],
)
```

Example 4 (sass):
```sass
agent = create_deep_agent(
    model=model,
    backend=backend,
    permissions=[
        FilesystemPermission(
            operations=["read", "write"],
            paths=["/workspace/.env", "/workspace/examples/**"],
            mode="deny",
        ),
        FilesystemPermission(
            operations=["read", "write"],
            paths=["/workspace/**"],
            mode="allow",
        ),
        FilesystemPermission(
            operations=["read", "write"],
            paths=["/**"],
            mode="deny",
        ),
    ],
)
```

---

## Skills - Docs by LangChain

**URL:** https://docs.langchain.com/oss/python/deepagents/skills

**Contents:**
- On this page
- Skills
- ​Usage
- ​How skills work
- ​When to use skills
- ​Write effective skills
- ​Add supporting resources
  - ​scripts/
  - ​references/
  - ​assets/

Learn how to extend your deep agent’s capabilities with skills

Create a top-level skills directory

Create a subdirectory inside your skills directory for your skill

Add a SKILL.md file with YAML frontmatter and instructions.

Pass the skills path when creating your agent

Emulate Deep Agents Code source order in the SDK

Was this page helpful?

**Examples:**

Example 1 (sql):
```sql
---
name: langgraph-docs
description: Use this skill for requests related to LangGraph in order to fetch relevant documentation to provide accurate, up-to-date guidance.
---

# langgraph-docs

## Overview

This skill explains how to access LangGraph documentation to help answer questions and guide implementation.

## Instructions

### 1. Fetch the documentation index

Use the fetch_url tool to read the following URL:
https://docs.langchain.com/llms.txt

This provides a structured list of all available documentation with descriptions.

### 2. Select relevant documentation

Based on the question, identify 2-4 most relevant documentation URLs from the index. Prioritize:

- Specific how-to guides for implementation questions
- Core concept pages for understanding questions
- Tutorials for end-to-end examples
- Reference docs for API details

### 3. Fetch and synthesize

Use the fetch_url tool to read the selected documentation URLs, then answer the user's question. Give a direct answer first, include the minimum necessary context, and link to the source pages rather than quoting long passages.
```

Example 2 (sass):
```sass
from deepagents import create_deep_agent
from deepagents.backends.filesystem import FilesystemBackend

backend = FilesystemBackend(root_dir="./my-project")

agent = create_deep_agent(
    model="anthropic:claude-sonnet-4-6",
    backend=backend,
    skills=["./my-project/skills/"],
)
```

Example 3 (json):
```json
result = agent.invoke(
    {"messages": [{"role": "user", "content": "What is LangGraph?"}]},
    config={"configurable": {"thread_id": "1"}},
)
```

Example 4 (elixir):
```elixir
# Good: specific about what and when
description: >-
  Extract text and tables from PDF files, fill PDF forms, and merge
  multiple PDFs. Use when working with PDF documents or when the user
  mentions PDFs, forms, or document extraction.

# Poor: too vague for reliable matching
description: Helps with PDFs.
```

---

## Going to production - Docs by LangChain

**URL:** https://docs.langchain.com/oss/python/deepagents/going-to-production

**Contents:**
- On this page
- Going to production
- ​Overview
- ​LangSmith Deployments
- ​Production considerations
  - ​Invoking the agent
- View example trace
  - ​Multi-tenancy
    - ​User identity and access control
    - ​Role-based access control

Take your deep agent to production with persistent memory, sandboxes, resilience middleware, and deployment options

Example: syncing skills and memories with custom middleware

Was this page helpful?

**Examples:**

Example 1 (json):
```json
{
  "dependencies": ["."],
  "graphs": {
    "agent": "./agent.py:agent"
  },
  "env": ".env"
}
```

Example 2 (python):
```python
from dataclasses import dataclass

from deepagents import create_deep_agent
from langchain_core.utils.uuid import uuid7


@dataclass
class Context:
    user_id: str


agent = create_deep_agent(
    model="google_genai:gemini-3.6-flash",
    context_schema=Context,
)

# Start a conversation
config = {"configurable": {"thread_id": str(uuid7())}}
agent.invoke(
    {"messages": [{"role": "user", "content": "Plan a 3-day trip to Tokyo"}]},
    config=config,
    context=Context(user_id="user-123"),
)

# Follow-up on the same conversation: reuse the same thread_id
agent.invoke(
    {"messages": [{"role": "user", "content": "Make it 5 days instead"}]},
    config=config,
    context=Context(user_id="user-123"),
)
```

Example 3 (python):
```python
from dataclasses import dataclass

from deepagents import create_deep_agent
from langchain_core.utils.uuid import uuid7


@dataclass
class Context:
    user_id: str


agent = create_deep_agent(
    model="openai:gpt-5.5",
    context_schema=Context,
)

# Start a conversation
config = {"configurable": {"thread_id": str(uuid7())}}
agent.invoke(
    {"messages": [{"role": "user", "content": "Plan a 3-day trip to Tokyo"}]},
    config=config,
    context=Context(user_id="user-123"),
)

# Follow-up on the same conversation: reuse the same thread_id
agent.invoke(
    {"messages": [{"role": "user", "content": "Make it 5 days instead"}]},
    config=config,
    context=Context(user_id="user-123"),
)
```

Example 4 (python):
```python
from dataclasses import dataclass

from deepagents import create_deep_agent
from langchain_core.utils.uuid import uuid7


@dataclass
class Context:
    user_id: str


agent = create_deep_agent(
    model="anthropic:claude-sonnet-5",
    context_schema=Context,
)

# Start a conversation
config = {"configurable": {"thread_id": str(uuid7())}}
agent.invoke(
    {"messages": [{"role": "user", "content": "Plan a 3-day trip to Tokyo"}]},
    config=config,
    context=Context(user_id="user-123"),
)

# Follow-up on the same conversation: reuse the same thread_id
agent.invoke(
    {"messages": [{"role": "user", "content": "Make it 5 days instead"}]},
    config=config,
    context=Context(user_id="user-123"),
)
```

---

## Fault tolerance - Docs by LangChain

**URL:** https://docs.langchain.com/oss/python/deepagents/fault-tolerance

**Contents:**
- On this page
- Fault tolerance
- ​Error handling strategies
- ​Rate limiting
  - ​Provider rate limiting
  - ​Call limits
- ​Retries
- ​Fallbacks
  - ​Model refusals
- ​Error handling

Make your deep agent resilient with rate limiting, retries, fallbacks, and error handling

Was this page helpful?

**Examples:**

Example 1 (sass):
```sass
from langchain.agents import create_agent
from langchain.agents.middleware import ModelRetryMiddleware, ToolRetryMiddleware

agent = create_agent(
    model="google_genai:gemini-3.6-flash",
    tools=[search_tool, fetch_url_tool],
    middleware=[
        ModelRetryMiddleware(max_retries=3, backoff_factor=2.0, initial_delay=1.0),
        ToolRetryMiddleware(
            max_retries=2,
            tools=["search", "fetch_url"],
            retry_on=(TimeoutError, ConnectionError),
        ),
    ],
)
```

Example 2 (python):
```python
from langchain.agents import create_agent
from langchain.agents.middleware import ToolErrorMiddleware


def on_error(exc: Exception, request: ToolCallRequest) -> str | None:
    if isinstance(exc, ValueError):
        return f"Tool `{request.tool_call['name']}` failed: {type(exc).__name__}. Fix the input and retry."
    # propagate everything else


agent = create_agent(
    model="google_genai:gemini-3.6-flash",
    tools=[search_tool],
    middleware=[ToolErrorMiddleware(on_error)],
)
```

Example 3 (python):
```python
from deepagents import create_deep_agent

agent = create_deep_agent(
    model="google_genai:gemini-3.6-flash",
    tools=[send_email_tool, delete_record_tool],
    interrupt_on={
        "send_email": True,
        "delete_record": True,
    },
)
```

Example 4 (sql):
```sql
from langchain.agents import create_agent
from langchain.agents.middleware import ModelFallbackMiddleware

agent = create_agent(
    model="google_genai:gemini-3.6-flash",
    tools=[search_tool],
    middleware=[
        ModelFallbackMiddleware("gpt-5.5"),
    ],
)
```

---

## Sandbox - Docs by LangChain

**URL:** https://docs.langchain.com/oss/python/deepagents/frontend/sandbox

**Contents:**
- On this page
- Sandbox
- ​Architecture
- ​Sandbox lifecycle
- ​Connect the agent and API server
  - ​Resolve the sandbox from thread metadata
  - ​Seed project files
- ​Adding the file browsing API
  - ​Create the API server
  - ​Configure langgraph.json

Build an IDE-like UI for a coding agent backed by a sandbox environment

Was this page helpful?

**Examples:**

Example 1 (python):
```python
from deepagents import create_deep_agent
from deepagents.backends.langsmith import LangSmithSandbox
from langgraph.config import get_config


def get_or_create_sandbox_for_thread(thread_id: str) -> LangSmithSandbox:
    if not thread_id:
        raise ValueError("thread_id is required")
    # Look up sandbox_id from thread metadata, create if missing, and seed files.
    raise NotImplementedError(
        "Implement sandbox lookup and creation for your deployment environment."
    )


def get_thread_id_from_config() -> str:
    configurable = get_config().get("configurable", {})
    thread_id = configurable.get("thread_id")
    if not thread_id:
        raise ValueError("No thread_id, agent must run on a thread")
    return thread_id


def agent():
    return create_deep_agent(
        model="google_genai:gemini-3.6-flash",
        backend=lambda _runtime: get_or_create_sandbox_for_thread(
            get_thread_id_from_config()
        ),
    )
```

Example 2 (python):
```python
from deepagents import create_deep_agent
from deepagents.backends.langsmith import LangSmithSandbox
from langgraph.config import get_config


def get_or_create_sandbox_for_thread(thread_id: str) -> LangSmithSandbox:
    if not thread_id:
        raise ValueError("thread_id is required")
    # Look up sandbox_id from thread metadata, create if missing, and seed files.
    raise NotImplementedError(
        "Implement sandbox lookup and creation for your deployment environment."
    )


def get_thread_id_from_config() -> str:
    configurable = get_config().get("configurable", {})
    thread_id = configurable.get("thread_id")
    if not thread_id:
        raise ValueError("No thread_id, agent must run on a thread")
    return thread_id


def agent():
    return create_deep_agent(
        model="openai:gpt-5.5",
        backend=lambda _runtime: get_or_create_sandbox_for_thread(
            get_thread_id_from_config()
        ),
    )
```

Example 3 (python):
```python
from deepagents import create_deep_agent
from deepagents.backends.langsmith import LangSmithSandbox
from langgraph.config import get_config


def get_or_create_sandbox_for_thread(thread_id: str) -> LangSmithSandbox:
    if not thread_id:
        raise ValueError("thread_id is required")
    # Look up sandbox_id from thread metadata, create if missing, and seed files.
    raise NotImplementedError(
        "Implement sandbox lookup and creation for your deployment environment."
    )


def get_thread_id_from_config() -> str:
    configurable = get_config().get("configurable", {})
    thread_id = configurable.get("thread_id")
    if not thread_id:
        raise ValueError("No thread_id, agent must run on a thread")
    return thread_id


def agent():
    return create_deep_agent(
        model="anthropic:claude-sonnet-5",
        backend=lambda _runtime: get_or_create_sandbox_for_thread(
            get_thread_id_from_config()
        ),
    )
```

Example 4 (python):
```python
from deepagents import create_deep_agent
from deepagents.backends.langsmith import LangSmithSandbox
from langgraph.config import get_config


def get_or_create_sandbox_for_thread(thread_id: str) -> LangSmithSandbox:
    if not thread_id:
        raise ValueError("thread_id is required")
    # Look up sandbox_id from thread metadata, create if missing, and seed files.
    raise NotImplementedError(
        "Implement sandbox lookup and creation for your deployment environment."
    )


def get_thread_id_from_config() -> str:
    configurable = get_config().get("configurable", {})
    thread_id = configurable.get("thread_id")
    if not thread_id:
        raise ValueError("No thread_id, agent must run on a thread")
    return thread_id


def agent():
    return create_deep_agent(
        model="openrouter:z-ai/glm-5.2",
        backend=lambda _runtime: get_or_create_sandbox_for_thread(
            get_thread_id_from_config()
        ),
    )
```

---

## Subagents - Docs by LangChain

**URL:** https://docs.langchain.com/oss/python/deepagents/subagents

**Contents:**
- On this page
- Subagents
- ​Why use subagents?
- ​Configuration
  - ​Default subagent
  - ​Running without subagents
- ​Custom subagents
  - ​SubAgent (Dictionary-based)
  - ​CompiledSubAgent
- ​Using SubAgent

Learn how to use subagents to delegate work and keep context clean

Was this page helpful?

**Examples:**

Example 1 (python):
```python
import os
from typing import Literal

from deepagents import create_deep_agent
from tavily import TavilyClient

tavily_client = TavilyClient(api_key=os.environ["TAVILY_API_KEY"])


def internet_search(
    query: str,
    max_results: int = 5,
    topic: Literal["general", "news", "finance"] = "general",
    include_raw_content: bool = False,
):
    """Run a web search"""
    return tavily_client.search(
        query,
        max_results=max_results,
        include_raw_content=include_raw_content,
        topic=topic,
    )


research_subagent = {
    "name": "research-agent",
    "description": "Used to research more in depth questions",
    "system_prompt": "You are a great researcher",
    "tools": [internet_search],
    "model": "openai:gpt-5.5",  # Optional override, defaults to main agent model
}
subagents = [research_subagent]

agent = create_deep_agent(
    model="google_genai:gemini-3.6-flash",
    subagents=subagents,
)
```

Example 2 (python):
```python
from deepagents import CompiledSubAgent, create_deep_agent
from langchain.agents import create_agent


def internet_search(query: str) -> str:
    """Run a web search."""
    return f"search results for {query}"


research_instructions = "You are a research coordinator."
your_model = "openai:gpt-5.5"
specialized_tools: list = []

# Create a custom agent graph
custom_graph = create_agent(
    model=your_model,
    tools=specialized_tools,
    system_prompt="You are a specialized agent for data analysis...",
)

# Use it as a custom subagent
custom_subagent = CompiledSubAgent(
    name="data-analyzer",
    description="Specialized agent for complex data analysis tasks",
    runnable=custom_graph,
)

subagents = [custom_subagent]

agent = create_deep_agent(
    model="google_genai:gemini-3.6-flash",
    tools=[internet_search],
    system_prompt=research_instructions,
    subagents=subagents,
)
```

Example 3 (python):
```python
from deepagents import CompiledSubAgent, create_deep_agent
from langchain.agents import create_agent


def internet_search(query: str) -> str:
    """Run a web search."""
    return f"search results for {query}"


research_instructions = "You are a research coordinator."
your_model = "openai:gpt-5.5"
specialized_tools: list = []

# Create a custom agent graph
custom_graph = create_agent(
    model=your_model,
    tools=specialized_tools,
    system_prompt="You are a specialized agent for data analysis...",
)

# Use it as a custom subagent
custom_subagent = CompiledSubAgent(
    name="data-analyzer",
    description="Specialized agent for complex data analysis tasks",
    runnable=custom_graph,
)

subagents = [custom_subagent]

agent = create_deep_agent(
    model="openai:gpt-5.5",
    tools=[internet_search],
    system_prompt=research_instructions,
    subagents=subagents,
)
```

Example 4 (python):
```python
from deepagents import CompiledSubAgent, create_deep_agent
from langchain.agents import create_agent


def internet_search(query: str) -> str:
    """Run a web search."""
    return f"search results for {query}"


research_instructions = "You are a research coordinator."
your_model = "openai:gpt-5.5"
specialized_tools: list = []

# Create a custom agent graph
custom_graph = create_agent(
    model=your_model,
    tools=specialized_tools,
    system_prompt="You are a specialized agent for data analysis...",
)

# Use it as a custom subagent
custom_subagent = CompiledSubAgent(
    name="data-analyzer",
    description="Specialized agent for complex data analysis tasks",
    runnable=custom_graph,
)

subagents = [custom_subagent]

agent = create_deep_agent(
    model="anthropic:claude-sonnet-5",
    tools=[internet_search],
    system_prompt=research_instructions,
    subagents=subagents,
)
```

---

## Streaming - Docs by LangChain

**URL:** https://docs.langchain.com/oss/python/deepagents/streaming

**Contents:**
- On this page
- Streaming
- ​Enable subgraph streaming
- ​Namespaces
- ​Subagent progress
- ​LLM tokens
- ​Tool calls
- ​Custom updates
- ​Stream multiple modes
- ​Common patterns

Stream real-time updates from deep agent runs and subagent execution

Was this page helpful?

**Examples:**

Example 1 (sass):
```sass
from deepagents import create_deep_agent

agent = create_deep_agent(
    model="google_genai:gemini-3.6-flash",
    system_prompt="You are a helpful research assistant",
    subagents=[
        {
            "name": "researcher",
            "description": "Researches a topic in depth",
            "system_prompt": "You are a thorough researcher.",
        },
    ],
)

for chunk in agent.stream(
    {"messages": [{"role": "user", "content": "Research quantum computing advances"}]},
    stream_mode="updates",
    subgraphs=True,
    version="v2",
):
    if chunk["type"] == "updates":
        if chunk["ns"]:
            # Subagent event - namespace identifies the source
            print(f"[subagent: {chunk['ns']}]")
        else:
            # Main agent event
            print("[main agent]")
        print(chunk["data"])
```

Example 2 (sass):
```sass
from deepagents import create_deep_agent

agent = create_deep_agent(
    model="openai:gpt-5.5",
    system_prompt="You are a helpful research assistant",
    subagents=[
        {
            "name": "researcher",
            "description": "Researches a topic in depth",
            "system_prompt": "You are a thorough researcher.",
        },
    ],
)

for chunk in agent.stream(
    {"messages": [{"role": "user", "content": "Research quantum computing advances"}]},
    stream_mode="updates",
    subgraphs=True,
    version="v2",
):
    if chunk["type"] == "updates":
        if chunk["ns"]:
            # Subagent event - namespace identifies the source
            print(f"[subagent: {chunk['ns']}]")
        else:
            # Main agent event
            print("[main agent]")
        print(chunk["data"])
```

Example 3 (sass):
```sass
from deepagents import create_deep_agent

agent = create_deep_agent(
    model="anthropic:claude-sonnet-5",
    system_prompt="You are a helpful research assistant",
    subagents=[
        {
            "name": "researcher",
            "description": "Researches a topic in depth",
            "system_prompt": "You are a thorough researcher.",
        },
    ],
)

for chunk in agent.stream(
    {"messages": [{"role": "user", "content": "Research quantum computing advances"}]},
    stream_mode="updates",
    subgraphs=True,
    version="v2",
):
    if chunk["type"] == "updates":
        if chunk["ns"]:
            # Subagent event - namespace identifies the source
            print(f"[subagent: {chunk['ns']}]")
        else:
            # Main agent event
            print("[main agent]")
        print(chunk["data"])
```

Example 4 (sass):
```sass
from deepagents import create_deep_agent

agent = create_deep_agent(
    model="openrouter:z-ai/glm-5.2",
    system_prompt="You are a helpful research assistant",
    subagents=[
        {
            "name": "researcher",
            "description": "Researches a topic in depth",
            "system_prompt": "You are a thorough researcher.",
        },
    ],
)

for chunk in agent.stream(
    {"messages": [{"role": "user", "content": "Research quantum computing advances"}]},
    stream_mode="updates",
    subgraphs=True,
    version="v2",
):
    if chunk["type"] == "updates":
        if chunk["ns"]:
            # Subagent event - namespace identifies the source
            print(f"[subagent: {chunk['ns']}]")
        else:
            # Main agent event
            print("[main agent]")
        print(chunk["data"])
```

---

## Retrieval Augmented Generation (RAG) with Deep Agents - Docs by LangChain

**URL:** https://docs.langchain.com/oss/python/deepagents/rag

**Contents:**
- On this page
- Retrieval Augmented Generation (RAG) with Deep Agents
- ​RAG patterns
- ​Why retrieval matters
- View example trace
  - ​What you will build
- ​Prerequisites
- ​Setup
- ​Index LangChain documentation
  - ​Load documents

RAG patterns for Deep Agents, including skills-guided retrieval, rubric grading, and a tutorial that indexes LangChain docs, offloads chunks to the filesystem, and delegates analysis to subagents

Create project directory

Was this page helpful?

**Examples:**

Example 1 (json):
```json
from deepagents import create_deep_agent
from langchain.messages import HumanMessage

EXAMPLE_QUERY = "How do I stream intermediate tool results from a subagent?"

baseline_agent = create_deep_agent(
    model="google_genai:gemini-3.6-flash",
    tools=[],
    system_prompt=(
        "You are a helpful LangChain documentation assistant. "
        "Answer questions about LangChain APIs and patterns."
    ),
)

result = baseline_agent.invoke(
    {"messages": [HumanMessage(content=EXAMPLE_QUERY)]}
)

print(result["messages"][-1].text)
```

Example 2 (json):
```json
from deepagents import create_deep_agent
from langchain.messages import HumanMessage

EXAMPLE_QUERY = "How do I stream intermediate tool results from a subagent?"

baseline_agent = create_deep_agent(
    model="openai:gpt-5.5",
    tools=[],
    system_prompt=(
        "You are a helpful LangChain documentation assistant. "
        "Answer questions about LangChain APIs and patterns."
    ),
)

result = baseline_agent.invoke(
    {"messages": [HumanMessage(content=EXAMPLE_QUERY)]}
)

print(result["messages"][-1].text)
```

Example 3 (json):
```json
from deepagents import create_deep_agent
from langchain.messages import HumanMessage

EXAMPLE_QUERY = "How do I stream intermediate tool results from a subagent?"

baseline_agent = create_deep_agent(
    model="anthropic:claude-sonnet-5",
    tools=[],
    system_prompt=(
        "You are a helpful LangChain documentation assistant. "
        "Answer questions about LangChain APIs and patterns."
    ),
)

result = baseline_agent.invoke(
    {"messages": [HumanMessage(content=EXAMPLE_QUERY)]}
)

print(result["messages"][-1].text)
```

Example 4 (json):
```json
from deepagents import create_deep_agent
from langchain.messages import HumanMessage

EXAMPLE_QUERY = "How do I stream intermediate tool results from a subagent?"

baseline_agent = create_deep_agent(
    model="openrouter:z-ai/glm-5.2",
    tools=[],
    system_prompt=(
        "You are a helpful LangChain documentation assistant. "
        "Answer questions about LangChain APIs and patterns."
    ),
)

result = baseline_agent.invoke(
    {"messages": [HumanMessage(content=EXAMPLE_QUERY)]}
)

print(result["messages"][-1].text)
```

---

## Tools - Docs by LangChain

**URL:** https://docs.langchain.com/oss/python/deepagents/tools

**Contents:**
- On this page
- Tools
- ​Custom tools
- ​MCP tools
- ​Built-in harness tools
- ​Multimodal tool outputs

Connect Deep Agents to custom functions, APIs, databases, and any MCP server

Was this page helpful?

**Examples:**

Example 1 (python):
```python
from deepagents import create_deep_agent


agent = create_deep_agent(
    model="google_genai:gemini-3.6-flash",
    tools=[search, fetch_url, run_query],
)
```

Example 2 (python):
```python
from deepagents import create_deep_agent


agent = create_deep_agent(
    model="openai:gpt-5.5",
    tools=[search, fetch_url, run_query],
)
```

Example 3 (python):
```python
from deepagents import create_deep_agent


agent = create_deep_agent(
    model="anthropic:claude-sonnet-5",
    tools=[search, fetch_url, run_query],
)
```

Example 4 (python):
```python
from deepagents import create_deep_agent


agent = create_deep_agent(
    model="openrouter:z-ai/glm-5.2",
    tools=[search, fetch_url, run_query],
)
```

---
