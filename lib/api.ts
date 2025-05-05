// Base API URL
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api"

// Helper function for authenticated fetch requests
const authFetch = async (endpoint: string, options: RequestInit = {}) => {
  // Get the token from cookies
  const cookies = document.cookie.split(";")
  const authCookie = cookies.find((cookie) => cookie.trim().startsWith("auth-token="))
  const token = authCookie ? authCookie.split("=")[1] : null

  if (!token) {
    throw new Error("Authentication required")
  }

  const defaultHeaders = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  }

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  })

  // Check if the response is ok (status in the range 200-299)
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}))
    throw new Error(errorData.message || `API error: ${response.status}`)
  }

  return response.json()
}

// Admin API functions
export const adminApi = {
  // Dashboard
  getDashboardStats: () => authFetch("/admin/dashboard"),

  // Products
  getProducts: () => authFetch("/products"),

  getProduct: (id: string) => authFetch(`/products/${id}`),

  createProduct: (productData: any) =>
    authFetch("/products", {
      method: "POST",
      body: JSON.stringify(productData),
    }),

  updateProduct: (id: string, productData: any) =>
    authFetch(`/products/${id}`, {
      method: "PUT",
      body: JSON.stringify(productData),
    }),

  deleteProduct: (id: string) =>
    authFetch(`/products/${id}`, {
      method: "DELETE",
    }),

  // Events
  getEvents: () => authFetch("/events"),

  getEvent: (id: string) => authFetch(`/events/${id}`),

  createEvent: (eventData: any) =>
    authFetch("/events", {
      method: "POST",
      body: JSON.stringify(eventData),
    }),

  updateEvent: (id: string, eventData: any) =>
    authFetch(`/events/${id}`, {
      method: "PUT",
      body: JSON.stringify(eventData),
    }),

  deleteEvent: (id: string) =>
    authFetch(`/events/${id}`, {
      method: "DELETE",
    }),

  // Users
  getUsers: () => authFetch("/users"),

  getUser: (id: string) => authFetch(`/users/${id}`),

  updateUser: (id: string, userData: any) =>
    authFetch(`/users/${id}`, {
      method: "PUT",
      body: JSON.stringify(userData),
    }),

  deleteUser: (id: string) =>
    authFetch(`/users/${id}`, {
      method: "DELETE",
    }),
}

// Public API functions
export const publicApi = {
  login: (email: string, password: string) =>
    fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then((res) => {
      if (!res.ok) {
        throw new Error("Invalid credentials")
      }
      return res.json()
    }),

  register: (userData: any) =>
    fetch(`${API_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    }).then((res) => {
      if (!res.ok) {
        throw new Error("Registration failed")
      }
      return res.json()
    }),
}
