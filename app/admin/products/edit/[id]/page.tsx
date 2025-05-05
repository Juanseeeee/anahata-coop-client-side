"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { ArrowLeft, Save, X, AlertCircle } from "lucide-react"
import { adminApi } from "@/lib/api"
import { useToast } from "@/components/ui/use-toast"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function EditProduct({ params }) {
  const router = useRouter()
  const { toast } = useToast()
  const { id } = params
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    thcContent: "",
    cbdContent: "",
    price: "",
    description: "",
    stock: "",
    tags: "",
    isAvailable: true,
  })

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setIsLoading(true)
        setError(null)
        const product = await adminApi.getProduct(id)

        // Format the data for the form
        setFormData({
          name: product.name,
          category: product.category,
          thcContent: product.thcContent,
          cbdContent: product.cbdContent,
          price: product.price.toString(),
          description: product.description,
          stock: product.stock.toString(),
          tags: Array.isArray(product.tags) ? product.tags.join(", ") : "",
          isAvailable: product.isAvailable,
        })
      } catch (err) {
        console.error("Error fetching product:", err)
        setError("Failed to load product data. Please try again later.")
      } finally {
        setIsLoading(false)
      }
    }

    fetchProduct()
  }, [id])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSwitchChange = (checked) => {
    setFormData((prev) => ({
      ...prev,
      isAvailable: checked,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSaving(true)
    setError(null)

    try {
      // Format the data for the API
      const productData = {
        ...formData,
        price: Number.parseFloat(formData.price),
        stock: Number.parseInt(formData.stock, 10),
        tags: formData.tags
          .split(",")
          .map((tag) => tag.trim())
          .filter((tag) => tag),
      }

      // Call the API to update the product
      await adminApi.updateProduct(id, productData)

      // Show success toast
      toast({
        title: "Product updated",
        description: "The product has been successfully updated.",
      })

      // Redirect to products page after successful update
      router.push("/admin/products")
    } catch (err) {
      console.error("Error updating product:", err)
      setError("Failed to update product. Please check your inputs and try again.")
      setIsSaving(false)
    }
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-4 md:gap-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={() => router.back()}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <h1 className="text-2xl font-bold">Edit Product</h1>
        </div>
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <Card>
        <form onSubmit={handleSubmit}>
          <CardHeader>
            <CardTitle>Product Information</CardTitle>
            <CardDescription>Update the details for this product</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Product Name</Label>
                <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select
                  value={formData.category}
                  onValueChange={(value) => handleSelectChange("category", value)}
                  required
                >
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="flower">Flower</SelectItem>
                    <SelectItem value="edibles">Edibles</SelectItem>
                    <SelectItem value="tinctures">Tinctures</SelectItem>
                    <SelectItem value="concentrates">Concentrates</SelectItem>
                    <SelectItem value="accessories">Accessories</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="thcContent">THC Content</Label>
                <Input
                  id="thcContent"
                  name="thcContent"
                  value={formData.thcContent}
                  onChange={handleChange}
                  required
                  placeholder="e.g., 18% or 10mg/piece"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cbdContent">CBD Content</Label>
                <Input
                  id="cbdContent"
                  name="cbdContent"
                  value={formData.cbdContent}
                  onChange={handleChange}
                  required
                  placeholder="e.g., 0.5% or 5mg/piece"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="price">Price ($)</Label>
                <Input
                  id="price"
                  name="price"
                  type="number"
                  min="0"
                  step="0.01"
                  value={formData.price}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="stock">Stock Quantity</Label>
                <Input
                  id="stock"
                  name="stock"
                  type="number"
                  min="0"
                  value={formData.stock}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows={4}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="tags">Tags (comma separated)</Label>
              <Input
                id="tags"
                name="tags"
                value={formData.tags}
                onChange={handleChange}
                placeholder="e.g., hybrid, relaxing, earthy"
              />
            </div>

            <div className="flex items-center space-x-2">
              <Switch id="isAvailable" checked={formData.isAvailable} onCheckedChange={handleSwitchChange} />
              <Label htmlFor="isAvailable">Product is available for purchase</Label>
            </div>

            <div className="space-y-2">
              <Label htmlFor="image">Product Image</Label>
              <div className="flex items-center gap-4 mb-2">
                <div className="h-20 w-20 rounded-md bg-gray-100 flex items-center justify-center">
                  <img
                    src="/placeholder.svg?height=80&width=80"
                    alt="Product preview"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <p className="text-sm text-muted-foreground">Current image</p>
              </div>
              <Input id="image" name="image" type="file" accept="image/*" />
              <p className="text-sm text-muted-foreground">
                Upload a new image to replace the current one. Recommended size: 800x800px. Max file size: 5MB.
              </p>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button type="button" variant="outline" onClick={() => router.push("/admin/products")}>
              <X className="mr-2 h-4 w-4" />
              Cancel
            </Button>
            <Button type="submit" disabled={isSaving}>
              {isSaving ? (
                <>
                  <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="mr-2 h-4 w-4" />
                  Update Product
                </>
              )}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
