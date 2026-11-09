import type { BaseChatModel } from '@langchain/core/language_models/chat_models';
import {
  AIMessage,
  type BaseMessage,
  HumanMessage,
  SystemMessage,
  ToolMessage,
} from '@langchain/core/messages';
import type { RunnableConfig } from '@langchain/core/runnables';
import { type StructuredToolInterface, ToolInputParsingException } from '@langchain/core/tools';
import { END, MessagesAnnotation, START, StateGraph } from '@langchain/langgraph';
import { toolsCondition } from '@langchain/langgraph/prebuilt';

export const WORKFLOW_SYSTEM_PROMPT = [
  'You are an OpenKnowledge workflow running unattended on a schedule or a manual trigger.',
  'You work on the markdown knowledge base only through the tools you are given.',
  'Nobody is watching, so do not ask questions: finish the task, then reply with a short summary of what you did and anything you could not do.',
].join(' ');

export class WorkflowFatalError extends Error {
  override readonly name: string = 'WorkflowFatalError';
}

export class WorkflowBudgetError extends WorkflowFatalError {
  override readonly name: string = 'WorkflowBudgetError';
}

export interface WorkflowGraphLimits {
  modelRunName: string;
  maxToolCalls: number;
}

function toolCallsOf(message: BaseMessage | undefined): NonNullable<AIMessage['tool_calls']> {
  if (message === undefined || message.type !== 'ai') return [];
  return (message as AIMessage).tool_calls ?? [];
}

function isModelRecoverable(err: unknown): boolean {
  return (
    err instanceof ToolInputParsingException ||
    (err instanceof Error && err.constructor.name === 'ToolInputParsingException')
  );
}

function asToolMessage(output: unknown, callId: string, name: string): BaseMessage {
  if (typeof output === 'object' && output !== null && (output as BaseMessage).type === 'tool') {
    return output as BaseMessage;
  }
  const content = typeof output === 'string' ? output : JSON.stringify(output);
  return new ToolMessage({ tool_call_id: callId, name, content });
}

export function buildWorkflowGraph(
  model: BaseChatModel,
  tools: readonly StructuredToolInterface[],
  limits: WorkflowGraphLimits,
) {
  if (model.bindTools === undefined) {
    throw new Error('The configured chat model does not support tool calling.');
  }
  const boundModel = tools.length > 0 ? model.bindTools([...tools]) : model;
  const callModel = async (state: typeof MessagesAnnotation.State, config: RunnableConfig) => {
    const response = await boundModel.invoke(state.messages, {
      ...config,
      runName: limits.modelRunName,
    });
    return { messages: [response] };
  };
  const toolsByName = new Map(tools.map((tool) => [tool.name, tool]));
  let toolCallsUsed = 0;
  const runTools = async (state: typeof MessagesAnnotation.State, config: RunnableConfig) => {
    const results: BaseMessage[] = [];
    for (const call of toolCallsOf(state.messages.at(-1))) {
      toolCallsUsed += 1;
      if (toolCallsUsed > limits.maxToolCalls) {
        throw new WorkflowBudgetError(
          `the workflow used more than its ${limits.maxToolCalls} tool calls (maxToolCalls)`,
        );
      }
      const callId = call.id ?? `call-${toolCallsUsed}`;
      const tool = toolsByName.get(call.name);
      if (tool === undefined) {
        results.push(
          new ToolMessage({
            tool_call_id: callId,
            name: call.name,
            content: `Unknown tool "${call.name}". Use only the tools you were given.`,
            status: 'error',
          }),
        );
        continue;
      }
      try {
        const output = await tool.invoke({ ...call, id: callId, type: 'tool_call' }, config);
        results.push(asToolMessage(output, callId, call.name));
      } catch (err) {
        if (!isModelRecoverable(err)) throw err;
        results.push(
          new ToolMessage({
            tool_call_id: callId,
            name: call.name,
            content: `Invalid arguments: ${err instanceof Error ? err.message : String(err)}`,
            status: 'error',
          }),
        );
      }
    }
    return { messages: results };
  };
  const graph = new StateGraph(MessagesAnnotation).addNode('agent', callModel);
  if (tools.length === 0) {
    return graph.addEdge(START, 'agent').addEdge('agent', END).compile();
  }
  return graph
    .addNode('tools', runTools)
    .addEdge(START, 'agent')
    .addConditionalEdges('agent', toolsCondition, ['tools', END])
    .addEdge('tools', 'agent')
    .compile();
}

export function workflowInputMessages(prompt: string, now: Date): BaseMessage[] {
  return [
    new SystemMessage(`${WORKFLOW_SYSTEM_PROMPT} The current time is ${now.toISOString()}.`),
    new HumanMessage(prompt),
  ];
}

export function finalAssistantText(messages: readonly BaseMessage[]): string {
  for (let index = messages.length - 1; index >= 0; index -= 1) {
    const message = messages[index];
    if (!AIMessage.isInstance(message)) continue;
    if (typeof message.content === 'string') return message.content;
    const text = message.content
      .map((block) => (block.type === 'text' && typeof block.text === 'string' ? block.text : ''))
      .join('');
    if (text !== '') return text;
  }
  return '';
}

export function countToolCalls(messages: readonly BaseMessage[]): number {
  return messages.filter((message) => message.type === 'tool').length;
}
