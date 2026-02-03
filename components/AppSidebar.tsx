"use client"

import Link from "next/link"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from "@/components/ui/sidebar"
import { BarChart3, ChevronsUpDown, Command, LogOut, Megaphone, Package, Settings, ShoppingCart, Users, Warehouse, FolderTree } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { useAuth } from "@/hooks/useAuth";


const items = [
    {
        title: "Products",
        url: "/products",
        icon: Package,
    },
    {
        title: "Categories",
        url: "/categories",
        icon: FolderTree,
    },
    {
        title: "Orders",
        url: "/orders",
        icon: ShoppingCart,
    },
    {
        title: "Customers",
        url: "/customers",
        icon: Users,
    },
    {
        title: "Analytics",
        url: "/analytics",
        icon: BarChart3,
    },
    {
        title: "Inventory",
        url: "/inventory",
        icon: Warehouse,
    },
    {
        title: "Marketing",
        url: "/marketing",
        icon: Megaphone,
    },
    {
        title: "Settings",
        url: "/settings",
        icon: Settings,
    },
]

function SidebarMenuItems() {
    const { state } = useSidebar();
    const isCollapsed = state === "collapsed";

    if (!isCollapsed) {
        return (
            <>
                {items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton className="py-2" asChild>
                            <Link href={item.url}>
                                <item.icon />
                                <span>{item.title}</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}
            </>
        );
    }

    return (
        <TooltipProvider delayDuration={300}>
            {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <SidebarMenuButton className="py-2" asChild>
                                <Link href={item.url}>
                                    <item.icon />
                                    <span>{item.title}</span>
                                </Link>
                            </SidebarMenuButton>
                        </TooltipTrigger>
                        <TooltipContent side="right">
                            <p>{item.title}</p>
                        </TooltipContent>
                    </Tooltip>
                </SidebarMenuItem>
            ))}
        </TooltipProvider>
    );
}

export default function AppSidebar() {
    const { user, logout } = useAuth();
    // if (!user) return null;
    if (user === undefined) return null // still loading
    if (!user) return null // actually logged out
    const initials = `${user.firstName?.[0] || ''}${user.lastName?.[0] || ''}`;
    return (
        <Sidebar variant="floating" collapsible="icon">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg">
                            <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                                <Command className="size-4" />
                            </div>
                            <div className="grid flex-1 text-left text-sm leading-tight">
                                <span className="truncate font-semibold">Acme Inc</span>
                                <span className="truncate text-xs">Enterprise</span>
                            </div>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent className="px-2 gap-0.5">
                <SidebarGroupLabel>Menu</SidebarGroupLabel>
                <SidebarGroupContent>
                    <SidebarMenu>
                        <SidebarMenuItems />
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton size="lg" className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
                                    <div className="flex items-center gap-2 w-full">
                                        <Avatar className="h-8 w-8">
                                            <AvatarImage src={user.image} />
                                            <AvatarFallback>{initials}</AvatarFallback>
                                        </Avatar>
                                        <div className="flex flex-col flex-1 text-left text-sm leading-tight">
                                            <span className="truncate font-semibold">
                                                {user.firstName} {user.lastName}
                                            </span>
                                            <span className="truncate text-xs text-muted-foreground">
                                                {user.email}
                                            </span>
                                        </div>
                                        <ChevronsUpDown className="ml-auto h-4 w-4" />
                                    </div>
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56" side="top" align="end">
                                <DropdownMenuItem
                                    onClick={logout}
                                    className="text-red-600 dark:text-red-500 cursor-pointer"
                                >
                                    <LogOut className="text-red-600 h-4 w-4" />
                                    <span>Log out</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar >
    );
}