import type { z } from "zod";
export declare function parseJsonResponse(resp: Response): Promise<unknown>;
export declare function unwrapEnvelope(body: unknown): unknown;
export declare function validateResponse<T>(data: unknown, schema: z.ZodSchema<T> | undefined): T;
//# sourceMappingURL=response.d.ts.map