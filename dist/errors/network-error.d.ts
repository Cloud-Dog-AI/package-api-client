export declare class NetworkError extends Error {
    readonly options: {
        retryable: boolean;
        cause?: unknown;
        requestId?: string;
        correlationId?: string;
    };
    name: string;
    constructor(message: string, options: {
        retryable: boolean;
        cause?: unknown;
        requestId?: string;
        correlationId?: string;
    });
}
//# sourceMappingURL=network-error.d.ts.map