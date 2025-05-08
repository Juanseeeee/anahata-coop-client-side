"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Leaf, CreditCard, Trash2, ArrowLeft, Plus, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { useCartStore, type CartItem } from "@/lib/cart-store"
import { useToast } from "@/components/ui/use-toast"

export default function CheckoutPage() {
  const router = useRouter()
  const { toast } = useToast()
  const { items, removeItem, updateQuantity, clearCart, getTotal } = useCartStore()
  const [paymentMethod, setPaymentMethod] = useState("credit-card")
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Format price to 2 decimal places
  const formatPrice = (price: number) => {
    return price.toFixed(2)
  }

  // Handle quantity changes
  const handleQuantityChange = (item: CartItem, newQuantity: number) => {
    if (newQuantity < 1) {
      removeItem(item._id)
    } else {
      updateQuantity(item._id, newQuantity)
    }
  }

  // Handle checkout submission
  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault()

    if (items.length === 0) {
      toast({
        title: "Cart is empty",
        description: "Please add items to your cart before checking out.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Show success message
    toast({
      title: "Order placed successfully!",
      description: "Your order has been placed and will be processed shortly.",
    })

    // Clear cart and redirect to confirmation page
    clearCart()
    router.push("/checkout/confirmation")
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <Link className="flex items-center justify-center" href="/">
          <Leaf className="h-6 w-6 text-green-600" />
          <span className="ml-2 text-xl font-bold">GreenCoop</span>
        </Link>
      </header>

      <main className="flex-1 py-8">
        <div className="container px-4 md:px-6">
          <div className="flex items-center mb-6">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/dashboard/products">
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </Button>
            <h1 className="text-2xl font-bold ml-2">Checkout</h1>
          </div>

          {items.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-xl font-medium mb-4">Your cart is empty</h2>
              <p className="text-gray-500 mb-6">Add some products to your cart to proceed with checkout.</p>
              <Button asChild>
                <Link href="/dashboard/products">Browse Products</Link>
              </Button>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-3">
              <div className="md:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Order Summary</CardTitle>
                    <CardDescription>Review your items before placing your order</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {items.map((item) => (
                        <div key={item._id} className="flex gap-4 py-4 border-b last:border-0">
                          <div className="w-20 h-20 relative rounded overflow-hidden flex-shrink-0">
                            <Image
                              src={item.image || "/placeholder.svg?height=80&width=80"}
                              alt={item.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-medium">{item.name}</h3>
                            <div className="text-sm text-gray-500 mt-1">
                              {item.thcContent && <span className="mr-3">THC: {item.thcContent}</span>}
                              {item.cbdContent && <span>CBD: {item.cbdContent}</span>}
                            </div>
                            <div className="flex items-center justify-between mt-2">
                              <div className="flex items-center">
                                <Button
                                  variant="outline"
                                  size="icon"
                                  className="h-7 w-7"
                                  onClick={() => handleQuantityChange(item, item.quantity - 1)}
                                >
                                  <Minus className="h-3 w-3" />
                                </Button>
                                <span className="mx-2 text-sm w-6 text-center">{item.quantity}</span>
                                <Button
                                  variant="outline"
                                  size="icon"
                                  className="h-7 w-7"
                                  onClick={() => handleQuantityChange(item, item.quantity + 1)}
                                >
                                  <Plus className="h-3 w-3" />
                                </Button>
                              </div>
                              <div className="flex items-center gap-4">
                                <span className="font-medium">${formatPrice(item.price * item.quantity)}</span>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-7 w-7 text-red-500"
                                  onClick={() => removeItem(item._id)}
                                >
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>Shipping Information</CardTitle>
                    <CardDescription>Enter your shipping details</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input id="firstName" placeholder="John" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input id="lastName" placeholder="Doe" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="address">Address</Label>
                        <Input id="address" placeholder="123 Main St" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="city">City</Label>
                          <Input id="city" placeholder="Anytown" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="zipCode">ZIP Code</Label>
                          <Input id="zipCode" placeholder="12345" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" placeholder="(555) 123-4567" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="notes">Order Notes (Optional)</Label>
                        <Textarea id="notes" placeholder="Special instructions for delivery" />
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card className="sticky top-6">
                  <CardHeader>
                    <CardTitle>Payment</CardTitle>
                    <CardDescription>Complete your order by providing payment details</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-medium mb-2">Payment Method</h3>
                        <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-2">
                          <div className="flex items-center space-x-2 border rounded-md p-3">
                            <RadioGroupItem value="credit-card" id="credit-card" />
                            <Label htmlFor="credit-card" className="flex items-center">
                              <CreditCard className="mr-2 h-4 w-4" />
                              Credit / Debit Card
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2 border rounded-md p-3">
                            <RadioGroupItem value="cash" id="cash" />
                            <Label htmlFor="cash">Cash on Delivery</Label>
                          </div>
                        </RadioGroup>
                      </div>

                      {paymentMethod === "credit-card" && (
                        <div className="space-y-4 mt-4">
                          <div className="space-y-2">
                            <Label htmlFor="cardNumber">Card Number</Label>
                            <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="expiryDate">Expiry Date</Label>
                              <Input id="expiryDate" placeholder="MM/YY" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="cvv">CVV</Label>
                              <Input id="cvv" placeholder="123" />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="nameOnCard">Name on Card</Label>
                            <Input id="nameOnCard" placeholder="John Doe" />
                          </div>
                        </div>
                      )}

                      <Separator className="my-4" />

                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Subtotal</span>
                          <span>${formatPrice(getTotal())}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Shipping</span>
                          <span>$5.00</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Tax</span>
                          <span>${formatPrice(getTotal() * 0.08)}</span>
                        </div>
                        <Separator className="my-2" />
                        <div className="flex justify-between font-bold">
                          <span>Total</span>
                          <span>${formatPrice(getTotal() + 5 + getTotal() * 0.08)}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" onClick={handleCheckout} disabled={isSubmitting || items.length === 0}>
                      {isSubmitting ? "Processing..." : "Place Order"}
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          )}
        </div>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2025 GreenCoop. All rights reserved.</p>
      </footer>
    </div>
  )
}
