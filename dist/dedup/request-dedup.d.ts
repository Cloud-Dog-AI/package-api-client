export declare class RequestDedup {
    private inflight;
    dedupe(key: string, fn: () => Promise<Response>): Promise<Response>;
}
//# sourceMappingURL=request-dedup.d.ts.map