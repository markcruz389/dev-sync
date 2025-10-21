"use client";

import { AppSidebar } from "@/_components/app-sidebar";
import { ChartAreaInteractive } from "@/_components/chart-area-interactive";
import { DataTable } from "@/_components/data-table";
import { SectionCards } from "@/_components/section-cards";
import { SiteHeader } from "@/_components/site-header";
import { Button } from "@/_components/ui/button";
import { SidebarInset, SidebarProvider } from "@/_components/ui/sidebar";
import { useAuth } from "@clerk/nextjs";

export default function Page() {
    async function handleLinkGithub() {
        const res = await fetch("/api/github/start");
        const { redirectUrl } = await res.json();
        window.location.href = redirectUrl;
    }

    return (
        <SidebarProvider
            style={
                {
                    "--sidebar-width": "calc(var(--spacing) * 72)",
                    "--header-height": "calc(var(--spacing) * 12)",
                } as React.CSSProperties
            }
        >
            <AppSidebar variant="inset" />
            <SidebarInset>
                <SiteHeader />
                <div className="flex flex-1 flex-col">
                    <div className="@container/main flex flex-1 flex-col gap-2">
                        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                            {/* <SectionCards /> */}
                            {/* <div className="px-4 lg:px-6">
                                <ChartAreaInteractive />
                            </div>
                            <DataTable data={data} /> */}
                            <Button onClick={() => handleLinkGithub()}>
                                Link Github Account
                            </Button>
                        </div>
                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
}
