import { createGithubWorker, GithubJobName } from "@devsync/queue";
import { userGithubLinked } from "./jobs/github/user-github-linked.js";
import { logger } from "./_utils/logger.js";

// Initialize the GitHub worker with job handlers
try {
    createGithubWorker({
        [GithubJobName.UserGithubLinked]: userGithubLinked,
    });
    logger.info("✅ Worker started and listening for GitHub jobs...");
} catch {
    logger.error("❌ Failed to start the worker.");
}
