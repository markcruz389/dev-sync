import { Hono } from "hono";
import { prisma } from "db";
import * as z from "zod";
import { zValidator } from "@hono/zod-validator";

const postUserPayload = z.object({
    authId: z.string(),
    email: z.email(),
    firstName: z.string().min(1).optional(),
    lastName: z.string().min(1).optional(),
});

const app = new Hono();

app.post(
    "/",
    zValidator("json", postUserPayload, (result, c) => {
        if (!result.success) {
            return c.json({ error: "Bad request", details: result.error }, 400);
        }
    }),
    async (c) => {
        const body = c.req.valid("json");
        try {
            const newUser = await prisma.user.create({
                data: {
                    auth_id: body.authId,
                    email: body.email,
                    first_name: body.firstName,
                },
            });

            return c.json({ success: true });
        } catch (error) {
            console.error("Prisma create error:", error);
            return c.json({ error: "Failed to create dummy user" }, 500);
        }
    }
);

export default app;
