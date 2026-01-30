"use client"

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
import { BarChart3, ChevronsUpDown, Command, CreditCard, FolderTree, LogOut, Megaphone, Package, Settings, ShoppingCart, User, Users, Warehouse } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";


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
                            <a href={item.url}>
                                <item.icon />
                                <span>{item.title}</span>
                            </a>
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
                                <a href={item.url}>
                                    <item.icon />
                                    <span>{item.title}</span>
                                </a>
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
                                            <AvatarImage src="https://github.com/shadcn.png" />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                        <div className="flex flex-col flex-1 text-left text-sm leading-tight">
                                            <span className="truncate font-semibold">Example User</span>
                                            <span className="truncate text-xs text-muted-foreground">test@example.com</span>
                                        </div>
                                        <ChevronsUpDown className="ml-auto h-4 w-4" />
                                    </div>
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56" side="top" align="end">
                                <DropdownMenuGroup>
                                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                        <User className="h-4 w-4" />
                                        <span>Profile</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <CreditCard className="h-4 w-4" />
                                        <span>Billing</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Settings className=" h-4 w-4" />
                                        <span>Settings</span>
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="text-red-500">
                                    <LogOut className="text-red-500 h-4 w-4" />
                                    <span>LogOut</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar >
    );
}