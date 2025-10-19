"use client";

import { LoaderFullScreen } from "@/_components/loader-full-screen";
import { useAuth } from "@clerk/nextjs";

import { redirect } from "next/navigation";

export default function Home() {
    const { isLoaded, isSignedIn } = useAuth();

    if (!isLoaded) {
        return <LoaderFullScreen title="Loading..." subtitle="Please wait" />;
    }

    if (isSignedIn) {
        redirect("/dashboard");
    } else {
        redirect("/login");
    }
}
