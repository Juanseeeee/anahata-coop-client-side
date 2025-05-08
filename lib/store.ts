import { create } from "zustand"
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api"


interface UserState {
  user: {
    _id: string | null
    name: string | null
    email: string | null
    membershipLevel: string | null
    memberSince: string | null
    membershipId: string | null
    nextRenewal: string | null
    isAdmin: boolean
  }
  isAuthenticated: boolean
  isLoading: boolean
  initialize: () => Promise<void>
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
  register: (userData: {
    firstName: string
    lastName: string
    email: string
    password: string
    isAdmin: false
  }) => Promise<boolean>
}

export const useUserStore = create<UserState>((set) => ({
  user: {
    _id: null,
    name: null,
    email: null,
    membershipLevel: null,
    memberSince: null,
    membershipId: null,
    nextRenewal: null,
    isAdmin: false,
  },
  isAuthenticated: false,
  isLoading: true,

  initialize: async () => {
    try {
      const res = await fetch(`${API_URL}/auth/profile`, {
        credentials: "include",
      })

      if (!res.ok) throw new Error("No autorizado")

      const data = await res.json()

      set({
        user: {
          _id: data._id,
          name: data.firstName + ' ' + data.lastName,
          email: data.email,
          membershipLevel: data.membershipLevel,
          memberSince: data.memberSince,
          membershipId: data.membershipId,
          nextRenewal: data.nextRenewal,
          isAdmin: data?.isAdmin || false,
        },
        isAuthenticated: true,
        isLoading: false,
      })
    } catch (error) {
      console.error("Error al inicializar usuario:", error)
      set({ isAuthenticated: false, isLoading: false })
    }
  },

  login: async (email, password) => {
    try {
      const res = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        credentials: "include", // para manejar cookies si usás sessions
      })

      if (!res.ok) return false

      const data = await res.json()

      set({
        user: {
          _id: data.id,
          name: data.name,
          email: data.email,
          membershipLevel: data.membershipLevel,
          memberSince: data.memberSince,
          membershipId: data.membershipId,
          nextRenewal: data.nextRenewal,
          isAdmin: data.isAdmin,
        },
        isAuthenticated: true,
      })

      return true
    } catch (error) {
      console.error("Login fallido:", error)
      return false
    }
  },

  logout: async () => {
    try {
      await fetch(`${API_URL}/auth/logout`, {
        method: "POST",
        credentials: "include",
      })
    } catch (err) {
      console.warn("Logout fallido, pero se limpia el estado igual.")
    }

    set({
      user: {
        _id: null,
        name: null,
        email: null,
        membershipLevel: null,
        memberSince: null,
        membershipId: null,
        nextRenewal: null,
        isAdmin: false,
      },
      isAuthenticated: false,
    })
  },

  register: async (userData) => {
    try {
      const res = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
        credentials: "include",
      })

      if (!res.ok) return false

      const data = await res.json()

      set({
        user: {
          _id: data.id,
          name: data.name,
          email: data.email,
          membershipLevel: data.membershipLevel,
          memberSince: data.memberSince,
          membershipId: data.membershipId,
          nextRenewal: data.nextRenewal,
          isAdmin: data.isAdmin,
        },
        isAuthenticated: true,
      })

      return true
    } catch (error) {
      console.error("Error al registrar:", error)
      return false
    }
  },
}))

// Initialize auth state when this module is imported
if (typeof window !== "undefined") {
  const publicRoutes = ["/login", "/register", "/forgot-password"]
  const pathname = window.location.pathname

  if (!publicRoutes.includes(pathname)) {
    useUserStore.getState().initialize()
  }
}
