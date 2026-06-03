import type { JsonRpcRequest, JsonRpcResponse } from "./types";
export declare function buildJsonRpcRequest(method: string, params?: unknown, id?: string | number): JsonRpcRequest;
export declare function parseJsonRpcResponse(data: unknown): JsonRpcResponse;
//# sourceMappingURL=json-rpc.d.ts.map