import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Get the path the user is trying to access
  const path = request.nextUrl.pathname

  // Define which paths should be protected
  const protectedPaths = [
    "/dashboard",
    "/dashboard/products",
    "/dashboard/orders",
    "/dashboard/resources",
    "/dashboard/settings",
  ]

  // Define admin paths that need admin protection
  const adminPaths = [
    "/admin",
    "/admin/products",
    "/admin/events",
    "/admin/resources",
    "/admin/users",
    "/admin/settings",
  ]

  // Define public paths that don't need protection
  const isPublicPath = ["/", "/login", "/register", "/forgot-password"].includes(path)

  // Check if the path needs protection
  const isProtectedPath = protectedPaths.some(
    (protectedPath) => path === protectedPath || path.startsWith(`${protectedPath}/`),
  )

  // Check if the path needs admin protection
  const isAdminPath = adminPaths.some((adminPath) => path === adminPath || path.startsWith(`${adminPath}/`))

  // Get the authentication token from cookies
  const token = request.cookies.get("auth-token")?.value

  // For admin paths, we need to check if the user is an admin
  // In a real app, you would decode the JWT and check the user's role
  // For this example, we'll use a simple approach with a separate admin cookie
  const isAdmin = request.cookies.get("is-admin")?.value === "true"

  // If trying to access an admin path without admin privileges, redirect to dashboard
  if (isAdminPath && (!token || !isAdmin)) {
    return NextResponse.redirect(new URL("/dashboard", request.url))
  }

  // If trying to access a protected path without a token, redirect to login
  if ((isProtectedPath || isAdminPath) && !token) {
    // Create the URL to redirect to, including the original path as a redirect parameter
    const redirectUrl = new URL("/login", request.url)
    redirectUrl.searchParams.set("redirect", path)

    return NextResponse.redirect(redirectUrl)
  }

  // If trying to access login/register while already logged in, redirect to dashboard
  if (isPublicPath && token && (path === "/login" || path === "/register")) {
    return NextResponse.redirect(new URL("/dashboard", request.url))
  }

  return NextResponse.next()
}

// Configure which paths the middleware should run on
export const config = {
  matcher: [
    /*
     * Match all paths except:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /static (public files)
     * 4. favicon.ico, etc.
     */
    "/((?!api|_next|static|favicon.ico).*)",
  ],
}
