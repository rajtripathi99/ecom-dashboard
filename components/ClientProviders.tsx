"use client"

import { SidebarProvider } from "@/components/ui/sidebar"
import AppSidebar from "@/components/AppSidebar"
import Navbar from "@/components/Navbar"
import { ThemeProvider } from "@/components/theme-provider"
import { AuthProvider } from "@/hooks/useAuth"
import { ReactNode, useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export default function ClientProviders({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState<boolean | null>(null)
  const pathname = usePathname()
  const isLoginPage = pathname === '/login'

  // Load persisted sidebar state
  useEffect(() => {
    const stored = localStorage.getItem("sidebar_open")
    setOpen(stored ? JSON.parse(stored) : true) // default first time
  }, [])

  // Persist on every change
  useEffect(() => {
    if (open !== null) {
      localStorage.setItem("sidebar_open", JSON.stringify(open))
    }
  }, [open])

  // Wait for hydration
  if (open === null) {
    return (
      <AuthProvider>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="min-h-screen flex">
            <div className="w-64 border-r bg-muted animate-pulse" />
            <div className="flex-1" />
          </div>
        </ThemeProvider>
      </AuthProvider>
    )
  }

  return (
    <AuthProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {isLoginPage ? (
          children
        ) : (
          <SidebarProvider open={open} onOpenChange={setOpen}>
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