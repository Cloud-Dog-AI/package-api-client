export function resolveBaseUrl(target, cfg) {
    if (target === 'api')
        return cfg.apiBaseUrl;
    if (target === 'mcp')
        return cfg.mcpBaseUrl ?? cfg.apiBaseUrl;
    return cfg.a2aBaseUrl ?? cfg.apiBaseUrl;
}
