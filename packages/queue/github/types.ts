export enum GithubJobName {
    UserReposGetJob = "userReposGet",
}

export type UserReposGetJob = {
    userId: string;
    githubAccessToken: string;
};

export type GithubJobPayloads = {
    [GithubJobName.UserReposGetJob]: UserReposGetJob;
};
