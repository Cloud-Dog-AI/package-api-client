import type { HttpMethod, RequestOptions } from "./types";
export declare function buildUrl(baseUrl: string, path: string, query?: RequestOptions["query"]): string;
export declare function buildHeaders(opts: {
    defaultHeaders?: Record<string, string>;
    options?: RequestOptions;
}): {
    headers: Headers;
    requestId: string;
    correlationId?: string;
};
export declare function buildAbortSignal(opts: {
    timeoutMs?: number;
    externalSignal?: AbortSignal;
}): {
    signal?: AbortSignal;
    cancel?: () => void;
};
export declare function isIdempotent(method: HttpMethod): boolean;
//# sourceMappingURL=request.d.ts.map