export type LongPollState = "pending" | "running" | "done" | "error";
export type LongPollStatus<T> = Readonly<{
    state: LongPollState;
    progress?: number;
    result?: T;
    error?: string;
}>;
export type LongPollEvent<T> = Readonly<{
    type: "submitted";
    jobId: string;
}> | Readonly<{
    type: "progress";
    jobId: string;
    progress?: number;
}> | Readonly<{
    type: "completed";
    jobId: string;
    result: T;
}> | Readonly<{
    type: "error";
    jobId: string;
    error: string;
}>;
export type LongPollOptions<T> = Readonly<{
    submit: () => Promise<{
        jobId: string;
    }>;
    poll: (jobId: string) => Promise<LongPollStatus<T>>;
    intervalMs?: number;
    timeoutMs?: number;
    onEvent?: (event: LongPollEvent<T>) => void;
}>;
export declare function createLongPollStream<T>(options: LongPollOptions<T>): {
    start: () => Promise<T>;
    cancel: () => void;
};
//# sourceMappingURL=long-poll.d.ts.map