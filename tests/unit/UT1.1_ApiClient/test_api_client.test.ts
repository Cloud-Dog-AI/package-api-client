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

// @cloud-dog/api-client — UT1.1 createApiClient.

import { describe, expect, it, vi } from 'vitest';
import { createApiClient } from '../../../src/client/api-client';

describe('UT1.1_ApiClient', () => {
  it('creates a client and performs GET', async () => {
    const fetchSpy = vi.spyOn(globalThis, 'fetch' as any).mockResolvedValue(
      new Response(JSON.stringify({ ok: true, data: { a: 1 } }), { status: 200 }) as any
    );
    const c = createApiClient({ baseUrl: 'https://example.com' });
    await expect(c.get<any>('/x')).resolves.toEqual({ a: 1 });
    fetchSpy.mockRestore();
  });
});
