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

// @cloud-dog/api-client — ST1.6 proxy client mock server.

import { describe, expect, it, vi } from "vitest";
import { createProxyClient } from "../../../src/presets/proxy-client";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(globalThis as any).location = { origin: "https://example.com" };

describe("ST1.6_ProxyClientMock", () => {
  it("requests relative base URL under same-origin", async () => {
    const fetchSpy = vi.fn().mockResolvedValue(
      new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      })
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (globalThis as any).fetch = fetchSpy;

    const client = createProxyClient();
    await client.get("/ping");

    expect(fetchSpy).toHaveBeenCalled();
    const url = String(fetchSpy.mock.calls[0][0]);
    expect(url).toBe("https://example.com/web/api/ping");
  });
});
