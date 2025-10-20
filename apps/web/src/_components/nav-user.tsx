"use client";

import { IconDotsVertical, IconLogout } from "@tabler/icons-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/_components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/_components/ui/dropdown-menu";
import {
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from "@/_components/ui/sidebar";
import { useClerk, useUser } from "@clerk/nextjs";
import { useState } from "react";
import { Spinner } from "./ui/spinner";

export function NavUser() {
    const { isMobile } = useSidebar();
    const { signOut } = useClerk();
    const { user: clerkUser } = useUser();
    const [isSigningOut, setIsSigningOut] = useState(false);

    function handleSignOut() {
        setIsSigningOut(true);
        signOut({ redirectUrl: "/login" });
        setTimeout(() => {
            setIsSigningOut(false);
        }, 2000);
    }

    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <SidebarMenuButton
                            size="lg"
                            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                        >
                            <Avatar className="h-8 w-8 rounded-lg grayscale">
                                <AvatarImage
                                    src={clerkUser?.imageUrl}
                                    alt={clerkUser?.firstName ?? "User"}
                                />
                                <AvatarFallback className="rounded-lg">
                                    CN
                                </AvatarFallback>
                            </Avatar>
                            <div className="grid flex-1 text-left text-sm leading-tight">
                                <span className="truncate font-medium">
                                    {clerkUser?.firstName ?? "User"}
                                </span>
                                <span className="text-muted-foreground truncate text-xs">
                                    {
                                        clerkUser?.primaryEmailAddress
                                            ?.emailAddress
                                    }
                                </span>
                            </div>
                            <IconDotsVertical className="ml-auto size-4" />
                        </SidebarMenuButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
                        side={isMobile ? "bottom" : "right"}
                        align="end"
                        sideOffset={4}
                    >
                        <DropdownMenuItem
                            onClick={() => handleSignOut()}
                            onSelect={(e) => e.preventDefault()}
                            disabled={isSigningOut}
                        >
                            {isSigningOut ? <Spinner /> : <IconLogout />}
                            {isSigningOut ? "Logging" : "Log"} out
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </SidebarMenuItem>
        </SidebarMenu>
    );
}
