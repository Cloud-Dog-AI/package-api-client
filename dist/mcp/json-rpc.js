// Copyright 2026 Cloud-Dog, Viewdeck Engineering Limited
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
export function buildJsonRpcRequest(method, params, id = 1) {
    return {
        jsonrpc: "2.0",
        id,
        method,
        params,
    };
}
export function parseJsonRpcResponse(data) {
    if (!data || typeof data !== "object") {
        throw new Error("Invalid JSON-RPC response.");
    }
    const obj = data;
    if (obj.jsonrpc !== "2.0")
        throw new Error("Invalid JSON-RPC version.");
    if (!("id" in obj))
        throw new Error("Missing JSON-RPC id.");
    if ("result" in obj) {
        return { jsonrpc: "2.0", id: obj.id, result: obj.result };
    }
    if ("error" in obj) {
        return { jsonrpc: "2.0", id: obj.id, error: obj.error };
    }
    throw new Error("Invalid JSON-RPC response shape.");
}
