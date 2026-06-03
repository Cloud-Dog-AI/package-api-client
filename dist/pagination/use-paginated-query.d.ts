import type { ApiClient } from "../client/types";
import type { PaginatedResponse } from "./types";
export type PaginatedQueryState<T> = Readonly<{
    isLoading: boolean;
    error: unknown | null;
    data: PaginatedResponse<T> | null;
}>;
export declare function usePaginatedQuery<T>(opts: {
    client: ApiClient;
    path: string;
    page: number;
    perPage: number;
}): PaginatedQueryState<T>;
//# sourceMappingURL=use-paginated-query.d.ts.map