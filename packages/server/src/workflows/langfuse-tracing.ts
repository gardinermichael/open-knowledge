import type { BaseCallbackHandler } from '@langchain/core/callbacks/base';
import { CallbackHandler } from '@langfuse/langchain';
import { LangfuseSpanProcessor } from '@langfuse/otel';
import { setLangfuseTracerProvider } from '@langfuse/tracing';
import { BasicTracerProvider } from '@opentelemetry/sdk-trace-base';
import type { PinoLogger } from '../logger.ts';

export const DEFAULT_LANGFUSE_BASE_URL = 'https://cloud.langfuse.com';

export interface LangfuseUserSettings {
  enabled?: boolean;
  baseUrl?: string;
  publicKey?: string;
}

export interface LangfuseCredentials {
  baseUrl: string;
  publicKey: string;
  secretKey: string;
}

export type LangfuseStatus =
  | { state: 'disabled' }
  | { state: 'missing-credentials'; missing: readonly string[] }
  | { state: 'ready'; baseUrl: string };

export interface LangfuseRunTrace {
  workflowId: string;
  runId: string;
  trigger: string;
  model: string;
}

function nonEmpty(value: string | undefined): string | undefined {
  const trimmed = value?.trim();
  return trimmed === undefined || trimmed === '' ? undefined : trimmed;
}

export function resolveLangfuseCredentials(
  settings: LangfuseUserSettings | undefined,
  env: NodeJS.ProcessEnv,
): LangfuseCredentials | { missing: string[] } {
  const baseUrl =
    nonEmpty(settings?.baseUrl) ?? nonEmpty(env.LANGFUSE_BASE_URL) ?? DEFAULT_LANGFUSE_BASE_URL;
  const publicKey = nonEmpty(settings?.publicKey) ?? nonEmpty(env.LANGFUSE_PUBLIC_KEY);
  const secretKey = nonEmpty(env.LANGFUSE_SECRET_KEY);
  const missing = [
    ...(publicKey === undefined ? ['langfuse.publicKey or LANGFUSE_PUBLIC_KEY'] : []),
    ...(secretKey === undefined ? ['LANGFUSE_SECRET_KEY'] : []),
  ];
  if (publicKey === undefined || secretKey === undefined) return { missing };
  return { baseUrl: baseUrl.replace(/\/+$/, ''), publicKey, secretKey };
}

interface ActiveExporter {
  key: string;
  provider: BasicTracerProvider;
}

export class LangfuseTracing {
  private active: ActiveExporter | null = null;
  private retired: readonly BasicTracerProvider[] = [];
  private activeRuns = 0;
  private readonly readSettings: () => LangfuseUserSettings | undefined;
  private readonly log: PinoLogger;
  private readonly env: NodeJS.ProcessEnv;

  constructor(
    readSettings: () => LangfuseUserSettings | undefined,
    log: PinoLogger,
    env: NodeJS.ProcessEnv = process.env,
  ) {
    this.readSettings = readSettings;
    this.log = log;
    this.env = env;
  }

  status(): LangfuseStatus {
    const settings = this.readSettings();
    if (settings?.enabled !== true) return { state: 'disabled' };
    const credentials = resolveLangfuseCredentials(settings, this.env);
    if ('missing' in credentials) {
      return { state: 'missing-credentials', missing: credentials.missing };
    }
    return { state: 'ready', baseUrl: credentials.baseUrl };
  }

  async handlerFor(trace: LangfuseRunTrace): Promise<BaseCallbackHandler | null> {
    this.activeRuns += 1;
    const settings = this.readSettings();
    if (settings?.enabled !== true) {
      this.retireActive();
      return null;
    }
    const credentials = resolveLangfuseCredentials(settings, this.env);
    if ('missing' in credentials) {
      this.log.warn(
        { missing: credentials.missing, workflowId: trace.workflowId },
        '[workflows] Langfuse is on but not configured; this run is not traced',
      );
      return null;
    }
    this.ensureProvider(credentials);
    return new CallbackHandler({
      sessionId: trace.workflowId,
      tags: ['openknowledge', 'workflow', `trigger:${trace.trigger}`],
      traceMetadata: {
        workflowId: trace.workflowId,
        runId: trace.runId,
        trigger: trace.trigger,
        model: trace.model,
      },
    });
  }

  async finishRun(): Promise<void> {
    this.activeRuns = Math.max(0, this.activeRuns - 1);
    try {
      await this.active?.provider.forceFlush();
    } finally {
      if (this.activeRuns === 0) await this.shutdownRetired();
    }
  }

  async shutdown(): Promise<void> {
    this.retireActive();
    await this.shutdownRetired();
  }

  private ensureProvider(credentials: LangfuseCredentials): void {
    const key = `${credentials.baseUrl}\n${credentials.publicKey}\n${credentials.secretKey}`;
    if (this.active?.key === key) return;
    this.retireActive();
    const provider = new BasicTracerProvider({
      spanProcessors: [
        new LangfuseSpanProcessor({
          baseUrl: credentials.baseUrl,
          publicKey: credentials.publicKey,
          secretKey: credentials.secretKey,
        }),
      ],
    });
    setLangfuseTracerProvider(provider);
    this.active = { key, provider };
    this.log.info({ baseUrl: credentials.baseUrl }, '[workflows] Langfuse tracing enabled');
  }

  private retireActive(): void {
    const previous = this.active;
    if (previous === null) return;
    this.active = null;
    setLangfuseTracerProvider(null);
    this.retired = [...this.retired, previous.provider];
  }

  private async shutdownRetired(): Promise<void> {
    const providers = this.retired;
    this.retired = [];
    for (const provider of providers) {
      try {
        await provider.shutdown();
      } catch (err) {
        this.log.warn({ err }, '[workflows] Langfuse exporter shutdown failed');
      }
    }
  }
}
