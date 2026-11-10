# Usage Examples

*Extracted from test files (C3.2)*

**Total Examples**: 3150
**High-Value Examples**: 3112

## High-Value Examples

### Instantiate _Phase: test phase elapsed is wall clock not longest subagent

- **Category**: instantiation
- **Confidence**: 0.80
- **File**: `/private/tmp/deepagents-skill/.skillseeker-cache/deepagents/repos/0_langchain-ai_deepagents/libs/code/tests/unit_tests/tui/widgets/test_subagent_panel.py`

### test phase elapsed is wall clock not longest subagent

- **Category**: method_call
- **Confidence**: 0.85
- **File**: `/private/tmp/deepagents-skill/.skillseeker-cache/deepagents/repos/0_langchain-ai_deepagents/libs/code/tests/unit_tests/tui/widgets/test_subagent_panel.py`

### Instantiate generate_task: test generate task creates self contained harbor task

- **Category**: instantiation
- **Confidence**: 0.80
- **File**: `/private/tmp/deepagents-skill/.skillseeker-cache/deepagents/repos/0_langchain-ai_deepagents/libs/evals/tests/unit_tests/test_contextbench_adapter.py`

### Workflow: test generate task creates self contained harbor task

- **Category**: workflow
- **Confidence**: 0.90
- **File**: `/private/tmp/deepagents-skill/.skillseeker-cache/deepagents/repos/0_langchain-ai_deepagents/libs/evals/tests/unit_tests/test_contextbench_adapter.py`

### Workflow: Deleting Tavily disarms the deferred restart and removes its env bridge.

- **Category**: workflow
- **Confidence**: 0.90
- **File**: `/private/tmp/deepagents-skill/.skillseeker-cache/deepagents/repos/0_langchain-ai_deepagents/libs/code/tests/unit_tests/test_auth_web_search_restart.py`

### A saved Tavily key on a Tavily-less running server arms the offer.

- **Category**: method_call
- **Confidence**: 0.85
- **File**: `/private/tmp/deepagents-skill/.skillseeker-cache/deepagents/repos/0_langchain-ai_deepagents/libs/code/tests/unit_tests/test_auth_web_search_restart.py`

### Model-provider keys don't gate a spawn-time tool, so no offer.

- **Category**: method_call
- **Confidence**: 0.85
- **File**: `/private/tmp/deepagents-skill/.skillseeker-cache/deepagents/repos/0_langchain-ai_deepagents/libs/code/tests/unit_tests/test_auth_web_search_restart.py`

### A server spawned with Tavily already bound `web_search`.

- **Category**: method_call
- **Confidence**: 0.85
- **File**: `/private/tmp/deepagents-skill/.skillseeker-cache/deepagents/repos/0_langchain-ai_deepagents/libs/code/tests/unit_tests/test_auth_web_search_restart.py`

### With no owned subprocess there is nothing to respawn.

- **Category**: method_call
- **Confidence**: 0.85
- **File**: `/private/tmp/deepagents-skill/.skillseeker-cache/deepagents/repos/0_langchain-ai_deepagents/libs/code/tests/unit_tests/test_auth_web_search_restart.py`

### If the eager export lands no `TAVILY_API_KEY`, stay disarmed.

A stored entry can be empty/malformed, in which case
`apply_stored_service_credentials` exports nothing; without an env key
a respawn couldn't bind `web_search`, so there is nothing to offer.

- **Category**: method_call
- **Confidence**: 0.85
- **File**: `/private/tmp/deepagents-skill/.skillseeker-cache/deepagents/repos/0_langchain-ai_deepagents/libs/code/tests/unit_tests/test_auth_web_search_restart.py`

### Deleting Tavily disarms the deferred restart and removes its env bridge.

- **Category**: method_call
- **Confidence**: 0.85
- **File**: `/private/tmp/deepagents-skill/.skillseeker-cache/deepagents/repos/0_langchain-ai_deepagents/libs/code/tests/unit_tests/test_auth_web_search_restart.py`

### Deleting Tavily still removes `/auth` export after prompt scheduling.

- **Category**: method_call
- **Confidence**: 0.85
- **File**: `/private/tmp/deepagents-skill/.skillseeker-cache/deepagents/repos/0_langchain-ai_deepagents/libs/code/tests/unit_tests/test_auth_web_search_restart.py`

### Deleting Tavily restores a shell key that `/auth` temporarily replaced.

- **Category**: method_call
- **Confidence**: 0.85
- **File**: `/private/tmp/deepagents-skill/.skillseeker-cache/deepagents/repos/0_langchain-ai_deepagents/libs/code/tests/unit_tests/test_auth_web_search_restart.py`

### Model-provider deletes do not affect Tavily restart state.

- **Category**: method_call
- **Confidence**: 0.85
- **File**: `/private/tmp/deepagents-skill/.skillseeker-cache/deepagents/repos/0_langchain-ai_deepagents/libs/code/tests/unit_tests/test_auth_web_search_restart.py`

### Workflow: test pin is a snapshot and pinning again appends the current text

- **Category**: workflow
- **Confidence**: 0.90
- **File**: `/private/tmp/deepagents-skill/.skillseeker-cache/deepagents/repos/0_langchain-ai_deepagents/libs/deepagents/tests/unit_tests/middleware/test_pinned_skills.py`

### Workflow: test skill unreadable since it was loaded is skipped

- **Category**: workflow
- **Confidence**: 0.90
- **File**: `/private/tmp/deepagents-skill/.skillseeker-cache/deepagents/repos/0_langchain-ai_deepagents/libs/deepagents/tests/unit_tests/middleware/test_pinned_skills.py`

### Workflow: test pinned skill discloses its tools until summarized away

- **Category**: workflow
- **Confidence**: 0.90
- **File**: `/private/tmp/deepagents-skill/.skillseeker-cache/deepagents/repos/0_langchain-ai_deepagents/libs/deepagents/tests/unit_tests/middleware/test_pinned_skills.py`

### test pin is stored once and left out of the result

- **Category**: method_call
- **Confidence**: 0.85
- **File**: `/private/tmp/deepagents-skill/.skillseeker-cache/deepagents/repos/0_langchain-ai_deepagents/libs/deepagents/tests/unit_tests/middleware/test_pinned_skills.py`

### test repeated names pin once

- **Category**: method_call
- **Confidence**: 0.85
- **File**: `/private/tmp/deepagents-skill/.skillseeker-cache/deepagents/repos/0_langchain-ai_deepagents/libs/deepagents/tests/unit_tests/middleware/test_pinned_skills.py`

### test unknown names are skipped and cleared

- **Category**: method_call
- **Confidence**: 0.85
- **File**: `/private/tmp/deepagents-skill/.skillseeker-cache/deepagents/repos/0_langchain-ai_deepagents/libs/deepagents/tests/unit_tests/middleware/test_pinned_skills.py`

