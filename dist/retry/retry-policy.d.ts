export type RetryPolicy = Readonly<{
    enabled: boolean;
    maxAttempts: number;
    backoffBaseMs: number;
    backoffMaxMs: number;
    jitterMs: number;
}>;
export declare const defaultRetryPolicy: RetryPolicy;
//# sourceMappingURL=retry-policy.d.ts.map