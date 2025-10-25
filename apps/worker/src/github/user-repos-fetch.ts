// apps/worker/src/github/jobs/fetchUserRepos.ts
import type { UserReposGetJob } from "@devsync/queue";
import { logger } from "../_utils/logger.js";
import { Octokit } from "@octokit/rest";
import { prisma, OauthProvider } from "@devsync/db";

export const userReposGet = async (data: UserReposGetJob) => {
    logger.info("Fetching repositories for:", data.userId);

    try {
        const oauth = await prisma.usersOauth.findUniqueOrThrow({
            where: {
                user_id_provider: {
                    user_id: data.userId,
                    provider: OauthProvider.GITHUB,
                },
            },
            select: { access_token: true },
        });
        const octokit = new Octokit({ auth: oauth.access_token });

        const res = await octokit.rest.repos.listForAuthenticatedUser({
            visibility: "all",
            per_page: 30,
        });

        logger.info("Fetched repositories for:", data.userId, res);
    } catch (error) {
        logger.error("Error fetching repositories for:", data.userId, error);
    }
};
