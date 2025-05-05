"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useUserStore } from "@/lib/store"
import { Leaf, Users, Package, FileText, Calendar, Settings, LogOut, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const { user, isAuthenticated, logout } = useUserStore()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user is authenticated and is an admin
    if (!isAuthenticated) {
      router.push("/login")
      return
    }

    // Check if user has admin privileges
    // This assumes your user object has an isAdmin property
    if (!user.isAdmin) {
      router.push("/dashboard")
      return
    }

    setIsLoading(false)
  }, [isAuthenticated, user, router])

  const handleLogout = () => {
    logout()
    router.push("/login")
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-green-700 text-white">
        <Link className="flex items-center justify-center" href="/admin">
          <Leaf className="h-6 w-6" />
          <span className="ml-2 text-xl font-bold">GreenCoop Admin</span>
        </Link>
        <div className="ml-auto flex items-center gap-4">
          <Link href="/dashboard" className="text-sm hover:underline">
            View Member Dashboard
          </Link>
          <Button variant="ghost" size="icon" onClick={handleLogout}>
            <LogOut className="h-5 w-5" />
            <span className="sr-only">Logout</span>
          </Button>
        </div>
      </header>
      <div className="flex flex-1">
        <aside className="w-64 border-r bg-green-50 hidden md:block">
          <nav className="grid gap-2 p-4">
            <Link
              href="/admin"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-green-700 transition-all hover:bg-green-100"
            >
              <BarChart3 className="h-4 w-4" />
              <span>Dashboard</span>
            </Link>
            <Link
              href="/admin/products"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-green-700 transition-all hover:bg-green-100"
            >
              <Package className="h-4 w-4" />
              <span>Products</span>
            </Link>
            <Link
              href="/admin/events"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-green-700 transition-all hover:bg-green-100"
            >
              <Calendar className="h-4 w-4" />
              <span>Events</span>
            </Link>
            <Link
              href="/admin/resources"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-green-700 transition-all hover:bg-green-100"
            >
              <FileText className="h-4 w-4" />
              <span>Resources</span>
            </Link>
            <Link
              href="/admin/users"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-green-700 transition-all hover:bg-green-100"
            >
              <Users className="h-4 w-4" />
              <span>Users</span>
            </Link>
            <Link
              href="/admin/settings"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-green-700 transition-all hover:bg-green-100"
            >
              <Settings className="h-4 w-4" />
              <span>Settings</span>
            </Link>
          </nav>
        </aside>
        <main className="flex-1 p-4 md:p-6 bg-white">{children}</main>
      </div>
    </div>
  )
}
