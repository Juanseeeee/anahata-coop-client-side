import { create } from "zustand"
import { persist as persistMiddleware } from "zustand/middleware"

export interface CartItem {
  _id: string
  name: string
  price: number
  quantity: number
  image?: string
  thcContent?: string
  cbdContent?: string
}

interface CartState {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  getItemCount: () => number
  getTotal: () => number
}

// Create a store with an initial empty state
const emptyState = {
  items: [],
  addItem: () => {},
  removeItem: () => {},
  updateQuantity: () => {},
  clearCart: () => {},
  getItemCount: () => 0,
  getTotal: () => 0,
}

// Check if we're running on the client side before using localStorage
const isClient = typeof window !== "undefined"

// Create the store with persistence only on the client side
export const useCartStore = create<CartState>()(
  isClient
    ? persistMiddleware(
        (set, get) => ({
          items: [],

          addItem: (item) => {
            set((state) => {
              const existingItem = state.items.find((i) => i._id === item._id)

              if (existingItem) {
                // If item already exists, update quantity
                return {
                  items: state.items.map((i) =>
                    i._id === item._id ? { ...i, quantity: i.quantity + item.quantity } : i,
                  ),
                }
              } else {
                // Otherwise add new item
                return { items: [...state.items, item] }
              }
            })
          },

          removeItem: (id) => {
            set((state) => ({
              items: state.items.filter((item) => item._id !== id),
            }))
          },

          updateQuantity: (id, quantity) => {
            set((state) => ({
              items: state.items.map((item) => (item._id === id ? { ...item, quantity } : item)),
            }))
          },

          clearCart: () => {
            set({ items: [] })
          },

          getItemCount: () => {
            return get().items.reduce((total, item) => total + item.quantity, 0)
          },

          getTotal: () => {
            return get().items.reduce((total, item) => total + item.price * item.quantity, 0)
          },
        }),
        {
          name: "cart-storage", // name of the item in localStorage
        },
      )
    : () => emptyState, // Return empty state on the server
)
