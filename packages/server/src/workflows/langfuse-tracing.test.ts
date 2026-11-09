import { context, trace } from '@opentelemetry/api';
import { AsyncLocalStorageContextManager } from '@opentelemetry/context-async-hooks';
import { BasicTracerProvider } from '@opentelemetry/sdk-trace-base';
import { describe, expect, test } from 'vitest';
import { createTestLogger } from '../logger.ts';
import {
  DEFAULT_LANGFUSE_BASE_URL,
  LangfuseTracing,
  resolveLangfuseCredentials,
} from './langfuse-tracing.ts';
import {
  createDefaultModelFactory,
  parseWorkflowModel,
  WorkflowModelConfigError,
} from './workflow-model.ts';

describe('resolveLangfuseCredentials', () => {
  test('prefers config over env for host and public key, and reads the secret from env', () => {
    expect(
      resolveLangfuseCredentials(
        { enabled: true, baseUrl: 'https://lf.example/', publicKey: 'pk-config' },
        {
          LANGFUSE_BASE_URL: 'https://env.example',
          LANGFUSE_PUBLIC_KEY: 'pk-env',
          LANGFUSE_SECRET_KEY: 'sk-env',
        },
      ),
    ).toEqual({ baseUrl: 'https://lf.example', publicKey: 'pk-config', secretKey: 'sk-env' });
  });

  test('falls back to env, then the Langfuse cloud host', () => {
    expect(
      resolveLangfuseCredentials(
        { enabled: true, baseUrl: '  ' },
        { LANGFUSE_PUBLIC_KEY: 'pk', LANGFUSE_SECRET_KEY: 'sk' },
      ),
    ).toEqual({ baseUrl: DEFAULT_LANGFUSE_BASE_URL, publicKey: 'pk', secretKey: 'sk' });
  });

  test('lists what is missing', () => {
    expect(resolveLangfuseCredentials({ enabled: true }, {})).toEqual({
      missing: ['langfuse.publicKey or LANGFUSE_PUBLIC_KEY', 'LANGFUSE_SECRET_KEY'],
    });
  });
});

describe('LangfuseTracing', () => {
  const log = createTestLogger('langfuse-test');

  test('reports disabled and returns no handler when the plugin is off', async () => {
    const tracing = new LangfuseTracing(() => ({ enabled: false }), log, {});
    expect(tracing.status()).toEqual({ state: 'disabled' });
    expect(
      await tracing.handlerFor({ workflowId: 'w', runId: 'r', trigger: 'api', model: 'm' }),
    ).toBeNull();
  });

  test('reports missing credentials and returns no handler', async () => {
    const tracing = new LangfuseTracing(() => ({ enabled: true }), log, {});
    expect(tracing.status()).toMatchObject({ state: 'missing-credentials' });
    expect(
      await tracing.handlerFor({ workflowId: 'w', runId: 'r', trigger: 'api', model: 'm' }),
    ).toBeNull();
  });

  test('returns a Langfuse callback handler once configured', async () => {
    const tracing = new LangfuseTracing(
      () => ({ enabled: true, baseUrl: 'http://127.0.0.1:9', publicKey: 'pk-lf-test' }),
      log,
      { LANGFUSE_SECRET_KEY: 'sk-lf-test' },
    );
    try {
      expect(tracing.status()).toEqual({ state: 'ready', baseUrl: 'http://127.0.0.1:9' });
      const handler = await tracing.handlerFor({
        workflowId: 'w',
        runId: 'r',
        trigger: 'api',
        model: 'm',
      });
      expect(handler?.name).toBe('LangfuseCallbackHandler');
    } finally {
      await tracing.shutdown();
    }
  });

  test('runs a workflow outside any span the server already has open', async () => {
    const manager = new AsyncLocalStorageContextManager().enable();
    context.setGlobalContextManager(manager);
    const tracing = new LangfuseTracing(() => ({ enabled: false }), log, {});
    const serverSpan = new BasicTracerProvider()
      .getTracer('server')
      .startSpan('POST /api/workflows/run');
    try {
      const activeInside = await context.with(trace.setSpan(context.active(), serverSpan), () =>
        tracing.runTraced({ workflowId: 'w', runId: 'r', trigger: 'api', model: 'm' }, async () =>
          trace.getActiveSpan(),
        ),
      );
      expect(activeInside).toBeUndefined();
    } finally {
      serverSpan.end();
      context.disable();
    }
  });
});

describe('workflow model selection', () => {
  test('parses provider:model specs', () => {
    expect(parseWorkflowModel('anthropic:claude-sonnet-5-5')).toEqual({
      provider: 'anthropic',
      model: 'claude-sonnet-5-5',
    });
    expect(() => parseWorkflowModel('mistral:large')).toThrow(WorkflowModelConfigError);
  });

  test('names the missing API key environment variable', async () => {
    const factory = createDefaultModelFactory({});
    await expect(factory('openai:gpt-5')).rejects.toThrow('OPENAI_API_KEY is not set');
  });

  test('points the OpenAI provider at OPENAI_BASE_URL for compatible endpoints', async () => {
    const factory = createDefaultModelFactory({
      OPENAI_API_KEY: 'sk-test',
      OPENAI_BASE_URL: 'http://127.0.0.1:11434/v1',
    });
    const model = (await factory('openai:llama3')) as unknown as {
      clientConfig?: { baseURL?: string };
    };
    expect(model.clientConfig?.baseURL).toBe('http://127.0.0.1:11434/v1');
  });

  test('builds a provider model when its key is present', async () => {
    const factory = createDefaultModelFactory({ ANTHROPIC_API_KEY: 'sk-ant-test' });
    const model = await factory('anthropic:claude-sonnet-5-5');
    expect(model._llmType()).toBe('anthropic');
  });
});
