import { mkdirSync, readFileSync, renameSync, writeFileSync } from 'node:fs';
import { dirname } from 'node:path';
import { z } from 'zod';

const ApprovalsSchema = z.record(z.string(), z.string());

export class WorkflowApprovalStore {
  private approvals: Readonly<Record<string, string>>;
  private readonly file: string | null;

  constructor(file: string | null) {
    this.file = file;
    this.approvals = this.load();
  }

  isApproved(id: string, digest: string): boolean {
    return this.approvals[id] === digest;
  }

  approve(id: string, digest: string): void {
    this.approvals = { ...this.approvals, [id]: digest };
    this.persist();
  }

  private load(): Readonly<Record<string, string>> {
    if (this.file === null) return {};
    try {
      const parsed = ApprovalsSchema.safeParse(JSON.parse(readFileSync(this.file, 'utf-8')));
      return parsed.success ? parsed.data : {};
    } catch {
      return {};
    }
  }

  private persist(): void {
    if (this.file === null) return;
    mkdirSync(dirname(this.file), { recursive: true });
    const temp = `${this.file}.${process.pid}.tmp`;
    writeFileSync(temp, `${JSON.stringify(this.approvals, null, 2)}\n`);
    renameSync(temp, this.file);
  }
}
