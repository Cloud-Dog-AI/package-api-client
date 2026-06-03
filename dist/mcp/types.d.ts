export type JsonRpcVersion = "2.0";
export type JsonRpcId = string | number | null;
export type JsonRpcRequest = Readonly<{
    jsonrpc: JsonRpcVersion;
    id: JsonRpcId;
    method: string;
    params?: unknown;
}>;
export type JsonRpcError = Readonly<{
    code: number;
    message: string;
    data?: unknown;
}>;
export type JsonRpcResponse = Readonly<{
    jsonrpc: JsonRpcVersion;
    id: JsonRpcId;
    result: unknown;
}> | Readonly<{
    jsonrpc: JsonRpcVersion;
    id: JsonRpcId;
    error: JsonRpcError;
}>;
//# sourceMappingURL=types.d.ts.map