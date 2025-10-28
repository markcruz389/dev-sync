import { Octokit } from "@octokit/rest";
import { createAppAuth } from "@octokit/auth-app";
import { OAuthApp } from "@octokit/oauth-app";

// TODO: Check if caching Octokit instances per token is beneficial
export function getOctokitForUser(token: string) {
    return new Octokit({
        auth: token,
    });
}

export function getOctokitForOauthApp() {
    return new OAuthApp({
        clientType: "github-app",
        clientId: process.env.GITHUB_APP_CLIENT_ID!,
        clientSecret: process.env.GITHUB_APP_CLIENT_SECRET!,
    });
}

export function getOctokitForApp(installationId: string) {
    // By using this, we don't need the installation token ourselves, it's handled internally by Octokit sdk
    return new Octokit({
        authStrategy: createAppAuth,
        auth: {
            appId: process.env.GITHUB_APP_ID,
            privateKey: process.env.GITHUB_APP_PRIVATE_KEY,
            installationId: installationId,
        },
    });
}
