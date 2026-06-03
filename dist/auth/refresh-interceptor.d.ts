export declare function withRefreshOn401<T>(opts: {
    fn: () => Promise<T>;
    refreshAccessToken?: () => Promise<void>;
    isUnauthorised: (e: unknown) => boolean;
}): Promise<T>;
export declare function isUnauthorisedError(e: unknown): boolean;
//# sourceMappingURL=refresh-interceptor.d.ts.map