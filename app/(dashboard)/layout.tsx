"use client"

import { SidebarProvider } from "@/components/ui/sidebar"
import AppSidebar from "@/components/AppSidebar"
import Navbar from "@/components/Navbar"
import { useEffect, useState } from "react"
import { useAuth } from "@/hooks/useAuth"
import { useRouter } from "next/navigation"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const { user } = useAuth()
    const router = useRouter()
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

    // Redirect to login if not authenticated
    useEffect(() => {
        if (mounted && user === null) {
            router.push('/login') // or whatever your login route is
        }
    }, [user, mounted, router])

    // Show loading state while checking auth
    if (!mounted || user === undefined) {
        return (
            <div className="flex h-screen items-center justify-center">
                <div className="text-muted-foreground">Loading...</div>
            </div>
        )
    }

    // Don't render dashboard if no user
    if (!user) {
        return null
    }

    return (
        <SidebarProvider defaultOpen={defaultOpen}>
            <AppSidebar />
            <main className="w-full">
                <Navbar />
                <div className="p-4">{children}</div>
            </main>
        </SidebarProvider>
    )
}