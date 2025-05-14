"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Leaf,
  User,
  FileText,
  Calendar,
  Settings,
  LogOut,
  Bell,
  Package,
  Clock,
  CheckCircle,
  ShoppingBag,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { CartDropdown } from "@/components/cart-dropdown"
import { userApi } from "@/lib/api"
import { useToast } from "@/components/ui/use-toast"

interface OrderItem {
  product: string
  name: string
  price: number
  quantity: number
}

interface Order {
  _id: string
  createdAt: string
  status: string
  items: OrderItem[]
  total: number
  shippingAddress: string
  paymentMethod: string
  paymentStatus: string
}

export default function OrdersPage() {
  const { toast } = useToast()
  const [orders, setOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true)
        const data = await userApi.getMyOrders()
        setOrders(data)
      } catch (error) {
        console.error("Error fetching orders:", error)
        toast({
          title: "Error fetching orders",
          description: "Could not load your orders. Please try again later.",
          variant: "destructive",
        })
      } finally {
        setLoading(false)
      }
    }

    fetchOrders()
  }, [toast])

  // Format date
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <Link className="flex items-center justify-center" href="/">
          <Leaf className="h-6 w-6 text-green-600" />
          <span className="ml-2 text-xl font-bold">GreenCoop</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <CartDropdown />
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
              <ShoppingBag className="h-4 w-4" />
              <span>Products</span>
            </Link>
            <Link
              href="/dashboard/orders"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-green-600 bg-green-50 transition-all hover:text-green-900 hover:bg-green-100"
            >
              <Package className="h-4 w-4" />
              <span>My Orders</span>
            </Link>
            <Link
              href="/dashboard/resources"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-green-900 hover:bg-green-100"
            >
              <FileText className="h-4 w-4" />
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
              <Button variant="outline" asChild>
                <Link href="/dashboard/products">
                  <ShoppingBag className="mr-2 h-4 w-4" />
                  Continue Shopping
                </Link>
              </Button>
            </div>

            {loading ? (
              <div className="flex justify-center py-12">
                <p>Loading your orders...</p>
              </div>
            ) : orders.length === 0 ? (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <Package className="h-12 w-12 text-gray-300 mb-4" />
                  <h2 className="text-xl font-medium mb-2">No orders yet</h2>
                  <p className="text-gray-500 mb-6 text-center">
                    You haven't placed any orders yet. Browse our products and place your first order.
                  </p>
                  <Button asChild>
                    <Link href="/dashboard/products">Browse Products</Link>
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <Tabs defaultValue="all">
                <TabsList>
                  <TabsTrigger value="all">All Orders</TabsTrigger>
                  <TabsTrigger value="processing">Processing</TabsTrigger>
                  <TabsTrigger value="completed">Completed</TabsTrigger>
                </TabsList>
                <TabsContent value="all" className="space-y-4">
                  {orders.map((order) => (
                    <Card key={order._id} className="overflow-hidden">
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-center">
                          <CardTitle className="text-lg">Order #{order._id.substring(order._id.length - 8)}</CardTitle>
                          <Badge
                            variant={order.status === "Completed" ? "outline" : "secondary"}
                            className={order.status === "Completed" ? "bg-green-50 text-green-700" : ""}
                          >
                            {order.status}
                          </Badge>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="mr-1 h-3 w-3" />
                          {formatDate(order.createdAt)}
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
                              <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                            </div>
                          ))}
                          <div className="flex justify-between items-center pt-2">
                            <p className="font-bold">Total</p>
                            <p className="font-bold">${order.total.toFixed(2)}</p>
                          </div>
                        </div>
                        <div className="flex justify-end mt-4 gap-2">
                          <Button variant="outline" size="sm" asChild>
                            <Link href={`/checkout/confirmation?orderId=${order._id}`}>View Details</Link>
                          </Button>
                          {order.status === "Completed" && (
                            <Button variant="outline" size="sm">
                              Reorder
                            </Button>
                          )}
                          {order.status === "Processing" && (
                            <Button variant="outline" size="sm">
                              Track Order
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>
                <TabsContent value="processing" className="space-y-4">
                  {orders
                    .filter(
                      (order) =>
                        order.status === "Processing" || order.status === "Pending" || order.status === "Shipped",
                    )
                    .map((order) => (
                      <Card key={order._id} className="overflow-hidden">
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-center">
                            <CardTitle className="text-lg">
                              Order #{order._id.substring(order._id.length - 8)}
                            </CardTitle>
                            <Badge variant="secondary">{order.status}</Badge>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Clock className="mr-1 h-3 w-3" />
                            {formatDate(order.createdAt)}
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            {order.items.map((item, index) => (
                              <div
                                key={index}
                                className="flex justify-between items-center py-2 border-b last:border-0"
                              >
                                <div>
                                  <p className="font-medium">{item.name}</p>
                                  <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                                </div>
                                <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                              </div>
                            ))}
                            <div className="flex justify-between items-center pt-2">
                              <p className="font-bold">Total</p>
                              <p className="font-bold">${order.total.toFixed(2)}</p>
                            </div>
                          </div>
                          <div className="flex justify-end mt-4 gap-2">
                            <Button variant="outline" size="sm" asChild>
                              <Link href={`/checkout/confirmation?orderId=${order._id}`}>View Details</Link>
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
                    .filter((order) => order.status === "Completed" || order.status === "Delivered")
                    .map((order) => (
                      <Card key={order._id} className="overflow-hidden">
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-center">
                            <CardTitle className="text-lg">
                              Order #{order._id.substring(order._id.length - 8)}
                            </CardTitle>
                            <Badge variant="outline" className="bg-green-50 text-green-700">
                              <CheckCircle className="mr-1 h-3 w-3" />
                              {order.status}
                            </Badge>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Clock className="mr-1 h-3 w-3" />
                            {formatDate(order.createdAt)}
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            {order.items.map((item, index) => (
                              <div
                                key={index}
                                className="flex justify-between items-center py-2 border-b last:border-0"
                              >
                                <div>
                                  <p className="font-medium">{item.name}</p>
                                  <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                                </div>
                                <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                              </div>
                            ))}
                            <div className="flex justify-between items-center pt-2">
                              <p className="font-bold">Total</p>
                              <p className="font-bold">${order.total.toFixed(2)}</p>
                            </div>
                          </div>
                          <div className="flex justify-end mt-4 gap-2">
                            <Button variant="outline" size="sm" asChild>
                              <Link href={`/checkout/confirmation?orderId=${order._id}`}>View Details</Link>
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
            )}
          </div>
        </main>
      </div>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2025 GreenCoop. All rights reserved.</p>
      </footer>
    </div>
  )
}
