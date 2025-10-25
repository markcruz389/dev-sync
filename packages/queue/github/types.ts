export enum GithubJobName {
    UserReposGetJob = "userReposGet",
}

export type UserReposGetJob = {
    userId: number;
};

export type GithubJobPayloads = {
    [GithubJobName.UserReposGetJob]: UserReposGetJob;
};
