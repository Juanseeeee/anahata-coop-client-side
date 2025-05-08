'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Leaf } from "lucide-react"
import { useEffect, useState } from "react"

export default function Home() {
  const images = [
    "/imagen1.jpg",
    "/fondo2-anahata.jpeg"
  ]
  const [index, setIndex] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <Link className="flex items-center justify-center" href="/">
          <Leaf className="h-6 w-6 text-green-600" />
          <span className="ml-2 text-xl font-bold">AnahataCoop</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#about">
            Nosotros
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#benefits">
            Beneficios
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
            Contactanos
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/login">
            Iniciar Sesion
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50"
        style={{
          backgroundImage: `url(${images[index]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image 1s ease-in-out"
        }}>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Bienvenidos a Anahata Cooperativa
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Somos una cooperativa hecha por cultivadores solidarios. Buscamos alcanzar los máximos estándares de trazabilidad y calidad.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/register">
                  <Button>Quiero ser miembro</Button>
                </Link>
                <Link href="/login">
                  <Button variant="outline">Ya soy miembro</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Acerca de nuestra cooperativa</h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Fundada a mediados del 2023 por un grupo de cultivadores ferrenses. Nace esta cooperativa de trabajo adhiriendose
                  a la creciente industria del cannabis a nivel nacional, cubriendo la demanda a nivel local, cultivando cannabis
                  medicinal de calidad premium garantizada.
                </p>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Operamos bajo la estructura de las leyes nacionales 23.750 , 27.669 y el decreto 803/2022. Somos impulsores de la 
                  ordenanza municipal "Proyecto de regulacion del cannabis medicinal" en el distrito de General Arenales y Colón
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Nuestra misión</h3>
                <p className="text-gray-500">
                Fomentar una comunidad que valore la educación, el uso responsable y los beneficios terapéuticos del cannabis,
                 a la vez que apoya prácticas agrícolas sostenibles.
                </p>
                <h3 className="text-xl font-bold">Nuestros valores</h3>
                <ul className="grid gap-2 text-gray-500">
                  <li className="flex items-center gap-2">
                    <Leaf className="h-4 w-4 text-green-600" />
                    <span>Sostenibilidad y responsabilidad ambiental</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Leaf className="h-4 w-4 text-green-600" />
                    <span>Participación y educación comunitaria</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Leaf className="h-4 w-4 text-green-600" />
                    <span>Transparencia en nuestras operaciones</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Leaf className="h-4 w-4 text-green-600" />
                    <span>Calidad y seguridad en todos nuestros productos</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="benefits" className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Beneficios para asociados</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Únete a nuestra cooperativa y disfruta de estos beneficios exclusivos
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Acceso a productos de calidad.</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                  Los miembros obtienen acceso a nuestra selección cuidadosamente seleccionada de productos de cannabis de alta calidad.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Recursos educativos</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                  Aprenda sobre el uso responsable, los beneficios para la salud y las últimas investigaciones a través de nuestros talleres y cursos.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Eventos comunitarios</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                  Participe en eventos exclusivos para miembros, desde seminarios educativos hasta reuniones sociales.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Derechos de voto</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                  Participe en las decisiones cooperativas y ayude a dar forma a nuestra dirección futura.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Descuentos en productos</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                  Disfrute de precios exclusivos para miembros en todos los productos y servicios ofrecidos a través de la cooperativa.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Practicas sostenibles</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                  Apoye métodos de cultivo y embalajes ambientalmente responsables.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Contactate con nosotros</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                ¿Tienes alguna pregunta sobre nuestra cooperativa? Contáctanos.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="grid gap-4">
                  <div className="grid gap-2">
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-left"
                      htmlFor="name"
                    >
                      Nombre
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      id="name"
                      placeholder="Ingrese su nombre"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-left"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      id="email"
                      placeholder="Ingrese su email"
                      type="email"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-left"
                      htmlFor="message"
                    >
                      Mensaje
                    </label>
                    <textarea
                      className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      id="message"
                      placeholder="Ingrese un mensaje"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Enviar mensaje
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2025 AnahataCoop. Todos los derechos reservados.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terminos de servicio
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacidad
          </Link>
        </nav>
      </footer>
    </div>
  )
}
