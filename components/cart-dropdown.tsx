"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ShoppingCart, X, Plus, Minus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCartStore, type CartItem } from "@/lib/cart-store"
import { useOnClickOutside } from "@/hooks/use-click-outside"

export function CartDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { items, removeItem, updateQuantity, getItemCount, getTotal } = useCartStore()
  const dropdownRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        setMounted(true)
      }, [])

  // Close dropdown when clicking outside
  useOnClickOutside(dropdownRef, () => setIsOpen(false))

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

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="relative">
        <ShoppingCart className="h-5 w-5" />
        <span className="sr-only">Shopping Cart</span>
      </Button>
    )
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="relative">
        <ShoppingCart className="h-5 w-5" />
        {getItemCount() > 0 && (
          <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {getItemCount()}
          </span>
        )}
        <span className="sr-only">Shopping Cart</span>
      </Button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg z-50 border overflow-hidden">
          <div className="p-4 border-b">
            <div className="flex justify-between items-center">
              <h3 className="font-medium">Your Cart ({getItemCount()})</h3>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="max-h-96 overflow-y-auto">
            {items.length === 0 ? (
              <div className="p-4 text-center text-gray-500">Your cart is empty</div>
            ) : (
              <div>
                {items.map((item) => (
                  <div key={item._id} className="p-4 border-b flex gap-3">
                    <div className="w-16 h-16 relative rounded overflow-hidden flex-shrink-0">
                      <Image
                        src={item.image || "/placeholder.svg?height=64&width=64"}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{item.name}</h4>
                      <p className="text-green-600 font-medium">${formatPrice(item.price)}</p>
                      <div className="flex items-center mt-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-6 w-6"
                          onClick={() => handleQuantityChange(item, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="mx-2 text-sm">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-6 w-6"
                          onClick={() => handleQuantityChange(item, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6 ml-auto text-red-500"
                          onClick={() => removeItem(item._id)}
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {items.length > 0 && (
            <div className="p-4 border-t">
              <div className="flex justify-between mb-4">
                <span className="font-medium">Total:</span>
                <span className="font-bold">${formatPrice(getTotal())}</span>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" className="flex-1" onClick={() => setIsOpen(false)}>
                  Continue Shopping
                </Button>
                <Button
                  className="flex-1"
                  onClick={() => {
                    setIsOpen(false)
                  }}
                  asChild
                >
                  <Link href="/checkout">View Order</Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
