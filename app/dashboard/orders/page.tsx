"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Leaf, User, FileText, Calendar, Settings, LogOut, Bell, Package, Clock, CheckCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function OrdersPage() {
  // Mock order data
  const orders = [
    {
      id: "ORD-12345",
      date: "April 10, 2025",
      status: "Completed",
      total: 125.5,
      items: [
        { name: "Premium Blend", quantity: 2, price: 45.0 },
        { name: "Relief Tincture", quantity: 1, price: 35.5 },
      ],
    },
    {
      id: "ORD-12346",
      date: "March 28, 2025",
      status: "Completed",
      total: 75.0,
      items: [
        { name: "Energy Gummies", quantity: 1, price: 30.0 },
        { name: "Mountain Haze", quantity: 1, price: 45.0 },
      ],
    },
    {
      id: "ORD-12347",
      date: "April 15, 2025",
      status: "Processing",
      total: 95.5,
      items: [
        { name: "Sleep Formula", quantity: 1, price: 55.5 },
        { name: "Calm Cookies", quantity: 2, price: 20.0 },
      ],
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <Link className="flex items-center justify-center" href="/">
          <Leaf className="h-6 w-6 text-green-600" />
          <span className="ml-2 text-xl font-bold">GreenCoop</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
          </Button>
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
            <span className="sr-only">Settings</span>
          </Button>
          <Button variant="ghost" size="icon">
            <LogOut className="h-5 w-5" />
            <span className="sr-only">Logout</span>
          </Button>
        </nav>
      </header>
      <div className="flex flex-1">
        <aside className="w-64 border-r hidden md:block p-4">
          <nav className="grid gap-2">
            <Link
              href="/dashboard"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-green-900 hover:bg-green-100"
            >
              <User className="h-4 w-4" />
              <span>My Profile</span>
            </Link>
            <Link
              href="/dashboard/products"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-green-900 hover:bg-green-100"
            >
              <FileText className="h-4 w-4" />
              <span>Products</span>
            </Link>
            <Link
              href="/dashboard/orders"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-green-600 bg-green-50 transition-all hover:text-green-900 hover:bg-green-100"
            >
              <Calendar className="h-4 w-4" />
              <span>My Orders</span>
            </Link>
            <Link
              href="/dashboard/resources"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-green-900 hover:bg-green-100"
            >
              <Calendar className="h-4 w-4" />
              <span>Resources</span>
            </Link>
            <Link
              href="/dashboard/community"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-green-900 hover:bg-green-100"
            >
              <Calendar className="h-4 w-4" />
              <span>Community</span>
            </Link>
            <Link
              href="/dashboard/settings"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-green-900 hover:bg-green-100"
            >
              <Settings className="h-4 w-4" />
              <span>Settings</span>
            </Link>
          </nav>
        </aside>
        <main className="flex-1 p-4 md:p-6">
          <div className="flex flex-col gap-4 md:gap-8">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold">My Orders</h1>
              <Button variant="outline">
                <Package className="mr-2 h-4 w-4" />
                Track Order
              </Button>
            </div>

            <Tabs defaultValue="all">
              <TabsList>
                <TabsTrigger value="all">All Orders</TabsTrigger>
                <TabsTrigger value="processing">Processing</TabsTrigger>
                <TabsTrigger value="completed">Completed</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="space-y-4">
                {orders.map((order) => (
                  <Card key={order.id} className="overflow-hidden">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-lg">Order {order.id}</CardTitle>
                        <Badge
                          variant={order.status === "Completed" ? "outline" : "secondary"}
                          className={order.status === "Completed" ? "bg-green-50 text-green-700" : ""}
                        >
                          {order.status}
                        </Badge>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="mr-1 h-3 w-3" />
                        {order.date}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {order.items.map((item, index) => (
                          <div key={index} className="flex justify-between items-center py-2 border-b last:border-0">
                            <div>
                              <p className="font-medium">{item.name}</p>
                              <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                            </div>
                            <p className="font-medium">${item.price.toFixed(2)}</p>
                          </div>
                        ))}
                        <div className="flex justify-between items-center pt-2">
                          <p className="font-bold">Total</p>
                          <p className="font-bold">${order.total.toFixed(2)}</p>
                        </div>
                      </div>
                      <div className="flex justify-end mt-4 gap-2">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                        <Button variant="outline" size="sm">
                          Reorder
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
              <TabsContent value="processing" className="space-y-4">
                {orders
                  .filter((order) => order.status === "Processing")
                  .map((order) => (
                    <Card key={order.id} className="overflow-hidden">
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-center">
                          <CardTitle className="text-lg">Order {order.id}</CardTitle>
                          <Badge variant="secondary">{order.status}</Badge>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="mr-1 h-3 w-3" />
                          {order.date}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {order.items.map((item, index) => (
                            <div key={index} className="flex justify-between items-center py-2 border-b last:border-0">
                              <div>
                                <p className="font-medium">{item.name}</p>
                                <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                              </div>
                              <p className="font-medium">${item.price.toFixed(2)}</p>
                            </div>
                          ))}
                          <div className="flex justify-between items-center pt-2">
                            <p className="font-bold">Total</p>
                            <p className="font-bold">${order.total.toFixed(2)}</p>
                          </div>
                        </div>
                        <div className="flex justify-end mt-4 gap-2">
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                          <Button variant="outline" size="sm">
                            Track Order
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </TabsContent>
              <TabsContent value="completed" className="space-y-4">
                {orders
                  .filter((order) => order.status === "Completed")
                  .map((order) => (
                    <Card key={order.id} className="overflow-hidden">
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-center">
                          <CardTitle className="text-lg">Order {order.id}</CardTitle>
                          <Badge variant="outline" className="bg-green-50 text-green-700">
                            <CheckCircle className="mr-1 h-3 w-3" />
                            {order.status}
                          </Badge>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="mr-1 h-3 w-3" />
                          {order.date}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {order.items.map((item, index) => (
                            <div key={index} className="flex justify-between items-center py-2 border-b last:border-0">
                              <div>
                                <p className="font-medium">{item.name}</p>
                                <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                              </div>
                              <p className="font-medium">${item.price.toFixed(2)}</p>
                            </div>
                          ))}
                          <div className="flex justify-between items-center pt-2">
                            <p className="font-bold">Total</p>
                            <p className="font-bold">${order.total.toFixed(2)}</p>
                          </div>
                        </div>
                        <div className="flex justify-end mt-4 gap-2">
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                          <Button variant="outline" size="sm">
                            Reorder
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2025 GreenCoop. All rights reserved.</p>
      </footer>
    </div>
  )
}
