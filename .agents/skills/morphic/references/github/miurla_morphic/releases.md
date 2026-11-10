# Releases: miurla/morphic

## v1.10.0: v1.10.0

**Published**: 2026-11-09

## What's Changed
* fix(draft): keep editDraft off the draft for unrelated requests by @miurla in https://github.com/miurla/morphic/pull/1100
* feat(draft): merge the panel headers and move actions to a footer by @miurla in https://github.com/miurla/morphic/pull/1101
* fix(draft): keep the attached draft out of the moving prompt tail by @miurla in https://github.com/miurla/morphic/pull/1103
* chore: guard against vendor provider PRs by @miurla in https://github.com/miurla/morphic/pull/1105
* fix(deps): bump katex to 0.18 to resolve prototype pollution advisory by @miurla in https://github.com/miurla/morphic/pull/1107
* fix(deps): bump better-auth to 1.7.16 for the November security release by @miurla in https://github.com/miurla/morphic/pull/1108
* feat(chat): reject scripted /api/chat requests with Vercel BotID by @miurla in https://github.com/miurla/morphic/pull/1109
* feat(draft): suggest revisions at the end of draft answers by @miurla in https://github.com/miurla/morphic/pull/1111
* feat(onboarding): match the Create examples to how drafts are used by @miurla in https://github.com/miurla/morphic/pull/1112
* fix(chat): open the attachment menu above the docked composer by @miurla in https://github.com/miurla/morphic/pull/1117
* fix(chat): reset the active conversation from the sidebar by @jackiectl2 in https://github.com/miurla/morphic/pull/1116
* fix(sidebar): reset the active chat from the sidebar logo by @miurla in https://github.com/miurla/morphic/pull/1118
* chore: bump version to 1.10.0 by @miurla in https://github.com/miurla/morphic/pull/1119


**Full Changelog**: https://github.com/miurla/morphic/compare/v1.9.0...v1.10.0

## v1.9.0: v1.9.0

**Published**: 2026-10-27

## What's Changed
* feat(version): add sidebar version footer with update indicator by @nathanpride in https://github.com/miurla/morphic/pull/1078
* feat(version): hide the version footer on the cloud deployment by @miurla in https://github.com/miurla/morphic/pull/1079
* fix(chat): replace a historical paste that alone exceeds the budget by @miurla in https://github.com/miurla/morphic/pull/1081
* chore(deps): upgrade json-render to 0.21.2 by @miurla in https://github.com/miurla/morphic/pull/1088
* chore(deps): upgrade AI SDK packages by @miurla in https://github.com/miurla/morphic/pull/1089
* feat(genui): present found items as linked source cards by @miurla in https://github.com/miurla/morphic/pull/1090
* feat(draft): write and edit drafts in a side panel by @miurla in https://github.com/miurla/morphic/pull/1091
* Add a Save button to the draft panel by @miurla in https://github.com/miurla/morphic/pull/1092
* feat(chat): cache opened chats on the client instead of the server by @miurla in https://github.com/miurla/morphic/pull/1093
* fix(chat): open chats at the end and smooth the loading skeleton by @miurla in https://github.com/miurla/morphic/pull/1094
* feat(fetch): option to send regular fetches through the extraction service by @miurla in https://github.com/miurla/morphic/pull/1096
* fix: preserve equals signs in cookie values by @jackiectl2 in https://github.com/miurla/morphic/pull/1095
* feat: Add OIDC authentication support via Better Auth by @mabunixda in https://github.com/miurla/morphic/pull/1084
* feat(ops): add a maintenance mode switch by @miurla in https://github.com/miurla/morphic/pull/1097
* feat(history): search chat history from the sidebar by @nathanpride in https://github.com/miurla/morphic/pull/1086
* fix(history): hide Search thinking until results load by @miurla in https://github.com/miurla/morphic/pull/1098
* chore: bump version to 1.9.0 by @miurla in https://github.com/miurla/morphic/pull/1099

## New Contributors
* @jackiectl2 made their first contribution in https://github.com/miurla/morphic/pull/1095
* @mabunixda made their first contribution in https://github.com/miurla/morphic/pull/1084

**Full Changelog**: https://github.com/miurla/morphic/compare/v1.8.0...v1.9.0

## v1.8.0: v1.8.0

**Published**: 2026-10-17

## What's Changed
* Add account usage budgets by @miurla in https://github.com/miurla/morphic/pull/1027
* fix(privacy): serve source favicons from our own origin by @miurla in https://github.com/miurla/morphic/pull/1029
* docs: document what a self-hosted instance sends outbound by @miurla in https://github.com/miurla/morphic/pull/1028
* fix(streaming): keep a recovered tool failure off the turn's root span by @miurla in https://github.com/miurla/morphic/pull/1031
* fix(search): project results onto their declared shape for the model by @miurla in https://github.com/miurla/morphic/pull/1032
* fix(search): handle paths in Tavily site-only queries by @miurla in https://github.com/miurla/morphic/pull/1034
* fix(ui): give the message save action the same weight as its siblings by @miurla in https://github.com/miurla/morphic/pull/1036
* fix(search): stop passing Tavily's unused result fields to the model by @miurla in https://github.com/miurla/morphic/pull/1037
* Upgrade cloud models to GPT-6 Luna by @miurla in https://github.com/miurla/morphic/pull/1040
* Collapse single tool results when answer streaming starts by @miurla in https://github.com/miurla/morphic/pull/1041
* fix(streaming): replay cited source context outside the assistant answer by @miurla in https://github.com/miurla/morphic/pull/1042
* fix(citation): give fetch results citation labels by @miurla in https://github.com/miurla/morphic/pull/1045
* fix(models): allow newer model generations in dynamic model list by @miurla in https://github.com/miurla/morphic/pull/1047
* fix(attachments): enforce the 3-file limit on every attach path by @miurla in https://github.com/miurla/morphic/pull/1048
* fix: validate guest chat message structure by @sushanttiwari-14 in https://github.com/miurla/morphic/pull/1050
* chore(deps): add Dependabot config for GitHub Actions and bun by @miurla in https://github.com/miurla/morphic/pull/1053
* refactor(auth): introduce pluggable auth provider interface by @nathanpride in https://github.com/miurla/morphic/pull/1052
* chore(deps): bump actions/checkout from 4 to 7 by @dependabot[bot] in https://github.com/miurla/morphic/pull/1056
* chore(deps): limit bun Dependabot updates to security fixes by @miurla in https://github.com/miurla/morphic/pull/1060
* chore(deps): bump docker/login-action from 3 to 4 by @dependabot[bot] in https://github.com/miurla/morphic/pull/1054
* chore(deps): bump docker/build-push-action from 5 to 7 by @dependabot[bot] in https://github.com/miurla/morphic/pull/1055
* chore(deps): bump docker/setup-buildx-action from 3 to 4 by @dependabot[bot] in https://github.com/miurla/morphic/pull/1061
* perf(chat): cap pasted content replayed from earlier turns by @miurla in https://github.com/miurla/morphic/pull/1064
* feat(auth): add Better Auth provider for self-hosted multi-user instances by @nathanpride in https://github.com/miurla/morphic/pull/1063
* fix(auth): harden Better Auth rate limiting and token scrubbing by @miurla in https://github.com/miurla/morphic/pull/1069
* perf(analytics): proxy /relay straight to PostHog outside Better Auth by @miurla in https://github.com/miurla/morphic/pull/1070
* docs: lead self-hosting auth docs with Better Auth by @miurla in https://github.com/miurla/morphic/pull/1068
* chore(deps): bump docker/setup-qemu-action from 3 to 4 by @dependabot[bot] in https://github.com/miurla/morphic/pull/1062
* docs: keep README installation minimal by @miurla in https://github.com/miurla/morphic/pull/1071
* Feat/local fetch by @relic664 in https://github.com/miurla/morphic/pull/1067
* chore(fetch): tidy the crawl4ai backend after #1067 by @miurla in https://github.com/miurla/morphic/pull/1072
* fix(auth): forward visitor IPs to Supabase Auth from server actions by @miurla in https://github.com/miurla/morphic/pull/1073
* fix(auth): sign users in when they confirm their sign-up email by @miurla in https://github.com/miurla/morphic/pull/1074
* chore: bump version to 1.8.0 by @miurla in https://github.com/miurla/morphic/pull/1075

## New Contributors
* @nathanpride made their first contribution in https://github.com/miurla/morphic/pull/1052
* @dependabot[bot] made their first contribution in https://github.com/miurla/morphic/pull/1056
* @relic664 made their first contribution in https://github.com/miurla/morphic/pull/1067

**Full Changelog**: https://github.com/miurla/morphic/compare/v1.7.0...v1.8.0

## v1.7.0: v1.7.0

**Published**: 2026-09-16

## What's Changed
* feat(analytics): record whether the feedback control was offered by @miurla in https://github.com/miurla/morphic/pull/968
* fix(prompt): stop mutating the message array for related questions by @miurla in https://github.com/miurla/morphic/pull/971
* chore(deps): migrate to AI SDK 7 by @miurla in https://github.com/miurla/morphic/pull/972
* fix(tracing): record the turn's input and output on the research span by @miurla in https://github.com/miurla/morphic/pull/973
* feat(evals): add a related questions eval harness by @miurla in https://github.com/miurla/morphic/pull/976
* fix(prompt): stop appending related questions to single-fact answers by @miurla in https://github.com/miurla/morphic/pull/977
* fix(tracing): name the preparation stage an unclassified stream failure came from by @miurla in https://github.com/miurla/morphic/pull/978
* fix(streaming): stabilize attachment weight boundary by @sushanttiwari-14 in https://github.com/miurla/morphic/pull/974
* feat(analytics): record thumb clicks and their outcome by @miurla in https://github.com/miurla/morphic/pull/981
* feat(evals): record answer length alongside the item label by @miurla in https://github.com/miurla/morphic/pull/982
* feat(tracing): record the turn's carried context weight by kind by @miurla in https://github.com/miurla/morphic/pull/987
* fix(tools): read JSON and plain text in the regular fetch path by @miurla in https://github.com/miurla/morphic/pull/988
* fix(analytics): remove feedback control impression by @sushanttiwari-14 in https://github.com/miurla/morphic/pull/985
* feat(evals): measure the quick search mode, not only adaptive by @miurla in https://github.com/miurla/morphic/pull/992
* fix(search): fall back after recoverable provider failures by @sushanttiwari-14 in https://github.com/miurla/morphic/pull/989
* fix: align PDF attachment token estimates by @sushanttiwari-14 in https://github.com/miurla/morphic/pull/991
* fix(streaming): cap replayed historical answer text by @miurla in https://github.com/miurla/morphic/pull/996
* fix(prompt): identify the assistant as Morphic in both search modes by @miurla in https://github.com/miurla/morphic/pull/999
* fix(streaming): keep the replayed answer cap prefix-stable by @miurla in https://github.com/miurla/morphic/pull/998
* fix(streaming): build the prompt from an uncached chat read by @miurla in https://github.com/miurla/morphic/pull/1001
* fix(analytics): count the turn from user message ids instead of the chat by @miurla in https://github.com/miurla/morphic/pull/1003
* fix(errors): classify deterministic preparation failures by @sushanttiwari-14 in https://github.com/miurla/morphic/pull/1000
* fix(db): allow stateless startup without a database by @miurla in https://github.com/miurla/morphic/pull/1005
* chore(docker): add .dockerignore to trim the build context by @miurla in https://github.com/miurla/morphic/pull/1006
* fix(fetch): refuse private network addresses in fetch and crawl by @miurla in https://github.com/miurla/morphic/pull/1008
* fix(search): drop domain filters Tavily cannot accept by @miurla in https://github.com/miurla/morphic/pull/1010
* fix(citation): address citations by a derivable result label by @miurla in https://github.com/miurla/morphic/pull/1011
* fix(citation): stop a malformed closing delimiter from swallowing answer text by @miurla in https://github.com/miurla/morphic/pull/1013
* feat(library): move the Library entry point into the sidebar by @miurla in https://github.com/miurla/morphic/pull/1012
* perf(search): tighten the model-facing search result projection by @miurla in https://github.com/miurla/morphic/pull/1015
* perf(chat): cap replayed history when the prompt cache is cold by @miurla in https://github.com/miurla/morphic/pull/1018
* fix(storage): re-sign file parts that arrive without an object key by @miurla in https://github.com/miurla/morphic/pull/1019
* fix(search): require quick mode search before early stop by @sushanttiwari-14 in https://github.com/miurla/morphic/pull/1017
* fix(search): rewrite site-only Tavily queries into a domain filter by @miurla in https://github.com/miurla/morphic/pull/1020
* fix(chat): count gpt-5.6-luna tokens with the o200k tokenizer by @miurla in https://github.com/miurla/morphic/pull/1021
* revert(search): restore the mandatory quick mode search requirement by @miurla in https://github.com/miurla/morphic/pull/1022
* refactor(chat): resolve model context windows from a models.dev snapshot by @miurla in https://github.com/miurla/morphic/pull/1023
* fix(chat): keep the cold-start trim cut fixed on warm follow-up turns by @miurla in https://github.com/miurla/morphic/pull/1024
* fix(chat): recalibrate PDF and image attachment token estimates by @miurla in https://github.com/miurla/morphic/pull/1025
* chore: bump version to 1.7.0 by @miurla in https://github.com/miurla/morphic/pull/1026


**Full Changelog**: https://github.com/miurla/morphic/compare/v1.6.0...v1.7.0

## v1.6.0: v1.6.0

**Published**: 2026-08-17

## What's Changed
* fix: resolve citations when model prepends a toolu_ prefix by @miurla in https://github.com/miurla/morphic/pull/888
* fix: handle compound TLDs in citation domain display by @miurla in https://github.com/miurla/morphic/pull/889
* fix: card pasted content by size only, not line count by @miurla in https://github.com/miurla/morphic/pull/892
* Add knowledge library notes by @miurla in https://github.com/miurla/morphic/pull/893
* Add paginated library notes loading by @miurla in https://github.com/miurla/morphic/pull/895
* Remove note save button shown event by @miurla in https://github.com/miurla/morphic/pull/896
* Retire related_q_style_v2 A/B; render follow-ups as inline link by @miurla in https://github.com/miurla/morphic/pull/897
* Use signed URLs for uploaded files by @miurla in https://github.com/miurla/morphic/pull/898
* Force Vercel runtime to Node.js by @miurla in https://github.com/miurla/morphic/pull/899
* Stabilize attachment image previews by @miurla in https://github.com/miurla/morphic/pull/900
* Make related questions conditional by @miurla in https://github.com/miurla/morphic/pull/901
* Support signed library file reattachments by @miurla in https://github.com/miurla/morphic/pull/903
* Place Add attachment menu below trigger by @miurla in https://github.com/miurla/morphic/pull/904
* perf(rls): wrap current_setting() in (select …) for per-statement evaluation by @dmitrymaranik in https://github.com/miurla/morphic/pull/902
* fix(db): correct 0016 journal timestamp and fix format CI break by @miurla in https://github.com/miurla/morphic/pull/905
* Gate related questions behind related_questions_enabled flag by @miurla in https://github.com/miurla/morphic/pull/906
* fix: handle bare string for include_domains/exclude_domains in Zod schema search tools by @simply24365 in https://github.com/miurla/morphic/pull/910
* fix(search): keep images in model-facing tool output by @miurla in https://github.com/miurla/morphic/pull/914
* Revert "Gate related questions behind related_questions_enabled flag" by @miurla in https://github.com/miurla/morphic/pull/915
* refactor: migrate Langfuse integration from langfuse-vercel to JS SDK v5 by @miurla in https://github.com/miurla/morphic/pull/917
* feat: make overall daily chat limit configurable via env by @miurla in https://github.com/miurla/morphic/pull/919
* feat(analytics): track overall chat limit checks by @miurla in https://github.com/miurla/morphic/pull/920
* fix(analytics): deliver rate-limit events via after() by @miurla in https://github.com/miurla/morphic/pull/921
* Compact historical agent messages without provider-specific pruning by @miurla in https://github.com/miurla/morphic/pull/922
* Switch cloud models to GPT-5.6 Luna by @miurla in https://github.com/miurla/morphic/pull/923
* Reduce title generation overhead by @miurla in https://github.com/miurla/morphic/pull/924
* fix(feedback): send Langfuse score once per feedback action by @miurla in https://github.com/miurla/morphic/pull/925
* fix(render): restore related-questions spec emission on the current model by @miurla in https://github.com/miurla/morphic/pull/926
* fix(streaming): log structural diagnostics for provider API errors by @miurla in https://github.com/miurla/morphic/pull/928
* fix(streaming): mark the research span as ERROR when the stream fails by @miurla in https://github.com/miurla/morphic/pull/930
* fix(streaming): keep the prompt prefix stable across turns by @miurla in https://github.com/miurla/morphic/pull/932
* fix(streaming): stop rewriting source context as turns are appended by @miurla in https://github.com/miurla/morphic/pull/933
* fix(streaming): stop recoverable tool errors from failing the research trace by @miurla in https://github.com/miurla/morphic/pull/934
* fix(streaming): mark the research span when the answer is empty by @miurla in https://github.com/miurla/morphic/pull/937
* fix(prompts): show an image block in the worked answer examples by @miurla in https://github.com/miurla/morphic/pull/938
* fix(prompts): number citations by result position, not by tool call by @miurla in https://github.com/miurla/morphic/pull/939
* fix(prompts): keep spec fences out of the worked answer example by @miurla in https://github.com/miurla/morphic/pull/940
* fix(storage): sign file URLs from a fixed window so attachments stay cached by @miurla in https://github.com/miurla/morphic/pull/941
* feat(streaming): cap how many attachments are replayed to the model by @miurla in https://github.com/miurla/morphic/pull/942
* fix(storage): treat a blank signing window as unset, not as disabled by @miurla in https://github.com/miurla/morphic/pull/943
* fix(streaming): record provider API call diagnostics on the failing trace by @miurla in https://github.com/miurla/morphic/pull/945
* fix: deduplicate repeated attachments instead of replaying every copy by @miurla in https://github.com/miurla/morphic/pull/947
* fix(errors): describe a failed tool call by its resource, not by the app by @miurla in https://github.com/miurla/morphic/pull/949
* feat(streaming): bound replayed attachments by weight, not only by count by @miurla in https://github.com/miurla/morphic/pull/951
* fix(upload): reject files whose contents are not a supported format by @miurla in https://github.com/miurla/morphic/pull/952
* fix(errors): classify a malformed provider request instead of a generic 400 by @miurla in https://github.com/miurla/morphic/pull/953
* fix(fetch): reject a tool argument that is not a URL before requesting it by @miurla in https://github.com/miurla/morphic/pull/955
* fix(tracing): distinguish unclassified stream failures from one another and from user aborts by @miurla in https://github.com/miurla/morphic/pull/956
* fix(openai): set per-chat prompt cache key by @sushanttiwari-14 in https://github.com/miurla/morphic/pull/959
* fix(streaming): keep replayed source context from splitting a surrogate pair by @miurla in https://github.com/miurla/morphic/pull/960
* fix(search): describe a failed provider request by its HTTP status by @miurla in https://github.com/miurla/morphic/pull/961
* fix(search): surface complete Brave failures by @sushanttiwari-14 in https://github.com/miurla/morphic/pull/964
* fix(tracing): record whether a stream failure happened before the first generation by @miurla in https://github.com/miurla/morphic/pull/965
* fix: stabilize related questions in deep chats by @sushanttiwari-14 in https://github.com/miurla/morphic/pull/966
* fix(prompt): keep the related-questions reminder out of replayed history by @miurla in https://github.com/miurla/morphic/pull/967

## New Contributors
* @dmitrymaranik made their first contribution in https://github.com/miurla/morphic/pull/902
* @simply24365 made their first contribution in https://github.com/miurla/morphic/pull/910
* @sushanttiwari-14 made their first contribution in https://github.com/miurla/morphic/pull/959

**Full Changelog**: https://github.com/miurla/morphic/compare/v1.5.0...v1.6.0

## v1.5.0: v1.5.0

**Published**: 2026-06-10

## What's Changed
* docs: add OrcaRouter setup example to OpenAI-Compatible providers by @zhenjunchen-png in https://github.com/miurla/morphic/pull/868
* fix: upgrade vitest to 4.1.x to address CVE-2026-47429 by @miurla in https://github.com/miurla/morphic/pull/869
* Add PostHog product analytics by @miurla in https://github.com/miurla/morphic/pull/871
* Proxy PostHog through /relay by @miurla in https://github.com/miurla/morphic/pull/872
* Fix conversationTurn double-count by @miurla in https://github.com/miurla/morphic/pull/873
* Track chat_message_sent for guests by @miurla in https://github.com/miurla/morphic/pull/874
* Fix /search?q= handoff sending an empty message by @miurla in https://github.com/miurla/morphic/pull/875
* Update onboarding example prompts and categories by @miurla in https://github.com/miurla/morphic/pull/876
* Track onboarding example prompt and category clicks by @miurla in https://github.com/miurla/morphic/pull/877
* Improve related questions prompt; A/B follow-up style by @miurla in https://github.com/miurla/morphic/pull/878
* Tune inline image embedding to be less conservative by @miurla in https://github.com/miurla/morphic/pull/879
* Separate large pastes into a content card from the instruction by @miurla in https://github.com/miurla/morphic/pull/880
* Add source-direction guidance to search prompts by @miurla in https://github.com/miurla/morphic/pull/881
* perf(search): strip duplicated citationMap from model tool output by @miurla in https://github.com/miurla/morphic/pull/882
* perf(search): stop producing the redundant citationMap by @miurla in https://github.com/miurla/morphic/pull/883
* fix(context-window): add gemini-3 models to the context-window table by @miurla in https://github.com/miurla/morphic/pull/884
* feat: favicon chip for pasted URLs by @miurla in https://github.com/miurla/morphic/pull/885
* feat: favicon chip for pasted URLs in user messages by @miurla in https://github.com/miurla/morphic/pull/886
* refactor: pasted content & URLs as structured data parts by @miurla in https://github.com/miurla/morphic/pull/887

## New Contributors
* @zhenjunchen-png made their first contribution in https://github.com/miurla/morphic/pull/868

**Full Changelog**: https://github.com/miurla/morphic/compare/v1.4.0...v1.5.0

## v1.4.0: v1.4.0

**Published**: 2026-05-24

## What's Changed
* improve: enhance research process section UI by @miurla in https://github.com/miurla/morphic/pull/812
* improve: enhance image viewer with source info and image count badge by @miurla in https://github.com/miurla/morphic/pull/813
* feat: add message navigation dots to chat panel by @miurla in https://github.com/miurla/morphic/pull/814
* feat: add copy button to user message hover actions by @miurla in https://github.com/miurla/morphic/pull/815
* feat: add collapsible user messages with 3-line clamp by @miurla in https://github.com/miurla/morphic/pull/816
* feat: add centralized keyboard shortcut system by @miurla in https://github.com/miurla/morphic/pull/817
* refactor: remove focus input shortcut (⌘K) to reserve for command palette by @miurla in https://github.com/miurla/morphic/pull/818
* feat: add keyboard shortcuts dialog (⌘/) by @miurla in https://github.com/miurla/morphic/pull/819
* fix: align upload client MIME types with server allow-list by @miurla in https://github.com/miurla/morphic/pull/823
* chore: bump Next.js to 16.2.3 by @miurla in https://github.com/miurla/morphic/pull/824
* feat: inline image groups via spec blocks by @miurla in https://github.com/miurla/morphic/pull/825
* feat: enlarge image carousel dialog with dark floating style by @miurla in https://github.com/miurla/morphic/pull/826
* refactor: generalize spec components to Heading and Button by @miurla in https://github.com/miurla/morphic/pull/827
* fix: exclude instagram.com from Tavily results in Cloud deployments by @miurla in https://github.com/miurla/morphic/pull/828
* fix: offset chat section scroll target for mobile header by @miurla in https://github.com/miurla/morphic/pull/829
* feat: add footer message with typewriter tips next to assistant logo by @miurla in https://github.com/miurla/morphic/pull/830
* feat: add per-user daily limit for adaptive search mode by @miurla in https://github.com/miurla/morphic/pull/836
* chore: switch quick model to Gemini 3.1 Flash Lite GA by @miurla in https://github.com/miurla/morphic/pull/840
* chore: bump next and ai-sdk packages to latest patches by @miurla in https://github.com/miurla/morphic/pull/841
* feat: tighten chat input layout on mobile by @miurla in https://github.com/miurla/morphic/pull/842
* Add account deletion settings by @miurla in https://github.com/miurla/morphic/pull/843
* Fix account deletion review follow-ups by @miurla in https://github.com/miurla/morphic/pull/844
* track account deletion analytics by @miurla in https://github.com/miurla/morphic/pull/845
* fix(registry): route openai-compatible provider through chat completions endpoint by @Tespera in https://github.com/miurla/morphic/pull/846
* feat(models): list openai-compatible provider models in the selector by @Tespera in https://github.com/miurla/morphic/pull/847
* improve openai-compatible provider docs by @miurla in https://github.com/miurla/morphic/pull/855
* fix(supabase): warn at most once when Supabase config is missing by @Tespera in https://github.com/miurla/morphic/pull/850
* fix(chat): treat Opt/Cmd/Ctrl+Enter as newline, not submit by @Tespera in https://github.com/miurla/morphic/pull/848
* fix(chat): shorten post-composition Enter debounce by @Tespera in https://github.com/miurla/morphic/pull/849
* fix(chat): ignore Related-question clicks while a response is streaming by @Tespera in https://github.com/miurla/morphic/pull/853
* fix(chat): include regenerate in streaming guard by @miurla in https://github.com/miurla/morphic/pull/856
* fix(chat): dedupe messages by id when building sections by @Tespera in https://github.com/miurla/morphic/pull/854
* Refine mobile follow-up search previews by @miurla in https://github.com/miurla/morphic/pull/858
* Avoid showing raw API errors in chat UI by @miurla in https://github.com/miurla/morphic/pull/859
* Show auth modal for adaptive guest access by @miurla in https://github.com/miurla/morphic/pull/860
* Fix dotted citation labels by @miurla in https://github.com/miurla/morphic/pull/861
* Align search source skeleton layout by @miurla in https://github.com/miurla/morphic/pull/862
* Match search skeleton to results layout by @miurla in https://github.com/miurla/morphic/pull/863
* Replace UI icons with Tabler by @miurla in https://github.com/miurla/morphic/pull/864
* Polish interface motion by @miurla in https://github.com/miurla/morphic/pull/865
* Fix theme and sidebar hydration by @miurla in https://github.com/miurla/morphic/pull/866

## New Contributors
* @Tespera made their first contribution in https://github.com/miurla/morphic/pull/846

**Full Changelog**: https://github.com/miurla/morphic/compare/v1.3.0...v1.4.0

## v1.3.0: v1.3.0

**Published**: 2026-04-10

## What's Changed
* fix: switch Docker runtime to Node.js and handle no-model state by @miurla in https://github.com/miurla/morphic/pull/797
* fix: preserve line breaks in user messages by @miurla in https://github.com/miurla/morphic/pull/800
* fix: correct search mode selector indicator padding on right edge by @miurla in https://github.com/miurla/morphic/pull/801
* feat: replace related questions LLM call with inline spec fences by @miurla in https://github.com/miurla/morphic/pull/803
* refactor: replace createUIMessageStream + writer.merge with toUIMessageStreamResponse by @miurla in https://github.com/miurla/morphic/pull/805
* fix: tighten spacing between related question buttons by @miurla in https://github.com/miurla/morphic/pull/806
* fix: use in-memory messages during regeneration to avoid stale cache by @miurla in https://github.com/miurla/morphic/pull/807
* fix: prevent iOS Safari viewport shift when keyboard dismisses by @miurla in https://github.com/miurla/morphic/pull/808
* refactor: compact mobile chat panel and normalize size utilities by @miurla in https://github.com/miurla/morphic/pull/809
* fix: switch to ai-sdk-ollama and fix image upload + reasoning for Ollama by @miurla in https://github.com/miurla/morphic/pull/810
* fix: change inspector panel Minimize button to Close by @miurla in https://github.com/miurla/morphic/pull/811


**Full Changelog**: https://github.com/miurla/morphic/compare/v1.2.0...v1.3.0

## v1.2.0: v1.2.0

**Published**: 2026-03-30

## Highlights

### Model Selector

The model selector is back! Morphic now fetches available models directly from each provider's API and lets you pick any model from the UI. No more editing `config/models/default.json` — just set your API key and choose your model.

### Docker Made Easy

Docker Compose now includes SearXNG as the default search engine out of the box. No external search API key needed — just set one AI provider key and run `docker compose up -d`.

### Breaking Changes

- **`config/models/default.json` has been removed.** Model selection for local/Docker deployments is now handled through the UI model selector, with models fetched dynamically from provider APIs. Cloud deployments (`MORPHIC_CLOUD_DEPLOYMENT=true`) continue to use `config/models/cloud.json`.
- **`speed`/`quality` model type selection has been removed.** The `ModelTypeSelector` component and `modelType` cookie are no longer used.

## What's Changed

### Features
* feat: bring back model selector and align local/docker model flow by @miurla in https://github.com/miurla/morphic/pull/794

### Bug Fixes
* fix: keep Streamdown v2 default sanitization when adding custom plugins by @miurla in https://github.com/miurla/morphic/pull/789
* Fix Docker sidebar and chat history persistence by @miurla in https://github.com/miurla/morphic/pull/791
* Fix chat history freeze after deleting chats from sidebar by @miurla in https://github.com/miurla/morphic/pull/792
* Authenticate upload requests before storage config checks by @miurla in https://github.com/miurla/morphic/pull/793

### Improvements
* Upgrade to Next.js 16.2.1 by @miurla in https://github.com/miurla/morphic/pull/786
* Keep assistant logo visible after generation by @miurla in https://github.com/miurla/morphic/pull/787
* Require remote object storage for uploads in Docker by @miurla in https://github.com/miurla/morphic/pull/790

### Documentation
* docs: simplify README, Docker guide, and configuration docs by @miurla in https://github.com/miurla/morphic/pull/795

**Full Changelog**: https://github.com/miurla/morphic/compare/v1.1.0...v1.2.0

## v1.1.0: v1.1.0

**Published**: 2026-03-06

## What's Changed
* chore: remove beta badge and changelog system by @miurla in https://github.com/miurla/morphic/pull/771
* fix: use Node.js build stage for Docker multi-arch compatibility by @miurla in https://github.com/miurla/morphic/pull/772
* docs: simplify README and extract Docker guide by @miurla in https://github.com/miurla/morphic/pull/773
* Update model versions and hide model type selector for cloud by @miurla in https://github.com/miurla/morphic/pull/775
* Update cloud speed models to Gemini 3.1 series by @miurla in https://github.com/miurla/morphic/pull/779
* Enable includeThoughts for Gemini 3.x cloud models by @miurla in https://github.com/miurla/morphic/pull/780
* Update AI SDK packages to latest versions by @miurla in https://github.com/miurla/morphic/pull/781
* Fix guest rate limit not showing auth dialog by @miurla in https://github.com/miurla/morphic/pull/782
* feat: default sidebar closed and hide for guests by @miurla in https://github.com/miurla/morphic/pull/783
* refactor: simplify todoWrite availability and use qualitative conditions by @miurla in https://github.com/miurla/morphic/pull/784


**Full Changelog**: https://github.com/miurla/morphic/compare/v1.0.0...v1.1.0

## v1.0.0: v1.0.0

**Published**: 2026-02-07

# Morphic v1.0.0

A major release with significant architectural changes. This version is a complete rewrite of the core infrastructure.

## Breaking Changes

- **Database: Redis → PostgreSQL** — Chat history storage has moved from Redis (Upstash) to PostgreSQL with Drizzle ORM. Previous chat history stored in Redis will **not** be migrated. No migration script is provided. Run `bun run migrate` to create the new database tables.
- **Next.js 15 → 16** — Upgraded to Next.js 16 with Turbopack.
- **AI SDK 4 → 6** — Upgraded to AI SDK 6 with ToolLoopAgent pattern.
- **Environment variables** — Several environment variables have been added, removed, or renamed. Refer to `.env.local.example` for the current required configuration.

## Summary

### Core
- AI-powered search with GenerativeUI
- Next.js 16 with App Router and Turbopack
- AI SDK 6 integration with ToolLoopAgent
- PostgreSQL with Drizzle ORM and Row-Level Security (RLS)
- Supabase authentication with guest mode support

### AI Providers
- OpenAI (default), Anthropic Claude, Google Gemini, Vercel AI Gateway, Ollama
- Profile-based model configuration (`config/models/*.json`)

### Search
- Multiple providers: Tavily, Brave, SearXNG, Exa, Firecrawl
- Search modes: Quick, Planning, and Adaptive
- URL-specific search and content extraction

### Features
- File upload with Cloudflare R2
- Chat history with share functionality
- Message feedback system
- Inspector panel for tool execution details
- Todo tracking for complex tasks
- Changelog notification system
- LLM observability with Langfuse (optional)

### Deployment
- Docker deployment with prebuilt images (anonymous mode only)
- Vercel deployment with one-click setup
- Docker Compose for self-hosted setup with PostgreSQL, Redis, and SearXNG

## New Contributors
* @oussamadhouib made their first contribution in https://github.com/miurla/morphic/pull/556
* @mcmadafly made their first contribution in https://github.com/miurla/morphic/pull/631
* @dan-and made their first contribution in https://github.com/miurla/morphic/pull/708

**Full Changelog**: https://github.com/miurla/morphic/compare/v0.4.6...v1.0.0

## v1.0.0-beta.10: v1.0.0-beta.10

**Published**: 2026-02-07

## What's Changed
* feat: update model configuration and optimize tool selection by @miurla in https://github.com/miurla/morphic/pull/733
* feat: replace citation numbers with domain names by @miurla in https://github.com/miurla/morphic/pull/734
* fix: resolve chatId duplication issue in Next.js 16 by @miurla in https://github.com/miurla/morphic/pull/735
* refactor: clarify fetch tool PDF support and type usage by @miurla in https://github.com/miurla/morphic/pull/736
* fix: remove plus icon overlay from image grid by @miurla in https://github.com/miurla/morphic/pull/737
* fix: reload chat after message deletion in regeneration flow by @miurla in https://github.com/miurla/morphic/pull/738
* test: add comprehensive tests for prepareMessages regeneration flow by @miurla in https://github.com/miurla/morphic/pull/739
* feat(search): add source favicons to search results display by @miurla in https://github.com/miurla/morphic/pull/740
* feat: add parent collapsible for research sections with 5+ parts by @miurla in https://github.com/miurla/morphic/pull/741
* refactor: redesign citation popover layout by @miurla in https://github.com/miurla/morphic/pull/742
* feat: add explicit efficiency guidelines to research prompts by @miurla in https://github.com/miurla/morphic/pull/743
* feat: improve search mode prompts for flexible response length by @miurla in https://github.com/miurla/morphic/pull/745
* feat: integrate pruneMessages for optimized context window management by @miurla in https://github.com/miurla/morphic/pull/746
* fix(security): update Next.js to 16.0.7 for CVE-2025-66478 by @miurla in https://github.com/miurla/morphic/pull/749
* fix(security): update Next.js to 15.2.6 for CVE-2025-66478 by @miurla in https://github.com/miurla/morphic/pull/750
* security: update Next.js to 16.0.10 for additional CVE fixes by @miurla in https://github.com/miurla/morphic/pull/753
* security: update Next.js to 15.2.8 for CVE fixes by @miurla in https://github.com/miurla/morphic/pull/754
* fix: remove client-side auth check for Docker anonymous mode by @miurla in https://github.com/miurla/morphic/pull/757
* fix: improve auth error handling in ErrorModal by @miurla in https://github.com/miurla/morphic/pull/758
* feat: migrate to AI SDK v6 with ToolLoopAgent by @miurla in https://github.com/miurla/morphic/pull/760
* chore: update Next.js to 16.1.6 by @miurla in https://github.com/miurla/morphic/pull/761
* fix: handle null value for exclude_domains validation by @miurla in https://github.com/miurla/morphic/pull/762
* fix: keep reasoning in pruneMessages for OpenAI compatibility by @miurla in https://github.com/miurla/morphic/pull/763
* fix: strip reasoning parts for OpenAI models to fix multi-turn errors by @miurla in https://github.com/miurla/morphic/pull/765
* feat: add welcome message below logo on home screen by @miurla in https://github.com/miurla/morphic/pull/766
* Add guest mode and chat limits by @miurla in https://github.com/miurla/morphic/pull/767
* docs: add guest mode documentation by @miurla in https://github.com/miurla/morphic/pull/768
* docs: update README for v1.0.0 release by @miurla in https://github.com/miurla/morphic/pull/769


**Full Changelog**: https://github.com/miurla/morphic/compare/v1.0.0-beta.9...v1.0.0-beta.10

## v1.0.0-beta.9: v1.0.0-beta.9

**Published**: 2025-10-28

## What's Changed
* feat: integrate Ollama model discovery with tools filtering by @dan-and in https://github.com/miurla/morphic/pull/708
* chore: remove static Ollama placeholders by @miurla in https://github.com/miurla/morphic/pull/709
* fix: Fix header scrolling issue on iOS Safari by @miurla in https://github.com/miurla/morphic/pull/719
* feat: Restore Ollama provider support for v1.0.0 (#721) by @miurla in https://github.com/miurla/morphic/pull/722
* Fix beta badge visibility and mobile layout improvements by @miurla in https://github.com/miurla/morphic/pull/724
* Fix mobile chat message padding with accurate offset calculation by @miurla in https://github.com/miurla/morphic/pull/725
* feat: Upgrade to Next.js 16 with Turbopack and MCP support by @miurla in https://github.com/miurla/morphic/pull/726
* feat: Add Docker support with PostgreSQL, Redis, and optional authentication by @miurla in https://github.com/miurla/morphic/pull/727
* fix: Hide scroll-to-bottom button immediately on click by @miurla in https://github.com/miurla/morphic/pull/728
* feat: make BRAVE_SEARCH_API_KEY optional with dynamic provider fallback by @miurla in https://github.com/miurla/morphic/pull/729
* fix: Fix scroll listener registration to properly detect bottom position by @miurla in https://github.com/miurla/morphic/pull/730
* refactor: remove planning search mode and integrate into adaptive mode by @miurla in https://github.com/miurla/morphic/pull/731
* feat: add emoji usage guidelines to search mode prompts by @miurla in https://github.com/miurla/morphic/pull/732

## New Contributors
* @dan-and made their first contribution in https://github.com/miurla/morphic/pull/708

**Full Changelog**: https://github.com/miurla/morphic/compare/v1.0.0-beta.8...v1.0.0-beta.9

## v1.0.0-beta.8: v1.0.0-beta.8

**Published**: 2025-10-13

## Beta Testing Now Available

Starting with this release, v1.0.0 is now available for beta testing at [beta.morphic.sh](https://beta.morphic.sh).

We welcome your feedback as we work toward the stable release. Please report any issues or suggestions through [GitHub Issues](https://github.com/miurla/morphic/issues) or use the feedback button in the app.

For more information about v1.0.0, see [Issue #680](https://github.com/miurla/morphic/issues/680).

---

## What's Changed
* feat: implement model matrix and improve citation system by @miurla in https://github.com/miurla/morphic/pull/711
* feat: migrate researcher agent to streamText with smoothStream by @miurla in https://github.com/miurla/morphic/pull/712
* fix: restore cursor pointer for buttons in Tailwind v4 by @miurla in https://github.com/miurla/morphic/pull/713
* Keep single tool sections open and stabilize image previews by @miurla in https://github.com/miurla/morphic/pull/714
* feat: Add quality mode rate limiting with user-friendly error handling by @miurla in https://github.com/miurla/morphic/pull/715
* feat: Improve search error messages for better user experience by @miurla in https://github.com/miurla/morphic/pull/716
* feat: Add Vercel Analytics tracking for chat events by @miurla in https://github.com/miurla/morphic/pull/717


**Full Changelog**: https://github.com/miurla/morphic/compare/v1.0.0-beta.7...v1.0.0-beta.8


## v1.0.0-beta.7: v1.0.0-beta.7

**Published**: 2025-09-23

## What's Changed
* feat: start chat streaming optimistically by @miurla in https://github.com/miurla/morphic/pull/704
* refactor: streamline search image filtering by @miurla in https://github.com/miurla/morphic/pull/705
* Stream related questions incrementally by @miurla in https://github.com/miurla/morphic/pull/706
* Update changelog for v1.0.0 Beta.7 by @miurla in https://github.com/miurla/morphic/pull/707


**Full Changelog**: https://github.com/miurla/morphic/compare/v1.0.0-beta.6...v1.0.0-beta.7

## v1.0.0-beta.6: v1.0.0-beta.6

**Published**: 2025-09-17

## What's Changed
* fix: prevent displaying '0' results during loading in search section by @devin-ai-integration[bot] in https://github.com/miurla/morphic/pull/595
* feat(components): add password visibility toggle to Input by @vishv96 in https://github.com/miurla/morphic/pull/663
* ISSUE-546:  by @Dhaval-x96 in https://github.com/miurla/morphic/pull/671
* feat(cache): implement selective caching for individual chat loading by @miurla in https://github.com/miurla/morphic/pull/690
* chore: update AI SDK dependencies to latest versions by @miurla in https://github.com/miurla/morphic/pull/691
* feat: implement streaming support for AI tools with enhanced type safety by @miurla in https://github.com/miurla/morphic/pull/692
* fix: resolve input focus ring persistence after submission by @miurla in https://github.com/miurla/morphic/pull/693
* feat: enhance AI prompt system with improved planning and search capabilities by @miurla in https://github.com/miurla/morphic/pull/694
* Fix enter handling in user text editor by @miurla in https://github.com/miurla/morphic/pull/696
* Firecrawl based Search Provider by @yazaldefilimone in https://github.com/miurla/morphic/pull/695
* Fix assistant message deletion under RLS by @miurla in https://github.com/miurla/morphic/pull/697
* Remove legacy message-preparation helper by @miurla in https://github.com/miurla/morphic/pull/699
* Reorder search modes and set quick as default by @miurla in https://github.com/miurla/morphic/pull/700
* Fix citation mapping for message copy by @miurla in https://github.com/miurla/morphic/pull/701
* Merge main into v1.0.0 by @miurla in https://github.com/miurla/morphic/pull/702

## New Contributors
* @vishv96 made their first contribution in https://github.com/miurla/morphic/pull/663
* @Dhaval-x96 made their first contribution in https://github.com/miurla/morphic/pull/671
* @yazaldefilimone made their first contribution in https://github.com/miurla/morphic/pull/695

**Full Changelog**: https://github.com/miurla/morphic/compare/v1.0.0-beta.5...v1.0.0-beta.6

## v0.4.6: v0.4.6

**Published**: 2025-09-17

## What's Changed
* Update README: Add Sponsors and License sections, remove Verified models by @miurla in https://github.com/miurla/morphic/pull/560
* Fix sidebar state persistence and hydration flash by @miurla in https://github.com/miurla/morphic/pull/563
* feat: Use image from search results for OG tag by @ngoiyaeric in https://github.com/miurla/morphic/pull/567
* Add CLAUDE.md documentation and remove .cursor directory by @miurla in https://github.com/miurla/morphic/pull/574
* Add typecheck, format commands and CI workflow by @miurla in https://github.com/miurla/morphic/pull/575
* fix: prevent displaying '0' results during loading in search section by @devin-ai-integration[bot] in https://github.com/miurla/morphic/pull/595
* feat(components): add password visibility toggle to Input by @vishv96 in https://github.com/miurla/morphic/pull/663
* ISSUE-546:  by @Dhaval-x96 in https://github.com/miurla/morphic/pull/671
* Firecrawl based Search Provider by @yazaldefilimone in https://github.com/miurla/morphic/pull/695

## New Contributors
* @ngoiyaeric made their first contribution in https://github.com/miurla/morphic/pull/567
* @vishv96 made their first contribution in https://github.com/miurla/morphic/pull/663
* @Dhaval-x96 made their first contribution in https://github.com/miurla/morphic/pull/671
* @yazaldefilimone made their first contribution in https://github.com/miurla/morphic/pull/695

**Full Changelog**: https://github.com/miurla/morphic/compare/v0.4.5...v0.4.6

## v1.0.0-beta.5: v1.0.0-beta.5

**Published**: 2025-09-10

## What's Changed
* Harden site feedback insert under RLS; add SELECT policy and Drizzle migration by @miurla in https://github.com/miurla/morphic/pull/681
* refactor(ui): replace react-markdown with streamdown and simplify code blocks (Refs #683) by @miurla in https://github.com/miurla/morphic/pull/684
* docs(prompt): enforce TODO completion via prompts (Refs #682) by @miurla in https://github.com/miurla/morphic/pull/685
* style(ui): compact Thoughts header in reasoning section by @miurla in https://github.com/miurla/morphic/pull/686
* ci(release): add tag-driven release workflow (pre-release gating by base version) by @miurla in https://github.com/miurla/morphic/pull/687
* feat(ui): add ResearchProcessSection with accordion, fix data rendering, and update FetchSection by @miurla in https://github.com/miurla/morphic/pull/688
* Release v1.0.0-beta.5 by @miurla in https://github.com/miurla/morphic/pull/689


**Full Changelog**: https://github.com/miurla/morphic/compare/v1.0.0-beta.4...v1.0.0-beta.5

## v1.0.0-beta.4: v1.0.0-beta.4

**Published**: 2025-09-07

**Note:** Advancing from v0.5 to v1.0 as a major release due to substantial cumulative improvements.

## What's Changed
* feat: Add Row-Level Security (RLS) to all database tables by @miurla in https://github.com/miurla/morphic/pull/656
* fix: Improve tool error handling for AI SDK v5 by @miurla in https://github.com/miurla/morphic/pull/658
* fix: stabilize message height and improve chat scroll position by @miurla in https://github.com/miurla/morphic/pull/659
* feat: Implement Row-Level Security (RLS) for multi-tenant data isolation by @miurla in https://github.com/miurla/morphic/pull/660
* fix: add RLS context for feedback submission by @miurla in https://github.com/miurla/morphic/pull/661
* fix: add RLS context for message feedback updates by @miurla in https://github.com/miurla/morphic/pull/662
* feat: Enhanced search modes with improved UI and model selection by @miurla in https://github.com/miurla/morphic/pull/664
* feat: optimize fetch tool limits and add quick mode restrictions by @miurla in https://github.com/miurla/morphic/pull/665
* Fix: Display message actions only on last text part by @miurla in https://github.com/miurla/morphic/pull/666
* refactor: centralize related questions model configuration by @miurla in https://github.com/miurla/morphic/pull/667
* Refactor: Improve streaming architecture for related questions generation by @miurla in https://github.com/miurla/morphic/pull/668
* feat: enhance message metadata with searchMode and modelId by @miurla in https://github.com/miurla/morphic/pull/669
* feat: emphasize Morphic reborn with agentic search in changelog by @miurla in https://github.com/miurla/morphic/pull/672
* feat: migrate model configuration to JSON files by @miurla in https://github.com/miurla/morphic/pull/673
* feat: prepare v1.0 - environment configuration cleanup by @miurla in https://github.com/miurla/morphic/pull/674
* feat: update documentation for v1.0 release by @miurla in https://github.com/miurla/morphic/pull/675
* Fix feedback button not showing after streaming completes by @miurla in https://github.com/miurla/morphic/pull/676
* fix: model selection to use cloud.json configuration properly by @miurla in https://github.com/miurla/morphic/pull/677
* feat: update prompt format and search configuration by @miurla in https://github.com/miurla/morphic/pull/678
* fix: avoid invisible action row in text parts by @miurla in https://github.com/miurla/morphic/pull/679


**Full Changelog**: https://github.com/miurla/morphic/compare/v0.5.0-beta.3...v1.0.0-beta.4

## v0.5.0-beta.3: v0.5.0-beta.3

**Published**: 2025-08-11

## What's Changed
* feat: update CSS variables to use oklch color space and match sidebar with muted color by @miurla in https://github.com/miurla/morphic/pull/625
* feat: align collapsible component styling for consistency by @miurla in https://github.com/miurla/morphic/pull/626
* Fix Vercel deployment error with react-markdown v9 and webpack config by @miurla in https://github.com/miurla/morphic/pull/628
* feat: add hover icon transition to SidebarTrigger and reduce header icon size by @miurla in https://github.com/miurla/morphic/pull/629
* feat: remove search mode toggle functionality by @miurla in https://github.com/miurla/morphic/pull/630
* Feature: support for Vercel gateway by @mcmadafly in https://github.com/miurla/morphic/pull/631
* feat: add icon for Vercel AI Gateway provider by @miurla in https://github.com/miurla/morphic/pull/632
* refactor: simplify provider ecosystem and model configuration by @miurla in https://github.com/miurla/morphic/pull/633
* chore: update AI SDK packages from beta to stable versions by @miurla in https://github.com/miurla/morphic/pull/634
* Improve reasoning section UI and functionality by @miurla in https://github.com/miurla/morphic/pull/635
* Update OpenAI models to GPT-5 series by @miurla in https://github.com/miurla/morphic/pull/636
* Fix text overflow in search section headers by @miurla in https://github.com/miurla/morphic/pull/637
* Fix artifact panel resize behavior to prevent chat overflow on small screens by @miurla in https://github.com/miurla/morphic/pull/638
* Redesign reasoning section UI for improved visual hierarchy by @miurla in https://github.com/miurla/morphic/pull/639
* Fix GPT-5 reasoning display configuration by @miurla in https://github.com/miurla/morphic/pull/640
* Fix OpenAI API error with GPT-5 reasoning parts in chat history by @miurla in https://github.com/miurla/morphic/pull/641
* Add category-based prompt suggestions system by @miurla in https://github.com/miurla/morphic/pull/644
* feat: add Langfuse LLM observability and tracing integration by @miurla in https://github.com/miurla/morphic/pull/645
* feat: implement Langfuse feedback integration with user rating system by @miurla in https://github.com/miurla/morphic/pull/647
* feat: add site feedback system with sentiment tracking by @miurla in https://github.com/miurla/morphic/pull/648
* feat: add changelog notification banner system by @miurla in https://github.com/miurla/morphic/pull/649
* feat: add authentication check and modal for chat access by @miurla in https://github.com/miurla/morphic/pull/650
* feat: add rate limit error modal for better user experience by @miurla in https://github.com/miurla/morphic/pull/651
* Performance optimization: Remove cache layers and add DB indexes by @miurla in https://github.com/miurla/morphic/pull/652
* perf: optimize chat API to eliminate auth duplication and improve DB operations by @miurla in https://github.com/miurla/morphic/pull/653
* Fix: Standardize AI SDK trigger and regenerate usage by @miurla in https://github.com/miurla/morphic/pull/654
* feat: add animated loading logo with eye movement by @miurla in https://github.com/miurla/morphic/pull/655

## New Contributors
* @mcmadafly made their first contribution in https://github.com/miurla/morphic/pull/631

**Full Changelog**: https://github.com/miurla/morphic/compare/v0.5.0-beta.2...v0.5.0-beta.3

## v0.5.0-beta.2: v0.5.0-beta.2

**Published**: 2025-08-04

## What's Changed
* feat: improve retrieve tool with clickable UI and dual fetch modes by @miurla in https://github.com/miurla/morphic/pull/590
* fix: improve message action display logic to prevent gaps by @miurla in https://github.com/miurla/morphic/pull/591
* feat: implement two-type search system with video integration by @miurla in https://github.com/miurla/morphic/pull/592
* fix: improve sidebar panel open/close animations by @miurla in https://github.com/miurla/morphic/pull/593
* feat: skip related questions generation when no tool calls by @miurla in https://github.com/miurla/morphic/pull/594
* feat: Auto-collapse multiple tools in messages by @miurla in https://github.com/miurla/morphic/pull/597
* fix: update inspector panel tool icons and remove background by @miurla in https://github.com/miurla/morphic/pull/598
* Fix fetch tool display issue when loading saved data by @miurla in https://github.com/miurla/morphic/pull/599
* fix: prevent displaying '0' during search loading state by @miurla in https://github.com/miurla/morphic/pull/600
* fix: Auto-collapse tools during streaming by @miurla in https://github.com/miurla/morphic/pull/601
* fix: improve artifact search query and result count display by @miurla in https://github.com/miurla/morphic/pull/602
* feat: add chat-cli tool for API testing by @miurla in https://github.com/miurla/morphic/pull/603
* Fix message regeneration with AI SDK ID mismatch by @miurla in https://github.com/miurla/morphic/pull/604
* feat: add regeneration testing to chat CLI tool by @miurla in https://github.com/miurla/morphic/pull/605
* feat: improve chat API performance with caching and optimized queries by @miurla in https://github.com/miurla/morphic/pull/606
* docs: add missing migration step and auth requirements to README by @miurla in https://github.com/miurla/morphic/pull/607
* feat: implement context window management for LLMs by @miurla in https://github.com/miurla/morphic/pull/608
* Fix failing tests and improve CI pipeline by @miurla in https://github.com/miurla/morphic/pull/609
* fix: implement comprehensive error handling for chat functionality by @miurla in https://github.com/miurla/morphic/pull/610
* fix: resolve hydration mismatch in chat artifact container by @miurla in https://github.com/miurla/morphic/pull/611
* refactor: simplify related questions from streaming to data parts by @miurla in https://github.com/miurla/morphic/pull/612
* refactor: improve streaming architecture with helper extraction and type safety by @miurla in https://github.com/miurla/morphic/pull/613
* Fix Anthropic model message structure for tool-call/tool-result separation by @miurla in https://github.com/miurla/morphic/pull/614
* Revert "Fix Anthropic model message structure for tool-call/tool-result separation" by @miurla in https://github.com/miurla/morphic/pull/615
* Fix Anthropic tool call persistence and step-start handling by @miurla in https://github.com/miurla/morphic/pull/616
* feat: enhance citation system with hover popovers and upgrade react-markdown to v10 by @miurla in https://github.com/miurla/morphic/pull/617
* Fix undefined query display and add loading animation for search by @miurla in https://github.com/miurla/morphic/pull/618
* feat: Add todo tools with artifact panel integration by @miurla in https://github.com/miurla/morphic/pull/619
* Fix right panel gap when panel is hidden by @miurla in https://github.com/miurla/morphic/pull/620
* fix: clean up drizzle migrations by @miurla in https://github.com/miurla/morphic/pull/621
* Fix edit icon overlapping with user messages by @miurla in https://github.com/miurla/morphic/pull/622
* feat: add comprehensive heading styles for prose content by @miurla in https://github.com/miurla/morphic/pull/623
* feat: upgrade to Tailwind CSS v4.1.11 with CSS-based configuration by @miurla in https://github.com/miurla/morphic/pull/624


**Full Changelog**: https://github.com/miurla/morphic/compare/v0.5.0-beta.1...v0.5.0-beta.2

## v0.5.0-beta.1: v0.5.0-beta.1

**Published**: 2025-07-29

## What's Changed
* Add CLAUDE.md documentation and remove .cursor directory by @miurla in https://github.com/miurla/morphic/pull/574
* Add typecheck, format commands and CI workflow by @miurla in https://github.com/miurla/morphic/pull/575
* Add CI/CD, formatting, and documentation to v0.5 branch by @miurla in https://github.com/miurla/morphic/pull/576
* feat: Upgrade to Vercel AI SDK v5 beta by @miurla in https://github.com/miurla/morphic/pull/578
* feat: migrate to AI SDK v5.0.0-beta Agent abstraction by @miurla in https://github.com/miurla/morphic/pull/579
* feat: implement Vercel AI SDK v5 persistence pattern by @miurla in https://github.com/miurla/morphic/pull/581
* feat: improve chat navigation and add padding to loading state by @miurla in https://github.com/miurla/morphic/pull/582
* Fix reload and edit functionality with messageId-based operations by @miurla in https://github.com/miurla/morphic/pull/583
* feat: migrate database from Supabase to Neon DB by @miurla in https://github.com/miurla/morphic/pull/584
* feat: migrate file storage from Supabase to Cloudflare R2 by @miurla in https://github.com/miurla/morphic/pull/585
* fix: prevent image upload button from triggering form submission by @devin-ai-integration[bot] in https://github.com/miurla/morphic/pull/588
* feat: add support for AI SDK v5 dynamic tools by @miurla in https://github.com/miurla/morphic/pull/589

**Full Changelog**: https://github.com/miurla/morphic/compare/v0.5.0-alpha.3...v0.5.0-beta.1

## v0.5.0-alpha.3: v0.5.0-alpha.3

**Published**: 2025-05-26

## What's Changed
* Feat file upload by @oussamadhouib in https://github.com/miurla/morphic/pull/556
* Improve uploaded file component layout and rename to kebab-case by @miurla in https://github.com/miurla/morphic/pull/558
* Refactor user message rendering to support parts-based structure by @miurla in https://github.com/miurla/morphic/pull/559
* refactor: improve reasoning auto-collapse logic in chat messages by @miurla in https://github.com/miurla/morphic/pull/561

## New Contributors
* @oussamadhouib made their first contribution in https://github.com/miurla/morphic/pull/556

**Full Changelog**: https://github.com/miurla/morphic/compare/v0.5.0-alpha.2...v0.5.0-alpha.3

## v0.4.5: v0.4.5

**Published**: 2025-05-22

## What's Changed
* Refactor search.ts: by @robertDouglass in https://github.com/miurla/morphic/pull/540
* A middleware-based approach for base URL determination by @robertDouglass in https://github.com/miurla/morphic/pull/541
* Update react warnings  by @robertDouglass in https://github.com/miurla/morphic/pull/553
* Refactor baseurl by @robertDouglass in https://github.com/miurla/morphic/pull/547
* Fix PR #547: Refactor baseurl while preserving components/chat.tsx by @miurla in https://github.com/miurla/morphic/pull/557

## New Contributors
* @robertDouglass made their first contribution in https://github.com/miurla/morphic/pull/540

**Full Changelog**: https://github.com/miurla/morphic/compare/v0.4.4...v0.4.5

## v0.5.0-alpha.2: v0.5.0-alpha.2

**Published**: 2025-05-21

## What's Changed
* Simplify reasoning section and cleanup message rendering by @miurla in https://github.com/miurla/morphic/pull/538
* Enhance chat title generation using LLM by @miurla in https://github.com/miurla/morphic/pull/539
* Upgrade AI SDK to v5 alpha by @miurla in https://github.com/miurla/morphic/pull/549
* Refactor chat streaming and researcher logic by @miurla in https://github.com/miurla/morphic/pull/551
* Standardize Model References Using getModel Function by @miurla in https://github.com/miurla/morphic/pull/552
* Improve related questions section display and functionality by @miurla in https://github.com/miurla/morphic/pull/554


**Full Changelog**: https://github.com/miurla/morphic/compare/v0.5.0-alpha.1...v0.5.0-alpha.2

## v0.5.0-alpha.1: v0.5.0-alpha.1

**Published**: 2025-05-15

## What's Changed
* Migrate chat storage from Redis to Postgres (Supabase) by @miurla in https://github.com/miurla/morphic/pull/533
* Add unit tests for lib/actions/chat-db.ts with Vitest by @miurla in https://github.com/miurla/morphic/pull/534

## Note
It is still in alpha release and not yet fully functional.

**Full Changelog**: https://github.com/miurla/morphic/compare/v0.4.4...v0.5.0-alpha.1

## v0.4.4: v0.4.4

**Published**: 2025-05-15

## What's Changed
* Add loading.tsx to /app/search and /app/share directories by @devin-ai-integration in https://github.com/miurla/morphic/pull/528
* Add reusable TooltipButton component by @devin-ai-integration in https://github.com/miurla/morphic/pull/531
* Fix inspector panel bottom padding by @devin-ai-integration in https://github.com/miurla/morphic/pull/532
* Improve chat scrolling with section-based UI by @miurla in https://github.com/miurla/morphic/pull/535

## New Contributors
* @devin-ai-integration made their first contribution in https://github.com/miurla/morphic/pull/528

**Full Changelog**: https://github.com/miurla/morphic/compare/v0.4.3...v0.4.4

## v0.4.3: v0.4.3

**Published**: 2025-05-10

## What's Changed
* feat: add Vercel Analytics by @miurla in https://github.com/miurla/morphic/pull/511
* Update Bun to v1.2.12 and use text-based lockfile by @miurla in https://github.com/miurla/morphic/pull/512
* Fix: Ensure search-mode cookie is set on initial load by @miurla in https://github.com/miurla/morphic/pull/514
* feat: Display user avatar in chat messages by @miurla in https://github.com/miurla/morphic/pull/515
* Fix: Prevent Supabase client initialization errors when env vars are missing by @miurla in https://github.com/miurla/morphic/pull/519
* Fix: Streaming scroll cancellation and button consolidation for issue #516 by @miurla in https://github.com/miurla/morphic/pull/523
* Refactor: Client-side Chat History to Preserve Scroll and Prevent Re-renders by @miurla in https://github.com/miurla/morphic/pull/527


**Full Changelog**: https://github.com/miurla/morphic/compare/v0.4.2...v0.4.3

## v0.4.2: v0.4.2

**Published**: 2025-05-06

## What's Changed
* Add Supabase rules for AI editor by @miurla in https://github.com/miurla/morphic/pull/508
* feat: Implement Supabase Authentication by @miurla in https://github.com/miurla/morphic/pull/509
* feat: Integrate Supabase user ID with chat history by @miurla in https://github.com/miurla/morphic/pull/510


**Full Changelog**: https://github.com/miurla/morphic/compare/v0.4.1...v0.4.2

## v0.4.1: v0.4.1

**Published**: 2025-05-05

## What's Changed
* Fix schema selection for o-prefix models in OpenAI and Azure providers by @miurla in https://github.com/miurla/morphic/pull/504
* Add sidebar component for improved navigation by @miurla in https://github.com/miurla/morphic/pull/505
* Improve chat history with pagination and infinite scroll by @miurla in https://github.com/miurla/morphic/pull/506
* Add individual chat delete action with confirmation dialog by @miurla in https://github.com/miurla/morphic/pull/507


**Full Changelog**: https://github.com/miurla/morphic/compare/v0.4.0...v0.4.1

## v0.4.0: v0.4.0

**Published**: 2025-05-04

## What's Changed
* Improve chat layout and fix scroll behavior by @miurla in https://github.com/miurla/morphic/pull/496
* Add opacity transition to message actions during streaming by @miurla in https://github.com/miurla/morphic/pull/497
* Add side panel to display tool result details by @miurla in https://github.com/miurla/morphic/pull/502
* Fix: Update Azure OpenAI API version to support newer models by @miurla in https://github.com/miurla/morphic/pull/503


**Full Changelog**: https://github.com/miurla/morphic/compare/v0.3.10...v0.4.0

## v0.3.10: v0.3.10

**Published**: 2025-04-30

## What's Changed
* Add scroll cancelation during AI response streaming by @miurla in https://github.com/miurla/morphic/pull/491
* Add user message editing functionality by @miurla in https://github.com/miurla/morphic/pull/494
* Add message retry functionality by @miurla in https://github.com/miurla/morphic/pull/495


**Full Changelog**: https://github.com/miurla/morphic/compare/v0.3.9...v0.3.10

## v0.3.9: v0.3.9

**Published**: 2025-04-15

## What's Changed
* Fix: Add experimental_throttle to useChat to prevent infinite update loops by @miurla in https://github.com/miurla/morphic/pull/487
* Fix: Update deprecated useChat import from ai/react to @ai-sdk/react by @miurla in https://github.com/miurla/morphic/pull/488
* Add ask_question tool and improve tool UX by @miurla in https://github.com/miurla/morphic/pull/489
* Add GPT-4.1 models to supported models by @miurla in https://github.com/miurla/morphic/pull/490


**Full Changelog**: https://github.com/miurla/morphic/compare/v0.3.8...v0.3.9

## v0.3.8: v0.3.8

**Published**: 2025-04-11

## What's Changed
* fix: display search results from manual tool calls by @miurla in https://github.com/miurla/morphic/pull/477
* Update Next.js to version 15.2.3 by @miurla in https://github.com/miurla/morphic/pull/479
* Add Gemini 2.5 Pro (Experimental) model by @miurla in https://github.com/miurla/morphic/pull/480
* Only show MessageActions on the last text part by @miurla in https://github.com/miurla/morphic/pull/481
* Remove icon space when showIcon is false by @miurla in https://github.com/miurla/morphic/pull/482
* Add help message to empty chat screen by @miurla in https://github.com/miurla/morphic/pull/483
* Add new AI models by @miurla in https://github.com/miurla/morphic/pull/484
* Clean up UI layout for collapsible message components by @miurla in https://github.com/miurla/morphic/pull/485
* Add continuous scrolling during message streaming by @miurla in https://github.com/miurla/morphic/pull/486


**Full Changelog**: https://github.com/miurla/morphic/compare/v0.3.7...v0.3.8

## v0.3.7: v0.3.7

**Published**: 2025-03-14

## What's Changed
* fix: Change Gemini Flash toolCallType from native to manual by @miurla in https://github.com/miurla/morphic/pull/462
* feat: Unify navigation in header for all devices by @miurla in https://github.com/miurla/morphic/pull/463
* Fix: Change environment variable  by @miurla in https://github.com/miurla/morphic/pull/466
* fix: update DeepSeek model IDs and names for better clarity by @miurla in https://github.com/miurla/morphic/pull/467
* fix: change DeepSeek tool call type from native to manual by @miurla in https://github.com/miurla/morphic/pull/468
* Fix models.json loading in various environments by @miurla in https://github.com/miurla/morphic/pull/471
* feat: add BASE_URL environment variable support for Docker environments by @miurla in https://github.com/miurla/morphic/pull/472
* fix: use parts to render  messages in multi steps correctly by @sp88011 in https://github.com/miurla/morphic/pull/473
* fix: use parts to render messages in multi steps correctly by @miurla in https://github.com/miurla/morphic/pull/474

## New Contributors
* @sp88011 made their first contribution in https://github.com/miurla/morphic/pull/473

**Full Changelog**: https://github.com/miurla/morphic/compare/v0.3.6...v0.3.7

## v0.3.6: v0.3.6

**Published**: 2025-03-01

## Key Improvements
- Docker Enhancements: Optimized Docker configuration with multi-architecture support and improved build workflows
- Model Management: Refactored model configurations to JSON for better maintainability
- New AI Provider: Added xAI (Grok) provider and models
- Framework Update: Upgraded to Next.js 15.2.0
- New Model: Added Claude 3.7 Sonnet to available models
- Chat History Control: Added environment flag to disable chat history saving

## What's Changed
* fix: use bun start for production mode in Docker by @miurla in https://github.com/miurla/morphic/pull/433
* feat: add multi-architecture Docker build support by @miurla in https://github.com/miurla/morphic/pull/434
* fix: update Docker configuration by @miurla in https://github.com/miurla/morphic/pull/436
* docs: remove prebuilt image documentation by @miurla in https://github.com/miurla/morphic/pull/440
* ci: optimize docker build workflow by @miurla in https://github.com/miurla/morphic/pull/441
* feat: add xAI (Grok) provider and models by @miurla in https://github.com/miurla/morphic/pull/444
* fix: add env flag to disable chat history saving by @miurla in https://github.com/miurla/morphic/pull/445
* refactor: move model configurations to JSON and improve model management by @miurla in https://github.com/miurla/morphic/pull/451
* refactor: rename NEXT_PUBLIC_ENABLE_SAVE_CHAT_HISTORY to ENABLE_SAVE_CHAT_HISTORY by @miurla in https://github.com/miurla/morphic/pull/452
* refactor: improve model configuration management by @miurla in https://github.com/miurla/morphic/pull/454
* chore: remove unnecessary check by @miurla in https://github.com/miurla/morphic/pull/455
* refactor: update getModels to use fetch by @miurla in https://github.com/miurla/morphic/pull/456
* fix: filter out disabled models from UI by @miurla in https://github.com/miurla/morphic/pull/457
* Add Claude 3.7 Sonnet to models.json by @miurla in https://github.com/miurla/morphic/pull/459
* Upgrade Next.js to version 15.2.0 by @miurla in https://github.com/miurla/morphic/pull/460


**Full Changelog**: https://github.com/miurla/morphic/compare/v0.3.5...v0.3.6

## v0.3.5: v0.3.5

**Published**: 2025-02-14

## What's Changed
* feat: add reasoning timing measurement and include elapsed time by @miurla in https://github.com/miurla/morphic/pull/430
* feat: add docker prebuild and GitHub Actions workflow by @miurla in https://github.com/miurla/morphic/pull/431


**Full Changelog**: https://github.com/miurla/morphic/compare/v0.3.4...v0.3.5

## v0.3.4: v0.3.4

**Published**: 2025-02-05

## What's Changed
* feat: add support for o3-mini model by @miurla in https://github.com/miurla/morphic/pull/415
* refactor: update visibility classes for responsive design by @miurla in https://github.com/miurla/morphic/pull/416
* feat: update Ollama model configuration and enhance tool call support by @miurla in https://github.com/miurla/morphic/pull/421
* fix: preserve full model name after provider by @miurla in https://github.com/miurla/morphic/pull/423
* feat(models): update Gemini models by @miurla in https://github.com/miurla/morphic/pull/426


**Full Changelog**: https://github.com/miurla/morphic/compare/v0.3.3...v0.3.4

## v0.3.3: v0.3.3

**Published**: 2025-02-01

## What's Changed

**Add reasoning model support**

* refactor: replace model selector with shadcn combobox by @miurla in https://github.com/miurla/morphic/pull/407
* fix: adjust layout and spacing for better mobile experience by @miurla in https://github.com/miurla/morphic/pull/408
* refactor: improve chat input design by @miurla in https://github.com/miurla/morphic/pull/409
* feat: Add reasoning model support by @miurla in https://github.com/miurla/morphic/pull/412


**Full Changelog**: https://github.com/miurla/morphic/compare/v0.3.2...v0.3.3

## v0.3.2: v0.3.2

**Published**: 2025-01-27

## What's Changed
* Update AI SDK dependencies by @miurla in https://github.com/miurla/morphic/pull/404
* [Unstable] feat: add Deepseek provider integration by @miurla in https://github.com/miurla/morphic/pull/405


**Full Changelog**: https://github.com/miurla/morphic/compare/v0.3.1...v0.3.2

## v0.3.1: v0.3.1

**Published**: 2025-01-18

## What's Changed
Fixed it to work with the ollama provider even after migration

* Fix: Add simulated streaming support for Ollama provider by @miurla in https://github.com/miurla/morphic/pull/402

**Full Changelog**: https://github.com/miurla/morphic/compare/v0.3.0...v0.3.1

## v0.3.0: v0.3.0

**Published**: 2025-01-15

## What's Changed
**Migrating from RSC to UI**

# Breaking Changes
(Chat History, Share Feature, and Search Flow Updates)

## Changes in Chat History Storage

### Optional Chat History
- Chat history storage is now optional
- Enable with `NEXT_PUBLIC_ENABLE_SAVE_CHAT_HISTORY=true`
- Check `.env.example` for configuration details

### Share Feature Update
- Share functionality is now controlled by `NEXT_PUBLIC_ENABLE_SHARE=true`
- Updated environment variable configuration
- See `.env.example` for setup

## Disabled Features

### Search from Share Page
- Search functionality has been temporarily disabled on share pages

### Query Clarification Flow
- The user query clarification flow (when queries are ambiguous) has been temporarily disabled

## Data Migration Notice

### Storage Schema Changes
- Chat history data structure has been updated
- Data is now stored with a new key format
- Previous data format is not compatible with the new version

### Migration Required
⚠️ If you need to access chat history from previous versions, data migration is required.

## Action Required

1. Review `.env.example` for new configuration options
2. Update your environment variables accordingly
3. Migrate existing data if needed (previous chat history will not be displayed without migration)
4. Note the temporarily disabled features in your implementation

Please refer to the documentation for detailed configuration instructions.

---
* fix: Make Azure deployment name configurable through environment vars by @miurla in https://github.com/miurla/morphic/pull/379
* chore: Update README and models to include formatted URLs and add Gemini 2.0 Flash model by @yslinear in https://github.com/miurla/morphic/pull/380
* Fix TypeScript Error in window.prompt Call in Codeblock Component by @andreia-oca in https://github.com/miurla/morphic/pull/381
* Migrate to AI SDK UI by @miurla in https://github.com/miurla/morphic/pull/383
* feat: save chat with related questions after completion by @miurla in https://github.com/miurla/morphic/pull/386
* refactor: unify message rendering pattern for tools and annotations by @miurla in https://github.com/miurla/morphic/pull/387
* Save and load annotation data by @miurla in https://github.com/miurla/morphic/pull/389
* Refactor/share by @miurla in https://github.com/miurla/morphic/pull/390
* refactor: Update Chat component to include query parameter by @miurla in https://github.com/miurla/morphic/pull/391
* feat: improve error handling in chat API route by @miurla in https://github.com/miurla/morphic/pull/393
* refactor: standardize useChat hook ID usage by @miurla in https://github.com/miurla/morphic/pull/394
* Refactor/improve UI by @miurla in https://github.com/miurla/morphic/pull/395
* style: enhance UI components with animations and visual improvements by @miurla in https://github.com/miurla/morphic/pull/396
* docs: reorganize documentation and improve clarity by @miurla in https://github.com/miurla/morphic/pull/398
* feat: Migrating from RSC to UI by @miurla in https://github.com/miurla/morphic/pull/399

## New Contributors
* @yslinear made their first contribution in https://github.com/miurla/morphic/pull/380
* @andreia-oca made their first contribution in https://github.com/miurla/morphic/pull/381

**Full Changelog**: https://github.com/miurla/morphic/compare/v0.2.34...v0.3.0

## v0.3.0-alpha.3: v0.3.0-alpha.3

**Published**: 2025-01-12

## What's Changed

* Refactor/share by @miurla in https://github.com/miurla/morphic/pull/390
* refactor: Update Chat component to include query parameter by @miurla in https://github.com/miurla/morphic/pull/391
* feat: improve error handling in chat API route by @miurla in https://github.com/miurla/morphic/pull/393
* refactor: standardize useChat hook ID usage by @miurla in https://github.com/miurla/morphic/pull/394
* Refactor/improve UI by @miurla in https://github.com/miurla/morphic/pull/395


**Full Changelog**: https://github.com/miurla/morphic/compare/v0.3.0-alpha.2...v0.3.0-alpha.3

## v0.3.0-alpha.2: v0.3.0-alpha.2

**Published**: 2025-01-09

## What's Changed
* feat: save chat with related questions after completion by @miurla in https://github.com/miurla/morphic/pull/386
* refactor: unify message rendering pattern for tools and annotations by @miurla in https://github.com/miurla/morphic/pull/387
* Save and load annotation data by @miurla in https://github.com/miurla/morphic/pull/389

## ⚠️ Migration Status
The following features from the previous version are not yet migrated:

- Chat sharing capabilities
- Other core chat features from v0.2.x

This version is intended for development and testing purposes only. Users should continue using v0.2.x for production environments until the migration is complete.

**Full Changelog**: https://github.com/miurla/morphic/compare/v0.3.0-alpha.1...v0.3.0-alpha.2

## v0.3.0-alpha.1: v0.3.0-alpha.1

**Published**: 2025-01-04

## What's Changed
* Migrate to AI SDK UI by @miurla in https://github.com/miurla/morphic/pull/383

### Features
- Added chat researcher functionality
- Implemented related questions generation
- Added render message feature
- Added CollapsibleMessage component
- Updated researcher guidelines for more accurate information

### Major Changes
- Updated Next.js to version 15.1.3
- Upgraded AI SDK to version 4.0.11
- Replaced useAction with useChat

### Refactoring & UI Improvements
- Message Display Enhancements
  - Added MessageWithAvatar component for consistent display
  - Updated chat messages and panel components
- Chat System Updates
  - Refactored chat route for related questions generation
  - Restructured agents and schemas
- Chat Researcher Improvements
  - Enhanced retrieve tool
  - Added search video tool
- Code Cleanup
  - Removed unused code
  - Fixed build errors

### Note
This is an alpha release focusing on the initial migration of the chat system architecture.

### ⚠️ Migration Status
The following features from the previous version are not yet migrated:
- Chat history management
- Chat saving functionality
- Chat sharing capabilities
- Chat loading and state management
- Other core chat features from v0.2.x

This version is intended for development and testing purposes only. Users should continue using v0.2.x for production environments until the migration is complete.

**Full Changelog**: https://github.com/miurla/morphic/compare/v0.2.34...v0.3.0-alpha.1

## v0.2.34: v0.2.34

**Published**: 2024-11-30

**This version is RSC's final version**


## What's Changed

* Update AI SDK dependencies by @miurla in https://github.com/miurla/morphic/pull/375


**Full Changelog**: https://github.com/miurla/morphic/compare/v0.2.33...v0.2.34

## v0.2.33: v0.2.33

**Published**: 2024-11-05

## What's Changed
* feat: Support OpenAI compatible model by @miurla in https://github.com/miurla/morphic/pull/372
* feat: Add support for Claude 3.5 Haiku model by @miurla in https://github.com/miurla/morphic/pull/374


**Full Changelog**: https://github.com/miurla/morphic/compare/v0.2.32...v0.2.33

## v0.2.32: v0.2.32

**Published**: 2024-10-26

## What's Changed

* feat: Add a model selector by @miurla in https://github.com/miurla/morphic/pull/371


**Full Changelog**: https://github.com/miurla/morphic/compare/v0.2.31...v0.2.32

## v0.2.31: v0.2.31

**Published**: 2024-10-24

## What's Changed
* Fix: Handle Text Composition and Prevent Premature Form Submission on Enter Key (#360) by @snowyday in https://github.com/miurla/morphic/pull/364
* Update README with warning by @miurla in https://github.com/miurla/morphic/pull/367
* Fix display of multiple tool calls by @miurla in https://github.com/miurla/morphic/pull/370

## New Contributors
* @snowyday made their first contribution in https://github.com/miurla/morphic/pull/364

**Full Changelog**: https://github.com/miurla/morphic/compare/v0.2.30...v0.2.31

## v0.2.30: v0.2.30

**Published**: 2024-10-13

## What's Changed
* fix: Update search depth parameter to accept string values by @miurla in https://github.com/miurla/morphic/pull/358
* Update bun.lockb by @miurla in https://github.com/miurla/morphic/pull/361
* feat: Support Tavily extract API by @miurla in https://github.com/miurla/morphic/pull/363


**Full Changelog**: https://github.com/miurla/morphic/compare/v0.2.29...v0.2.30

## v0.2.29: v0.2.29

**Published**: 2024-09-30

## What's Changed

**Improve Ollama & Groq Provider Support**

* Enhance AI provider validation to include Azure OpenAI by @miurla in https://github.com/miurla/morphic/pull/336
* chore: Update AI SDK and dependencies versions by @miurla in https://github.com/miurla/morphic/pull/348
* chore: Update empty screen messages by @miurla in https://github.com/miurla/morphic/pull/349
* feat: Improve Ollama support by @miurla in https://github.com/miurla/morphic/pull/352
* Refactoring the agent's workflow by @miurla in https://github.com/miurla/morphic/pull/354
* feat: Support Groq AI Provider by @miurla in https://github.com/miurla/morphic/pull/355
* fix: Call closing method for streamable values by @miurla in https://github.com/miurla/morphic/pull/356


**Full Changelog**: https://github.com/miurla/morphic/compare/v0.2.28...v0.2.29

## v0.2.28: v0.2.28

**Published**: 2024-09-04

## What's Changed

**Support Azure OpenAI provider**

* chore: Update readme and bug report template by @miurla in https://github.com/miurla/morphic/pull/324
* chore: Update the AI SDK to the latest version by @miurla in https://github.com/miurla/morphic/pull/328
* Support Azure OpenAI provider by @SzilvasiPeter in https://github.com/miurla/morphic/pull/327

## New Contributors
* @SzilvasiPeter made their first contribution in https://github.com/miurla/morphic/pull/327

**Full Changelog**: https://github.com/miurla/morphic/compare/v0.2.27...v0.2.28

## v0.2.27: v0.2.27

**Published**: 2024-08-26

## What's Changed

****Enhanced the SearXNG API****

* Update Twitter icon import and URL by @muhammedsaidckr in https://github.com/miurla/morphic/pull/319
* Local searxng advanced api by @casistack in https://github.com/miurla/morphic/pull/320
* chore: Update Card component in search results by @miurla in https://github.com/miurla/morphic/pull/323

## New Contributors
* @muhammedsaidckr made their first contribution in https://github.com/miurla/morphic/pull/319

**Full Changelog**: https://github.com/miurla/morphic/compare/v0.2.26...v0.2.27

## v0.2.26: v0.2.26

**Published**: 2024-08-15

## What's Changed

**Self-hosted meta search (SearXNG) Support**

* feat: Implement SearchXNG as alternative search backend by @casistack in https://github.com/miurla/morphic/pull/309
* chore: Update README and .env.local.example by @miurla in https://github.com/miurla/morphic/pull/311
* Fix SearXNG from SearchXNG and update SearXNG configuration by @miurla in https://github.com/miurla/morphic/pull/312


**Full Changelog**: https://github.com/miurla/morphic/compare/v0.2.25...v0.2.26

## v0.2.25: v0.2.25

**Published**: 2024-08-13

## What's Changed
* feat: Support the include_image_descriptions parameter of Tavily by @miurla in https://github.com/miurla/morphic/pull/307


**Full Changelog**: https://github.com/miurla/morphic/compare/v0.2.24...v0.2.25

## v0.2.24: v0.2.24

**Published**: 2024-08-12

## What's Changed

* chore: Update Search Skeleton and Rename it to Default Skeleton by @miurla in https://github.com/miurla/morphic/pull/302
* Local redis support by @casistack in https://github.com/miurla/morphic/pull/303
* chore: Modify README to include instructions for local Redis setup by @miurla in https://github.com/miurla/morphic/pull/305

## New Contributors
* @casistack made their first contribution in https://github.com/miurla/morphic/pull/303

**Full Changelog**: https://github.com/miurla/morphic/compare/v0.2.23...v0.2.24

## v0.2.23: v0.2.23

**Published**: 2024-08-01

## What's Changed
* Fix typos and remove unused imports by @TechNickAI in https://github.com/miurla/morphic/pull/282
* Sanitize image URLs in searchTool by @miurla in https://github.com/miurla/morphic/pull/285
* Add CodeBlock component for syntax highlighting by @miurla in https://github.com/miurla/morphic/pull/286

## New Contributors
* @TechNickAI made their first contribution in https://github.com/miurla/morphic/pull/282

**Full Changelog**: https://github.com/miurla/morphic/compare/v0.2.20...v0.2.23

## Note
- Skipped version: v0.2.21, 0.2.22

## v0.2.20: v0.2.20

**Published**: 2024-07-23

## What's Changed
* Update README by @miurla in https://github.com/miurla/morphic/pull/266
* Prevent messages from being sent multiple times by @miurla in https://github.com/miurla/morphic/pull/269
* Add LLaMA3.1 models to the verified models list by @miurla in https://github.com/miurla/morphic/pull/275


**Full Changelog**: https://github.com/miurla/morphic/compare/v0.2.19...v0.2.20

## v0.2.19: v0.2.19

**Published**: 2024-07-18

## What's Changed
* Update the README by @miurla in https://github.com/miurla/morphic/pull/258
* Update the value of OPENAI_API_MODEL in env.local.example by @miurla in https://github.com/miurla/morphic/pull/264
* Update empty screen headings and messages by @miurla in https://github.com/miurla/morphic/pull/265


**Full Changelog**: https://github.com/miurla/morphic/compare/v0.2.18...v0.2.19

## v0.2.18: v0.2.18

**Published**: 2024-07-14

## What's Changed
* chore: Update the AI SDK by @miurla in https://github.com/miurla/morphic/pull/255
* Fix and improve the error with the Google provider by @miurla in https://github.com/miurla/morphic/pull/254


**Full Changelog**: https://github.com/miurla/morphic/compare/v0.2.17...v0.2.18

## v0.2.17: v0.2.17

**Published**: 2024-07-02

## What's Changed
* fix: Update Chat component to fix search path condition by @miurla in https://github.com/miurla/morphic/pull/244
* Fix search path condition by @miurla in https://github.com/miurla/morphic/pull/245
* chore: Update inquiry system prompt by @miurla in https://github.com/miurla/morphic/pull/250
* chore: Update UI based on ANTHROPIC_API_KEY presence by @miurla in https://github.com/miurla/morphic/pull/251


**Full Changelog**: https://github.com/miurla/morphic/compare/v0.2.16...v0.2.17

## v0.2.16: v0.2.16

**Published**: 2024-06-22

## What's Changed

**Add Anthropic Provider support**

* fixed morphic.sh url by @wuhei in https://github.com/miurla/morphic/pull/236
* Update AI SDK to the latest versions and fix the accompanying errors by @miurla in https://github.com/miurla/morphic/pull/240
* feat: enhance tools to use 'tool' from 'ai' package by @kuizuo in https://github.com/miurla/morphic/pull/237
* Add Anthropic Support by @miurla in https://github.com/miurla/morphic/pull/239

## New Contributors
* @wuhei made their first contribution in https://github.com/miurla/morphic/pull/236
* @kuizuo made their first contribution in https://github.com/miurla/morphic/pull/237

**Full Changelog**: https://github.com/miurla/morphic/compare/v0.2.15...v0.2.16

## v0.2.15: v0.2.15

**Published**: 2024-06-17

## What's Changed
* fix: Update Components to Exclude Empty Data Usage by @miurla in https://github.com/miurla/morphic/pull/229
* fix: Update ChatPanel component to clear AI messages by @miurla in https://github.com/miurla/morphic/pull/230
* chore: nanoid is deprecated, use `generateId` instead by @ggallon in https://github.com/miurla/morphic/pull/231
* fix: Add generated answer section component by @miurla in https://github.com/miurla/morphic/pull/232

## New Contributors
* @ggallon made their first contribution in https://github.com/miurla/morphic/pull/231

**Full Changelog**: https://github.com/miurla/morphic/compare/v0.2.14...v0.2.15

## v0.2.14: v0.2.14

**Published**: 2024-06-15

## What's Changed
* Update the features in the README by @miurla in https://github.com/miurla/morphic/pull/218
* feat: Add support for including and excluding domains in search results by @miurla in https://github.com/miurla/morphic/pull/220
* chore: Update empty screen headings and messages by @miurla in https://github.com/miurla/morphic/pull/221
* Update researcher to explicitly cite source URLs using [number] format by @miurla in https://github.com/miurla/morphic/pull/222
* chore: Update the handleClear function to disable the button during generation by @miurla in https://github.com/miurla/morphic/pull/223
* baseUrl is deprecates, use baseURL by @charl-kruger in https://github.com/miurla/morphic/pull/224
* Fix the status being generated by @miurla in https://github.com/miurla/morphic/pull/225
* chore: Update the researcher's prompt by @miurla in https://github.com/miurla/morphic/pull/226
* chore: Update section component styling by @miurla in https://github.com/miurla/morphic/pull/227

## New Contributors
* @charl-kruger made their first contribution in https://github.com/miurla/morphic/pull/224

**Full Changelog**: https://github.com/miurla/morphic/compare/v0.2.13...v0.2.14

## v0.2.13: v0.2.13

**Published**: 2024-06-09

## What's Changed
Add Ollama support (Unstable)

* Update ai sdk to latest versions by @miurla in https://github.com/miurla/morphic/pull/210
* fix: Close the text stream by @miurla in https://github.com/miurla/morphic/pull/211
* feat(utils): Add Ollama support and improve error handling for models by @peperunas in https://github.com/miurla/morphic/pull/214
* Fix environment variable handling and Update README by @miurla in https://github.com/miurla/morphic/pull/216

## New Contributors
* @peperunas made their first contribution in https://github.com/miurla/morphic/pull/214

**Full Changelog**: https://github.com/miurla/morphic/compare/v0.2.12...v0.2.13

## v0.2.12: v0.2.12

**Published**: 2024-06-05

## What's Changed
* chore: Update Google Generative AI import in utils by @miurla in https://github.com/miurla/morphic/pull/195
* Refactor chat component and history container by @miurla in https://github.com/miurla/morphic/pull/197
* Refactor transformToolMessages by @miurla in https://github.com/miurla/morphic/pull/201
* Add AnswerSection component for displaying answers by @miurla in https://github.com/miurla/morphic/pull/202
* Add AppStateContext to manage and share isGenerating state by @miurla in https://github.com/miurla/morphic/pull/203
* Update component to use StreamableValue by @miurla in https://github.com/miurla/morphic/pull/205
* Update ai sdk to latest versions by @miurla in https://github.com/miurla/morphic/pull/206
* Update submit function to handle error cases and retry by @miurla in https://github.com/miurla/morphic/pull/208


**Full Changelog**: https://github.com/miurla/morphic/compare/v0.2.11...v0.2.12

## v0.2.11: v0.2.11

**Published**: 2024-06-01

## What's Changed
* Upgrade to the latest version of the AI SDK by @miurla in https://github.com/miurla/morphic/pull/193
* Support use of Google provider by @miurla in https://github.com/miurla/morphic/pull/191
* Use as a search engine by @miurla in https://github.com/miurla/morphic/pull/194


**Full Changelog**: https://github.com/miurla/morphic/compare/v0.2.10...v0.2.11

## v0.2.10: v0.2.10

**Published**: 2024-05-26

## What's Changed
* Refactor component to render LaTeX equations if patterns are found by @miurla in https://github.com/miurla/morphic/pull/171
* removed unused state and logic by @techcontributor in https://github.com/miurla/morphic/pull/172
* removed any types where possible by @techcontributor in https://github.com/miurla/morphic/pull/173
* Update issue templates by @miurla in https://github.com/miurla/morphic/pull/177
* Update writer.tsx to use OpenAI SDK by @miurla in https://github.com/miurla/morphic/pull/179
* Fix error handling in submit and writer functions by @miurla in https://github.com/miurla/morphic/pull/181


**Full Changelog**: https://github.com/miurla/morphic/compare/v0.2.9...v0.2.10

## v0.2.9: v0.2.9

**Published**: 2024-05-22

## What's Changed

 **Add Video Search Feature**

* Add 'X-With-Generated-Alt' header to retrieveTool API request by @miurla in https://github.com/miurla/morphic/pull/163
* prevented search submit when no input value by @techcontributor in https://github.com/miurla/morphic/pull/164
* Add Video Search Feature by @miurla in https://github.com/miurla/morphic/pull/165

## New Contributors
* @techcontributor made their first contribution in https://github.com/miurla/morphic/pull/164

**Full Changelog**: https://github.com/miurla/morphic/compare/v0.2.8...v0.2.9

## v0.2.8: v0.2.8

**Published**: 2024-05-19

## What's Changed
* Refactor retrieveTool to use jina.ai by @miurla in https://github.com/miurla/morphic/pull/157
* Refactor history component and add history list by @miurla in https://github.com/miurla/morphic/pull/158
* Add restriction to retrieve tool by @miurla in https://github.com/miurla/morphic/pull/160
* Refactor AI model usage by @miurla in https://github.com/miurla/morphic/pull/161


**Full Changelog**: https://github.com/miurla/morphic/compare/v0.2.7...v0.2.8

## v0.2.7: v0.2.7

**Published**: 2024-05-18

## What's Changed
* Add Tool to Retrieve Page Content from Specific URLs by @miurla in https://github.com/miurla/morphic/pull/155


**Full Changelog**: https://github.com/miurla/morphic/compare/v0.2.6...v0.2.7

## v0.2.6: v0.2.6

**Published**: 2024-05-15

## What's Changed
* Refactor researcher function and update tools by @miurla in https://github.com/miurla/morphic/pull/148
* feat: Add current date and time to prompt for researcher by @andrewginns in https://github.com/miurla/morphic/pull/149
* Refactor submit function to use latest messages by @miurla in https://github.com/miurla/morphic/pull/153
* Support LaTeX format by @miurla in https://github.com/miurla/morphic/pull/154


**Full Changelog**: https://github.com/miurla/morphic/compare/v0.2.5...v0.2.6

## v0.2.5: v0.2.5

**Published**: 2024-05-13

## What's Changed

**Update default model to gpt-4o**

* Update Twitter link in footer by @miurla in https://github.com/miurla/morphic/pull/138
* Revert "Update LICENSE" by @miurla in https://github.com/miurla/morphic/pull/139
* Make the share feature optional by @miurla in https://github.com/miurla/morphic/pull/142
* Fix handle sharing and copying chat links by @miurla in https://github.com/miurla/morphic/pull/143
* Update default model to gpt-4o by @miurla in https://github.com/miurla/morphic/pull/146


**Full Changelog**: https://github.com/miurla/morphic/compare/v0.2.4...v0.2.5

## v0.2.4: v0.2.4

**Published**: 2024-05-11

## What's Changed
* Title: [Fix #94] Updated AI Sdk by @DhrishP in https://github.com/miurla/morphic/pull/128
* feat: Add docker-compose file by @andrewginns in https://github.com/miurla/morphic/pull/131
* Remove logo from copilot by @miurla in https://github.com/miurla/morphic/pull/134
* Update LICENSE by @miurla in https://github.com/miurla/morphic/pull/137
* Enable sharing of search results by @miurla in https://github.com/miurla/morphic/pull/132

## New Contributors
* @DhrishP made their first contribution in https://github.com/miurla/morphic/pull/128
* @andrewginns made their first contribution in https://github.com/miurla/morphic/pull/131

**Full Changelog**: https://github.com/miurla/morphic/compare/v0.2.3...v0.2.4

## v0.2.3: v0.2.3

**Published**: 2024-05-09

## What's Changed
* Use Node.js runtime & move more components to RSC by @leerob in https://github.com/miurla/morphic/pull/5

## New Contributors
* @leerob made their first contribution in https://github.com/miurla/morphic/pull/5

**Full Changelog**: https://github.com/miurla/morphic/compare/v0.2.2...v0.2.3

## v0.2.2: v0.2.2

**Published**: 2024-05-08

## What's Changed
* Add clear history functionality by @miurla in https://github.com/miurla/morphic/pull/116
* Update example messages in empty-screen component by @miurla in https://github.com/miurla/morphic/pull/120
* fix history: chat maybe undefined by @superlbr in https://github.com/miurla/morphic/pull/119

## New Contributors
* @superlbr made their first contribution in https://github.com/miurla/morphic/pull/119

**Full Changelog**: https://github.com/miurla/morphic/compare/v0.2.1...v0.2.2

## v0.2.1: v0.2.1

**Published**: 2024-05-06

## What's Changed
* Enable auto expanding textarea by @albertdbio in https://github.com/miurla/morphic/pull/86
* Add check for 'answer' message type in AI state by @miurla in https://github.com/miurla/morphic/pull/111
* Update chat input styling and behavior by @miurla in https://github.com/miurla/morphic/pull/112


**Full Changelog**: https://github.com/miurla/morphic/compare/v0.2.0...v0.2.1

## v0.2.0: v0.2.0

**Published**: 2024-05-03

## What's Changed

* Chat history support by @miurla in https://github.com/miurla/morphic/pull/99
* Refactor message filtering by @miurla in https://github.com/miurla/morphic/pull/102
* Fix chat messages by @miurla in https://github.com/miurla/morphic/pull/103
* Update AI state with answer and type by @miurla in https://github.com/miurla/morphic/pull/104
* Add Upstash Redis configuration and update README by @miurla in https://github.com/miurla/morphic/pull/105
* Add search history support by @miurla in https://github.com/miurla/morphic/pull/106

**Full Changelog**: https://github.com/miurla/morphic/compare/v0.1.7...v0.2.0

## Note

**Upstash setup required from this change.**

## v0.1.7: v0.1.7

**Published**: 2024-04-27

## What's Changed

The update to the Next.js version fixed the 405 error that was occurring in the Vercel.

* Add roadmap for future development by @miurla in https://github.com/miurla/morphic/pull/72
* Add Cloudflare Pages deployment option to README.md by @ckt1031 in https://github.com/miurla/morphic/pull/80
* Update bun.lockb file by @miurla in https://github.com/miurla/morphic/pull/81
* Follow up to the previous PR "✔️ Anthropic model added" by @Nil2000 in https://github.com/miurla/morphic/pull/82
* Temporarily, remove specific provider configuration. by @miurla in https://github.com/miurla/morphic/pull/84
* Use 4.2.1 to fix 405 error by @albertdbio in https://github.com/miurla/morphic/pull/90
* Refactor form position in ChatPanel component by @miurla in https://github.com/miurla/morphic/pull/91

## New Contributors
* @ckt1031 made their first contribution in https://github.com/miurla/morphic/pull/80
* @Nil2000 made their first contribution in https://github.com/miurla/morphic/pull/82
* @albertdbio made their first contribution in https://github.com/miurla/morphic/pull/90

**Full Changelog**: https://github.com/miurla/morphic/compare/v0.1.6...v0.1.7

## v0.1.6: v0.1.6

**Published**: 2024-04-24

## What's Changed
* Fix typo in README.md by @miurla in https://github.com/miurla/morphic/pull/63
* Add error handling for image loading by @miurla in https://github.com/miurla/morphic/pull/65
* allow pointer events to pass through container by @iojcde in https://github.com/miurla/morphic/pull/67
* Remove unnecessary `use client` by @miurla in https://github.com/miurla/morphic/pull/69
* Update Morphic README with note by @miurla in https://github.com/miurla/morphic/pull/71
* Add rehype-external-links plugin to MemoizedReactMarkdown by @miurla in https://github.com/miurla/morphic/pull/73
* Add remark-gfm plugin to MemoizedReactMarkdown by @miurla in https://github.com/miurla/morphic/pull/74
* Update rehypePlugins and remarkPlugins in BotMessage component by @miurla in https://github.com/miurla/morphic/pull/75
* Fix Researcher by @miurla in https://github.com/miurla/morphic/pull/77

## New Contributors
* @iojcde made their first contribution in https://github.com/miurla/morphic/pull/67

**Full Changelog**: https://github.com/miurla/morphic/compare/v0.1.5...v0.1.6

## v0.1.5: v0.1.5

**Published**: 2024-04-20

## What's Changed
* Add note about project focus and OpenAI models by @miurla in https://github.com/miurla/morphic/pull/52
* Adding additional deploy option to README.md by @cosark in https://github.com/miurla/morphic/pull/56
* Revert "Adding additional deploy option to README.md" by @miurla in https://github.com/miurla/morphic/pull/59
* Add writer agent that support specific APIs by @miurla in https://github.com/miurla/morphic/pull/58

**Full Changelog**: https://github.com/miurla/morphic/compare/v0.1.4...v0.1.5

## v0.1.4: v0.1.4

**Published**: 2024-04-18

## What's Changed
* Update OpenAI import to @ai-sdk/openai by @miurla in https://github.com/miurla/morphic/pull/50
* Add collapsible feature by @miurla in https://github.com/miurla/morphic/pull/51


**Full Changelog**: https://github.com/miurla/morphic/compare/v0.1.3...v0.1.4

## v0.1.3: v0.1.3

**Published**: 2024-04-16

## What's Changed
* Add Dockerfile by @sammcj in https://github.com/miurla/morphic/pull/31
* Fix taskManager error handling by @miurla in https://github.com/miurla/morphic/pull/37
* Update language matching in query-suggestor and researcher agents by @miurla in https://github.com/miurla/morphic/pull/40
* Add language matching for response in inquire function by @miurla in https://github.com/miurla/morphic/pull/41
* Limit the number of messages by @miurla in https://github.com/miurla/morphic/pull/44
* Update next version in package.json by @miurla in https://github.com/miurla/morphic/pull/47

## New Contributors
* @sammcj made their first contribution in https://github.com/miurla/morphic/pull/31

**Full Changelog**: https://github.com/miurla/morphic/compare/v0.1.2...v0.1.3

## v0.1.2: v0.1.2

**Published**: 2024-04-13

## What's Changed
* Add metadataBase URL to metadata by @miurla in https://github.com/miurla/morphic/pull/22
* Update .env.local.example and README.md by @miurla in https://github.com/miurla/morphic/pull/23
* Refactor researcher function and handle search errors by @miurla in https://github.com/miurla/morphic/pull/28
* Allow users to customize the model by @winniesi in https://github.com/miurla/morphic/pull/29

## New Contributors
* @winniesi made their first contribution in https://github.com/miurla/morphic/pull/29

**Full Changelog**: https://github.com/miurla/morphic/compare/v0.1.1...v0.1.2

## v0.1.1: v0.1.1

**Published**: 2024-04-11

## What's Changed
* support openai base url configuration by @lizhe2004 in https://github.com/miurla/morphic/pull/9
* Update OpenAI Model to gpt-4-turbo by @miurla in https://github.com/miurla/morphic/pull/20
* Update opengraph-image by @miurla in https://github.com/miurla/morphic/pull/21

## New Contributors
* @lizhe2004 made their first contribution in https://github.com/miurla/morphic/pull/9

**Full Changelog**: https://github.com/miurla/morphic/compare/v0.1.0...v0.1.1

## v0.1.0: v0.1.0

**Published**: 2024-04-08

**Full Changelog**: https://github.com/miurla/morphic/commits/v0.1.0

