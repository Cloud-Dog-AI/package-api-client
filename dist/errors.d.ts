import type { ApiProblem } from './types';
export declare class ApiError extends Error {
    problem?: ApiProblem;
    status?: number;
    correlationId?: string;
    constructor(message: string, init?: {
        status?: number;
        problem?: ApiProblem;
        correlationId?: string;
    });
}
export declare function toApiError(res: Response, body: unknown, correlationId?: string): ApiError;
//# sourceMappingURL=errors.d.ts.map