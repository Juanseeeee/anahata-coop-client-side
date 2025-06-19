"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/cannabis-field-bg.webp" alt="Campo de cannabis" fill className="object-cover" priority />
        {/* Overlay oscuro para mejorar legibilidad */}
        <div className="absolute inset-0 bg-black/50"></div>
        {/* Overlay con gradiente verde sutil */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
      </div>

      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden z-10">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-20 z-20 h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full h-full">
          {/* Contenido a la izquierda */}
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            {/* Título principal con Quicksand */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg font-quicksand">
            <span className="font-normal">cooperativa</span>
              <br/>
              <span className="text-anahata-primary">anahata</span>
              <br />
              cultivando
              <br />
              bienestar
              <br/>natural
            </h1>

            {/* Subtítulo */}
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed drop-shadow-md">
              Cooperativa especializada en cannabis medicinal y cáñamo industrial. Productos premium, asesoría técnica y
              compromiso con la sustentabilidad.
            </p>

            {/* Botones de acción */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                size="lg"
                className="bg-anahata-primary hover:bg-anahata-primary/90 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg border-0"
              >
                <Link href="/servicios" className="flex items-center">
                  Comenzar Ahora
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-2 border-anahata-primary bg-anahata-primary/10 text-anahata-primary hover:bg-anahata-primary hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300 backdrop-blur-sm"
              >
                <Play className="mr-2 w-5 h-5" />
                Ver Video
              </Button>
            </div>
          </div>

          {/* Logo grande a la derecha */}
          <div
            className={`flex items-start justify-center h-full pt-16 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="relative w-full max-h-[70vh] flex items-center justify-center">
              <Image
                src="/images/logo-white.png"
                alt="Anahata"
                width={600}
                height={600}
                className="w-auto h-auto max-h-full max-w-full object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>

        {/* Logo para mobile (centrado) - mantener fuera del grid */}
        <div
          className={`lg:hidden absolute bottom-20 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <Image
            src="/images/logo-white.png"
            alt="Anahata"
            width={300}
            height={300}
            className="w-auto h-32 md:h-40 drop-shadow-2xl"
            priority
          />
        </div>
      </div>
    </section>
  )
}
