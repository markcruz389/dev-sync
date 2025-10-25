export function getTokenExpiryDate(token: {
    expiresAt?: string | Date;
    expiresIn?: number;
}): Date {
    if (token.expiresAt) {
        return new Date(token.expiresAt);
    }

    return new Date(Date.now() + token.expiresIn! * 1000);
}
