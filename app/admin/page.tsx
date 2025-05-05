"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, Package, Calendar, TrendingUp, DollarSign, AlertCircle } from "lucide-react"
import { adminApi } from "@/lib/api"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    userStats: {
      totalUsers: 0,
      newUsersThisMonth: 0,
      basicMembers: 0,
      premiumMembers: 0,
      founderMembers: 0,
    },
    productStats: {
      totalProducts: 0,
      outOfStockProducts: 0,
      byCategory: {
        flower: 0,
        edibles: 0,
        tinctures: 0,
        concentrates: 0,
        accessories: 0,
      },
    },
    orderStats: {
      totalOrders: 0,
      ordersThisMonth: 0,
      totalRevenue: 0,
      averageOrderValue: 0,
    },
    eventStats: {
      upcomingEvents: 0,
      totalEvents: 0,
    },
  })

  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchDashboardStats = async () => {
      try {
        setIsLoading(true)
        setError(null)
        const data = await adminApi.getDashboardStats()
        setStats(data)
      } catch (err) {
        console.error("Error fetching dashboard stats:", err)
        setError("Failed to load dashboard statistics. Please try again later.")
      } finally {
        setIsLoading(false)
      }
    }

    fetchDashboardStats()
  }, [])

  return (
    <div className="flex flex-col gap-4 md:gap-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Members</CardTitle>
            <Users className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="h-8 w-24 animate-pulse rounded bg-gray-200"></div>
            ) : (
              <>
                <div className="text-2xl font-bold">{stats.userStats.totalUsers}</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600 flex items-center">
                    <TrendingUp className="mr-1 h-3 w-3" />+{stats.userStats.newUsersThisMonth} this month
                  </span>
                </p>
              </>
            )}
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Products</CardTitle>
            <Package className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="h-8 w-24 animate-pulse rounded bg-gray-200"></div>
            ) : (
              <>
                <div className="text-2xl font-bold">{stats.productStats.totalProducts}</div>
                <p className="text-xs text-muted-foreground">{stats.productStats.outOfStockProducts} out of stock</p>
              </>
            )}
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Orders</CardTitle>
            <Calendar className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="h-8 w-24 animate-pulse rounded bg-gray-200"></div>
            ) : (
              <>
                <div className="text-2xl font-bold">{stats.orderStats.ordersThisMonth}</div>
                <p className="text-xs text-muted-foreground">This month</p>
              </>
            )}
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="h-8 w-24 animate-pulse rounded bg-gray-200"></div>
            ) : (
              <>
                <div className="text-2xl font-bold">${stats.orderStats.totalRevenue.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">Monthly revenue</p>
              </>
            )}
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Membership Overview</CardTitle>
              <CardDescription>Breakdown of membership levels</CardDescription>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="space-y-2">
                  <div className="h-4 w-full animate-pulse rounded bg-gray-200"></div>
                  <div className="h-4 w-3/4 animate-pulse rounded bg-gray-200"></div>
                  <div className="h-4 w-1/2 animate-pulse rounded bg-gray-200"></div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                      <span>Basic Members</span>
                    </div>
                    <span className="font-medium">{stats.userStats.basicMembers}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-green-500"></div>
                      <span>Premium Members</span>
                    </div>
                    <span className="font-medium">{stats.userStats.premiumMembers}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-purple-500"></div>
                      <span>Founder Members</span>
                    </div>
                    <span className="font-medium">{stats.userStats.founderMembers}</span>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Product Categories</CardTitle>
              <CardDescription>Distribution of products by category</CardDescription>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="space-y-2">
                  <div className="h-4 w-full animate-pulse rounded bg-gray-200"></div>
                  <div className="h-4 w-3/4 animate-pulse rounded bg-gray-200"></div>
                  <div className="h-4 w-1/2 animate-pulse rounded bg-gray-200"></div>
                </div>
              ) : (
                <div className="space-y-4">
                  {Object.entries(stats.productStats.byCategory).map(([category, count]) => (
                    <div key={category} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-green-500"></div>
                        <span className="capitalize">{category}</span>
                      </div>
                      <span className="font-medium">{count}</span>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Analytics</CardTitle>
              <CardDescription>Detailed analytics will be displayed here</CardDescription>
            </CardHeader>
            <CardContent className="h-96 flex items-center justify-center">
              <p className="text-muted-foreground">Analytics dashboard coming soon</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="reports" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Reports</CardTitle>
              <CardDescription>Generate and view reports</CardDescription>
            </CardHeader>
            <CardContent className="h-96 flex items-center justify-center">
              <p className="text-muted-foreground">Reports dashboard coming soon</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
