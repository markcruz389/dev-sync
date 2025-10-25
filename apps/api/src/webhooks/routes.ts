import { Hono } from "hono";
import { prisma } from "db";
import { verifyWebhook } from "@clerk/backend/webhooks";

const app = new Hono();

app.post("/clerk", async (c) => {
    console.log({
        method: c.req.method,
        url: c.req.url,
        headers: Object.fromEntries(c.req.raw.headers),
    });

    const evt = await verifyWebhook(c.req.raw, {
        signingSecret: process.env.CLERK_WEBHOOK_SIGNING_SECRET,
    });
    const eventType = evt.type;

    // Only process user.created events
    if (eventType !== "user.created") {
        return c.json({ message: "Event type not processed" }, 200);
    }

    try {
        const clerkData = evt.data;
        const primaryEmail = clerkData.email_addresses[0]?.email_address;

        if (!primaryEmail) {
            return c.json({ error: "No email address found" }, 400);
        }

        const newUser = await prisma.user.create({
            data: {
                auth_id: clerkData.id,
                email: primaryEmail,
                first_name: clerkData.first_name,
                last_name: clerkData.last_name,
            },
        });

        return c.json(newUser);
    } catch (error) {
        console.error("Webhook error:", error);
        return c.json({ error: "Failed to process webhook" }, 500);
    }
});

export default app;
