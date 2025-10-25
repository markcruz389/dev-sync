import { Redis } from "ioredis";
import type { Redis as RedisType } from "ioredis";

let client: RedisType | null = null;

export function getRedis() {
    if (!client) {
        client = new Redis({
            host: process.env.REDIS_HOST,
            port: Number(process.env.REDIS_PORT),
        });
    }
    return client;
}
