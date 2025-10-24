import { createGithubWorker } from "@devsync/queue/github/worker.js";
import { GithubJobName } from "@devsync/queue/github/types.js";
import { userReposGet } from "./user-repos-fetch.js";

// Initialize the GitHub worker with job handlers
createGithubWorker({
    [GithubJobName.UserReposGetJob]: userReposGet,
});

console.log("✅ Worker started and listening for GitHub jobs...");
