export const queryKeys = {
    users: {
        all: ["users"] as const,
        detail: (id: string) => ["users", id] as const,
    },
};
