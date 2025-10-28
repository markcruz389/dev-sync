import { Worker } from "bullmq";
import { redisConnection } from "../_lib/redis.js";
import type { GithubJobPayloads } from "./types.js";

export function createGithubWorker(handlers: {
    [K in keyof GithubJobPayloads]: (
        data: GithubJobPayloads[K]
    ) => Promise<void>;
}) {
    return new Worker(
        "github",
        async (job) => {
            const handler = handlers[job.name as keyof GithubJobPayloads];
            if (!handler)
                throw new Error(`No handler found for job ${job.name}`);

            await handler(job.data as any);
        },
        { connection: redisConnection }
    );
}
