import { Worker } from "bullmq";
import { redisConnection } from "@devsync/queue";
import { logger } from "../_utils/logger.js";
import type { WorkerOptions } from "bullmq";

type WorkerHandler = (job: any) => Promise<void>;

export const initWorker = (
    queueName: string,
    handler: WorkerHandler,
    options?: WorkerOptions
) => {
    const worker = new Worker(queueName, handler, {
        connection: redisConnection,
        ...options,
    });

    worker.on("completed", (job) => {
        logger.info(`[${queueName}] Job completed`, job.name);
    });

    worker.on("failed", (job, err) => {
        logger.error(`[${queueName}] Job failed`, job?.name, err);
    });

    return worker;
};
