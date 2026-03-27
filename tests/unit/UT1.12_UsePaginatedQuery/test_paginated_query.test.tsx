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

// @cloud-dog/api-client — UT1.12 usePaginatedQuery.

import { describe, expect, it } from 'vitest';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { usePaginatedQuery } from '../../../src/pagination/use-paginated-query';

const client = {
  get: async () => ({ items: [{ a: 1 }], page_info: { page: 1, per_page: 10, total: 1, total_pages: 1 } }),
} as any;

function View() {
  const s = usePaginatedQuery<{ a: number }>({ client, path: '/x', page: 1, perPage: 10 });
  return <div>{s.data ? s.data.items[0].a : 'loading'}</div>;
}

describe('UT1.12_UsePaginatedQuery', () => {
  it('returns data', async () => {
    render(<View />);
    expect(await screen.findByText('1')).toBeInTheDocument();
  });
});
