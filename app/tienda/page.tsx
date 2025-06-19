"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Star, Leaf, Droplets, Shirt, Wrench, MapPin, Truck, Shield, Users } from "lucide-react"
import Image from "next/image"

const products = [
  {
    id: 1,
    name: "Aceite CBD Premium 30ml",
    category: "Aceites",
    price: 89.99,
    originalPrice: 109.99,
    rating: 4.8,
    reviews: 124,
    image: "/placeholder.svg?height=300&width=300",
    badge: "Bestseller",
    description: "Aceite de CBD de espectro completo, extraído con CO2 supercrítico. Cultivado en la pampa húmeda.",
    origin: "Buenos Aires, Argentina",
  },
  {
    id: 2,
    name: "Camiseta de Cáñamo Orgánico",
    category: "Textiles",
    price: 45.0,
    rating: 4.6,
    reviews: 89,
    image: "/placeholder.svg?height=300&width=300",
    badge: "Eco-Friendly",
    description: "Camiseta 100% cáñamo orgánico, suave y duradera. Fibra producida localmente.",
    origin: "Producción Regional",
  },
  {
    id: 3,
    name: "Kit de Cultivo Pampa Húmeda",
    category: "Insumos",
    price: 156.0,
    rating: 4.9,
    reviews: 67,
    image: "/placeholder.svg?height=300&width=300",
    badge: "Completo",
    description: "Kit especializado para cultivo en condiciones de pampa húmeda. Incluye semillas adaptadas.",
    origin: "Desarrollado en Ferré",
  },
  {
    id: 4,
    name: "Aceite CBD para Mascotas",
    category: "Aceites",
    price: 67.5,
    rating: 4.7,
    reviews: 156,
    image: "/placeholder.svg?height=300&width=300",
    badge: "Veterinario",
    description: "Formulación especial para el bienestar de tus mascotas. Aprobado por veterinarios locales.",
    origin: "Buenos Aires, Argentina",
  },
  {
    id: 5,
    name: "Fibra de Cáñamo Industrial",
    category: "Textiles",
    price: 23.99,
    rating: 4.5,
    reviews: 43,
    image: "/placeholder.svg?height=300&width=300",
    badge: "Industrial",
    description: "Fibra de cáñamo de alta calidad para uso industrial. Procesada en nuestra región.",
    origin: "Pampa Húmeda",
  },
  {
    id: 6,
    name: "Fertilizante Orgánico Cannabis",
    category: "Insumos",
    price: 34.99,
    rating: 4.8,
    reviews: 98,
    image: "/placeholder.svg?height=300&width=300",
    badge: "Orgánico",
    description: "Fertilizante especializado desarrollado para suelos pampeanos. Rico en nutrientes locales.",
    origin: "Formulación Regional",
  },
  {
    id: 7,
    name: "Aceite Full Spectrum 50ml",
    category: "Aceites",
    price: 145.0,
    rating: 4.9,
    reviews: 203,
    image: "/placeholder.svg?height=300&width=300",
    badge: "Premium",
    description: "Aceite de espectro completo con todos los cannabinoides. Extracción artesanal.",
    origin: "Buenos Aires, Argentina",
  },
  {
    id: 8,
    name: "Semillas Autoflorecientes",
    category: "Insumos",
    price: 78.0,
    rating: 4.6,
    reviews: 134,
    image: "/placeholder.svg?height=300&width=300",
    badge: "Genética Local",
    description: "Semillas adaptadas al clima pampeano. Genética desarrollada localmente.",
    origin: "Desarrollado en Ferré",
  },
  {
    id: 9,
    name: "Bolsa de Cáñamo Artesanal",
    category: "Textiles",
    price: 32.0,
    rating: 4.4,
    reviews: 76,
    image: "/placeholder.svg?height=300&width=300",
    badge: "Artesanal",
    description: "Bolsa tejida a mano con fibra de cáñamo local. Producto de comercio justo.",
    origin: "Artesanos Locales",
  },
]

const categories = ["Todos", "Aceites", "Textiles", "Insumos"]

export default function Tienda() {
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [cart, setCart] = useState<number[]>([])

  const filteredProducts =
    selectedCategory === "Todos" ? products : products.filter((product) => product.category === selectedCategory)

  const addToCart = (productId: number) => {
    setCart([...cart, productId])
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Aceites":
        return <Droplets className="w-4 h-4" />
      case "Textiles":
        return <Shirt className="w-4 h-4" />
      case "Insumos":
        return <Wrench className="w-4 h-4" />
      default:
        return <Leaf className="w-4 h-4" />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-anahata-dark mb-6 animate-fade-in">Tienda Anahata</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up mb-4">
            Productos premium de cannabis medicinal y cáñamo industrial, cultivados y procesados en Argentina.
          </p>
          <div className="flex items-center justify-center space-x-2 text-anahata-primary">
            <MapPin className="w-5 h-5" />
            <span className="font-medium">Buenos Aires, Argentina</span>
          </div>
        </div>
      </section>

      {/* Ventajas de Origen */}
      <section className="py-8 px-4 bg-anahata-primary/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center space-x-3">
              <Leaf className="w-6 h-6 text-anahata-primary" />
              <span className="font-medium text-anahata-dark">Cultivo Regional</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Truck className="w-6 h-6 text-anahata-primary" />
              <span className="font-medium text-anahata-dark">Envío Nacional</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Star className="w-6 h-6 text-anahata-primary" />
              <span className="font-medium text-anahata-dark">Calidad Cooperativa</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filtros de Categoría */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`${
                  selectedCategory === category
                    ? "bg-anahata-primary hover:bg-anahata-primary/90"
                    : "border-anahata-primary text-anahata-primary hover:bg-anahata-primary hover:text-white"
                } transition-all duration-300`}
              >
                {getCategoryIcon(category)}
                <span className="ml-2">{category}</span>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Productos */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <Card
                key={product.id}
                className="border-anahata-primary/20 hover:shadow-xl transition-all duration-300 animate-slide-up group overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="p-0 relative">
                  <div className="relative overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4 bg-anahata-primary hover:bg-anahata-primary">
                      {product.badge}
                    </Badge>
                    {product.originalPrice && (
                      <Badge variant="destructive" className="absolute top-4 right-4">
                        -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                      </Badge>
                    )}
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                      <div className="flex items-center space-x-1 text-xs">
                        <MapPin className="w-3 h-3 text-anahata-primary" />
                        <span className="text-anahata-dark font-medium">{product.origin}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    {getCategoryIcon(product.category)}
                    <span className="text-sm text-anahata-primary font-medium">{product.category}</span>
                  </div>

                  <CardTitle className="text-anahata-dark mb-2 group-hover:text-anahata-primary transition-colors">
                    {product.name}
                  </CardTitle>

                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>

                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium ml-1">{product.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500">({product.reviews} reseñas)</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-anahata-dark">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                      )}
                    </div>

                    <Button
                      onClick={() => addToCart(product.id)}
                      className="bg-anahata-primary hover:bg-anahata-primary/90 transition-all duration-300 hover:scale-105"
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Agregar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Carrito Flotante */}
      {cart.length > 0 && (
        <div className="fixed bottom-6 right-6 z-50">
          <Button
            size="lg"
            className="bg-anahata-primary hover:bg-anahata-primary/90 rounded-full shadow-lg animate-bounce"
          >
            <ShoppingCart className="w-5 h-5 mr-2" />
            {cart.length} productos
          </Button>
        </div>
      )}

      {/* Información Adicional */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-anahata-dark mb-12">
            ¿Por qué elegir nuestros productos?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="animate-slide-up">
              <div className="bg-anahata-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-anahata-primary" />
              </div>
              <h3 className="text-xl font-semibold text-anahata-dark mb-2">Origen Regional</h3>
              <p className="text-gray-600">Cultivados en Argentina, garantizando máxima calidad y potencia.</p>
            </div>

            <div className="animate-slide-up">
              <div className="bg-anahata-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-anahata-primary" />
              </div>
              <h3 className="text-xl font-semibold text-anahata-dark mb-2">Cooperativa Local</h3>
              <p className="text-gray-600">
                Productos de una cooperativa comprometida con el desarrollo regional y el comercio justo.
              </p>
            </div>

            <div className="animate-slide-up">
              <div className="bg-anahata-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="w-8 h-8 text-anahata-primary" />
              </div>
              <h3 className="text-xl font-semibold text-anahata-dark mb-2">Envío desde el Interior</h3>
              <p className="text-gray-600">
                Envío directo nacional con empaque discreto y seguimiento completo a todo el país.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proceso de Compra */}
      <section className="py-16 px-4 bg-anahata-primary/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-anahata-dark mb-12">Cómo Comprar</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center animate-slide-up">
              <div className="bg-anahata-primary rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">1</span>
              </div>
              <h3 className="font-semibold text-anahata-dark mb-2">Selecciona</h3>
              <p className="text-sm text-gray-600">Elige los productos que necesitas de nuestro catálogo</p>
            </div>
            <div className="text-center animate-slide-up">
              <div className="bg-anahata-primary rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">2</span>
              </div>
              <h3 className="font-semibold text-anahata-dark mb-2">Contacta</h3>
              <p className="text-sm text-gray-600">Nos ponemos en contacto para confirmar tu pedido</p>
            </div>
            <div className="text-center animate-slide-up">
              <div className="bg-anahata-primary rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">3</span>
              </div>
              <h3 className="font-semibold text-anahata-dark mb-2">Paga</h3>
              <p className="text-sm text-gray-600">Múltiples opciones de pago seguras y confiables</p>
            </div>
            <div className="text-center animate-slide-up">
              <div className="bg-anahata-primary rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">4</span>
              </div>
              <h3 className="font-semibold text-anahata-dark mb-2">Recibe</h3>
              <p className="text-sm text-gray-600">Envío discreto y seguro desde Ferré a todo el país</p>
            </div>
          </div>
        </div>
      </section>

      {/* Garantías y Políticas */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-anahata-dark mb-12">Nuestras Garantías</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-anahata-primary/20 text-center p-6">
              <Shield className="w-12 h-12 text-anahata-primary mx-auto mb-4" />
              <h3 className="font-semibold text-anahata-dark mb-2">Calidad Garantizada</h3>
              <p className="text-sm text-gray-600">30 días de garantía en todos nuestros productos</p>
            </Card>
            <Card className="border-anahata-primary/20 text-center p-6">
              <Truck className="w-12 h-12 text-anahata-primary mx-auto mb-4" />
              <h3 className="font-semibold text-anahata-dark mb-2">Envío Gratuito</h3>
              <p className="text-sm text-gray-600">En compras superiores a $15.000 en todo el país</p>
            </Card>
            <Card className="border-anahata-primary/20 text-center p-6">
              <MapPin className="w-12 h-12 text-anahata-primary mx-auto mb-4" />
              <h3 className="font-semibold text-anahata-dark mb-2">Origen Certificado</h3>
              <p className="text-sm text-gray-600">Trazabilidad completa desde Ferré hasta tu hogar</p>
            </Card>
            <Card className="border-anahata-primary/20 text-center p-6">
              <Users className="w-12 h-12 text-anahata-primary mx-auto mb-4" />
              <h3 className="font-semibold text-anahata-dark mb-2">Soporte 24/7</h3>
              <p className="text-sm text-gray-600">Asesoría técnica disponible todos los días</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
