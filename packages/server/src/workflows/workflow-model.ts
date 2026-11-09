import type { BaseChatModel } from '@langchain/core/language_models/chat_models';
import { WORKFLOW_MODEL_PATTERN } from './workflow-definition.ts';

export type WorkflowModelProvider = 'anthropic' | 'openai';

export interface WorkflowModelSpec {
  provider: WorkflowModelProvider;
  model: string;
}

export const WORKFLOW_MODEL_API_KEY_ENV: Readonly<Record<WorkflowModelProvider, string>> = {
  anthropic: 'ANTHROPIC_API_KEY',
  openai: 'OPENAI_API_KEY',
};

export class WorkflowModelConfigError extends Error {
  override name = 'WorkflowModelConfigError';
}

export function parseWorkflowModel(spec: string): WorkflowModelSpec {
  if (!WORKFLOW_MODEL_PATTERN.test(spec)) {
    throw new WorkflowModelConfigError(`Unsupported workflow model "${spec}".`);
  }
  const separator = spec.indexOf(':');
  return {
    provider: spec.slice(0, separator) as WorkflowModelProvider,
    model: spec.slice(separator + 1),
  };
}

export type WorkflowModelFactory = (spec: string) => Promise<BaseChatModel>;

export function createDefaultModelFactory(
  env: NodeJS.ProcessEnv = process.env,
): WorkflowModelFactory {
  return async (spec) => {
    const { provider, model } = parseWorkflowModel(spec);
    const envName = WORKFLOW_MODEL_API_KEY_ENV[provider];
    const apiKey = env[envName];
    if (apiKey === undefined || apiKey === '') {
      throw new WorkflowModelConfigError(
        `${envName} is not set in the server's environment, so the ${provider} model "${model}" cannot run.`,
      );
    }
    if (provider === 'anthropic') {
      const { ChatAnthropic } = await import('@langchain/anthropic');
      return new ChatAnthropic({ model, apiKey });
    }
    const { ChatOpenAI } = await import('@langchain/openai');
    const baseURL = env.OPENAI_BASE_URL;
    return new ChatOpenAI({
      model,
      apiKey,
      ...(baseURL !== undefined && baseURL !== '' ? { configuration: { baseURL } } : {}),
    });
  };
}
