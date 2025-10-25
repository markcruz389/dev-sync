// Central place for ALL cache key namespaces & builders.
// No more magic strings across apps.

export const CACHE_KEYS = {
    ghInstallToken: "gh:install-token", // GitHub App installation token cache
} as const;

/** Joins parts with ":" and ensures no empties. */
export function key(...parts: Array<string | number>) {
    const bad = parts.find((p) => p === "" || p === undefined || p === null);
    if (bad !== undefined) {
        throw new Error("cache.key received empty/invalid segment");
    }
    return parts.join(":");
}

/** gh:install-token:<installationId> */
export function ghInstallTokenKey(installationId: number | string) {
    return key(CACHE_KEYS.ghInstallToken, installationId);
}
