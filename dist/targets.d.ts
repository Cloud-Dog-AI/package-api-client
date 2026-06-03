export type TargetConfig = {
    apiBaseUrl: string;
    mcpBaseUrl?: string;
    a2aBaseUrl?: string;
};
export declare function resolveBaseUrl(target: 'api' | 'mcp' | 'a2a', cfg: TargetConfig): string;
//# sourceMappingURL=targets.d.ts.map