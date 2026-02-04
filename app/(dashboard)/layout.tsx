"use client"

import { SidebarProvider } from "@/components/ui/sidebar"
import AppSidebar from "@/components/AppSidebar"
import Navbar from "@/components/Navbar"
import { ThemeProvider } from "@/components/theme-provider"
import { useEffect, useState } from "react"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const [defaultOpen, setDefaultOpen] = useState(true)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        // Read the sidebar_state cookie
        const cookies = document.cookie.split('; ')
        const sidebarCookie = cookies.find(row => row.startsWith('sidebar_state='))
        
        if (sidebarCookie) {
            const value = sidebarCookie.split('=')[1]
            setDefaultOpen(value === 'true')
        }
    }, [])

    // Prevent hydration mismatch
    if (!mounted) {
        return null
    }

    return (
        <ThemeProvider attribute="class" defaultTheme="system">
            <SidebarProvider defaultOpen={defaultOpen}>
                <AppSidebar />
                <main className="w-full">
                    <Navbar />
                    <div className="p-4">{children}</div>
                </main>
            </SidebarProvider>
        </ThemeProvider>
    )
}