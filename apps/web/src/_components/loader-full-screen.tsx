"use client";

import { Spinner } from "./ui/spinner";

interface LoaderFullScreenProps {
    title: string;
    subtitle: string;
}

export function LoaderFullScreen({
    title = "",
    subtitle = "",
}: LoaderFullScreenProps) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
            <div className="flex flex-col items-center justify-center gap-4">
                {/* Spinner */}
                <Spinner className="size-8 text-foreground" />

                {/* Title */}
                <div className="text-center">
                    <p className="text-lg font-medium text-foreground">
                        {title}
                    </p>
                    {subtitle && (
                        <p className="text-sm text-muted-foreground mt-1">
                            {subtitle}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
