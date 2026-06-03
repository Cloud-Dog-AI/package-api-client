import type { RetryPolicy } from "./retry-policy";
export declare function withRetry<T>(fn: (attempt: number) => Promise<T>, policy: RetryPolicy): Promise<T>;
//# sourceMappingURL=retry-executor.d.ts.map