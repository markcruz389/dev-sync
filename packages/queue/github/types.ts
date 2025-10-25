export enum GithubJobName {
    UserGithubLinked = "userGithubLinked",
}

export type UserGithubLinkedJob = {
    userId: number;
};

export type GithubJobPayloads = {
    [GithubJobName.UserGithubLinked]: UserGithubLinkedJob;
};
