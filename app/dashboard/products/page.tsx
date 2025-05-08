"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Leaf, Search, ShoppingCart, User, Settings, Bell, FileText, Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api"
import { CartDropdown } from "@/components/cart-dropdown"
import { useCartStore } from "@/lib/cart-store"

export default function ProductsPage() {
  type Product = {
    _id: string
    name: string
    description: string
    thcContent: string
    cbdContent: string
    category: string
    price: number
    image?: string
    tags: string[]
  }
  const [searchQuery, setSearchQuery] = useState("")
  const { addItem } = useCartStore()

  const addToCart = (product : Product) => {
    addItem({
      _id: product._id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
      thcContent: product.thcContent,
      cbdContent: product.cbdContent,
    })
  }

  // Mock product data
  const [products, setProducts] = useState<Product[]>([])

  const fetchProducts = async () => {
    try {
      const res = await fetch(`${API_URL}/products`, {
        credentials: "include",
      })

      if (!res.ok) throw new Error("No autorizado")

      const data = await res.json()
      setProducts(data)


    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchProducts();
  },[])


  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())),
  )

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
            <User className="h-5 w-5" />
            <span className="sr-only">Profile</span>
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
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-green-600 bg-green-50 transition-all hover:text-green-900 hover:bg-green-100"
            >
              <FileText className="h-4 w-4" />
              <span>Products</span>
            </Link>
            <Link
              href="/dashboard/orders"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-green-900 hover:bg-green-100"
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
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <h1 className="text-2xl font-bold">Products Catalog</h1>
              <div className="flex w-full md:w-auto gap-2">
                <div className="relative flex-1 md:w-64">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                  <Input
                    type="search"
                    placeholder="Search products..."
                    className="pl-8"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="flower">Flower</SelectItem>
                    <SelectItem value="edibles">Edibles</SelectItem>
                    <SelectItem value="tinctures">Tinctures</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Tabs defaultValue="all">
              <TabsList>
                <TabsTrigger value="all">All Products</TabsTrigger>
                <TabsTrigger value="flower">Flower</TabsTrigger>
                <TabsTrigger value="edibles">Edibles</TabsTrigger>
                <TabsTrigger value="tinctures">Tinctures</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="space-y-4">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredProducts.map((product) => (
                    <Card key={product._id} className="overflow-hidden">
                      <div className="aspect-square relative">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <CardTitle>{product.name}</CardTitle>
                          <Badge variant="outline" className="bg-green-50 text-green-700">
                            ${product.price}
                          </Badge>
                        </div>
                        <div className="flex gap-2 mt-1">
                          {product.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-500">{product.description}</p>
                        <div className="grid grid-cols-2 gap-2 mt-4 text-sm">
                          <div>
                            <span className="font-medium">THC: </span>
                            <span>{product.thcContent}</span>
                          </div>
                          <div>
                            <span className="font-medium">CBD: </span>
                            <span>{product.cbdContent}</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button onClick={() => addToCart(product)} className="w-full">
                          <ShoppingCart className="mr-2 h-4 w-4" />
                          Add to Cart
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="flower" className="space-y-4">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredProducts
                    .filter((product) => product.category === "flower")
                    .map((product) => (
                      <Card key={product._id} className="overflow-hidden">
                        <div className="aspect-square relative">
                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <CardTitle>{product.name}</CardTitle>
                            <Badge variant="outline" className="bg-green-50 text-green-700">
                              ${product.price}
                            </Badge>
                          </div>
                          <div className="flex gap-2 mt-1">
                            {product.tags.map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-gray-500">{product.description}</p>
                          <div className="grid grid-cols-2 gap-2 mt-4 text-sm">
                            <div>
                              <span className="font-medium">THC: </span>
                              <span>{product.thcContent}</span>
                            </div>
                            <div>
                              <span className="font-medium">CBD: </span>
                              <span>{product.cbdContent}</span>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Button onClick={() => addToCart(product)} className="w-full">
                            <ShoppingCart className="mr-2 h-4 w-4" />
                            Add to Cart
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                </div>
              </TabsContent>
              <TabsContent value="edibles" className="space-y-4">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredProducts
                    .filter((product) => product.category === "edibles")
                    .map((product) => (
                      <Card key={product._id} className="overflow-hidden">
                        <div className="aspect-square relative">
                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <CardTitle>{product.name}</CardTitle>
                            <Badge variant="outline" className="bg-green-50 text-green-700">
                              ${product.price}
                            </Badge>
                          </div>
                          <div className="flex gap-2 mt-1">
                            {product.tags.map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-gray-500">{product.description}</p>
                          <div className="grid grid-cols-2 gap-2 mt-4 text-sm">
                            <div>
                              <span className="font-medium">THC: </span>
                              <span>{product.thcContent}</span>
                            </div>
                            <div>
                              <span className="font-medium">CBD: </span>
                              <span>{product.cbdContent}</span>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Button onClick={() => addToCart(product)} className="w-full">
                            <ShoppingCart className="mr-2 h-4 w-4" />
                            Add to Cart
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                </div>
              </TabsContent>
              <TabsContent value="tinctures" className="space-y-4">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredProducts
                    .filter((product) => product.category === "tinctures")
                    .map((product) => (
                      <Card key={product._id} className="overflow-hidden">
                        <div className="aspect-square relative">
                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <CardTitle>{product.name}</CardTitle>
                            <Badge variant="outline" className="bg-green-50 text-green-700">
                              ${product.price}
                            </Badge>
                          </div>
                          <div className="flex gap-2 mt-1">
                            {product.tags.map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-gray-500">{product.description}</p>
                          <div className="grid grid-cols-2 gap-2 mt-4 text-sm">
                            <div>
                              <span className="font-medium">THC: </span>
                              <span>{product.thcContent}</span>
                            </div>
                            <div>
                              <span className="font-medium">CBD: </span>
                              <span>{product.cbdContent}</span>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Button onClick={() => addToCart(product)} className="w-full">
                            <ShoppingCart className="mr-2 h-4 w-4" />
                            Add to Cart
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                </div>
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
