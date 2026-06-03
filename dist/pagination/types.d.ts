export type PageInfo = Readonly<{
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
}>;
export type PaginatedResponse<T> = Readonly<{
    items: T[];
    page_info: PageInfo;
}>;
//# sourceMappingURL=types.d.ts.map