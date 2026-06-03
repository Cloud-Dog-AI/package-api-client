import type { ApiClientConfig, EventStreamHandle, JsonLineStreamOptions } from "../client/types";
export declare function createJsonLinePostStream(opts: {
    config: ApiClientConfig;
    path: string;
    body: unknown;
    options: JsonLineStreamOptions;
}): EventStreamHandle;
//# sourceMappingURL=jsonl-post-stream.d.ts.map