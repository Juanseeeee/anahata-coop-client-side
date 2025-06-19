"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Leaf, Users, Target, ArrowRight } from "lucide-react"
import Link from "next/link"

export function About() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".scroll-animate")
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("visible")
              }, index * 200)
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-anahata-primary/10 rounded-full px-4 py-2 mb-6 scroll-animate">
            <Leaf className="w-4 h-4 text-anahata-primary" />
            <span className="text-anahata-primary font-medium text-sm">Desde 2021 Trabajando Juntos</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-anahata-dark mb-6 scroll-animate">
            Cooperativa Cannábica
          </h2>

          <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto scroll-animate">
            Desde 2021 trabajamos juntos como un colectivo de productores, investigadores y profesionales comprometidos
            con el cannabis medicinal y el cáñamo industrial de alta calidad.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="border-anahata-primary/20 hover:shadow-lg transition-all duration-300 scroll-animate group">
            <CardContent className="p-6 text-center">
              <div className="bg-anahata-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8 text-anahata-primary" />
              </div>
              <h3 className="text-lg font-semibold text-anahata-dark mb-3">Misión Regional</h3>
              <p className="text-gray-600 text-sm">
                Desarrollar la industria cannábica desde el interior argentino, aprovechando las ventajas de nuestra
                ubicación estratégica.
              </p>
            </CardContent>
          </Card>

          <Card className="border-anahata-primary/20 hover:shadow-lg transition-all duration-300 scroll-animate group">
            <CardContent className="p-6 text-center">
              <div className="bg-anahata-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-anahata-primary" />
              </div>
              <h3 className="text-lg font-semibold text-anahata-dark mb-3">Enfoque Cooperativo</h3>
              <p className="text-gray-600 text-sm">
                Nos permite obtener productos de excelencia con un enfoque cooperativo y sustentable.
              </p>
            </CardContent>
          </Card>

          <Card className="border-anahata-primary/20 hover:shadow-lg transition-all duration-300 scroll-animate group">
            <CardContent className="p-6 text-center">
              <div className="bg-anahata-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Leaf className="w-8 h-8 text-anahata-primary" />
              </div>
              <h3 className="text-lg font-semibold text-anahata-dark mb-3">Calidad Superior</h3>
              <p className="text-gray-600 text-sm">Nos permite obtener productos de excelencia.</p>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center scroll-animate">
          <Button size="lg" className="bg-anahata-primary hover:bg-anahata-primary/90">
            <Link href="/institucional" className="flex items-center">
              Conocer Nuestra Historia
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-anahata-primary text-anahata-primary hover:bg-anahata-primary hover:text-white"
          >
            <Link href="/servicios">Ver Servicios</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
