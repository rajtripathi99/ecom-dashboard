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
    console.log("=== LAYOUT RENDERING ===")
    
    return (
        <ThemeProvider attribute="class" defaultTheme="system">
            <div>
                <p style={{color: 'red', padding: '20px'}}>Layout is rendering</p>
                <SidebarProvider defaultOpen={true}>
                    <p style={{color: 'blue', padding: '20px'}}>SidebarProvider rendered</p>
                    <AppSidebar />
                    <main className="w-full">
                        <Navbar />
                        <div className="p-4">{children}</div>
                    </main>
                </SidebarProvider>
            </div>
        </ThemeProvider>
    )
}