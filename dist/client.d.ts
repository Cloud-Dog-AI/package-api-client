import { type TargetConfig } from './targets';
export type ClientOptions = {
    targets: TargetConfig;
    getToken?: () => Promise<string | undefined>;
    getCorrelationId?: () => string;
    timeoutMs?: number;
};
export type RequestInitEx = Omit<RequestInit, 'headers'> & {
    headers?: Record<string, string>;
};
export declare function requestJson<T>(target: 'api' | 'mcp' | 'a2a', path: string, init: RequestInitEx, options: ClientOptions): Promise<{
    data: T;
    correlationId?: string;
    status: number;
}>;
//# sourceMappingURL=client.d.ts.map