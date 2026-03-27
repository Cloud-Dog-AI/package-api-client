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

// @cloud-dog/api-client — UT1.5 ApiError.

import { describe, expect, it } from 'vitest';
import { ApiError } from '../../../src/errors/api-error';

describe('UT1.5_ApiError', () => {
  it('stores status', () => {
    const e = new ApiError('x', { status: 400 });
    expect(e.options.status).toBe(400);
  });
});
