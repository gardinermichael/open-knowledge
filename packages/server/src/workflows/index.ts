import { join } from 'node:path';
import { readConfigSafely, resolveConfigPath } from '@inkeep/open-knowledge-core/server';
import type { PinoLogger } from '../logger.ts';
import { LangfuseTracing } from './langfuse-tracing.ts';
import { WorkflowApprovalStore } from './workflow-approvals.ts';
import { createDefaultModelFactory } from './workflow-model.ts';
import { WorkflowRunStore } from './workflow-run-store.ts';
import { WorkflowService } from './workflow-service.ts';
import { connectWorkflowTools } from './workflow-tools.ts';

export { LangfuseTracing } from './langfuse-tracing.ts';
export {
  WORKFLOW_RUN_STATUSES,
  WORKFLOW_TRIGGERS,
  type WorkflowRun,
  WorkflowRunSchema,
} from './workflow-run-store.ts';
export type {
  WorkflowListing,
  WorkflowSummary,
  WorkflowTriggerResult,
} from './workflow-service.ts';
export { WorkflowService } from './workflow-service.ts';

export const WORKFLOW_RUNS_FILENAME = 'workflow-runs.jsonl';

export const WORKFLOW_APPROVALS_FILENAME = 'workflow-approvals.json';

export interface CreateWorkflowServiceOptions {
  projectDir: string;
  localDir: string | null;
  configHomedirOverride?: string;
  log: PinoLogger;
  tracer?: LangfuseTracing;
}

export interface CreateLangfuseTracingOptions {
  projectDir: string;
  configHomedirOverride?: string;
  log: PinoLogger;
}

function readUserConfig(
  projectDir: string,
  homedirOverride?: string,
  warn?: (message: string) => void,
) {
  return readConfigSafely({
    absPath: resolveConfigPath('user', projectDir, homedirOverride),
    sideline: false,
    warn: warn ?? (() => undefined),
  }).value;
}

export function readWorkflowsPluginEnabled(projectDir: string, homedirOverride?: string): boolean {
  return readUserConfig(projectDir, homedirOverride).workflows?.enabled === true;
}

export function createLangfuseTracing(opts: CreateLangfuseTracingOptions): LangfuseTracing {
  return new LangfuseTracing(
    () => readUserConfig(opts.projectDir, opts.configHomedirOverride).langfuse,
    opts.log,
    process.env,
    { projectDir: opts.projectDir },
  );
}

export function createWorkflowService(opts: CreateWorkflowServiceOptions): WorkflowService {
  const reported = new Set<string>();
  const readSettings = () =>
    readUserConfig(opts.projectDir, opts.configHomedirOverride, (message) => {
      if (reported.has(message)) return;
      reported.add(message);
      opts.log.warn({ message }, '[workflows] user config could not be read');
    });
  return new WorkflowService({
    projectDir: opts.projectDir,
    isEnabled: () => readSettings().workflows?.enabled === true,
    createModel: createDefaultModelFactory(),
    connectTools: connectWorkflowTools,
    tracer: opts.tracer ?? new LangfuseTracing(() => readSettings().langfuse, opts.log),
    runStore: new WorkflowRunStore(
      opts.localDir === null ? null : join(opts.localDir, WORKFLOW_RUNS_FILENAME),
    ),
    approvals: new WorkflowApprovalStore(
      opts.localDir === null ? null : join(opts.localDir, WORKFLOW_APPROVALS_FILENAME),
    ),
    log: opts.log,
  });
}
