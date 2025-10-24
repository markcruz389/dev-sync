import { Hono } from "hono";
import jwt from "jsonwebtoken";
import { prisma, OauthProvider } from "db";

const app = new Hono();

app.get("/github", async (c) => {
    const state = c.req.query("state");

    if (!state) {
        return c.json({ error: "state parameter is required" }, 400);
    }

    const redirectUrl = new URL("https://github.com/login/oauth/authorize");
    redirectUrl.searchParams.set("client_id", process.env.GITHUB_CLIENT_ID!);
    redirectUrl.searchParams.set("scope", "read:user repo");
    redirectUrl.searchParams.set("state", state);
    redirectUrl.searchParams.set(
        "redirect_uri",
        "https://0c2b69b3ab02.ngrok-free.app/api/auth/github/callback"
    );
    return c.redirect(redirectUrl.toString());
});

app.get("/github/callback", async (c) => {
    const code = c.req.query("code");
    const state = c.req.query("state");

    if (!state) {
        return c.json({ error: "state parameter is required" }, 400);
    }

    if (!code) {
        return c.json({ error: "code parameter is required" }, 400);
    }

    // Verify state and extract userId
    let decoded: string | jwt.JwtPayload;
    try {
        decoded = jwt.verify(state, process.env.GITHUB_STATE_SECRET!);
    } catch {
        return c.json({ error: "Invalid or expired state token" }, 400);
    }
    // Ensure decoded is an object and has userId
    if (typeof decoded === "string" || !("userId" in decoded)) {
        return c.json({ error: "Invalid token payload" }, 400);
    }

    const userId = (decoded as jwt.JwtPayload & { userId: string }).userId;

    // Exchange code for token
    const tokenRes = await fetch(
        "https://github.com/login/oauth/access_token",
        {
            method: "POST",
            headers: { Accept: "application/json" },
            body: new URLSearchParams({
                client_id: process.env.GITHUB_CLIENT_ID!,
                client_secret: process.env.GITHUB_CLIENT_SECRET!,
                code,
            }),
        }
    );

    const tokenData = await tokenRes.json();
    const accessToken = tokenData.access_token;

    const user = await prisma.user.findUniqueOrThrow({
        where: { auth_id: userId },
        select: { id: true },
    });

    // Save link in your DB
    await prisma.usersOauth.upsert({
        where: {
            user_id_provider: {
                user_id: user.id,
                provider: OauthProvider.GITHUB,
            },
        },
        update: {
            access_token: accessToken,
        },
        create: {
            user_id: user.id,
            provider: OauthProvider.GITHUB,
            access_token: accessToken,
        },
    });

    return c.redirect(
        `${process.env.WEB_APP_BASE_URL}/dashboard?linked=github`
    );
});

export default app;
