export class ApiError extends Error {
    problem;
    status;
    correlationId;
    constructor(message, init) {
        super(message);
        this.name = 'ApiError';
        this.status = init?.status;
        this.problem = init?.problem;
        this.correlationId = init?.correlationId ?? init?.problem?.correlationId;
    }
}
export function toApiError(res, body, correlationId) {
    const problem = (body && typeof body === 'object') ? body : undefined;
    const msg = problem?.title ?? problem?.detail ?? `Request failed (${res.status})`;
    return new ApiError(msg, { status: res.status, problem, correlationId });
}
