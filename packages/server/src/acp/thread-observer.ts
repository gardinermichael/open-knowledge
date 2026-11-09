import type { Usage } from '@agentclientprotocol/sdk';
import type { ThreadEvent, ThreadInfo } from '@inkeep/open-knowledge-core/acp/thread-protocol';

export interface AcpThreadObserver {
  onEvent(info: Readonly<ThreadInfo>, event: ThreadEvent): void;
  onTurnUsage?(info: Readonly<ThreadInfo>, usage: Usage): void;
  onThreadClosed?(info: Readonly<ThreadInfo>): void;
}
