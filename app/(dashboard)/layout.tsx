"use client"

import { SidebarProvider } from "@/components/ui/sidebar"
import AppSidebar from "@/components/AppSidebar"
import Navbar from "@/components/Navbar"
import { ThemeProvider } from "@/components/theme-provider"
import { useEffect, useState } from "react"

function getCookie(name: string): string | undefined {
  if (typeof document === 'undefined') return undefined
  const value = `; ${document.cookie}`
  const parts = value.split(`; ${name}=`)
  if (parts.length === 2) return parts.pop()?.split(';').shift()
}

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const [defaultOpen, setDefaultOpen] = useState(true)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        const sidebarState = getCookie("sidebar:state")
        setDefaultOpen(sidebarState === "true")
    }, [])

    if (!mounted) {
        return null // Prevent hydration mismatch
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