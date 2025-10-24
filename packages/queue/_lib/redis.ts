import type { RedisOptions } from "bullmq";

export const redisConnection: RedisOptions = {
    host: process.env.REDIS_HOST,
    port: parseInt(process.env.REDIS_PORT!),
};
