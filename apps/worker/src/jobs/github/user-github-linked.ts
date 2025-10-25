import type { UserGithubLinkedJob } from "@devsync/queue/github/types.js";
import { prisma } from "@devsync/db";
import { getOctokitForUser } from "../../_lib/octokit.js";
import { logger } from "../../_utils/logger.js";
import { refreshUserOauthToken, isAuthTokenExpired } from "./_utils.js";
import { getGhInstallationAuth, getRedis } from "@devsync/cache";

async function saveGithubProfileData({
    accessToken,
    userId,
}: {
    accessToken: string;
    userId: number;
}) {
    logger.info("Syncing GitHub profile data for user:", userId);

    const octokit = getOctokitForUser(accessToken);
    const { data: ghUser } = await octokit.users.getAuthenticated();

    await prisma.githubAuth.update({
        where: { user_id: userId },
        data: {
            github_user_id: ghUser.id,
            github_username: ghUser.login,
            github_avatar_url: ghUser.avatar_url,
        },
    });

    logger.info(`Successfully synced GitHub profile data for user ${userId}`);
}

export async function userGithubLinked(data: UserGithubLinkedJob) {
    const userId = data.userId;
    logger.info(`Starting Github linked job for user: ${userId}`);

    try {
        const user = await prisma.user.findUniqueOrThrow({
            where: { id: userId },
            select: {
                id: true,
                githubAuth: {
                    select: {
                        access_token: true,
                        expires_at: true,
                        refresh_token: true,
                        installation_id: true,
                    },
                },
            },
        });
        if (!user.githubAuth) {
            throw new Error("User does not have GitHub authentication");
        }

        let accessToken = user.githubAuth.access_token;
        if (isAuthTokenExpired({ expiresAt: user.githubAuth.expires_at })) {
            const { newToken } = await refreshUserOauthToken({
                userId,
                refreshToken: user.githubAuth.refresh_token,
            });
            accessToken = newToken;
        }

        await saveGithubProfileData({
            accessToken,
            userId: user.id,
        });

        const redis = getRedis();
        const installationToken = await getGhInstallationAuth({
            redis,
            installationId: user.githubAuth.installation_id,
        });
        console.log("installationToken", installationToken);

        // TODO: Handle saving user's granted repositories

        logger.info(`Completed Github linked job for user: ${userId}`);
    } catch (error) {
        logger.error(
            `Failed to sync GitHub profile for user ${data.userId}:`,
            error
        );
    }
}
