import { prisma } from "@devsync/db";
import { getTokenExpiryDate } from "@devsync/utils";

export function isAuthTokenExpired({ expiresAt }: { expiresAt: Date }) {
    if (expiresAt < new Date()) return true;

    return false;
}

export async function refreshUserOauthToken({
    userId,
    refreshToken,
}: {
    userId: number;
    refreshToken: string;
}) {
    // TODO: Should handle refresh token's expiration of 6 months
    const response = await fetch(
        "https://github.com/login/oauth/access_token",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                client_id: process.env.GITHUB_CLIENT_ID,
                client_secret: process.env.GITHUB_CLIENT_SECRET,
                grant_type: "refresh_token",
                refresh_token: refreshToken,
            }),
        }
    );

    // TODO: explicit type for the response data
    // TODO: Test if a new refresh token is created
    const data = await response.json();
    if (data.error) throw new Error(data.error_description || data.error);

    await prisma.githubAuth.update({
        where: { user_id: userId },
        data: {
            access_token: data.access_token,
            expires_at: getTokenExpiryDate({
                expiresIn: data.expires_in,
            }),
            refresh_token: data.refresh_token,
            refresh_expires_at: data.refresh_token_expires_in,
        },
    });

    return {
        newToken: data.access_token as string,
    };
}
