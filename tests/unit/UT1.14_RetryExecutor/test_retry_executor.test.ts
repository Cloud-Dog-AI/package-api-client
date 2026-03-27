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

// @cloud-dog/api-client — UT1.14 retry executor.

import { describe, expect, it } from 'vitest';
import { withRetry } from '../../../src/retry/retry-executor';
import { NetworkError } from '../../../src/errors/network-error';

const policy = { enabled: true, maxAttempts: 2, backoffBaseMs: 1, backoffMaxMs: 2, jitterMs: 0 } as const;

describe('UT1.14_RetryExecutor', () => {
  it('retries a failing fn', async () => {
    let n = 0;
    const res = await withRetry(async () => {
      n += 1;
      if (n === 1) throw new NetworkError('x', { retryable: true });
      return 1;
    }, policy as any);
    expect(res).toBe(1);
  });
});
