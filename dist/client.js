import { resolveBaseUrl } from './targets';
import { toApiError } from './errors';
export async function requestJson(target, path, init, options) {
    const baseUrl = resolveBaseUrl(target, options.targets).replace(/\/$/, '');
    const url = `${baseUrl}${path.startsWith('/') ? '' : '/'}${path}`;
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), options.timeoutMs ?? 30000);
    const token = options.getToken ? await options.getToken() : undefined;
    const correlationId = options.getCorrelationId ? options.getCorrelationId() : undefined;
    try {
        const res = await fetch(url, {
            ...init,
            headers: {
                'content-type': 'application/json',
                ...(token ? { authorization: `Bearer ${token}` } : {}),
                ...(correlationId ? { 'x-correlation-id': correlationId } : {}),
                ...(init.headers ?? {}),
            },
            signal: controller.signal,
        });
        const corr = res.headers.get('x-correlation-id') ?? correlationId ?? undefined;
        const text = await res.text();
        const body = text ? safeJson(text) : undefined;
        if (!res.ok)
            throw toApiError(res, body, corr);
        return { data: body, correlationId: corr, status: res.status };
    }
    finally {
        clearTimeout(timeout);
    }
}
function safeJson(text) {
    try {
        return JSON.parse(text);
    }
    catch {
        return { raw: text };
    }
}
