import { BaseChatModel } from '@langchain/core/language_models/chat_models';
import { AIMessage, type BaseMessage } from '@langchain/core/messages';
import type { ChatResult } from '@langchain/core/outputs';
import { tool } from '@langchain/core/tools';
import { z } from 'zod';

export class ScriptedChatModel extends BaseChatModel {
  readonly seen: BaseMessage[][] = [];
  private readonly script: AIMessage[];

  constructor(script: AIMessage[]) {
    super({});
    this.script = [...script];
  }

  _llmType(): string {
    return 'scripted';
  }

  override bindTools(): this {
    return this;
  }

  async _generate(messages: BaseMessage[]): Promise<ChatResult> {
    this.seen.push(messages);
    const next = this.script.shift() ?? new AIMessage('done');
    return {
      generations: [{ message: next, text: typeof next.content === 'string' ? next.content : '' }],
    };
  }
}

export function recordingSearchTool(calls: string[]) {
  return tool(
    async ({ query }: { query: string }) => {
      calls.push(query);
      return `found 1 doc for ${query}`;
    },
    {
      name: 'search',
      description: 'Search the knowledge base.',
      schema: z.object({ query: z.string() }),
    },
  );
}
