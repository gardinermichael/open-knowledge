import { AIMessage } from '@langchain/core/messages';
import { tool } from '@langchain/core/tools';
import { describe, expect, test } from 'vitest';
import { z } from 'zod';
import {
  buildWorkflowGraph,
  WorkflowBudgetError,
  workflowInputMessages,
} from './workflow-graph.ts';
import { ScriptedChatModel } from './workflow-test-model.test-helper.ts';

function slowTool(name: string, log: string[]) {
  return tool(
    async () => {
      log.push(`${name}:start`);
      await new Promise((resolve) => setTimeout(resolve, 20));
      log.push(`${name}:end`);
      return `${name} done`;
    },
    { name, description: `${name} tool`, schema: z.object({}) },
  );
}

const twoCalls = new AIMessage({
  content: '',
  tool_calls: [
    { id: 'a', name: 'write', args: {} },
    { id: 'b', name: 'edit', args: {} },
  ],
});

function invoke(graph: ReturnType<typeof buildWorkflowGraph>) {
  return graph.invoke({ messages: workflowInputMessages('go', new Date(0)) });
}

describe('workflow graph limits', () => {
  test('runs the tool calls of one model turn one after another', async () => {
    const log: string[] = [];
    const graph = buildWorkflowGraph(
      new ScriptedChatModel([twoCalls, new AIMessage('done')]),
      [slowTool('write', log), slowTool('edit', log)],
      { modelRunName: 'test', maxToolCalls: 10 },
    );
    await invoke(graph);
    expect(log).toEqual(['write:start', 'write:end', 'edit:start', 'edit:end']);
  });

  test('stops the run once the tool-call budget is spent, even within one turn', async () => {
    const log: string[] = [];
    const graph = buildWorkflowGraph(
      new ScriptedChatModel([twoCalls, new AIMessage('done')]),
      [slowTool('write', log), slowTool('edit', log)],
      { modelRunName: 'test', maxToolCalls: 1 },
    );
    await expect(invoke(graph)).rejects.toBeInstanceOf(WorkflowBudgetError);
    expect(log).toEqual(['write:start', 'write:end']);
  });

  test('a tool that throws ends the run instead of being shown to the model', async () => {
    const model = new ScriptedChatModel([
      new AIMessage({ content: '', tool_calls: [{ id: 'a', name: 'broken', args: {} }] }),
      new AIMessage('done'),
    ]);
    const broken = tool(
      async () => {
        throw new Error('connection refused');
      },
      { name: 'broken', description: 'broken tool', schema: z.object({}) },
    );
    const graph = buildWorkflowGraph(model, [broken], { modelRunName: 'test', maxToolCalls: 5 });
    await expect(invoke(graph)).rejects.toThrow('connection refused');
    expect(model.seen).toHaveLength(1);
  });

  test('bad arguments and unknown tools go back to the model so it can correct itself', async () => {
    const model = new ScriptedChatModel([
      new AIMessage({
        content: '',
        tool_calls: [
          { id: 'a', name: 'search', args: { query: 42 } },
          { id: 'b', name: 'nope', args: {} },
        ],
      }),
      new AIMessage('done'),
    ]);
    const search = tool(async ({ query }: { query: string }) => query, {
      name: 'search',
      description: 'search',
      schema: z.object({ query: z.string() }),
    });
    const graph = buildWorkflowGraph(model, [search], { modelRunName: 'test', maxToolCalls: 5 });
    const result = await invoke(graph);
    const toolReplies = result.messages.filter((message) => message.type === 'tool');
    expect(toolReplies.map((message) => String(message.content))).toEqual([
      expect.stringContaining('Invalid arguments'),
      expect.stringContaining('Unknown tool "nope"'),
    ]);
    expect(model.seen).toHaveLength(2);
  });
});
