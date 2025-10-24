import { createGithubWorker, GithubJobName } from "@devsync/queue";
import { userReposGet } from "./github/user-repos-fetch.js";
import { logger } from "./_utils/logger.js";

// Initialize the GitHub worker with job handlers
try {
    createGithubWorker({
        [GithubJobName.UserReposGetJob]: userReposGet,
    });
    logger.info("✅ Worker started and listening for GitHub jobs...");
} catch {
    logger.error("❌ Failed to start the worker.");
}
