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

// @cloud-dog/api-client — UT1.17 request dedup.

import { describe, expect, it } from 'vitest';
import { RequestDedup } from '../../../src/dedup/request-dedup';

describe('UT1.17_RequestDedup', () => {
  it('dedupes by key', async () => {
    const d = new RequestDedup();
    let calls = 0;
    const fn = async () => {
      calls += 1;
      return new Response('ok');
    };
    await Promise.all([d.dedupe('k', fn), d.dedupe('k', fn)]);
    expect(calls).toBe(1);
  });
});
