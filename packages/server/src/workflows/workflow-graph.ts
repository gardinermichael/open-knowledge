import type { BaseChatModel } from '@langchain/core/language_models/chat_models';
import { AIMessage, type BaseMessage, HumanMessage, SystemMessage } from '@langchain/core/messages';
import type { StructuredToolInterface } from '@langchain/core/tools';
import { END, MessagesAnnotation, START, StateGraph } from '@langchain/langgraph';
import { ToolNode, toolsCondition } from '@langchain/langgraph/prebuilt';

export const WORKFLOW_SYSTEM_PROMPT = [
  'You are an OpenKnowledge workflow running unattended on a schedule or a manual trigger.',
  'You work on the markdown knowledge base only through the tools you are given.',
  'Nobody is watching, so do not ask questions: finish the task, then reply with a short summary of what you did and anything you could not do.',
].join(' ');

export function buildWorkflowGraph(
  model: BaseChatModel,
  tools: readonly StructuredToolInterface[],
) {
  if (model.bindTools === undefined) {
    throw new Error('The configured chat model does not support tool calling.');
  }
  const boundModel = tools.length > 0 ? model.bindTools([...tools]) : model;
  const callModel = async (state: typeof MessagesAnnotation.State) => {
    const response = await boundModel.invoke(state.messages);
    return { messages: [response] };
  };
  const graph = new StateGraph(MessagesAnnotation).addNode('agent', callModel);
  if (tools.length === 0) {
    return graph.addEdge(START, 'agent').addEdge('agent', END).compile();
  }
  return graph
    .addNode('tools', new ToolNode([...tools]))
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
