import { serve } from "@hono/node-server";
import { Hono } from "hono";

import webhooks from "./webhooks/routes.js";
import auth from "./auth/routes.js";

import "dotenv/config";

const app = new Hono();

app.route("/api/auth", auth);
app.route("/api/webhooks", webhooks);

const server = serve(
    {
        fetch: app.fetch,
        port: parseInt(process.env.API_PORT as string) || 8888,
    },
    (info) => {
        console.log(`Server is running on http://localhost:${info.port}`);
    }
);

// graceful shutdown
process.on("SIGINT", () => {
    server.close();
    process.exit(0);
});
process.on("SIGTERM", () => {
    server.close((err) => {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        process.exit(0);
    });
});
