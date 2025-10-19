"use client";

import { useAuth } from "@clerk/nextjs";

import { redirect } from "next/navigation";

export default function Home() {
    const { isLoaded, isSignedIn } = useAuth();

    if (!isLoaded) {
        return <div>Loading...</div>;
    }

    if (isSignedIn) {
        redirect("/dashboard");
    } else {
        redirect("/login");
    }
}
