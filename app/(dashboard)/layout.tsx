"use client"

import { SidebarProvider } from "@/components/ui/sidebar"
import AppSidebar from "@/components/AppSidebar"
import Navbar from "@/components/Navbar"
import { ThemeProvider } from "@/components/theme-provider"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <ThemeProvider attribute="class" defaultTheme="system">
            <SidebarProvider defaultOpen={true}>
                <AppSidebar />
                <main className="w-full">
                    <Navbar />
                    <div className="p-4">{children}</div>
                </main>
            </SidebarProvider>
        </ThemeProvider>
    )
}