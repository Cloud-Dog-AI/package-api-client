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

// @cloud-dog/api-client — UT1.19 long-poll stream.

import { describe, expect, it, vi } from "vitest";
import { createLongPollStream } from "../../../src/streaming/long-poll";

describe("UT1.19_LongPollStream", () => {
  it("submits and polls until done", async () => {
    const events: string[] = [];
    const poll = vi
      .fn()
      .mockResolvedValueOnce({ state: "running", progress: 0.5 })
      .mockResolvedValueOnce({ state: "done", result: { ok: true } });

    const handle = createLongPollStream({
      submit: async () => ({ jobId: "j1" }),
      poll,
      intervalMs: 1,
      timeoutMs: 100,
      onEvent: (e) => events.push(e.type),
    });

    const result = await handle.start();
    expect(result).toEqual({ ok: true });
    expect(events).toContain("submitted");
    expect(events).toContain("progress");
    expect(events).toContain("completed");
  });
});
