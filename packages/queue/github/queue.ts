import {
    Queue,
    // QueueScheduler,
} from "bullmq";
import { redisConnection } from "../_lib/redis.js";
import type { GithubJobPayloads } from "../github/types.js";
import type { JobsOptions } from "bullmq";

// --- Queue and Scheduler ---
export const githubQueue = new Queue("github", { connection: redisConnection });
// new QueueScheduler("github", { connection: redisConnection }); // TODO: learn more about this

// --- Helper to enqueue jobs ---
export async function pushGithubJob<T extends keyof GithubJobPayloads>(
    name: T,
    data: GithubJobPayloads[T],
    options?: JobsOptions
) {
    await githubQueue.add(name, data, options);
}
