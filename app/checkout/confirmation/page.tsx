"use client"

import Link from "next/link"
import { Leaf, CheckCircle, Package, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ConfirmationPage() {
  // Generate a random order number
  const orderNumber = `ORD-${Math.floor(10000 + Math.random() * 90000)}`

  return (
    <div className="flex min-h-screen flex-col">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <Link className="flex items-center justify-center" href="/">
          <Leaf className="h-6 w-6 text-green-600" />
          <span className="ml-2 text-xl font-bold">GreenCoop</span>
        </Link>
      </header>

      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6 max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center p-4 bg-green-100 rounded-full mb-4">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold">Order Confirmed!</h1>
            <p className="text-gray-500 mt-2">Thank you for your purchase</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Order Details</CardTitle>
              <CardDescription>Your order has been received and is being processed</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Order Number</h3>
                  <p className="font-medium">{orderNumber}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Date</h3>
                  <p className="font-medium">{new Date().toLocaleDateString()}</p>
                </div>
              </div>

              <div className="border rounded-md p-4 bg-gray-50">
                <div className="flex items-center mb-4">
                  <Package className="h-5 w-5 text-green-600 mr-2" />
                  <h3 className="font-medium">Delivery Information</h3>
                </div>
                <p className="text-sm">
                  Your order will be processed and prepared for delivery. You will receive an email with tracking
                  information once your order ships.
                </p>
              </div>

              <div className="border rounded-md p-4 bg-gray-50">
                <div className="flex items-center mb-4">
                  <Calendar className="h-5 w-5 text-green-600 mr-2" />
                  <h3 className="font-medium">Estimated Delivery</h3>
                </div>
                <p className="text-sm">
                  {new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toLocaleDateString()} -{" "}
                  {new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString()}
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-2">
              <Button asChild className="w-full">
                <Link href="/dashboard/orders">View My Orders</Link>
              </Button>
              <Button variant="outline" asChild className="w-full">
                <Link href="/dashboard/products">Continue Shopping</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2025 GreenCoop. All rights reserved.</p>
      </footer>
    </div>
  )
}
