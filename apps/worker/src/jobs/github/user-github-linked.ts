import type { UserGithubLinkedJob } from "@devsync/queue/github/types.js";
import {
    InstallationRepoOwnerType,
    InstallationRepoVisibility,
    prisma,
} from "@devsync/db";
import { getOctokitForUser, getOctokitForApp } from "../../_lib/octokit.js";
import { logger } from "../../_utils/logger.js";
import { refreshUserOauthToken, isAuthTokenExpired } from "./_utils.js";

async function saveGithubProfileData({
    accessToken,
    userId,
}: {
    accessToken: string;
    userId: number;
}) {
    logger.info("Syncing GitHub profile data for user:", userId);

    const octokit = getOctokitForUser(accessToken);
    const { data: ghUser } = await octokit.rest.users.getAuthenticated();

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

async function saveGithubInstallationRepos(installationId: string) {
    logger.info(
        "Syncing GitHub installation repositories for installation:",
        installationId
    );

    const octokitApp = getOctokitForApp(installationId);
    const { data } = await octokitApp.request("GET /installation/repositories");

    const createData = data.repositories.map((repo) => ({
        installation_id: installationId,
        repo_id: BigInt(repo.id),
        full_name: repo.full_name,
        name: repo.name,
        owner_username: repo.owner.login,
        owner_type: repo.owner.type.toUpperCase() as InstallationRepoOwnerType, // Uppercased to match enum
        visibility:
            (repo.visibility?.toUpperCase() as InstallationRepoVisibility) ??
            null, // Uppercased to match enum
        archived: repo.archived,
        disabled: repo.disabled,
        default_branch: repo.default_branch,
        html_url: repo.html_url,
        language: repo.language,
        fetched_at: new Date(),
        deleted_at: null,
    }));

    await prisma.githubInstallationRepos.createMany({
        data: createData,
    });

    logger.info(
        `Successfully synced GitHub installation repositories for installation: ${installationId}`
    );
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

        await Promise.all([
            saveGithubProfileData({
                accessToken,
                userId: user.id,
            }),
            saveGithubInstallationRepos(user.githubAuth.installation_id),
        ]);

        logger.info(`Completed Github linked job for user: ${userId}`);
    } catch (error) {
        logger.error(
            `Failed to sync GitHub profile for user ${data.userId}:`,
            error
        );
    }
}
