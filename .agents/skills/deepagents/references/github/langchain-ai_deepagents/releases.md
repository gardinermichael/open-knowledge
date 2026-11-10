# Releases: langchain-ai/deepagents

## langchain-quickjs==0.3.12: langchain-quickjs==0.3.12

**Published**: 2026-11-07

### Features

- Added support for disabling the per-call `timeout` ([#6958](https://github.com/langchain-ai/deepagents/pull/6958)).

### Bug Fixes

- Fixed interpreter shutdown blocking in `CodeInterpreterMiddleware.__del__` ([#7460](https://github.com/langchain-ai/deepagents/pull/7460)).
- Fixed resolution of nested schema `$ref`s in PTC signatures ([#7441](https://github.com/langchain-ai/deepagents/pull/7441)).

[Full changelog](https://github.com/langchain-ai/deepagents/blob/6f9e49481687011210a71e4a9731ecba7feb82e7/libs/partners/quickjs/CHANGELOG.md)

---

**Special thanks** to everyone who reported the issues addressed in this release: @radu-mocanu ([#6397](https://github.com/langchain-ai/deepagents/issues/6397)), @AdamBurchett ([#6459](https://github.com/langchain-ai/deepagents/issues/6459)), @DABH ([#6450](https://github.com/langchain-ai/deepagents/issues/6450))

Internal maintainers: @byhow, @ccurme, @hntrl, @mdrxy, @thushanth-bengre-langchain

Released by: @hntrl

<details>
<summary>Git log since langchain-quickjs==0.3.11</summary>

This commit history includes changes to this package. The most recent commit is at the top; older commits follow below.

- [`6f9e494`](https://github.com/langchain-ai/deepagents/commit/6f9e49481687011210a71e4a9731ecba7feb82e7) release(langchain-quickjs): 0.3.12 (#7438)
- [`6578cc1`](https://github.com/langchain-ai/deepagents/commit/6578cc10b3fe5f81d423921b0ff8c82f63bb609f) fix(quickjs): don't block interpreter shutdown in CodeInterpreterMiddleware.__del__ (#7460)
- [`8827787`](https://github.com/langchain-ai/deepagents/commit/882778779697a4e8e4dec5094ee3db8bf2b927db) chore(deps): raise dependency minimums (#7577)
- [`9ea3f19`](https://github.com/langchain-ai/deepagents/commit/9ea3f1912abd8b7eecb504d78ef99fcf279bf561) release(deepagents): 0.7.34 (#7569)
- [`57b83eb`](https://github.com/langchain-ai/deepagents/commit/57b83eb97725bf2b4249c76872d7484a06d9a7cd) release(deepagents): 0.7.33 (#7369)
- [`db8b7c3`](https://github.com/langchain-ai/deepagents/commit/db8b7c3b99d1f2fb7622d2495aa11f52bcb3bef6) chore(deps): raise dependency minimums (#7564)
- [`119aaea`](https://github.com/langchain-ai/deepagents/commit/119aaeab7bd9123f1e869d2314a15b0b1c53884d) chore(deps): bump langchain-core minimum to 1.7.6 in sdk (#7563)
- [`ca9140b`](https://github.com/langchain-ai/deepagents/commit/ca9140bd55f82788427faf9ad550dc257c1cfc37) chore(deps): require `langchain-core&gt;=1.7.5` and `langchain&gt;=1.4.9` in `deepagents` (#7544)
- [`3d6759e`](https://github.com/langchain-ai/deepagents/commit/3d6759e8af7b979907d6def3135d118d2376c8c7) chore(deps): bump `langchain-core` to 1.7.5 and `langchain` to 1.4.9 in lockfiles (#7543)
- [`5829691`](https://github.com/langchain-ai/deepagents/commit/5829691de8f43d201f9534fb731643223c0bbccc) fix(quickjs): resolve nested schema `$ref`s in PTC signatures (#7441)
- [`1f9d08c`](https://github.com/langchain-ai/deepagents/commit/1f9d08c33f2f4e8cb236897342f8f3d6d1840220) chore(deps): raise `quickjs-rs` minimum to 0.2.6 in `langchain-quickjs` (#7505)
- [`8aa5761`](https://github.com/langchain-ai/deepagents/commit/8aa5761de761818f5ef25455c6dbc93e871141bc) chore(deps): raise dependency minimums for `all` (#7504)
- [`c3b29aa`](https://github.com/langchain-ai/deepagents/commit/c3b29aaddca837a29e338be618afd10562913761) docs(repo): link package readmes to their changelogs (#7336)
- [`9ba99a1`](https://github.com/langchain-ai/deepagents/commit/9ba99a14a5f9b289aa1133ce0f58ff3210a075b3) chore(deps): bump pyasn1 from 0.6.4 to 0.6.5 in /libs/partners/quickjs (#7444)
- [`6dd4177`](https://github.com/langchain-ai/deepagents/commit/6dd417788071adfe36a8db11228c15542d4ad554) chore(deps): raise dependency minimums for `all` (#7470)
- [`287fab3`](https://github.com/langchain-ai/deepagents/commit/287fab3169602d326674a1c4892810efef183710) docs(quickjs): describe the `timeout` as a VM execution budget in the README (#7440)
- [`3b992d2`](https://github.com/langchain-ai/deepagents/commit/3b992d2d8dfa3bade91e612b2d6ef2dfb57603b6) feat(quickjs): allow disabling the per-call `timeout` (#6958)
- [`fd214c6`](https://github.com/langchain-ai/deepagents/commit/fd214c6e856595cd1337ae06da6fb26cdc4684ac) chore(deps): raise dependency minimums for `all` (#7412)
- [`66e2246`](https://github.com/langchain-ai/deepagents/commit/66e2246e3fa1e7b745868174aa716913d0ef08ce) chore(deps): raise dependency minimums for `all` (#7411)
- [`3efa098`](https://github.com/langchain-ai/deepagents/commit/3efa098130d6670fe713f841072bc11ff40545da) chore(deps): raise dependency minimums for `all` (#7378)
- [`513dfb5`](https://github.com/langchain-ai/deepagents/commit/513dfb5c341001c399e94ed3e9d3014e246d5805) chore(deps): raise dependency minimums for `all` (#7362)
- [`cc42228`](https://github.com/langchain-ai/deepagents/commit/cc4222851b4c1dd0325397385ab5d2c0b363378b) chore(deps): raise dependency minimums for `all` (#7330)
- [`58e6b7e`](https://github.com/langchain-ai/deepagents/commit/58e6b7e33404cd4166c1cce06434136d4e870867) chore(deps): raise dependency minimums for `all` (#7311)

</details>

## deepagents==0.7.34: deepagents==0.7.34

**Published**: 2026-11-05

### Bug Fixes

- Fixed summarization cutoff handling by anchoring it to the message ID ([#7567](https://github.com/langchain-ai/deepagents/pull/7567)).

[Full changelog](https://github.com/langchain-ai/deepagents/blob/9ea3f1912abd8b7eecb504d78ef99fcf279bf561/libs/deepagents/CHANGELOG.md)

---

Internal maintainers: @sera-wi

Released by: @mdrxy

<details>
<summary>Git log since deepagents==0.7.33</summary>

This commit history includes changes to this package. The most recent commit is at the top; older commits follow below.

- [`9ea3f19`](https://github.com/langchain-ai/deepagents/commit/9ea3f1912abd8b7eecb504d78ef99fcf279bf561) release(deepagents): 0.7.34 (#7569)
- [`de0bef7`](https://github.com/langchain-ai/deepagents/commit/de0bef7770a3e30a3a7fea2f333ef68a2e85ef28) fix(sdk): anchor summarization cutoff by message id (#7567)

</details>

## deepagents==0.7.33: deepagents==0.7.33

**Published**: 2026-11-05

### Features

- Raise errors on model refusals by default and report subagent refusals to the parent agent ([#7512](https://github.com/langchain-ai/deepagents/pull/7512)).
- Add notification metadata to async subagent notifications ([#7334](https://github.com/langchain-ai/deepagents/pull/7334)).
- Record the `task` call ID on subagent checkpoints ([#7509](https://github.com/langchain-ai/deepagents/pull/7509)).

### Bug Fixes

- Restrict the Python `grep` fallback to the requested file and clip long result lines to a window around the match ([#7539](https://github.com/langchain-ai/deepagents/pull/7539), [#7526](https://github.com/langchain-ai/deepagents/pull/7526)).
- Report failed compaction with an error status ([#7538](https://github.com/langchain-ai/deepagents/pull/7538)).
- Promote rubric middleware out of beta ([#7368](https://github.com/langchain-ai/deepagents/pull/7368)).

[Full changelog](https://github.com/langchain-ai/deepagents/blob/57b83eb97725bf2b4249c76872d7484a06d9a7cd/libs/deepagents/CHANGELOG.md)

---

**Special thanks** to everyone who reported the issues addressed in this release: @yang0228 ([#7405](https://github.com/langchain-ai/deepagents/issues/7405)), @LucasGois1 ([#7426](https://github.com/langchain-ai/deepagents/issues/7426))

Internal maintainers: @ccurme, @hntrl, @mdrxy, @sera-wi, @thushanth-bengre-langchain

Released by: @ccurme

<details>
<summary>Git log since deepagents==0.7.32</summary>

This commit history includes changes to this package. The most recent commit is at the top; older commits follow below.

- [`57b83eb`](https://github.com/langchain-ai/deepagents/commit/57b83eb97725bf2b4249c76872d7484a06d9a7cd) release(deepagents): 0.7.33 (#7369)
- [`db8b7c3`](https://github.com/langchain-ai/deepagents/commit/db8b7c3b99d1f2fb7622d2495aa11f52bcb3bef6) chore(deps): raise dependency minimums (#7564)
- [`119aaea`](https://github.com/langchain-ai/deepagents/commit/119aaeab7bd9123f1e869d2314a15b0b1c53884d) chore(deps): bump langchain-core minimum to 1.7.6 in sdk (#7563)
- [`0fd438a`](https://github.com/langchain-ai/deepagents/commit/0fd438a4b952efcc13a4f599d2d7699dd6966f2d) feat(sdk): raise on model refusals by default and report subagent refusals to the parent (#7512)
- [`98ff834`](https://github.com/langchain-ai/deepagents/commit/98ff83427cd8dbda3fd51c1f7135217bf2544491) fix(sdk): clip long `grep` lines to a window around the match (#7526)
- [`ca9140b`](https://github.com/langchain-ai/deepagents/commit/ca9140bd55f82788427faf9ad550dc257c1cfc37) chore(deps): require `langchain-core&gt;=1.7.5` and `langchain&gt;=1.4.9` in `deepagents` (#7544)
- [`3d6759e`](https://github.com/langchain-ai/deepagents/commit/3d6759e8af7b979907d6def3135d118d2376c8c7) chore(deps): bump `langchain-core` to 1.7.5 and `langchain` to 1.4.9 in lockfiles (#7543)
- [`213f034`](https://github.com/langchain-ai/deepagents/commit/213f0345fbd2dc1b09b9595028df9cc8682cc270) feat(sdk): record the `task` call id on subagent checkpoints (#7509)
- [`3a0c7bb`](https://github.com/langchain-ai/deepagents/commit/3a0c7bb935fefb5d283f0799ef4551add6c2a361) fix(sdk): restrict Python grep fallback to the requested file (#7539)
- [`2c11c92`](https://github.com/langchain-ai/deepagents/commit/2c11c92ee2f47e4ce62e7e6510a77b0f2ad6b638) fix(sdk): report failed compaction with error status (#7538)
- [`8aa5761`](https://github.com/langchain-ai/deepagents/commit/8aa5761de761818f5ef25455c6dbc93e871141bc) chore(deps): raise dependency minimums for `all` (#7504)
- [`c3b29aa`](https://github.com/langchain-ai/deepagents/commit/c3b29aaddca837a29e338be618afd10562913761) docs(repo): link package readmes to their changelogs (#7336)
- [`0bab7d2`](https://github.com/langchain-ai/deepagents/commit/0bab7d29714741bb6d9866cf67e3fd74902317af) docs(repo): align README resource coverage (#7353)
- [`785eb5e`](https://github.com/langchain-ai/deepagents/commit/785eb5e71f0b835723ce9f9a6669c1f758ff10a8) chore(deps): bump pyasn1 from 0.6.4 to 0.6.5 in /libs/deepagents (#7449)
- [`6dd4177`](https://github.com/langchain-ai/deepagents/commit/6dd417788071adfe36a8db11228c15542d4ad554) chore(deps): raise dependency minimums for `all` (#7470)
- [`64de801`](https://github.com/langchain-ai/deepagents/commit/64de801918612668a591c486c65407baf0f96f02) refactor(sdk): label the rubric revision message with `add_notification_metadata` (#7415)
- [`b50df8e`](https://github.com/langchain-ai/deepagents/commit/b50df8e5ebfa819cedfafa12e4dcb0fd407faea0) refactor(sdk): label the pinned skill message with `add_notification_metadata` (#7414)
- [`5397582`](https://github.com/langchain-ai/deepagents/commit/5397582a5fb273c0fd1360f022931f0f0ec94a11) refactor(sdk): label the summary message with `add_notification_metadata` (#7413)
- [`fd214c6`](https://github.com/langchain-ai/deepagents/commit/fd214c6e856595cd1337ae06da6fb26cdc4684ac) chore(deps): raise dependency minimums for `all` (#7412)
- [`6b9e9c9`](https://github.com/langchain-ai/deepagents/commit/6b9e9c9f9088deab6d1c3f12c3c9626605d803a2) feat(sdk): add notification metadata to async subagent notifications (#7334)
- [`66e2246`](https://github.com/langchain-ai/deepagents/commit/66e2246e3fa1e7b745868174aa716913d0ef08ce) chore(deps): raise dependency minimums for `all` (#7411)
- [`3efa098`](https://github.com/langchain-ai/deepagents/commit/3efa098130d6670fe713f841072bc11ff40545da) chore(deps): raise dependency minimums for `all` (#7378)
- [`98773a7`](https://github.com/langchain-ai/deepagents/commit/98773a73843421f85a2113e6c3b0262f53d9bcd6) fix(sdk): promote rubric middleware out of beta (#7368)
- [`513dfb5`](https://github.com/langchain-ai/deepagents/commit/513dfb5c341001c399e94ed3e9d3014e246d5805) chore(deps): raise dependency minimums for `all` (#7362)
- [`cc42228`](https://github.com/langchain-ai/deepagents/commit/cc4222851b4c1dd0325397385ab5d2c0b363378b) chore(deps): raise dependency minimums for `all` (#7330)
- [`58e6b7e`](https://github.com/langchain-ai/deepagents/commit/58e6b7e33404cd4166c1cce06434136d4e870867) chore(deps): raise dependency minimums for `all` (#7311)
- [`af963db`](https://github.com/langchain-ai/deepagents/commit/af963db87216d9963e404727e944d3554e16d048) chore(deps): raise dependency minimums for `all` (#7306)
- [`0272b39`](https://github.com/langchain-ai/deepagents/commit/0272b39127251dd020dfd0b9657f78b08acdcfb2) docs(infra): backfill PR links dropped from curated changelogs (#7305)
- [`50646c2`](https://github.com/langchain-ai/deepagents/commit/50646c22f505fb1ae9352b14cd97b2a3c2d0f2db) chore(deps): raise dependency minimums for `all` (#7293)

</details>

## deepagents-code==0.2.5: deepagents-code==0.2.5

**Published**: 2026-11-05

### Bug Fixes

- Size the compaction input budget to match the selected model. ([#7545](https://github.com/langchain-ai/deepagents/pull/7545))
- Preserve cut-off reply handling when `ModelRefusalMiddleware` raises an error. ([#7548](https://github.com/langchain-ai/deepagents/pull/7548))
- Defer in-app `uv` installations on Windows. ([#7518](https://github.com/langchain-ai/deepagents/pull/7518))

[Full changelog](https://github.com/langchain-ai/deepagents/blob/efa9f5364b83e9367ea57d9c21b15b4d81fdcb7a/libs/code/CHANGELOG.md)

---

Thanks to our community contributors: @roydonsequeira

**Special thanks** to everyone who reported the issues addressed in this release: @roydonsequeira ([#7266](https://github.com/langchain-ai/deepagents/issues/7266))

Internal maintainers: @ccurme, @mdrxy, @thushanth-bengre-langchain, @vladislav-nechakhin

Released by: @mdrxy

<details>
<summary>Git log since deepagents-code==0.2.4</summary>

This commit history includes changes to this package. The most recent commit is at the top; older commits follow below.

- [`efa9f53`](https://github.com/langchain-ai/deepagents/commit/efa9f5364b83e9367ea57d9c21b15b4d81fdcb7a) release(deepagents-code): 0.2.5 (#7524)
- [`2f05e1d`](https://github.com/langchain-ai/deepagents/commit/2f05e1d3c0d069063aa94180d63a090b68f37d7a) chore(deps): bump `deepagents` pin in `deepagents-code` to 0.7.34 (#7572)
- [`9ea3f19`](https://github.com/langchain-ai/deepagents/commit/9ea3f1912abd8b7eecb504d78ef99fcf279bf561) release(deepagents): 0.7.34 (#7569)
- [`386b150`](https://github.com/langchain-ai/deepagents/commit/386b150e717a8effe3a49bdf38b9f7ea812dadb4) chore(deps): bump `deepagents` pin in `deepagents-code` to 0.7.33 (#7568)
- [`57b83eb`](https://github.com/langchain-ai/deepagents/commit/57b83eb97725bf2b4249c76872d7484a06d9a7cd) release(deepagents): 0.7.33 (#7369)
- [`db8b7c3`](https://github.com/langchain-ai/deepagents/commit/db8b7c3b99d1f2fb7622d2495aa11f52bcb3bef6) chore(deps): raise dependency minimums (#7564)
- [`119aaea`](https://github.com/langchain-ai/deepagents/commit/119aaeab7bd9123f1e869d2314a15b0b1c53884d) chore(deps): bump langchain-core minimum to 1.7.6 in sdk (#7563)
- [`f95c06f`](https://github.com/langchain-ai/deepagents/commit/f95c06f4f2bfa398d23316c6713c2faeffdfe976) chore(deps): bump `filelock` to 4.2.x and `zod` to 4.6.x for security fixes (#7559)
- [`6cd647b`](https://github.com/langchain-ai/deepagents/commit/6cd647ba201d4612aeaa2d49d9588bd6e46ce250) test(code): judge auto-compaction by the summarization event (#7553)
- [`a9a0eb1`](https://github.com/langchain-ai/deepagents/commit/a9a0eb116de959cd7210d3517102e95b3e035dcd) fix(code): keep cut-off reply handling when `ModelRefusalMiddleware` raises (#7548)
- [`f1e4ac1`](https://github.com/langchain-ai/deepagents/commit/f1e4ac1592530b320ff00f73a858ba606ef00269) chore(deps): raise dependency minimums for `all` (#7536)
- [`24966b1`](https://github.com/langchain-ai/deepagents/commit/24966b1f9fad152f29d225c677b606cb277af171) chore(deps): require `langchain-core&gt;=1.7.5` in `deepagents-code` (#7547)
- [`89c8634`](https://github.com/langchain-ai/deepagents/commit/89c86340c78d06d932c95df4f70259d8ca8dbca6) fix(code): size compaction input budget against selected model (#7545)
- [`ca9140b`](https://github.com/langchain-ai/deepagents/commit/ca9140bd55f82788427faf9ad550dc257c1cfc37) chore(deps): require `langchain-core&gt;=1.7.5` and `langchain&gt;=1.4.9` in `deepagents` (#7544)
- [`3d6759e`](https://github.com/langchain-ai/deepagents/commit/3d6759e8af7b979907d6def3135d118d2376c8c7) chore(deps): bump `langchain-core` to 1.7.5 and `langchain` to 1.4.9 in lockfiles (#7543)
- [`c4e2811`](https://github.com/langchain-ai/deepagents/commit/c4e2811312718e98b1465b6e67c34997ca72c793) fix(code): defer in-app uv installs on Windows (#7518)

</details>

## deepagents-code==0.2.4: deepagents-code==0.2.4

**Published**: 2026-11-02

### Features

- Mark interrupt cancellation messages with `lc_source` ([#7501](https://github.com/langchain-ai/deepagents/pull/7501)).

### Bug Fixes

- Clarify workspace conflicts, MCP login failures, and disabled Slack MCP access during login ([#7499](https://github.com/langchain-ai/deepagents/pull/7499), [#7498](https://github.com/langchain-ai/deepagents/pull/7498)).
- Clarify how `/reload` refreshes MCP configuration ([#7497](https://github.com/langchain-ai/deepagents/pull/7497)).

[Full changelog](https://github.com/langchain-ai/deepagents/blob/88ad30d69621afb8e2c05c918c73d19a6efb9f45/libs/code/CHANGELOG.md)

---

Internal maintainers: @byhow, @hntrl, @mdrxy, @sera-wi

Released by: @mdrxy

<details>
<summary>Git log since deepagents-code==0.2.3</summary>

This commit history includes changes to this package. The most recent commit is at the top; older commits follow below.

- [`88ad30d`](https://github.com/langchain-ai/deepagents/commit/88ad30d69621afb8e2c05c918c73d19a6efb9f45) release(deepagents-code): 0.2.4 (#7500)
- [`1f9d08c`](https://github.com/langchain-ai/deepagents/commit/1f9d08c33f2f4e8cb236897342f8f3d6d1840220) chore(deps): raise `quickjs-rs` minimum to 0.2.6 in `langchain-quickjs` (#7505)
- [`8aa5761`](https://github.com/langchain-ai/deepagents/commit/8aa5761de761818f5ef25455c6dbc93e871141bc) chore(deps): raise dependency minimums for `all` (#7504)
- [`1546f32`](https://github.com/langchain-ai/deepagents/commit/1546f327db2d1a7890809cb5eaf778a8625b6ac8) chore(deps): require `langchain-core&gt;=1.7.2` in `deepagents-code` (#7502)
- [`08ef3f6`](https://github.com/langchain-ai/deepagents/commit/08ef3f65b45b2f23e5e7a1af197851a28fbe98a9) feat(code): mark the interrupt cancellation message with `lc_source` (#7501)
- [`a783c14`](https://github.com/langchain-ai/deepagents/commit/a783c149c7655d45e5e0fcb09a6ff0a3c15ca516) fix(code): explain workspace conflicts and MCP login failures (#7499)
- [`d29e85f`](https://github.com/langchain-ai/deepagents/commit/d29e85f5d2f69f39643c78279e931d610b42d3b4) fix(code): clarify MCP configuration refresh in `/reload` (#7497)
- [`7618f1f`](https://github.com/langchain-ai/deepagents/commit/7618f1fedffd1c8f42e0781eb5eb947c08f466fa) fix(code): explain disabled Slack MCP access on login (#7498)

</details>

## deepagents-code==0.2.3: deepagents-code==0.2.3

**Published**: 2026-11-02

### Features

- Defer loading MCP tool schemas with provider-native tool search ([#7304](https://github.com/langchain-ai/deepagents/pull/7304)).
- Include the official marketplace by default ([#7364](https://github.com/langchain-ai/deepagents/pull/7364)).
- Require an explicit or saved model selection ([#7365](https://github.com/langchain-ai/deepagents/pull/7365)).
- Apply hook command rewrites before requesting tool approval ([#7384](https://github.com/langchain-ai/deepagents/pull/7384)).
- Support `DEEPAGENTS_CODE_LANGSMITH_PROJECT_URL` and cache rejected project lookups ([#7332](https://github.com/langchain-ai/deepagents/pull/7332)).
- Show MCP tool counts in `/tools` headers ([#7327](https://github.com/langchain-ai/deepagents/pull/7327)).

### Bug Fixes

- Block auto mode when its classifier cannot be resolved, and disclose inherited classifier model switches ([#7346](https://github.com/langchain-ai/deepagents/pull/7346), [#7351](https://github.com/langchain-ai/deepagents/pull/7351)).
- Skip subagent `AGENTS.md` files that are not UTF-8 instead of failing startup ([#7361](https://github.com/langchain-ai/deepagents/pull/7361)).
- Surface model replies that stop before producing output ([#7333](https://github.com/langchain-ai/deepagents/pull/7333)).
- Preserve reasoning in remote message chunks ([#7341](https://github.com/langchain-ai/deepagents/pull/7341)).
- Enable Claude prompt caching on OpenRouter ([#7358](https://github.com/langchain-ai/deepagents/pull/7358)).
- Confirm auto-update success only after the new version loads, and reuse fresh update information during explicit updates ([#7344](https://github.com/langchain-ai/deepagents/pull/7344), [#7355](https://github.com/langchain-ai/deepagents/pull/7355)).
- Refresh the subscription model lineup and update stale model recommendations and the `Ctrl+R` hint ([#7340](https://github.com/langchain-ai/deepagents/pull/7340), [#7350](https://github.com/langchain-ai/deepagents/pull/7350)).
- Make `/cost` open the token and cost modal ([#7363](https://github.com/langchain-ai/deepagents/pull/7363)).
- End typing deferral when a prompt is submitted ([#7335](https://github.com/langchain-ai/deepagents/pull/7335)).
- Correct coding-agent Git trace attribution ([#7117](https://github.com/langchain-ai/deepagents/pull/7117)).
- Clarify how to recover from credential setup issues ([#7347](https://github.com/langchain-ai/deepagents/pull/7347)).
- Clarify Python update instructions ([#7343](https://github.com/langchain-ai/deepagents/pull/7343)).
- Collapse the ChatGPT sign-in browser URL by default ([#7348](https://github.com/langchain-ai/deepagents/pull/7348)).
- Delay tool-group progress indicators to avoid flashing ([#7357](https://github.com/langchain-ai/deepagents/pull/7357)).
- Remove the advanced configuration tip from the empty MCP modal ([#7356](https://github.com/langchain-ai/deepagents/pull/7356)).

### Performance Improvements

- Remove redundant MCP startup probes ([#7303](https://github.com/langchain-ai/deepagents/pull/7303)).
- Reuse Git status when detecting the branch for local context ([#7299](https://github.com/langchain-ai/deepagents/pull/7299)).

[Full changelog](https://github.com/langchain-ai/deepagents/blob/6884d39e1a28d6bf8294719486719b7eb8e0657d/libs/code/CHANGELOG.md)

---

Thanks to our community contributors: @JessYanCoding

**Special thanks** to everyone who reported the issues addressed in this release: @JessYanCoding ([#7360](https://github.com/langchain-ai/deepagents/issues/7360))

Internal maintainers: @jkennedyvz, @mdrxy

Released by: @mdrxy

<details>
<summary>Git log since deepagents-code==0.2.2</summary>

This commit history includes changes to this package. The most recent commit is at the top; older commits follow below.

- [`6884d39`](https://github.com/langchain-ai/deepagents/commit/6884d39e1a28d6bf8294719486719b7eb8e0657d) release(deepagents-code): 0.2.3 (#7300)
- [`4934d74`](https://github.com/langchain-ai/deepagents/commit/4934d74e427cb5fc141229cc90f2a8895e24cb7e) fix(code): skip a subagent `AGENTS.md` that is not UTF-8 instead of failing startup (#7361)
- [`399f465`](https://github.com/langchain-ai/deepagents/commit/399f465c52a968a874700f7ae63a99fd860c189e) test(repo): prepare Anthropic streaming fixtures (#7387)
- [`aabaf95`](https://github.com/langchain-ai/deepagents/commit/aabaf9509ab7f397c884813dba75187a74700951) fix(code): reconcile coding-agent git trace attribution (#7117)
- [`8117715`](https://github.com/langchain-ai/deepagents/commit/81177151d9002cabff40601f73ae73961dc11246) feat(code): apply hook command rewrites before tool approval (#7384)
- [`98de5eb`](https://github.com/langchain-ai/deepagents/commit/98de5eb6ec5f8471f6919455466a77da4dd88a54) feat(code): require an explicit or saved model selection (#7365)
- [`547603b`](https://github.com/langchain-ai/deepagents/commit/547603bf4b8bb8ef02e12764c5ca90b41ac2d839) fix(code): update stale model recommendations and `Ctrl+R` hint (#7350)
- [`b26e78f`](https://github.com/langchain-ai/deepagents/commit/b26e78f570ccf2b3d14296b265972055e42f702c) fix(code): preserve reasoning in remote message chunks (#7341)
- [`97c58b3`](https://github.com/langchain-ai/deepagents/commit/97c58b332b1da6431385c6a8e0fa7c08e267862d) chore(deps): bump pyasn1 from 0.6.4 to 0.6.5 in /libs/code (#7450)
- [`d23799b`](https://github.com/langchain-ai/deepagents/commit/d23799b0525796474c8e3d5546dc68b6a421e1b1) fix(code): open the token and cost modal with `/cost` (#7363)
- [`eaeb71b`](https://github.com/langchain-ai/deepagents/commit/eaeb71bb59952061a6c5ae59c98f5b2888583152) fix(code): collapse ChatGPT sign-in browser URL by default (#7348)
- [`6d4ce0a`](https://github.com/langchain-ai/deepagents/commit/6d4ce0af4b46630853423a214459a1a5da846c03) fix(code): reuse fresh known updates in explicit update (#7355)
- [`ab57336`](https://github.com/langchain-ai/deepagents/commit/ab5733605b4398e3be26f7f2b2cfc768f71585b6) fix(code): confirm auto-update success only after loading new version (#7344)
- [`0f803ba`](https://github.com/langchain-ai/deepagents/commit/0f803ba3296fcc3ce702395a424d71d743ddd99c) feat(code): include the official marketplace by default (#7364)
- [`1e178f1`](https://github.com/langchain-ai/deepagents/commit/1e178f1b053d0d4f4953c0d1a8aba9ff10a2e5fb) fix(code): clarify credential setup recovery (#7347)
- [`9a6bc92`](https://github.com/langchain-ai/deepagents/commit/9a6bc92312293d95594bf6bd473b35679f6d7263) fix(code): end typing deferral when submitting a prompt (#7335)
- [`3c7cd4b`](https://github.com/langchain-ai/deepagents/commit/3c7cd4bc4e857849e21ebca287065e590157ff55) fix(code): disclose inherited classifier model switches (#7351)
- [`f129ae4`](https://github.com/langchain-ai/deepagents/commit/f129ae4703d4b01481cd2511b16aeddeda8ccb03) fix(code): remove advanced config tip from empty MCP modal (#7356)
- [`cec8d8e`](https://github.com/langchain-ai/deepagents/commit/cec8d8e2bcbb7a04b9fecd4f63d2c8c50c5205a0) fix(code): clarify Python update instructions (#7343)
- [`6dd4177`](https://github.com/langchain-ai/deepagents/commit/6dd417788071adfe36a8db11228c15542d4ad554) chore(deps): raise dependency minimums for `all` (#7470)
- [`6b317a4`](https://github.com/langchain-ai/deepagents/commit/6b317a4a8e0e64e6ab6524b310bff70fe71e9eab) fix(code): block auto mode when its classifier cannot resolve (#7346)
- [`c3d0080`](https://github.com/langchain-ai/deepagents/commit/c3d00807e7c5386a6478d663dfd8be79443a2de7) fix(code): refresh subscription model lineup (#7340)
- [`cc93a9e`](https://github.com/langchain-ai/deepagents/commit/cc93a9ec1f7ac72bd8191c5fa69ed7718d51e226) style(code): put cost first in breakdown modal title (#7352)
- [`6a8d1e9`](https://github.com/langchain-ai/deepagents/commit/6a8d1e9b8223f9143175e01c19ee34c62647aec2) chore(deps): patch Python dependency security advisories (#7430)
- [`fd214c6`](https://github.com/langchain-ai/deepagents/commit/fd214c6e856595cd1337ae06da6fb26cdc4684ac) chore(deps): raise dependency minimums for `all` (#7412)
- [`66e2246`](https://github.com/langchain-ai/deepagents/commit/66e2246e3fa1e7b745868174aa716913d0ef08ce) chore(deps): raise dependency minimums for `all` (#7411)
- [`318731d`](https://github.com/langchain-ai/deepagents/commit/318731d48ddee9466d49c97532224508e07f5c97) chore(deps): bump langgraph-api from 0.16.6 to 0.16.9 in /libs/code (#7388)
- [`3efa098`](https://github.com/langchain-ai/deepagents/commit/3efa098130d6670fe713f841072bc11ff40545da) chore(deps): raise dependency minimums for `all` (#7378)
- [`cd24d8c`](https://github.com/langchain-ai/deepagents/commit/cd24d8c52849fdb24e0ac2cab2f909f8df6ba5ca) fix(code): delay tool group progress to avoid flashing (#7357)
- [`417af26`](https://github.com/langchain-ai/deepagents/commit/417af26f694d7d65f82e7f89e037c4565a47f955) fix(code): enable Claude prompt caching on OpenRouter (#7358)
- [`513dfb5`](https://github.com/langchain-ai/deepagents/commit/513dfb5c341001c399e94ed3e9d3014e246d5805) chore(deps): raise dependency minimums for `all` (#7362)
- [`4ff9266`](https://github.com/langchain-ai/deepagents/commit/4ff926659cfb1281b01d6821052135cef151dde3) fix(code): surface model replies that stop before producing output (#7333)
- [`f9cbdba`](https://github.com/langchain-ai/deepagents/commit/f9cbdbaebe9a07c3024d389bbaa2cabde4fc3a7b) feat(code): defer MCP schemas with provider-native tool search (#7304)
- [`028439e`](https://github.com/langchain-ai/deepagents/commit/028439ef1bfdca7207713d018fe9b476ba1f996e) feat(code): support `DEEPAGENTS_CODE_LANGSMITH_PROJECT_URL` and cache rejected project lookups (#7332)
- [`d39f9c4`](https://github.com/langchain-ai/deepagents/commit/d39f9c4eb5b006404bb2090d6a889fa2e023c078) chore(deps): bump msgpack from 1.2.3 to 1.2.4 in /libs/code (#7329)
- [`cc42228`](https://github.com/langchain-ai/deepagents/commit/cc4222851b4c1dd0325397385ab5d2c0b363378b) chore(deps): raise dependency minimums for `all` (#7330)
- [`93143ba`](https://github.com/langchain-ai/deepagents/commit/93143ba1b501bd94307f6e7009f8abca11abcd9c) feat(code): show MCP tool counts in `/tools` headers (#7327)
- [`c32e5fa`](https://github.com/langchain-ai/deepagents/commit/c32e5fae408525468d30e01e5ad4560abbe2496f) chore(deps): bump dnspython from 2.8.0 to 2.9.0 in /libs/code (#7325)
- [`a1194ce`](https://github.com/langchain-ai/deepagents/commit/a1194cea7f1bdcc0ff4df7c6745a31094d436fe0) chore(deps): bump msgpack from 1.2.1 to 1.2.3 in /libs/code (#7324)
- [`4437822`](https://github.com/langchain-ai/deepagents/commit/4437822e567e952f997b4d12efa404486cf86da3) chore(deps): bump authlib from 1.8.0 to 1.9.1 in /libs/code (#7323)
- [`58e6b7e`](https://github.com/langchain-ai/deepagents/commit/58e6b7e33404cd4166c1cce06434136d4e870867) chore(deps): raise dependency minimums for `all` (#7311)
- [`bea2ad5`](https://github.com/langchain-ai/deepagents/commit/bea2ad54ea872cbc8e026cc92afdde1b4cf40e39) release(langchain-quickjs): 0.3.11 (#7315)
- [`fc8cd94`](https://github.com/langchain-ai/deepagents/commit/fc8cd94ba3f171877fbe63ea515e50ae9d7f6bdc) ci(infra): shard dcode unit tests and drop serial CI hops (#7313)
- [`74e258d`](https://github.com/langchain-ai/deepagents/commit/74e258dd4564546b1e47815d0b11cd1bfebf72ea) test(code): share parsed Textual CSS across test apps (#7312)
- [`1f4237a`](https://github.com/langchain-ai/deepagents/commit/1f4237af32eef17581e507f914424d523fd7b296) perf(code): remove redundant MCP startup probes (#7303)
- [`af963db`](https://github.com/langchain-ai/deepagents/commit/af963db87216d9963e404727e944d3554e16d048) chore(deps): raise dependency minimums for `all` (#7306)
- [`0272b39`](https://github.com/langchain-ai/deepagents/commit/0272b39127251dd020dfd0b9657f78b08acdcfb2) docs(infra): backfill PR links dropped from curated changelogs (#7305)
- [`9d654b5`](https://github.com/langchain-ai/deepagents/commit/9d654b59f06b2610ec4cd7fec93bfc4203519b53) release(langchain-quickjs): 0.3.10 (#7298)
- [`da49416`](https://github.com/langchain-ai/deepagents/commit/da49416595221317b8a2951a1f861b54fd3ad499) perf(code): reuse Git status for local context branch detection (#7299)

</details>

## langchain-quickjs==0.3.11: langchain-quickjs==0.3.11

**Published**: 2026-10-27

### Bug Fixes

- Defer QuickJS runtime initialization until evaluation ([#7301](https://github.com/langchain-ai/deepagents/pull/7301)).

---

Internal maintainers: @mdrxy

Released by: @mdrxy

<details>
<summary>Git log since langchain-quickjs==0.3.10</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`bea2ad5`](https://github.com/langchain-ai/deepagents/commit/bea2ad54ea872cbc8e026cc92afdde1b4cf40e39) release(langchain-quickjs): 0.3.11 (#7315)
- [`12b4a78`](https://github.com/langchain-ai/deepagents/commit/12b4a7801981e6edcc928da158dcb872a870a447) fix(quickjs): defer runtime initialization until evaluation (#7301)
- [`af963db`](https://github.com/langchain-ai/deepagents/commit/af963db87216d9963e404727e944d3554e16d048) chore(deps): raise dependency minimums for `all` (#7306)
- [`7b35140`](https://github.com/langchain-ai/deepagents/commit/7b351407671813cc940ddd4e4c8920602c3baf3d) docs(infra): require the PR number in commit override subjects (#7302)

</details>

## langchain-quickjs==0.3.10: langchain-quickjs==0.3.10

**Published**: 2026-10-26

### Bug Fixes

- Fixed PTC prompt caching to cache prompts per slot and tool identity. ([#7296](https://github.com/langchain-ai/deepagents/pull/7296))

---

**Special thanks** to everyone who reported the issues addressed in this release: @ramon-langchain ([#6878](https://github.com/langchain-ai/deepagents/issues/6878))

Internal maintainers: @hntrl, @mdrxy

Released by: @mdrxy

<details>
<summary>Git log since langchain-quickjs==0.3.9</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`9d654b5`](https://github.com/langchain-ai/deepagents/commit/9d654b59f06b2610ec4cd7fec93bfc4203519b53) release(langchain-quickjs): 0.3.10 (#7298)
- [`e72c1e6`](https://github.com/langchain-ai/deepagents/commit/e72c1e6ca67f23ce49f6cbefcc1805f20133dea1) fix(quickjs): cache the PTC prompt per slot and tool identity (#7296)
- [`50646c2`](https://github.com/langchain-ai/deepagents/commit/50646c22f505fb1ae9352b14cd97b2a3c2d0f2db) chore(deps): raise dependency minimums for `all` (#7293)
- [`6265589`](https://github.com/langchain-ai/deepagents/commit/6265589d9529c541778f4ea34f4adffbb9a14016) chore(deps): raise dependency minimums for `all` (#7240)
- [`94458c5`](https://github.com/langchain-ai/deepagents/commit/94458c55143b1187c5237e675968907d13ec8270) chore(deps): raise dependency minimums for `all` (#7219)
- [`e85c6b9`](https://github.com/langchain-ai/deepagents/commit/e85c6b98087861512d2c5240305e16cfac68a746) release(deepagents): 0.7.32 (#7188)
- [`f9604cb`](https://github.com/langchain-ai/deepagents/commit/f9604cbd94bd34645136302905cd80f4f1c1c4cd) release(deepagents): 0.7.31 (#7175)
- [`d179e24`](https://github.com/langchain-ai/deepagents/commit/d179e24d10ebc511810ff5268ece6875fda5bf64) chore(deps): raise dependency minimums for `all` (#7172)
- [`078310a`](https://github.com/langchain-ai/deepagents/commit/078310a379212d9e78d4be0309fa5a587938e6a5) chore(deps): remove precautionary third-party upper bounds (#7136)
- [`0beb1e1`](https://github.com/langchain-ai/deepagents/commit/0beb1e1f827f88d7a07b568ddaf16d431b877ff9) chore(deps): raise dependency minimums for `all` (#7145)
- [`42adc1b`](https://github.com/langchain-ai/deepagents/commit/42adc1bca1147715ac58fad49bc74c12fa63bb84) release(deepagents): 0.7.30 (#7076)
- [`55eb0e1`](https://github.com/langchain-ai/deepagents/commit/55eb0e1aa3a10fb28a016b2a9cfddc38bfc653ab) chore(deps-dev): bump pillow from 12.3.0 to 13.0.0 in /libs/deepagents (#7109)
- [`4f8a656`](https://github.com/langchain-ai/deepagents/commit/4f8a6566d1c06c04f5d8d9614706f72ce64532e3) chore(repo): infer ty targets from package Python requirements (#7073)
- [`a0a858b`](https://github.com/langchain-ai/deepagents/commit/a0a858bc4334d9674986e47336c9a20995eec830) chore(deps): bump certifi from 2026.2.25 to 2026.10.19 in /libs/partners/quickjs (#7085)
- [`3abfb0a`](https://github.com/langchain-ai/deepagents/commit/3abfb0abcda658d4b64e74782f3316a11efc3faa) release(deepagents): 0.7.29 (#7029)
- [`8ccbd7f`](https://github.com/langchain-ai/deepagents/commit/8ccbd7fdf66a5204ac7636fd67e510163ab00d75) chore(deps): require `bsdiff4` 1.3.0 for Python 3.14 wheels (#7070)
- [`9a23fbb`](https://github.com/langchain-ai/deepagents/commit/9a23fbbb8e1fef0be9c24e33a0b92a4c6ef7fc77) chore(deps): raise dependency minimums for `all` (#7025)
- [`9db018b`](https://github.com/langchain-ai/deepagents/commit/9db018bf1b94c11f06ea4f33d69d133c34097e08) release(deepagents): 0.7.28 (#7003)
- [`991fb7d`](https://github.com/langchain-ai/deepagents/commit/991fb7d3e65b69b842aa2be8a68f5256f7807570) release(deepagents): 0.7.27 (#6982)
- [`11aaba8`](https://github.com/langchain-ai/deepagents/commit/11aaba8bb259494c36d2bc6af02ad93e6226f230) chore(deps): raise dependency minimums for `all` (#6986)
- [`0bf1676`](https://github.com/langchain-ai/deepagents/commit/0bf167654e5cadca10f46db3c233569d391b673e) chore(deps): raise dependency minimums for `all` (#6974)
- [`90d4ce3`](https://github.com/langchain-ai/deepagents/commit/90d4ce36dd6f9f402b8c40547972ffc13c8814ca) release(deepagents): 0.7.26 (#6944)
- [`4cb03c0`](https://github.com/langchain-ai/deepagents/commit/4cb03c0267fc9ac695d8b6fa5807aab9b7ac687a) chore(deps): raise dependency minimums for `all` (#6962)
- [`e6d4fbf`](https://github.com/langchain-ai/deepagents/commit/e6d4fbf5260b3611ea6a9a5276cdb8655d31213c) chore(deps): raise dependency minimums for `all` (#6939)
- [`c6c340d`](https://github.com/langchain-ai/deepagents/commit/c6c340d47d2013a2e7b7230698f73977b7de6756) release(deepagents): 0.7.25 (#6901)
- [`77da3b8`](https://github.com/langchain-ai/deepagents/commit/77da3b81929569e8baa91c6328dad3f22e73c5e6) chore(deps): refresh editable SDK lockfile metadata (#6929)

</details>

## langchain-modal==0.0.7: langchain-modal==0.0.7

**Published**: 2026-10-26

### Bug Fixes

- Handle per-file permission and directory errors ([#7241](https://github.com/langchain-ai/deepagents/pull/7241)).

---

Thanks to our community contributors: @yang0228

**Special thanks** to everyone who reported the issues addressed in this release: @yang0228 ([#7129](https://github.com/langchain-ai/deepagents/issues/7129))

Internal maintainers: @hntrl, @mdrxy

Released by: @mdrxy

<details>
<summary>Git log since langchain-modal==0.0.6</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`fa9966b`](https://github.com/langchain-ai/deepagents/commit/fa9966bd955b64503f6224c29afbd129e701faf9) release(langchain-modal): 0.0.7 (#7281)
- [`841d737`](https://github.com/langchain-ai/deepagents/commit/841d737db72cd1549011426679a4c40aa26201d5) fix(modal): handle per-file permission and directory errors (#7241)
- [`94458c5`](https://github.com/langchain-ai/deepagents/commit/94458c55143b1187c5237e675968907d13ec8270) chore(deps): raise dependency minimums for `all` (#7219)
- [`e85c6b9`](https://github.com/langchain-ai/deepagents/commit/e85c6b98087861512d2c5240305e16cfac68a746) release(deepagents): 0.7.32 (#7188)
- [`f9604cb`](https://github.com/langchain-ai/deepagents/commit/f9604cbd94bd34645136302905cd80f4f1c1c4cd) release(deepagents): 0.7.31 (#7175)
- [`d179e24`](https://github.com/langchain-ai/deepagents/commit/d179e24d10ebc511810ff5268ece6875fda5bf64) chore(deps): raise dependency minimums for `all` (#7172)
- [`078310a`](https://github.com/langchain-ai/deepagents/commit/078310a379212d9e78d4be0309fa5a587938e6a5) chore(deps): remove precautionary third-party upper bounds (#7136)
- [`0beb1e1`](https://github.com/langchain-ai/deepagents/commit/0beb1e1f827f88d7a07b568ddaf16d431b877ff9) chore(deps): raise dependency minimums for `all` (#7145)
- [`42adc1b`](https://github.com/langchain-ai/deepagents/commit/42adc1bca1147715ac58fad49bc74c12fa63bb84) release(deepagents): 0.7.30 (#7076)
- [`92955e7`](https://github.com/langchain-ai/deepagents/commit/92955e789ed280130f51d0d099be02cccf524510) chore(deps): bump aiohttp from 3.14.4 to 3.14.5 in /libs/partners/modal (#7107)
- [`55eb0e1`](https://github.com/langchain-ai/deepagents/commit/55eb0e1aa3a10fb28a016b2a9cfddc38bfc653ab) chore(deps-dev): bump pillow from 12.3.0 to 13.0.0 in /libs/deepagents (#7109)
- [`4f8a656`](https://github.com/langchain-ai/deepagents/commit/4f8a6566d1c06c04f5d8d9614706f72ce64532e3) chore(repo): infer ty targets from package Python requirements (#7073)
- [`7bbd84e`](https://github.com/langchain-ai/deepagents/commit/7bbd84e8310dfc2482c16e3afaa767e96eebba0c) chore(deps): bump aiohttp from 3.14.3 to 3.14.4 in /libs/partners/modal (#7087)
- [`1cdc5d2`](https://github.com/langchain-ai/deepagents/commit/1cdc5d27b4b84f6b6f4cab30480189d7e22170b1) chore(deps): bump certifi from 2026.1.4 to 2026.10.19 in /libs/partners/modal (#7086)
- [`3abfb0a`](https://github.com/langchain-ai/deepagents/commit/3abfb0abcda658d4b64e74782f3316a11efc3faa) release(deepagents): 0.7.29 (#7029)
- [`9a23fbb`](https://github.com/langchain-ai/deepagents/commit/9a23fbbb8e1fef0be9c24e33a0b92a4c6ef7fc77) chore(deps): raise dependency minimums for `all` (#7025)
- [`9db018b`](https://github.com/langchain-ai/deepagents/commit/9db018bf1b94c11f06ea4f33d69d133c34097e08) release(deepagents): 0.7.28 (#7003)
- [`991fb7d`](https://github.com/langchain-ai/deepagents/commit/991fb7d3e65b69b842aa2be8a68f5256f7807570) release(deepagents): 0.7.27 (#6982)
- [`11aaba8`](https://github.com/langchain-ai/deepagents/commit/11aaba8bb259494c36d2bc6af02ad93e6226f230) chore(deps): raise dependency minimums for `all` (#6986)
- [`0bf1676`](https://github.com/langchain-ai/deepagents/commit/0bf167654e5cadca10f46db3c233569d391b673e) chore(deps): raise dependency minimums for `all` (#6974)
- [`90d4ce3`](https://github.com/langchain-ai/deepagents/commit/90d4ce36dd6f9f402b8c40547972ffc13c8814ca) release(deepagents): 0.7.26 (#6944)
- [`4cb03c0`](https://github.com/langchain-ai/deepagents/commit/4cb03c0267fc9ac695d8b6fa5807aab9b7ac687a) chore(deps): raise dependency minimums for `all` (#6962)
- [`e6d4fbf`](https://github.com/langchain-ai/deepagents/commit/e6d4fbf5260b3611ea6a9a5276cdb8655d31213c) chore(deps): raise dependency minimums for `all` (#6939)
- [`c6c340d`](https://github.com/langchain-ai/deepagents/commit/c6c340d47d2013a2e7b7230698f73977b7de6756) release(deepagents): 0.7.25 (#6901)
- [`77da3b8`](https://github.com/langchain-ai/deepagents/commit/77da3b81929569e8baa91c6328dad3f22e73c5e6) chore(deps): refresh editable SDK lockfile metadata (#6929)
- [`c96d912`](https://github.com/langchain-ai/deepagents/commit/c96d912ba70a601f0e259cded6b428f957b88cbf) chore(deps): raise dependency minimums for `all` (#6915)
- [`53238e9`](https://github.com/langchain-ai/deepagents/commit/53238e943fb2edd25c157178c4d6e73e2ba75f2c) chore(deps): raise dependency minimums for `all` (#6899)
- [`d312bcd`](https://github.com/langchain-ai/deepagents/commit/d312bcda3c71dfc4201b993776a413c8b457b483) chore(deps): raise dependency minimums for `all` (#6898)
- [`838433b`](https://github.com/langchain-ai/deepagents/commit/838433b4dcd9efa0bacba67d07e61440b43c4459) release(deepagents): 0.7.24 (#6865)
- [`e62ab9b`](https://github.com/langchain-ai/deepagents/commit/e62ab9b08f60e46e72861d1a88ab8f4754bf0352) chore(deps): raise dependency minimums for `all` (#6873)
- [`9f4bdf7`](https://github.com/langchain-ai/deepagents/commit/9f4bdf7c8b8bfc86877729d80ed286bd71d78706) release(deepagents): 0.7.23 (#6822)
- [`d900425`](https://github.com/langchain-ai/deepagents/commit/d900425c7b834319e7ae797f6d77017b3b4c6e4e) chore(deps): raise dependency minimums for `all` (#6829)
- [`0dfd359`](https://github.com/langchain-ai/deepagents/commit/0dfd359e67c5573a7d770c6f012469ae1f55c94e) build(deps): bump langgraph-sdk from 0.4.4 to 0.4.6 in /libs/partners/modal (#6817)
- [`1295bc7`](https://github.com/langchain-ai/deepagents/commit/1295bc75a6dfcba5cfe6af7f164ed4cef1ac91a8) build(deps): bump multidict from 6.7.1 to 6.9.1 in /libs/partners/modal (#6786)
- [`c7e455a`](https://github.com/langchain-ai/deepagents/commit/c7e455a4d76ad6277382903604c183bb2807c22b) build(deps): bump langgraph-sdk from 0.4.2 to 0.4.4 in /libs/partners/modal (#6787)
- [`dcba425`](https://github.com/langchain-ai/deepagents/commit/dcba42543955cadd63718f64ba0165864e7323ad) release(deepagents): 0.7.22 (#6744)
- [`337f4d0`](https://github.com/langchain-ai/deepagents/commit/337f4d08e26ddd2e8409535c12be451e4bf2c2ef) chore(deps): raise dependency minimums for `all` (#6730)
- [`6b1385c`](https://github.com/langchain-ai/deepagents/commit/6b1385cadc01aeb36c906e47a58c0765604e24f8) chore(deps): raise dependency minimums for `all` (#6706)
- [`4394bcd`](https://github.com/langchain-ai/deepagents/commit/4394bcd00b8eb46e7c423939643a0dfcfb5d8773) release(deepagents): 0.7.21 (#6676)
- [`b46f599`](https://github.com/langchain-ai/deepagents/commit/b46f599149d9dff5e7b7ed44312d246d4e96298e) build(deps): bump urllib3 from 2.7.0 to 2.8.0 in /libs/partners/modal (#6651)
- [`c9b2ce1`](https://github.com/langchain-ai/deepagents/commit/c9b2ce194e422d2a61b9faf3732da15d90623c13) chore(deps): raise dependency minimums for `all` (#6645)
- [`6bf7802`](https://github.com/langchain-ai/deepagents/commit/6bf780284ec49789613df20d85866a0ad981e579) release(deepagents): 0.7.20 (#6624)
- [`a87e219`](https://github.com/langchain-ai/deepagents/commit/a87e21955cb42c47f1e2ee728a37b76547939567) chore(deps): raise dependency minimums for `all` (#6631)
- [`689898e`](https://github.com/langchain-ai/deepagents/commit/689898e50a0cab7e05b5b81132b7cee4304e0020) chore(deps): raise dependency minimums for `all` (#6628)
- [`512334f`](https://github.com/langchain-ai/deepagents/commit/512334f09b21e2bb4cf4b039ef5f89752ed42026) chore(deps): raise dependency minimums for `all` (#6548)
- [`bb49cf5`](https://github.com/langchain-ai/deepagents/commit/bb49cf50d3450a3bbebe8d25240cb7ef6379bd0d) release(deepagents): 0.7.19 (#6523)
- [`123f9c3`](https://github.com/langchain-ai/deepagents/commit/123f9c3030548e609798e54c11ca9455653b5764) chore(deps): raise dependency minimums for `all` (#6535)
- [`c172018`](https://github.com/langchain-ai/deepagents/commit/c17201847dd65390662a763ddd93ed84bbb8931c) release(deepagents): 0.7.18 (#6491)
- [`9a50bf5`](https://github.com/langchain-ai/deepagents/commit/9a50bf5c966fb599e240a6c52167133daaff5565) chore(deps): raise dependency minimums for `all` (#6498)
- [`e5406d0`](https://github.com/langchain-ai/deepagents/commit/e5406d0c735c7eb72548b7ea616991987bfb21e6) release(deepagents): 0.7.17 (#6458)
- [`cf5c560`](https://github.com/langchain-ai/deepagents/commit/cf5c5606648efa8bb27684fac97d9e794039707d) chore(deps): raise dependency minimums for `all` (#6478)
- [`0114a3f`](https://github.com/langchain-ai/deepagents/commit/0114a3f824cd5e626acb7b64d3c8e24468319d09) release(deepagents): 0.7.16 (#6372)
- [`f173a01`](https://github.com/langchain-ai/deepagents/commit/f173a011a60d73163410f88d3b6cbf33670e768c) chore(deps): raise dependency minimums for `all` (#6440)
- [`981855d`](https://github.com/langchain-ai/deepagents/commit/981855de4d493c66e5f15299d6a0706128a08459) chore(deps): bump anyio from 4.12.1 to 4.14.2 in /libs/partners/modal (#6409)
- [`0f5a2b5`](https://github.com/langchain-ai/deepagents/commit/0f5a2b57fa5dbb3a7d8f16dc280cb5b1506ea8c0) release(deepagents): 0.7.15 (#6298)
- [`7a7f382`](https://github.com/langchain-ai/deepagents/commit/7a7f3827430572a0976002003d9f19d48ae20360) chore(deps): raise dependency minimums for `all` (#6336)
- [`06e5886`](https://github.com/langchain-ai/deepagents/commit/06e588610c08e7544ee77ac09aa971921a5c893e) chore(deps): raise dependency minimums for `all` (#6310)
- [`ded0f11`](https://github.com/langchain-ai/deepagents/commit/ded0f1187f6bf81e2f679ea7b16ead7760d775a6) release(deepagents): 0.7.14 (#6050)
- [`3b99e73`](https://github.com/langchain-ai/deepagents/commit/3b99e7333e501d1ccf84b5fbaaacc9de815ce4b7) chore(deps): raise dependency minimums for `all` (#6280)
- [`9f6bd6a`](https://github.com/langchain-ai/deepagents/commit/9f6bd6ae200ff2e45e8c0246343b6c8936707447) chore(deps): raise dependency minimums for `all` (#6268)
- [`d889f40`](https://github.com/langchain-ai/deepagents/commit/d889f40ec72880ae2642300f62eceb9efe185757) chore(deps): raise dependency minimums for `all` (#6237)
- [`7c3cebe`](https://github.com/langchain-ai/deepagents/commit/7c3cebe1df407ac947c34d56a1a21945aaddae23) chore(deps): raise dependency minimums for `all` (#6212)
- [`18106be`](https://github.com/langchain-ai/deepagents/commit/18106be837bcdd9005b2dd73280d871a0621bf99) chore(deps): raise dependency minimums for `all` (#6130)
- [`07d2952`](https://github.com/langchain-ai/deepagents/commit/07d2952d346d81d06bd181db8c560a77f2b51bc8) chore(deps): raise dependency minimums for `all` (#6096)
- [`bdccb82`](https://github.com/langchain-ai/deepagents/commit/bdccb82d21f998174354a25daa4624dc0d9da97b) chore(deps): raise dependency minimums for `all` (#6053)
- [`ac0fac4`](https://github.com/langchain-ai/deepagents/commit/ac0fac42f6ece4147c3636896358e1a9391cd94a) chore(deps): raise dependency minimums for `all` (#6046)
- [`1aae374`](https://github.com/langchain-ai/deepagents/commit/1aae3746682a65c837c5dd0f165b685253fe9465) release(deepagents): 0.7.13 (#6031)
- [`a197807`](https://github.com/langchain-ai/deepagents/commit/a19780791e020ccb772701285c459fb6a4dab0ff) release(deepagents): 0.7.12 (#6006)
- [`4bc1100`](https://github.com/langchain-ai/deepagents/commit/4bc11004ba86999c2f6d59b1d958b53195619bcc) release(deepagents): 0.7.11 (#5977)
- [`77b0f01`](https://github.com/langchain-ai/deepagents/commit/77b0f018f9d736c9409e44d03edaf9985b59f271) chore(deps): raise dependency minimums for `all` (#5936)
- [`d26b53a`](https://github.com/langchain-ai/deepagents/commit/d26b53ad12265375c6dcf6b1c1501e0a4adf0ea3) release(deepagents): 0.7.10 (#5838)
- [`7afa60e`](https://github.com/langchain-ai/deepagents/commit/7afa60efc96c6852933eb6a0d5c9f699cd751e43) chore(deps): raise dependency minimums for `all` (#5912)
- [`1c2355e`](https://github.com/langchain-ai/deepagents/commit/1c2355e39cbccb834b82e68757418dec35a5a3d4) chore(deps): raise dependency minimums for `all` (#5906)
- [`4a4cb10`](https://github.com/langchain-ai/deepagents/commit/4a4cb10dd8604fb67b34ba20e49c1756e68ae3d5) chore(deps): raise dependency minimums for `deepagents` (#5871)
- [`7155253`](https://github.com/langchain-ai/deepagents/commit/71552532bb33a8744a5b1c0b48e8047478169c42) release(deepagents): 0.7.9 (#5754)
- [`29cd02a`](https://github.com/langchain-ai/deepagents/commit/29cd02ae1762e4cefa4962e60fa250642ec8815a) chore(deps): raise dependency minimums for `deepagents` (#5805)
- [`75095bb`](https://github.com/langchain-ai/deepagents/commit/75095bb81dc200ef33652bcaa173a758312f3962) chore(deps): raise dependency minimums for `all` (#5764)
- [`cf939b3`](https://github.com/langchain-ai/deepagents/commit/cf939b3f86fc86d74e389924da7a79894d849fcd) chore(deps): raise dependency minimums for `deepagents` (#5709)
- [`1e261ba`](https://github.com/langchain-ai/deepagents/commit/1e261ba201bb1af4dbc5cbc8b6424e709b850ea8) release(deepagents): 0.7.8 (#5705)
- [`31af8c1`](https://github.com/langchain-ai/deepagents/commit/31af8c11219c3c77f4530bc1e4adc3c140cfa6d5) chore(deps): raise dependency minimums for `deepagents` (#5662)
- [`16cb2e7`](https://github.com/langchain-ai/deepagents/commit/16cb2e76f4a36f312b595423c6134b43b248f563) chore(deps): raise dependency minimums for `deepagents` (#5646)
- [`42ed940`](https://github.com/langchain-ai/deepagents/commit/42ed9406f08dfec11369631011405c1dc650293a) release(deepagents): 0.7.7 (#5498)
- [`3afad63`](https://github.com/langchain-ai/deepagents/commit/3afad63e2290559c36a1c386ab2ac9a2d1f8b64a) release(deepagents): 0.7.6 (#5491)
- [`bf7a3e5`](https://github.com/langchain-ai/deepagents/commit/bf7a3e5e4b1ab8e337dbf74a020324e9c015974e) chore(deps): bump h2 from 4.3.0 to 4.4.1 in /libs/partners/modal (#5381)
- [`a97bdb6`](https://github.com/langchain-ai/deepagents/commit/a97bdb65778a67c28b3ef7ca59e39a88850c0f2a) ci(infra): fail on unexpected test warnings (#5346)
- [`a6c06b0`](https://github.com/langchain-ai/deepagents/commit/a6c06b029710d34035af6ae1faded093cc8f3073) release(deepagents): 0.7.5 (#5327)
- [`a6e2608`](https://github.com/langchain-ai/deepagents/commit/a6e2608c382be362163e4f26f5ccc544cc13ccbd) chore(deps): bump `langchain-anthropic` to 1.5.4 (#5332)
- [`553a030`](https://github.com/langchain-ai/deepagents/commit/553a030a5b959ac8bb17d52447f915397f910f03) release(deepagents): 0.7.4 (#5305)
- [`c90e0f4`](https://github.com/langchain-ai/deepagents/commit/c90e0f42da4e391641663ac97a763d1110a8b034) chore(deps): bump aiohttp from 3.14.2 to 3.14.3 in /libs/partners/modal (#5273)
- [`0cf730f`](https://github.com/langchain-ai/deepagents/commit/0cf730f3401e68e3f390abe7b6051a78b8c59bdf) chore(deps): bump cryptography from 48.0.1 to 50.0.0 in /libs/partners/modal (#5285)
- [`337bf34`](https://github.com/langchain-ai/deepagents/commit/337bf340af2beaefa07ff14d1a7d6e9bb34bc33b) chore(deps): bump aiohttp from 3.14.1 to 3.14.2 in /libs/partners/modal (#5265)
- [`f60951e`](https://github.com/langchain-ai/deepagents/commit/f60951e3f5e4d7e57d6379a4bbc64259bdfdb884) release(deepagents): 0.7.3 (#5251)
- [`0063721`](https://github.com/langchain-ai/deepagents/commit/00637212084c7fe4c12993c95ab559b92aaa4fef) release(deepagents): 0.7.2 (#5230)
- [`9f582d5`](https://github.com/langchain-ai/deepagents/commit/9f582d5a1723ca881e28cd183a0b34c9134b8f07) release(deepagents-code): 0.1.51 (#5200)
- [`a4c1605`](https://github.com/langchain-ai/deepagents/commit/a4c1605bd5d4038718ead3b55af617d6ee2e9599) chore(deps): sync lockfiles after SDK packaging dep addition (#5204)

</details>

## deepagents-code==0.2.2: deepagents-code==0.2.2

**Published**: 2026-10-26

This update includes considerable security and performance improvements. We recommend upgrading as soon as feasible.

### Features

- Add support for GPT-6.1 Terra ([#7295](https://github.com/langchain-ai/deepagents/pull/7295)).
- Bring selected text into the chat input ([#6955](https://github.com/langchain-ai/deepagents/pull/6955)).
- Detect plugin updates and notify you when they are available ([#7234](https://github.com/langchain-ai/deepagents/pull/7234)).

### Bug Fixes

- Prevent project `.env` files from setting extension, shell, plugin, and skill trust ([#7275](https://github.com/langchain-ai/deepagents/pull/7275)).
- Restrict links opened from the terminal UI to HTTP and HTTPS ([#7277](https://github.com/langchain-ai/deepagents/pull/7277)).
- Restrict Git options in Auto mode's read-only fast path to an allowlist ([#7276](https://github.com/langchain-ai/deepagents/pull/7276)).
- Stop the local server from uploading usage metadata to LangSmith ([#7252](https://github.com/langchain-ai/deepagents/pull/7252)).
- Detect and repair enabled plugins with missing installed files ([#7278](https://github.com/langchain-ai/deepagents/pull/7278)).
- Explain repeated skill-trust denials and clear them on `/reload` ([#7291](https://github.com/langchain-ai/deepagents/pull/7291)).
- Fix transcript height calculations for folded tool rows and spacers so scrolling reaches the newest message ([#7251](https://github.com/langchain-ai/deepagents/pull/7251), [#7253](https://github.com/langchain-ai/deepagents/pull/7253)).
- Keep the terminal UI responsive when quitting during server startup ([#7190](https://github.com/langchain-ai/deepagents/pull/7190)).
- Contain JavaScript subagent failures ([#7211](https://github.com/langchain-ai/deepagents/pull/7211)).
- Manage sandbox lifetime from the client in non-interactive runs ([#6368](https://github.com/langchain-ai/deepagents/pull/6368)).
- Preserve shipped bytecode for read-only installations ([#7196](https://github.com/langchain-ai/deepagents/pull/7196)).
- Correctly read the current branch in reftable repositories through Git ([#7268](https://github.com/langchain-ai/deepagents/pull/7268)).

### Performance Improvements

- Reuse the parent's local context in forked subagents ([#7233](https://github.com/langchain-ai/deepagents/pull/7233)).
- Show the terminal UI sooner by deferring imports and trace redacting-client setup until after the initial display ([#7189](https://github.com/langchain-ai/deepagents/pull/7189), [#7215](https://github.com/langchain-ai/deepagents/pull/7215)).
- Start the server earlier, before import prewarming, app-module imports, and post-display initialization ([#7184](https://github.com/langchain-ai/deepagents/pull/7184), [#7249](https://github.com/langchain-ai/deepagents/pull/7249), [#7208](https://github.com/langchain-ai/deepagents/pull/7208)).
- Streamline server startup by deferring Textual imports, excluding custom routes from the OpenAPI specification, caching bytecode, and skipping a PyPI version check ([#7242](https://github.com/langchain-ai/deepagents/pull/7242), [#7193](https://github.com/langchain-ai/deepagents/pull/7193), [#7198](https://github.com/langchain-ai/deepagents/pull/7198)).
- Build the agent graph during server startup and start runs without the in-memory queue's polling delay ([#7214](https://github.com/langchain-ai/deepagents/pull/7214), [#7243](https://github.com/langchain-ai/deepagents/pull/7243)).
- Improve streaming responsiveness by re-rendering Markdown only when blocks change, adapting the flush interval to rendering cost, and avoiding duplicate chunk merging ([#7210](https://github.com/langchain-ai/deepagents/pull/7210), [#7205](https://github.com/langchain-ai/deepagents/pull/7205), [#7200](https://github.com/langchain-ai/deepagents/pull/7200)).
- Reduce transcript rendering overhead by compacting finished tool runs into lazy group rows, rendering completed replies as single widgets, limiting mounted rows to 350, and batching row removal ([#7254](https://github.com/langchain-ai/deepagents/pull/7254), [#7255](https://github.com/langchain-ai/deepagents/pull/7255), [#7256](https://github.com/langchain-ai/deepagents/pull/7256), [#7250](https://github.com/langchain-ai/deepagents/pull/7250)).
- Reduce background UI work by avoiding transcript relayouts on spinner ticks and DOM traversal on cache-expiry ticks ([#7203](https://github.com/langchain-ai/deepagents/pull/7203), [#7246](https://github.com/langchain-ai/deepagents/pull/7246)).
- Return control to the terminal sooner on exit by restoring it before server shutdown finishes, skipping the final garbage-collection pass, and avoiding the full shutdown wait for abandoned startups ([#7192](https://github.com/langchain-ai/deepagents/pull/7192), [#7191](https://github.com/langchain-ai/deepagents/pull/7191), [#7194](https://github.com/langchain-ai/deepagents/pull/7194)).
- Speed up `@` file-completion scoring ([#7248](https://github.com/langchain-ai/deepagents/pull/7248)).
- Speed up the thread picker by filtering without remounting rows and keeping thread-list queries on a covering index ([#7207](https://github.com/langchain-ai/deepagents/pull/7207), [#7232](https://github.com/langchain-ai/deepagents/pull/7232)).
- Reduce post-turn data fetching to cost and cache channels, and cache SDK version lookups when building stream configuration ([#7206](https://github.com/langchain-ai/deepagents/pull/7206), [#7230](https://github.com/langchain-ai/deepagents/pull/7230)).
- Reduce tracing overhead by caching tracing secret redaction across runs, omitting `BtwOperation` hook inputs from traces, and skipping tracing-related thread hops when tracing is disabled ([#7209](https://github.com/langchain-ai/deepagents/pull/7209), [#7199](https://github.com/langchain-ai/deepagents/pull/7199), [#7247](https://github.com/langchain-ai/deepagents/pull/7247)).
- Improve checkpoint efficiency by forwarding delta-channel history reads to the SQLite saver, queuing in-process writers instead of polling, and keeping the `/btw` system prompt out of checkpoints ([#7244](https://github.com/langchain-ai/deepagents/pull/7244), [#7245](https://github.com/langchain-ai/deepagents/pull/7245), [#7202](https://github.com/langchain-ai/deepagents/pull/7202)).
- Skip redundant goal-notice history scans ([#7201](https://github.com/langchain-ai/deepagents/pull/7201)).

---

Thanks to our community contributors: @wei-w-wang, @roydonsequeira

**Special thanks** to everyone who reported the issues addressed in this release: @wei-w-wang ([#6369](https://github.com/langchain-ai/deepagents/issues/6369)), @roydonsequeira ([#7120](https://github.com/langchain-ai/deepagents/issues/7120))

Internal maintainers: @mdrxy

Released by: @mdrxy

<details>
<summary>Git log since deepagents-code==0.2.1</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`42e4f08`](https://github.com/langchain-ai/deepagents/commit/42e4f08af802f61813b6107b857d0d2cca965f9a) release(deepagents-code): 0.2.2 (#7182)
- [`315c2c9`](https://github.com/langchain-ai/deepagents/commit/315c2c964e3cf0eded2c36eff5cd5bf8c2e6dfb9) feat(code): add GPT-6.1 Terra (#7295)
- [`3102bc0`](https://github.com/langchain-ai/deepagents/commit/3102bc03eb0780d6c05065f30e8310d0a034a6f9) chore(deps): bump certifi from 2026.10.19 to 2026.10.23 in /libs/code (#7287)
- [`50646c2`](https://github.com/langchain-ai/deepagents/commit/50646c22f505fb1ae9352b14cd97b2a3c2d0f2db) chore(deps): raise dependency minimums for `all` (#7293)
- [`47cf0fb`](https://github.com/langchain-ai/deepagents/commit/47cf0fb888591bf841637da371a344598ce09718) fix(code): explain repeated skill-trust denials and clear them on `/reload` (#7291)
- [`fa9966b`](https://github.com/langchain-ai/deepagents/commit/fa9966bd955b64503f6224c29afbd129e701faf9) release(langchain-modal): 0.0.7 (#7281)
- [`ebd7592`](https://github.com/langchain-ai/deepagents/commit/ebd7592723b5989d155ee94b9ff7df9ac2afe425) feat(code): detect and notify plugin updates (#7234)
- [`4711bf2`](https://github.com/langchain-ai/deepagents/commit/4711bf2fe0fc0c0f161db59f42a4708473b9769e) fix(code): own sandbox lifetime from the client in non-interactive runs (#6368)
- [`89efee3`](https://github.com/langchain-ai/deepagents/commit/89efee335dfdf08c874b54e4f6c911e3b7185ffb) fix(code): flag and repair enabled plugins with missing installed files (#7278)
- [`71c9792`](https://github.com/langchain-ai/deepagents/commit/71c9792c998b30b4130f7379a8cda9d93398d3e7) perf(code): shrink the mounted transcript window to 350 rows (#7256)
- [`a18ca04`](https://github.com/langchain-ai/deepagents/commit/a18ca04b534718e396fdd1815e236ecfb3d5fea7) perf(code): compact finished live tool runs into lazy `TOOL_GROUP` rows (#7254)
- [`f40ecaf`](https://github.com/langchain-ai/deepagents/commit/f40ecafeca78a8d461f163f9d30bbd83c61644b2) fix(code): only open `http` and `https` links from the TUI (#7277)
- [`2abf323`](https://github.com/langchain-ai/deepagents/commit/2abf323e67b3c600d71b34bdfcc41008b753f75f) fix(code): allowlist Git options in Auto mode's read-only fast path (#7276)
- [`ebdee3e`](https://github.com/langchain-ai/deepagents/commit/ebdee3ef5be4ecea4e1bd973c24e219ffaa4464e) fix(code): stop project `.env` from setting extension, shell, plugin, and skill trust (#7275)
- [`ca1b44e`](https://github.com/langchain-ai/deepagents/commit/ca1b44e2ec16bf77082f12051d2fabe9da2850e5) fix(code): read the branch of reftable repositories through git (#7268)
- [`a8fa8e9`](https://github.com/langchain-ai/deepagents/commit/a8fa8e9b15b9502315e43ae5b517e345f99a73fb) chore(deps): raise dependency minimums for `all` (#7272)
- [`9243a1c`](https://github.com/langchain-ai/deepagents/commit/9243a1cbb7a012fb327a278dee94e295a10aeb7f) perf(code): render finished assistant replies as one widget (#7255)
- [`f26eb54`](https://github.com/langchain-ai/deepagents/commit/f26eb54c9b9f66d2ea7edbb9748413d58744534d) chore(deps): bump filelock from 3.29.7 to 4.2.1 in /libs/code (#7257)
- [`793ac5a`](https://github.com/langchain-ai/deepagents/commit/793ac5af081079977616fe1925b09670871121d3) fix(code): give transcript spacers their real height so scrolling reaches the newest message (#7253)
- [`305a185`](https://github.com/langchain-ai/deepagents/commit/305a185c1c867c1641f73db21e2b180772f030e0) fix(code): stop the local server from uploading usage metadata to LangSmith (#7252)
- [`1a1d484`](https://github.com/langchain-ai/deepagents/commit/1a1d4840dad2370f26acc5bdea5452081cb7502f) fix(code): correct transcript height hints for folded tool rows (#7251)
- [`fb05a5d`](https://github.com/langchain-ai/deepagents/commit/fb05a5db3a070f89e3022a3aa869225fb6dae647) perf(code): skip `traceable` thread hops when tracing is off (#7247)
- [`ec98477`](https://github.com/langchain-ai/deepagents/commit/ec9847732f947d9809c41e92f0d78c9131caeb2a) perf(code): remove pruned transcript rows in one batch (#7250)
- [`2815f6b`](https://github.com/langchain-ai/deepagents/commit/2815f6bece7d01e9c8aa6730eb88d2cd25977573) perf(code): drop dcode routes from the OpenAPI spec and defer Textual in the server (#7242)
- [`e47f4e2`](https://github.com/langchain-ai/deepagents/commit/e47f4e286571ac2f2873ad1a87baa5bb6eea470d) perf(code): start server runs without the in-memory queue's poll delay (#7243)
- [`97f518d`](https://github.com/langchain-ai/deepagents/commit/97f518d5870c77673db8551de831c9ec71295928) perf(code): stop walking the DOM on the 1 Hz cache-expiry tick (#7246)
- [`89824bb`](https://github.com/langchain-ai/deepagents/commit/89824bb4e8b32964013f9101f41e9ecaa5378476) perf(code): spawn the server before importing the app module (#7249)
- [`5fa7317`](https://github.com/langchain-ai/deepagents/commit/5fa73172dec5a96f042ebd6aaec5237571df7e8d) perf(code): forward delta-channel history reads to the SQLite saver (#7244)
- [`8d2c868`](https://github.com/langchain-ai/deepagents/commit/8d2c868e010fdf0939e6285bb4965deea42bf1e6) perf(code): reuse the parent's local context in forked subagents (#7233)
- [`bca2b9c`](https://github.com/langchain-ai/deepagents/commit/bca2b9cb9c899fd063fd2fdf3c2d23539fbc7d7c) perf(code): speed up `@` file completion scoring (#7248)
- [`d5801f1`](https://github.com/langchain-ai/deepagents/commit/d5801f121c8f320a253ac13fd6a3988ea1f8bf71) perf(code): queue in-process checkpoint writers instead of polling the ownership gate (#7245)
- [`b82f3b3`](https://github.com/langchain-ai/deepagents/commit/b82f3b326da3267d3a822c2fe7a4ba6980792c31) perf(code): keep `list_threads` on its covering index (#7232)
- [`d87a459`](https://github.com/langchain-ai/deepagents/commit/d87a459bb10f3b9110ea7edc4f823433394b178e) perf(code): cache the SDK version lookup in `build_stream_config` (#7230)
- [`6265589`](https://github.com/langchain-ai/deepagents/commit/6265589d9529c541778f4ea34f4adffbb9a14016) chore(deps): raise dependency minimums for `all` (#7240)
- [`a338166`](https://github.com/langchain-ai/deepagents/commit/a3381668c4d3b558742101fa7e6b8fe4a64e56ef) chore(deps): bump setuptools from 84.1.0 to 84.2.1 in /libs/code (#7231)
- [`2adde3a`](https://github.com/langchain-ai/deepagents/commit/2adde3a7208c726726172c3f096d0e09fb01ece1) chore(deps): bump setuptools from 83.0.0 to 84.1.0 in /libs/code (#7228)
- [`69e24a1`](https://github.com/langchain-ai/deepagents/commit/69e24a13771b0be7a895b0eab90af03832f61865) chore(deps): bump fastmcp from 4.0.3 to 4.1.2 in /libs/code (#7221)
- [`db9b663`](https://github.com/langchain-ai/deepagents/commit/db9b6633085ba9fdc7d89efb845537a51300f249) chore(deps): bump opentelemetry-api from 1.42.1 to 1.45.1 in /libs/code (#7220)
- [`94458c5`](https://github.com/langchain-ai/deepagents/commit/94458c55143b1187c5237e675968907d13ec8270) chore(deps): raise dependency minimums for `all` (#7219)
- [`470b075`](https://github.com/langchain-ai/deepagents/commit/470b0753986696b41952c772acd2ee316f930890) perf(code): install the LangSmith redacting client after first paint (#7215)
- [`b16a3c7`](https://github.com/langchain-ai/deepagents/commit/b16a3c77ee036cf9f7e204add6e5bd5a32e2ef82) chore(deps): bump `deepagents` pin in `deepagents-code` to 0.7.32 (#7217)
- [`4d461e3`](https://github.com/langchain-ai/deepagents/commit/4d461e3ab01e2c5ef9f96b2a5fb099907960d78c) perf(code): build the agent graph during server startup (#7214)
- [`79bc54c`](https://github.com/langchain-ai/deepagents/commit/79bc54c1625aa8e744a1bbc56930925a7055b906) chore(deps): raise dependency minimums for `all` (#7216)
- [`e85c6b9`](https://github.com/langchain-ai/deepagents/commit/e85c6b98087861512d2c5240305e16cfac68a746) release(deepagents): 0.7.32 (#7188)
- [`798535d`](https://github.com/langchain-ai/deepagents/commit/798535ddd180678955c7825aecbb520fad8dc5ec) release(langchain-daytona): 0.0.9 (#7187)
- [`18f5543`](https://github.com/langchain-ai/deepagents/commit/18f55433e0b82f4668e5228b04385023067cb9c4) perf(code): re-render streamed markdown only when blocks diverge (#7210)
- [`3d34b96`](https://github.com/langchain-ai/deepagents/commit/3d34b961d30c5dd81aa5079f63022a8a0636efa6) perf(code): filter the thread picker without remounting rows (#7207)
- [`4b2842c`](https://github.com/langchain-ai/deepagents/commit/4b2842cd6c5370002fc326c2554b04b81a4aec8a) perf(code): start the server before post-paint init (#7208)
- [`5a3039b`](https://github.com/langchain-ai/deepagents/commit/5a3039b4b63464b8d62b573bac142b7d0cd76470) perf(code): cache LangSmith secret redaction across traced runs (#7209)
- [`b93aff0`](https://github.com/langchain-ai/deepagents/commit/b93aff082ede97cecbd21fd456f879c1fae5b9e2) fix(code): contain JavaScript subagent failures (#7211)
- [`84b3bbe`](https://github.com/langchain-ai/deepagents/commit/84b3bbe9887f530a6a773ef21b541eb1812af68f) perf(code): stop relayouting the transcript on spinner ticks (#7203)
- [`2025b7c`](https://github.com/langchain-ai/deepagents/commit/2025b7ca6ad8976e42c24a925dddbea81d0c9cee) perf(code): keep the `/btw` system prompt out of checkpoints (#7202)
- [`4c91940`](https://github.com/langchain-ai/deepagents/commit/4c91940b0af1dcfda1b8a4294c5bf959f73b1746) perf(code): merge streamed chunks once in the transcript recorder (#7200)
- [`5162474`](https://github.com/langchain-ai/deepagents/commit/516247424485d4d3623891503464b3d576625b1d) perf(code): fetch only cost and cache channels after each turn (#7206)
- [`23ae4bb`](https://github.com/langchain-ai/deepagents/commit/23ae4bb16ff0178791d2234b00dd06210a72076a) perf(code): omit `BtwOperation` hook inputs from traces (#7199)
- [`918a8c8`](https://github.com/langchain-ai/deepagents/commit/918a8c80363d06d3ddb2d5847fe1062ad25ee45d) perf(code): skip redundant goal-notice history scans in `GoalToolsMiddleware` (#7201)
- [`61c9645`](https://github.com/langchain-ai/deepagents/commit/61c9645699cdc33370a513d7ff6be05ef8e80379) perf(code): skip the `langgraph-api` PyPI version check at server launch (#7198)
- [`e79aaa5`](https://github.com/langchain-ai/deepagents/commit/e79aaa5a1e413fdd7a923ab5556981074ceed12f) perf(code): scale the stream flush interval to markdown render cost (#7205)
- [`2e875cd`](https://github.com/langchain-ai/deepagents/commit/2e875cd11be30e6c31b36ce86d79abb963f05683) docs(code): add middleware trace and checkpoint state guidelines (#7197)
- [`76fe0cb`](https://github.com/langchain-ai/deepagents/commit/76fe0cb47947906fdea632bff17f71082d4a342f) fix(code): preserve shipped bytecode for read-only installs (#7196)
- [`1726e40`](https://github.com/langchain-ai/deepagents/commit/1726e40d0483dc50173a57b4997510ba3cf54017) test(code): skip the non-UTF-8 filename test on macOS (#7195)
- [`e53babb`](https://github.com/langchain-ai/deepagents/commit/e53babb2df71d995816fab39f3ac762ba670f85c) perf(code): let the server process cache its bytecode (#7193)
- [`a7e09c1`](https://github.com/langchain-ai/deepagents/commit/a7e09c1a54bb3200b7e59ead1c1042ab9e0345fc) perf(code): skip the full shutdown wait for an abandoned server startup (#7194)
- [`56971e2`](https://github.com/langchain-ai/deepagents/commit/56971e2631ac26c57aaf9010f4c6c03c5170a0a7) perf(code): restore the terminal before the server finishes stopping (#7192)
- [`a3b1ea9`](https://github.com/langchain-ai/deepagents/commit/a3b1ea9844af3447d265fb64e2d5f18c0d0bc90d) perf(code): skip the final GC pass when the TUI exits (#7191)
- [`4a77435`](https://github.com/langchain-ai/deepagents/commit/4a7743569b4de9080d48b841b2e5f7eebaceda6b) fix(code): keep the TUI responsive when quitting during server startup (#7190)
- [`a429412`](https://github.com/langchain-ai/deepagents/commit/a42941234fbf98d25db6794d0726fc48aac4fccf) perf(code): keep LangChain imports off the first-paint path (#7189)
- [`0f7ddb4`](https://github.com/langchain-ai/deepagents/commit/0f7ddb463fc6a0164756a98eed9ccb6f590cf797) test(code): reset user LangSmith snapshot between tests (#7186)
- [`6d184fd`](https://github.com/langchain-ai/deepagents/commit/6d184fd8f38f0a49729030a0e3b5d111ffc14e77) perf(code): spawn server before waiting on import prewarm (#7184)
- [`d54bcec`](https://github.com/langchain-ai/deepagents/commit/d54bcec3b74290312dda1e54c4ee07b431e0f19b) chore(deps): require Daytona request timeout support (#7183)
- [`09b14d9`](https://github.com/langchain-ai/deepagents/commit/09b14d917a859021b7c66e2868e917ad6663034d) feat(code): bring selected text into the chat input (#6955)
- [`51f92b8`](https://github.com/langchain-ai/deepagents/commit/51f92b83d8158b7e5fb63b8dada263e260b54a67) test(code): reset LangSmith launch snapshot between tests (#7180)

</details>

## langchain-daytona==0.0.9: langchain-daytona==0.0.9

**Published**: 2026-10-23

### Bug Fixes

- Apply request timeouts and preserve partial output when a timeout occurs ([#7121](https://github.com/langchain-ai/deepagents/pull/7121)).

---

Thanks to our community contributors: @Atharvagaur

**Special thanks** to everyone who reported the issues addressed in this release: @connorimes ([#7042](https://github.com/langchain-ai/deepagents/issues/7042))

Internal maintainers: @hntrl, @mdrxy

Released by: @mdrxy

<details>
<summary>Git log since langchain-daytona==0.0.8</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`798535d`](https://github.com/langchain-ai/deepagents/commit/798535ddd180678955c7825aecbb520fad8dc5ec) release(langchain-daytona): 0.0.9 (#7187)
- [`10c02fe`](https://github.com/langchain-ai/deepagents/commit/10c02fe01678b976eb2ce6a73e17820215700955) fix(daytona): apply request timeouts and keep partial output on timeout (#7121)
- [`d54bcec`](https://github.com/langchain-ai/deepagents/commit/d54bcec3b74290312dda1e54c4ee07b431e0f19b) chore(deps): require Daytona request timeout support (#7183)
- [`f9604cb`](https://github.com/langchain-ai/deepagents/commit/f9604cbd94bd34645136302905cd80f4f1c1c4cd) release(deepagents): 0.7.31 (#7175)
- [`d179e24`](https://github.com/langchain-ai/deepagents/commit/d179e24d10ebc511810ff5268ece6875fda5bf64) chore(deps): raise dependency minimums for `all` (#7172)
- [`26e625e`](https://github.com/langchain-ai/deepagents/commit/26e625eb3d82de5966429912a82989668f1bf819) chore(deps): bump opentelemetry-api from 1.39.1 to 1.45.1 in /libs/partners/daytona (#7148)
- [`078310a`](https://github.com/langchain-ai/deepagents/commit/078310a379212d9e78d4be0309fa5a587938e6a5) chore(deps): remove precautionary third-party upper bounds (#7136)
- [`0beb1e1`](https://github.com/langchain-ai/deepagents/commit/0beb1e1f827f88d7a07b568ddaf16d431b877ff9) chore(deps): raise dependency minimums for `all` (#7145)
- [`42adc1b`](https://github.com/langchain-ai/deepagents/commit/42adc1bca1147715ac58fad49bc74c12fa63bb84) release(deepagents): 0.7.30 (#7076)
- [`55eb0e1`](https://github.com/langchain-ai/deepagents/commit/55eb0e1aa3a10fb28a016b2a9cfddc38bfc653ab) chore(deps-dev): bump pillow from 12.3.0 to 13.0.0 in /libs/deepagents (#7109)
- [`b331013`](https://github.com/langchain-ai/deepagents/commit/b3310138d6640007d3de550af5ae2f76000b9f67) chore(deps): bump aiohttp from 3.14.4 to 3.14.5 in /libs/partners/daytona (#7113)
- [`4f8a656`](https://github.com/langchain-ai/deepagents/commit/4f8a6566d1c06c04f5d8d9614706f72ce64532e3) chore(repo): infer ty targets from package Python requirements (#7073)
- [`eb2a93f`](https://github.com/langchain-ai/deepagents/commit/eb2a93fd484d84966b2dec868e20e0600809424b) chore(deps): bump certifi from 2026.1.4 to 2026.10.19 in /libs/partners/daytona (#7089)
- [`d511b8c`](https://github.com/langchain-ai/deepagents/commit/d511b8c2cca386d2e9902b9b9791d39a9df142e1) chore(deps): bump aiohttp from 3.14.3 to 3.14.4 in /libs/partners/daytona (#7088)
- [`3abfb0a`](https://github.com/langchain-ai/deepagents/commit/3abfb0abcda658d4b64e74782f3316a11efc3faa) release(deepagents): 0.7.29 (#7029)
- [`9a23fbb`](https://github.com/langchain-ai/deepagents/commit/9a23fbbb8e1fef0be9c24e33a0b92a4c6ef7fc77) chore(deps): raise dependency minimums for `all` (#7025)
- [`9db018b`](https://github.com/langchain-ai/deepagents/commit/9db018bf1b94c11f06ea4f33d69d133c34097e08) release(deepagents): 0.7.28 (#7003)
- [`991fb7d`](https://github.com/langchain-ai/deepagents/commit/991fb7d3e65b69b842aa2be8a68f5256f7807570) release(deepagents): 0.7.27 (#6982)
- [`11aaba8`](https://github.com/langchain-ai/deepagents/commit/11aaba8bb259494c36d2bc6af02ad93e6226f230) chore(deps): raise dependency minimums for `all` (#6986)
- [`0bf1676`](https://github.com/langchain-ai/deepagents/commit/0bf167654e5cadca10f46db3c233569d391b673e) chore(deps): raise dependency minimums for `all` (#6974)
- [`90d4ce3`](https://github.com/langchain-ai/deepagents/commit/90d4ce36dd6f9f402b8c40547972ffc13c8814ca) release(deepagents): 0.7.26 (#6944)
- [`4cb03c0`](https://github.com/langchain-ai/deepagents/commit/4cb03c0267fc9ac695d8b6fa5807aab9b7ac687a) chore(deps): raise dependency minimums for `all` (#6962)
- [`e6d4fbf`](https://github.com/langchain-ai/deepagents/commit/e6d4fbf5260b3611ea6a9a5276cdb8655d31213c) chore(deps): raise dependency minimums for `all` (#6939)
- [`c6c340d`](https://github.com/langchain-ai/deepagents/commit/c6c340d47d2013a2e7b7230698f73977b7de6756) release(deepagents): 0.7.25 (#6901)
- [`77da3b8`](https://github.com/langchain-ai/deepagents/commit/77da3b81929569e8baa91c6328dad3f22e73c5e6) chore(deps): refresh editable SDK lockfile metadata (#6929)
- [`c96d912`](https://github.com/langchain-ai/deepagents/commit/c96d912ba70a601f0e259cded6b428f957b88cbf) chore(deps): raise dependency minimums for `all` (#6915)
- [`53238e9`](https://github.com/langchain-ai/deepagents/commit/53238e943fb2edd25c157178c4d6e73e2ba75f2c) chore(deps): raise dependency minimums for `all` (#6899)
- [`d312bcd`](https://github.com/langchain-ai/deepagents/commit/d312bcda3c71dfc4201b993776a413c8b457b483) chore(deps): raise dependency minimums for `all` (#6898)
- [`838433b`](https://github.com/langchain-ai/deepagents/commit/838433b4dcd9efa0bacba67d07e61440b43c4459) release(deepagents): 0.7.24 (#6865)
- [`e62ab9b`](https://github.com/langchain-ai/deepagents/commit/e62ab9b08f60e46e72861d1a88ab8f4754bf0352) chore(deps): raise dependency minimums for `all` (#6873)
- [`9f4bdf7`](https://github.com/langchain-ai/deepagents/commit/9f4bdf7c8b8bfc86877729d80ed286bd71d78706) release(deepagents): 0.7.23 (#6822)
- [`d900425`](https://github.com/langchain-ai/deepagents/commit/d900425c7b834319e7ae797f6d77017b3b4c6e4e) chore(deps): raise dependency minimums for `all` (#6829)
- [`cd5f0e2`](https://github.com/langchain-ai/deepagents/commit/cd5f0e2ca3f0f2306a6f11bce39c097ec9cd9503) build(deps): bump langgraph-sdk from 0.4.2 to 0.4.4 in /libs/partners/daytona (#6789)
- [`f5d2178`](https://github.com/langchain-ai/deepagents/commit/f5d217893a2f2518dd21667ba22ac4d3eed72ed2) build(deps): bump multidict from 6.7.1 to 6.9.1 in /libs/partners/daytona (#6791)
- [`dcba425`](https://github.com/langchain-ai/deepagents/commit/dcba42543955cadd63718f64ba0165864e7323ad) release(deepagents): 0.7.22 (#6744)
- [`337f4d0`](https://github.com/langchain-ai/deepagents/commit/337f4d08e26ddd2e8409535c12be451e4bf2c2ef) chore(deps): raise dependency minimums for `all` (#6730)
- [`6b1385c`](https://github.com/langchain-ai/deepagents/commit/6b1385cadc01aeb36c906e47a58c0765604e24f8) chore(deps): raise dependency minimums for `all` (#6706)
- [`4394bcd`](https://github.com/langchain-ai/deepagents/commit/4394bcd00b8eb46e7c423939643a0dfcfb5d8773) release(deepagents): 0.7.21 (#6676)
- [`402b661`](https://github.com/langchain-ai/deepagents/commit/402b6616cc233aabc9566c735b968c3872840d57) build(deps): bump urllib3 from 2.7.0 to 2.8.0 in /libs/partners/daytona (#6652)
- [`c9b2ce1`](https://github.com/langchain-ai/deepagents/commit/c9b2ce194e422d2a61b9faf3732da15d90623c13) chore(deps): raise dependency minimums for `all` (#6645)
- [`6bf7802`](https://github.com/langchain-ai/deepagents/commit/6bf780284ec49789613df20d85866a0ad981e579) release(deepagents): 0.7.20 (#6624)
- [`a87e219`](https://github.com/langchain-ai/deepagents/commit/a87e21955cb42c47f1e2ee728a37b76547939567) chore(deps): raise dependency minimums for `all` (#6631)
- [`689898e`](https://github.com/langchain-ai/deepagents/commit/689898e50a0cab7e05b5b81132b7cee4304e0020) chore(deps): raise dependency minimums for `all` (#6628)
- [`512334f`](https://github.com/langchain-ai/deepagents/commit/512334f09b21e2bb4cf4b039ef5f89752ed42026) chore(deps): raise dependency minimums for `all` (#6548)
- [`bb49cf5`](https://github.com/langchain-ai/deepagents/commit/bb49cf50d3450a3bbebe8d25240cb7ef6379bd0d) release(deepagents): 0.7.19 (#6523)
- [`123f9c3`](https://github.com/langchain-ai/deepagents/commit/123f9c3030548e609798e54c11ca9455653b5764) chore(deps): raise dependency minimums for `all` (#6535)
- [`c172018`](https://github.com/langchain-ai/deepagents/commit/c17201847dd65390662a763ddd93ed84bbb8931c) release(deepagents): 0.7.18 (#6491)
- [`9a50bf5`](https://github.com/langchain-ai/deepagents/commit/9a50bf5c966fb599e240a6c52167133daaff5565) chore(deps): raise dependency minimums for `all` (#6498)
- [`e5406d0`](https://github.com/langchain-ai/deepagents/commit/e5406d0c735c7eb72548b7ea616991987bfb21e6) release(deepagents): 0.7.17 (#6458)
- [`cf5c560`](https://github.com/langchain-ai/deepagents/commit/cf5c5606648efa8bb27684fac97d9e794039707d) chore(deps): raise dependency minimums for `all` (#6478)
- [`0114a3f`](https://github.com/langchain-ai/deepagents/commit/0114a3f824cd5e626acb7b64d3c8e24468319d09) release(deepagents): 0.7.16 (#6372)
- [`f173a01`](https://github.com/langchain-ai/deepagents/commit/f173a011a60d73163410f88d3b6cbf33670e768c) chore(deps): raise dependency minimums for `all` (#6440)
- [`5709c1e`](https://github.com/langchain-ai/deepagents/commit/5709c1e98262cd87ac7319049c577b85f7d04626) chore(deps): bump anyio from 4.12.1 to 4.14.2 in /libs/partners/daytona (#6410)
- [`0f5a2b5`](https://github.com/langchain-ai/deepagents/commit/0f5a2b57fa5dbb3a7d8f16dc280cb5b1506ea8c0) release(deepagents): 0.7.15 (#6298)
- [`7a7f382`](https://github.com/langchain-ai/deepagents/commit/7a7f3827430572a0976002003d9f19d48ae20360) chore(deps): raise dependency minimums for `all` (#6336)
- [`06e5886`](https://github.com/langchain-ai/deepagents/commit/06e588610c08e7544ee77ac09aa971921a5c893e) chore(deps): raise dependency minimums for `all` (#6310)
- [`ded0f11`](https://github.com/langchain-ai/deepagents/commit/ded0f1187f6bf81e2f679ea7b16ead7760d775a6) release(deepagents): 0.7.14 (#6050)
- [`3b99e73`](https://github.com/langchain-ai/deepagents/commit/3b99e7333e501d1ccf84b5fbaaacc9de815ce4b7) chore(deps): raise dependency minimums for `all` (#6280)
- [`9f6bd6a`](https://github.com/langchain-ai/deepagents/commit/9f6bd6ae200ff2e45e8c0246343b6c8936707447) chore(deps): raise dependency minimums for `all` (#6268)
- [`d889f40`](https://github.com/langchain-ai/deepagents/commit/d889f40ec72880ae2642300f62eceb9efe185757) chore(deps): raise dependency minimums for `all` (#6237)
- [`7c3cebe`](https://github.com/langchain-ai/deepagents/commit/7c3cebe1df407ac947c34d56a1a21945aaddae23) chore(deps): raise dependency minimums for `all` (#6212)
- [`18106be`](https://github.com/langchain-ai/deepagents/commit/18106be837bcdd9005b2dd73280d871a0621bf99) chore(deps): raise dependency minimums for `all` (#6130)
- [`07d2952`](https://github.com/langchain-ai/deepagents/commit/07d2952d346d81d06bd181db8c560a77f2b51bc8) chore(deps): raise dependency minimums for `all` (#6096)
- [`bdccb82`](https://github.com/langchain-ai/deepagents/commit/bdccb82d21f998174354a25daa4624dc0d9da97b) chore(deps): raise dependency minimums for `all` (#6053)
- [`ac0fac4`](https://github.com/langchain-ai/deepagents/commit/ac0fac42f6ece4147c3636896358e1a9391cd94a) chore(deps): raise dependency minimums for `all` (#6046)
- [`1aae374`](https://github.com/langchain-ai/deepagents/commit/1aae3746682a65c837c5dd0f165b685253fe9465) release(deepagents): 0.7.13 (#6031)
- [`a197807`](https://github.com/langchain-ai/deepagents/commit/a19780791e020ccb772701285c459fb6a4dab0ff) release(deepagents): 0.7.12 (#6006)
- [`4bc1100`](https://github.com/langchain-ai/deepagents/commit/4bc11004ba86999c2f6d59b1d958b53195619bcc) release(deepagents): 0.7.11 (#5977)
- [`77b0f01`](https://github.com/langchain-ai/deepagents/commit/77b0f018f9d736c9409e44d03edaf9985b59f271) chore(deps): raise dependency minimums for `all` (#5936)
- [`d26b53a`](https://github.com/langchain-ai/deepagents/commit/d26b53ad12265375c6dcf6b1c1501e0a4adf0ea3) release(deepagents): 0.7.10 (#5838)
- [`7afa60e`](https://github.com/langchain-ai/deepagents/commit/7afa60efc96c6852933eb6a0d5c9f699cd751e43) chore(deps): raise dependency minimums for `all` (#5912)
- [`1c2355e`](https://github.com/langchain-ai/deepagents/commit/1c2355e39cbccb834b82e68757418dec35a5a3d4) chore(deps): raise dependency minimums for `all` (#5906)
- [`4a4cb10`](https://github.com/langchain-ai/deepagents/commit/4a4cb10dd8604fb67b34ba20e49c1756e68ae3d5) chore(deps): raise dependency minimums for `deepagents` (#5871)
- [`7155253`](https://github.com/langchain-ai/deepagents/commit/71552532bb33a8744a5b1c0b48e8047478169c42) release(deepagents): 0.7.9 (#5754)
- [`29cd02a`](https://github.com/langchain-ai/deepagents/commit/29cd02ae1762e4cefa4962e60fa250642ec8815a) chore(deps): raise dependency minimums for `deepagents` (#5805)
- [`75095bb`](https://github.com/langchain-ai/deepagents/commit/75095bb81dc200ef33652bcaa173a758312f3962) chore(deps): raise dependency minimums for `all` (#5764)
- [`cf939b3`](https://github.com/langchain-ai/deepagents/commit/cf939b3f86fc86d74e389924da7a79894d849fcd) chore(deps): raise dependency minimums for `deepagents` (#5709)
- [`1e261ba`](https://github.com/langchain-ai/deepagents/commit/1e261ba201bb1af4dbc5cbc8b6424e709b850ea8) release(deepagents): 0.7.8 (#5705)
- [`31af8c1`](https://github.com/langchain-ai/deepagents/commit/31af8c11219c3c77f4530bc1e4adc3c140cfa6d5) chore(deps): raise dependency minimums for `deepagents` (#5662)
- [`16cb2e7`](https://github.com/langchain-ai/deepagents/commit/16cb2e76f4a36f312b595423c6134b43b248f563) chore(deps): raise dependency minimums for `deepagents` (#5646)
- [`42ed940`](https://github.com/langchain-ai/deepagents/commit/42ed9406f08dfec11369631011405c1dc650293a) release(deepagents): 0.7.7 (#5498)
- [`3afad63`](https://github.com/langchain-ai/deepagents/commit/3afad63e2290559c36a1c386ab2ac9a2d1f8b64a) release(deepagents): 0.7.6 (#5491)
- [`a97bdb6`](https://github.com/langchain-ai/deepagents/commit/a97bdb65778a67c28b3ef7ca59e39a88850c0f2a) ci(infra): fail on unexpected test warnings (#5346)
- [`a6c06b0`](https://github.com/langchain-ai/deepagents/commit/a6c06b029710d34035af6ae1faded093cc8f3073) release(deepagents): 0.7.5 (#5327)
- [`a6e2608`](https://github.com/langchain-ai/deepagents/commit/a6e2608c382be362163e4f26f5ccc544cc13ccbd) chore(deps): bump `langchain-anthropic` to 1.5.4 (#5332)
- [`553a030`](https://github.com/langchain-ai/deepagents/commit/553a030a5b959ac8bb17d52447f915397f910f03) release(deepagents): 0.7.4 (#5305)
- [`5f776b5`](https://github.com/langchain-ai/deepagents/commit/5f776b5882709b62332183b8cae6a1c71866b43a) chore(deps): bump aiohttp from 3.14.2 to 3.14.3 in /libs/partners/daytona (#5274)
- [`047ab09`](https://github.com/langchain-ai/deepagents/commit/047ab09b4782a50aad3c6a5f6bb9e6ca9fee50e6) chore(deps): bump cryptography from 48.0.1 to 50.0.0 in /libs/partners/daytona (#5286)
- [`8217a27`](https://github.com/langchain-ai/deepagents/commit/8217a272a9c24dd9875a4068186253c80b0ca91b) chore(deps): bump aiohttp from 3.14.1 to 3.14.2 in /libs/partners/daytona (#5266)
- [`f60951e`](https://github.com/langchain-ai/deepagents/commit/f60951e3f5e4d7e57d6379a4bbc64259bdfdb884) release(deepagents): 0.7.3 (#5251)
- [`0063721`](https://github.com/langchain-ai/deepagents/commit/00637212084c7fe4c12993c95ab559b92aaa4fef) release(deepagents): 0.7.2 (#5230)
- [`9f582d5`](https://github.com/langchain-ai/deepagents/commit/9f582d5a1723ca881e28cd183a0b34c9134b8f07) release(deepagents-code): 0.1.51 (#5200)
- [`a4c1605`](https://github.com/langchain-ai/deepagents/commit/a4c1605bd5d4038718ead3b55af617d6ee2e9599) chore(deps): sync lockfiles after SDK packaging dep addition (#5204)

</details>

## deepagents==0.7.32: deepagents==0.7.32

**Published**: 2026-10-23

### Performance Improvements

- Avoid importing `langchain_anthropic` and `langchain_openai` at SDK import time ([#7204](https://github.com/langchain-ai/deepagents/pull/7204), [#7185](https://github.com/langchain-ai/deepagents/pull/7185)).

---

Internal maintainers: @mdrxy

Released by: @mdrxy

<details>
<summary>Git log since deepagents==0.7.31</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`e85c6b9`](https://github.com/langchain-ai/deepagents/commit/e85c6b98087861512d2c5240305e16cfac68a746) release(deepagents): 0.7.32 (#7188)
- [`492a184`](https://github.com/langchain-ai/deepagents/commit/492a184c5fc07364edaae464dd0bdc4e49af3e9e) perf(sdk): stop importing `langchain_anthropic` at import time (#7204)
- [`1fe9631`](https://github.com/langchain-ai/deepagents/commit/1fe963145de49dd62af807bff1b0e96f24c9ae07) perf(sdk): stop importing `langchain_openai` at import time (#7185)

</details>

## deepagents==0.7.31: deepagents==0.7.31

**Published**: 2026-10-23

### Features

- Expose execution output retention metadata in tracing ([#6876](https://github.com/langchain-ai/deepagents/pull/6876)).

### Bug Fixes

- Omit async task IDs from user replies by default ([#7174](https://github.com/langchain-ai/deepagents/pull/7174)).
- Preserve filesystem permissions in SDK middleware overrides ([#7166](https://github.com/langchain-ai/deepagents/pull/7166)).

---

**Special thanks** to everyone who reported the issues addressed in this release: @alex-feel ([#5388](https://github.com/langchain-ai/deepagents/issues/5388))

Internal maintainers: @lc-arjun, @mdrxy

Released by: @mdrxy

<details>
<summary>Git log since deepagents==0.7.30</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`f9604cb`](https://github.com/langchain-ai/deepagents/commit/f9604cbd94bd34645136302905cd80f4f1c1c4cd) release(deepagents): 0.7.31 (#7175)
- [`8b8e70a`](https://github.com/langchain-ai/deepagents/commit/8b8e70a1c5858e44cc4b8e7c499265c90a8c5786) feat(sdk): expose execution output retention metadata (#6876)
- [`6ae83f4`](https://github.com/langchain-ai/deepagents/commit/6ae83f4bc3ac444a6555f3cdd3878c4559fe5b81) fix(sdk): preserve filesystem permissions in middleware overrides (#7166)
- [`d179e24`](https://github.com/langchain-ai/deepagents/commit/d179e24d10ebc511810ff5268ece6875fda5bf64) chore(deps): raise dependency minimums for `all` (#7172)
- [`a551c88`](https://github.com/langchain-ai/deepagents/commit/a551c88389e390454e8363a4f1b74d41fd6b8c80) fix(sdk): omit async task IDs from user replies by default (#7174)
- [`c89da39`](https://github.com/langchain-ai/deepagents/commit/c89da392fbfdea1df7b6ff1ea8bad030efab090d) refactor(sdk): remove the `handoff` mode alias (#7165)
- [`078310a`](https://github.com/langchain-ai/deepagents/commit/078310a379212d9e78d4be0309fa5a587938e6a5) chore(deps): remove precautionary third-party upper bounds (#7136)
- [`0beb1e1`](https://github.com/langchain-ai/deepagents/commit/0beb1e1f827f88d7a07b568ddaf16d431b877ff9) chore(deps): raise dependency minimums for `all` (#7145)

</details>

## deepagents-code==0.2.1: deepagents-code==0.2.1

**Published**: 2026-10-23

### Features

- Support skill-scoped MCP tools ([#7010](https://github.com/langchain-ai/deepagents/pull/7010)).
- Default the Anthropic Auto classifier to Claude Sonnet 5.5 ([#7163](https://github.com/langchain-ai/deepagents/pull/7163)).

### Bug Fixes

- Automatically migrate to Python 3.14 when no other session is running ([#7160](https://github.com/langchain-ai/deepagents/pull/7160)).
- Use native structured output for the Anthropic Auto classifier ([#7162](https://github.com/langchain-ai/deepagents/pull/7162)).

---

**Special thanks** to everyone who reported the issues addressed in this release: @p4norman ([#7159](https://github.com/langchain-ai/deepagents/issues/7159))

Internal maintainers: @mdrxy

Released by: @mdrxy

<details>
<summary>Git log since deepagents-code==0.2.0</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`8f48aab`](https://github.com/langchain-ai/deepagents/commit/8f48aabe198158a606d4a9422015d4c98f7e4764) release(deepagents-code): 0.2.1 (#7161)
- [`edb9a78`](https://github.com/langchain-ai/deepagents/commit/edb9a78696e5232f3f5936dc752d3381796bc27f) chore(deps): bump `deepagents` pin in `deepagents-code` to 0.7.31 (#7176)
- [`227580e`](https://github.com/langchain-ai/deepagents/commit/227580e26c6cf0ebe2581dc5b488ad3eb3695b43) feat(code): support skill-scoped MCP tools (#7010)
- [`f9604cb`](https://github.com/langchain-ai/deepagents/commit/f9604cbd94bd34645136302905cd80f4f1c1c4cd) release(deepagents): 0.7.31 (#7175)
- [`d179e24`](https://github.com/langchain-ai/deepagents/commit/d179e24d10ebc511810ff5268ece6875fda5bf64) chore(deps): raise dependency minimums for `all` (#7172)
- [`7bb57e6`](https://github.com/langchain-ai/deepagents/commit/7bb57e664ea2ff41df22042f9aebcf15295b20cd) fix(code): use native structured output for Anthropic Auto classifier (#7162)
- [`ad0fc5e`](https://github.com/langchain-ai/deepagents/commit/ad0fc5ea19c41611891e40af403bcacb0a123fdf) feat(code): default Anthropic Auto classifier to Claude Sonnet 5.5 (#7163)
- [`acfb272`](https://github.com/langchain-ai/deepagents/commit/acfb272c132e17d8fa813e52c218c5e9c0c0387a) fix(code): auto-migrate to Python 3.14 when no other session is running (#7160)

</details>

## deepagents==0.7.30: deepagents==0.7.30

**Published**: 2026-10-22

### Features

- Async subagent follow-ups can now queue without interrupting active work ([#7082](https://github.com/langchain-ai/deepagents/pull/7082)).
- Added `notify_parent` ([#7132](https://github.com/langchain-ai/deepagents/pull/7132)) and `webhook` ([#7072](https://github.com/langchain-ai/deepagents/pull/7072)) to `AsyncSubAgent`.

### Bug Fixes

- Async subagent checks now report runs cancelled on the server and omit reasoning from results ([#7060](https://github.com/langchain-ai/deepagents/pull/7060)).
- Async subagent checks now retry when a thread cannot be read ([#7124](https://github.com/langchain-ai/deepagents/pull/7124)).
- Summaries now remove reasoning blocks associated with the history they replace ([#7127](https://github.com/langchain-ai/deepagents/pull/7127)).
- `LocalShellBackend` now enforces output limits in UTF-8 bytes ([#7074](https://github.com/langchain-ai/deepagents/pull/7074)).

---

**Special thanks** to everyone who reported the issues addressed in this release: @david-dev666 ([#7039](https://github.com/langchain-ai/deepagents/issues/7039))

Internal maintainers: @baskaryan, @ccurme, @mdrxy, @thushanth-bengre-langchain

Released by: @mdrxy

<details>
<summary>Git log since deepagents==0.7.29</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`42adc1b`](https://github.com/langchain-ai/deepagents/commit/42adc1bca1147715ac58fad49bc74c12fa63bb84) release(deepagents): 0.7.30 (#7076)
- [`a7e1e25`](https://github.com/langchain-ai/deepagents/commit/a7e1e2575c1e96b721a0a3e0ecde6e85612ac30d) feat(sdk): queue async subagent follow-ups without interrupting active work (#7082)
- [`3ae25ff`](https://github.com/langchain-ai/deepagents/commit/3ae25ff85f94f15815c377e73841173a722299d6) feat(sdk): add `notify_parent` to `AsyncSubAgent` (#7132)
- [`6032a5a`](https://github.com/langchain-ai/deepagents/commit/6032a5ade4908d75eb2662e602f1f61a1d7a9bcf) fix(sdk): drop reasoning blocks bound to history a summary replaced (#7127)
- [`7a7c4e3`](https://github.com/langchain-ai/deepagents/commit/7a7c4e3708981568f96eb7fbc86aaef696c03001) feat(sdk): add `webhook` to `AsyncSubAgent` (#7072)
- [`55eb0e1`](https://github.com/langchain-ai/deepagents/commit/55eb0e1aa3a10fb28a016b2a9cfddc38bfc653ab) chore(deps-dev): bump pillow from 12.3.0 to 13.0.0 in /libs/deepagents (#7109)
- [`d57b09b`](https://github.com/langchain-ai/deepagents/commit/d57b09b1a7a9890fee2db649e6418416f039df14) fix(sdk): retry an async subagent check when its thread can't be read (#7124)
- [`4f8a656`](https://github.com/langchain-ai/deepagents/commit/4f8a6566d1c06c04f5d8d9614706f72ce64532e3) chore(repo): infer ty targets from package Python requirements (#7073)
- [`20a64c4`](https://github.com/langchain-ai/deepagents/commit/20a64c40c9429f303d0fa7e48e34cec8ccb9181a) chore(deps): bump certifi from 2026.2.25 to 2026.10.19 in /libs/deepagents (#7092)
- [`ac8d8e9`](https://github.com/langchain-ai/deepagents/commit/ac8d8e942a46bbc8e1f078fcb6b8d6393534abe2) fix(sdk): report async subagent runs cancelled on the server, and drop reasoning from check results (#7060)
- [`953d5dd`](https://github.com/langchain-ai/deepagents/commit/953d5dda8bd866663f49dfa0659a87c3f2cf0c26) fix(sdk): enforce `LocalShellBackend` output limits in UTF-8 bytes (#7074)

</details>

## deepagents-talon==0.1.0: deepagents-talon==0.1.0

**Published**: 2026-10-22

### ⚠ BREAKING CHANGES

- `deepagents-talon` now requires Python 3.14 (`>=3.14,<3.15`).

### Features

- Added `/effort` controls for reasoning. ([#7043](https://github.com/langchain-ai/deepagents/pull/7043))
- Added the NVIDIA OpenShell sandbox provider and an `openshell` extra for Talon. ([#6999](https://github.com/langchain-ai/deepagents/pull/6999), [#7000](https://github.com/langchain-ai/deepagents/pull/7000))
- Added independent breakout tasks for Slack and Discord. ([#6932](https://github.com/langchain-ai/deepagents/pull/6932))
- Discord guild mentions now receive replies in threads, as they do in Slack. ([#7012](https://github.com/langchain-ai/deepagents/pull/7012))
- Added configurable verbosity for interim progress updates. ([#7037](https://github.com/langchain-ai/deepagents/pull/7037))
- Made background subagent capacity and checkpoint backends configurable. ([#7048](https://github.com/langchain-ai/deepagents/pull/7048), [#6727](https://github.com/langchain-ai/deepagents/pull/6727))
- Skills can now be pinned to scheduled jobs and reload when their files change. ([#6906](https://github.com/langchain-ai/deepagents/pull/6906), [#6904](https://github.com/langchain-ai/deepagents/pull/6904))
- Inbound media is now stored as backend blobs. ([#6905](https://github.com/langchain-ai/deepagents/pull/6905))

### Bug Fixes

- Slack thread context now preserves other participants, includes authorized bot replies, and labels bot history as participant messages. ([#6862](https://github.com/langchain-ai/deepagents/pull/6862), [#6742](https://github.com/langchain-ai/deepagents/pull/6742), [#6743](https://github.com/langchain-ai/deepagents/pull/6743))
- Scheduled jobs are now shared across channel threads, while each run starts on a fresh thread. ([#6707](https://github.com/langchain-ai/deepagents/pull/6707), [#6936](https://github.com/langchain-ai/deepagents/pull/6936))
- Operator pairing approvals now work in shared chats. ([#6710](https://github.com/langchain-ai/deepagents/pull/6710))
- History search now resumes past the scan budget. ([#6740](https://github.com/langchain-ai/deepagents/pull/6740))
- Channel documents are now exposed without inlining their contents. ([#7049](https://github.com/langchain-ai/deepagents/pull/7049))
- Progress-tool guidance now reflects the configured verbosity. ([#7041](https://github.com/langchain-ai/deepagents/pull/7041))
- MCP OAuth requests now include a user agent. ([#6981](https://github.com/langchain-ai/deepagents/pull/6981))
- Raised minimum dependency versions. ([#6952](https://github.com/langchain-ai/deepagents/pull/6952))

---

**Special thanks** to everyone who reported the issues addressed in this release: @ramon-langchain ([#6878](https://github.com/langchain-ai/deepagents/issues/6878))

Internal maintainers: @hntrl, @jkennedyvz, @linted, @mdrxy

Released by: @mdrxy

<details>
<summary>Git log since deepagents-talon==0.0.9</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`191a28c`](https://github.com/langchain-ai/deepagents/commit/191a28c9e2b74bca42d3f8a7c8fb329008eabd25) release(deepagents-talon): 0.1.0 (#6708)
- [`981a87a`](https://github.com/langchain-ai/deepagents/commit/981a87a38c77f9b32320f0dc012f0bbbfbaa505f) release(deepagents-code): 0.2.0 (#7147)
- [`96eca0b`](https://github.com/langchain-ai/deepagents/commit/96eca0b2e13db0b9e3dd9822d062ad316ba0b5fa) feat(deps)!: require Python 3.14 (#7052)
- [`078310a`](https://github.com/langchain-ai/deepagents/commit/078310a379212d9e78d4be0309fa5a587938e6a5) chore(deps): remove precautionary third-party upper bounds (#7136)
- [`0beb1e1`](https://github.com/langchain-ai/deepagents/commit/0beb1e1f827f88d7a07b568ddaf16d431b877ff9) chore(deps): raise dependency minimums for `all` (#7145)
- [`0324ff3`](https://github.com/langchain-ai/deepagents/commit/0324ff31d18171fceddbd3084ff388b7a964c51b) release(deepagents-code): 0.1.88 (#7079)
- [`42adc1b`](https://github.com/langchain-ai/deepagents/commit/42adc1bca1147715ac58fad49bc74c12fa63bb84) release(deepagents): 0.7.30 (#7076)
- [`55eb0e1`](https://github.com/langchain-ai/deepagents/commit/55eb0e1aa3a10fb28a016b2a9cfddc38bfc653ab) chore(deps-dev): bump pillow from 12.3.0 to 13.0.0 in /libs/deepagents (#7109)
- [`6c1d6c6`](https://github.com/langchain-ai/deepagents/commit/6c1d6c620a8037d2b3a6d0abf46be4c0d5aa0033) chore(deps): bump pillow to 13.0.0 for security fixes (#7125)
- [`4251519`](https://github.com/langchain-ai/deepagents/commit/4251519a9e2244e8ed3996107efe4d30bbd6d9b4) chore(deps): bump certifi from 2026.7.22 to 2026.10.19 in /libs/talon (#7106)
- [`aed3f7f`](https://github.com/langchain-ai/deepagents/commit/aed3f7f1e17c6bf627fe804ad4219b24678935db) feat(talon): add independent Slack and Discord breakout tasks (#6932)
- [`be75459`](https://github.com/langchain-ai/deepagents/commit/be75459c444b53d21d633ef2ab997a01d0739c71) chore(repo): add missing Python upper bounds (#7075)
- [`d1962cf`](https://github.com/langchain-ai/deepagents/commit/d1962cf329681bb668a9a92b4a38833df235090b) release(deepagents-code): 0.1.87 (#7007)
- [`3abfb0a`](https://github.com/langchain-ai/deepagents/commit/3abfb0abcda658d4b64e74782f3316a11efc3faa) release(deepagents): 0.7.29 (#7029)
- [`8ccbd7f`](https://github.com/langchain-ai/deepagents/commit/8ccbd7fdf66a5204ac7636fd67e510163ab00d75) chore(deps): require `bsdiff4` 1.3.0 for Python 3.14 wheels (#7070)
- [`dea20ec`](https://github.com/langchain-ai/deepagents/commit/dea20ecc927f6ad50ce972f1a9da26f8b9e930e4) chore(deps): raise dependency minimums for `all` (#7065)
- [`fc21074`](https://github.com/langchain-ai/deepagents/commit/fc210741b2da06c93409100e0c92be3391db70a5) fix(talon): expose channel documents without inlining contents (#7049)
- [`3e904c8`](https://github.com/langchain-ai/deepagents/commit/3e904c8cffd39ddf461de2d890118383897c0c74) feat(talon): make background subagent capacity configurable (#7048)
- [`9a23fbb`](https://github.com/langchain-ai/deepagents/commit/9a23fbbb8e1fef0be9c24e33a0b92a4c6ef7fc77) chore(deps): raise dependency minimums for `all` (#7025)
- [`692c234`](https://github.com/langchain-ai/deepagents/commit/692c23400e813b37959a206f96e31b89460a310f) feat(talon): add `/effort` reasoning controls (#7043)
- [`0089e63`](https://github.com/langchain-ai/deepagents/commit/0089e635dce525055272883b53bc222f385beac1) fix(talon): align progress tool guidance with verbosity (#7041)
- [`4bf5022`](https://github.com/langchain-ai/deepagents/commit/4bf50225d9f2bd777c1b2aa722e76273eb772ab0) feat(talon): add configurable interim progress verbosity (#7037)
- [`2540af1`](https://github.com/langchain-ai/deepagents/commit/2540af1ecfc61452b2695bcda032db61279ce1bd) feat(talon): answer Discord guild mentions in threads, like Slack (#7012)
- [`85c1311`](https://github.com/langchain-ai/deepagents/commit/85c1311cc2b859a231e1fe1f556564ac80c07474) feat(talon): add `openshell` sandbox extra (#7000)
- [`577e3f1`](https://github.com/langchain-ai/deepagents/commit/577e3f1f2376f8522c47aedc9423de3805e9deb8) release(deepagents-code): 0.1.86 (#6967)
- [`9db018b`](https://github.com/langchain-ai/deepagents/commit/9db018bf1b94c11f06ea4f33d69d133c34097e08) release(deepagents): 0.7.28 (#7003)
- [`84d4b14`](https://github.com/langchain-ai/deepagents/commit/84d4b146cdc3ab45e3e0b9c79c972690ad814ab1) feat(code): add NVIDIA OpenShell sandbox provider (#6999)
- [`991fb7d`](https://github.com/langchain-ai/deepagents/commit/991fb7d3e65b69b842aa2be8a68f5256f7807570) release(deepagents): 0.7.27 (#6982)
- [`994f6c1`](https://github.com/langchain-ai/deepagents/commit/994f6c1a9c4836240b1441e30fd094b715e6b62f) test(talon): prune redundant configuration and wiring tests (#6991)
- [`11aaba8`](https://github.com/langchain-ai/deepagents/commit/11aaba8bb259494c36d2bc6af02ad93e6226f230) chore(deps): raise dependency minimums for `all` (#6986)
- [`7f474e1`](https://github.com/langchain-ai/deepagents/commit/7f474e1527dd8b014d53ebb6aa66321a54798ced) fix(talon): identify MCP OAuth requests with a user agent (#6981)
- [`0bf1676`](https://github.com/langchain-ai/deepagents/commit/0bf167654e5cadca10f46db3c233569d391b673e) chore(deps): raise dependency minimums for `all` (#6974)
- [`90d4ce3`](https://github.com/langchain-ai/deepagents/commit/90d4ce36dd6f9f402b8c40547972ffc13c8814ca) release(deepagents): 0.7.26 (#6944)
- [`4cb03c0`](https://github.com/langchain-ai/deepagents/commit/4cb03c0267fc9ac695d8b6fa5807aab9b7ac687a) chore(deps): raise dependency minimums for `all` (#6962)
- [`05e62d9`](https://github.com/langchain-ai/deepagents/commit/05e62d99d8554689c8b4227e6fb791d2683bd727) chore(deps): bump `genai-prices` in `deepagents-code` to 0.1.13 (#6963)
- [`4bfa520`](https://github.com/langchain-ai/deepagents/commit/4bfa52000ef65ac623d8ada0cb67f67cbdd663ea) release(deepagents-code): 0.1.85 (#6908)
- [`3c1aac9`](https://github.com/langchain-ai/deepagents/commit/3c1aac97c96755530eefaf8b0d1d88fbf43c4566) fix(talon): raise dependency minimums (#6952)
- [`f45c8ee`](https://github.com/langchain-ai/deepagents/commit/f45c8eea170fbb9977af2335ebb7a992bbab0a05) chore(deps): bump `deepagents` pin in `deepagents-code` to 0.7.25 (#6931)
- [`e6d4fbf`](https://github.com/langchain-ai/deepagents/commit/e6d4fbf5260b3611ea6a9a5276cdb8655d31213c) chore(deps): raise dependency minimums for `all` (#6939)
- [`7a27b8c`](https://github.com/langchain-ai/deepagents/commit/7a27b8c3c945bdae2932769a25969202800c8a37) fix(talon): start each cron run on a fresh thread (#6936)
- [`c6c340d`](https://github.com/langchain-ai/deepagents/commit/c6c340d47d2013a2e7b7230698f73977b7de6756) release(deepagents): 0.7.25 (#6901)
- [`77da3b8`](https://github.com/langchain-ai/deepagents/commit/77da3b81929569e8baa91c6328dad3f22e73c5e6) chore(deps): refresh editable SDK lockfile metadata (#6929)
- [`e0d8311`](https://github.com/langchain-ai/deepagents/commit/e0d83113cb07b46bbb8039f7ff40471393a7d4e7) release(langchain-quickjs): 0.3.9 (#6927)
- [`fe6c875`](https://github.com/langchain-ai/deepagents/commit/fe6c87574865040439666e1c54ec92760e9c87d1) ci(repo): require lockfile validation before merges (#6920)
- [`a2b287d`](https://github.com/langchain-ai/deepagents/commit/a2b287d36006f0369dc1e7a8a4374b7c3d7cb8dc) feat(talon): pin skills to scheduled jobs (#6906)
- [`c96d912`](https://github.com/langchain-ai/deepagents/commit/c96d912ba70a601f0e259cded6b428f957b88cbf) chore(deps): raise dependency minimums for `all` (#6915)
- [`a96a3b6`](https://github.com/langchain-ai/deepagents/commit/a96a3b63b206feef23af9237a1a64a93d1f52aef) feat(talon): store inbound media as backend blobs (#6905)
- [`bfd09fb`](https://github.com/langchain-ai/deepagents/commit/bfd09fb46e52e436fc1727d743cff915823a4093) feat(talon): reload skills when skill files change (#6904)
- [`32bed90`](https://github.com/langchain-ai/deepagents/commit/32bed909cc3c340ee2f4351f7cdc639d48c481a3) release(deepagents-acp): 0.0.13 (#6685)
- [`2069079`](https://github.com/langchain-ai/deepagents/commit/2069079e09546060f5b52b2cd4f0e3c813e820f3) release(deepagents-code): 0.1.84 (#6891)
- [`53238e9`](https://github.com/langchain-ai/deepagents/commit/53238e943fb2edd25c157178c4d6e73e2ba75f2c) chore(deps): raise dependency minimums for `all` (#6899)
- [`d312bcd`](https://github.com/langchain-ai/deepagents/commit/d312bcda3c71dfc4201b993776a413c8b457b483) chore(deps): raise dependency minimums for `all` (#6898)
- [`838433b`](https://github.com/langchain-ai/deepagents/commit/838433b4dcd9efa0bacba67d07e61440b43c4459) release(deepagents): 0.7.24 (#6865)
- [`e62ab9b`](https://github.com/langchain-ai/deepagents/commit/e62ab9b08f60e46e72861d1a88ab8f4754bf0352) chore(deps): raise dependency minimums for `all` (#6873)
- [`bfd9f22`](https://github.com/langchain-ai/deepagents/commit/bfd9f22fc558d5e90c809cf3beccb64aa69f3556) fix(talon): preserve other participants in Slack thread context (#6862)
- [`caaa7e7`](https://github.com/langchain-ai/deepagents/commit/caaa7e7c12d214afa5cf0a1afed8eb6232aa6f7b) release(deepagents-code): 0.1.83 (#6846)
- [`5d73542`](https://github.com/langchain-ai/deepagents/commit/5d735426f6c3cd44edb23730223a73c6e2ae8e8e) chore(deps): raise dependency minimums for `all` (#6845)
- [`b62d03f`](https://github.com/langchain-ai/deepagents/commit/b62d03f0bca07151208fa540aa6bde143d52c7a4) chore(deps): raise dependency minimums for `all` (#6834)
- [`9f4bdf7`](https://github.com/langchain-ai/deepagents/commit/9f4bdf7c8b8bfc86877729d80ed286bd71d78706) release(deepagents): 0.7.23 (#6822)
- [`981c043`](https://github.com/langchain-ai/deepagents/commit/981c04389d60b99c014a9d6d00a9fd84ae29978d) release(deepagents-code): 0.1.82 (#6813)
- [`d900425`](https://github.com/langchain-ai/deepagents/commit/d900425c7b834319e7ae797f6d77017b3b4c6e4e) chore(deps): raise dependency minimums for `all` (#6829)
- [`1610cd9`](https://github.com/langchain-ai/deepagents/commit/1610cd9553eeff1a269bda321c7b37ecd703fb2a) build(deps): bump langgraph-sdk from 0.4.5 to 0.4.6 in /libs/talon (#6814)
- [`4fb5198`](https://github.com/langchain-ai/deepagents/commit/4fb51988f8b7afd9a947d5a5ea559115f68bc00a) build(deps): bump fsspec from 2026.7.0 to 2026.9.0 in /libs/talon (#6785)
- [`5af46b9`](https://github.com/langchain-ai/deepagents/commit/5af46b98cd9782f8e60a3937f3414e8d45cb8093) build(deps): bump multidict from 6.7.1 to 6.9.1 in /libs/talon (#6788)
- [`af7e89c`](https://github.com/langchain-ai/deepagents/commit/af7e89cc5d3e680424ec93666c4ebef62bc25341) chore(deps): raise dependency minimums for `all` (#6809)
- [`02ed19a`](https://github.com/langchain-ai/deepagents/commit/02ed19a42715fe0e9f2059fe8cf4fe6883054f08) release(deepagents-code): 0.1.81 (#6725)
- [`dcba425`](https://github.com/langchain-ai/deepagents/commit/dcba42543955cadd63718f64ba0165864e7323ad) release(deepagents): 0.7.22 (#6744)
- [`337f4d0`](https://github.com/langchain-ai/deepagents/commit/337f4d08e26ddd2e8409535c12be451e4bf2c2ef) chore(deps): raise dependency minimums for `all` (#6730)
- [`e156592`](https://github.com/langchain-ai/deepagents/commit/e156592ac2dcb667193c885d1529cef83311d6f7) fix(talon): label bot history as participant messages (#6743)
- [`3a8a983`](https://github.com/langchain-ai/deepagents/commit/3a8a983e379a4bcccace15dcbc0914bd3cea753c) fix(talon): include authorized bot replies in Slack thread history (#6742)
- [`11600fb`](https://github.com/langchain-ai/deepagents/commit/11600fb7ab9a3f081c1f0c8640f1a864c1c7d71b) fix(talon): resume history search past the scan budget (#6740)
- [`7bc9474`](https://github.com/langchain-ai/deepagents/commit/7bc94742bb503772e207a46d29bbd7cea13e7129) feat(talon): make checkpoint backends configurable (#6727)
- [`e4c1ffe`](https://github.com/langchain-ai/deepagents/commit/e4c1ffe9ee63d7854147de490ca27495ef157a7b) release(deepagents-code): 0.1.80 (#6636)
- [`b00affd`](https://github.com/langchain-ai/deepagents/commit/b00affd643cac9789a2fc4b47bf74056eefdc423) fix(talon): allow operator pairing approvals in shared chats (#6710)
- [`6bae886`](https://github.com/langchain-ai/deepagents/commit/6bae88610c035b923f538beb99c1dc70850225e1) fix(talon): share cron jobs across channel threads (#6707)
- [`6b1385c`](https://github.com/langchain-ai/deepagents/commit/6b1385cadc01aeb36c906e47a58c0765604e24f8) chore(deps): raise dependency minimums for `all` (#6706)

</details>

## deepagents-code==0.2.0: deepagents-code==0.2.0

**Published**: 2026-10-22

### ⚠ BREAKING CHANGES

- `deepagents-code` now requires Python 3.14 (`>=3.14,<3.15`). If you have auto-upgrade enabled, this should be handled for you automatically. Otherwise, re-run the dcode installer or recreate your environment with Python 3.14.

### Bug Fixes

- Decode Git output as UTF-8.

---

Thanks to our community contributors: @roydonsequeira

**Special thanks** to everyone who reported the issues addressed in this release: @roydonsequeira ([#7119](https://github.com/langchain-ai/deepagents/issues/7119))

Internal maintainers: @mdrxy

Released by: @mdrxy

<details>
<summary>Git log since deepagents-code==0.1.88</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`981a87a`](https://github.com/langchain-ai/deepagents/commit/981a87a38c77f9b32320f0dc012f0bbbfbaa505f) release(deepagents-code): 0.2.0 (#7147)
- [`86f1502`](https://github.com/langchain-ai/deepagents/commit/86f1502cc85c0e9acb67ab1f1bb8202de52c1aa5) test(code): prune low-value startup tip tests (#7154)
- [`532ad96`](https://github.com/langchain-ai/deepagents/commit/532ad961012cdf58afda54855e4a30c4455fdd9a) chore(code): trim startup tips (#7152)
- [`96eca0b`](https://github.com/langchain-ai/deepagents/commit/96eca0b2e13db0b9e3dd9822d062ad316ba0b5fa) feat(deps)!: require Python 3.14 (#7052)
- [`078310a`](https://github.com/langchain-ai/deepagents/commit/078310a379212d9e78d4be0309fa5a587938e6a5) chore(deps): remove precautionary third-party upper bounds (#7136)
- [`4f3ca06`](https://github.com/langchain-ai/deepagents/commit/4f3ca06ef1dad7a8a03c9ead515860f52ab1de4d) fix(code): decode git output as UTF-8 (#7142)
- [`0beb1e1`](https://github.com/langchain-ai/deepagents/commit/0beb1e1f827f88d7a07b568ddaf16d431b877ff9) chore(deps): raise dependency minimums for `all` (#7145)

</details>

## deepagents-code==0.1.88: deepagents-code==0.1.88

**Published**: 2026-10-22

### Bug Fixes

- Fixed async subagents to pass through `webhook` configuration.
- Fixed bridge compatibility with Python 3.14.
- Silenced no-op automatic cache offloads.

---

Internal maintainers: @mdrxy

Released by: @mdrxy

<details>
<summary>Git log since deepagents-code==0.1.87</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`0324ff3`](https://github.com/langchain-ai/deepagents/commit/0324ff31d18171fceddbd3084ff388b7a964c51b) release(deepagents-code): 0.1.88 (#7079)
- [`914de8b`](https://github.com/langchain-ai/deepagents/commit/914de8be68ff48b22418ceb2f9c6baf801f41afa) fix(code): bridge upgrades to Python 3.14 (#7081)
- [`6f6002c`](https://github.com/langchain-ai/deepagents/commit/6f6002c08c4efa12b847ce319c36bd41df5f3b72) fix(code): pass through async subagent `webhook` configuration (#7130)
- [`58e727b`](https://github.com/langchain-ai/deepagents/commit/58e727b3ef9674d7d502483601b8b07a796751da) test(code): await summary preference persistence workers (#7140)
- [`4fc9dae`](https://github.com/langchain-ai/deepagents/commit/4fc9dae7c97a1a9eb47e513c81bc5c20baa654b7) chore(deps): bump `deepagents` pin in `deepagents-code` to 0.7.30 (#7139)
- [`42adc1b`](https://github.com/langchain-ai/deepagents/commit/42adc1bca1147715ac58fad49bc74c12fa63bb84) release(deepagents): 0.7.30 (#7076)
- [`7f1d73a`](https://github.com/langchain-ai/deepagents/commit/7f1d73aea928851760b388450233bc1ff653e2f9) test(code): wait for hook status instead of a fixed sleep (#7134)
- [`55eb0e1`](https://github.com/langchain-ai/deepagents/commit/55eb0e1aa3a10fb28a016b2a9cfddc38bfc653ab) chore(deps-dev): bump pillow from 12.3.0 to 13.0.0 in /libs/deepagents (#7109)
- [`6c1d6c6`](https://github.com/langchain-ai/deepagents/commit/6c1d6c620a8037d2b3a6d0abf46be4c0d5aa0033) chore(deps): bump pillow to 13.0.0 for security fixes (#7125)
- [`b3bbe1b`](https://github.com/langchain-ai/deepagents/commit/b3bbe1bf742cd04ef24ca8f58f8ab99891c09749) chore(deps): bump certifi from 2026.6.17 to 2026.10.19 in /libs/code (#7094)
- [`67405e7`](https://github.com/langchain-ai/deepagents/commit/67405e728e86a87b50a06c49d063fc9131b61081) chore(deps): bump aiohttp from 3.14.4 to 3.14.5 in /libs/code (#7093)
- [`215392a`](https://github.com/langchain-ai/deepagents/commit/215392aa3dfa08d21bc30a696b2347dcfbd44ebf) fix(code): silence no-op automatic cache offloads (#7078)

</details>

## deepagents==0.7.29: deepagents==0.7.29

**Published**: 2026-10-20

### Bug Fixes

- `CompositeBackend` now handles routes without a trailing slash.
- Text edits to binary files are now rejected.
- In-memory `grep` now skips binary files.

---

**Special thanks** to everyone who reported the issues addressed in this release: @david-dev666 ([#7033](https://github.com/langchain-ai/deepagents/issues/7033)), @cty-ut ([#7013](https://github.com/langchain-ai/deepagents/issues/7013), [#7030](https://github.com/langchain-ai/deepagents/issues/7030))

Internal maintainers: @ccurme

Released by: @mdrxy

<details>
<summary>Git log since deepagents==0.7.28</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`3abfb0a`](https://github.com/langchain-ai/deepagents/commit/3abfb0abcda658d4b64e74782f3316a11efc3faa) release(deepagents): 0.7.29 (#7029)
- [`7a70d6e`](https://github.com/langchain-ai/deepagents/commit/7a70d6e0e55ec818a454f071ff99295e5c12eab9) fix(sdk): reject text edits of binary files (#7069)
- [`9a23fbb`](https://github.com/langchain-ai/deepagents/commit/9a23fbbb8e1fef0be9c24e33a0b92a4c6ef7fc77) chore(deps): raise dependency minimums for `all` (#7025)
- [`97f856d`](https://github.com/langchain-ai/deepagents/commit/97f856dcb08264ef78722a4687cab9133ec5fb7a) fix(sdk): skip binary files in in-memory `grep` (#7032)
- [`0ce837b`](https://github.com/langchain-ai/deepagents/commit/0ce837bf69ff0efb10c2fa100039cc0c78a74a11) fix(sdk): accommodate routes without trailing slash in CompositeBackend (#7028)

</details>

## deepagents-code==0.1.87: deepagents-code==0.1.87

**Published**: 2026-10-20

### Features

- Resume threads in non-interactive mode ([#7011](https://github.com/langchain-ai/deepagents/pull/7011)).
- Compact large idle sessions before the prompt cache expires ([#6956](https://github.com/langchain-ai/deepagents/pull/6956)) and show the prompt-cache expiration time ([#7005](https://github.com/langchain-ai/deepagents/pull/7005)).
- Support custom Slack OAuth app identity ([#7061](https://github.com/langchain-ai/deepagents/pull/7061)).
- Load older threads from the thread switcher ([#7051](https://github.com/langchain-ai/deepagents/pull/7051)).

### Bug Fixes

- Stop the local server when its owner dies ([#7038](https://github.com/langchain-ai/deepagents/pull/7038)).
- Support non-ASCII file names in `@` mentions ([#7023](https://github.com/langchain-ai/deepagents/pull/7023)).
- Correct misleading `/reload` change summaries ([#7063](https://github.com/langchain-ai/deepagents/pull/7063)).

---

Thanks to our community contributors: @safal207, @roydonsequeira

**Special thanks** to everyone who reported the issues addressed in this release: @ramon-langchain ([#6878](https://github.com/langchain-ai/deepagents/issues/6878)), @p4norman ([#6930](https://github.com/langchain-ai/deepagents/issues/6930)), @roydonsequeira ([#6965](https://github.com/langchain-ai/deepagents/issues/6965))

Internal maintainers: @darieldatoon, @mdrxy

Released by: @mdrxy

<details>
<summary>Git log since deepagents-code==0.1.86</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`d1962cf`](https://github.com/langchain-ai/deepagents/commit/d1962cf329681bb668a9a92b4a38833df235090b) release(deepagents-code): 0.1.87 (#7007)
- [`c996f33`](https://github.com/langchain-ai/deepagents/commit/c996f332f2126a19fd80941137a3a36d1c66760c) chore(deps): bump `deepagents` pin in `deepagents-code` to 0.7.29 (#7071)
- [`3abfb0a`](https://github.com/langchain-ai/deepagents/commit/3abfb0abcda658d4b64e74782f3316a11efc3faa) release(deepagents): 0.7.29 (#7029)
- [`8ccbd7f`](https://github.com/langchain-ai/deepagents/commit/8ccbd7fdf66a5204ac7636fd67e510163ab00d75) chore(deps): require `bsdiff4` 1.3.0 for Python 3.14 wheels (#7070)
- [`79031db`](https://github.com/langchain-ai/deepagents/commit/79031db7fd2d0d2dfa0a12b5af0d985a9ba57d27) chore(deps): bump aiohttp from 3.14.3 to 3.14.4 in /libs/code (#7064)
- [`dea20ec`](https://github.com/langchain-ai/deepagents/commit/dea20ecc927f6ad50ce972f1a9da26f8b9e930e4) chore(deps): raise dependency minimums for `all` (#7065)
- [`a2f8843`](https://github.com/langchain-ai/deepagents/commit/a2f88434c5a4b5ce5244c468bb9f69b27831842d) feat(code): resume threads in non-interactive mode (#7011)
- [`b6504f6`](https://github.com/langchain-ai/deepagents/commit/b6504f6654ee6f25e1cd923087291de9e51572cc) fix(code): avoid misleading `/reload` change summary (#7063)
- [`3698b14`](https://github.com/langchain-ai/deepagents/commit/3698b146b7c2db6d15d42b2d77568f93e169f36a) feat(code): compact large idle sessions before cache expiry (#6956)
- [`612ccbd`](https://github.com/langchain-ai/deepagents/commit/612ccbd463b9eaa8f326e40ed0335bf4ee42b784) feat(code): support custom Slack OAuth app identity (#7061)
- [`82cca1d`](https://github.com/langchain-ai/deepagents/commit/82cca1da885152718f7e055a4b96835425da841f) feat(code): load older threads from the thread switcher (#7051)
- [`fc1dbad`](https://github.com/langchain-ai/deepagents/commit/fc1dbad249e82cb77776683aa891ec24dfb584fc) fix(code): stop the local server when its owner dies (#7038)
- [`12f70f2`](https://github.com/langchain-ai/deepagents/commit/12f70f27cc2e96ac715f4563e05b205be7adc275) fix(code): support non-ASCII file names in `@` mentions (#7023)
- [`9a23fbb`](https://github.com/langchain-ai/deepagents/commit/9a23fbbb8e1fef0be9c24e33a0b92a4c6ef7fc77) chore(deps): raise dependency minimums for `all` (#7025)
- [`3407dc3`](https://github.com/langchain-ai/deepagents/commit/3407dc33b9918c98c126097bf485dbf6d2f035bd) feat(code): show the prompt-cache expiration time (#7005)

</details>

## deepagents==0.7.28: deepagents==0.7.28

**Published**: 2026-10-16

### Bug Fixes

- Fixed `ContextHubBackend.glob` to honor the `path` argument.

---

Internal maintainers: @casparb

Released by: @ccurme

<details>
<summary>Git log since deepagents==0.7.27</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`9db018b`](https://github.com/langchain-ai/deepagents/commit/9db018bf1b94c11f06ea4f33d69d133c34097e08) release(deepagents): 0.7.28 (#7003)
- [`dd6706d`](https://github.com/langchain-ai/deepagents/commit/dd6706d3007b4a077985b38bbc0d4a792c7016bc) fix(sdk): make `ContextHubBackend.glob` honor `path` (#6998)

</details>

## deepagents==0.7.27: deepagents==0.7.27

**Published**: 2026-10-16

### Features

- Keep the main agent informed of asynchronous subagent status updates ([#6853](https://github.com/langchain-ai/deepagents/pull/6853)).

### Bug Fixes

- Pass subagent names to subagents ([#6987](https://github.com/langchain-ai/deepagents/pull/6987)).

---

Internal maintainers: @ccurme, @mdrxy, @thushanth-bengre-langchain

Released by: @ccurme

<details>
<summary>Git log since deepagents==0.7.26</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`991fb7d`](https://github.com/langchain-ai/deepagents/commit/991fb7d3e65b69b842aa2be8a68f5256f7807570) release(deepagents): 0.7.27 (#6982)
- [`11aaba8`](https://github.com/langchain-ai/deepagents/commit/11aaba8bb259494c36d2bc6af02ad93e6226f230) chore(deps): raise dependency minimums for `all` (#6986)
- [`610a5fb`](https://github.com/langchain-ai/deepagents/commit/610a5fb036120e272842684e4bbd4909c6cf7c1f) fix(sdk): propagate subagent name to subagents (#6987)
- [`9cf009b`](https://github.com/langchain-ai/deepagents/commit/9cf009bb21b6bf3578f94555ac4ebfbc59d4e500) feat(sdk): tell the main agent about async subagent status updates (#6853)
- [`0bf1676`](https://github.com/langchain-ai/deepagents/commit/0bf167654e5cadca10f46db3c233569d391b673e) chore(deps): raise dependency minimums for `all` (#6974)
- [`af51474`](https://github.com/langchain-ai/deepagents/commit/af51474ad0bef0bec9d429013028118c142799fc) test(sdk): keep Bedrock transport mocked across client copies (#6976)

</details>

## deepagents-code==0.1.86: deepagents-code==0.1.86

**Published**: 2026-10-16

### Features

- Add NVIDIA OpenShell as a sandbox provider ([#6999](https://github.com/langchain-ai/deepagents/pull/6999)).
- Show a banner when a prompt cache expires ([#6957](https://github.com/langchain-ai/deepagents/pull/6957)).

### Bug Fixes

- Add `/resume` as an alias and improve how alias matches are ranked ([#6988](https://github.com/langchain-ai/deepagents/pull/6988)).
- Report workspace refusals accurately when resuming a thread ([#6992](https://github.com/langchain-ai/deepagents/pull/6992)).
- Replace repeated thread-resume errors ([#6990](https://github.com/langchain-ai/deepagents/pull/6990)).
- Replace the chat input when recalling a prompt ([#6994](https://github.com/langchain-ai/deepagents/pull/6994)).
- Show an expired prompt cache in the footer ([#6970](https://github.com/langchain-ai/deepagents/pull/6970)).
- Provide actionable errors when Groq tool limits are reached ([#6996](https://github.com/langchain-ai/deepagents/pull/6996)).
- Compare effective interpreter permissions ([#6993](https://github.com/langchain-ai/deepagents/pull/6993)).

---

Internal maintainers: @linted, @mdrxy

Released by: @mdrxy

<details>
<summary>Git log since deepagents-code==0.1.85</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`577e3f1`](https://github.com/langchain-ai/deepagents/commit/577e3f1f2376f8522c47aedc9423de3805e9deb8) release(deepagents-code): 0.1.86 (#6967)
- [`c173bf9`](https://github.com/langchain-ai/deepagents/commit/c173bf91b9d40244e1600983cde38709c268db82) chore(deps): bump `deepagents` pin in `deepagents-code` to 0.7.28 (#7002)
- [`9db018b`](https://github.com/langchain-ai/deepagents/commit/9db018bf1b94c11f06ea4f33d69d133c34097e08) release(deepagents): 0.7.28 (#7003)
- [`84d4b14`](https://github.com/langchain-ai/deepagents/commit/84d4b146cdc3ab45e3e0b9c79c972690ad814ab1) feat(code): add NVIDIA OpenShell sandbox provider (#6999)
- [`991fb7d`](https://github.com/langchain-ai/deepagents/commit/991fb7d3e65b69b842aa2be8a68f5256f7807570) release(deepagents): 0.7.27 (#6982)
- [`0bf0bd3`](https://github.com/langchain-ai/deepagents/commit/0bf0bd36bf8008d563163f064cac738e42d6cfca) test(code): isolate unit tests from the system clipboard (#6997)
- [`12b12f9`](https://github.com/langchain-ai/deepagents/commit/12b12f966dd679f8ba3f134e6f4853fa88da80b3) fix(code): surface actionable Groq tool-limit errors (#6996)
- [`ba72013`](https://github.com/langchain-ai/deepagents/commit/ba72013ff06cfb9d41670e7dc37c219b9f5cc7c0) fix(code): replace chat input when recalling a prompt (#6994)
- [`fd3e64a`](https://github.com/langchain-ai/deepagents/commit/fd3e64ab6b605450bed5a2c22ef2ec84cd40542e) fix(code): replace repeated thread resume errors (#6990)
- [`23361fb`](https://github.com/langchain-ai/deepagents/commit/23361fb4bf796016e4ad7e07d0b223c02765491f) fix(code): compare effective interpreter permissions (#6993)
- [`0dfa1f6`](https://github.com/langchain-ai/deepagents/commit/0dfa1f6047006687b825d7909f9a3a890934057b) fix(code): report workspace refusals accurately during resume (#6992)
- [`d5641c0`](https://github.com/langchain-ai/deepagents/commit/d5641c086f7c57baf84261a3ef69765e1c0b7243) test(code): wait for thread naming modal to mount (#6989)
- [`964ec92`](https://github.com/langchain-ai/deepagents/commit/964ec92aeeb81e26e807805e611aeab1ee83c7be) fix(code): add `/resume` alias and rank alias matches (#6988)
- [`11aaba8`](https://github.com/langchain-ai/deepagents/commit/11aaba8bb259494c36d2bc6af02ad93e6226f230) chore(deps): raise dependency minimums for `all` (#6986)
- [`0bf1676`](https://github.com/langchain-ai/deepagents/commit/0bf167654e5cadca10f46db3c233569d391b673e) chore(deps): raise dependency minimums for `all` (#6974)
- [`db05dc1`](https://github.com/langchain-ai/deepagents/commit/db05dc178fd87ae21039c6d2a54367d9a3c16c3f) hotfix(code): hide expired cache banner during reconciliation (#6975)
- [`977e784`](https://github.com/langchain-ai/deepagents/commit/977e784dd7cb6a0f3cc0541055b9022299d07ec7) chore(deps): bump `deepagents` pin in `deepagents-code` to 0.7.26 (#6972)
- [`ade3f95`](https://github.com/langchain-ai/deepagents/commit/ade3f9560f45e3e6d018614e85a27b7c28841887) docs(code): raise the bar for startup tips (#6971)
- [`90d4ce3`](https://github.com/langchain-ai/deepagents/commit/90d4ce36dd6f9f402b8c40547972ffc13c8814ca) release(deepagents): 0.7.26 (#6944)
- [`23bc1d7`](https://github.com/langchain-ai/deepagents/commit/23bc1d77f94bef746f64cfae7730705e23485d52) fix(code): highlight expired prompt cache in the footer (#6970)
- [`70f4342`](https://github.com/langchain-ai/deepagents/commit/70f43426ce7c0bf2d03c616e4ef4845ab9b75ca5) feat(code): highlight expired prompt caches as banner (#6957)
- [`4cb03c0`](https://github.com/langchain-ai/deepagents/commit/4cb03c0267fc9ac695d8b6fa5807aab9b7ac687a) chore(deps): raise dependency minimums for `all` (#6962)
- [`05e62d9`](https://github.com/langchain-ai/deepagents/commit/05e62d99d8554689c8b4227e6fb791d2683bd727) chore(deps): bump `genai-prices` in `deepagents-code` to 0.1.13 (#6963)

</details>

## deepagents==0.7.26: deepagents==0.7.26

**Published**: 2026-10-15

### Features

- Async subagents now report when they’re waiting for a human. ([#6842](https://github.com/langchain-ai/deepagents/pull/6842))
- Async subagent runs now appear under their parent’s trace and identify the agent that launched them. ([#6823](https://github.com/langchain-ai/deepagents/pull/6823), [#6836](https://github.com/langchain-ai/deepagents/pull/6836))
- Summarization middleware now exposes its `summarizer`. ([#6900](https://github.com/langchain-ai/deepagents/pull/6900))

### Bug Fixes

- Preserve resolved tool-result paths. ([#6968](https://github.com/langchain-ai/deepagents/pull/6968))

---

**Special thanks** to everyone who reported the issues addressed in this release: @awg66 ([#6960](https://github.com/langchain-ai/deepagents/issues/6960)), @bhardwaj-vipul ([#1589](https://github.com/langchain-ai/deepagents/issues/1589))

Internal maintainers: @ccurme, @mdrxy, @thushanth-bengre-langchain

Released by: @ccurme

<details>
<summary>Git log since deepagents==0.7.25</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`90d4ce3`](https://github.com/langchain-ai/deepagents/commit/90d4ce36dd6f9f402b8c40547972ffc13c8814ca) release(deepagents): 0.7.26 (#6944)
- [`29d646f`](https://github.com/langchain-ai/deepagents/commit/29d646fd2d832a44c476964333eddecb0ec1c0cd) fix(sdk): preserve resolved tool-result paths (#6968)
- [`4cb03c0`](https://github.com/langchain-ai/deepagents/commit/4cb03c0267fc9ac695d8b6fa5807aab9b7ac687a) chore(deps): raise dependency minimums for `all` (#6962)
- [`825acb3`](https://github.com/langchain-ai/deepagents/commit/825acb3ca03bd103e4df6013b122eca8475d1982) feat(sdk): report async subagents that are waiting for a human (#6842)
- [`980da43`](https://github.com/langchain-ai/deepagents/commit/980da43761ef5c9e3134e58baef2effde630e6cd) docs(sdk): note reducers for `state_schema` fields that subagents write back (#6954)
- [`168ac6b`](https://github.com/langchain-ai/deepagents/commit/168ac6b7054edec7eb4c1923059cbaec67a7f5c1) feat(sdk): tell async subagents which agent launched them (#6836)
- [`3a4703d`](https://github.com/langchain-ai/deepagents/commit/3a4703d3d76e207d683002369562ca854b8829ab) docs(sdk): clarify `SubAgent.middleware` fork-mode inheritance (#6945)
- [`3cd9463`](https://github.com/langchain-ai/deepagents/commit/3cd94633d3fe5d434fbf492d64f6f53a3e6dcafe) feat(sdk): nest async subagent runs under the parent's trace (#6823)
- [`e6d4fbf`](https://github.com/langchain-ai/deepagents/commit/e6d4fbf5260b3611ea6a9a5276cdb8655d31213c) chore(deps): raise dependency minimums for `all` (#6939)
- [`4b955e8`](https://github.com/langchain-ai/deepagents/commit/4b955e844f09ccb0f546644ae705e9fc3b9928b0) feat(sdk): expose `summarizer` on summarization middleware (#6900)

</details>

## deepagents==0.7.25: deepagents==0.7.25

**Published**: 2026-10-14

### Features

- Read inline skill tool support from model profiles. ([#6879](https://github.com/langchain-ai/deepagents/pull/6879))

### Bug Fixes

- Filesystem permission rules and `interrupt_on` approvals now check both the requested and symlink-resolved paths; previously, `FilesystemBackend` followed symlinks after the check, potentially allowing access to denied paths. Review your rules and approvals for symlink targets. ([#6818](https://github.com/langchain-ai/deepagents/pull/6818))
- Fixed path-glob `grep` in sandboxes. ([#6910](https://github.com/langchain-ai/deepagents/pull/6910))

### Performance Improvements

- Sandbox searches now prefer ripgrep, and sandbox `grep` skips `.git`. ([#6919](https://github.com/langchain-ai/deepagents/pull/6919), [#6910](https://github.com/langchain-ai/deepagents/pull/6910))

---

**Special thanks** to everyone who reported the issues addressed in this release: @AlcebiadesFilho ([#6860](https://github.com/langchain-ai/deepagents/issues/6860))

Internal maintainers: @langchain-infra, @mdrxy, @richardscarrott, @thushanth-bengre-langchain

Released by: @hntrl

<details>
<summary>Git log since deepagents==0.7.24</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`c6c340d`](https://github.com/langchain-ai/deepagents/commit/c6c340d47d2013a2e7b7230698f73977b7de6756) release(deepagents): 0.7.25 (#6901)
- [`f5d9c31`](https://github.com/langchain-ai/deepagents/commit/f5d9c31163dda54898bdb4f73a2580c9430a16d5) feat(sdk): read inline skill tool support from model profiles (#6879)
- [`7a655f7`](https://github.com/langchain-ai/deepagents/commit/7a655f77382484a6e6ca27e8724b08064af670c8) perf(sdk): prefer ripgrep for sandbox searches (#6919)
- [`f8ecffa`](https://github.com/langchain-ai/deepagents/commit/f8ecffad6523775a323a807bc57097a98aa27e01) perf(sdk): skip `.git` in sandbox `grep` and fix path-glob `grep` (#6910)
- [`c96d912`](https://github.com/langchain-ai/deepagents/commit/c96d912ba70a601f0e259cded6b428f957b88cbf) chore(deps): raise dependency minimums for `all` (#6915)
- [`7a69743`](https://github.com/langchain-ai/deepagents/commit/7a6974309ac78f0b2ea636afc70bd8a0268bed7f) fix(sdk): check filesystem permissions against the symlink-resolved path (#6818)
- [`53238e9`](https://github.com/langchain-ai/deepagents/commit/53238e943fb2edd25c157178c4d6e73e2ba75f2c) chore(deps): raise dependency minimums for `all` (#6899)
- [`d312bcd`](https://github.com/langchain-ai/deepagents/commit/d312bcda3c71dfc4201b993776a413c8b457b483) chore(deps): raise dependency minimums for `all` (#6898)

</details>

## deepagents-code==0.1.85: deepagents-code==0.1.85

**Published**: 2026-10-14

### Bug Fixes

- Suppress ownership warnings for root installs.

### Performance Improvements

- Avoid restyling transcript history when inserting messages.

---

Internal maintainers: @hntrl, @mdrxy

Released by: @mdrxy

<details>
<summary>Git log since deepagents-code==0.1.84</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`4bfa520`](https://github.com/langchain-ai/deepagents/commit/4bfa52000ef65ac623d8ada0cb67f67cbdd663ea) release(deepagents-code): 0.1.85 (#6908)
- [`462ead2`](https://github.com/langchain-ai/deepagents/commit/462ead206995c1c78ff8da703b35d0a429fc89d9) perf(code): avoid restyling transcript history on message insertion (#6951)
- [`f45c8ee`](https://github.com/langchain-ai/deepagents/commit/f45c8eea170fbb9977af2335ebb7a992bbab0a05) chore(deps): bump `deepagents` pin in `deepagents-code` to 0.7.25 (#6931)
- [`e6d4fbf`](https://github.com/langchain-ai/deepagents/commit/e6d4fbf5260b3611ea6a9a5276cdb8655d31213c) chore(deps): raise dependency minimums for `all` (#6939)
- [`5d83e96`](https://github.com/langchain-ai/deepagents/commit/5d83e96da4c39d289d17d3d864c059660e8a6505) chore(deps): bump `genai-prices` in `deepagents-code` to 0.1.12 (#6943)
- [`c6c340d`](https://github.com/langchain-ai/deepagents/commit/c6c340d47d2013a2e7b7230698f73977b7de6756) release(deepagents): 0.7.25 (#6901)
- [`77da3b8`](https://github.com/langchain-ai/deepagents/commit/77da3b81929569e8baa91c6328dad3f22e73c5e6) chore(deps): refresh editable SDK lockfile metadata (#6929)
- [`e0d8311`](https://github.com/langchain-ai/deepagents/commit/e0d83113cb07b46bbb8039f7ff40471393a7d4e7) release(langchain-quickjs): 0.3.9 (#6927)
- [`6130c0d`](https://github.com/langchain-ai/deepagents/commit/6130c0d60d5d4f29dd49318284dbc68e2777cd38) style(code): improve cost breakdown modal readability (#6923)
- [`5e18788`](https://github.com/langchain-ai/deepagents/commit/5e187884e497b8f8a9b535937561e8ebad4feac4) chore(deps): bump `genai-prices` in `deepagents-code` to 0.1.11 (#6917)
- [`c96d912`](https://github.com/langchain-ai/deepagents/commit/c96d912ba70a601f0e259cded6b428f957b88cbf) chore(deps): raise dependency minimums for `all` (#6915)
- [`32bed90`](https://github.com/langchain-ai/deepagents/commit/32bed909cc3c340ee2f4351f7cdc639d48c481a3) release(deepagents-acp): 0.0.13 (#6685)
- [`f6c579c`](https://github.com/langchain-ai/deepagents/commit/f6c579c932e2e283f0399dde5686fdcba44e8742) fix(code): suppress ownership warnings for root installs (#6907)

</details>

## langchain-quickjs==0.3.9: langchain-quickjs==0.3.9

**Published**: 2026-10-13

### Features

- Configure the number of concurrent subagents with `CodeInterpreterMiddleware(max_subagent_concurrency=16)`. The default remains 32 per REPL; requests above the cap queue until a slot opens. Lower limits can reduce memory use, load, and cost, while higher limits allow more parallel work. The prompt now recommends batches of around 10 rather than requiring them, even at the default setting.

---

Released by: @hntrl

<details>
<summary>Git log since langchain-quickjs==0.3.8</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`e0d8311`](https://github.com/langchain-ai/deepagents/commit/e0d83113cb07b46bbb8039f7ff40471393a7d4e7) release(langchain-quickjs): 0.3.9 (#6927)
- [`f957b8e`](https://github.com/langchain-ai/deepagents/commit/f957b8edd29d3146bf265aa7886c24e5fcd9a50f) feat(quickjs): make subagent concurrency configurable (#6926)
- [`c96d912`](https://github.com/langchain-ai/deepagents/commit/c96d912ba70a601f0e259cded6b428f957b88cbf) chore(deps): raise dependency minimums for `all` (#6915)
- [`53238e9`](https://github.com/langchain-ai/deepagents/commit/53238e943fb2edd25c157178c4d6e73e2ba75f2c) chore(deps): raise dependency minimums for `all` (#6899)
- [`d312bcd`](https://github.com/langchain-ai/deepagents/commit/d312bcda3c71dfc4201b993776a413c8b457b483) chore(deps): raise dependency minimums for `all` (#6898)
- [`838433b`](https://github.com/langchain-ai/deepagents/commit/838433b4dcd9efa0bacba67d07e61440b43c4459) release(deepagents): 0.7.24 (#6865)
- [`e62ab9b`](https://github.com/langchain-ai/deepagents/commit/e62ab9b08f60e46e72861d1a88ab8f4754bf0352) chore(deps): raise dependency minimums for `all` (#6873)
- [`9f4bdf7`](https://github.com/langchain-ai/deepagents/commit/9f4bdf7c8b8bfc86877729d80ed286bd71d78706) release(deepagents): 0.7.23 (#6822)
- [`d900425`](https://github.com/langchain-ai/deepagents/commit/d900425c7b834319e7ae797f6d77017b3b4c6e4e) chore(deps): raise dependency minimums for `all` (#6829)
- [`1d62c98`](https://github.com/langchain-ai/deepagents/commit/1d62c98141c73fc152034120eab5a25b253254a7) build(deps): bump langgraph-sdk from 0.4.4 to 0.4.6 in /libs/partners/quickjs (#6816)
- [`bad717c`](https://github.com/langchain-ai/deepagents/commit/bad717c7586973621ad98a1aef72d23274e5f792) build(deps): bump langgraph-sdk from 0.4.2 to 0.4.4 in /libs/partners/quickjs (#6784)
- [`af7e89c`](https://github.com/langchain-ai/deepagents/commit/af7e89cc5d3e680424ec93666c4ebef62bc25341) chore(deps): raise dependency minimums for `all` (#6809)
- [`dcba425`](https://github.com/langchain-ai/deepagents/commit/dcba42543955cadd63718f64ba0165864e7323ad) release(deepagents): 0.7.22 (#6744)
- [`337f4d0`](https://github.com/langchain-ai/deepagents/commit/337f4d08e26ddd2e8409535c12be451e4bf2c2ef) chore(deps): raise dependency minimums for `all` (#6730)
- [`6b1385c`](https://github.com/langchain-ai/deepagents/commit/6b1385cadc01aeb36c906e47a58c0765604e24f8) chore(deps): raise dependency minimums for `all` (#6706)
- [`4394bcd`](https://github.com/langchain-ai/deepagents/commit/4394bcd00b8eb46e7c423939643a0dfcfb5d8773) release(deepagents): 0.7.21 (#6676)
- [`1bd7a9e`](https://github.com/langchain-ai/deepagents/commit/1bd7a9e1758a5dc9a6ec9b50cfeeccd34485ece0) build(deps): bump urllib3 from 2.7.0 to 2.8.0 in /libs/partners/quickjs (#6650)
- [`c9b2ce1`](https://github.com/langchain-ai/deepagents/commit/c9b2ce194e422d2a61b9faf3732da15d90623c13) chore(deps): raise dependency minimums for `all` (#6645)
- [`6bf7802`](https://github.com/langchain-ai/deepagents/commit/6bf780284ec49789613df20d85866a0ad981e579) release(deepagents): 0.7.20 (#6624)
- [`a87e219`](https://github.com/langchain-ai/deepagents/commit/a87e21955cb42c47f1e2ee728a37b76547939567) chore(deps): raise dependency minimums for `all` (#6631)

</details>

## deepagents==0.7.24: deepagents==0.7.24

**Published**: 2026-10-12

### Features

- Added fork mode support for async subagents ([#6739](https://github.com/langchain-ai/deepagents/pull/6739)).

### Bug Fixes

- Recover from context overflow during summary calls ([#6864](https://github.com/langchain-ai/deepagents/pull/6864)).
- Preserve the parent rubric during parallel subagent calls ([#6849](https://github.com/langchain-ai/deepagents/pull/6849)).

---

**Special thanks** to everyone who reported the issues addressed in this release: @awg66 ([#6861](https://github.com/langchain-ai/deepagents/issues/6861))

Internal maintainers: @ccurme, @mdrxy

Released by: @mdrxy

<details>
<summary>Git log since deepagents==0.7.23</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`838433b`](https://github.com/langchain-ai/deepagents/commit/838433b4dcd9efa0bacba67d07e61440b43c4459) release(deepagents): 0.7.24 (#6865)
- [`c31c7fd`](https://github.com/langchain-ai/deepagents/commit/c31c7fd89d0b7cf77af292f5629cc4929d51e429) feat(sdk): support fork mode for async subagents (#6739)
- [`9740b88`](https://github.com/langchain-ai/deepagents/commit/9740b88c06109890447ddd005871943f251c99c5) fix(sdk): preserve parent rubric during parallel subagent calls (#6849)
- [`e62ab9b`](https://github.com/langchain-ai/deepagents/commit/e62ab9b08f60e46e72861d1a88ab8f4754bf0352) chore(deps): raise dependency minimums for `all` (#6873)
- [`efd88ff`](https://github.com/langchain-ai/deepagents/commit/efd88ff8fd1279361de77a83c9f75d98ed2f36d5) fix(sdk): recover from context overflow in the summary call (#6864)
- [`32ddadd`](https://github.com/langchain-ai/deepagents/commit/32ddaddec869898e43ad5f2909bc6d6198229d6c) docs(repo): fix onboarding examples and guide links (#6841)

</details>

## deepagents-code==0.1.84: deepagents-code==0.1.84

**Published**: 2026-10-12

### Features

- Resolve invoked skills on the server and check whether they are trusted ([#6837](https://github.com/langchain-ai/deepagents/pull/6837)).
- Show provider-visible reasoning by default in the TUI ([#6850](https://github.com/langchain-ai/deepagents/pull/6850)).
- Surface Daytona sandbox snapshots ([#6854](https://github.com/langchain-ai/deepagents/pull/6854)).

### Bug Fixes

- Refresh the agent skill catalog when `/reload` is run ([#6843](https://github.com/langchain-ai/deepagents/pull/6843)).
- Keep fork goals visible without grading them ([#6893](https://github.com/langchain-ai/deepagents/pull/6893)).

---

Thanks to our community contributors: @sumitbinnani

Internal maintainers: @mdrxy

Released by: @mdrxy

<details>
<summary>Git log since deepagents-code==0.1.83</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`2069079`](https://github.com/langchain-ai/deepagents/commit/2069079e09546060f5b52b2cd4f0e3c813e820f3) release(deepagents-code): 0.1.84 (#6891)
- [`53238e9`](https://github.com/langchain-ai/deepagents/commit/53238e943fb2edd25c157178c4d6e73e2ba75f2c) chore(deps): raise dependency minimums for `all` (#6899)
- [`d312bcd`](https://github.com/langchain-ai/deepagents/commit/d312bcda3c71dfc4201b993776a413c8b457b483) chore(deps): raise dependency minimums for `all` (#6898)
- [`50452a3`](https://github.com/langchain-ai/deepagents/commit/50452a3af8f1f63a2a5528eeddae04b3ebb6844a) chore(deps): restore code SDK pin to 0.7.24 (#6896)
- [`40fbf9d`](https://github.com/langchain-ai/deepagents/commit/40fbf9d85b0c3554120bb10ab59db424d34c78d4) feat(code): surface Daytona sandbox snapshots (#6854)
- [`f776228`](https://github.com/langchain-ai/deepagents/commit/f7762288bc5b65d8820d386daf206103b1c01888) fix(code): preserve fork goal visibility without grading (#6893)
- [`fe4eeab`](https://github.com/langchain-ai/deepagents/commit/fe4eeab6f5babf601d9e7ab7fb9cdf558cb1df77) chore(deps): bump `deepagents` pin in `deepagents-code` to 0.7.24 (#6894)
- [`838433b`](https://github.com/langchain-ai/deepagents/commit/838433b4dcd9efa0bacba67d07e61440b43c4459) release(deepagents): 0.7.24 (#6865)
- [`d9594da`](https://github.com/langchain-ai/deepagents/commit/d9594dae242546fcb7c1c9d23d1a731bf2a0ca20) fix(code): refresh the agent skill catalog on `/reload` (#6843)
- [`03fa53f`](https://github.com/langchain-ai/deepagents/commit/03fa53ff68745610e2da15e30051c5e639047f88) feat(code): resolve and trust-check invoked skills on the server (#6837)
- [`23994c0`](https://github.com/langchain-ai/deepagents/commit/23994c038d02f60ef83ec8c15142e8607ddb3b79) feat(code): show provider-visible reasoning by default in the TUI (#6850)
- [`8d18c78`](https://github.com/langchain-ai/deepagents/commit/8d18c78e72a60b5fa64796b36e59522de60f93af) chore(deps): bump `genai-prices` in `deepagents-code` to 0.1.10 (#6885)
- [`e62ab9b`](https://github.com/langchain-ai/deepagents/commit/e62ab9b08f60e46e72861d1a88ab8f4754bf0352) chore(deps): raise dependency minimums for `all` (#6873)

</details>

## deepagents-acp==0.0.13: deepagents-acp==0.0.13

**Published**: 2026-10-12

### Bug Fixes

- Shell permissions now apply only to the exact commands authorized.
- Local context prompts are preserved across compaction.
- The demo now uses valid Claude 5.5 model IDs.

---

Internal maintainers: @hntrl, @jacoblee93

Released by: @hntrl

<details>
<summary>Git log since deepagents-acp==0.0.12</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`32bed90`](https://github.com/langchain-ai/deepagents/commit/32bed909cc3c340ee2f4351f7cdc639d48c481a3) release(deepagents-acp): 0.0.13 (#6685)
- [`2cbef82`](https://github.com/langchain-ai/deepagents/commit/2cbef82a0a8ed9fdc318ab23a926f6b11438da6f) fix(acp): scope shell permissions to exact commands (#6881)
- [`b7e777f`](https://github.com/langchain-ai/deepagents/commit/b7e777fb55023a78c88ed055bc846f52a334ae76) fix(acp): preserve local context prompt across compaction (#6840)
- [`53238e9`](https://github.com/langchain-ai/deepagents/commit/53238e943fb2edd25c157178c4d6e73e2ba75f2c) chore(deps): raise dependency minimums for `all` (#6899)
- [`d312bcd`](https://github.com/langchain-ai/deepagents/commit/d312bcda3c71dfc4201b993776a413c8b457b483) chore(deps): raise dependency minimums for `all` (#6898)
- [`838433b`](https://github.com/langchain-ai/deepagents/commit/838433b4dcd9efa0bacba67d07e61440b43c4459) release(deepagents): 0.7.24 (#6865)
- [`e62ab9b`](https://github.com/langchain-ai/deepagents/commit/e62ab9b08f60e46e72861d1a88ab8f4754bf0352) chore(deps): raise dependency minimums for `all` (#6873)
- [`b62d03f`](https://github.com/langchain-ai/deepagents/commit/b62d03f0bca07151208fa540aa6bde143d52c7a4) chore(deps): raise dependency minimums for `all` (#6834)
- [`9f4bdf7`](https://github.com/langchain-ai/deepagents/commit/9f4bdf7c8b8bfc86877729d80ed286bd71d78706) release(deepagents): 0.7.23 (#6822)
- [`d900425`](https://github.com/langchain-ai/deepagents/commit/d900425c7b834319e7ae797f6d77017b3b4c6e4e) chore(deps): raise dependency minimums for `all` (#6829)
- [`cacf8a1`](https://github.com/langchain-ai/deepagents/commit/cacf8a1a84c7a80b68d7b01af2cd81732cca585a) build(deps): bump langgraph-sdk from 0.4.2 to 0.4.4 in /libs/acp (#6798)
- [`dcba425`](https://github.com/langchain-ai/deepagents/commit/dcba42543955cadd63718f64ba0165864e7323ad) release(deepagents): 0.7.22 (#6744)
- [`337f4d0`](https://github.com/langchain-ai/deepagents/commit/337f4d08e26ddd2e8409535c12be451e4bf2c2ef) chore(deps): raise dependency minimums for `all` (#6730)
- [`6b1385c`](https://github.com/langchain-ai/deepagents/commit/6b1385cadc01aeb36c906e47a58c0765604e24f8) chore(deps): raise dependency minimums for `all` (#6706)
- [`dd0e2f5`](https://github.com/langchain-ai/deepagents/commit/dd0e2f5366da3704585a372aa905734cafcec900) fix(acp): use valid Claude 5.5 model IDs in demo (#6684)
- [`58fce87`](https://github.com/langchain-ai/deepagents/commit/58fce87f9276b1434f28e089d63f7161f92ca8e0) chore(acp): Update demo_agent.py models (#6683)
- [`4394bcd`](https://github.com/langchain-ai/deepagents/commit/4394bcd00b8eb46e7c423939643a0dfcfb5d8773) release(deepagents): 0.7.21 (#6676)
- [`cff2053`](https://github.com/langchain-ai/deepagents/commit/cff2053135bffd5853700cc332af4ecb3d6dcfea) build(deps): bump urllib3 from 2.7.0 to 2.8.0 in /libs/acp (#6658)
- [`c9b2ce1`](https://github.com/langchain-ai/deepagents/commit/c9b2ce194e422d2a61b9faf3732da15d90623c13) chore(deps): raise dependency minimums for `all` (#6645)
- [`6bf7802`](https://github.com/langchain-ai/deepagents/commit/6bf780284ec49789613df20d85866a0ad981e579) release(deepagents): 0.7.20 (#6624)
- [`a87e219`](https://github.com/langchain-ai/deepagents/commit/a87e21955cb42c47f1e2ee728a37b76547939567) chore(deps): raise dependency minimums for `all` (#6631)
- [`689898e`](https://github.com/langchain-ai/deepagents/commit/689898e50a0cab7e05b5b81132b7cee4304e0020) chore(deps): raise dependency minimums for `all` (#6628)
- [`512334f`](https://github.com/langchain-ai/deepagents/commit/512334f09b21e2bb4cf4b039ef5f89752ed42026) chore(deps): raise dependency minimums for `all` (#6548)
- [`bb49cf5`](https://github.com/langchain-ai/deepagents/commit/bb49cf50d3450a3bbebe8d25240cb7ef6379bd0d) release(deepagents): 0.7.19 (#6523)
- [`123f9c3`](https://github.com/langchain-ai/deepagents/commit/123f9c3030548e609798e54c11ca9455653b5764) chore(deps): raise dependency minimums for `all` (#6535)
- [`c172018`](https://github.com/langchain-ai/deepagents/commit/c17201847dd65390662a763ddd93ed84bbb8931c) release(deepagents): 0.7.18 (#6491)
- [`9a50bf5`](https://github.com/langchain-ai/deepagents/commit/9a50bf5c966fb599e240a6c52167133daaff5565) chore(deps): raise dependency minimums for `all` (#6498)
- [`e5406d0`](https://github.com/langchain-ai/deepagents/commit/e5406d0c735c7eb72548b7ea616991987bfb21e6) release(deepagents): 0.7.17 (#6458)
- [`cf5c560`](https://github.com/langchain-ai/deepagents/commit/cf5c5606648efa8bb27684fac97d9e794039707d) chore(deps): raise dependency minimums for `all` (#6478)
- [`0114a3f`](https://github.com/langchain-ai/deepagents/commit/0114a3f824cd5e626acb7b64d3c8e24468319d09) release(deepagents): 0.7.16 (#6372)
- [`f173a01`](https://github.com/langchain-ai/deepagents/commit/f173a011a60d73163410f88d3b6cbf33670e768c) chore(deps): raise dependency minimums for `all` (#6440)

</details>

## deepagents==0.7.23: deepagents==0.7.23

**Published**: 2026-10-07

### Features

- Pin skills by name with `pinned_skills` in the SDK ([#6810](https://github.com/langchain-ai/deepagents/pull/6810)).

### Bug Fixes

- Ensure each subagent uses its own `SkillsMiddleware` in the skills slot ([#6820](https://github.com/langchain-ai/deepagents/pull/6820)).

---

Internal maintainers: @mdrxy, @richardscarrott

Released by: @mdrxy

<details>
<summary>Git log since deepagents==0.7.22</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`9f4bdf7`](https://github.com/langchain-ai/deepagents/commit/9f4bdf7c8b8bfc86877729d80ed286bd71d78706) release(deepagents): 0.7.23 (#6822)
- [`4979e92`](https://github.com/langchain-ai/deepagents/commit/4979e923562d1b0c68363df752c0266d53ab51c4) docs(sdk): fix `SubAgent` reference field rendering (#6832)
- [`7022633`](https://github.com/langchain-ai/deepagents/commit/70226333bac013b1b1e37acedfb7955f7e6cd6f8) feat(sdk): pin skills by name via `pinned_skills` (#6810)
- [`d900425`](https://github.com/langchain-ai/deepagents/commit/d900425c7b834319e7ae797f6d77017b3b4c6e4e) chore(deps): raise dependency minimums for `all` (#6829)
- [`9a91d79`](https://github.com/langchain-ai/deepagents/commit/9a91d79e18dacfe900ac62e59c756e87f3b586a7) fix(sdk): put a subagent's own `SkillsMiddleware` in the skills slot (#6820)
- [`67d14c9`](https://github.com/langchain-ai/deepagents/commit/67d14c9ece60a29958643c53706dbab825cba94f) build(deps): bump langgraph-sdk from 0.4.2 to 0.4.4 in /libs/deepagents (#6794)

</details>

## deepagents-code==0.1.83: deepagents-code==0.1.83

**Published**: 2026-10-07

### Features

- Recommend Haiku 5.5 for sidecar models.

---

Internal maintainers: @mdrxy

Released by: @mdrxy

<details>
<summary>Git log since deepagents-code==0.1.82</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`caaa7e7`](https://github.com/langchain-ai/deepagents/commit/caaa7e7c12d214afa5cf0a1afed8eb6232aa6f7b) release(deepagents-code): 0.1.83 (#6846)
- [`5d73542`](https://github.com/langchain-ai/deepagents/commit/5d735426f6c3cd44edb23730223a73c6e2ae8e8e) chore(deps): raise dependency minimums for `all` (#6845)
- [`9597f95`](https://github.com/langchain-ai/deepagents/commit/9597f95948b7b018af919448a0d67b4c3d71c2b1) feat(code): recommend Haiku 5.5 for sidecar models (#6844)
- [`32ddadd`](https://github.com/langchain-ai/deepagents/commit/32ddaddec869898e43ad5f2909bc6d6198229d6c) docs(repo): fix onboarding examples and guide links (#6841)
- [`459db36`](https://github.com/langchain-ai/deepagents/commit/459db364e6b720355774706b360fc54686cefb6c) style(code): match skill-read spinner color to its header (#6839)
- [`b62d03f`](https://github.com/langchain-ai/deepagents/commit/b62d03f0bca07151208fa540aa6bde143d52c7a4) chore(deps): raise dependency minimums for `all` (#6834)
- [`77580cb`](https://github.com/langchain-ai/deepagents/commit/77580cb2511601fc172facab5b49fbf295b183e8) chore(deps): bump `deepagents` pin in `deepagents-code` to 0.7.23 (#6833)
- [`9f4bdf7`](https://github.com/langchain-ai/deepagents/commit/9f4bdf7c8b8bfc86877729d80ed286bd71d78706) release(deepagents): 0.7.23 (#6822)

</details>

## deepagents-code==0.1.82: deepagents-code==0.1.82

**Published**: 2026-10-07

### Features

- Create persistent thread names automatically or on demand, and rename threads manually. ([#6715](https://github.com/langchain-ai/deepagents/pull/6715), [#6767](https://github.com/langchain-ai/deepagents/pull/6767))
- Customize terminal tab titles. ([#6768](https://github.com/langchain-ai/deepagents/pull/6768))
- Distinguish skill reads in the transcript. ([#6825](https://github.com/langchain-ai/deepagents/pull/6825))

### Bug Fixes

- Keep the thread picker open when ownership conflicts occur. ([#6824](https://github.com/langchain-ai/deepagents/pull/6824))
- Preserve completion markers on remote messages. ([#6831](https://github.com/langchain-ai/deepagents/pull/6831))
- Extend triple-click selection across blocks. ([#6819](https://github.com/langchain-ai/deepagents/pull/6819))
- Recommend GPT-6 Luna for auto review. ([#6821](https://github.com/langchain-ai/deepagents/pull/6821))
- Show editable install status in debug version information. ([#6797](https://github.com/langchain-ai/deepagents/pull/6797))

---

Internal maintainers: @mdrxy

Released by: @mdrxy

<details>
<summary>Git log since deepagents-code==0.1.81</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`981c043`](https://github.com/langchain-ai/deepagents/commit/981c04389d60b99c014a9d6d00a9fd84ae29978d) release(deepagents-code): 0.1.82 (#6813)
- [`a4a51d0`](https://github.com/langchain-ai/deepagents/commit/a4a51d07cd756d2ff285e0e59655887e30e56bf8) feat(code): customize terminal tab titles (#6768)
- [`62b2692`](https://github.com/langchain-ai/deepagents/commit/62b2692cb1b66430670053f02b7a7a821ad9afe7) fix(code): preserve remote message completion markers (#6831)
- [`d900425`](https://github.com/langchain-ai/deepagents/commit/d900425c7b834319e7ae797f6d77017b3b4c6e4e) chore(deps): raise dependency minimums for `all` (#6829)
- [`65a21a4`](https://github.com/langchain-ai/deepagents/commit/65a21a47f7ffe31afa0a525a0d1ec2fff1262da5) feat(code): distinguish skill reads in the transcript (#6825)
- [`218b3d6`](https://github.com/langchain-ai/deepagents/commit/218b3d68c9ab8e2857dd0aafceeadeb34d0f0d01) feat(code): generate thread names automatically and on demand (#6767)
- [`16e84d9`](https://github.com/langchain-ai/deepagents/commit/16e84d927e7e13c41a10c071380c875af6a562f5) feat(code): add persistent thread names and manual renaming (#6715)
- [`bbae958`](https://github.com/langchain-ai/deepagents/commit/bbae958439826bc3823a4cf5ea7a6b9fb6e70025) fix(code): keep thread picker open on ownership conflicts (#6824)
- [`4f6a798`](https://github.com/langchain-ai/deepagents/commit/4f6a798928d2445f8efec3a7a85324cdf0638b3d) fix(code): extend triple-click selection across blocks (#6819)
- [`26918db`](https://github.com/langchain-ai/deepagents/commit/26918db7791f79ac91921e04eddf8774b3c4dfea) fix(code): recommend GPT-6 Luna for auto review (#6821)
- [`c7a48cb`](https://github.com/langchain-ai/deepagents/commit/c7a48cb361613cdda63c625e2aa45d3067067141) build(deps): bump fsspec from 2026.6.0 to 2026.9.0 in /libs/code (#6795)
- [`677f026`](https://github.com/langchain-ai/deepagents/commit/677f026b249c0942123f7c8c0d3bbbe8618ffb04) build(deps): bump multidict from 6.7.1 to 6.9.1 in /libs/code (#6796)
- [`cc1be0d`](https://github.com/langchain-ai/deepagents/commit/cc1be0d17d1a0eee6bd95e39b6261e7cd0510148) fix(code): show editable install status in debug version (#6797)
- [`af7e89c`](https://github.com/langchain-ai/deepagents/commit/af7e89cc5d3e680424ec93666c4ebef62bc25341) chore(deps): raise dependency minimums for `all` (#6809)

</details>

## deepagents-code==0.1.81: deepagents-code==0.1.81

**Published**: 2026-10-06

### Features

- The agent can now discover marketplace plugins ([#6719](https://github.com/langchain-ai/deepagents/pull/6719)).
- You can open the effort selector during active runs ([#6724](https://github.com/langchain-ai/deepagents/pull/6724)) and the cost breakdown from the footer ([#6723](https://github.com/langchain-ai/deepagents/pull/6723)).
- Added `--no-tracing` and an explicit tracing status indicator ([#6721](https://github.com/langchain-ai/deepagents/pull/6721)).
- Renamed `/summarization-model` to `/offload model` ([#6774](https://github.com/langchain-ai/deepagents/pull/6774)).
- Highlighted the active line in multiline chat input ([#6746](https://github.com/langchain-ai/deepagents/pull/6746)).

### Bug Fixes

- Use `ChatBedrockConverse` for non-Anthropic Bedrock models ([#6718](https://github.com/langchain-ai/deepagents/pull/6718)).
- Prevented concurrent writes to local threads ([#6717](https://github.com/langchain-ai/deepagents/pull/6717)).
- Hook execution now fails closed if its context changes when a run resumes ([#6712](https://github.com/langchain-ai/deepagents/pull/6712)).
- Improved server-side model catalog, selection, and interactive model metadata handling ([#6773](https://github.com/langchain-ai/deepagents/pull/6773), [#6772](https://github.com/langchain-ai/deepagents/pull/6772)).
- Isolated stored provider endpoints in workspace models ([#6771](https://github.com/langchain-ai/deepagents/pull/6771)).
- Reconciled cache expiry during model requests ([#6763](https://github.com/langchain-ai/deepagents/pull/6763)).
- Preserved dispatch timers across interrupt replays ([#6722](https://github.com/langchain-ai/deepagents/pull/6722)).
- Collapsed idle subagents and reopened them for new work ([#6782](https://github.com/langchain-ai/deepagents/pull/6782)).
- Moved debug MCP server details into a modal ([#6720](https://github.com/langchain-ai/deepagents/pull/6720)).
- Clarified that clearing the chat starts a new thread ([#6726](https://github.com/langchain-ai/deepagents/pull/6726)).

---

Thanks to our community contributors: @kimnamu

**Special thanks** to everyone who reported the issues addressed in this release: @kimnamu ([#6536](https://github.com/langchain-ai/deepagents/issues/6536))

Internal maintainers: @mdrxy

Released by: @mdrxy

<details>
<summary>Git log since deepagents-code==0.1.80</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`02ed19a`](https://github.com/langchain-ai/deepagents/commit/02ed19a42715fe0e9f2059fe8cf4fe6883054f08) release(deepagents-code): 0.1.81 (#6725)
- [`70288ad`](https://github.com/langchain-ai/deepagents/commit/70288ad564d31631ed409566c71f0cb58fc6c437) fix(code): collapse idle subagents and reopen new work (#6782)
- [`2fd6686`](https://github.com/langchain-ai/deepagents/commit/2fd66863c277cacc82dbcb39021e01691fb43e1f) fix(code): highlight the first line of multiline chat input (#6781)
- [`a282003`](https://github.com/langchain-ai/deepagents/commit/a282003b502e5b7a97cee97b792efd1ec87e9972) fix(code): reconcile cache expiry during model requests (#6763)
- [`4b94102`](https://github.com/langchain-ai/deepagents/commit/4b9410272a4e4885ec70fb1ec8549e307a15e585) fix(code): unify model catalogs and selection on the server (#6773)
- [`7ee648f`](https://github.com/langchain-ai/deepagents/commit/7ee648ffc65f91450678d5ffa1604fda605ece7f) chore(code): trim startup tips and clarify prompt history hints (#6780)
- [`1d468d9`](https://github.com/langchain-ai/deepagents/commit/1d468d9f3d7f43de096a342dabd7abafbad61f73) fix(code): use `ChatBedrockConverse` for non-Anthropic Bedrock models (#6718)
- [`3086f7b`](https://github.com/langchain-ai/deepagents/commit/3086f7b918b53b12a6ad675231ebd4752d4a420a) fix(code): fail closed when hook context changes on resume (#6712)
- [`3d16423`](https://github.com/langchain-ai/deepagents/commit/3d16423afbcbb11ea428265c91c203235c2e82b2) fix(code): resolve interactive model metadata on the server (#6772)
- [`7803173`](https://github.com/langchain-ai/deepagents/commit/78031730dbe1ae418f39be96f6d2b1e60fbe4545) fix(code): isolate stored provider endpoints in workspace models (#6771)
- [`df20c07`](https://github.com/langchain-ai/deepagents/commit/df20c0748015af173bc60588d69fef6865c01319) feat(code): add `--no-tracing` and explicit tracing status (#6721)
- [`52cc3e2`](https://github.com/langchain-ai/deepagents/commit/52cc3e2f52b5dac038da9f56ddfeb6898c3e8c85) feat(code): teach the agent to discover marketplace plugins (#6719)
- [`40df83f`](https://github.com/langchain-ai/deepagents/commit/40df83ff74ddeba9c3e8575a2b8f228b3819a7be) fix(code): move debug MCP server details into a modal (#6720)
- [`b643f6f`](https://github.com/langchain-ai/deepagents/commit/b643f6f34be0142fc3e33cd7402f171e62e69cc3) feat(code): rename `/summarization-model` to `/offload model` (#6774)
- [`100cb4c`](https://github.com/langchain-ai/deepagents/commit/100cb4c3edce8bae25057b6f2a736f8f547c211e) test(code): stabilize resume cost and replay timing assertions (#6766)
- [`c431ee5`](https://github.com/langchain-ai/deepagents/commit/c431ee5caed20aa94718f81653948d7f2a665106) chore(deps): bump `deepagents` pin in `deepagents-code` to 0.7.22 (#6764)
- [`dcba425`](https://github.com/langchain-ai/deepagents/commit/dcba42543955cadd63718f64ba0165864e7323ad) release(deepagents): 0.7.22 (#6744)
- [`337f4d0`](https://github.com/langchain-ai/deepagents/commit/337f4d08e26ddd2e8409535c12be451e4bf2c2ef) chore(deps): raise dependency minimums for `all` (#6730)
- [`b0f9b41`](https://github.com/langchain-ai/deepagents/commit/b0f9b41cad6089640ea479a3fbc255a1fb0171b6) fix(code): prevent concurrent local thread writers (#6717)
- [`6ac63cf`](https://github.com/langchain-ai/deepagents/commit/6ac63cf2cead6adb50e4404adc1cbf1b27ccdc41) feat(code): open effort selector during active runs (#6724)
- [`99e1e9a`](https://github.com/langchain-ai/deepagents/commit/99e1e9a4f9e58b7e436df29e7458731e9fd5bd89) feat(code): highlight the active multiline chat input line (#6746)
- [`4c55f5a`](https://github.com/langchain-ai/deepagents/commit/4c55f5a80c376f61144e91cb796ca4303e7bc2a4) feat(code): open cost breakdown from the footer (#6723)
- [`8468bad`](https://github.com/langchain-ai/deepagents/commit/8468bad7054cb778aa8b199ee5a644a5acca0332) fix(code): clarify clear hint starts a new thread (#6726)
- [`899a9f7`](https://github.com/langchain-ai/deepagents/commit/899a9f79161ef9a19bc5a378cbd4215bb946f583) fix(code): preserve dispatch timers across interrupt replays (#6722)

</details>

## deepagents==0.7.22: deepagents==0.7.22

**Published**: 2026-10-05

### Features

- Load a skill’s tools only when the skill is read. ([#6552](https://github.com/langchain-ai/deepagents/pull/6552))

### Bug Fixes

- Reset stale encoding when overwriting text. ([#6737](https://github.com/langchain-ai/deepagents/pull/6737))

---

**Special thanks** to everyone who reported the issues addressed in this release: @quifox ([#6734](https://github.com/langchain-ai/deepagents/issues/6734))

Internal maintainers: @ccurme, @richardscarrott

Released by: @ccurme

<details>
<summary>Git log since deepagents==0.7.21</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`dcba425`](https://github.com/langchain-ai/deepagents/commit/dcba42543955cadd63718f64ba0165864e7323ad) release(deepagents): 0.7.22 (#6744)
- [`337f4d0`](https://github.com/langchain-ai/deepagents/commit/337f4d08e26ddd2e8409535c12be451e4bf2c2ef) chore(deps): raise dependency minimums for `all` (#6730)
- [`92cd8e7`](https://github.com/langchain-ai/deepagents/commit/92cd8e7fa8b1f8da346ec91e420a820518497f2c) feat(sdk): load a skill's tools only when the skill is read (#6552)
- [`fb62fb06`](https://github.com/langchain-ai/deepagents/commit/fb62fb067b924a36359505f9445c1ecc55fd7d66) fix(sdk): reset stale encoding on text overwrite (#6737)
- [`6b1385c`](https://github.com/langchain-ai/deepagents/commit/6b1385cadc01aeb36c906e47a58c0765604e24f8) chore(deps): raise dependency minimums for `all` (#6706)

</details>

## deepagents-talon==0.0.9: deepagents-talon==0.0.9

**Published**: 2026-10-01

### Features

- Add a Slack channel adapter, with support for outbound user mentions. ([#6575](https://github.com/langchain-ai/deepagents/pull/6575), [#6602](https://github.com/langchain-ai/deepagents/pull/6602))
- Add sender pairing for DM access and Slack, including DM delivery of pairing codes for Slack mentions. Paired senders are admitted in every chat. ([#6579](https://github.com/langchain-ai/deepagents/pull/6579), [#6582](https://github.com/langchain-ai/deepagents/pull/6582), [#6584](https://github.com/langchain-ai/deepagents/pull/6584), [#6592](https://github.com/langchain-ai/deepagents/pull/6592))
- Add `/model` for per-chat model switching. ([#6577](https://github.com/langchain-ai/deepagents/pull/6577))
- Add cron expressions and `until` expiry for scheduled jobs, run their subagents inline, and deliver results from thread-based jobs to the channel by default. ([#6526](https://github.com/langchain-ai/deepagents/pull/6526), [#6425](https://github.com/langchain-ai/deepagents/pull/6425), [#6632](https://github.com/langchain-ai/deepagents/pull/6632))
- Add opt-in sandboxed execution via `DEEPAGENTS_TALON_SANDBOX`. ([#6574](https://github.com/langchain-ai/deepagents/pull/6574))
- Register chat commands as Discord slash commands and share public thread history by guild channel. ([#6303](https://github.com/langchain-ai/deepagents/pull/6303), [#6606](https://github.com/langchain-ai/deepagents/pull/6606))
- Add approved, one-off `ask_for_help` consultations. ([#6605](https://github.com/langchain-ai/deepagents/pull/6605))
- Batch approvals for concurrent tool calls. ([#6435](https://github.com/langchain-ai/deepagents/pull/6435))
- Add a `/context-doctor` command. ([#6557](https://github.com/langchain-ai/deepagents/pull/6557))
- Add a general-purpose safety preflight skill. ([#6587](https://github.com/langchain-ai/deepagents/pull/6587))
- Support explicitly configured public MCP OAuth clients. ([#6670](https://github.com/langchain-ai/deepagents/pull/6670))

### Bug Fixes

- Retry provider overload and connection errors, including overload errors without a status code. ([#6580](https://github.com/langchain-ai/deepagents/pull/6580), [#6304](https://github.com/langchain-ai/deepagents/pull/6304))
- Transcribe inbound audio attachments, preserve MIME types for downloaded WhatsApp voice messages, and avoid retranscribing voice on background follow-ups. ([#6680](https://github.com/langchain-ai/deepagents/pull/6680), [#6590](https://github.com/langchain-ai/deepagents/pull/6590), [#6682](https://github.com/langchain-ai/deepagents/pull/6682))
- List selectable gateway models and persist model selection across conversations. ([#6595](https://github.com/langchain-ai/deepagents/pull/6595), [#6603](https://github.com/langchain-ai/deepagents/pull/6603))
- Preserve Slack conversation context across threads, include preceding replies when mentioned in a thread, and keep legacy thread archives writable. ([#6665](https://github.com/langchain-ai/deepagents/pull/6665), [#6634](https://github.com/langchain-ai/deepagents/pull/6634), [#6679](https://github.com/langchain-ai/deepagents/pull/6679))
- Allow scheduled jobs to read their origin chat’s history and serialize changes to the cron store. ([#6583](https://github.com/langchain-ai/deepagents/pull/6583), [#6688](https://github.com/langchain-ai/deepagents/pull/6688))
- Accept any Slack slash command name and labeled Slack OAuth callbacks, while excluding OAuth callbacks from thread context. ([#6589](https://github.com/langchain-ai/deepagents/pull/6589), [#6593](https://github.com/langchain-ai/deepagents/pull/6593), [#6687](https://github.com/langchain-ai/deepagents/pull/6687))
- Deliver narration before running tools and preserve turn cancellation during typing cleanup. ([#6681](https://github.com/langchain-ai/deepagents/pull/6681), [#6594](https://github.com/langchain-ai/deepagents/pull/6594))
- Index only visible conversation text and persist history-vector deduplication. ([#6358](https://github.com/langchain-ai/deepagents/pull/6358), [#6357](https://github.com/langchain-ai/deepagents/pull/6357))
- Improve subagent research handoffs. ([#6674](https://github.com/langchain-ai/deepagents/pull/6674))
- Store offloaded artifacts in the assistant home. ([#6530](https://github.com/langchain-ai/deepagents/pull/6530))
- Validate archive pagination arguments. ([#6442](https://github.com/langchain-ai/deepagents/pull/6442))
- Declare packages that Talon imports directly as dependencies. ([#6436](https://github.com/langchain-ai/deepagents/pull/6436))

### Performance Improvements

- Reduce transactions when replaying conversation archives. ([#6320](https://github.com/langchain-ai/deepagents/pull/6320))

---

Thanks to our community contributors: @akyourowngames

**Special thanks** to everyone who reported the issues addressed in this release: @akyourowngames ([#6335](https://github.com/langchain-ai/deepagents/issues/6335))

Internal maintainers: @jkennedyvz, @linted

Released by: @jkennedyvz

<details>
<summary>Git log since deepagents-talon==0.0.8</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`3610d29`](https://github.com/langchain-ai/deepagents/commit/3610d29e4174c677e69366874498a7ace005f252) release(deepagents-talon): 0.0.9 (#6305)
- [`f566a09`](https://github.com/langchain-ai/deepagents/commit/f566a09da6141935ee564caa01c921da08f34036) fix(talon): exclude OAuth callbacks from Slack thread context (#6687)
- [`67b0bef`](https://github.com/langchain-ai/deepagents/commit/67b0bef01082bf94e8641bf4e1a94a71b3f6ebc9) fix(talon): serialize cron store mutations (#6688)
- [`1614a38`](https://github.com/langchain-ai/deepagents/commit/1614a389ea48c12182c167d3ecf69224a69d4043) fix(talon): avoid retranscribing voice on background follow-ups (#6682)
- [`a8bf07b`](https://github.com/langchain-ai/deepagents/commit/a8bf07bf604524e98530034027414254ae215f78) fix(talon): deliver narration before running tools (#6681)
- [`184f547`](https://github.com/langchain-ai/deepagents/commit/184f547e12f57df358eb49536a02cbe672f95888) fix(talon): transcribe inbound audio attachments (#6680)
- [`7475059`](https://github.com/langchain-ai/deepagents/commit/7475059432e9eda77b8b9a5bc7178f5f3a532bd9) feat(talon): support explicit public MCP OAuth clients (#6670)
- [`166b0e0`](https://github.com/langchain-ai/deepagents/commit/166b0e0ce1e424bb24f49ee5c48155458b4b1dce) fix(talon): keep legacy Slack thread archives writable (#6679)
- [`4394bcd`](https://github.com/langchain-ai/deepagents/commit/4394bcd00b8eb46e7c423939643a0dfcfb5d8773) release(deepagents): 0.7.21 (#6676)
- [`ab57eab`](https://github.com/langchain-ai/deepagents/commit/ab57eab7e51121a2677d0c5b5aa396487ed2b9ee) fix(talon): improve subagent research handoffs (#6674)
- [`6bf7665`](https://github.com/langchain-ai/deepagents/commit/6bf76658f88af8328d9a9625d2c6444e01896248) fix(talon): share Slack channel conversation archives across threads (#6665)
- [`27196b5`](https://github.com/langchain-ai/deepagents/commit/27196b5f8b299c178a54e30b280a2c05c19258c2) build(deps): bump brace-expansion from 2.1.4 to 2.1.7 in /libs/talon/deepagents_talon/channels/whatsapp_bridge (#6669)
- [`97cd00e`](https://github.com/langchain-ai/deepagents/commit/97cd00ee1340a92982adf2731352252288d76755) build(deps): bump pyjwt from 2.15.0 to 2.15.1 in /libs/talon (#6668)
- [`91eda86`](https://github.com/langchain-ai/deepagents/commit/91eda86832d2e3a9c0d14ca54da3f07be4ff37ce) build(deps): bump pyjwt from 2.13.0 to 2.15.0 in /libs/talon (#6646)
- [`6639d12`](https://github.com/langchain-ai/deepagents/commit/6639d1262eeb5ab857de015689238ba5b2b5d51e) build(deps): bump urllib3 from 2.7.0 to 2.8.0 in /libs/talon (#6647)
- [`0e5f6f8`](https://github.com/langchain-ai/deepagents/commit/0e5f6f893b91bed16837f2cd7966049c7cafc650) fix(talon): include preceding Slack replies on thread mentions (#6634)
- [`c9b2ce1`](https://github.com/langchain-ai/deepagents/commit/c9b2ce194e422d2a61b9faf3732da15d90623c13) chore(deps): raise dependency minimums for `all` (#6645)
- [`f6f9721`](https://github.com/langchain-ai/deepagents/commit/f6f97216bae2d1c969fe6c045420b4dd75795bdb) release(deepagents-code): 0.1.79 (#6615)
- [`07628a5`](https://github.com/langchain-ai/deepagents/commit/07628a59010348aca443087a19c477f148997b5b) feat(talon): deliver thread cron results to the channel by default (#6632)
- [`ff7cb5c`](https://github.com/langchain-ai/deepagents/commit/ff7cb5cbf7c6d2b8804d25283deb6dfc2dc998f1) refactor(talon): remove legacy cron job compatibility (#6620)
- [`6bf7802`](https://github.com/langchain-ai/deepagents/commit/6bf780284ec49789613df20d85866a0ad981e579) release(deepagents): 0.7.20 (#6624)
- [`a87e219`](https://github.com/langchain-ai/deepagents/commit/a87e21955cb42c47f1e2ee728a37b76547939567) chore(deps): raise dependency minimums for `all` (#6631)
- [`433784e`](https://github.com/langchain-ai/deepagents/commit/433784ee99db01a1c98c058955c41e6a03462d2d) release(langchain-quickjs): 0.3.8 (#6629)
- [`689898e`](https://github.com/langchain-ai/deepagents/commit/689898e50a0cab7e05b5b81132b7cee4304e0020) chore(deps): raise dependency minimums for `all` (#6628)
- [`3175d23`](https://github.com/langchain-ai/deepagents/commit/3175d231f192db63cbb432c6ca133d9486dc59ba) refactor(talon): simplify startup and test behavior instead of structure (#6619)
- [`e895ae6`](https://github.com/langchain-ai/deepagents/commit/e895ae6810fae010d56cef6ecfcaccbc29632b25) refactor(talon): remove legacy send result normalization (#6618)
- [`019c112`](https://github.com/langchain-ai/deepagents/commit/019c1120608c0838f5c539e2c6fc7696e7cfeb50) test(talon): remove vestigial Fleet configuration tests (#6617)
- [`936a37e`](https://github.com/langchain-ai/deepagents/commit/936a37ef7b85a5ea3a2dca989e3e3a218fb96700) feat(talon): share public Discord thread history by guild channel (#6606)
- [`15d8f47`](https://github.com/langchain-ai/deepagents/commit/15d8f471d8c6ba6868fc6d94beb7fad89ef7406f) feat(talon): add approved one-off `ask_for_help` consultations (#6605)
- [`eff90de`](https://github.com/langchain-ai/deepagents/commit/eff90dec8c6bfe9636da064c7c9310b660d89b32) fix(talon): stop swallowing a turn's cancel during typing cleanup (#6594)
- [`156a682`](https://github.com/langchain-ai/deepagents/commit/156a6824e53c3f483dca75d08e0d084c0788b3a3) fix(talon): persist model selection across conversations (#6603)
- [`b329965`](https://github.com/langchain-ai/deepagents/commit/b32996518f9bad4d156d19e35915d51ead7e6019) feat(talon): allow outbound Slack user mentions (#6602)
- [`8b2a526`](https://github.com/langchain-ai/deepagents/commit/8b2a5267ab1fdcf523bac6c3d705f00111869f9a) release(deepagents-code): 0.1.78 (#6600)
- [`5b29445`](https://github.com/langchain-ai/deepagents/commit/5b29445dd387bb9e8b8c3fed8f7382a91a990e06) fix(talon): enumerate selectable gateway models (#6595)
- [`e739e4d`](https://github.com/langchain-ai/deepagents/commit/e739e4d66c367f91b430062ee841055ac311c57c) fix(talon): preserve MIME types when downloading WhatsApp voice messages (#6590)
- [`512334f`](https://github.com/langchain-ai/deepagents/commit/512334f09b21e2bb4cf4b039ef5f89752ed42026) chore(deps): raise dependency minimums for `all` (#6548)
- [`b3f1a39`](https://github.com/langchain-ai/deepagents/commit/b3f1a3919fe39853ee29acee1fb49b077507428f) fix(talon): retry provider overload and connection errors (#6580)
- [`6744083`](https://github.com/langchain-ai/deepagents/commit/6744083d1978b187fce1de0226aad3c5c9a647dc) feat(talon): admit paired senders in every chat (#6592)
- [`0359577`](https://github.com/langchain-ai/deepagents/commit/035957706fc34545ae1e7485aa03f8415694cd71) fix(talon): accept labeled Slack OAuth callbacks (#6593)
- [`86923e1`](https://github.com/langchain-ai/deepagents/commit/86923e160c18a6c090045ef1d60a17bd0d65760d) feat(talon): add general-purpose safety preflight skill (#6587)
- [`31ae532`](https://github.com/langchain-ai/deepagents/commit/31ae53291c23854912d3237c20e108445c6b6f11) fix(talon): accept any Slack slash command name (#6589)
- [`a31b310`](https://github.com/langchain-ai/deepagents/commit/a31b31009b3f7fad90cc567cd794def20e280bd3) feat(talon): send Slack mention pairing codes in DMs (#6584)
- [`e70cf09`](https://github.com/langchain-ai/deepagents/commit/e70cf09267d93ce54f381d77fb577a76adac6300) fix(talon): let scheduled jobs read their origin chat's history (#6583)
- [`90cd463`](https://github.com/langchain-ai/deepagents/commit/90cd463830418f79dc994f7b84c01f6256409435) feat(talon): support sender pairing on Slack (#6582)
- [`40873ba`](https://github.com/langchain-ai/deepagents/commit/40873baa880133ae19ea921239ad9142c1972f4f) feat(talon): add `/model` command for per-chat model switching (#6577)
- [`135e849`](https://github.com/langchain-ai/deepagents/commit/135e849484d15974a5dbc997828c9889b2d098fd) feat(talon): add sender pairing for DM access (#6579)
- [`b5f22b0`](https://github.com/langchain-ai/deepagents/commit/b5f22b01aff7cfe328d632de086c31247c2b1081) feat(talon): opt-in sandboxed execution via `DEEPAGENTS_TALON_SANDBOX` (#6574)
- [`15bd7fd`](https://github.com/langchain-ai/deepagents/commit/15bd7fdcfb5b6a02a650a5faa7aced0faf6dd6d8) feat(talon): add Slack channel adapter (#6575)
- [`71ae3f6`](https://github.com/langchain-ai/deepagents/commit/71ae3f69b161fdb0d009fe91e112e9aa39369a4d) feat(talon): add cron expressions and `until` expiry to scheduled jobs (#6526)
- [`60c0228`](https://github.com/langchain-ai/deepagents/commit/60c0228aad14d042080743ead04e135994d3fa75) feat(talon): add `/context-doctor` command (#6557)
- [`dcf4feb`](https://github.com/langchain-ai/deepagents/commit/dcf4febea597a876043f0aea6ecae40c321ea541) release(deepagents-code): 0.1.77 (#6545)
- [`bb49cf5`](https://github.com/langchain-ai/deepagents/commit/bb49cf50d3450a3bbebe8d25240cb7ef6379bd0d) release(deepagents): 0.7.19 (#6523)
- [`e801fa1`](https://github.com/langchain-ai/deepagents/commit/e801fa1810f971e693b8965b5b9802803aeb555d) release(deepagents-code): 0.1.76 (#6538)
- [`123f9c3`](https://github.com/langchain-ai/deepagents/commit/123f9c3030548e609798e54c11ca9455653b5764) chore(deps): raise dependency minimums for `all` (#6535)
- [`74d768b`](https://github.com/langchain-ai/deepagents/commit/74d768bd45dd4eca977dc320ebfe5838f1691682) fix(talon): store offloaded artifacts in the assistant home (#6530)
- [`c526854`](https://github.com/langchain-ai/deepagents/commit/c52685431535b143b860a995eaadfbabcf9b409c) release(deepagents-code): 0.1.75 (#6518)
- [`460feb6`](https://github.com/langchain-ai/deepagents/commit/460feb63301e61e7e40e27932ca41a908c442841) chore(deps): raise dependency minimums for `all` (#6511)
- [`e109d04`](https://github.com/langchain-ai/deepagents/commit/e109d04a9a61cfaf7719211c1e3c35889127eae2) release(deepagents-code): 0.1.74 (#6493)
- [`c172018`](https://github.com/langchain-ai/deepagents/commit/c17201847dd65390662a763ddd93ed84bbb8931c) release(deepagents): 0.7.18 (#6491)
- [`9a50bf5`](https://github.com/langchain-ai/deepagents/commit/9a50bf5c966fb599e240a6c52167133daaff5565) chore(deps): raise dependency minimums for `all` (#6498)
- [`d5a1896`](https://github.com/langchain-ai/deepagents/commit/d5a18968f2669ce08290b2d7e2c46da13b696efa) release(deepagents-code): 0.1.73 (#6457)
- [`2b767bf`](https://github.com/langchain-ai/deepagents/commit/2b767bfb8628ec50fc775fef85cbe780d2d22451) chore(deps): raise dependency minimums for `all` (#6480)
- [`e5406d0`](https://github.com/langchain-ai/deepagents/commit/e5406d0c735c7eb72548b7ea616991987bfb21e6) release(deepagents): 0.7.17 (#6458)
- [`cf5c560`](https://github.com/langchain-ai/deepagents/commit/cf5c5606648efa8bb27684fac97d9e794039707d) chore(deps): raise dependency minimums for `all` (#6478)
- [`0114a3f`](https://github.com/langchain-ai/deepagents/commit/0114a3f824cd5e626acb7b64d3c8e24468319d09) release(deepagents): 0.7.16 (#6372)
- [`a764619`](https://github.com/langchain-ai/deepagents/commit/a764619aa8c850bc75e2e916cf53a587637d8c81) release(deepagents-code): 0.1.72 (#6403)
- [`f173a01`](https://github.com/langchain-ai/deepagents/commit/f173a011a60d73163410f88d3b6cbf33670e768c) chore(deps): raise dependency minimums for `all` (#6440)
- [`f84d963`](https://github.com/langchain-ai/deepagents/commit/f84d96358a111872fba3f9b69c5b08ad1565c083) fix(talon): validate archive pagination arguments (#6442)
- [`1660147`](https://github.com/langchain-ai/deepagents/commit/16601472424400ab4a90608d7d95e8fc61f23267) feat(talon): batch concurrent tool approvals (#6435)
- [`c3a041e`](https://github.com/langchain-ai/deepagents/commit/c3a041e3d8f593e4e4c9bfc273d52264ceff165b) feat(talon): run a scheduled job's subagents inline (#6425)
- [`c63eba4`](https://github.com/langchain-ai/deepagents/commit/c63eba426b28f1d1685e40767f087dcc3f34334c) fix(talon): declare the packages talon imports directly (#6436)
- [`0923301`](https://github.com/langchain-ai/deepagents/commit/092330158bab829cab80d930b05b2b4c512f8f38) refactor(talon): move MCP onto `langchain.mcp` (#6091)
- [`aff6d16`](https://github.com/langchain-ai/deepagents/commit/aff6d168fcc0c2adab2666abf5dde6de4ca421a9) docs(talon): point WhatsApp example link at the real directory (#6354)
- [`f6850e9`](https://github.com/langchain-ai/deepagents/commit/f6850e9d25854b5679010c08f02adae99e6b8a2c) fix(talon): index only visible conversation text (#6358)
- [`b3d4967`](https://github.com/langchain-ai/deepagents/commit/b3d4967bdcda5b42e976b3e97c357deea82d63ac) fix(talon): persist history vector deduplication (#6357)
- [`229ffef`](https://github.com/langchain-ai/deepagents/commit/229ffef3d41bbe6dcfff3852bbd2058331aabe01) release(deepagents-code): 0.1.70 (#6323)
- [`0f5a2b5`](https://github.com/langchain-ai/deepagents/commit/0f5a2b57fa5dbb3a7d8f16dc280cb5b1506ea8c0) release(deepagents): 0.7.15 (#6298)
- [`7a7f382`](https://github.com/langchain-ai/deepagents/commit/7a7f3827430572a0976002003d9f19d48ae20360) chore(deps): raise dependency minimums for `all` (#6336)
- [`06e5886`](https://github.com/langchain-ai/deepagents/commit/06e588610c08e7544ee77ac09aa971921a5c893e) chore(deps): raise dependency minimums for `all` (#6310)
- [`89bd48f`](https://github.com/langchain-ai/deepagents/commit/89bd48f7d531c9affafa3f0dc096083cbc5969dd) perf(talon): reduce archive replay transactions (#6320)
- [`1d3232c`](https://github.com/langchain-ai/deepagents/commit/1d3232c0852c47af09119edea10eeec887e4f0da) release(deepagents-code): 0.1.69 (#6247)
- [`f36b641`](https://github.com/langchain-ai/deepagents/commit/f36b641ce3e1f44dbd47835d6dc9f5bb1c82324a) feat(talon): register chat commands as Discord slash commands (#6303)
- [`f8acbd0`](https://github.com/langchain-ai/deepagents/commit/f8acbd0ae24278d35aeb1fa014056084a58f70d2) fix(talon): retry statusless provider overload errors (#6304)
- [`ded0f11`](https://github.com/langchain-ai/deepagents/commit/ded0f1187f6bf81e2f679ea7b16ead7760d775a6) release(deepagents): 0.7.14 (#6050)
- [`3b99e73`](https://github.com/langchain-ai/deepagents/commit/3b99e7333e501d1ccf84b5fbaaacc9de815ce4b7) chore(deps): raise dependency minimums for `all` (#6280)
- [`9f6bd6a`](https://github.com/langchain-ai/deepagents/commit/9f6bd6ae200ff2e45e8c0246343b6c8936707447) chore(deps): raise dependency minimums for `all` (#6268)

</details>

## deepagents-code==0.1.80: deepagents-code==0.1.80

**Published**: 2026-10-01

### Features

- Emit a `cache_expiring` hook before the prompt cache expires ([#6638](https://github.com/langchain-ai/deepagents/pull/6638)).

### Bug Fixes

- Keep the transcript at its current position when opening pickers ([#6635](https://github.com/langchain-ai/deepagents/pull/6635)).
- Share cache-expiring notifications with the TUI ([#6639](https://github.com/langchain-ai/deepagents/pull/6639)).
- Use listed skill paths instead of inferring their locations ([#6711](https://github.com/langchain-ai/deepagents/pull/6711)).
- Correct product and command names in skill guides ([#6637](https://github.com/langchain-ai/deepagents/pull/6637)).

---

Internal maintainers: @mdrxy

Released by: @mdrxy

<details>
<summary>Git log since deepagents-code==0.1.79</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`e4c1ffe`](https://github.com/langchain-ai/deepagents/commit/e4c1ffe9ee63d7854147de490ca27495ef157a7b) release(deepagents-code): 0.1.80 (#6636)
- [`1342568`](https://github.com/langchain-ai/deepagents/commit/13425688e6a8e8508b1905dba5330c38032520e3) fix(code): use listed skill paths instead of inferring locations (#6711)
- [`6b1385c`](https://github.com/langchain-ai/deepagents/commit/6b1385cadc01aeb36c906e47a58c0765604e24f8) chore(deps): raise dependency minimums for `all` (#6706)
- [`f766f8a`](https://github.com/langchain-ai/deepagents/commit/f766f8ad2bf72e8ec3555f45787c68edbdfcb176) build(deps): bump litellm from 1.93.0 to 1.93.2 in /libs/code (#6704)
- [`2dcc8d7`](https://github.com/langchain-ai/deepagents/commit/2dcc8d7e0539e0c9109024ef24b070786f5d607b) chore(deps): bump `deepagents` pin in `deepagents-code` to 0.7.21 (#6678)
- [`4394bcd`](https://github.com/langchain-ai/deepagents/commit/4394bcd00b8eb46e7c423939643a0dfcfb5d8773) release(deepagents): 0.7.21 (#6676)
- [`7386b66`](https://github.com/langchain-ai/deepagents/commit/7386b663c49fc9b3506a0c2e56e528081d094930) build(deps): bump pyjwt from 2.15.0 to 2.15.1 in /libs/code (#6673)
- [`a4046e2`](https://github.com/langchain-ai/deepagents/commit/a4046e25511c6626aa14b095b034428abc786a0f) build(deps): bump pyjwt from 2.13.0 to 2.15.0 in /libs/code (#6657)
- [`7805e74`](https://github.com/langchain-ai/deepagents/commit/7805e7482f11e7afeb67a8a1b0a6eadc68a1caba) build(deps): bump urllib3 from 2.7.0 to 2.8.0 in /libs/code (#6656)
- [`c9b2ce1`](https://github.com/langchain-ai/deepagents/commit/c9b2ce194e422d2a61b9faf3732da15d90623c13) chore(deps): raise dependency minimums for `all` (#6645)
- [`1756bbe`](https://github.com/langchain-ai/deepagents/commit/1756bbe1eb348e20b925598ed49665b0d34b4b2d) docs(code): prefer shared sources for UI and hook notifications (#6640)
- [`e1940f5`](https://github.com/langchain-ai/deepagents/commit/e1940f5f86ed37f4a19a970707aab61343e07e2a) fix(code): share cache-expiring notifications with the TUI (#6639)
- [`30975d0`](https://github.com/langchain-ai/deepagents/commit/30975d02b9a18e5d6c1dede8bf02313cc024ea70) feat(code): emit a `cache_expiring` hook before prompt-cache expiry (#6638)
- [`cc95cc8`](https://github.com/langchain-ai/deepagents/commit/cc95cc8f0e7e51b44d416ceaafd67a6a4fdefeee) fix(code): fix product and command names in skill guides (#6637)
- [`8508cb9`](https://github.com/langchain-ai/deepagents/commit/8508cb9329a92ccf93fbace8fa78670a39fc3371) fix(code): preserve transcript position when opening pickers (#6635)

</details>

## deepagents==0.7.21: deepagents==0.7.21

**Published**: 2026-09-30

### Features

- `FilesystemMiddleware` can now store blobs on the backend ([#6550](https://github.com/langchain-ai/deepagents/pull/6550)).

---

**Special thanks** to everyone who reported the issues addressed in this release: @hntrl ([#6330](https://github.com/langchain-ai/deepagents/issues/6330))

Internal maintainers: @ccurme

Released by: @ccurme

<details>
<summary>Git log since deepagents==0.7.20</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`4394bcd`](https://github.com/langchain-ai/deepagents/commit/4394bcd00b8eb46e7c423939643a0dfcfb5d8773) release(deepagents): 0.7.21 (#6676)
- [`e38e6c9`](https://github.com/langchain-ai/deepagents/commit/e38e6c91def8067e0dec2694d5410d0306f32553) feat(sdk): allow `FilesystemMiddleware` to store blobs on backend (#6550)
- [`c2da83e`](https://github.com/langchain-ai/deepagents/commit/c2da83ee04a080e14a11b4f90287f55b6cd740ea) build(deps): bump urllib3 from 2.7.0 to 2.8.0 in /libs/deepagents (#6655)
- [`c9b2ce1`](https://github.com/langchain-ai/deepagents/commit/c9b2ce194e422d2a61b9faf3732da15d90623c13) chore(deps): raise dependency minimums for `all` (#6645)

</details>

## langchain-quickjs==0.3.8: langchain-quickjs==0.3.8

**Published**: 2026-09-29

### Bug Fixes

- Preserve subagent identity when replaying interrupts.

---

Thanks to our community contributors: @akyourowngames

**Special thanks** to everyone who reported the issues addressed in this release: @akyourowngames ([#6335](https://github.com/langchain-ai/deepagents/issues/6335))

Internal maintainers: @mdrxy

Released by: @mdrxy

<details>
<summary>Git log since langchain-quickjs==0.3.7</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`433784e`](https://github.com/langchain-ai/deepagents/commit/433784ee99db01a1c98c058955c41e6a03462d2d) release(langchain-quickjs): 0.3.8 (#6629)
- [`689898e`](https://github.com/langchain-ai/deepagents/commit/689898e50a0cab7e05b5b81132b7cee4304e0020) chore(deps): raise dependency minimums for `all` (#6628)
- [`d31d7fc`](https://github.com/langchain-ai/deepagents/commit/d31d7fcca9fd2c1b891318c97b95b06bb31fd630) fix(quickjs): preserve subagent identity across interrupt replays (#6370)
- [`512334f`](https://github.com/langchain-ai/deepagents/commit/512334f09b21e2bb4cf4b039ef5f89752ed42026) chore(deps): raise dependency minimums for `all` (#6548)
- [`bb49cf5`](https://github.com/langchain-ai/deepagents/commit/bb49cf50d3450a3bbebe8d25240cb7ef6379bd0d) release(deepagents): 0.7.19 (#6523)
- [`123f9c3`](https://github.com/langchain-ai/deepagents/commit/123f9c3030548e609798e54c11ca9455653b5764) chore(deps): raise dependency minimums for `all` (#6535)
- [`c172018`](https://github.com/langchain-ai/deepagents/commit/c17201847dd65390662a763ddd93ed84bbb8931c) release(deepagents): 0.7.18 (#6491)
- [`9a50bf5`](https://github.com/langchain-ai/deepagents/commit/9a50bf5c966fb599e240a6c52167133daaff5565) chore(deps): raise dependency minimums for `all` (#6498)
- [`e5406d0`](https://github.com/langchain-ai/deepagents/commit/e5406d0c735c7eb72548b7ea616991987bfb21e6) release(deepagents): 0.7.17 (#6458)
- [`cf5c560`](https://github.com/langchain-ai/deepagents/commit/cf5c5606648efa8bb27684fac97d9e794039707d) chore(deps): raise dependency minimums for `all` (#6478)
- [`0114a3f`](https://github.com/langchain-ai/deepagents/commit/0114a3f824cd5e626acb7b64d3c8e24468319d09) release(deepagents): 0.7.16 (#6372)
- [`f173a01`](https://github.com/langchain-ai/deepagents/commit/f173a011a60d73163410f88d3b6cbf33670e768c) chore(deps): raise dependency minimums for `all` (#6440)
- [`f1f6845`](https://github.com/langchain-ai/deepagents/commit/f1f6845d8e8009d593bfb996da4f7b04eb780ce3) chore(deps): bump anyio from 4.13.0 to 4.14.2 in /libs/partners/quickjs (#6408)
- [`61164b8`](https://github.com/langchain-ai/deepagents/commit/61164b8d2ef8ffa5b04d1c61281d2f440d3c6b1b) docs(quickjs): fix broken relative links in README (#6355)
- [`0f5a2b5`](https://github.com/langchain-ai/deepagents/commit/0f5a2b57fa5dbb3a7d8f16dc280cb5b1506ea8c0) release(deepagents): 0.7.15 (#6298)
- [`7a7f382`](https://github.com/langchain-ai/deepagents/commit/7a7f3827430572a0976002003d9f19d48ae20360) chore(deps): raise dependency minimums for `all` (#6336)
- [`06e5886`](https://github.com/langchain-ai/deepagents/commit/06e588610c08e7544ee77ac09aa971921a5c893e) chore(deps): raise dependency minimums for `all` (#6310)
- [`ded0f11`](https://github.com/langchain-ai/deepagents/commit/ded0f1187f6bf81e2f679ea7b16ead7760d775a6) release(deepagents): 0.7.14 (#6050)
- [`3b99e73`](https://github.com/langchain-ai/deepagents/commit/3b99e7333e501d1ccf84b5fbaaacc9de815ce4b7) chore(deps): raise dependency minimums for `all` (#6280)
- [`9f6bd6a`](https://github.com/langchain-ai/deepagents/commit/9f6bd6ae200ff2e45e8c0246343b6c8936707447) chore(deps): raise dependency minimums for `all` (#6268)
- [`d889f40`](https://github.com/langchain-ai/deepagents/commit/d889f40ec72880ae2642300f62eceb9efe185757) chore(deps): raise dependency minimums for `all` (#6237)
- [`7c3cebe`](https://github.com/langchain-ai/deepagents/commit/7c3cebe1df407ac947c34d56a1a21945aaddae23) chore(deps): raise dependency minimums for `all` (#6212)
- [`18106be`](https://github.com/langchain-ai/deepagents/commit/18106be837bcdd9005b2dd73280d871a0621bf99) chore(deps): raise dependency minimums for `all` (#6130)
- [`07d2952`](https://github.com/langchain-ai/deepagents/commit/07d2952d346d81d06bd181db8c560a77f2b51bc8) chore(deps): raise dependency minimums for `all` (#6096)

</details>

## deepagents==0.7.20: deepagents==0.7.20

**Published**: 2026-09-29

### Bug Fixes

- Fixed binary content in `StateBackend.upload_files` being tagged as base64.

---

**Special thanks** to everyone who reported the issues addressed in this release: @parveshsaini ([#4563](https://github.com/langchain-ai/deepagents/issues/4563))

Internal maintainers: @ccurme

Released by: @mdrxy

<details>
<summary>Git log since deepagents==0.7.19</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`6bf7802`](https://github.com/langchain-ai/deepagents/commit/6bf780284ec49789613df20d85866a0ad981e579) release(deepagents): 0.7.20 (#6624)
- [`a87e219`](https://github.com/langchain-ai/deepagents/commit/a87e21955cb42c47f1e2ee728a37b76547939567) chore(deps): raise dependency minimums for `all` (#6631)
- [`689898e`](https://github.com/langchain-ai/deepagents/commit/689898e50a0cab7e05b5b81132b7cee4304e0020) chore(deps): raise dependency minimums for `all` (#6628)
- [`b1ebc5b`](https://github.com/langchain-ai/deepagents/commit/b1ebc5bd51aab19c1251197b1b8eb699c85cfc00) fix(sdk): tag binary `StateBackend.upload_files` content as base64 (#6551)
- [`512334f`](https://github.com/langchain-ai/deepagents/commit/512334f09b21e2bb4cf4b039ef5f89752ed42026) chore(deps): raise dependency minimums for `all` (#6548)

</details>

## deepagents-code==0.1.79: deepagents-code==0.1.79

**Published**: 2026-09-29

### Bug Fixes

- MCP tool calls now use configurable timeouts to prevent them from hanging indefinitely ([#6625](https://github.com/langchain-ai/deepagents/pull/6625)).
- Stdio MCP servers now start in the session directory ([#6626](https://github.com/langchain-ai/deepagents/pull/6626)).
- JavaScript subagent costs are preserved when resuming a session ([#6433](https://github.com/langchain-ai/deepagents/pull/6433)).
- Thread switching now completes its preflight faster and shows progress sooner ([#6607](https://github.com/langchain-ai/deepagents/pull/6607)).
- The `/effort` setting is now constrained for between-tools thinking ([#6630](https://github.com/langchain-ai/deepagents/pull/6630)).
- CLI help now displays the same defaults used at runtime ([#6613](https://github.com/langchain-ai/deepagents/pull/6613)).
- The incognito label now appears on the chat input border ([#6627](https://github.com/langchain-ai/deepagents/pull/6627)).

---

Internal maintainers: @mdrxy

Released by: @mdrxy

<details>
<summary>Git log since deepagents-code==0.1.78</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`f6f9721`](https://github.com/langchain-ai/deepagents/commit/f6f97216bae2d1c969fe6c045420b4dd75795bdb) release(deepagents-code): 0.1.79 (#6615)
- [`530029a`](https://github.com/langchain-ai/deepagents/commit/530029ada82915b806cce759af95e60a3181dadf) chore(deps): bump `deepagents` pin in `deepagents-code` to 0.7.20 (#6633)
- [`6bf7802`](https://github.com/langchain-ai/deepagents/commit/6bf780284ec49789613df20d85866a0ad981e579) release(deepagents): 0.7.20 (#6624)
- [`17eea22`](https://github.com/langchain-ai/deepagents/commit/17eea22b966f3fc136c27a60437ecb40636b34ca) fix(code): constrain `/effort` for between-tools thinking (#6630)
- [`a87e219`](https://github.com/langchain-ai/deepagents/commit/a87e21955cb42c47f1e2ee728a37b76547939567) chore(deps): raise dependency minimums for `all` (#6631)
- [`433784e`](https://github.com/langchain-ai/deepagents/commit/433784ee99db01a1c98c058955c41e6a03462d2d) release(langchain-quickjs): 0.3.8 (#6629)
- [`689898e`](https://github.com/langchain-ai/deepagents/commit/689898e50a0cab7e05b5b81132b7cee4304e0020) chore(deps): raise dependency minimums for `all` (#6628)
- [`340a73c`](https://github.com/langchain-ai/deepagents/commit/340a73c5b3a8d503bbdc7141d23b2523bbf715d3) fix(code): preserve JavaScript subagent costs across resume (#6433)
- [`a99ab3e`](https://github.com/langchain-ai/deepagents/commit/a99ab3e9997e80261a58c86a6c4a3de7a444e731) fix(code): show incognito label on chat input border (#6627)
- [`d36ac68`](https://github.com/langchain-ai/deepagents/commit/d36ac688242286b5c1e30d290648fcee0ea25b23) fix(code): launch stdio MCP servers in the session directory (#6626)
- [`d1c5a8e`](https://github.com/langchain-ai/deepagents/commit/d1c5a8ef6af2a2bf3951808a53a257e97d87946f) fix(code): bound MCP tool calls with configurable timeouts (#6625)
- [`e672a05`](https://github.com/langchain-ai/deepagents/commit/e672a05872dcd930cbb7f5d46d7e8fee70449338) fix(code): share defaults between runtime and CLI help (#6613)
- [`ded8cbf`](https://github.com/langchain-ai/deepagents/commit/ded8cbfd90fea8cb47dcb52fc369b83a77089d67) fix(code): speed up thread-switch preflight and show progress early (#6607)

</details>

## deepagents-code==0.1.78: deepagents-code==0.1.78

**Published**: 2026-09-28

### Features

- Ask isolated side questions with `/btw` ([#6434](https://github.com/langchain-ai/deepagents/pull/6434)).
- Offer to summarize threads and switch when the cache expires ([#6477](https://github.com/langchain-ai/deepagents/pull/6477)).
- Persist project MCP startup denials ([#6597](https://github.com/langchain-ai/deepagents/pull/6597)).

### Bug Fixes

- Show 100 recent threads by default ([#6604](https://github.com/langchain-ai/deepagents/pull/6604)).
- Restore console input after piped prompts on Windows ([#6572](https://github.com/langchain-ai/deepagents/pull/6572)).
- Load resumed conversation history on demand ([#6342](https://github.com/langchain-ai/deepagents/pull/6342)).

---

Thanks to our community contributors: @dakjdakd

**Special thanks** to everyone who reported the issues addressed in this release: @dakjdakd ([#6569](https://github.com/langchain-ai/deepagents/issues/6569))

Internal maintainers: @mdrxy

Released by: @mdrxy

<details>
<summary>Git log since deepagents-code==0.1.77</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`2018c6d`](https://github.com/langchain-ai/deepagents/commit/2018c6d7f542ed0d0ca230b5ed862c99c309e940) hotfix(code): decouple checkpoint hydration from thread limit (#6610)
- [`8b2a526`](https://github.com/langchain-ai/deepagents/commit/8b2a5267ab1fdcf523bac6c3d705f00111869f9a) release(deepagents-code): 0.1.78 (#6600)
- [`f0863be`](https://github.com/langchain-ai/deepagents/commit/f0863be6661e5746edb4d7d9b0f7ed170bbc7a2d) fix(code): show 100 recent threads by default (#6604)
- [`8ea734a`](https://github.com/langchain-ai/deepagents/commit/8ea734a809dd7d4e8c56ceeb286b5718ad1c7753) fix(code): hydrate resumed history on demand (#6342)
- [`f2a98d2`](https://github.com/langchain-ai/deepagents/commit/f2a98d2bb409496f9a49f59e883fc63dd082fca1) fix(code): restore console input after piped prompts on Windows (#6572)
- [`64dccb0`](https://github.com/langchain-ai/deepagents/commit/64dccb0600486786bdcd1bcd45eb9514f2b23cd4) feat(code): offer summarized threads when cache expires (#6477)
- [`512334f`](https://github.com/langchain-ai/deepagents/commit/512334f09b21e2bb4cf4b039ef5f89752ed42026) chore(deps): raise dependency minimums for `all` (#6548)
- [`7ca901a`](https://github.com/langchain-ai/deepagents/commit/7ca901ac4bf8fc1342ddca486c1bd4895a5a0f48) feat(code): add isolated `/btw` side questions (#6434)
- [`5c2533e`](https://github.com/langchain-ai/deepagents/commit/5c2533e0972daf6478b02b0e2eb66e9e46c27d5c) feat(code): persist project MCP startup denials (#6597)
- [`3d9b8a7`](https://github.com/langchain-ai/deepagents/commit/3d9b8a712b2ee6a0e4094bcdf40113a92c0892d4) chore(deps): bump `genai-prices` in `deepagents-code` to 0.1.9 (#6549)

</details>

## deepagents==0.7.19: deepagents==0.7.19

**Published**: 2026-09-24

### Bug Fixes

- Recover when `read_file` media is rejected.
- Filter unsupported multimodal content through separate middleware.
- Bound tool offload paths and abbreviate long IDs.

---

**Special thanks** to everyone who reported the issues addressed in this release: @mdrxy ([#3864](https://github.com/langchain-ai/deepagents/issues/3864)), @zhe-code85 ([#5544](https://github.com/langchain-ai/deepagents/issues/5544))

Internal maintainers: @ccurme

Released by: @ccurme

<details>
<summary>Git log since deepagents==0.7.18</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`bb49cf5`](https://github.com/langchain-ai/deepagents/commit/bb49cf50d3450a3bbebe8d25240cb7ef6379bd0d) release(deepagents): 0.7.19 (#6523)
- [`802140c`](https://github.com/langchain-ai/deepagents/commit/802140c1a7d1fff35a7edd8d0f1697eb460ce623) fix(sdk): recover from rejected `read_file` media (#6515)
- [`737621b`](https://github.com/langchain-ai/deepagents/commit/737621ba73c39ac822c78c144612336bd02de6fb) fix(sdk): use separate middleware for filtering unsupported multimodal content (#6366)
- [`123f9c3`](https://github.com/langchain-ai/deepagents/commit/123f9c3030548e609798e54c11ca9455653b5764) chore(deps): raise dependency minimums for `all` (#6535)
- [`ca5f0e5`](https://github.com/langchain-ai/deepagents/commit/ca5f0e5eae7ee749e81ae8e9e3bbc1762447fcc2) fix(sdk): bound tool offload paths and abbreviate long IDs (#6519)

</details>

## deepagents-code==0.1.77: deepagents-code==0.1.77

**Published**: 2026-09-24

### Bug Fixes

- Preview remote plugin contents before installation.
- Report mis-encoded `config.toml` files created by older config writers.
- Show how to cancel MCP browser login and handle Escape.
- Make workspace configuration warnings actionable.
- Hide prompt search hints when search is unavailable.

---

Thanks to our community contributors: @JessYanCoding

**Special thanks** to everyone who reported the issues addressed in this release: @JessYanCoding ([#6512](https://github.com/langchain-ai/deepagents/issues/6512))

Internal maintainers: @mdrxy

Released by: @mdrxy

<details>
<summary>Git log since deepagents-code==0.1.76</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`dcf4feb`](https://github.com/langchain-ai/deepagents/commit/dcf4febea597a876043f0aea6ecae40c321ea541) release(deepagents-code): 0.1.77 (#6545)
- [`0a1967e`](https://github.com/langchain-ai/deepagents/commit/0a1967e94c4bce9cb4a28b8368510f3392e9e52b) fix(code): show and handle escape during MCP browser login (#6541)
- [`ec56c57`](https://github.com/langchain-ai/deepagents/commit/ec56c57fb086dc5bee06547f9896e49a52ead3b3) fix(code): preview remote plugin contents before installation (#6542)
- [`05900e7`](https://github.com/langchain-ai/deepagents/commit/05900e7ecc14ce64d9535617400a5e2f35d4c734) fix(code): make workspace configuration warnings actionable (#6546)
- [`a6e2140`](https://github.com/langchain-ai/deepagents/commit/a6e21408ccc1b9a80f941d3458a0ae58dcc29abe) fix(code): report a mis-encoded `config.toml` from the older config writers (#6514)
- [`3ba4356`](https://github.com/langchain-ai/deepagents/commit/3ba435604c4b7f664978fa3c5f81914b05d86321) fix(code): hide unavailable prompt search hints (#6543)
- [`33daeb4`](https://github.com/langchain-ai/deepagents/commit/33daeb4f6f984966603c146bb375b8af211a5295) chore(deps): bump `deepagents` pin in `deepagents-code` to 0.7.19 (#6544)
- [`bb49cf5`](https://github.com/langchain-ai/deepagents/commit/bb49cf50d3450a3bbebe8d25240cb7ef6379bd0d) release(deepagents): 0.7.19 (#6523)

</details>

## deepagents-code==0.1.76: deepagents-code==0.1.76

**Published**: 2026-09-24

### Features

- Label plugin servers in the MCP viewer ([#6539](https://github.com/langchain-ai/deepagents/pull/6539)).

### Bug Fixes

- Resolve plugin MCP servers during login ([#6524](https://github.com/langchain-ai/deepagents/pull/6524)).
- Keep empty MCP servers searchable and include descriptions in search results ([#6540](https://github.com/langchain-ai/deepagents/pull/6540)).

---

**Special thanks** to everyone who reported the issues addressed in this release: @imacomber ([#6374](https://github.com/langchain-ai/deepagents/issues/6374))

Internal maintainers: @mdrxy

Released by: @mdrxy

<details>
<summary>Git log since deepagents-code==0.1.75</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`e801fa1`](https://github.com/langchain-ai/deepagents/commit/e801fa1810f971e693b8965b5b9802803aeb555d) release(deepagents-code): 0.1.76 (#6538)
- [`8d599c9`](https://github.com/langchain-ai/deepagents/commit/8d599c983e1b5e596d06b2569450dc2411ea8f3f) fix(code): keep empty MCP servers searchable and match descriptions (#6540)
- [`d9defc1`](https://github.com/langchain-ai/deepagents/commit/d9defc124448fed2261b290e060c0cd532b0143a) feat(code): label plugin servers in the MCP viewer (#6539)
- [`123f9c3`](https://github.com/langchain-ai/deepagents/commit/123f9c3030548e609798e54c11ca9455653b5764) chore(deps): raise dependency minimums for `all` (#6535)
- [`ae00358`](https://github.com/langchain-ai/deepagents/commit/ae00358ed85fb2207cb3ef260d5181a601b5b585) fix(code): resolve plugin MCP servers for login (#6524)

</details>

## deepagents==0.7.18: deepagents==0.7.18

**Published**: 2026-09-23

### Bug Fixes

- Large tool result previews now more clearly explain when output was clipped or truncated, including byte-cap losses, per-line clipping, and showing truncation notices only when truncation occurs. Legacy large-result preview templates are preserved behind a deprecation path. ([#5567](https://github.com/langchain-ai/deepagents/pull/5567), [#5564](https://github.com/langchain-ai/deepagents/pull/5564), [#5563](https://github.com/langchain-ai/deepagents/pull/5563), [#5568](https://github.com/langchain-ai/deepagents/pull/5568))
- Task tool calls now reject unknown argument keys instead of silently dropping unexpected input. ([#6299](https://github.com/langchain-ai/deepagents/pull/6299))
- Correct `FileInfo.size` to represent the file size in bytes across backends. ([#6258](https://github.com/langchain-ai/deepagents/pull/6258))

---

Thanks to our community contributors: @burakeyler, @eknathmali

**Special thanks** to everyone who reported the issues addressed in this release: @BogdanSliskovic ([#6286](https://github.com/langchain-ai/deepagents/issues/6286)), @eknathmali ([#6042](https://github.com/langchain-ai/deepagents/issues/6042))

Internal maintainers: @mdrxy

Released by: @mdrxy

<details>
<summary>Git log since deepagents==0.7.17</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`c172018`](https://github.com/langchain-ai/deepagents/commit/c17201847dd65390662a763ddd93ed84bbb8931c) release(deepagents): 0.7.18 (#6491)
- [`9a50bf5`](https://github.com/langchain-ai/deepagents/commit/9a50bf5c966fb599e240a6c52167133daaff5565) chore(deps): raise dependency minimums for `all` (#6498)
- [`00fef9c`](https://github.com/langchain-ai/deepagents/commit/00fef9c012b20f91785dc5e83c642fb439832178) fix(sdk): reject unknown keys in the task tool arguments (#6299)
- [`5bac4aa`](https://github.com/langchain-ai/deepagents/commit/5bac4aae53494329a533294564353b10c3385244) fix(sdk): report UTF-8 byte sizes (#6258)
- [`4932d70`](https://github.com/langchain-ai/deepagents/commit/4932d7066fc9f3464921ab72d5d86922ea4b26ec) fix(sdk): preserve legacy large-result templates behind deprecation (#5568)
- [`dbdd6fb`](https://github.com/langchain-ai/deepagents/commit/dbdd6fbb47f340de8d23092187aa2882242963f8) fix(sdk): disclose byte-cap losses in capture-offload execute previews (#5567)
- [`5014cf7`](https://github.com/langchain-ai/deepagents/commit/5014cf7f7480c5e080095c9e3396e4ce93421053) fix(sdk): disclose per-line clipping in large-result previews (#5564)
- [`7b4fcd3`](https://github.com/langchain-ai/deepagents/commit/7b4fcd398b2a9bcd875b193c32d1eb97f152ce21) fix(sdk): explain truncation markers only when preview omits lines (#5563)
- [`2caefbc`](https://github.com/langchain-ai/deepagents/commit/2caefbcc8637982e9683b38ca77f95a2d9e85bc5) docs(sdk): clarify `trim_tokens_to_summarize` (#6484)

</details>

## deepagents-code==0.1.75: deepagents-code==0.1.75

**Published**: 2026-09-23

### Bug Fixes

- Lazy MCP caches now warm without blocking the event loop.
- Token and cost breakdowns now refresh while the view is open.

---

Internal maintainers: @mdrxy

Released by: @mdrxy

<details>
<summary>Git log since deepagents-code==0.1.74</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`c526854`](https://github.com/langchain-ai/deepagents/commit/c52685431535b143b860a995eaadfbabcf9b409c) release(deepagents-code): 0.1.75 (#6518)
- [`460feb6`](https://github.com/langchain-ai/deepagents/commit/460feb63301e61e7e40e27932ca41a908c442841) chore(deps): raise dependency minimums for `all` (#6511)
- [`95b338e`](https://github.com/langchain-ai/deepagents/commit/95b338e52844680b23ed6aa38ddb54b2acb90848) chore(deps): bump `genai-prices` in `deepagents-code` to 0.1.8 (#6516)
- [`22524ed`](https://github.com/langchain-ai/deepagents/commit/22524edb7702d6fb31ffefd2d7d19549b17d2ed6) fix(code): refresh token and cost breakdown while open (#6520)
- [`e6419a6`](https://github.com/langchain-ai/deepagents/commit/e6419a6fbabf18d8232fb6b0a0283bc933b4bae3) fix(code): warm lazy MCP caches off the event loop (#6517)

</details>

## deepagents-code==0.1.74: deepagents-code==0.1.74

**Published**: 2026-09-23

### Features

- Added inline thread mentions & picker via `@@` ([#6197](https://github.com/langchain-ai/deepagents/pull/6197)).
- Usage summaries now show human invocations ([#6500](https://github.com/langchain-ai/deepagents/pull/6500)).

### Bug Fixes

- Retry bare `openai.APIError` exceptions raised mid-stream ([#6499](https://github.com/langchain-ai/deepagents/pull/6499)).
- Keep prompt recall results out of the file picker ([#6494](https://github.com/langchain-ai/deepagents/pull/6494)).
- Read `hooks.json` as UTF-8 in the legacy hook loader ([#6501](https://github.com/langchain-ai/deepagents/pull/6501)).

### Performance Improvements

- Reuse Auto classifier history ([#6056](https://github.com/langchain-ai/deepagents/pull/6056)).
- Rank checkpoint and message row IDs before loading blobs and prompts ([#6488](https://github.com/langchain-ai/deepagents/pull/6488), [#6489](https://github.com/langchain-ai/deepagents/pull/6489)).
- Log thread-loading phase timings ([#6490](https://github.com/langchain-ai/deepagents/pull/6490)).

---

Thanks to our community contributors: @JessYanCoding

Internal maintainers: @mdrxy

Released by: @mdrxy

<details>
<summary>Git log since deepagents-code==0.1.73</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`e109d04`](https://github.com/langchain-ai/deepagents/commit/e109d04a9a61cfaf7719211c1e3c35889127eae2) release(deepagents-code): 0.1.74 (#6493)
- [`0779f31`](https://github.com/langchain-ai/deepagents/commit/0779f314841ec4216a189b70c615d06194731ecd) feat(code): show human invocations in usage teardown (#6500)
- [`854f655`](https://github.com/langchain-ai/deepagents/commit/854f655aad543cb993f6376f97a775eac1b727ec) chore(deps): bump `deepagents` pin in `deepagents-code` to 0.7.18 (#6506)
- [`61bada8`](https://github.com/langchain-ai/deepagents/commit/61bada8bcbb62a40bfbe0345831228756f0ba353) fix(code): read `hooks.json` as UTF-8 in the legacy hook loader (#6501)
- [`c172018`](https://github.com/langchain-ai/deepagents/commit/c17201847dd65390662a763ddd93ed84bbb8931c) release(deepagents): 0.7.18 (#6491)
- [`0f95915`](https://github.com/langchain-ai/deepagents/commit/0f959156b828f9deb08438b71dbc9a65c13b1714) fix(code): retry bare `openai.APIError` raised mid-stream (#6499)
- [`9a50bf5`](https://github.com/langchain-ai/deepagents/commit/9a50bf5c966fb599e240a6c52167133daaff5565) chore(deps): raise dependency minimums for `all` (#6498)
- [`44926fa`](https://github.com/langchain-ai/deepagents/commit/44926fa8f26dfb24d9a0e3ded335c48b123d193d) perf(code): reuse Auto classifier history (#6056)
- [`9d3da12`](https://github.com/langchain-ai/deepagents/commit/9d3da1287ba5656d52ad7f2c75cf9062d46a4959) feat(code): add thread picker (#6197)
- [`86b7f85`](https://github.com/langchain-ai/deepagents/commit/86b7f85af7424ff2491206070897818d71e163cb) fix(code): keep prompt recall out of file picker (#6494)
- [`ad038f8`](https://github.com/langchain-ai/deepagents/commit/ad038f87e07e13791ff9b1e239326d2c959fd412) perf(code): log thread loading phase timings (#6490)
- [`17ea378`](https://github.com/langchain-ai/deepagents/commit/17ea378fcb04f15c916e64eaf24a833b3a63c504) perf(code): rank message row IDs before loading prompts (#6489)
- [`933eaea`](https://github.com/langchain-ai/deepagents/commit/933eaeaddea12d1d6fcd0a8cd7716e948ff1df58) perf(code): rank checkpoint row IDs before loading blobs (#6488)
- [`333f6ab`](https://github.com/langchain-ai/deepagents/commit/333f6abc6e49a63146b1590f473eb9145d019d7c) docs(code): clarify non-interactive approval semantics (#6483)

</details>

## deepagents==0.7.17: deepagents==0.7.17

**Published**: 2026-09-22

### Bug Fixes

- Preserve the backend exit status when capture metadata is missing. ([#6451](https://github.com/langchain-ai/deepagents/pull/6451))
- Restrict inline file blocks to supported MIME types. ([#6447](https://github.com/langchain-ai/deepagents/pull/6447))

---

**Special thanks** to everyone who reported the issues addressed in this release: @ramon-langchain ([#6150](https://github.com/langchain-ai/deepagents/issues/6150))

Internal maintainers: @ccurme, @mdrxy

Released by: @mdrxy

<details>
<summary>Git log since deepagents==0.7.16</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`e5406d0`](https://github.com/langchain-ai/deepagents/commit/e5406d0c735c7eb72548b7ea616991987bfb21e6) release(deepagents): 0.7.17 (#6458)
- [`cf5c560`](https://github.com/langchain-ai/deepagents/commit/cf5c5606648efa8bb27684fac97d9e794039707d) chore(deps): raise dependency minimums for `all` (#6478)
- [`c9926b1`](https://github.com/langchain-ai/deepagents/commit/c9926b1a96d204309d0b211701b288ce3bb4244b) fix(sdk): preserve backend exit status when capture metadata is missing (#6451)
- [`191e93a`](https://github.com/langchain-ai/deepagents/commit/191e93a05e30aad705ee2cb33d5b03e7104dbe5a) fix(sdk): restrict inline file blocks to supported MIME types (#6447)

</details>

## deepagents-code==0.1.73: deepagents-code==0.1.73

**Published**: 2026-09-22

### Features

- Added cache bust timer to the footer. ([#6394](https://github.com/langchain-ai/deepagents/pull/6394))
- Added a durable Debug Console cost breakdown. ([#6246](https://github.com/langchain-ai/deepagents/pull/6246))
- Added support for copying the highlighted thread ID with `Ctrl+C`. ([#6431](https://github.com/langchain-ai/deepagents/pull/6431))

### Bug Fixes

- Improved cost-warning behavior by showing session cost warnings in a modal and suppressing historical cost warnings when resuming. ([#6393](https://github.com/langchain-ai/deepagents/pull/6393), [#6471](https://github.com/langchain-ai/deepagents/pull/6471))
- Made thread browsing and resume flows more resilient with recoverable thread-picker resume failures, loading labels for thread details, and a clearer thread message count header. ([#6476](https://github.com/langchain-ai/deepagents/pull/6476), [#6430](https://github.com/langchain-ai/deepagents/pull/6430), [#6428](https://github.com/langchain-ai/deepagents/pull/6428))
- Removed contradictory and invalid system-prompt instructions. ([#6072](https://github.com/langchain-ai/deepagents/pull/6072))
- Preserved `ask_user` consent receipts across user turns and reconciled interrupted tool requests. ([#6307](https://github.com/langchain-ai/deepagents/pull/6307), [#6321](https://github.com/langchain-ai/deepagents/pull/6321))
- Cleaned up newly created sandboxes when setup fails. ([#6475](https://github.com/langchain-ai/deepagents/pull/6475))
- Fixed editable refreshes so they stay anchored to the correct checkout. ([#6455](https://github.com/langchain-ai/deepagents/pull/6455))
- Kept installation locks outside the uv tool directory. ([#6472](https://github.com/langchain-ai/deepagents/pull/6472))
- Improved workspace and runtime diagnostics, including separating access-policy compatibility from runtime identity. ([#6384](https://github.com/langchain-ai/deepagents/pull/6384), [#6386](https://github.com/langchain-ai/deepagents/pull/6386))
- Deduplicated mixed-ID model usage. ([#6432](https://github.com/langchain-ai/deepagents/pull/6432))
- Clarified the compaction prompt. ([#6429](https://github.com/langchain-ai/deepagents/pull/6429))
- Restricted auto classifier IDs to the review batch enum. ([#6250](https://github.com/langchain-ai/deepagents/pull/6250))
- Used UTF-8 for prompts and skill files. ([#6474](https://github.com/langchain-ai/deepagents/pull/6474))

---

Thanks to our community contributors: @ChampionsZhang

**Special thanks** to everyone who reported the issues addressed in this release: @MatthewFeroz ([#6233](https://github.com/langchain-ai/deepagents/issues/6233)), @wangjiawei-vegetable ([#6029](https://github.com/langchain-ai/deepagents/issues/6029)), @ChampionsZhang ([#6071](https://github.com/langchain-ai/deepagents/issues/6071)), @JessYanCoding ([#6229](https://github.com/langchain-ai/deepagents/issues/6229))

Internal maintainers: @mdrxy

Released by: @mdrxy

<details>
<summary>Git log since deepagents-code==0.1.72</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`d5a1896`](https://github.com/langchain-ai/deepagents/commit/d5a18968f2669ce08290b2d7e2c46da13b696efa) release(deepagents-code): 0.1.73 (#6457)
- [`2b767bf`](https://github.com/langchain-ai/deepagents/commit/2b767bfb8628ec50fc775fef85cbe780d2d22451) chore(deps): raise dependency minimums for `all` (#6480)
- [`71b5c71`](https://github.com/langchain-ai/deepagents/commit/71b5c7115d8769ac28807d0a9991535f50765a14) chore(deps): bump `deepagents` pin in `deepagents-code` to 0.7.17 (#6479)
- [`e5406d0`](https://github.com/langchain-ai/deepagents/commit/e5406d0c735c7eb72548b7ea616991987bfb21e6) release(deepagents): 0.7.17 (#6458)
- [`cf5c560`](https://github.com/langchain-ai/deepagents/commit/cf5c5606648efa8bb27684fac97d9e794039707d) chore(deps): raise dependency minimums for `all` (#6478)
- [`6a41c53`](https://github.com/langchain-ai/deepagents/commit/6a41c537fb1d4af7a34ef2340fff0f1c088548f4) fix(code): keep thread picker resume failures recoverable (#6476)
- [`ec128d1`](https://github.com/langchain-ai/deepagents/commit/ec128d14bd59561e955115c39b8d2a1cdd4dc720) fix(code): keep installation locks outside the uv tool directory (#6472)
- [`95c7630`](https://github.com/langchain-ai/deepagents/commit/95c763059fdec12991232fc63418755ba568af74) fix(code): separate access-policy compatibility from runtime identity (#6386)
- [`ca00490`](https://github.com/langchain-ai/deepagents/commit/ca004904d1e48385d805d6e3b7f62f82739cfc11) fix(code): preserve `ask_user` consent receipts across user turns (#6307)
- [`f9ffd51`](https://github.com/langchain-ai/deepagents/commit/f9ffd51154296f81f832f5f184407bc0067acbaf) fix(code): diagnose workspace binding and runtime refusals (#6384)
- [`1ec8996`](https://github.com/langchain-ai/deepagents/commit/1ec8996c91fa6f68b3ec8145f279b8c1dea5dc20) fix(code): clean up new sandboxes when setup fails (#6475)
- [`2776a66`](https://github.com/langchain-ai/deepagents/commit/2776a66a955976e4fffbf4cd8612828012feaebc) fix(code): remove contradictory and invalid system-prompt instructions (#6072)
- [`8feaa0f`](https://github.com/langchain-ai/deepagents/commit/8feaa0fcce7ee967b1411c247d6f4eab202aa66d) fix(code): use UTF-8 for prompts and skill files (#6474)
- [`f4c226b`](https://github.com/langchain-ai/deepagents/commit/f4c226b21cc07ee6cee6472ed726f86e69b8af36) feat(code): show cache timing in the footer (#6394)
- [`13170ea`](https://github.com/langchain-ai/deepagents/commit/13170ea5b07206c94d535141af7e311666f17b7b) fix(code): suppress historical cost warnings on resume (#6471)
- [`c981748`](https://github.com/langchain-ai/deepagents/commit/c9817483eeea620b1523dcfaed2802269c79d4fe) feat(code): add durable Debug Console cost breakdown (#6246)
- [`5c09b92`](https://github.com/langchain-ai/deepagents/commit/5c09b9291924df7f67fbc73fda2214a0a50005ea) fix(code): show loading labels for thread details (#6430)
- [`376e988`](https://github.com/langchain-ai/deepagents/commit/376e988f98fea5e501050efe250d683259e551f5) fix(code): reconcile interrupted tool requests (#6321)
- [`6152733`](https://github.com/langchain-ai/deepagents/commit/6152733cbd6b73709a704f3f41b93e2576c5cd52) fix(code): restrict auto classifier IDs to the review batch enum (#6250)
- [`c1395da`](https://github.com/langchain-ai/deepagents/commit/c1395dab009690a30d495bfcae33fb92f62d08c4) fix(code): show session cost warnings in a modal (#6393)
- [`bdca132`](https://github.com/langchain-ai/deepagents/commit/bdca132ee7fbf84ab611392adb6846a1c545d26c) fix(code): deduplicate mixed-ID model usage (#6432)
- [`0a6bd89`](https://github.com/langchain-ai/deepagents/commit/0a6bd899a0760af76bca025ea6af39997b78e611) feat(code): copy highlighted thread ID with `ctrl+c` (#6431)
- [`15cf630`](https://github.com/langchain-ai/deepagents/commit/15cf6301e49e00963df876b6697fcc7c42d027d8) fix(code): clarify compaction prompt (#6429)
- [`e775680`](https://github.com/langchain-ai/deepagents/commit/e775680e1cb5a52ba816e6c4663a647a7025d566) fix(code): clarify thread message count header (#6428)
- [`edc7458`](https://github.com/langchain-ai/deepagents/commit/edc7458e463349ec6b4db5f0828e77c4be1e9857) chore(deps): bump `deepagents` pin in `deepagents-code` to 0.7.16 (#6453)
- [`a6d844d`](https://github.com/langchain-ai/deepagents/commit/a6d844d47126bb905f30e76569110cd68294a0b3) fix(code): anchor editable refresh to its checkout (#6455)
- [`0114a3f`](https://github.com/langchain-ai/deepagents/commit/0114a3f824cd5e626acb7b64d3c8e24468319d09) release(deepagents): 0.7.16 (#6372)

</details>

## deepagents==0.7.16: deepagents==0.7.16

**Published**: 2026-09-21

### Features

- Reload skills when `skills_metadata` is reset to `None` ([#6364](https://github.com/langchain-ai/deepagents/pull/6364)).

### Bug Fixes

- Reject parallel edits to the same file to prevent conflicting changes ([#6446](https://github.com/langchain-ai/deepagents/pull/6446)).

---

**Special thanks** to everyone who reported the issues addressed in this release: @keenborder786 ([#6297](https://github.com/langchain-ai/deepagents/issues/6297))

Internal maintainers: @ccurme, @richardscarrott

Released by: @ccurme

<details>
<summary>Git log since deepagents==0.7.15</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`0114a3f`](https://github.com/langchain-ai/deepagents/commit/0114a3f824cd5e626acb7b64d3c8e24468319d09) release(deepagents): 0.7.16 (#6372)
- [`f173a01`](https://github.com/langchain-ai/deepagents/commit/f173a011a60d73163410f88d3b6cbf33670e768c) chore(deps): raise dependency minimums for `all` (#6440)
- [`2e2ee91`](https://github.com/langchain-ai/deepagents/commit/2e2ee91b794ed549b299445b7bb5de641e9a4f4d) fix(sdk): reject parallel same-file edits (#6446)
- [`1ca8b4b`](https://github.com/langchain-ai/deepagents/commit/1ca8b4ba675529782675c1f5f73f58c908869b50) chore(deps): bump anyio from 4.12.1 to 4.14.2 in /libs/deepagents (#6411)
- [`f86b4e9`](https://github.com/langchain-ai/deepagents/commit/f86b4e9abef7620b63a7258bc9fab0ccd83de8a4) feat(sdk): reload skills when `skills_metadata` is reset to `None` (#6364)

</details>

## deepagents-code==0.1.72: deepagents-code==0.1.72

**Published**: 2026-09-21

### Features

- Expanded `read_file` calls now show their arguments. ([#6392](https://github.com/langchain-ai/deepagents/pull/6392))

### Bug Fixes

- Aligned debug log formatting between file and console output. ([#6426](https://github.com/langchain-ai/deepagents/pull/6426))
- Silenced unnecessary decoder traces for non-media paths. ([#6427](https://github.com/langchain-ai/deepagents/pull/6427))

### Performance Improvements

- Skipped transcript scans when submitting prompts for faster prompt submission. ([#6402](https://github.com/langchain-ai/deepagents/pull/6402))

---

Internal maintainers: @mdrxy

Released by: @mdrxy

<details>
<summary>Git log since deepagents-code==0.1.71</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`a764619`](https://github.com/langchain-ai/deepagents/commit/a764619aa8c850bc75e2e916cf53a587637d8c81) release(deepagents-code): 0.1.72 (#6403)
- [`f173a01`](https://github.com/langchain-ai/deepagents/commit/f173a011a60d73163410f88d3b6cbf33670e768c) chore(deps): raise dependency minimums for `all` (#6440)
- [`6c219d3`](https://github.com/langchain-ai/deepagents/commit/6c219d3a39a869b55c5ec434acf76f84217eb002) fix(code): align file and console debug log formatting (#6426)
- [`902905f`](https://github.com/langchain-ai/deepagents/commit/902905f2508fe74dc0ba13d857f502e8ddbc807e) feat(code): show `read_file` arguments when expanded (#6392)
- [`3693e9d`](https://github.com/langchain-ai/deepagents/commit/3693e9d01a94a4e881cbb5f92438adfec27cd77e) fix(code): silence non-media path decoder traces (#6427)
- [`443d34b`](https://github.com/langchain-ai/deepagents/commit/443d34bfde4f22cbc7f9ac71be766922a041e08c) perf(code): skip transcript scan on prompt submit (#6402)

</details>

## deepagents-code==0.1.71: deepagents-code==0.1.71

**Published**: 2026-09-18

### Features

- Moved MCP support onto FastMCP and `langchain.mcp`. ([#5922](https://github.com/langchain-ai/deepagents/pull/5922))
- Condensed the current working directory in the status bar from the middle, preserving the end of the path. ([#6252](https://github.com/langchain-ai/deepagents/pull/6252))

### Bug Fixes

- Replaced the composer with prompt search and prevented query feedback. ([#6346](https://github.com/langchain-ai/deepagents/pull/6346))
- Kept absolute paths intact in normal input mode. ([#6379](https://github.com/langchain-ai/deepagents/pull/6379))
- Pinned resumed history to the newest message. ([#6225](https://github.com/langchain-ai/deepagents/pull/6225))
- Improved handling of overflowing pasted content in the chat input so it scrolls correctly. ([#6382](https://github.com/langchain-ai/deepagents/pull/6382))
- Wrapped debug logs before the scrollbar. ([#6219](https://github.com/langchain-ai/deepagents/pull/6219))

---

Thanks to our community contributors: @akyourowngames

**Special thanks** to everyone who reported the issues addressed in this release: @akyourowngames ([#6335](https://github.com/langchain-ai/deepagents/issues/6335))

Internal maintainers: @mdrxy, @sydney-runkle

Released by: @mdrxy

<details>
<summary>Git log since deepagents-code==0.1.70</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`d1674e6`](https://github.com/langchain-ai/deepagents/commit/d1674e602f7883a5e5ccce5312b7c8d297f3b36d) release(deepagents-code): 0.1.71 (#6381)
- [`a52ecea`](https://github.com/langchain-ai/deepagents/commit/a52ecea1f4b159a5ec0c667c6d05e26ea701db30) fix(code): replace composer with prompt search and prevent query feedback (#6346)
- [`36fc923`](https://github.com/langchain-ai/deepagents/commit/36fc923b7ca7f23dc3ebcc44e496bf75f677c23f) chore(deps): raise dependency minimums for `deepagents-code` (#6390)
- [`ca7999a`](https://github.com/langchain-ai/deepagents/commit/ca7999a8a9984e110a3b80d2e5f71dbe895f58ec) fix(code): wrap debug logs before the scrollbar (#6219)
- [`f733893`](https://github.com/langchain-ai/deepagents/commit/f7338933e5ebd6959820023efb66704d6ab8ce7f) feat(code): condense status bar cwd from the middle, tail intact (#6252)
- [`9b5ca38`](https://github.com/langchain-ai/deepagents/commit/9b5ca384ff727f16c4f66a13308170cfba899b97) fix(code): pin resumed history to newest message (#6225)
- [`417cca7`](https://github.com/langchain-ai/deepagents/commit/417cca7b363a8d9370236b57fe8c49d65450a4de) docs(code): drop references to nonexistent design docs (#6356)
- [`078b3bd`](https://github.com/langchain-ai/deepagents/commit/078b3bd83f1c756d9925ab3df836f8ed0e806078) chore(code): reduce secret redaction log noise (#6375)
- [`0692ef1`](https://github.com/langchain-ai/deepagents/commit/0692ef1550568a585afe48705d54a4aa07002697) feat(code): move MCP onto FastMCP and `langchain.mcp` (#5922)
- [`b522fd4`](https://github.com/langchain-ai/deepagents/commit/b522fd4a74b2349b25f3f1f630265f7e456430ee) fix(code): scroll overflowing chat input pastes (#6382)
- [`c826c83`](https://github.com/langchain-ai/deepagents/commit/c826c839d9eb2e30e6929c60052eb4d93d815b89) chore(code): dedup Ollama discovery debug logs (#6383)
- [`71132c1`](https://github.com/langchain-ai/deepagents/commit/71132c1cea8ff4e6c32c8b650a0288b7c1aacc15) style(code): show whole seconds in Debug Console session length (#6380)
- [`141ce98`](https://github.com/langchain-ai/deepagents/commit/141ce9851b876f733ef390ead3edbc509536a8e8) fix(code): keep absolute paths in normal input mode (#6379)
- [`52345e8`](https://github.com/langchain-ai/deepagents/commit/52345e8ecfa57e80aec5e982c5e56c86d2ef722f) chore(code): reduce Claude skill discovery log noise (#6378)
- [`dc2c8e7`](https://github.com/langchain-ai/deepagents/commit/dc2c8e7f788de04322f701774447a3764d794ca4) chore(code): clarify missing model profiles log (#6377)

</details>

## deepagents-acp==0.0.12: deepagents-acp==0.0.12

**Published**: 2026-09-18

### Bug Fixes

- Scoped `cancel()` requests to the requested session. ([#5107](https://github.com/langchain-ai/deepagents/pull/5107))

---

Thanks to our community contributors: @Mohith26, @jacoblee93

**Special thanks** to everyone who reported the issues addressed in this release: @RagavRida ([#5084](https://github.com/langchain-ai/deepagents/issues/5084))

Internal maintainers: @mdrxy

Released by: @mdrxy

<details>
<summary>Git log since deepagents-acp==0.0.11</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`dfed90c`](https://github.com/langchain-ai/deepagents/commit/dfed90c3a138e8775a8adbbb5ca0abbddc08bdb2) release(deepagents-acp): 0.0.12 (#6343)
- [`fc6df1f`](https://github.com/langchain-ai/deepagents/commit/fc6df1fb7a5c757297dd6c845a1b00735e9b1aea) chore(deps): bump anyio from 4.12.1 to 4.14.2 in /libs/acp (#6412)
- [`0f5a2b5`](https://github.com/langchain-ai/deepagents/commit/0f5a2b57fa5dbb3a7d8f16dc280cb5b1506ea8c0) release(deepagents): 0.7.15 (#6298)
- [`96236d2`](https://github.com/langchain-ai/deepagents/commit/96236d275f6799eeed80235eaa2054ee0e5bc8b7) fix(acp): scope cancel() to the requested session (#5107)
- [`7a7f382`](https://github.com/langchain-ai/deepagents/commit/7a7f3827430572a0976002003d9f19d48ae20360) chore(deps): raise dependency minimums for `all` (#6336)
- [`06e5886`](https://github.com/langchain-ai/deepagents/commit/06e588610c08e7544ee77ac09aa971921a5c893e) chore(deps): raise dependency minimums for `all` (#6310)
- [`e031960`](https://github.com/langchain-ai/deepagents/commit/e031960430b24dae3381d4814ff23f87d06f2a37) chore(acp): Update model list in ACP demo agent (#6317)
- [`287160b`](https://github.com/langchain-ai/deepagents/commit/287160bf1cfb5c35aa95d76b73dcd72e1a7b1034) docs(repo): bump example models to the current GA lineup (#6294)
- [`ded0f11`](https://github.com/langchain-ai/deepagents/commit/ded0f1187f6bf81e2f679ea7b16ead7760d775a6) release(deepagents): 0.7.14 (#6050)
- [`3b99e73`](https://github.com/langchain-ai/deepagents/commit/3b99e7333e501d1ccf84b5fbaaacc9de815ce4b7) chore(deps): raise dependency minimums for `all` (#6280)
- [`9f6bd6a`](https://github.com/langchain-ai/deepagents/commit/9f6bd6ae200ff2e45e8c0246343b6c8936707447) chore(deps): raise dependency minimums for `all` (#6268)
- [`d889f40`](https://github.com/langchain-ai/deepagents/commit/d889f40ec72880ae2642300f62eceb9efe185757) chore(deps): raise dependency minimums for `all` (#6237)
- [`7c3cebe`](https://github.com/langchain-ai/deepagents/commit/7c3cebe1df407ac947c34d56a1a21945aaddae23) chore(deps): raise dependency minimums for `all` (#6212)
- [`f6ae37c`](https://github.com/langchain-ai/deepagents/commit/f6ae37cb1f20486f2da9d5a304681ea96de99bc1) chore(deps): raise dependency minimums for `all` (#6186)
- [`18106be`](https://github.com/langchain-ai/deepagents/commit/18106be837bcdd9005b2dd73280d871a0621bf99) chore(deps): raise dependency minimums for `all` (#6130)
- [`07d2952`](https://github.com/langchain-ai/deepagents/commit/07d2952d346d81d06bd181db8c560a77f2b51bc8) chore(deps): raise dependency minimums for `all` (#6096)
- [`bdccb82`](https://github.com/langchain-ai/deepagents/commit/bdccb82d21f998174354a25daa4624dc0d9da97b) chore(deps): raise dependency minimums for `all` (#6053)
- [`ac0fac4`](https://github.com/langchain-ai/deepagents/commit/ac0fac42f6ece4147c3636896358e1a9391cd94a) chore(deps): raise dependency minimums for `all` (#6046)
- [`1aae374`](https://github.com/langchain-ai/deepagents/commit/1aae3746682a65c837c5dd0f165b685253fe9465) release(deepagents): 0.7.13 (#6031)
- [`a197807`](https://github.com/langchain-ai/deepagents/commit/a19780791e020ccb772701285c459fb6a4dab0ff) release(deepagents): 0.7.12 (#6006)
- [`4bc1100`](https://github.com/langchain-ai/deepagents/commit/4bc11004ba86999c2f6d59b1d958b53195619bcc) release(deepagents): 0.7.11 (#5977)
- [`77b0f01`](https://github.com/langchain-ai/deepagents/commit/77b0f018f9d736c9409e44d03edaf9985b59f271) chore(deps): raise dependency minimums for `all` (#5936)
- [`d26b53a`](https://github.com/langchain-ai/deepagents/commit/d26b53ad12265375c6dcf6b1c1501e0a4adf0ea3) release(deepagents): 0.7.10 (#5838)

</details>

## deepagents==0.7.15: deepagents==0.7.15

**Published**: 2026-09-16

### Bug Fixes

- Gave tool result offloads without IDs unique paths to avoid collisions. ([#6316](https://github.com/langchain-ai/deepagents/pull/6316))
- Propagated subagent state keys for provided subagent middleware. ([#5553](https://github.com/langchain-ai/deepagents/pull/5553))
- Allow colons in model profile keys. ([#6334](https://github.com/langchain-ai/deepagents/pull/6334))
- Required a real Nemotron task transition for built-in profile. ([#6296](https://github.com/langchain-ai/deepagents/pull/6296))

---

Thanks to our community contributors: @ccurme

**Special thanks** to everyone who reported the issues addressed in this release: @terrapin888 ([#6302](https://github.com/langchain-ai/deepagents/issues/6302)), @sujee ([#5982](https://github.com/langchain-ai/deepagents/issues/5982))

Internal maintainers: @hntrl, @mdrxy, @srimanthtangedipalli-eng, @sydney-runkle

Released by: @mdrxy

<details>
<summary>Git log since deepagents==0.7.14</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`0f5a2b5`](https://github.com/langchain-ai/deepagents/commit/0f5a2b57fa5dbb3a7d8f16dc280cb5b1506ea8c0) release(deepagents): 0.7.15 (#6298)
- [`257872e`](https://github.com/langchain-ai/deepagents/commit/257872eea59368a0c3aac003f71d3c83ce44c833) fix(sdk): allow colons in profile model keys (#6334)
- [`ff8dda9`](https://github.com/langchain-ai/deepagents/commit/ff8dda912b0d1651f234b9d49cec06e79b7c1b6b) fix(sdk): propagate subagent state keys for provided subagent middleware (#5553)
- [`7a7f382`](https://github.com/langchain-ai/deepagents/commit/7a7f3827430572a0976002003d9f19d48ae20360) chore(deps): raise dependency minimums for `all` (#6336)
- [`06e5886`](https://github.com/langchain-ai/deepagents/commit/06e588610c08e7544ee77ac09aa971921a5c893e) chore(deps): raise dependency minimums for `all` (#6310)
- [`cf7a955`](https://github.com/langchain-ai/deepagents/commit/cf7a95594524a3080c0e22a5894e885f8f23b79c) chore(repo): migrate label automation to the prefixed taxonomy (#6309)
- [`a0c2ad0`](https://github.com/langchain-ai/deepagents/commit/a0c2ad03c6dcd52340e91bea6483ee7750d5deee) fix(sdk): give id-less tool result offloads unique paths (#6316)
- [`287160b`](https://github.com/langchain-ai/deepagents/commit/287160bf1cfb5c35aa95d76b73dcd72e1a7b1034) docs(repo): bump example models to the current GA lineup (#6294)
- [`3d6392e`](https://github.com/langchain-ai/deepagents/commit/3d6392e82408c1a5e24d0c1d32c53934552fd314) fix(sdk): require a real Nemotron task transition (#6296)

</details>

## deepagents-code==0.1.70: deepagents-code==0.1.70

**Published**: 2026-09-16

### Bug Fixes

- Fixed prompt clipboard word deletion behavior. ([#6345](https://github.com/langchain-ai/deepagents/pull/6345))
- Clarified unknown model effort in footer. ([#6337](https://github.com/langchain-ai/deepagents/pull/6337))
- Prevented duplicate clicks in the footer model and effort pickers. ([#6344](https://github.com/langchain-ai/deepagents/pull/6344))
- Delayed hook status display in the footer to reduce UI noise. ([#6322](https://github.com/langchain-ai/deepagents/pull/6322))

---

Internal maintainers: @mdrxy

Released by: @mdrxy

<details>
<summary>Git log since deepagents-code==0.1.69</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`229ffef`](https://github.com/langchain-ai/deepagents/commit/229ffef3d41bbe6dcfff3852bbd2058331aabe01) release(deepagents-code): 0.1.70 (#6323)
- [`5906a39`](https://github.com/langchain-ai/deepagents/commit/5906a39b8fc4ef5b0c8576977c545a978f192019) chore(deps): bump `deepagents` pin in `deepagents-code` to 0.7.15 (#6347)
- [`0f5a2b5`](https://github.com/langchain-ai/deepagents/commit/0f5a2b57fa5dbb3a7d8f16dc280cb5b1506ea8c0) release(deepagents): 0.7.15 (#6298)
- [`777d633`](https://github.com/langchain-ai/deepagents/commit/777d6336de3c7f1b6759a3f092fbfeddc4c54499) fix(code): align prompt clipboard word deletion (#6345)
- [`811e927`](https://github.com/langchain-ai/deepagents/commit/811e92738ffa491e991b9dea6573fff57a84d938) fix(code): deduplicate footer picker clicks (#6344)
- [`5ee1073`](https://github.com/langchain-ai/deepagents/commit/5ee1073e9ab2fe9a286becb27ec7e694a4b3de4f) fix(code): clarify unknown effort default (#6337)
- [`7a7f382`](https://github.com/langchain-ai/deepagents/commit/7a7f3827430572a0976002003d9f19d48ae20360) chore(deps): raise dependency minimums for `all` (#6336)
- [`26d2eae`](https://github.com/langchain-ai/deepagents/commit/26d2eae2ec07584e87d58b9cc8c9d08a3f98b0ea) chore(deps): bump `genai-prices` in `deepagents-code` to 0.1.7 (#6332)
- [`06e5886`](https://github.com/langchain-ai/deepagents/commit/06e588610c08e7544ee77ac09aa971921a5c893e) chore(deps): raise dependency minimums for `all` (#6310)
- [`7f9e8ed`](https://github.com/langchain-ai/deepagents/commit/7f9e8ed3a555933902045792da9bb184950ee7b2) fix(code): delay hook status in footer (#6322)
- [`2ab4394`](https://github.com/langchain-ai/deepagents/commit/2ab439449f0040fdf0f89f30fbf852313c24a5a6) refactor(code): consolidate interruption recovery state updates (#6319)

</details>

## deepagents==0.7.14: deepagents==0.7.14

**Published**: 2026-09-14

### Features

- Updated `read_file` output formatting. ([#5648](https://github.com/langchain-ai/deepagents/pull/5648))

### Bug Fixes

- Bounded compaction recovery and added validation for input budgets. ([#6267](https://github.com/langchain-ai/deepagents/pull/6267))
- Fixed invalid partial tool-call patching and updated imputed `ToolMessage` content in `PatchToolCallsMiddleware`. ([#5430](https://github.com/langchain-ai/deepagents/pull/5430), [#6277](https://github.com/langchain-ai/deepagents/pull/6277))
- Rejected empty `old_string` values in `edit_file` paths. ([#5747](https://github.com/langchain-ai/deepagents/pull/5747))
- Fixed character counting in `ls` and `glob` output. ([#6204](https://github.com/langchain-ai/deepagents/pull/6204))
- Improved `glob` tool results to suggest populating `path` when appropriate. ([#6199](https://github.com/langchain-ai/deepagents/pull/6199))
- Prevented blank read windows from triggering the empty-file warning. ([#5050](https://github.com/langchain-ai/deepagents/pull/5050))

---

Thanks to our community contributors: @SomSamantray, @rajarshidattapy

**Special thanks** to everyone who reported the issues addressed in this release: @nickisaacs ([#5547](https://github.com/langchain-ai/deepagents/issues/5547)), @abrarsheikh ([#4662](https://github.com/langchain-ai/deepagents/issues/4662)), @bluefateludi ([#5589](https://github.com/langchain-ai/deepagents/issues/5589), [#5676](https://github.com/langchain-ai/deepagents/issues/5676)), @wawahaha ([#4882](https://github.com/langchain-ai/deepagents/issues/4882)), @rajarshidattapy ([#4955](https://github.com/langchain-ai/deepagents/issues/4955))

Internal maintainers: @ccurme, @eyurtsev, @hntrl, @jkennedyvz, @mdrxy

Released by: @ccurme

<details>
<summary>Git log since deepagents==0.7.13</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`ded0f11`](https://github.com/langchain-ai/deepagents/commit/ded0f1187f6bf81e2f679ea7b16ead7760d775a6) release(deepagents): 0.7.14 (#6050)
- [`3b99e73`](https://github.com/langchain-ai/deepagents/commit/3b99e7333e501d1ccf84b5fbaaacc9de815ce4b7) chore(deps): raise dependency minimums for `all` (#6280)
- [`178417d`](https://github.com/langchain-ai/deepagents/commit/178417d0dad063fea0300db68455f4574ef67db3) fix(sdk): update imputed `ToolMessage` content in `PatchToolCallsMiddleware` (#6277)
- [`bb6d431`](https://github.com/langchain-ai/deepagents/commit/bb6d4316eb59b368b862e5517b888e5e70b1c3ae) fix(sdk): bound compaction recovery and validate input budgets (#6267)
- [`9f6bd6a`](https://github.com/langchain-ai/deepagents/commit/9f6bd6ae200ff2e45e8c0246343b6c8936707447) chore(deps): raise dependency minimums for `all` (#6268)
- [`276beca`](https://github.com/langchain-ai/deepagents/commit/276becae1bbaa38d6253aee90e99212e7bdf0606) feat(sdk,code): update `read_file` output formatting (#5648)
- [`edc7c1c`](https://github.com/langchain-ai/deepagents/commit/edc7c1ca69831c1827c1f479696a5450ffd1df9d) fix(sdk): patch invalid partial tool calls (#5430)
- [`d889f40`](https://github.com/langchain-ai/deepagents/commit/d889f40ec72880ae2642300f62eceb9efe185757) chore(deps): raise dependency minimums for `all` (#6237)
- [`4ca678f`](https://github.com/langchain-ai/deepagents/commit/4ca678fe11fcb8f452b59b31923f37dabbc26d6a) fix(sdk): fix character counting in `ls` and `glob` output (#6204)
- [`7c3cebe`](https://github.com/langchain-ai/deepagents/commit/7c3cebe1df407ac947c34d56a1a21945aaddae23) chore(deps): raise dependency minimums for `all` (#6212)
- [`26954ea`](https://github.com/langchain-ai/deepagents/commit/26954eaafb581db641dd7ce3f9d4ba470a9af878) fix(sdk): suggest populating path in `glob` tool result where appropriate (#6199)
- [`18106be`](https://github.com/langchain-ai/deepagents/commit/18106be837bcdd9005b2dd73280d871a0621bf99) chore(deps): raise dependency minimums for `all` (#6130)
- [`07d2952`](https://github.com/langchain-ai/deepagents/commit/07d2952d346d81d06bd181db8c560a77f2b51bc8) chore(deps): raise dependency minimums for `all` (#6096)
- [`1281b04`](https://github.com/langchain-ai/deepagents/commit/1281b04f7eafaf654982b99a3c93f72744208eda) fix(sdk): reject empty old_string in edit_file paths (#5747)
- [`de999bb`](https://github.com/langchain-ai/deepagents/commit/de999bb182ae6c29d4efea7c3d82127420421275) test(sdk): remove change-detector tests (#5975)
- [`bdccb82`](https://github.com/langchain-ai/deepagents/commit/bdccb82d21f998174354a25daa4624dc0d9da97b) chore(deps): raise dependency minimums for `all` (#6053)
- [`a892a0e`](https://github.com/langchain-ai/deepagents/commit/a892a0ee26d045256b6d3b0c224b3de663c83eb5) fix(sdk): keep blank read windows out of the empty-file warning (#5050)
- [`ac0fac4`](https://github.com/langchain-ai/deepagents/commit/ac0fac42f6ece4147c3636896358e1a9391cd94a) chore(deps): raise dependency minimums for `all` (#6046)

</details>

## deepagents-code==0.1.69: deepagents-code==0.1.69

**Published**: 2026-09-14

### Features

- Update `read_file` output formatting. ([#5648](https://github.com/langchain-ai/deepagents/pull/5648))
- Surface DeepSeek V4.1 Flash in the model picker. ([#6254](https://github.com/langchain-ai/deepagents/pull/6254))
- Surface locally tracked GitHub stacks in agent context. ([#6290](https://github.com/langchain-ai/deepagents/pull/6290))
- Copy a model slug with Ctrl+click. ([#6243](https://github.com/langchain-ai/deepagents/pull/6243))
- Show session length in the Debug Console. ([#6224](https://github.com/langchain-ai/deepagents/pull/6224))

### Bug Fixes

- Price nested usage with its own model and honor completions. ([#6251](https://github.com/langchain-ai/deepagents/pull/6251))
- Drop stale Anthropic thinking blocks. ([#6300](https://github.com/langchain-ai/deepagents/pull/6300))
- Isolate credentials used for user shell tracing. ([#6242](https://github.com/langchain-ai/deepagents/pull/6242))
- Attribute dotenv configuration sources. ([#6222](https://github.com/langchain-ai/deepagents/pull/6222))
- Expose unknown reasoning effort values. ([#6241](https://github.com/langchain-ai/deepagents/pull/6241))
- Open the Debug Console at the bottom of the log. ([#6218](https://github.com/langchain-ai/deepagents/pull/6218))
- Order Debug Console log filters. ([#6217](https://github.com/langchain-ai/deepagents/pull/6217))
- Show the spinner during pre-stream turn setup. ([#6253](https://github.com/langchain-ai/deepagents/pull/6253))
- Demote no-output hint suppression messages to debug logging. ([#6245](https://github.com/langchain-ai/deepagents/pull/6245))

---

Internal maintainers: @aolsenjazz, @eyurtsev, @mdrxy

Released by: @mdrxy

<details>
<summary>Git log since deepagents-code==0.1.68</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`1d3232c`](https://github.com/langchain-ai/deepagents/commit/1d3232c0852c47af09119edea10eeec887e4f0da) release(deepagents-code): 0.1.69 (#6247)
- [`fe01fac`](https://github.com/langchain-ai/deepagents/commit/fe01fac1fa3c4d30d9379a9e5f4273a622710049) fix(code): drop stale Anthropic thinking blocks (#6300)
- [`f413a40`](https://github.com/langchain-ai/deepagents/commit/f413a40f7e74ada749b18491aa276ee1224c7368) fix(code): price nested usage with its own model and honor completions (#6251)
- [`6f1ac85`](https://github.com/langchain-ai/deepagents/commit/6f1ac85c46604ef093a9d295fbcc52a8108aa8ed) fix(code): attribute dotenv config sources (#6222)
- [`fa609c2`](https://github.com/langchain-ai/deepagents/commit/fa609c23ba883557d015529d431ae266847e388c) fix(code): show the spinner during pre-stream turn setup (#6253)
- [`4bbad10`](https://github.com/langchain-ai/deepagents/commit/4bbad10385b22cb76dc40aaa4709d4726f20db02) fix(code): order debug console log filters (#6217)
- [`312fc0b`](https://github.com/langchain-ai/deepagents/commit/312fc0beb74f2c93833302cd8ff0a089b14dab6a) chore(deps): bump `deepagents` pin in `deepagents-code` to 0.7.14 (#6301)
- [`34f1b6b`](https://github.com/langchain-ai/deepagents/commit/34f1b6b037b24a1f2fe8b1d6112d9f8cdfe32bf2) fix(code): open debug console at log bottom (#6218)
- [`05edbb1`](https://github.com/langchain-ai/deepagents/commit/05edbb14d0855303ce74d42a4bf368804856c43a) feat(code): show session length in Debug Console (#6224)
- [`8a5c317`](https://github.com/langchain-ai/deepagents/commit/8a5c317e45edb0df4ad42ae79c1c5a6f8cff407f) feat(code): copy model slug with Ctrl+click (#6243)
- [`ed715ee`](https://github.com/langchain-ai/deepagents/commit/ed715eeba608af47c9ed7943822c25d935a30b9e) fix(code): expose unknown reasoning effort (#6241)
- [`35c21fa`](https://github.com/langchain-ai/deepagents/commit/35c21faafe329f4f6932c0941d163306e1aa06e5) fix(code): isolate user shell tracing credentials (#6242)
- [`0a93587`](https://github.com/langchain-ai/deepagents/commit/0a9358749d7654cc0bd9273a9e007be89abf316d) feat(code): list DeepSeek V4.1 Flash in picker (#6254)
- [`ded0f11`](https://github.com/langchain-ai/deepagents/commit/ded0f1187f6bf81e2f679ea7b16ead7760d775a6) release(deepagents): 0.7.14 (#6050)
- [`c08cae6`](https://github.com/langchain-ai/deepagents/commit/c08cae693e0036fcd45d979a7dfa3a7e306a0515) feat(code): surface locally tracked GitHub stacks (#6290)
- [`3b99e73`](https://github.com/langchain-ai/deepagents/commit/3b99e7333e501d1ccf84b5fbaaacc9de815ce4b7) chore(deps): raise dependency minimums for `all` (#6280)
- [`a5378d7`](https://github.com/langchain-ai/deepagents/commit/a5378d7125ad5a96fe785afc4feb02af3a58612c) test(code): assert tool duration state instead of rendered strings (#6270)
- [`9f6bd6a`](https://github.com/langchain-ai/deepagents/commit/9f6bd6ae200ff2e45e8c0246343b6c8936707447) chore(deps): raise dependency minimums for `all` (#6268)
- [`276beca`](https://github.com/langchain-ai/deepagents/commit/276becae1bbaa38d6253aee90e99212e7bdf0606) feat(sdk,code): update `read_file` output formatting (#5648)
- [`d93ab33`](https://github.com/langchain-ai/deepagents/commit/d93ab3351bbf4c3687212f665094ccad100f2c08) fix(code): demote no-output hint suppression to debug (#6245)
- [`d889f40`](https://github.com/langchain-ai/deepagents/commit/d889f40ec72880ae2642300f62eceb9efe185757) chore(deps): raise dependency minimums for `all` (#6237)

</details>

## deepagents-talon==0.0.8: deepagents-talon==0.0.8

**Published**: 2026-09-11

### Features

- Added `send_message` support for progress updates. ([#6264](https://github.com/langchain-ai/deepagents/pull/6264))
- Added targeted conversation deletion. ([#6235](https://github.com/langchain-ai/deepagents/pull/6235))
- Added support for managing tool approvals through `tools.json`. ([#6248](https://github.com/langchain-ai/deepagents/pull/6248))

### Bug Fixes

- Improved MCP reliability and safety by hardening OAuth device-flow and credential handling, preserving refresh tokens, making configuration updates bounded and non-destructive, reporting protocol errors to the model, and preventing URL swaps past the auto-approve guard. ([#6170](https://github.com/langchain-ai/deepagents/pull/6170), [#6172](https://github.com/langchain-ai/deepagents/pull/6172), [#6171](https://github.com/langchain-ai/deepagents/pull/6171), [#6239](https://github.com/langchain-ai/deepagents/pull/6239), [#6173](https://github.com/langchain-ai/deepagents/pull/6173))
- Improved background subagent and conversation reliability, including recoverable start/stop behavior, scheduled-job delivery, clearer orchestration enforcement, preventing one conversation from stalling or outliving the rest, and suppressing results from discarded turns. ([#6166](https://github.com/langchain-ai/deepagents/pull/6166), [#6228](https://github.com/langchain-ai/deepagents/pull/6228), [#6167](https://github.com/langchain-ai/deepagents/pull/6167), [#6168](https://github.com/langchain-ai/deepagents/pull/6168), [#6231](https://github.com/langchain-ai/deepagents/pull/6231))
- Improved indexing and vector maintenance by bounding archive scans, query embeddings, deletion markers, vector rebuilds, and indexing workers, while surfacing indexing failures and resolving import-cycle and PostgreSQL dependency issues. ([#6162](https://github.com/langchain-ai/deepagents/pull/6162), [#6165](https://github.com/langchain-ai/deepagents/pull/6165), [#6163](https://github.com/langchain-ai/deepagents/pull/6163))
- Fixed local voice transcription and embedding retries, and ensured local model downloads persist. ([#6255](https://github.com/langchain-ai/deepagents/pull/6255), [#6137](https://github.com/langchain-ai/deepagents/pull/6137))
- Improved startup, teardown, and provider cleanup by safely unwinding channels that fail mid-start, sharing the optional-driver loader, and closing provider clients. ([#6169](https://github.com/langchain-ai/deepagents/pull/6169), [#6164](https://github.com/langchain-ai/deepagents/pull/6164))

---

Internal maintainers: @jkennedyvz, @linted

Released by: @jkennedyvz

<details>
<summary>Git log since deepagents-talon==0.0.7</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`5469657`](https://github.com/langchain-ai/deepagents/commit/54696577caf3dfcefb662db08b4a8034ec6a35cd) release(deepagents-talon): 0.0.8 (#6184)
- [`a97ba32`](https://github.com/langchain-ai/deepagents/commit/a97ba320fa797e9546efe3486ce703e8efd30fb4) fix(talon): fix local voice transcription and embedding retries (#6255)
- [`15606d2`](https://github.com/langchain-ai/deepagents/commit/15606d280a8ddb86c8966fef0bab257f8070944f) feat(talon): add `send_message` for progress updates (#6264)
- [`a273ad6`](https://github.com/langchain-ai/deepagents/commit/a273ad6c6a595c3aff915b744750711b50d544e3) feat(talon): manage tool approvals through `tools.json` (#6248)
- [`edd0bcf`](https://github.com/langchain-ai/deepagents/commit/edd0bcfc61dc16eabea0b3a59aa84569e3b240dc) fix(talon): report MCP protocol errors to the model (#6239)
- [`d889f40`](https://github.com/langchain-ai/deepagents/commit/d889f40ec72880ae2642300f62eceb9efe185757) chore(deps): raise dependency minimums for `all` (#6237)
- [`4fb301d`](https://github.com/langchain-ai/deepagents/commit/4fb301d647c860d0d8f2108149e58cd9fe623352) feat(talon): add targeted conversation deletion (#6235)
- [`481773c`](https://github.com/langchain-ai/deepagents/commit/481773caed336c86034e1c72b4988e7e93968610) fix(talon): keep results a discarded turn never reported (#6231)
- [`b6dc5c5`](https://github.com/langchain-ai/deepagents/commit/b6dc5c5a8c6c1124f8e243868a83b9af188b08c7) fix(talon): deliver background subagents launched by a scheduled job (#6228)
- [`5406820`](https://github.com/langchain-ai/deepagents/commit/5406820ec1c00ce521b0f54bb786c511da092f01) fix(talon): unwind the channel that fails mid-start, and keep teardown safe (#6169)
- [`134ffc7`](https://github.com/langchain-ai/deepagents/commit/134ffc7bb4eba504ee90aaae3a70df87c6ea3217) fix(talon): stop one conversation from stalling or outliving the rest (#6168)
- [`05620cc`](https://github.com/langchain-ai/deepagents/commit/05620cc72bfa7b81ce41064641cfa5808cb7c74a) fix(talon): make subagent orchestration state what it enforces (#6167)
- [`d4c41b0`](https://github.com/langchain-ai/deepagents/commit/d4c41b048132eb27e2337b60b21463403b615390) fix(talon): make background subagents and host start/stop recoverable (#6166)
- [`1c477e9`](https://github.com/langchain-ai/deepagents/commit/1c477e982d3d4f6027e0928d03516c4520b25e21) release(deepagents-code): 0.1.68 (#6202)
- [`7c3cebe`](https://github.com/langchain-ai/deepagents/commit/7c3cebe1df407ac947c34d56a1a21945aaddae23) chore(deps): raise dependency minimums for `all` (#6212)
- [`fc91199`](https://github.com/langchain-ai/deepagents/commit/fc91199a44b99990cca49341169aea858da222fc) fix(talon): persist local model downloads (#6137)
- [`a4905a2`](https://github.com/langchain-ai/deepagents/commit/a4905a2fe555fef3cd01563392f87c0446acd8aa) chore(deps): bump httpx2 from 2.10.0 to 2.12.0 in /libs/talon (#6193)
- [`51faa4c`](https://github.com/langchain-ai/deepagents/commit/51faa4c98bb06d5b5cd330fecb556b85318b1e31) chore(talon): bump compatible dependencies (#6191)
- [`d0fbc7c`](https://github.com/langchain-ai/deepagents/commit/d0fbc7c16c233bc8e65e56e4be485d72c7a8abb2) release(deepagents-code): 0.1.67 (#6059)
- [`b83d161`](https://github.com/langchain-ai/deepagents/commit/b83d161b817c7493e1c200977639db084bec6be2) chore(deps): bump httpcore2 from 2.9.1 to 2.10.0 in /libs/talon (#6181)
- [`f6ae37c`](https://github.com/langchain-ai/deepagents/commit/f6ae37cb1f20486f2da9d5a304681ea96de99bc1) chore(deps): raise dependency minimums for `all` (#6186)
- [`f526c90`](https://github.com/langchain-ai/deepagents/commit/f526c9083e7bd504a7a9393847023d4e0dfe02de) chore(deps): bump js-yaml from 4.3.1 to 4.3.2 in /libs/talon/deepagents_talon/channels/whatsapp_bridge (#6180)
- [`d886742`](https://github.com/langchain-ai/deepagents/commit/d8867426af3ab83c31d64a11e5b84a21ce86a43d) fix(talon): close a url swap past the MCP auto-approve guard (#6173)
- [`7dc07cb`](https://github.com/langchain-ai/deepagents/commit/7dc07cbb60f144e2b7fc266ee452b06c8b8dd10c) fix(talon): stop losing MCP refresh tokens on a refresh response (#6172)
- [`f995931`](https://github.com/langchain-ai/deepagents/commit/f9959311bfeb788191f971fe32552b01adbac199) fix(talon): make MCP configuration updates bounded and non-destructive (#6171)
- [`e6c5829`](https://github.com/langchain-ai/deepagents/commit/e6c58294d6792bcf433eb5f38fec1b5be70cc065) fix(talon): harden the MCP OAuth device flow and credential paths (#6170)
- [`8462c24`](https://github.com/langchain-ai/deepagents/commit/8462c24524541f49a3eb53037580110586973c8c) fix(talon): bound the vector rebuild, break the import cycle, pin postgres (#6165)
- [`02cea21`](https://github.com/langchain-ai/deepagents/commit/02cea210d7f3e5bc2bf89453e8a6e4af59031f59) fix(talon): share one optional-driver loader and close provider clients (#6164)
- [`03653d6`](https://github.com/langchain-ai/deepagents/commit/03653d6d95ceb0b1b6739998fd9475e304489d12) fix(talon): surface indexing failures and bound the indexing worker (#6163)
- [`79c23e6`](https://github.com/langchain-ai/deepagents/commit/79c23e669bf81cddf16e4ab1582ccc9b26d8bea7) fix(talon): bound archive scans, query embeddings, and deletion markers (#6162)
- [`8566aef`](https://github.com/langchain-ai/deepagents/commit/8566aef97bd32c5482986ea55eb0077ce42a354d) chore(deps): raise dependency minimums for `all` (#6146)
- [`25e68f9`](https://github.com/langchain-ai/deepagents/commit/25e68f9504328a7fc5fa6ef0c5083cbb9cb7362c) test(talon): make history backoff coverage deterministic (#6142)
- [`18106be`](https://github.com/langchain-ai/deepagents/commit/18106be837bcdd9005b2dd73280d871a0621bf99) chore(deps): raise dependency minimums for `all` (#6130)

</details>

## deepagents-code==0.1.68: deepagents-code==0.1.68

**Published**: 2026-09-10

### Features

- Recommended GLM 5.3 models are now available in code workflows ([#6211](https://github.com/langchain-ai/deepagents/pull/6211)).

### Bug Fixes

- Added pricing support for Fireworks GLM-5.3 and GLM-5.3 Flash usage ([#6221](https://github.com/langchain-ai/deepagents/pull/6221), [#6223](https://github.com/langchain-ai/deepagents/pull/6223)).
- Workspace switches now ask for confirmation before restarting the server ([#6178](https://github.com/langchain-ai/deepagents/pull/6178)).
- Effort changes are now included in cache identity for OpenAI and Anthropic requests ([#6196](https://github.com/langchain-ai/deepagents/pull/6196)).
- Standardized the recent-thread environment variable ([#6205](https://github.com/langchain-ai/deepagents/pull/6205)).
- Silenced warnings when the themes config is absent ([#6220](https://github.com/langchain-ai/deepagents/pull/6220)).

---

Internal maintainers: @mdrxy

Released by: @mdrxy

<details>
<summary>Git log since deepagents-code==0.1.67</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`1c477e9`](https://github.com/langchain-ai/deepagents/commit/1c477e982d3d4f6027e0928d03516c4520b25e21) release(deepagents-code): 0.1.68 (#6202)
- [`b93f748`](https://github.com/langchain-ai/deepagents/commit/b93f7483bb5722bbae281a19a80a7aea21d38832) fix(code): silence absent themes config warning (#6220)
- [`d3627ea`](https://github.com/langchain-ai/deepagents/commit/d3627eaaeda2de62c19b0647ac29f80767057241) fix(code): price Fireworks GLM-5.3 Flash usage (#6223)
- [`07c5d2e`](https://github.com/langchain-ai/deepagents/commit/07c5d2ecfe5db6238eff782f714fbbe08865e8d4) fix(code): price Fireworks GLM-5.3 usage (#6221)
- [`7c3cebe`](https://github.com/langchain-ai/deepagents/commit/7c3cebe1df407ac947c34d56a1a21945aaddae23) chore(deps): raise dependency minimums for `all` (#6212)
- [`e7e88d5`](https://github.com/langchain-ai/deepagents/commit/e7e88d5efaf2bbce33237ea323fb68487eabd721) feat(code): recommend GLM 5.3 models (#6211)
- [`a4c218e`](https://github.com/langchain-ai/deepagents/commit/a4c218e185bc49a11a381c3afde91f6efa7226fc) fix(code): standardize recent-thread environment variable (#6205)
- [`51557ef`](https://github.com/langchain-ai/deepagents/commit/51557efa37215401827132fc40ff3523c50d285a) test(code): stabilize deferred action drain coverage (#6206)
- [`f3b126a`](https://github.com/langchain-ai/deepagents/commit/f3b126a13d2228cc983389752b72485a358dab87) hotfix(code): honor effective reasoning effort in cache warnings (#6203)
- [`7997203`](https://github.com/langchain-ai/deepagents/commit/7997203245915aa83e87db83252c04391bd00440) fix(code): confirm server restart for workspace switch (#6178)
- [`cacd50a`](https://github.com/langchain-ai/deepagents/commit/cacd50adc365e949e4f0b9a7e94ad6f8eeb7d497) fix(code): treat effort changes as cache identity for OpenAI and Anthropic (#6196)

</details>

## deepagents-code==0.1.67: deepagents-code==0.1.67

**Published**: 2026-09-09

### Features

- Added `GPT-6 Astra` support ([#6141](https://github.com/langchain-ai/deepagents/issues/6141)).
- Reuses the server across workspace switches ([#6152](https://github.com/langchain-ai/deepagents/issues/6152)).
- Limits thread resume age ([#6068](https://github.com/langchain-ai/deepagents/issues/6068)).

### Bug Fixes

- Improved workspace isolation by resolving project policy per workspace, scoping project dotenv to workspaces, and isolating LangSmith auth and workspace tracing ([#6064](https://github.com/langchain-ai/deepagents/issues/6064), [#5980](https://github.com/langchain-ai/deepagents/issues/5980), [#6061](https://github.com/langchain-ai/deepagents/issues/6061)).
- Improved transcript tail reconciliation by bounding and serializing reconciliation work ([#6057](https://github.com/langchain-ai/deepagents/issues/6057), [#6143](https://github.com/langchain-ai/deepagents/issues/6143)).
- Refuses a second sandbox workspace and moves sandbox creation and entry off the guarded event loop ([#5979](https://github.com/langchain-ai/deepagents/issues/5979), [#6017](https://github.com/langchain-ai/deepagents/issues/6017)).
- Surfaces stale updates in-session ([#6063](https://github.com/langchain-ai/deepagents/issues/6063)).
- Surfaces the LangSmith credential in `dcode config` ([#6083](https://github.com/langchain-ai/deepagents/issues/6083)).
- Offloads server config imports ([#6089](https://github.com/langchain-ai/deepagents/issues/6089)).
- Correctly parses extra skill directories with the platform separator ([#6151](https://github.com/langchain-ai/deepagents/issues/6151)).

---

Thanks to our community contributors: @jack-michaud, @UniversePeak

**Special thanks** to everyone who reported the issues addressed in this release: @jack-michaud ([#6018](https://github.com/langchain-ai/deepagents/issues/6018)), @JessYanCoding ([#6074](https://github.com/langchain-ai/deepagents/issues/6074))

Internal maintainers: @mdrxy

Released by: @mdrxy

<details>
<summary>Git log since deepagents-code==0.1.66</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`d0fbc7c`](https://github.com/langchain-ai/deepagents/commit/d0fbc7c16c233bc8e65e56e4be485d72c7a8abb2) release(deepagents-code): 0.1.67 (#6059)
- [`c71cd51`](https://github.com/langchain-ai/deepagents/commit/c71cd511841358c318b8fa6aa3222ecfd7890a64) chore(deps): bump httpx2 from 2.10.0 to 2.12.0 in /libs/code (#6179)
- [`f6ae37c`](https://github.com/langchain-ai/deepagents/commit/f6ae37cb1f20486f2da9d5a304681ea96de99bc1) chore(deps): raise dependency minimums for `all` (#6186)
- [`32fe5e4`](https://github.com/langchain-ai/deepagents/commit/32fe5e4b42a91bd2c8e2576510aa1dc55196c57d) chore(deps): bump httpcore2 from 2.9.0 to 2.10.0 in /libs/code (#6182)
- [`fd28bfb`](https://github.com/langchain-ai/deepagents/commit/fd28bfb5c5e1ca18af975d8e57d361c1c23f81b7) fix(code): run sandbox creation and entry off the guarded event loop (#6017)
- [`318311f`](https://github.com/langchain-ai/deepagents/commit/318311f56c3d3b9c4af4ece22fcfc387eeece5cc) feat(code): limit thread resume age (#6068)
- [`56e4ef1`](https://github.com/langchain-ai/deepagents/commit/56e4ef1a5f447950a04ba37a7855c8e0babd2f11) fix(code): parse extra skill dirs with platform separator (#6151)
- [`ca2d1ef`](https://github.com/langchain-ai/deepagents/commit/ca2d1ef7f270d0fa1040e5473f43e99937b5f03f) feat(code): reuse server across workspace switches (#6152)
- [`5fb8b69`](https://github.com/langchain-ai/deepagents/commit/5fb8b699843ecf93debc592d9dbb8a534f54db09) fix(code): serialize transcript tail reconciliation (#6143)
- [`a1a0887`](https://github.com/langchain-ai/deepagents/commit/a1a0887f7e42d0f8515ad415c9b9062e89350e8c) fix(code): surface the LangSmith credential in `dcode config` (#6083)
- [`ea1f253`](https://github.com/langchain-ai/deepagents/commit/ea1f2536537efb01c71dce54c46894b9318c4f80) fix(code): resolve project policy per workspace (#6064)
- [`794eda8`](https://github.com/langchain-ai/deepagents/commit/794eda83b777a2a7278e5726607e4b305801298d) fix(code): isolate LangSmith auth and workspace tracing (#6061)
- [`048f989`](https://github.com/langchain-ai/deepagents/commit/048f9890bfe8b640e1e72085a4fa50d9084545f0) feat(code): add `GPT-6 Astra` support (#6141)
- [`90fe4f4`](https://github.com/langchain-ai/deepagents/commit/90fe4f4ac0a1311f1527b1a5cd02bd3ac8664580) fix(code): offload server config import (#6089)
- [`18106be`](https://github.com/langchain-ai/deepagents/commit/18106be837bcdd9005b2dd73280d871a0621bf99) chore(deps): raise dependency minimums for `all` (#6130)
- [`07d2952`](https://github.com/langchain-ai/deepagents/commit/07d2952d346d81d06bd181db8c560a77f2b51bc8) chore(deps): raise dependency minimums for `all` (#6096)
- [`6c89fe2`](https://github.com/langchain-ai/deepagents/commit/6c89fe2197a2dfe4f3851cda38565bcadba6066b) release(langchain-quickjs): 0.3.7 (#6095)
- [`cdb9d4c`](https://github.com/langchain-ai/deepagents/commit/cdb9d4c30f4419c0eb2c98ad53940875e4dfbe9e) fix(code): surface stale updates in-session (#6063)
- [`678c115`](https://github.com/langchain-ai/deepagents/commit/678c11559d7534ee5e16ceebfacf01eeb6536ac7) fix(code): scope project dotenv to workspaces (#5980)
- [`cb4c973`](https://github.com/langchain-ai/deepagents/commit/cb4c973172f7838eefa328ea0c6ca334b6aaab98) fix(code): refuse a second sandbox workspace (#5979)
- [`8da3264`](https://github.com/langchain-ai/deepagents/commit/8da32644dc7dcad1125a840bc17ec3d5ea66b8c3) fix(code): bound transcript tail reconciliation (#6057)

</details>

## deepagents-talon==0.0.7: deepagents-talon==0.0.7

**Published**: 2026-09-07

### Highlights

- Added Discord channel support, including improved gateway failure reporting after startup. ([#5992](https://github.com/langchain-ai/deepagents/issues/5992), [#6113](https://github.com/langchain-ai/deepagents/issues/6113))
- Added chat-scoped conversation history with configurable storage and optional hybrid search. ([#6105](https://github.com/langchain-ai/deepagents/issues/6105), [#6115](https://github.com/langchain-ai/deepagents/issues/6115), [#6108](https://github.com/langchain-ai/deepagents/issues/6108))
- Added MCP configuration tools, channel-based MCP server authorization, hot reload for MCP configuration, and OAuth/device authentication support for Slack and GitHub MCP integrations. ([#6097](https://github.com/langchain-ai/deepagents/issues/6097), [#6073](https://github.com/langchain-ai/deepagents/issues/6073), [#6084](https://github.com/langchain-ai/deepagents/issues/6084), [#6078](https://github.com/langchain-ai/deepagents/issues/6078), [#6079](https://github.com/langchain-ai/deepagents/issues/6079))
- Added more flexible subagent execution, including background expendable subagents, dcode-style subagents in fork mode, fresh subagents, per-task tool selection, and on-demand subagent configuration reloads. ([#6098](https://github.com/langchain-ai/deepagents/issues/6098), [#6085](https://github.com/langchain-ai/deepagents/issues/6085), [#6129](https://github.com/langchain-ai/deepagents/issues/6129), [#6099](https://github.com/langchain-ai/deepagents/issues/6099))
- Added defensive research defaults and a configuration-hardening self-review skill, with missing research subagent defaults backfilled. ([#6131](https://github.com/langchain-ai/deepagents/issues/6131), [#6136](https://github.com/langchain-ai/deepagents/issues/6136), [#6135](https://github.com/langchain-ai/deepagents/issues/6135))

### New features

- Added a `/help` command. ([#6106](https://github.com/langchain-ai/deepagents/issues/6106))
- Added a `current_time` tool and timezone-aware wall-clock cron schedules. ([#6065](https://github.com/langchain-ai/deepagents/issues/6065), [#6062](https://github.com/langchain-ai/deepagents/issues/6062))
- Added persistent LangGraph checkpoints. ([#6088](https://github.com/langchain-ai/deepagents/issues/6088))
- Added channel debug logging and opt-in agent activity logging. ([#5983](https://github.com/langchain-ai/deepagents/issues/5983), [#5984](https://github.com/langchain-ai/deepagents/issues/5984))
- New messages can now interrupt active turns. ([#6023](https://github.com/langchain-ai/deepagents/issues/6023))
- Long agent turns now keep the typing indicator alive. ([#5993](https://github.com/langchain-ai/deepagents/issues/5993))

### Fixes and improvements

- Improved channel reconnect resilience. ([#6040](https://github.com/langchain-ai/deepagents/issues/6040))
- Improved cron reliability by keeping the ticker alive after failed ticks, and stored cron jobs in a structured, versioned format. ([#6087](https://github.com/langchain-ai/deepagents/issues/6087), [#6086](https://github.com/langchain-ai/deepagents/issues/6086))
- Improved conversation history embeddings and search by correcting token budgets and prompt defaults, making remote embedding settings explicit, keeping search non-blocking, and removing the default Qwen query prefix. ([#6132](https://github.com/langchain-ai/deepagents/issues/6132), [#6133](https://github.com/langchain-ai/deepagents/issues/6133), [#6134](https://github.com/langchain-ai/deepagents/issues/6134))
- Fixed OAuth and MCP integration issues, including TLS hostname normalization, omitted empty optional MCP arguments, persisted OAuth token expiry, secured OAuth discovery, and restarted token refresh. ([#6102](https://github.com/langchain-ai/deepagents/issues/6102), [#6077](https://github.com/langchain-ai/deepagents/issues/6077), [#6090](https://github.com/langchain-ai/deepagents/issues/6090), [#6100](https://github.com/langchain-ai/deepagents/issues/6100))
- Fixed WhatsApp behavior by restoring bridge compatibility, preserving quoted message context and approval loops, handling reactions, and restricting replies to self-chat. ([#5999](https://github.com/langchain-ai/deepagents/issues/5999), [#6025](https://github.com/langchain-ai/deepagents/issues/6025), [#6104](https://github.com/langchain-ai/deepagents/issues/6104), [#6010](https://github.com/langchain-ai/deepagents/issues/6010))
- Treated trailing `[SILENT]` as a suppression marker. ([#6110](https://github.com/langchain-ai/deepagents/issues/6110))

---

Internal maintainers: @jkennedyvz, @linted

Released by: @jkennedyvz

<details>
<summary>Git log since deepagents-talon==0.0.6</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`80898ad`](https://github.com/langchain-ai/deepagents/commit/80898ade19fd42171d3222bfeaa7d945fe68fe85) release(deepagents-talon): 0.0.7 (#5989)
- [`e760662`](https://github.com/langchain-ai/deepagents/commit/e760662c956c581a0aca2cd4c95a3a7ce2cbd187) feat(talon): add configuration hardening self-review skill (#6136)
- [`54cf354`](https://github.com/langchain-ai/deepagents/commit/54cf354d04d094eaf77c17ed239fdd235e4ebc83) fix(talon): backfill missing research subagent defaults (#6135)
- [`1a835d2`](https://github.com/langchain-ai/deepagents/commit/1a835d216260d3b140af528d42fbb75eca26f818) feat(talon): ship defensive research defaults (#6131)
- [`3698f10`](https://github.com/langchain-ai/deepagents/commit/3698f10bc46ef6ac6d7b30c1fcdc499a8ac08b28) fix(talon): make remote embedding settings explicit and search non-blocking (#6133)
- [`276a385`](https://github.com/langchain-ai/deepagents/commit/276a385d6c49ef63f0cae107e5a1afa591191e03) feat(talon): support fresh subagents and per-task tool selection (#6129)
- [`933d863`](https://github.com/langchain-ai/deepagents/commit/933d86350f0d0ffa54359d4f00510e52ccdc2b85) fix(talon): stop HistoryEmbeddings defaulting to Qwen's query prefix (#6134)
- [`caabca2`](https://github.com/langchain-ai/deepagents/commit/caabca2b479ec731a81fa42e4c53c9471895fd7b) fix(talon): correct history embedding token budget and prompt defaults (#6132)
- [`904326a`](https://github.com/langchain-ai/deepagents/commit/904326a7932f72a189fcf0a74ba1f77a4087f79f) feat(talon): add optional hybrid conversation history search (#6108)
- [`99fcef8`](https://github.com/langchain-ai/deepagents/commit/99fcef85410736e211f5b0bcb2e9f1651e685105) feat(talon): add configurable conversation history storage (#6115)
- [`07d2952`](https://github.com/langchain-ai/deepagents/commit/07d2952d346d81d06bd181db8c560a77f2b51bc8) chore(deps): raise dependency minimums for `all` (#6096)
- [`94e4520`](https://github.com/langchain-ai/deepagents/commit/94e452077cf2650b0a410da7fa1e23b28d5dd8e1) fix(talon): report Discord gateway failures after startup (#6113)
- [`92576da`](https://github.com/langchain-ai/deepagents/commit/92576daf1cfaadfc811445b29be9457a78eb4e5e) fix(talon): treat trailing [SILENT] as a suppression marker (#6110)
- [`6c89fe2`](https://github.com/langchain-ai/deepagents/commit/6c89fe2197a2dfe4f3851cda38565bcadba6066b) release(langchain-quickjs): 0.3.7 (#6095)
- [`0b7b3a5`](https://github.com/langchain-ai/deepagents/commit/0b7b3a5b7b49e7ef9c4cb6775ba4e2d6a9b84f43) refactor(talon): extract conversation command dispatch (#6107)
- [`d121141`](https://github.com/langchain-ai/deepagents/commit/d12114143ec4ec15a04c5a7970c82899bf1b3caa) feat(talon): add chat-scoped conversation history (#6105)
- [`919ad2b`](https://github.com/langchain-ai/deepagents/commit/919ad2b56335c4e4cc416d474745efd78e0324a3) feat(talon): add /help command (#6106)
- [`eca6203`](https://github.com/langchain-ai/deepagents/commit/eca6203338a4d7927456ff1ec70b3a29f01e9799) fix(talon): preserve WhatsApp approval loops and handle reactions (#6104)
- [`34005a4`](https://github.com/langchain-ai/deepagents/commit/34005a4efab0ab2ee2466fec413844ddae0b27c1) fix(talon): normalize OAuth TLS server hostname (#6102)
- [`bf78360`](https://github.com/langchain-ai/deepagents/commit/bf78360c87725a3af546e97d03915fb64ecf13c0) feat(talon): reload subagent configuration on demand (#6099)
- [`c7a4841`](https://github.com/langchain-ai/deepagents/commit/c7a48414e90456bc6a453a3cbb60cc787221fc74) feat(talon): run expendable subagents in the background (#6098)
- [`43c2994`](https://github.com/langchain-ai/deepagents/commit/43c299460042b8ae44b2162fba24be456088bdb9) fix(talon): secure OAuth discovery and restart token refresh (#6100)
- [`f5f8dfe`](https://github.com/langchain-ai/deepagents/commit/f5f8dfec051905befc83f65ff40100fd01ad2865) feat(talon): add MCP configuration tools with default approval (#6097)
- [`91bcf63`](https://github.com/langchain-ai/deepagents/commit/91bcf63805c656fe0399aeaf9d25c0ae7f7a2cf2) feat(talon): support dcode-style subagents in fork mode (#6085)
- [`337416a`](https://github.com/langchain-ai/deepagents/commit/337416a85800818a5660afe8cfaedca16f8ac085) feat(talon): persist LangGraph checkpoints (#6088)
- [`1ac5386`](https://github.com/langchain-ai/deepagents/commit/1ac5386790ad2a069923161393410ef49a39a2b0) feat(talon): reload MCP configuration without restarting (#6084)
- [`a02d2df`](https://github.com/langchain-ai/deepagents/commit/a02d2df874332784530082261f801512bbf62dee) fix(talon): persist OAuth token expiry (#6090)
- [`4e5f935`](https://github.com/langchain-ai/deepagents/commit/4e5f9350e4d77b8bf19e472e8414662d3fa59dc0) perf(talon): store cron jobs in a structured, versioned format (#6086)
- [`4c062ec`](https://github.com/langchain-ai/deepagents/commit/4c062ec76e2cf19abb3ac8a78b1bf68cf7ece3cd) fix(talon): keep the cron ticker alive through a failed tick (#6087)
- [`d91ec7d`](https://github.com/langchain-ai/deepagents/commit/d91ec7d0a7b8d0a703fa16b5ee4237c84d10526c) feat(talon): support GitHub MCP device authentication (#6079)
- [`f8b137e`](https://github.com/langchain-ai/deepagents/commit/f8b137ef22bf81f8178fe490f6dad7621f161a16) feat(talon): support Slack MCP OAuth login (#6078)
- [`0fe5f94`](https://github.com/langchain-ai/deepagents/commit/0fe5f942d6359f956614584f37137bbba78ab589) feat(talon): add a current_time tool (#6065)
- [`632f2c9`](https://github.com/langchain-ai/deepagents/commit/632f2c941b877eff70407606b58e393212448a26) fix(talon): omit empty optional MCP arguments (#6077)
- [`76dd223`](https://github.com/langchain-ai/deepagents/commit/76dd22334c95083449cc858dec245f98a383bba4) feat(talon): authorize MCP servers through channels (#6073)
- [`83caa95`](https://github.com/langchain-ai/deepagents/commit/83caa9579dc1be8b2336ab194caaf4b77e859730) refactor(talon): own MCP OAuth login (#6070)
- [`43fe6dd`](https://github.com/langchain-ai/deepagents/commit/43fe6dde63831ac089cf15a14cc2932a20daabd3) refactor(talon): own MCP runtime configuration (#6066)
- [`afff4f8`](https://github.com/langchain-ai/deepagents/commit/afff4f8841bcc370d01c2739f53e882a92ef5c6a) feat(talon): add timezone-aware wall-clock cron schedules (#6062)
- [`3812967`](https://github.com/langchain-ai/deepagents/commit/3812967c84d90619848f3185f22470204fc88bd8) release(deepagents-code): 0.1.66 (#5963)
- [`bdccb82`](https://github.com/langchain-ai/deepagents/commit/bdccb82d21f998174354a25daa4624dc0d9da97b) chore(deps): raise dependency minimums for `all` (#6053)
- [`ec28fc1`](https://github.com/langchain-ai/deepagents/commit/ec28fc184e1356567bb10bac24eb95cec146b95d) release(langchain-quickjs): 0.3.6 (#5607)
- [`ac0fac4`](https://github.com/langchain-ai/deepagents/commit/ac0fac42f6ece4147c3636896358e1a9391cd94a) chore(deps): raise dependency minimums for `all` (#6046)
- [`54fe91f`](https://github.com/langchain-ai/deepagents/commit/54fe91fd3745e285899961bfe74380c837674164) fix(talon): improve channel reconnect resilience (#6040)
- [`1aae374`](https://github.com/langchain-ai/deepagents/commit/1aae3746682a65c837c5dd0f165b685253fe9465) release(deepagents): 0.7.13 (#6031)
- [`3db758c`](https://github.com/langchain-ai/deepagents/commit/3db758c6672713b7ad05dc0933f83ea6298797d5) chore(deps): raise dependency minimums for `all` (#6012)
- [`03436b3`](https://github.com/langchain-ai/deepagents/commit/03436b369c0324498602fe6b7918cf36f3629d76) fix(talon): preserve WhatsApp quoted message context (#6025)
- [`f93752f`](https://github.com/langchain-ai/deepagents/commit/f93752f855836b2af358a7c71c35a9f774af58e3) feat(talon): interrupt active turns for new messages (#6023)
- [`a197807`](https://github.com/langchain-ai/deepagents/commit/a19780791e020ccb772701285c459fb6a4dab0ff) release(deepagents): 0.7.12 (#6006)
- [`e0d0afa`](https://github.com/langchain-ai/deepagents/commit/e0d0afa18a3b8209f20c24cfda2ad766e476a102) feat(talon): keep typing indicator alive during long agent turns (#5993)
- [`67c6c17`](https://github.com/langchain-ai/deepagents/commit/67c6c17a316c84a6f21eafb95f12e56eedf11e7e) feat(talon): add Discord channel adapter (#5992)
- [`40359ec`](https://github.com/langchain-ai/deepagents/commit/40359ec683eaff3a67b39d3f6b3003e70db9ec4d) fix(talon): restrict WhatsApp replies to self-chat (#6010)
- [`568b398`](https://github.com/langchain-ai/deepagents/commit/568b398df9b9f4f3464b4107c0ef9001f530d728) fix(talon): restore WhatsApp bridge compatibility (#5999)
- [`3a0f68c`](https://github.com/langchain-ai/deepagents/commit/3a0f68ccd08166394e02fd736869482be5759f83) feat(talon): add opt-in agent activity logging (#5984)
- [`1c14626`](https://github.com/langchain-ai/deepagents/commit/1c14626d068ee5e1724d53dc17927d37987ebe36) feat(talon): add channel debug logging (#5983)
- [`4bc1100`](https://github.com/langchain-ai/deepagents/commit/4bc11004ba86999c2f6d59b1d958b53195619bcc) release(deepagents): 0.7.11 (#5977)
- [`a233ded`](https://github.com/langchain-ai/deepagents/commit/a233ded7cffd4cc5c81e5767780bf93472dd8fe7) release(deepagents-code): 0.1.65 (#5929)
- [`77b0f01`](https://github.com/langchain-ai/deepagents/commit/77b0f018f9d736c9409e44d03edaf9985b59f271) chore(deps): raise dependency minimums for `all` (#5936)
- [`d8686f7`](https://github.com/langchain-ai/deepagents/commit/d8686f74df7b8f838ec6679086c6291e3096a39e) release(deepagents-code): 0.1.64 (#5848)
- [`d26b53a`](https://github.com/langchain-ai/deepagents/commit/d26b53ad12265375c6dcf6b1c1501e0a4adf0ea3) release(deepagents): 0.7.10 (#5838)

</details>

## langchain-quickjs==0.3.7: langchain-quickjs==0.3.7

**Published**: 2026-09-06

### Features

- Stream PTC tool calls natively. ([#5735](https://github.com/langchain-ai/deepagents/issues/5735))

### Bug Fixes

- Keep private state out of subagent propagation. ([#3543](https://github.com/langchain-ai/deepagents/issues/3543))

---

Internal maintainers: @hntrl

Released by: @hntrl

<details>
<summary>Git log since langchain-quickjs==0.3.6</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`6c89fe2`](https://github.com/langchain-ai/deepagents/commit/6c89fe2197a2dfe4f3851cda38565bcadba6066b) release(langchain-quickjs): 0.3.7 (#6095)
- [`916d7d7`](https://github.com/langchain-ai/deepagents/commit/916d7d740563f8cc7e16299d5aba88f9467473de) fix(quickjs): keep private state out of subagent propagation (#3543)
- [`c366c49`](https://github.com/langchain-ai/deepagents/commit/c366c495129a67629a4477c51e0d1dec778d36e3) feat(quickjs): stream PTC tool calls natively (#5735)
- [`bdccb82`](https://github.com/langchain-ai/deepagents/commit/bdccb82d21f998174354a25daa4624dc0d9da97b) chore(deps): raise dependency minimums for `all` (#6053)

</details>

## langchain-quickjs==0.3.6: langchain-quickjs==0.3.6

**Published**: 2026-09-03

### Features

- Added an HMAC check for QuickJS snapshot bytes ([#5601](https://github.com/langchain-ai/deepagents/issues/5601)) ([749b386](https://github.com/langchain-ai/deepagents/commit/749b386f97ed7b920acfd5936b01f8c425976d92)).

### Performance Improvements

- Omitted middleware trace inputs to improve QuickJS performance ([#6015](https://github.com/langchain-ai/deepagents/issues/6015)) ([673844d](https://github.com/langchain-ai/deepagents/commit/673844d06fe0ee186f2e492c3c0a19ec5facffc2)).

---

Internal maintainers: @ccurme, @hntrl, @mdrxy

Released by: @ccurme

<details>
<summary>Git log since langchain-quickjs==0.3.5</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`ec28fc1`](https://github.com/langchain-ai/deepagents/commit/ec28fc184e1356567bb10bac24eb95cec146b95d) release(langchain-quickjs): 0.3.6 (#5607)
- [`ac0fac4`](https://github.com/langchain-ai/deepagents/commit/ac0fac42f6ece4147c3636896358e1a9391cd94a) chore(deps): raise dependency minimums for `all` (#6046)
- [`673844d`](https://github.com/langchain-ai/deepagents/commit/673844d06fe0ee186f2e492c3c0a19ec5facffc2) perf(code,quickjs): omit middleware trace inputs (#6015)
- [`1aae374`](https://github.com/langchain-ai/deepagents/commit/1aae3746682a65c837c5dd0f165b685253fe9465) release(deepagents): 0.7.13 (#6031)
- [`a197807`](https://github.com/langchain-ai/deepagents/commit/a19780791e020ccb772701285c459fb6a4dab0ff) release(deepagents): 0.7.12 (#6006)
- [`4bc1100`](https://github.com/langchain-ai/deepagents/commit/4bc11004ba86999c2f6d59b1d958b53195619bcc) release(deepagents): 0.7.11 (#5977)
- [`77b0f01`](https://github.com/langchain-ai/deepagents/commit/77b0f018f9d736c9409e44d03edaf9985b59f271) chore(deps): raise dependency minimums for `all` (#5936)
- [`d26b53a`](https://github.com/langchain-ai/deepagents/commit/d26b53ad12265375c6dcf6b1c1501e0a4adf0ea3) release(deepagents): 0.7.10 (#5838)
- [`7afa60e`](https://github.com/langchain-ai/deepagents/commit/7afa60efc96c6852933eb6a0d5c9f699cd751e43) chore(deps): raise dependency minimums for `all` (#5912)
- [`1c2355e`](https://github.com/langchain-ai/deepagents/commit/1c2355e39cbccb834b82e68757418dec35a5a3d4) chore(deps): raise dependency minimums for `all` (#5906)
- [`92642a7`](https://github.com/langchain-ai/deepagents/commit/92642a73fda4a49cac356f37d48dfc560b9fffec) chore(deps): raise dependency minimums for `all` (#5898)
- [`4a4cb10`](https://github.com/langchain-ai/deepagents/commit/4a4cb10dd8604fb67b34ba20e49c1756e68ae3d5) chore(deps): raise dependency minimums for `deepagents` (#5871)
- [`7155253`](https://github.com/langchain-ai/deepagents/commit/71552532bb33a8744a5b1c0b48e8047478169c42) release(deepagents): 0.7.9 (#5754)
- [`29cd02a`](https://github.com/langchain-ai/deepagents/commit/29cd02ae1762e4cefa4962e60fa250642ec8815a) chore(deps): raise dependency minimums for `deepagents` (#5805)
- [`75095bb`](https://github.com/langchain-ai/deepagents/commit/75095bb81dc200ef33652bcaa173a758312f3962) chore(deps): raise dependency minimums for `all` (#5764)
- [`cf939b3`](https://github.com/langchain-ai/deepagents/commit/cf939b3f86fc86d74e389924da7a79894d849fcd) chore(deps): raise dependency minimums for `deepagents` (#5709)
- [`1e261ba`](https://github.com/langchain-ai/deepagents/commit/1e261ba201bb1af4dbc5cbc8b6424e709b850ea8) release(deepagents): 0.7.8 (#5705)
- [`31af8c1`](https://github.com/langchain-ai/deepagents/commit/31af8c11219c3c77f4530bc1e4adc3c140cfa6d5) chore(deps): raise dependency minimums for `deepagents` (#5662)
- [`16cb2e7`](https://github.com/langchain-ai/deepagents/commit/16cb2e76f4a36f312b595423c6134b43b248f563) chore(deps): raise dependency minimums for `deepagents` (#5646)
- [`749b386`](https://github.com/langchain-ai/deepagents/commit/749b386f97ed7b920acfd5936b01f8c425976d92) feat(quickjs): add hmac check to snapshot bytes (#5601)
- [`8cc6c94`](https://github.com/langchain-ai/deepagents/commit/8cc6c945657847bee0926346e73525deb87bd01f) docs(quickjs): clarify docstring around timeout semantics (#5572)
- [`42ed940`](https://github.com/langchain-ai/deepagents/commit/42ed9406f08dfec11369631011405c1dc650293a) release(deepagents): 0.7.7 (#5498)
- [`3afad63`](https://github.com/langchain-ai/deepagents/commit/3afad63e2290559c36a1c386ab2ac9a2d1f8b64a) release(deepagents): 0.7.6 (#5491)
- [`a97bdb6`](https://github.com/langchain-ai/deepagents/commit/a97bdb65778a67c28b3ef7ca59e39a88850c0f2a) ci(infra): fail on unexpected test warnings (#5346)
- [`f5fda05`](https://github.com/langchain-ai/deepagents/commit/f5fda05892e92e3897324574bb5c36125059778b) chore(deps-dev): update langgraph-checkpoint-postgres requirement from &lt;4.0.0,&gt;=3.1.0 to &gt;=3.1.1,&lt;4.0.0 in /libs/evals (#5373)
- [`a6c06b0`](https://github.com/langchain-ai/deepagents/commit/a6c06b029710d34035af6ae1faded093cc8f3073) release(deepagents): 0.7.5 (#5327)
- [`a6e2608`](https://github.com/langchain-ai/deepagents/commit/a6e2608c382be362163e4f26f5ccc544cc13ccbd) chore(deps): bump `langchain-anthropic` to 1.5.4 (#5332)
- [`553a030`](https://github.com/langchain-ai/deepagents/commit/553a030a5b959ac8bb17d52447f915397f910f03) release(deepagents): 0.7.4 (#5305)
- [`c7aa8ad`](https://github.com/langchain-ai/deepagents/commit/c7aa8ad7a46480e16f4efa048904d814f626553f) chore(deps): bump cryptography from 48.0.1 to 50.0.0 in /libs/partners/quickjs (#5284)
- [`f60951e`](https://github.com/langchain-ai/deepagents/commit/f60951e3f5e4d7e57d6379a4bbc64259bdfdb884) release(deepagents): 0.7.3 (#5251)
- [`0063721`](https://github.com/langchain-ai/deepagents/commit/00637212084c7fe4c12993c95ab559b92aaa4fef) release(deepagents): 0.7.2 (#5230)
- [`263dd72`](https://github.com/langchain-ai/deepagents/commit/263dd72b1b03ecee6dfb9d12bceb01b6259b698a) build(repo): parameterize coverage flags in Makefile test targets (#5208)
- [`a4c1605`](https://github.com/langchain-ai/deepagents/commit/a4c1605bd5d4038718ead3b55af617d6ee2e9599) chore(deps): sync lockfiles after SDK packaging dep addition (#5204)

</details>

## deepagents-code==0.1.66: deepagents-code==0.1.66

**Published**: 2026-09-03

### Features

- Defaulted general-purpose subagents to fork mode ([#6024](https://github.com/langchain-ai/deepagents/issues/6024)).
- Defaulted the Auto classifier by provider ([#6039](https://github.com/langchain-ai/deepagents/issues/6039)).
- Added support for binding conversations to a recorded workspace ([#5946](https://github.com/langchain-ai/deepagents/issues/5946)).
- Added tracing for the effective approval mode ([#5972](https://github.com/langchain-ai/deepagents/issues/5972)).

### Bug Fixes

- Fixed request-time working directory binding and now show the bound workspace in shell approvals ([#5968](https://github.com/langchain-ai/deepagents/issues/5968), [#5966](https://github.com/langchain-ai/deepagents/issues/5966)).
- Fixed marketplace plugin installs to accept bare relative source paths and identify the rejected source path when validation fails ([#5959](https://github.com/langchain-ai/deepagents/issues/5959), [#5960](https://github.com/langchain-ai/deepagents/issues/5960)).
- Classifier errors now include model names ([#6038](https://github.com/langchain-ai/deepagents/issues/6038)).
- Updated the splash screen to use a sharp border ([#5970](https://github.com/langchain-ai/deepagents/issues/5970)).

### Performance Improvements

- Reduced QuickJS middleware tracing overhead by omitting trace inputs ([#6015](https://github.com/langchain-ai/deepagents/issues/6015)).

---

**Special thanks** to everyone who reported the issues addressed in this release: @mh11 ([#5950](https://github.com/langchain-ai/deepagents/issues/5950))

Internal maintainers: @ccurme, @hntrl, @mdrxy

Released by: @mdrxy

<details>
<summary>Git log since deepagents-code==0.1.65</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`3812967`](https://github.com/langchain-ai/deepagents/commit/3812967c84d90619848f3185f22470204fc88bd8) release(deepagents-code): 0.1.66 (#5963)
- [`99ed6c8`](https://github.com/langchain-ai/deepagents/commit/99ed6c83238851eb334e19b27d3faec8869fc9a7) feat(code): default Auto classifier by provider (#6039)
- [`bdccb82`](https://github.com/langchain-ai/deepagents/commit/bdccb82d21f998174354a25daa4624dc0d9da97b) chore(deps): raise dependency minimums for `all` (#6053)
- [`fff2c77`](https://github.com/langchain-ai/deepagents/commit/fff2c77c755c6d9dce3a6f776a9b94599ad05cfd) fix(code): name models in classifier errors (#6038)
- [`d3ad134`](https://github.com/langchain-ai/deepagents/commit/d3ad134a49287d80b9897b0ef38b4635f8d7de94) feat(code): default general-purpose subagents to fork mode (#6024)
- [`ebe6d9d`](https://github.com/langchain-ai/deepagents/commit/ebe6d9d8c647246c5d9c7d69ae01ad65d69adc43) chore(deps): bump `genai-prices` in `deepagents-code` to 0.1.6 (#6049)
- [`ec28fc1`](https://github.com/langchain-ai/deepagents/commit/ec28fc184e1356567bb10bac24eb95cec146b95d) release(langchain-quickjs): 0.3.6 (#5607)
- [`ac0fac4`](https://github.com/langchain-ai/deepagents/commit/ac0fac42f6ece4147c3636896358e1a9391cd94a) chore(deps): raise dependency minimums for `all` (#6046)
- [`673844d`](https://github.com/langchain-ai/deepagents/commit/673844d06fe0ee186f2e492c3c0a19ec5facffc2) perf(code,quickjs): omit middleware trace inputs (#6015)
- [`2d3797b`](https://github.com/langchain-ai/deepagents/commit/2d3797bbe06317a7d3a0999fd1aaf21cd542672d) chore(deps): bump `genai-prices` in `deepagents-code` to 0.1.5 (#6004)
- [`cb95daa`](https://github.com/langchain-ai/deepagents/commit/cb95daaccc0185d6591c5de6fc6013240753dbbe) chore(deps): bump `deepagents` pin in `deepagents-code` to 0.7.13 (#6036)
- [`1aae374`](https://github.com/langchain-ai/deepagents/commit/1aae3746682a65c837c5dd0f165b685253fe9465) release(deepagents): 0.7.13 (#6031)
- [`3db758c`](https://github.com/langchain-ai/deepagents/commit/3db758c6672713b7ad05dc0933f83ea6298797d5) chore(deps): raise dependency minimums for `all` (#6012)
- [`a197807`](https://github.com/langchain-ai/deepagents/commit/a19780791e020ccb772701285c459fb6a4dab0ff) release(deepagents): 0.7.12 (#6006)
- [`a1af029`](https://github.com/langchain-ai/deepagents/commit/a1af029e6e73cb17c36bff823d227747b28e91e1) refactor(code): use SDK rubric grader hooks (#5888)
- [`f47c02c`](https://github.com/langchain-ai/deepagents/commit/f47c02c57c0efdb887b82e6d4a0f490bf5e61e35) chore(deps): bump `deepagents` pin in `deepagents-code` to 0.7.11 (#5978)
- [`4bc1100`](https://github.com/langchain-ai/deepagents/commit/4bc11004ba86999c2f6d59b1d958b53195619bcc) release(deepagents): 0.7.11 (#5977)
- [`98db566`](https://github.com/langchain-ai/deepagents/commit/98db566f2cc654a535ed68de4dbdd2e10a2edd30) fix(code): bind request-time working directories (#5968)
- [`716ab9f`](https://github.com/langchain-ai/deepagents/commit/716ab9fb9c1f27d912aac89a663a75c4861418a5) fix(code): show bound workspace in shell approvals (#5966)
- [`c56958d`](https://github.com/langchain-ai/deepagents/commit/c56958d633cd9513ba699f940d4fadfee6cd3963) feat(code): trace effective approval mode (#5972)
- [`096d20c`](https://github.com/langchain-ai/deepagents/commit/096d20cc7f0d61ed027686b226217f4a717925b0) fix(code): use sharp splash border (#5970)
- [`8a1eacc`](https://github.com/langchain-ai/deepagents/commit/8a1eacc832c89f26b7427c26014c2f5853ab653f) hotfix(code): resolve graph factory annotations at runtime (#5967)
- [`4ca758e`](https://github.com/langchain-ai/deepagents/commit/4ca758ed8efd9b586b26685bc3dc787501f3d502) feat(code): bind conversations to a recorded workspace (#5946)
- [`6f8c488`](https://github.com/langchain-ai/deepagents/commit/6f8c48800b02397fd262bfd9caea5096984d4220) fix(code): say which source path a plugin install rejected (#5960)
- [`28468d6`](https://github.com/langchain-ai/deepagents/commit/28468d62f208e3dea5a574898d19e7d9618db928) fix(code): accept bare relative paths in marketplace plugin sources (#5959)
- [`28e5218`](https://github.com/langchain-ai/deepagents/commit/28e5218bf4ab9a9825e34f563981fb7c4579cb72) test(code): remove test imports and helpers left dead by pruning (#5956)
- [`c343506`](https://github.com/langchain-ai/deepagents/commit/c3435060e10effdcbf41dc015ca07a210c71fe04) test(code): halve unit test collection and clear change-detector tests (#5927)

</details>

## deepagents==0.7.13: deepagents==0.7.13

**Published**: 2026-09-02

### Bug Fixes

- Renamed the SDK subagent mode from `handoff` to `isolated` ([#6030](https://github.com/langchain-ai/deepagents/issues/6030)).

---

Internal maintainers: @ccurme

Released by: @ccurme

<details>
<summary>Git log since deepagents==0.7.12</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`1aae374`](https://github.com/langchain-ai/deepagents/commit/1aae3746682a65c837c5dd0f165b685253fe9465) release(deepagents): 0.7.13 (#6031)
- [`15454a8`](https://github.com/langchain-ai/deepagents/commit/15454a85438146a59c804af3a525f96091c55fe8) fix(sdk): rename `handoff` subagent mode to `isolated` (#6030)

</details>

## deepagents==0.7.12: deepagents==0.7.12

**Published**: 2026-09-01

### Features

- Added subagent conversation forking in the SDK ([#5714](https://github.com/langchain-ai/deepagents/issues/5714)).

### Bug Fixes

- Fixed glob sorting to tolerate missing `modified_at` values in the SDK ([#4376](https://github.com/langchain-ai/deepagents/issues/4376)).

---

Thanks to our community contributors: @ujjwalredd

**Special thanks** to everyone who reported the issues addressed in this release: @NinaadRao ([#4668](https://github.com/langchain-ai/deepagents/issues/4668)), @ujjwalredd ([#4377](https://github.com/langchain-ai/deepagents/issues/4377))

Internal maintainers: @thushanth-bengre-langchain

Released by: @hntrl

<details>
<summary>Git log since deepagents==0.7.11</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`a197807`](https://github.com/langchain-ai/deepagents/commit/a19780791e020ccb772701285c459fb6a4dab0ff) release(deepagents): 0.7.12 (#6006)
- [`6b4427f`](https://github.com/langchain-ai/deepagents/commit/6b4427f07dc35a0b61cf8224db090ea6bee6f72f) feat(sdk): add subagent conversation forking (#5714)
- [`09b2e53`](https://github.com/langchain-ai/deepagents/commit/09b2e53617968a06c2b4ee6d821fca71a1d94d49) fix(sdk): tolerate missing `modified_at` in glob sort (#4376)

</details>

## deepagents==0.7.11: deepagents==0.7.11

**Published**: 2026-08-28

### Features

- Added SDK integration hooks for rubric graders ([#5874](https://github.com/langchain-ai/deepagents/issues/5874))

---

Internal maintainers: @mdrxy

Released by: @mdrxy

<details>
<summary>Git log since deepagents==0.7.10</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`4bc1100`](https://github.com/langchain-ai/deepagents/commit/4bc11004ba86999c2f6d59b1d958b53195619bcc) release(deepagents): 0.7.11 (#5977)
- [`07c0340`](https://github.com/langchain-ai/deepagents/commit/07c0340bc41e3717f1cd73705b71f1f6a87d753f) feat(sdk): add rubric grader integration hooks (#5874)
- [`77b0f01`](https://github.com/langchain-ai/deepagents/commit/77b0f018f9d736c9409e44d03edaf9985b59f271) chore(deps): raise dependency minimums for `all` (#5936)

</details>

## deepagents==0.7.10: deepagents==0.7.10

**Published**: 2026-08-28

### Bug Fixes

- Prevent local shell commands from stealing TUI input ([#5873](https://github.com/langchain-ai/deepagents/issues/5873))
- Surface sandbox glob failures instead of reporting no matches ([#5566](https://github.com/langchain-ai/deepagents/issues/5566))

---

Internal maintainers: @mdrxy

Released by: @mdrxy

<details>
<summary>Git log since deepagents==0.7.9</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`d26b53a`](https://github.com/langchain-ai/deepagents/commit/d26b53ad12265375c6dcf6b1c1501e0a4adf0ea3) release(deepagents): 0.7.10 (#5838)
- [`7afa60e`](https://github.com/langchain-ai/deepagents/commit/7afa60efc96c6852933eb6a0d5c9f699cd751e43) chore(deps): raise dependency minimums for `all` (#5912)
- [`c94a090`](https://github.com/langchain-ai/deepagents/commit/c94a090c1b21918c9e4eced52ecb4e3bf7476f43) fix(sdk): prevent local shell commands from stealing TUI input (#5873)
- [`1c2355e`](https://github.com/langchain-ai/deepagents/commit/1c2355e39cbccb834b82e68757418dec35a5a3d4) chore(deps): raise dependency minimums for `all` (#5906)
- [`4a4cb10`](https://github.com/langchain-ai/deepagents/commit/4a4cb10dd8604fb67b34ba20e49c1756e68ae3d5) chore(deps): raise dependency minimums for `deepagents` (#5871)
- [`0286f62`](https://github.com/langchain-ai/deepagents/commit/0286f628646d4196e5e89164b45803fb7b97a0cc) fix(sdk): surface sandbox glob failures instead of reporting no matches (#5566)

</details>

## deepagents-talon==0.0.6: deepagents-talon==0.0.6

**Published**: 2026-08-28

### Bug Fixes

- Removed `extract-zip` from the WhatsApp bridge dependency tree. ([#5924](https://github.com/langchain-ai/deepagents/issues/5924))

---

Internal maintainers: @mdrxy

Released by: @mdrxy

<details>
<summary>Git log since deepagents-talon==0.0.5</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`9300b7c`](https://github.com/langchain-ai/deepagents/commit/9300b7c45ebe02288cf5f47e1364f561f5b57780) release(deepagents-talon): 0.0.6 (#5926)
- [`7301d01`](https://github.com/langchain-ai/deepagents/commit/7301d01e483d0b76745c725134ec09db82f38856) fix(talon): drop extract-zip from the WhatsApp bridge dependency tree (#5924)
- [`47f357b`](https://github.com/langchain-ai/deepagents/commit/47f357b27ebecf2ee9e14fbfd6ce295ec8e75788) release(deepagents-acp): 0.0.11 (#5908)
- [`6bb4423`](https://github.com/langchain-ai/deepagents/commit/6bb4423bf63f313974e0cc6d124a93f8aa3795ba) chore(deps): raise dependency minimums for `all` (#5916)
- [`7afa60e`](https://github.com/langchain-ai/deepagents/commit/7afa60efc96c6852933eb6a0d5c9f699cd751e43) chore(deps): raise dependency minimums for `all` (#5912)
- [`1c2355e`](https://github.com/langchain-ai/deepagents/commit/1c2355e39cbccb834b82e68757418dec35a5a3d4) chore(deps): raise dependency minimums for `all` (#5906)
- [`92642a7`](https://github.com/langchain-ai/deepagents/commit/92642a73fda4a49cac356f37d48dfc560b9fffec) chore(deps): raise dependency minimums for `all` (#5898)
- [`4a4cb10`](https://github.com/langchain-ai/deepagents/commit/4a4cb10dd8604fb67b34ba20e49c1756e68ae3d5) chore(deps): raise dependency minimums for `deepagents` (#5871)
- [`3a91a95`](https://github.com/langchain-ai/deepagents/commit/3a91a954447f3214b8d3924396dd736f5661f787) chore(deps): raise dependency minimums for `deepagents-code` (#5868)

</details>

## deepagents-code==0.1.65: deepagents-code==0.1.65

**Published**: 2026-08-28

### Features

- Added Python extension support, including discovery, configuration and loading, runtime hosting, and trust and inspection UX ([#5631](https://github.com/langchain-ai/deepagents/issues/5631), [#5632](https://github.com/langchain-ai/deepagents/issues/5632), [#5633](https://github.com/langchain-ai/deepagents/issues/5633), [#5634](https://github.com/langchain-ai/deepagents/issues/5634))
- Added a `/summarization-model` command and model picker for configuring the summarization model ([#5884](https://github.com/langchain-ai/deepagents/issues/5884), [#5932](https://github.com/langchain-ai/deepagents/issues/5932))
- Added support for optional extra uninstall commands ([#5875](https://github.com/langchain-ai/deepagents/issues/5875))
- Added an option to show visible reasoning ([#5887](https://github.com/langchain-ai/deepagents/issues/5887))

### Bug Fixes

- Improved model and task reliability by retrying interrupted model streams, recovering stale pending work before compaction, and isolating parallel `task` failures ([#5905](https://github.com/langchain-ai/deepagents/issues/5905), [#5909](https://github.com/langchain-ai/deepagents/issues/5909), [#5954](https://github.com/langchain-ai/deepagents/issues/5954))
- Improved server restart handling by waiting for graph readiness before continuing ([#5947](https://github.com/langchain-ai/deepagents/issues/5947))
- Capped MCP tool names for provider compatibility ([#5953](https://github.com/langchain-ai/deepagents/issues/5953))
- Fixed Auto approval gate path expansion handling and now records Auto classifier deadline misses as traced errors ([#5941](https://github.com/langchain-ai/deepagents/issues/5941), [#5944](https://github.com/langchain-ai/deepagents/issues/5944))
- Completed ASCII UI fallbacks and hid inactive F2 tool hints ([#5930](https://github.com/langchain-ai/deepagents/issues/5930), [#5939](https://github.com/langchain-ai/deepagents/issues/5939))
- Isolated debug logs by thread ([#5921](https://github.com/langchain-ai/deepagents/issues/5921))
- Updated rubric grader model changes to apply without a restart ([#5885](https://github.com/langchain-ai/deepagents/issues/5885))

---

Internal maintainers: @aolsenjazz, @mdrxy

Released by: @mdrxy

<details>
<summary>Git log since deepagents-code==0.1.64</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`a233ded`](https://github.com/langchain-ai/deepagents/commit/a233ded7cffd4cc5c81e5767780bf93472dd8fe7) release(deepagents-code): 0.1.65 (#5929)
- [`0ac6ee4`](https://github.com/langchain-ai/deepagents/commit/0ac6ee4ddd032d11e50e346cad829c6a255e0fb8) docs(code): remove streaming retry design (#5957)
- [`0eb8e57`](https://github.com/langchain-ai/deepagents/commit/0eb8e578708a18c3a789f76c4bb13d92bd768192) fix(code): cap MCP tool names for provider compatibility (#5953)
- [`e0a474f`](https://github.com/langchain-ai/deepagents/commit/e0a474fed575992abc991f6a8049cc8e18e328c0) fix(code): isolate parallel `task` failures (#5954)
- [`46dea07`](https://github.com/langchain-ai/deepagents/commit/46dea076a77f2b580829b5a211469c68b8924f2a) fix(code): guard path expansion in the Auto approval gate (#5941)
- [`9a643c7`](https://github.com/langchain-ai/deepagents/commit/9a643c75843a95d3ef770ac69dd1452435596efe) fix(code): record Auto classifier deadline as a traced error (#5944)
- [`358bc33`](https://github.com/langchain-ai/deepagents/commit/358bc3347135793afd12b8b387bda94e61bb6f07) fix(code): wait for graph readiness after server restart (#5947)
- [`f90d4fe`](https://github.com/langchain-ai/deepagents/commit/f90d4fe114efe1de1e3d8dd8e5aee5b9f631093d) feat(code): open summarization model picker (#5932)
- [`fd7ba1a`](https://github.com/langchain-ai/deepagents/commit/fd7ba1ac47e9afbf7a60a40010f72130ff47ee25) fix(code): hide inactive F2 tool hint (#5939)
- [`e9a1623`](https://github.com/langchain-ai/deepagents/commit/e9a16234f14ea570e04a936cf8070156d01eae99) fix(code): complete ASCII UI fallbacks (#5930)
- [`77b0f01`](https://github.com/langchain-ai/deepagents/commit/77b0f018f9d736c9409e44d03edaf9985b59f271) chore(deps): raise dependency minimums for `all` (#5936)
- [`457ac43`](https://github.com/langchain-ai/deepagents/commit/457ac435e1216d3f7cac76d4e856b7aa020b5ea8) feat(code): optionally show visible reasoning (#5887)
- [`4f34c51`](https://github.com/langchain-ai/deepagents/commit/4f34c51d4b9f6ed508af6a8e1ca6dbcf6e3e3877) feat(code): add `/summarization-model` (#5884)
- [`213f0c8`](https://github.com/langchain-ai/deepagents/commit/213f0c8a7dd01febff2a52c9ca0ea61b2cd8fd9d) fix(code): recover stale pending work before compaction (#5909)
- [`d36f226`](https://github.com/langchain-ai/deepagents/commit/d36f22694d4b5d9ac9fa806292389954861cd53b) feat(code): add optional extra uninstall commands (#5875)
- [`cf8cbcd`](https://github.com/langchain-ai/deepagents/commit/cf8cbcd371943375d10aae113e01f1ca674924be) docs(code): remove managed configuration from README (#5931)
- [`4358cce`](https://github.com/langchain-ai/deepagents/commit/4358ccee79dc9350600af02e4e52633b919d7382) fix(code): isolate debug logs by thread (#5921)
- [`dfcd941`](https://github.com/langchain-ai/deepagents/commit/dfcd9417a88c774a232de33e41bb0e69d76ec7ce) fix(code): retry interrupted model streams (#5905)
- [`428e760`](https://github.com/langchain-ai/deepagents/commit/428e760668d8fdfbb920966e2969c76040e30745) fix(code): update rubric grader model without restart (#5885)

</details>

## deepagents-code==0.1.64: deepagents-code==0.1.64

**Published**: 2026-08-28

### Features

- Added trace metadata attribution for skill invocations ([#5925](https://github.com/langchain-ai/deepagents/issues/5925)).
- Added a list of MCP servers that require login ([#5867](https://github.com/langchain-ai/deepagents/issues/5867)).
- Added the ability to copy the current model from the picker header ([#5904](https://github.com/langchain-ai/deepagents/issues/5904)).
- Linked the doctor commit hash to GitHub ([#5920](https://github.com/langchain-ai/deepagents/issues/5920)).
- Standardized the external editor shortcut ([#5911](https://github.com/langchain-ai/deepagents/issues/5911)).

### Bug Fixes

- Deferred recursion-limit handling to the LangGraph server ([#5882](https://github.com/langchain-ai/deepagents/issues/5882)).
- Disabled Git terminal prompts in `execute` ([#5878](https://github.com/langchain-ai/deepagents/issues/5878)).
- Improved privacy and debug-only visibility for MCP token and editable paths ([#5866](https://github.com/langchain-ai/deepagents/issues/5866), [#5850](https://github.com/langchain-ai/deepagents/issues/5850)).
- Updated the model-switch warning to point to `/offload` ([#5901](https://github.com/langchain-ai/deepagents/issues/5901)).
- Rejected stale successful updates ([#5847](https://github.com/langchain-ai/deepagents/issues/5847)).
- Fixed thread timestamp rendering on systems without the glibc-only `%-I` `strftime` flag ([#5886](https://github.com/langchain-ai/deepagents/issues/5886)).
- Respected ASCII mode in the splash border ([#5923](https://github.com/langchain-ai/deepagents/issues/5923)).
- Skipped unchanged config writes ([#5919](https://github.com/langchain-ai/deepagents/issues/5919)).
- Skipped uncorrelated-result warnings for auto-mode policy denials ([#5869](https://github.com/langchain-ai/deepagents/issues/5869)).

---

Thanks to our community contributors: @JessYanCoding

**Special thanks** to everyone who reported the issues addressed in this release: @JessYanCoding ([#5796](https://github.com/langchain-ai/deepagents/issues/5796))

Internal maintainers: @johannes117, @mdrxy

Released by: @mdrxy

<details>
<summary>Git log since deepagents-code==0.1.63</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`d8686f7`](https://github.com/langchain-ai/deepagents/commit/d8686f74df7b8f838ec6679086c6291e3096a39e) release(deepagents-code): 0.1.64 (#5848)
- [`c60cd46`](https://github.com/langchain-ai/deepagents/commit/c60cd4656432f159c57c806b217df00068b5e817) chore(deps): bump `deepagents` pin in `deepagents-code` to 0.7.10 (#5928)
- [`437c2db`](https://github.com/langchain-ai/deepagents/commit/437c2dbbe287c6b37a4fe7466b5f9d5305163d85) fix(code): respect ASCII mode in splash border (#5923)
- [`d26b53a`](https://github.com/langchain-ai/deepagents/commit/d26b53ad12265375c6dcf6b1c1501e0a4adf0ea3) release(deepagents): 0.7.10 (#5838)
- [`c9e6f55`](https://github.com/langchain-ai/deepagents/commit/c9e6f55c3ee4b6efedfc945fd1c9b160e6e2a872) feat(code): link doctor commit hash to GitHub (#5920)
- [`c313ff0`](https://github.com/langchain-ai/deepagents/commit/c313ff0e6b3549d9f959578ae177291d8c8f13a3) fix(code): skip unchanged config writes (#5919)
- [`68fa627`](https://github.com/langchain-ai/deepagents/commit/68fa627522e60fe5d5278b454d21fa63a40b2d35) feat(code): attribute skill invocations in trace metadata (#5925)
- [`da5dcdc`](https://github.com/langchain-ai/deepagents/commit/da5dcdc1df38218f50d57be37908bc39438e3f2b) feat(code): add extension trust and inspection UX (#5634)
- [`47f357b`](https://github.com/langchain-ai/deepagents/commit/47f357b27ebecf2ee9e14fbfd6ce295ec8e75788) release(deepagents-acp): 0.0.11 (#5908)
- [`6bb4423`](https://github.com/langchain-ai/deepagents/commit/6bb4423bf63f313974e0cc6d124a93f8aa3795ba) chore(deps): raise dependency minimums for `all` (#5916)
- [`4379a46`](https://github.com/langchain-ai/deepagents/commit/4379a463a181a978aab206e93cdcc0788f7eac2b) fix(code): defer the recursion limit to the LangGraph server (#5882)
- [`2c8d154`](https://github.com/langchain-ai/deepagents/commit/2c8d154c7616071919cab4947403dff701e74b31) feat(code): host Python extensions in the agent runtime (#5633)
- [`7afa60e`](https://github.com/langchain-ai/deepagents/commit/7afa60efc96c6852933eb6a0d5c9f699cd751e43) chore(deps): raise dependency minimums for `all` (#5912)
- [`f75300f`](https://github.com/langchain-ai/deepagents/commit/f75300f12dc363132dc187e674cf3cd52eb93595) feat(code): standardize external editor shortcut (#5911)
- [`a535b61`](https://github.com/langchain-ai/deepagents/commit/a535b610a158a79a2629fac73fa788d7b31f4096) fix(code): disable Git terminal prompts in `execute` (#5878)
- [`0b9cb87`](https://github.com/langchain-ai/deepagents/commit/0b9cb8732b7109e0a46410aac42ed980c4bdce5b) test(code): restore `runtime_state` in `TestDispatchModelSwitch` (#5910)
- [`017d7ae`](https://github.com/langchain-ai/deepagents/commit/017d7ae41fe1dfe3fe7fa07bfa206959170707ed) feat(code): configure and load Python extensions (#5632)
- [`ef6b5be`](https://github.com/langchain-ai/deepagents/commit/ef6b5beec93bdcbb38ea44f157a029bc07b8b5ee) fix(code): render thread timestamps without the glibc-only `%-I` strftime flag (#5886)
- [`1c2355e`](https://github.com/langchain-ai/deepagents/commit/1c2355e39cbccb834b82e68757418dec35a5a3d4) chore(deps): raise dependency minimums for `all` (#5906)
- [`cfd9e7a`](https://github.com/langchain-ai/deepagents/commit/cfd9e7aedfd4438d284bf5b567dbc858936af2e4) feat(code): copy current model from picker header (#5904)
- [`50989dd`](https://github.com/langchain-ai/deepagents/commit/50989ddad4a75b6ae7b4cc812eba6744e29d6e9f) refactor(code): delete the `Settings` dataclass (#5863)
- [`5059a19`](https://github.com/langchain-ai/deepagents/commit/5059a192c63226334e88aa58f32cee2823e3202c) refactor(code): route credentials and reload through env provider + auth store (#5862)
- [`33bdd0e`](https://github.com/langchain-ai/deepagents/commit/33bdd0ed3ac853c636656e86b1e7254cde755deb) refactor(code): resolve interpreter/shell/skills config at callsites (#5861)
- [`fa94778`](https://github.com/langchain-ai/deepagents/commit/fa947789b51ebbd79a3461b88ef5ebd637acb8fa) refactor(code): move settings path helpers to a paths module (#5860)
- [`181a193`](https://github.com/langchain-ai/deepagents/commit/181a19344a5d52659b18dee4e082bdd3d038c108) refactor(code): extract runtime model state into `RuntimeState` (#5859)
- [`2f4d606`](https://github.com/langchain-ai/deepagents/commit/2f4d606ee338720dd6ae6758761f08c3cb9c2350) fix(code): point model switch warning to `/offload` (#5901)
- [`92642a7`](https://github.com/langchain-ai/deepagents/commit/92642a73fda4a49cac356f37d48dfc560b9fffec) chore(deps): raise dependency minimums for `all` (#5898)
- [`a71cafd`](https://github.com/langchain-ai/deepagents/commit/a71cafdbbd851db65dc311eebe5574982866b222) feat(code): list MCP servers needing login (#5867)
- [`0a234fa`](https://github.com/langchain-ai/deepagents/commit/0a234fae4fb32a6e84709f5dbc8d4c88cb89708b) refactor(code): preserve `ConfigOption` value types (#5865)
- [`35fd008`](https://github.com/langchain-ai/deepagents/commit/35fd00833a03e9e76858195aae8b13e7753cfa47) fix(code): skip uncorrelated-result warning for auto-mode policy denials (#5869)
- [`4a4cb10`](https://github.com/langchain-ai/deepagents/commit/4a4cb10dd8604fb67b34ba20e49c1756e68ae3d5) chore(deps): raise dependency minimums for `deepagents` (#5871)
- [`bd79104`](https://github.com/langchain-ai/deepagents/commit/bd791048b3dfafae3df81e89aa81388e26bc9667) fix(code): hide MCP token path outside debug mode (#5866)
- [`3a91a95`](https://github.com/langchain-ai/deepagents/commit/3a91a954447f3214b8d3924396dd736f5661f787) chore(deps): raise dependency minimums for `deepagents-code` (#5868)
- [`e85f4b7`](https://github.com/langchain-ai/deepagents/commit/e85f4b7bd0acc696a3f29f5c298d3353d7d5495f) fix(code): move editable path to debug console (#5850)
- [`23976f4`](https://github.com/langchain-ai/deepagents/commit/23976f414a928eb50d13d351bdc19971098ea7b9) fix(code): reject stale successful updates (#5847)

</details>

## deepagents-acp==0.0.11: deepagents-acp==0.0.11

**Published**: 2026-08-27

### Features

- Stream visible reasoning as thought chunks. ([#5880](https://github.com/langchain-ai/deepagents/issues/5880))

---

Internal maintainers: @mdrxy

Released by: @mdrxy

<details>
<summary>Git log since deepagents-acp==0.0.10</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`47f357b`](https://github.com/langchain-ai/deepagents/commit/47f357b27ebecf2ee9e14fbfd6ce295ec8e75788) release(deepagents-acp): 0.0.11 (#5908)
- [`7afa60e`](https://github.com/langchain-ai/deepagents/commit/7afa60efc96c6852933eb6a0d5c9f699cd751e43) chore(deps): raise dependency minimums for `all` (#5912)
- [`7e96bf0`](https://github.com/langchain-ai/deepagents/commit/7e96bf0ab1494217251010a30d27198d0c9532c9) feat(acp): stream visible reasoning as thought chunks (#5880)
- [`1c2355e`](https://github.com/langchain-ai/deepagents/commit/1c2355e39cbccb834b82e68757418dec35a5a3d4) chore(deps): raise dependency minimums for `all` (#5906)
- [`92642a7`](https://github.com/langchain-ai/deepagents/commit/92642a73fda4a49cac356f37d48dfc560b9fffec) chore(deps): raise dependency minimums for `all` (#5898)
- [`4a4cb10`](https://github.com/langchain-ai/deepagents/commit/4a4cb10dd8604fb67b34ba20e49c1756e68ae3d5) chore(deps): raise dependency minimums for `deepagents` (#5871)
- [`7155253`](https://github.com/langchain-ai/deepagents/commit/71552532bb33a8744a5b1c0b48e8047478169c42) release(deepagents): 0.7.9 (#5754)
- [`29cd02a`](https://github.com/langchain-ai/deepagents/commit/29cd02ae1762e4cefa4962e60fa250642ec8815a) chore(deps): raise dependency minimums for `deepagents` (#5805)
- [`da67c86`](https://github.com/langchain-ai/deepagents/commit/da67c86e52a042ffbf4ac991de213fba3a559f49) chore(repo): remove deprecated `libs/cli` package (#5791)
- [`75095bb`](https://github.com/langchain-ai/deepagents/commit/75095bb81dc200ef33652bcaa173a758312f3962) chore(deps): raise dependency minimums for `all` (#5764)
- [`cf939b3`](https://github.com/langchain-ai/deepagents/commit/cf939b3f86fc86d74e389924da7a79894d849fcd) chore(deps): raise dependency minimums for `deepagents` (#5709)
- [`1e261ba`](https://github.com/langchain-ai/deepagents/commit/1e261ba201bb1af4dbc5cbc8b6424e709b850ea8) release(deepagents): 0.7.8 (#5705)
- [`31af8c1`](https://github.com/langchain-ai/deepagents/commit/31af8c11219c3c77f4530bc1e4adc3c140cfa6d5) chore(deps): raise dependency minimums for `deepagents` (#5662)
- [`16cb2e7`](https://github.com/langchain-ai/deepagents/commit/16cb2e76f4a36f312b595423c6134b43b248f563) chore(deps): raise dependency minimums for `deepagents` (#5646)
- [`42ed940`](https://github.com/langchain-ai/deepagents/commit/42ed9406f08dfec11369631011405c1dc650293a) release(deepagents): 0.7.7 (#5498)
- [`3afad63`](https://github.com/langchain-ai/deepagents/commit/3afad63e2290559c36a1c386ab2ac9a2d1f8b64a) release(deepagents): 0.7.6 (#5491)

</details>

## deepagents-talon==0.0.5: deepagents-talon==0.0.5

**Published**: 2026-08-26

### Bug Fixes

- Migrated MCP discovery to `discover_mcp_config_sources`. ([#5803](https://github.com/langchain-ai/deepagents/issues/5803))

---

Internal maintainers: @mdrxy

Released by: @mdrxy

<details>
<summary>Git log since deepagents-talon==0.0.4</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`9a464f7`](https://github.com/langchain-ai/deepagents/commit/9a464f7bcc1086ac37ed8f72b14770c397cb7916) release(deepagents-talon): 0.0.5 (#5831)
- [`970003e`](https://github.com/langchain-ai/deepagents/commit/970003e60ba39af104bf47b1b64319d17aa4131b) release(deepagents-code): 0.1.63 (#5834)
- [`dc27a2f`](https://github.com/langchain-ai/deepagents/commit/dc27a2fc295854b41d59fe28d1568275b0c33767) release(deepagents-code): 0.1.62 (#5778)
- [`5cdd977`](https://github.com/langchain-ai/deepagents/commit/5cdd97730708b0480cb7d32792717dcdcd02f4ea) fix(talon): migrate MCP discovery to `discover_mcp_config_sources` (#5803)
- [`7155253`](https://github.com/langchain-ai/deepagents/commit/71552532bb33a8744a5b1c0b48e8047478169c42) release(deepagents): 0.7.9 (#5754)
- [`8809226`](https://github.com/langchain-ai/deepagents/commit/88092269b670fe535ae29fd1c51d1167b61d454b) chore(deps): raise dependency minimums for `deepagents-code` (#5807)
- [`29cd02a`](https://github.com/langchain-ai/deepagents/commit/29cd02ae1762e4cefa4962e60fa250642ec8815a) chore(deps): raise dependency minimums for `deepagents` (#5805)

</details>

## deepagents-code==0.1.63: deepagents-code==0.1.63

**Published**: 2026-08-26

### Features

- Added Baseten `zai-org/GLM-5.3-Flash` to the model switcher ([#5844](https://github.com/langchain-ai/deepagents/issues/5844)).
- Added support for loading managed config from a remote source ([#5776](https://github.com/langchain-ai/deepagents/issues/5776)).
- Added retry middleware for transient model errors in model nodes ([#4569](https://github.com/langchain-ai/deepagents/issues/4569)).

### Fixes

- Fixed live cost tracking for dynamic subagents ([#5833](https://github.com/langchain-ai/deepagents/issues/5833)).
- Improved `clear` command descriptions ([#5841](https://github.com/langchain-ai/deepagents/issues/5841)).
- Allowed instrumental Auto actions ([#5832](https://github.com/langchain-ai/deepagents/issues/5832)).
- Ensured traces are flushed before server shutdown ([#5837](https://github.com/langchain-ai/deepagents/issues/5837)).
- Made the debug log path click-to-copy ([#5845](https://github.com/langchain-ai/deepagents/issues/5845)).

---

Internal maintainers: @aolsenjazz, @johannes117, @mdrxy

Released by: @mdrxy

<details>
<summary>Git log since deepagents-code==0.1.62</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`970003e`](https://github.com/langchain-ai/deepagents/commit/970003e60ba39af104bf47b1b64319d17aa4131b) release(deepagents-code): 0.1.63 (#5834)
- [`948fea8`](https://github.com/langchain-ai/deepagents/commit/948fea88e2c1e0660a3c1c7a077121c573f11675) feat(code): model-node retry middleware for transient model errors (#4569)
- [`ffae2eb`](https://github.com/langchain-ai/deepagents/commit/ffae2ebdbd3b4f5c8f7a2e584179063a2a84fcb0) test(code): pin Unicode charset in diff rendering tests (#5846)
- [`1fc7d1e`](https://github.com/langchain-ai/deepagents/commit/1fc7d1e26d21ff27327b1b0c0a926673c4663001) fix(code): make debug log path click-to-copy (#5845)
- [`731d2d5`](https://github.com/langchain-ai/deepagents/commit/731d2d5a56dc0f9e78cec77722af592ad939edd3) feat(code): add Baseten `zai-org/GLM-5.3-Flash` to model switcher (#5844)
- [`804fdcc`](https://github.com/langchain-ai/deepagents/commit/804fdcc436538686ca345965c0511e0664eb7c34) fix(code): flush traces before server shutdown (#5837)
- [`1f59064`](https://github.com/langchain-ai/deepagents/commit/1f5906427d2b7d2912054d185d856fec8e43e49c) style(code): mark wrapped diff continuations (#5836)
- [`a6b069d`](https://github.com/langchain-ai/deepagents/commit/a6b069db380c5483c414f48d9b57899c749c8528) fix(code): clarify clear command descriptions (#5841)
- [`738bf07`](https://github.com/langchain-ai/deepagents/commit/738bf077f8b079164f11742bfcaa2fa93df138d7) feat(code): define and discover Python extensions (#5631)
- [`56f51d8`](https://github.com/langchain-ai/deepagents/commit/56f51d83a7d6621f2c3954ce69740c46e3cc1426) fix(code,evals): allow instrumental Auto actions (#5832)
- [`9f3a1dd`](https://github.com/langchain-ai/deepagents/commit/9f3a1dd38f8b5dbd828d2f366e9b03dad359fadf) feat(code): load managed config from a remote source (#5776)
- [`37d7777`](https://github.com/langchain-ai/deepagents/commit/37d7777195ff5c30ef789052d02d4387725182b8) fix(code): track live dynamic subagent cost (#5833)

</details>

## deepagents-code==0.1.62: deepagents-code==0.1.62

**Published**: 2026-08-26

### Features

- Added `/context-doctor` for inspecting and troubleshooting context issues ([#5830](https://github.com/langchain-ai/deepagents/issues/5830)).
- Added warning when switching models mid-session ([#5829](https://github.com/langchain-ai/deepagents/issues/5829)).
- Added support for `DEEPAGENTS_HOME` ([#5773](https://github.com/langchain-ai/deepagents/issues/5773)).
- (Re-)Enabled secret redaction by default ([#5816](https://github.com/langchain-ai/deepagents/issues/5816)).
- Improved update visibility by showing cached updates in version output ([#5817](https://github.com/langchain-ai/deepagents/issues/5817)).
- Improved prompts and pickers: the stale editable-deps prompt now defaults to `Refresh environment now`, and the model picker shows an Escape hint ([#5810](https://github.com/langchain-ai/deepagents/issues/5810), [#5775](https://github.com/langchain-ai/deepagents/issues/5775)).
- Added CLI config provider support ([#5774](https://github.com/langchain-ai/deepagents/issues/5774)).

### Bug Fixes

- Fixed refreshed local context handling after compaction to reduce cache busts ([#5828](https://github.com/langchain-ai/deepagents/issues/5828)).
- Preserved goal notice history for prompt caching ([#5823](https://github.com/langchain-ai/deepagents/issues/5823)).
- Improved rubric coverage checks ([#5369](https://github.com/langchain-ai/deepagents/issues/5369)).
- Protected the TUI from native stderr writes ([#5813](https://github.com/langchain-ai/deepagents/issues/5813)).
- Fixed Git origin resolution from worktree common Git directories ([#5818](https://github.com/langchain-ai/deepagents/issues/5818)).
- Fixed prompt clipboard behavior so Tab inserts instead of pages ([#5820](https://github.com/langchain-ai/deepagents/issues/5820)).

### Performance Improvements

- Reduced tracing overhead by omitting middleware trace inputs ([#5815](https://github.com/langchain-ai/deepagents/issues/5815)).

---

**Special thanks** to everyone who reported the issues addressed in this release: @yonasuriv ([#5757](https://github.com/langchain-ai/deepagents/issues/5757))

Internal maintainers: @davibinboi, @mdrxy, @sydney-runkle

Released by: @mdrxy

<details>
<summary>Git log since deepagents-code==0.1.61</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`dc27a2f`](https://github.com/langchain-ai/deepagents/commit/dc27a2fc295854b41d59fe28d1568275b0c33767) release(deepagents-code): 0.1.62 (#5778)
- [`acc3d33`](https://github.com/langchain-ai/deepagents/commit/acc3d33f357c027ec298bf7682d407a15249e706) feat(code): confirm model switches with large context (#5829)
- [`feb5736`](https://github.com/langchain-ai/deepagents/commit/feb5736dfb7309008674020442c943ac3e2dc19d) feat(code): support `DEEPAGENTS_HOME` (#5773)
- [`80719ce`](https://github.com/langchain-ai/deepagents/commit/80719ceee8d12060d7ffcdfff880777dc3aaf212) feat(code): `/context-doctor` (#5830)
- [`3a78de7`](https://github.com/langchain-ai/deepagents/commit/3a78de7c3feeea4bc180e91003f6a43ee1a29064) fix(code): append refreshed local context after compaction (#5828)
- [`4ef1ae6`](https://github.com/langchain-ai/deepagents/commit/4ef1ae67da011bdaab74a68659edaf857f16682d) chore(code): remove low-value unit tests (#5827)
- [`fd7d268`](https://github.com/langchain-ai/deepagents/commit/fd7d2682271cc36180f361f89d1a69557637a03f) feat(code): enable secret redaction by default (#5816)
- [`aa8ae71`](https://github.com/langchain-ai/deepagents/commit/aa8ae718644dac19d7f1cdc3febe2740a79fa058) fix(code): preserve goal notice history for prompt caching (#5823)
- [`951a1cf`](https://github.com/langchain-ai/deepagents/commit/951a1cf54b9fa373f1853685b21a084512ab2937) feat(code): CLI config provider (#5774)
- [`8e03e9c`](https://github.com/langchain-ai/deepagents/commit/8e03e9c37f80a348a14fb87ef875bc2f9b5b3ee9) fix(code): make prompt clipboard Tab insert (#5820)
- [`2271312`](https://github.com/langchain-ai/deepagents/commit/22713126015cde860d4662b02ae625b768abc470) chore(deps): bump `deepagents` pin in `deepagents-code` to 0.7.9 (#5819)
- [`2ab22a1`](https://github.com/langchain-ai/deepagents/commit/2ab22a1edcd1a6b2b52574728757d5614e692208) chore(code): prune redundant unit tests (#5825)
- [`a8ae714`](https://github.com/langchain-ai/deepagents/commit/a8ae71480f767aac0f0f7cf754ec49e6fd9bf826) fix(code): resolve origin from worktree common Git dir (#5818)
- [`a201b74`](https://github.com/langchain-ai/deepagents/commit/a201b74e540c7c33ed6e89a65c95d7811e65d73a) chore(code): prune redundant unit tests (#5822)
- [`b6a7792`](https://github.com/langchain-ai/deepagents/commit/b6a77921ceafbe5b6db576e62b5f3f1609e4ebe9) feat(code): show cached updates in version output (#5817)
- [`7155253`](https://github.com/langchain-ai/deepagents/commit/71552532bb33a8744a5b1c0b48e8047478169c42) release(deepagents): 0.7.9 (#5754)
- [`39b760f`](https://github.com/langchain-ai/deepagents/commit/39b760f12452e1b04bcd0fa15850662ce83ceee8) perf(code): omit middleware trace inputs (#5815)
- [`299ee32`](https://github.com/langchain-ai/deepagents/commit/299ee3283e6b3314d4c6a669f9792775b8b93e1a) hotfix(code): keep Textual output visible with stderr guard (#5814)
- [`442933d`](https://github.com/langchain-ai/deepagents/commit/442933da662d4497a29558f889ca972cd36b5488) fix(code): ensure rubric coverage (#5369)
- [`a4d9b8a`](https://github.com/langchain-ai/deepagents/commit/a4d9b8aa7dfde39f37a4fa40aac8b149e2f66b00) fix(code): protect TUI from native stderr writes (#5813)
- [`de60958`](https://github.com/langchain-ai/deepagents/commit/de60958a7d79bd4f63b678e8b4e3f02230060879) feat(code): default the stale editable-deps prompt to `Refresh environment now` (#5810)
- [`3706960`](https://github.com/langchain-ai/deepagents/commit/3706960e71f682f21c0e3e1823ebb5b5a5b04942) refactor(code): remove redundant HITL rejection framing (#5658)
- [`8809226`](https://github.com/langchain-ai/deepagents/commit/88092269b670fe535ae29fd1c51d1167b61d454b) chore(deps): raise dependency minimums for `deepagents-code` (#5807)
- [`29cd02a`](https://github.com/langchain-ai/deepagents/commit/29cd02ae1762e4cefa4962e60fa250642ec8815a) chore(deps): raise dependency minimums for `deepagents` (#5805)
- [`da67c86`](https://github.com/langchain-ai/deepagents/commit/da67c86e52a042ffbf4ac991de213fba3a559f49) chore(repo): remove deprecated `libs/cli` package (#5791)
- [`a103a88`](https://github.com/langchain-ai/deepagents/commit/a103a88f8a93ef318d64fa9e3bcdd2007cf7a45c) feat(code): show Escape hint in model picker (#5775)

</details>

## deepagents==0.7.9: deepagents==0.7.9

**Published**: 2026-08-25

### Features

- Disabled tracing inputs on middleware. ([#5377](https://github.com/langchain-ai/deepagents/issues/5377))

### Bug fixes

- Exclude tools from execution when `excluded_tools` is set in harness profiles. ([#5809](https://github.com/langchain-ai/deepagents/issues/5809))
- Enforce full criterion coverage in `RubricMiddleware`. ([#5234](https://github.com/langchain-ai/deepagents/issues/5234))
- Clarified zero execute-timeout semantics. ([#5752](https://github.com/langchain-ai/deepagents/issues/5752))

---

Thanks to our community contributors: @jiahongsigma

**Special thanks** to everyone who reported the issues addressed in this release: @BjoernSchotte ([#4450](https://github.com/langchain-ai/deepagents/issues/4450)), @jiahongsigma ([#5753](https://github.com/langchain-ai/deepagents/issues/5753))

Internal maintainers: @ccurme, @davibinboi, @mdrxy

Released by: @mdrxy

<details>
<summary>Git log since deepagents==0.7.8</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`7155253`](https://github.com/langchain-ai/deepagents/commit/71552532bb33a8744a5b1c0b48e8047478169c42) release(deepagents): 0.7.9 (#5754)
- [`553d412`](https://github.com/langchain-ai/deepagents/commit/553d412bb4f4b868fbf080ab561f76b4dd335f52) fix(sdk): exclude tools from execution when setting `excluded_tools` in harness profiles (#5809)
- [`0aade99`](https://github.com/langchain-ai/deepagents/commit/0aade99211dc45cc85ce8b95fc375612f982b48a) feat(sdk): disable tracing inputs on middleware (#5377)
- [`ddb69b6`](https://github.com/langchain-ai/deepagents/commit/ddb69b609a02d7203cda7f3ea2796ca73e5b5795) fix(sdk): enforce full criterion coverage in `RubricMiddleware` (#5234)
- [`29cd02a`](https://github.com/langchain-ai/deepagents/commit/29cd02ae1762e4cefa4962e60fa250642ec8815a) chore(deps): raise dependency minimums for `deepagents` (#5805)
- [`da67c86`](https://github.com/langchain-ai/deepagents/commit/da67c86e52a042ffbf4ac991de213fba3a559f49) chore(repo): remove deprecated `libs/cli` package (#5791)
- [`75095bb`](https://github.com/langchain-ai/deepagents/commit/75095bb81dc200ef33652bcaa173a758312f3962) chore(deps): raise dependency minimums for `all` (#5764)
- [`391d228`](https://github.com/langchain-ai/deepagents/commit/391d22827f6c19edd489854b9bf352817b664bc1) docs(sdk): remove stale `TodoListMiddleware` comment in `create_deep_agent` (#5759)
- [`4b49286`](https://github.com/langchain-ai/deepagents/commit/4b4928613262ac23d419f0e8788f24412a8fdafb) fix(sdk): clarify zero execute timeout semantics (#5752)
- [`cf939b3`](https://github.com/langchain-ai/deepagents/commit/cf939b3f86fc86d74e389924da7a79894d849fcd) chore(deps): raise dependency minimums for `deepagents` (#5709)

</details>

## deepagents-talon==0.0.4: deepagents-talon==0.0.4

**Published**: 2026-08-24

### Features

- Require Python 3.12 or greater. ([#5603](https://github.com/langchain-ai/deepagents/issues/5603))

---

Internal maintainers: @hntrl, @jkennedyvz, @mdrxy

Released by: @mdrxy

<details>
<summary>Git log since deepagents-talon==0.0.3</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`dfde21e`](https://github.com/langchain-ai/deepagents/commit/dfde21e379201c833da4162444ef4a13b46980fd) release(deepagents-talon): 0.0.4 (#5605)
- [`23a80f4`](https://github.com/langchain-ai/deepagents/commit/23a80f4d8ef4eef97f1a95440f34cc0f8ec4dffe) release(deepagents-code): 0.1.61 (#5758)
- [`75095bb`](https://github.com/langchain-ai/deepagents/commit/75095bb81dc200ef33652bcaa173a758312f3962) chore(deps): raise dependency minimums for `all` (#5764)
- [`1aa14cc`](https://github.com/langchain-ai/deepagents/commit/1aa14cc5a8e9967ce632469f54494b1ab6598adb) release(deepagents-code): 0.1.60 (#5724)
- [`b650b41`](https://github.com/langchain-ai/deepagents/commit/b650b412988ba53c59830b4207fcdb63c45a9a3c) release(deepagents-code): 0.1.59 (#5668)
- [`886de71`](https://github.com/langchain-ai/deepagents/commit/886de7149147a0e5e271ce99270b49781db0df38) chore(deps): raise dependency minimums for `deepagents-code` (#5710)
- [`cf939b3`](https://github.com/langchain-ai/deepagents/commit/cf939b3f86fc86d74e389924da7a79894d849fcd) chore(deps): raise dependency minimums for `deepagents` (#5709)
- [`1e261ba`](https://github.com/langchain-ai/deepagents/commit/1e261ba201bb1af4dbc5cbc8b6424e709b850ea8) release(deepagents): 0.7.8 (#5705)
- [`863c615`](https://github.com/langchain-ai/deepagents/commit/863c6153aaec97c42996fc3b26a3746c5bc8f743) release(deepagents-code): 0.1.58 (#5591)
- [`9bd088a`](https://github.com/langchain-ai/deepagents/commit/9bd088a69ed9b9510391daf247a9dbb9dfbea6bf) chore(deps): raise dependency minimums for `deepagents-code` (#5663)
- [`31af8c1`](https://github.com/langchain-ai/deepagents/commit/31af8c11219c3c77f4530bc1e4adc3c140cfa6d5) chore(deps): raise dependency minimums for `deepagents` (#5662)
- [`80e3d47`](https://github.com/langchain-ai/deepagents/commit/80e3d4738e0464cc3a6c5f9dfc27efc0128a9a00) chore(deps): raise dependency minimums for `deepagents-code` (#5647)
- [`16cb2e7`](https://github.com/langchain-ai/deepagents/commit/16cb2e76f4a36f312b595423c6134b43b248f563) chore(deps): raise dependency minimums for `deepagents` (#5646)
- [`04de43e`](https://github.com/langchain-ai/deepagents/commit/04de43e05adcbd38f1022f1fafe93f6748c2a032) feat(code,talon): require Python 3.12 or greater (#5603)
- [`7e645c6`](https://github.com/langchain-ai/deepagents/commit/7e645c61f9bb8d058f98b96b853313760a96fc08) chore(deps): raise dependency minimums for `deepagents-code` (#5600)
- [`42ed940`](https://github.com/langchain-ai/deepagents/commit/42ed9406f08dfec11369631011405c1dc650293a) release(deepagents): 0.7.7 (#5498)
- [`57e15ea`](https://github.com/langchain-ai/deepagents/commit/57e15ea63a5c6c77ffde82dba0497e70cda52387) release(deepagents-code): 0.1.57 (#5515)
- [`fbd5ac3`](https://github.com/langchain-ai/deepagents/commit/fbd5ac37230fbd800206b6011117980cfb52799f) release(deepagents-code): 0.1.56 (#5458)
- [`3afad63`](https://github.com/langchain-ai/deepagents/commit/3afad63e2290559c36a1c386ab2ac9a2d1f8b64a) release(deepagents): 0.7.6 (#5491)
- [`2d3ec54`](https://github.com/langchain-ai/deepagents/commit/2d3ec5410db5953a21863ae6bc9ab43bd2607489) chore(deps): raise dependency minimums for `deepagents-code` (#5481)
- [`3f62cd7`](https://github.com/langchain-ai/deepagents/commit/3f62cd7998561495d33502dd6481baadbb6c24ee) release(deepagents-code): 0.1.55 (#5396)
- [`6cf062b`](https://github.com/langchain-ai/deepagents/commit/6cf062bfa22d1a34d895e0418e4e32a49f97d8dd) release(deepagents-acp): 0.0.10 (#5431)
- [`8125806`](https://github.com/langchain-ai/deepagents/commit/81258067f4c74c3ede7d2b2895d9835137ba5977) release(deepagents-code): 0.1.54 (#5364)
- [`fae605c`](https://github.com/langchain-ai/deepagents/commit/fae605cfd09b595c88544aed283193c467da25a8) chore(deps): bump js-yaml from 4.3.0 to 4.3.1 in /libs/talon/deepagents_talon/channels/whatsapp_bridge (#5380)
- [`a97bdb6`](https://github.com/langchain-ai/deepagents/commit/a97bdb65778a67c28b3ef7ca59e39a88850c0f2a) ci(infra): fail on unexpected test warnings (#5346)
- [`a6c06b0`](https://github.com/langchain-ai/deepagents/commit/a6c06b029710d34035af6ae1faded093cc8f3073) release(deepagents): 0.7.5 (#5327)
- [`0bd15dc`](https://github.com/langchain-ai/deepagents/commit/0bd15dc0e1c52fafdd404f91b7a172312b8f0fec) release(deepagents-code): 0.1.53 (#5310)
- [`a6e2608`](https://github.com/langchain-ai/deepagents/commit/a6e2608c382be362163e4f26f5ccc544cc13ccbd) chore(deps): bump `langchain-anthropic` to 1.5.4 (#5332)
- [`b428644`](https://github.com/langchain-ai/deepagents/commit/b428644d31dd6b416fe0e2abb5338610a2553d1a) release(deepagents-code): 0.1.52 (#5228)
- [`553a030`](https://github.com/langchain-ai/deepagents/commit/553a030a5b959ac8bb17d52447f915397f910f03) release(deepagents): 0.7.4 (#5305)
- [`10d1314`](https://github.com/langchain-ai/deepagents/commit/10d1314fda2dc8ee031a269abdec4db7cb1d9321) chore(deps): bump ip-address from 10.2.0 to 10.4.0 in /libs/talon/deepagents_talon/channels/whatsapp_bridge (#5270)
- [`c258153`](https://github.com/langchain-ai/deepagents/commit/c258153ab8a0120f352eed69a02fb0c27267bf54) chore(deps): bump brace-expansion from 2.1.2 to 2.1.4 in /libs/talon/deepagents_talon/channels/whatsapp_bridge (#5257)
- [`f60951e`](https://github.com/langchain-ai/deepagents/commit/f60951e3f5e4d7e57d6379a4bbc64259bdfdb884) release(deepagents): 0.7.3 (#5251)
- [`0063721`](https://github.com/langchain-ai/deepagents/commit/00637212084c7fe4c12993c95ab559b92aaa4fef) release(deepagents): 0.7.2 (#5230)
- [`46ee772`](https://github.com/langchain-ai/deepagents/commit/46ee772b45e1d80e65c26524b0ef05914a503533) chore(talon): require deepagents 0.7 (#5231)
- [`9f582d5`](https://github.com/langchain-ai/deepagents/commit/9f582d5a1723ca881e28cd183a0b34c9134b8f07) release(deepagents-code): 0.1.51 (#5200)
- [`263dd72`](https://github.com/langchain-ai/deepagents/commit/263dd72b1b03ecee6dfb9d12bceb01b6259b698a) build(repo): parameterize coverage flags in Makefile test targets (#5208)
- [`a4c1605`](https://github.com/langchain-ai/deepagents/commit/a4c1605bd5d4038718ead3b55af617d6ee2e9599) chore(deps): sync lockfiles after SDK packaging dep addition (#5204)
- [`3bd6301`](https://github.com/langchain-ai/deepagents/commit/3bd6301818426f38d33df2af991061ca4659dc58) chore(infra): ship MIT LICENSE file in every package sdist (#5186)
- [`a559f72`](https://github.com/langchain-ai/deepagents/commit/a559f720d94eb8e7d14f96dbdad816dc9f7e3636) release(langchain-quickjs): 0.3.5 (#5156)
- [`77f0d9a`](https://github.com/langchain-ai/deepagents/commit/77f0d9a362e49b595b7d04d87ee66d01f61a6ee8) release(deepagents): 0.7.0 (#4297)
- [`fef1ff3`](https://github.com/langchain-ai/deepagents/commit/fef1ff33e99cd6cb7b2cbbea8db8df453866dc5e) chore(deps): raise `langchain-anthropic` minimum to 1.5.3 (#5120)
- [`44910bc`](https://github.com/langchain-ai/deepagents/commit/44910bc2ef3f70975533e4a2ce38ee0e2d0624b6) release(deepagents-code): 0.1.49 (#5089)
- [`803b832`](https://github.com/langchain-ai/deepagents/commit/803b8329db7d2320ca698b6ef6753e95cc952be6) release(deepagents-code): 0.1.48 (#5048)
- [`8da0ccb`](https://github.com/langchain-ai/deepagents/commit/8da0ccb139b8ccc4438a7522499a257a44f1cf19) chore(talon): update vulnerable lockfile dependencies (#5062)
- [`196a087`](https://github.com/langchain-ai/deepagents/commit/196a0870fcf8a7f29d1fb37886dd323b190f9c16) release(langchain-quickjs): 0.3.4 (#5051)
- [`c0afec5`](https://github.com/langchain-ai/deepagents/commit/c0afec5ab7e9860d1572002c1f689f95dd15cf8e) feat(code): add Claude Opus 5 support (#5049)
- [`8aa29dd`](https://github.com/langchain-ai/deepagents/commit/8aa29ddc28332fb13c5dcfa7f2f732130e497c7d) release(deepagents-code): 0.1.47 (#5040)
- [`efa86c5`](https://github.com/langchain-ai/deepagents/commit/efa86c51fedd8d6fbcbabe7da36dd4d63661103c) release(deepagents-code): 0.1.46 (#4965)
- [`a50ac54`](https://github.com/langchain-ai/deepagents/commit/a50ac5459e04839e6bccd373dd337513b5569379) chore(deps): bump pyasn1 from 0.6.3 to 0.6.4 in /libs/talon (#4982)
- [`7794b61`](https://github.com/langchain-ai/deepagents/commit/7794b61a6e76230e8c7a49bdce808b3728305914) release(deepagents-code): 0.1.45 (#4867)
- [`982611d`](https://github.com/langchain-ai/deepagents/commit/982611d7f9e0669917dad8b47badf17b22240fdb) chore(code): remove redundant goal command footer (#4937)
- [`4fe8a49`](https://github.com/langchain-ai/deepagents/commit/4fe8a49c15694202753822489e93aa783f1690b8) chore(deps): bump js-yaml from 4.2.0 to 4.3.0 in /libs/talon/deepagents_talon/channels/whatsapp_bridge (#4891)
- [`1444ee2`](https://github.com/langchain-ai/deepagents/commit/1444ee2de09c01a6ffebc08a066a006e7d835126) chore(deps-dev): bump pillow from 12.2.0 to 12.3.0 in /libs/talon (#4875)
- [`2b9cd08`](https://github.com/langchain-ai/deepagents/commit/2b9cd08f0492e3e4ad4763f17deea2d80a145f42) release(deepagents-code): 0.1.44 (#4857)
- [`e14e0ad`](https://github.com/langchain-ai/deepagents/commit/e14e0adcbe78565ed3650e7f24b2a775d5437d25) release(deepagents-code): 0.1.43 (#4825)
- [`68adab5`](https://github.com/langchain-ai/deepagents/commit/68adab563caab129baa9c87a4800c37a6110aea2) chore(deps): bump torch from 2.12.1 to 2.13.0 in /libs/talon (#4827)
- [`18679a1`](https://github.com/langchain-ai/deepagents/commit/18679a1a88a3f10777bf2f45593cb104e822d49f) release(deepagents-code): 0.1.42 (#4793)
- [`177a6d3`](https://github.com/langchain-ai/deepagents/commit/177a6d387492528fa70c60cef7f0beceb32c6f9e) chore(deps): bump mcp from 1.27.2 to 1.28.1 in /libs/talon (#4799)
- [`f7ed5d8`](https://github.com/langchain-ai/deepagents/commit/f7ed5d85c634dfa4c8812c0ffa50c580b29042c1) release(langchain-quickjs): 0.3.3 (#4372)
- [`d46a2cb`](https://github.com/langchain-ai/deepagents/commit/d46a2cb033b8195f440f68de744e75874b6f8e6f) release(deepagents-code): 0.1.41 (#4790)
- [`019489e`](https://github.com/langchain-ai/deepagents/commit/019489edb9c0d442a42ae6e5229f4ddf8ba56e08) release(deepagents-code): 0.1.40 (#4734)
- [`8eb909a`](https://github.com/langchain-ai/deepagents/commit/8eb909a59b8291b6e05fcf6f38cf93678f87a243) release(deepagents-code): 0.1.39 (#4725)
- [`73bd973`](https://github.com/langchain-ai/deepagents/commit/73bd9735697b95c664727657128708022fbe04cf) release(deepagents-code): 0.1.38 (#4703)
- [`def6369`](https://github.com/langchain-ai/deepagents/commit/def6369aed1a8dcb857db52285fa2e8976bdcd07) release(deepagents-code): 0.1.37 (#4619)
- [`e9c6130`](https://github.com/langchain-ai/deepagents/commit/e9c61304460baab2058a667198600cadef516954) chore(code,evals,talon): bump `langgraph-runtime-inmem` to 0.31.0 (#4647)
- [`2f56309`](https://github.com/langchain-ai/deepagents/commit/2f56309d821db4a0d06ee03959cf842c91b7f228) release(deepagents-code): 0.1.36 (#4595)
- [`44daa24`](https://github.com/langchain-ai/deepagents/commit/44daa243bb960f9c1ecb1b5ee734153e9430b0da) chore(repo): raise LangChain integration minimums (#4601)
- [`09daab5`](https://github.com/langchain-ai/deepagents/commit/09daab5772ff0a8b1fb8e2373f5281eb25cfd56c) release(deepagents-code): 0.1.35 (#4574)
- [`ad6ae52`](https://github.com/langchain-ai/deepagents/commit/ad6ae52cb6ff0626c1c5f79728abb2db9ba5cd29) release(deepagents-code): 0.1.34 (#4537)

</details>

## deepagents-code==0.1.61: deepagents-code==0.1.61

**Published**: 2026-08-24

### Features

- Added `google_anthropic_vertex` provider support for Claude on Vertex AI ([#5760](https://github.com/langchain-ai/deepagents/issues/5760)).
- Enforced configured model allowlists ([#5649](https://github.com/langchain-ai/deepagents/issues/5649)).
- Injected goal and rubric context directly, replacing `get_goal` and `get_rubric` ([#5041](https://github.com/langchain-ai/deepagents/issues/5041)).
- Made `/offload` server-owned ([#5261](https://github.com/langchain-ai/deepagents/issues/5261)).
- Added prompt clipboard support ([#5733](https://github.com/langchain-ai/deepagents/issues/5733)).
- Show Auto approval review progress ([#5729](https://github.com/langchain-ai/deepagents/issues/5729)).

### Bug Fixes

- Kept long thread resumes responsive ([#5772](https://github.com/langchain-ai/deepagents/issues/5772)).
- Render first streamed text immediately ([#5761](https://github.com/langchain-ai/deepagents/issues/5761)).
- Show the incognito shell command widget ([#5768](https://github.com/langchain-ai/deepagents/issues/5768)).
- Only highlight actionable tool rows ([#5769](https://github.com/langchain-ai/deepagents/issues/5769)).
- Warn and ignore `--auto-approve` and `--yolo` in headless mode ([#5750](https://github.com/langchain-ai/deepagents/issues/5750)).
- Sweep expired history archives at startup ([#5751](https://github.com/langchain-ai/deepagents/issues/5751)).
- Clarified auth environment setup ([#5767](https://github.com/langchain-ai/deepagents/issues/5767)).

---

**Special thanks** to everyone who reported the issues addressed in this release: @cakkinep ([#4489](https://github.com/langchain-ai/deepagents/issues/4489))

Internal maintainers: @mdrxy

Released by: @mdrxy

<details>
<summary>Git log since deepagents-code==0.1.60</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`23a80f4`](https://github.com/langchain-ai/deepagents/commit/23a80f4d8ef4eef97f1a95440f34cc0f8ec4dffe) release(deepagents-code): 0.1.61 (#5758)
- [`b494f43`](https://github.com/langchain-ai/deepagents/commit/b494f43437de3569c8c512d65f5f3accda8e0730) feat(code): make `/offload` server-owned (#5261)
- [`85e1e5b`](https://github.com/langchain-ai/deepagents/commit/85e1e5b130b7501308e7e57d0be389f41f5b72df) fix(code): keep long thread resumes responsive (#5772)
- [`b78413c`](https://github.com/langchain-ai/deepagents/commit/b78413c708afae7fba806ae81336007d5d4c0c58) fix(code): only highlight actionable tool rows (#5769)
- [`d9dc96e`](https://github.com/langchain-ai/deepagents/commit/d9dc96ed555c94f9973e9b49d4b12fd543038f8b) fix(code): sweep expired history archives at startup (#5751)
- [`dd8b8ad`](https://github.com/langchain-ai/deepagents/commit/dd8b8ad84aab54dfe1da4a277dfa9539a03e645c) feat(code): enforce configured model allowlists (#5649)
- [`a095af9`](https://github.com/langchain-ai/deepagents/commit/a095af93cf3e8ef0c06d9958cfca52dfe9230fcb) fix(code): clarify auth environment setup (#5767)
- [`a564f8e`](https://github.com/langchain-ai/deepagents/commit/a564f8eead8eeadaf2c485e4254dcfbc3ff8694c) refactor(code): remove legacy `resolve_scalar` config path (#5755)
- [`9bef676`](https://github.com/langchain-ai/deepagents/commit/9bef676fe69a3b79c0702fda59b555d1ef6ad3bc) fix(code): show incognito shell command widget (#5768)
- [`f6b0611`](https://github.com/langchain-ai/deepagents/commit/f6b06110d809a3f886d1ee370d1bb353fe7db0d6) style(code): align execute output details (#5770)
- [`c2f44ff`](https://github.com/langchain-ai/deepagents/commit/c2f44ffd2759401a5ba31b5f7c41a12b441d6663) feat(code): prompt clipboard (#5733)
- [`75095bb`](https://github.com/langchain-ai/deepagents/commit/75095bb81dc200ef33652bcaa173a758312f3962) chore(deps): raise dependency minimums for `all` (#5764)
- [`19de73d`](https://github.com/langchain-ai/deepagents/commit/19de73de163d2ca907fa4d9a44f2e19af635aa39) fix(code): render first streamed text immediately (#5761)
- [`aa69916`](https://github.com/langchain-ai/deepagents/commit/aa69916baf74c904a70a7497f78752d294df82ac) feat(code): add `google_anthropic_vertex` provider for Claude on Vertex AI (#5760)
- [`9223593`](https://github.com/langchain-ai/deepagents/commit/922359307cb0e7728ab58613b29631500e9c5abc) fix(code): warn and ignore `--auto-approve`/`--yolo` in headless mode (#5750)
- [`2c80153`](https://github.com/langchain-ai/deepagents/commit/2c801537885ea511c91fc880f6f8daa0a71342be) feat(code,evals): inject goal/rubric context, dropping `get_goal`/`get_rubric` (#5041)
- [`8fe11f0`](https://github.com/langchain-ai/deepagents/commit/8fe11f0c2566d95b0ca9af6db9ade7a4c58753e6) feat(code): show Auto approval review progress (#5729)
- [`acc752e`](https://github.com/langchain-ai/deepagents/commit/acc752e3e94e986368e13a0cf30bb526b9182480) refactor(code): add configuration provider resolver (#5736)

</details>

## deepagents-cli==0.3.0: deepagents-cli==0.3.0

**Published**: 2026-08-24

### ⚠️ Breaking Changes

- Deprecated `deepagents-cli` in favor of `managed-deepagents` ([#5780](https://github.com/langchain-ai/deepagents/issues/5780), [08e3768](https://github.com/langchain-ai/deepagents/commit/08e3768f7fdfa7bb8d8bf9cca8685e9daafa46eb))

---

Internal maintainers: @hntrl, @mdrxy

Released by: @mdrxy

<details>
<summary>Git log since deepagents-cli==0.2.2</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`38cf3e4`](https://github.com/langchain-ai/deepagents/commit/38cf3e41fbc30c34a5be9c056fa63d1157a5d88d) release(deepagents-cli): 0.3.0 (#5782)
- [`08e3768`](https://github.com/langchain-ai/deepagents/commit/08e3768f7fdfa7bb8d8bf9cca8685e9daafa46eb) feat(cli)!: deprecate `deepagents-cli` in favor of `managed-deepagents` (#5780)
- [`75095bb`](https://github.com/langchain-ai/deepagents/commit/75095bb81dc200ef33652bcaa173a758312f3962) chore(deps): raise dependency minimums for `all` (#5764)
- [`c984f8d`](https://github.com/langchain-ai/deepagents/commit/c984f8d9e94f3bf1ac8d28ac905dcbaa5e3ab4a2) docs(repo): trim always-loaded agent guidance (#5706)
- [`cf939b3`](https://github.com/langchain-ai/deepagents/commit/cf939b3f86fc86d74e389924da7a79894d849fcd) chore(deps): raise dependency minimums for `deepagents` (#5709)
- [`1e261ba`](https://github.com/langchain-ai/deepagents/commit/1e261ba201bb1af4dbc5cbc8b6424e709b850ea8) release(deepagents): 0.7.8 (#5705)
- [`31af8c1`](https://github.com/langchain-ai/deepagents/commit/31af8c11219c3c77f4530bc1e4adc3c140cfa6d5) chore(deps): raise dependency minimums for `deepagents` (#5662)
- [`16cb2e7`](https://github.com/langchain-ai/deepagents/commit/16cb2e76f4a36f312b595423c6134b43b248f563) chore(deps): raise dependency minimums for `deepagents` (#5646)
- [`03b656e`](https://github.com/langchain-ai/deepagents/commit/03b656e5e6c9b548a45cb2c30c4eb5a05772d288) chore(repo): use canonical LangSmith environment variables (#5615)
- [`42ed940`](https://github.com/langchain-ai/deepagents/commit/42ed9406f08dfec11369631011405c1dc650293a) release(deepagents): 0.7.7 (#5498)
- [`3afad63`](https://github.com/langchain-ai/deepagents/commit/3afad63e2290559c36a1c386ab2ac9a2d1f8b64a) release(deepagents): 0.7.6 (#5491)
- [`a97bdb6`](https://github.com/langchain-ai/deepagents/commit/a97bdb65778a67c28b3ef7ca59e39a88850c0f2a) ci(infra): fail on unexpected test warnings (#5346)
- [`a6c06b0`](https://github.com/langchain-ai/deepagents/commit/a6c06b029710d34035af6ae1faded093cc8f3073) release(deepagents): 0.7.5 (#5327)
- [`a6e2608`](https://github.com/langchain-ai/deepagents/commit/a6e2608c382be362163e4f26f5ccc544cc13ccbd) chore(deps): bump `langchain-anthropic` to 1.5.4 (#5332)
- [`553a030`](https://github.com/langchain-ai/deepagents/commit/553a030a5b959ac8bb17d52447f915397f910f03) release(deepagents): 0.7.4 (#5305)
- [`73b685e`](https://github.com/langchain-ai/deepagents/commit/73b685eb1d27073a5a10efb5258172adcd3ca477) chore(deps): bump cryptography from 48.0.1 to 50.0.0 in /libs/cli (#5289)
- [`f60951e`](https://github.com/langchain-ai/deepagents/commit/f60951e3f5e4d7e57d6379a4bbc64259bdfdb884) release(deepagents): 0.7.3 (#5251)
- [`0063721`](https://github.com/langchain-ai/deepagents/commit/00637212084c7fe4c12993c95ab559b92aaa4fef) release(deepagents): 0.7.2 (#5230)
- [`9f582d5`](https://github.com/langchain-ai/deepagents/commit/9f582d5a1723ca881e28cd183a0b34c9134b8f07) release(deepagents-code): 0.1.51 (#5200)
- [`a4c1605`](https://github.com/langchain-ai/deepagents/commit/a4c1605bd5d4038718ead3b55af617d6ee2e9599) chore(deps): sync lockfiles after SDK packaging dep addition (#5204)
- [`3bd6301`](https://github.com/langchain-ai/deepagents/commit/3bd6301818426f38d33df2af991061ca4659dc58) chore(infra): ship MIT LICENSE file in every package sdist (#5186)
- [`77f0d9a`](https://github.com/langchain-ai/deepagents/commit/77f0d9a362e49b595b7d04d87ee66d01f61a6ee8) release(deepagents): 0.7.0 (#4297)
- [`fef1ff3`](https://github.com/langchain-ai/deepagents/commit/fef1ff33e99cd6cb7b2cbbea8db8df453866dc5e) chore(deps): raise `langchain-anthropic` minimum to 1.5.3 (#5120)
- [`c0afec5`](https://github.com/langchain-ai/deepagents/commit/c0afec5ab7e9860d1572002c1f689f95dd15cf8e) feat(code): add Claude Opus 5 support (#5049)
- [`982611d`](https://github.com/langchain-ai/deepagents/commit/982611d7f9e0669917dad8b47badf17b22240fdb) chore(code): remove redundant goal command footer (#4937)
- [`c518ac6`](https://github.com/langchain-ai/deepagents/commit/c518ac6cb27307be86e8073adebf27e9db4f4017) chore(deps): bump pyasn1 from 0.6.3 to 0.6.4 in /libs/cli (#4899)
- [`18679a1`](https://github.com/langchain-ai/deepagents/commit/18679a1a88a3f10777bf2f45593cb104e822d49f) release(deepagents-code): 0.1.42 (#4793)
- [`44daa24`](https://github.com/langchain-ai/deepagents/commit/44daa243bb960f9c1ecb1b5ee734153e9430b0da) chore(repo): raise LangChain integration minimums (#4601)
- [`0390043`](https://github.com/langchain-ai/deepagents/commit/0390043a32136f34d787355f0f87a50a6f686a06) release(deepagents-code): 0.1.31 (#4424)
- [`8e8680b`](https://github.com/langchain-ai/deepagents/commit/8e8680bd01d717b3e639ad205eeb461e52998732) build(deps): refresh dependency minimums (#4331)
- [`66ea07f`](https://github.com/langchain-ai/deepagents/commit/66ea07fb6cd6699f7c0a779e4d1b842f1c827109) chore(deps): bump langgraph-checkpoint from 4.1.0 to 4.1.1 in /libs/cli (#4275)
- [`7e70065`](https://github.com/langchain-ai/deepagents/commit/7e70065200007896336f38fe905803e6763e8f85) release(deepagents): 0.6.12 (#4088)
- [`c07757e`](https://github.com/langchain-ai/deepagents/commit/c07757e97b045092db06129a4f8654d1387744f2) chore(deps): bump langsmith from 0.8.11 to 0.8.18 in /libs/cli (#4128)
- [`e509403`](https://github.com/langchain-ai/deepagents/commit/e5094037f9238d37cf7458622a8c7908015536db) docs(repo): add architecture and development onboarding guides (#3983)
- [`d3cecf9`](https://github.com/langchain-ai/deepagents/commit/d3cecf9bd2c226ae4891157dbb2ce45b53e29c53) chore(deps): bump lockfiles (#4090)
- [`f99f712`](https://github.com/langchain-ai/deepagents/commit/f99f71259786384098a939a34868f46d47122695) release(deepagents): 0.6.11 (#4052)
- [`2969bd2`](https://github.com/langchain-ai/deepagents/commit/2969bd298941d6114326526bb195897860826f52) chore(deps): bump cryptography from 46.0.7 to 48.0.1 in /libs/cli (#4021)
- [`fa2685a`](https://github.com/langchain-ai/deepagents/commit/fa2685a6114f04bccc0137d6672be36d3cd41f36) release(deepagents): 0.6.10 (#3944)
- [`62d4fd7`](https://github.com/langchain-ai/deepagents/commit/62d4fd72f4b82bad6ae6f3e3cbe68bdc35b1ea1d) release(deepagents): 0.6.9 (#3744)
- [`f2d955e`](https://github.com/langchain-ai/deepagents/commit/f2d955ebc5bcb2f0cda719989cc9fe8b161573a4) docs(repo): refresh `README.md` resources and install commands (#3933)
- [`505faa0`](https://github.com/langchain-ai/deepagents/commit/505faa070f13e5dba69c12399eda1eeb9be6a557) build(deps): raise LangChain and LangGraph minimums (#3931)
- [`7c9eb00`](https://github.com/langchain-ai/deepagents/commit/7c9eb0090880d0beeb494c7679573640c82132b2) chore(sdk): use public agent state exports (#3904)
- [`10edc06`](https://github.com/langchain-ai/deepagents/commit/10edc061ccbefa4921de8677ed222801592c5ad4) chore(sdk): bump min deps (#3870)
- [`7d887bd`](https://github.com/langchain-ai/deepagents/commit/7d887bd71fbf13076bdf8fed51b63232a6fd65a4) chore(sdk): update summarization trigger compatibility (#3828)
- [`969cbe8`](https://github.com/langchain-ai/deepagents/commit/969cbe8709110eed334b25e50530510317954cfd) chore(deps): update lint and typing dependency floors (#3818)

</details>

## deepagents-code==0.1.60: deepagents-code==0.1.60

**Published**: 2026-08-23

### Features

- Added `editable` trace metadata ([#5737](https://github.com/langchain-ai/deepagents/issues/5737)) ([23b83ad](https://github.com/langchain-ai/deepagents/commit/23b83ad50f63d241d0069a3dc426d43b211adf2e)).
- Added shell command highlighting in the chat input ([#5675](https://github.com/langchain-ai/deepagents/issues/5675)) ([d711bc6](https://github.com/langchain-ai/deepagents/commit/d711bc61300090181dc89e3e116e8b343fb65425)).
- Made project `.env` loading configurable ([#5726](https://github.com/langchain-ai/deepagents/issues/5726)) ([995cad6](https://github.com/langchain-ai/deepagents/commit/995cad67519af294851282133f8c40f643807c88)).
- Unified notification center and settings ([#5698](https://github.com/langchain-ai/deepagents/issues/5698)) ([9767f42](https://github.com/langchain-ai/deepagents/commit/9767f420c622a31a7511c4601739534ddc6062a7)).

### Bug Fixes

- Blocked dotenv git config injection keys ([#5723](https://github.com/langchain-ai/deepagents/issues/5723)) ([328f916](https://github.com/langchain-ai/deepagents/commit/328f9160e0f95a459be8ad57f76e7178b24a3ef8)).
- Persisted Auto approval mode between sessions and simplified Auto fallback copy ([#5665](https://github.com/langchain-ai/deepagents/issues/5665)) ([3ac059e](https://github.com/langchain-ai/deepagents/commit/3ac059e1574963fe216692642aa1b1a4044daaa9)), ([#5670](https://github.com/langchain-ai/deepagents/issues/5670)) ([42afcde](https://github.com/langchain-ai/deepagents/commit/42afcded97029070f393232778c84aaf3b69fb1c)).
- Fixed recognition of in-flight trace messages ([#5738](https://github.com/langchain-ai/deepagents/issues/5738)) ([f1d1f63](https://github.com/langchain-ai/deepagents/commit/f1d1f632812a85646d25ac2f3d2d7f39b65a0b49)).
- Increased the warm limit to 800 ([#5728](https://github.com/langchain-ai/deepagents/issues/5728)) ([f954cde](https://github.com/langchain-ai/deepagents/commit/f954cde37f1171adc2ec3f1516a0393bded47e82)).
- Improved text selection by supporting `Shift` + `click` to extend selections ([#5732](https://github.com/langchain-ai/deepagents/issues/5732)) ([e05931b](https://github.com/langchain-ai/deepagents/commit/e05931b3016ed3d1500df0c5b77402f457ee5686)).
- Polished notification settings by removing expand flicker and the trailing disclosure glyph ([#5734](https://github.com/langchain-ai/deepagents/issues/5734)) ([5397812](https://github.com/langchain-ai/deepagents/commit/5397812ad5f217cd84f871f121cf9ea8f3d63f4f)).
- Improved authentication footers with contextual actions ([#5690](https://github.com/langchain-ai/deepagents/issues/5690)) ([074a501](https://github.com/langchain-ai/deepagents/commit/074a5019e1f3edfd589614774958400d051e5fe1)).
- Standardized modal navigation hints ([#5699](https://github.com/langchain-ai/deepagents/issues/5699)) ([85c6833](https://github.com/langchain-ai/deepagents/commit/85c6833734a547e968221c1199a769d7aac69430)).
- Aligned wrapped debug snapshot values ([#5727](https://github.com/langchain-ai/deepagents/issues/5727)) ([1f74959](https://github.com/langchain-ai/deepagents/commit/1f7495949232fe2e3e3328b6ff9054c202002f95)).

---

Internal maintainers: @johannes117, @mdrxy

Released by: @mdrxy

<details>
<summary>Git log since deepagents-code==0.1.59</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`1aa14cc`](https://github.com/langchain-ai/deepagents/commit/1aa14cc5a8e9967ce632469f54494b1ab6598adb) release(deepagents-code): 0.1.60 (#5724)
- [`f1d1f63`](https://github.com/langchain-ai/deepagents/commit/f1d1f632812a85646d25ac2f3d2d7f39b65a0b49) fix(code): recognize in-flight trace messages (#5738)
- [`23b83ad`](https://github.com/langchain-ai/deepagents/commit/23b83ad50f63d241d0069a3dc426d43b211adf2e) feat(code): add `editable` trace metadata (#5737)
- [`e05931b`](https://github.com/langchain-ai/deepagents/commit/e05931b3016ed3d1500df0c5b77402f457ee5686) fix(code): extend text selection with `Shift` + `click` (#5732)
- [`5397812`](https://github.com/langchain-ai/deepagents/commit/5397812ad5f217cd84f871f121cf9ea8f3d63f4f) fix(code): remove notification settings expand flicker and trailing disclosure glyph (#5734)
- [`85c6833`](https://github.com/langchain-ai/deepagents/commit/85c6833734a547e968221c1199a769d7aac69430) fix(code): standardize modal navigation hints (#5699)
- [`3ac059e`](https://github.com/langchain-ai/deepagents/commit/3ac059e1574963fe216692642aa1b1a4044daaa9) fix(code): persist Auto approval mode between sessions (#5665)
- [`9767f42`](https://github.com/langchain-ai/deepagents/commit/9767f420c622a31a7511c4601739534ddc6062a7) feat(code): unify notification center and settings (#5698)
- [`074a501`](https://github.com/langchain-ai/deepagents/commit/074a5019e1f3edfd589614774958400d051e5fe1) fix(code): show contextual auth footer actions (#5690)
- [`1f74959`](https://github.com/langchain-ai/deepagents/commit/1f7495949232fe2e3e3328b6ff9054c202002f95) fix(code): align wrapped debug snapshot values (#5727)
- [`c72acc2`](https://github.com/langchain-ai/deepagents/commit/c72acc283b17bc94fc2612adfae35767f3810cc2) style(code): update resize handle after theme changes (#5664)
- [`d711bc6`](https://github.com/langchain-ai/deepagents/commit/d711bc61300090181dc89e3e116e8b343fb65425) feat(code): highlight shell commands in the chat input (#5675)
- [`d5005d3`](https://github.com/langchain-ai/deepagents/commit/d5005d3cc9e5735b88eb77779205976e1253f0bc) refactor(code): validate `ask_user` args with pydantic instead of a custom error (#5682)
- [`f954cde`](https://github.com/langchain-ai/deepagents/commit/f954cde37f1171adc2ec3f1516a0393bded47e82) fix(code): increase warm limit to 800 (#5728)
- [`995cad6`](https://github.com/langchain-ai/deepagents/commit/995cad67519af294851282133f8c40f643807c88) feat(code): make project `.env` loading configurable (#5726)
- [`42afcde`](https://github.com/langchain-ai/deepagents/commit/42afcded97029070f393232778c84aaf3b69fb1c) fix(code): simplify Auto fallback copy (#5670)
- [`328f916`](https://github.com/langchain-ai/deepagents/commit/328f9160e0f95a459be8ad57f76e7178b24a3ef8) fix(code): block dotenv git config injection keys (#5723)
- [`017f0be`](https://github.com/langchain-ai/deepagents/commit/017f0bed929c4d8f310060e29469920b79dedf5c) docs(code): state dotenv denylist is best-effort in threat model (#5722)

</details>

## deepagents==0.7.8: deepagents==0.7.8

**Published**: 2026-08-20

### Bug Fixes

- Add `files` state only for state backends ([#5643](https://github.com/langchain-ai/deepagents/issues/5643))

---

Internal maintainers: @ccurme, @mdrxy

Released by: @ccurme

<details>
<summary>Git log since deepagents==0.7.7</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`1e261ba`](https://github.com/langchain-ai/deepagents/commit/1e261ba201bb1af4dbc5cbc8b6424e709b850ea8) release(deepagents): 0.7.8 (#5705)
- [`63c13f3`](https://github.com/langchain-ai/deepagents/commit/63c13f3e6bc79a5304e542178ac410b517c64c31) fix(sdk): add `files` state only for state backends (#5643)
- [`31af8c1`](https://github.com/langchain-ai/deepagents/commit/31af8c11219c3c77f4530bc1e4adc3c140cfa6d5) chore(deps): raise dependency minimums for `deepagents` (#5662)
- [`a0990ff`](https://github.com/langchain-ai/deepagents/commit/a0990ff0d9c40276fc55e47c8fd44c798e8f858d) feat(infra): `bypass-ripgrep-check` label for release PR strict install (#5657)
- [`240fdbf`](https://github.com/langchain-ai/deepagents/commit/240fdbf36460450b86deac4ea530040165478867) ci(ci): bound ripgrep install on ordinary PRs (#5642)
- [`16cb2e7`](https://github.com/langchain-ai/deepagents/commit/16cb2e76f4a36f312b595423c6134b43b248f563) chore(deps): raise dependency minimums for `deepagents` (#5646)
- [`03b656e`](https://github.com/langchain-ai/deepagents/commit/03b656e5e6c9b548a45cb2c30c4eb5a05772d288) chore(repo): use canonical LangSmith environment variables (#5615)

</details>

## deepagents-code==0.1.59: deepagents-code==0.1.59

**Published**: 2026-08-20

### Features

- Added support for `managed_config.toml` configuration ([#5604](https://github.com/langchain-ai/deepagents/issues/5604))
- Multi-select `ask_user` answers are now encoded as JSON arrays ([#5660](https://github.com/langchain-ai/deepagents/issues/5660))
- Made teardown usage stats configurable ([#5696](https://github.com/langchain-ai/deepagents/issues/5696))
- Footer pickers now open on click ([#5674](https://github.com/langchain-ai/deepagents/issues/5674))
- Replaced Gemini 3.6 Flash with Gemini 3.7 Flash ([#5681](https://github.com/langchain-ai/deepagents/issues/5681))

### Bug fixes

- Made tool argument validation errors recoverable ([#5659](https://github.com/langchain-ai/deepagents/issues/5659))
- Improved streaming performance for tool-call arguments to run in linear time ([#5712](https://github.com/langchain-ai/deepagents/issues/5712))
- Fixed durable-mask config resolution with ranked resolver behavior ([#5672](https://github.com/langchain-ai/deepagents/issues/5672))
- Skipped background sync in Apple Terminal ([#5666](https://github.com/langchain-ai/deepagents/issues/5666))
- Hid thread IDs when tracing is disabled ([#5692](https://github.com/langchain-ai/deepagents/issues/5692))
- Kept installed providers visible in `/auth` ([#5689](https://github.com/langchain-ai/deepagents/issues/5689))
- Preloaded the auth UI before notification handoff ([#5697](https://github.com/langchain-ai/deepagents/issues/5697))
- Updated and clarified UI copy across Auto mode, YOLO hints, classifier notices, `/tokens`, line-number toggles, review failures, onboarding Tavily cancellation, and OpenAI subscription login labels ([#5685](https://github.com/langchain-ai/deepagents/issues/5685), [#5694](https://github.com/langchain-ai/deepagents/issues/5694), [#5684](https://github.com/langchain-ai/deepagents/issues/5684), [#5687](https://github.com/langchain-ai/deepagents/issues/5687), [#5680](https://github.com/langchain-ai/deepagents/issues/5680), [#5688](https://github.com/langchain-ai/deepagents/issues/5688), [#5686](https://github.com/langchain-ai/deepagents/issues/5686), [#5691](https://github.com/langchain-ai/deepagents/issues/5691), [#5693](https://github.com/langchain-ai/deepagents/issues/5693))
- Removed the `Muse Spark 1.1` recommendation ([#5683](https://github.com/langchain-ai/deepagents/issues/5683))

---

Internal maintainers: @mdrxy

Released by: @mdrxy

<details>
<summary>Git log since deepagents-code==0.1.58</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`b650b41`](https://github.com/langchain-ai/deepagents/commit/b650b412988ba53c59830b4207fcdb63c45a9a3c) release(deepagents-code): 0.1.59 (#5668)
- [`57bfa6b`](https://github.com/langchain-ai/deepagents/commit/57bfa6bdc57056265047744dc32f3337a964ddc8) fix(code): stream tool-call args in linear time (#5712)
- [`c1d965a`](https://github.com/langchain-ai/deepagents/commit/c1d965aa0db93f923ec17947fab34a5300c19141) feat(code): make teardown usage stats configurable (#5696)
- [`a2782ff`](https://github.com/langchain-ai/deepagents/commit/a2782ff36efd5e9c9ebd9abb17b6fb51a2f01e8b) fix(code): skip background sync in Apple Terminal (#5666)
- [`9f24b9f`](https://github.com/langchain-ai/deepagents/commit/9f24b9fcaf7ed399b7888b2f0f9d13363939ea87) fix(code): ranked durable-mask config resolver (#5672)
- [`32f565f`](https://github.com/langchain-ai/deepagents/commit/32f565f46519d9c35919640bdf9374506d0572d2) fix(code): show Auto first-enable notice as pre-confirmation (#5686)
- [`1680237`](https://github.com/langchain-ai/deepagents/commit/1680237e69bf27740001df7a7f67de5a053536c1) fix(code): hide thread IDs when tracing is disabled (#5692)
- [`4f65325`](https://github.com/langchain-ai/deepagents/commit/4f65325ed322ce1c650152b31532b219bfa3850c) feat(code): open footer pickers on click (#5674)
- [`f0854e8`](https://github.com/langchain-ai/deepagents/commit/f0854e82ed8cedd8a8455539eef596d1433eb68e) fix(code): keep installed providers visible in `/auth` (#5689)
- [`fc70294`](https://github.com/langchain-ai/deepagents/commit/fc70294bcf9ac134c21646bcbe8546aab001442d) feat(code): encode multi-select `ask_user` answers as JSON arrays (#5660)
- [`c23c960`](https://github.com/langchain-ai/deepagents/commit/c23c960459e931631842f1a7214b98a2d383f72a) fix(code): simplify classifier notice copy (#5691)
- [`b91da61`](https://github.com/langchain-ai/deepagents/commit/b91da61716253dbcf1805c6dede589ec41a09ec5) fix(code): hide onboarding Tavily cancel hint (#5684)
- [`14b09aa`](https://github.com/langchain-ai/deepagents/commit/14b09aa18567de9325bbf7fa083fe339c90fce0e) fix(code): rename OpenAI subscription login label (#5680)
- [`8a4fc3a`](https://github.com/langchain-ai/deepagents/commit/8a4fc3a3104ab5131bedec0ca1f76289285d5efa) fix(code): simplify empty `/tokens` message (#5693)
- [`5d604ee`](https://github.com/langchain-ai/deepagents/commit/5d604eed6d7ff567bb6c2c3046e385fc8d987698) fix(code): separate YOLO exit hint (#5688)
- [`b6a4146`](https://github.com/langchain-ai/deepagents/commit/b6a41461d1834f673795e39a8928649de142d976) fix(code): remove review failure approval copy (#5687)
- [`50dedf0`](https://github.com/langchain-ai/deepagents/commit/50dedf086bb923ec71f585d907ac3920d0442754) fix(code): clarify Auto mode file-edit example (#5685)
- [`57c0678`](https://github.com/langchain-ai/deepagents/commit/57c0678c4994b8b253c5f7edf11b7a558ece7df9) fix(code): preload auth UI before notification handoff (#5697)
- [`bb75e96`](https://github.com/langchain-ai/deepagents/commit/bb75e96192f30ffccb193f2ccdc349a0227ca1af) fix(code): clarify line number toggle message (#5694)
- [`886de71`](https://github.com/langchain-ai/deepagents/commit/886de7149147a0e5e271ce99270b49781db0df38) chore(deps): raise dependency minimums for `deepagents-code` (#5710)
- [`cf939b3`](https://github.com/langchain-ai/deepagents/commit/cf939b3f86fc86d74e389924da7a79894d849fcd) chore(deps): raise dependency minimums for `deepagents` (#5709)
- [`9446182`](https://github.com/langchain-ai/deepagents/commit/94461821d8d7e1ef1f1cd29bc0212c731c195ae5) feat(code): replace Gemini 3.6 Flash with 3.7 Flash (#5681)
- [`fa2e8ab`](https://github.com/langchain-ai/deepagents/commit/fa2e8abb4da1f07163cb5ee3daff4d57ea97fe9f) fix(code): drop `Muse Spark 1.1` recommendation (#5683)
- [`bf9c891`](https://github.com/langchain-ai/deepagents/commit/bf9c89173f1721fb8d37bf3da7b74ab47b429b84) chore(deps): bump genai-prices in deepagents-code to 0.1.4 (#5704)
- [`28e355c`](https://github.com/langchain-ai/deepagents/commit/28e355c44c26d06889e72fa89e7cd7fecff8beec) chore(deps): bump deepagents pin in deepagents-code to 0.7.8 (#5707)
- [`1e261ba`](https://github.com/langchain-ai/deepagents/commit/1e261ba201bb1af4dbc5cbc8b6424e709b850ea8) release(deepagents): 0.7.8 (#5705)
- [`1e4f507`](https://github.com/langchain-ai/deepagents/commit/1e4f50794167250dc7d7fd2b352aed684ca1ae69) style(code): make user messages easier to spot (#5669)
- [`a7027ed`](https://github.com/langchain-ai/deepagents/commit/a7027edc6449e9a7dbf0e082b8747d0999125ca2) fix(code): make tool arg validation errors recoverable (#5659)
- [`16d7665`](https://github.com/langchain-ai/deepagents/commit/16d766576a0e65a42e9e57848be9debd8f4d3e52) style(code): prefix interruptions with square glyph (#5671)
- [`d419122`](https://github.com/langchain-ai/deepagents/commit/d419122bfb748a823d1fa7cfd7207c428f4fbcab) feat(code): `managed_config.toml` (#5604)

</details>

## deepagents-code==0.1.58: deepagents-code==0.1.58

**Published**: 2026-08-19

### Breaking Changes

- `deepagents-code` now requires Python 3.12 or newer. ([#5603](https://github.com/langchain-ai/deepagents/issues/5603))

### Features

- Added OpenRouter `z-ai/glm-5.3` to the model switcher. ([#5641](https://github.com/langchain-ai/deepagents/issues/5641))
- Added support for re-authenticating MCP servers from the viewer. ([#5637](https://github.com/langchain-ai/deepagents/issues/5637))
- Footer pickers can now be opened with `ctrl+click`. ([#5611](https://github.com/langchain-ai/deepagents/issues/5611))
- Resume hints now account for `TERM_PROGRAM` support before showing terminal-specific guidance. ([#5580](https://github.com/langchain-ai/deepagents/issues/5580))

### Fixes

- Completed the `dcode config` command surface. ([#5581](https://github.com/langchain-ai/deepagents/issues/5581))
- Made `/offload` interruptible. ([#5590](https://github.com/langchain-ai/deepagents/issues/5590))
- Improved chat and footer UI behavior: rapid typing stays visible, double-click collapses a resized chat input, and the MCP footer wraps on narrow windows. ([#5424](https://github.com/langchain-ai/deepagents/issues/5424), [#5578](https://github.com/langchain-ai/deepagents/issues/5578), [#5651](https://github.com/langchain-ai/deepagents/issues/5651))
- Captured stdio MCP server stderr in the logger. ([#5610](https://github.com/langchain-ai/deepagents/issues/5610))
- Drained hook pipes after timeout. ([#5606](https://github.com/langchain-ai/deepagents/issues/5606))
- Grouped resume trace rounds. ([#5593](https://github.com/langchain-ai/deepagents/issues/5593))
- Omitted web-search prompt guidance when web search is unavailable. ([#5602](https://github.com/langchain-ai/deepagents/issues/5602))
- Resolved message pointer shapes per cell. ([#5592](https://github.com/langchain-ai/deepagents/issues/5592))

---

Internal maintainers: @aolsenjazz, @eyurtsev, @mdrxy

Released by: @mdrxy

<details>
<summary>Git log since deepagents-code==0.1.57</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`863c615`](https://github.com/langchain-ai/deepagents/commit/863c6153aaec97c42996fc3b26a3746c5bc8f743) release(deepagents-code): 0.1.58 (#5591)
- [`9bd088a`](https://github.com/langchain-ai/deepagents/commit/9bd088a69ed9b9510391daf247a9dbb9dfbea6bf) chore(deps): raise dependency minimums for `deepagents-code` (#5663)
- [`ab359ba`](https://github.com/langchain-ai/deepagents/commit/ab359bab20175a960227203de482a1fbd6edffea) test(code): await the connection refresh task instead of polling `_state` (#5661)
- [`31af8c1`](https://github.com/langchain-ai/deepagents/commit/31af8c11219c3c77f4530bc1e4adc3c140cfa6d5) chore(deps): raise dependency minimums for `deepagents` (#5662)
- [`d00926e`](https://github.com/langchain-ai/deepagents/commit/d00926e9e0278d6e74f91622b00d1375c7af19ab) fix(code): let MCP footer wrap on narrow windows (#5651)
- [`a61bc6f`](https://github.com/langchain-ai/deepagents/commit/a61bc6feeb6aefd780ad8435acc9ce2057fe9151) fix(code): capture stdio MCP server stderr into the logger (#5610)
- [`d7c24d8`](https://github.com/langchain-ai/deepagents/commit/d7c24d85f7b4d478116f022e1e969ddac89aeb2f) feat(code): re-auth MCP servers from viewer (#5637)
- [`80e3d47`](https://github.com/langchain-ai/deepagents/commit/80e3d4738e0464cc3a6c5f9dfc27efc0128a9a00) chore(deps): raise dependency minimums for `deepagents-code` (#5647)
- [`16cb2e7`](https://github.com/langchain-ai/deepagents/commit/16cb2e76f4a36f312b595423c6134b43b248f563) chore(deps): raise dependency minimums for `deepagents` (#5646)
- [`6295924`](https://github.com/langchain-ai/deepagents/commit/6295924d428fb061945cd83940c47c765091353b) feat(code): add OpenRouter `z-ai/glm-5.3` to model switcher (#5641)
- [`13951d8`](https://github.com/langchain-ai/deepagents/commit/13951d8b2269de44c169234db742f82ec0805f1b) test(code): make connection-refresh ordering test event-driven (#5636)
- [`75c5ce4`](https://github.com/langchain-ai/deepagents/commit/75c5ce47bf5fb146c6a8436c00c60134dceee8a5) test(code): pin single-warning logging for failed MCP tool calls (#5609)
- [`25aa273`](https://github.com/langchain-ai/deepagents/commit/25aa2735dabbca6a8c82afae2c7c9f35830d151c) chore(code): render stale-PATH hint as next step, not warning (#5618)
- [`ee339fb`](https://github.com/langchain-ai/deepagents/commit/ee339fb8c39a1432f0cc12c181431c60b4e235f9) feat(code): open footer pickers with `ctrl+click` (#5611)
- [`ab82d48`](https://github.com/langchain-ai/deepagents/commit/ab82d48cc012c5a991660ad53785c2e26030596e) fix(code): make `/offload` interruptible (#5590)
- [`575a8ac`](https://github.com/langchain-ai/deepagents/commit/575a8acb0307bbea9e08f4f8c15d850580a55cb3) fix(code): drain hook pipes after timeout (#5606)
- [`04de43e`](https://github.com/langchain-ai/deepagents/commit/04de43e05adcbd38f1022f1fafe93f6748c2a032) feat(code,talon): require Python 3.12 or greater (#5603)
- [`6a7c7d6`](https://github.com/langchain-ai/deepagents/commit/6a7c7d6575915dbc4b1549133735f50666919979) fix(code): keep rapid typing visible (#5424)
- [`4bfb6d2`](https://github.com/langchain-ai/deepagents/commit/4bfb6d2360ae1f67595ce75cf64bec023ca897f0) chore(code): set package author and homepage metadata (#5597)
- [`9feaf51`](https://github.com/langchain-ai/deepagents/commit/9feaf51030a30203f43231b7fb9420293be9fedc) fix(code): omit unavailable web-search prompt guidance (#5602)
- [`84eb09d`](https://github.com/langchain-ai/deepagents/commit/84eb09d8edaa52297ca3e2ad76a2c85a9adf4130) fix(code): complete the `dcode config` surface (#5581)
- [`345859e`](https://github.com/langchain-ai/deepagents/commit/345859e8e13d5b48348efebd0a48bfb4d3fbf132) fix(code): group resume trace rounds (#5593)
- [`7e645c6`](https://github.com/langchain-ai/deepagents/commit/7e645c61f9bb8d058f98b96b853313760a96fc08) chore(deps): raise dependency minimums for `deepagents-code` (#5600)
- [`cd4c399`](https://github.com/langchain-ai/deepagents/commit/cd4c3993faf9aabfc6bb6c22bb56a57c33563106) fix(code): resolve message pointer shapes per cell (#5592)
- [`8be9ad0`](https://github.com/langchain-ai/deepagents/commit/8be9ad02ed3c5ddd908c237ead099496a21cb87f) chore(deps): bump `deepagents` pin in `deepagents-code` to `0.7.7` (#5594)
- [`42ed940`](https://github.com/langchain-ai/deepagents/commit/42ed9406f08dfec11369631011405c1dc650293a) release(deepagents): 0.7.7 (#5498)
- [`fdde617`](https://github.com/langchain-ai/deepagents/commit/fdde617eb590191162a1ebbd9a5fb6c2763ee462) fix(code): collapse resized chat input on double-click (#5578)
- [`e8035e7`](https://github.com/langchain-ai/deepagents/commit/e8035e78e8be9d1edfe9a131bcc0df12349f754d) feat(code): gate `TERM_PROGRAM` resume hints (#5580)

</details>

## deepagents==0.7.7: deepagents==0.7.7

**Published**: 2026-08-18

### Bug fixes

- Batched concurrent `ContextHubBackend` mutations to improve SDK backend behavior ([#5471](https://github.com/langchain-ai/deepagents/issues/5471)) ([822f7c9](https://github.com/langchain-ai/deepagents/commit/822f7c9b02e6d99bdb46b5545bb2543783c01769)).
- Made `BackendProtocol.glob` recursive for bare patterns ([#5026](https://github.com/langchain-ai/deepagents/issues/5026)) ([32f35d5](https://github.com/langchain-ai/deepagents/commit/32f35d5e01f460549c10365eb569978909f5c969)).

---

**Special thanks** to everyone who reported the issues addressed in this release: @darieldatoon ([#4978](https://github.com/langchain-ai/deepagents/issues/4978))

Internal maintainers: @casparb, @mdrxy

Released by: @mdrxy

<details>
<summary>Git log since deepagents==0.7.6</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`42ed940`](https://github.com/langchain-ai/deepagents/commit/42ed9406f08dfec11369631011405c1dc650293a) release(deepagents): 0.7.7 (#5498)
- [`32f35d5`](https://github.com/langchain-ai/deepagents/commit/32f35d5e01f460549c10365eb569978909f5c969) fix(sdk): make `BackendProtocol.glob` recursive for bare patterns (#5026)
- [`822f7c9`](https://github.com/langchain-ai/deepagents/commit/822f7c9b02e6d99bdb46b5545bb2543783c01769) fix(sdk): batch concurrent `ContextHubBackend` mutations (#5471)

</details>

## deepagents-code==0.1.57: deepagents-code==0.1.57

**Published**: 2026-08-18

### Features

- Added warnings before expensive cold-cache turns and trust user-declared endpoints for cold-cache policies ([#5439](https://github.com/langchain-ai/deepagents/issues/5439), [#5462](https://github.com/langchain-ai/deepagents/issues/5462)).
- Made the chat input resizable by dragging its top border ([#5524](https://github.com/langchain-ai/deepagents/issues/5524)).
- Added a `multi_select` question type to `ask_user` ([#5097](https://github.com/langchain-ai/deepagents/issues/5097)).
- Added support for ACP approval modes ([#5394](https://github.com/langchain-ai/deepagents/issues/5394)).
- Added `DeepSeek-V4-Pro-0813` to the model picker ([#5512](https://github.com/langchain-ai/deepagents/issues/5512)).
- Show conversation turns alongside message counts ([#5571](https://github.com/langchain-ai/deepagents/issues/5571)).
- Include `TERM_PROGRAM` in the resume hint ([#5548](https://github.com/langchain-ai/deepagents/issues/5548)).

### Bug Fixes

- Report total context after `/offload` ([#5488](https://github.com/langchain-ai/deepagents/issues/5488)).
- Fixed transcript and thread restoration issues, including hydration lag, scrolling resumed threads to the bottom, and hiding empty previous-thread hints ([#5479](https://github.com/langchain-ai/deepagents/issues/5479), [#5543](https://github.com/langchain-ai/deepagents/issues/5543), [#5552](https://github.com/langchain-ai/deepagents/issues/5552)).
- Fixed Auto-mode approval handling by binding “yes” to the paired `ask_user` question and avoiding duplicate Auto denial notices ([#5038](https://github.com/langchain-ai/deepagents/issues/5038), [#5501](https://github.com/langchain-ai/deepagents/issues/5501)).
- Improved reload behavior by keeping the chat input responsive during `/reload`, reporting MCP server changes, and avoiding plugin reload prompt flashes or startup hints ([#5529](https://github.com/langchain-ai/deepagents/issues/5529), [#5504](https://github.com/langchain-ai/deepagents/issues/5504), [#5500](https://github.com/langchain-ai/deepagents/issues/5500), [#5502](https://github.com/langchain-ai/deepagents/issues/5502)).
- Improved dependency update UI by preserving editable fields and hiding dependency details after updates ([#5521](https://github.com/langchain-ai/deepagents/issues/5521), [#5519](https://github.com/langchain-ai/deepagents/issues/5519)).
- Fixed chat UI polish issues, including detached spacer mount anchors, the unfocused input cursor, and relative timestamp toggle display ([#5516](https://github.com/langchain-ai/deepagents/issues/5516), [#5258](https://github.com/langchain-ai/deepagents/issues/5258), [#5503](https://github.com/langchain-ai/deepagents/issues/5503)).
- Refresh the splash version after updates ([#5520](https://github.com/langchain-ai/deepagents/issues/5520)).

---

Internal maintainers: @johannes117, @mdrxy

Released by: @mdrxy

<details>
<summary>Git log since deepagents-code==0.1.56</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`57e15ea`](https://github.com/langchain-ai/deepagents/commit/57e15ea63a5c6c77ffde82dba0497e70cda52387) release(deepagents-code): 0.1.57 (#5515)
- [`00b8f3a`](https://github.com/langchain-ai/deepagents/commit/00b8f3ab91dca4f81780ad985f560f577d90f5e9) hotfix(code): wait for terminal resize layout (#5576)
- [`f4f138d`](https://github.com/langchain-ai/deepagents/commit/f4f138db65484d4938ef3759cb26cec1e789357d) fix(code): bind Auto-mode "yes" to the paired `ask_user` question (#5038)
- [`107980e`](https://github.com/langchain-ai/deepagents/commit/107980e387b3fa060c2b33e9bd31b57c387eddb6) feat(code): trust user-declared endpoints for cold-cache policies (#5462)
- [`5d806c8`](https://github.com/langchain-ai/deepagents/commit/5d806c88cf2a8b10d9b13b832540151491c13e19) fix(code): report total context after `/offload` (#5488)
- [`8d2298f`](https://github.com/langchain-ai/deepagents/commit/8d2298ff54797e224233349e4baf68e19b110040) feat(code): warn before expensive cold-cache turns (#5439)
- [`3dd4fe5`](https://github.com/langchain-ai/deepagents/commit/3dd4fe5cdc548f5408d5b74b82084d9d4c01a664) feat(code): show conversation turns alongside message counts (#5571)
- [`41395c5`](https://github.com/langchain-ai/deepagents/commit/41395c586d9743550c27073260539724a4bfedd3) fix(code): avoid duplicate Auto denial notices (#5501)
- [`3c8cae6`](https://github.com/langchain-ai/deepagents/commit/3c8cae6fa44d4e12062fdb10421b48587925eade) fix(code): avoid transcript hydration lag (#5479)
- [`dc029ef`](https://github.com/langchain-ai/deepagents/commit/dc029ef5072e9114125e4d332d3631dc1c3d4883) fix(code): defer plugin reload hint during startup (#5502)
- [`e03f030`](https://github.com/langchain-ai/deepagents/commit/e03f03026984bf4bdeb8bd661707f29a4d682738) fix(code): avoid plugin reload prompt flash (#5500)
- [`c325e7c`](https://github.com/langchain-ai/deepagents/commit/c325e7c10929b701c8b368331de36d16b322564f) style(code): preserve subagent hint at narrow widths (#5410)
- [`c66d9b8`](https://github.com/langchain-ai/deepagents/commit/c66d9b8500f120d6552af258750da8bb0dede7b8) fix(code): hide chat input cursor while unfocused (#5258)
- [`96d72a1`](https://github.com/langchain-ai/deepagents/commit/96d72a188bf951c9d3ca103e6611dcb50961af93) fix(code): condition relative timestamp toggle (#5503)
- [`3cdc821`](https://github.com/langchain-ai/deepagents/commit/3cdc82181bc94a904290cce23db04d8a1341b123) feat(code): carry `TERM_PROGRAM` into the resume hint (#5548)
- [`0f5bd4f`](https://github.com/langchain-ai/deepagents/commit/0f5bd4f3356d0fcbdea436a27c8011629416a61c) fix(code): hide empty previous-thread hints (#5552)
- [`1c6d358`](https://github.com/langchain-ai/deepagents/commit/1c6d358c60306aad2af0067dcca76f85f4deeba1) fix(code): scroll resumed threads to the bottom (#5543)
- [`ed3b15f`](https://github.com/langchain-ai/deepagents/commit/ed3b15f32a26033ca0b8395aebc26ca8cabb7e50) style(code): keep highlighted `/model` rows readable (#5245)
- [`b16a740`](https://github.com/langchain-ai/deepagents/commit/b16a74085af0057a24ce00f23a6a165bf5f21ed2) fix(code): report MCP server changes on reload (#5504)
- [`fcc019b`](https://github.com/langchain-ai/deepagents/commit/fcc019beb731d1f81aab66ba345ce432fbb1e3d9) style(code): separate usage summary sections (#5525)
- [`878ab3e`](https://github.com/langchain-ai/deepagents/commit/878ab3e20d35de63001476d5e68c29b12fad4f12) feat(code): add `multi_select` question type to `ask_user` (#5097)
- [`5aa266e`](https://github.com/langchain-ai/deepagents/commit/5aa266eab5ca0aedee58367c63599a926863d2cf) fix(code): keep chat input responsive during `/reload` (#5529)
- [`cf7578d`](https://github.com/langchain-ai/deepagents/commit/cf7578d1c3403bde960a43cba51f5dad7c336cb3) fix(code): hide dependency details after updates (#5519)
- [`f0446c8`](https://github.com/langchain-ai/deepagents/commit/f0446c8c8aecff243545fe0c551a6539ccf482a2) fix(code): preserve editables during dependency refresh (#5521)
- [`7772a14`](https://github.com/langchain-ai/deepagents/commit/7772a1495440739130b8b613aa69433fbc0afbad) feat(code): support ACP approval modes (#5394)
- [`b9fa4b6`](https://github.com/langchain-ai/deepagents/commit/b9fa4b6ce5603c9c3e65c331b4480a979de41dce) style(code): restore active-question side line for multi-question `ask_user` menus (#5539)
- [`c2ec5e6`](https://github.com/langchain-ai/deepagents/commit/c2ec5e6d9f85bf114a3666bba982de0c63ec5eb5) fix(code): refresh splash version after update (#5520)
- [`59ae459`](https://github.com/langchain-ai/deepagents/commit/59ae459691e67af65ed5dd299817781b6ee36152) chore(deps): bump genai-prices in deepagents-code to 0.1.3 (#5530)
- [`e34b85d`](https://github.com/langchain-ai/deepagents/commit/e34b85de2fe55e30c3db2353736344d534ac434b) test(code): run CLI end-to-end tests asynchronously and de-flake exit teardown (#5518)
- [`d01e4ac`](https://github.com/langchain-ai/deepagents/commit/d01e4ac5bf36752e5c89c1c6645d486282cb611f) feat(code): resize chat input by dragging its top border (#5524)
- [`a38dc42`](https://github.com/langchain-ai/deepagents/commit/a38dc4297b225e424207df5efd7dec0cf38ce832) fix(code): avoid detached spacer mount anchors (#5516)
- [`cd762dd`](https://github.com/langchain-ai/deepagents/commit/cd762dd4e27ab131d70cd7b0e6e3eb43e17f9de0) chore(deps): bump genai-prices in deepagents-code to 0.1.2 (#5511)
- [`f23d81b`](https://github.com/langchain-ai/deepagents/commit/f23d81b910b7c3343fda293d70f0a75d44f45ba0) feat(code): add `DeepSeek-V4-Pro-0813` to model picker (#5512)

</details>

## deepagents-code==0.1.56: deepagents-code==0.1.56

**Published**: 2026-08-14

### Features

- Personalized external editor hints to better match your setup ([#5445](https://github.com/langchain-ai/deepagents/issues/5445))

### Bug Fixes

- Improved dependency warning, Auto classifier, and paste expansion messages for clearer, more concise prompts and toasts ([#5489](https://github.com/langchain-ai/deepagents/issues/5489), [#5446](https://github.com/langchain-ai/deepagents/issues/5446), [#5443](https://github.com/langchain-ai/deepagents/issues/5443))
- Queued `/copy` commands while generation is active so they run at the right time ([#5447](https://github.com/langchain-ai/deepagents/issues/5447))
- Hid invalid cache metrics from the UI ([#5475](https://github.com/langchain-ai/deepagents/issues/5475))
- Fixed forced-compaction forks by preserving the `session_id` ([#5492](https://github.com/langchain-ai/deepagents/issues/5492))
- Stopped passing the removed `checkpoint_metadata` field ([#5473](https://github.com/langchain-ai/deepagents/issues/5473))

---

Internal maintainers: @johannes117, @mdrxy

Released by: @mdrxy

<details>
<summary>Git log since deepagents-code==0.1.55</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`fbd5ac3`](https://github.com/langchain-ai/deepagents/commit/fbd5ac37230fbd800206b6011117980cfb52799f) release(deepagents-code): 0.1.56 (#5458)
- [`33a57cb`](https://github.com/langchain-ai/deepagents/commit/33a57cbe6808e3da5f4067b7567f77845578ff61) fix(code): hide invalid cache metrics (#5475)
- [`8eb35f6`](https://github.com/langchain-ai/deepagents/commit/8eb35f61d44baaf2d5a2b409b188b9c18d30f598) chore(deps): bump deepagents pin in deepagents-code to 0.7.6 (#5495)
- [`3afad63`](https://github.com/langchain-ai/deepagents/commit/3afad63e2290559c36a1c386ab2ac9a2d1f8b64a) release(deepagents): 0.7.6 (#5491)
- [`33d323c`](https://github.com/langchain-ai/deepagents/commit/33d323c98bda90c7fe75bcf4a44fb083ed87fa81) fix(code): thread `session_id` through forced-compaction fork (#5492)
- [`31e4941`](https://github.com/langchain-ai/deepagents/commit/31e49418c7538542ff30b2701cf8ac9d1182bbeb) fix(code): clarify dependency warning prompt (#5489)
- [`2d3ec54`](https://github.com/langchain-ai/deepagents/commit/2d3ec5410db5953a21863ae6bc9ab43bd2607489) chore(deps): raise dependency minimums for `deepagents-code` (#5481)
- [`61ae398`](https://github.com/langchain-ai/deepagents/commit/61ae398a60a2f6c23954d89332950570e0b6b431) fix(code): stop passing removed `checkpoint_metadata` (#5473)
- [`4d2db04`](https://github.com/langchain-ai/deepagents/commit/4d2db042b279b33d6e0b031341938c3f3ce42d34) chore(deps): bump genai-prices in deepagents-code to 0.1.2 (#5476)
- [`f3b4f7d`](https://github.com/langchain-ai/deepagents/commit/f3b4f7d361f936553533a1541c933b7bceb20cc1) test(code): close leaked resources behind unraisable warnings (#5472)
- [`217b9eb`](https://github.com/langchain-ai/deepagents/commit/217b9eb372fa51b0439434f31abc3ac22e6cd7f2) fix(code): simplify paste expansion toast (#5443)
- [`78a4811`](https://github.com/langchain-ai/deepagents/commit/78a48111d743354a4da95650407c66a383691716) style(code): simplify `ask_user` question presentation (#5444)
- [`b72b3dd`](https://github.com/langchain-ai/deepagents/commit/b72b3dd72e0a31962ebf19261dba547462b4e394) feat(code): personalize external editor hints (#5445)
- [`c43919c`](https://github.com/langchain-ai/deepagents/commit/c43919c5c05643d03cf00009339cd0e4d3c17d6d) fix(code): shorten Auto classifier selection message (#5446)
- [`8dfe282`](https://github.com/langchain-ai/deepagents/commit/8dfe282006108dd0c47c50d5a1e3a41558e14723) fix(code): queue `/copy` during active generation (#5447)

</details>

## deepagents==0.7.6: deepagents==0.7.6

**Published**: 2026-08-13

### Bug Fixes

- Offload conversation history to a distinct session ID when summarizing. ([#5470](https://github.com/langchain-ai/deepagents/issues/5470))

---

Internal maintainers: @ccurme, @hntrl, @imnishitha, @mdrxy

Released by: @mdrxy

<details>
<summary>Git log since deepagents==0.7.5</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`3afad63`](https://github.com/langchain-ai/deepagents/commit/3afad63e2290559c36a1c386ab2ac9a2d1f8b64a) release(deepagents): 0.7.6 (#5491)
- [`3f6afba`](https://github.com/langchain-ai/deepagents/commit/3f6afbac4fcd901c32cce923ee447836cb485f22) test(sdk): update history-path assertions for session-id naming (#5493)
- [`fa55c52`](https://github.com/langchain-ai/deepagents/commit/fa55c52fe774462b2775c0d77dcf811d6dfd0e35) fix(sdk): offload conversation history to distinct session ID when summarizing (#5470)
- [`625d345`](https://github.com/langchain-ai/deepagents/commit/625d345ffe84c42ef4b24405117916abe82dc2bb) docs(sdk): add admonition about async execution with async subagents (#5463)
- [`a27208d`](https://github.com/langchain-ai/deepagents/commit/a27208d70f94b82eaa0772198d3af270ffff1208) chore(sdk): update tests following changes to summarization error handling (#5425)
- [`a97bdb6`](https://github.com/langchain-ai/deepagents/commit/a97bdb65778a67c28b3ef7ca59e39a88850c0f2a) ci(infra): fail on unexpected test warnings (#5346)
- [`889f217`](https://github.com/langchain-ai/deepagents/commit/889f217dd558254c1d9e77dca307fb326a5b1c21) docs(sdk): update deepagents package description (#5379)

</details>

## deepagents-code==0.1.55: deepagents-code==0.1.55

**Published**: 2026-08-12

### Features

- Added a `/context` usage report for inspecting context consumption ([#5407](https://github.com/langchain-ai/deepagents/issues/5407)).
- Added a cache and context status row for at-a-glance session state ([#5408](https://github.com/langchain-ai/deepagents/issues/5408)).
- Added configurable warnings when a session exceeds the configured cost threshold ([#5405](https://github.com/langchain-ai/deepagents/issues/5405)).
- Added support for persisting and reconfiguring ACP sessions ([#5366](https://github.com/langchain-ai/deepagents/issues/5366)).
- Added automatic updates for installed plugins ([#5368](https://github.com/langchain-ai/deepagents/issues/5368)).
- Added a toggle for diff line numbers ([#5427](https://github.com/langchain-ai/deepagents/issues/5427)).
- `Ctrl+S` in `/auto model` now stores `[models].auto_classifier` ([#5313](https://github.com/langchain-ai/deepagents/issues/5313)).

### Fixes

- Restored edit diffs in resumed threads ([#5391](https://github.com/langchain-ai/deepagents/issues/5391)).
- Added a resume hint after crashes ([#5412](https://github.com/langchain-ai/deepagents/issues/5412)).
- Clarified the project hooks trust prompt and stopped prompting for user hooks ([#5426](https://github.com/langchain-ai/deepagents/issues/5426)).
- Cleared dynamic subagents on the next turn ([#5437](https://github.com/langchain-ai/deepagents/issues/5437)).
- Improved grouped tool summaries by counting distinct targets ([#5409](https://github.com/langchain-ai/deepagents/issues/5409)).
- Improved ask-user choice wrapping and selection styling ([#5442](https://github.com/langchain-ai/deepagents/issues/5442)).
- Serialized `dcode` self-upgrades across processes ([#5252](https://github.com/langchain-ai/deepagents/issues/5252)).
- Added warnings for stale dependencies in editable installs ([#5386](https://github.com/langchain-ai/deepagents/issues/5386)).
- Hid incomplete extras from version output ([#5352](https://github.com/langchain-ai/deepagents/issues/5352)).
- Removed the optional-provider startup tip ([#5421](https://github.com/langchain-ai/deepagents/issues/5421)).
- Removed the “Message restored to input” toast ([#5253](https://github.com/langchain-ai/deepagents/issues/5253)).

---

Internal maintainers: @johannes117, @mdrxy

Released by: @mdrxy

<details>
<summary>Git log since deepagents-code==0.1.54</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`80fe3d3`](https://github.com/langchain-ai/deepagents/commit/80fe3d3cbcd23b8ebbc2b1b0d67d7ea318d11ef6) hotfix(code): skip checkout `pyproject.toml` test when running from a built wheel (#5453)
- [`3f62cd7`](https://github.com/langchain-ai/deepagents/commit/3f62cd7998561495d33502dd6481baadbb6c24ee) release(deepagents-code): 0.1.55 (#5396)
- [`6cf062b`](https://github.com/langchain-ai/deepagents/commit/6cf062bfa22d1a34d895e0418e4e32a49f97d8dd) release(deepagents-acp): 0.0.10 (#5431)
- [`9a37479`](https://github.com/langchain-ai/deepagents/commit/9a37479f866160f92474847720b57db9598ddb3e) fix(code): clear dynamic subagents on next turn (#5437)
- [`6ee54d9`](https://github.com/langchain-ai/deepagents/commit/6ee54d9849a841dd0892c72024cb366b422d761e) style(code): thicken `/context` usage bars (#5438)
- [`9be99ef`](https://github.com/langchain-ai/deepagents/commit/9be99efb1e26fa117d042cf4b441c3e095ddce8e) style(code): color-code cache hit rate (#5436)
- [`a78d7b1`](https://github.com/langchain-ai/deepagents/commit/a78d7b1744050c3221aab5e0c0300cc5f5bec519) fix(code): indent wrapped ask-user choices and add selection styling (#5442)
- [`4411a6c`](https://github.com/langchain-ai/deepagents/commit/4411a6c9a8870373cc876e2deb17a1810f14c44b) test(code): restore leaked model settings in `apply_to_settings` test (#5440)
- [`4cd21b6`](https://github.com/langchain-ai/deepagents/commit/4cd21b61592ef0239f59cf4e3f27a2a70d226737) feat(code): toggle diff line numbers (#5427)
- [`2b3edf9`](https://github.com/langchain-ai/deepagents/commit/2b3edf9ba4f3b43911f118b8e942374091602854) feat(code): add cache and context status row (#5408)
- [`22a36d2`](https://github.com/langchain-ai/deepagents/commit/22a36d25d9e82902fa28cdacdcb51cd6a9b013d7) feat(code): persist and reconfigure ACP sessions (#5366)
- [`0355416`](https://github.com/langchain-ai/deepagents/commit/0355416c0d4817ac58d3e14aa8b7ab099b6db74d) feat(code): add `/context` usage report (#5407)
- [`61d3279`](https://github.com/langchain-ai/deepagents/commit/61d32797ef85d1380e356cd2f9de1eb7926417ec) fix(code): clarify project hooks trust prompt and stop prompting for user hooks (#5426)
- [`10353bd`](https://github.com/langchain-ai/deepagents/commit/10353bda7196f307db9b22ef1173764aeda6daa7) fix(code): warn on stale dependencies in editable installs (#5386)
- [`cf8ea93`](https://github.com/langchain-ai/deepagents/commit/cf8ea93a634b2ae03fa9033db6e0e240ed2ae1a1) fix(code): count distinct targets in grouped tool summaries (#5409)
- [`f4da16e`](https://github.com/langchain-ai/deepagents/commit/f4da16e7fd963d551ea72a069a52c64e359ecc83) chore(code): print live tail command and say "Upgraded." in installer (#5371)
- [`e742d04`](https://github.com/langchain-ai/deepagents/commit/e742d04c8ca6f615327d7d1eab7994be8fcb3000) feat(code): `Ctrl+S` in `/auto model` stores `[models].auto_classifier` (#5313)
- [`f137897`](https://github.com/langchain-ai/deepagents/commit/f1378978e20f94762601ed38787a6fdb7fb39784) fix(code): remove optional-provider startup tip (#5421)
- [`015a019`](https://github.com/langchain-ai/deepagents/commit/015a0197f588e34475db63c2a03f04987583b081) fix(code): show resume hint after crashes (#5412)
- [`38f32cd`](https://github.com/langchain-ai/deepagents/commit/38f32cdbfdfcf1728178dbee85a42751dd3f3d2e) fix(code): hide incomplete extras from version output (#5352)
- [`e12acba`](https://github.com/langchain-ai/deepagents/commit/e12acbac89e553048b03fb6132b53e61b3433271) fix(code): serialize dcode self-upgrades across processes (#5252)
- [`c206eb4`](https://github.com/langchain-ai/deepagents/commit/c206eb450d612f77924ee55ecd136fbc52f459ab) fix(code): drop the "Message restored to input" toast (#5253)
- [`8cf8517`](https://github.com/langchain-ai/deepagents/commit/8cf8517e7fb728fedd07db15a0577b305cd69f70) feat(code): warn above configurable session cost threshold (#5405)
- [`6a5d93f`](https://github.com/langchain-ai/deepagents/commit/6a5d93f9ba7391189f65e6b999b724253577085d) fix(code): restore edit diffs in resumed threads (#5391)
- [`3bf6ca7`](https://github.com/langchain-ai/deepagents/commit/3bf6ca7ac076bc0330b65d244e3b46f398674de8) feat(code): auto-update installed plugins (#5368)

</details>

## deepagents-acp==0.0.10: deepagents-acp==0.0.10

**Published**: 2026-08-12

### Features

- Added support for loading persistent ACP sessions ([#5365](https://github.com/langchain-ai/deepagents/issues/5365)).

---

Internal maintainers: @darieldatoon, @hntrl, @jacoblee93, @johannes117, @mdrxy

Released by: @mdrxy

<details>
<summary>Git log since deepagents-acp==0.0.9</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`6cf062b`](https://github.com/langchain-ai/deepagents/commit/6cf062bfa22d1a34d895e0418e4e32a49f97d8dd) release(deepagents-acp): 0.0.10 (#5431)
- [`aaefb1e`](https://github.com/langchain-ai/deepagents/commit/aaefb1eea1652abf370b5ac699be8307aee979e5) feat(acp): support persistent session loading (#5365)
- [`a97bdb6`](https://github.com/langchain-ai/deepagents/commit/a97bdb65778a67c28b3ef7ca59e39a88850c0f2a) ci(infra): fail on unexpected test warnings (#5346)
- [`a6c06b0`](https://github.com/langchain-ai/deepagents/commit/a6c06b029710d34035af6ae1faded093cc8f3073) release(deepagents): 0.7.5 (#5327)
- [`a6e2608`](https://github.com/langchain-ai/deepagents/commit/a6e2608c382be362163e4f26f5ccc544cc13ccbd) chore(deps): bump `langchain-anthropic` to 1.5.4 (#5332)
- [`553a030`](https://github.com/langchain-ai/deepagents/commit/553a030a5b959ac8bb17d52447f915397f910f03) release(deepagents): 0.7.4 (#5305)
- [`74fb12e`](https://github.com/langchain-ai/deepagents/commit/74fb12ec851fb8ab159af8816f9a1c1b8055a345) chore(deps): bump cryptography from 48.0.1 to 50.0.0 in /libs/acp (#5290)
- [`f60951e`](https://github.com/langchain-ai/deepagents/commit/f60951e3f5e4d7e57d6379a4bbc64259bdfdb884) release(deepagents): 0.7.3 (#5251)
- [`0063721`](https://github.com/langchain-ai/deepagents/commit/00637212084c7fe4c12993c95ab559b92aaa4fef) release(deepagents): 0.7.2 (#5230)
- [`263dd72`](https://github.com/langchain-ai/deepagents/commit/263dd72b1b03ecee6dfb9d12bceb01b6259b698a) build(repo): parameterize coverage flags in Makefile test targets (#5208)
- [`a4c1605`](https://github.com/langchain-ai/deepagents/commit/a4c1605bd5d4038718ead3b55af617d6ee2e9599) chore(deps): sync lockfiles after SDK packaging dep addition (#5204)
- [`3bd6301`](https://github.com/langchain-ai/deepagents/commit/3bd6301818426f38d33df2af991061ca4659dc58) chore(infra): ship MIT LICENSE file in every package sdist (#5186)
- [`77f0d9a`](https://github.com/langchain-ai/deepagents/commit/77f0d9a362e49b595b7d04d87ee66d01f61a6ee8) release(deepagents): 0.7.0 (#4297)
- [`fef1ff3`](https://github.com/langchain-ai/deepagents/commit/fef1ff33e99cd6cb7b2cbbea8db8df453866dc5e) chore(deps): raise `langchain-anthropic` minimum to 1.5.3 (#5120)
- [`6b1a136`](https://github.com/langchain-ai/deepagents/commit/6b1a136702b4ccfd6fb30a0e53c2ff23f999f847) chore(acp): Update models in example agent (#5046)
- [`c0afec5`](https://github.com/langchain-ai/deepagents/commit/c0afec5ab7e9860d1572002c1f689f95dd15cf8e) feat(code): add Claude Opus 5 support (#5049)
- [`982611d`](https://github.com/langchain-ai/deepagents/commit/982611d7f9e0669917dad8b47badf17b22240fdb) chore(code): remove redundant goal command footer (#4937)
- [`4571bbd`](https://github.com/langchain-ai/deepagents/commit/4571bbd23417380cfbdc23ecf7f1c1e38c805225) chore(deps): bump pyasn1 from 0.6.3 to 0.6.4 in /libs/acp (#4900)
- [`18679a1`](https://github.com/langchain-ai/deepagents/commit/18679a1a88a3f10777bf2f45593cb104e822d49f) release(deepagents-code): 0.1.42 (#4793)
- [`5bff73b`](https://github.com/langchain-ai/deepagents/commit/5bff73b94e70f0110ef3c72057666387b16a1d8b) chore(acp): rename `py.typed.py` to the proper `py.typed` file (#4792)
- [`ad7453d`](https://github.com/langchain-ai/deepagents/commit/ad7453d4dfd3e47a26df400b5c4b3f7ff34a86be) docs(acp): call out `dcode --acp` option (#4645)
- [`44daa24`](https://github.com/langchain-ai/deepagents/commit/44daa243bb960f9c1ecb1b5ee734153e9430b0da) chore(repo): raise LangChain integration minimums (#4601)

</details>

## deepagents-code==0.1.54: deepagents-code==0.1.54

**Published**: 2026-08-07

### Features

- Added Meta `muse-spark-1.2` to the model switcher ([#5389](https://github.com/langchain-ai/deepagents/issues/5389)).
- Improved diff readability with quieter hunks and word-level highlights ([#5106](https://github.com/langchain-ai/deepagents/issues/5106)).

### Bug Fixes

- Hid startup tips when resuming threads ([#5349](https://github.com/langchain-ai/deepagents/issues/5349)).
- Prevented post-tool hook replay ([#5376](https://github.com/langchain-ai/deepagents/issues/5376)).
- Stored update logs under the OS cache directory ([#5363](https://github.com/langchain-ai/deepagents/issues/5363)).

---

Internal maintainers: @aolsenjazz, @johannes117, @mdrxy

Released by: @aolsenjazz

<details>
<summary>Git log since deepagents-code==0.1.53</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`8125806`](https://github.com/langchain-ai/deepagents/commit/81258067f4c74c3ede7d2b2895d9835137ba5977) release(deepagents-code): 0.1.54 (#5364)
- [`e668d30`](https://github.com/langchain-ai/deepagents/commit/e668d30ba7b9915348af83dbaf781e89c3b81f16) chore(deps): bump deepagents sdk version to 0.7.5 in dcode (#5390)
- [`922b285`](https://github.com/langchain-ai/deepagents/commit/922b285598be3b2ca6b3ec01e7362e31ad2014b2) feat(code): add Meta `muse-spark-1.2` to model switcher (#5389)
- [`d37b54f`](https://github.com/langchain-ai/deepagents/commit/d37b54f6bfb03f41fc7ff6b05436ad49db688d19) fix(code): prevent post-tool hook replay (#5376)
- [`529f7e8`](https://github.com/langchain-ai/deepagents/commit/529f7e8a16c7441873a305a9fa36c2721fa7a5b7) feat(code): quieter diff hunks with word-level highlights (#5106)
- [`280e24e`](https://github.com/langchain-ai/deepagents/commit/280e24eda9db718408d458154791d0ae84bb845a) chore(deps): bump h2 from 4.3.0 to 4.4.1 in /libs/code (#5383)
- [`a97bdb6`](https://github.com/langchain-ai/deepagents/commit/a97bdb65778a67c28b3ef7ca59e39a88850c0f2a) ci(infra): fail on unexpected test warnings (#5346)
- [`f69804b`](https://github.com/langchain-ai/deepagents/commit/f69804bfce2673de4f2171664ac5b91c1c248ea0) fix(code): store update logs under the OS cache dir (#5363)
- [`6eb3748`](https://github.com/langchain-ai/deepagents/commit/6eb3748ce673afdc34571236eb551785b0aa54d3) chore(code): harden installer ripgrep gating and prompt semantics (#5344)
- [`78d6cd8`](https://github.com/langchain-ai/deepagents/commit/78d6cd89f601214411d6eab092116d48771bcf86) chore(deps): bump langgraph-checkpoint-sqlite from 3.1.0 to 3.1.1 in /libs/evals (#5374)
- [`ff421f2`](https://github.com/langchain-ai/deepagents/commit/ff421f2f316f3819d8ac92225ea032dabfbcefe9) fix(code): hide startup tips when resuming threads (#5349)
- [`993ca48`](https://github.com/langchain-ai/deepagents/commit/993ca48716a274d3b6572ce1274835e0ecbe5bd2) style(code): link install packages to PyPI (#5350)
- [`a6c06b0`](https://github.com/langchain-ai/deepagents/commit/a6c06b029710d34035af6ae1faded093cc8f3073) release(deepagents): 0.7.5 (#5327)
- [`21fd0d6`](https://github.com/langchain-ai/deepagents/commit/21fd0d6794dcbe09b67e678863c14e02c4f2b6d9) chore(code): surface update status, log path, and extras loss in installer (#5342)
- [`65d6fe2`](https://github.com/langchain-ai/deepagents/commit/65d6fe255498fe9dfe4932479e0266e31175f6a6) docs(code): orient hooks package docstrings toward v2, banner legacy (#5347)

</details>

## deepagents==0.7.5: deepagents==0.7.5

**Published**: 2026-08-06

### Bug Fixes

- Identify SDK provider classes that support files. ([#5326](https://github.com/langchain-ai/deepagents/issues/5326))

---

Internal maintainers: @ccurme, @mdrxy

Released by: @ccurme

<details>
<summary>Git log since deepagents==0.7.4</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`a6c06b0`](https://github.com/langchain-ai/deepagents/commit/a6c06b029710d34035af6ae1faded093cc8f3073) release(deepagents): 0.7.5 (#5327)
- [`a6e2608`](https://github.com/langchain-ai/deepagents/commit/a6e2608c382be362163e4f26f5ccc544cc13ccbd) chore(deps): bump `langchain-anthropic` to 1.5.4 (#5332)
- [`e5d5391`](https://github.com/langchain-ai/deepagents/commit/e5d53917c01aadcebe4e7e4a1974322033ae6c87) fix(sdk): identify file-capable provider classes (#5326)

</details>

## deepagents-code==0.1.53: deepagents-code==0.1.53

**Published**: 2026-08-06

### Features

- Added pricing coverage with Baseten built-in overrides and local fallback overrides when `genai-prices` is missing data ([#5312](https://github.com/langchain-ai/deepagents/issues/5312), [#5304](https://github.com/langchain-ai/deepagents/issues/5304)).
- Suggest compacting large resumed threads ([#5318](https://github.com/langchain-ai/deepagents/issues/5318)).
- Added terminal program trace metadata ([#5329](https://github.com/langchain-ai/deepagents/issues/5329)).

### Bug Fixes

- Preserved runtime offload archive routing ([#5328](https://github.com/langchain-ai/deepagents/issues/5328)).
- Always restart after a successful startup auto-update ([#5317](https://github.com/langchain-ai/deepagents/issues/5317)).
- Fixed leaked turn coroutines and SQLite handles ([#5218](https://github.com/langchain-ai/deepagents/issues/5218)).
- Keep MCP shutdown-race tracebacks from appearing in the terminal ([#5325](https://github.com/langchain-ai/deepagents/issues/5325)).
- Open the `/auto model` selector immediately while connecting ([#5341](https://github.com/langchain-ai/deepagents/issues/5341)).
- Route failures to `PostToolUseFailure` ([#5315](https://github.com/langchain-ai/deepagents/issues/5315)).
- Use dismissed copy for ask-user prompts ([#5331](https://github.com/langchain-ai/deepagents/issues/5331)).

---

Internal maintainers: @johannes117, @mdrxy

Released by: @mdrxy

<details>
<summary>Git log since deepagents-code==0.1.52</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`0bd15dc`](https://github.com/langchain-ai/deepagents/commit/0bd15dc0e1c52fafdd404f91b7a172312b8f0fec) release(deepagents-code): 0.1.53 (#5310)
- [`72bfc1e`](https://github.com/langchain-ai/deepagents/commit/72bfc1e68574909ceb929be869c66fbdc9fe5a1d) fix(code): open `/auto model` selector immediately while connecting (#5341)
- [`63aa129`](https://github.com/langchain-ai/deepagents/commit/63aa129036cc93e52f65540acb1b83c64bad9c09) chore(code): harden installer downloads, PATH setup, and shell coverage (#5336)
- [`bd2079b`](https://github.com/langchain-ai/deepagents/commit/bd2079bbd597ff7f28db5466e0c62434b84d6ff1) style(code): trim Auto classifier picker copy and show active model (#5311)
- [`8cdee15`](https://github.com/langchain-ai/deepagents/commit/8cdee15bbc54381229a686f8263656be0202b9b5) fix(code): always restart after a successful startup auto-update (#5317)
- [`920fb66`](https://github.com/langchain-ai/deepagents/commit/920fb66763e85b759c2ec3cac090bccd7f05b55f) fix(code): use dismissed copy for ask-user prompts (#5331)
- [`cb2329d`](https://github.com/langchain-ai/deepagents/commit/cb2329d1ec480455a7ba4e2b277cbd727c9215c7) feat(code): suggest compacting large resumed threads (#5318)
- [`7d97097`](https://github.com/langchain-ai/deepagents/commit/7d9709700dd24cc2477cd091f01de990f23ee4a9) fix(code): keep MCP shutdown-race traceback off the terminal (#5325)
- [`8d3a1a9`](https://github.com/langchain-ai/deepagents/commit/8d3a1a929f7569630060ab68862b2a21c382d58c) feat(code): `dcode_term_program` trace metadata (#5329)
- [`a6e2608`](https://github.com/langchain-ai/deepagents/commit/a6e2608c382be362163e4f26f5ccc544cc13ccbd) chore(deps): bump `langchain-anthropic` to 1.5.4 (#5332)
- [`768b061`](https://github.com/langchain-ai/deepagents/commit/768b061805f65a36c71a1ad8f6a41b4e67063e91) fix(code): preserve runtime offload archive routing (#5328)
- [`c1f4ac3`](https://github.com/langchain-ai/deepagents/commit/c1f4ac3d53b3231d80be97691763850d230e8080) fix(code): route failures to `PostToolUseFailure` (#5315)
- [`f34ffa0`](https://github.com/langchain-ai/deepagents/commit/f34ffa0cb8c0c7943b116a753535df47e32de2a3) feat(code): add Baseten built-in pricing overrides (#5312)
- [`89bcaf2`](https://github.com/langchain-ai/deepagents/commit/89bcaf2c31ab347cb4cb4563bc18f296dbecea08) feat(code): local pricing overrides as a fallback when genai-prices misses (#5304)
- [`994799b`](https://github.com/langchain-ai/deepagents/commit/994799b2f25950eb76e1085b5026d1f19eceb563) fix(code): stop leaking turn coroutines and sqlite handles (#5218)

</details>

## deepagents==0.7.4: deepagents==0.7.4

**Published**: 2026-08-04

### Features

- Exposed the `execute` exit code in SDK artifacts. ([#5300](https://github.com/langchain-ai/deepagents/issues/5300))

---

Internal maintainers: @aolsenjazz

Released by: @mdrxy

<details>
<summary>Git log since deepagents==0.7.3</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`553a030`](https://github.com/langchain-ai/deepagents/commit/553a030a5b959ac8bb17d52447f915397f910f03) release(deepagents): 0.7.4 (#5305)
- [`de8bfca`](https://github.com/langchain-ai/deepagents/commit/de8bfca8255d673c1e7860e8c158ed119238197e) feat(sdk): expose `execute` exit code in artifact (#5300)
- [`f21adba`](https://github.com/langchain-ai/deepagents/commit/f21adba40bcca457521dce51e844f18fa4f60408) chore(deps): bump cryptography from 48.0.1 to 50.0.0 in /libs/deepagents (#5288)

</details>

## deepagents-code==0.1.52: deepagents-code==0.1.52

**Published**: 2026-08-04

### Features

- Hooks v2 is now generally available, with support for loading hooks from installed plugins. ([#5307](https://github.com/langchain-ai/deepagents/issues/5307), [#5198](https://github.com/langchain-ai/deepagents/issues/5198))
- Auto approval classifier configuration now supports selecting the classifier model and setting a review timeout. ([#5205](https://github.com/langchain-ai/deepagents/issues/5205), [#5302](https://github.com/langchain-ai/deepagents/issues/5302))
- HITL rejection reasons are now framed for the model, and the approval menu makes reject-with-feedback easier to discover. ([#5259](https://github.com/langchain-ai/deepagents/issues/5259), [#5260](https://github.com/langchain-ai/deepagents/issues/5260))
- Added a tri-state `DEEPAGENTS_CODE_ONBOARDING` environment variable. ([#5301](https://github.com/langchain-ai/deepagents/issues/5301))
- The `/model` footer Ctrl+N hint now follows the current display mode. ([#5247](https://github.com/langchain-ai/deepagents/issues/5247))
- The price catalog now refreshes hourly in the background. ([#5264](https://github.com/langchain-ai/deepagents/issues/5264))
- Updated recommendations to include DeepSeek V4 Flash 0731. ([#5244](https://github.com/langchain-ai/deepagents/issues/5244))

### Bug Fixes

- Fixed several Hooks v2 lifecycle issues: session-end teardown is now bounded, hooks refresh after cwd switches, malformed hook resumes are handled, hook stops surface without agent errors, and unused `SessionEndCause` members were removed. ([#5248](https://github.com/langchain-ai/deepagents/issues/5248), [#5249](https://github.com/langchain-ai/deepagents/issues/5249), [#5233](https://github.com/langchain-ai/deepagents/issues/5233), [#5276](https://github.com/langchain-ai/deepagents/issues/5276), [#5240](https://github.com/langchain-ai/deepagents/issues/5240))
- `PreCompact` now fires before auto-compaction. ([#5277](https://github.com/langchain-ai/deepagents/issues/5277))

---

Internal maintainers: @aolsenjazz, @johannes117, @mdrxy

Released by: @johannes117

<details>
<summary>Git log since deepagents-code==0.1.51</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`b428644`](https://github.com/langchain-ai/deepagents/commit/b428644d31dd6b416fe0e2abb5338610a2553d1a) release(deepagents-code): 0.1.52 (#5228)
- [`28a7d5b`](https://github.com/langchain-ai/deepagents/commit/28a7d5bdd3f78044b4f3612f71e13ce38ef47bf4) fix(code): bound Hooks v2 session-end teardown (#5248)
- [`4edebde`](https://github.com/langchain-ai/deepagents/commit/4edebdedd61d6793f0f7b666f5ee26b414576805) feat(code): make Hooks v2 generally available (#5307)
- [`7bd977b`](https://github.com/langchain-ai/deepagents/commit/7bd977bc9d4c11aad90dbef7872d83c2affd584e) feat(code): configurable Auto classifier review timeout (#5302)
- [`6f48dd5`](https://github.com/langchain-ai/deepagents/commit/6f48dd59efd27c3476cf32cb8c965155c59993a5) fix(code): refresh hooks after cwd switches (#5249)
- [`553a030`](https://github.com/langchain-ai/deepagents/commit/553a030a5b959ac8bb17d52447f915397f910f03) release(deepagents): 0.7.4 (#5305)
- [`43293e9`](https://github.com/langchain-ai/deepagents/commit/43293e95cb072c8b92a734eca8c0292e45d279e8) feat(code): tri-state `DEEPAGENTS_CODE_ONBOARDING` env var (#5301)
- [`3012bac`](https://github.com/langchain-ai/deepagents/commit/3012bac6608b8abd0aca4c00c1f16cd2698676ae) style(code): explain why to use `/offload` in the startup tip (#5303)
- [`f4cc516`](https://github.com/langchain-ai/deepagents/commit/f4cc5160c75eb44e8ddee8b049048690ea0f8616) fix(code): fire `PreCompact` before auto-compaction (#5277)
- [`ed0e3e2`](https://github.com/langchain-ai/deepagents/commit/ed0e3e236eea691d7c8c586ac1f9c82eba352b1a) fix(code): surface hook stops without agent errors (#5276)
- [`ee1e0f5`](https://github.com/langchain-ai/deepagents/commit/ee1e0f50bfaff3690c6164147cdf22c94c289768) fix(code): remove undispatched `SessionEndCause` members (#5240)
- [`1d3feb1`](https://github.com/langchain-ai/deepagents/commit/1d3feb1275a875f84f96f04a07e47cb6ec974b78) feat(code): selectable model for the Auto approval classifier (#5205)
- [`2454afa`](https://github.com/langchain-ai/deepagents/commit/2454afa58521f9dddb64bbde364a475694f45f4d) feat(code): refresh price catalog hourly in the background (#5264)
- [`b1e3240`](https://github.com/langchain-ai/deepagents/commit/b1e324038771c55460793e2e35d9d9ce5ea7b3f5) fix(code): make reject-with-feedback discoverable in approval menu (#5260)
- [`f60951e`](https://github.com/langchain-ai/deepagents/commit/f60951e3f5e4d7e57d6379a4bbc64259bdfdb884) release(deepagents): 0.7.3 (#5251)
- [`db70043`](https://github.com/langchain-ai/deepagents/commit/db70043993b73b149c3f6428c1d2249447fa2e28) chore(code): prune superseded entries from `_RECOMMENDED_MODELS` (#5263)
- [`89c814b`](https://github.com/langchain-ai/deepagents/commit/89c814b29249b44a8a6122f6c359db3601a6802e) feat(code): frame HITL rejection reasons for the model (#5259)
- [`bc49ffb`](https://github.com/langchain-ai/deepagents/commit/bc49ffbe76522e986fcc0ad9991c9b503f759ed3) chore(code): bump genai-prices minimum to 0.1.1 (#5256)
- [`a7e3566`](https://github.com/langchain-ai/deepagents/commit/a7e3566f908f3943780a7bee8fac74b1fb4c6875) style(code): status bar model label flush with the right edge (#5254)
- [`cf87266`](https://github.com/langchain-ai/deepagents/commit/cf87266105ee6ed79e56d72dea58c1c5f431228f) feat(code): `/model` footer Ctrl+N hint follows display mode (#5247)
- [`bd562c8`](https://github.com/langchain-ai/deepagents/commit/bd562c879ad3a8eec0a930bba23ef57fee163c05) fix(code): handle malformed hook resumes (#5233)
- [`fbe4ec8`](https://github.com/langchain-ai/deepagents/commit/fbe4ec8046c35313c6c05a986779111d84fe2536) feat(code): recommend DeepSeek V4 Flash 0731 (#5244)
- [`0063721`](https://github.com/langchain-ai/deepagents/commit/00637212084c7fe4c12993c95ab559b92aaa4fef) release(deepagents): 0.7.2 (#5230)
- [`0828b02`](https://github.com/langchain-ai/deepagents/commit/0828b02d30c7b5557ecfce7c4a4039e0d9c4c571) feat(code): load hooks from installed plugins (#5198)

</details>

## deepagents==0.7.3: deepagents==0.7.3

**Published**: 2026-08-03

### Bug Fixes

- Fixed exact-file `delete` target resolution in the SDK using first-match-wins behavior. ([#5229](https://github.com/langchain-ai/deepagents/issues/5229))

---

Internal maintainers: @imnishitha

Released by: @imnishitha

<details>
<summary>Git log since deepagents==0.7.2</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`f60951e`](https://github.com/langchain-ai/deepagents/commit/f60951e3f5e4d7e57d6379a4bbc64259bdfdb884) release(deepagents): 0.7.3 (#5251)
- [`6dd2a7d`](https://github.com/langchain-ai/deepagents/commit/6dd2a7d2f83bd63844a987f6ec65ac9244ec8c5b) fix(sdk): resolve exact-file `delete` targets with first-match-wins o… (#5229)

</details>

## deepagents==0.7.2: deepagents==0.7.2

**Published**: 2026-08-03

### Bug Fixes

- Scrub multimodal content blocks that are unsupported by the model's profile. ([#5194](https://github.com/langchain-ai/deepagents/issues/5194))

---

Internal maintainers: @imnishitha, @mdrxy

Released by: @mdrxy

<details>
<summary>Git log since deepagents==0.7.1</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`0063721`](https://github.com/langchain-ai/deepagents/commit/00637212084c7fe4c12993c95ab559b92aaa4fef) release(deepagents): 0.7.2 (#5230)
- [`bdc6104`](https://github.com/langchain-ai/deepagents/commit/bdc610445534ba339360f3988de6b50b60482f1d) fix(sdk): scrub multimodal content blocks unsupported by the model's profile (#5194)
- [`263dd72`](https://github.com/langchain-ai/deepagents/commit/263dd72b1b03ecee6dfb9d12bceb01b6259b698a) build(repo): parameterize coverage flags in Makefile test targets (#5208)

</details>

## deepagents-code==0.1.51: deepagents-code==0.1.51

**Published**: 2026-07-31

### Features

- The status bar and usage view now show the running session cost. ([#5036](https://github.com/langchain-ai/deepagents/issues/5036))
- Removed redundant `shell` and `web_search` prompt guidance. ([#5213](https://github.com/langchain-ai/deepagents/issues/5213))
- After switching threads, Deep Agents now points back to the previous thread. ([#5172](https://github.com/langchain-ai/deepagents/issues/5172))
- Leaving `/mcp` with pending toggles now prompts you to reconnect. ([#5211](https://github.com/langchain-ai/deepagents/issues/5211))
- `dcode config get` now accepts configuration sections. ([#5134](https://github.com/langchain-ai/deepagents/issues/5134))

### Fixes

- Kept the `/goal` criteria prompt responsive. ([#5142](https://github.com/langchain-ai/deepagents/issues/5142))
- Improved goal handling so underspecified objectives can be resolved from conversation context. ([#5201](https://github.com/langchain-ai/deepagents/issues/5201))
- Released the turn when an interrupted worker never starts. ([#5196](https://github.com/langchain-ai/deepagents/issues/5196))
- Hid timestamp footers together with their associated rows. ([#5167](https://github.com/langchain-ai/deepagents/issues/5167))
- Fixed editable SDK detection by scanning and correlating SDK locations more accurately. ([#5199](https://github.com/langchain-ai/deepagents/issues/5199))
- Improved `doctor` output to explain why it may not have a latest-version answer. ([#5209](https://github.com/langchain-ai/deepagents/issues/5209))

---

Internal maintainers: @aolsenjazz, @mdrxy

Released by: @mdrxy

<details>
<summary>Git log since deepagents-code==0.1.50</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`d2b663f`](https://github.com/langchain-ai/deepagents/commit/d2b663fca277d519a88335bc4f268542c41f2d92) hotfix(code): check rendered toast bounds (#5220)
- [`d815238`](https://github.com/langchain-ai/deepagents/commit/d8152389d207a206f49362ec1b7841a66d7eaa58) hotfix(code): deflake toast anchoring test (#5217)
- [`50d7d10`](https://github.com/langchain-ai/deepagents/commit/50d7d10291fd2c5212b91d848327cb2b09f9ade6) hotfix(code): mark editable SDK installs in `dcode_client_deepagents_version` (#5214)
- [`9f582d5`](https://github.com/langchain-ai/deepagents/commit/9f582d5a1723ca881e28cd183a0b34c9134b8f07) release(deepagents-code): 0.1.51 (#5200)
- [`539d4a0`](https://github.com/langchain-ai/deepagents/commit/539d4a04380182438ca63ba6b902eb921dc8a600) feat(code): running session cost in status bar and usage (#5036)
- [`53d1fb8`](https://github.com/langchain-ai/deepagents/commit/53d1fb80cbd43f983782975d540fac34a11c4ccc) feat(code): prompt to reconnect when leaving `/mcp` with pending toggles (#5211)
- [`4507f9f`](https://github.com/langchain-ai/deepagents/commit/4507f9f1985f29e9d4af7577293da64ec12b131c) feat(code): point back to the previous thread after a switch (#5172)
- [`6305fdb`](https://github.com/langchain-ai/deepagents/commit/6305fdbf8d94d061193a908715f2c629893b47ff) feat(code): drop redundant `shell` and `web_search` prompt guidance (#5213)
- [`ef3e078`](https://github.com/langchain-ai/deepagents/commit/ef3e078795e01b8334151081d026d6a88268d5a9) fix(code): explain why `doctor` has no latest-version answer (#5209)
- [`6dbbbd1`](https://github.com/langchain-ai/deepagents/commit/6dbbbd18b1de75310d13ebff0dd96ca3971eece3) chore(code): pin deepagents==0.7.1 (#5207)
- [`a3e3798`](https://github.com/langchain-ai/deepagents/commit/a3e3798599705afd2d0a3fce8116df61f22a551d) fix(code): hide timestamp footers with the rows they belong to (#5167)
- [`42e01a9`](https://github.com/langchain-ai/deepagents/commit/42e01a9585be8847aff6b97e520d7b84de922767) fix(code): release the turn when an interrupted worker never starts (#5196)
- [`6f9ea6a`](https://github.com/langchain-ai/deepagents/commit/6f9ea6a943dabe6c055766a43a204db6f4d95c98) fix(code): keep the `/goal` criteria prompt responsive (#5142)
- [`8fdb9c3`](https://github.com/langchain-ai/deepagents/commit/8fdb9c306fd9a5b5368eb065b100cbfe8c8cbc58) fix(code): resolve underspecified goal objectives from conversation context (#5201)
- [`874a137`](https://github.com/langchain-ai/deepagents/commit/874a137f7bf694f647f6f1dcbcf563eae5589ef2) feat(code): `dcode config get` accepts sections (#5134)
- [`4693ee7`](https://github.com/langchain-ai/deepagents/commit/4693ee774771c5936ffa1783396aa4e2126211b1) fix(code): correct editable SDK detection to scan and correlate (#5199)
- [`032ee10`](https://github.com/langchain-ai/deepagents/commit/032ee10aebe87f03fa29eb5937bb7c4f7b329ab2) test(code): stop unit tests from tripping the socket guard (#5197)
- [`4c393ea`](https://github.com/langchain-ai/deepagents/commit/4c393eaaa8309d9ae80e3405040c74cfdbfa23a9) chore(deps): declare `packaging` in sdk and align editable suffix (#5165)

</details>

## deepagents==0.7.1: deepagents==0.7.1

**Published**: 2026-07-30

### Features

- Mark editable installs in `lc_versions.deepagents` ([#5158](https://github.com/langchain-ai/deepagents/issues/5158))

### Bug Fixes

- Return an empty read for degenerate `read_file` windows ([#5184](https://github.com/langchain-ai/deepagents/issues/5184))
- Warn instead of silently skipping unresolved state schemas ([#5166](https://github.com/langchain-ai/deepagents/issues/5166))

---

Internal maintainers: @mdrxy

Released by: @mdrxy

<details>
<summary>Git log since deepagents==0.7.0</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`0d38eb2`](https://github.com/langchain-ai/deepagents/commit/0d38eb2df39b0652d6f2ad92e8d14ae5edc78398) release(deepagents): 0.7.1 (#5170)
- [`6bf3b68`](https://github.com/langchain-ai/deepagents/commit/6bf3b68441e04e9e25883a4f91e6b8d0d6c15703) fix(sdk): empty read for degenerate `read_file` windows (#5184)
- [`4c393ea`](https://github.com/langchain-ai/deepagents/commit/4c393eaaa8309d9ae80e3405040c74cfdbfa23a9) chore(deps): declare `packaging` in sdk and align editable suffix (#5165)
- [`ee7ac3d`](https://github.com/langchain-ai/deepagents/commit/ee7ac3d47980e4037403bfea1a13b7b51e06fb4a) feat(sdk): mark editable installs in `lc_versions.deepagents` (#5158)
- [`3bd6301`](https://github.com/langchain-ai/deepagents/commit/3bd6301818426f38d33df2af991061ca4659dc58) chore(infra): ship MIT LICENSE file in every package sdist (#5186)
- [`2054c07`](https://github.com/langchain-ai/deepagents/commit/2054c078071b4248707c2b28c7e5254e36703e66) fix(sdk): warn instead of silently skipping unresolved state schemas (#5166)

</details>

## deepagents-code==0.1.50: deepagents-code==0.1.50

**Published**: 2026-07-30

### Highlights

- Added project hooks workspace trust and expanded Hooks v2 support with client and server lifecycle events plus runtime feedback ([#5105](https://github.com/langchain-ai/deepagents/issues/5105), [#5104](https://github.com/langchain-ai/deepagents/issues/5104), [#4997](https://github.com/langchain-ai/deepagents/issues/4997), [#5045](https://github.com/langchain-ai/deepagents/issues/5045)).
- Added an option to mute the “YOLO is active” toast ([#5103](https://github.com/langchain-ai/deepagents/issues/5103)).
- Made the splash screen `thread` ID clickable to copy it ([#5173](https://github.com/langchain-ai/deepagents/issues/5173)).
- Show `ask_user` answers directly on the answered tool row ([#5100](https://github.com/langchain-ai/deepagents/issues/5100)).
- Show a toast when submitting an empty required `ask_user` answer ([#5095](https://github.com/langchain-ai/deepagents/issues/5095)).
- Added thread message counts to the Debug Console ([#5117](https://github.com/langchain-ai/deepagents/issues/5117)).

### Fixes and improvements

- Gated Hooks v2 behind `DEEPAGENTS_CODE_EXPERIMENTAL` and improved hook resume stability across identity and Command tool results ([#5146](https://github.com/langchain-ai/deepagents/issues/5146), [#5176](https://github.com/langchain-ai/deepagents/issues/5176)).
- Kept server hook state out of task results ([#5164](https://github.com/langchain-ai/deepagents/issues/5164)).
- Stopped duplicate Auto transcript events during interrupt replay ([#5157](https://github.com/langchain-ai/deepagents/issues/5157)).
- Kept `/update` and `/install --package` prompts responsive ([#5127](https://github.com/langchain-ai/deepagents/issues/5127)).
- Refreshed the `/threads` cache after each turn ([#5174](https://github.com/langchain-ai/deepagents/issues/5174)).
- Anchored toasts above the chat input and added a toast when media is dropped into a free-text question ([#5101](https://github.com/langchain-ai/deepagents/issues/5101), [#5099](https://github.com/langchain-ai/deepagents/issues/5099)).
- Improved thread status message styling and links ([#5118](https://github.com/langchain-ai/deepagents/issues/5118)).
- Made resume hints echo the launched command name ([#5119](https://github.com/langchain-ai/deepagents/issues/5119)).
- Scoped selection copy to the clicked screen ([#5140](https://github.com/langchain-ai/deepagents/issues/5140)).
- Ignored mouse hits on detached widgets ([#5114](https://github.com/langchain-ai/deepagents/issues/5114)).

---

Internal maintainers: @johannes117, @mdrxy

Released by: @mdrxy

<details>
<summary>Git log since deepagents-code==0.1.49</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`63adb96`](https://github.com/langchain-ai/deepagents/commit/63adb9645687b2710b3a8adf1ee92c653dd37b96) release(deepagents-code): 0.1.50 (#5102)
- [`08e6e8b`](https://github.com/langchain-ai/deepagents/commit/08e6e8ba8d8ea629d78976542a061a2acab1fa9c) fix(code): stabilize hook resumes across identity and Command tool results (#5176)
- [`5726872`](https://github.com/langchain-ai/deepagents/commit/5726872cd5efec9367ae2ce678aa7183af74335d) fix(code): keep `/update` and `/install --package` prompts responsive (#5127)
- [`88ea7da`](https://github.com/langchain-ai/deepagents/commit/88ea7da18e8be84e65df0edb8ffc4b904182f843) fix(code): keep server hook state out of task results (#5164)
- [`be2e505`](https://github.com/langchain-ai/deepagents/commit/be2e5054b9dffdf9ba9032a198c0ae5f8a0cccd1) feat(code): click the splash `thread` ID to copy it (#5173)
- [`3bd6301`](https://github.com/langchain-ai/deepagents/commit/3bd6301818426f38d33df2af991061ca4659dc58) chore(infra): ship MIT LICENSE file in every package sdist (#5186)
- [`872f9d5`](https://github.com/langchain-ai/deepagents/commit/872f9d5647759a84e7abfa79d43fc128c54e29a4) perf(code): refresh `/threads` cache after each turn (#5174)
- [`991b7e7`](https://github.com/langchain-ai/deepagents/commit/991b7e769d8afa98edc8dac1c68994ca4dc765d2) fix(code): resume hints echo the launched command name (#5119)
- [`5bbcf42`](https://github.com/langchain-ai/deepagents/commit/5bbcf428a8131f0fca149abba34096fbcd2dfde8) fix(code): stop duplicating Auto transcript events on interrupt replay (#5157)
- [`8e81225`](https://github.com/langchain-ai/deepagents/commit/8e81225e58a618196580a06506492d6a34246ce5) style(code): markdown table for built-in tools in `/tools` (#5135)
- [`9ad8dde`](https://github.com/langchain-ai/deepagents/commit/9ad8dded08533a7915dc35e05f4c92c3b1ecb736) fix(code): consistent styling and links for thread status messages (#5118)
- [`78ebe2d`](https://github.com/langchain-ai/deepagents/commit/78ebe2d27c0ec5b5bf1368f1f1b1f442f9212717) feat(code): show `ask_user` answers on the answered tool row (#5100)
- [`66d526f`](https://github.com/langchain-ai/deepagents/commit/66d526f0e43c4c1c5d3ab9cc3d423fefe1606e6f) feat(code): surface Hooks v2 runtime feedback (#5045)
- [`7d4acb6`](https://github.com/langchain-ai/deepagents/commit/7d4acb6804cd17eb4c2337b9af11aee9f3601d01) fix(code): gate Hooks v2 behind `DEEPAGENTS_CODE_EXPERIMENTAL` (#5146)
- [`a559f72`](https://github.com/langchain-ai/deepagents/commit/a559f720d94eb8e7d14f96dbdad816dc9f7e3636) release(langchain-quickjs): 0.3.5 (#5156)
- [`d98fe32`](https://github.com/langchain-ai/deepagents/commit/d98fe329c8ad0459b9eaf0b5a3ab5169453298e2) release(langchain-runloop): 0.0.7 (#5152)
- [`2f6f4be`](https://github.com/langchain-ai/deepagents/commit/2f6f4bee113806bf12d21f2da75a041baf41c5b8) release(langchain-daytona): 0.0.8 (#5153)
- [`70f36a5`](https://github.com/langchain-ai/deepagents/commit/70f36a5163e78808dca000bf1aefae076140b126) release(langchain-modal): 0.0.6 (#5154)
- [`4d606d2`](https://github.com/langchain-ai/deepagents/commit/4d606d2d98bb25cca37028492c2281f08c4f07ee) release(langchain-vercel-sandbox): 0.0.2 (#5155)
- [`4de6037`](https://github.com/langchain-ai/deepagents/commit/4de6037cbe31de005a493eaa719f5269f29be764) fix(code): scope selection copy to the clicked screen (#5140)
- [`9b2185b`](https://github.com/langchain-ai/deepagents/commit/9b2185b65d4cbbaad9dd1b632162810a0aefd7eb) feat(code): add project hooks workspace trust (#5105)
- [`ff02f83`](https://github.com/langchain-ai/deepagents/commit/ff02f83db383eac945955d25f5f3d2b1bbbff178) chore(code): bump deepagents pin to 0.7.0 (#5144)
- [`0c9612f`](https://github.com/langchain-ai/deepagents/commit/0c9612f1ab9676a9a98b4c51cc64a1810371d4d7) style(code): clarify debug console trace link as `(open in langsmith)` (#5141)
- [`77f0d9a`](https://github.com/langchain-ai/deepagents/commit/77f0d9a362e49b595b7d04d87ee66d01f61a6ee8) release(deepagents): 0.7.0 (#4297)
- [`e8702df`](https://github.com/langchain-ai/deepagents/commit/e8702df601e137b65fe276270c3d3d589340bddf) feat(code): integrate Hooks v2 client lifecycle events (#5104)
- [`da8d4c3`](https://github.com/langchain-ai/deepagents/commit/da8d4c3ccc237e57294088d2437b13031a73c52d) fix(code): toast when media is dropped into a free-text question (#5099)
- [`18822b2`](https://github.com/langchain-ai/deepagents/commit/18822b290a70f6dedca33d6196fa51dc8a705d9a) chore(infra): nest GitHub helper scripts by domain (#5126)
- [`5b58381`](https://github.com/langchain-ai/deepagents/commit/5b58381b4b5beff4cf4b19d74a20469d38a0daaa) style(code): document `Enter` toggle in `/notifications` footer (#5125)
- [`04cf25d`](https://github.com/langchain-ai/deepagents/commit/04cf25d27068070979552a5c914fc7dad715ce70) feat(code): show thread message count in the Debug Console (#5117)
- [`4d2d6ae`](https://github.com/langchain-ai/deepagents/commit/4d2d6aed808575e2e03539bc7fa84562c93b7eb5) feat(code): allow muting the "YOLO is active" toast (#5103)
- [`fef1ff3`](https://github.com/langchain-ai/deepagents/commit/fef1ff33e99cd6cb7b2cbbea8db8df453866dc5e) chore(deps): raise `langchain-anthropic` minimum to 1.5.3 (#5120)
- [`7348b8f`](https://github.com/langchain-ai/deepagents/commit/7348b8f5098aef6d2f15243861300b98bf24378c) style(code): show `ctrl+x` hint when `ask_user` free-text field is shown (#5096)
- [`d4d2b60`](https://github.com/langchain-ai/deepagents/commit/d4d2b60e37ae034e69f60ab5f34267b542c00dd5) fix(code): ignore mouse hits on detached widgets (#5114)
- [`f1727c7`](https://github.com/langchain-ai/deepagents/commit/f1727c785c44809e7b1b7ed8c5d0b31c560ae3ad) fix(code): anchor toasts above the chat input (#5101)
- [`2487c4b`](https://github.com/langchain-ai/deepagents/commit/2487c4b87dff264ae1e8d34c7ce9249dd4b29760) feat(code): integrate Hooks v2 server lifecycle events (#4997)
- [`a80355a`](https://github.com/langchain-ai/deepagents/commit/a80355abd9d4579eee483f654faa5f2b373590a0) feat(code): toast when submitting empty required `ask_user` answer (#5095)
- [`641b408`](https://github.com/langchain-ai/deepagents/commit/641b408e621a92cbc537d724a87e4021d4992288) chore(code): remove orphaned `todo_list_prompt.md` (#5098)

</details>

## langchain-vercel-sandbox==0.0.2: langchain-vercel-sandbox==0.0.2

**Published**: 2026-07-29

### Bug Fixes

* Require deepagents 0.7.x ([#5150](https://github.com/langchain-ai/deepagents/issues/5150)) ([d4e4c30](https://github.com/langchain-ai/deepagents/commit/d4e4c30b53f751b073dfd2da76b2817d3e768fab))

---

Internal maintainers: @hntrl, @mdrxy

Released by: @mdrxy

<details>
<summary>Git log since langchain-vercel-sandbox==0.0.1</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`4d606d2`](https://github.com/langchain-ai/deepagents/commit/4d606d2d98bb25cca37028492c2281f08c4f07ee) release(langchain-vercel-sandbox): 0.0.2 (#5155)
- [`d4e4c30`](https://github.com/langchain-ai/deepagents/commit/d4e4c30b53f751b073dfd2da76b2817d3e768fab) fix(vercel): require deepagents 0.7.x (#5150)
- [`77f0d9a`](https://github.com/langchain-ai/deepagents/commit/77f0d9a362e49b595b7d04d87ee66d01f61a6ee8) release(deepagents): 0.7.0 (#4297)
- [`fef1ff3`](https://github.com/langchain-ai/deepagents/commit/fef1ff33e99cd6cb7b2cbbea8db8df453866dc5e) chore(deps): raise `langchain-anthropic` minimum to 1.5.3 (#5120)
- [`c0afec5`](https://github.com/langchain-ai/deepagents/commit/c0afec5ab7e9860d1572002c1f689f95dd15cf8e) feat(code): add Claude Opus 5 support (#5049)
- [`b66b4e9`](https://github.com/langchain-ai/deepagents/commit/b66b4e970bb4978948b8febbd18a2a30e59b0029) chore(deps): bump pyasn1 from 0.6.3 to 0.6.4 in /libs/partners/vercel (#4983)
- [`982611d`](https://github.com/langchain-ai/deepagents/commit/982611d7f9e0669917dad8b47badf17b22240fdb) chore(code): remove redundant goal command footer (#4937)
- [`18679a1`](https://github.com/langchain-ai/deepagents/commit/18679a1a88a3f10777bf2f45593cb104e822d49f) release(deepagents-code): 0.1.42 (#4793)
- [`44daa24`](https://github.com/langchain-ai/deepagents/commit/44daa243bb960f9c1ecb1b5ee734153e9430b0da) chore(repo): raise LangChain integration minimums (#4601)
- [`0390043`](https://github.com/langchain-ai/deepagents/commit/0390043a32136f34d787355f0f87a50a6f686a06) release(deepagents-code): 0.1.31 (#4424)
- [`8e8680b`](https://github.com/langchain-ai/deepagents/commit/8e8680bd01d717b3e639ad205eeb461e52998732) build(deps): refresh dependency minimums (#4331)
- [`7e70065`](https://github.com/langchain-ai/deepagents/commit/7e70065200007896336f38fe905803e6763e8f85) release(deepagents): 0.6.12 (#4088)
- [`c183c96`](https://github.com/langchain-ai/deepagents/commit/c183c964160ffdfebdd0e7ec38e03c3e1bb72f7b) chore(deps): bump langsmith from 0.8.18 to 0.9.0 in /libs/partners/vercel (#4142)
- [`68450d9`](https://github.com/langchain-ai/deepagents/commit/68450d9076082897abb4f8ac77d6180ab563b483) chore(deps): bump langsmith from 0.8.15 to 0.8.18 in /libs/partners/vercel (#4111)
- [`8605560`](https://github.com/langchain-ai/deepagents/commit/8605560f45a33f3bd25cffc529ca3854d4f15fef) chore(deps): bump vcrpy from 8.1.1 to 8.2.1 in /libs/partners/vercel (#4113)
- [`d3cecf9`](https://github.com/langchain-ai/deepagents/commit/d3cecf9bd2c226ae4891157dbb2ce45b53e29c53) chore(deps): bump lockfiles (#4090)
- [`f99f712`](https://github.com/langchain-ai/deepagents/commit/f99f71259786384098a939a34868f46d47122695) release(deepagents): 0.6.11 (#4052)
- [`fa2685a`](https://github.com/langchain-ai/deepagents/commit/fa2685a6114f04bccc0137d6672be36d3cd41f36) release(deepagents): 0.6.10 (#3944)

</details>

## langchain-runloop==0.0.7: langchain-runloop==0.0.7

**Published**: 2026-07-29

### Bug Fixes

* Require deepagents 0.7.x ([#5149](https://github.com/langchain-ai/deepagents/issues/5149)) ([ea09982](https://github.com/langchain-ai/deepagents/commit/ea099822621cc92e4e10e6dc254f474f607213db))

---

Internal maintainers: @hntrl, @mdrxy

Released by: @mdrxy

<details>
<summary>Git log since langchain-runloop==0.0.6</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`d98fe32`](https://github.com/langchain-ai/deepagents/commit/d98fe329c8ad0459b9eaf0b5a3ab5169453298e2) release(langchain-runloop): 0.0.7 (#5152)
- [`ea09982`](https://github.com/langchain-ai/deepagents/commit/ea099822621cc92e4e10e6dc254f474f607213db) fix(runloop): require deepagents 0.7.x (#5149)
- [`77f0d9a`](https://github.com/langchain-ai/deepagents/commit/77f0d9a362e49b595b7d04d87ee66d01f61a6ee8) release(deepagents): 0.7.0 (#4297)
- [`fef1ff3`](https://github.com/langchain-ai/deepagents/commit/fef1ff33e99cd6cb7b2cbbea8db8df453866dc5e) chore(deps): raise `langchain-anthropic` minimum to 1.5.3 (#5120)
- [`c0afec5`](https://github.com/langchain-ai/deepagents/commit/c0afec5ab7e9860d1572002c1f689f95dd15cf8e) feat(code): add Claude Opus 5 support (#5049)
- [`4b2ea36`](https://github.com/langchain-ai/deepagents/commit/4b2ea36fbfceb6151f3b092e7c88da6052712a5d) chore(deps): bump pyasn1 from 0.6.3 to 0.6.4 in /libs/partners/runloop (#4984)
- [`982611d`](https://github.com/langchain-ai/deepagents/commit/982611d7f9e0669917dad8b47badf17b22240fdb) chore(code): remove redundant goal command footer (#4937)
- [`18679a1`](https://github.com/langchain-ai/deepagents/commit/18679a1a88a3f10777bf2f45593cb104e822d49f) release(deepagents-code): 0.1.42 (#4793)
- [`44daa24`](https://github.com/langchain-ai/deepagents/commit/44daa243bb960f9c1ecb1b5ee734153e9430b0da) chore(repo): raise LangChain integration minimums (#4601)
- [`0390043`](https://github.com/langchain-ai/deepagents/commit/0390043a32136f34d787355f0f87a50a6f686a06) release(deepagents-code): 0.1.31 (#4424)
- [`8e8680b`](https://github.com/langchain-ai/deepagents/commit/8e8680bd01d717b3e639ad205eeb461e52998732) build(deps): refresh dependency minimums (#4331)
- [`5038435`](https://github.com/langchain-ai/deepagents/commit/5038435adf5b97931aa4025ac6503e06c7d68fed) chore(deps): bump langgraph-checkpoint from 4.1.0 to 4.1.1 in /libs/partners/runloop (#4269)
- [`7e70065`](https://github.com/langchain-ai/deepagents/commit/7e70065200007896336f38fe905803e6763e8f85) release(deepagents): 0.6.12 (#4088)
- [`1427c36`](https://github.com/langchain-ai/deepagents/commit/1427c361e8059ef5873afaa4fac4d71cd2b8a073) chore(deps): bump langsmith from 0.8.18 to 0.9.0 in /libs/partners/runloop (#4143)
- [`9ecefa4`](https://github.com/langchain-ai/deepagents/commit/9ecefa468e093998e883d076b88c5930599a69af) chore(deps): bump vcrpy from 8.1.1 to 8.2.1 in /libs/partners/runloop (#4114)
- [`dd38869`](https://github.com/langchain-ai/deepagents/commit/dd3886979cff5f3732ae7e891c380938094cbb18) chore(deps): bump langsmith from 0.8.11 to 0.8.18 in /libs/partners/runloop (#4115)
- [`d3cecf9`](https://github.com/langchain-ai/deepagents/commit/d3cecf9bd2c226ae4891157dbb2ce45b53e29c53) chore(deps): bump lockfiles (#4090)
- [`f99f712`](https://github.com/langchain-ai/deepagents/commit/f99f71259786384098a939a34868f46d47122695) release(deepagents): 0.6.11 (#4052)
- [`f12209f`](https://github.com/langchain-ai/deepagents/commit/f12209fa8fc9d29ed7ead9d830025816a7ea7e63) chore(deps): bump cryptography from 46.0.7 to 48.0.1 in /libs/partners/runloop (#4006)
- [`fa2685a`](https://github.com/langchain-ai/deepagents/commit/fa2685a6114f04bccc0137d6672be36d3cd41f36) release(deepagents): 0.6.10 (#3944)
- [`62d4fd7`](https://github.com/langchain-ai/deepagents/commit/62d4fd72f4b82bad6ae6f3e3cbe68bdc35b1ea1d) release(deepagents): 0.6.9 (#3744)
- [`f2d955e`](https://github.com/langchain-ai/deepagents/commit/f2d955ebc5bcb2f0cda719989cc9fe8b161573a4) docs(repo): refresh `README.md` resources and install commands (#3933)
- [`505faa0`](https://github.com/langchain-ai/deepagents/commit/505faa070f13e5dba69c12399eda1eeb9be6a557) build(deps): raise LangChain and LangGraph minimums (#3931)
- [`7c9eb00`](https://github.com/langchain-ai/deepagents/commit/7c9eb0090880d0beeb494c7679573640c82132b2) chore(sdk): use public agent state exports (#3904)
- [`10edc06`](https://github.com/langchain-ai/deepagents/commit/10edc061ccbefa4921de8677ed222801592c5ad4) chore(sdk): bump min deps (#3870)
- [`7d887bd`](https://github.com/langchain-ai/deepagents/commit/7d887bd71fbf13076bdf8fed51b63232a6fd65a4) chore(sdk): update summarization trigger compatibility (#3828)
- [`969cbe8`](https://github.com/langchain-ai/deepagents/commit/969cbe8709110eed334b25e50530510317954cfd) chore(deps): update lint and typing dependency floors (#3818)

</details>

## langchain-quickjs==0.3.5: langchain-quickjs==0.3.5

**Published**: 2026-07-29

### Bug Fixes

* Require deepagents 0.7.x ([#5151](https://github.com/langchain-ai/deepagents/issues/5151)) ([4cb7e27](https://github.com/langchain-ai/deepagents/commit/4cb7e27abbca6f1bb1d75861b6a1a76e7011ae31))

---

Internal maintainers: @mdrxy

Released by: @mdrxy

<details>
<summary>Git log since langchain-quickjs==0.3.4</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`a559f72`](https://github.com/langchain-ai/deepagents/commit/a559f720d94eb8e7d14f96dbdad816dc9f7e3636) release(langchain-quickjs): 0.3.5 (#5156)
- [`4cb7e27`](https://github.com/langchain-ai/deepagents/commit/4cb7e27abbca6f1bb1d75861b6a1a76e7011ae31) fix(quickjs): require deepagents 0.7.x (#5151)
- [`77f0d9a`](https://github.com/langchain-ai/deepagents/commit/77f0d9a362e49b595b7d04d87ee66d01f61a6ee8) release(deepagents): 0.7.0 (#4297)
- [`fef1ff3`](https://github.com/langchain-ai/deepagents/commit/fef1ff33e99cd6cb7b2cbbea8db8df453866dc5e) chore(deps): raise `langchain-anthropic` minimum to 1.5.3 (#5120)

</details>

## langchain-modal==0.0.6: langchain-modal==0.0.6

**Published**: 2026-07-29

### Bug Fixes

* Require deepagents 0.7.x ([#5148](https://github.com/langchain-ai/deepagents/issues/5148)) ([ad6d1a3](https://github.com/langchain-ai/deepagents/commit/ad6d1a3547b5c0f9efc40ee5591c1a54b99652f4))

---

Internal maintainers: @hntrl, @mdrxy

Released by: @mdrxy

<details>
<summary>Git log since langchain-modal==0.0.5</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`70f36a5`](https://github.com/langchain-ai/deepagents/commit/70f36a5163e78808dca000bf1aefae076140b126) release(langchain-modal): 0.0.6 (#5154)
- [`ad6d1a3`](https://github.com/langchain-ai/deepagents/commit/ad6d1a3547b5c0f9efc40ee5591c1a54b99652f4) fix(modal): require deepagents 0.7.x (#5148)
- [`77f0d9a`](https://github.com/langchain-ai/deepagents/commit/77f0d9a362e49b595b7d04d87ee66d01f61a6ee8) release(deepagents): 0.7.0 (#4297)
- [`fef1ff3`](https://github.com/langchain-ai/deepagents/commit/fef1ff33e99cd6cb7b2cbbea8db8df453866dc5e) chore(deps): raise `langchain-anthropic` minimum to 1.5.3 (#5120)
- [`c0afec5`](https://github.com/langchain-ai/deepagents/commit/c0afec5ab7e9860d1572002c1f689f95dd15cf8e) feat(code): add Claude Opus 5 support (#5049)
- [`70c285f`](https://github.com/langchain-ai/deepagents/commit/70c285f1dedc788acf852449d5cf81fcdcdded63) chore(deps): bump pyasn1 from 0.6.3 to 0.6.4 in /libs/partners/modal (#4986)
- [`982611d`](https://github.com/langchain-ai/deepagents/commit/982611d7f9e0669917dad8b47badf17b22240fdb) chore(code): remove redundant goal command footer (#4937)
- [`18679a1`](https://github.com/langchain-ai/deepagents/commit/18679a1a88a3f10777bf2f45593cb104e822d49f) release(deepagents-code): 0.1.42 (#4793)
- [`44daa24`](https://github.com/langchain-ai/deepagents/commit/44daa243bb960f9c1ecb1b5ee734153e9430b0da) chore(repo): raise LangChain integration minimums (#4601)
- [`0390043`](https://github.com/langchain-ai/deepagents/commit/0390043a32136f34d787355f0f87a50a6f686a06) release(deepagents-code): 0.1.31 (#4424)
- [`8e8680b`](https://github.com/langchain-ai/deepagents/commit/8e8680bd01d717b3e639ad205eeb461e52998732) build(deps): refresh dependency minimums (#4331)
- [`16fe908`](https://github.com/langchain-ai/deepagents/commit/16fe9086233af75075028ea9f9576aa801f99164) chore(deps): bump langgraph-checkpoint from 4.1.0 to 4.1.1 in /libs/partners/modal (#4271)
- [`7e70065`](https://github.com/langchain-ai/deepagents/commit/7e70065200007896336f38fe905803e6763e8f85) release(deepagents): 0.6.12 (#4088)
- [`0049224`](https://github.com/langchain-ai/deepagents/commit/004922495d35f17681048b56f528730ccb83460a) chore(deps): bump vcrpy from 8.1.1 to 8.2.1 in /libs/partners/modal (#4117)
- [`3b28d6b`](https://github.com/langchain-ai/deepagents/commit/3b28d6b6b2fcfe9884cacb0f1b0702ad24a9ad97) chore(deps): bump langsmith from 0.8.11 to 0.8.18 in /libs/partners/modal (#4118)
- [`d3cecf9`](https://github.com/langchain-ai/deepagents/commit/d3cecf9bd2c226ae4891157dbb2ce45b53e29c53) chore(deps): bump lockfiles (#4090)
- [`f99f712`](https://github.com/langchain-ai/deepagents/commit/f99f71259786384098a939a34868f46d47122695) release(deepagents): 0.6.11 (#4052)
- [`725d498`](https://github.com/langchain-ai/deepagents/commit/725d49820c4d38e0942b163f21e6ef37c14f57ce) chore(deps): bump cryptography from 46.0.7 to 48.0.1 in /libs/partners/modal (#4009)
- [`86129ad`](https://github.com/langchain-ai/deepagents/commit/86129ad9d5f58a6a41ae0e6f7a749e1915332c59) chore(deps): bump aiohttp from 3.14.0 to 3.14.1 in /libs/partners/modal (#4008)
- [`fa2685a`](https://github.com/langchain-ai/deepagents/commit/fa2685a6114f04bccc0137d6672be36d3cd41f36) release(deepagents): 0.6.10 (#3944)
- [`62d4fd7`](https://github.com/langchain-ai/deepagents/commit/62d4fd72f4b82bad6ae6f3e3cbe68bdc35b1ea1d) release(deepagents): 0.6.9 (#3744)
- [`f2d955e`](https://github.com/langchain-ai/deepagents/commit/f2d955ebc5bcb2f0cda719989cc9fe8b161573a4) docs(repo): refresh `README.md` resources and install commands (#3933)
- [`505faa0`](https://github.com/langchain-ai/deepagents/commit/505faa070f13e5dba69c12399eda1eeb9be6a557) build(deps): raise LangChain and LangGraph minimums (#3931)
- [`7c9eb00`](https://github.com/langchain-ai/deepagents/commit/7c9eb0090880d0beeb494c7679573640c82132b2) chore(sdk): use public agent state exports (#3904)
- [`10edc06`](https://github.com/langchain-ai/deepagents/commit/10edc061ccbefa4921de8677ed222801592c5ad4) chore(sdk): bump min deps (#3870)
- [`7d887bd`](https://github.com/langchain-ai/deepagents/commit/7d887bd71fbf13076bdf8fed51b63232a6fd65a4) chore(sdk): update summarization trigger compatibility (#3828)
- [`969cbe8`](https://github.com/langchain-ai/deepagents/commit/969cbe8709110eed334b25e50530510317954cfd) chore(deps): update lint and typing dependency floors (#3818)

</details>

## langchain-daytona==0.0.8: langchain-daytona==0.0.8

**Published**: 2026-07-29

### Bug Fixes

* Require deepagents 0.7.x ([#5147](https://github.com/langchain-ai/deepagents/issues/5147)) ([e326721](https://github.com/langchain-ai/deepagents/commit/e326721d2de3bdcb01843f4bd1ef2165aefd9a7f))

---

Internal maintainers: @hntrl, @mdrxy

Released by: @mdrxy

<details>
<summary>Git log since langchain-daytona==0.0.7</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`2f6f4be`](https://github.com/langchain-ai/deepagents/commit/2f6f4bee113806bf12d21f2da75a041baf41c5b8) release(langchain-daytona): 0.0.8 (#5153)
- [`e326721`](https://github.com/langchain-ai/deepagents/commit/e326721d2de3bdcb01843f4bd1ef2165aefd9a7f) fix(daytona): require deepagents 0.7.x (#5147)
- [`77f0d9a`](https://github.com/langchain-ai/deepagents/commit/77f0d9a362e49b595b7d04d87ee66d01f61a6ee8) release(deepagents): 0.7.0 (#4297)
- [`fef1ff3`](https://github.com/langchain-ai/deepagents/commit/fef1ff33e99cd6cb7b2cbbea8db8df453866dc5e) chore(deps): raise `langchain-anthropic` minimum to 1.5.3 (#5120)
- [`c0afec5`](https://github.com/langchain-ai/deepagents/commit/c0afec5ab7e9860d1572002c1f689f95dd15cf8e) feat(code): add Claude Opus 5 support (#5049)
- [`fb79dd7`](https://github.com/langchain-ai/deepagents/commit/fb79dd740a9d2f54c6312e5de789a217c63b6a9c) chore(deps): bump pyasn1 from 0.6.3 to 0.6.4 in /libs/partners/daytona (#4987)
- [`982611d`](https://github.com/langchain-ai/deepagents/commit/982611d7f9e0669917dad8b47badf17b22240fdb) chore(code): remove redundant goal command footer (#4937)
- [`18679a1`](https://github.com/langchain-ai/deepagents/commit/18679a1a88a3f10777bf2f45593cb104e822d49f) release(deepagents-code): 0.1.42 (#4793)
- [`44daa24`](https://github.com/langchain-ai/deepagents/commit/44daa243bb960f9c1ecb1b5ee734153e9430b0da) chore(repo): raise LangChain integration minimums (#4601)
- [`0390043`](https://github.com/langchain-ai/deepagents/commit/0390043a32136f34d787355f0f87a50a6f686a06) release(deepagents-code): 0.1.31 (#4424)
- [`8e8680b`](https://github.com/langchain-ai/deepagents/commit/8e8680bd01d717b3e639ad205eeb461e52998732) build(deps): refresh dependency minimums (#4331)
- [`2cc043d`](https://github.com/langchain-ai/deepagents/commit/2cc043d695ae889683d82c9682b3251f86356ab5) chore(deps): bump langgraph-checkpoint from 4.1.0 to 4.1.1 in /libs/partners/daytona (#4272)
- [`7e70065`](https://github.com/langchain-ai/deepagents/commit/7e70065200007896336f38fe905803e6763e8f85) release(deepagents): 0.6.12 (#4088)
- [`91b77e1`](https://github.com/langchain-ai/deepagents/commit/91b77e1bf61cd4ef9cca0f1fc6adeb10acbd337a) chore(deps): bump langsmith from 0.8.11 to 0.8.18 in /libs/partners/daytona (#4119)
- [`ce36f65`](https://github.com/langchain-ai/deepagents/commit/ce36f6536c04e3e94ef463a3fb0f120645663ce6) chore(deps): bump vcrpy from 8.1.1 to 8.2.1 in /libs/partners/daytona (#4120)
- [`d3cecf9`](https://github.com/langchain-ai/deepagents/commit/d3cecf9bd2c226ae4891157dbb2ce45b53e29c53) chore(deps): bump lockfiles (#4090)
- [`f99f712`](https://github.com/langchain-ai/deepagents/commit/f99f71259786384098a939a34868f46d47122695) release(deepagents): 0.6.11 (#4052)
- [`fc9f480`](https://github.com/langchain-ai/deepagents/commit/fc9f4807c77514e326c66c5fe1f6e1460fee5857) chore(deps): bump cryptography from 46.0.7 to 48.0.1 in /libs/partners/daytona (#4011)
- [`39620a1`](https://github.com/langchain-ai/deepagents/commit/39620a1a15d34aa04047a95ea76e47617381cabf) chore(deps): bump aiohttp from 3.14.0 to 3.14.1 in /libs/partners/daytona (#4010)
- [`fa2685a`](https://github.com/langchain-ai/deepagents/commit/fa2685a6114f04bccc0137d6672be36d3cd41f36) release(deepagents): 0.6.10 (#3944)
- [`62d4fd7`](https://github.com/langchain-ai/deepagents/commit/62d4fd72f4b82bad6ae6f3e3cbe68bdc35b1ea1d) release(deepagents): 0.6.9 (#3744)
- [`f2d955e`](https://github.com/langchain-ai/deepagents/commit/f2d955ebc5bcb2f0cda719989cc9fe8b161573a4) docs(repo): refresh `README.md` resources and install commands (#3933)
- [`505faa0`](https://github.com/langchain-ai/deepagents/commit/505faa070f13e5dba69c12399eda1eeb9be6a557) build(deps): raise LangChain and LangGraph minimums (#3931)
- [`7c9eb00`](https://github.com/langchain-ai/deepagents/commit/7c9eb0090880d0beeb494c7679573640c82132b2) chore(sdk): use public agent state exports (#3904)
- [`10edc06`](https://github.com/langchain-ai/deepagents/commit/10edc061ccbefa4921de8677ed222801592c5ad4) chore(sdk): bump min deps (#3870)
- [`7d887bd`](https://github.com/langchain-ai/deepagents/commit/7d887bd71fbf13076bdf8fed51b63232a6fd65a4) chore(sdk): update summarization trigger compatibility (#3828)
- [`969cbe8`](https://github.com/langchain-ai/deepagents/commit/969cbe8709110eed334b25e50530510317954cfd) chore(deps): update lint and typing dependency floors (#3818)
- [`81287c2`](https://github.com/langchain-ai/deepagents/commit/81287c29c47e20328d67e8765a3de9c711507e1b) chore(deps): bump aiohttp from 3.13.5 to 3.14.0 in /libs/partners/daytona (#3748)

</details>

## deepagents==0.7.0: deepagents==0.7.0

**Published**: 2026-07-29

See [the docs](https://docs.langchain.com/oss/python/releases/changelog#deepagents-v0-7-0) for curated release notes.

### ⚠ BREAKING CHANGES

* `create_deep_agent` no longer includes `TodoListMiddleware` by default, the `write_todos` tool, `todos` state channel, and todo-planning prompt are now absent. Pass `middleware=[TodoListMiddleware()]` to restore them on the main agent; add it to each `SubAgent`'s middleware to restore them there. ([#4929](https://github.com/langchain-ai/deepagents/issues/4929)) ([9340518](https://github.com/langchain-ai/deepagents/commit/9340518a26c4287f9ad0c543edc9b69106c15154))
* Default agent prompts are now lean: the authored base prompt is empty, and tool-usage prose that duplicates tool schemas is trimmed. `BASE_AGENT_PROMPT` is deprecated (removal in `deepagents==0.9.0`) but remains importable and still returns the previous authored prompt verbatim; pass it as `create_deep_agent(system_prompt=BASE_AGENT_PROMPT)` to restore the old behavior. ([#4859](https://github.com/langchain-ai/deepagents/issues/4859)) ([#4979](https://github.com/langchain-ai/deepagents/issues/4979)) ([a8d1b32](https://github.com/langchain-ai/deepagents/commit/a8d1b32aa4136d0498ba7b48367c8001ac462bd0)) ([d9f54fc](https://github.com/langchain-ai/deepagents/commit/d9f54fc09925171c6c0a933abd33507f85e8851c))
* The built-in tool-usage prompt constants `TASK_SYSTEM_PROMPT`, `ASYNC_TASK_SYSTEM_PROMPT`, `SUMMARIZATION_SYSTEM_PROMPT`, `FILESYSTEM_SYSTEM_PROMPT`, and `EXECUTION_SYSTEM_PROMPT` are removed, and the `system_prompt` default on `SubAgentMiddleware`, `AsyncSubAgentMiddleware`, `SummarizationToolMiddleware`, and `create_summarization_tool_middleware` is now `None`, which injects no prose. Pass your own string to restore prompt text. ([#4859](https://github.com/langchain-ai/deepagents/issues/4859)) ([a8d1b32](https://github.com/langchain-ai/deepagents/commit/a8d1b32aa4136d0498ba7b48367c8001ac462bd0))
* `FilesystemBackend` and `LocalShellBackend` now default to `virtual_mode=True`. Filesystem paths are anchored under `root_dir`, `..` traversal is rejected, and paths resolving outside `root_dir` raise `ValueError`. Previously an unspecified `virtual_mode` emitted a deprecation warning and fell back to `False`, where absolute host paths were used as-is and `..` could escape `root_dir`. Pass `virtual_mode=False` explicitly to restore the old filesystem behavior. ([#4541](https://github.com/langchain-ai/deepagents/issues/4541)) ([540a0fa](https://github.com/langchain-ai/deepagents/commit/540a0fa7eb9a88d82413cf10a5cb5c807d491385))
* Agents now see a destructive, recursive `delete` filesystem tool whenever the backend supports it, and filesystem permissions classify `delete` as a write operation — so an existing rule allowing writes to a path also authorizes recursively deleting that subtree unless a narrower deny or interrupt rule covers the target. Because recursive deletes affect descendants, deny and interrupt checks use bulk path overlap instead of exact-path matching. To keep the previous behavior, add a deny or interrupt rule, or omit `delete` from `FilesystemMiddleware(tools=...)`. Missing paths return a not-found error, `CompositeBackend` reports an unsupported-operation error when a routed sub-backend cannot delete, and the tool is hidden from the model entirely when the backend itself does not implement it. ([#3659](https://github.com/langchain-ai/deepagents/issues/3659)) ([#3691](https://github.com/langchain-ai/deepagents/issues/3691)) ([#3765](https://github.com/langchain-ai/deepagents/issues/3765)) ([#3851](https://github.com/langchain-ai/deepagents/issues/3851)) ([f2a21ec](https://github.com/langchain-ai/deepagents/commit/f2a21ec1606c2560bd2fd5765409a05c2a44edee))
* `write_file` can now create a file if it is missing and replaces it entirely if it already exists, instead of returning a file-exists error. The `write_file` tool description no longer requires reading the file first. There is no "create-only" compatibility mode. Workflows, prompts, tests, or guardrails that relied on the file-exists error to force `edit_file` usage or to protect existing content must omit `write_file`, add explicit permission or interrupt rules, or use `edit_file` where preserving existing content matters. ([#4109](https://github.com/langchain-ai/deepagents/issues/4109)) ([2506fcc](https://github.com/langchain-ai/deepagents/commit/2506fccfac0e09b656d5e2fefe23162f1c762331))
* Removed deprecated backend compatibility shims. Callers must pass concrete `BackendProtocol` instances (not factories), configure `StoreBackend` with an explicit `namespace`, and use the current `ls` / `glob` / `grep` / `ReadResult` APIs. ([#4541](https://github.com/langchain-ai/deepagents/issues/4541)) ([540a0fa](https://github.com/langchain-ai/deepagents/commit/540a0fa7eb9a88d82413cf10a5cb5c807d491385))
* The deprecated `files_update` attribute and constructor keyword are removed from `WriteResult` and `EditResult`. Custom backends must stop passing `files_update=`, and callers must stop reading `result.files_update`; state writes are emitted directly by `StateBackend`. ([#4541](https://github.com/langchain-ai/deepagents/issues/4541)) ([540a0fa](https://github.com/langchain-ai/deepagents/commit/540a0fa7eb9a88d82413cf10a5cb5c807d491385))
* Removed the deprecated `BackendProtocol` methods `ls_info`, `als_info`, `glob_info`, `aglob_info`, `grep_raw`, and `agrep_raw`. Use `ls` / `glob` / `grep` and their async counterparts. ([#4541](https://github.com/langchain-ai/deepagents/issues/4541)) ([540a0fa](https://github.com/langchain-ai/deepagents/commit/540a0fa7eb9a88d82413cf10a5cb5c807d491385))
* `SummarizationMiddleware(history_path_prefix=...)` was removed and now raises `TypeError`. Configure `CompositeBackend(artifacts_root=...)` instead. ([#4541](https://github.com/langchain-ai/deepagents/issues/4541)) ([540a0fa](https://github.com/langchain-ai/deepagents/commit/540a0fa7eb9a88d82413cf10a5cb5c807d491385))
* Agent-facing `ls` and `glob` tool output now renders empty results as `No files found` instead of `[]`; direct backend APIs continue to return structured empty `LsResult` and `GlobResult` values. Callers that parse tool output should update those checks. ([#3709](https://github.com/langchain-ai/deepagents/issues/3709)) ([efafd1e](https://github.com/langchain-ai/deepagents/commit/efafd1e070aeae8901ee3123c7fcbf1815a33c4f))
* `read_file` no longer renders raw text with a fixed-width `cat -n`-style line-number gutter and tab separator. Line and continuation markers are dynamically aligned and separated from source content by two spaces, and the `LINE_NUMBER_WIDTH` constant is removed from `deepagents.backends.utils` and `deepagents.middleware.filesystem`. Callers that parse raw tool output should update those parsers. ([#4561](https://github.com/langchain-ai/deepagents/issues/4561)) ([cf057b4](https://github.com/langchain-ai/deepagents/commit/cf057b4bcdb77ad67014f7dabe71e71f2366c95e))

### Features

* Custom middleware passed to `create_deep_agent(..., middleware=[...])` can replace a default middleware instance when `.name` matches, so defaults such as `SummarizationMiddleware` can be overridden without also excluding the built-in instance. ([#4251](https://github.com/langchain-ai/deepagents/issues/4251)) ([90c8472](https://github.com/langchain-ai/deepagents/commit/90c8472ae226394a186bf2075459645c2056db7d))
* `FilesystemMiddleware(tools=[...])` accepts a keyword-only allowlist of built-in filesystem tools, typed by the newly exported `FsToolName` literal (`"ls"`, `"read_file"`, `"write_file"`, `"edit_file"`, `"delete"`, `"glob"`, `"grep"`, `"execute"`); pass `"all"` or omit the argument to keep every tool. A list must include `"read_file"` or the constructor raises `ValueError`. Omitted built-in tools are non-executable, and custom user tools are unaffected. ([#4325](https://github.com/langchain-ai/deepagents/issues/4325)) ([#4698](https://github.com/langchain-ai/deepagents/issues/4698)) ([704a70d](https://github.com/langchain-ai/deepagents/commit/704a70dddbd59b8c6abf658a4211c76bce1445f0)) ([9709525](https://github.com/langchain-ai/deepagents/commit/970952550e8f53cd89a64a4ee98969ce757693ff))
* Shorten LLM-facing descriptions for the `task` tool and filesystem tools (`read_file`, `grep`, `edit_file`, `glob`, `execute`). ([#5009](https://github.com/langchain-ai/deepagents/issues/5009)) ([761f5f0](https://github.com/langchain-ai/deepagents/commit/761f5f0882dee186f2700f3c903829a5542626fe))
* `GrepResult` and `GlobResult` now carry a `truncated` flag so supporting backends can return valid partial results when a match cap or backend deadline is reached; agent-facing tool output adds a note telling the model to narrow the search. `FilesystemBackend` returns partial `grep` and `glob` results on its backend timeout rather than erroring, while other backend or middleware timeouts may still return errors. Its `glob` also gains brace expansion such as `*.{py,md}` (already supported by the state and store backends). ([#4063](https://github.com/langchain-ai/deepagents/issues/4063)) ([ef591e7](https://github.com/langchain-ai/deepagents/commit/ef591e7a86b13bbdcb0fdedd45a8f1fe33573839))
* The agent-facing `grep` match cap is configurable: `FilesystemMiddleware(grep_max_count=...)` sets the default (`1000`; `None` disables it) and the model can override it per call through the tool's new `max_count` argument. `grep` / `agrep` on `BackendProtocol` and all built-in backends accept a keyword-only `max_count`. Local ripgrep output is streamed and terminated once the cap is reached. Direct `FilesystemBackend.grep()` callers can request surrounding lines with keyword-only `context_lines`. ([#4570](https://github.com/langchain-ai/deepagents/issues/4570)) ([#4706](https://github.com/langchain-ai/deepagents/issues/4706)) ([8e86f5e](https://github.com/langchain-ai/deepagents/commit/8e86f5ecc8908762a2c748880287f190dde70600)) ([65230df](https://github.com/langchain-ai/deepagents/commit/65230df6f91d2bbe5f83d4d938da6bfac52363a1))
* Paginated built-in `read_file` responses report the returned source-line range and next `offset`; total and remaining line counts are included when the backend knows the file length. Resume offsets remain safe when sandbox or middleware limits shorten the visible page. ([#4540](https://github.com/langchain-ai/deepagents/issues/4540)) ([8321194](https://github.com/langchain-ai/deepagents/commit/83211940a2cdf4c52ac21a6cde8647716a998504))
* Optional video frame extraction for `read_file`, enabled by the new `deepagents[video]` extra. Video files are sampled into JPEG frames, with `offset` and `limit` interpreted as seconds. Without the extra, existing generic video/file content-block behavior remains. ([#4094](https://github.com/langchain-ai/deepagents/issues/4094)) ([b927147](https://github.com/langchain-ai/deepagents/commit/b927147d026749c6c790bb06c9853515dabf579c))
* `FilesystemMiddleware` can capture oversized `execute` tool output directly inside the sandbox artifact path on compatible, opted-in `BaseSandbox` implementations to reduce round trips; `LangSmithSandbox` opts in by default. ([#4230](https://github.com/langchain-ai/deepagents/issues/4230)) ([02f5bd7](https://github.com/langchain-ai/deepagents/commit/02f5bd7bc02f2baaf5a1eefce7d686ba62493647))
* Automatically enable Fireworks prompt-cache session affinity when a compatible `langchain-fireworks` installation is available. ([#4598](https://github.com/langchain-ai/deepagents/issues/4598)) ([5d878bf](https://github.com/langchain-ai/deepagents/commit/5d878bf1341afc3f96398733b7ef18eec4b66139))
* Add a built-in NVIDIA Nemotron 3 Ultra harness profile and NVIDIA NIM app-origin attribution. ([#4192](https://github.com/langchain-ai/deepagents/issues/4192)) ([#4455](https://github.com/langchain-ai/deepagents/issues/4455)) ([d5a60ec](https://github.com/langchain-ai/deepagents/commit/d5a60ece7379c37c81edcef2cd6c2811ddc90c9a)) ([4cb4749](https://github.com/langchain-ai/deepagents/commit/4cb47491b024991322b7c24062c58cbcdc26a727))
* `RubricMiddleware` now accepts any positive `max_iterations` cap instead of enforcing a hard upper bound. ([#4405](https://github.com/langchain-ai/deepagents/issues/4405)) ([d6692a7](https://github.com/langchain-ai/deepagents/commit/d6692a7c713490f170b17510d613e02ee37574ab))

### Bug Fixes

* Keep fields marked with `PrivateStateAttr`, including fields declared through `create_deep_agent(state_schema=...)`, out of subagent inputs and returned parent-state updates. ([#4587](https://github.com/langchain-ai/deepagents/issues/4587)) ([a4662c0](https://github.com/langchain-ai/deepagents/commit/a4662c07296c378045006c9f45ed1d12bd1a9da6))
* Preserve `ContextT` through the `create_deep_agent(..., middleware=[...])` type annotation so type checkers accept context-aware middleware when a matching `context_schema` is passed. ([#4055](https://github.com/langchain-ai/deepagents/issues/4055)) ([7be76c7](https://github.com/langchain-ai/deepagents/commit/7be76c752117e6e61dcdc931ea5147261fad6768))
* Accept YAML list values as well as comma-separated strings for skill `allowed-tools` frontmatter, and make skill truncation warnings actionable with field name, path, length, configured limit, and impact. ([#4140](https://github.com/langchain-ai/deepagents/issues/4140)) ([#4141](https://github.com/langchain-ai/deepagents/issues/4141)) ([d62534c](https://github.com/langchain-ai/deepagents/commit/d62534c86b87a91aca16c6bfb71209232d69a6ec)) ([2f5f5b8](https://github.com/langchain-ai/deepagents/commit/2f5f5b85793d944167a42e8d5b8e0a11bb1e3932))
* Align filesystem instructions with the tools that remain after allowlist and backend-capability filtering, so agents no longer reference hidden `grep`/`glob` tools or prohibit equivalent shell search when dedicated search tools are unavailable. ([#4920](https://github.com/langchain-ai/deepagents/issues/4920)) ([#4921](https://github.com/langchain-ai/deepagents/issues/4921)) ([d3650c7](https://github.com/langchain-ai/deepagents/commit/d3650c7b1f5ca968abd72345a511719d4ba65907)) ([b65cc00](https://github.com/langchain-ai/deepagents/commit/b65cc0076caab2e35c07598055b8b338a47e5e1a))
* Propagate default-backend failures from `CompositeBackend.ls("/")` and `CompositeBackend.als("/")` instead of returning successful route-only listings. ([#4925](https://github.com/langchain-ai/deepagents/issues/4925)) ([4c3b166](https://github.com/langchain-ai/deepagents/commit/4c3b1667035e3be6ae88cf8c431e0d6f143d2ff4))
* Correct `CompositeBackend.glob` / `CompositeBackend.aglob` routing so explicit default-backend paths such as `/tools` do not also return files from routed backends such as `/memories`. ([#4531](https://github.com/langchain-ai/deepagents/issues/4531)) ([cbdb0a7](https://github.com/langchain-ai/deepagents/commit/cbdb0a7df8cd4bbacff9ca7ac2e42232ef290c10))
* Propagate default- and routed-backend failures from root `CompositeBackend.glob(..., path=None)` / `aglob(..., path=None)` and `path="/"` searches instead of returning incomplete successful results. ([#4063](https://github.com/langchain-ai/deepagents/issues/4063)) ([ef591e7](https://github.com/langchain-ai/deepagents/commit/ef591e7a86b13bbdcb0fdedd45a8f1fe33573839))
* Constrain sandbox `glob` and slash-pattern `grep` searches to their declared search root by treating leading `/` as search-root-relative, rejecting `..` traversal segments, and filtering symlink-resolved matches outside the root. ([#4588](https://github.com/langchain-ai/deepagents/issues/4588)) ([c6c7213](https://github.com/langchain-ai/deepagents/commit/c6c72139b3ee7d090f657dd19ced59a9bbc41140))
* Unify `grep(..., glob=...)` include-glob semantics across filesystem and in-memory backends: basename patterns like `*.py` match at any depth, and slash-containing patterns like `src/**/*.py` match relative paths consistently. ([#3936](https://github.com/langchain-ai/deepagents/issues/3936)) ([feab6e0](https://github.com/langchain-ai/deepagents/commit/feab6e0b3762aa42fa458af16d0a3e8d04d8b075))
* Improve agent-facing `grep` descriptions and no-match hints to steer regex-looking patterns toward literal searches, route slash-containing sandbox include-globs correctly, and shorten default search timeouts so bad patterns and huge trees return guidance faster. ([#4168](https://github.com/langchain-ai/deepagents/issues/4168)) ([b1dbf5e](https://github.com/langchain-ai/deepagents/commit/b1dbf5e66ac81a9fd95abf6987ba058bb14a5edf))
* Align sandbox delete behavior with other backends by returning not-found errors for missing paths, and avoid over-blocking unrelated sibling deletes when deny rules use glob patterns. ([#4321](https://github.com/langchain-ai/deepagents/issues/4321)) ([d77496b](https://github.com/langchain-ai/deepagents/commit/d77496b969b9c59ce1c7c44e2085e5388e12c306))
* Improve rubric grader failure diagnostics with configured model, structured-output strategy, and integer HTTP status when available. ([#4938](https://github.com/langchain-ai/deepagents/issues/4938)) ([#4967](https://github.com/langchain-ai/deepagents/issues/4967)) ([f51d3a0](https://github.com/langchain-ai/deepagents/commit/f51d3a0145a0301317c36b0ae15263007dacd6f1)) ([bca70aa](https://github.com/langchain-ai/deepagents/commit/bca70aa1f30ee1472809894e2474a76e4ff2f8bd))
* Emit `max_iterations_reached` as the terminal `RubricMiddleware` status when the iteration cap is exhausted, instead of a final `needs_revision` event that will not loop. ([#4406](https://github.com/langchain-ai/deepagents/issues/4406)) ([a51c8d2](https://github.com/langchain-ai/deepagents/commit/a51c8d2b1723d143439a1466f5a49a52c442bdfc))
* Handle missing async subagent URLs consistently in `check_async_task` and `cancel_async_task`. ([#3967](https://github.com/langchain-ai/deepagents/issues/3967)) ([b0d92c0](https://github.com/langchain-ai/deepagents/commit/b0d92c0f38ca0aa037b56e26b2b0d322cdd07856))

### Performance Improvements

* Run LangSmith sandbox commands over the async client. ([#5061](https://github.com/langchain-ai/deepagents/issues/5061)) ([0d08747](https://github.com/langchain-ai/deepagents/commit/0d0874710615df2c89c3c30e56bfdabb73b44d99))

---

Thanks to our community contributors: @kavishkartha05 ([Twitter](https://x.com/kavishkartha31), [LinkedIn](https://linkedin.com/in/kavish-kartha)), @nv-kasikritc

Internal maintainers: @nick-hollon-lc, @imnishitha, @hntrl, @srimanthtangedipalli-eng, @ramon-langchain, @jkennedyvz, @ccurme, @davibinboi, @mdrxy

Released by: @mdrxy

<details>
<summary>Git log since deepagents==0.6.12</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`77f0d9a`](https://github.com/langchain-ai/deepagents/commit/77f0d9a362e49b595b7d04d87ee66d01f61a6ee8) release(deepagents): 0.7.0 (#4297)
- [`fef1ff3`](https://github.com/langchain-ai/deepagents/commit/fef1ff33e99cd6cb7b2cbbea8db8df453866dc5e) chore(deps): raise `langchain-anthropic` minimum to 1.5.3 (#5120)
- [`0d08747`](https://github.com/langchain-ai/deepagents/commit/0d0874710615df2c89c3c30e56bfdabb73b44d99) perf(langsmith-sandbox): run LangSmith sandbox commands over the async client (#5061)
- [`c0afec5`](https://github.com/langchain-ai/deepagents/commit/c0afec5ab7e9860d1572002c1f689f95dd15cf8e) feat(code): add Claude Opus 5 support (#5049)
- [`761f5f0`](https://github.com/langchain-ai/deepagents/commit/761f5f0882dee186f2700f3c903829a5542626fe) feat(sdk): trim built-in tool descriptions (#5009)
- [`d9f54fc`](https://github.com/langchain-ai/deepagents/commit/d9f54fc09925171c6c0a933abd33507f85e8851c) refactor(sdk,evals): deprecate legacy base agent prompt (#4979)
- [`9340518`](https://github.com/langchain-ai/deepagents/commit/9340518a26c4287f9ad0c543edc9b69106c15154) feat(sdk,code,quickjs)!: make the `ToDoListMiddleware` list opt-in (#4929)
- [`9a24baf`](https://github.com/langchain-ai/deepagents/commit/9a24bafcd245a197856641c844dc2ed51275a528) refactor(sdk): correct prompt docs and harden rubric diagnostics (#4989)
- [`d046427`](https://github.com/langchain-ai/deepagents/commit/d046427b536c8ddbce5d804d6ae8b860511a9b44) revert(code,sdk): revert `SystemPromptConfig` (#4969)
- [`f51d3a0`](https://github.com/langchain-ai/deepagents/commit/f51d3a0145a0301317c36b0ae15263007dacd6f1) fix(sdk): diagnose rubric grader structured output errors (#4938)
- [`bca70aa`](https://github.com/langchain-ai/deepagents/commit/bca70aa1f30ee1472809894e2474a76e4ff2f8bd) fix(sdk): include HTTP status in rubric grader errors (#4967)
- [`a8d1b32`](https://github.com/langchain-ai/deepagents/commit/a8d1b32aa4136d0498ba7b48367c8001ac462bd0) feat(sdk,code,quickjs): lean system prompt by default, restorable (#4859)
- [`540a0fa`](https://github.com/langchain-ai/deepagents/commit/540a0fa7eb9a88d82413cf10a5cb5c807d491385) refactor(sdk)!: remove deprecated backend compatibility shims (#4541)
- [`9f92d2f`](https://github.com/langchain-ai/deepagents/commit/9f92d2fcbc15df0558946e55ff66f374c7a5bc6c) build(sdk): raise dependency minimums (#4936)
- [`4c3b166`](https://github.com/langchain-ai/deepagents/commit/4c3b1667035e3be6ae88cf8c431e0d6f143d2ff4) fix(sdk): propagate root listing errors from `CompositeBackend` (#4925)
- [`d3650c7`](https://github.com/langchain-ai/deepagents/commit/d3650c7b1f5ca968abd72345a511719d4ba65907) fix(sdk): condition large-result guidance on visible tools (#4920)
- [`b65cc00`](https://github.com/langchain-ai/deepagents/commit/b65cc0076caab2e35c07598055b8b338a47e5e1a) fix(sdk): condition `execute` search guidance on visible tools (#4921)
- [`a8e4768`](https://github.com/langchain-ai/deepagents/commit/a8e476807cf1da54acecffd3614a0d64e4705e29) docs(sdk): explain backend file operation semantics (#4919)
- [`9e8d478`](https://github.com/langchain-ai/deepagents/commit/9e8d478e2d1a8c50d77a121a2ccd51b584e0841d) refactor(sdk): extract prompt caching helpers (#4892)
- [`8326177`](https://github.com/langchain-ai/deepagents/commit/8326177f280e4ae0fe10f8dfcd8c646507950bb6) chore(deps): bump pyasn1 from 0.6.3 to 0.6.4 in /libs/deepagents (#4897)
- [`8400b89`](https://github.com/langchain-ai/deepagents/commit/8400b89a0273e6bf21a712f104ef26e0ff0acd1c) chore(deps-dev): bump setuptools from 82.0.1 to 83.0.0 in /libs/evals (#4896)
- [`b708207`](https://github.com/langchain-ai/deepagents/commit/b70820724301065b7e5fcb2486faf17fa4fde53a) chore(deps-dev): bump pillow from 12.2.0 to 12.3.0 in /libs/evals (#4876)
- [`29d6046`](https://github.com/langchain-ai/deepagents/commit/29d6046998d47c5070799a0ff8395474579ae2e8) chore(deps): require `langchain-quickjs` 0.3.3 (#4802)
- [`9709525`](https://github.com/langchain-ai/deepagents/commit/970952550e8f53cd89a64a4ee98969ce757693ff) fix(sdk): remove excluded tools from `ToolNode` (#4698)
- [`e61156d`](https://github.com/langchain-ai/deepagents/commit/e61156d2b29f1f25a80aa8e2c10b479444accb6b) test(sdk): handle expected middleware warnings (#4717)
- [`5d878bf`](https://github.com/langchain-ai/deepagents/commit/5d878bf1341afc3f96398733b7ef18eec4b66139) feat(sdk): use `FireworksPromptCachingMiddleware` for session affinity (#4598)
- [`8e86f5e`](https://github.com/langchain-ai/deepagents/commit/8e86f5ecc8908762a2c748880287f190dde70600) feat(sdk): add total match cap and streaming to grep (#4570)
- [`cf057b4`](https://github.com/langchain-ai/deepagents/commit/cf057b4bcdb77ad67014f7dabe71e71f2366c95e) fix(sdk)!: disambiguate `read_file` line gutters (#4561)
- [`8321194`](https://github.com/langchain-ai/deepagents/commit/83211940a2cdf4c52ac21a6cde8647716a998504) feat(sdk): report remaining lines for paginated reads (#4540)
- [`65230df`](https://github.com/langchain-ai/deepagents/commit/65230df6f91d2bbe5f83d4d938da6bfac52363a1) feat(sdk): support surrounding lines in filesystem grep results (#4706)
- [`a4662c0`](https://github.com/langchain-ai/deepagents/commit/a4662c07296c378045006c9f45ed1d12bd1a9da6) fix(sdk): isolate private custom state from subagents (#4587)
- [`44daa24`](https://github.com/langchain-ai/deepagents/commit/44daa243bb960f9c1ecb1b5ee734153e9430b0da) chore(repo): raise LangChain integration minimums (#4601)
- [`c6c7213`](https://github.com/langchain-ai/deepagents/commit/c6c72139b3ee7d090f657dd19ced59a9bbc41140) fix(langsmith-sandbox): sandbox glob path boundary checks (#4588)
- [`d5a60ec`](https://github.com/langchain-ai/deepagents/commit/d5a60ece7379c37c81edcef2cd6c2811ddc90c9a) feat(sdk): add NVIDIA Nemotron 3 Ultra harness profile (#4192)
- [`cbdb0a7`](https://github.com/langchain-ai/deepagents/commit/cbdb0a7df8cd4bbacff9ca7ac2e42232ef290c10) fix(sdk): isolate composite glob paths (#4531)
- [`7be76c7`](https://github.com/langchain-ai/deepagents/commit/7be76c752117e6e61dcdc931ea5147261fad6768) fix(sdk): preserve `ContextT` on `create_deep_agent` `middleware` (#4055)
- [`d62534c`](https://github.com/langchain-ai/deepagents/commit/d62534c86b87a91aca16c6bfb71209232d69a6ec) fix(sdk): accept list format for skill `allowed-tools` (#4140)
- [`2f5f5b8`](https://github.com/langchain-ai/deepagents/commit/2f5f5b85793d944167a42e8d5b8e0a11bb1e3932) fix(sdk): make skill truncation warnings actionable (#4141)
- [`56c5a5e`](https://github.com/langchain-ai/deepagents/commit/56c5a5e0e64cabe5fbe27308d3ddfd8a8fd9eb22) feat(sdk): improve system prompt configurability (#4437)
- [`4cb4749`](https://github.com/langchain-ai/deepagents/commit/4cb47491b024991322b7c24062c58cbcdc26a727) feat(sdk): add NVIDIA NIM app-origin attribution (#4455)
- [`b1dbf5e`](https://github.com/langchain-ai/deepagents/commit/b1dbf5e66ac81a9fd95abf6987ba058bb14a5edf) fix(sdk): improve grep literal guidance and sandbox glob routing (#4168)
- [`ef591e7`](https://github.com/langchain-ai/deepagents/commit/ef591e7a86b13bbdcb0fdedd45a8f1fe33573839) feat(sdk): bound grep/glob with partial results and a `truncated` flag (#4063)
- [`d77496b`](https://github.com/langchain-ai/deepagents/commit/d77496b969b9c59ce1c7c44e2085e5388e12c306) fix(sdk): sandbox not-found contract and glob deny over-blocking on delete (#4321)
- [`704a70d`](https://github.com/langchain-ai/deepagents/commit/704a70dddbd59b8c6abf658a4211c76bce1445f0) feat(sdk):  add `enabled_tools` allowlist to `FilesystemMiddleware` (#4325)
- [`feab6e0`](https://github.com/langchain-ai/deepagents/commit/feab6e0b3762aa42fa458af16d0a3e8d04d8b075) fix(sdk): unify `grep` include-glob semantics across backends (#3936)
- [`b0d92c0`](https://github.com/langchain-ai/deepagents/commit/b0d92c0f38ca0aa037b56e26b2b0d322cdd07856) fix(sdk): move `get_sync()` inside try in `check_async_task` and `cancel_async_task` (#3967)
- [`d4ba51c`](https://github.com/langchain-ai/deepagents/commit/d4ba51c46384265b00131fb05429486804103196) docs(sdk): expand `profiles` package docstring with directory layout (#4041)
- [`b927147`](https://github.com/langchain-ai/deepagents/commit/b927147d026749c6c790bb06c9853515dabf579c) feat(sdk): optional video frame extraction on `read_file` (#4094)
- [`d6692a7`](https://github.com/langchain-ai/deepagents/commit/d6692a7c713490f170b17510d613e02ee37574ab) feat(code,sdk): add rubric iteration controls (#4405)
- [`a51c8d2`](https://github.com/langchain-ai/deepagents/commit/a51c8d2b1723d143439a1466f5a49a52c442bdfc) fix(sdk): emit terminal rubric iteration status (#4406)
- [`90c8472`](https://github.com/langchain-ai/deepagents/commit/90c8472ae226394a186bf2075459645c2056db7d) feat(sdk): allow users to override default middleware by name (#4251)
- [`02f5bd7`](https://github.com/langchain-ai/deepagents/commit/02f5bd7bc02f2baaf5a1eefce7d686ba62493647) feat(sdk): reduce round trips when offloading large tool results with `sandbox.execute` (#4230)
- [`8e8680b`](https://github.com/langchain-ai/deepagents/commit/8e8680bd01d717b3e639ad205eeb461e52998732) build(deps): refresh dependency minimums (#4331)
- [`23500f4`](https://github.com/langchain-ai/deepagents/commit/23500f45c7d7128ea68421c92be6fb53ca8b6c68) chore(deps): bump langgraph-checkpoint from 4.1.0 to 4.1.1 in /libs/deepagents (#4274)
- [`965cbd5`](https://github.com/langchain-ai/deepagents/commit/965cbd566b019a9ff2e39a35a5dce387660a77db) chore(repo): cut over v0.7 to main (#4280)

</details>

## deepagents-code==0.1.49: deepagents-code==0.1.49

**Published**: 2026-07-27

### Features

- Added recognition for LangSmith Gateway credentials. ([#5042](https://github.com/langchain-ai/deepagents/issues/5042))
- Added slash commands for mode changes and an option to escape to manual mode from the YOLO notice. ([#5092](https://github.com/langchain-ai/deepagents/issues/5092))
- Added an `install` subcommand. ([#5080](https://github.com/langchain-ai/deepagents/issues/5080))

### Bug Fixes

- Kept the post-install restart modal responsive. ([#5086](https://github.com/langchain-ai/deepagents/issues/5086))
- Moved server graph bootstrap `cwd` calls off the event loop. ([#5081](https://github.com/langchain-ai/deepagents/issues/5081))
- Improved handling of long transcript user messages with toast notifications and expansion. ([#5073](https://github.com/langchain-ai/deepagents/issues/5073))
- Show model no-op notices as toasts instead of inline messages. ([#5074](https://github.com/langchain-ai/deepagents/issues/5074))

---

Internal maintainers: @ccurme, @mdrxy

Released by: @mdrxy

<details>
<summary>Git log since deepagents-code==0.1.48</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`44910bc`](https://github.com/langchain-ai/deepagents/commit/44910bc2ef3f70975533e4a2ce38ee0e2d0624b6) release(deepagents-code): 0.1.49 (#5089)
- [`d93336b`](https://github.com/langchain-ai/deepagents/commit/d93336bfca4664abc3994cb28970ea3fbeeb1b77) feat(code): escape to manual mode in YOLO notice, mode slash commands (#5092)
- [`b64db97`](https://github.com/langchain-ai/deepagents/commit/b64db97e54552b9668484abcd47a362fc658dc9d) style(code): color tool-call rows by output status (#5039)
- [`b6556dd`](https://github.com/langchain-ai/deepagents/commit/b6556dd7551e31c584ed52bb012c057d0bb6a6d7) style(code): tighten YOLO mode notice copy (#5091)
- [`dcbff9c`](https://github.com/langchain-ai/deepagents/commit/dcbff9c4d046bcd38ceef8e362691e8030036213) feat(code): recognize LangSmith Gateway credentials (#5042)
- [`0651c99`](https://github.com/langchain-ai/deepagents/commit/0651c996556ee0703f776cbe2461ee41893a0fa4) chore(code): raise dependency minimums (#5090)
- [`7519752`](https://github.com/langchain-ai/deepagents/commit/75197527f7d472f00c0acd7a10662a9b20522f3e) style(code): clarify Auto classifier timeout messaging (#5088)
- [`2b69c30`](https://github.com/langchain-ai/deepagents/commit/2b69c30abc4c4bcec5e86a41151be0518e903726) style(code): render collapsed expand hints as dim italic (#5087)
- [`c4e2480`](https://github.com/langchain-ai/deepagents/commit/c4e24804ebde93563f0596102bd5d9fc163ec0bf) fix(code): keep post-install restart modal responsive (#5086)
- [`a34713b`](https://github.com/langchain-ai/deepagents/commit/a34713b122383dccad2572cd7213fd56f467fcce) fix(code): toast and expand long transcript user messages (#5073)
- [`2f2116d`](https://github.com/langchain-ai/deepagents/commit/2f2116d5cd7bba98e1b0731d5da760a4b93ffb37) feat(code): add `install` subcommand (#5080)
- [`e05f7c2`](https://github.com/langchain-ai/deepagents/commit/e05f7c2a825f3dc2fdfc075d4092b7b15d89b1a9) fix(code): offload server graph bootstrap cwd calls off the event loop (#5081)
- [`92b5193`](https://github.com/langchain-ai/deepagents/commit/92b519391f584acb7786121469e45e850a94e06c) fix(code): toast model no-op notice instead of inline message (#5074)

</details>

## deepagents-code==0.1.48: deepagents-code==0.1.48

**Published**: 2026-07-27

### Features

- Added Fireworks `kimi-k3`, GLM-5.2-Fast, and Kimi-K3 to model selection and recommended models. ([#5082](https://github.com/langchain-ai/deepagents/issues/5082), [#5072](https://github.com/langchain-ai/deepagents/issues/5072))
- Migrated legacy hooks to v2 events. ([#4971](https://github.com/langchain-ai/deepagents/issues/4971))

### Bug Fixes

- Require an `AGENTS.md` marker for `/agent` discovery, resolving unintended discovery behavior. ([#5076](https://github.com/langchain-ai/deepagents/issues/5076), closes [#4991](https://github.com/langchain-ai/deepagents/issues/4991))
- Removed the redundant `/restart` hint from the restart prompt. ([#5083](https://github.com/langchain-ai/deepagents/issues/5083))
- Removed the caret flash in plugin type-to-search. ([#5078](https://github.com/langchain-ai/deepagents/issues/5078))

---

Internal maintainers: @johannes117, @hntrl, @aolsenjazz, @mdrxy

Released by: @mdrxy

<details>
<summary>Git log since deepagents-code==0.1.47</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`803b832`](https://github.com/langchain-ai/deepagents/commit/803b8329db7d2320ca698b6ef6753e95cc952be6) release(deepagents-code): 0.1.48 (#5048)
- [`82e799c`](https://github.com/langchain-ai/deepagents/commit/82e799c7191adcb3bf96eb0435d55edd58cc1883) feat(code): add Fireworks `kimi-k3` to model switcher (#5082)
- [`b34899f`](https://github.com/langchain-ai/deepagents/commit/b34899fccd051ab741000c771eef9a2dc4439d80) fix(code): drop redundant `/restart` hint from restart prompt (#5083)
- [`504ff0a`](https://github.com/langchain-ai/deepagents/commit/504ff0a667abf12ad3fd2f72b4cb7be230b7c3dd) refactor(code): dedup provider install-extras recovery hints (#5027)
- [`6506e15`](https://github.com/langchain-ai/deepagents/commit/6506e1594ce38e75d15b8c8aa5ce8852df811f7a) style(code): simplify Auto classifier unavailable messages (#5079)
- [`aff1435`](https://github.com/langchain-ai/deepagents/commit/aff1435ce8d56c623cfeffb2731adcd4bf057c30) fix(code): require `AGENTS.md` marker for `/agent` discovery (#5076)
- [`7d69e37`](https://github.com/langchain-ai/deepagents/commit/7d69e379678d8491ab62c9e229426d50b7366c45) fix(code): remove plugin type-to-search caret flash (#5078)
- [`98af36f`](https://github.com/langchain-ai/deepagents/commit/98af36f0fd0b31e7a6e85673ee5668c40efc5b4c) style(code): focus plugin search on typing (#4842)
- [`a33494e`](https://github.com/langchain-ai/deepagents/commit/a33494ec580c289c58f725e19364fc21ef8cc26c) feat(code): add GLM-5.2-Fast and Kimi-K3 to recommended models (#5072)
- [`196a087`](https://github.com/langchain-ai/deepagents/commit/196a0870fcf8a7f29d1fb37886dd323b190f9c16) release(langchain-quickjs): 0.3.4 (#5051)
- [`c0afec5`](https://github.com/langchain-ai/deepagents/commit/c0afec5ab7e9860d1572002c1f689f95dd15cf8e) feat(code): add Claude Opus 5 support (#5049)
- [`fdb585c`](https://github.com/langchain-ai/deepagents/commit/fdb585c87b054979b8440bdc6ac97fc8ae628134) feat(code): migrate legacy hooks to v2 events (#4971)

</details>

## langchain-quickjs==0.3.4: langchain-quickjs==0.3.4

**Published**: 2026-07-24

### Bug Fixes

* Raise minimum quickjs-rs version to 0.2.5 ([#5059](https://github.com/langchain-ai/deepagents/issues/5059)) ([794513b](https://github.com/langchain-ai/deepagents/commit/794513bbc58a859bbd858326e61565bd3f50e694))

---

Internal maintainers: @nick-hollon-lc, @hntrl, @davibinboi, @mdrxy

Released by: @hntrl

<details>
<summary>Git log since langchain-quickjs==0.3.3</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`196a087`](https://github.com/langchain-ai/deepagents/commit/196a0870fcf8a7f29d1fb37886dd323b190f9c16) release(langchain-quickjs): 0.3.4 (#5051)
- [`794513b`](https://github.com/langchain-ai/deepagents/commit/794513bbc58a859bbd858326e61565bd3f50e694) fix(quickjs): raise minimum quickjs-rs version to 0.2.5 (#5059)
- [`c0afec5`](https://github.com/langchain-ai/deepagents/commit/c0afec5ab7e9860d1572002c1f689f95dd15cf8e) feat(code): add Claude Opus 5 support (#5049)
- [`9340518`](https://github.com/langchain-ai/deepagents/commit/9340518a26c4287f9ad0c543edc9b69106c15154) feat(sdk,code,quickjs)!: make the `ToDoListMiddleware` list opt-in (#4929)
- [`c7a6180`](https://github.com/langchain-ai/deepagents/commit/c7a6180b6ad1d44da01e1d12c4420abef4de3c14) chore(deps): bump pyasn1 from 0.6.3 to 0.6.4 in /libs/partners/quickjs (#4985)
- [`a8d1b32`](https://github.com/langchain-ai/deepagents/commit/a8d1b32aa4136d0498ba7b48367c8001ac462bd0) feat(sdk,code,quickjs): lean system prompt by default, restorable (#4859)
- [`982611d`](https://github.com/langchain-ai/deepagents/commit/982611d7f9e0669917dad8b47badf17b22240fdb) chore(code): remove redundant goal command footer (#4937)
- [`18679a1`](https://github.com/langchain-ai/deepagents/commit/18679a1a88a3f10777bf2f45593cb104e822d49f) release(deepagents-code): 0.1.42 (#4793)

</details>

## deepagents-code==0.1.47: deepagents-code==0.1.47

**Published**: 2026-07-24

### Features

- Added `yolo` mode to the `Shift+Tab` approval cycle ([#5035](https://github.com/langchain-ai/deepagents/issues/5035)).
- Show the changelog link before prompting to update via the install script ([#5034](https://github.com/langchain-ai/deepagents/issues/5034)).

---

Internal maintainers: @mdrxy

Released by: @mdrxy

<details>
<summary>Git log since deepagents-code==0.1.46</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`8aa29dd`](https://github.com/langchain-ai/deepagents/commit/8aa29ddc28332fb13c5dcfa7f2f732130e497c7d) release(deepagents-code): 0.1.47 (#5040)
- [`e3d2a87`](https://github.com/langchain-ai/deepagents/commit/e3d2a870b77e548611929be56952f68825d3d52e) feat(code): show changelog link before install-script update prompt (#5034)
- [`9e6f480`](https://github.com/langchain-ai/deepagents/commit/9e6f480f4012ad3d868a61d5761a3749aa51a36b) style(code): shorten splash tag to `(experimental)` (#5037)
- [`9f2cc21`](https://github.com/langchain-ai/deepagents/commit/9f2cc212dc3ba59540a9f738d2849e38ac9ecfc2) feat(code): include `yolo` mode in `Shift+Tab` approval cycle (#5035)

</details>

## deepagents-code==0.1.46: deepagents-code==0.1.46

**Published**: 2026-07-24

### Highlights

- Auto mode is now generally available. [#4957](https://github.com/langchain-ai/deepagents/issues/4957)
- Added configurable Auto goal-criteria acceptance. [#4940](https://github.com/langchain-ai/deepagents/issues/4940)
- Improved Auto behavior by authorizing actions from active goal/rubric directives, avoiding redundant approval prompts, showing the enable notice only on first global enable, deduplicating classifier-unavailable transcript spam, logging underlying classifier failures, and reporting classifier timeout budgets. [#5017](https://github.com/langchain-ai/deepagents/issues/5017) [#4993](https://github.com/langchain-ai/deepagents/issues/4993) [#5012](https://github.com/langchain-ai/deepagents/issues/5012) [#5013](https://github.com/langchain-ai/deepagents/issues/5013) [#5011](https://github.com/langchain-ai/deepagents/issues/5011) [#5025](https://github.com/langchain-ai/deepagents/issues/5025)
- Added Hooks v2 capability snapshots and session transcripts, and hardened Hooks v2 command execution. [#4916](https://github.com/langchain-ai/deepagents/issues/4916) [#4918](https://github.com/langchain-ai/deepagents/issues/4918) [#4917](https://github.com/langchain-ai/deepagents/issues/4917)
- Raised the agent recursion limit to 2000 and made it configurable. [#4994](https://github.com/langchain-ai/deepagents/issues/4994)

### Improvements and fixes

- Let the rubric grader inspect working-directory files, show rubric grader defaults, and improved `/rubric` help and empty-state messaging. [#4835](https://github.com/langchain-ai/deepagents/issues/4835) [#4966](https://github.com/langchain-ai/deepagents/issues/4966) [#5015](https://github.com/langchain-ai/deepagents/issues/5015)
- Unified goal activation signaling. [#4980](https://github.com/langchain-ai/deepagents/issues/4980)
- Made Version, Model, and CWD copyable in the Debug Console. [#4975](https://github.com/langchain-ai/deepagents/issues/4975)
- Improved `config get` output when a key is missing. [#4976](https://github.com/langchain-ai/deepagents/issues/4976)
- Aborted YOLO launch on `Ctrl+C`/`Ctrl+D` and made the YOLO warning friendlier for new users. [#4953](https://github.com/langchain-ai/deepagents/issues/4953) [#4950](https://github.com/langchain-ai/deepagents/issues/4950)
- Updated LangSmith handling: secret redaction is disabled by default, `/trace` now flags empty env overrides that shadow the LangSmith key, and the default US endpoint is no longer treated as a custom target. [#4970](https://github.com/langchain-ai/deepagents/issues/4970) [#4996](https://github.com/langchain-ai/deepagents/issues/4996) [#5022](https://github.com/langchain-ai/deepagents/issues/5022)
- Injected OpenAI `prompt_cache_key` for any OpenAI-provider endpoint. [#4995](https://github.com/langchain-ai/deepagents/issues/4995)
- Improved tool and schema presentation: finished calls stay on the live tool-group line, first-party tool schemas now include field descriptions, and `web_search`/`fetch_url` tool descriptions were trimmed. [#4927](https://github.com/langchain-ai/deepagents/issues/4927) [#5019](https://github.com/langchain-ai/deepagents/issues/5019) [#5016](https://github.com/langchain-ai/deepagents/issues/5016)
- Omitted `plugins/` and `conversation_history/` from the `/agent` picker. [#4991](https://github.com/langchain-ai/deepagents/issues/4991)
- Made selector modal backdrop dimming consistent. [#4990](https://github.com/langchain-ai/deepagents/issues/4990)
- Restored the `"Server log preserved at:"` notice on exit. [#4999](https://github.com/langchain-ai/deepagents/issues/4999)
- Used the SDK pin as the effective editable version. [#4949](https://github.com/langchain-ai/deepagents/issues/4949)

---

Internal maintainers: @nick-hollon-lc, @johannes117, @aolsenjazz, @ccurme, @davibinboi, @mdrxy

Released by: @mdrxy

<details>
<summary>Git log since deepagents-code==0.1.45</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`efa86c5`](https://github.com/langchain-ai/deepagents/commit/efa86c51fedd8d6fbcbabe7da36dd4d63661103c) release(deepagents-code): 0.1.46 (#4965)
- [`e1b1303`](https://github.com/langchain-ai/deepagents/commit/e1b1303c06083f2dd179e0081029b5574e0b8a05) chore(code): bump SDK pin to `0.7.0b2` and dependency minimums (#5031)
- [`516619b`](https://github.com/langchain-ai/deepagents/commit/516619b7bf516e56f0e56ebc319dcab928c68c40) fix(code): report Auto classifier timeout budget (#5025)
- [`5dbedcd`](https://github.com/langchain-ai/deepagents/commit/5dbedcdd3c71f4a34a3c5560f85ddb90e746e1c2) docs(code): document dev vs GA tracing projects (#4973)
- [`170b4a6`](https://github.com/langchain-ai/deepagents/commit/170b4a6c4590b3f95fb5219b5d9074c7f01a1937) fix(code): trim `web_search` and `fetch_url` tool descriptions (#5016)
- [`b4d39a4`](https://github.com/langchain-ai/deepagents/commit/b4d39a44a11a42356f30208f1f45bd821151f57e) refactor(code): drop redundant goal-tool system prompt injection (#5023)
- [`f6caf52`](https://github.com/langchain-ai/deepagents/commit/f6caf524eea6ede25b1557d4d4588debcadd15f8) refactor(code): remove `get_rubric` source metadata (#5024)
- [`ffb7aab`](https://github.com/langchain-ai/deepagents/commit/ffb7aabe25d3d5ad7c5fce139f3bc3e14e245adf) fix(code): ignore LangSmith default US endpoint as custom target (#5022)
- [`e63cddf`](https://github.com/langchain-ai/deepagents/commit/e63cddf5b16eda0d5727f6d36dad87460dd6db0c) style(code): tighten Auto mode first-run notice copy (#5021)
- [`4ccb873`](https://github.com/langchain-ai/deepagents/commit/4ccb87325f3f97e416683233c94405e3ee105cda) fix(code): put field descriptions on first-party tool schemas (#5019)
- [`c2dbd17`](https://github.com/langchain-ai/deepagents/commit/c2dbd176f06ff1a29637107101ae61344a09fc59) fix(code): show Auto enable notice modal only on first global enable (#5012)
- [`9500306`](https://github.com/langchain-ai/deepagents/commit/9500306a17f90dc2f27897c364c24cafffbc474a) fix(code): dedupe Auto classifier-unavailable transcript spam (#5013)
- [`728dbe7`](https://github.com/langchain-ai/deepagents/commit/728dbe7df62ad9960f21cabd6e6c37e8d9a66da7) fix(code): authorize Auto actions from active goal/rubric directives (#5017)
- [`1a3f46b`](https://github.com/langchain-ai/deepagents/commit/1a3f46b85861779ed44e880cc7921cdd6f28fdfa) fix(code): improve `/rubric` help and empty-state messaging (#5015)
- [`6d6632f`](https://github.com/langchain-ai/deepagents/commit/6d6632fa39822f1b774fcabd61ed371a90427113) fix(code): inject OpenAI `prompt_cache_key` for any OpenAI-provider endpoint (#4995)
- [`bd03e8a`](https://github.com/langchain-ai/deepagents/commit/bd03e8a1ca4b38883e11148d5614a444cdefa407) fix(code): log underlying Auto classifier failures (#5011)
- [`1709dbf`](https://github.com/langchain-ai/deepagents/commit/1709dbf9b27766aacce1a5a9c17396b3654f026c) fix(code): make Auto mode generally available (#4957)
- [`313f952`](https://github.com/langchain-ai/deepagents/commit/313f9520cef28c105aa53eac645176d422ec4a97) fix(code): flag empty env override shadowing LangSmith key in `/trace` (#4996)
- [`976c54b`](https://github.com/langchain-ai/deepagents/commit/976c54b2e1392282044d9890a4a5d5d655f3e8dc) fix(code): keep finished calls on live tool-group line (#4927)
- [`52b8993`](https://github.com/langchain-ai/deepagents/commit/52b8993489a9b6b92be077fe835743ef7704b6a0) feat(code): make Version, Model, CWD copyable in Debug Console (#4975)
- [`260c33e`](https://github.com/langchain-ai/deepagents/commit/260c33ee28ade91741ba226ef3e719b6b8c8c02c) fix(code): give `config get` a useful missing-key message (#4976)
- [`f792279`](https://github.com/langchain-ai/deepagents/commit/f7922795d681d82bc2cfea8db0a292e7ecde0171) docs(code): document first-token shell allow-list bypass (T13) (#4942)
- [`5bc7714`](https://github.com/langchain-ai/deepagents/commit/5bc7714fe55a73ac4892deb1785522ea310607ce) fix(code): restore `"Server log preserved at:"` notice on exit (#4999)
- [`37addfc`](https://github.com/langchain-ai/deepagents/commit/37addfc8bb5533d6670d14defea38770c8d54d1e) feat(code): configure Auto goal criteria acceptance (#4940)
- [`ca86fbe`](https://github.com/langchain-ai/deepagents/commit/ca86fbecca1a43facb4281397760c5e52edb1ddd) feat(code): add Hooks v2 session transcripts (#4918)
- [`9af90ae`](https://github.com/langchain-ai/deepagents/commit/9af90ae350c81ae5a2b6f6e835e82d927b7e0f38) chore(code): bump SDK pin to 0.7.0b1 and dependency minimums (#5000)
- [`94962a5`](https://github.com/langchain-ai/deepagents/commit/94962a5f588ce84991ad382b7713155d6a5a231e) feat(code): raise agent recursion limit to 2000 and make it configurable (#4994)
- [`3606e3f`](https://github.com/langchain-ai/deepagents/commit/3606e3f3fa2faac97f30141f9ee54e37631d16ad) fix(code): consistent modal backdrop dimming for selectors (#4990)
- [`db26688`](https://github.com/langchain-ai/deepagents/commit/db26688eee32232a1b73e98cc02642b5bf4165f4) fix(code): omit `plugins/` and `conversation_history/` from `/agent` picker (#4991)
- [`9340518`](https://github.com/langchain-ai/deepagents/commit/9340518a26c4287f9ad0c543edc9b69106c15154) feat(sdk,code,quickjs)!: make the `ToDoListMiddleware` list opt-in (#4929)
- [`9975874`](https://github.com/langchain-ai/deepagents/commit/9975874d897ada8979c084145eb730e15c9cf979) fix(code): avoid redundant Auto approval prompts (#4993)
- [`0c4016e`](https://github.com/langchain-ai/deepagents/commit/0c4016e3c8a7293fdf1a24e12340759068a2bb9a) fix(code,evals): unify goal activation signaling (#4980)
- [`05dd0d1`](https://github.com/langchain-ai/deepagents/commit/05dd0d1bee7d79be6ac7f18db0d05b521e760326) fix(code): harden Hooks v2 command execution (#4917)
- [`5dcf749`](https://github.com/langchain-ai/deepagents/commit/5dcf749a6e7d5ab6611f30d485a3382c7ef31f22) feat(code): let the rubric grader inspect working-directory files (#4835)
- [`465b9de`](https://github.com/langchain-ai/deepagents/commit/465b9de17f9f4e6cd07a8674d9a186e60f5bf4d4) fix(code): show rubric grader defaults (#4966)
- [`d046427`](https://github.com/langchain-ai/deepagents/commit/d046427b536c8ddbce5d804d6ae8b860511a9b44) revert(code,sdk): revert `SystemPromptConfig` (#4969)
- [`8c31545`](https://github.com/langchain-ai/deepagents/commit/8c31545102b75bed87f2cbd63b81e69e27c7188a) style(code): render `-m` slash prompts as plain agent text (#4974)
- [`1b270c8`](https://github.com/langchain-ai/deepagents/commit/1b270c86fe24381c28d3ed35a31d754bd58bbf6e) fix(code): use SDK pin as effective editable version (#4949)
- [`8b4e508`](https://github.com/langchain-ai/deepagents/commit/8b4e508d4664ef02e220854d50f5d98e0913aed8) feat(code): add Hooks v2 capability snapshots (#4916)
- [`e6ab9c0`](https://github.com/langchain-ai/deepagents/commit/e6ab9c05e8fcb9a332396a9425e2b302607be823) fix(code): abort YOLO launch on `Ctrl+C`/`Ctrl+D` (#4953)
- [`d029585`](https://github.com/langchain-ai/deepagents/commit/d029585ab79432d00edfa5a70e77a31f2388ed5b) fix(code): disable LangSmith secret redaction by default (#4970)
- [`fe07f39`](https://github.com/langchain-ai/deepagents/commit/fe07f39ad78c5c09ea6959540a49196cd2f47f3e) fix(code): make YOLO warning friendlier for new users (#4950)
- [`28d138a`](https://github.com/langchain-ai/deepagents/commit/28d138a39587529738c416b272aa0e9044447648) style(code): hide terminal cursor in pre-TUI selectors (#4951)
- [`a8d1b32`](https://github.com/langchain-ai/deepagents/commit/a8d1b32aa4136d0498ba7b48367c8001ac462bd0) feat(sdk,code,quickjs): lean system prompt by default, restorable (#4859)
- [`803a27f`](https://github.com/langchain-ai/deepagents/commit/803a27f366191016bcba37724f59d5cc71175316) refactor(code): use concrete middleware backends (#4963)

</details>

## deepagents==0.7.0b2: deepagents==0.7.0b2

**Published**: 2026-07-24

> [!WARNING]
> This is a pre-release version. Install with: `pip install deepagents==0.7.0b2`

Follow-up to `0.7.0b1` with one SDK change.

### Features

* Shorten the LLM-facing descriptions for the `task` tool and filesystem tools (`read_file`, `grep`, `edit_file`, `glob`, `execute`). Worked examples and step-by-step tutorials are removed, while one-line purpose statements and load-bearing constraints remain. Tool behavior is unchanged — description strings only. In offline measurement of default-agent tool schemas, total description tokens drop by about 43%. ([#5009](https://github.com/langchain-ai/deepagents/pull/5009))

---

Internal maintainers: @nick-hollon-lc

Released by: @mdrxy

Released from `beta/deepagents-0-7-0b2` at commit [`f993a5d`](https://github.com/langchain-ai/deepagents/commit/f993a5d3800d9367a12859a5fc19118076182d5b)

<details>
<summary>Git log since deepagents==0.7.0b1</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`f993a5d`](https://github.com/langchain-ai/deepagents/commit/f993a5d3800d9367a12859a5fc19118076182d5b) hotfix(sdk): beta release 0.7.0b2
- [`761f5f0`](https://github.com/langchain-ai/deepagents/commit/761f5f0882dee186f2700f3c903829a5542626fe) feat(sdk): trim built-in tool descriptions (#5009)

</details>

## deepagents==0.7.0b1: deepagents==0.7.0b1

**Published**: 2026-07-23

> [!WARNING]
> This is a pre-release version. Install with: `pip install deepagents==0.7.0b1`

Rolls up alphas `0.7.0a1`–`0.7.0a8` plus some additional changes not captured in an `a9` release (see footer's Git log summary).

### Breaking Changes

* Agents created with `create_deep_agent` no longer include `TodoListMiddleware` by default, so the `write_todos` tool, `todos` state channel, and todo-planning prompt are absent unless restored with `middleware=[TodoListMiddleware()]`. (The OpenAI Codex harness profile still opts in automatically.) ([#4929](https://github.com/langchain-ai/deepagents/pull/4929))
* Default agent prompts are lean: the authored base prompt starts empty, tool-usage prose that duplicates tool schemas is trimmed, and the previous authored base prompt remains available as `DEFAULT_AGENT_PROMPT`. `BASE_AGENT_PROMPT` is deprecated and no longer exported at the package top level. ([#4859](https://github.com/langchain-ai/deepagents/pull/4859)) ([#4979](https://github.com/langchain-ai/deepagents/pull/4979))
* Removed deprecated backend compatibility shims. Callers must pass concrete `BackendProtocol` instances (not factories), configure `StoreBackend` with an explicit `namespace`, and use the current `ls` / `glob` / `grep` / `ReadResult` APIs. Removed compatibility symbols include `BackendFactory`, `BACKEND_TYPES`, `FileFormat`, and `Unset`, plus the deprecated `runtime` parameters on `StateBackend` and `StoreBackend`. New files store string `FileData.content`; older `list[str]` content remains readable and is converted when overwritten or edited. ([#4541](https://github.com/langchain-ai/deepagents/pull/4541))
* `ls` and `glob` empty-result output is now `No files found` instead of `[]`. Callers that parse empty results should update those checks.
* `read_file` no longer renders raw text with a fixed-width `cat -n`-style line-number gutter and tab separator. Line and continuation markers are dynamically aligned and separated from source content by two spaces. Callers that parse raw tool output should update those parsers. ([#4561](https://github.com/langchain-ai/deepagents/pull/4561))

### Features

* Custom middleware passed to `create_deep_agent(..., middleware=[...])` can replace a default middleware instance when `.name` matches, so defaults such as `SummarizationMiddleware` can be overridden without also excluding the built-in instance. ([#4251](https://github.com/langchain-ai/deepagents/pull/4251))
* Filesystem backends and middleware support delete, including recursive deletes, with a user-facing delete tool and clear unsupported/not-found errors when a backend cannot perform the operation.
* `write_file` can overwrite existing files, so agents can replace generated artifacts or apply full-file edits without an intermediate delete. ([#4109](https://github.com/langchain-ai/deepagents/pull/4109))
* `FilesystemMiddleware` accepts a tool allowlist so callers can expose only selected built-in filesystem tools while keeping `read_file` available and leaving custom user tools unaffected. Omitted built-in tools are non-executable. ([#4325](https://github.com/langchain-ai/deepagents/pull/4325)) ([#4698](https://github.com/langchain-ai/deepagents/pull/4698))
* The `deepagents[aws]` extra includes Bedrock prompt caching support. ([#4108](https://github.com/langchain-ai/deepagents/issues/4108))
* Automatically enable Fireworks prompt-cache session affinity when a compatible `langchain-fireworks` installation is available. ([#4598](https://github.com/langchain-ai/deepagents/pull/4598))
* `grep` and `glob` bound large or slow trees by returning valid partial results with a `truncated` flag instead of hanging or discarding work on timeout; `glob` also supports brace expansion such as `*.{py,md}` on supported backends. ([#4063](https://github.com/langchain-ai/deepagents/pull/4063))
* Agent-facing `grep` defaults to a 1,000-match cap, streams local ripgrep output, and stops once the cap is reached. Direct `FilesystemBackend.grep()` callers can request surrounding lines with keyword-only `context_lines`. ([#4570](https://github.com/langchain-ai/deepagents/pull/4570)) ([#4706](https://github.com/langchain-ai/deepagents/pull/4706))
* Paginated `read_file` responses report the returned source-line range, total and remaining line counts, and the next `offset`, including when reads are shortened by sandbox or middleware limits. ([#4540](https://github.com/langchain-ai/deepagents/pull/4540))
* Optional video frame extraction for `read_file` when media dependencies are installed. Video files such as `.mp4`, `.mov`, `.webm`, and `.mkv` are sampled into JPEG frames, with `offset` and `limit` interpreted as seconds. ([#4094](https://github.com/langchain-ai/deepagents/pull/4094))
* Sandbox large-result offload for `sandbox.execute` captures oversized command output directly inside the sandbox artifact path to reduce round trips. ([#4230](https://github.com/langchain-ai/deepagents/pull/4230))
* Built-in NVIDIA adds a built-in Nemotron 3 Ultra harness profile. We also expand with NIM app-origin attribution. ([#4455](https://github.com/langchain-ai/deepagents/pull/4455)) ([#4192](https://github.com/langchain-ai/deepagents/pull/4192))

### Bug Fixes

* Keep fields marked with `PrivateStateAttr`, including fields declared through `create_deep_agent(state_schema=...)`, out of subagent inputs and returned parent-state updates. ([#4587](https://github.com/langchain-ai/deepagents/pull/4587))
* Preserve `ContextT` through the `create_deep_agent(..., middleware=[...])` type annotation so type checkers accept context-aware middleware when a matching `context_schema` is passed. ([#4055](https://github.com/langchain-ai/deepagents/pull/4055))
* Accept YAML list values as well as comma-separated strings for skill `allowed-tools` frontmatter, and make skill truncation warnings actionable with field name, path, length, configured limit, and impact. ([#4140](https://github.com/langchain-ai/deepagents/pull/4140)) ([#4141](https://github.com/langchain-ai/deepagents/pull/4141))
* Align filesystem instructions with the tools that remain after allowlist and backend-capability filtering, so agents no longer reference hidden `grep`/`glob` tools or prohibit equivalent shell search when dedicated search tools are unavailable. ([#4920](https://github.com/langchain-ai/deepagents/pull/4920)) ([#4921](https://github.com/langchain-ai/deepagents/pull/4921))
* Propagate default-backend failures from `CompositeBackend.ls("/")` and `CompositeBackend.als("/")` instead of returning successful route-only listings. ([#4925](https://github.com/langchain-ai/deepagents/pull/4925))
* Correct `CompositeBackend.glob` / `CompositeBackend.aglob` routing so explicit default-backend paths such as `/tools` do not also return files from routed backends such as `/memories`. ([#4531](https://github.com/langchain-ai/deepagents/pull/4531))
* Constrain sandbox `glob` and slash-pattern `grep` searches to their declared search root by treating leading `/` as search-root-relative, rejecting `..` traversal segments, and filtering symlink-resolved matches outside the root. ([#4588](https://github.com/langchain-ai/deepagents/pull/4588))
* Unify `grep(..., glob=...)` include-glob semantics across filesystem and in-memory backends: basename patterns like `*.py` match at any depth, and slash-containing patterns like `src/**/*.py` match relative paths consistently. ([#3936](https://github.com/langchain-ai/deepagents/pull/3936))
* Make `grep`'s literal-only contract clearer in tool descriptions and no-match hints, route slash-containing sandbox include-globs correctly, and shorten default search timeouts so bad patterns and huge trees return guidance faster. ([#4168](https://github.com/langchain-ai/deepagents/pull/4168))
* Align sandbox delete behavior with other backends by returning not-found errors for missing paths, and avoid over-blocking unrelated sibling deletes when deny rules use glob patterns. ([#4321](https://github.com/langchain-ai/deepagents/pull/4321))
* Emit `max_iterations_reached` as the terminal `RubricMiddleware` status when the iteration cap is exhausted, instead of a final `needs_revision` event that will not loop. ([#4406](https://github.com/langchain-ai/deepagents/pull/4406))
* Improve rubric grader failure diagnostics with configured model, structured-output strategy, and integer HTTP status when available. ([#4938](https://github.com/langchain-ai/deepagents/pull/4938)) ([#4967](https://github.com/langchain-ai/deepagents/pull/4967))
* Handle missing async subagent URLs consistently in `check_async_task` and `cancel_async_task`. ([#3967](https://github.com/langchain-ai/deepagents/pull/3967))

---

Thanks to our community contributors: @kavishkartha05 ([Twitter](https://x.com/kavishkartha31), [LinkedIn](https://linkedin.com/in/kavish-kartha)), @nv-kasikritc

Internal maintainers: @nick-hollon-lc, @ccurme, @davibinboi, @mdrxy

Released by: @mdrxy

Released from `beta/deepagents-0-7-0b1` at commit [`a631817`](https://github.com/langchain-ai/deepagents/commit/a63181731464172e3b62a6f9d04c0f6079d41139)

<details>
<summary>Git log since deepagents==0.7.0a8</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`a631817`](https://github.com/langchain-ai/deepagents/commit/a63181731464172e3b62a6f9d04c0f6079d41139) hotfix(sdk): beta release 0.7.0b1
- [`d9f54fc`](https://github.com/langchain-ai/deepagents/commit/d9f54fc09925171c6c0a933abd33507f85e8851c) refactor(sdk,evals): deprecate legacy base agent prompt (#4979)
- [`9340518`](https://github.com/langchain-ai/deepagents/commit/9340518a26c4287f9ad0c543edc9b69106c15154) feat(sdk,code,quickjs)!: make the `ToDoListMiddleware` list opt-in (#4929)
- [`9a24baf`](https://github.com/langchain-ai/deepagents/commit/9a24bafcd245a197856641c844dc2ed51275a528) refactor(sdk): correct prompt docs and harden rubric diagnostics (#4989)
- [`d046427`](https://github.com/langchain-ai/deepagents/commit/d046427b536c8ddbce5d804d6ae8b860511a9b44) revert(code,sdk): revert `SystemPromptConfig` (#4969)
- [`f51d3a0`](https://github.com/langchain-ai/deepagents/commit/f51d3a0145a0301317c36b0ae15263007dacd6f1) fix(sdk): diagnose rubric grader structured output errors (#4938)
- [`bca70aa`](https://github.com/langchain-ai/deepagents/commit/bca70aa1f30ee1472809894e2474a76e4ff2f8bd) fix(sdk): include HTTP status in rubric grader errors (#4967)
- [`a8d1b32`](https://github.com/langchain-ai/deepagents/commit/a8d1b32aa4136d0498ba7b48367c8001ac462bd0) feat(sdk,code,quickjs): lean system prompt by default, restorable (#4859)
- [`540a0fa`](https://github.com/langchain-ai/deepagents/commit/540a0fa7eb9a88d82413cf10a5cb5c807d491385) refactor(sdk)!: remove deprecated backend compatibility shims (#4541)
- [`9f92d2f`](https://github.com/langchain-ai/deepagents/commit/9f92d2fcbc15df0558946e55ff66f374c7a5bc6c) build(sdk): raise dependency minimums (#4936)

</details>

## deepagents-code==0.1.45: deepagents-code==0.1.45

**Published**: 2026-07-22

### Features

- Added the Hooks v2 execution engine and typed hooks data models ([#4880](https://github.com/langchain-ai/deepagents/issues/4880), [#4870](https://github.com/langchain-ai/deepagents/issues/4870))
- Added a filesystem tool allowlist for `dcode` with `--allow-fs-tools` ([#4635](https://github.com/langchain-ai/deepagents/issues/4635))
- Added a GLM-5.2 harness profile ([#4710](https://github.com/langchain-ai/deepagents/issues/4710))
- Added a built-in thread inspector skill ([#4769](https://github.com/langchain-ai/deepagents/issues/4769))
- Replaced Gemini 3.5 Flash with Gemini 3.6 Flash in the model switcher ([#4890](https://github.com/langchain-ai/deepagents/issues/4890))
- Show experimental mode in the splash screen and debug console ([#4863](https://github.com/langchain-ai/deepagents/issues/4863))
- Gate debug console click-to-copy behind a checkbox ([#4810](https://github.com/langchain-ai/deepagents/issues/4810))

### Bug Fixes

- Improved scratch-file handling by allowing cleanup of agent-created scratch files and safe OS-temp scratch artifacts ([#4860](https://github.com/langchain-ai/deepagents/issues/4860), [#4869](https://github.com/langchain-ai/deepagents/issues/4869))
- Skip grading during `/goal` proposals ([#4941](https://github.com/langchain-ai/deepagents/issues/4941))
- Improved MCP approval handling: Esc now aborts project MCP approval, disabled MCP servers are honored for plugins, remembered approvals are preserved with the env allowlist, and approvals are shared across Git worktrees ([#4888](https://github.com/langchain-ai/deepagents/issues/4888), [#4848](https://github.com/langchain-ai/deepagents/issues/4848), [#4889](https://github.com/langchain-ai/deepagents/issues/4889), [#4939](https://github.com/langchain-ai/deepagents/issues/4939))
- Hardened installer downloads and paths ([#4871](https://github.com/langchain-ai/deepagents/issues/4871))
- Fixed forced `dcode update` checks to bust the CDN cache ([#4862](https://github.com/langchain-ai/deepagents/issues/4862))
- Prevented failed exit setup from stranding the app ([#4913](https://github.com/langchain-ai/deepagents/issues/4913))
- Fixed routing so `ctrl+x` goes to the focused `ask_user` input ([#4926](https://github.com/langchain-ai/deepagents/issues/4926))
- Show `-m` prompts as queued immediately on startup ([#4861](https://github.com/langchain-ai/deepagents/issues/4861))
- Kept harness-profile diagnostics out of terminal output ([#4943](https://github.com/langchain-ai/deepagents/issues/4943))
- Avoid tracking inline restart callers ([#4894](https://github.com/langchain-ai/deepagents/issues/4894))
- Fixed debug console thread ID copying on click ([#4945](https://github.com/langchain-ai/deepagents/issues/4945))

### Performance Improvements

- Reduced exit latency by coordinating async shutdown teardown ([#4831](https://github.com/langchain-ai/deepagents/issues/4831))
- Sped up local context detection ([#4922](https://github.com/langchain-ai/deepagents/issues/4922))

---

Internal maintainers: @nick-hollon-lc, @imnishitha, @johannes117, @aolsenjazz, @mdrxy

Released by: @mdrxy

<details>
<summary>Git log since deepagents-code==0.1.44</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`7794b61`](https://github.com/langchain-ai/deepagents/commit/7794b61a6e76230e8c7a49bdce808b3728305914) release(deepagents-code): 0.1.45 (#4867)
- [`467f9dd`](https://github.com/langchain-ai/deepagents/commit/467f9dd0400087c2918bcf19f270bd934cec623a) fix(code): share MCP approvals across Git worktrees (#4939)
- [`b4cb393`](https://github.com/langchain-ai/deepagents/commit/b4cb3937bf8883e616f47621547a775ce9b29995) fix(code): thread id always copies on click in Debug Console (#4945)
- [`812bae4`](https://github.com/langchain-ai/deepagents/commit/812bae4afad6749add097f9d58e489df9ec703a2) fix(code): keep harness-profile diagnostics out of terminal output (#4943)
- [`edeffe8`](https://github.com/langchain-ai/deepagents/commit/edeffe8e88ae70f52def0b29e3fa6e44cbae5f13) refactor(code): use `reasoning_effort` from `langchain` (#4795)
- [`d1ce66e`](https://github.com/langchain-ai/deepagents/commit/d1ce66ea03e3726e6077c6700fc480209a849a7e) fix(code): skip grading during `/goal` proposals (#4941)
- [`fe08582`](https://github.com/langchain-ai/deepagents/commit/fe08582a386b86f78f7a8047db067ea45e7e2650) fix(code): allow cleanup of agent-created scratch files (#4860)
- [`3fbb85e`](https://github.com/langchain-ai/deepagents/commit/3fbb85e3565f270f3a567f771ebd28323f10245d) feat(code):  add `--allow-fs-tools` filesystem tool allowlist to dcode (#4635)
- [`982611d`](https://github.com/langchain-ai/deepagents/commit/982611d7f9e0669917dad8b47badf17b22240fdb) chore(code): remove redundant goal command footer (#4937)
- [`be171d9`](https://github.com/langchain-ai/deepagents/commit/be171d9472adca71ae4f0bd6001f6b91035b60ef) chore(code): bump SDK pin to 0.7.0a8 (#4935)
- [`0a53973`](https://github.com/langchain-ai/deepagents/commit/0a539734bda64ea71f8766ca74d4e0ab51432caf) chore(evals,code): drop deprecated GLM-5/5.1, Nemotron 3 Super, Kimi K2.5 (#4930)
- [`005f9bb`](https://github.com/langchain-ai/deepagents/commit/005f9bb4d790e6cd92be8712ec86cd45192b699f) fix(code): route `ctrl+x` to focused `ask_user` input (#4926)
- [`7475fda`](https://github.com/langchain-ai/deepagents/commit/7475fdad708e5c1c534c977416ef84dbe8c5d0e6) docs(code): clarify MCP plugin reload guidance (#4928)
- [`045ec81`](https://github.com/langchain-ai/deepagents/commit/045ec811bb345c7a8cd4d47dee19ccf10bb7a5ef) style(code): add installed plugin action divider (#4840)
- [`47cfc33`](https://github.com/langchain-ai/deepagents/commit/47cfc33cf9145347b57eb2daf6ef82cdaa342ca4) feat(code,evals): GLM-5.2 harness profile (#4710)
- [`1c2224c`](https://github.com/langchain-ai/deepagents/commit/1c2224cfb7ee85f108e730f67b90e76b7ce43b72) style(code): dismiss debug console dropdown and highlight on outside click (#4923)
- [`0b512d4`](https://github.com/langchain-ai/deepagents/commit/0b512d4b79b1a03c7e452f1e76350cf726b1ec38) perf(code): speed up local context detection (#4922)
- [`f0b198f`](https://github.com/langchain-ai/deepagents/commit/f0b198faa220ad90f24713f08acc09d41e4a81de) feat(code): add Hooks v2 execution engine (#4880)
- [`0967012`](https://github.com/langchain-ai/deepagents/commit/09670121b8d20fa8029804143852f6fcc6135dba) feat(code): add typed hooks data models (#4870)
- [`d0e148a`](https://github.com/langchain-ai/deepagents/commit/d0e148a72612137fc7bc1e49a8972643e0ca2c28) fix(code): show `-m` prompt as queued immediately on startup (#4861)
- [`89822e1`](https://github.com/langchain-ai/deepagents/commit/89822e105b42840e079e19f905c8f4abe2604750) chore(code): update dependency minimums (#4912)
- [`e4d69b0`](https://github.com/langchain-ai/deepagents/commit/e4d69b04a84de226d26d9ca3adea96f1337eef04) fix(code): prevent failed exit setup from stranding the app (#4913)
- [`de2173a`](https://github.com/langchain-ai/deepagents/commit/de2173aa56375d3c8d91e29c55e0c4f52cfd1ca1) chore(deps): bump pyasn1 from 0.6.3 to 0.6.4 in /libs/code (#4898)
- [`0b071ef`](https://github.com/langchain-ai/deepagents/commit/0b071ef71a1f0d63cb09de7ac528e030cd75af2e) fix(code): avoid tracking inline restart callers (#4894)
- [`a2e501b`](https://github.com/langchain-ai/deepagents/commit/a2e501b71f3d91769f56d5b3e433af8e03f7656e) perf(code): coordinate async shutdown teardown to cut exit latency (#4831)
- [`5c99687`](https://github.com/langchain-ai/deepagents/commit/5c99687bdecfd9e33051373581cacddbf7d0202a) feat(code): replace Gemini 3.5 Flash with 3.6 Flash in model switcher (#4890)
- [`eea0a84`](https://github.com/langchain-ai/deepagents/commit/eea0a84d9621565a707c161c2f22878771d9b38b) fix(code): honor MCP server disables for plugins (#4848)
- [`b513bf3`](https://github.com/langchain-ai/deepagents/commit/b513bf3b2aaa30738da9b9b0ced1c001efb1bd5a) fix(code): preserve remembered MCP approvals with env allowlist (#4889)
- [`46bb1a8`](https://github.com/langchain-ai/deepagents/commit/46bb1a86c8041d5c161d7cd07de66d068fb100c0) fix(code): abort project MCP approval on Esc (#4888)
- [`2d729b3`](https://github.com/langchain-ai/deepagents/commit/2d729b30c5df7265e8062bccd38026b745c6cf02) feat(code): add built-in thread inspector skill (#4769)
- [`4330534`](https://github.com/langchain-ai/deepagents/commit/4330534d18cbf79260842dde0e0c450312ef55ca) fix(code): allow safe OS-temp scratch artifacts (#4869)
- [`67bcb56`](https://github.com/langchain-ai/deepagents/commit/67bcb564ffda6bdaf1165c888d17207b0372f840) refactor(code): share newline affordances across input surfaces (#4852)
- [`9a5bbeb`](https://github.com/langchain-ai/deepagents/commit/9a5bbeb7558405054e970decfc1aef5b96a026f3) fix(code): harden installer downloads and paths (#4871)
- [`a485404`](https://github.com/langchain-ai/deepagents/commit/a4854042e5fe9f3acf629b0646a6bf8e348ccc9a) feat(code): gate debug console click-to-copy behind a checkbox (#4810)
- [`7a9b272`](https://github.com/langchain-ai/deepagents/commit/7a9b27242c4a16f210a0ef85a7f7b23a918c0462) style(code): dim the `/plugins` modal backdrop (#4851)
- [`b708207`](https://github.com/langchain-ai/deepagents/commit/b70820724301065b7e5fcb2486faf17fa4fde53a) chore(deps-dev): bump pillow from 12.2.0 to 12.3.0 in /libs/evals (#4876)
- [`f493375`](https://github.com/langchain-ai/deepagents/commit/f49337595aabd72246249f9bcf50798e0ad15d14) refactor(code): centralize JSON type aliases (#4868)
- [`44d9dec`](https://github.com/langchain-ai/deepagents/commit/44d9dec39b2570d16c285a8b0a99cbe1afab4f1b) feat(code): show experimental mode in splash and debug console (#4863)
- [`3733526`](https://github.com/langchain-ai/deepagents/commit/3733526f5faa187627c650435fa5478754c55fb4) fix(code): bust CDN cache on forced `dcode update` checks (#4862)

</details>

## deepagents==0.7.0a8: deepagents==0.7.0a8

**Published**: 2026-07-22

> [!WARNING]
> This is a pre-release version. Install with: `pip install deepagents==0.7.0a8`

This alpha makes restricted filesystem tool configurations safer and more coherent while ensuring composite root-listing failures surface correctly.

### Bug Fixes

* Make filesystem tools omitted through `FilesystemMiddleware(tools=[...])` non-executable, so stray or hallucinated calls return an error instead of running. ([#4698](https://github.com/langchain-ai/deepagents/pull/4698)) ([9709525](https://github.com/langchain-ai/deepagents/commit/970952550e8f53cd89a64a4ee98969ce757693ff)).
* Align filesystem instructions with the tools that remain available after allowlist and backend-capability filtering, so agents no longer reference hidden `grep` or `glob` tools or prohibit equivalent shell search when dedicated search tools are unavailable. ([#4920](https://github.com/langchain-ai/deepagents/pull/4920)) ([d3650c7](https://github.com/langchain-ai/deepagents/commit/d3650c7b1f5ca968abd72345a511719d4ba65907)) ([#4921](https://github.com/langchain-ai/deepagents/pull/4921)) ([b65cc00](https://github.com/langchain-ai/deepagents/commit/b65cc0076caab2e35c07598055b8b338a47e5e1a)).
* Propagate default-backend failures from `CompositeBackend.ls("/")` and `CompositeBackend.als("/")` instead of returning successful route-only listings. ([#4925](https://github.com/langchain-ai/deepagents/pull/4925)) ([4c3b166](https://github.com/langchain-ai/deepagents/commit/4c3b1667035e3be6ae88cf8c431e0d6f143d2ff4)).

---

Internal maintainers: @imnishitha, @hntrl, @mdrxy

Released by: @mdrxy

Released from `alpha/deepagents-0-7-0a8` at commit [`8feda38`](https://github.com/langchain-ai/deepagents/commit/8feda38b9b19d5e0f2239c5fb129e52c4542a737)

<details>
<summary>Git log since deepagents==0.7.0a7</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`8feda38`](https://github.com/langchain-ai/deepagents/commit/8feda38b9b19d5e0f2239c5fb129e52c4542a737) hotfix(sdk): alpha release 0.7.0a8
- [`4c3b166`](https://github.com/langchain-ai/deepagents/commit/4c3b1667035e3be6ae88cf8c431e0d6f143d2ff4) fix(sdk): propagate root listing errors from `CompositeBackend` (#4925)
- [`d3650c7`](https://github.com/langchain-ai/deepagents/commit/d3650c7b1f5ca968abd72345a511719d4ba65907) fix(sdk): condition large-result guidance on visible tools (#4920)
- [`b65cc00`](https://github.com/langchain-ai/deepagents/commit/b65cc0076caab2e35c07598055b8b338a47e5e1a) fix(sdk): condition `execute` search guidance on visible tools (#4921)
- [`a8e4768`](https://github.com/langchain-ai/deepagents/commit/a8e476807cf1da54acecffd3614a0d64e4705e29) docs(sdk): explain backend file operation semantics (#4919)
- [`9e8d478`](https://github.com/langchain-ai/deepagents/commit/9e8d478e2d1a8c50d77a121a2ccd51b584e0841d) refactor(sdk): extract prompt caching helpers (#4892)
- [`8326177`](https://github.com/langchain-ai/deepagents/commit/8326177f280e4ae0fe10f8dfcd8c646507950bb6) chore(deps): bump pyasn1 from 0.6.3 to 0.6.4 in /libs/deepagents (#4897)
- [`8400b89`](https://github.com/langchain-ai/deepagents/commit/8400b89a0273e6bf21a712f104ef26e0ff0acd1c) chore(deps-dev): bump setuptools from 82.0.1 to 83.0.0 in /libs/evals (#4896)
- [`b708207`](https://github.com/langchain-ai/deepagents/commit/b70820724301065b7e5fcb2486faf17fa4fde53a) chore(deps-dev): bump pillow from 12.2.0 to 12.3.0 in /libs/evals (#4876)
- [`29d6046`](https://github.com/langchain-ai/deepagents/commit/29d6046998d47c5070799a0ff8395474579ae2e8) chore(deps): require `langchain-quickjs` 0.3.3 (#4802)
- [`9709525`](https://github.com/langchain-ai/deepagents/commit/970952550e8f53cd89a64a4ee98969ce757693ff) fix(sdk): remove excluded tools from `ToolNode` (#4698)
- [`e61156d`](https://github.com/langchain-ai/deepagents/commit/e61156d2b29f1f25a80aa8e2c10b479444accb6b) test(sdk): handle expected middleware warnings (#4717)

</details>

## deepagents-code==0.1.44: deepagents-code==0.1.44

**Published**: 2026-07-20

### Bug Fixes

- Improved approval handling by hiding the `Auto` option when it isn't eligible and moving Auto mode path checks off the event loop. ([#4839](https://github.com/langchain-ai/deepagents/issues/4839), [#4856](https://github.com/langchain-ai/deepagents/issues/4856))
- Warmed MCP auth imports off the event loop to avoid blocking runtime work. ([#4855](https://github.com/langchain-ai/deepagents/issues/4855))

---

Internal maintainers: @mdrxy

Released by: @mdrxy

<details>
<summary>Git log since deepagents-code==0.1.43</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`2b9cd08`](https://github.com/langchain-ai/deepagents/commit/2b9cd08f0492e3e4ad4763f17deea2d80a145f42) release(deepagents-code): 0.1.44 (#4857)
- [`75d37c3`](https://github.com/langchain-ai/deepagents/commit/75d37c347556d962ff14850bdde489657c86feb4) fix(code): warm MCP auth imports off event loop (#4855)
- [`752af30`](https://github.com/langchain-ai/deepagents/commit/752af303d50829f6e0c99026bb33e2ed27c725d9) style(code): pad between marketplace entries in plugin manager (#4850)
- [`acb1a0e`](https://github.com/langchain-ai/deepagents/commit/acb1a0eeec60deca267282a085970445a582a5e1) style(code): align `Auto` activation warnings (#4858)
- [`1a1f06f`](https://github.com/langchain-ai/deepagents/commit/1a1f06f506d5a167609de336cced740151b6615a) fix(code): hide `Auto` option in approval widget when ineligible (#4839)
- [`511203a`](https://github.com/langchain-ai/deepagents/commit/511203a2c247f6756af3f06581ab9af761a4c4ef) fix(code): move Auto mode path checks off the event loop (#4856)

</details>

## deepagents-code==0.1.43: deepagents-code==0.1.43

**Published**: 2026-07-17

### Features

- Added classifier-backed Auto approval mode behind `DEEPAGENTS_CODE_EXPERIMENTAL=1` ([#4804](https://github.com/langchain-ai/deepagents/issues/4804)).
- Added a shutdown toast for deferred exits ([#4830](https://github.com/langchain-ai/deepagents/issues/4830)).
- Task descriptions that were truncated can now be expanded by clicking or pressing `Ctrl+O` ([#4811](https://github.com/langchain-ai/deepagents/issues/4811)).
- Debug Console clears with `Ctrl+L` now persist after reopening ([#4812](https://github.com/langchain-ai/deepagents/issues/4812)).
- Added debug logging for skill-name override collisions ([#4772](https://github.com/langchain-ai/deepagents/issues/4772)).

### Bug Fixes

- Keep chat input responsive during `/restart` ([#4808](https://github.com/langchain-ai/deepagents/issues/4808)).
- Fixed paste placeholders disappearing when backspacing a newline below them ([#4757](https://github.com/langchain-ai/deepagents/issues/4757)).
- Made markdown `AppMessage` output selectable ([#4814](https://github.com/langchain-ai/deepagents/issues/4814)).
- Fixed live tool-group counts to include only running tools ([#4809](https://github.com/langchain-ai/deepagents/issues/4809)).
- Kept `task` timers monotonic across nested subagent human-in-the-loop flows ([#4771](https://github.com/langchain-ai/deepagents/issues/4771)).
- Preserved goal criteria proposals when marker clearing fails ([#4785](https://github.com/langchain-ai/deepagents/issues/4785)).
- Reduced repeated probing of an unreachable Ollama daemon to once per reload ([#4806](https://github.com/langchain-ai/deepagents/issues/4806)).
- Quieted MCP auth-skip debug logging for known patterns ([#4805](https://github.com/langchain-ai/deepagents/issues/4805)).
- Improved `/version` diagnostics for editable installs and core dependency reporting, including surfacing `langchain-quickjs` ([#4816](https://github.com/langchain-ai/deepagents/issues/4816), [#4813](https://github.com/langchain-ai/deepagents/issues/4813)).
- Removed the `uv install` tip from the `/version` update hint ([#4822](https://github.com/langchain-ai/deepagents/issues/4822)).

---

Internal maintainers: @mdrxy

Released by: @mdrxy

<details>
<summary>Git log since deepagents-code==0.1.42</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`e14e0ad`](https://github.com/langchain-ai/deepagents/commit/e14e0adcbe78565ed3650e7f24b2a775d5437d25) release(deepagents-code): 0.1.43 (#4825)
- [`eae7c28`](https://github.com/langchain-ai/deepagents/commit/eae7c28f1152a5116b5b330c9fa1088ce173656d) feat(code): classifier-backed Auto approval mode (#4804)
- [`a8a05f5`](https://github.com/langchain-ai/deepagents/commit/a8a05f58f2ffb755bf373cd8f9a4cced2778370c) feat(code): shutdown toast for deferred exits (#4830)
- [`3f82114`](https://github.com/langchain-ai/deepagents/commit/3f82114c374f71f740c37a990cd96b1578a318ac) refactor(code): drop `config list`/`ls` aliases for `config show` (#4783)
- [`a915c59`](https://github.com/langchain-ai/deepagents/commit/a915c590dfb7c50d9bf697953ce724bad8dd4149) fix(code): keep chat input responsive during `/restart` (#4808)
- [`7408378`](https://github.com/langchain-ai/deepagents/commit/7408378896344e4db7dbc45a35ae6b02cc746d31) fix(code): disentangle version diagnostics for editable installs (#4816)
- [`6952011`](https://github.com/langchain-ai/deepagents/commit/69520118a7f96866a5e92e7b31894d8ba3312938) fix(code): keep `task` timers monotonic across nested subagent HITL (#4771)
- [`4e618f0`](https://github.com/langchain-ai/deepagents/commit/4e618f07b4b00f94133b4d1c105011c438cb35be) fix(code): drop `uv install` tip from `/version` update hint (#4822)
- [`487b25f`](https://github.com/langchain-ai/deepagents/commit/487b25f885c74b43ad2df837c6c0f6c45626be2a) fix(code): keep goal criteria proposal when marker clear fails (#4785)
- [`c2c27d6`](https://github.com/langchain-ai/deepagents/commit/c2c27d621b63d5af18870e034f99355dc410cbda) fix(code): quiet MCP auth-skip debug logging for known patterns (#4805)
- [`2ddb551`](https://github.com/langchain-ai/deepagents/commit/2ddb551bd77d210d689f3a75037259ade4fbf54a) feat(code): expand truncated `task` descriptions on click or `Ctrl+O` (#4811)
- [`f5c3259`](https://github.com/langchain-ai/deepagents/commit/f5c32592461a990143445067e22083adea7c1107) style(code): show enabled plugin status in green (#4821)
- [`ea82538`](https://github.com/langchain-ai/deepagents/commit/ea825386b3c817f8461ea9e92c71de3411991e2a) fix(code): keep paste placeholder when backspacing newline below it (#4757)
- [`be8e521`](https://github.com/langchain-ai/deepagents/commit/be8e5214a06225acce6c0363eb14ed4c14db2f59) style(code): drop hardcoded indent from `ls` and `write_todos` output (#4762)
- [`77603c6`](https://github.com/langchain-ai/deepagents/commit/77603c69e2eeededf6f1df68b384da27f7d2843f) feat(code): debug-log skill-name override collisions (#4772)
- [`45baf6c`](https://github.com/langchain-ai/deepagents/commit/45baf6c7a47e08e656ba56eb76beea30a9956403) fix(code): probe unreachable Ollama daemon once per reload (#4806)
- [`4d483fd`](https://github.com/langchain-ai/deepagents/commit/4d483fdf39b6d7c691322041a4fc58be06ecfd6b) fix(code): count only running tools in live tool-group line (#4809)
- [`20089a5`](https://github.com/langchain-ai/deepagents/commit/20089a53703b031726fdc898831bb09f434527b7) feat(code): persist Debug Console `Ctrl+L` clear across reopen (#4812)
- [`2d6b2ce`](https://github.com/langchain-ai/deepagents/commit/2d6b2ceeda97f8c77d1b3ea70c674b076e7d713f) fix(code): make markdown `AppMessage` output selectable (#4814)
- [`4112392`](https://github.com/langchain-ai/deepagents/commit/41123924da6f6aa0243b51f2374210bee86df089) fix(code): surface `langchain-quickjs` in `/version` core deps (#4813)

</details>

## deepagents-code==0.1.42: deepagents-code==0.1.42

**Published**: 2026-07-17

### Features

- Plugins are now generally available. ([#4797](https://github.com/langchain-ai/deepagents/issues/4797))
- Added search to the plugin list and now summarize plugin changes after reloads. ([#4765](https://github.com/langchain-ai/deepagents/issues/4765), [#4767](https://github.com/langchain-ai/deepagents/issues/4767))
- Added Kimi K3 to the OpenRouter model selector. ([#4803](https://github.com/langchain-ai/deepagents/issues/4803))
- Added hidden `connect` and `reconnect` keywords for `/restart`. ([#4807](https://github.com/langchain-ai/deepagents/issues/4807))
- Debug Console thread IDs can now be clicked to copy, with an added LangSmith link. ([#4760](https://github.com/langchain-ai/deepagents/issues/4760))
- Added auto-approve (YOLO) mode to trace metadata. ([#4764](https://github.com/langchain-ai/deepagents/issues/4764))

### Bug Fixes

- Improved plugin marketplace loading and onboarding, including asynchronous marketplace additions and polish for empty marketplace states. ([#4766](https://github.com/langchain-ai/deepagents/issues/4766), [#4759](https://github.com/langchain-ai/deepagents/issues/4759))
- Clarified plugin component discovery and reload status. ([#4774](https://github.com/langchain-ai/deepagents/issues/4774))
- Avoided blocking MCP OAuth token refresh. ([#4770](https://github.com/langchain-ai/deepagents/issues/4770))
- Restored keyboard focus for marketplace details. ([#4763](https://github.com/langchain-ai/deepagents/issues/4763))
- Dismissed the startup tip when submitting an initial prompt with `-m`. ([#4779](https://github.com/langchain-ai/deepagents/issues/4779))

---

Internal maintainers: @johannes117, @mdrxy

Released by: @mdrxy

<details>
<summary>Git log since deepagents-code==0.1.41</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`18679a1`](https://github.com/langchain-ai/deepagents/commit/18679a1a88a3f10777bf2f45593cb104e822d49f) release(deepagents-code): 0.1.42 (#4793)
- [`3da6e47`](https://github.com/langchain-ai/deepagents/commit/3da6e471c26f1da4cddeb12a435bab92bd7866c6) feat(code): make plugins generally available (#4797)
- [`3b2ffce`](https://github.com/langchain-ai/deepagents/commit/3b2ffce923e06370efe177e9ca91f70e86f19602) fix(code): avoid blocking MCP OAuth token refresh (#4770)
- [`0d1bb6a`](https://github.com/langchain-ai/deepagents/commit/0d1bb6a1224b91cae9dcdb7014a6410a82b79001) fix(code): add marketplaces asynchronously (#4766)
- [`9cad2f0`](https://github.com/langchain-ai/deepagents/commit/9cad2f00dd0473828f80f782c889b939483727f6) feat(code): summarize plugin changes on reload (#4767)
- [`99250ee`](https://github.com/langchain-ai/deepagents/commit/99250ee1749c977e95389baafde3d358c953ea0f) feat(code): add `reconnect`/`connect` hidden keywords for `/restart` (#4807)
- [`a6c20b1`](https://github.com/langchain-ai/deepagents/commit/a6c20b1a4d2a8b8a03690460a30c501ab7fbb6cb) feat(code): add plugin list search (#4765)
- [`fc94bb7`](https://github.com/langchain-ai/deepagents/commit/fc94bb7da9e66218de063aa4415dcf9717f15fce) feat(code): add Kimi K3 to model selector under OpenRouter (#4803)
- [`29d6046`](https://github.com/langchain-ai/deepagents/commit/29d6046998d47c5070799a0ff8395474579ae2e8) chore(deps): require `langchain-quickjs` 0.3.3 (#4802)
- [`b17d1b3`](https://github.com/langchain-ai/deepagents/commit/b17d1b3ebef7d537b5ce8f254958f569aec376a0) chore(deps): bump mcp from 1.26.0 to 1.28.1 in /libs/evals (#4800)
- [`f7ed5d8`](https://github.com/langchain-ai/deepagents/commit/f7ed5d85c634dfa4c8812c0ffa50c580b29042c1) release(langchain-quickjs): 0.3.3 (#4372)
- [`2d35507`](https://github.com/langchain-ai/deepagents/commit/2d35507b5c7ff7f504f3d294ac499140752c4f59) feat(code): Debug Console thread ID click-to-copy with LangSmith link (#4760)
- [`d88601e`](https://github.com/langchain-ai/deepagents/commit/d88601ed582b89d4a5b517e842029d06370c0891) feat(code): trace auto-approve (YOLO) mode in trace metadata (#4764)
- [`78f9f5f`](https://github.com/langchain-ai/deepagents/commit/78f9f5fcb38dcaec6f0d7552c061ec15844c839b) test(code): isolate ambient env and global dotenv in unit tests (#4778)
- [`8acd414`](https://github.com/langchain-ai/deepagents/commit/8acd414a2e712d8b8b1968e40bff40483196856b) fix(code): dismiss startup tip on `-m` initial submission (#4779)
- [`e821d3d`](https://github.com/langchain-ai/deepagents/commit/e821d3dd26e8cd0c6ada1a44ceaceddad9f5ee80) fix(code): restore marketplace details keyboard focus [closes DCD-50] (#4763)
- [`7d707b8`](https://github.com/langchain-ai/deepagents/commit/7d707b840f132ad65e5ac8443ec7fece393180f8) fix(code): clarify plugin component discovery and reload status (#4774)
- [`ab2e101`](https://github.com/langchain-ai/deepagents/commit/ab2e101d02d0fc5be45b0581c4e04d441402dc29) fix(code): improve empty marketplace onboarding and list polish (#4759)

</details>

## langchain-quickjs==0.3.3: langchain-quickjs==0.3.3

**Published**: 2026-07-16

### Bug Fixes

* Propagate JS `task()` subagent interrupts ([#4401](https://github.com/langchain-ai/deepagents/issues/4401)) ([0b30e49](https://github.com/langchain-ai/deepagents/commit/0b30e494d59187de2e6e23db062abbf835a6d265))
* Correct `eval` await description ([#4371](https://github.com/langchain-ai/deepagents/issues/4371)) ([4ab860f](https://github.com/langchain-ai/deepagents/commit/4ab860f007832821bd303809d7c2c1d2c86a6528))

---

Internal maintainers: @hntrl, @mdrxy

Released by: @mdrxy

<details>
<summary>Git log since langchain-quickjs==0.3.2</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`f7ed5d8`](https://github.com/langchain-ai/deepagents/commit/f7ed5d85c634dfa4c8812c0ffa50c580b29042c1) release(langchain-quickjs): 0.3.3 (#4372)
- [`0b30e49`](https://github.com/langchain-ai/deepagents/commit/0b30e494d59187de2e6e23db062abbf835a6d265) fix(quickjs): propagate JS `task()` subagent interrupts (#4401)
- [`44daa24`](https://github.com/langchain-ai/deepagents/commit/44daa243bb960f9c1ecb1b5ee734153e9430b0da) chore(repo): raise LangChain integration minimums (#4601)
- [`0390043`](https://github.com/langchain-ai/deepagents/commit/0390043a32136f34d787355f0f87a50a6f686a06) release(deepagents-code): 0.1.31 (#4424)
- [`4ab860f`](https://github.com/langchain-ai/deepagents/commit/4ab860f007832821bd303809d7c2c1d2c86a6528) fix(quickjs): correct `eval` await description (#4371)
- [`8e8680b`](https://github.com/langchain-ai/deepagents/commit/8e8680bd01d717b3e639ad205eeb461e52998732) build(deps): refresh dependency minimums (#4331)
- [`c61c901`](https://github.com/langchain-ai/deepagents/commit/c61c9019da2f9ff43fb72fc586814b4240c477a1) chore(deps): bump langgraph-checkpoint from 4.1.0 to 4.1.1 in /libs/partners/quickjs (#4270)
- [`965cbd5`](https://github.com/langchain-ai/deepagents/commit/965cbd566b019a9ff2e39a35a5dce387660a77db) chore(repo): cut over v0.7 to main (#4280)
- [`e26869c`](https://github.com/langchain-ai/deepagents/commit/e26869c40a932861bb9f824783adaf7b363a40ea) ci(quickjs): run prompt smoke tests on SDK changes (#4266)
- [`7e70065`](https://github.com/langchain-ai/deepagents/commit/7e70065200007896336f38fe905803e6763e8f85) release(deepagents): 0.6.12 (#4088)

</details>

## deepagents-code==0.1.41: deepagents-code==0.1.41

**Published**: 2026-07-16

### Bug Fixes

- Pinned `filelock` below 3.30 to avoid blocking imports ([#4786](https://github.com/langchain-ai/deepagents/issues/4786))

---

Internal maintainers: @mdrxy

Released by: @mdrxy

<details>
<summary>Git log since deepagents-code==0.1.40</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`d46a2cb`](https://github.com/langchain-ai/deepagents/commit/d46a2cb033b8195f440f68de744e75874b6f8e6f) release(deepagents-code): 0.1.41 (#4790)
- [`f9b7d75`](https://github.com/langchain-ai/deepagents/commit/f9b7d75f24301081ae8973cd59f00e609eb024c5) fix(code): pin filelock below 3.30 to avoid blocking import (#4786)

</details>

## deepagents-code==0.1.40: deepagents-code==0.1.40

**Published**: 2026-07-16

### Features

- Added plugin marketplace support ([#4554](https://github.com/langchain-ai/deepagents/issues/4554)).
- Added an “always allow” option to the project MCP approval prompt ([#4562](https://github.com/langchain-ai/deepagents/issues/4562)).
- Improved `/goal` workflows: criteria generation now runs server-side, YOLO mode auto-accepts criteria, goals complete after satisfied grading, and goal review editing now supports `Ctrl+X` ([#4754](https://github.com/langchain-ai/deepagents/issues/4754), [#4784](https://github.com/langchain-ai/deepagents/issues/4784), [#4781](https://github.com/langchain-ai/deepagents/issues/4781), [#4780](https://github.com/langchain-ai/deepagents/issues/4780)).
- Reasoning effort now persists across restarts ([#4728](https://github.com/langchain-ai/deepagents/issues/4728)).
- Added a toast prompting you to re-paste when a chat paste collapses ([#4742](https://github.com/langchain-ai/deepagents/issues/4742)).

### Bug Fixes

- Tool calls awaiting approval are now surfaced correctly ([#4739](https://github.com/langchain-ai/deepagents/issues/4739)).
- Fixed transcript tail hydration when scrolled to the bottom edge ([#4733](https://github.com/langchain-ai/deepagents/issues/4733)).
- Kept chat input responsive during MCP viewer `Ctrl+R` reconnects ([#4753](https://github.com/langchain-ai/deepagents/issues/4753)).
- Improved inline free-text prompts by sharing paste handling and matching primary-input `Ctrl+D` behavior ([#4736](https://github.com/langchain-ai/deepagents/issues/4736), [#4729](https://github.com/langchain-ai/deepagents/issues/4729)).
- Fixed local offloaded tool results to use the real filesystem ([#4740](https://github.com/langchain-ai/deepagents/issues/4740)).
- Cleaned offloaded history when deleting a thread ([#4751](https://github.com/langchain-ai/deepagents/issues/4751)).
- Removed duplicated content from the system prompt by overwriting the base prompt ([#4516](https://github.com/langchain-ai/deepagents/issues/4516)).
- Closed subprocess transport during install teardown ([#4735](https://github.com/langchain-ai/deepagents/issues/4735)).
- Added targeted `uv` constraints for prerelease dependencies ([#4744](https://github.com/langchain-ai/deepagents/issues/4744)).

---

Internal maintainers: @johannes117, @hntrl, @aolsenjazz, @ccurme, @mdrxy

Released by: @mdrxy

<details>
<summary>Git log since deepagents-code==0.1.39</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`019489e`](https://github.com/langchain-ai/deepagents/commit/019489edb9c0d442a42ae6e5229f4ddf8ba56e08) release(deepagents-code): 0.1.40 (#4734)
- [`cc662f2`](https://github.com/langchain-ai/deepagents/commit/cc662f236dbf72303be5cbf2c4cfd00710a2d32c) feat(code): auto-accept `/goal` criteria in YOLO mode (#4784)
- [`682ce0f`](https://github.com/langchain-ai/deepagents/commit/682ce0fc760e96cf546ea9c97050293548aebc45) fix(code): complete goals after satisfied grading (#4781)
- [`641b906`](https://github.com/langchain-ai/deepagents/commit/641b906157db2c6ae476805f0714ae8f51040492) feat(code): add `Ctrl+X` to goal review editing (#4780)
- [`9fdd498`](https://github.com/langchain-ai/deepagents/commit/9fdd498937842e2ac490ae0e0ca74eef47abd0bb) feat(code): move `/goal` criteria generation server-side (#4754)
- [`47788ed`](https://github.com/langchain-ai/deepagents/commit/47788ededafd44f74b4368ec6793bf4685ad3a3a) fix(code): clean offloaded history when deleting a thread (#4751)
- [`28dc96d`](https://github.com/langchain-ai/deepagents/commit/28dc96d08bc057f2e435b557062a819db4191310) fix(code): keep chat input responsive during MCP viewer `Ctrl+R` reconnect (#4753)
- [`dacc8b0`](https://github.com/langchain-ai/deepagents/commit/dacc8b0eadb504a6ddb0d61f84d598a06b45e3a1) test(code): isolate conversation history artifacts (#4750)
- [`b0beef1`](https://github.com/langchain-ai/deepagents/commit/b0beef1fd19367995b16bccf383badbf4fe20be5) test(code): update sandbox overwrite expectation (#4737)
- [`8148724`](https://github.com/langchain-ai/deepagents/commit/814872492eb2bed4d5c382c6c1fe985ad4354b68) fix(code): surface tool calls awaiting approval (#4739)
- [`ffab82a`](https://github.com/langchain-ai/deepagents/commit/ffab82a9458d2a03b95cbc515f883212090a6992) feat(code): add "always allow" to project MCP approval prompt (#4562)
- [`36c4024`](https://github.com/langchain-ai/deepagents/commit/36c40241b85ec5b0452d9ca334e5f09b95dc16aa) fix(code): targeted uv constraints for dcode prerelease deps (#4744)
- [`36051e2`](https://github.com/langchain-ai/deepagents/commit/36051e2a6cdcd9c22f6118f5cfc481e0540913ea) fix(code): put local offloaded tool results on the real filesystem (#4740)
- [`0187d14`](https://github.com/langchain-ai/deepagents/commit/0187d14b83301c116a2f177e6e04ae7a8cc99ca7) feat(code): add plugin marketplace support (#4554)
- [`9a6789a`](https://github.com/langchain-ai/deepagents/commit/9a6789ac19c48f8289593e92a3e34ffa8d201190) chore(code): document UI component organization (#4707)
- [`2266f58`](https://github.com/langchain-ai/deepagents/commit/2266f58e4713d23ba0b30eb8646424d01165c11b) fix(code): deduplicate content from system prompt by overwriting base prompt (#4516)
- [`e50e238`](https://github.com/langchain-ai/deepagents/commit/e50e2383261ba39923b5d6c48b7fe3b058475cd3) feat(code): toast to re-paste when a chat paste collapses (#4742)
- [`132f9f7`](https://github.com/langchain-ai/deepagents/commit/132f9f7a3059e67927beaac96fe841b7f132a8a3) style(code): collapse `/clear` resume hint onto previous-thread line (#4741)
- [`625e601`](https://github.com/langchain-ai/deepagents/commit/625e601da8cd77e13b98b2b81626f320478108dc) fix(code): close subprocess transport on install teardown (#4735)
- [`369ec69`](https://github.com/langchain-ai/deepagents/commit/369ec6920af35cdec713b9e27d0d1816cafaf556) fix(code): share paste handling with inline free-text prompts (#4736)
- [`d8038e3`](https://github.com/langchain-ai/deepagents/commit/d8038e33c6bc3eec32bb221f4cb2d83926e70ad1) docs(code): define input surface nomenclature in AGENTS.md (#4738)
- [`8a6963b`](https://github.com/langchain-ai/deepagents/commit/8a6963ba52eee2ab8de5df2c14210f472c828d38) fix(code): match primary-input `Ctrl+D` behavior in inline free-text fields (#4729)
- [`c584dcf`](https://github.com/langchain-ai/deepagents/commit/c584dcfb3ad287446e0209b8bd4ca31cee587eea) feat(code): persist reasoning effort across restarts (#4728)
- [`02a2461`](https://github.com/langchain-ai/deepagents/commit/02a246144c764a1c57b60223652ade8716c7529b) fix(code): hydrate transcript tail when scrolled to the bottom edge (#4733)

</details>

## deepagents-code==0.1.39: deepagents-code==0.1.39

**Published**: 2026-07-14

### Bug fixes

- Improved Debug Console log retention by partitioning retained logs by level ([#4718](https://github.com/langchain-ai/deepagents/issues/4718)) ([c6e3b35](https://github.com/langchain-ai/deepagents/commit/c6e3b351f1826aa6ea97be244acd867950a032ee)).
- Fixed `/offload` to run server-side ([#4696](https://github.com/langchain-ai/deepagents/issues/4696)) ([564e5a0](https://github.com/langchain-ai/deepagents/commit/564e5a05bca5236ae33ce1147865111f931d257c)).

---

Internal maintainers: @mdrxy

Released by: @mdrxy

<details>
<summary>Git log since deepagents-code==0.1.38</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`8eb909a`](https://github.com/langchain-ai/deepagents/commit/8eb909a59b8291b6e05fcf6f38cf93678f87a243) release(deepagents-code): 0.1.39 (#4725)
- [`564e5a0`](https://github.com/langchain-ai/deepagents/commit/564e5a05bca5236ae33ce1147865111f931d257c) fix(code): run `/offload` server-side (#4696)
- [`0c7e58c`](https://github.com/langchain-ai/deepagents/commit/0c7e58c508049db7fa04d388a3dad4d7dcc91b39) refactor(code): share inline prompt infrastructure (#4724)
- [`9972614`](https://github.com/langchain-ai/deepagents/commit/9972614f57c19f6165f6a82e7dfbb665b15e9289) style(code): rename "auto" approval-mode label to "YOLO" (#4726)
- [`c6e3b35`](https://github.com/langchain-ai/deepagents/commit/c6e3b351f1826aa6ea97be244acd867950a032ee) fix(code): partition Debug Console log retention by level (#4718)

</details>

## deepagents-code==0.1.38: deepagents-code==0.1.38

**Published**: 2026-07-14

### Features

* Improve `/goal` criteria UX ([#4694](https://github.com/langchain-ai/deepagents/issues/4694)) ([06f46ff](https://github.com/langchain-ai/deepagents/commit/06f46fffe36efa9f3adcb331b07df283d8bed874))
* Add interactive goal management ([#4693](https://github.com/langchain-ai/deepagents/issues/4693)) ([64205e2](https://github.com/langchain-ai/deepagents/commit/64205e238c280ae05b2bf9253ac40c6f85ffb49c))
* Conditionally drop `TodoListMiddleware` ([#4685](https://github.com/langchain-ai/deepagents/issues/4685)) ([d3a3077](https://github.com/langchain-ai/deepagents/commit/d3a3077e8536696dcf4a9dcd8555e9c871562e74))
* Add `memory.auto_save` config flag ([#4700](https://github.com/langchain-ai/deepagents/issues/4700)) ([55b60ca](https://github.com/langchain-ai/deepagents/commit/55b60ca08da4eef294ac3c162610b2a151584ea5))
* Trace experimental mode in metadata ([#4705](https://github.com/langchain-ai/deepagents/issues/4705)) ([22d5045](https://github.com/langchain-ai/deepagents/commit/22d50456324e9b8c0121a3a06787e19c1b88e1aa))

### Bug Fixes

* Align context diff rows with changed rows ([#4714](https://github.com/langchain-ai/deepagents/issues/4714)) ([f9915db](https://github.com/langchain-ai/deepagents/commit/f9915db4206ef2d794ad07fdccbdd4ee58963142))
* Hydrate virtualized transcript on scroll offset changes ([#4646](https://github.com/langchain-ai/deepagents/issues/4646)) ([f77eeb0](https://github.com/langchain-ai/deepagents/commit/f77eeb0a036281f84bf7d0b05ea60e02630f55c1))
* Keep TODO and edit tools expanded ([#4704](https://github.com/langchain-ai/deepagents/issues/4704)) ([1d549d3](https://github.com/langchain-ai/deepagents/commit/1d549d3f3c9bb60c3ce39d4a0c913bcefe9610d5))
* Make `/goal` completion and grading reliable ([#4691](https://github.com/langchain-ai/deepagents/issues/4691)) ([9da63c6](https://github.com/langchain-ai/deepagents/commit/9da63c64a59503e3366e9bc7224cb1251af476be))
* Preflight Ollama host reachability before discovery probe ([#4702](https://github.com/langchain-ai/deepagents/issues/4702)) ([96fe71a](https://github.com/langchain-ai/deepagents/commit/96fe71a3815e1020edeb3be1af70b0cadb85931c))
* Quiet expected non-repo `git ls-files` logging ([#4701](https://github.com/langchain-ai/deepagents/issues/4701)) ([3d499db](https://github.com/langchain-ai/deepagents/commit/3d499db8a6c76743810a8983107d7c7d7bdb35e6))
* Rename `ls_agent_kind` to `ls_agent_purpose` ([#4708](https://github.com/langchain-ai/deepagents/issues/4708)) ([2678b16](https://github.com/langchain-ai/deepagents/commit/2678b1680d8928e72e8efae00632a694c9b2737a))
* Run MCP login during a run, queue the restart ([#4643](https://github.com/langchain-ai/deepagents/issues/4643)) ([65e1ee8](https://github.com/langchain-ai/deepagents/commit/65e1ee802e2f69762a6d8e6c7c6d37060161ea5a))
* Show "Took &lt;duration&gt;" when `task` tool completes ([#4638](https://github.com/langchain-ai/deepagents/issues/4638)) ([19538e0](https://github.com/langchain-ai/deepagents/commit/19538e0a46a5c2c050412b79fd45608a63cdde52))
* Support unambiguous `read_file` gutters ([#4711](https://github.com/langchain-ai/deepagents/issues/4711)) ([2089b54](https://github.com/langchain-ai/deepagents/commit/2089b54e2a674ede313e790b59febf9dc6f22571))

---

Internal maintainers: @johannes117, @jacoblee93, @mdrxy

Released by: @mdrxy

<details>
<summary>Git log since deepagents-code==0.1.37</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`4338671`](https://github.com/langchain-ai/deepagents/commit/4338671aa1d9bd1fd70f20069aac5468697606bf) hotfix(code): stabilize scroll hydration test (#4720)
- [`98eb512`](https://github.com/langchain-ai/deepagents/commit/98eb51238fb6b5289abf90178dfbe59414309f1d) hotfix(code): trim startup tips (#4719)
- [`73bd973`](https://github.com/langchain-ai/deepagents/commit/73bd9735697b95c664727657128708022fbe04cf) release(deepagents-code): 0.1.38 (#4703)
- [`06f46ff`](https://github.com/langchain-ai/deepagents/commit/06f46fffe36efa9f3adcb331b07df283d8bed874) feat(code): improve `/goal` criteria UX (#4694)
- [`64205e2`](https://github.com/langchain-ai/deepagents/commit/64205e238c280ae05b2bf9253ac40c6f85ffb49c) feat(code): add interactive goal management (#4693)
- [`267d7fd`](https://github.com/langchain-ai/deepagents/commit/267d7fd3959e7f648d434313e33d7c1815c72acc) style(code): inline confirmation after MCP `/mcp login` (#4597)
- [`9da63c6`](https://github.com/langchain-ai/deepagents/commit/9da63c64a59503e3366e9bc7224cb1251af476be) fix(code): make `/goal` completion and grading reliable (#4691)
- [`65e1ee8`](https://github.com/langchain-ai/deepagents/commit/65e1ee802e2f69762a6d8e6c7c6d37060161ea5a) fix(code): run MCP login during a run, queue the restart (#4643)
- [`f9915db`](https://github.com/langchain-ai/deepagents/commit/f9915db4206ef2d794ad07fdccbdd4ee58963142) fix(code): align context diff rows with changed rows (#4714)
- [`19538e0`](https://github.com/langchain-ai/deepagents/commit/19538e0a46a5c2c050412b79fd45608a63cdde52) fix(code): show "Took &lt;duration&gt;" when `task` tool completes (#4638)
- [`2089b54`](https://github.com/langchain-ai/deepagents/commit/2089b54e2a674ede313e790b59febf9dc6f22571) fix(code): support unambiguous `read_file` gutters (#4711)
- [`cf057b4`](https://github.com/langchain-ai/deepagents/commit/cf057b4bcdb77ad67014f7dabe71e71f2366c95e) fix(sdk)!: disambiguate `read_file` line gutters (#4561)
- [`718c652`](https://github.com/langchain-ai/deepagents/commit/718c652b57750cb3d929c16b7fb4509df4e3a00c) chore(code): remove Debug Console startup tip (#4712)
- [`2678b16`](https://github.com/langchain-ai/deepagents/commit/2678b1680d8928e72e8efae00632a694c9b2737a) fix(code): rename `ls_agent_kind` to `ls_agent_purpose` (#4708)
- [`2f7d267`](https://github.com/langchain-ai/deepagents/commit/2f7d2671c1ff3978d525d190cbcc4f726fcbfbdc) style(code): simplify `/clear` resume hint to `/threads -r` (#4709)
- [`1d549d3`](https://github.com/langchain-ai/deepagents/commit/1d549d3f3c9bb60c3ce39d4a0c913bcefe9610d5) fix(code): keep TODO and edit tools expanded (#4704)
- [`55b60ca`](https://github.com/langchain-ai/deepagents/commit/55b60ca08da4eef294ac3c162610b2a151584ea5) feat(code): add `memory.auto_save` config flag (#4700)
- [`22d5045`](https://github.com/langchain-ai/deepagents/commit/22d50456324e9b8c0121a3a06787e19c1b88e1aa) feat(code): trace experimental mode in metadata (#4705)
- [`f77eeb0`](https://github.com/langchain-ai/deepagents/commit/f77eeb0a036281f84bf7d0b05ea60e02630f55c1) fix(code): hydrate virtualized transcript on scroll offset changes (#4646)
- [`d3a3077`](https://github.com/langchain-ai/deepagents/commit/d3a3077e8536696dcf4a9dcd8555e9c871562e74) feat(code): drop `TodoListMiddleware` (#4685)
- [`96fe71a`](https://github.com/langchain-ai/deepagents/commit/96fe71a3815e1020edeb3be1af70b0cadb85931c) fix(code): preflight Ollama host reachability before discovery probe (#4702)
- [`3d499db`](https://github.com/langchain-ai/deepagents/commit/3d499db8a6c76743810a8983107d7c7d7bdb35e6) fix(code): quiet expected non-repo `git ls-files` logging (#4701)

</details>

## deepagents==0.7.0a7: deepagents==0.7.0a7

**Published**: 2026-07-14

> [!WARNING]
> This is a pre-release version. Install with: `pip install deepagents==0.7.0a7`

This alpha improves large-repository filesystem workflows with bounded streaming search, smarter pagination, optional surrounding context, and clearer line gutters.

### Breaking Changes

* `read_file` no longer renders raw text with a `cat -n`-style fixed-width line-number gutter and tab separator. Callers that parse raw tool output should be updated to match ([#4561](https://github.com/langchain-ai/deepagents/pull/4561)).

### Features

* Automatically enable Fireworks prompt-cache session affinity for agents when a compatible `langchain-fireworks` installation is available. ([#4598](https://github.com/langchain-ai/deepagents/pull/4598)) ([5d878bf](https://github.com/langchain-ai/deepagents/commit/5d878bf1341afc3f96398733b7ef18eec4b66139)).
* Bound the agent-facing filesystem `grep` tool to 1,000 total matches by default, stream local ripgrep output, and stop searching once the cap is reached ([#4570](https://github.com/langchain-ai/deepagents/pull/4570)) ([8e86f5e](https://github.com/langchain-ai/deepagents/commit/8e86f5ecc8908762a2c748880287f190dde70600)).
* Report the returned source-line range, total and remaining line counts, and next `offset` after partial paginated `read_file` calls, including reads shortened by sandbox output limits or middleware truncation ([#4540](https://github.com/langchain-ai/deepagents/pull/4540)) ([8321194](https://github.com/langchain-ai/deepagents/commit/83211940a2cdf4c52ac21a6cde8647716a998504)).
* Let direct `FilesystemBackend.grep()` callers request surrounding lines with the new keyword-only `context_lines` argument. ([#4706](https://github.com/langchain-ai/deepagents/pull/4706)) ([65230df](https://github.com/langchain-ai/deepagents/commit/65230df6f91d2bbe5f83d4d938da6bfac52363a1)).

### Bug Fixes

* Disambiguate `read_file` line-number gutters from tab-indented source by separating dynamically aligned line and continuation markers from source content with two spaces ([#4561](https://github.com/langchain-ai/deepagents/pull/4561)) ([cf057b4](https://github.com/langchain-ai/deepagents/commit/cf057b4bcdb77ad67014f7dabe71e71f2366c95e)).
* Keep fields marked with `PrivateStateAttr`, including fields declared through `create_deep_agent(state_schema=...)`, out of subagent inputs and returned parent-state updates so private custom state stays within the owning agent ([#4587](https://github.com/langchain-ai/deepagents/pull/4587)) ([a4662c0](https://github.com/langchain-ai/deepagents/commit/a4662c07296c378045006c9f45ed1d12bd1a9da6)).
* Constrain sandbox `glob` and slash-pattern `grep` searches to their declared search root by treating leading `/` as search-root-relative, rejecting `..` traversal segments, and filtering symlink-resolved matches outside the root ([#4588](https://github.com/langchain-ai/deepagents/pull/4588)) ([c6c7213](https://github.com/langchain-ai/deepagents/commit/c6c72139b3ee7d090f657dd19ced59a9bbc41140)).

---

Thanks to our community contributors: @kavishkartha05 ([Twitter](https://x.com/kavishkartha31), [LinkedIn](https://linkedin.com/in/kavish-kartha)), @nv-kasikritc

Internal maintainers: @imnishitha, @srimanthtangedipalli-eng, @jkennedyvz, @ccurme, @mdrxy

Released by: @mdrxy

Released from `alpha/deepagents-0-7-0a7` at commit [`c16ebe1`](https://github.com/langchain-ai/deepagents/commit/c16ebe1613d9258e8eb2c58ad7fe872549c0a08d)

<details>
<summary>Git log since deepagents==0.6.12</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`c16ebe1`](https://github.com/langchain-ai/deepagents/commit/c16ebe1613d9258e8eb2c58ad7fe872549c0a08d) hotfix(sdk): alpha release 0.7.0a7
- [`5d878bf`](https://github.com/langchain-ai/deepagents/commit/5d878bf1341afc3f96398733b7ef18eec4b66139) feat(sdk): use `FireworksPromptCachingMiddleware` for session affinity (#4598)
- [`8e86f5e`](https://github.com/langchain-ai/deepagents/commit/8e86f5ecc8908762a2c748880287f190dde70600) feat(sdk): add total match cap and streaming to grep (#4570)
- [`cf057b4`](https://github.com/langchain-ai/deepagents/commit/cf057b4bcdb77ad67014f7dabe71e71f2366c95e) fix(sdk)!: disambiguate `read_file` line gutters (#4561)
- [`8321194`](https://github.com/langchain-ai/deepagents/commit/83211940a2cdf4c52ac21a6cde8647716a998504) feat(sdk): report remaining lines for paginated reads (#4540)
- [`65230df`](https://github.com/langchain-ai/deepagents/commit/65230df6f91d2bbe5f83d4d938da6bfac52363a1) feat(sdk): support surrounding lines in filesystem grep results (#4706)
- [`a4662c0`](https://github.com/langchain-ai/deepagents/commit/a4662c07296c378045006c9f45ed1d12bd1a9da6) fix(sdk): isolate private custom state from subagents (#4587)
- [`44daa24`](https://github.com/langchain-ai/deepagents/commit/44daa243bb960f9c1ecb1b5ee734153e9430b0da) chore(repo): raise LangChain integration minimums (#4601)
- [`c6c7213`](https://github.com/langchain-ai/deepagents/commit/c6c72139b3ee7d090f657dd19ced59a9bbc41140) fix(langsmith-sandbox): sandbox glob path boundary checks (#4588)
- [`d5a60ec`](https://github.com/langchain-ai/deepagents/commit/d5a60ece7379c37c81edcef2cd6c2811ddc90c9a) feat(sdk): add NVIDIA Nemotron 3 Ultra harness profile (#4192)
- [`cbdb0a7`](https://github.com/langchain-ai/deepagents/commit/cbdb0a7df8cd4bbacff9ca7ac2e42232ef290c10) fix(sdk): isolate composite glob paths (#4531)
- [`7be76c7`](https://github.com/langchain-ai/deepagents/commit/7be76c752117e6e61dcdc931ea5147261fad6768) fix(sdk): preserve `ContextT` on `create_deep_agent` `middleware` (#4055)
- [`d62534c`](https://github.com/langchain-ai/deepagents/commit/d62534c86b87a91aca16c6bfb71209232d69a6ec) fix(sdk): accept list format for skill `allowed-tools` (#4140)
- [`2f5f5b8`](https://github.com/langchain-ai/deepagents/commit/2f5f5b85793d944167a42e8d5b8e0a11bb1e3932) fix(sdk): make skill truncation warnings actionable (#4141)
- [`56c5a5e`](https://github.com/langchain-ai/deepagents/commit/56c5a5e0e64cabe5fbe27308d3ddfd8a8fd9eb22) feat(sdk): improve system prompt configurability (#4437)
- [`4cb4749`](https://github.com/langchain-ai/deepagents/commit/4cb47491b024991322b7c24062c58cbcdc26a727) feat(sdk): add NVIDIA NIM app-origin attribution (#4455)
- [`b1dbf5e`](https://github.com/langchain-ai/deepagents/commit/b1dbf5e66ac81a9fd95abf6987ba058bb14a5edf) fix(sdk): improve grep literal guidance and sandbox glob routing (#4168)
- [`ef591e7`](https://github.com/langchain-ai/deepagents/commit/ef591e7a86b13bbdcb0fdedd45a8f1fe33573839) feat(sdk): bound grep/glob with partial results and a `truncated` flag (#4063)
- [`d77496b`](https://github.com/langchain-ai/deepagents/commit/d77496b969b9c59ce1c7c44e2085e5388e12c306) fix(sdk): sandbox not-found contract and glob deny over-blocking on delete (#4321)
- [`704a70d`](https://github.com/langchain-ai/deepagents/commit/704a70dddbd59b8c6abf658a4211c76bce1445f0) feat(sdk):  add `enabled_tools` allowlist to `FilesystemMiddleware` (#4325)
- [`feab6e0`](https://github.com/langchain-ai/deepagents/commit/feab6e0b3762aa42fa458af16d0a3e8d04d8b075) fix(sdk): unify `grep` include-glob semantics across backends (#3936)
- [`b0d92c0`](https://github.com/langchain-ai/deepagents/commit/b0d92c0f38ca0aa037b56e26b2b0d322cdd07856) fix(sdk): move `get_sync()` inside try in `check_async_task` and `cancel_async_task` (#3967)
- [`d4ba51c`](https://github.com/langchain-ai/deepagents/commit/d4ba51c46384265b00131fb05429486804103196) docs(sdk): expand `profiles` package docstring with directory layout (#4041)
- [`b927147`](https://github.com/langchain-ai/deepagents/commit/b927147d026749c6c790bb06c9853515dabf579c) feat(sdk): optional video frame extraction on `read_file` (#4094)
- [`d6692a7`](https://github.com/langchain-ai/deepagents/commit/d6692a7c713490f170b17510d613e02ee37574ab) feat(code,sdk): add rubric iteration controls (#4405)
- [`a51c8d2`](https://github.com/langchain-ai/deepagents/commit/a51c8d2b1723d143439a1466f5a49a52c442bdfc) fix(sdk): emit terminal rubric iteration status (#4406)
- [`90c8472`](https://github.com/langchain-ai/deepagents/commit/90c8472ae226394a186bf2075459645c2056db7d) feat(sdk): allow users to override default middleware by name (#4251)
- [`02f5bd7`](https://github.com/langchain-ai/deepagents/commit/02f5bd7bc02f2baaf5a1eefce7d686ba62493647) feat(sdk): reduce round trips when offloading large tool results with `sandbox.execute` (#4230)
- [`8e8680b`](https://github.com/langchain-ai/deepagents/commit/8e8680bd01d717b3e639ad205eeb461e52998732) build(deps): refresh dependency minimums (#4331)
- [`23500f4`](https://github.com/langchain-ai/deepagents/commit/23500f45c7d7128ea68421c92be6fb53ca8b6c68) chore(deps): bump langgraph-checkpoint from 4.1.0 to 4.1.1 in /libs/deepagents (#4274)
- [`965cbd5`](https://github.com/langchain-ai/deepagents/commit/965cbd566b019a9ff2e39a35a5dce387660a77db) chore(repo): cut over v0.7 to main (#4280)

</details>

## deepagents-code==0.1.37: deepagents-code==0.1.37

**Published**: 2026-07-13

### Features

* Add Meta model provider ([#4650](https://github.com/langchain-ai/deepagents/issues/4650)) ([70829c5](https://github.com/langchain-ai/deepagents/commit/70829c5846b6bdde1cee51f0f4929e819ba1026b))
* Set `prompt_cache_key` for OpenAI models ([#4632](https://github.com/langchain-ai/deepagents/issues/4632)) ([8cf57ac](https://github.com/langchain-ai/deepagents/commit/8cf57aca9f41c3c4ca6d9796dc2cb80d4b22fb6d))
* Support Fireworks `/routers` model ids ([#4591](https://github.com/langchain-ai/deepagents/issues/4591)) ([1c08d27](https://github.com/langchain-ai/deepagents/commit/1c08d2705f73f6870610849e00910b94458accf1))
* `/model` Ctrl+N toggle for names vs raw specs ([#4592](https://github.com/langchain-ai/deepagents/issues/4592)) ([518c322](https://github.com/langchain-ai/deepagents/commit/518c322e7dda840b5a740541afc895516a74925f))
* `/tools` slash command ([#4649](https://github.com/langchain-ai/deepagents/issues/4649)) ([b1600a8](https://github.com/langchain-ai/deepagents/commit/b1600a8da784899d9db5bdf93be07b4c7f53a46c))
* Add `-s` alias for `--skill` ([#4620](https://github.com/langchain-ai/deepagents/issues/4620)) ([c9b7ac2](https://github.com/langchain-ai/deepagents/commit/c9b7ac20752e4270d286b4af3fcf710e7e5bee87))
* Configurable chat cursor style ([#4687](https://github.com/langchain-ai/deepagents/issues/4687)) ([a22484b](https://github.com/langchain-ai/deepagents/commit/a22484ba2e001fd62fbff0fe916f1b3b93889fc3))
* Expand environment variables in MCP config ([#4681](https://github.com/langchain-ai/deepagents/issues/4681)) ([4f5d7be](https://github.com/langchain-ai/deepagents/commit/4f5d7be1b4073dee346e5a974841721646fa4860))
* Hide diff widget for credential files ([#4593](https://github.com/langchain-ai/deepagents/issues/4593)) ([4c49a24](https://github.com/langchain-ai/deepagents/commit/4c49a24c4c488f45859b45628cfa57719e52f596))
* In-app Debug Console ([#4564](https://github.com/langchain-ai/deepagents/issues/4564)) ([4f94a30](https://github.com/langchain-ai/deepagents/commit/4f94a30c11efb1819b08647d15b50b9b1e7bf043))
* Offer abort in `/threads` cwd-switch prompt ([#4583](https://github.com/langchain-ai/deepagents/issues/4583)) ([aaeac99](https://github.com/langchain-ai/deepagents/commit/aaeac99d9f17b6a55d663c21a4d063444b6a1870))
* Resume threads in-TUI with `/threads -r [ID]` ([#4609](https://github.com/langchain-ai/deepagents/issues/4609)) ([d442673](https://github.com/langchain-ai/deepagents/commit/d44267358e272553c8ece33d367514430be7c0da))
* Show `(debug enabled)` on splash when `DEEPAGENTS_CODE_DEBUG` is set ([#4584](https://github.com/langchain-ai/deepagents/issues/4584)) ([f10b877](https://github.com/langchain-ai/deepagents/commit/f10b877e5e48c3a1e15bd72d2ce06dfb16203231))

### Bug Fixes

* Avoid repeated startup auto-update stalls ([#4648](https://github.com/langchain-ai/deepagents/issues/4648)) ([12a9c9d](https://github.com/langchain-ai/deepagents/commit/12a9c9d6813a83e5eeff9feed0c4068d1fcc69c4))
* Infer Fireworks provider from qualified model IDs ([#4594](https://github.com/langchain-ai/deepagents/issues/4594)) ([4d2aa8a](https://github.com/langchain-ai/deepagents/commit/4d2aa8a9684609eee45cd93b0af5149d8dd09eea))
* Capture input typed before TUI startup ([#4684](https://github.com/langchain-ai/deepagents/issues/4684)) ([ef9a4a8](https://github.com/langchain-ai/deepagents/commit/ef9a4a8770f4daec70e640d6d2f23dd798d4ede2))
* Detach owned `langgraph dev` server from terminal ([#4642](https://github.com/langchain-ai/deepagents/issues/4642)) ([d1f3afe](https://github.com/langchain-ai/deepagents/commit/d1f3afecdc015b5d1c9fb098d6347c7d7180e417))
* Infer additional model providers ([#4675](https://github.com/langchain-ai/deepagents/issues/4675)) ([4ceed24](https://github.com/langchain-ai/deepagents/commit/4ceed24d3758801ed9df1024602e90488004cef1))
* Preserve `Ctrl+D` deletion in non-empty input ([#4626](https://github.com/langchain-ai/deepagents/issues/4626)) ([306bd89](https://github.com/langchain-ai/deepagents/commit/306bd893f214237b6b4eede7c2ce0eaff66f5527))
* Quit with `Ctrl+D` at end of prompt ([#4678](https://github.com/langchain-ai/deepagents/issues/4678)) ([2f8c111](https://github.com/langchain-ai/deepagents/commit/2f8c11176f5cc9350c3337b2dfcf9f19886d5d02))
* Reap langgraph dev server when startup is cancelled ([#4629](https://github.com/langchain-ai/deepagents/issues/4629)) ([904ff05](https://github.com/langchain-ai/deepagents/commit/904ff05620a576100e05fd65810d38405c4942d4))
* Reject `--auto-approve` in headless mode ([#4617](https://github.com/langchain-ai/deepagents/issues/4617)) ([997be16](https://github.com/langchain-ai/deepagents/commit/997be1643aff6d6900b8b8c95832cdf93be8c0d7))
* Route explicit `--stdin` + `--skill` to headless path ([#4611](https://github.com/langchain-ai/deepagents/issues/4611)) ([724e24a](https://github.com/langchain-ai/deepagents/commit/724e24a31546e1f31feca3bb2344717550682595))
* Skip Esc prompt-restore once output generation begins ([#4582](https://github.com/langchain-ai/deepagents/issues/4582)) ([14f384f](https://github.com/langchain-ai/deepagents/commit/14f384fc0083c07a7f44f97543b40b74cf93c13f))
* Remove misleading agent names from help ([#4671](https://github.com/langchain-ai/deepagents/issues/4671)) ([ac15732](https://github.com/langchain-ai/deepagents/commit/ac1573281530c1564fe07f8a21608e4d4dec2c3b))
* Support plain `exit` quit command ([#4543](https://github.com/langchain-ai/deepagents/issues/4543)) ([e6f10a1](https://github.com/langchain-ai/deepagents/commit/e6f10a149051128677c9f6f37663922054a7ac26))
* Sync `ask_user` active-question highlight with focus ([#4599](https://github.com/langchain-ai/deepagents/issues/4599)) ([e4c29b5](https://github.com/langchain-ai/deepagents/commit/e4c29b5264413d23d8dc70cabae72feb5f3f3dcb))
* Wrap MCP viewer navigation ([#4677](https://github.com/langchain-ai/deepagents/issues/4677)) ([cffc732](https://github.com/langchain-ai/deepagents/commit/cffc73213bfdcec26cb82c413fa7e27db4afc0ca))

### Performance Improvements

* Load MCP servers concurrently during graph build ([#4659](https://github.com/langchain-ai/deepagents/issues/4659)) ([c5345cc](https://github.com/langchain-ai/deepagents/commit/c5345cc04cd810c6238e42dfbfa14497ae1b9020))

---

Internal maintainers: @johannes117, @wbbradley, @agola11, @ccurme, @mdrxy

Released by: @mdrxy

<details>
<summary>Git log since deepagents-code==0.1.36</summary>

This commit history includes changes to this package. Commits are listed newest first.

- [`def6369`](https://github.com/langchain-ai/deepagents/commit/def6369aed1a8dcb857db52285fa2e8976bdcd07) release(deepagents-code): 0.1.37 (#4619)
- [`4f5d7be`](https://github.com/langchain-ai/deepagents/commit/4f5d7be1b4073dee346e5a974841721646fa4860) feat(code): expand environment variables in MCP config (#4681)
- [`a22484b`](https://github.com/langchain-ai/deepagents/commit/a22484ba2e001fd62fbff0fe916f1b3b93889fc3) feat(code): add configurable chat cursor style (#4687)
- [`ef9a4a8`](https://github.com/langchain-ai/deepagents/commit/ef9a4a8770f4daec70e640d6d2f23dd798d4ede2) fix(code): capture input typed before TUI startup (#4684)
- [`e4c29b5`](https://github.com/langchain-ai/deepagents/commit/e4c29b5264413d23d8dc70cabae72feb5f3f3dcb) fix(code): sync `ask_user` active-question highlight with focus (#4599)
- [`724e24a`](https://github.com/langchain-ai/deepagents/commit/724e24a31546e1f31feca3bb2344717550682595) fix(code): route explicit `--stdin` + `--skill` to headless path (#4611)
- [`cffc732`](https://github.com/langchain-ai/deepagents/commit/cffc73213bfdcec26cb82c413fa7e27db4afc0ca) fix(code): wrap MCP viewer navigation (#4677)
- [`b2d62ce`](https://github.com/langchain-ai/deepagents/commit/b2d62ce45640f49707eb057a135de0ebc5a5a6cd) hotfix(code): restore `Shift+Tab` in debug console (#4680)
- [`4ceed24`](https://github.com/langchain-ai/deepagents/commit/4ceed24d3758801ed9df1024602e90488004cef1) fix(code): infer additional model providers (#4675)
- [`2f8c111`](https://github.com/langchain-ai/deepagents/commit/2f8c11176f5cc9350c3337b2dfcf9f19886d5d02) fix(code): quit with `Ctrl+D` at end of prompt (#4678)
- [`b1600a8`](https://github.com/langchain-ai/deepagents/commit/b1600a8da784899d9db5bdf93be07b4c7f53a46c) feat(code): `/tools` slash command (#4649)
- [`4f94a30`](https://github.com/langchain-ai/deepagents/commit/4f94a30c11efb1819b08647d15b50b9b1e7bf043) feat(code): in-app Debug Console (#4564)
- [`12a9c9d`](https://github.com/langchain-ai/deepagents/commit/12a9c9d6813a83e5eeff9feed0c4068d1fcc69c4) fix(code): avoid repeated startup auto-update stalls (#4648)
- [`306bd89`](https://github.com/langchain-ai/deepagents/commit/306bd893f214237b6b4eede7c2ce0eaff66f5527) fix(code): preserve `Ctrl+D` deletion in non-empty input (#4626)
- [`e6f10a1`](https://github.com/langchain-ai/deepagents/commit/e6f10a149051128677c9f6f37663922054a7ac26) fix(code): support plain `exit` quit command (#4543)
- [`8cf57ac`](https://github.com/langchain-ai/deepagents/commit/8cf57aca9f41c3c4ca6d9796dc2cb80d4b22fb6d) feat(code): set `prompt_cache_key` for OpenAI models (#4632)
- [`70829c5`](https://github.com/langchain-ai/deepagents/commit/70829c5846b6bdde1cee51f0f4929e819ba1026b) feat(code): add Meta model provider (#4650)
- [`aaeac99`](https://github.com/langchain-ai/deepagents/commit/aaeac99d9f17b6a55d663c21a4d063444b6a1870) feat(code): offer abort in `/threads` cwd-switch prompt (#4583)
- [`4d2aa8a`](https://github.com/langchain-ai/deepagents/commit/4d2aa8a9684609eee45cd93b0af5149d8dd09eea) fix(code): infer Fireworks provider from qualified model IDs (#4594)
- [`4c49a24`](https://github.com/langchain-ai/deepagents/commit/4c49a24c4c488f45859b45628cfa57719e52f596) feat(code): hide diff widget for credential files (#4593)
- [`d1f3afec`](https://github.com/langchain-ai/deepagents/commit/d1f3afecdc015b5d1c9fb098d6347c7d7180e417) fix(code): detach owned `langgraph dev` server from terminal (#4642)
- [`f10b877`](https://github.com/langchain-ai/deepagents/commit/f10b877e5e48c3a1e15bd72d2ce06dfb16203231) feat(code): show `(debug enabled)` on splash when `DEEPAGENTS_CODE_DEBUG` is set (#4584)
- [`d442673`](https://github.com/langchain-ai/deepagents/commit/d44267358e272553c8ece33d367514430be7c0da) feat(code): resume threads in-TUI with `/threads -r [ID]` (#4609)
- [`ac15732`](https://github.com/langchain-ai/deepagents/commit/ac1573281530c1564fe07f8a21608e4d4dec2c3b) fix(code): remove misleading agent names from help (#4671)
- [`14f384f`](https://github.com/langchain-ai/deepagents/commit/14f384fc0083c07a7f44f97543b40b74cf93c13f) fix(code): skip Esc prompt-restore once output generation begins (#4582)
- [`c5345cc`](https://github.com/langchain-ai/deepagents/commit/c5345cc04cd810c6238e42dfbfa14497ae1b9020) perf(code): load MCP servers concurrently during graph build (#4659)
- [`1c08d27`](https://github.com/langchain-ai/deepagents/commit/1c08d2705f73f6870610849e00910b94458accf1) feat(code): support Fireworks `/routers` model ids (#4591)
- [`518c322`](https://github.com/langchain-ai/deepagents/commit/518c322e7dda840b5a740541afc895516a74925f) feat(code): `/model` Ctrl+N toggle for names vs raw specs (#4592)
- [`c9b7ac2`](https://github.com/langchain-ai/deepagents/commit/c9b7ac20752e4270d286b4af3fcf710e7e5bee87) feat(code): add `-s` alias for `--skill` (#4620)
- [`e9c6130`](https://github.com/langchain-ai/deepagents/commit/e9c61304460baab2058a667198600cadef516954) chore(code,evals,talon): bump `langgraph-runtime-inmem` to 0.31.0 (#4647)
- [`c87e8fe`](https://github.com/langchain-ai/deepagents/commit/c87e8fe558f0b56dba3ce92a994cc6aac0c93ccf) docs(code): warn that `system_prompt` override bypasses generated prompt (#4644)
- [`904ff05`](https://github.com/langchain-ai/deepagents/commit/904ff05620a576100e05fd65810d38405c4942d4) fix(code): reap langgraph dev server when startup is cancelled (#4629)
- [`ddce7c3`](https://github.com/langchain-ai/deepagents/commit/ddce7c3f524109b10ea13ef56afbd1ac99f9e300) chore(code): reframe dcode pyproject description as coding agent (#4610)
- [`997be16`](https://github.com/langchain-ai/deepagents/commit/997be1643aff6d6900b8b8c95832cdf93be8c0d7) fix(code): reject `--auto-approve` in headless mode (#4617)

</details>

## deepagents-code==0.1.36: deepagents-code==0.1.36

**Published**: 2026-07-09

### Features

* Add `GPT-5.6` model family ([#4600](https://github.com/langchain-ai/deepagents/issues/4600)) ([4a806bc](https://github.com/langchain-ai/deepagents/commit/4a806bc703b69334cccd05bcd27d411602e82318))
* Add Grok 4.5 model ([#4596](https://github.com/langchain-ai/deepagents/issues/4596)) ([b0a209d](https://github.com/langchain-ai/deepagents/commit/b0a209da3a8c9f80e2e3d5e199340736c854c567))

### Bug Fixes

* Strip input before Ctrl+C copy-input fallback ([#4590](https://github.com/langchain-ai/deepagents/issues/4590)) ([505d55a](https://github.com/langchain-ai/deepagents/commit/505d55ad83e8569213175911ee6c8c39fbbf340c))

---

Internal maintainers: @johannes117, @mdrxy

Released by: @mdrxy

## deepagents-code==0.1.35: deepagents-code==0.1.35

**Published**: 2026-07-09

### Features

* Restore interrupted prompt to input on ESC ([#4544](https://github.com/langchain-ai/deepagents/issues/4544)) ([fccf037](https://github.com/langchain-ai/deepagents/commit/fccf03732140d39749e70e8fc6cb7d73124a1d70))
* Add `[startup].mode` default approval mode ([#4573](https://github.com/langchain-ai/deepagents/issues/4573)) ([7c5bf54](https://github.com/langchain-ai/deepagents/commit/7c5bf542c2f58fa46ecd708c66cd1817a0ebdc41))
* Offer restart after saving Tavily key via `/auth` ([#4560](https://github.com/langchain-ai/deepagents/issues/4560)) ([12df81a](https://github.com/langchain-ai/deepagents/commit/12df81ad00d814c570b4d24a2b06de9b18d51abd))
* Reload env from `/auth` modal via Ctrl+R ([#4566](https://github.com/langchain-ai/deepagents/issues/4566)) ([f07d638](https://github.com/langchain-ai/deepagents/commit/f07d6387b7dc1f0e880f77784905c2aa94143adb))
* Toast on saved `/auth` API key ([#4558](https://github.com/langchain-ai/deepagents/issues/4558)) ([ee3c264](https://github.com/langchain-ai/deepagents/commit/ee3c26415be84e369b829fefb21461c8ec210a5e))

### Bug Fixes

* Harden approval content rendering ([#4581](https://github.com/langchain-ai/deepagents/issues/4581)) ([38446fd](https://github.com/langchain-ai/deepagents/commit/38446fda649b891dd8604e788701eabe739c1dd0))
* Preserve transcript order during virtualization ([#4549](https://github.com/langchain-ai/deepagents/issues/4549)) ([f6ee70c](https://github.com/langchain-ai/deepagents/commit/f6ee70c00ac6ad7b1b180155018b794308a18361))
* Run stdio MCP server pre-flight check off the event loop ([#4434](https://github.com/langchain-ai/deepagents/issues/4434)) ([c9636e2](https://github.com/langchain-ai/deepagents/commit/c9636e22725a5bd32c1f8b9e739b02b4aa7c3dc7))
* Avoid duplicate "criteria ready" message on `/goal` revisions ([#4559](https://github.com/langchain-ai/deepagents/issues/4559)) ([1110497](https://github.com/langchain-ai/deepagents/commit/1110497e17fac6deceb9d1d6e530f9197bfc0d4a))
* Restore welcome banner tips ([#4528](https://github.com/langchain-ai/deepagents/issues/4528)) ([3f1e55e](https://github.com/langchain-ai/deepagents/commit/3f1e55eafbc1fde79cb75f631561cf35d4b8ff4c))
* Clarify managed `rg` install failures ([#4578](https://github.com/langchain-ai/deepagents/issues/4578)) ([434c84a](https://github.com/langchain-ai/deepagents/commit/434c84ae144b0319afe37d6f2dbadfd7f5fc9f70))
* Dedupe update/install log path output ([#4553](https://github.com/langchain-ai/deepagents/issues/4553)) ([1398fee](https://github.com/langchain-ai/deepagents/commit/1398feeca507cab9ec51a66604d46c747f7fcd2f))
* Keep notification center open for API-key entry ([#4568](https://github.com/langchain-ai/deepagents/issues/4568)) ([6e89417](https://github.com/langchain-ai/deepagents/commit/6e8941776cdcc35909da305f3bb39500c0f479cb))
* Queue `/mcp login` sent before the server connects ([#4533](https://github.com/langchain-ai/deepagents/issues/4533)) ([edac82c](https://github.com/langchain-ai/deepagents/commit/edac82c837de8e12b58b97ac25acc31f743d4c5d))
* Serialize MCP OAuth token refreshes to prevent reuse revocation ([#4565](https://github.com/langchain-ai/deepagents/issues/4565)) ([c37100d](https://github.com/langchain-ai/deepagents/commit/c37100d4763e527fce12fa4451794ca25ded7640))

---

Thanks to our community contributors: @heyparth1

Internal maintainers: @johannes117, @mdrxy

Released by: @mdrxy

## deepagents-code==0.1.34: deepagents-code==0.1.34

**Published**: 2026-07-07

### Bug Fixes

* **code:** show `(local)` tag under ANSI themes ([#4534](https://github.com/langchain-ai/deepagents/issues/4534)) ([699e439](https://github.com/langchain-ai/deepagents/commit/699e439699723e477a621f95eef87a7d76aac5f5))

---

Internal maintainers: @imnishitha, @mdrxy

Released by: @mdrxy

## deepagents-acp==0.0.9: deepagents-acp==0.0.9

**Published**: 2026-07-07

### Bug Fixes

* **acp:** defer interrupt state reads until stream closes ([#4542](https://github.com/langchain-ai/deepagents/issues/4542)) ([35199ab](https://github.com/langchain-ai/deepagents/commit/35199ab22b2111474d1f46b3ad7cc677d82ed46b))

---

Thanks to our community contributors: @rmkraus

Internal maintainers: @jacoblee93, @mdrxy

Released by: @ccurme

## deepagents==0.7.0a6: deepagents==0.7.0a6

**Published**: 2026-07-07

> [!WARNING]
> This is a pre-release version. Install with: `pip install deepagents==0.7.0a6`

This alpha adds a dedicated NVIDIA Nemotron 3 Ultra harness profile and adds fixes for skill metadata parsing, truncation guidance, context-aware middleware typing, and composite filesystem routing.

### Features

* Add a built-in NVIDIA Nemotron 3 Ultra harness profile across NVIDIA/ChatNVIDIA, Baseten, Fireworks, OpenRouter, Nebius, and Together. The profile adds model-specific prompt guidance, provider compatibility shims, text-tool-call repair, reasoning-tag cleanup, filesystem retry handling, rate-limit retries, loop-control nudges, and final-answer guards for agentic workloads without changing other models on those providers ([#4192](https://github.com/langchain-ai/deepagents/pull/4192)) ([d5a60ec](https://github.com/langchain-ai/deepagents/commit/d5a60ece7379c37c81edcef2cd6c2811ddc90c9a)).

### Bug Fixes

* Accept YAML list values as well as comma-separated strings for skill `allowed-tools` frontmatter, trimming valid list entries and continuing to warn only for unsupported scalar values ([#4140](https://github.com/langchain-ai/deepagents/pull/4140)) ([d62534c](https://github.com/langchain-ai/deepagents/commit/d62534c86b87a91aca16c6bfb71209232d69a6ec)).
* Make `SkillsMiddleware` truncation warnings actionable by reporting the field name, file path, actual length, configured limit, model-selection impact, and the specific SKILL.md frontmatter field to shorten ([#4141](https://github.com/langchain-ai/deepagents/pull/4141)) ([2f5f5b8](https://github.com/langchain-ai/deepagents/commit/2f5f5b85793d944167a42e8d5b8e0a11bb1e3932)).
* Preserve `ContextT` through the `create_deep_agent(..., middleware=[...])` type annotation, so type checkers accept context-aware middleware when a matching `context_schema` is passed ([#4055](https://github.com/langchain-ai/deepagents/pull/4055)) ([7be76c7](https://github.com/langchain-ai/deepagents/commit/7be76c752117e6e61dcdc931ea5147261fad6768)).
* Correct `CompositeBackend.glob` and `CompositeBackend.aglob` routing so explicit default-backend paths such as `/tools` do not also return files from routed backends such as `/memories` ([#4531](https://github.com/langchain-ai/deepagents/pull/4531)) ([cbdb0a7](https://github.com/langchain-ai/deepagents/commit/cbdb0a7df8cd4bbacff9ca7ac2e42232ef290c10)).

---

Thanks to our community contributors: @kavishkartha05 ([Twitter](https://x.com/kavishkartha31), [LinkedIn](https://linkedin.com/in/kavish-kartha)), @nv-kasikritc

Internal maintainers: @imnishitha, @srimanthtangedipalli-eng, @jkennedyvz, @ccurme, @mdrxy

Released by: @imnishitha

Released from `alpha/deepagents-0-7-0a6` at commit [`55983b3`](https://github.com/langchain-ai/deepagents/commit/55983b38855ff7073ca7c07f05831c3feefb383a)


## deepagents==0.7.0a5: deepagents==0.7.0a5

**Published**: 2026-07-07

Yanked -- accidental re-release of `deepagents==0.7.0a5`

> > [!WARNING]
> > This is a pre-release version. Install with: `pip install deepagents==0.7.0a5`
> 
> ---
> 
> Internal maintainers: @imnishitha

## deepagents-talon==0.0.3: deepagents-talon==0.0.3

**Published**: 2026-07-06

### Features

* **sdk:** optional video frame extraction on `read_file` ([#4094](https://github.com/langchain-ai/deepagents/issues/4094)) ([b927147](https://github.com/langchain-ai/deepagents/commit/b927147d026749c6c790bb06c9853515dabf579c))
* **talon:** add Fleet zip import command ([#4493](https://github.com/langchain-ai/deepagents/issues/4493)) ([0289dd0](https://github.com/langchain-ai/deepagents/commit/0289dd0a190e5060e631e840da115dd59c64cf5c))


### Bug Fixes

* **talon:** materialize agents under home ([f2b26a8](https://github.com/langchain-ai/deepagents/commit/f2b26a8915fb70c26d32af6e8240442e5e6118e6))

---

Internal maintainers: @jkennedyvz, @mdrxy

Released by: @jkennedyvz

## deepagents-code==0.1.33: deepagents-code==0.1.33

**Published**: 2026-07-06

### Features

* In-the-moment trust prompt for symlinked skills ([#4200](https://github.com/langchain-ai/deepagents/issues/4200)) ([a4431e4](https://github.com/langchain-ai/deepagents/commit/a4431e4339348431e91533cb2b177259ab94b083))
* Selective per-server project MCP trust ([#4507](https://github.com/langchain-ai/deepagents/issues/4507)) ([aaa22a9](https://github.com/langchain-ai/deepagents/commit/aaa22a9340cb3d2c8e9ce1a921957d0a9121da20))
* Add `dcode tools list` command ([#4461](https://github.com/langchain-ai/deepagents/issues/4461)) ([1402d0e](https://github.com/langchain-ai/deepagents/commit/1402d0e735a1580503f240457c77db76fcd779d7))

### Bug Fixes

* Strip media placeholders from model-facing message text ([#4462](https://github.com/langchain-ai/deepagents/issues/4462)) ([aa0ae36](https://github.com/langchain-ai/deepagents/commit/aa0ae36b00df6411a9200610a9075ef2dc28b1af))
* Re-apply theme preference on `/reload` ([#4514](https://github.com/langchain-ai/deepagents/issues/4514)) ([5d1c392](https://github.com/langchain-ai/deepagents/commit/5d1c3928f7ca0ea97f28fd4d34ae1a4ee885e888))

---

Internal maintainers: @mdrxy

Released by: @mdrxy

## deepagents-code==0.1.32: deepagents-code==0.1.32

**Published**: 2026-07-06

### Features

* Simplify welcome banner to compact box ([#4482](https://github.com/langchain-ai/deepagents/issues/4482)) ([b7f46e9](https://github.com/langchain-ai/deepagents/commit/b7f46e931807f86476c9c2d661dcd4e9623c10a2))
* Add LangSmith base URL to `/auth` ([#4228](https://github.com/langchain-ai/deepagents/issues/4228)) ([88d167f](https://github.com/langchain-ai/deepagents/commit/88d167f9ceec1cfadd7c3feac6f63c0da7c893f1))
* `tool.use` and `tool.result` hook events ([#3954](https://github.com/langchain-ai/deepagents/issues/3954)) ([ba1979d](https://github.com/langchain-ai/deepagents/commit/ba1979d64c3ed5e96ebc896197bc8f97f6f84bac))
* Fall back to folder name for subagents ([#4504](https://github.com/langchain-ai/deepagents/issues/4504)) ([9db3db5](https://github.com/langchain-ai/deepagents/commit/9db3db5f31a93fb8598a5dc5bedf4fe61fe92c94))
* Report tracing gateway in `dcode doctor` ([#4466](https://github.com/langchain-ai/deepagents/issues/4466)) ([a912427](https://github.com/langchain-ai/deepagents/commit/a9124275504bc1af5f76dfdd9a6c558c98eea92d))
* Gate paste auto-collapse behind `display.collapse_pastes` ([#4473](https://github.com/langchain-ai/deepagents/issues/4473)) ([ff5dd56](https://github.com/langchain-ai/deepagents/commit/ff5dd564a3a590e7d2d521b20df495b5e1512e12))

### Bug Fixes

* Keep footer branch visible and ellipsized instead of hiding when narrow ([#4506](https://github.com/langchain-ai/deepagents/issues/4506)) ([ccf30c3](https://github.com/langchain-ai/deepagents/commit/ccf30c342e5ead677aafd196d8f1ddd2bdf95196))
* Remove MCP OAuth success page message shift ([#4463](https://github.com/langchain-ai/deepagents/issues/4463)) ([69bb06c](https://github.com/langchain-ai/deepagents/commit/69bb06c0680fa6d37b917deb6b70927c3eff9c09))
* Prevent `UnicodeEncodeError` crash in non-interactive mode on legacy Windows consoles ([#4478](https://github.com/langchain-ai/deepagents/issues/4478)) ([b1b16cd](https://github.com/langchain-ai/deepagents/commit/b1b16cd114d4ee4f077cf5824a0176cd94ebd851))

### Performance Improvements

* Make `threads list` faster on large session databases ([#4005](https://github.com/langchain-ai/deepagents/issues/4005)) ([85ca01a](https://github.com/langchain-ai/deepagents/commit/85ca01a43b002c2bdb4205f48fac5fa6f66a3276))

---

Thanks to our community contributors: @NinaadRao ([LinkedIn](https://www.linkedin.com/in/ninaadrrao/)), @Superstos

Internal maintainers: @johannes117, @jkennedyvz, @mdrxy

Released by: @mdrxy

## deepagents==0.7.0a4: deepagents==0.7.0a4

**Published**: 2026-07-06

> [!WARNING]
> This is a pre-release version. Install with: `pip install deepagents==0.7.0a4`

This alpha adds tighter filesystem tool control, bounded search behavior, more configurable system prompts, and optional video frame extraction on top of the `0.7` prerelease line.

### Features

* Add a filesystem tool allowlist to `FilesystemMiddleware`, so callers can expose only selected built-in filesystem tools while keeping `read_file` available and leaving custom user tools unaffected ([#4325](https://github.com/langchain-ai/deepagents/pull/4325)) ([704a70d](https://github.com/langchain-ai/deepagents/commit/704a70ddd536c8f5d3243d79af6f941b9ad1c44a)).
* Let `create_deep_agent(..., system_prompt=...)` accept a structured prompt config with `prefix`, `base`, and `suffix`, so users can replace or remove the built-in base prompt instead of only prepending to it ([#4437](https://github.com/langchain-ai/deepagents/pull/4437)) ([56c5a5e](https://github.com/langchain-ai/deepagents/commit/56c5a5e0e4578bf83fb8cc79114775dcfd22993c)).
* Bound `grep` and `glob` over large or slow trees by returning valid partial results with a `truncated` flag instead of hanging or discarding work on timeout; `glob` also now supports brace expansion such as `*.{py,md}` on supported backends ([#4063](https://github.com/langchain-ai/deepagents/pull/4063)) ([ef591e7](https://github.com/langchain-ai/deepagents/commit/ef591e7a8b5cf1f9ea3fa187378e86da4d995f46)).
* Add NVIDIA NIM app-origin attribution through a built-in NVIDIA provider profile while preserving explicit caller-provided headers ([#4455](https://github.com/langchain-ai/deepagents/pull/4455)) ([4cb4749](https://github.com/langchain-ai/deepagents/commit/4cb47491beaf5ea6e88a938d1e4d1624e6b4f099)).
* Add optional video frame extraction for `read_file` when media dependencies are installed. Video files such as `.mp4`, `.mov`, `.webm`, and `.mkv` are sampled into JPEG frames, with `offset` and `limit` interpreted as seconds, while existing generic multimodal behavior is preserved when the optional dependencies are unavailable ([#4094](https://github.com/langchain-ai/deepagents/pull/4094)) ([b927147](https://github.com/langchain-ai/deepagents/commit/b927147d030d10844f83bd82ee1def3065e7a9da7)).

### Bug Fixes

* Handle missing async subagent URLs consistently in `check_async_task` and `cancel_async_task` by keeping `clients.get_sync()` inside the existing error-handling path ([#3967](https://github.com/langchain-ai/deepagents/pull/3967)) ([b0d92c0](https://github.com/langchain-ai/deepagents/commit/b0d92c0f3cfd03d23f37513d3f5876b74ad3663c)).
* Unify `grep(..., glob=...)` include-glob semantics across filesystem and in-memory backends, so basename patterns like `*.py` match at any depth and slash-containing patterns like `src/**/*.py` match relative paths consistently ([#3936](https://github.com/langchain-ai/deepagents/pull/3936)) ([feab6e0](https://github.com/langchain-ai/deepagents/commit/feab6e0b3bdeae3d829cd3ca52222ee93561c9c2)).
* Align sandbox delete behavior with other backends by returning not-found errors for missing paths, and avoid over-blocking unrelated sibling deletes when deny rules use glob patterns ([#4321](https://github.com/langchain-ai/deepagents/pull/4321)) ([d77496b](https://github.com/langchain-ai/deepagents/commit/d77496b965b9ec25c9b658acb1a817bb88f07285)).
* Make `grep`'s literal-only contract clearer in tool descriptions and no-match hints, route slash-containing sandbox include-globs correctly, and shorten default search timeouts so bad patterns and huge trees return guidance faster ([#4168](https://github.com/langchain-ai/deepagents/pull/4168)) ([b1dbf5e](https://github.com/langchain-ai/deepagents/commit/b1dbf5e661f928b746cb55f72a0c08145fe34591)).

---

Thanks to our community contributors: @kavishkartha05 ([Twitter](https://x.com/kavishkartha31), [LinkedIn](https://linkedin.com/in/kavish-kartha)), @nv-kasikritc

Internal maintainers: @imnishitha, @jkennedyvz, @ccurme, @mdrxy

Released by: @mdrxy

Released from `alpha/deepagents-0-7-0a4` at commit [`ad2fe61`](https://github.com/langchain-ai/deepagents/commit/ad2fe61d00bf68b45010b5dac73c36ac4526ca60)


## deepagents-code==0.1.31: deepagents-code==0.1.31

**Published**: 2026-07-03

### Features

* Collapse large pastes into compact placeholders ([#4447](https://github.com/langchain-ai/deepagents/issues/4447)) ([9ae927d](https://github.com/langchain-ai/deepagents/commit/9ae927d73ebf30ba50bbb7ec0c1076a0937e5cb7))
* Show model name instead of spec in switcher ([#4460](https://github.com/langchain-ai/deepagents/issues/4460)) ([0059620](https://github.com/langchain-ai/deepagents/commit/005962088ad31b16745c399e4ab2e725e97f7858))
* Offer abort during resume ([#4188](https://github.com/langchain-ai/deepagents/issues/4188)) ([a4c25cd](https://github.com/langchain-ai/deepagents/commit/a4c25cd74de9902fd0ea9440b5dda2d4248bb3d2))
* Persistent banner when installation is stale ([#4459](https://github.com/langchain-ai/deepagents/issues/4459)) ([b74c185](https://github.com/langchain-ai/deepagents/commit/b74c18591a8ce9a49a5fee43b07e602ca9fbf68a))
* Show `"Took <duration>"` after `execute` finishes ([#4301](https://github.com/langchain-ai/deepagents/issues/4301)) ([a5240eb](https://github.com/langchain-ai/deepagents/commit/a5240ebe3654e72fa5beb4070224f52f944768c8))
* Unify `config show`/`list` around effective values ([#4174](https://github.com/langchain-ai/deepagents/issues/4174)) ([ccd9d21](https://github.com/langchain-ai/deepagents/commit/ccd9d216e77855a28b88850beb525f47ce8b686a))

### Bug Fixes

* Make execute command expandable in code TUI transcript ([#4428](https://github.com/langchain-ai/deepagents/issues/4428)) ([d999181](https://github.com/langchain-ai/deepagents/commit/d999181e8424498681f1e442c71380bf6b82b0aa))
* Allow suppressing LangSmith key override warning ([#4436](https://github.com/langchain-ai/deepagents/issues/4436)) ([ddcae5e](https://github.com/langchain-ai/deepagents/commit/ddcae5e0bd9aebc946be1d9fb3f5e35eeb690fa6))
* Ensure unique message widget IDs on history load ([#4454](https://github.com/langchain-ai/deepagents/issues/4454)) ([de2f7d2](https://github.com/langchain-ai/deepagents/commit/de2f7d2835485df905772e1c96e33d2c239d8e22))
* Resolve `/threads` header link on mount, not after load ([#4453](https://github.com/langchain-ai/deepagents/issues/4453)) ([4cba728](https://github.com/langchain-ai/deepagents/commit/4cba72893fc4aae5b429d8c573c1a513d97ddf8a))
* Restore caller's LangSmith API key in shell subprocess env ([#4458](https://github.com/langchain-ai/deepagents/issues/4458)) ([9293b19](https://github.com/langchain-ai/deepagents/commit/9293b190170a872b73d0d94e66479bcc5f7962c7))
* Route Anthropic effort through output config ([#4446](https://github.com/langchain-ai/deepagents/issues/4446)) ([1e8ed81](https://github.com/langchain-ai/deepagents/commit/1e8ed81940a862dde44f704826b61650336367e0))
* Show loading state during model switch ([#4209](https://github.com/langchain-ai/deepagents/issues/4209)) ([7cc4e9f](https://github.com/langchain-ai/deepagents/commit/7cc4e9f9bda5a8ae42bb072b82b634ad8c39ade1))

---

Internal maintainers: @johannes117, @jkennedyvz, @ccurme, @mdrxy

Released by: @mdrxy

## deepagents-code==0.1.30: deepagents-code==0.1.30

**Published**: 2026-07-02

### Features

* Add reasoning effort selector ([#4403](https://github.com/langchain-ai/deepagents/issues/4403)) ([6ee0ac4](https://github.com/langchain-ai/deepagents/commit/6ee0ac4cca998f84e157187d565084e2a1912626))
* Collapse completed tool calls into group summaries ([#4373](https://github.com/langchain-ai/deepagents/issues/4373)) ([3735829](https://github.com/langchain-ai/deepagents/commit/3735829a0c14fb1537daf930140c66b647c8222c))
* Auto-detect MCP OAuth from 401 challenge ([#4364](https://github.com/langchain-ai/deepagents/issues/4364)) ([9763ffc](https://github.com/langchain-ai/deepagents/commit/9763ffceab8800526ae9fe10decdb2f32d8e4707))
* Toast when opening a clicked URL ([#4368](https://github.com/langchain-ai/deepagents/issues/4368)) ([434f29e](https://github.com/langchain-ai/deepagents/commit/434f29e5cb3d94988e2a4d80b78452bee4b10812))

### Bug Fixes

* Allow `/remember` with args when no conversation history ([#4418](https://github.com/langchain-ai/deepagents/issues/4418)) ([5df9c83](https://github.com/langchain-ai/deepagents/commit/5df9c83b58f2529561848ae9f1364961e1c80641))
* Persist rubric model after server restart ([#4419](https://github.com/langchain-ai/deepagents/issues/4419)) ([5605a68](https://github.com/langchain-ai/deepagents/commit/5605a681c9fec888d8c6dfbde2decd4692c8cef0))
* Persist resume model state privately ([#4400](https://github.com/langchain-ai/deepagents/issues/4400)) ([bbd0f0d](https://github.com/langchain-ai/deepagents/commit/bbd0f0d1ddc9d22d399a819d7b4363f7997d119e))
* Quiet routine ripgrep installer output ([#4417](https://github.com/langchain-ai/deepagents/issues/4417)) ([a52c18d](https://github.com/langchain-ai/deepagents/commit/a52c18d3ef8fe462d1289dca8798c51450e0368a))
* Honest MCP OAuth callback close message ([#4410](https://github.com/langchain-ai/deepagents/issues/4410)) ([ef637f4](https://github.com/langchain-ai/deepagents/commit/ef637f4a3f38ee155ad7d31e64a5cdd7bfaee62c))

---

Internal maintainers: @johannes117, @mdrxy

Released by: @mdrxy

## deepagents-talon==0.0.2: deepagents-talon==0.0.2

**Published**: 2026-07-01

### Features

* `DEEPAGENTS_TALON_RECURSION_LIMIT` env var ([#4354](https://github.com/langchain-ai/deepagents/issues/4354)) ([82d1eac](https://github.com/langchain-ai/deepagents/commit/82d1eac59a43f096096e86849733aa716adb18fc))
* Add reaction approval routing ([#4345](https://github.com/langchain-ai/deepagents/issues/4345)) ([3fe8c0c](https://github.com/langchain-ai/deepagents/commit/3fe8c0c35536626f583df08573469506b9529706))
* Add Telegram channel adapter, CLI wiring, and offset persistence ([#4097](https://github.com/langchain-ai/deepagents/issues/4097)) ([7c87cec](https://github.com/langchain-ai/deepagents/commit/7c87ceca069874db8555705efab3973301baa1cb))
* Add tool approval env override ([#4349](https://github.com/langchain-ai/deepagents/issues/4349)) ([d26481d](https://github.com/langchain-ai/deepagents/commit/d26481da615881bae4401dfa485ad925945e667a))
* Audit reaction approval attempts ([#4348](https://github.com/langchain-ai/deepagents/issues/4348)) ([d7895c4](https://github.com/langchain-ai/deepagents/commit/d7895c4f9b996ad6fe194936bbeaa8beea21e913))
* Ingest Telegram approval reactions ([#4346](https://github.com/langchain-ai/deepagents/issues/4346)) ([437af0b](https://github.com/langchain-ai/deepagents/commit/437af0bf79332b20ae0c1883c3cc4d91a98c2457))


### Bug Fixes

* Default workspace to current directory ([#4099](https://github.com/langchain-ai/deepagents/issues/4099)) ([5e337ae](https://github.com/langchain-ai/deepagents/commit/5e337ae50a76bc174b752be187e62698a389cbe6))

---

Internal maintainers: @jkennedyvz, @mdrxy

Released by: @jkennedyvz

## deepagents-code==0.1.29: deepagents-code==0.1.29

**Published**: 2026-07-01

### Features

* Add rubric iteration controls ([#4405](https://github.com/langchain-ai/deepagents/issues/4405)) ([d6692a7](https://github.com/langchain-ai/deepagents/commit/d6692a7c713490f170b17510d613e02ee37574ab))
* Add Claude Sonnet 5 to model picker ([#4386](https://github.com/langchain-ai/deepagents/issues/4386)) ([64758dd](https://github.com/langchain-ai/deepagents/commit/64758dddf8b46c5b68c345fb1eac1fb7bcbf7f7e))

### Bug Fixes

* Full-width chat messages, hide scrollbar, flush input bg ([#4374](https://github.com/langchain-ai/deepagents/issues/4374)) ([1f8e8dc](https://github.com/langchain-ai/deepagents/commit/1f8e8dc942ac54c4014ac48f9345ee0201be0b1b))
* Resolve editable SDK version metadata ([#4394](https://github.com/langchain-ai/deepagents/issues/4394)) ([3239bf4](https://github.com/langchain-ai/deepagents/commit/3239bf4edf2be3037bb18315463ac6a0c3537e5c))
* Unblock MCP force reconnect modal ([#4396](https://github.com/langchain-ai/deepagents/issues/4396)) ([8b7eab0](https://github.com/langchain-ai/deepagents/commit/8b7eab023db686f577d16f4f9ac872205baf136f))

---

Internal maintainers: @johannes117, @mdrxy

Released by: @mdrxy

## deepagents==0.7.0a3: deepagents==0.7.0a3

**Published**: 2026-07-01

> [!WARNING]
> This is a pre-release version. Install with: `pip install deepagents==0.7.0a3`

This alpha catches the `0.7` prerelease line up to current `main` and adds the latest SDK behavior changes on top of the recursive filesystem work from `0.7.0a2`.

### Features

* Allow custom middleware passed to `create_deep_agent(..., middleware=[...])` to replace a default middleware instance when the `.name` matches, so users can override defaults such as `SummarizationMiddleware` without also excluding the built-in instance ([#4251](https://github.com/langchain-ai/deepagents/pull/4251)) ([90c8472](https://github.com/langchain-ai/deepagents/commit/90c8472ae226394a186bf2075459645c2056db7d)).
* Reduce round trips when `sandbox.execute` offloads large tool results by capturing oversized command output directly inside the sandbox artifact path ([#4230](https://github.com/langchain-ai/deepagents/pull/4230)) ([02f5bd7](https://github.com/langchain-ai/deepagents/commit/02f5bd7bc02f2baaf5a1eefce7d686ba62493647)).
* Lift arbitrary SDK `max_iterations` limit on `RubricMiddleware` ([#4405](https://github.com/langchain-ai/deepagents/pull/4405)) ([d6692a7](https://github.com/langchain-ai/deepagents/commit/d6692a7c713490f170b17510d613e02ee37574ab)).
* Include the `deepagents[aws]` extra for Bedrock prompt caching support from the latest stable line ([#4108](https://github.com/langchain-ai/deepagents/issues/4108)) ([a398382](https://github.com/langchain-ai/deepagents/commit/a398382c85ce518ea1b7f365e49df905cdcd498b)).

### Bug Fixes

* Emit `max_iterations_reached` as the terminal `RubricMiddleware` status when the iteration cap is exhausted, instead of emitting a final `needs_revision` event that will not loop ([#4406](https://github.com/langchain-ai/deepagents/pull/4406)) ([a51c8d2](https://github.com/langchain-ai/deepagents/commit/a51c8d2b1723d143439a1466f5a49a52c442bdfc)).

---

Internal maintainers: @imnishitha, @ccurme, @mdrxy

Released by: @mdrxy

Released from `alpha/deepagents-0-7-0a3` at commit [`7d5e7c0`](https://github.com/langchain-ai/deepagents/commit/7d5e7c0256dd9b341f04fb5c83f9b4b5ab08c5bd)


## deepagents-code==0.1.28: deepagents-code==0.1.28

**Published**: 2026-06-29

### Features

* Add Fireworks session settings ([#4360](https://github.com/langchain-ai/deepagents/issues/4360)) ([90ebb1d](https://github.com/langchain-ai/deepagents/commit/90ebb1d68cb5942f07847f6dce48c14c7caef992))
* `RubricMiddleware` implementation (`/goal`/`--goal` and `/rubric`/`--rubric`)
  * Add rubric-backed goal workflow ([#4365](https://github.com/langchain-ai/deepagents/issues/4365)) ([8fca61d](https://github.com/langchain-ai/deepagents/commit/8fca61dc036888a4414ff5a4536b957c63dab4a5))
  * Non-interactive rubric grading flags ([#4305](https://github.com/langchain-ai/deepagents/issues/4305)) ([1bcb112](https://github.com/langchain-ai/deepagents/commit/1bcb112ee78138eca9cb400c206ce198322aae32))
* Adopt coding-agent-v1 trace metadata ([#4367](https://github.com/langchain-ai/deepagents/issues/4367)) ([cb39747](https://github.com/langchain-ai/deepagents/commit/cb3974748024fcec2e2ee0ccc0a9b23c880733a2))
* Quit shortcut on completed update modal ([#4312](https://github.com/langchain-ai/deepagents/issues/4312)) ([5e6eae9](https://github.com/langchain-ai/deepagents/commit/5e6eae9f094a5167b6bf01f2d84cf06ca5cd80c3))

### Bug Fixes

* Redact LangSmith trace secrets by default ([#4356](https://github.com/langchain-ai/deepagents/issues/4356)) ([5e01fec](https://github.com/langchain-ai/deepagents/commit/5e01fec72d8b179a3b075b07268162d2eaebfe84))
* Honor Baseten base URL env precedence ([#4328](https://github.com/langchain-ai/deepagents/issues/4328)) ([8f20d74](https://github.com/langchain-ai/deepagents/commit/8f20d74892112c3b88aaca63d8c04a355fd6726f))
* Highlight just-installed provider on `/auth` reopen ([#4311](https://github.com/langchain-ai/deepagents/issues/4311)) ([85e47b5](https://github.com/langchain-ai/deepagents/commit/85e47b532b5caf92a52f1a070a95bdb39bee6d3d))
* Clear transient update launch status ([#4355](https://github.com/langchain-ai/deepagents/issues/4355)) ([b870b18](https://github.com/langchain-ai/deepagents/commit/b870b18750f65442009028a85a2ac18f1b06640c))
* Clearer MCP config JSON parse errors ([#4327](https://github.com/langchain-ai/deepagents/issues/4327)) ([9cee602](https://github.com/langchain-ai/deepagents/commit/9cee60274d38d4ad8a2d7a7e9d3ae59aebce5261))
* Record shell output as user context ([#4353](https://github.com/langchain-ai/deepagents/issues/4353)) ([0d504a5](https://github.com/langchain-ai/deepagents/commit/0d504a5df8454e871597932ce1cd3e95b10ab00e))
* Suppress expected MCP reauth logs ([#4359](https://github.com/langchain-ai/deepagents/issues/4359)) ([15ee384](https://github.com/langchain-ai/deepagents/commit/15ee384117ccd955f7481346dd92b7f4b007a60d))

### Performance Improvements

* Background refresh for `@` file completion cache ([#3911](https://github.com/langchain-ai/deepagents/issues/3911)) ([aa22d6b](https://github.com/langchain-ai/deepagents/commit/aa22d6b6d5a49e4d6c3aa2d4932df75d14d65f78))
* Speed up shutdown after `Ctrl+C`/`Ctrl+D` ([#4351](https://github.com/langchain-ai/deepagents/issues/4351)) ([db441ed](https://github.com/langchain-ai/deepagents/commit/db441ed306a8e03fb68f2ae6a2c08523e248976d))

---

Internal maintainers: @harisaiharish, @jkennedyvz, @mdrxy

Released by: @mdrxy

## deepagents-code==0.1.27: deepagents-code==0.1.27

**Published**: 2026-06-26

### Features

* Show last update check time in `dcode doctor` ([#4307](https://github.com/langchain-ai/deepagents/issues/4307)) ([b669f37](https://github.com/langchain-ai/deepagents/commit/b669f37fb08998cfbf983da76f57822215614e7b))

### Bug Fixes

* `dcode doctor` shows `not configured` for unset tracing ([#4318](https://github.com/langchain-ai/deepagents/issues/4318)) ([e323d0c](https://github.com/langchain-ai/deepagents/commit/e323d0c7d91f3b11e03a016c14cf52008dc66b55))
* Drop duplicate token-request `client_id` under Basic auth ([#4323](https://github.com/langchain-ai/deepagents/issues/4323)) ([426dfad](https://github.com/langchain-ai/deepagents/commit/426dfad3ea1e453914cb87efa8fc70fb85a9efcb))
* Include skill invocations in input history ([#4211](https://github.com/langchain-ai/deepagents/issues/4211)) ([7b8d0b2](https://github.com/langchain-ai/deepagents/commit/7b8d0b2ec184e0d9a0cbe858a0d9a7128791969d))
* Offload `create_model` in server graph factory to unblock Codex ([#4324](https://github.com/langchain-ai/deepagents/issues/4324)) ([064ea0c](https://github.com/langchain-ai/deepagents/commit/064ea0c6851353d0b0bc347a0758149765688945))

---

Internal maintainers: @jkennedyvz, @mdrxy

Released by: @mdrxy

## deepagents-code==0.1.26: deepagents-code==0.1.26

**Published**: 2026-06-26

### Bug Fixes

* Pin app version when installing extras ([#4313](https://github.com/langchain-ai/deepagents/issues/4313)) ([c20c8e2](https://github.com/langchain-ai/deepagents/commit/c20c8e2fc138f72f1444107d2a936305a591807b))

---

Internal maintainers: @mdrxy

Released by: @mdrxy

## deepagents-code==0.1.25: deepagents-code==0.1.25

**Published**: 2026-06-26

### Bug Fixes

* Bind ephemeral port instead of squatting `langgraph dev`'s 2024 ([#4264](https://github.com/langchain-ai/deepagents/issues/4264)) ([11e5359](https://github.com/langchain-ai/deepagents/commit/11e5359851f0291783661b4311ad5e4436a36fb7))
* Block dotenv shell startup hooks ([#4288](https://github.com/langchain-ai/deepagents/issues/4288)) ([686d6f3](https://github.com/langchain-ai/deepagents/commit/686d6f3a1da8b6393efb4c0cf87b3eb35e0cca50))
* Defer server graph construction ([#4300](https://github.com/langchain-ai/deepagents/issues/4300)) ([220dfc0](https://github.com/langchain-ai/deepagents/commit/220dfc0e6b03f9ccb499c6b850c586b9d57cc077))
  * Avoid blocking MCP imports during graph readiness ([#4302](https://github.com/langchain-ai/deepagents/issues/4302)) ([7533ca8](https://github.com/langchain-ai/deepagents/commit/7533ca89f3afc9863ba5e1ecee2d4c5974dea320))
* Gate `delete` file operations ([#4299](https://github.com/langchain-ai/deepagents/issues/4299)) ([92a8681](https://github.com/langchain-ai/deepagents/commit/92a86819adfefbc6ccfd01a861191ba292eca754))
* Handle recursive `fetch_url` conversion ([#4257](https://github.com/langchain-ai/deepagents/issues/4257)) ([f240a40](https://github.com/langchain-ai/deepagents/commit/f240a40dc05d812c38e9926c1d81ba38deb86e3f))
* Report editable SDK runtime version ([#4304](https://github.com/langchain-ai/deepagents/issues/4304)) ([4439e91](https://github.com/langchain-ai/deepagents/commit/4439e912da4bfa6f1e38e14b5a03d2bfe9367d3b))
* Show months instead of "0y ago" for 360-364 day old timestamps ([#4267](https://github.com/langchain-ai/deepagents/issues/4267)) ([820b331](https://github.com/langchain-ai/deepagents/commit/820b331552cb7ce4695ddca3c9b8343a3144392b))
* Surface `/auth`-stored credentials in `config show`/`get` ([#4258](https://github.com/langchain-ai/deepagents/issues/4258)) ([c7c8788](https://github.com/langchain-ai/deepagents/commit/c7c8788ecf0068914298a6055a5f3fd31c36bd44))
* Switch input mode without flashing the mode trigger ([#4243](https://github.com/langchain-ai/deepagents/issues/4243)) ([fc5d9cb](https://github.com/langchain-ai/deepagents/commit/fc5d9cb8fb978ec95f98407692d4809ea1e86577))

---

Thanks to our community contributors: @parveshsaini ([Twitter](https://x.com/PrvshHasNoLife), [LinkedIn](https://www.linkedin.com/in/saini-parvesh/))

Internal maintainers: @nick-hollon-lc, @mdrxy

Released by: @mdrxy

## langchain-quickjs==0.3.2: langchain-quickjs==0.3.2

**Published**: 2026-06-25

### Features

* Dynamic subagents UI ([#4221](https://github.com/langchain-ai/deepagents/issues/4221)) ([10bcba2](https://github.com/langchain-ai/deepagents/commit/10bcba25600e51aba135f170b34aa6315c0f53d6))

### Bug Fixes

* Ensure top-level title on subagent response schemas ([#4155](https://github.com/langchain-ai/deepagents/issues/4155)) ([08f917e](https://github.com/langchain-ai/deepagents/commit/08f917eea79513e7e894731f884e738c2d30383f))
* Normalize nested `undefined` tool args ([#3935](https://github.com/langchain-ai/deepagents/issues/3935)) ([1b461a0](https://github.com/langchain-ai/deepagents/commit/1b461a0d6c6a7a6d323db18505596fcce4326b92))

---

Internal maintainers: @colifran, @hntrl, @mdrxy

Released by: @mdrxy

## deepagents==0.6.12: deepagents==0.6.12

**Published**: 2026-06-25

This release adds the `deepagents[aws]` extra, which installs `langchain-aws` so Bedrock users get the automatic prompt caching integration added in [#4108](https://github.com/langchain-ai/deepagents/issues/4108).

### Features

* Add Bedrock prompt caching middleware ([#4108](https://github.com/langchain-ai/deepagents/issues/4108)) ([a398382](https://github.com/langchain-ai/deepagents/commit/a398382c85ce518ea1b7f365e49df905cdcd498b))

### Bug Fixes

* Preserve media references in summarization archives ([#3990](https://github.com/langchain-ai/deepagents/issues/3990)) ([2d6fb53](https://github.com/langchain-ai/deepagents/commit/2d6fb53cd8c94680a42fa9d7041509ff78050616))

---

Internal maintainers: @imnishitha, @aolsenjazz, @mdrxy

Released by: @mdrxy

## deepagents-code==0.1.24: deepagents-code==0.1.24

**Published**: 2026-06-25

### Features

* Enable `js_eval` by default ([#4245](https://github.com/langchain-ai/deepagents/issues/4245)) ([2e04ff3](https://github.com/langchain-ai/deepagents/commit/2e04ff397e60389c9a19c4a9b528e15602ad8338))
* Dynamic subagents UI ([#4221](https://github.com/langchain-ai/deepagents/issues/4221)) ([10bcba2](https://github.com/langchain-ai/deepagents/commit/10bcba25600e51aba135f170b34aa6315c0f53d6))
* Gate onboarding integrations modal behind opt-in flag ([#4227](https://github.com/langchain-ai/deepagents/issues/4227)) ([6c930c5](https://github.com/langchain-ai/deepagents/commit/6c930c5e4502f572be554acc896c5fb6d061e0e5))

### Bug Fixes

* Eager managed ripgrep install via `dcode tools install` ([#4199](https://github.com/langchain-ai/deepagents/issues/4199)) ([cf536f3](https://github.com/langchain-ai/deepagents/commit/cf536f339958d6726fa41f896c4a3e42df644c9f))
* Interrupt remote runs on chat cancellation ([#4234](https://github.com/langchain-ai/deepagents/issues/4234)) ([37c5fa2](https://github.com/langchain-ai/deepagents/commit/37c5fa23e621616836694bc59c1b0c38def81604))
* Sync approval toggles during active runs ([#4239](https://github.com/langchain-ai/deepagents/issues/4239)) ([4600365](https://github.com/langchain-ai/deepagents/commit/4600365ea0b60c3e9113ecf59b5336be37d03428))
* Clear stale live approval mode keys ([#4242](https://github.com/langchain-ai/deepagents/issues/4242)) ([f11a769](https://github.com/langchain-ai/deepagents/commit/f11a76962c9d536a38e27ac05b32feca364b2424))

---

Internal maintainers: @nick-hollon-lc, @colifran, @mdrxy

Released by: @mdrxy

## deepagents-code==0.1.23: deepagents-code==0.1.23

**Published**: 2026-06-25

### Features

* Collect Tavily key during onboarding ([#4233](https://github.com/langchain-ai/deepagents/issues/4233)) ([e321cba](https://github.com/langchain-ai/deepagents/commit/e321cba5701313e974f979069186680f1a39587c))
* Surface `/auth` in `/trace not-configured` hint ([#4206](https://github.com/langchain-ai/deepagents/issues/4206)) ([392e410](https://github.com/langchain-ai/deepagents/commit/392e410e48639a56fda5e35b6f7f85a5215cce9c))
* Add Opus 4.8 to recommended models ([#4204](https://github.com/langchain-ai/deepagents/issues/4204)) ([8faf2b0](https://github.com/langchain-ai/deepagents/commit/8faf2b025f8429481a41a3e65544d26614e53589))

### Bug Fixes

* `--reinstall` on `/install` so upgrades rebuild a clean env ([#4196](https://github.com/langchain-ai/deepagents/issues/4196)) ([5e152ac](https://github.com/langchain-ai/deepagents/commit/5e152ac0256d64376f96b293f8844bc8acc993ec))
* Suppress auto-update migration notice on fresh installs ([#4224](https://github.com/langchain-ai/deepagents/issues/4224)) ([eb8ff80](https://github.com/langchain-ai/deepagents/commit/eb8ff809a1b3130a261083c66a193e532095c6db))
* Bake release commit into `dcode doctor` ([#4225](https://github.com/langchain-ai/deepagents/issues/4225)) ([6dc0246](https://github.com/langchain-ai/deepagents/commit/6dc0246f5c6e9170e05191e1c82fad6975ac945c))
* Drop redundant version from "already up to date" message ([#4223](https://github.com/langchain-ai/deepagents/issues/4223)) ([5d080df](https://github.com/langchain-ai/deepagents/commit/5d080df2776d380214bf20ae31266b9628e4e5b0))
* Note subscription plans unusable for Anthropic in `/auth` ([#4207](https://github.com/langchain-ai/deepagents/issues/4207)) ([28cd19d](https://github.com/langchain-ai/deepagents/commit/28cd19db08bacf981ab2c91195638e66072816fe))

---

Internal maintainers: @mdrxy

Released by: @mdrxy

## deepagents-code==0.1.22: deepagents-code==0.1.22

**Published**: 2026-06-24

### Features

* Add LangSmith tracing config to `/auth` ([#4193](https://github.com/langchain-ai/deepagents/issues/4193)) ([8e62957](https://github.com/langchain-ai/deepagents/commit/8e6295791093c2ddfec7e6ac57f0df7f12048447))
* Auto-retry credentials-blocked startup after `/auth` ([#4176](https://github.com/langchain-ai/deepagents/issues/4176)) ([d10ba3d](https://github.com/langchain-ai/deepagents/commit/d10ba3dc162e47cc71df56b8e3d0000b6e0ed847))
* Improve onboarding Installed Integrations screen ([#4195](https://github.com/langchain-ai/deepagents/issues/4195)) ([0827bf1](https://github.com/langchain-ai/deepagents/commit/0827bf1b635b825121740ac8946dd6d98c815c7d))

### Bug Fixes

* Exclude managed bin dir from agent picker ([#4190](https://github.com/langchain-ai/deepagents/issues/4190)) ([d869d1e](https://github.com/langchain-ai/deepagents/commit/d869d1e1fa8558510fb48e71f78fb74c69ca4840))
* Warn on `/trace` when thread has no messages ([#4162](https://github.com/langchain-ai/deepagents/issues/4162)) ([c338fc9](https://github.com/langchain-ai/deepagents/commit/c338fc914fcd383beb4b97c13f53dfb2684f8c90))
* Hide "Recent" section during onboarding model selection ([#4198](https://github.com/langchain-ai/deepagents/issues/4198)) ([af882e4](https://github.com/langchain-ai/deepagents/commit/af882e4f6c859878e350d8a37bb75b7bc01bb453))
* Keep auth modal interactive after install-on-select ([#4187](https://github.com/langchain-ai/deepagents/issues/4187)) ([afbc56a](https://github.com/langchain-ai/deepagents/commit/afbc56a1d9dbe8a89015f4c2f90bb87547d5c1d4))
* Generic "missing credentials" in model switcher ([#4182](https://github.com/langchain-ai/deepagents/issues/4182)) ([456ce5c](https://github.com/langchain-ai/deepagents/commit/456ce5c2f5487a754d1fea7046e32c03b7e27a17))
* Hide chat input action buttons in same frame as empty draft ([#4178](https://github.com/langchain-ai/deepagents/issues/4178)) ([f94d417](https://github.com/langchain-ai/deepagents/commit/f94d417d5ad9928db967777fe1d7bc2c37684fb9))
* Preserve uv tool context when installing extras ([#4201](https://github.com/langchain-ai/deepagents/issues/4201)) ([fcc616c](https://github.com/langchain-ai/deepagents/commit/fcc616cf9bc2bbc7b2dc2574ae8649e2f270dc53))
* Unpin uv self-updates and warn when a stale dcode shadows PATH ([#4185](https://github.com/langchain-ai/deepagents/issues/4185)) ([8ca0a18](https://github.com/langchain-ai/deepagents/commit/8ca0a185a15f800267cc057178a348fb5063df1e))

---

Internal maintainers: @mdrxy

Released by: @mdrxy

## deepagents==0.7.0a2: deepagents==0.7.0a2

**Published**: 2026-06-24

> [!WARNING]
> This is a pre-release version. Install with: `pip install deepagents==0.7.0a2`

This alpha expands the initial filesystem work into the final `0.7` destructive-file-operation shape and updates write semantics so agents can replace files directly.

### Features

* Add recursive filesystem delete support across the filesystem backends and middleware, including the v0.7 delete support originally developed through [#3659](https://github.com/langchain-ai/deepagents/pull/3659), [#3691](https://github.com/langchain-ai/deepagents/pull/3691), [#3765](https://github.com/langchain-ai/deepagents/pull/3765), and [#3851](https://github.com/langchain-ai/deepagents/pull/3851) ([bc0de12](https://github.com/langchain-ai/deepagents/commit/bc0de124b7d3931d90ba6a19074d37ec65ead2d2)).
* Allow `write_file` to overwrite existing files, matching the behavior agents need when replacing generated artifacts or applying full-file edits ([#4109](https://github.com/langchain-ai/deepagents/pull/4109)) ([0decb36](https://github.com/langchain-ai/deepagents/commit/0decb36283c42ee927c523e39ba4f9b0800cd444)).

### Bug Fixes

* Refresh alpha prompt snapshots for the recursive delete tool shape ([02f8017](https://github.com/langchain-ai/deepagents/commit/02f801719bd8f4867eae55fa2a5d92b04a23a8dc)).

---

Internal maintainers: @imnishitha, @mdrxy

Released by: @mdrxy

Released from `alpha/deepagents-0-7-0a2` at commit [`02f8017`](https://github.com/langchain-ai/deepagents/commit/02f801719bd8f4867eae55fa2a5d92b04a23a8dc)


## deepagents-code==0.1.21: deepagents-code==0.1.21

**Published**: 2026-06-23

### Features

* `dcode doctor` diagnostics command ([#4148](https://github.com/langchain-ai/deepagents/issues/4148)) ([8179731](https://github.com/langchain-ai/deepagents/commit/81797312c7d857e7d94d03c9c695cd3c8d88799a))
* Add structured TUI display for `js_eval` ([#4151](https://github.com/langchain-ai/deepagents/issues/4151)) ([91c0dae](https://github.com/langchain-ai/deepagents/commit/91c0dae3fe0253f02a5926fcd3c6f796cd8d11fe))
* Allow dependency updates without requiring release ([#4157](https://github.com/langchain-ai/deepagents/issues/4157)) ([7beb97a](https://github.com/langchain-ai/deepagents/commit/7beb97a2b02e2fd238baf3b6f05d43a4accf3f42))
* Clear chat input via `esc+esc`, add `[ X ]/[ COPY ]` buttons ([#4000](https://github.com/langchain-ai/deepagents/issues/4000)) ([c20546f](https://github.com/langchain-ai/deepagents/commit/c20546feac7876786e6816776d1ccfa5fcd4b2c8))
* Confirm "Launched" after auto-update restart ([#4098](https://github.com/langchain-ai/deepagents/issues/4098)) ([df8db8a](https://github.com/langchain-ai/deepagents/commit/df8db8af6a7cbfc2ab535020b951d73759da73dd))
* Surface tracing in `doctor` and `config show` ([#4163](https://github.com/langchain-ai/deepagents/issues/4163)) ([2bb3e44](https://github.com/langchain-ai/deepagents/commit/2bb3e44243553a5f2954a0f3ec42364563842a87))

### Bug Fixes

* Handle LangSmith project-not-found and default tracing project ([#4153](https://github.com/langchain-ai/deepagents/issues/4153)) ([e303ce9](https://github.com/langchain-ai/deepagents/commit/e303ce986a3595f0cf458e796d857f7c8f5f8b5c))
* Make `/timestamps` toggle instant via per-footer class ([#4095](https://github.com/langchain-ai/deepagents/issues/4095)) ([7ae32b0](https://github.com/langchain-ai/deepagents/commit/7ae32b0a606cc200d4311e11036a65f17e8282b3))
* Refocus `/mcp` filter input after in-place refresh ([#4080](https://github.com/langchain-ai/deepagents/issues/4080)) ([d79cd74](https://github.com/langchain-ai/deepagents/commit/d79cd74cb8a44c300c3bbad712fe77e709f9221a))
* Report same-version dependency updates ([#4146](https://github.com/langchain-ai/deepagents/issues/4146)) ([156e118](https://github.com/langchain-ai/deepagents/commit/156e1185242a19746f8c268904637c73f07b9a10))
* Show "Loading..." in `/threads` agent dropdown while loading ([#4101](https://github.com/langchain-ai/deepagents/issues/4101)) ([c2d949e](https://github.com/langchain-ai/deepagents/commit/c2d949e8765fbbbdb81e5a70125932842358099f))
* Skip tool interrupts once auto-approve is set ([#4092](https://github.com/langchain-ai/deepagents/issues/4092)) ([9e21c34](https://github.com/langchain-ai/deepagents/commit/9e21c346a6eb8ad25b9cc671f24527b07732e2b7))
* Word-delete backspace parity in ask-user text area ([#4079](https://github.com/langchain-ai/deepagents/issues/4079)) ([ed3c499](https://github.com/langchain-ai/deepagents/commit/ed3c499354467bc5e8476e5c7cdf0cd5f8b6aec1))

---

Internal maintainers: @sydney-runkle, @hntrl, @mdrxy

Released by: @mdrxy

## langchain-quickjs==0.3.1: langchain-quickjs==0.3.1

**Published**: 2026-06-22

### Bug Fixes

* Persist top-level JS declarations across evals ([#4147](https://github.com/langchain-ai/deepagents/issues/4147)) ([7574fea](https://github.com/langchain-ai/deepagents/commit/7574fea88b51c77f7afa8279c4f561d6ecb47e3f))
* PTC tools in tools namespace are rendered without prepended `tools.` in system prompt and task as ptc duplicated task global ([#4075](https://github.com/langchain-ai/deepagents/issues/4075)) ([014a903](https://github.com/langchain-ai/deepagents/commit/014a9033af70b5b8b08ad2eb36f98590f5f1cca8))

---

Internal maintainers: @colifran, @hntrl, @mdrxy

## langchain-quickjs==0.3.0: langchain-quickjs==0.3.0

**Published**: 2026-06-18

### ⚠ BREAKING CHANGES

* Upgrade to 0.2.0 quickjs-rs ([#4067](https://github.com/langchain-ai/deepagents/issues/4067))

### Features

* Prompt tuning on task global ([#4066](https://github.com/langchain-ai/deepagents/issues/4066)) ([a47696f](https://github.com/langchain-ai/deepagents/commit/a47696f6d3e57eccb5ea19fb344305a7995ecc76))
* Upgrade to 0.2.0 quickjs-rs ([#4067](https://github.com/langchain-ai/deepagents/issues/4067)) ([4ffea88](https://github.com/langchain-ai/deepagents/commit/4ffea88690418207b5e4fa800ee8c1abfa454bec))

---

Internal maintainers: @hntrl, @mdrxy

## deepagents==0.6.11: deepagents==0.6.11

**Published**: 2026-06-18

### Bug Fixes

* Route `BaseSandbox async` helpers through aexecute ([#3996](https://github.com/langchain-ai/deepagents/issues/3996)) ([52dcf1a](https://github.com/langchain-ai/deepagents/commit/52dcf1a42cb00dd614b336038e4398472f78859d))

---

Thanks to our community contributors: @kavishkartha05 ([Twitter](https://x.com/kavishkarth31), [LinkedIn](https://linkedin.com/in/kavish-kartha))

Internal maintainers: @sydney-runkle, @imnishitha

## deepagents-code==0.1.20: deepagents-code==0.1.20

**Published**: 2026-06-17

### Features

* Manage Tavily web-search API key in `/auth` ([#4062](https://github.com/langchain-ai/deepagents/issues/4062)) ([90cc099](https://github.com/langchain-ai/deepagents/commit/90cc099b0998a9aa55df01e3bc12ad1597c65365))
* Surface uninstalled known providers in `/auth` menu ([#4059](https://github.com/langchain-ai/deepagents/issues/4059)) ([73db271](https://github.com/langchain-ai/deepagents/commit/73db2719bce5ad3c933ffee643df4a62cfd60e17))
* Show provider in usage stats table ([#4049](https://github.com/langchain-ai/deepagents/issues/4049)) ([309b054](https://github.com/langchain-ai/deepagents/commit/309b054fdd040adb5086408a3bcb2550ba73439e))
* Quiet install script's full dependency list ([#4058](https://github.com/langchain-ai/deepagents/issues/4058)) ([de2c9fd](https://github.com/langchain-ai/deepagents/commit/de2c9fd8c7437fdcdfe738599f83808c5423c55c))

### Bug Fixes

* Read `LANGSMITH_PROJECT` for `tracing.langsmith_project` + show default ([#4054](https://github.com/langchain-ai/deepagents/issues/4054)) ([fec1551](https://github.com/langchain-ai/deepagents/commit/fec1551e901a4fe88bd74ee4833a91ef93b1e93f))
* Surface recommended models missing from installed provider profiles ([#4057](https://github.com/langchain-ai/deepagents/issues/4057)) ([56e0d31](https://github.com/langchain-ai/deepagents/commit/56e0d31b6c507d5a1e95c3f2058a8d3b9488a4db))
* Clarify post-update restart semantics ([#4046](https://github.com/langchain-ai/deepagents/issues/4046)) ([6318b81](https://github.com/langchain-ai/deepagents/commit/6318b817399f7dd2f2e6dc07987dca46f1da9886))
* Hide `[SYSTEM]` interrupt notices from `/threads` prompt ([#3988](https://github.com/langchain-ai/deepagents/issues/3988)) ([68fa0cb](https://github.com/langchain-ai/deepagents/commit/68fa0cb4d48ff3f3e552bbf16f8316433c7b6f34))
* Keep install-required `/model` rows dimmed after navigation ([#4048](https://github.com/langchain-ai/deepagents/issues/4048)) ([c499634](https://github.com/langchain-ai/deepagents/commit/c499634c530dcab9b18e3126b4573ff0d36c3efa))
* Rescaffold server workspace on `/restart` when config is missing ([#4050](https://github.com/langchain-ai/deepagents/issues/4050)) ([de51b0e](https://github.com/langchain-ai/deepagents/commit/de51b0e082293f5f795d96d3bf717c82efb9337e))
* Remove transient `Restarting server...` message after restart ([#4047](https://github.com/langchain-ai/deepagents/issues/4047)) ([87cc504](https://github.com/langchain-ai/deepagents/commit/87cc50428bc96ef11dfb11cee4020bff322a7216))
* Suppress model-switch defer toast on bare reconnect ([#4060](https://github.com/langchain-ai/deepagents/issues/4060)) ([60b1052](https://github.com/langchain-ai/deepagents/commit/60b10520d24c87b9c8c9d85b94cffae9e3c67c43))

---

Internal maintainers: @mdrxy

## deepagents-code==0.1.19: deepagents-code==0.1.19

**Published**: 2026-06-17

### Features

* Add latest frontier models to recommended list ([#4045](https://github.com/langchain-ai/deepagents/issues/4045)) ([1145356](https://github.com/langchain-ai/deepagents/commit/114535637eaee383c64eac5282bc9ac57007c83f))
* Dual-write agent traces to extra LangSmith projects ([#3998](https://github.com/langchain-ai/deepagents/issues/3998)) ([1b94cf3](https://github.com/langchain-ai/deepagents/commit/1b94cf322949e0cafd6f2bacf343fb0044ec5a8c))
* Prompt to install provider when selecting an uninstalled model ([#3981](https://github.com/langchain-ai/deepagents/issues/3981)) ([619207c](https://github.com/langchain-ai/deepagents/commit/619207c8d4d4308a9a3ab9d2d039506feeaf8a67))
* Note minimum OpenAI key permissions in `/auth` ([#4040](https://github.com/langchain-ai/deepagents/issues/4040)) ([14be63d](https://github.com/langchain-ai/deepagents/commit/14be63d476ed8dece75e20fff05016122c258be8))

### Bug Fixes

* Exclude prompt prefix from `UserMessage` selection ([#4002](https://github.com/langchain-ai/deepagents/issues/4002)) ([8ee6ba6](https://github.com/langchain-ai/deepagents/commit/8ee6ba6e64895d3d36a5957627221ed7667bc1d4))

---

Internal maintainers: @mdrxy

## deepagents-code==0.1.18: deepagents-code==0.1.18

**Published**: 2026-06-16

### Features

* Add provider-specific auth guidance ([#4004](https://github.com/langchain-ai/deepagents/issues/4004)) ([6a39247](https://github.com/langchain-ai/deepagents/commit/6a392471ba30089b1a63135494873d55209bb081))

---

Internal maintainers: @hntrl, @mdrxy

## deepagents-code==0.1.17: deepagents-code==0.1.17

**Published**: 2026-06-16

### Features

* Make auto-update opt-out by default ([#3994](https://github.com/langchain-ai/deepagents/issues/3994)) ([7ff6e22](https://github.com/langchain-ai/deepagents/commit/7ff6e2224d7ba8462c073333da937c35831f9b34))
* Warn on `--interpreter-tools` without `--interpreter` ([#3976](https://github.com/langchain-ai/deepagents/issues/3976)) ([e68e720](https://github.com/langchain-ai/deepagents/commit/e68e720e2c3caa4e4e7c5e937faf718db7ad2e98))
* Add pre-release update support ([#3960](https://github.com/langchain-ai/deepagents/issues/3960)) ([341a5cc](https://github.com/langchain-ai/deepagents/commit/341a5cc55a30d808dbb366b396923c7801c431d2))
* Add agent filter dropdown to `/threads` picker ([#3677](https://github.com/langchain-ai/deepagents/issues/3677)) ([f8193df](https://github.com/langchain-ai/deepagents/commit/f8193df41d7c47626d94252039217f4079d117cd))
* Non-interactive `deepagents auth` subcommands ([#3910](https://github.com/langchain-ai/deepagents/issues/3910)) ([11a71bb](https://github.com/langchain-ai/deepagents/commit/11a71bbf00c4e6c1f989e70fb3472a65c8d39662))
* Prompt before updating an out-of-date dcode install ([#3995](https://github.com/langchain-ai/deepagents/issues/3995)) ([a5ec6dd](https://github.com/langchain-ai/deepagents/commit/a5ec6dd0fec66ad321c1cc0f5e2f990c9026e03f))

### Bug Fixes

* Guard against misconfigured LangSmith tracing ([#3993](https://github.com/langchain-ai/deepagents/issues/3993)) ([81acc2e](https://github.com/langchain-ai/deepagents/commit/81acc2ecdada55a98e512f96b0caf8cb0f2c6d29))
* Guard restart-prompt import against in-place self-upgrade ([#3980](https://github.com/langchain-ai/deepagents/issues/3980)) ([7af13f6](https://github.com/langchain-ai/deepagents/commit/7af13f6ec2440c2e3eb63bad2ff31e809f772804))
* Skip startup auto-update when already updated in-session ([#3915](https://github.com/langchain-ai/deepagents/issues/3915)) ([3ba3471](https://github.com/langchain-ai/deepagents/commit/3ba347138ac61a474bad58365fdeaa0d00cc1a42))

---

Thanks to our community contributors: @NinaadRao ([LinkedIn](https://linkedin.com/in/ninaadrao))

Internal maintainers: @mdrxy

## deepagents==0.7.0a1: deepagents==0.7.0a1

**Published**: 2026-06-15

> [!WARNING]
> This is a pre-release version. Install with: `pip install deepagents==0.7.0a1`

This first `0.7.0` alpha starts the filesystem-backend changes for destructive file operations and explicit empty-result handling. It is intended for validating the `0.7` line before these behavior changes are promoted to a GA release.

### Breaking Changes

* `ls` and `glob` empty-result output changes from `[]` to `No files found`. Callers that parse or compare empty-result output should update those checks.

### Features

* Add backend `delete`/`adelete` protocol support and expose a filesystem delete tool for agents. Unsupported backends return user-facing unsupported-delete errors instead of failing opaquely ([a592f28](https://github.com/langchain-ai/deepagents/commit/a592f280c8e6a3b14a14f4fd32bcd51e6b0fdc5e)).

### Bug Fixes

* Return an explicit `No files found` sentinel from `ls` and `glob` when no paths match, instead of exposing the stringified empty list `[]` ([#3709](https://github.com/langchain-ai/deepagents/issues/3709)) ([81e61ee](https://github.com/langchain-ai/deepagents/commit/81e61eedc5e02af82af563444c61f457734e84cb)).

---

Internal maintainers: @imnishitha


## langchain-vercel-sandbox==0.0.1: langchain-vercel-sandbox==0.0.1

**Published**: 2026-06-13

### Features

* Add Vercel Sandbox provider ([#3588](https://github.com/langchain-ai/deepagents/issues/3588)) ([e5e4748](https://github.com/langchain-ai/deepagents/commit/e5e4748cb6c66ddaa9444ab464990c1a5d10854d))

---

Thanks to our community contributors: @scotttrinh

## deepagents==0.6.10: deepagents==0.6.10

**Published**: 2026-06-13

### Bug Fixes

* Compare provider in `model_matches_spec` ([#3943](https://github.com/langchain-ai/deepagents/issues/3943)) ([34244b6](https://github.com/langchain-ai/deepagents/commit/34244b6aebde4c237758dacedccdc3e22f3ca8e5))

---

Internal maintainers: @mdrxy

## deepagents-code==0.1.16: deepagents-code==0.1.16

**Published**: 2026-06-13

### Features

* ChatGPT OAuth sign-in for Codex models ([#3532](https://github.com/langchain-ai/deepagents/issues/3532)) ([202e0bd](https://github.com/langchain-ai/deepagents/commit/202e0bd3e5b8b874a69656815489308d75a77d05))
* Add Vercel Sandbox provider ([#3588](https://github.com/langchain-ai/deepagents/issues/3588)) ([e5e4748](https://github.com/langchain-ai/deepagents/commit/e5e4748cb6c66ddaa9444ab464990c1a5d10854d))

---

Thanks to our community contributors: @scotttrinh

## langchain-quickjs==0.2.0: langchain-quickjs==0.2.0

**Published**: 2026-06-12

## [0.2.0](https://github.com/langchain-ai/deepagents/compare/langchain-quickjs==0.1.4...langchain-quickjs==0.2.0) (2026-06-12)

### ⚠ BREAKING CHANGES

* Add default `subagent` bridge ([#3850](https://github.com/langchain-ai/deepagents/issues/3850))
* Remove `skills_backend` ([#3843](https://github.com/langchain-ai/deepagents/issues/3843))

### Features

* Add default `subagent` bridge ([#3850](https://github.com/langchain-ai/deepagents/issues/3850)) ([85fd7c2](https://github.com/langchain-ai/deepagents/commit/85fd7c283da6744e403a01861e17e99e13e0f481))

### Bug Fixes

* Remove `skills_backend` ([#3843](https://github.com/langchain-ai/deepagents/issues/3843)) ([1159e50](https://github.com/langchain-ai/deepagents/commit/1159e504abaeec4f81d5e777ecde6a6cee641edb))

---

Internal maintainers: @hntrl, @mdrxy

## deepagents==0.6.9: deepagents==0.6.9

**Published**: 2026-06-12

### Features

* Support configurable subagent response format ([#3882](https://github.com/langchain-ai/deepagents/issues/3882)) ([b0e4d7a](https://github.com/langchain-ai/deepagents/commit/b0e4d7aa8d0ad58c65bddef3835e539b3d5b2a99))

### Bug Fixes

* Don't swallow `TypeError` from custom `token_counter` ([#3927](https://github.com/langchain-ai/deepagents/issues/3927)) ([a6ec9d0](https://github.com/langchain-ai/deepagents/commit/a6ec9d0e797a8b8a7d53d7debb197bb25e80be41))
* Handle `Overwrite`-wrapped messages in tool result interception ([#3905](https://github.com/langchain-ai/deepagents/issues/3905)) ([a043c5a](https://github.com/langchain-ai/deepagents/commit/a043c5a6717374c405a3ed740cfdafdd196f5f21))
* Keep private state out of subagent propagation ([#3542](https://github.com/langchain-ai/deepagents/issues/3542)) ([7ff9553](https://github.com/langchain-ai/deepagents/commit/7ff9553fc057a682ba503ebfe9a870adb51ab848))
* Make sync glob timeout bound wall-clock time ([#3866](https://github.com/langchain-ai/deepagents/issues/3866)) ([cba6caf](https://github.com/langchain-ai/deepagents/commit/cba6caf8f708133381506ecc9e217e7e3ca1c7f2))
* Normalize read slices after windowing ([#3888](https://github.com/langchain-ai/deepagents/issues/3888)) ([33d900c](https://github.com/langchain-ai/deepagents/commit/33d900c98b686aa7e7782d0be3019010ced5f03a))
* Stream Python grep fallback ([#3886](https://github.com/langchain-ai/deepagents/issues/3886)) ([3673d95](https://github.com/langchain-ai/deepagents/commit/3673d95d41aa00f03fbfe2083e46afa485800f3a))

### Performance Improvements

* Count tokens once per model call in summarization middleware ([#3877](https://github.com/langchain-ai/deepagents/issues/3877)) ([6558c8c](https://github.com/langchain-ai/deepagents/commit/6558c8ca3d8e10e3309f95c807e740914af3175f))
* Cache filesystem system prompts ([#3889](https://github.com/langchain-ai/deepagents/issues/3889)) ([2f432ba](https://github.com/langchain-ai/deepagents/commit/2f432ba63687d7c8488d5d41d0551d02b4ae00b4))
* Cache grep glob matchers ([#3887](https://github.com/langchain-ai/deepagents/issues/3887)) ([eae3cf1](https://github.com/langchain-ai/deepagents/commit/eae3cf148de3f8c8ee9ffd8af6e5a5e06cce9d6f))

---

Thanks to our community contributors: @phamgialinhlx

Internal maintainers: @nick-hollon-lc, @hntrl, @mdrxy

## deepagents-code==0.1.15: deepagents-code==0.1.15

**Published**: 2026-06-12

### Features

* Add Deep Agents client version metadata ([#3934](https://github.com/langchain-ai/deepagents/issues/3934)) ([058cec6](https://github.com/langchain-ai/deepagents/commit/058cec654645dd1a504408d712ab678edc48273d))

---

Internal maintainers: @mdrxy

## deepagents-code==0.1.14: deepagents-code==0.1.14

**Published**: 2026-06-12

### Features

* Surface editable mode and core deps in `/version` ([#3898](https://github.com/langchain-ai/deepagents/issues/3898)) ([d4f5a12](https://github.com/langchain-ai/deepagents/commit/d4f5a12cc6d73dc19d24d5748242705d79fa65bf))

### Bug Fixes

* Don't move cursor on click that re-focuses terminal ([#3893](https://github.com/langchain-ai/deepagents/issues/3893)) ([b76788b](https://github.com/langchain-ai/deepagents/commit/b76788b7850e910fe2882cb1a62ffff6ff5085b0))
* Label `-r` resume as `"Resuming..."` in the status bar ([#3892](https://github.com/langchain-ai/deepagents/issues/3892)) ([70cd286](https://github.com/langchain-ai/deepagents/commit/70cd28643bc2ca7da5a61a7b7203c6de2266ca4e))
* Scope `@` file completion to current cwd ([#3874](https://github.com/langchain-ai/deepagents/issues/3874)) ([dd237ac](https://github.com/langchain-ai/deepagents/commit/dd237acd21a39e98e37bb9d98dfae09bc44d5457))
* Set dcode agent names in trace metadata ([#3901](https://github.com/langchain-ai/deepagents/issues/3901)) ([ac94dd6](https://github.com/langchain-ai/deepagents/commit/ac94dd6b139211187cad8685c1152f02c51ba086))
* Surface untracked files in `@` completion ([#3872](https://github.com/langchain-ai/deepagents/issues/3872)) ([2bdf6ea](https://github.com/langchain-ai/deepagents/commit/2bdf6ea329c6b4c8be5f0075528e00c7ce2c1e6a))
* Warn on misconfigured subagent files ([#3873](https://github.com/langchain-ai/deepagents/issues/3873)) ([f1614d6](https://github.com/langchain-ai/deepagents/commit/f1614d67827c3d4d3bd01a784f57f83a50ec3410))

### Performance Improvements

* Cache theme colors/charset, fix `O(n^2)` tool-call streaming ([#3881](https://github.com/langchain-ai/deepagents/issues/3881)) ([9d463f5](https://github.com/langchain-ai/deepagents/commit/9d463f52fb3a4d458477982963f3d278d5362b48))

---

Internal maintainers: @mdrxy

## deepagents-code==0.1.13: deepagents-code==0.1.13

**Published**: 2026-06-11

### Features

* Pluggable third-party sandbox backends ([#3842](https://github.com/langchain-ai/deepagents/issues/3842)) ([2b635a7](https://github.com/langchain-ai/deepagents/commit/2b635a7e6e6b50ca8ce783c2ac96ed8643ae0224))
* Auto-install ripgrep on first run ([#3348](https://github.com/langchain-ai/deepagents/issues/3348)) ([fecf22b](https://github.com/langchain-ai/deepagents/commit/fecf22b0909e79ff7bdf180baf20abf5fdf1f390))
* `config` command and canonical config manifest ([#3763](https://github.com/langchain-ai/deepagents/issues/3763)) ([79899a3](https://github.com/langchain-ai/deepagents/commit/79899a306d01de6217a1dfcc013ae92c808a47a0))
* Confirm modal for `/install --package` ([#3840](https://github.com/langchain-ai/deepagents/issues/3840)) ([3d75026](https://github.com/langchain-ai/deepagents/commit/3d75026e2f241648fae78d9e1de2cbb4985f58ff))
* Copy focused input selection on `Ctrl+C` ([#3841](https://github.com/langchain-ai/deepagents/issues/3841)) ([99f782c](https://github.com/langchain-ai/deepagents/commit/99f782cf08336c200d02a24ae4edaa650af67ed2))
* `[retries]` config ([#3772](https://github.com/langchain-ai/deepagents/issues/3772)) ([9334d91](https://github.com/langchain-ai/deepagents/commit/9334d91ef94997e46d5373daca9c146fa9498763))
* Show connection state in the status bar ([#3710](https://github.com/langchain-ai/deepagents/issues/3710)) ([3e3e8fe](https://github.com/langchain-ai/deepagents/commit/3e3e8feb0e6e1b77be75a7756fbf32e5c9497c28))
* Surface LangSmith tracing projects in `LocalContextMiddleware` ([#3836](https://github.com/langchain-ai/deepagents/issues/3836)) ([676abec](https://github.com/langchain-ai/deepagents/commit/676abecf892ff537fcb1425ba5929cace3c5d503))

### Bug Fixes

* Add debug-log guidance for truncated startup errors ([#3849](https://github.com/langchain-ai/deepagents/issues/3849)) ([cd1ef30](https://github.com/langchain-ai/deepagents/commit/cd1ef303cf5d0e9d746c787eb09a4a89437e965a))
* Drop lock-key events so Caps Lock in iTerm2 doesn't type ([#3855](https://github.com/langchain-ai/deepagents/issues/3855)) ([110f1a7](https://github.com/langchain-ai/deepagents/commit/110f1a7a975743efda12e181cb3afc8404202254))
* Hand pointer over splash tracing project link ([#3858](https://github.com/langchain-ai/deepagents/issues/3858)) ([ea7dae5](https://github.com/langchain-ai/deepagents/commit/ea7dae58a37cfb1d2b96544eb7c941aad331b280))
* Keep terminal-default theme on Esc in `/theme` selector ([#3854](https://github.com/langchain-ai/deepagents/issues/3854)) ([c3bc67b](https://github.com/langchain-ai/deepagents/commit/c3bc67b0cdeda6f4dbcc6360ddd72b455aec4fe7))
* Preserve inherited `PYTHONPATH` for server subprocess ([#3833](https://github.com/langchain-ai/deepagents/issues/3833)) ([4689569](https://github.com/langchain-ai/deepagents/commit/4689569f94138987319cd9cbb45ce66a1f496934))
* Resolve interpreter PTC allowlist against the runtime tool registry ([#3845](https://github.com/langchain-ai/deepagents/issues/3845)) ([c59a27e](https://github.com/langchain-ai/deepagents/commit/c59a27ef2405b8e04c4351ce7ffa53d8d16d519c))
* Treat multi-line key-event pastes as one input ([#3856](https://github.com/langchain-ai/deepagents/issues/3856)) ([6bb15d4](https://github.com/langchain-ai/deepagents/commit/6bb15d4bd97bd16f47504f937c8458d1b53d9cc4))

---

Internal maintainers: @mdrxy

## deepagents-code==0.1.12: deepagents-code==0.1.12

**Published**: 2026-06-10

### Features

* Add `get_current_thread_id` tool ([#3820](https://github.com/langchain-ai/deepagents/issues/3820)) ([18ce094](https://github.com/langchain-ai/deepagents/commit/18ce094b7036796c7e23ce1338f4da56dc2ef126))
* Guard managed onboarding-name memory block from edits ([#3822](https://github.com/langchain-ai/deepagents/issues/3822)) ([dc0a51f](https://github.com/langchain-ai/deepagents/commit/dc0a51fc81d01b62dc8043148a9fd87099fc9123))
* Offer restart after restart-capable install ([#3821](https://github.com/langchain-ai/deepagents/issues/3821)) ([e356efe](https://github.com/langchain-ai/deepagents/commit/e356efeff1c8bfb894119cebbb7d3c0853d327a2))
* Persist `/threads` directory-scope preference ([#3824](https://github.com/langchain-ai/deepagents/issues/3824)) ([51a29f4](https://github.com/langchain-ai/deepagents/commit/51a29f4a0c28c122acae296a0df03bee20474455))
* Surface gateway key mismatch on `PermissionDeniedError` ([#3813](https://github.com/langchain-ai/deepagents/issues/3813)) ([5bd1ef8](https://github.com/langchain-ai/deepagents/commit/5bd1ef8cb29db781ccbb37755db44ce0ab1d7bd2))

### Bug Fixes

* Surface cached MCP errors as failed tool messages ([#3829](https://github.com/langchain-ai/deepagents/issues/3829)) ([d83b428](https://github.com/langchain-ai/deepagents/commit/d83b428f7f97bc40b9219c02846c2d8b4ccac434))
* Handle MCP tool errors locally ([#3830](https://github.com/langchain-ai/deepagents/issues/3830)) ([97a7052](https://github.com/langchain-ai/deepagents/commit/97a7052b3eef7ec80bc90a4c3b606deeaf13cb9b))
* Make non-incognito `!` shell output visible to the model ([#3825](https://github.com/langchain-ai/deepagents/issues/3825)) ([2407bca](https://github.com/langchain-ai/deepagents/commit/2407bca66bac5d199a923a0e58872c813eb006bc))
* Expose `/restart` slash command ([#3809](https://github.com/langchain-ai/deepagents/issues/3809)) ([64505b8](https://github.com/langchain-ai/deepagents/commit/64505b848868b80213b6da87113cd63890c3d520))
* Agent retries `gh search` with invalid `mergedAt` field ([#3802](https://github.com/langchain-ai/deepagents/issues/3802)) ([0b683a9](https://github.com/langchain-ai/deepagents/commit/0b683a9435b95bce79d10451868eae54c6a3e88c))
* Clarify `/restart` message during server startup ([#3823](https://github.com/langchain-ai/deepagents/issues/3823)) ([49ded9e](https://github.com/langchain-ai/deepagents/commit/49ded9ef448dcd263bee07ac15f4904dd342bfa2))
* Cursor at end when popping queued message to input ([#3832](https://github.com/langchain-ai/deepagents/issues/3832)) ([aa522c9](https://github.com/langchain-ai/deepagents/commit/aa522c94fffb93dc578addb39b4879f779ac5899))
* Coalesce streamed markdown writes to keep input responsive ([#3819](https://github.com/langchain-ai/deepagents/issues/3819)) ([b45eeeb](https://github.com/langchain-ai/deepagents/commit/b45eeebaf7e6ae6e07b8f9ca521525c66fe14f63))
* Don't show `"No threads found"` while threads load ([#3815](https://github.com/langchain-ai/deepagents/issues/3815)) ([68e6426](https://github.com/langchain-ai/deepagents/commit/68e64263f590b3244b689664715f354fb3a389cd))
* Ignore stale cwd warmers in file autocomplete cache ([#3835](https://github.com/langchain-ai/deepagents/issues/3835)) ([9c8c2b2](https://github.com/langchain-ai/deepagents/commit/9c8c2b24853b7b3a7610cbcfc368a6464c0711e0))
* Offer cwd switch on resume ([#3810](https://github.com/langchain-ai/deepagents/issues/3810)) ([d417f53](https://github.com/langchain-ai/deepagents/commit/d417f530aafa8c77523487393dc3039cc822dc09))
* Recover from tool errors instead of aborting run ([#3804](https://github.com/langchain-ai/deepagents/issues/3804)) ([45691c5](https://github.com/langchain-ai/deepagents/commit/45691c556105e171c7210c7c10388dc73202a025))
* Show `/restart` feedback ([#3808](https://github.com/langchain-ai/deepagents/issues/3808)) ([c40bef9](https://github.com/langchain-ai/deepagents/commit/c40bef9b2aaace3909593503b28e8b548bc20014))
* Standardize search previews and restart status ([#3806](https://github.com/langchain-ai/deepagents/issues/3806)) ([71a6d50](https://github.com/langchain-ai/deepagents/commit/71a6d508b21b275c0c7c6bd2e0752adfba496ea9))
* Suppress stale update notices ([#3801](https://github.com/langchain-ai/deepagents/issues/3801)) ([db25241](https://github.com/langchain-ai/deepagents/commit/db252411d8ca945aca86429acb644540ec970bdb))
* Unblock `/remember` in server mode ([#3812](https://github.com/langchain-ai/deepagents/issues/3812)) ([12e00e1](https://github.com/langchain-ai/deepagents/commit/12e00e1a78e2d6be106147a0aa95a518be66849f))
* Unblock TUI input during `/restart` ([#3826](https://github.com/langchain-ai/deepagents/issues/3826)) ([366cd81](https://github.com/langchain-ai/deepagents/commit/366cd81269e2d3891a477848b774cf51af0cefc0))

---

Internal maintainers: @jkennedyvz, @mdrxy

## deepagents-talon==0.0.1: deepagents-talon==0.0.1

**Published**: 2026-06-09

Initial release
feat(talon): add local runtime host (#3759)

---

Internal maintainers: @jkennedyvz

## deepagents-code==0.1.11: deepagents-code==0.1.11

**Published**: 2026-06-08

### Bug Fixes

* Pause loading timer during approvals ([#3782](https://github.com/langchain-ai/deepagents/issues/3782)) ([f98fb0c](https://github.com/langchain-ai/deepagents/commit/f98fb0c80d08e408a018ea33a8aa7144180f4e93))
* Run auto-update before startup ([#3784](https://github.com/langchain-ai/deepagents/issues/3784)) ([c160ea3](https://github.com/langchain-ai/deepagents/commit/c160ea3eeda1d0ba707bb524cfd0ce087a854e08))
* Skip update prompts for editable installs ([#3781](https://github.com/langchain-ai/deepagents/issues/3781)) ([ae2874e](https://github.com/langchain-ai/deepagents/commit/ae2874e8ece96c04233c1a88a9da1bd7b9ee2bb2))

---

Internal maintainers: @mdrxy

## deepagents-cli==0.2.2: deepagents-cli==0.2.2

**Published**: 2026-06-07

### Bug Fixes

* support `state` deploy backend via state kwarg rather than `default`, misc API alignments with MDA ([#3790](https://github.com/langchain-ai/deepagents/issues/3790)) ([04b4bb9](https://github.com/langchain-ai/deepagents/commit/04b4bb946fc5ff914b8cccc8c9543d10533de0f8))

---

Internal maintainers: @victorm-lc

## deepagents-code==0.1.10: deepagents-code==0.1.10

**Published**: 2026-06-05

### Features

* Pair model API keys with their endpoints ([#3770](https://github.com/langchain-ai/deepagents/issues/3770)) ([cf98030](https://github.com/langchain-ai/deepagents/commit/cf9803072dc0fdc1d5850c9fd2fc4eb6893ed8c9))
* Word-level double-click selection ([#3740](https://github.com/langchain-ai/deepagents/issues/3740)) ([4bb4286](https://github.com/langchain-ai/deepagents/commit/4bb4286a26c9c9bc69a36f2714d9eb0e3e5e4d40))
* Blueprint bootstrapping for Runloop sandboxes ([#3556](https://github.com/langchain-ai/deepagents/issues/3556)) ([13dafd8](https://github.com/langchain-ai/deepagents/commit/13dafd8823c4b530c8e096012733ad74cd501b59))

### Bug Fixes

* Propagate runtime model switches to subagents ([#3771](https://github.com/langchain-ai/deepagents/issues/3771)) ([f577182](https://github.com/langchain-ai/deepagents/commit/f577182c84746e625b65c3c2fda95f8ca21164cf))
* Guard pasted-path probes against `OSError` ([#3745](https://github.com/langchain-ai/deepagents/issues/3745)) ([c9617d3](https://github.com/langchain-ai/deepagents/commit/c9617d3594ab1448c4f3ee2212cdc66cbf138b77))
* Keep startup import prewarm from crashing the TUI mid-upgrade ([#3756](https://github.com/langchain-ai/deepagents/issues/3756)) ([867a2e5](https://github.com/langchain-ai/deepagents/commit/867a2e5c341bd9dfa70b47c7fafc194ac51d7469))
* Move MCP trust state out of user config ([#3742](https://github.com/langchain-ai/deepagents/issues/3742)) ([a97f2fd](https://github.com/langchain-ai/deepagents/commit/a97f2fd394e6b0b943225a0195b0901188bd368c))

---

Thanks to our community contributors: @yuvrxj-afk

Internal maintainers: @mdrxy

## langchain-runloop==0.0.6: langchain-runloop==0.0.6

**Published**: 2026-06-03

### Features

* Add blueprint bootstrapping for Runloop sandboxes ([#3556](https://github.com/langchain-ai/deepagents/issues/3556)) ([13dafd8](https://github.com/langchain-ai/deepagents/commit/13dafd8823c4b530c8e096012733ad74cd501b59))

---

Thanks to our community contributors: @yuvrxj-afk

Internal maintainers: @nick-hollon-lc, @sydney-runkle, @mdrxy

## langchain-quickjs==0.1.4: langchain-quickjs==0.1.4

**Published**: 2026-06-03

### Bug Fixes

* Swarm subagent doesn't allow configuring middleware ([#3757](https://github.com/langchain-ai/deepagents/issues/3757)) ([3394a9d](https://github.com/langchain-ai/deepagents/commit/3394a9d9c7c89c0a28fa1328c9f6bae68a83ff14))

---

Internal maintainers: @nick-hollon-lc, @colifran, @mdrxy

## langchain-modal==0.0.5: langchain-modal==0.0.5

**Published**: 2026-06-03

* Version bumps

---

Internal maintainers: @nick-hollon-lc, @sydney-runkle, @mdrxy

## langchain-daytona==0.0.7: langchain-daytona==0.0.7

**Published**: 2026-06-03

* Version bumps

---

Internal maintainers: @nick-hollon-lc, @sydney-runkle, @mdrxy

## deepagents==0.6.8: deepagents==0.6.8

**Published**: 2026-06-03

> [!WARNING]
> We have removed public exports for `SubagentRunStream`, `AsyncSubagentRunStream`, and `SubagentTransformer`. These are internal classes for the beta `stream_events(version="v3")` streaming API that should not have been publicly exported in the first place.

### Features

* Add interrupt mode to filesystem permissions ([#3505](https://github.com/langchain-ai/deepagents/issues/3505)) ([a090162](https://github.com/langchain-ai/deepagents/commit/a090162ea9fd950c54fac874b8a165ca770fd2dc))
* Surface subagents via inherited `lc_agent_name` projection ([e0a1ed2](https://github.com/langchain-ai/deepagents/commit/e0a1ed24e6b44c31d0aac3358aeee0d6cb66b2c4))

### Bug Fixes

* Pass through summarization factory prompt knobs ([#3559](https://github.com/langchain-ai/deepagents/issues/3559)) ([a663cad](https://github.com/langchain-ai/deepagents/commit/a663cad8858a78a5d063af0c51bb789bfb1aba2b))
* Align `glob` path default with `grep` ([#3666](https://github.com/langchain-ai/deepagents/issues/3666)) ([ece8e75](https://github.com/langchain-ai/deepagents/commit/ece8e752059f493254753194bcf59befe54b3556))
* Guard empty binary reads with empty-content warning ([#3675](https://github.com/langchain-ai/deepagents/issues/3675)) ([2c2cec8](https://github.com/langchain-ai/deepagents/commit/2c2cec87476f06e32c7b09cedd2c44e0c713f147))
* Surface missing path errors in `FilesystemBackend.ls` ([#3574](https://github.com/langchain-ai/deepagents/issues/3574)) ([4c28760](https://github.com/langchain-ai/deepagents/commit/4c28760abbbe43117f2118793f11ff9d4f71761e))
* Timeout python grep fallback ([#1937](https://github.com/langchain-ai/deepagents/issues/1937)) ([665a18e](https://github.com/langchain-ai/deepagents/commit/665a18e7fe7f291319af6780328384cc658af899))

---

Thanks to our community contributors: @keenborder786, @NinaadRao ([LinkedIn](https://linkedin.com/in/ninaadrao))

Internal maintainers: @nick-hollon-lc, @mdrxy

## deepagents-code==0.1.9: deepagents-code==0.1.9

**Published**: 2026-06-03

### Bug Fixes

* Add terminal progress preference ([#3728](https://github.com/langchain-ai/deepagents/issues/3728)) ([d9e4976](https://github.com/langchain-ai/deepagents/commit/d9e4976826ae2281e90e06facb5a70a785703029))

---

Thanks to our community contributors: @devin-lai

Internal maintainers: @mdrxy

## deepagents-cli==0.2.1: deepagents-cli==0.2.1

**Published**: 2026-06-03

* Version bumps

---

Internal maintainers: @nick-hollon-lc, @mdrxy

## deepagents-acp==0.0.8: deepagents-acp==0.0.8

**Published**: 2026-06-03

### Bug Fixes

* Require `agent-client-protocol>=0.9.0` ([#3733](https://github.com/langchain-ai/deepagents/issues/3733)) ([376d981](https://github.com/langchain-ai/deepagents/commit/376d9816833ef02a00fd4f1c4ccdf625629c36a4))

---

Internal maintainers: @mdrxy

## deepagents-acp==0.0.7: deepagents-acp==0.0.7

**Published**: 2026-06-03

* Bumping dependencies

---

Internal maintainers: @nick-hollon-lc, @sydney-runkle, @vishnu-ssuresh, @eyurtsev, @jacoblee93, @mdrxy

## deepagents-code==0.1.8: deepagents-code==0.1.8

**Published**: 2026-06-02

### Features

* List valid extras when `/install` has no argument ([#3695](https://github.com/langchain-ai/deepagents/issues/3695)) ([c7d529c](https://github.com/langchain-ai/deepagents/commit/c7d529ca0fc478dec9060ea04bcc8589f9b1cd3a))
* Add MCP error detail modal ([#3687](https://github.com/langchain-ai/deepagents/issues/3687)) ([4ae4754](https://github.com/langchain-ai/deepagents/commit/4ae475453ce0df6d6b057b7e163396aa27d55143))

### Bug Fixes

* Allow recovery commands when startup fails ([#3706](https://github.com/langchain-ai/deepagents/issues/3706)) ([727d022](https://github.com/langchain-ai/deepagents/commit/727d022cd1526836c3d1de997c1f036e870881f7))
* Preserve extras during install ([#3707](https://github.com/langchain-ai/deepagents/issues/3707)) ([e636ce9](https://github.com/langchain-ai/deepagents/commit/e636ce9e979fd1c30335ec340acdabbd0a5ae79e))
* Normalize empty file list tool output ([#3697](https://github.com/langchain-ai/deepagents/issues/3697)) ([b67aead](https://github.com/langchain-ai/deepagents/commit/b67aead2b86e04aaee8f2dbfba7b263e3e23597d))
* Point MCP re-enable guidance at `Ctrl+R` ([#3688](https://github.com/langchain-ai/deepagents/issues/3688)) ([15ca302](https://github.com/langchain-ai/deepagents/commit/15ca3029f18fa38c1592859febc2a6d0469bff2d))
* Preserve MCP token refresh when metadata discovery fails ([#3685](https://github.com/langchain-ai/deepagents/issues/3685)) ([afafeeb](https://github.com/langchain-ai/deepagents/commit/afafeeb471c4008d4eb4263ec478cf868833fe0b))
* Reduce OAuth login modal noise ([#3693](https://github.com/langchain-ai/deepagents/issues/3693)) ([0e8a780](https://github.com/langchain-ai/deepagents/commit/0e8a780e2dfea2e22ac44545a16279dbe30eb8ee))
* Repair MCP OAuth login redirect and stale client registration ([#3692](https://github.com/langchain-ai/deepagents/issues/3692)) ([f741293](https://github.com/langchain-ai/deepagents/commit/f741293524f7d47eb8a16a3cd4def336c3c3c13f))
* Search all models from `/model` filter ([#3690](https://github.com/langchain-ai/deepagents/issues/3690)) ([5fcb877](https://github.com/langchain-ai/deepagents/commit/5fcb877d094c4504f671bb7aeb52efa7bf3a5b48))
* Serialize `QueuedUserMessage` as user input ([#3708](https://github.com/langchain-ai/deepagents/issues/3708)) ([307d598](https://github.com/langchain-ai/deepagents/commit/307d59826da9b1ddcbcdab8dccef6d18ecf16d10))
* Serialize cold SDK imports ([#3712](https://github.com/langchain-ai/deepagents/issues/3712)) ([fb2adc0](https://github.com/langchain-ai/deepagents/commit/fb2adc0585e978b12646602ba922e252abf41f81))
* Pluralize singular MCP login splash text ([#3689](https://github.com/langchain-ai/deepagents/issues/3689)) ([492b0fc](https://github.com/langchain-ai/deepagents/commit/492b0fc9209e13cd7004a255ef67b31b7e78e95e))

---

Thanks to our community contributors: @bonpiedlaroute

Internal maintainers: @nick-hollon-lc, @mdrxy

## deepagents-cli==0.2.0: deepagents-cli==0.2.0

**Published**: 2026-06-02

### ⚠ BREAKING CHANGES

* `deepagents deploy` now targets the Managed Deep Agents API; `deepagents dev`, `deepagents.toml`, and the `--config`/`--dry-run` flags are removed. Run `deepagents init` to re-scaffold (`agent.json` + `tools.json`). See [PR](https://github.com/langchain-ai/deepagents/pull/3609) for the full migration guide.

### Features

* Migrate `deepagents deploy` to use Managed Deep Agents API ([#3609](https://github.com/langchain-ai/deepagents/issues/3609)) ([72aef52](https://github.com/langchain-ai/deepagents/commit/72aef52542a3fd4a7eebcb3dba40e28adf1aa044))


### Bug Fixes

* Stable `HumanMessage` IDs across resumed threads ([#3591](https://github.com/langchain-ai/deepagents/issues/3591)) ([82c3194](https://github.com/langchain-ai/deepagents/commit/82c31947f9dc938ffc71e1cea96d162a39aec3a1))

---

Internal maintainers: @sydney-runkle, @mdrxy, @victorm-lc

## langchain-quickjs==0.1.3: langchain-quickjs==0.1.3

**Published**: 2026-06-01

### Features

* Add REPL persistence modes ([#3557](https://github.com/langchain-ai/deepagents/issues/3557)) ([0cda6f3](https://github.com/langchain-ai/deepagents/commit/0cda6f3ab28bc83cd16ec9fcc48229bdf6f2dc1a))
* Add swarm task tool ([#3472](https://github.com/langchain-ai/deepagents/issues/3472)) ([2c28b7b](https://github.com/langchain-ai/deepagents/commit/2c28b7b8c2ac7571fc3a1f0d8d00f5697fe3e90e))


### Bug Fixes

* Auto-await final-expression Promise in eval REPL ([#3499](https://github.com/langchain-ai/deepagents/issues/3499)) ([f7f894a](https://github.com/langchain-ai/deepagents/commit/f7f894aa9f313cf8157bc6d7711013f5509d0b46))
* Scope REPL prompt sandbox bullet to the runtime ([#3528](https://github.com/langchain-ai/deepagents/issues/3528)) ([1b395ab](https://github.com/langchain-ai/deepagents/commit/1b395ab9699b1f384a85efeeef732ea7e4fc523a))
* Update system prompt snapshots ([#3450](https://github.com/langchain-ai/deepagents/issues/3450)) ([9f9220d](https://github.com/langchain-ai/deepagents/commit/9f9220d80737208faa9262c0bdfb3eeafc0e13c8))
* Stable `HumanMessage` IDs across resumed threads ([#3591](https://github.com/langchain-ai/deepagents/issues/3591)) ([82c3194](https://github.com/langchain-ai/deepagents/commit/82c31947f9dc938ffc71e1cea96d162a39aec3a1))

---

Thanks to our community contributors: @lost-particles

Internal maintainers: @sydney-runkle, @colifran, @hntrl, @mdrxy

## deepagents==0.6.7: deepagents==0.6.7

**Published**: 2026-05-30

### Bug Fixes

* Propagate goto and graph in Commands returned by tools ([#3391](https://github.com/langchain-ai/deepagents/issues/3391)) ([d92aef6](https://github.com/langchain-ai/deepagents/commit/d92aef68f70a5e5277c43a50581e7895e682c417))
* Handle base64 reads with unknown file extensions ([#3663](https://github.com/langchain-ai/deepagents/issues/3663)) ([9857a08](https://github.com/langchain-ai/deepagents/commit/9857a08b6144b2f001d8f4bf03ac2f254c6b2da4))
* Export `DeepAgentState` ([#3653](https://github.com/langchain-ai/deepagents/issues/3653)) ([14a9047](https://github.com/langchain-ai/deepagents/commit/14a904757c2d9d797945b6ea1bc9529f1f8cf369))

---

Internal maintainers: @ccurme, @npentrel, @mdrxy

## deepagents-code==0.1.7: deepagents-code==0.1.7

**Published**: 2026-05-30

### Features

* Add toggleable message timestamp footers ([#3662](https://github.com/langchain-ai/deepagents/issues/3662)) ([977e110](https://github.com/langchain-ai/deepagents/commit/977e11006cfbd78fbaba4e7bb2a13acf6b788652))

### Bug Fixes

* Fix zero tool MCP server rendering ([#3649](https://github.com/langchain-ai/deepagents/issues/3649)) ([7e7a567](https://github.com/langchain-ai/deepagents/commit/7e7a567556110ad927a78b45c3a3d4ac37b65e86))
* Centralize debug logging setup to package root ([#3650](https://github.com/langchain-ai/deepagents/issues/3650)) ([5145ed1](https://github.com/langchain-ai/deepagents/commit/5145ed1f8296f41d78c905c2ce899d2742f7dc9b))
* Char-truncate execute tool preview output ([#3627](https://github.com/langchain-ai/deepagents/issues/3627)) ([bb276e2](https://github.com/langchain-ai/deepagents/commit/bb276e2c41177b0dfe6ffd44fd37a293fbfdcb27))
* Handle stale slash-command `Enter` before completion popup renders ([#3647](https://github.com/langchain-ai/deepagents/issues/3647)) ([9a28742](https://github.com/langchain-ai/deepagents/commit/9a287424e86d5d52d0a328388c3fe453b160f597))
* Keep chat input focused when clicking a message ([#3655](https://github.com/langchain-ai/deepagents/issues/3655)) ([daf6571](https://github.com/langchain-ai/deepagents/commit/daf65716d7c999eadb2b7c37e412ec07b2c7aed3))
* Mention `Ctrl+R` in MCP reconnect toast ([#3622](https://github.com/langchain-ai/deepagents/issues/3622)) ([3b4b086](https://github.com/langchain-ai/deepagents/commit/3b4b0867665e58959073e660d85b74c700acaa1e))
* Prevent duplicate-id crash on MCP reconnect and clipboard `NoScreen` ([#3632](https://github.com/langchain-ai/deepagents/issues/3632)) ([6b9a3c0](https://github.com/langchain-ai/deepagents/commit/6b9a3c051586c26c542e958849e952d08a4b5a88))
* Reconstruct message counts for `DeltaChannel` threads from writes table ([#3668](https://github.com/langchain-ai/deepagents/issues/3668)) ([27e1940](https://github.com/langchain-ai/deepagents/commit/27e1940a924abfc999126cf46024003f453ba0c8))
* Render MCP tool errors and drop empty-string optional params ([#3624](https://github.com/langchain-ai/deepagents/issues/3624)) ([fdf3db4](https://github.com/langchain-ai/deepagents/commit/fdf3db464cd9f3de4e84c246547dd2971d26c726))
* Respect line width in tool output previews ([#3646](https://github.com/langchain-ai/deepagents/issues/3646)) ([ba1ad2d](https://github.com/langchain-ai/deepagents/commit/ba1ad2dbabd19b3821490537465a3bcd39c6fed6))
* Restore resumed thread model ([#3651](https://github.com/langchain-ai/deepagents/issues/3651)) ([550a8ab](https://github.com/langchain-ai/deepagents/commit/550a8abf3c595d738162a97f694b5d9527613323))
* Tool spinner, result formatting, and expand-hint fixes ([#3661](https://github.com/langchain-ai/deepagents/issues/3661)) ([54485a3](https://github.com/langchain-ai/deepagents/commit/54485a305854f46a6ce00ae4df51f3301c652a38))

---

Internal maintainers: @mdrxy

## deepagents==0.6.6: deepagents==0.6.6

**Published**: 2026-05-28

### Features

* Allow passing `state_schema` in `create_deep_agent` ([#3642](https://github.com/langchain-ai/deepagents/issues/3642)) ([37839bd](https://github.com/langchain-ai/deepagents/commit/37839bd7d67fba8c11ff0ccaaa8ac92b39609450))

---

Internal maintainers: @imnishitha, @mdrxy

## deepagents==0.6.5: deepagents==0.6.5

**Published**: 2026-05-28

### Features

* `RubricMiddleware` for self-evaluated agent iteration ([#3529](https://github.com/langchain-ai/deepagents/issues/3529)) ([5b8d44d](https://github.com/langchain-ai/deepagents/commit/5b8d44d65c6ec43084687019cf00a37d730ac2fa))
* Log when grep falls back from ripgrep ([#3593](https://github.com/langchain-ai/deepagents/issues/3593)) ([379b1ff](https://github.com/langchain-ai/deepagents/commit/379b1ffdc3ccf5da72d9f7264d531be108f0b36d))

### Bug Fixes

* Use `file_path` kwarg in `read_file` examples ([#3630](https://github.com/langchain-ai/deepagents/issues/3630)) ([97946ee](https://github.com/langchain-ai/deepagents/commit/97946ee09eb167c63d8c07f8bb116f40cfc9603f))
* `read_file` pagination skipping lines after wrapping ([#3641](https://github.com/langchain-ai/deepagents/issues/3641)) ([390551d](https://github.com/langchain-ai/deepagents/commit/390551d61d57ce68c2a80ed78c07eaa8e985908b))
* Handle `None` state in messages delta reducer ([#3636](https://github.com/langchain-ai/deepagents/issues/3636)) ([5a6d920](https://github.com/langchain-ai/deepagents/commit/5a6d920d9dec2199cbe743062a5cc1ff8f298567))
* Return grep errors for sandbox exec failures ([#3637](https://github.com/langchain-ai/deepagents/issues/3637)) ([f87d61f](https://github.com/langchain-ai/deepagents/commit/f87d61f01a23fcfb994e88b7f9324d404e66faef))

---

Internal maintainers: @davibinboi, @mdrxy

## deepagents-code==0.1.6: deepagents-code==0.1.6

**Published**: 2026-05-27

### Features

* `/install` optional extras ([#3606](https://github.com/langchain-ai/deepagents/issues/3606)) ([7ffaa93](https://github.com/langchain-ai/deepagents/commit/7ffaa93dca6910cd454040d416ff7e0e8bcbcea5))
* Surface deferred MCP reconnect state in `/mcp` ([#3612](https://github.com/langchain-ai/deepagents/issues/3612)) ([d8205c2](https://github.com/langchain-ai/deepagents/commit/d8205c2a39d00e8b6f7f70afe7cc9bb92fee42d8))
* Surface MCP servers awaiting reconnect on splash banner ([#3615](https://github.com/langchain-ai/deepagents/issues/3615)) ([24c5258](https://github.com/langchain-ai/deepagents/commit/24c5258ae6664bc3d3875d8065038716f7c86161))

### Bug Fixes

* Cancel server-side runs before re-trying interrupted-state writes ([#3611](https://github.com/langchain-ai/deepagents/issues/3611)) ([7d46357](https://github.com/langchain-ai/deepagents/commit/7d46357c5446bbc6225f972fd66dc52af8dd0547))
* Editable-install guidance for adding extras ([#3610](https://github.com/langchain-ai/deepagents/issues/3610)) ([771e55f](https://github.com/langchain-ai/deepagents/commit/771e55f171b8087b876ecf767d2f23c86c2a27b9))
* Reuse persisted DCR loopback port across OAuth launches ([#3613](https://github.com/langchain-ai/deepagents/issues/3613)) ([f2f7471](https://github.com/langchain-ai/deepagents/commit/f2f747104945ac79b68e6524d6da886f7cfeb1b0))
* Polish MCP auth success UX ([#3614](https://github.com/langchain-ai/deepagents/issues/3614)) ([d225cb4](https://github.com/langchain-ai/deepagents/commit/d225cb41f41a0a9b2876aff2443eaa0ada24bf29))

---

Internal maintainers: @mdrxy

## deepagents==0.6.4: deepagents==0.6.4

**Published**: 2026-05-26

### Bug Fixes

* Grep crashing when files vanish mid-walk ([#3592](https://github.com/langchain-ai/deepagents/issues/3592)) ([0b8301b](https://github.com/langchain-ai/deepagents/commit/0b8301b2067f7dbbc83ebcf05c52e91413260fd1))
* Stable `HumanMessage` IDs across resumed threads ([#3591](https://github.com/langchain-ai/deepagents/issues/3591)) ([82c3194](https://github.com/langchain-ai/deepagents/commit/82c31947f9dc938ffc71e1cea96d162a39aec3a1))

---

Internal maintainers: @sydney-runkle, @colifran, @mdrxy

## deepagents-code==0.1.5: deepagents-code==0.1.5

**Published**: 2026-05-26

### Bug Fixes

* Join aiosqlite worker thread after close ([#3585](https://github.com/langchain-ai/deepagents/issues/3585)) ([152cec0](https://github.com/langchain-ai/deepagents/commit/152cec04affed3508d4bfdffe7cae522b16d45e6))

---

Internal maintainers: @sydney-runkle, @nitboss, @mdrxy

## deepagents-code==0.1.4: deepagents-code==0.1.4

**Published**: 2026-05-23

### Features

* Add `--sandbox-snapshot-name` flag ([#3538](https://github.com/langchain-ai/deepagents/issues/3538)) ([b01392e](https://github.com/langchain-ai/deepagents/commit/b01392e7549798434f27f3784fa8c4e734053787))
* `dcode mcp config` and unify `--mcp-config` flag ([#3541](https://github.com/langchain-ai/deepagents/issues/3541)) ([f037b14](https://github.com/langchain-ai/deepagents/commit/f037b140f90a1ba3725b3ef23ab385b3cafe223b))
* Interpreter middleware via `langchain-quickjs` ([#3525](https://github.com/langchain-ai/deepagents/issues/3525)) ([f0ca89c](https://github.com/langchain-ai/deepagents/commit/f0ca89c962c22058194121526638bc2d29f546bd))

### Bug Fixes

* Chat input history navigation and newline scrolling ([#3560](https://github.com/langchain-ai/deepagents/issues/3560)) ([3b51cbd](https://github.com/langchain-ai/deepagents/commit/3b51cbdc8c50d9990477e18a47de6a58e9165bab))
* Distinguish LangSmith failure modes in `/trace` ([#3558](https://github.com/langchain-ai/deepagents/issues/3558)) ([4d158a0](https://github.com/langchain-ai/deepagents/commit/4d158a031aecad8862e02e332f127573003938ec))
* Recover initial session prompts from writes table ([#3535](https://github.com/langchain-ai/deepagents/issues/3535)) ([46b6f3f](https://github.com/langchain-ai/deepagents/commit/46b6f3f3e6ce880cd5ec9cf59622bb745d6ac2eb))
* Install script binary checks reference `dcode` ([#3546](https://github.com/langchain-ai/deepagents/issues/3546)) ([f8977a6](https://github.com/langchain-ai/deepagents/commit/f8977a63769e3f2037619f32596cb9bb7bd1020b))
* Show tool call previews during batched HITL approvals ([#3530](https://github.com/langchain-ai/deepagents/issues/3530)) ([84daa1a](https://github.com/langchain-ai/deepagents/commit/84daa1a2e27963a6d7694dc9278de83782b4a7b7))

---

Internal maintainers: @mdrxy

## deepagents-cli==0.1.2: deepagents-cli==0.1.2

**Published**: 2026-05-21

### Bug Fixes

* Expand `${VAR}` in `mcp.json` header values ([#3523](https://github.com/langchain-ai/deepagents/issues/3523)) ([6cfc5f9](https://github.com/langchain-ai/deepagents/commit/6cfc5f9004271c23c486a0b05e8f9f0002e75e2b))

---

Internal maintainers: @mdrxy

## deepagents==0.6.3: deepagents==0.6.3

**Published**: 2026-05-20

### Bug Fixes

* Anchor ripgrep glob to search root ([#3454](https://github.com/langchain-ai/deepagents/issues/3454)) ([e50fa3f](https://github.com/langchain-ai/deepagents/commit/e50fa3f00ab1b1a84bbaed74bf7e89118b7c2d82))
* Assign UUIDs to ID-less messages in _messages_delta_reducer ([#3513](https://github.com/langchain-ai/deepagents/issues/3513)) ([6d959ad](https://github.com/langchain-ai/deepagents/commit/6d959ade30655eae3967c9809994434e0bbd1148))
* Clarify skill source labels in system prompt ([#3464](https://github.com/langchain-ai/deepagents/issues/3464)) ([fc6a24f](https://github.com/langchain-ai/deepagents/commit/fc6a24f18829cf3f36089945226edfa50d52ab9e))
* Strip HTML comments from memory content before system prompt injection ([#3462](https://github.com/langchain-ai/deepagents/issues/3462)) ([bfbb8bc](https://github.com/langchain-ai/deepagents/commit/bfbb8bc5575ebd1ba9aa29430f6d2f86c24b7d3c))

---

Internal maintainers: @nick-hollon-lc, @sydney-runkle, @mdrxy

## deepagents-code==0.1.3: deepagents-code==0.1.3

**Published**: 2026-05-20

### Features

* In-TUI MCP OAuth login with auto-refresh ([#3469](https://github.com/langchain-ai/deepagents/issues/3469)) ([20e38b8](https://github.com/langchain-ai/deepagents/commit/20e38b8ebd8d9aa4697334432f7832a0a07aea3a))
  * Float unauthorized MCP servers to top and prompt before reconnect ([#3493](https://github.com/langchain-ai/deepagents/issues/3493)) ([2d66580](https://github.com/langchain-ai/deepagents/commit/2d665804131961dfa7e2849248047deec818e4ef))
  * Disable MCP servers from TUI ([#3501](https://github.com/langchain-ai/deepagents/issues/3501)) ([5725de8](https://github.com/langchain-ai/deepagents/commit/5725de857722dbca768a95bc6d97af5b838a11a9))
* `/restart` hidden slash command ([#3514](https://github.com/langchain-ai/deepagents/issues/3514)) ([74bdd36](https://github.com/langchain-ai/deepagents/commit/74bdd3688948d8369cdd978590f5a822eabeb12c))

### Bug Fixes

* Persist `_context_tokens` via `after_model` middleware ([#3496](https://github.com/langchain-ai/deepagents/issues/3496)) ([e2bb284](https://github.com/langchain-ai/deepagents/commit/e2bb284e506e0e49a05169fc6de01bdf42350267))
* Refresh status bar model after recovering from failed startup ([#3511](https://github.com/langchain-ai/deepagents/issues/3511)) ([c96f822](https://github.com/langchain-ai/deepagents/commit/c96f822de187431404d093b852c4a855d3ab8d30))

---

Internal maintainers: @mdrxy

## deepagents-code==0.1.2: deepagents-code==0.1.2

**Published**: 2026-05-19

### Features

* `/model` toggle for recommended-only list ([#3453](https://github.com/langchain-ai/deepagents/issues/3453)) ([c326b7e](https://github.com/langchain-ai/deepagents/commit/c326b7ec1b9940861175e0466ab4221f03e2bcba))
* `--timeout` flag for non-interactive ([#3351](https://github.com/langchain-ai/deepagents/issues/3351)) ([44e86ab](https://github.com/langchain-ai/deepagents/commit/44e86abbb1870f689dace8b1be6ed430d65e74c1))
* Browser loopback OAuth callback for MCP auth ([#3467](https://github.com/langchain-ai/deepagents/issues/3467)) ([d83aa07](https://github.com/langchain-ai/deepagents/commit/d83aa07c818af35800f81d062a147fa45a47ace7))
* MCP screen metadata ([#3349](https://github.com/langchain-ai/deepagents/issues/3349)) ([ce2f07e](https://github.com/langchain-ai/deepagents/commit/ce2f07e7211f22b3f44a1a232088b89a469a0a99))

### Bug Fixes

* Drop sections from `system_prompt.md` already supplied by SDK middleware ([#3448](https://github.com/langchain-ai/deepagents/issues/3448)) ([9dbf2c2](https://github.com/langchain-ai/deepagents/commit/9dbf2c2f19e941e012d0c93418ef09fb56f30d6a))
* Rename stale usage commands ([#3460](https://github.com/langchain-ai/deepagents/issues/3460)) ([da43b7f](https://github.com/langchain-ai/deepagents/commit/da43b7f9d913e6190ff03c496a269faf08bbf182))
* Suppress interrupt-cleanup state writes from traces ([#3465](https://github.com/langchain-ai/deepagents/issues/3465)) ([319b24e](https://github.com/langchain-ai/deepagents/commit/319b24e6f179eaf56f105a6db683901c82fe95be))

---

Thanks to our community contributors: @peterkolcza, @NinaadRao ([LinkedIn](https://linkedin.com/in/ninaadrao))

Internal maintainers: @mdrxy

## deepagents==0.6.2: deepagents==0.6.2

**Published**: 2026-05-18

### Features

* Add `system_prompt` override slot to memory, skills, and summarization ([#3451](https://github.com/langchain-ai/deepagents/issues/3451)) ([7583f4a](https://github.com/langchain-ai/deepagents/commit/7583f4aff6a6044bc987ee7980d322bb5c791428))

### Bug Fixes

* Patch invalid tool calls ([#3386](https://github.com/langchain-ai/deepagents/issues/3386)) ([c916d1b](https://github.com/langchain-ai/deepagents/commit/c916d1b2e3a81dcd4fb2e595d6b971923c18fa31))
* Align `MemoryMiddleware` prompt with investigate-first agent behavior ([#2461](https://github.com/langchain-ai/deepagents/issues/2461)) ([d53c8f4](https://github.com/langchain-ai/deepagents/commit/d53c8f4f481288a3aa04a5e62362beba6ed7e57a))
* Subagents: update prompt and make fetching of last message more robust ([#3406](https://github.com/langchain-ai/deepagents/issues/3406)) ([4421bec](https://github.com/langchain-ai/deepagents/commit/4421bec94ffbe1f3a3bf44088ebcf8ab8c24a736))
* Summarization: truncate trailing ToolMessages to keep context within `keep` limit ([#3405](https://github.com/langchain-ai/deepagents/issues/3405)) ([bee514f](https://github.com/langchain-ai/deepagents/commit/bee514fd24862b6b22a5993eb8b6cfc69e42dd80))
* Surface OS errors in sandbox ls/read/edit/glob ([#3359](https://github.com/langchain-ai/deepagents/issues/3359)) ([7598bd9](https://github.com/langchain-ai/deepagents/commit/7598bd93f72b609a46da64f7c458c42ac07a0f3a))

---

Thanks to our community contributors: @AdemBoukhris457

Internal maintainers: @nick-hollon-lc, @ccurme, @mdrxy

## deepagents-cli==0.1.1: deepagents-cli==0.1.1

**Published**: 2026-05-18

### Features

* Add `--host` option to `deepagents dev` command ([#3444](https://github.com/langchain-ai/deepagents/issues/3444)) ([0bb1e74](https://github.com/langchain-ai/deepagents/commit/0bb1e74bba8097b38f204e3db6e6ebad7e0f5317))

---

Internal maintainers: @mdrxy

## deepagents-code==0.1.1: deepagents-code==0.1.1

**Published**: 2026-05-16

### Bug Fixes

* Correct LangSmith sandbox working directory ([#3415](https://github.com/langchain-ai/deepagents/issues/3415)) ([b0e8d83](https://github.com/langchain-ai/deepagents/commit/b0e8d83f97a2a698268173a839000c84e8368324))
* Guard `fetch_url` against SSRF ([#3411](https://github.com/langchain-ai/deepagents/issues/3411)) ([54d8521](https://github.com/langchain-ai/deepagents/commit/54d8521976940dfe147ead4b56565360241335be))

---

Internal maintainers: @mdrxy

## deepagents-cli==0.1.0: deepagents-cli==0.1.0

**Published**: 2026-05-16

### ⚠ BREAKING CHANGES

* Removes the interactive TUI / coding-agent surface from `deepagents-cli`. The package now only ships the `deploy` command and supporting config. Users relying on the chat REPL, sessions, MCP tooling, skills, and related widgets should migrate to `deepagents-code`.

---

Internal maintainers: @mdrxy

## deepagents-code==0.1.0: deepagents-code==0.1.0

**Published**: 2026-05-13

`deepagents-code` was forked from `deepagents-cli` at v0.1.0 (2026-05-12).

For history prior to the fork, see [the `deepagents-cli` changelog](https://github.com/langchain-ai/deepagents/blob/main/libs/cli/CHANGELOG.md).

## langchain-runloop==0.0.5: langchain-runloop==0.0.5

**Published**: 2026-05-12

### Features

* v0.6 ([4db09ac](https://github.com/langchain-ai/deepagents/commit/4db09acba34b38521192b8f278723524be560779))

---

Internal maintainers: @sydney-runkle, @vishnu-ssuresh, @mdrxy

## langchain-modal==0.0.4: langchain-modal==0.0.4

**Published**: 2026-05-12

### Features

* v0.6 ([4db09ac](https://github.com/langchain-ai/deepagents/commit/4db09acba34b38521192b8f278723524be560779))

---

Internal maintainers: @sydney-runkle, @vishnu-ssuresh, @mdrxy

## langchain-daytona==0.0.6: langchain-daytona==0.0.6

**Published**: 2026-05-12

### Features

* v0.6 ([4db09ac](https://github.com/langchain-ai/deepagents/commit/4db09acba34b38521192b8f278723524be560779))

---

Internal maintainers: @sydney-runkle, @vishnu-ssuresh, @mdrxy

## deepagents==0.6.1: deepagents==0.6.1

**Published**: 2026-05-12

### Bug Fixes

* Import profile re-exports from leaf modules ([#3377](https://github.com/langchain-ai/deepagents/issues/3377)) ([ca99391](https://github.com/langchain-ai/deepagents/commit/ca99391668ea1510932f8e9097e8ed3c0caadf73))

---

Internal maintainers: @mdrxy

## deepagents==0.6.0: deepagents==0.6.0

**Published**: 2026-05-12

### Features

* **[`CodeInterpreterMiddleware`](https://pypi.org/project/langchain-quickjs)**: (experimental) `deepagents` now supports code execution and programmatic tool calling through a scoped QuickJS runtime. Install via the optional dependency: `deepagents[quickjs]`.
* Support for `version="v3"` in `stream_events` / `astream_events`. Refer to the [event streaming](https://docs.langchain.com/oss/python/deepagents/event-streaming) guide for details.

---

Internal maintainers: @sydney-runkle, @vishnu-ssuresh, @ccurme, @mdrxy

## deepagents-cli==0.0.59: deepagents-cli==0.0.59

**Published**: 2026-05-12

### Bug Fixes

* Prevent import deadlock during skill discovery and prewarm ([#3385](https://github.com/langchain-ai/deepagents/issues/3385)) ([0bf8dd1](https://github.com/langchain-ai/deepagents/commit/0bf8dd1cfd680bd4d27ce19295f96c720f525787))

---

Internal maintainers: @mdrxy

## deepagents-cli==0.0.58: deepagents-cli==0.0.58

**Published**: 2026-05-12

### Features

* Pin v0.6 and fix import race ([4db09ac](https://github.com/langchain-ai/deepagents/commit/4db09acba34b38521192b8f278723524be560779))

---

Internal maintainers: @sydney-runkle, @mdrxy

## deepagents-cli==0.0.57: deepagents-cli==0.0.57

**Published**: 2026-05-12

### Features

* OSC 9;4 progress & escape helper ([#3347](https://github.com/langchain-ai/deepagents/issues/3347)) ([75d60cd](https://github.com/langchain-ai/deepagents/commit/75d60cd82f559b2944b78a348d16b0a10a00d663))

### Bug Fixes

* Suppress LangSmith trace for `_context_tokens` state writes ([#3317](https://github.com/langchain-ai/deepagents/issues/3317)) ([63db13e](https://github.com/langchain-ai/deepagents/commit/63db13ee262d19a1a87fbe4df1271a2e958deed6))

---

Internal maintainers: @mdrxy

## langchain-quickjs==0.1.2: langchain-quickjs==0.1.2

**Published**: 2026-05-11

### Features

* Rename middleware ([#3334](https://github.com/langchain-ai/deepagents/issues/3334)) ([fc80075](https://github.com/langchain-ai/deepagents/commit/fc80075c65c3b4beb8f672b6bb27464fee6d79c2))

---

Internal maintainers: @ccurme

## deepagents-cli==0.0.56: deepagents-cli==0.0.56

**Published**: 2026-05-11

### Features

* Free-text reject reason on HITL approval prompt ([#3344](https://github.com/langchain-ai/deepagents/issues/3344)) ([dcc48f4](https://github.com/langchain-ai/deepagents/commit/dcc48f48d20757f17011e65b61363dd0347af164))
* Add docs link to project MCP approval prompt ([#3341](https://github.com/langchain-ai/deepagents/issues/3341)) ([b5c1228](https://github.com/langchain-ai/deepagents/commit/b5c12280e47bc37938290a4219317f47c1abfa8a))

### Bug Fixes

* Dedupe MCP servers in project trust approval prompt ([#3342](https://github.com/langchain-ai/deepagents/issues/3342)) ([73484ea](https://github.com/langchain-ai/deepagents/commit/73484ea551189985190f52cb26b299819d3fc37d))
* Remove legacy shell tool aliases and harden HITL widget cleanup ([#3340](https://github.com/langchain-ai/deepagents/issues/3340)) ([398f7f4](https://github.com/langchain-ai/deepagents/commit/398f7f4512182a8e51cbdfbfb9dc211c77014e2b))
* Truncate multi-line shell commands in HITL approval ([#3314](https://github.com/langchain-ai/deepagents/issues/3314)) ([7ab6e14](https://github.com/langchain-ai/deepagents/commit/7ab6e14565d6dd9d9c9e76d9d6677e5568a727f7))
* (Deploy) Add `together` provider to bundler deps and optional extras ([#2670](https://github.com/langchain-ai/deepagents/issues/2670)) ([4290953](https://github.com/langchain-ai/deepagents/commit/4290953e44570ec02399e4d423ab4ffd24e97609))

### Performance Improvements

* Gate dropped-path detection on multi-character insert size ([#3343](https://github.com/langchain-ai/deepagents/issues/3343)) ([06a21e8](https://github.com/langchain-ai/deepagents/commit/06a21e8a69738b7ba055d2f13dae4cd9fab353cd))

---

Thanks to our community contributors: @keenborder786

Internal maintainers: @mdrxy

## deepagents-cli==0.0.55: deepagents-cli==0.0.55

**Published**: 2026-05-11

### Bug Fixes

* Keep Thinking spinner during `edit_file` approval ([#3310](https://github.com/langchain-ai/deepagents/issues/3310)) ([d06133f](https://github.com/langchain-ai/deepagents/commit/d06133f8dd7cb924c82e46ece3e165d561ef7d9e))

---

Internal maintainers: @mdrxy

## deepagents-cli==0.0.54: deepagents-cli==0.0.54

**Published**: 2026-05-11

### Features

* Allow filtering threads by directory ([#3290](https://github.com/langchain-ai/deepagents/issues/3290)) ([07a973a](https://github.com/langchain-ai/deepagents/commit/07a973ae5b0256fddfd9591dc88c7987e5581264))
* Show sandbox provider in header `sub_title` ([#3295](https://github.com/langchain-ai/deepagents/issues/3295)) ([779f7f4](https://github.com/langchain-ai/deepagents/commit/779f7f45c501f3c6d53e12087e3d4c340ef8aded))
* Surface sandbox startup errors in server crash messages ([#3306](https://github.com/langchain-ai/deepagents/issues/3306)) ([2606d57](https://github.com/langchain-ai/deepagents/commit/2606d57b623f16955df6f91e693051f4b61f6120))

### Bug Fixes

* Allow TUI launch without preconfigured model credentials ([#3301](https://github.com/langchain-ai/deepagents/issues/3301)) ([aa28ff7](https://github.com/langchain-ai/deepagents/commit/aa28ff73768a826b216bfa54d76ecd313c325077))
* Suppress token placeholder on first invoke ([#3302](https://github.com/langchain-ai/deepagents/issues/3302)) ([c21dee2](https://github.com/langchain-ai/deepagents/commit/c21dee2e9bc1a7d3f52ff62e9e66d1caaaf7b464))
* Sync thread ID and render clickable link on `/clear` ([#3305](https://github.com/langchain-ai/deepagents/issues/3305)) ([0904974](https://github.com/langchain-ai/deepagents/commit/0904974d52dff259809d00a7a8b26c3e894cc0c0))

---

Thanks to our community contributors: @Chesars, @yuvrxj-afk

Internal maintainers: @mdrxy

## deepagents==0.5.9: deepagents==0.5.9

**Published**: 2026-05-10

### Bug Fixes

* Import profile symbols directly from `harness_profiles` ([#3291](https://github.com/langchain-ai/deepagents/issues/3291)) ([503453c](https://github.com/langchain-ai/deepagents/commit/503453c06f7e0545914789a07ddba6ca6b0c8ec5))

---

Internal maintainers: @mdrxy

## deepagents-cli==0.0.53: deepagents-cli==0.0.53

**Published**: 2026-05-10

### Features

* `/copy` slash command ([#3225](https://github.com/langchain-ai/deepagents/issues/3225)) ([646df53](https://github.com/langchain-ai/deepagents/commit/646df5364274ba11c1104038095ed4478c076c40))
* Per-terminal theme selection ([#3248](https://github.com/langchain-ai/deepagents/issues/3248)) ([e2251f1](https://github.com/langchain-ai/deepagents/commit/e2251f17c0cc9363d6ed2385436ade22a8e74cd2))
* Incognito shell command mode ([#3252](https://github.com/langchain-ai/deepagents/issues/3252)) ([56aee50](https://github.com/langchain-ai/deepagents/commit/56aee504b5f8196d569757794e2e7e61cf9bef18))
* Live progress UI and periodic recheck for self-updates ([#3280](https://github.com/langchain-ai/deepagents/issues/3280)) ([3e9e805](https://github.com/langchain-ai/deepagents/commit/3e9e80597d9e2edc7685400023a2cad15a84a6b8))
* Ollama model discovery via probe ([#3286](https://github.com/langchain-ai/deepagents/issues/3286)) ([c1dd6c8](https://github.com/langchain-ai/deepagents/commit/c1dd6c8a0f8b423edc75be243fc0487e4c900703))

### Bug Fixes

* Re-render assistant messages after streaming to fix fenced code disappearance ([#3293](https://github.com/langchain-ai/deepagents/issues/3293)) ([01b0a44](https://github.com/langchain-ai/deepagents/commit/01b0a44353a891a2ff10b3a2e2f6e23cc0879c9b))
* Show `Resuming...` banner immediately on thread resume ([#3297](https://github.com/langchain-ai/deepagents/issues/3297)) ([3bb2782](https://github.com/langchain-ai/deepagents/commit/3bb2782ae8bd42d9521b611ebdfc42456b7d41a2))
* Show pending token placeholder during streaming and restore on early exit ([#3288](https://github.com/langchain-ai/deepagents/issues/3288)) ([882232d](https://github.com/langchain-ai/deepagents/commit/882232dbc4ffbaf0bedeb12f0f3119024352ac43))

---

Thanks to our community contributors: @miguel-mongiardim, @yuvrxj-afk

Internal maintainers: @mdrxy

## langchain-quickjs==0.1.1: langchain-quickjs==0.1.1

**Published**: 2026-05-08

### Features

* Propagate return types ([#3210](https://github.com/langchain-ai/deepagents/issues/3210)) ([e26bccb](https://github.com/langchain-ai/deepagents/commit/e26bccbe81b4e3ff2f0332f56f683106e0bafd88))

---

Internal maintainers: @hntrl, @ccurme

## deepagents==0.5.8: deepagents==0.5.8

**Published**: 2026-05-08

### Bug Fixes

* Avoid deprecated-use warnings in `CompositeBackend` path mutation ([#3244](https://github.com/langchain-ai/deepagents/issues/3244)) ([64d45f6](https://github.com/langchain-ai/deepagents/commit/64d45f67c86edb4df2ced0e7b82f1a8fd158ec8c))

---

Internal maintainers: @mdrxy

## deepagents-cli==0.0.52: deepagents-cli==0.0.52

**Published**: 2026-05-08

### Features

* New environment variables
  * Launch theme env var ([#3176](https://github.com/langchain-ai/deepagents/issues/3176)) ([47a3e4e](https://github.com/langchain-ai/deepagents/commit/47a3e4e219bf43a08697fceabfaddcadc464c97b))
  * Splash tips visibility env var ([#3179](https://github.com/langchain-ai/deepagents/issues/3179)) ([c9be71c](https://github.com/langchain-ai/deepagents/commit/c9be71ce431aadbf24424411a57fada2ed560c93))
  * Splash version visibility env var ([#3173](https://github.com/langchain-ai/deepagents/issues/3173)) ([f57d09e](https://github.com/langchain-ai/deepagents/commit/f57d09e46b965091525817d1e17741ec61aa6274))
  * Startup splash env var overrides ([#3175](https://github.com/langchain-ai/deepagents/issues/3175)) ([8d3d197](https://github.com/langchain-ai/deepagents/commit/8d3d197941c878a409795b870c308f4b761dea5b))
  * TUI footer visibility env vars ([#3171](https://github.com/langchain-ai/deepagents/issues/3171)) ([8f5796b](https://github.com/langchain-ai/deepagents/commit/8f5796b3704c95c6f775445496177d955eec2da3))
* Emit `user.name.set` hook during onboarding ([#3177](https://github.com/langchain-ai/deepagents/issues/3177)) ([43a494e](https://github.com/langchain-ai/deepagents/commit/43a494ed2fe44b7ba3a03d9833301ff3fc485b73))
* External event listener via Unix domain socket ([#3207](https://github.com/langchain-ai/deepagents/issues/3207)) ([ffeac22](https://github.com/langchain-ai/deepagents/commit/ffeac22f8e5572681ca1ad7c4f2e55ef57207577))
* Strip provider-specific model prefixes in status bar footer ([#3222](https://github.com/langchain-ai/deepagents/issues/3222)) ([eaa1d82](https://github.com/langchain-ai/deepagents/commit/eaa1d821c96246471b274663e714878fdd2f67bb))
* (Deploy) `ContextHubBackend` for iteration in `deepagents-deploy` ([#2923](https://github.com/langchain-ai/deepagents/issues/2923)) ([fb0f0ba](https://github.com/langchain-ai/deepagents/commit/fb0f0ba08a58c3d2ae5db2435c07e3b826f395fa))
* (Deploy) Auto-wire issues board with context hub repo handle ([#3231](https://github.com/langchain-ai/deepagents/issues/3231)) ([94628fe](https://github.com/langchain-ai/deepagents/commit/94628fef98aefb5389ab56c8acee31726d6385dc))

### Bug Fixes

* Allow multiple-choice labels to wrap in narrow ask-user menus ([#3257](https://github.com/langchain-ai/deepagents/issues/3257)) ([79a38d9](https://github.com/langchain-ai/deepagents/commit/79a38d9a3a18f28903717a0d4efa8ad66caee129))
* Catch `WorkerCancelled` in `await_prewarm_imports` ([#3178](https://github.com/langchain-ai/deepagents/issues/3178)) ([aa0d0f7](https://github.com/langchain-ai/deepagents/commit/aa0d0f732680a917bfc407f61f689326006be163))
* Halt turn immediately when `ask_user` is cancelled ([#3258](https://github.com/langchain-ai/deepagents/issues/3258)) ([00d9b99](https://github.com/langchain-ai/deepagents/commit/00d9b99ce748d34cb150e08e2c46be6d648b3170))
* Only restore iTerm2 cursor guide when it was enabled at startup ([#3256](https://github.com/langchain-ai/deepagents/issues/3256)) ([2620ff5](https://github.com/langchain-ai/deepagents/commit/2620ff56d1d89275e604e756abe54c1408414167))
* Pause input cursor blink when terminal loses OS focus ([#3246](https://github.com/langchain-ai/deepagents/issues/3246)) ([8582b83](https://github.com/langchain-ai/deepagents/commit/8582b8355d5c0c70f45cee9522e4c8e02264005e))
* Scroll tall `ask_user prompts` to top of viewport ([#3238](https://github.com/langchain-ai/deepagents/issues/3238)) ([705daa7](https://github.com/langchain-ai/deepagents/commit/705daa7e651153cb2cf80455131fcfe4311973b9))
* Suppress noisy network warnings from interrupt cleanup ([#3250](https://github.com/langchain-ai/deepagents/issues/3250)) ([4e4a8fe](https://github.com/langchain-ai/deepagents/commit/4e4a8fedd1ed72606ac0df336859ba5d7180021f))

---

Thanks to our community contributors: @yuvrxj-afk

Internal maintainers: @vishnu-ssuresh, @mdrxy

## deepagents==0.6.0a3: deepagents==0.6.0a3

**Published**: 2026-05-07

> [!WARNING]
> This is a pre-release version. Install with: `pip install deepagents==0.6.0a3`

---

Internal maintainers: @nick-hollon-lc, @sydney-runkle

## deepagents-cli==0.0.52a3: deepagents-cli==0.0.52a3

**Published**: 2026-05-07

> [!WARNING]
> This is a pre-release version. Install with: `pip install deepagents-cli==0.0.52a3`

---

Internal maintainers: @nick-hollon-lc, @sydney-runkle, @mdrxy

## deepagents==0.6.0a2: deepagents==0.6.0a2

**Published**: 2026-05-06

> [!WARNING]
> This is a pre-release version. Install with: `pip install deepagents==0.6.0a2`

---

Internal maintainers: @nick-hollon-lc, @sydney-runkle

## deepagents-cli==0.0.52a1: deepagents-cli==0.0.52a1

**Published**: 2026-05-06

> [!WARNING]
> This is a pre-release version. Install with: `pip install deepagents-cli==0.0.52a1`

---

Internal maintainers: @nick-hollon-lc, @sydney-runkle

## langchain-quickjs==0.1.0: langchain-quickjs==0.1.0

**Published**: 2026-05-05

This release introduces a new QuickJS runtime implementation backed by `quickjs-rs`.

---

Internal maintainers: @sydney-runkle, @vishnu-ssuresh, @hntrl, @jkennedyvz, @ccurme, @eyurtsev, @mdrxy

## deepagents==0.5.7: deepagents==0.5.7

**Published**: 2026-05-05

### Bug Fixes

* Auto-added GP subagent inherits parent permissions ([#3131](https://github.com/langchain-ai/deepagents/issues/3131)) ([0d55b3b](https://github.com/langchain-ai/deepagents/commit/0d55b3ba8b974d06b1e0f52893f33e44496bff8b))
* Default OpenRouter routing to ignore Azure upstream ([#3157](https://github.com/langchain-ai/deepagents/issues/3157)) ([01a9113](https://github.com/langchain-ai/deepagents/commit/01a911379d368fab8280cd827c38776800abe7b8))

---

Internal maintainers: @sydney-runkle, @jacobkleiman-LC, @eyurtsev, @mdrxy

## deepagents-cli==0.0.51: deepagents-cli==0.0.51

**Published**: 2026-05-05

### Features

* `/reload` skill diff report ([#3153](https://github.com/langchain-ai/deepagents/issues/3153)) ([7c3278a](https://github.com/langchain-ai/deepagents/commit/7c3278a46fe1bace82224f43d8e1b7a023d0086a))
* Surface MCP config discovery paths and format in help screens ([#3152](https://github.com/langchain-ai/deepagents/issues/3152)) ([ce6887c](https://github.com/langchain-ai/deepagents/commit/ce6887c89bacee63bdd74ab9d26097e2e418ff43))

---

Internal maintainers: @mdrxy

## deepagents-cli==0.0.50: deepagents-cli==0.0.50

**Published**: 2026-05-04

### Bug Fixes

* Show detached HEAD commit in local context ([#3144](https://github.com/langchain-ai/deepagents/issues/3144)) ([569d4f0](https://github.com/langchain-ai/deepagents/commit/569d4f0d7d699bace7820eb171a6bd605b2a1a18))

---

Internal maintainers: @mdrxy

## deepagents-cli==0.0.49: deepagents-cli==0.0.49

**Published**: 2026-05-04

### Features

* First-run onboarding flow ([#3102](https://github.com/langchain-ai/deepagents/issues/3102)) ([a71f852](https://github.com/langchain-ai/deepagents/commit/a71f852df3e491326b8eaa03ee7cb7b3b94fe73d))
* In-TUI API key entry via `/auth` ([#3123](https://github.com/langchain-ai/deepagents/issues/3123)) ([eedbc3a](https://github.com/langchain-ai/deepagents/commit/eedbc3a8b5f88059636e497f72c7cec5a420f998))
* Richer provider auth states, hosted Ollama auth ([#3111](https://github.com/langchain-ai/deepagents/issues/3111)) ([eeaeb76](https://github.com/langchain-ai/deepagents/commit/eeaeb7663515eb0cfa8f0389e7f8446e95e84911))
* Set-as-default in `/agents` picker, harden persistence ([#3126](https://github.com/langchain-ai/deepagents/issues/3126)) ([4751e33](https://github.com/langchain-ai/deepagents/commit/4751e33fbad5945a740cae03bda758223201433b))

### Bug Fixes

* Gate async task tools by actual names ([#3094](https://github.com/langchain-ai/deepagents/issues/3094)) ([aae8dfe](https://github.com/langchain-ai/deepagents/commit/aae8dfebab184586322129ec162e083ebfd372cc))
* Hide approval menu on selection ([#3097](https://github.com/langchain-ai/deepagents/issues/3097)) ([7dafd30](https://github.com/langchain-ai/deepagents/commit/7dafd3049ad7725353bbf12bf80f476b52916208))
* Move internal state under hidden directory ([#3106](https://github.com/langchain-ai/deepagents/issues/3106)) ([ef4c717](https://github.com/langchain-ai/deepagents/commit/ef4c71763086a4e4899ba7ced6f9eb478d38069e))
* Preserve recent agent across thread resume ([#3108](https://github.com/langchain-ai/deepagents/issues/3108)) ([442a0d4](https://github.com/langchain-ai/deepagents/commit/442a0d474aa1e767d542cb01f6e338431c18e5a8))

---

Internal maintainers: @mdrxy

## deepagents==0.5.6: deepagents==0.5.6

**Published**: 2026-05-01

### Bug Fixes

* Add write preflight and native read to langsmith sandbox ([#2695](https://github.com/langchain-ai/deepagents/issues/2695)) ([741221c](https://github.com/langchain-ai/deepagents/commit/741221c9d8b65a535816e318ee24d3c19a4bde80))
* Propagate `CompiledSubAgent` name into `lc_agent_name` metadata ([#3045](https://github.com/langchain-ai/deepagents/issues/3045)) ([f671e6b](https://github.com/langchain-ai/deepagents/commit/f671e6b18aa49700a535f7b48441662b67dafef9))

---

Thanks to our community contributors: @yuvrxj-afk

Internal maintainers: @mdrxy

## deepagents-cli==0.0.48: deepagents-cli==0.0.48

**Published**: 2026-05-01

### Bug Fixes

* Apply `--model-params` on `/model` re-select ([#3072](https://github.com/langchain-ai/deepagents/issues/3072)) ([50546dd](https://github.com/langchain-ai/deepagents/commit/50546dd3d368af297084929ee3aa91ccf8496fca))

---

Internal maintainers: @mdrxy

## deepagents-cli==0.0.47: deepagents-cli==0.0.47

**Published**: 2026-05-01

### Features

* Auto-discover Textual built-in themes ([#3068](https://github.com/langchain-ai/deepagents/issues/3068)) ([27894e3](https://github.com/langchain-ai/deepagents/commit/27894e336f20f270fb4bb685bf979f24b9bea0bc))

### Bug Fixes

* Recover from failed server startup via `/model` ([#3056](https://github.com/langchain-ai/deepagents/issues/3056)) ([6ee375e](https://github.com/langchain-ai/deepagents/commit/6ee375e979b672cd1d172669f0e5a7a665431d7c))

---

Internal maintainers: @mdrxy

## deepagents==0.6.0a1: deepagents==0.6.0a1

**Published**: 2026-05-01

> [!WARNING]
> This is a pre-release version. Install with: `pip install deepagents==0.6.0a1`

---

Internal maintainers: @nick-hollon-lc, @sydney-runkle, @mdrxy

## deepagents==0.5.5: deepagents==0.5.5

**Published**: 2026-04-30

### Bug Fixes

* Prevent stdin hang by passing `DEVNULL` ([#2427](https://github.com/langchain-ai/deepagents/issues/2427)) ([5bf5fae](https://github.com/langchain-ai/deepagents/commit/5bf5fae8d93beba90628f2f71e3e79817a36ac9e))
* Harden `FilesystemBackend` against symlink loops ([#3035](https://github.com/langchain-ai/deepagents/issues/3035)) ([abd02f9](https://github.com/langchain-ai/deepagents/commit/abd02f99ef12030bdfe429fdc3ad80a2785bea61))
* Surface EOF-newline mismatch in `edit_file` ([#3031](https://github.com/langchain-ai/deepagents/issues/3031)) ([d30686e](https://github.com/langchain-ai/deepagents/commit/d30686ec82d36a0e9430f7c512c34835aba2c079))

---

Thanks to our community contributors: @Prithvi1994

Internal maintainers: @eyurtsev, @mdrxy

## deepagents-code==0.0.1: deepagents-code==0.0.1

**Published**: 2026-04-30

Placeholder

## deepagents-cli==0.0.46: deepagents-cli==0.0.46

**Published**: 2026-04-30

### Features

* Rework MCP integration and add OAuth login ([#2906](https://github.com/langchain-ai/deepagents/issues/2906)) ([6b7b0be](https://github.com/langchain-ai/deepagents/commit/6b7b0bef95db673fed23fc92803abaaa398b0a6d))
* `allowedTools` and `disabledTools` filters in MCP config ([#2835](https://github.com/langchain-ai/deepagents/issues/2835)) ([eafd691](https://github.com/langchain-ai/deepagents/commit/eafd6912db637ab59085a0b05d6e36d6cdd10e1a))

---

Internal maintainers: @jkennedyvz, @mdrxy

## deepagents-cli==0.0.45: deepagents-cli==0.0.45

**Published**: 2026-04-30

### Bug Fixes

* Reject out-of-tree symlinked project `AGENTS.md` ([#3039](https://github.com/langchain-ai/deepagents/issues/3039)) ([4618098](https://github.com/langchain-ai/deepagents/commit/4618098e59c8c8d1d3f91354e4f4163a9582f710))
* Support modified backspace word deletion ([#3037](https://github.com/langchain-ai/deepagents/issues/3037)) ([bc3d019](https://github.com/langchain-ai/deepagents/commit/bc3d01916d2ba34be07d56c9eb9b813008c1584c))

---

Internal maintainers: @emanbareket, @mdrxy

## langchain-quickjs==0.1.0a1: langchain-quickjs==0.1.0a1

**Published**: 2026-04-30

> [!WARNING]
> This is a pre-release version. Install with: `pip install langchain-quickjs==0.1.0a1`

---

Internal maintainers: @sydney-runkle, @vishnu-ssuresh, @hntrl, @jkennedyvz, @ccurme, @eyurtsev, @mdrxy

## deepagents==0.5.4: deepagents==0.5.4

**Published**: 2026-04-29

### Highlights

Until this release, `deepagents` shipped a single set of prompts, tools, and middleware tuned to work across *all* model families. Today's headline change is **harness profiles** — a declarative override layer for the parts of the harness that vary per model (system-prompt prefix/suffix, tool inclusion and naming, middleware selection, subagent configuration, skills). `ProviderProfile` shapes how `resolve_model` builds the client; `HarnessProfile` / `HarnessProfileConfig` shape how `create_deep_agent` assembles the agent. Both are keyed by provider (`"openai"`) or full `provider:model` spec (`"openai:gpt-5.4"`), and registrations are additive — your call site doesn't change when you swap models.

We currently ship built-ins for OpenAI and Anthropic out of the box, drawn directly from each vendor's published prompting guides (Codex's `apply_patch` / `shell_command` conventions, Claude's tool-result reflection and active-investigation patterns, etc.). On a curated tau2-bench subset, applying these profiles produced a 10–20 point lift over the default harness (GPT-5.3 Codex: 33% -> 53%; Claude Opus 4.7: 43% -> 53%). Third-party plugins can register via the `deepagents.provider_profiles` and `deepagents.harness_profiles` entry points.

See the [profiles documentation](https://docs.langchain.com/oss/python/deepagents/profiles) for the full field surface, merge semantics, and plugin packaging.

### Features

* Profiles API ([#2892](https://github.com/langchain-ai/deepagents/issues/2892)) ([7365ad1](https://github.com/langchain-ai/deepagents/commit/7365ad1600064eec616c5de970320104189ddf80))
* `ls_agent_type` configurable tag on subagent runs ([#2788](https://github.com/langchain-ai/deepagents/issues/2788)) ([3bcc51a](https://github.com/langchain-ai/deepagents/commit/3bcc51a95da80094cfc8bc4bcaf25dc1e2ad8f44))

### Bug Fixes

* Normalize Windows backslash paths before `PurePosixPath` processing ([#1859](https://github.com/langchain-ai/deepagents/issues/1859)) ([e1c1d50](https://github.com/langchain-ai/deepagents/commit/e1c1d5024729f5205eaa42bf6a9bc1c93a30d043))
* Preserve CRLF line endings in sandbox edit ([#2899](https://github.com/langchain-ai/deepagents/issues/2899)) ([291aebe](https://github.com/langchain-ai/deepagents/commit/291aebe21f8a53604a2bf47daa120761dace2536))
* Support read-your-writes in `StateBackend` ([#2991](https://github.com/langchain-ai/deepagents/issues/2991)) ([0924869](https://github.com/langchain-ai/deepagents/commit/0924869bc3d946577e7c3cbc79a86e4aaf522edd))
* Treat boundary-truncated UTF-8 in `read()` prefix check as text ([#2980](https://github.com/langchain-ai/deepagents/issues/2980)) ([c36ebc7](https://github.com/langchain-ai/deepagents/commit/c36ebc7be5840e9008279992741c67a8377ffc01))
* Use `configurable` directly instead of tracing context for subagent tagging ([#2845](https://github.com/langchain-ai/deepagents/issues/2845)) ([bd6ec6b](https://github.com/langchain-ai/deepagents/commit/bd6ec6bcebcdcc26f6b79e2c55611074b0e01631))

### Performance Improvements

* Add cache breakpoint to `MemoryMiddleware` ([#2713](https://github.com/langchain-ai/deepagents/issues/2713)) ([1699f3a](https://github.com/langchain-ai/deepagents/commit/1699f3aea710985087b16318bb8e6f6e80e02a1b))

---

Thanks to our community contributors: @SeongBeomLEE, @pawel-twardziak

Internal maintainers: @sydney-runkle, @vishnu-ssuresh, @DanielKneipp, @hntrl, @kevinbfrank, @ccurme, @jacoblee93, @mdrxy

## deepagents-cli==0.0.44: deepagents-cli==0.0.44

**Published**: 2026-04-29

### Bug Fixes

* Startup import deadlock ([#3017](https://github.com/langchain-ai/deepagents/issues/3017)) ([d40ab57](https://github.com/langchain-ai/deepagents/commit/d40ab57800a6ad12b0c9a5e249753702ec0832c8))

---

Internal maintainers: @mdrxy

## deepagents-cli==0.0.43: deepagents-cli==0.0.43

**Published**: 2026-04-29

### Features

* (Deploy) Bundled chat frontend for deepagent deploy ([#2940](https://github.com/langchain-ai/deepagents/issues/2940)) ([9bde0c7](https://github.com/langchain-ai/deepagents/commit/9bde0c7835ded20e80466d8361f40784141d68d8))

---

Internal maintainers: @victorm-lc


## deepagents-cli==0.0.42: deepagents-cli==0.0.42

**Published**: 2026-04-29

### Features

* `shift+enter` newline on kitty-capable terminals ([#2869](https://github.com/langchain-ai/deepagents/issues/2869)) ([34e6614](https://github.com/langchain-ai/deepagents/commit/34e6614a2c6e6a7e33f763ac5b527c13b324a690))
* Hint `Enter` behavior in `/model` empty state ([#2933](https://github.com/langchain-ai/deepagents/issues/2933)) ([7cffa16](https://github.com/langchain-ai/deepagents/commit/7cffa16a072bc77def78e4cda09c2e5a2cf8ca39))

### Bug Fixes

* Queue `/model` switches during server startup ([#2895](https://github.com/langchain-ai/deepagents/issues/2895)) ([6ed7b65](https://github.com/langchain-ai/deepagents/commit/6ed7b65a40ac5bd926e94edd944bd552e8d6b5b4))

---

Thanks to our community contributors: @naveen9871

Internal maintainers: @vishnu-ssuresh, @mdrxy

## deepagents-cli==0.0.41: deepagents-cli==0.0.41

**Published**: 2026-04-21

### Features

* `--startup-cmd` flag ([#2841](https://github.com/langchain-ai/deepagents/issues/2841)) ([8adcc2c](https://github.com/langchain-ai/deepagents/commit/8adcc2c2e612346c263d02d1ec5c33e0d63da5a3))
* Actionable notifications, update modal ([#2855](https://github.com/langchain-ai/deepagents/issues/2855)) ([5fcd368](https://github.com/langchain-ai/deepagents/commit/5fcd368088079a84f151e0a3f5e4b9ac29c360c1))
* Refresh footer git branch after shell commands ([#2851](https://github.com/langchain-ai/deepagents/issues/2851)) ([ee4fddd](https://github.com/langchain-ai/deepagents/commit/ee4fddde9454ee8f7ede98ee9a346da6c5ccd3d9))
* Rework `/version`, add release-age and editable-install guard ([#2854](https://github.com/langchain-ai/deepagents/issues/2854)) ([1ae053f](https://github.com/langchain-ai/deepagents/commit/1ae053f347679e58562d2b81eb6d6e6e9bbf0b07))
* (Deploy) Custom auth via `[auth]` in `deepagents deploy` ([#2734](https://github.com/langchain-ai/deepagents/issues/2734)) ([417ddaa](https://github.com/langchain-ai/deepagents/commit/417ddaab4804a54a8f83721bb8577d65cfa3659f))

### Bug Fixes

* Gate agent-swap resume hint on server checkpoint ([#2862](https://github.com/langchain-ai/deepagents/issues/2862)) ([f14b9cd](https://github.com/langchain-ai/deepagents/commit/f14b9cd3cc41f92ddb089d4294cba8496d517807))
* Keep thinking spinner visible during text streaming ([#2849](https://github.com/langchain-ai/deepagents/issues/2849)) ([2cb2244](https://github.com/langchain-ai/deepagents/commit/2cb22446bc1351d20e8bbfa9f23b5d668947351f))
* Re-show thinking spinner on hitl/`ask_user` resume ([#2847](https://github.com/langchain-ai/deepagents/issues/2847)) ([34a6167](https://github.com/langchain-ai/deepagents/commit/34a6167b0c275c7e4da067ef276a837f60da2f8a))
* Restore `ctrl+j` newline keybinding ([#2827](https://github.com/langchain-ai/deepagents/issues/2827)) ([2e1a3f4](https://github.com/langchain-ai/deepagents/commit/2e1a3f45a9ff56390e294ea5b0f6a837200874ec))

---

Thanks to our community contributors: @gojun077, @naveen9871, @NinaadRao ([LinkedIn](https://www.linkedin.com/in/ninaadrrao/))

Internal maintainers: @mdrxy, @victorm-lc


## deepagents-cli==0.0.40: deepagents-cli==0.0.40

**Published**: 2026-04-20

### Features

* `--max-turns` flag on non-interactive mode ([#2832](https://github.com/langchain-ai/deepagents/issues/2832)) ([567bcd8](https://github.com/langchain-ai/deepagents/commit/567bcd8f2065e089f4905a901efe7154add23121))
* `/agents` switcher ([#2558](https://github.com/langchain-ai/deepagents/issues/2558)) ([3a2b777](https://github.com/langchain-ai/deepagents/commit/3a2b77773a19dd48f9c51dfb35cdfc5c33126d77))

### Bug Fixes

* Normalize serialized message dicts in `/offload` ([#2808](https://github.com/langchain-ai/deepagents/issues/2808)) ([0d11bd4](https://github.com/langchain-ai/deepagents/commit/0d11bd46fd682c7aa3f008918771e9759dca7352))

---

Thanks to our community contributors: @ethan6188, @NinaadRao

Internal maintainers: @ramon-langchain, @mdrxy

## deepagents-acp==0.0.6: deepagents-acp==0.0.6

**Published**: 2026-04-18

### Features

* Add Opus 4.7 and Baseten to demo agent ([#2787](https://github.com/langchain-ai/deepagents/issues/2787)) ([bfb16a6](https://github.com/langchain-ai/deepagents/commit/bfb16a645178f8134611d90b4aca4ddd43e2fdb9))

### Bug Fixes

* Restore passing tests after acp v0.9 schema bump ([#2813](https://github.com/langchain-ai/deepagents/issues/2813)) ([29a351a](https://github.com/langchain-ai/deepagents/commit/29a351a8f5de8c460a3eeaadd76a3c2ace0072e0))

---

Thanks to our community contributors: @ethan6188

Internal maintainers: @sydney-runkle, @jacoblee93, @mdrxy

## deepagents-cli==0.0.39: deepagents-cli==0.0.39

**Published**: 2026-04-17

### Features

* Inline argument hints for slash commands ([#2181](https://github.com/langchain-ai/deepagents/issues/2181)) ([6b58e06](https://github.com/langchain-ai/deepagents/commit/6b58e06b06f6fb360d85c54eac31953d1e47dd7a))
* (Deploy) Subagents for `deepagents deploy` ([#2786](https://github.com/langchain-ai/deepagents/issues/2786)) ([7dd5565](https://github.com/langchain-ai/deepagents/commit/7dd5565e30ab91a2cd2ca10fcd227e590451f13c))

### Bug Fixes

* Throttle update notification to once per day and fix teardown banner ([#2764](https://github.com/langchain-ai/deepagents/issues/2764)) ([ba31294](https://github.com/langchain-ai/deepagents/commit/ba31294b733d4ef542d18830eec6df30cfa0d23f))

---

Thanks to our community contributors: @km322 ([LinkedIn](https://linkedin.com/in/ketan-mittal322/))

Internal maintainers: @sydney-runkle, @hari-dhanushkodi, @mdrxy


## deepagents-cli==0.0.38: deepagents-cli==0.0.38

**Published**: 2026-04-15

### Features

* (Deploy) User scoped memory for `deepagents deploy` ([#2708](https://github.com/langchain-ai/deepagents/issues/2708)) ([23bfca6](https://github.com/langchain-ai/deepagents/commit/23bfca6e46e6f3e4fba6657d858ddd5a0b06626f))

### Performance Improvements

* `O(1)` message lookups in `MessageStore` ([#2350](https://github.com/langchain-ai/deepagents/issues/2350)) ([d39fd5d](https://github.com/langchain-ai/deepagents/commit/d39fd5d3651fd87d1eea8c02cbef2c2f62449e67))

---

Thanks to our community contributors: @octo-patch, @hzylyq

Internal maintainers: @sydney-runkle, @mdrxy


## deepagents==0.5.3: deepagents==0.5.3

**Published**: 2026-04-15

### Features

* Add static structured output to subagent response ([#2437](https://github.com/langchain-ai/deepagents/issues/2437)) ([6e57731](https://github.com/langchain-ai/deepagents/commit/6e57731fc6d908ac1ebe131e782696a4776147e9))
* Deprecate `model=None` in `create_deep_agent` ([#2677](https://github.com/langchain-ai/deepagents/issues/2677)) ([149df41](https://github.com/langchain-ai/deepagents/commit/149df415d17f3cf3b7eb0bd1e78460112bfa9b04))


### Bug Fixes

* Skill loading should default to 1000 lines ([#2721](https://github.com/langchain-ai/deepagents/issues/2721)) ([badc4d3](https://github.com/langchain-ai/deepagents/commit/badc4d3921ae0ede4305f44f85fa7266df9465e7))

---

Internal maintainers: @sydney-runkle, @maahir30, @mdrxy

## deepagents==0.5.2: deepagents==0.5.2

**Published**: 2026-04-10

### Features

* Permissions system for filesystem access control ([#2633](https://github.com/langchain-ai/deepagents/issues/2633)) ([41dc759](https://github.com/langchain-ai/deepagents/commit/41dc7597deb3fc036f1f850e68edc3c0870f27da))
  * Scope permissions to routes for composite backends with sandbox default ([#2659](https://github.com/langchain-ai/deepagents/issues/2659)) ([6dd6122](https://github.com/langchain-ai/deepagents/commit/6dd612237a7ee707726c4cafc4b691704e4cdb37))
  * Raise `ValueError` for permission paths without leading slash and path traversal ([#2665](https://github.com/langchain-ai/deepagents/issues/2665)) ([723d27d](https://github.com/langchain-ai/deepagents/commit/723d27dcdce03cc9ffaa757c70533f0134a43a44))
* Implement `upload_files` for `StateBackend` ([#2661](https://github.com/langchain-ai/deepagents/issues/2661)) ([5798345](https://github.com/langchain-ai/deepagents/commit/579834513a4ba1a024a52fc4edf918f526eab5f2))

### Bug Fixes

* Catch `PermissionError` in `FilesystemBackend` ripgrep ([#2571](https://github.com/langchain-ai/deepagents/issues/2571)) ([3d5d673](https://github.com/langchain-ai/deepagents/commit/3d5d67349c8e88e33af98137db9634742f018cb0))

---

Internal maintainers: @nick-hollon-lc, @sydney-runkle, @ccurme, @mdrxy

## deepagents-cli==0.0.37: deepagents-cli==0.0.37

**Published**: 2026-04-10

### Features

* (Deploy) Permissions for `deepagents deploy` ([#2651](https://github.com/langchain-ai/deepagents/issues/2651)) ([5d93b73](https://github.com/langchain-ai/deepagents/commit/5d93b736af6ffb165f33569233d533ced95a6943))

### Bug Fixes

* `AGENTS.md` in system prompt twice ([#2652](https://github.com/langchain-ai/deepagents/issues/2652)) ([9052be9](https://github.com/langchain-ai/deepagents/commit/9052be98d9f4ef9b11a88c9b1df3fae5e5ac666c))
* (Deploy) Harden `deepagents deploy` config parsing and add unit tests ([#2636](https://github.com/langchain-ai/deepagents/issues/2636)) ([0469d14](https://github.com/langchain-ai/deepagents/commit/0469d1429d129e604fc1b622263923162f719314))
* (Deploy) Load `deepagents deploy` project `.env` before deploy/dev config validation ([#2644](https://github.com/langchain-ai/deepagents/issues/2644)) ([8299091](https://github.com/langchain-ai/deepagents/commit/829909166606f8a9d9571b00da725845bad08da7))
* (Deploy) Add missing model provider deps to `deepagents deploy` bundler [closes [#2647](https://github.com/langchain-ai/deepagents/issues/2647)] ([#2660](https://github.com/langchain-ai/deepagents/issues/2660)) ([b710a69](https://github.com/langchain-ai/deepagents/commit/b710a69b12e49479045eaa54dfb709326473500b))

---

Internal maintainers: @sydney-runkle, @hinthornw, @mdrxy


## deepagents==0.5.2a3: deepagents==0.5.2a3

**Published**: 2026-04-10

> [!WARNING]
> This is a pre-release version. Install with: `pip install deepagents==0.5.2a3`

---

Internal maintainers: @nick-hollon-lc, @sydney-runkle, @ccurme, @mdrxy

## deepagents==0.5.2a2: deepagents==0.5.2a2

**Published**: 2026-04-10

> [!WARNING]
> This is a pre-release version. Install with: `pip install deepagents==0.5.2a2`

---

Internal maintainers: @nick-hollon-lc, @sydney-runkle, @ccurme, @mdrxy

## deepagents==0.5.2a1: deepagents==0.5.2a1

**Published**: 2026-04-10

> [!WARNING]
> This is a pre-release version. Install with: `pip install deepagents==0.5.2a1`

## deepagents-cli==0.0.36: deepagents-cli==0.0.36

**Published**: 2026-04-09

### Features

* Warn on missing tavily key, add `/notifications` ([#2555](https://github.com/langchain-ai/deepagents/issues/2555)) ([3dff3ed](https://github.com/langchain-ai/deepagents/commit/3dff3ed6835eae9f8b420b8a73c054127faaf7d2))
* (Deploy) `deepagents deploy` ([#2491](https://github.com/langchain-ai/deepagents/issues/2491)) ([01dc60e](https://github.com/langchain-ai/deepagents/commit/01dc60e394ecb56bd5336e447d32caeed8a67ec2))

### Bug Fixes

* Fail fast on missing provider credentials ([#2554](https://github.com/langchain-ai/deepagents/issues/2554)) ([50fb8ae](https://github.com/langchain-ai/deepagents/commit/50fb8aefe7e3065024e10f1d5ecd11a54d736641))
* Fix mktemp template in debug script for macOS ([#2603](https://github.com/langchain-ai/deepagents/issues/2603)) ([63fa537](https://github.com/langchain-ai/deepagents/commit/63fa537e9995ca2ead492ee44902227567e9a130))

---

Internal maintainers: @sydney-runkle, @mdrxy


## langchain-runloop==0.0.4: langchain-runloop==0.0.4

**Published**: 2026-04-07

Changes since langchain-runloop==0.0.3
release(runloop): 0.0.4 (#2527)
release(deepagents): 0.5.0 (#2509)
release: deepagents 0.5.0a4 (#2444)
chore(sdk): bump lock files (#2430)
release(deepagents): 0.5.0a3 (#2385)
chore: bump pygments to 2.20.0 everywhere (GHSA-5239-wwwm-4pmq) (#2349)
chore(deps): bump cryptography from 46.0.5 to 46.0.6 in /libs/partners/runloop (#2281)
chore(deps): bump langchain-core from 1.2.21 to 1.2.22 in /libs/partners/runloop (#2280)
chore: sync lockfiles (#2279)
chore(deps): bump the uv group across 4 directories with 1 update (#2222)
release(deepagents): 0.5.0a2 (#2158)
release(deepagents): 0.5.0a1 (#2157)
chore(sdk): update langchain and langchain-anthropic deps (#2069)
feat(sdk): port `LangSmithSandbox` from CLI to SDK (#1983)
refactor(evals): consolidate eval suite into standalone `libs/evals` (#2032)
ci: suppress pytest streaming output in CI (#2026)
chore: promote `PLR6201` to safe-fix across all packages (#2000)
test(sdk): add wall-time benchmarks for `create_deep_agent` (#1944)
chore(deps): bump the uv group across 4 directories with 1 update (#1963)
chore(sdk): increment version to 0.5 (#1908)
chore(sdk,cli): make `langchain-anthropic` and `langchain-google-genai` explicit deps (#1886)
release(sdk): 0.4.11 (#1868)
chore(sdk): make `langsmith` explicit evals dep (#1867)
test(sdk): add `ChatBaseten` for evals (#1839)
feat(sdk): add MemoryAgentBench evaluation suite (#1807)
release(sdk): prepare 0.4.10 patch release (#1795)
release(deepagents): 0.4.9 (#1773)
release(deepagents): 0.4.8 (#1764)

---

Thanks to our community contributors: @sydney-runkle

## langchain-repl==0.0.1: langchain-repl==0.0.1

**Published**: 2026-04-07

Initial release
cr
hotfix(repl): stub package
release(deepagents): 0.5.0 (#2509)
chore(deps): bump the uv group across 1 directory with 3 updates (#2487)
feat(repl): add minimal repl for testing purposes (#2482)

## langchain-modal==0.0.3: langchain-modal==0.0.3

**Published**: 2026-04-07

Changes since langchain-modal==0.0.2
release(modal): 0.0.3 (#2525)
release(deepagents): 0.5.0 (#2509)
release: deepagents 0.5.0a4 (#2444)
chore(sdk): bump lock files (#2430)
release(deepagents): 0.5.0a3 (#2385)
chore: bump pygments to 2.20.0 everywhere (GHSA-5239-wwwm-4pmq) (#2349)
chore(deps): bump cryptography from 46.0.5 to 46.0.6 in /libs/partners/modal (#2286)
chore(deps): bump langchain-core from 1.2.21 to 1.2.22 in /libs/partners/modal (#2285)
chore: sync lockfiles (#2279)
chore(deps): bump the uv group across 4 directories with 1 update (#2222)
chore(deps): bump the uv group across 2 directories with 1 update (#2161)
release(deepagents): 0.5.0a2 (#2158)
release(deepagents): 0.5.0a1 (#2157)
chore(sdk): update langchain and langchain-anthropic deps (#2069)
feat(sdk): port `LangSmithSandbox` from CLI to SDK (#1983)
refactor(evals): consolidate eval suite into standalone `libs/evals` (#2032)
ci: suppress pytest streaming output in CI (#2026)
chore: promote `PLR6201` to safe-fix across all packages (#2000)
test(sdk): add wall-time benchmarks for `create_deep_agent` (#1944)
chore(deps): bump the uv group across 4 directories with 1 update (#1963)
chore(sdk): increment version to 0.5 (#1908)
chore(sdk,cli): make `langchain-anthropic` and `langchain-google-genai` explicit deps (#1886)
release(sdk): 0.4.11 (#1868)
chore(sdk): make `langsmith` explicit evals dep (#1867)
test(sdk): add `ChatBaseten` for evals (#1839)
feat(sdk): add MemoryAgentBench evaluation suite (#1807)
release(sdk): prepare 0.4.10 patch release (#1795)
release(deepagents): 0.4.9 (#1773)
release(deepagents): 0.4.8 (#1764)

---

Thanks to our community contributors: @sydney-runkle

## langchain-daytona==0.0.5: langchain-daytona==0.0.5

**Published**: 2026-04-07

Changes since langchain-daytona==0.0.4
release(daytona): 0.0.5 (#2523)
release(deepagents): 0.5.0 (#2509)
release: deepagents 0.5.0a4 (#2444)
chore(sdk): bump lock files (#2430)
release(deepagents): 0.5.0a3 (#2385)
chore: bump pygments to 2.20.0 everywhere (GHSA-5239-wwwm-4pmq) (#2349)
chore: bump requests (#2325)
chore(deps): bump cryptography from 46.0.5 to 46.0.6 in /libs/partners/daytona (#2288)
chore(deps): bump langchain-core from 1.2.21 to 1.2.22 in /libs/partners/daytona (#2287)
chore: sync lockfiles (#2279)
release(deepagents): 0.5.0a2 (#2158)
release(deepagents): 0.5.0a1 (#2157)
chore(sdk): update langchain and langchain-anthropic deps (#2069)
feat(sdk): port `LangSmithSandbox` from CLI to SDK (#1983)
refactor(evals): consolidate eval suite into standalone `libs/evals` (#2032)
ci: suppress pytest streaming output in CI (#2026)
chore: promote `PLR6201` to safe-fix across all packages (#2000)
test(sdk): add wall-time benchmarks for `create_deep_agent` (#1944)
chore(deps): bump pyasn1 from 0.6.2 to 0.6.3 in /libs/partners/daytona (#1965)
chore(sdk): increment version to 0.5 (#1908)
chore(sdk,cli): make `langchain-anthropic` and `langchain-google-genai` explicit deps (#1886)
release(sdk): 0.4.11 (#1868)
chore(sdk): make `langsmith` explicit evals dep (#1867)
test(sdk): add `ChatBaseten` for evals (#1839)
feat(sdk): add MemoryAgentBench evaluation suite (#1807)
chore(deps): bump multipart from 1.3.0 to 1.3.1 in /libs/partners/daytona (#1842)

## deepagents==0.5.1: deepagents==0.5.1

**Published**: 2026-04-07

### Features

* **sdk:** `BASE_AGENT_PROMPT` tweaks ([#2541](https://github.com/langchain-ai/deepagents/issues/2541)) ([812eef1](https://github.com/langchain-ai/deepagents/commit/812eef185ffda7bc9e6f11425eb5eddc3d3b32e8))
* **sdk:** add `artifacts_root` to `CompositeBackend` and middleware ([#2490](https://github.com/langchain-ai/deepagents/issues/2490)) ([753ee56](https://github.com/langchain-ai/deepagents/commit/753ee567f1cc4d544dc2afea7b414564fd07d37d))


### Bug Fixes

* **sdk:** updates for multimodal ([#2514](https://github.com/langchain-ai/deepagents/issues/2514)) ([a2edf3e](https://github.com/langchain-ai/deepagents/commit/a2edf3ed80e17a87027c41a46283387031ebd3e5))

---

Internal maintainers: @vtrivedy, @nick-hollon-lc, @ccurme, @mdrxy

## deepagents==0.5.0: deepagents==0.5.0

**Published**: 2026-04-07

See [changelog](https://docs.langchain.com/oss/python/releases/changelog) for high-level summary.

Details below:

Changes since deepagents==0.4.12
release(deepagents): 0.5.0 (#2509)
fix(sdk): match example_agent_descriptions closing tag in task tool prompt (#2462)
docs(sdk,cli): fill missing docstrings in model-specific code (#2481)
chore: replace old OAI model strings (#2480)
docs(sdk): updates for `create_deep_agent` (#2479)
fix(sdk): improvements in default sandbox.write and sandbox.read implementations (#2321)
release: deepagents 0.5.0a4 (#2444)
fix: remove legacy subagents API (#2443)
chore(sdk): delete unused `base_prompt.md`, restore missing sections (#2436)
chore(sdk): update unset logic (#2435)
fix(sdk): inherit parent `interrupt_on` for subagents (#2334)
test(sdk): added a failing test for callback propagation to subagent … (#2361)
chore(sdk): bump lock files (#2430)
chore(sdk): update docs around async subagents (#2429)
release(deepagents): 0.5.0a3 (#2385)
fix: plumb through generics for `create_deep_agent` (#2383)
fix(sdk): fix TypeError in async sub-agents (#2376)
fix(sdk): `last_updated_at` field doesn't account for task status changes (#2370)
fix: deprecate backend factories (#2360)
chore: bump pygments to 2.20.0 everywhere (GHSA-5239-wwwm-4pmq) (#2349)
fix(sdk): catch `UnicodeDecodeError` in `FilesystemBackend.read` (#2319)
fix(sdk): restore deprecated protocol return types (#2342)
docs: add threat model for deepagents monorepo (#1639)
fix(sdk): add new line after HEREDOC for edit inline sandbox (#2340)
chore(sdk): disable benchmark when not running benchmarks (#2338)
test(sdk): assert default toolruntime config in end-to-end test (#2324)
fix(sdk): fix offloading for state backend (#2266)
chore: bump requests (#2325)
chore(deps): bump cryptography from 46.0.5 to 46.0.6 in /libs/deepagents (#2292)
chore(deps): bump langchain-core from 1.2.21 to 1.2.22 in /libs/deepagents (#2291)
chore: sync lockfiles (#2279)
fix(sdk): update recursion limit (#2273)
chore(sdk): add end-to-end test for compaction tool (#2268)
chore(sdk): declare schema up front for remaining tools (#2264)
chore(sdk): speed up init for file system, summarization middleware (#2257)
fix(sdk): normalize CRLF line endings in `FilesystemBackend.edit()` (#2256)
test(sdk): add a test for invalid args into a tool (#2254)
chore(sdk): add all snapshots (#2253)
chore(sdk): add snapshot of tool descriptions (#2252)
fix(sdk): make created_at and modified_at NotRequired fields on FileData (#2248)
feat(sdk): evict large HumanMessages (#2183)
fix(sdk): bump recursion limit to 10_000 in deepagents and set agent name (#2194)
fix(sdk): route subagent model resolution to `resolve_model` (#2208)
feat(sdk,cli): add openrouter SDK attribution (#2205)
chore(sdk): minor clean up (#2186)
fix(sdk,cli): align error messages and clean up recent refactors (#2171)
refactor(sdk): type-only exception classification in `map_file_operation_error` (#2168)
fix(sdk): use file transfer instead of command strings for sandbox write/edit (#2117)
docs(sdk): improve `sandbox.py` docstrings and refactor read template (#2169)
docs(sdk,evals): fix docstring formatting and harbor grep literal flag (#2163)
release(deepagents): 0.5.0a2 (#2158)
release(deepagents): 0.5.0a1 (#2157)
feat(sdk,cli): add package version metadata to traces (#2129)
refactor(sdk): rename tools for async subgents (#2103)
feat(sdk): add timestamp tracking to `AsyncSubAgentJob` (#2071)
fix(sdk): overwrite `write` on LangSmithSandbox (#2097)
fix(sdk): update middleware order (#2070)
feat(sdk): add system prompt snapshot test with sync and async subagents (#2072)
chore(sdk): update langchain and langchain-anthropic deps (#2069)
chore(sdk): merge async subagents and subagents into single top level param (#2064)
feat(sdk): port `LangSmithSandbox` from CLI to SDK (#1983)
refactor(evals): consolidate eval suite into standalone `libs/evals` (#2032)
ci: fix evals dataclass (#2034)
ci: suppress pytest streaming output in CI (#2026)
feat(sdk): add tau2 LICENSE (#2025)
feat(sdk): add tau2 airline eval harness (#1987)
test(sdk): gather `MemoryAgentBench` CI subset (#1993)
test(sdk): add curated external benchmark evals (#2018)
test(sdk): add evals for llm judge, tool selection, followup quality, and multi-turn memory (#1838)
chore: promote `PLR6201` to safe-fix across all packages (#2000)
test(sdk): add wall-time benchmarks for `create_deep_agent` (#1944)
chore(deps): bump pyasn1 from 0.6.2 to 0.6.3 in /libs/deepagents (#1967)
chore(quickjs): add some unit tests and disable tests from running (#1962)
feat(sdk): rename backend methods (#1907)
test(sdk): update evals for relational tool usage (#1940)
test(sdk): add fixture for summarization tests (#1627)
feat(sdk): add async subagent middleware for remote LangGraph servers (#1758)
fix(sdk): simplify memory agent bench evals (#1873)
feat(sdk): update backend return types for ls, glob, grep (#1870)
fix(sdk): use Sequence instead of list for subagents parameter (#1905)
chore(sdk): increment version to 0.5 (#1908)
feat(sdk): update FileData and backend.read return type to support multimodal data (#1869)

---

Thanks to our community contributors: @BANG404, @kavishkartha05, @november-pain, @AdemBoukhris457

## deepagents-cli==0.0.35: deepagents-cli==0.0.35

**Published**: 2026-04-07

### Highlights

* **Skills:** Invoke SDK skills directly from the CLI with `/skill:name` or at startup via `--skill`. Skills are a composable extension point for domain-specific agent behaviors.
* **Themes & configuration:** New theme system with color overrides, global dotenv at `~/.deepagents/.env`, and a `DEEPAGENTS_CLI_` env var prefix for conflict-free configuration.
* **Auto-updates:** Full update lifecycle — `/update` to upgrade in-place, `/auto-update` to toggle background checks, and a refreshed install script UX.
* **Headless workflows:** Agent-friendly UX for scripted/headless invocations, AgentCore Code Interpreter sandbox provider, and improved non-interactive tracing and guidance.
* **Performance:** Sub-250ms first paint via aggressive import deferral (pydantic, adapters, heavy SDK modules), markdown stack prewarming, and reduced health-poll intervals.

### Features

* Load `~/.deepagents/.env` as global dotenv ([#1909](https://github.com/langchain-ai/deepagents/issues/1909)) ([5a21d0a](https://github.com/langchain-ai/deepagents/commit/5a21d0add1d2a885c6cd3cf36621d1da690c8db3))
* Skill invocation via `/skill:name` ([#2037](https://github.com/langchain-ai/deepagents/issues/2037)) ([cc8cce7](https://github.com/langchain-ai/deepagents/commit/cc8cce70e1d6c5f897a3cebe0388aa3d774de487))
  * `--skill` startup invocation ([#2477](https://github.com/langchain-ai/deepagents/issues/2477)) ([5f0f1d4](https://github.com/langchain-ai/deepagents/commit/5f0f1d4605de1f1545846e2dbcc29a24c6f138d7))
* Auto-update lifecycle, `/update` command, install script ux ([#2095](https://github.com/langchain-ai/deepagents/issues/2095)) ([fd92f6e](https://github.com/langchain-ai/deepagents/commit/fd92f6eaa87bb1a397f1b7fd216657f354c46e0f))
  * `/auto-update` to toggle auto-updates ([#2276](https://github.com/langchain-ai/deepagents/issues/2276)) ([ad70bde](https://github.com/langchain-ai/deepagents/commit/ad70bde070c58057ff98871fcacd95f03487051e))
* Themes ([#2134](https://github.com/langchain-ai/deepagents/issues/2134)) ([db67af0](https://github.com/langchain-ai/deepagents/commit/db67af07984b5d73711383cf717b5e3d96eac3b8))
  * Allow color overrides on built-in themes, default dark to false ([#2275](https://github.com/langchain-ai/deepagents/issues/2275)) ([8f71865](https://github.com/langchain-ai/deepagents/commit/8f718650ee1913f83e70aa7854e576edc816e694))
* Add `DEEPAGENTS_CLI_` env var prefix and fix dotenv load order ([#2303](https://github.com/langchain-ai/deepagents/issues/2303)) ([29647bb](https://github.com/langchain-ai/deepagents/commit/29647bb4cdd89a1de65f6adb518f708135d59e03))
* Add `ls_integration` metadata to langsmith traces ([#2272](https://github.com/langchain-ai/deepagents/issues/2272)) ([5dd8098](https://github.com/langchain-ai/deepagents/commit/5dd80983a57a5c48bb9c75c6760733882cb908c2))
* Add animated spinner to non-interactive verbose mode ([#2001](https://github.com/langchain-ai/deepagents/issues/2001)) ([153f465](https://github.com/langchain-ai/deepagents/commit/153f465937c09a792119a0e0c8656fa8df29d4e5))
* Add async backend support to local context middleware ([#2118](https://github.com/langchain-ai/deepagents/issues/2118)) ([a0d623c](https://github.com/langchain-ai/deepagents/commit/a0d623cf18d216b5de36cc7d40e7804d5cc4dfa3))
* Agent-friendly ux for scripted/headless workflows ([#2271](https://github.com/langchain-ai/deepagents/issues/2271)) ([386438f](https://github.com/langchain-ai/deepagents/commit/386438f62a458baa367468cf746c3a5387a217d4))
* AgentCore Code Interpreter sandbox provider ([#2120](https://github.com/langchain-ai/deepagents/issues/2120)) ([92556c7](https://github.com/langchain-ai/deepagents/commit/92556c767aaab601d3ea753baf7f52642e5769a4))
* Context-aware connecting banner for resume and local server ([#2092](https://github.com/langchain-ai/deepagents/issues/2092)) ([18b385b](https://github.com/langchain-ai/deepagents/commit/18b385be979d461797a76b6d7217e259fe260b2c))
* Default langsmith project to `'deepagents-cli'` ([#2277](https://github.com/langchain-ai/deepagents/issues/2277)) ([7178b87](https://github.com/langchain-ai/deepagents/commit/7178b8729a03ee1e5508fdf6c111488d18e77e8f))
* Enhance tool-call UI, add `Ctrl+U` shortcut for chat input ([#1757](https://github.com/langchain-ai/deepagents/issues/1757)) ([800c552](https://github.com/langchain-ai/deepagents/commit/800c55213aa4c6515759fb70d36af370feb86302))
* Persist token count in graph state across sessions ([#2323](https://github.com/langchain-ai/deepagents/issues/2323)) ([5be352d](https://github.com/langchain-ai/deepagents/commit/5be352d8bb4d266758f3e934f7affbe8d42b0149))
* Pop queued messages individually on `esc` instead of clearing all ([#2089](https://github.com/langchain-ai/deepagents/issues/2089)) ([c76d855](https://github.com/langchain-ai/deepagents/commit/c76d855e4c73a448af17ade8ad54a2071f2c6bfe))
* Render ask-user questions as markdown ([#2339](https://github.com/langchain-ai/deepagents/issues/2339)) ([5fbb14a](https://github.com/langchain-ai/deepagents/commit/5fbb14a4fd6f2800aec99add1d9f32b88c1d751a))
* Show platform-specific ripgrep install command in missing-tool warning ([#1997](https://github.com/langchain-ai/deepagents/issues/1997)) ([f000ce5](https://github.com/langchain-ai/deepagents/commit/f000ce58ebb6438397e8eb016b2a788a91fe5754))
* Support root/MDM installs ([#2346](https://github.com/langchain-ai/deepagents/issues/2346)) ([f618acc](https://github.com/langchain-ai/deepagents/commit/f618acc671ca2137df165d6f56e8a46f11c63abb))
* Surface unsupported input modalities in system prompt ([#2327](https://github.com/langchain-ai/deepagents/issues/2327)) ([95620e7](https://github.com/langchain-ai/deepagents/commit/95620e796aa6bf11f424d2f83693026fbee6be58))

### Bug Fixes

* Align headless todo guidance with non-interactive mode ([#2459](https://github.com/langchain-ai/deepagents/issues/2459)) ([281899b](https://github.com/langchain-ai/deepagents/commit/281899bf1932f959f512f94f4c2ac5d76ad32ecb))
* Disable markup parsing for blocked-link notifications ([#2170](https://github.com/langchain-ai/deepagents/issues/2170)) ([15867bf](https://github.com/langchain-ai/deepagents/commit/15867bfaeb43b5fca31677fd06b25022aec10c8b))
* Dismiss slash command autocomplete on space ([#2478](https://github.com/langchain-ai/deepagents/issues/2478)) ([02e46bc](https://github.com/langchain-ai/deepagents/commit/02e46bc4cc470d93f5ab3ca05252ef1ffe87c3e7))
* Eliminate autocomplete popup flicker ([#2020](https://github.com/langchain-ai/deepagents/issues/2020)) ([4b2db1e](https://github.com/langchain-ai/deepagents/commit/4b2db1eab412ecfb1343fae123777f14e935fcea))
* Eliminate trace fragmentation in non-interactive mode ([#2136](https://github.com/langchain-ai/deepagents/issues/2136)) ([9bddc52](https://github.com/langchain-ai/deepagents/commit/9bddc52b572672e0564bfc4a8675e106d98116af))
* Enforce approval toggle when launched with `-y` ([#2278](https://github.com/langchain-ai/deepagents/issues/2278)) ([28a32b7](https://github.com/langchain-ai/deepagents/commit/28a32b7dfb6fd6ddb9aa443a9d0d70c33790edbd))
* Escape exception text in rich markup error output ([#2307](https://github.com/langchain-ai/deepagents/issues/2307)) ([42bccca](https://github.com/langchain-ai/deepagents/commit/42bccca05f1733a04ee21da6bf9924140f6e1e65))
* Escape markup in toast notifications ([#2139](https://github.com/langchain-ai/deepagents/issues/2139)) ([90ccc28](https://github.com/langchain-ai/deepagents/commit/90ccc28ace79ae6e2d60d1ccc99f612fb1fcb30e))
* Exit app on `ctrl+d` when thread list is empty ([#2270](https://github.com/langchain-ai/deepagents/issues/2270)) ([e859077](https://github.com/langchain-ai/deepagents/commit/e859077ffa7ee0423bbc7b86d5a4238798ec9c9a))
* Guard against textual cursor/document desync crash ([#2494](https://github.com/langchain-ai/deepagents/issues/2494)) ([c14a748](https://github.com/langchain-ai/deepagents/commit/c14a7483ed92428ec2241dd8254cdab9c26a6a4f))
* Human-readable duration and consistent dim styling on teardown screen ([#1995](https://github.com/langchain-ai/deepagents/issues/1995)) ([901a0a4](https://github.com/langchain-ai/deepagents/commit/901a0a400fccfafbef069d6632acb2227f0aef41))
* Mark token count as approximate after interrupted generation ([#2353](https://github.com/langchain-ai/deepagents/issues/2353)) ([cb9a0c7](https://github.com/langchain-ai/deepagents/commit/cb9a0c7ad2f9421471b4276a33beabc30588b694))
* Resolve misleading "missing package" error when provider import fails ([#1960](https://github.com/langchain-ai/deepagents/issues/1960)) ([b90fbad](https://github.com/langchain-ai/deepagents/commit/b90fbad1335222a3b7ceb469f7f46fedec79ac61))
* Open trace in browser immediately when busy ([#2305](https://github.com/langchain-ai/deepagents/issues/2305)) ([b452032](https://github.com/langchain-ai/deepagents/commit/b452032438f83e0cca245dcabacf176cc1aa8857))
* Patch model identity in system prompt on `/model` swap ([#2024](https://github.com/langchain-ai/deepagents/issues/2024)) ([36aecbf](https://github.com/langchain-ai/deepagents/commit/36aecbf939cafb2d5914620a9e2ec890b02447a4))
* Harden MCP pre-flight health checks ([#2019](https://github.com/langchain-ai/deepagents/issues/2019)) ([2b27055](https://github.com/langchain-ai/deepagents/commit/2b270558fcd846f9f82ffa2bc3b56810b5851d7d))
* Pre-flight health checks for MCP servers ([#2008](https://github.com/langchain-ai/deepagents/issues/2008)) ([30d60e3](https://github.com/langchain-ai/deepagents/commit/30d60e3866bde51a71f607fcd5cbe9dd75c5da75))
* Prevent premature thinking state with parallel subtasks ([#1858](https://github.com/langchain-ai/deepagents/issues/1858)) ([189104c](https://github.com/langchain-ai/deepagents/commit/189104c622a5fa874ad1d4be1c18e012cafd605a))
* Prevent session stats loss on mid-turn exit ([#2238](https://github.com/langchain-ai/deepagents/issues/2238)) ([b1807aa](https://github.com/langchain-ai/deepagents/commit/b1807aab78175c53a2d6f835ae30171d0f802d1c))
* Rebind toggle tool output to `ctrl+o` to unblock `cmd+right` ([#2088](https://github.com/langchain-ai/deepagents/issues/2088)) ([b486fe5](https://github.com/langchain-ai/deepagents/commit/b486fe5df5aa0efd11cdcffdbd96f433c2b127b3))
* Remove duplicate server failure notification ([#2141](https://github.com/langchain-ai/deepagents/issues/2141)) ([c1cfe72](https://github.com/langchain-ai/deepagents/commit/c1cfe72055fd00685cc21a84540f21f4792033ab))
* Remove keybinding overrides that shadow textual built-ins ([#2084](https://github.com/langchain-ai/deepagents/issues/2084)) ([08fc5d0](https://github.com/langchain-ai/deepagents/commit/08fc5d088ca7be041ad680b87236a4f9e9c212cf))
* Resolve conflicting langsmith env var precedence ([#2455](https://github.com/langchain-ai/deepagents/issues/2455)) ([b6997d8](https://github.com/langchain-ai/deepagents/commit/b6997d830c8c2822acbaa0ad672bdec873af2b9d))
* Show server startup error instead of generic agent message ([#2397](https://github.com/langchain-ai/deepagents/issues/2397)) ([a3e1e93](https://github.com/langchain-ai/deepagents/commit/a3e1e9365178ad14d7233ae577bb87d714daff5c))
* Certain slash commands should not require server connection ([#1974](https://github.com/langchain-ai/deepagents/issues/1974)) ([32bd814](https://github.com/langchain-ai/deepagents/commit/32bd814b98a079778dad092a2e877d8eba22b0fb))
* Sort MCP tools deterministically for prompt-cache stability ([#2497](https://github.com/langchain-ai/deepagents/issues/2497)) ([39b43cf](https://github.com/langchain-ai/deepagents/commit/39b43cf8d0f44827f3b2faf32843c7db436539e8))
* Squash loading widget timer leak ([#2396](https://github.com/langchain-ai/deepagents/issues/2396)) ([01d3d86](https://github.com/langchain-ai/deepagents/commit/01d3d864098c4e96527082b2bd1755ac6591b098))
* Support pre-release versions in update checker ([#2164](https://github.com/langchain-ai/deepagents/issues/2164)) ([e18e9dc](https://github.com/langchain-ai/deepagents/commit/e18e9dcd0e6edc72c0a4a5b76ae752c4bc539752))
* Surface clear error for missing sandbox provider deps ([#1999](https://github.com/langchain-ai/deepagents/issues/1999)) ([939f56a](https://github.com/langchain-ai/deepagents/commit/939f56a19244714fc53158a2fd162e3098b3d56c))
* Use relative paths in langgraph config for Windows compat ([#2244](https://github.com/langchain-ai/deepagents/issues/2244)) ([d10dfbd](https://github.com/langchain-ai/deepagents/commit/d10dfbd7d8ff18653d0d25197c76c8b379f60bf0))
* Warn agent that local filesystem is inaccessible in sandbox mode ([#2274](https://github.com/langchain-ai/deepagents/issues/2274)) ([a3b61e5](https://github.com/langchain-ai/deepagents/commit/a3b61e5d57fcf240fec4afa7734a5c864bdcd886))
* Wire `enable_ask_user` flag to remove tool in non-interactive mode ([#2105](https://github.com/langchain-ai/deepagents/issues/2105)) ([2399747](https://github.com/langchain-ai/deepagents/commit/23997478c006728fc3923e1e8853626794319c32))

### Performance Improvements

* Sub 250ms first paint ([#2027](https://github.com/langchain-ai/deepagents/issues/2027)) ([e42e05c](https://github.com/langchain-ai/deepagents/commit/e42e05c12229ece450746d6f943d2483477518a5))
* Defer `/model` selector data loading off event loop ([#2259](https://github.com/langchain-ai/deepagents/issues/2259)) ([a32ce7f](https://github.com/langchain-ai/deepagents/commit/a32ce7ff6b2112cf48170d2279a1953eded61987))
* Defer heavy imports from startup path ([#2022](https://github.com/langchain-ai/deepagents/issues/2022)) ([b7f5a99](https://github.com/langchain-ai/deepagents/commit/b7f5a99ecda2e3b795764e74bc1e9cbc405b7e18))
* Defer pydantic and adapter imports out of startup hot path ([#2269](https://github.com/langchain-ai/deepagents/issues/2269)) ([0a410b4](https://github.com/langchain-ai/deepagents/commit/0a410b4aba729a71c78e7fd470c904d95fea171a))
* Prewarm markdown stack and cache skill body render ([#2236](https://github.com/langchain-ai/deepagents/issues/2236)) ([0a3ba47](https://github.com/langchain-ai/deepagents/commit/0a3ba47615bfdaba1a51dbff1c75c392dd87579e))
* Reduce health poll interval for local langgraph dev server ([#2283](https://github.com/langchain-ai/deepagents/issues/2283)) ([7f5c3de](https://github.com/langchain-ai/deepagents/commit/7f5c3de9cf5501abc24fbaf50152c4c625b04f1b))

---

Thanks to our community contributors: @thromel, @pratyush618, @BANG404, @sundargthb, @AdemBoukhris457, @amit221, @mlucifer27

## deepagents-acp==0.0.5: deepagents-acp==0.0.5

**Published**: 2026-04-07

Changes since deepagents-acp==0.0.4
release(acp): 0.0.5 (#2521)
release(deepagents): 0.5.0 (#2509)
fix(acp): block dangerous shell patterns in command auto-approve (#2308)
release: deepagents 0.5.0a4 (#2444)
chore(sdk): bump lock files (#2430)
fix(acp): Fix issue in ACP demo agent (#2422)
fix: deprecate backend factories (#2360)
chore: bump pygments to 2.20.0 everywhere (GHSA-5239-wwwm-4pmq) (#2349)
chore: bump requests (#2325)
chore(deps): bump langchain-core from 1.2.19 to 1.2.22 in /libs/acp (#2296)
chore(deps): bump cryptography from 46.0.5 to 46.0.6 in /libs/acp (#2295)
feat(acp): model switching (#2135)
fix(acp): cwd for agent session context (#2130)
ci: suppress pytest streaming output in CI (#2026)
chore: promote `PLR6201` to safe-fix across all packages (#2000)
chore(deps): bump pyasn1 from 0.6.2 to 0.6.3 in /libs/acp (#1969)
feat(cli): `--acp` mode to run CLI agent as ACP server (#1297)
chore: bump lock file (#1674)
chore: standardize makefile type targets/ add type CI check (#1581)
chore(deps): bump the pip-dependencies group across 8 directories with 17 updates (#1564)
chore(acp): Update example ACP agent lockfile (#1522)
chore(deps): bump the pip-dependencies group across 8 directories with 19 updates (#1491)
docs: Add ACP example agent upgrade instructions (#1475)
fix(acp): Remove CLI dep from ACP demo agent (#1474)
chore: auto-generate makefile help from target annotations (#1417)
chore: enable type checking for all other packages (#1365)
feat(acp): Show raw input in tool calls (#1349)
fix(acp): Fix double approval bug (#1335)
feat(acp): Add local context middleware to ACP example agent, update script working dir (#1332)
fix(acp): Fix mode switching for ACP client (#1331)

---

Thanks to our community contributors: @sydney-runkle, @eyurtsev, @jacoblee93, @mdrxy

## deepagents==0.5.0a4: deepagents==0.5.0a4

**Published**: 2026-04-03

Initial release
release: deepagents 0.5.0a4 (#2444)
fix: remove legacy subagents API (#2443)
chore(sdk): delete unused `base_prompt.md`, restore missing sections (#2436)
chore(sdk): update unset logic (#2435)
fix(sdk): inherit parent `interrupt_on` for subagents (#2334)
test(sdk): added a failing test for callback propagation to subagent … (#2361)
chore(sdk): bump lock files (#2430)
chore(sdk): update docs around async subagents (#2429)
release(deepagents): 0.5.0a3 (#2385)
fix: plumb through generics for `create_deep_agent` (#2383)
fix(sdk): fix TypeError in async sub-agents (#2376)
fix(sdk): `last_updated_at` field doesn't account for task status changes (#2370)
fix: deprecate backend factories (#2360)
chore: bump pygments to 2.20.0 everywhere (GHSA-5239-wwwm-4pmq) (#2349)
fix(sdk): catch `UnicodeDecodeError` in `FilesystemBackend.read` (#2319)
fix(sdk): restore deprecated protocol return types (#2342)
docs: add threat model for deepagents monorepo (#1639)
fix(sdk): add new line after HEREDOC for edit inline sandbox (#2340)
chore(sdk): disable benchmark when not running benchmarks (#2338)
test(sdk): assert default toolruntime config in end-to-end test (#2324)
fix(sdk): fix offloading for state backend (#2266)
chore: bump requests (#2325)
chore(deps): bump cryptography from 46.0.5 to 46.0.6 in /libs/deepagents (#2292)
chore(deps): bump langchain-core from 1.2.21 to 1.2.22 in /libs/deepagents (#2291)
chore: sync lockfiles (#2279)
fix(sdk): update recursion limit (#2273)
chore(sdk): add end-to-end test for compaction tool (#2268)
chore(sdk): declare schema up front for remaining tools (#2264)
chore(sdk): speed up init for file system, summarization middleware (#2257)
fix(sdk): normalize CRLF line endings in `FilesystemBackend.edit()` (#2256)
test(sdk): add a test for invalid args into a tool (#2254)
chore(sdk): add all snapshots (#2253)
chore(sdk): add snapshot of tool descriptions (#2252)
fix(sdk): make created_at and modified_at NotRequired fields on FileData (#2248)
feat(sdk): evict large HumanMessages (#2183)
fix(sdk): bump recursion limit to 10_000 in deepagents and set agent name (#2194)
fix(sdk): route subagent model resolution to `resolve_model` (#2208)
feat(sdk,cli): add openrouter SDK attribution (#2205)
chore(sdk): minor clean up (#2186)
fix(sdk,cli): align error messages and clean up recent refactors (#2171)
refactor(sdk): type-only exception classification in `map_file_operation_error` (#2168)
fix(sdk): use file transfer instead of command strings for sandbox write/edit (#2117)
docs(sdk): improve `sandbox.py` docstrings and refactor read template (#2169)
docs(sdk,evals): fix docstring formatting and harbor grep literal flag (#2163)
release(deepagents): 0.5.0a2 (#2158)
release(deepagents): 0.5.0a1 (#2157)
feat(sdk,cli): add package version metadata to traces (#2129)
refactor(sdk): rename tools for async subgents (#2103)
feat(sdk): add timestamp tracking to `AsyncSubAgentJob` (#2071)
fix(sdk): overwrite `write` on LangSmithSandbox (#2097)
fix(sdk): update middleware order (#2070)
feat(sdk): add system prompt snapshot test with sync and async subagents (#2072)
chore(sdk): update langchain and langchain-anthropic deps (#2069)
chore(sdk): merge async subagents and subagents into single top level param (#2064)
feat(sdk): port `LangSmithSandbox` from CLI to SDK (#1983)
refactor(evals): consolidate eval suite into standalone `libs/evals` (#2032)
ci: fix evals dataclass (#2034)
ci: suppress pytest streaming output in CI (#2026)
feat(sdk): add tau2 LICENSE (#2025)
feat(sdk): add tau2 airline eval harness (#1987)
test(sdk): gather `MemoryAgentBench` CI subset (#1993)
test(sdk): add curated external benchmark evals (#2018)
test(sdk): add evals for llm judge, tool selection, followup quality, and multi-turn memory (#1838)
chore: promote `PLR6201` to safe-fix across all packages (#2000)
test(sdk): add wall-time benchmarks for `create_deep_agent` (#1944)
chore(deps): bump pyasn1 from 0.6.2 to 0.6.3 in /libs/deepagents (#1967)
chore(quickjs): add some unit tests and disable tests from running (#1962)
feat(sdk): rename backend methods (#1907)
test(sdk): update evals for relational tool usage (#1940)
test(sdk): add fixture for summarization tests (#1627)
feat(sdk): add async subagent middleware for remote LangGraph servers (#1758)
fix(sdk): simplify memory agent bench evals (#1873)
feat(sdk): update backend return types for ls, glob, grep (#1870)
fix(sdk): use Sequence instead of list for subagents parameter (#1905)
chore(sdk): increment version to 0.5 (#1908)
feat(sdk): update FileData and backend.read return type to support multimodal data (#1869)
chore(sdk,cli): make `langchain-anthropic` and `langchain-google-genai` explicit deps (#1886)
release(sdk): 0.4.11 (#1868)
chore(sdk): make `langsmith` explicit evals dep (#1867)
chore(sdk): add docs link to `LocalShellBackend` `virtual_mode` deprecation warning (#1866)
test(sdk): add `ChatBaseten` for evals (#1839)
feat(sdk): Add LangSmith integration metadata to deepagents (#1837)
fix(sdk): strip leading slash from glob patterns before matching (#1846)
feat(sdk): add MemoryAgentBench evaluation suite (#1807)
fix(sdk): accept all langsmith tracing env vars in evals conftest (#1847)
test(sdk): add 3 more evals for tool usage (longer trajectories) (#1840)
chore(sdk): add evals `README`, ensure tracing (#1834)
feat(sdk): add `subagent_model` param to `create_deep_agent` (#1369)
refactor(sdk): extract model resolution helpers into `_models` module (#1825)
release(sdk): prepare 0.4.10 patch release (#1795)
fix(daytona): fix execute implementation (#1756)
test(sdk): add memory evals (#1775)
release(deepagents): 0.4.9 (#1773)
feat(sdk): add prompt guidance for large tool results (#1763)
release(deepagents): 0.4.8 (#1764)
test(sdk): bump langsmith-sdk for fixes experiments (#1752)
feat(sdk): add factory function for summarization tool middleware (#1749)
feat(sdk): add solve_rate metric to evals reporter (#1711)
feat(cli): `--acp` mode to run CLI agent as ACP server (#1297)
test(sdk): add metadata for experiments (#1652)
test(sdk): reuse model fixture in summarization evals (#1697)
feat(sdk): add baseten-hosted models to evals workflow (#1682)
release(sdk): bump deepagents to 0.4.7 (#1688)
fix(deepagents): restore full routed path in write/edit results (#1681)
feat(infra): add fireworks as eval provider (#1684)
release(sdk): bump deepagents to 0.4.6 (#1677)
chore: bump lock file (#1674)
fix(sdk): extract text from all content blocks for large tool result eviction (#1673)
fix(sdk): enforce path boundaries in `CompositeBackend` routing (#1659)
refactor(sdk): split eval assertions into correctness and efficiency tiers (#1670)
test(sdk): remove an ambiguous eval test (#1661)
chore(sdk): add tool usage evals (#1637)
test(deepagents): fix one more file operation test (#1653)
test(sdk): update eval test to be a bit less ambiguous (#1643)
docs(sdk): middleware module docstring (#1620)
chore(sdk): expand eval matrix and fix model name access for groq (#1623)
release(deepagents): 0.4.5 (#1622)
chore(sdk): expand eval model matrix to 28 models across 7 providers (#1617)
chore: remove unnecessary `@pytest.mark.asyncio` decorators (#1616)
chore(sdk): update evals to use chat model instance  (#1614)
fix(sdk): make evals more robust across model output variations (#1608)
fix(infra): streamline evals workflow and summary (#1602)
docs(sdk): improve docstrings around summarization conditions (#1597)
chore(sdk): add json report to evals (#1594)
chore(sdk,cli): switch `claude-sonnet-4-5-20250929` -> `claude-sonnet-4-6` (#1590)
feat(cli): `/compact` command (#1579)
chore: standardize makefile type targets/ add type CI check (#1581)
ci(sdk): skip some evals (#1580)
docs(sdk): rename 'prompt' to 'system_prompt' in subagent keys (#1578)
docs(sdk): docstring fixes for `summarization.py` (#1568)
chore(sdk): remove unused base_path alias in skills.py (#1543)
chore(deps): bump the pip-dependencies group across 8 directories with 17 updates (#1564)
fix(sdk,cli,deps): support `timeout=0` for sandbox `execute()` (#1558)
fix: Potential fixes for 2 code quality findings (#1534)
fix: Variable defined multiple times (#1536)
feat(cli,sdk): compaction hook (#1420)
chore(deps): bump the pip-dependencies group across 8 directories with 19 updates (#1491)
release(deepagents): 0.4.4 (#1519)
fix(sdk): use consistent path stripping in CompositeBackend grep and glob (#1504)
fix(sdk): add timeout to glob in FilesystemMiddleware (#1508)
fix(sdk): validate tool_call_id before subagent invocation (#1506)
fix(sdk): bundle read template params into single base64 payload (#1500)
fix(deepagents): preserve ToolMessage artifact when evicting large outputs (#1482)
fix(sdk): fix glob matching with ** in _python_search fallback (#1350)
fix(sdk): sanitize paths in BaseSandbox ls_info and read templates (#1484)
docs(sdk): fix SkillsMiddleware.before_agent docstring to reflect caching behavior (#1495)
perf(sdk): parallelize summarization offload and LLM summary generation (#1488)
chore(sdk): add coverage to Makefile (#1493)
perf(sdk): batch memory source loading into a single download_files call (#1490)
release(deepagents): 0.4.3 (#1465)
fix(sdk): guard timeout forwarding for older backend packages (#1461)
fix(sdk): correct imports and mock inheritance in filesystem middleware tests (#1464)
fix(sdk): warn on virtual mode (#1462)
chore(sdk): add more eval test cases (#1452)
test(deepagents): add evaluation tests for skills (#1429)
fix(deepagents): Fix Memory prompt guidelines that could lead to wrong actions (#1448)
test(sdk): add smoke test for system prompt with memory and skills (#1430)
chore(deepagents): bump min version for langchain-anthropic (#1431)
feat(deepagents): add evaluation tests for agent memory (#1415)
chore(sdk): adapt integration tests to evals framework (#1426)
feat(sdk): add per-command `timeout` override to `execute()` (#1154)
chore: auto-generate makefile help from target annotations (#1417)
chore(sdk): add more evals (#1404)
chore(sdk): minor updates to system message (#1367)
chore(sdk): add model parameterization to evals (#1408)
chore: revert SDK version following yank (#1407)
chore(sdk): add simple eval scaffolding (#1400)
refactor(sdk): add logging to silent path skips, rename `validate_path` (#1370)
fix(cli,sdk): harden path hardening (#918)
chore(sdk): add smoke tests for system message (#1363)
feat(sdk): enable type checking in deepagents and resolve most linting issues (#991)
chore(sdk): move some integration tests into unit tests (#1330)
revert(sdk): reimplement skill loading via `skill` tool calling (#1328)
fix(sdk): missing `_validate_path()` on `Glob` tool's `path` parameter allows directory traversal (#1320)
fix: Path Traversal via Unsanitized Glob Pattern in glob_info() Bypasses Virtual Mode Sandbox (#1322)
feat(sdk): add base agent prompt (#1314)
release(sdk): 0.4.2 (#1312)
feat(sdk): reimplement skill loading via `skill` tool calling (#1306)
chore: rollback uv workspace migration, restore per-package lockfiles (#1278)
release(sdk): 0.4.1 (#1269)
chore: migrate to uv workspace (#1264)
feat(sdk): return native image content blocks from read_file (#1163)
chore(deps): bump the pip-dependencies group across 8 directories with 9 updates (#1252)
refactor(sdk): use public `SummarizationMiddleware` middleware (#1241)
chore(deps): bump cryptography from 46.0.3 to 46.0.5 in /libs/deepagents (#1246)
chore: rename `master` to `main` (#984)
release(sdk): 0.4.0 (#1236)
release(deepagents): 0.4 (#1234)
chore(sdk): add support for `,` in allowed-tools, fail gently for bullet list (#1235)
fix(sdk): relax skills parsing for allowed tools (#1232)
chore(deps): bump the pip-dependencies group across 8 directories with 27 updates (#1230)
chore(sdk)!: move sandbox provider back to cli (#1226)
chore(deps): bump the uv group across 3 directories with 1 update (#1216)
refactor(sdk): move function-level test imports out to top (#1168)
fix(sdk): harden skills metadata parsing, improve spec compliance (#1189)
chore(deps): bump the pip-dependencies group across 3 directories with 5 updates (#1183)
style: update brand names (#1180)
release(sdk): deepagents 0.3.12 (#1175)
feat(sdk): refactor namespace gen for StoreBackend (#1169)
revert(deepagents): refactor summarization middleware (#1172)
fix(deepagents): refactor summarization middleware (#1138)
fix(sdk): add explicit `NotImplementedError` to protocol method bodies (#1152)
refactor(cli): reorder property -> method order in `SandboxBackendProtocol` (#1153)
feat(sdk): add sandbox provider exceptions (#1108)
release(sdk): deepagents 0.3.11 (#1078)
feat(sdk): subagent skills, middleware refactor (#1041)
fix(sdk): add newlines in tool result message for large outputs (#1053)
release(sdk): 0.3.10 (#1044)
fix(sdk): grep should perform literal search instead of regex (#975)
feat(sdk): sandbox provider interface (#900)
fix(sdk): handle exact file paths in grep and glob operations (#1017)
chore: correct brand name (#1025)
fix: add py.typed to deepagents (#1024)
fix(sdk): return error message instead of raising ValueError for invalid paths (#994)
fix(deepagents): prevent state merge error in parallel sub-agents (#954)
fix(infra): change `release-please` component (#1002)
chore: nit versions (#997)
chore: enrich `pyproject.toml` files (#996)
chore(sdk,cli): add `VERSION` (#983)
feat(sdk): add LocalShellBackend (#930)
chore: clean up `README` files (#980)
chore(deepagents): add sandbox tests to sdk (#898)
fix(sdk): string interpolation in BaseSandbox write/edit tools  (#955)
feat(cli): custom subagents (#916)
release(deepagents): 0.3.9 (#944)
fix(sdk): summarization offloading (#920)
refactor: filesystem middleware (#928)
chore(deps): bump the uv group across 3 directories with 6 updates (#905)
test(sdk): add unit test for handling large single-line file bug (#813)
feat(deepagents): truncate middle of content instead of end on tool response eviction (#901)
feat(deepagents): truncate tool messages from read_file (#897)
fix(sdk,acp,harbor): don't allow relative imports (#882)
fix(sdk): handle large payloads and headless container execution (#872)
chore: update `Makefile` targets, add pre-commit hooks (#790)
release(sdk): bump version (#879)
fix(sdk): make sure that tool truncation applies to execute (#547)
test(sdk): use unique `thread_id` for summarization test configuration (#871)
fix(sdk): don't dedent summarization prompt (#870)
feat(deepagents): truncate old write / edit calls in message history (#806)
release: patch release 0.3.7 (#869)
chore(deepagents): add end to end tests to confirm file reducer working properly in state backend (#754)
chore: improve filesystem and subagents tool descriptions (#807)
docs(SDK): clarify usage of file system backend (#850)
nit: standardize naming (#849)
docs(sdk): `FilesystemBackend` refs fixes (#791)
feat: show allowed tools for each skill in skill list (#837)
fix(sdk):  FilesystemMiddleware forward 'name' attribute in large_tool_result from the original tool msg (#825)
docs(sdk): docstring formatting nits (#824)
feat: summarization offloading (#742)
Bump version to 0.3.7a1 (#817)
Add Async ops to Store Backend (#816)
chore(deepagents): add tests for grep in end to end tests (#805)
chore(deepagents): bump langchain in lock file (#800)
chore(deps): bump the uv group across 5 directories with 1 update (#811)
fix(deepagents): respect continuation markers when reading files (#809)
fix(infra): exclude `build/` from typechecking (#808)
feat: support `SystemMessage` for parity w/ `create_agent` (#803)
chore(deepagnets): end to end tests for agent writing editing files (#804)
fix(sdk): BaseSandbox.ls_info() to return absolute paths (#797)
fix(deepagents): truncate lines on read (#784)
chore(deps): bump the uv group across 3 directories with 3 updates (#796)
fix: refinements for `test_summarization` (#786)
docs: fix old URLs (#787)
docs: add testing readme (#788)
fix: added error catching for file operations without permissions (#734)
docs(deepagents): update subagent spec (#785)
chore(deepagents): add mini eval for summarization (#751)
docs(sdk): improve `FileSystemBackend` ref docs (#783)
chore: add tests for config, context, metadata propagation (#776)
fix: import rules (#763)
fix(deepagents): throw a clear exception message when 'messages' key missing from the output of the subagent (#678)
release: deepagents 0.3.6 (#752)
chore: automatically sort imports (#740)
fix: no f string needed (#750)
feat: add agent name when creating subagents (#735)
feat(cli): inject local context into system prompt via `LocalContextMiddleware`
chore: update twitter URL (#727)
chore: CR on docstrings/readme (#722)
minor release(deepagents): bump version to 0.3.5 (#695)
Port SDK Memory to CLI (#691)
chore(deepagents): turn on strict linting and add ratchet (#690)
chore(deepagents): add tests for todos middleware (#667)
fix(deepagents):  fix content block handling in filesystem middleware tool result eviction (#674)
Minor release memory bump (#689)
feat: update memory prompt to be more barebones (#685)
improvements to README, reference docs (#688)
update version bounds (#687)
Deepagents release minor (#683)
fix(deepagents): make memory permissive if AGENTS.md not found (#682)
release(deepagents): release 0.3.2 (#680)
chore(deepagents): make memory strict if AGENTS.md not found (#673)
fix(deepagents): better async support in skills, and propagate runnable config (#672)
chore: remove older integration tests for memory (#670)
feature(deepagents): add memory (#646)
feat(deepagents): add skills to sdk (#591)
chore(deepagent): add docs to composite backend (#666)
chore(deepagents): add more test coverage to composite backend (#660)
fix(deepagents): composite backend grep implementation (#659)
Fix CVE-2025-68664 (#636)
make work with model string (#626)
release(deepagents): 0.3.1 (#608)
docs: fix documentation issues (#513)
fix(deepagents): strip trailing whitespace from subagent messages to prevent Anthropic API errors (#586)
fix(deepagents): Pass through runtime config to subagents (#602)
chore(deepagents): test write todos from sub-agents (#605)
fix(deepagents): exclude structured response from state update (#603)
feat: add ability to paste images in input (#555)
chore: bump minor version (#549)
feature(deepagents)!: add async implementations for backend, sandbox, filesystem (#504)
fix: fix docstring formatting errors in backends (#514)
chore(cli): add comprehensive testing for sandbox operations (#501)
feat(deepagents): use context window fractions for SummarizationMiddleware when available (#484)
chore(deepagents): add end to end test (#481)
release(deepagents, cli) (#477)
return strings in tools (#474)
truncate glob (#473)
fix(deepagents): fix type for file info (#471)
add file upload and download apis (#381)
fix(deepagents-cli): fix linting (broke CI) (#457)
fix(middleware): prevent silent corruption from Windows absolute paths (Issue #427) (#454)
Remove unnecessary dependencies from `deepagents` module (#429)
fix: use `request.override` instead of direct attribute overrides (#431)
Update README.md (#422)
release: deepagents 0.2.9, cli 0.0.9 (#411)
patch: remove resumable shell middleware (#410)
release (#388)
chore: finish migration into monorepo structure (#383)
feat: expose id on base abstraction (#382)
feat: sandbox protocol (#319)
chore: move BACKEND_TYPES to correct place (#351)
fix: Don't error when "subagent" does not exist. And add test for truncation logic (#343)
minor update (#302)
chore: inherit from protocol, update types (#291)
Truncate content sample (#287)
chore(deepagents): move protocol types (#286)
move deepagents to libs/deepagents (#257)

---

Thanks to our community contributors: @sydney-runkle, @BANG404, @kavishkartha05, @november-pain

## deepagents==0.5.0a3: deepagents==0.5.0a3

**Published**: 2026-04-01

Initial release
release(deepagents): 0.5.0a3 (#2385)
fix: plumb through generics for `create_deep_agent` (#2383)
fix(sdk): fix TypeError in async sub-agents (#2376)
fix(sdk): `last_updated_at` field doesn't account for task status changes (#2370)
fix: deprecate backend factories (#2360)
chore: bump pygments to 2.20.0 everywhere (GHSA-5239-wwwm-4pmq) (#2349)
fix(sdk): catch `UnicodeDecodeError` in `FilesystemBackend.read` (#2319)
fix(sdk): restore deprecated protocol return types (#2342)
docs: add threat model for deepagents monorepo (#1639)
fix(sdk): add new line after HEREDOC for edit inline sandbox (#2340)
chore(sdk): disable benchmark when not running benchmarks (#2338)
test(sdk): assert default toolruntime config in end-to-end test (#2324)
fix(sdk): fix offloading for state backend (#2266)
chore: bump requests (#2325)
chore(deps): bump cryptography from 46.0.5 to 46.0.6 in /libs/deepagents (#2292)
chore(deps): bump langchain-core from 1.2.21 to 1.2.22 in /libs/deepagents (#2291)
chore: sync lockfiles (#2279)
fix(sdk): update recursion limit (#2273)
chore(sdk): add end-to-end test for compaction tool (#2268)
chore(sdk): declare schema up front for remaining tools (#2264)
chore(sdk): speed up init for file system, summarization middleware (#2257)
fix(sdk): normalize CRLF line endings in `FilesystemBackend.edit()` (#2256)
test(sdk): add a test for invalid args into a tool (#2254)
chore(sdk): add all snapshots (#2253)
chore(sdk): add snapshot of tool descriptions (#2252)
fix(sdk): make created_at and modified_at NotRequired fields on FileData (#2248)
feat(sdk): evict large HumanMessages (#2183)
fix(sdk): bump recursion limit to 10_000 in deepagents and set agent name (#2194)
fix(sdk): route subagent model resolution to `resolve_model` (#2208)
feat(sdk,cli): add openrouter SDK attribution (#2205)
chore(sdk): minor clean up (#2186)
fix(sdk,cli): align error messages and clean up recent refactors (#2171)
refactor(sdk): type-only exception classification in `map_file_operation_error` (#2168)
fix(sdk): use file transfer instead of command strings for sandbox write/edit (#2117)
docs(sdk): improve `sandbox.py` docstrings and refactor read template (#2169)
docs(sdk,evals): fix docstring formatting and harbor grep literal flag (#2163)
release(deepagents): 0.5.0a2 (#2158)
release(deepagents): 0.5.0a1 (#2157)
feat(sdk,cli): add package version metadata to traces (#2129)
refactor(sdk): rename tools for async subgents (#2103)
feat(sdk): add timestamp tracking to `AsyncSubAgentJob` (#2071)
fix(sdk): overwrite `write` on LangSmithSandbox (#2097)
fix(sdk): update middleware order (#2070)
feat(sdk): add system prompt snapshot test with sync and async subagents (#2072)
chore(sdk): update langchain and langchain-anthropic deps (#2069)
chore(sdk): merge async subagents and subagents into single top level param (#2064)
feat(sdk): port `LangSmithSandbox` from CLI to SDK (#1983)
refactor(evals): consolidate eval suite into standalone `libs/evals` (#2032)
ci: fix evals dataclass (#2034)
ci: suppress pytest streaming output in CI (#2026)
feat(sdk): add tau2 LICENSE (#2025)
feat(sdk): add tau2 airline eval harness (#1987)
test(sdk): gather `MemoryAgentBench` CI subset (#1993)
test(sdk): add curated external benchmark evals (#2018)
test(sdk): add evals for llm judge, tool selection, followup quality, and multi-turn memory (#1838)
chore: promote `PLR6201` to safe-fix across all packages (#2000)
test(sdk): add wall-time benchmarks for `create_deep_agent` (#1944)
chore(deps): bump pyasn1 from 0.6.2 to 0.6.3 in /libs/deepagents (#1967)
chore(quickjs): add some unit tests and disable tests from running (#1962)
feat(sdk): rename backend methods (#1907)
test(sdk): update evals for relational tool usage (#1940)
test(sdk): add fixture for summarization tests (#1627)
feat(sdk): add async subagent middleware for remote LangGraph servers (#1758)
fix(sdk): simplify memory agent bench evals (#1873)
feat(sdk): update backend return types for ls, glob, grep (#1870)
fix(sdk): use Sequence instead of list for subagents parameter (#1905)
chore(sdk): increment version to 0.5 (#1908)
feat(sdk): update FileData and backend.read return type to support multimodal data (#1869)
chore(sdk,cli): make `langchain-anthropic` and `langchain-google-genai` explicit deps (#1886)
release(sdk): 0.4.11 (#1868)
chore(sdk): make `langsmith` explicit evals dep (#1867)
chore(sdk): add docs link to `LocalShellBackend` `virtual_mode` deprecation warning (#1866)
test(sdk): add `ChatBaseten` for evals (#1839)
feat(sdk): Add LangSmith integration metadata to deepagents (#1837)
fix(sdk): strip leading slash from glob patterns before matching (#1846)
feat(sdk): add MemoryAgentBench evaluation suite (#1807)
fix(sdk): accept all langsmith tracing env vars in evals conftest (#1847)
test(sdk): add 3 more evals for tool usage (longer trajectories) (#1840)
chore(sdk): add evals `README`, ensure tracing (#1834)
feat(sdk): add `subagent_model` param to `create_deep_agent` (#1369)
refactor(sdk): extract model resolution helpers into `_models` module (#1825)
release(sdk): prepare 0.4.10 patch release (#1795)
fix(daytona): fix execute implementation (#1756)
test(sdk): add memory evals (#1775)
release(deepagents): 0.4.9 (#1773)
feat(sdk): add prompt guidance for large tool results (#1763)
release(deepagents): 0.4.8 (#1764)
test(sdk): bump langsmith-sdk for fixes experiments (#1752)
feat(sdk): add factory function for summarization tool middleware (#1749)
feat(sdk): add solve_rate metric to evals reporter (#1711)
feat(cli): `--acp` mode to run CLI agent as ACP server (#1297)
test(sdk): add metadata for experiments (#1652)
test(sdk): reuse model fixture in summarization evals (#1697)
feat(sdk): add baseten-hosted models to evals workflow (#1682)
release(sdk): bump deepagents to 0.4.7 (#1688)
fix(deepagents): restore full routed path in write/edit results (#1681)
feat(infra): add fireworks as eval provider (#1684)
release(sdk): bump deepagents to 0.4.6 (#1677)
chore: bump lock file (#1674)
fix(sdk): extract text from all content blocks for large tool result eviction (#1673)
fix(sdk): enforce path boundaries in `CompositeBackend` routing (#1659)
refactor(sdk): split eval assertions into correctness and efficiency tiers (#1670)
test(sdk): remove an ambiguous eval test (#1661)
chore(sdk): add tool usage evals (#1637)
test(deepagents): fix one more file operation test (#1653)
test(sdk): update eval test to be a bit less ambiguous (#1643)
docs(sdk): middleware module docstring (#1620)
chore(sdk): expand eval matrix and fix model name access for groq (#1623)
release(deepagents): 0.4.5 (#1622)
chore(sdk): expand eval model matrix to 28 models across 7 providers (#1617)
chore: remove unnecessary `@pytest.mark.asyncio` decorators (#1616)
chore(sdk): update evals to use chat model instance  (#1614)
fix(sdk): make evals more robust across model output variations (#1608)
fix(infra): streamline evals workflow and summary (#1602)
docs(sdk): improve docstrings around summarization conditions (#1597)
chore(sdk): add json report to evals (#1594)
chore(sdk,cli): switch `claude-sonnet-4-5-20250929` -> `claude-sonnet-4-6` (#1590)
feat(cli): `/compact` command (#1579)
chore: standardize makefile type targets/ add type CI check (#1581)
ci(sdk): skip some evals (#1580)
docs(sdk): rename 'prompt' to 'system_prompt' in subagent keys (#1578)
docs(sdk): docstring fixes for `summarization.py` (#1568)
chore(sdk): remove unused base_path alias in skills.py (#1543)
chore(deps): bump the pip-dependencies group across 8 directories with 17 updates (#1564)
fix(sdk,cli,deps): support `timeout=0` for sandbox `execute()` (#1558)
fix: Potential fixes for 2 code quality findings (#1534)
fix: Variable defined multiple times (#1536)
feat(cli,sdk): compaction hook (#1420)
chore(deps): bump the pip-dependencies group across 8 directories with 19 updates (#1491)
release(deepagents): 0.4.4 (#1519)
fix(sdk): use consistent path stripping in CompositeBackend grep and glob (#1504)
fix(sdk): add timeout to glob in FilesystemMiddleware (#1508)
fix(sdk): validate tool_call_id before subagent invocation (#1506)
fix(sdk): bundle read template params into single base64 payload (#1500)
fix(deepagents): preserve ToolMessage artifact when evicting large outputs (#1482)
fix(sdk): fix glob matching with ** in _python_search fallback (#1350)
fix(sdk): sanitize paths in BaseSandbox ls_info and read templates (#1484)
docs(sdk): fix SkillsMiddleware.before_agent docstring to reflect caching behavior (#1495)
perf(sdk): parallelize summarization offload and LLM summary generation (#1488)
chore(sdk): add coverage to Makefile (#1493)
perf(sdk): batch memory source loading into a single download_files call (#1490)
release(deepagents): 0.4.3 (#1465)
fix(sdk): guard timeout forwarding for older backend packages (#1461)
fix(sdk): correct imports and mock inheritance in filesystem middleware tests (#1464)
fix(sdk): warn on virtual mode (#1462)
chore(sdk): add more eval test cases (#1452)
test(deepagents): add evaluation tests for skills (#1429)
fix(deepagents): Fix Memory prompt guidelines that could lead to wrong actions (#1448)
test(sdk): add smoke test for system prompt with memory and skills (#1430)
chore(deepagents): bump min version for langchain-anthropic (#1431)
feat(deepagents): add evaluation tests for agent memory (#1415)
chore(sdk): adapt integration tests to evals framework (#1426)
feat(sdk): add per-command `timeout` override to `execute()` (#1154)
chore: auto-generate makefile help from target annotations (#1417)
chore(sdk): add more evals (#1404)
chore(sdk): minor updates to system message (#1367)
chore(sdk): add model parameterization to evals (#1408)
chore: revert SDK version following yank (#1407)
chore(sdk): add simple eval scaffolding (#1400)
refactor(sdk): add logging to silent path skips, rename `validate_path` (#1370)
fix(cli,sdk): harden path hardening (#918)
chore(sdk): add smoke tests for system message (#1363)
feat(sdk): enable type checking in deepagents and resolve most linting issues (#991)
chore(sdk): move some integration tests into unit tests (#1330)
revert(sdk): reimplement skill loading via `skill` tool calling (#1328)
fix(sdk): missing `_validate_path()` on `Glob` tool's `path` parameter allows directory traversal (#1320)
fix: Path Traversal via Unsanitized Glob Pattern in glob_info() Bypasses Virtual Mode Sandbox (#1322)
feat(sdk): add base agent prompt (#1314)
release(sdk): 0.4.2 (#1312)
feat(sdk): reimplement skill loading via `skill` tool calling (#1306)
chore: rollback uv workspace migration, restore per-package lockfiles (#1278)
release(sdk): 0.4.1 (#1269)
chore: migrate to uv workspace (#1264)
feat(sdk): return native image content blocks from read_file (#1163)
chore(deps): bump the pip-dependencies group across 8 directories with 9 updates (#1252)
refactor(sdk): use public `SummarizationMiddleware` middleware (#1241)
chore(deps): bump cryptography from 46.0.3 to 46.0.5 in /libs/deepagents (#1246)
chore: rename `master` to `main` (#984)
release(sdk): 0.4.0 (#1236)
release(deepagents): 0.4 (#1234)
chore(sdk): add support for `,` in allowed-tools, fail gently for bullet list (#1235)
fix(sdk): relax skills parsing for allowed tools (#1232)
chore(deps): bump the pip-dependencies group across 8 directories with 27 updates (#1230)
chore(sdk)!: move sandbox provider back to cli (#1226)
chore(deps): bump the uv group across 3 directories with 1 update (#1216)
refactor(sdk): move function-level test imports out to top (#1168)
fix(sdk): harden skills metadata parsing, improve spec compliance (#1189)
chore(deps): bump the pip-dependencies group across 3 directories with 5 updates (#1183)
style: update brand names (#1180)
release(sdk): deepagents 0.3.12 (#1175)
feat(sdk): refactor namespace gen for StoreBackend (#1169)
revert(deepagents): refactor summarization middleware (#1172)
fix(deepagents): refactor summarization middleware (#1138)
fix(sdk): add explicit `NotImplementedError` to protocol method bodies (#1152)
refactor(cli): reorder property -> method order in `SandboxBackendProtocol` (#1153)
feat(sdk): add sandbox provider exceptions (#1108)
release(sdk): deepagents 0.3.11 (#1078)
feat(sdk): subagent skills, middleware refactor (#1041)
fix(sdk): add newlines in tool result message for large outputs (#1053)
release(sdk): 0.3.10 (#1044)
fix(sdk): grep should perform literal search instead of regex (#975)
feat(sdk): sandbox provider interface (#900)
fix(sdk): handle exact file paths in grep and glob operations (#1017)
chore: correct brand name (#1025)
fix: add py.typed to deepagents (#1024)
fix(sdk): return error message instead of raising ValueError for invalid paths (#994)
fix(deepagents): prevent state merge error in parallel sub-agents (#954)
fix(infra): change `release-please` component (#1002)
chore: nit versions (#997)
chore: enrich `pyproject.toml` files (#996)
chore(sdk,cli): add `VERSION` (#983)
feat(sdk): add LocalShellBackend (#930)
chore: clean up `README` files (#980)
chore(deepagents): add sandbox tests to sdk (#898)
fix(sdk): string interpolation in BaseSandbox write/edit tools  (#955)
feat(cli): custom subagents (#916)
release(deepagents): 0.3.9 (#944)
fix(sdk): summarization offloading (#920)
refactor: filesystem middleware (#928)
chore(deps): bump the uv group across 3 directories with 6 updates (#905)
test(sdk): add unit test for handling large single-line file bug (#813)
feat(deepagents): truncate middle of content instead of end on tool response eviction (#901)
feat(deepagents): truncate tool messages from read_file (#897)
fix(sdk,acp,harbor): don't allow relative imports (#882)
fix(sdk): handle large payloads and headless container execution (#872)
chore: update `Makefile` targets, add pre-commit hooks (#790)
release(sdk): bump version (#879)
fix(sdk): make sure that tool truncation applies to execute (#547)
test(sdk): use unique `thread_id` for summarization test configuration (#871)
fix(sdk): don't dedent summarization prompt (#870)
feat(deepagents): truncate old write / edit calls in message history (#806)
release: patch release 0.3.7 (#869)
chore(deepagents): add end to end tests to confirm file reducer working properly in state backend (#754)
chore: improve filesystem and subagents tool descriptions (#807)
docs(SDK): clarify usage of file system backend (#850)
nit: standardize naming (#849)
docs(sdk): `FilesystemBackend` refs fixes (#791)
feat: show allowed tools for each skill in skill list (#837)
fix(sdk):  FilesystemMiddleware forward 'name' attribute in large_tool_result from the original tool msg (#825)
docs(sdk): docstring formatting nits (#824)
feat: summarization offloading (#742)
Bump version to 0.3.7a1 (#817)
Add Async ops to Store Backend (#816)
chore(deepagents): add tests for grep in end to end tests (#805)
chore(deepagents): bump langchain in lock file (#800)
chore(deps): bump the uv group across 5 directories with 1 update (#811)
fix(deepagents): respect continuation markers when reading files (#809)
fix(infra): exclude `build/` from typechecking (#808)
feat: support `SystemMessage` for parity w/ `create_agent` (#803)
chore(deepagnets): end to end tests for agent writing editing files (#804)
fix(sdk): BaseSandbox.ls_info() to return absolute paths (#797)
fix(deepagents): truncate lines on read (#784)
chore(deps): bump the uv group across 3 directories with 3 updates (#796)
fix: refinements for `test_summarization` (#786)
docs: fix old URLs (#787)
docs: add testing readme (#788)
fix: added error catching for file operations without permissions (#734)
docs(deepagents): update subagent spec (#785)
chore(deepagents): add mini eval for summarization (#751)
docs(sdk): improve `FileSystemBackend` ref docs (#783)
chore: add tests for config, context, metadata propagation (#776)
fix: import rules (#763)
fix(deepagents): throw a clear exception message when 'messages' key missing from the output of the subagent (#678)
release: deepagents 0.3.6 (#752)
chore: automatically sort imports (#740)
fix: no f string needed (#750)
feat: add agent name when creating subagents (#735)
feat(cli): inject local context into system prompt via `LocalContextMiddleware`
chore: update twitter URL (#727)
chore: CR on docstrings/readme (#722)
minor release(deepagents): bump version to 0.3.5 (#695)
Port SDK Memory to CLI (#691)
chore(deepagents): turn on strict linting and add ratchet (#690)
chore(deepagents): add tests for todos middleware (#667)
fix(deepagents):  fix content block handling in filesystem middleware tool result eviction (#674)
Minor release memory bump (#689)
feat: update memory prompt to be more barebones (#685)
improvements to README, reference docs (#688)
update version bounds (#687)
Deepagents release minor (#683)
fix(deepagents): make memory permissive if AGENTS.md not found (#682)
release(deepagents): release 0.3.2 (#680)
chore(deepagents): make memory strict if AGENTS.md not found (#673)
fix(deepagents): better async support in skills, and propagate runnable config (#672)
chore: remove older integration tests for memory (#670)
feature(deepagents): add memory (#646)
feat(deepagents): add skills to sdk (#591)
chore(deepagent): add docs to composite backend (#666)
chore(deepagents): add more test coverage to composite backend (#660)
fix(deepagents): composite backend grep implementation (#659)
Fix CVE-2025-68664 (#636)
make work with model string (#626)
release(deepagents): 0.3.1 (#608)
docs: fix documentation issues (#513)
fix(deepagents): strip trailing whitespace from subagent messages to prevent Anthropic API errors (#586)
fix(deepagents): Pass through runtime config to subagents (#602)
chore(deepagents): test write todos from sub-agents (#605)
fix(deepagents): exclude structured response from state update (#603)
feat: add ability to paste images in input (#555)
chore: bump minor version (#549)
feature(deepagents)!: add async implementations for backend, sandbox, filesystem (#504)
fix: fix docstring formatting errors in backends (#514)
chore(cli): add comprehensive testing for sandbox operations (#501)
feat(deepagents): use context window fractions for SummarizationMiddleware when available (#484)
chore(deepagents): add end to end test (#481)
release(deepagents, cli) (#477)
return strings in tools (#474)
truncate glob (#473)
fix(deepagents): fix type for file info (#471)
add file upload and download apis (#381)
fix(deepagents-cli): fix linting (broke CI) (#457)
fix(middleware): prevent silent corruption from Windows absolute paths (Issue #427) (#454)
Remove unnecessary dependencies from `deepagents` module (#429)
fix: use `request.override` instead of direct attribute overrides (#431)
Update README.md (#422)
release: deepagents 0.2.9, cli 0.0.9 (#411)
patch: remove resumable shell middleware (#410)
release (#388)
chore: finish migration into monorepo structure (#383)
feat: expose id on base abstraction (#382)
feat: sandbox protocol (#319)
chore: move BACKEND_TYPES to correct place (#351)
fix: Don't error when "subagent" does not exist. And add test for truncation logic (#343)
minor update (#302)
chore: inherit from protocol, update types (#291)
Truncate content sample (#287)
chore(deepagents): move protocol types (#286)
move deepagents to libs/deepagents (#257)

---

Thanks to our community contributors: @sydney-runkle, @BANG404, @naga-k, @november-pain, @bracesproul, @eyurtsev

## deepagents==0.5.0a2: deepagents==0.5.0a2

**Published**: 2026-03-23

Initial release
release(deepagents): 0.5.0a2 (#2158)
release(deepagents): 0.5.0a1 (#2157)
feat(sdk,cli): add package version metadata to traces (#2129)
refactor(sdk): rename tools for async subgents (#2103)
feat(sdk): add timestamp tracking to `AsyncSubAgentJob` (#2071)
fix(sdk): overwrite `write` on LangSmithSandbox (#2097)
fix(sdk): update middleware order (#2070)
feat(sdk): add system prompt snapshot test with sync and async subagents (#2072)
chore(sdk): update langchain and langchain-anthropic deps (#2069)
chore(sdk): merge async subagents and subagents into single top level param (#2064)
feat(sdk): port `LangSmithSandbox` from CLI to SDK (#1983)
refactor(evals): consolidate eval suite into standalone `libs/evals` (#2032)
ci: fix evals dataclass (#2034)
ci: suppress pytest streaming output in CI (#2026)
feat(sdk): add tau2 LICENSE (#2025)
feat(sdk): add tau2 airline eval harness (#1987)
test(sdk): gather `MemoryAgentBench` CI subset (#1993)
test(sdk): add curated external benchmark evals (#2018)
test(sdk): add evals for llm judge, tool selection, followup quality, and multi-turn memory (#1838)
chore: promote `PLR6201` to safe-fix across all packages (#2000)
test(sdk): add wall-time benchmarks for `create_deep_agent` (#1944)
chore(deps): bump pyasn1 from 0.6.2 to 0.6.3 in /libs/deepagents (#1967)
chore(quickjs): add some unit tests and disable tests from running (#1962)
feat(sdk): rename backend methods (#1907)
test(sdk): update evals for relational tool usage (#1940)
test(sdk): add fixture for summarization tests (#1627)
feat(sdk): add async subagent middleware for remote LangGraph servers (#1758)
fix(sdk): simplify memory agent bench evals (#1873)
feat(sdk): update backend return types for ls, glob, grep (#1870)
fix(sdk): use Sequence instead of list for subagents parameter (#1905)
chore(sdk): increment version to 0.5 (#1908)
feat(sdk): update FileData and backend.read return type to support multimodal data (#1869)
chore(sdk,cli): make `langchain-anthropic` and `langchain-google-genai` explicit deps (#1886)
release(sdk): 0.4.11 (#1868)
chore(sdk): make `langsmith` explicit evals dep (#1867)
chore(sdk): add docs link to `LocalShellBackend` `virtual_mode` deprecation warning (#1866)
test(sdk): add `ChatBaseten` for evals (#1839)
feat(sdk): Add LangSmith integration metadata to deepagents (#1837)
fix(sdk): strip leading slash from glob patterns before matching (#1846)
feat(sdk): add MemoryAgentBench evaluation suite (#1807)
fix(sdk): accept all langsmith tracing env vars in evals conftest (#1847)
test(sdk): add 3 more evals for tool usage (longer trajectories) (#1840)
chore(sdk): add evals `README`, ensure tracing (#1834)
feat(sdk): add `subagent_model` param to `create_deep_agent` (#1369)
refactor(sdk): extract model resolution helpers into `_models` module (#1825)
release(sdk): prepare 0.4.10 patch release (#1795)
fix(daytona): fix execute implementation (#1756)
test(sdk): add memory evals (#1775)
release(deepagents): 0.4.9 (#1773)
feat(sdk): add prompt guidance for large tool results (#1763)
release(deepagents): 0.4.8 (#1764)
test(sdk): bump langsmith-sdk for fixes experiments (#1752)
feat(sdk): add factory function for summarization tool middleware (#1749)
feat(sdk): add solve_rate metric to evals reporter (#1711)
feat(cli): `--acp` mode to run CLI agent as ACP server (#1297)
test(sdk): add metadata for experiments (#1652)
test(sdk): reuse model fixture in summarization evals (#1697)
feat(sdk): add baseten-hosted models to evals workflow (#1682)
release(sdk): bump deepagents to 0.4.7 (#1688)
fix(deepagents): restore full routed path in write/edit results (#1681)
feat(infra): add fireworks as eval provider (#1684)
release(sdk): bump deepagents to 0.4.6 (#1677)
chore: bump lock file (#1674)
fix(sdk): extract text from all content blocks for large tool result eviction (#1673)
fix(sdk): enforce path boundaries in `CompositeBackend` routing (#1659)
refactor(sdk): split eval assertions into correctness and efficiency tiers (#1670)
test(sdk): remove an ambiguous eval test (#1661)
chore(sdk): add tool usage evals (#1637)
test(deepagents): fix one more file operation test (#1653)
test(sdk): update eval test to be a bit less ambiguous (#1643)
docs(sdk): middleware module docstring (#1620)
chore(sdk): expand eval matrix and fix model name access for groq (#1623)
release(deepagents): 0.4.5 (#1622)
chore(sdk): expand eval model matrix to 28 models across 7 providers (#1617)
chore: remove unnecessary `@pytest.mark.asyncio` decorators (#1616)
chore(sdk): update evals to use chat model instance  (#1614)
fix(sdk): make evals more robust across model output variations (#1608)
fix(infra): streamline evals workflow and summary (#1602)
docs(sdk): improve docstrings around summarization conditions (#1597)
chore(sdk): add json report to evals (#1594)
chore(sdk,cli): switch `claude-sonnet-4-5-20250929` -> `claude-sonnet-4-6` (#1590)
feat(cli): `/compact` command (#1579)
chore: standardize makefile type targets/ add type CI check (#1581)
ci(sdk): skip some evals (#1580)
docs(sdk): rename 'prompt' to 'system_prompt' in subagent keys (#1578)
docs(sdk): docstring fixes for `summarization.py` (#1568)
chore(sdk): remove unused base_path alias in skills.py (#1543)
chore(deps): bump the pip-dependencies group across 8 directories with 17 updates (#1564)
fix(sdk,cli,deps): support `timeout=0` for sandbox `execute()` (#1558)
fix: Potential fixes for 2 code quality findings (#1534)
fix: Variable defined multiple times (#1536)
feat(cli,sdk): compaction hook (#1420)
chore(deps): bump the pip-dependencies group across 8 directories with 19 updates (#1491)
release(deepagents): 0.4.4 (#1519)
fix(sdk): use consistent path stripping in CompositeBackend grep and glob (#1504)
fix(sdk): add timeout to glob in FilesystemMiddleware (#1508)
fix(sdk): validate tool_call_id before subagent invocation (#1506)
fix(sdk): bundle read template params into single base64 payload (#1500)
fix(deepagents): preserve ToolMessage artifact when evicting large outputs (#1482)
fix(sdk): fix glob matching with ** in _python_search fallback (#1350)
fix(sdk): sanitize paths in BaseSandbox ls_info and read templates (#1484)
docs(sdk): fix SkillsMiddleware.before_agent docstring to reflect caching behavior (#1495)
perf(sdk): parallelize summarization offload and LLM summary generation (#1488)
chore(sdk): add coverage to Makefile (#1493)
perf(sdk): batch memory source loading into a single download_files call (#1490)
release(deepagents): 0.4.3 (#1465)
fix(sdk): guard timeout forwarding for older backend packages (#1461)
fix(sdk): correct imports and mock inheritance in filesystem middleware tests (#1464)
fix(sdk): warn on virtual mode (#1462)
chore(sdk): add more eval test cases (#1452)
test(deepagents): add evaluation tests for skills (#1429)
fix(deepagents): Fix Memory prompt guidelines that could lead to wrong actions (#1448)
test(sdk): add smoke test for system prompt with memory and skills (#1430)
chore(deepagents): bump min version for langchain-anthropic (#1431)
feat(deepagents): add evaluation tests for agent memory (#1415)
chore(sdk): adapt integration tests to evals framework (#1426)
feat(sdk): add per-command `timeout` override to `execute()` (#1154)
chore: auto-generate makefile help from target annotations (#1417)
chore(sdk): add more evals (#1404)
chore(sdk): minor updates to system message (#1367)
chore(sdk): add model parameterization to evals (#1408)
chore: revert SDK version following yank (#1407)
chore(sdk): add simple eval scaffolding (#1400)
refactor(sdk): add logging to silent path skips, rename `validate_path` (#1370)
fix(cli,sdk): harden path hardening (#918)
chore(sdk): add smoke tests for system message (#1363)
feat(sdk): enable type checking in deepagents and resolve most linting issues (#991)
chore(sdk): move some integration tests into unit tests (#1330)
revert(sdk): reimplement skill loading via `skill` tool calling (#1328)
fix(sdk): missing `_validate_path()` on `Glob` tool's `path` parameter allows directory traversal (#1320)
fix: Path Traversal via Unsanitized Glob Pattern in glob_info() Bypasses Virtual Mode Sandbox (#1322)
feat(sdk): add base agent prompt (#1314)
release(sdk): 0.4.2 (#1312)
feat(sdk): reimplement skill loading via `skill` tool calling (#1306)
chore: rollback uv workspace migration, restore per-package lockfiles (#1278)
release(sdk): 0.4.1 (#1269)
chore: migrate to uv workspace (#1264)
feat(sdk): return native image content blocks from read_file (#1163)
chore(deps): bump the pip-dependencies group across 8 directories with 9 updates (#1252)
refactor(sdk): use public `SummarizationMiddleware` middleware (#1241)
chore(deps): bump cryptography from 46.0.3 to 46.0.5 in /libs/deepagents (#1246)
chore: rename `master` to `main` (#984)
release(sdk): 0.4.0 (#1236)
release(deepagents): 0.4 (#1234)
chore(sdk): add support for `,` in allowed-tools, fail gently for bullet list (#1235)
fix(sdk): relax skills parsing for allowed tools (#1232)
chore(deps): bump the pip-dependencies group across 8 directories with 27 updates (#1230)
chore(sdk)!: move sandbox provider back to cli (#1226)
chore(deps): bump the uv group across 3 directories with 1 update (#1216)
refactor(sdk): move function-level test imports out to top (#1168)
fix(sdk): harden skills metadata parsing, improve spec compliance (#1189)
chore(deps): bump the pip-dependencies group across 3 directories with 5 updates (#1183)
style: update brand names (#1180)
release(sdk): deepagents 0.3.12 (#1175)
feat(sdk): refactor namespace gen for StoreBackend (#1169)
revert(deepagents): refactor summarization middleware (#1172)
fix(deepagents): refactor summarization middleware (#1138)
fix(sdk): add explicit `NotImplementedError` to protocol method bodies (#1152)
refactor(cli): reorder property -> method order in `SandboxBackendProtocol` (#1153)
feat(sdk): add sandbox provider exceptions (#1108)
release(sdk): deepagents 0.3.11 (#1078)
feat(sdk): subagent skills, middleware refactor (#1041)
fix(sdk): add newlines in tool result message for large outputs (#1053)
release(sdk): 0.3.10 (#1044)
fix(sdk): grep should perform literal search instead of regex (#975)
feat(sdk): sandbox provider interface (#900)
fix(sdk): handle exact file paths in grep and glob operations (#1017)
chore: correct brand name (#1025)
fix: add py.typed to deepagents (#1024)
fix(sdk): return error message instead of raising ValueError for invalid paths (#994)
fix(deepagents): prevent state merge error in parallel sub-agents (#954)
fix(infra): change `release-please` component (#1002)
chore: nit versions (#997)
chore: enrich `pyproject.toml` files (#996)
chore(sdk,cli): add `VERSION` (#983)
feat(sdk): add LocalShellBackend (#930)
chore: clean up `README` files (#980)
chore(deepagents): add sandbox tests to sdk (#898)
fix(sdk): string interpolation in BaseSandbox write/edit tools  (#955)
feat(cli): custom subagents (#916)
release(deepagents): 0.3.9 (#944)
fix(sdk): summarization offloading (#920)
refactor: filesystem middleware (#928)
chore(deps): bump the uv group across 3 directories with 6 updates (#905)
test(sdk): add unit test for handling large single-line file bug (#813)
feat(deepagents): truncate middle of content instead of end on tool response eviction (#901)
feat(deepagents): truncate tool messages from read_file (#897)
fix(sdk,acp,harbor): don't allow relative imports (#882)
fix(sdk): handle large payloads and headless container execution (#872)
chore: update `Makefile` targets, add pre-commit hooks (#790)
release(sdk): bump version (#879)
fix(sdk): make sure that tool truncation applies to execute (#547)
test(sdk): use unique `thread_id` for summarization test configuration (#871)
fix(sdk): don't dedent summarization prompt (#870)
feat(deepagents): truncate old write / edit calls in message history (#806)
release: patch release 0.3.7 (#869)
chore(deepagents): add end to end tests to confirm file reducer working properly in state backend (#754)
chore: improve filesystem and subagents tool descriptions (#807)
docs(SDK): clarify usage of file system backend (#850)
nit: standardize naming (#849)
docs(sdk): `FilesystemBackend` refs fixes (#791)
feat: show allowed tools for each skill in skill list (#837)
fix(sdk):  FilesystemMiddleware forward 'name' attribute in large_tool_result from the original tool msg (#825)
docs(sdk): docstring formatting nits (#824)
feat: summarization offloading (#742)
Bump version to 0.3.7a1 (#817)
Add Async ops to Store Backend (#816)
chore(deepagents): add tests for grep in end to end tests (#805)
chore(deepagents): bump langchain in lock file (#800)
chore(deps): bump the uv group across 5 directories with 1 update (#811)
fix(deepagents): respect continuation markers when reading files (#809)
fix(infra): exclude `build/` from typechecking (#808)
feat: support `SystemMessage` for parity w/ `create_agent` (#803)
chore(deepagnets): end to end tests for agent writing editing files (#804)
fix(sdk): BaseSandbox.ls_info() to return absolute paths (#797)
fix(deepagents): truncate lines on read (#784)
chore(deps): bump the uv group across 3 directories with 3 updates (#796)
fix: refinements for `test_summarization` (#786)
docs: fix old URLs (#787)
docs: add testing readme (#788)
fix: added error catching for file operations without permissions (#734)
docs(deepagents): update subagent spec (#785)
chore(deepagents): add mini eval for summarization (#751)
docs(sdk): improve `FileSystemBackend` ref docs (#783)
chore: add tests for config, context, metadata propagation (#776)
fix: import rules (#763)
fix(deepagents): throw a clear exception message when 'messages' key missing from the output of the subagent (#678)
release: deepagents 0.3.6 (#752)
chore: automatically sort imports (#740)
fix: no f string needed (#750)
feat: add agent name when creating subagents (#735)
feat(cli): inject local context into system prompt via `LocalContextMiddleware`
chore: update twitter URL (#727)
chore: CR on docstrings/readme (#722)
minor release(deepagents): bump version to 0.3.5 (#695)
Port SDK Memory to CLI (#691)
chore(deepagents): turn on strict linting and add ratchet (#690)
chore(deepagents): add tests for todos middleware (#667)
fix(deepagents):  fix content block handling in filesystem middleware tool result eviction (#674)
Minor release memory bump (#689)
feat: update memory prompt to be more barebones (#685)
improvements to README, reference docs (#688)
update version bounds (#687)
Deepagents release minor (#683)
fix(deepagents): make memory permissive if AGENTS.md not found (#682)
release(deepagents): release 0.3.2 (#680)
chore(deepagents): make memory strict if AGENTS.md not found (#673)
fix(deepagents): better async support in skills, and propagate runnable config (#672)
chore: remove older integration tests for memory (#670)
feature(deepagents): add memory (#646)
feat(deepagents): add skills to sdk (#591)
chore(deepagent): add docs to composite backend (#666)
chore(deepagents): add more test coverage to composite backend (#660)
fix(deepagents): composite backend grep implementation (#659)
Fix CVE-2025-68664 (#636)
make work with model string (#626)
release(deepagents): 0.3.1 (#608)
docs: fix documentation issues (#513)
fix(deepagents): strip trailing whitespace from subagent messages to prevent Anthropic API errors (#586)
fix(deepagents): Pass through runtime config to subagents (#602)
chore(deepagents): test write todos from sub-agents (#605)
fix(deepagents): exclude structured response from state update (#603)
feat: add ability to paste images in input (#555)
chore: bump minor version (#549)
feature(deepagents)!: add async implementations for backend, sandbox, filesystem (#504)
fix: fix docstring formatting errors in backends (#514)
chore(cli): add comprehensive testing for sandbox operations (#501)
feat(deepagents): use context window fractions for SummarizationMiddleware when available (#484)
chore(deepagents): add end to end test (#481)
release(deepagents, cli) (#477)
return strings in tools (#474)
truncate glob (#473)
fix(deepagents): fix type for file info (#471)
add file upload and download apis (#381)
fix(deepagents-cli): fix linting (broke CI) (#457)
fix(middleware): prevent silent corruption from Windows absolute paths (Issue #427) (#454)
Remove unnecessary dependencies from `deepagents` module (#429)
fix: use `request.override` instead of direct attribute overrides (#431)
Update README.md (#422)
release: deepagents 0.2.9, cli 0.0.9 (#411)
patch: remove resumable shell middleware (#410)
release (#388)
chore: finish migration into monorepo structure (#383)
feat: expose id on base abstraction (#382)
feat: sandbox protocol (#319)
chore: move BACKEND_TYPES to correct place (#351)
fix: Don't error when "subagent" does not exist. And add test for truncation logic (#343)
minor update (#302)
chore: inherit from protocol, update types (#291)
Truncate content sample (#287)
chore(deepagents): move protocol types (#286)
move deepagents to libs/deepagents (#257)

---

Thanks to our community contributors: @dotuananh0712, @sydney-runkle, @naga-k, @november-pain, @bracesproul, @AdemBoukhris457, @AlexPapadakis, @eyurtsev, @weiguangli-io, @mdrxy

## deepagents==0.5.0a1: deepagents==0.5.0a1

**Published**: 2026-03-23

Initial release
release(deepagents): 0.5.0a1 (#2157)
feat(sdk,cli): add package version metadata to traces (#2129)
refactor(sdk): rename tools for async subgents (#2103)
feat(sdk): add timestamp tracking to `AsyncSubAgentJob` (#2071)
fix(sdk): overwrite `write` on LangSmithSandbox (#2097)
fix(sdk): update middleware order (#2070)
feat(sdk): add system prompt snapshot test with sync and async subagents (#2072)
chore(sdk): update langchain and langchain-anthropic deps (#2069)
chore(sdk): merge async subagents and subagents into single top level param (#2064)
feat(sdk): port `LangSmithSandbox` from CLI to SDK (#1983)
refactor(evals): consolidate eval suite into standalone `libs/evals` (#2032)
ci: fix evals dataclass (#2034)
ci: suppress pytest streaming output in CI (#2026)
feat(sdk): add tau2 LICENSE (#2025)
feat(sdk): add tau2 airline eval harness (#1987)
test(sdk): gather `MemoryAgentBench` CI subset (#1993)
test(sdk): add curated external benchmark evals (#2018)
test(sdk): add evals for llm judge, tool selection, followup quality, and multi-turn memory (#1838)
chore: promote `PLR6201` to safe-fix across all packages (#2000)
test(sdk): add wall-time benchmarks for `create_deep_agent` (#1944)
chore(deps): bump pyasn1 from 0.6.2 to 0.6.3 in /libs/deepagents (#1967)
chore(quickjs): add some unit tests and disable tests from running (#1962)
feat(sdk): rename backend methods (#1907)
test(sdk): update evals for relational tool usage (#1940)
test(sdk): add fixture for summarization tests (#1627)
feat(sdk): add async subagent middleware for remote LangGraph servers (#1758)
fix(sdk): simplify memory agent bench evals (#1873)
feat(sdk): update backend return types for ls, glob, grep (#1870)
fix(sdk): use Sequence instead of list for subagents parameter (#1905)
chore(sdk): increment version to 0.5 (#1908)
feat(sdk): update FileData and backend.read return type to support multimodal data (#1869)
chore(sdk,cli): make `langchain-anthropic` and `langchain-google-genai` explicit deps (#1886)
release(sdk): 0.4.11 (#1868)
chore(sdk): make `langsmith` explicit evals dep (#1867)
chore(sdk): add docs link to `LocalShellBackend` `virtual_mode` deprecation warning (#1866)
test(sdk): add `ChatBaseten` for evals (#1839)
feat(sdk): Add LangSmith integration metadata to deepagents (#1837)
fix(sdk): strip leading slash from glob patterns before matching (#1846)
feat(sdk): add MemoryAgentBench evaluation suite (#1807)
fix(sdk): accept all langsmith tracing env vars in evals conftest (#1847)
test(sdk): add 3 more evals for tool usage (longer trajectories) (#1840)
chore(sdk): add evals `README`, ensure tracing (#1834)
feat(sdk): add `subagent_model` param to `create_deep_agent` (#1369)
refactor(sdk): extract model resolution helpers into `_models` module (#1825)
release(sdk): prepare 0.4.10 patch release (#1795)
fix(daytona): fix execute implementation (#1756)
test(sdk): add memory evals (#1775)
release(deepagents): 0.4.9 (#1773)
feat(sdk): add prompt guidance for large tool results (#1763)
release(deepagents): 0.4.8 (#1764)
test(sdk): bump langsmith-sdk for fixes experiments (#1752)
feat(sdk): add factory function for summarization tool middleware (#1749)
feat(sdk): add solve_rate metric to evals reporter (#1711)
feat(cli): `--acp` mode to run CLI agent as ACP server (#1297)
test(sdk): add metadata for experiments (#1652)
test(sdk): reuse model fixture in summarization evals (#1697)
feat(sdk): add baseten-hosted models to evals workflow (#1682)
release(sdk): bump deepagents to 0.4.7 (#1688)
fix(deepagents): restore full routed path in write/edit results (#1681)
feat(infra): add fireworks as eval provider (#1684)
release(sdk): bump deepagents to 0.4.6 (#1677)
chore: bump lock file (#1674)
fix(sdk): extract text from all content blocks for large tool result eviction (#1673)
fix(sdk): enforce path boundaries in `CompositeBackend` routing (#1659)
refactor(sdk): split eval assertions into correctness and efficiency tiers (#1670)
test(sdk): remove an ambiguous eval test (#1661)
chore(sdk): add tool usage evals (#1637)
test(deepagents): fix one more file operation test (#1653)
test(sdk): update eval test to be a bit less ambiguous (#1643)
docs(sdk): middleware module docstring (#1620)
chore(sdk): expand eval matrix and fix model name access for groq (#1623)
release(deepagents): 0.4.5 (#1622)
chore(sdk): expand eval model matrix to 28 models across 7 providers (#1617)
chore: remove unnecessary `@pytest.mark.asyncio` decorators (#1616)
chore(sdk): update evals to use chat model instance  (#1614)
fix(sdk): make evals more robust across model output variations (#1608)
fix(infra): streamline evals workflow and summary (#1602)
docs(sdk): improve docstrings around summarization conditions (#1597)
chore(sdk): add json report to evals (#1594)
chore(sdk,cli): switch `claude-sonnet-4-5-20250929` -> `claude-sonnet-4-6` (#1590)
feat(cli): `/compact` command (#1579)
chore: standardize makefile type targets/ add type CI check (#1581)
ci(sdk): skip some evals (#1580)
docs(sdk): rename 'prompt' to 'system_prompt' in subagent keys (#1578)
docs(sdk): docstring fixes for `summarization.py` (#1568)
chore(sdk): remove unused base_path alias in skills.py (#1543)
chore(deps): bump the pip-dependencies group across 8 directories with 17 updates (#1564)
fix(sdk,cli,deps): support `timeout=0` for sandbox `execute()` (#1558)
fix: Potential fixes for 2 code quality findings (#1534)
fix: Variable defined multiple times (#1536)
feat(cli,sdk): compaction hook (#1420)
chore(deps): bump the pip-dependencies group across 8 directories with 19 updates (#1491)
release(deepagents): 0.4.4 (#1519)
fix(sdk): use consistent path stripping in CompositeBackend grep and glob (#1504)
fix(sdk): add timeout to glob in FilesystemMiddleware (#1508)
fix(sdk): validate tool_call_id before subagent invocation (#1506)
fix(sdk): bundle read template params into single base64 payload (#1500)
fix(deepagents): preserve ToolMessage artifact when evicting large outputs (#1482)
fix(sdk): fix glob matching with ** in _python_search fallback (#1350)
fix(sdk): sanitize paths in BaseSandbox ls_info and read templates (#1484)
docs(sdk): fix SkillsMiddleware.before_agent docstring to reflect caching behavior (#1495)
perf(sdk): parallelize summarization offload and LLM summary generation (#1488)
chore(sdk): add coverage to Makefile (#1493)
perf(sdk): batch memory source loading into a single download_files call (#1490)
release(deepagents): 0.4.3 (#1465)
fix(sdk): guard timeout forwarding for older backend packages (#1461)
fix(sdk): correct imports and mock inheritance in filesystem middleware tests (#1464)
fix(sdk): warn on virtual mode (#1462)
chore(sdk): add more eval test cases (#1452)
test(deepagents): add evaluation tests for skills (#1429)
fix(deepagents): Fix Memory prompt guidelines that could lead to wrong actions (#1448)
test(sdk): add smoke test for system prompt with memory and skills (#1430)
chore(deepagents): bump min version for langchain-anthropic (#1431)
feat(deepagents): add evaluation tests for agent memory (#1415)
chore(sdk): adapt integration tests to evals framework (#1426)
feat(sdk): add per-command `timeout` override to `execute()` (#1154)
chore: auto-generate makefile help from target annotations (#1417)
chore(sdk): add more evals (#1404)
chore(sdk): minor updates to system message (#1367)
chore(sdk): add model parameterization to evals (#1408)
chore: revert SDK version following yank (#1407)
chore(sdk): add simple eval scaffolding (#1400)
refactor(sdk): add logging to silent path skips, rename `validate_path` (#1370)
fix(cli,sdk): harden path hardening (#918)
chore(sdk): add smoke tests for system message (#1363)
feat(sdk): enable type checking in deepagents and resolve most linting issues (#991)
chore(sdk): move some integration tests into unit tests (#1330)
revert(sdk): reimplement skill loading via `skill` tool calling (#1328)
fix(sdk): missing `_validate_path()` on `Glob` tool's `path` parameter allows directory traversal (#1320)
fix: Path Traversal via Unsanitized Glob Pattern in glob_info() Bypasses Virtual Mode Sandbox (#1322)
feat(sdk): add base agent prompt (#1314)
release(sdk): 0.4.2 (#1312)
feat(sdk): reimplement skill loading via `skill` tool calling (#1306)
chore: rollback uv workspace migration, restore per-package lockfiles (#1278)
release(sdk): 0.4.1 (#1269)
chore: migrate to uv workspace (#1264)
feat(sdk): return native image content blocks from read_file (#1163)
chore(deps): bump the pip-dependencies group across 8 directories with 9 updates (#1252)
refactor(sdk): use public `SummarizationMiddleware` middleware (#1241)
chore(deps): bump cryptography from 46.0.3 to 46.0.5 in /libs/deepagents (#1246)
chore: rename `master` to `main` (#984)
release(sdk): 0.4.0 (#1236)
release(deepagents): 0.4 (#1234)
chore(sdk): add support for `,` in allowed-tools, fail gently for bullet list (#1235)
fix(sdk): relax skills parsing for allowed tools (#1232)
chore(deps): bump the pip-dependencies group across 8 directories with 27 updates (#1230)
chore(sdk)!: move sandbox provider back to cli (#1226)
chore(deps): bump the uv group across 3 directories with 1 update (#1216)
refactor(sdk): move function-level test imports out to top (#1168)
fix(sdk): harden skills metadata parsing, improve spec compliance (#1189)
chore(deps): bump the pip-dependencies group across 3 directories with 5 updates (#1183)
style: update brand names (#1180)
release(sdk): deepagents 0.3.12 (#1175)
feat(sdk): refactor namespace gen for StoreBackend (#1169)
revert(deepagents): refactor summarization middleware (#1172)
fix(deepagents): refactor summarization middleware (#1138)
fix(sdk): add explicit `NotImplementedError` to protocol method bodies (#1152)
refactor(cli): reorder property -> method order in `SandboxBackendProtocol` (#1153)
feat(sdk): add sandbox provider exceptions (#1108)
release(sdk): deepagents 0.3.11 (#1078)
feat(sdk): subagent skills, middleware refactor (#1041)
fix(sdk): add newlines in tool result message for large outputs (#1053)
release(sdk): 0.3.10 (#1044)
fix(sdk): grep should perform literal search instead of regex (#975)
feat(sdk): sandbox provider interface (#900)
fix(sdk): handle exact file paths in grep and glob operations (#1017)
chore: correct brand name (#1025)
fix: add py.typed to deepagents (#1024)
fix(sdk): return error message instead of raising ValueError for invalid paths (#994)
fix(deepagents): prevent state merge error in parallel sub-agents (#954)
fix(infra): change `release-please` component (#1002)
chore: nit versions (#997)
chore: enrich `pyproject.toml` files (#996)
chore(sdk,cli): add `VERSION` (#983)
feat(sdk): add LocalShellBackend (#930)
chore: clean up `README` files (#980)
chore(deepagents): add sandbox tests to sdk (#898)
fix(sdk): string interpolation in BaseSandbox write/edit tools  (#955)
feat(cli): custom subagents (#916)
release(deepagents): 0.3.9 (#944)
fix(sdk): summarization offloading (#920)
refactor: filesystem middleware (#928)
chore(deps): bump the uv group across 3 directories with 6 updates (#905)
test(sdk): add unit test for handling large single-line file bug (#813)
feat(deepagents): truncate middle of content instead of end on tool response eviction (#901)
feat(deepagents): truncate tool messages from read_file (#897)
fix(sdk,acp,harbor): don't allow relative imports (#882)
fix(sdk): handle large payloads and headless container execution (#872)
chore: update `Makefile` targets, add pre-commit hooks (#790)
release(sdk): bump version (#879)
fix(sdk): make sure that tool truncation applies to execute (#547)
test(sdk): use unique `thread_id` for summarization test configuration (#871)
fix(sdk): don't dedent summarization prompt (#870)
feat(deepagents): truncate old write / edit calls in message history (#806)
release: patch release 0.3.7 (#869)
chore(deepagents): add end to end tests to confirm file reducer working properly in state backend (#754)
chore: improve filesystem and subagents tool descriptions (#807)
docs(SDK): clarify usage of file system backend (#850)
nit: standardize naming (#849)
docs(sdk): `FilesystemBackend` refs fixes (#791)
feat: show allowed tools for each skill in skill list (#837)
fix(sdk):  FilesystemMiddleware forward 'name' attribute in large_tool_result from the original tool msg (#825)
docs(sdk): docstring formatting nits (#824)
feat: summarization offloading (#742)
Bump version to 0.3.7a1 (#817)
Add Async ops to Store Backend (#816)
chore(deepagents): add tests for grep in end to end tests (#805)
chore(deepagents): bump langchain in lock file (#800)
chore(deps): bump the uv group across 5 directories with 1 update (#811)
fix(deepagents): respect continuation markers when reading files (#809)
fix(infra): exclude `build/` from typechecking (#808)
feat: support `SystemMessage` for parity w/ `create_agent` (#803)
chore(deepagnets): end to end tests for agent writing editing files (#804)
fix(sdk): BaseSandbox.ls_info() to return absolute paths (#797)
fix(deepagents): truncate lines on read (#784)
chore(deps): bump the uv group across 3 directories with 3 updates (#796)
fix: refinements for `test_summarization` (#786)
docs: fix old URLs (#787)
docs: add testing readme (#788)
fix: added error catching for file operations without permissions (#734)
docs(deepagents): update subagent spec (#785)
chore(deepagents): add mini eval for summarization (#751)
docs(sdk): improve `FileSystemBackend` ref docs (#783)
chore: add tests for config, context, metadata propagation (#776)
fix: import rules (#763)
fix(deepagents): throw a clear exception message when 'messages' key missing from the output of the subagent (#678)
release: deepagents 0.3.6 (#752)
chore: automatically sort imports (#740)
fix: no f string needed (#750)
feat: add agent name when creating subagents (#735)
feat(cli): inject local context into system prompt via `LocalContextMiddleware`
chore: update twitter URL (#727)
chore: CR on docstrings/readme (#722)
minor release(deepagents): bump version to 0.3.5 (#695)
Port SDK Memory to CLI (#691)
chore(deepagents): turn on strict linting and add ratchet (#690)
chore(deepagents): add tests for todos middleware (#667)
fix(deepagents):  fix content block handling in filesystem middleware tool result eviction (#674)
Minor release memory bump (#689)
feat: update memory prompt to be more barebones (#685)
improvements to README, reference docs (#688)
update version bounds (#687)
Deepagents release minor (#683)
fix(deepagents): make memory permissive if AGENTS.md not found (#682)
release(deepagents): release 0.3.2 (#680)
chore(deepagents): make memory strict if AGENTS.md not found (#673)
fix(deepagents): better async support in skills, and propagate runnable config (#672)
chore: remove older integration tests for memory (#670)
feature(deepagents): add memory (#646)
feat(deepagents): add skills to sdk (#591)
chore(deepagent): add docs to composite backend (#666)
chore(deepagents): add more test coverage to composite backend (#660)
fix(deepagents): composite backend grep implementation (#659)
Fix CVE-2025-68664 (#636)
make work with model string (#626)
release(deepagents): 0.3.1 (#608)
docs: fix documentation issues (#513)
fix(deepagents): strip trailing whitespace from subagent messages to prevent Anthropic API errors (#586)
fix(deepagents): Pass through runtime config to subagents (#602)
chore(deepagents): test write todos from sub-agents (#605)
fix(deepagents): exclude structured response from state update (#603)
feat: add ability to paste images in input (#555)
chore: bump minor version (#549)
feature(deepagents)!: add async implementations for backend, sandbox, filesystem (#504)
fix: fix docstring formatting errors in backends (#514)
chore(cli): add comprehensive testing for sandbox operations (#501)
feat(deepagents): use context window fractions for SummarizationMiddleware when available (#484)
chore(deepagents): add end to end test (#481)
release(deepagents, cli) (#477)
return strings in tools (#474)
truncate glob (#473)
fix(deepagents): fix type for file info (#471)
add file upload and download apis (#381)
fix(deepagents-cli): fix linting (broke CI) (#457)
fix(middleware): prevent silent corruption from Windows absolute paths (Issue #427) (#454)
Remove unnecessary dependencies from `deepagents` module (#429)
fix: use `request.override` instead of direct attribute overrides (#431)
Update README.md (#422)
release: deepagents 0.2.9, cli 0.0.9 (#411)
patch: remove resumable shell middleware (#410)
release (#388)
chore: finish migration into monorepo structure (#383)
feat: expose id on base abstraction (#382)
feat: sandbox protocol (#319)
chore: move BACKEND_TYPES to correct place (#351)
fix: Don't error when "subagent" does not exist. And add test for truncation logic (#343)
minor update (#302)
chore: inherit from protocol, update types (#291)
Truncate content sample (#287)
chore(deepagents): move protocol types (#286)
move deepagents to libs/deepagents (#257)

---

Thanks to our community contributors: @dotuananh0712, @sydney-runkle, @naga-k, @november-pain, @bracesproul, @AdemBoukhris457, @AlexPapadakis, @eyurtsev, @weiguangli-io, @mdrxy

## deepagents==0.4.12: deepagents==0.4.12

**Published**: 2026-03-20

Changes since deepagents==0.4.11
release(deepagents): 0.4.12 (#2099)
feat(sdk): port LangSmithSandbox from `main` to `v0.4` (#2098)
chore(sdk,cli): make `langchain-anthropic` and `langchain-google-genai` explicit deps (#1886)

## deepagents-cli==0.0.34: deepagents-cli==0.0.34

**Published**: 2026-03-17

### Features

* External editor support via `ctrl+x` and `/editor` ([#1861](https://github.com/langchain-ai/deepagents/issues/1861)) ([bf5d088](https://github.com/langchain-ai/deepagents/commit/bf5d088d4b3cee6c7e44c3abe3736f9972897896))
* Defer HITL approval menu while user is typing ([#1833](https://github.com/langchain-ai/deepagents/issues/1833)) ([1d1572e](https://github.com/langchain-ai/deepagents/commit/1d1572e40cc9f87b97832cbe2b9152c281f8ec92))

### Bug Fixes

* Resolve config-defined providers during runtime model swaps ([#1941](https://github.com/langchain-ai/deepagents/issues/1941)) ([aebc660](https://github.com/langchain-ai/deepagents/commit/aebc660321895909f6b6eb71e72a99ca7754bcf1))

---

Thanks to our community contributors: @popey, @guptagautam01 ([LinkedIn](https://www.linkedin.com/in/gupta-gautam01/))

## langchain-quickjs==0.0.1: langchain-quickjs==0.0.1

**Published**: 2026-03-16

Initial release
feat(quickjs): support toolruntime (#1932)
chore(quickjs): clean up (#1927)
feat(quickjs): prefer async when on async path (#1922)
feat(quickjs): add async support using a daemon thread (#1918)
chore(sdk): increment version to 0.5 (#1908)
chore(sdk,cli): make `langchain-anthropic` and `langchain-google-genai` explicit deps (#1886)
release(sdk): 0.4.11 (#1868)
chore: bump lock (#1871)
feat(quickjs): adding quickjs repl (#1860)

## deepagents-cli==0.0.33: deepagents-cli==0.0.33

**Published**: 2026-03-16

### Highlights

* **Client-server architecture:** The CLI can now connect to a remote agent backend via `langgraph dev`, decoupling the UI from the runtime and unlocking server-side execution workflows.
* **Expanded model ecosystem:** Added LiteLLM and Baseten as built-in providers. The `/model` selector now shows live model status, supports an `enabled` flag to hide providers, and auto-discovers models for `class_path` (arbitrary) providers.
* **CLI ergonomics:** New `-y` and `-S` short flags for `--auto-approve` and `--shell-allow-list`. The `ask_user` tool is now enabled by default, and the welcome banner rotates helpful tips.
* **Performance:** Integrated `textual-speedups` for Rust-based layout primitives, switched the messages container to stream layout, and offloaded blocking path ops from the event loop — noticeably snappier on long conversations.
* **Stability:** 15 bug fixes covering markup injection, scrollbar flicker during streaming, reentrant model switching, and autocomplete race conditions.

### Features

* Client-server architecture via `langgraph dev` ([#1759](https://github.com/langchain-ai/deepagents/issues/1759)) ([f5407e6](https://github.com/langchain-ai/deepagents/commit/f5407e6300e6ee51d8c88f1f183dd960b30a5b56))
* Show model status in `/model` selector ([#1820](https://github.com/langchain-ai/deepagents/issues/1820)) ([92ce0cf](https://github.com/langchain-ai/deepagents/commit/92ce0cffde6f49131541b5985bc80058ae0ad46e))
* Enable `ask_user` tool by default ([#1830](https://github.com/langchain-ai/deepagents/issues/1830)) ([ed0c745](https://github.com/langchain-ai/deepagents/commit/ed0c745eef8d8fad40aa39b0dfd4de2ba9988fe5))
* Add `-y` and `-S` short flags for auto-approve and shell-allow-list ([#1919](https://github.com/langchain-ai/deepagents/issues/1919)) ([1036b16](https://github.com/langchain-ai/deepagents/commit/1036b16276d59d8be669d963901c91aeb8cc2236))
* Add `enabled` flag to hide providers from `/model` switcher ([#1897](https://github.com/langchain-ai/deepagents/issues/1897)) ([72a216c](https://github.com/langchain-ai/deepagents/commit/72a216c88f661f9e53eaf92aedce40fac7b76d3c))
* Add `litellm` optional dep ([#1818](https://github.com/langchain-ai/deepagents/issues/1818)) ([defa21b](https://github.com/langchain-ai/deepagents/commit/defa21bc6eea596bc67e70372e022d5b78049c0d))
* Add `sessions` as hidden keyword alias for `/threads` ([#1823](https://github.com/langchain-ai/deepagents/issues/1823)) ([ffa98cc](https://github.com/langchain-ai/deepagents/commit/ffa98ccf9ebe12eadb7f0e95f278dd9bd8eca240))
* Add Baseten as a built-in model provider/optional dep ([#1819](https://github.com/langchain-ai/deepagents/issues/1819)) ([e05ee66](https://github.com/langchain-ai/deepagents/commit/e05ee66b0d6c5cb996208d554686fc128f1094a2))
* Add rotating tips to welcome banner ([#1898](https://github.com/langchain-ai/deepagents/issues/1898)) ([d882ca8](https://github.com/langchain-ai/deepagents/commit/d882ca81e2c9a11768a07824fd5b5ce8579bdcd7))
* Add sandbox type to trace metadata ([#1845](https://github.com/langchain-ai/deepagents/issues/1845)) ([59ef941](https://github.com/langchain-ai/deepagents/commit/59ef94143fc0adabb5f70f308527d98aa1511e44))
* Show versions in non-interactive header ([#1881](https://github.com/langchain-ai/deepagents/issues/1881)) ([adacc3f](https://github.com/langchain-ai/deepagents/commit/adacc3fd0a0f040373b8ef39032978019b5c8e5f))
* Show editable install source path in help and banner ([#1916](https://github.com/langchain-ai/deepagents/issues/1916)) ([4ce1cee](https://github.com/langchain-ai/deepagents/commit/4ce1ceebdd2e4aa6db008061519d3df1e422c2db))

### Bug Fixes

* Replace per-chunk `scroll_end` with anchor to fix scrollbar flicker ([#1891](https://github.com/langchain-ai/deepagents/issues/1891)) ([a9be236](https://github.com/langchain-ai/deepagents/commit/a9be2368509f9f2c66537014ae2138253cf0dc39))
* Auto-discover models for `class_path` providers ([#1816](https://github.com/langchain-ai/deepagents/issues/1816)) ([177fe0f](https://github.com/langchain-ai/deepagents/commit/177fe0f663926d6879aa2177b7988d45cd1e4055))
* Correct model selector footer showing wrong profile after search ([#1805](https://github.com/langchain-ai/deepagents/issues/1805)) ([2f1d52f](https://github.com/langchain-ai/deepagents/commit/2f1d52f4ad65add210d6f840b1b78e62eba37195))
* Escape dynamic strings in rich markup to prevent markup injection ([#1888](https://github.com/langchain-ai/deepagents/issues/1888)) ([d349d10](https://github.com/langchain-ai/deepagents/commit/d349d1061647325fdb4ea6322254b24555abf751))
* Forward `DAYTONA_API_URL` to avoid deprecated `server_url` access ([#1844](https://github.com/langchain-ai/deepagents/issues/1844)) ([7d19ca8](https://github.com/langchain-ai/deepagents/commit/7d19ca8e6404a2ea98aac6a9d4cae7a2b529922c))
* Let unknown providers through credential check ([#1815](https://github.com/langchain-ai/deepagents/issues/1815)) ([89d39de](https://github.com/langchain-ai/deepagents/commit/89d39ded171bf300e9b17972f18063e9157f298f))
* Persist `models.recent` on every session start ([#1802](https://github.com/langchain-ai/deepagents/issues/1802)) ([32aa371](https://github.com/langchain-ai/deepagents/commit/32aa371a371208146cc093c4e5eb7a752a74b3c9))
* Prevent reentrant model switching ([#1824](https://github.com/langchain-ai/deepagents/issues/1824)) ([09d16a8](https://github.com/langchain-ai/deepagents/commit/09d16a8151466fd2d82976d44d7b4e957255bcd9))
* Remove double slash in skills path template ([#1808](https://github.com/langchain-ai/deepagents/issues/1808)) ([2bc9620](https://github.com/langchain-ai/deepagents/commit/2bc962075146548f2ef4c8851bd502df9d6a1fa5))
* Show checkmark for `class_path` providers in model selector ([#1899](https://github.com/langchain-ai/deepagents/issues/1899)) ([4adb712](https://github.com/langchain-ai/deepagents/commit/4adb712c8eacbcfbc06801c31bfd74fc0705bed3))
* Sort prefetched threads by user preference on initial render ([#1806](https://github.com/langchain-ai/deepagents/issues/1806)) ([6f71153](https://github.com/langchain-ai/deepagents/commit/6f711532976821a92e3396fe458ec7874b1237ef))
* Use `max-height` for `tool-info-scroll` to shrink-wrap content ([#1835](https://github.com/langchain-ai/deepagents/issues/1835)) ([a4e1908](https://github.com/langchain-ai/deepagents/commit/a4e1908527c3a30a6f967dd1d989739d540ddd2a))
* Use ASCII-safe glyphs in tool status restore path ([#1895](https://github.com/langchain-ai/deepagents/issues/1895)) ([2a9cbc8](https://github.com/langchain-ai/deepagents/commit/2a9cbc8540b2ab77362cbb00764a3533e234891f))
* Use counter to close history-recall autocomplete race ([#1901](https://github.com/langchain-ai/deepagents/issues/1901)) ([bfd08af](https://github.com/langchain-ai/deepagents/commit/bfd08afbc0eca844e565842dff50eddb067e4750))
* Use UUID7 for thread IDs instead of 8-char hex ([#1826](https://github.com/langchain-ai/deepagents/issues/1826)) ([821885b](https://github.com/langchain-ai/deepagents/commit/821885bab8ae2eef873a33fdaa6dc427a473d764))

### Performance Improvements

* Add `textual-speedups` for Rust-based layout primitives ([#1910](https://github.com/langchain-ai/deepagents/issues/1910)) ([45b58a1](https://github.com/langchain-ai/deepagents/commit/45b58a13e14abfb58ef3688cee51a5819d8ca52d))
* Use stream layout for messages container ([#1896](https://github.com/langchain-ai/deepagents/issues/1896)) ([b35401b](https://github.com/langchain-ai/deepagents/commit/b35401b885a7651db548f1826ddb24476ecde5b7))
* Offload blocking path ops from textual event loop ([#1894](https://github.com/langchain-ai/deepagents/issues/1894)) ([d3eedcc](https://github.com/langchain-ai/deepagents/commit/d3eedccc7edd21103ca1e586fc365d721f674099))
* Speed up `/model` selector with cache pre-warming and async saves ([#1813](https://github.com/langchain-ai/deepagents/issues/1813)) ([2aec75c](https://github.com/langchain-ai/deepagents/commit/2aec75c8dca6c0510671cf1288a924c4ca9bce1c))
* Speed up `/threads` modal startup ([#1811](https://github.com/langchain-ai/deepagents/issues/1811)) ([5758df1](https://github.com/langchain-ai/deepagents/commit/5758df1b663cd09726b8cd08d86897351142ed5e))

---

Thanks to our contributors: @mohitejaikumar, @soumilinandi, @guptagautam01 ([LinkedIn](https://www.linkedin.com/in/gupta-gautam01/))

## deepagents==0.4.11: deepagents==0.4.11

**Published**: 2026-03-13

Changes since deepagents==0.4.10
release(sdk): 0.4.11 (#1868)
chore(sdk): make `langsmith` explicit evals dep (#1867)
chore(sdk): add docs link to `LocalShellBackend` `virtual_mode` deprecation warning (#1866)
test(sdk): add `ChatBaseten` for evals (#1839)
feat(sdk): Add LangSmith integration metadata to deepagents (#1837)
fix(sdk): strip leading slash from glob patterns before matching (#1846)
feat(sdk): add MemoryAgentBench evaluation suite (#1807)
fix(sdk): accept all langsmith tracing env vars in evals conftest (#1847)
test(sdk): add 3 more evals for tool usage (longer trajectories) (#1840)
chore(sdk): add evals `README`, ensure tracing (#1834)
feat(sdk): add `subagent_model` param to `create_deep_agent` (#1369)
refactor(sdk): extract model resolution helpers into `_models` module (#1825)

## langchain-daytona==0.0.4: langchain-daytona==0.0.4

**Published**: 2026-03-11

Changes since langchain-daytona==0.0.3
feat(daytona): add polling policy (callable function) (#1797)
release(sdk): prepare 0.4.10 patch release (#1795)
feat(daytona): expose timeout and polling interval params (#1792)
fix(daytona): fix execute implementation (#1756)
release(deepagents): 0.4.9 (#1773)
release(deepagents): 0.4.8 (#1764)

---

Thanks to our contributors: @sydney-runkle

## deepagents==0.4.10: deepagents==0.4.10

**Published**: 2026-03-11

Changes since deepagents==0.4.9
release(sdk): prepare 0.4.10 patch release (#1795)
fix(daytona): fix execute implementation (#1756)
test(sdk): add memory evals (#1775)

## deepagents-cli==0.0.32: deepagents-cli==0.0.32

**Published**: 2026-03-11

### Features

* Add token breakdown to `/tokens` and simplify `/compact` messages ([#1782](https://github.com/langchain-ai/deepagents/issues/1782)) ([2f37bff](https://github.com/langchain-ai/deepagents/commit/2f37bffa9d7a9ced6945abe4ab6bc3409bfb97b1))
* `--json` flag for machine-readable output ([#1768](https://github.com/langchain-ai/deepagents/issues/1768)) ([6f62496](https://github.com/langchain-ai/deepagents/commit/6f62496bb699dfa6086ee1850b83f38d3b1242fa))

### Bug Fixes

* Work around VS Code 1.110 space key regression ([#1748](https://github.com/langchain-ai/deepagents/issues/1748)) ([f5fe431](https://github.com/langchain-ai/deepagents/commit/f5fe4315143bf5b636cf42fc98cbfe3d99918cfc))

---

Thanks to our contributors: @sydney-runkle, @VinceOPS ([Twitter](https://x.com/VinceOPS)), @JasonBuildAI, @mdrxy

## deepagents==0.4.9: deepagents==0.4.9

**Published**: 2026-03-10

Changes since deepagents==0.4.8
release(deepagents): 0.4.9 (#1773)
feat(sdk): add prompt guidance for large tool results (#1763)

---

Thanks to our contributors: @sydney-runkle

## deepagents==0.4.8: deepagents==0.4.8

**Published**: 2026-03-10

Changes since deepagents==0.4.7
release(deepagents): 0.4.8 (#1764)
test(sdk): bump langsmith-sdk for fixes experiments (#1752)
feat(sdk): add factory function for summarization tool middleware (#1749)
feat(sdk): add solve_rate metric to evals reporter (#1711)
feat(cli): `--acp` mode to run CLI agent as ACP server (#1297)
test(sdk): add metadata for experiments (#1652)
test(sdk): reuse model fixture in summarization evals (#1697)
feat(sdk): add baseten-hosted models to evals workflow (#1682)

## deepagents-cli==0.0.31: deepagents-cli==0.0.31

**Published**: 2026-03-09

### Features

* Opt-in `ask_user` tool for interactive agent questions ([#1377](https://github.com/langchain-ai/deepagents/issues/1377)) ([de7068d](https://github.com/langchain-ai/deepagents/commit/de7068d21fd4b932c6e53f500b0ea3b02a04c0aa))
* Big thread improvements!
  * Rework `/thread` switcher with search, columns, delete, and sort toggle ([#1723](https://github.com/langchain-ai/deepagents/issues/1723)) ([8b21ddb](https://github.com/langchain-ai/deepagents/commit/8b21ddb2ff7f13d6b3ffcbf2fe605bfbadbc3d38))
  * Track and display working directory per thread ([#1735](https://github.com/langchain-ai/deepagents/issues/1735)) ([0e4f25d](https://github.com/langchain-ai/deepagents/commit/0e4f25dfbc3e15653bc3f8a6d32a0a61ead4ba82))
  * Add `-n` short flag for `threads list --limit` ([#1731](https://github.com/langchain-ai/deepagents/issues/1731)) ([8bbace9](https://github.com/langchain-ai/deepagents/commit/8bbace9facd1e33757521e835dcb291accd2fa91))
  * Add sort, branch filter, and verbose flags to threads list ([#1732](https://github.com/langchain-ai/deepagents/issues/1732)) ([11dc8e3](https://github.com/langchain-ai/deepagents/commit/11dc8e3397ef9e9dbe8b15578e9258544ed6b452))
* Tailor system prompt for non-interactive mode ([#1727](https://github.com/langchain-ai/deepagents/issues/1727)) ([871e5cf](https://github.com/langchain-ai/deepagents/commit/871e5cf76b1a7e7cf7175b4415bb8e2206da39ec))
* `/reload` command for in-session config refresh ([#1722](https://github.com/langchain-ai/deepagents/issues/1722)) ([381aee6](https://github.com/langchain-ai/deepagents/commit/381aee6d223fe3d866bedfe3a534916f419a4435))
* Rearrange HITL option order in approval menu ([#1726](https://github.com/langchain-ai/deepagents/issues/1726)) ([0ca6cb2](https://github.com/langchain-ai/deepagents/commit/0ca6cb237b6da538bad2b4bf292942c8db72ec1f))

### Bug Fixes

* Localize newline shortcut labels by platform ([#1721](https://github.com/langchain-ai/deepagents/issues/1721)) ([f35576b](https://github.com/langchain-ai/deepagents/commit/f35576bafac711d6c04f1f9dd40ec97a90e30060))
* Prevent `shift+enter` from sending `backslash+enter` ([#1728](https://github.com/langchain-ai/deepagents/issues/1728)) ([81dceb0](https://github.com/langchain-ai/deepagents/commit/81dceb043097a47702bb5a0227a8f12e9055bd05))
* Write files with langsmith sandbox ([#1714](https://github.com/langchain-ai/deepagents/issues/1714)) ([5933c9e](https://github.com/langchain-ai/deepagents/commit/5933c9e2995c422e43649c61981e086ac1eaf725))

---

Thanks to our contributors: @guptagautam01 ([LinkedIn](https://www.linkedin.com/in/gupta-gautam01/)), @mdrxy

## deepagents-cli==0.0.30: deepagents-cli==0.0.30

**Published**: 2026-03-07

### Features

* `--acp` mode to run CLI agent as ACP server ([#1297](https://github.com/langchain-ai/deepagents/issues/1297)) ([c9ba00a](https://github.com/langchain-ai/deepagents/commit/c9ba00a56b7ee5e48b56b13f9f093bb8bf639700))
* Model detail footer + persist `--profile-override` on hot-swap ([#1700](https://github.com/langchain-ai/deepagents/issues/1700)) ([f2c8b54](https://github.com/langchain-ai/deepagents/commit/f2c8b54e9b4c541bf6f91139bfb9b6a2f20c8de0))
* Show message timestamp toast on click ([#1702](https://github.com/langchain-ai/deepagents/issues/1702)) ([4f403ec](https://github.com/langchain-ai/deepagents/commit/4f403ecb3332010062158ec30fd55f349654a533))

### Bug Fixes

* Expire `ctrl+c` quit window when toast disappears ([#1701](https://github.com/langchain-ai/deepagents/issues/1701)) ([38b5ea9](https://github.com/langchain-ai/deepagents/commit/38b5ea9484ab121c9b2919dd74469e82fce19b82))
* Preserve input text when escaping shell/command mode ([#1706](https://github.com/langchain-ai/deepagents/issues/1706)) ([3c00edb](https://github.com/langchain-ai/deepagents/commit/3c00edb93eddf74e87d58526a02be72577ed65b1))
* Right-align token count next to model name in status bar ([#1705](https://github.com/langchain-ai/deepagents/issues/1705)) ([311c919](https://github.com/langchain-ai/deepagents/commit/311c9191cf663540e1b62eb9452abecda5bc7b4f))

---

Thanks to our contributors: @mdrxy

## langchain-runloop==0.0.3: langchain-runloop==0.0.3

**Published**: 2026-03-06

Changes since langchain-runloop==0.0.2
release(sdk): bump partner packages (daytona 0.0.3, modal 0.0.2, runloop 0.0.3) (#1689)
release(sdk): bump deepagents to 0.4.7 (#1688)
feat(infra): add fireworks as eval provider (#1684)
release(sdk): bump deepagents to 0.4.6 (#1677)
chore: bump lock file (#1674)
chore(sdk): expand eval matrix and fix model name access for groq (#1623)
release(deepagents): 0.4.5 (#1622)
chore(sdk): expand eval model matrix to 28 models across 7 providers (#1617)
chore: standardize makefile type targets/ add type CI check (#1581)
test: add standard tests for runloop and modal (#1537)
release(deepagents): 0.4.4 (#1519)
release(deepagents): 0.4.3 (#1465)
fix(sdk): guard timeout forwarding for older backend packages (#1461)
chore(deepagents): bump min version for langchain-anthropic (#1431)
feat(sdk): add per-command `timeout` override to `execute()` (#1154)
chore: auto-generate makefile help from target annotations (#1417)
chore: revert SDK version following yank (#1407)
chore: enable type checking for all other packages (#1365)
release(sdk): 0.4.2 (#1312)
chore: rollback uv workspace migration, restore per-package lockfiles (#1278)
chore: migrate to uv workspace (#1264)
chore(deps): bump the uv group across 2 directories with 1 update (#1245)
chore: rename `master` to `main` (#984)
release(sdk): 0.4.0 (#1236)
release(deepagents): 0.4 (#1234)

---

Thanks to our contributors: @sydney-runkle, @eyurtsev, @mdrxy

## langchain-modal==0.0.2: langchain-modal==0.0.2

**Published**: 2026-03-06

Changes since langchain-modal==0.0.1
release(sdk): bump partner packages (daytona 0.0.3, modal 0.0.2, runloop 0.0.3) (#1689)
release(sdk): bump deepagents to 0.4.7 (#1688)
feat(infra): add fireworks as eval provider (#1684)
release(sdk): bump deepagents to 0.4.6 (#1677)
chore: bump lock file (#1674)
chore(sdk): expand eval matrix and fix model name access for groq (#1623)
release(deepagents): 0.4.5 (#1622)
chore(sdk): expand eval model matrix to 28 models across 7 providers (#1617)
chore: standardize makefile type targets/ add type CI check (#1581)
test: add standard tests for runloop and modal (#1537)
release(deepagents): 0.4.4 (#1519)
release(deepagents): 0.4.3 (#1465)
fix(sdk): guard timeout forwarding for older backend packages (#1461)
chore(deepagents): bump min version for langchain-anthropic (#1431)
feat(sdk): add per-command `timeout` override to `execute()` (#1154)
chore: auto-generate makefile help from target annotations (#1417)
chore: revert SDK version following yank (#1407)
chore: enable type checking for all other packages (#1365)
release(sdk): 0.4.2 (#1312)
chore: rollback uv workspace migration, restore per-package lockfiles (#1278)
chore: migrate to uv workspace (#1264)
chore(deps): bump the uv group across 2 directories with 1 update (#1245)
chore: rename `master` to `main` (#984)
release(sdk): 0.4.0 (#1236)
release(deepagents): 0.4 (#1234)

---

Thanks to our contributors: @sydney-runkle, @eyurtsev, @mdrxy

## langchain-daytona==0.0.3: langchain-daytona==0.0.3

**Published**: 2026-03-06

Changes since langchain-daytona==0.0.2
release(sdk): bump partner packages (daytona 0.0.3, modal 0.0.2, runloop 0.0.3) (#1689)
release(sdk): bump deepagents to 0.4.7 (#1688)
feat(infra): add fireworks as eval provider (#1684)
release(sdk): bump deepagents to 0.4.6 (#1677)
chore: bump lock file (#1674)
chore(sdk): expand eval matrix and fix model name access for groq (#1623)
release(deepagents): 0.4.5 (#1622)
chore(sdk): expand eval model matrix to 28 models across 7 providers (#1617)
chore: standardize makefile type targets/ add type CI check (#1581)
chore(deps): bump the pip-dependencies group across 8 directories with 17 updates (#1564)
chore(deps): bump the pip-dependencies group across 8 directories with 19 updates (#1491)
release(deepagents): 0.4.4 (#1519)
release(deepagents): 0.4.3 (#1465)
fix(sdk): guard timeout forwarding for older backend packages (#1461)
chore(deepagents): bump min version for langchain-anthropic (#1431)
feat(sdk): add per-command `timeout` override to `execute()` (#1154)
chore: auto-generate makefile help from target annotations (#1417)
chore: revert SDK version following yank (#1407)
chore(daytona): add integration test suite to daytona (#1397)
chore: enable type checking for all other packages (#1365)
release(sdk): 0.4.2 (#1312)
chore: rollback uv workspace migration, restore per-package lockfiles (#1278)
chore: migrate to uv workspace (#1264)
chore(deps): bump the pip-dependencies group across 8 directories with 9 updates (#1252)
chore(deps): bump cryptography from 46.0.4 to 46.0.5 in /libs/partners/daytona (#1243)
chore: rename `master` to `main` (#984)
release(sdk): 0.4.0 (#1236)
release(deepagents): 0.4 (#1234)
chore(deps): bump the pip-dependencies group across 8 directories with 27 updates (#1230)

---

Thanks to our contributors: @sydney-runkle, @eyurtsev, @mdrxy

## deepagents==0.4.7: deepagents==0.4.7

**Published**: 2026-03-06

Changes since deepagents==0.4.6
release(sdk): bump deepagents to 0.4.7 (#1688)
fix(deepagents): restore full routed path in write/edit results (#1681)
feat(infra): add fireworks as eval provider (#1684)

---

Thanks to our contributors: @naga-k

## deepagents==0.4.6: deepagents==0.4.6

**Published**: 2026-03-06

Changes since deepagents==0.4.5
release(sdk): bump deepagents to 0.4.6 (#1677)
chore: bump lock file (#1674)
fix(sdk): extract text from all content blocks for large tool result eviction (#1673)
fix(sdk): enforce path boundaries in `CompositeBackend` routing (#1659)
refactor(sdk): split eval assertions into correctness and efficiency tiers (#1670)
test(sdk): remove an ambiguous eval test (#1661)
chore(sdk): add tool usage evals (#1637)
test(deepagents): fix one more file operation test (#1653)
test(sdk): update eval test to be a bit less ambiguous (#1643)
docs(sdk): middleware module docstring (#1620)
chore(sdk): expand eval matrix and fix model name access for groq (#1623)

---

Thanks to our contributors: @dotuananh0712, @bracesproul, @eyurtsev, @mdrxy

## deepagents-cli==0.0.29: deepagents-cli==0.0.29

**Published**: 2026-03-06

### Features

* `--model-params` flag on `/model` command ([#1679](https://github.com/langchain-ai/deepagents/issues/1679)) ([9b6433d](https://github.com/langchain-ai/deepagents/commit/9b6433d557e6e8b3d39c10577595b0ef6d741c94))
* `--shell-allow-list all` ([#1695](https://github.com/langchain-ai/deepagents/issues/1695)) ([4aec7b3](https://github.com/langchain-ai/deepagents/commit/4aec7b35caa7723b8bbda189c9ca1d213e0a9a6d))
* Hook dispatch for external tool integration ([#1553](https://github.com/langchain-ai/deepagents/issues/1553)) ([cdb2230](https://github.com/langchain-ai/deepagents/commit/cdb2230f04ce7a2b7ef0837cbbc223dcbf04b78e))
* Detect deceptive unicode in tool args and URLs ([#1694](https://github.com/langchain-ai/deepagents/issues/1694)) ([d4c8544](https://github.com/langchain-ai/deepagents/commit/d4c8544bd6bf3b6df50b99f8a0c7208c20f86bd9))
* MCP tool loading with auto-discovery ([#801](https://github.com/langchain-ai/deepagents/issues/801)) ([df0908e](https://github.com/langchain-ai/deepagents/commit/df0908ebed4e17f0fd904d83e9d4ea38dfc1207d))
  * Surface mcp server/tool info in system prompt ([#1693](https://github.com/langchain-ai/deepagents/issues/1693)) ([068e075](https://github.com/langchain-ai/deepagents/commit/068e075ecd4a7f3e35219ae6b87707bd9dc3f785))

### Bug Fixes

* Anchor `ChatInput` below scrollable area ([#1671](https://github.com/langchain-ai/deepagents/issues/1671)) ([11105d9](https://github.com/langchain-ai/deepagents/commit/11105d93f593d802d5e120c095f16d771c674bef))
  * Remove dead chat-spacer widget and resize handler ([#1686](https://github.com/langchain-ai/deepagents/issues/1686)) ([b6ecec5](https://github.com/langchain-ai/deepagents/commit/b6ecec5bd14677a878c92a1b51e950f61fabf8d3))

---

Thanks to our contributors: @jcuypers, @eyurtsev

## deepagents-cli==0.0.28: deepagents-cli==0.0.28

**Published**: 2026-03-05

### Features

* Video support to multimodal inputs ([#1521](https://github.com/langchain-ai/deepagents/issues/1521)) ([f9b49b7](https://github.com/langchain-ai/deepagents/commit/f9b49b7341bd42b5278a03496743e4709689598e))
* NVIDIA API key support and default model ([#1577](https://github.com/langchain-ai/deepagents/issues/1577)) ([9ce2660](https://github.com/langchain-ai/deepagents/commit/9ce2660a67c3497cff18d27131fb7ef49e85b310))
* Fuzzy search for slash command autocomplete ([#1660](https://github.com/langchain-ai/deepagents/issues/1660)) ([5f6e9c0](https://github.com/langchain-ai/deepagents/commit/5f6e9c014e6a99783b3113184cc12f0179a902f0))
* Tab autocomplete in model selector ([#1669](https://github.com/langchain-ai/deepagents/issues/1669)) ([28bd0aa](https://github.com/langchain-ai/deepagents/commit/28bd0aaca737b8bb194ecb9f6612989b9aacec02))

### Bug Fixes

* Backspace at cursor position 0 exits mode even with text ([#1666](https://github.com/langchain-ai/deepagents/issues/1666)) ([dfa4c1f](https://github.com/langchain-ai/deepagents/commit/dfa4c1fedcecf2bb17d8ffef01cf50efe6c80fb0))
* Skip auto-approve toggle when modal screen is open ([#1668](https://github.com/langchain-ai/deepagents/issues/1668)) ([6597f0b](https://github.com/langchain-ai/deepagents/commit/6597f0b8da3c3bd701a42e228660d459cefe3f64))
* Truncate model name in status bar on narrow terminals ([#1665](https://github.com/langchain-ai/deepagents/issues/1665)) ([0e24a04](https://github.com/langchain-ai/deepagents/commit/0e24a04aa9e5894735522ce23295bb27fd2b8190))

---

Thanks to our contributors: @arthur-drozdov, @soumilinandi, @mdrxy


## deepagents-cli==0.0.27: deepagents-cli==0.0.27

**Published**: 2026-03-04

### Features

* Background PyPI update check ([#1648](https://github.com/langchain-ai/deepagents/issues/1648)) ([2e7a5e7](https://github.com/langchain-ai/deepagents/commit/2e7a5e7d97f64147ab2d000fae833fe681f1d6b2))
* Install script ([#1649](https://github.com/langchain-ai/deepagents/issues/1649)) ([68f6ef9](https://github.com/langchain-ai/deepagents/commit/68f6ef96e7d66b2c98d1371e91e5d25f107b80fe))
* Fuzzy search for model switcher ([#1266](https://github.com/langchain-ai/deepagents/issues/1266)) ([a6bbb18](https://github.com/langchain-ai/deepagents/commit/a6bbb182a2336ba748d93a06b9fcf27966321e20))
* Model usage stats display ([#1587](https://github.com/langchain-ai/deepagents/issues/1587)) ([a1208db](https://github.com/langchain-ai/deepagents/commit/a1208db096761eb54e0fe712a5aa922502575cb6))
* Substring matching in command history navigation ([#1301](https://github.com/langchain-ai/deepagents/issues/1301)) ([e276d5a](https://github.com/langchain-ai/deepagents/commit/e276d5a64bee9394f53ab993b01447023bcd4c7d))

### Bug Fixes

* Allow Esc to exit command/bash input mode ([#1644](https://github.com/langchain-ai/deepagents/issues/1644)) ([906da72](https://github.com/langchain-ai/deepagents/commit/906da72ea40e16492f8e7f3c35758af486c92b3c))
* Make `!` bash commands interruptible via `Esc`/`Ctrl+C` ([#1638](https://github.com/langchain-ai/deepagents/issues/1638)) ([0c414d1](https://github.com/langchain-ai/deepagents/commit/0c414d154a74cfabebfae8fc2dbb6d7e39da3857))
* Make escape reject pending HITL approval first ([#1645](https://github.com/langchain-ai/deepagents/issues/1645)) ([5d7be0c](https://github.com/langchain-ai/deepagents/commit/5d7be0c1a2fbe54f7fe062c5a43a7591aecb00e4))
* Show cwd on startup ([#1209](https://github.com/langchain-ai/deepagents/issues/1209)) ([23032dd](https://github.com/langchain-ai/deepagents/commit/23032ddd80b0ec8bf58c91776e62b834f6e03b5e))
* Terminate active subprocesses on app quit ([#1646](https://github.com/langchain-ai/deepagents/issues/1646)) ([5f2e614](https://github.com/langchain-ai/deepagents/commit/5f2e614f05912d3278a988cb7366612099105acf))
* Use first-class OpenRouter attribution kwargs ([#1635](https://github.com/langchain-ai/deepagents/issues/1635)) ([9c1ed93](https://github.com/langchain-ai/deepagents/commit/9c1ed93861a52b9ced2c1426131d542f50afa623))

---

Thanks to our contributors: @1Ninad, @an-ny89, @peterkolcza, @mdrxy


## deepagents==0.4.5: deepagents==0.4.5

**Published**: 2026-03-03

Changes since deepagents==0.4.4
release(deepagents): 0.4.5 (#1622)
chore(sdk): expand eval model matrix to 28 models across 7 providers (#1617)
chore: remove unnecessary `@pytest.mark.asyncio` decorators (#1616)
chore(sdk): update evals to use chat model instance  (#1614)
fix(sdk): make evals more robust across model output variations (#1608)
fix(infra): streamline evals workflow and summary (#1602)
docs(sdk): improve docstrings around summarization conditions (#1597)
chore(sdk): add json report to evals (#1594)
chore(sdk,cli): switch `claude-sonnet-4-5-20250929` -> `claude-sonnet-4-6` (#1590)
feat(cli): `/compact` command (#1579)
chore: standardize makefile type targets/ add type CI check (#1581)
ci(sdk): skip some evals (#1580)
docs(sdk): rename 'prompt' to 'system_prompt' in subagent keys (#1578)
docs(sdk): docstring fixes for `summarization.py` (#1568)
chore(sdk): remove unused base_path alias in skills.py (#1543)
chore(deps): bump the pip-dependencies group across 8 directories with 17 updates (#1564)
fix(sdk,cli,deps): support `timeout=0` for sandbox `execute()` (#1558)
fix: Potential fixes for 2 code quality findings (#1534)
fix: Variable defined multiple times (#1536)
feat(cli,sdk): compaction hook (#1420)
chore(deps): bump the pip-dependencies group across 8 directories with 19 updates (#1491)

---

Thanks to our contributors: @AdemBoukhris457, @AlexPapadakis, @eyurtsev

## deepagents-cli==0.0.26: deepagents-cli==0.0.26

**Published**: 2026-03-03

### Features

* Compaction hook ([#1420](https://github.com/langchain-ai/deepagents/issues/1420)) ([e87cdad](https://github.com/langchain-ai/deepagents/commit/e87cdaddb9a984c4fd189b4f71303881edb32cb2))
  * `/compact` command ([#1579](https://github.com/langchain-ai/deepagents/issues/1579)) ([46e9e95](https://github.com/langchain-ai/deepagents/commit/46e9e950087e973175d49d6a863cfa9d2f241528))
* `--profile-override` CLI flag ([#1605](https://github.com/langchain-ai/deepagents/issues/1605)) ([1984099](https://github.com/langchain-ai/deepagents/commit/1984099ae9ac4b0c13dc08722abb9d56055da7b7))
* Model profile overrides in config ([#1603](https://github.com/langchain-ai/deepagents/issues/1603)) ([d3d6899](https://github.com/langchain-ai/deepagents/commit/d3d6899209b7cf97447da0eee642b3f55261ffbc))
* Show summarization status and notification    ([#919](https://github.com/langchain-ai/deepagents/issues/919)) ([2e3cb74](https://github.com/langchain-ai/deepagents/commit/2e3cb743eff8e0a33b215359132cee13a673a4df))

### Bug Fixes

* Fix image path pasting qualms ([#1560](https://github.com/langchain-ai/deepagents/issues/1560)) ([8caaf3e](https://github.com/langchain-ai/deepagents/commit/8caaf3e71ae7f5a26c20ca86700cc51f3c6f37ed))
* Load `.agents` skill alias directories at interactive startup ([#1556](https://github.com/langchain-ai/deepagents/issues/1556)) ([af0a759](https://github.com/langchain-ai/deepagents/commit/af0a759ee231cfe8860da34fe39dbcff38726102))
* Coerce execute timeout to int before formatting tool display ([#1588](https://github.com/langchain-ai/deepagents/issues/1588)) ([04b8c72](https://github.com/langchain-ai/deepagents/commit/04b8c72361f7eb60b86fa560ef3f6283912c3395)), closes [#1586](https://github.com/langchain-ai/deepagents/issues/1586)
* Add missing flags to help screen ([#1619](https://github.com/langchain-ai/deepagents/issues/1619)) ([6067749](https://github.com/langchain-ai/deepagents/commit/60677492b3f49adc8535b34156029271a0728923))
* Align compaction messaging across `/compact` and `compact_conversation` ([#1583](https://github.com/langchain-ai/deepagents/issues/1583)) ([d455a6b](https://github.com/langchain-ai/deepagents/commit/d455a6b117dbca2dfb5156050273a84946adc247))
* Apply profile overrides in `/compact` ([#1612](https://github.com/langchain-ai/deepagents/issues/1612)) ([a9dc2c5](https://github.com/langchain-ai/deepagents/commit/a9dc2c5a1ad6d37f3f682491664b3f709cad8552))
* Disambiguate `/tokens` vs `/compact` token reporting ([#1618](https://github.com/langchain-ai/deepagents/issues/1618)) ([51c3347](https://github.com/langchain-ai/deepagents/commit/51c3347e5a402115d4ecbb09f0074c607270f992))
* Make LangSmith URL lookups non-blocking ([#1595](https://github.com/langchain-ai/deepagents/issues/1595)) ([572eaee](https://github.com/langchain-ai/deepagents/commit/572eaeefbe2f9318555733977e4771815879273c))
* Only exit input mode on backspace, not text clear ([#1479](https://github.com/langchain-ai/deepagents/issues/1479)) ([da0965e](https://github.com/langchain-ai/deepagents/commit/da0965ee33e6bdf7aec30865bed44a1bd38a7d12))
* Retry langsmith project url lookup until project exists ([#1562](https://github.com/langchain-ai/deepagents/issues/1562)) ([e137a63](https://github.com/langchain-ai/deepagents/commit/e137a633fdadda205b8e05a9fdabc4b978726a37))
* Show model info in `/tokens` before first usage ([#1607](https://github.com/langchain-ai/deepagents/issues/1607)) ([7b01ae7](https://github.com/langchain-ai/deepagents/commit/7b01ae7258ed079046262d1c174f1c406101294c))
* Support `timeout=0` for sandbox `execute()` ([#1558](https://github.com/langchain-ai/deepagents/issues/1558)) ([ed14443](https://github.com/langchain-ai/deepagents/commit/ed14443b5aec8afde1f74bb2e12a17cb7d1829b6))
* Unreachable `except` block ([#1535](https://github.com/langchain-ai/deepagents/issues/1535)) ([0e17e35](https://github.com/langchain-ai/deepagents/commit/0e17e352fa2ae4e34320a27d272586a10a0a7aec))

### Performance Improvements

* Optimize thread resume path with prefetch and batched hydration ([#1561](https://github.com/langchain-ai/deepagents/issues/1561)) ([068d112](https://github.com/langchain-ai/deepagents/commit/068d1128177de0f0a01f533a01184039c2a2f09f))
* Parallelize detection scripts for faster first-turn ([#1541](https://github.com/langchain-ai/deepagents/issues/1541)) ([dad8b6e](https://github.com/langchain-ai/deepagents/commit/dad8b6e15a78d26921c0cb831579648927caa551))
* Speed up `/threads` first-open ([#1481](https://github.com/langchain-ai/deepagents/issues/1481)) ([b248b15](https://github.com/langchain-ai/deepagents/commit/b248b15fd70de3c4d055b68a0dae04f00e41ea9e))

---

Thanks to our contributors: @Taylor0819, @keenborder786, @AdemBoukhris457, @jkennedyvz, @eyurtsev, @mdrxy


## deepagents==0.4.4: deepagents==0.4.4

**Published**: 2026-02-26

Changes since deepagents==0.4.3
release(deepagents): 0.4.4 (#1519)
fix(sdk): use consistent path stripping in CompositeBackend grep and glob (#1504)
fix(sdk): add timeout to glob in FilesystemMiddleware (#1508)
fix(sdk): validate tool_call_id before subagent invocation (#1506)
fix(sdk): bundle read template params into single base64 payload (#1500)
fix(deepagents): preserve ToolMessage artifact when evicting large outputs (#1482)
fix(sdk): fix glob matching with ** in _python_search fallback (#1350)
fix(sdk): sanitize paths in BaseSandbox ls_info and read templates (#1484)
docs(sdk): fix SkillsMiddleware.before_agent docstring to reflect caching behavior (#1495)
perf(sdk): parallelize summarization offload and LLM summary generation (#1488)
chore(sdk): add coverage to Makefile (#1493)
perf(sdk): batch memory source loading into a single download_files call (#1490)

---

Thanks to our contributors: @dotuananh0712, @AdemBoukhris457, @OiPunk

## deepagents==0.4.3: deepagents==0.4.3

**Published**: 2026-02-20

Changes since deepagents==0.4.2
release(deepagents): 0.4.3 (#1465)
fix(sdk): guard timeout forwarding for older backend packages (#1461)
fix(sdk): correct imports and mock inheritance in filesystem middleware tests (#1464)
fix(sdk): warn on virtual mode (#1462)
chore(sdk): add more eval test cases (#1452)
test(deepagents): add evaluation tests for skills (#1429)
fix(deepagents): Fix Memory prompt guidelines that could lead to wrong actions (#1448)
test(sdk): add smoke test for system prompt with memory and skills (#1430)
chore(deepagents): bump min version for langchain-anthropic (#1431)
feat(deepagents): add evaluation tests for agent memory (#1415)
chore(sdk): adapt integration tests to evals framework (#1426)
feat(sdk): add per-command `timeout` override to `execute()` (#1154)
chore: auto-generate makefile help from target annotations (#1417)
chore(sdk): add more evals (#1404)
chore(sdk): minor updates to system message (#1367)
chore(sdk): add model parameterization to evals (#1408)
chore: revert SDK version following yank (#1407)
chore(sdk): add simple eval scaffolding (#1400)
refactor(sdk): add logging to silent path skips, rename `validate_path` (#1370)
fix(cli,sdk): harden path hardening (#918)
chore(sdk): add smoke tests for system message (#1363)
feat(sdk): enable type checking in deepagents and resolve most linting issues (#991)
chore(sdk): move some integration tests into unit tests (#1330)
revert(sdk): reimplement skill loading via `skill` tool calling (#1328)
fix(sdk): missing `_validate_path()` on `Glob` tool's `path` parameter allows directory traversal (#1320)
fix: Path Traversal via Unsanitized Glob Pattern in glob_info() Bypasses Virtual Mode Sandbox (#1322)
feat(sdk): add base agent prompt (#1314)

---

Thanks to our contributors: @MuriloAndre2000, @vtrivedy, @sydney-runkle, @app/corridor-security, @app/copilot-swe-agent, @ccurme, @eyurtsev, @mdrxy

## deepagents-cli==0.0.25: deepagents-cli==0.0.25

**Published**: 2026-02-20

### Features

* Set OpenRouter headers, default to `gemini-3.1-pro-preview` ([#1455](https://github.com/langchain-ai/deepagents/issues/1455)) ([95c0b71](https://github.com/langchain-ai/deepagents/commit/95c0b71c2fafbec8424d92e7698563045a787866)), closes [#1454](https://github.com/langchain-ai/deepagents/issues/1454)

### Bug Fixes

* Duplicate paste issue ([#1460](https://github.com/langchain-ai/deepagents/issues/1460)) ([9177515](https://github.com/langchain-ai/deepagents/commit/9177515c8a968882e980d229fb546c9753475de7)), closes [#1425](https://github.com/langchain-ai/deepagents/issues/1425)
* Remove model fallback to env variables ([#1458](https://github.com/langchain-ai/deepagents/issues/1458)) ([c9b4275](https://github.com/langchain-ai/deepagents/commit/c9b4275e22fda5aa35b3ddce924277ec8aaa9e1f))

## deepagents-cli==0.0.24: deepagents-cli==0.0.24

**Published**: 2026-02-20

### Features

* Add single-click link opening for rich-style hyperlinks ([#1433](https://github.com/langchain-ai/deepagents/issues/1433)) ([ef1fd31](https://github.com/langchain-ai/deepagents/commit/ef1fd3115d77cd769e664d2ad0345623f9ce4019))
* Display model name and context window size using `/tokens` ([#1441](https://github.com/langchain-ai/deepagents/issues/1441)) ([ff7ef0f](https://github.com/langchain-ai/deepagents/commit/ff7ef0f87e6dfc6c581edb34b1a57be7ff6e059c))
* Refresh local context after summarization events ([#1384](https://github.com/langchain-ai/deepagents/issues/1384)) ([dcb9583](https://github.com/langchain-ai/deepagents/commit/dcb95839de360f03d2fc30c9144096874b24006f))
* Windowed thread hydration and configurable thread limit ([#1435](https://github.com/langchain-ai/deepagents/issues/1435)) ([9da8d0b](https://github.com/langchain-ai/deepagents/commit/9da8d0b5c86441e87b85ee6f8db1d23848a823ed))
* Per-command `timeout` override to `execute()` ([#1154](https://github.com/langchain-ai/deepagents/issues/1154)) ([49277d4](https://github.com/langchain-ai/deepagents/commit/49277d45a026c86b5bf176142dcb1dfc2c7643ae))

### Bug Fixes

* Escape `Rich` markup in shell command display ([#1413](https://github.com/langchain-ai/deepagents/issues/1413)) ([c330290](https://github.com/langchain-ai/deepagents/commit/c33029032a1e2072dab2d06e93953f2acaa6d400))
* Load root-level `AGENTS.md` into agent system prompt ([#1445](https://github.com/langchain-ai/deepagents/issues/1445)) ([047fa2c](https://github.com/langchain-ai/deepagents/commit/047fa2cadfb9f005410c21a6e1e3b3d59eadda7d))
* Prevent crash when quitting with queued messages ([#1421](https://github.com/langchain-ai/deepagents/issues/1421)) ([a3c9ae6](https://github.com/langchain-ai/deepagents/commit/a3c9ae681501cd3efca82573a8d20a0dc8c9b338))

---

Thanks to our contributors: @firaslamouchi21, @app/github-actions, @mdrxy


## deepagents-cli==0.0.23: deepagents-cli==0.0.23

**Published**: 2026-02-18

### Features

* Add drag-and-drop image attachment to chat input ([#1386](https://github.com/langchain-ai/deepagents/issues/1386)) ([cd3d89b](https://github.com/langchain-ai/deepagents/commit/cd3d89b4419b4c164915ff745afff99cb11b55a5))
* Skill deletion command ([#580](https://github.com/langchain-ai/deepagents/issues/580)) ([40a8d86](https://github.com/langchain-ai/deepagents/commit/40a8d866f952e0cf8d856e2fa360de771721b99a))
* Add visual mode indicators to chat input ([#1371](https://github.com/langchain-ai/deepagents/issues/1371)) ([1ea6159](https://github.com/langchain-ai/deepagents/commit/1ea6159b068b8c7d721d90a5c196e2eb9877c1c5))
* Dismiss completion dropdown on `esc` ([#1362](https://github.com/langchain-ai/deepagents/issues/1362)) ([961b7fc](https://github.com/langchain-ai/deepagents/commit/961b7fc764a7fbf63466d78c1d80b154b5d1692b))
* Expand local context & implement via bash for sandbox support ([#1295](https://github.com/langchain-ai/deepagents/issues/1295)) ([de8bc7c](https://github.com/langchain-ai/deepagents/commit/de8bc7cbbd7780ef250b3838f61ace85d4465c0a))
* Show sdk version alongside cli version ([#1378](https://github.com/langchain-ai/deepagents/issues/1378)) ([e99b4c8](https://github.com/langchain-ai/deepagents/commit/e99b4c864afd01d68c3829304fb93cc0530eedee))
* Strip mode-trigger prefix from chat input text ([#1373](https://github.com/langchain-ai/deepagents/issues/1373)) ([6879eff](https://github.com/langchain-ai/deepagents/commit/6879effb37c2160ef3835cd2d058b79f9d3a5a99))

### Bug Fixes

* Path hardening ([#918](https://github.com/langchain-ai/deepagents/issues/918)) ([fc34a14](https://github.com/langchain-ai/deepagents/commit/fc34a144a2791c75f8b4c11f67dd1adbc029c81e))
* Only navigate prompt history at input boundaries ([#1385](https://github.com/langchain-ai/deepagents/issues/1385)) ([6d82d6d](https://github.com/langchain-ai/deepagents/commit/6d82d6de290e73b897a58d724f3dfc7a32a06cba))
* Substitute image base64 for placeholder in result block ([#1381](https://github.com/langchain-ai/deepagents/issues/1381)) ([54f4d8e](https://github.com/langchain-ai/deepagents/commit/54f4d8e834c4aad672d78b4130cd43f2454424fa))

### Performance Improvements

* Defer more heavy imports to speed up startup ([#1389](https://github.com/langchain-ai/deepagents/issues/1389)) ([4dd10d5](https://github.com/langchain-ai/deepagents/commit/4dd10d5c9f3cfe13cd7b9ac18a1799c0832976ff))

---

Thanks to our contributors: @sydney-runkle, @an-ny89, @app/github-actions, @mdrxy, @breath57


## deepagents-cli==0.0.22: deepagents-cli==0.0.22

**Published**: 2026-02-17

### Features

* Add `langchain-openrouter` ([#1340](https://github.com/langchain-ai/deepagents/issues/1340)) ([5b35247](https://github.com/langchain-ai/deepagents/commit/5b35247b126ed328e9562ac3a3c2acd184b39011))
* Update system & default prompt ([#1293](https://github.com/langchain-ai/deepagents/issues/1293)) ([2aeb092](https://github.com/langchain-ai/deepagents/commit/2aeb092e027affd9eaa8a78b33101e1fd930d444))
* Warn when ripgrep is not installed ([#1337](https://github.com/langchain-ai/deepagents/issues/1337)) ([0367efa](https://github.com/langchain-ai/deepagents/commit/0367efa323b7a29c015d6a3fbb5af8894dc724b8))
* Ensure dep group version match for CLI ([#1316](https://github.com/langchain-ai/deepagents/issues/1316)) ([db05de1](https://github.com/langchain-ai/deepagents/commit/db05de1b0c92208b9752f3f03fa5fa54813ab4ef))
* Enable type checking in `deepagents` and resolve most linting issues ([#991](https://github.com/langchain-ai/deepagents/issues/991)) ([5c90376](https://github.com/langchain-ai/deepagents/commit/5c90376c02754c67d448908e55d1e953f54b8acd))

### Bug Fixes

* Handle `None` selection endpoint, `IndexError` in clipboard copy ([#1342](https://github.com/langchain-ai/deepagents/issues/1342)) ([5754031](https://github.com/langchain-ai/deepagents/commit/57540316cf928da3dcf4401fb54a5d0102045d67))

### Performance Improvements

* Defer heavy imports ([#1361](https://github.com/langchain-ai/deepagents/issues/1361)) ([dd992e4](https://github.com/langchain-ai/deepagents/commit/dd992e48feb3e3a9fc6fd93f56e9d8a9cb51c7bf))

---

Thanks to our contributors: @vtrivedy, @sydney-runkle, @sandeepyadav1478, @app/github-actions, @mdrxy


## deepagents-acp==0.0.4: deepagents-acp==0.0.4

**Published**: 2026-02-13

Changes since deepagents-acp==0.0.3
chore(acp): release 0.0.4 (#1325)
fix: ACP Command Type Extraction Ignores Piped Commands, Enabling Privilege Escalation via "Always Allow" (#1321)

---

Thanks to our contributors: @app/corridor-security

## deepagents==0.4.2: deepagents==0.4.2

**Published**: 2026-02-12

Changes since deepagents==0.4.1
release(sdk): 0.4.2 (#1312)
feat(sdk): reimplement skill loading via `skill` tool calling (#1306)

---

Thanks to our contributors: @sydney-runkle

## deepagents-acp==0.0.3: deepagents-acp==0.0.3

**Published**: 2026-02-12

Changes since deepagents-acp==0.0.2
release(acp): 0.0.3 (#1310)
feat(acp): Adds execute tool handling, allow of type permissions, demo coding agent (#1302)
chore(acp): automatically attach checkpointer if missing (#1294)

---

Thanks to our contributors: @jacoblee93

## deepagents==0.4.1: deepagents==0.4.1

**Published**: 2026-02-11

Changes since deepagents==0.4.0
feat(sdk): return native image content blocks from read_file (#1163)
chore(deps): bump the pip-dependencies group across 8 directories with 9 updates (#1252)
refactor(sdk): use public `SummarizationMiddleware` middleware (#1241)
chore: rename `master` to `main` (#984)

---

Thanks to our contributors: @app/dependabot, @mdrxy

## deepagents-cli==0.0.21: deepagents-cli==0.0.21

**Published**: 2026-02-11

### Features

* Support piped stdin as prompt input ([#1254](https://github.com/langchain-ai/deepagents/issues/1254)) ([cca61ff](https://github.com/langchain-ai/deepagents/commit/cca61ff5edb5e2424bfc54b2ac33b59a520fdd6a))
* `/threads` command switcher ([#1262](https://github.com/langchain-ai/deepagents/issues/1262)) ([45bf38d](https://github.com/langchain-ai/deepagents/commit/45bf38d7c5ca7ca05ec58c320494a692e419b632)), closes [#1111](https://github.com/langchain-ai/deepagents/issues/1111)
* Make thread link clickable when switching ([#1296](https://github.com/langchain-ai/deepagents/issues/1296)) ([9409520](https://github.com/langchain-ai/deepagents/commit/9409520d524c576c3b0b9686c96a1749ee9dcbbb)), closes [#1291](https://github.com/langchain-ai/deepagents/issues/1291)
* `/trace` command to open LangSmith thread, link in switcher ([#1291](https://github.com/langchain-ai/deepagents/issues/1291)) ([fbbd45b](https://github.com/langchain-ai/deepagents/commit/fbbd45b51be2cf09726a3cd0adfcb09cb2b1ff46))
* `/changelog`, `/feedback`, `/docs` ([#1261](https://github.com/langchain-ai/deepagents/issues/1261)) ([4561afb](https://github.com/langchain-ai/deepagents/commit/4561afbea17bb11f7fc02ae9f19db15229656280))
* Show langsmith thread url on session teardown ([#1285](https://github.com/langchain-ai/deepagents/issues/1285)) ([899fd1c](https://github.com/langchain-ai/deepagents/commit/899fd1cdea6f7b2003992abd3f6173d630849a90))

### Bug Fixes

* Fix stale model settings during model hot-swap ([#1257](https://github.com/langchain-ai/deepagents/issues/1257)) ([55c119c](https://github.com/langchain-ai/deepagents/commit/55c119cb6ce73db7cae0865172f00ab8fc9f8fc1))

---

Thanks to our contributors: @app/dependabot, @app/github-actions, @mdrxy


## deepagents-acp==0.0.2: deepagents-acp==0.0.2

**Published**: 2026-02-11

Changes since deepagents-acp==0.0.1
release(acp): 0.0.2 (#1288)
chore(acp): more parameterization fixes to allow arbitrary agent (#1286)
chore(acp): subagent streaming for tools (#1284)
chore: another minor fix in acp (#1282)
chore: rename interface (#1281)
chore: reparameterize init, improve test coverage (#1279)
chore: rollback uv workspace migration, restore per-package lockfiles (#1278)
chore: migrate to uv workspace (#1264)
chore(deps): bump the pip-dependencies group across 8 directories with 9 updates (#1252)
chore(deps): bump cryptography from 46.0.4 to 46.0.5 in /libs/acp (#1248)
chore: rename `master` to `main` (#984)
chore(deps): bump the pip-dependencies group across 8 directories with 27 updates (#1230)
feat(acp): Bump ACP version (#1214)
style: update brand names (#1180)

---

Thanks to our contributors: @app/dependabot, @eyurtsev

## deepagents==0.4.0: deepagents==0.4.0

**Published**: 2026-02-10

Changes since deepagents==0.3.12

New integration packages for pluggable sandboxes: [langchain-modal](https://pypi.org/project/langchain-modal/), [langchain-daytona](https://pypi.org/project/langchain-daytona/), and [langchain-runloop](https://pypi.org/project/langchain-daytona/). See [sandboxes guide](/oss/deepagents/sandboxes) and example [data analysis tutorial](/oss/deepagents/data-analysis).

Notable changes from #1234
* Refactor the SDK's summarization middleware.
  * Summarization now happens in the model node via wrap_model_call events. Due to this we retain the full message history in the graph state.
  * System messages and tool definitions are accurately counted toward summarization triggers.
  * Add exception handling for context overflows: `ChatOpenAI` and `ChatAnthropic` now raise a standard LangChain exception when input exceeds a model's token limit. We catch this error and trigger summarization.
* When model strings in `create_deep_agent` are prefixed with `'openai:'`, we default to the Responses API.

chore(sdk): add support for `,` in allowed-tools, fail gently for bullet list (#1235)
fix(sdk): relax skills parsing for allowed tools (#1232)
chore(sdk)!: move sandbox provider back to cli (#1226)
refactor(sdk): move function-level test imports out to top (#1168)
fix(sdk): harden skills metadata parsing, improve spec compliance (#1189)
style: update brand names (#1180)

---

Thanks to our contributors: @sydney-runkle, @eyurtsev, @mdrxy

## deepagents-cli==0.0.20: deepagents-cli==0.0.20

**Published**: 2026-02-10

### Features

* `--quiet` flag to suppress non-agent output w/ `-n` ([#1201](https://github.com/langchain-ai/deepagents/issues/1201)) ([3e96792](https://github.com/langchain-ai/deepagents/commit/3e967926655cf5249a1bc5ca3edd48da9dd3061b))
* Add docs link to `/help` ([#1098](https://github.com/langchain-ai/deepagents/issues/1098)) ([8f8fc98](https://github.com/langchain-ai/deepagents/commit/8f8fc98bd403d96d6ed95fce8906d9c881236613))
* Built-in skills, ship `skill-creator` as first ([#1191](https://github.com/langchain-ai/deepagents/issues/1191)) ([42823a8](https://github.com/langchain-ai/deepagents/commit/42823a88d1eb7242a5d9b3eba981f24b3ea9e274))
* Enrich built-in skill metadata with license and compatibility info ([#1193](https://github.com/langchain-ai/deepagents/issues/1193)) ([b8179c2](https://github.com/langchain-ai/deepagents/commit/b8179c23f9130c92cb1fb7c6b34d98cc32ec092a))
* Implement message queue for CLI ([#1197](https://github.com/langchain-ai/deepagents/issues/1197)) ([c4678d7](https://github.com/langchain-ai/deepagents/commit/c4678d7641785ac4f17045eb75d55f9dc44f37fe))
* Model switcher & arbitrary chat model support ([#1127](https://github.com/langchain-ai/deepagents/issues/1127)) ([28fc311](https://github.com/langchain-ai/deepagents/commit/28fc311da37881257e409149022f0717f78013ef))
* Non-interactive mode w/ shell allow-listing ([#909](https://github.com/langchain-ai/deepagents/issues/909)) ([433bd2c](https://github.com/langchain-ai/deepagents/commit/433bd2cb493d6c4b59f2833e4304eead0304195a))
* Support custom working directories and LangSmith sandbox templates ([#1099](https://github.com/langchain-ai/deepagents/issues/1099)) ([21e7150](https://github.com/langchain-ai/deepagents/commit/21e715054ea5cf48cab05319b2116509fbacd899))

### Bug Fixes

* `-m` initial prompt submission ([#1184](https://github.com/langchain-ai/deepagents/issues/1184)) ([a702e82](https://github.com/langchain-ai/deepagents/commit/a702e82a0f61edbadd78eff6906ecde20b601798))
* Align skill-creator example scripts with agent skills spec ([#1177](https://github.com/langchain-ai/deepagents/issues/1177)) ([199d176](https://github.com/langchain-ai/deepagents/commit/199d17676ac1bfee645908a6c58193291e522890))
* Harden dictionary iteration and HITL fallback handling ([#1151](https://github.com/langchain-ai/deepagents/issues/1151)) ([8b21fc6](https://github.com/langchain-ai/deepagents/commit/8b21fc6105d808ad25c53de96f339ab21efb4474))
* Per-subcommand help screens, short flags, and skills enhancements ([#1190](https://github.com/langchain-ai/deepagents/issues/1190)) ([3da1e8b](https://github.com/langchain-ai/deepagents/commit/3da1e8bc20bf39aba80f6507b9abc2352de38484))
* Port skills behavior from SDK ([#1192](https://github.com/langchain-ai/deepagents/issues/1192)) ([ad9241d](https://github.com/langchain-ai/deepagents/commit/ad9241da6e7e23e4430756a1d5a3afb6c6bfebcc)), closes [#1189](https://github.com/langchain-ai/deepagents/issues/1189)
* Rewrite skills create template to match spec guidance ([#1178](https://github.com/langchain-ai/deepagents/issues/1178)) ([f08ad52](https://github.com/langchain-ai/deepagents/commit/f08ad520172bd114e4cebf69138a10cbf98e157a))
* Terminal virtualize scrolling to stop perf issues ([#965](https://github.com/langchain-ai/deepagents/issues/965)) ([5633c82](https://github.com/langchain-ai/deepagents/commit/5633c825832a0e8bd645681db23e97af31879b65))
* Update splash thread ID on `/clear` ([#1204](https://github.com/langchain-ai/deepagents/issues/1204)) ([23651ed](https://github.com/langchain-ai/deepagents/commit/23651edbc236e4a68fb0d9496506e6293b836cd9))
* Refactor summarization middleware ([#1138](https://github.com/langchain-ai/deepagents/issues/1138)) ([e87001e](https://github.com/langchain-ai/deepagents/commit/e87001eace2852c2df47095ffd2611f09fdda2f5))

---

Thanks to our contributors: @1Ninad ([LinkedIn](https://linkedin.com/in/ninad22/)), @sydney-runkle, @an-ny89, @saakshigupta2002, @eyurtsev, @mdrxy


## langchain-runloop==0.0.2: langchain-runloop==0.0.2

**Published**: 2026-02-09

Changes since langchain-runloop==0.0.1
release: runloop 0.0.2 (#1219)

## langchain-runloop==0.0.1: langchain-runloop==0.0.1

**Published**: 2026-02-09

Initial release
chore: standardize init in partner packages (#1211)
chore(infra): add modal and runloop to ci (#1208)
feat: add partner packages for modal and runloop (#1207)

## langchain-modal==0.0.1: langchain-modal==0.0.1

**Published**: 2026-02-09

Initial release
chore: standardize init in partner packages (#1211)
chore(infra): add modal and runloop to ci (#1208)
feat: add partner packages for modal and runloop (#1207)

## langchain-daytona==0.0.2: langchain-daytona==0.0.2

**Published**: 2026-02-09

Initial release
release(daytona): 0.0.2 (#1213)
chore: standardize init in partner packages (#1211)
chore(daytona): minor fix (#1210)
feat: add partner packages for modal and runloop (#1207)
chore(deps): bump the pip-dependencies group across 3 directories with 5 updates (#1183)
release(sdk): deepagents 0.3.12 (#1175)
revert(deepagents): refactor summarization middleware (#1172)
fix(deepagents): refactor summarization middleware (#1138)
chore(daytona): refactor name (#1149)
chore(daytona): add integration package for daytona (#1140)

---

Thanks to our contributors: @app/dependabot, @eyurtsev

## deepagents==0.3.12: deepagents==0.3.12

**Published**: 2026-02-06

Changes since deepagents==0.3.11
* feat(sdk): refactor namespace gen for StoreBackend (#1169)
* fix(sdk): add explicit `NotImplementedError` to protocol method bodies (#1152)
* refactor(cli): reorder property -> method order in `SandboxBackendProtocol` (#1153)
* feat(sdk): add sandbox provider exceptions (#1108)

---

Thanks to our contributors: @eyurtsev, @mdrxy

## deepagents-cli==0.0.19: deepagents-cli==0.0.19

**Published**: 2026-02-06

### Features

* Add click support and hover styling to autocomplete popup ([#1130](https://github.com/langchain-ai/deepagents/issues/1130)) ([b1cc83d](https://github.com/langchain-ai/deepagents/commit/b1cc83d277e01614b0cc4141993cde40ce68d632))
* Per-command `timeout` override to `execute` tool ([#1158](https://github.com/langchain-ai/deepagents/issues/1158)) ([cb390ef](https://github.com/langchain-ai/deepagents/commit/cb390ef7a89966760f08c5aceb2211220e8653b8))
* Highlight file mentions and support CJK parsing ([#558](https://github.com/langchain-ai/deepagents/issues/558)) ([cebe333](https://github.com/langchain-ai/deepagents/commit/cebe333246f8bea6b04d6283985e102c2ed5d744))
* Make thread id in splash clickable ([#1159](https://github.com/langchain-ai/deepagents/issues/1159)) ([6087fb2](https://github.com/langchain-ai/deepagents/commit/6087fb276f39ed9a388d722ff1be88d94debf49f))
* Use LocalShellBackend, gives shell to subagents ([#1107](https://github.com/langchain-ai/deepagents/issues/1107)) ([b57ea39](https://github.com/langchain-ai/deepagents/commit/b57ea3906680818b94ecca88b92082d4dea63694))

### Bug Fixes

* Disable iTerm2 cursor guide during execution ([#1123](https://github.com/langchain-ai/deepagents/issues/1123)) ([4eb7d42](https://github.com/langchain-ai/deepagents/commit/4eb7d426eaefa41f74cc6056ae076f475a0a400d))
* Dismiss modal screens on escape key ([#1128](https://github.com/langchain-ai/deepagents/issues/1128)) ([27047a0](https://github.com/langchain-ai/deepagents/commit/27047a085de99fcb9977816663e61114c2b008ac))
* Hide resume hint on app error and improve startup message ([#1135](https://github.com/langchain-ai/deepagents/issues/1135)) ([4e25843](https://github.com/langchain-ai/deepagents/commit/4e258430468b56c3e79499f6b7c5ab7b9cd6f45b))
* Propagate app errors instead of masking ([#1126](https://github.com/langchain-ai/deepagents/issues/1126)) ([79a1984](https://github.com/langchain-ai/deepagents/commit/79a1984629847ce067b6ce78ad14797889724244))
* Remove Interactive Features from --help output ([#1161](https://github.com/langchain-ai/deepagents/issues/1161)) ([a296789](https://github.com/langchain-ai/deepagents/commit/a2967898933b77dd8da6458553f49e717fa732e6))
* Rename `SystemMessage` -&gt; `AppMessage` ([#1113](https://github.com/langchain-ai/deepagents/issues/1113)) ([f576262](https://github.com/langchain-ai/deepagents/commit/f576262aeee54499e9970acf76af93553fccfefd))
* Unify spinner API to support dynamic status text ([#1124](https://github.com/langchain-ai/deepagents/issues/1124)) ([bb55608](https://github.com/langchain-ai/deepagents/commit/bb55608b7172f55df38fef88918b2fded894e3ce))
* Update help text to include `Esc` key for rejection ([#1122](https://github.com/langchain-ai/deepagents/issues/1122)) ([8f4bcf5](https://github.com/langchain-ai/deepagents/commit/8f4bcf52547dcd3e38d4d75ce395eb973a7ee2c0))

---

Thanks to our contributors: @Yo-sure, @qkmaosjtu, @mdrxy


## langchain_daytona==0.0.1: langchain-daytona==0.0.1

**Published**: 2026-02-05

Initial release
chore(daytona): add integration package for daytona (#1140)

---

Thanks to our contributors: @eyurtsev

## deepagents-cli==0.0.18: deepagents-cli==0.0.18

**Published**: 2026-02-05

### Features

* LangSmith sandbox integration ([#1077](https://github.com/langchain-ai/deepagents/issues/1077)) ([7d17be0](https://github.com/langchain-ai/deepagents/commit/7d17be00b59e586c55517eaca281342e1a6559ff))
* Resume thread enhancements ([#1065](https://github.com/langchain-ai/deepagents/issues/1065)) ([e6663b0](https://github.com/langchain-ai/deepagents/commit/e6663b0b314582583afd32cb906a6d502cd8f16b))
* Support  .`agents/skills` dir alias ([#1059](https://github.com/langchain-ai/deepagents/issues/1059)) ([ec1db17](https://github.com/langchain-ai/deepagents/commit/ec1db172c12bc8b8f85bb03138e442353d4b1013))

### Bug Fixes

* `Ctrl+E` for tool output toggle ([#1100](https://github.com/langchain-ai/deepagents/issues/1100)) ([9fa9d72](https://github.com/langchain-ai/deepagents/commit/9fa9d727dbf6b8996a61f2f764675dbc2e23c1b6))
* Consolidate tool output expand/collapse hint placement ([#1102](https://github.com/langchain-ai/deepagents/issues/1102)) ([70db34b](https://github.com/langchain-ai/deepagents/commit/70db34b5f15a7e81ff586dd0adb2bdfd9ac5d4e9))
* Delete `/exit` ([#1052](https://github.com/langchain-ai/deepagents/issues/1052)) ([8331b77](https://github.com/langchain-ai/deepagents/commit/8331b7790fcf0474e109c3c29f810f4ced0f1745)), closes [#836](https://github.com/langchain-ai/deepagents/issues/836) [#651](https://github.com/langchain-ai/deepagents/issues/651)
* Installed default prompt not updated following upgrade ([#1082](https://github.com/langchain-ai/deepagents/issues/1082)) ([bffd956](https://github.com/langchain-ai/deepagents/commit/bffd95610730c668406c485ad941835a5307c226))
* Replace silent exception handling with proper logging ([#708](https://github.com/langchain-ai/deepagents/issues/708)) ([20faf7a](https://github.com/langchain-ai/deepagents/commit/20faf7ac244d97e688f1cc4121d480ed212fe97c))
* Show full shell command in error output ([#1097](https://github.com/langchain-ai/deepagents/issues/1097)) ([23bb1d8](https://github.com/langchain-ai/deepagents/commit/23bb1d8af85eec8739aea17c3bb3616afb22072a)), closes [#1080](https://github.com/langchain-ai/deepagents/issues/1080)
* Support `-h`/`--help` flags ([#1106](https://github.com/langchain-ai/deepagents/issues/1106)) ([26bebf5](https://github.com/langchain-ai/deepagents/commit/26bebf592ab56ffdc5eeff55bb7c2e542ef8f706))

---

Thanks to our community contributors: @kaushikkumarkr


## deepagents-acp==0.0.1: deepagents-acp==0.0.1

**Published**: 2026-02-06

Initial release
feat(acp): add acp implementation (#865)
chore: correct brand name (#1025)
chore: nit versions (#997)
chore: enrich `pyproject.toml` files (#996)
chore(deps): bump the uv group across 3 directories with 6 updates (#905)
fix(sdk,acp,harbor): don't allow relative imports (#882)
chore: update `Makefile` targets, add pre-commit hooks (#790)
chore(deps): bump the uv group across 3 directories with 3 updates (#796)
fix: import rules (#763)
chore: automatically sort imports (#740)
chore(acp): clean up tests (#604)
feat(acp): draft acp support (#589)

---

Thanks to our contributors: @app/dependabot, @eyurtsev, @mdrxy

## deepagents==0.3.11: deepagents==0.3.11

**Published**: 2026-02-04

Changes since deepagents==0.3.10
* feat(sdk): subagent skills, middleware refactor (#1041)
* fix(sdk): add newlines in tool result message for large outputs (#1053)

---

Thanks to our contributors: @sydney-runkle

## deepagents==0.3.10: deepagents==0.3.10

**Published**: 2026-02-03

Changes since deepagents==0.3.9
* fix(sdk): grep should perform literal search instead of regex (#975)
* feat(sdk): sandbox provider interface (#900)
* fix(sdk): handle exact file paths in grep and glob operations (#1017)
* fix: add py.typed to deepagents (#1024)
* fix(sdk): return error message instead of raising ValueError for invalid paths (#994)
* fix(deepagents): prevent state merge error in parallel sub-agents (#954)
* chore: enrich `pyproject.toml` files (#996)
* chore(sdk,cli): add `VERSION` (#983)
* feat(sdk): add LocalShellBackend (#930)
* fix(sdk): string interpolation in BaseSandbox write/edit tools  (#955)
---

Thanks to our contributors: @vtrivedy, @sydney-runkle, @sandeepyadav1478, @Yo-sure, @trindadetiago, @eyurtsev, @mdrxy

## deepagents-cli==0.0.17: deepagents-cli==0.0.17

**Published**: 2026-02-04

### Features

* Add expandable shell command display in HITL approval ([#976](https://github.com/langchain-ai/deepagents/issues/976)) ([fb8a007](https://github.com/langchain-ai/deepagents/commit/fb8a007123d18025beb1a011f2050e1085dcf69b))
* Model identity ([#770](https://github.com/langchain-ai/deepagents/issues/770)) ([e54a0ee](https://github.com/langchain-ai/deepagents/commit/e54a0ee43c7dfc7fd14c3f43d37cc0ee5e85c5a8))
* Sandbox provider interface ([#900](https://github.com/langchain-ai/deepagents/issues/900)) ([d431cfd](https://github.com/langchain-ai/deepagents/commit/d431cfd4a56713434e84f4fa1cdf4a160b43db95))

---

Thanks to our contributors: @sydney-runkle, @jkennedyvz, @eyurtsev, @mdrxy


## deepagents-cli==0.0.16: deepagents-cli==0.0.16

**Published**: 2026-02-03

### Features

* Add configurable timeout to `ShellMiddleware` ([#961](https://github.com/langchain-ai/deepagents/issues/961)) ([bc5e417](https://github.com/langchain-ai/deepagents/commit/bc5e4178a76d795922beab93b87e90ccaf99fba6))
* Add timeout formatting to enhance `shell` command display ([#987](https://github.com/langchain-ai/deepagents/issues/987)) ([cbbfd49](https://github.com/langchain-ai/deepagents/commit/cbbfd49011c9cf93741a024f6efeceeca830820e))
* Display thread ID at splash ([#988](https://github.com/langchain-ai/deepagents/issues/988)) ([e61b9e8](https://github.com/langchain-ai/deepagents/commit/e61b9e8e7af417bf5f636180631dbd47a5bb31bb))

### Bug Fixes

* Improve clipboard copy/paste on macOS ([#960](https://github.com/langchain-ai/deepagents/issues/960)) ([3e1c604](https://github.com/langchain-ai/deepagents/commit/3e1c604474bd98ce1e0ac802df6fb049dd049682))
* Make `pyperclip` hard dep ([#985](https://github.com/langchain-ai/deepagents/issues/985)) ([0f5d4ad](https://github.com/langchain-ai/deepagents/commit/0f5d4ad9e63d415c9b80cd15fa0f89fc2f91357b)), closes [#960](https://github.com/langchain-ai/deepagents/issues/960)
* Revert, improve clipboard copy/paste on macOS ([#964](https://github.com/langchain-ai/deepagents/issues/964)) ([4991992](https://github.com/langchain-ai/deepagents/commit/4991992a5a60fd9588e2110b46440337affc80da))
* Update timeout message for long-running commands in `ShellMiddleware` ([#986](https://github.com/langchain-ai/deepagents/issues/986)) ([dcbe128](https://github.com/langchain-ai/deepagents/commit/dcbe12805a3650e63da89df0774dd7e0181dbaa6))

---

Thanks to our contributors: @vtrivedy, @jkennedyvz, @app/github-actions, @mdrxy


## deepagents-cli==0.0.15: deepagents-cli==0.0.15

**Published**: 2026-01-29

Changes since deepagents-cli==0.0.14

release(cli): 0.0.15 (#953)
feat(cli): custom subagents (#916)

## deepagents-cli==0.0.14: deepagents-cli==0.0.14

**Published**: 2026-01-29

Changes since deepagents-cli==0.0.13

release(cli): 0.0.14 (#952)
fix(cli): tool rendering in TUI (#945)
release(deepagents): 0.3.9 (#944)
fix(sdk): summarization offloading (#920)
docs: update cli cover photo (#929)
fix(cli): scrolling wrapping on input/resume, running tool spinner (#913)
feat(cli): Support VertexAI provider on the CLI (#828)
chore(sdk): ReadMe cleanup (#906)
feat: lazily adding trace link to deepagents banner (#894)
fix: default to 5.2 (#896)
feat(sdk): model capability validation (#733)
chore: update `Makefile` targets, add pre-commit hooks (#790)
chore(cli): update outdated tests (#881)

## deepagents==0.3.9: deepagents==0.3.9

**Published**: 2026-01-28

Changes since deepagents==0.3.8

release(deepagents): 0.3.9 (#944)
fix(sdk): summarization offloading (#920)
refactor: filesystem middleware (#928)
chore(deps): bump the uv group across 3 directories with 6 updates (#905)
test(sdk): add unit test for handling large single-line file bug (#813)
feat(deepagents): truncate middle of content instead of end on tool response eviction (#901)
feat(deepagents): truncate tool messages from read_file (#897)
fix(sdk,acp,harbor): don't allow relative imports (#882)
fix(sdk): handle large payloads and headless container execution (#872)
chore: update `Makefile` targets, add pre-commit hooks (#790)

## deepagents==0.3.8: deepagents==0.3.8

**Published**: 2026-01-22

Changes since deepagents==0.3.7

release(sdk): bump version (#879)
fix(sdk): make sure that tool truncation applies to execute (#547)
test(sdk): use unique `thread_id` for summarization test configuration (#871)

## deepagents-cli==0.0.13: deepagents-cli==0.0.13

**Published**: 2026-01-22

Changes since deepagents-cli==0.0.12

release(sdk): bump version (#879)
fix(sdk): make sure that tool truncation applies to execute (#547)
fix(cli): hitl spinner errors (#861)
fix(cli): Improve HITL approval UX (#859)
release: patch release 0.3.7 (#869)
fix(cli): resume should load previous thread messages (#862)
chore(cli): clean checks in cli spacing (#854)
fix(cli): avoid jumping (#853)
chore(cli): turn on more linting (#852)
Add current model display to status bar (#844)
Disable double message submission while agent is working
update remember prompt to work with memory and skills (#842)
feat(cli): focus input when clicking anywhere in the terminal (#826)
feat: summarization offloading (#742)
Bump version to 0.3.7a1 (#817)
chore(deps): bump the uv group across 5 directories with 1 update (#811)
fix(infra): exclude `build/` from typechecking (#808)
fix(sdk): BaseSandbox.ls_info() to return absolute paths (#797)
chore: bump deepagents-cli to 0.0.13a2 (#795)
docs: add testing readme (#788)
fix(cli): include tcss and py.typed in package data (#781)
feat(cli): format file tree with markdown (#782)
fix(cli): add explicit package inclusion for setuptools (#780)
add prompt seeding with -m flag (#755)
docs: update model configuration details in `README` (#772)
fix: import rules (#763)
release(deepagents-cli): 0.0.13a1 (#756)
cli-token-tracking-fixes (#706)
release: deepagents 0.3.6 (#752)
chore: automatically sort imports (#740)
Add LangSmith tracing status to welcome banner (#741)
feat(cli): inject local context into system prompt via `LocalContextMiddleware`
fix: don't allow Rich markup from user content (#704)
fix(cli): remove duplicate version from `welcome.py` (#737)
feat(cli): add `--version`/`/version` commands (#698)
minor release(deepagents): bump version to 0.3.5 (#695)
Port SDK Memory to CLI (#691)
fix thread id (#692)
chore(ci): add uv lock checks (#681)
update version bounds (#687)
CLI Refactor to Textual (#686)
Fix invalid YAML in skill-creator SKILL.md frontmatter (#675)
feat(deepagents): add skills to sdk (#591)
docs: replace gemini 1.5 (#653)
feat(cli): show version in splash screen (#610)
chore(cli): expose version (#609)
fix(cli): handle read_file offset exceeding file length by returning all lines (issue #559) (#568)
chore(cli): remove line (#601)

## deepagents==0.3.7: deepagents==0.3.7

**Published**: 2026-01-21

Changes since deepagents==0.3.6

fix(sdk): don't dedent summarization prompt (#870)
feat(deepagents): truncate old write / edit calls in message history (#806)
release: patch release 0.3.7 (#869)
chore(deepagents): add end to end tests to confirm file reducer working properly in state backend (#754)
chore: improve filesystem and subagents tool descriptions (#807)
docs(SDK): clarify usage of file system backend (#850)
nit: standardize naming (#849)
docs(sdk): `FilesystemBackend` refs fixes (#791)
feat: show allowed tools for each skill in skill list (#837)
fix(sdk):  FilesystemMiddleware forward 'name' attribute in large_tool_result from the original tool msg (#825)
docs(sdk): docstring formatting nits (#824)
feat: summarization offloading (#742)
Bump version to 0.3.7a1 (#817)
Add Async ops to Store Backend (#816)
chore(deepagents): add tests for grep in end to end tests (#805)
chore(deepagents): bump langchain in lock file (#800)
chore(deps): bump the uv group across 5 directories with 1 update (#811)
fix(deepagents): respect continuation markers when reading files (#809)
fix(infra): exclude `build/` from typechecking (#808)
feat: support `SystemMessage` for parity w/ `create_agent` (#803)
chore(deepagnets): end to end tests for agent writing editing files (#804)
fix(sdk): BaseSandbox.ls_info() to return absolute paths (#797)
fix(deepagents): truncate lines on read (#784)
chore(deps): bump the uv group across 3 directories with 3 updates (#796)
fix: refinements for `test_summarization` (#786)
docs: fix old URLs (#787)
docs: add testing readme (#788)
fix: added error catching for file operations without permissions (#734)
docs(deepagents): update subagent spec (#785)
chore(deepagents): add mini eval for summarization (#751)
docs(sdk): improve `FileSystemBackend` ref docs (#783)

## deepagents==0.3.7a1: deepagents==0.3.7a1

**Published**: 2026-01-17

Initial release

Bump version to 0.3.7a1 (#817)
Add Async ops to Store Backend (#816)
chore(deepagents): add tests for grep in end to end tests (#805)
chore(deepagents): bump langchain in lock file (#800)
chore(deps): bump the uv group across 5 directories with 1 update (#811)
fix(deepagents): respect continuation markers when reading files (#809)
fix(infra): exclude `build/` from typechecking (#808)
feat: support `SystemMessage` for parity w/ `create_agent` (#803)
chore(deepagnets): end to end tests for agent writing editing files (#804)
fix(sdk): BaseSandbox.ls_info() to return absolute paths (#797)
fix(deepagents): truncate lines on read (#784)
chore(deps): bump the uv group across 3 directories with 3 updates (#796)
fix: refinements for `test_summarization` (#786)
docs: fix old URLs (#787)
docs: add testing readme (#788)
fix: added error catching for file operations without permissions (#734)
docs(deepagents): update subagent spec (#785)
chore(deepagents): add mini eval for summarization (#751)
docs(sdk): improve `FileSystemBackend` ref docs (#783)
chore: add tests for config, context, metadata propagation (#776)
fix: import rules (#763)
fix(deepagents): throw a clear exception message when 'messages' key missing from the output of the subagent (#678)
release: deepagents 0.3.6 (#752)
chore: automatically sort imports (#740)
fix: no f string needed (#750)
feat: add agent name when creating subagents (#735)
feat(cli): inject local context into system prompt via `LocalContextMiddleware`
chore: update twitter URL (#727)
chore: CR on docstrings/readme (#722)
minor release(deepagents): bump version to 0.3.5 (#695)
Port SDK Memory to CLI (#691)
chore(deepagents): turn on strict linting and add ratchet (#690)
chore(deepagents): add tests for todos middleware (#667)
fix(deepagents):  fix content block handling in filesystem middleware tool result eviction (#674)
Minor release memory bump (#689)
feat: update memory prompt to be more barebones (#685)
improvements to README, reference docs (#688)
update version bounds (#687)
Deepagents release minor (#683)
fix(deepagents): make memory permissive if AGENTS.md not found (#682)
release(deepagents): release 0.3.2 (#680)
chore(deepagents): make memory strict if AGENTS.md not found (#673)
fix(deepagents): better async support in skills, and propagate runnable config (#672)
chore: remove older integration tests for memory (#670)
feature(deepagents): add memory (#646)
feat(deepagents): add skills to sdk (#591)
chore(deepagent): add docs to composite backend (#666)
chore(deepagents): add more test coverage to composite backend (#660)
fix(deepagents): composite backend grep implementation (#659)
Fix CVE-2025-68664 (#636)
make work with model string (#626)
release(deepagents): 0.3.1 (#608)
docs: fix documentation issues (#513)
fix(deepagents): strip trailing whitespace from subagent messages to prevent Anthropic API errors (#586)
fix(deepagents): Pass through runtime config to subagents (#602)
chore(deepagents): test write todos from sub-agents (#605)
fix(deepagents): exclude structured response from state update (#603)
feat: add ability to paste images in input (#555)
chore: bump minor version (#549)
feature(deepagents)!: add async implementations for backend, sandbox, filesystem (#504)
fix: fix docstring formatting errors in backends (#514)
chore(cli): add comprehensive testing for sandbox operations (#501)
feat(deepagents): use context window fractions for SummarizationMiddleware when available (#484)
chore(deepagents): add end to end test (#481)
release(deepagents, cli) (#477)
return strings in tools (#474)
truncate glob (#473)
fix(deepagents): fix type for file info (#471)
add file upload and download apis (#381)
fix(deepagents-cli): fix linting (broke CI) (#457)
fix(middleware): prevent silent corruption from Windows absolute paths (Issue #427) (#454)
Remove unnecessary dependencies from `deepagents` module (#429)
fix: use `request.override` instead of direct attribute overrides (#431)
Update README.md (#422)
release: deepagents 0.2.9, cli 0.0.9 (#411)
patch: remove resumable shell middleware (#410)
release (#388)
chore: finish migration into monorepo structure (#383)
feat: expose id on base abstraction (#382)
feat: sandbox protocol (#319)
chore: move BACKEND_TYPES to correct place (#351)
fix: Don't error when "subagent" does not exist. And add test for truncation logic (#343)
minor update (#302)
chore: inherit from protocol, update types (#291)
Truncate content sample (#287)
chore(deepagents): move protocol types (#286)
move deepagents to libs/deepagents (#257)

## deepagents-cli==0.0.13a2: deepagents-cli==0.0.13a2

**Published**: 2026-01-16

Initial release

chore: bump deepagents-cli to 0.0.13a2 (#795)
docs: add testing readme (#788)
fix(cli): include tcss and py.typed in package data (#781)
feat(cli): format file tree with markdown (#782)
fix(cli): add explicit package inclusion for setuptools (#780)
add prompt seeding with -m flag (#755)
docs: update model configuration details in `README` (#772)
fix: import rules (#763)
release(deepagents-cli): 0.0.13a1 (#756)
cli-token-tracking-fixes (#706)
release: deepagents 0.3.6 (#752)
chore: automatically sort imports (#740)
Add LangSmith tracing status to welcome banner (#741)
feat(cli): inject local context into system prompt via `LocalContextMiddleware`
fix: don't allow Rich markup from user content (#704)
fix(cli): remove duplicate version from `welcome.py` (#737)
feat(cli): add `--version`/`/version` commands (#698)
minor release(deepagents): bump version to 0.3.5 (#695)
Port SDK Memory to CLI (#691)
fix thread id (#692)
chore(ci): add uv lock checks (#681)
update version bounds (#687)
CLI Refactor to Textual (#686)
Fix invalid YAML in skill-creator SKILL.md frontmatter (#675)
feat(deepagents): add skills to sdk (#591)
docs: replace gemini 1.5 (#653)
feat(cli): show version in splash screen (#610)
chore(cli): expose version (#609)
fix(cli): handle read_file offset exceeding file length by returning all lines (issue #559) (#568)
chore(cli): remove line (#601)
minor version bump, model setting, agent skill spec support, skill creator example (#600)
Comply with Anthropic Agent Skills spec (#592)
feat(cli): add --model flag with auto-detection (#584)
feat: add skill-creator skill with init and validation scripts (#579)
docs(cli): add LangSmith environment variables documentation (#583)
CLI release (#581)
feat(cli): add DEEPAGENTS_LANGSMITH_PROJECT configuration (#577)
feat: add ability to paste images in input (#555)
chore(harbor/cli): allow benchmarking with either cli or SDK (#542)
chore(cli): add comprehensive testing for sandbox operations (#501)
test make format (#483)
Update README to specify CLI (#490)
docs(cli): enhance README with comprehensive documentation (#489)
fix(cli): for now use non peristent implementation of shell (#488)
chore(cli): bump lock file (#487)
chore(cli): add end to end test to the cli (#482)
release(deepagents, cli) (#477)
Harrison/fix diffing (#478)
truncate glob (#473)
fix(cli): 2nd argument must be called runtime (not _runtime) (#472)
add file upload and download apis (#381)
chore(cli): other lints (#464)
feat: add option to disable splash on startup (#446)
chore(cli): pull out interrupt on config (#463)
Harrison/add gemini support (#456)
chore(cli): remove internal file that's not needed (#462)
chore(cli): apply auto-fixes for linting (#461)
chore(cli): quick linting fixes (#460)
chore(cli): remove hard-coded paths (#458)
cli: inherit env variables for cli (#459)
fix(deepagents-cli): fix linting (broke CI) (#457)
feat(cli): add project-level skills support (#439)
fix: localize key bindings and update tips for macOS compatibility (#451)
chore: cleanup `markdownlint` errors in `README.md` (#447)
fix cli rendering (#445)
add auto accept option to CLI (#421)
Remove unnecessary dependencies from `deepagents` module (#429)
fix: use `request.override` instead of direct attribute overrides (#431)
add missing type annotations (#425)
chore(deepagent-cli): remove double diff display (WIP) (#387)
Add skills and dual-scope memory to deepagents CLI (#315)
use thread id rather than hardcoding to main (#423)
release: deepagents 0.2.9, cli 0.0.9 (#411)
patch: remove resumable shell middleware (#410)
chore(cli): internal refactor and some unit tests for tool descriptions (#394)
Add simple benchmark tests (#395)
fix: remove temperature, not supported by some OpenAI models (o3) (#392)
release 0.0.8 deepagents-cli (#390)
release (#388)
clean up for HIL logic (#384)
chore: finish migration into monorepo structure (#383)
chore: clean up placeholder test file (#378)
feat(sandbox-protocol): introduce id property + restore missing traceback (#379)
chore: add simple integration tests (#377)
chore: carve out integration tests for CLI (#376)
chore: clean up some sandbox provider details (#375)
feat: sandbox protocol (#319)
chore: quick linting pass in cli (#349)
fix(cli): handle multiple concurrent interrupts in HITL workflow (#318)
feat(cli): add fetch_url tool for converting web content to markdown (#310)
ctrl-c protection, add buffer to avoid accidentally exiting thread (#300)
update message.text() to .text (#317)
release 0.2.5 (#306)
fix-cli(ui): show tool call running in spinner instead of hanging cursor (#305)
cli-update: make execute_task async, allows abort to work (#299)
fix (cli-ui): remove brittle/dead code for summarization tracking (#298)
fix (cli-ux): improved diff viewer (highlighting, line_nums, wrapping), fixed spacing nits on tool approval (#293)
ci: enable format lint (#292)
fix (cli): autocomplete for @ and / commands through directories, bash mode in TUI (#278)
chore: delete accidental file (#282)
handle hilt in a way that makes tracing better (#277)
simplify hilt (#276)
chore: add ci (#254)
move agent memory and bump (#249)
Revert "fix(cli): Abort functionality, autocomplete, and fixed memory prompts…" (#248)
fix(cli): Abort functionality, autocomplete, and fixed memory prompts (#246)
cr (#245)
fix(deepagents-cli): package the agent prompt correctly (#242)
release
ix(cli): Fix token counting bugs and improve clarity (#240)
release (#238)
Add deepagents cli scaffolding (#224)

## deepagents==0.3.6: deepagents==0.3.6

**Published**: 2026-01-15

Changes since deepagents==0.3.5

chore: add tests for config, context, metadata propagation (#776)
fix: import rules (#763)
fix(deepagents): throw a clear exception message when 'messages' key missing from the output of the subagent (#678)
release: deepagents 0.3.6 (#752)
chore: automatically sort imports (#740)
fix: no f string needed (#750)
feat: add agent name when creating subagents (#735)
feat(cli): inject local context into system prompt via `LocalContextMiddleware`
chore: update twitter URL (#727)
chore: CR on docstrings/readme (#722)

## deepagents-cli==0.0.13a1: deepagents-cli==0.0.13a1

**Published**: 2026-01-15

Initial release

release(deepagents-cli): 0.0.13a1 (#756)
cli-token-tracking-fixes (#706)
release: deepagents 0.3.6 (#752)
chore: automatically sort imports (#740)
Add LangSmith tracing status to welcome banner (#741)
feat(cli): inject local context into system prompt via `LocalContextMiddleware`
fix: don't allow Rich markup from user content (#704)
fix(cli): remove duplicate version from `welcome.py` (#737)
feat(cli): add `--version`/`/version` commands (#698)
minor release(deepagents): bump version to 0.3.5 (#695)
Port SDK Memory to CLI (#691)
fix thread id (#692)
chore(ci): add uv lock checks (#681)
update version bounds (#687)
CLI Refactor to Textual (#686)
Fix invalid YAML in skill-creator SKILL.md frontmatter (#675)
feat(deepagents): add skills to sdk (#591)
docs: replace gemini 1.5 (#653)
feat(cli): show version in splash screen (#610)
chore(cli): expose version (#609)
fix(cli): handle read_file offset exceeding file length by returning all lines (issue #559) (#568)
chore(cli): remove line (#601)
minor version bump, model setting, agent skill spec support, skill creator example (#600)
Comply with Anthropic Agent Skills spec (#592)
feat(cli): add --model flag with auto-detection (#584)
feat: add skill-creator skill with init and validation scripts (#579)
docs(cli): add LangSmith environment variables documentation (#583)
CLI release (#581)
feat(cli): add DEEPAGENTS_LANGSMITH_PROJECT configuration (#577)
feat: add ability to paste images in input (#555)
chore(harbor/cli): allow benchmarking with either cli or SDK (#542)
chore(cli): add comprehensive testing for sandbox operations (#501)
test make format (#483)
Update README to specify CLI (#490)
docs(cli): enhance README with comprehensive documentation (#489)
fix(cli): for now use non peristent implementation of shell (#488)
chore(cli): bump lock file (#487)
chore(cli): add end to end test to the cli (#482)
release(deepagents, cli) (#477)
Harrison/fix diffing (#478)
truncate glob (#473)
fix(cli): 2nd argument must be called runtime (not _runtime) (#472)
add file upload and download apis (#381)
chore(cli): other lints (#464)
feat: add option to disable splash on startup (#446)
chore(cli): pull out interrupt on config (#463)
Harrison/add gemini support (#456)
chore(cli): remove internal file that's not needed (#462)
chore(cli): apply auto-fixes for linting (#461)
chore(cli): quick linting fixes (#460)
chore(cli): remove hard-coded paths (#458)
cli: inherit env variables for cli (#459)
fix(deepagents-cli): fix linting (broke CI) (#457)
feat(cli): add project-level skills support (#439)
fix: localize key bindings and update tips for macOS compatibility (#451)
chore: cleanup `markdownlint` errors in `README.md` (#447)
fix cli rendering (#445)
add auto accept option to CLI (#421)
Remove unnecessary dependencies from `deepagents` module (#429)
fix: use `request.override` instead of direct attribute overrides (#431)
add missing type annotations (#425)
chore(deepagent-cli): remove double diff display (WIP) (#387)
Add skills and dual-scope memory to deepagents CLI (#315)
use thread id rather than hardcoding to main (#423)
release: deepagents 0.2.9, cli 0.0.9 (#411)
patch: remove resumable shell middleware (#410)
chore(cli): internal refactor and some unit tests for tool descriptions (#394)
Add simple benchmark tests (#395)
fix: remove temperature, not supported by some OpenAI models (o3) (#392)
release 0.0.8 deepagents-cli (#390)
release (#388)
clean up for HIL logic (#384)
chore: finish migration into monorepo structure (#383)
chore: clean up placeholder test file (#378)
feat(sandbox-protocol): introduce id property + restore missing traceback (#379)
chore: add simple integration tests (#377)
chore: carve out integration tests for CLI (#376)
chore: clean up some sandbox provider details (#375)
feat: sandbox protocol (#319)
chore: quick linting pass in cli (#349)
fix(cli): handle multiple concurrent interrupts in HITL workflow (#318)
feat(cli): add fetch_url tool for converting web content to markdown (#310)
ctrl-c protection, add buffer to avoid accidentally exiting thread (#300)
update message.text() to .text (#317)
release 0.2.5 (#306)
fix-cli(ui): show tool call running in spinner instead of hanging cursor (#305)
cli-update: make execute_task async, allows abort to work (#299)
fix (cli-ui): remove brittle/dead code for summarization tracking (#298)
fix (cli-ux): improved diff viewer (highlighting, line_nums, wrapping), fixed spacing nits on tool approval (#293)
ci: enable format lint (#292)
fix (cli): autocomplete for @ and / commands through directories, bash mode in TUI (#278)
chore: delete accidental file (#282)
handle hilt in a way that makes tracing better (#277)
simplify hilt (#276)
chore: add ci (#254)
move agent memory and bump (#249)
Revert "fix(cli): Abort functionality, autocomplete, and fixed memory prompts…" (#248)
fix(cli): Abort functionality, autocomplete, and fixed memory prompts (#246)
cr (#245)
fix(deepagents-cli): package the agent prompt correctly (#242)
release
ix(cli): Fix token counting bugs and improve clarity (#240)
release (#238)
Add deepagents cli scaffolding (#224)

## deepagents==0.3.5: deepagents==0.3.5

**Published**: 2026-01-09

Changes since deepagents==0.3.4

minor release(deepagents): bump version to 0.3.5 (#695)
Port SDK Memory to CLI (#691)
chore(deepagents): turn on strict linting and add ratchet (#690)
chore(deepagents): add tests for todos middleware (#667)
fix(deepagents):  fix content block handling in filesystem middleware tool result eviction (#674)

## deepagents==0.3.4: deepagents==0.3.4

**Published**: 2026-01-08

Changes since deepagents==0.3.3

Minor release memory bump (#689)
feat: update memory prompt to be more barebones (#685)
improvements to README, reference docs (#688)
update version bounds (#687)

## deepagents==0.3.3: deepagents==0.3.3

**Published**: 2026-01-08

Changes since deepagents==0.3.2

Deepagents release minor (#683)
fix(deepagents): make memory permissive if AGENTS.md not found (#682)

## deepagents==0.3.2: deepagents==0.3.2

**Published**: 2026-01-08

Changes since deepagents==0.3.1

release(deepagents): release 0.3.2 (#680)
chore(deepagents): make memory strict if AGENTS.md not found (#673)
fix(deepagents): better async support in skills, and propagate runnable config (#672)
chore: remove older integration tests for memory (#670)
feature(deepagents): add memory (#646)
feat(deepagents): add skills to sdk (#591)
chore(deepagent): add docs to composite backend (#666)
chore(deepagents): add more test coverage to composite backend (#660)
fix(deepagents): composite backend grep implementation (#659)
Fix CVE-2025-68664 (#636)
make work with model string (#626)

## deepagents==0.3.1: deepagents==0.3.1

**Published**: 2025-12-23

Changes since deepagents==0.3.0

release(deepagents): 0.3.1 (#608)
docs: fix documentation issues (#513)
fix(deepagents): strip trailing whitespace from subagent messages to prevent Anthropic API errors (#586)
fix(deepagents): Pass through runtime config to subagents (#602)
chore(deepagents): test write todos from sub-agents (#605)
fix(deepagents): exclude structured response from state update (#603)
feat: add ability to paste images in input (#555)

## deepagents-cli==0.0.12: deepagents-cli==0.0.12

**Published**: 2025-12-22

Changes since deepagents-cli==0.0.11

minor version bump, model setting, agent skill spec support, skill creator example (#600)
Comply with Anthropic Agent Skills spec (#592)
feat(cli): add --model flag with auto-detection (#584)
feat: add skill-creator skill with init and validation scripts (#579)
docs(cli): add LangSmith environment variables documentation (#583)

## deepagents-cli==0.0.11: deepagents-cli==0.0.11

**Published**: 2025-12-17

Changes since deepagents-cli==0.0.10

CLI release (#581)
feat(cli): add DEEPAGENTS_LANGSMITH_PROJECT configuration (#577)
feat: add ability to paste images in input (#555)
chore(harbor/cli): allow benchmarking with either cli or SDK (#542)
chore(cli): add comprehensive testing for sandbox operations (#501)
test make format (#483)
Update README to specify CLI (#490)
docs(cli): enhance README with comprehensive documentation (#489)
fix(cli): for now use non peristent implementation of shell (#488)
chore(cli): bump lock file (#487)
chore(cli): add end to end test to the cli (#482)

## deepagents==0.3.0: deepagents==0.3.0

**Published**: 2025-12-08

Changes since deepagents==0.2.8

chore: bump minor version (#549)
feature(deepagents)!: add async implementations for backend, sandbox, filesystem (#504)
fix: fix docstring formatting errors in backends (#514)
chore(cli): add comprehensive testing for sandbox operations (#501)
feat(deepagents): use context window fractions for SummarizationMiddleware when available (#484)
chore(deepagents): add end to end test (#481)

## deepagents==0.2.8: deepagents==0.2.8

**Published**: 2025-11-24

Changes since deepagents==0.2.7

release(deepagents, cli) (#477)
return strings in tools (#474)
truncate glob (#473)
fix(deepagents): fix type for file info (#471)
add file upload and download apis (#381)
fix(deepagents-cli): fix linting (broke CI) (#457)
fix(middleware): prevent silent corruption from Windows absolute paths (Issue #427) (#454)
Remove unnecessary dependencies from `deepagents` module (#429)
fix: use `request.override` instead of direct attribute overrides (#431)
Update README.md (#422)

## deepagents-cli==0.0.10: deepagents-cli==0.0.10

**Published**: 2025-11-24

Changes since deepagents-cli==0.0.9

release(deepagents, cli) (#477)
Harrison/fix diffing (#478)
truncate glob (#473)
fix(cli): 2nd argument must be called runtime (not _runtime) (#472)
add file upload and download apis (#381)
chore(cli): other lints (#464)
feat: add option to disable splash on startup (#446)
chore(cli): pull out interrupt on config (#463)
Harrison/add gemini support (#456)
chore(cli): remove internal file that's not needed (#462)
chore(cli): apply auto-fixes for linting (#461)
chore(cli): quick linting fixes (#460)
chore(cli): remove hard-coded paths (#458)
cli: inherit env variables for cli (#459)
fix(deepagents-cli): fix linting (broke CI) (#457)
feat(cli): add project-level skills support (#439)
fix: localize key bindings and update tips for macOS compatibility (#451)
chore: cleanup `markdownlint` errors in `README.md` (#447)
fix cli rendering (#445)
add auto accept option to CLI (#421)
Remove unnecessary dependencies from `deepagents` module (#429)
fix: use `request.override` instead of direct attribute overrides (#431)
add missing type annotations (#425)
chore(deepagent-cli): remove double diff display (WIP) (#387)
Add skills and dual-scope memory to deepagents CLI (#315)
use thread id rather than hardcoding to main (#423)

## deepagents==0.2.7: deepagents==0.2.7

**Published**: 2025-11-14

Changes since deepagents==0.2.6

release: deepagents 0.2.9, cli 0.0.9 (#411)
patch: remove resumable shell middleware (#410)

## deepagents-cli==0.0.9: deepagents-cli==0.0.9

**Published**: 2025-11-14

Changes since deepagents-cli==0.0.8

release: deepagents 0.2.9, cli 0.0.9 (#411)
patch: remove resumable shell middleware (#410)
chore(cli): internal refactor and some unit tests for tool descriptions (#394)
Add simple benchmark tests (#395)
fix: remove temperature, not supported by some OpenAI models (o3) (#392)

## deepagents==0.2.6: deepagents==0.2.6

**Published**: 2025-11-13

Changes since deepagents==0.2.5

release (#388)
chore: finish migration into monorepo structure (#383)
feat: expose id on base abstraction (#382)
feat: sandbox protocol (#319)
chore: move BACKEND_TYPES to correct place (#351)
fix: Don't error when "subagent" does not exist. And add test for truncation logic (#343)
minor update (#302)

## deepagents-cli==0.0.8: deepagents-cli==0.0.8

**Published**: 2025-11-13

Changes since deepagents-cli==0.0.7

release 0.0.8 deepagents-cli (#390)
release (#388)
clean up for HIL logic (#384)
chore: finish migration into monorepo structure (#383)
chore: clean up placeholder test file (#378)
feat(sandbox-protocol): introduce id property + restore missing traceback (#379)
chore: add simple integration tests (#377)
chore: carve out integration tests for CLI (#376)
chore: clean up some sandbox provider details (#375)
feat: sandbox protocol (#319)
chore: quick linting pass in cli (#349)
fix(cli): handle multiple concurrent interrupts in HITL workflow (#318)
feat(cli): add fetch_url tool for converting web content to markdown (#310)
ctrl-c protection, add buffer to avoid accidentally exiting thread (#300)
update message.text() to .text (#317)
release 0.2.5 (#306)
fix-cli(ui): show tool call running in spinner instead of hanging cursor (#305)
cli-update: make execute_task async, allows abort to work (#299)
fix (cli-ui): remove brittle/dead code for summarization tracking (#298)
fix (cli-ux): improved diff viewer (highlighting, line_nums, wrapping), fixed spacing nits on tool approval (#293)
ci: enable format lint (#292)
fix (cli): autocomplete for @ and / commands through directories, bash mode in TUI (#278)
chore: delete accidental file (#282)
handle hilt in a way that makes tracing better (#277)
simplify hilt (#276)
chore: add ci (#254)

## deepagents==0.2.5: deepagents==0.2.5

**Published**: 2025-11-04

Changes since deepagents==0.2.4

ci: disable running prerelease tests temporarily (#296)
quick packaging fix (#295)
ci: add release workflow (wip) (#289)
Patch release 0.2.5 (#294)
ci: enable format lint (#292)
chore: inherit from protocol, update types (#291)
Truncate content sample (#287)
chore: gitignore (#288)
chore(deepagents): move protocol types (#286)
fix (cli): autocomplete for @ and / commands through directories, bash mode in TUI (#278)
Add Dependabot configuration file (#285)
chore: delete accidental file (#282)
handle hilt in a way that makes tracing better (#277)
simplify hilt (#276)
move deepagents to libs/deepagents (#257)
ci: no need for secrets atm (#256)
chore: add ci (#254)
chore: linting pass (#253)

