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
} from "@/components/ui/sidebar"
import { BarChart3, ChevronsUpDown, Command, CreditCard, FolderTree, LogOut, Megaphone, Package, Settings, ShoppingCart, User, Users, Warehouse } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";


const items = [
    {
        title: "Products",
        url: "#",
        icon: Package,
    },
    {
        title: "Categories",
        url: "#",
        icon: FolderTree,
    },
    {
        title: "Orders",
        url: "#",
        icon: ShoppingCart,
    },
    {
        title: "Customers",
        url: "#",
        icon: Users,
    },
    {
        title: "Analytics",
        url: "#",
        icon: BarChart3,
    },
    {
        title: "Inventory",
        url: "#",
        icon: Warehouse,
    },
    {
        title: "Marketing",
        url: "#",
        icon: Megaphone,
    },
    {
        title: "Settings",
        url: "#",
        icon: Settings,
    },
]

export default function AppSidebar() {
    return (
        <Sidebar variant="floating" collapsible="icon">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <a href="#">
                                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                                    <Command className="size-4" />
                                </div>
                                <div className="grid flex-1 text-left text-sm leading-tight">
                                    <span className="truncate font-medium">Acme Inc</span>
                                    <span className="truncate text-xs">Enterprise</span>
                                </div>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent className="px-2 gap-0.5">
                <SidebarGroupLabel>Menu</SidebarGroupLabel>
                <SidebarGroupContent>
                    <SidebarMenu>
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