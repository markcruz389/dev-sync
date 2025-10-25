import type { Redis as RedisClient } from "ioredis";
import { ghInstallTokenKey } from "./keys.js";

export type InstallationTokenCache = {
    token: string;
    expiresAt: string; // ISO from GitHub: "YYYY-MM-DDTHH:mm:ssZ"
};

const SAFETY_SECONDS = 60;

/** Compute TTL from expiresAt with a small safety buffer. */
function ttlFromExpiresAt(
    expiresAtISO: string,
    safetySeconds = SAFETY_SECONDS
) {
    const ms = new Date(expiresAtISO).getTime() - Date.now();
    return Math.max(1, Math.floor(ms / 1000) - safetySeconds);
}

/** Store the installation token with TTL derived from expiresAt. */
export async function setGhInstallationAuth({
    redis,
    installationId,
    token,
    expiresAtISO,
}: {
    redis: RedisClient;
    installationId: string;
    token: string;
    expiresAtISO: string;
}) {
    const key = ghInstallTokenKey(installationId);
    const ttl = ttlFromExpiresAt(expiresAtISO);
    const payload: InstallationTokenCache = { token, expiresAt: expiresAtISO };
    await redis.set(key, JSON.stringify(payload), "EX", ttl);
}

/** Read the token (returns `null` if missing/expired). */
export async function getGhInstallationAuth({
    redis,
    installationId,
}: {
    redis: RedisClient;
    installationId: string;
}): Promise<InstallationTokenCache | null> {
    const key = ghInstallTokenKey(installationId);
    const raw = await redis.get(key);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as InstallationTokenCache;
    return parsed;
}
