"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Microscope, Users, Truck, Award } from "lucide-react"
import Link from "next/link"

export function Features() {
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
              }, index * 150)
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
          <h2 className="text-3xl md:text-5xl font-bold text-anahata-dark mb-6 scroll-animate">
            ¿Por qué Elegir Anahata?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto scroll-animate">
            Somos más que una cooperativa. Somos tu socio estratégico en el desarrollo de productos cannábicos de
            excelencia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="scroll-animate">
            <h3 className="text-2xl md:text-3xl font-bold text-anahata-dark mb-6">Tecnología y Tradición</h3>
            <p className="text-gray-600 mb-6 text-lg">
              Combinamos métodos tradicionales de cultivo con tecnología de vanguardia para garantizar productos de la
              más alta calidad.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-anahata-primary rounded-full mr-3"></div>
                Análisis de laboratorio certificados
              </li>
              <li className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-anahata-primary rounded-full mr-3"></div>
                Cultivo orgánico y sustentable
              </li>
              <li className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-anahata-primary rounded-full mr-3"></div>
                Trazabilidad completa del producto
              </li>
            </ul>
            <Button className="bg-anahata-primary hover:bg-anahata-primary/90">
              <Link href="/servicios">Conocer Más</Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4 scroll-animate">
            <Card className="border-anahata-primary/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Microscope className="w-12 h-12 text-anahata-primary mx-auto mb-4" />
                <h4 className="font-semibold text-anahata-dark mb-2">Analisis de Laboratorio</h4>
                <p className="text-sm text-gray-600">Análisis internos de calidad</p>
              </CardContent>
            </Card>

            <Card className="border-anahata-primary/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-anahata-primary mx-auto mb-4" />
                <h4 className="font-semibold text-anahata-dark mb-2">Equipo Experto</h4>
                <p className="text-sm text-gray-600">Profesionales especializados</p>
              </CardContent>
            </Card>

            <Card className="border-anahata-primary/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Truck className="w-12 h-12 text-anahata-primary mx-auto mb-4" />
                <h4 className="font-semibold text-anahata-dark mb-2">Envío Seguro</h4>
                <p className="text-sm text-gray-600">Logística especializada</p>
              </CardContent>
            </Card>

            <Card className="border-anahata-primary/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Award className="w-12 h-12 text-anahata-primary mx-auto mb-4" />
                <h4 className="font-semibold text-anahata-dark mb-2">Certificaciones</h4>
                <p className="text-sm text-gray-600">Estándares internacionales</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Nueva sección sobre proceso de calidad */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-anahata-dark mb-4 scroll-animate">
              Nuestro Proceso de Calidad
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto scroll-animate">
              Desde la semilla hasta el producto final, cada etapa está cuidadosamente controlada
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center scroll-animate">
              <div className="bg-anahata-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-anahata-primary">1</span>
              </div>
              <h4 className="font-semibold text-anahata-dark mb-2">Selección de Semillas</h4>
              <p className="text-sm text-gray-600">Genéticas adaptadas al clima pampeano</p>
            </div>

            <div className="text-center scroll-animate">
              <div className="bg-anahata-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-anahata-primary">2</span>
              </div>
              <h4 className="font-semibold text-anahata-dark mb-2">Cultivo Orgánico</h4>
              <p className="text-sm text-gray-600">Sin pesticidas ni químicos sintéticos</p>
            </div>

            <div className="text-center scroll-animate">
              <div className="bg-anahata-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-anahata-primary">3</span>
              </div>
              <h4 className="font-semibold text-anahata-dark mb-2">Análisis de Laboratorio</h4>
              <p className="text-sm text-gray-600">Certificación de pureza y potencia</p>
            </div>

            <div className="text-center scroll-animate">
              <div className="bg-anahata-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-anahata-primary">4</span>
              </div>
              <h4 className="font-semibold text-anahata-dark mb-2">Producto Final</h4>
              <p className="text-sm text-gray-600">Empaque y distribución segura</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
