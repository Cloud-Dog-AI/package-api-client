import { ApiError } from "./api-error";
export declare function mapErrorResponse(status: number, body: unknown, ids: {
    requestId?: string;
    correlationId?: string;
}): ApiError;
//# sourceMappingURL=error-mapper.d.ts.map