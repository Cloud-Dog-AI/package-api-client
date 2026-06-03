export type Correlation = {
    correlationId: string;
};
export type ApiProblem = {
    type?: string;
    title?: string;
    status?: number;
    detail?: string;
    instance?: string;
    correlationId?: string;
};
export type RequestTarget = 'api' | 'mcp' | 'a2a';
export type RequestPreset = {
    id: string;
    name: string;
    target: RequestTarget;
    method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
    path: string;
    headers?: Record<string, string>;
    body?: unknown;
};
//# sourceMappingURL=types.d.ts.map