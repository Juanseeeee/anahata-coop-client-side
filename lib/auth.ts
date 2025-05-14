// Check if the user is authenticated
export const isAuthenticated = (): boolean => {
    if (typeof window === "undefined") return false
  
    // Check for auth token in cookies
    const cookies = document.cookie.split(";").map((cookie) => cookie.trim())
    const hasAuthCookie = cookies.some((cookie) => cookie.startsWith("auth-token="))
  
    // Check for auth token in localStorage as fallback
    const hasLocalStorageToken = !!localStorage.getItem("auth-token")
  
    return hasAuthCookie || hasLocalStorageToken
  }
  
  // Get the authentication token
  export const getAuthToken = (): string | null => {
    if (typeof window === "undefined") return null
  
    // Try to get token from cookies
    const cookies = document.cookie.split(";").map((cookie) => cookie.trim())
    const authCookie = cookies.find((cookie) => cookie.startsWith("auth-token="))
  
    if (authCookie) {
      return authCookie.split("=")[1]
    }
  
    // Fallback to localStorage
    return localStorage.getItem("auth-token")
  }
  
  // Set the authentication token
  export const setAuthToken = (token: string): void => {
    if (typeof window === "undefined") return
  
    // Set in both cookie and localStorage for redundancy
    document.cookie = `auth-token=${token}; path=/; max-age=2592000` // 30 days
    localStorage.setItem("auth-token", token)
  }
  
  // Remove the authentication token (logout)
  export const removeAuthToken = (): void => {
    if (typeof window === "undefined") return
  
    // Remove from both cookie and localStorage
    document.cookie = "auth-token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"
    localStorage.removeItem("auth-token")
  }
  