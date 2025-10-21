import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { auth } from "@clerk/nextjs/server";

export async function GET() {
    const { userId } = await auth();

    if (!userId) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const state = jwt.sign({ userId }, process.env.GITHUB_STATE_SECRET!, {
        expiresIn: "10m",
    });

    const redirectUrl = new URL(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/github`
    );
    redirectUrl.searchParams.set("state", state);

    return NextResponse.json({ redirectUrl: redirectUrl.toString() });
}
