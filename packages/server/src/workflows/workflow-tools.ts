import type { StructuredToolInterface } from '@langchain/core/tools';
import { MCPAdapter } from '@langchain/mcp-adapters';
import { MCP_SERVER_NAME } from '../constants.ts';
import { MCP_CONNECTION_ID_HEADER } from '../mcp/agent-identity.ts';
import { FORBIDDEN_WORKFLOW_TOOLS } from './workflow-definition.ts';

export interface WorkflowToolSession {
  tools: readonly StructuredToolInterface[];
  missing: readonly string[];
  close: () => Promise<void>;
}

export type WorkflowToolConnector = (input: {
  serverUrl: string;
  workflowId: string;
  allowedTools: readonly string[];
}) => Promise<WorkflowToolSession>;

export function unprefixedToolName(name: string): string {
  for (const separator of ['__', '_']) {
    const prefix = `${MCP_SERVER_NAME}${separator}`;
    if (name.startsWith(prefix)) return name.slice(prefix.length);
  }
  return name;
}

export function selectWorkflowTools<T extends { name: string }>(
  available: readonly T[],
  allowedTools: readonly string[],
): { tools: T[]; missing: string[] } {
  const allowed = new Set(allowedTools.filter((name) => !FORBIDDEN_WORKFLOW_TOOLS.has(name)));
  const tools = available.filter((tool) => allowed.has(unprefixedToolName(tool.name)));
  const found = new Set(tools.map((tool) => unprefixedToolName(tool.name)));
  return { tools, missing: [...allowed].filter((name) => !found.has(name)) };
}

export function workflowConnectionId(workflowId: string): string {
  return `workflow-${workflowId}`;
}

export const connectWorkflowTools: WorkflowToolConnector = async ({
  serverUrl,
  workflowId,
  allowedTools,
}) => {
  const client = new MCPAdapter({
    servers: {
      [MCP_SERVER_NAME]: {
        url: new URL('/mcp', serverUrl).toString(),
        headers: { [MCP_CONNECTION_ID_HEADER]: workflowConnectionId(workflowId) },
      },
    },
  });
  try {
    const available = await client.listTools();
    const { tools, missing } = selectWorkflowTools(available, allowedTools);
    return { tools, missing, close: () => client.close() };
  } catch (err) {
    await client.close().catch(() => undefined);
    throw err;
  }
};
