export declare class ApiError extends Error {
    readonly options: {
        code?: string;
        status: number;
        details?: unknown;
        retryable?: boolean;
        requestId?: string;
        correlationId?: string;
    };
    name: string;
    constructor(message: string, options: {
        code?: string;
        status: number;
        details?: unknown;
        retryable?: boolean;
        requestId?: string;
        correlationId?: string;
    });
}
//# sourceMappingURL=api-error.d.ts.map