import { prisma } from "@devsync/db";
import { getTokenExpiryDate } from "@devsync/utils";
import { getOctokitForOauthApp } from "../../_lib/octokit.js";
import { logger } from "../../_utils/logger.js";

export function isAuthTokenExpired({ expiresAt }: { expiresAt: Date }) {
    if (expiresAt < new Date()) return true;

    return false;
}

export async function refreshUserOauthToken({
    userId,
    refreshToken,
}: {
    userId: number;
    refreshToken: string;
}) {
    // TODO: Should handle refresh token's expiration of 6 months
    // TODO: Test using Octokit OAuthApp to refresh token
    const octokit = getOctokitForOauthApp();
    const { data, authentication } = await octokit.refreshToken({
        refreshToken,
    });
    logger.info(
        `Refreshed OAuth token for user ID: ${userId} ${authentication}`
    );

    await prisma.githubAuth.update({
        where: { user_id: userId },
        data: {
            access_token: data.access_token,
            expires_at: getTokenExpiryDate({
                expiresIn: data.expires_in,
            }),
            refresh_token: authentication.refreshToken,
            refresh_expires_at: authentication.refreshTokenExpiresAt,
        },
    });

    return {
        newToken: data.access_token as string,
    };
}
