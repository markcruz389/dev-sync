// packages/queue/src/queues/githubQueue.ts
import {
    Queue,
    Worker,
    // QueueScheduler,
} from "bullmq";
import { redisConnection } from "../_lib/redis.js";
import type { GithubJobName } from "../github/types.js";
import type { JobsOptions } from "bullmq";

// --- Queue and Scheduler ---
export const githubQueue = new Queue("github", { connection: redisConnection });
// new QueueScheduler("github", { connection: redisConnection }); // TODO: learn more about this

// --- Helper to enqueue jobs ---
export async function addGithubJob<
    T extends Extract<keyof GithubJobName, string>
>(name: T, data: GithubJobName[T], options?: JobsOptions) {
    await githubQueue.add(name, data, options);
}
