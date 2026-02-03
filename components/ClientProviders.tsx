"use client"

import { SidebarProvider } from "@/components/ui/sidebar"
import AppSidebar from "@/components/AppSidebar"
import Navbar from "@/components/Navbar"
import { ThemeProvider } from "@/components/theme-provider"
import { AuthProvider } from "@/hooks/useAuth"
import { ReactNode, useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export default function ClientProviders({ children }: { children: ReactNode }) {
  const [defaultOpen, setDefaultOpen] = useState(true)
  const pathname = usePathname()
  const isLoginPage = pathname === '/login'

  useEffect(() => {
    // Get sidebar state from cookies on client side
    if (typeof window !== 'undefined') {
      const cookies = document.cookie.split(';')
      const sidebarCookie = cookies.find(c => c.trim().startsWith('sidebar_state='))
      if (sidebarCookie) {
        const value = sidebarCookie.split('=')[1]
        setDefaultOpen(value === 'true')
      }
    }
  }, [])

  return (
    <AuthProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {isLoginPage ? (
          // Login page - no sidebar or navbar
          children
        ) : (
          // Protected pages - with sidebar and navbar
          <SidebarProvider defaultOpen={defaultOpen}>
            <AppSidebar />
            <main className="w-full">
              <Navbar />
              <div className="p-4">
                {children}
              </div>
            </main>
          </SidebarProvider>
        )}
      </ThemeProvider>
    </AuthProvider>
  )
}