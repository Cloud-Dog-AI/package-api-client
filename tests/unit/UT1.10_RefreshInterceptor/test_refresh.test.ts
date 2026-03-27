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

// @cloud-dog/api-client — UT1.10 refresh interceptor.

import { describe, expect, it, vi } from 'vitest';
import { withRefreshOn401 } from '../../../src/auth/refresh-interceptor';
import { ApiError } from '../../../src/errors/api-error';

describe('UT1.10_RefreshInterceptor', () => {
  it('refreshes and retries once on 401', async () => {
    const refresh = vi.fn().mockResolvedValue(undefined);
    let calls = 0;
    const fn = vi.fn(async () => {
      calls += 1;
      if (calls === 1) throw new ApiError('no', { status: 401 });
      return 1;
    });
    await expect(withRefreshOn401({ fn, refreshAccessToken: refresh, isUnauthorised: () => true })).resolves.toBe(1);
    expect(refresh).toHaveBeenCalled();
  });
});
