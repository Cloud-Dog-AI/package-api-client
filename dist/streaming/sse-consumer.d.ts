import type { ApiError } from "../errors/api-error";
import type { EventStreamHandle, SSEEvent } from "../client/types";
export declare function createEventStream(opts: {
    baseUrl: string;
    path: string;
    onEvent: (event: SSEEvent) => void;
    onError: (error: ApiError) => void;
    onComplete?: () => void;
    getAccessToken?: () => string | null;
    requestId?: string;
    correlationId?: string;
}): EventStreamHandle;
//# sourceMappingURL=sse-consumer.d.ts.map