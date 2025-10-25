import jwt from "jsonwebtoken";

export async function exchangeGithubCode(code: string) {
    const res = await fetch("https://github.com/login/oauth/access_token", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            client_id: process.env.GITHUB_CLIENT_ID,
            client_secret: process.env.GITHUB_CLIENT_SECRET,
            code, // the ?code=xyz you received from GitHub OAuth callback
            redirect_uri: process.env.GITHUB_REDIRECT_URL,
        }),
    });

    if (!res.ok) {
        const text = await res.text();
        throw new Error(`Failed to exchange code: ${res.status} ${text}`);
    }

    console.log("GitHub token exchange response status:", res.status);

    const data = await res.json();

    return {
        accessToken: data.access_token,
        expiresIn: data.expires_in,
        refreshToken: data.refresh_token,
        refreshTokenExpiresIn: data.refresh_token_expires_in,
        scope: data.scope,
        type: data.token_type,
    };
}

export function generateGithubAppJwt() {
    const now = Math.floor(Date.now() / 1000);

    // GitHub App private key is stored in .env as a single line with "\n" for newlines.
    // Replace them with real newline characters so jwt.sign() can read a valid PEM key.
    const privateKey = process.env.GITHUB_APP_PRIVATE_KEY!.replace(
        /\\n/g,
        "\n"
    );

    return jwt.sign(
        {
            iat: now - 60,
            exp: now + 600,
            iss: process.env.GITHUB_APP_ID!,
        },
        privateKey,
        { algorithm: "RS256" }
    );
}

export async function getInstallationAuth(installationId: string): Promise<{
    token: string;
    expires_at: string;
    permissions: Record<string, string>;
    repository_selection: "all" | "selected";
}> {
    const jwtToken = generateGithubAppJwt();

    const res = await fetch(
        `https://api.github.com/app/installations/${installationId}/access_tokens`,
        {
            method: "POST",
            headers: {
                Authorization: `Bearer ${jwtToken}`,
                Accept: "application/vnd.github+json",
            },
        }
    );

    if (!res.ok) throw new Error(`Failed to fetch token: ${res.statusText}`);
    const data = await res.json();
    return data;
}

export function getExpiryDate(token: {
    expiresAt?: string | Date;
    expiresIn?: number;
}): Date {
    if (token.expiresAt) {
        return new Date(token.expiresAt);
    }

    return new Date(Date.now() + token.expiresIn! * 1000);
}

export function getUserIdFromState(state: string): string | null {
    let decoded: string | jwt.JwtPayload;
    try {
        decoded = jwt.verify(state, process.env.GITHUB_STATE_SECRET!);
    } catch {
        return null;
    }

    // Ensure decoded is an object and has userId
    if (typeof decoded === "string" || !("userId" in decoded)) {
        return null;
    }

    // userId here is the auth system's user ID and not the user.id
    const userId = (decoded as jwt.JwtPayload & { userId: string }).userId;
    return userId;
}
