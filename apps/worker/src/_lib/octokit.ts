import { Octokit } from "@octokit/rest";

// TODO: Check if caching Octokit instances per token is beneficial
export function getOctokitForUser(token: string) {
    return new Octokit({
        auth: token,
    });
}
