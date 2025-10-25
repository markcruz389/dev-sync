import { Hono } from "hono";
import { prisma, GithubAuthRepoSelection } from "@devsync/db";
import { pushGithubJob, GithubJobName } from "@devsync/queue";
import {
    exchangeGithubCode,
    getExpiryDate,
    getInstallationAuth,
    getUserIdFromState,
} from "./services.js";

const app = new Hono();

// Redirect user to install your GitHub App
app.get("/github/install", (c) => {
    const state = c.req.query("state") ?? "";

    const redirectUrl = new URL(
        `https://github.com/apps/${process.env.GITHUB_APP_SLUG}/installations/new`
    );

    // This parameter needed for the user oauth since it's enabled in the github app settings
    redirectUrl.searchParams.set("state", state);

    return c.redirect(redirectUrl);
});

// Callback after user installs your GitHub App
app.get("/github/install/callback", async (c) => {
    const installationId = c.req.query("installation_id");
    const setupAction = c.req.query("setup_action"); // e.g., "install" or "update"
    const state = c.req.query("state");
    const code = c.req.query("code");

    if (setupAction !== "install") {
        return c.json({ error: "Only install setup_action is supported" }, 400);
    }

    if (!state) {
        return c.json({ error: "state parameter is required" }, 400);
    }

    const user_id = getUserIdFromState(state);
    if (!user_id) {
        return c.json({ error: "Invalid state parameter" }, 400);
    }

    if (!code) {
        return c.json({ error: "code parameter is required" }, 400);
    }

    if (!installationId) {
        return c.json({ error: "installation_id parameter is required" }, 400);
    }

    const [userAuth, installationAuth] = await Promise.all([
        exchangeGithubCode(code),
        getInstallationAuth(installationId),
    ]);

    const user = await prisma.user.findUniqueOrThrow({
        where: { auth_id: user_id },
        select: { id: true },
    });

    await prisma.githubAuth.create({
        data: {
            user_id: user.id,
            access_token: userAuth.accessToken,
            refresh_token: userAuth.refreshToken,
            token_type: userAuth.type,
            expires_at: getExpiryDate({ expiresIn: userAuth.expiresIn }),
            refresh_expires_at: getExpiryDate({
                expiresIn: userAuth.refreshTokenExpiresIn,
            }),
            scope: userAuth.scope,

            installation_id: installationId,
            installation_token: installationAuth.token,
            installation_expires_at: getExpiryDate({
                expiresAt: installationAuth.expires_at,
            }),
            permissions: installationAuth.permissions,
            repository_selection:
                installationAuth.repository_selection.toUpperCase() as GithubAuthRepoSelection, // Forced uppercase to match enum
        },
    });

    // Enqueue job to fetch user repos
    // await pushGithubJob(GithubJobName.UserReposGetJob, {
    //     userId: user.id,
    // });

    return c.redirect(
        `${process.env.WEB_APP_BASE_URL}/dashboard?linked=github`
    );
});

export default app;
