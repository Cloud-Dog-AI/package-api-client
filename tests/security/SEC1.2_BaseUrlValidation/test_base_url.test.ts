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

// @cloud-dog/api-client — SEC1.2 base URL validation.

import { describe, expect, it } from 'vitest';
import { createApiClient } from '../../../src/client/api-client';

describe('SEC1.2_BaseUrlValidation', () => {
  it('rejects non-http(s) base URLs', () => {
    expect(() => createApiClient({ baseUrl: 'file:///etc/passwd' })).toThrow();
  });

  it('accepts same-origin relative base URLs when origin is available', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (globalThis as any).location = { origin: 'https://example.com' };
    expect(() => createApiClient({ baseUrl: '/web/api' })).not.toThrow();
  });
});
