// apps/worker/src/github/jobs/fetchUserRepos.ts
import type { UserReposGetJob } from "@devsync/queue/github/types.js";

export const userReposGet = async (data: UserReposGetJob) => {
    console.log("Fetching repositories for:", data.userId);

    // Example GitHub API call
    // const res = await fetch("https://api.github.com/user/repos", {
    //   headers: { Authorization: `Bearer ${data.githubAccessToken}` },
    // });
    // const repos = await res.json();

    // console.log(`Fetched ${repos.length} repos`);
};
