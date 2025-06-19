"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Scale, Users, Building, Heart, ArrowRight } from "lucide-react"
import Link from "next/link"

export function OrdenanzaSection() {
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
    <section ref={sectionRef} className="py-20 px-4 bg-anahata-primary/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-anahata-primary/10 rounded-full px-4 py-2 mb-6 scroll-animate">
            <Scale className="w-4 h-4 text-anahata-primary" />
            <span className="text-anahata-primary font-medium text-sm">Iniciativa Legislativa</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-anahata-dark mb-6 scroll-animate">
            Impulsando la Ordenanza Municipal de Cannabis
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto scroll-animate">
            Estamos trabajando activamente en el desarrollo de una ordenanza municipal que regule y promueva el uso
            responsable del cannabis medicinal en nuestra comunidad.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="border-anahata-primary/20 hover:shadow-lg transition-all duration-300 scroll-animate group">
            <CardContent className="p-8 text-center">
              <div className="bg-anahata-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-anahata-primary" />
              </div>
              <h3 className="text-xl font-semibold text-anahata-dark mb-4">Trabajo Colaborativo</h3>
              <p className="text-gray-600">
                Colaboramos con todos los bloques de concejales para construir un marco normativo consensuado y
                efectivo.
              </p>
            </CardContent>
          </Card>

          <Card className="border-anahata-primary/20 hover:shadow-lg transition-all duration-300 scroll-animate group">
            <CardContent className="p-8 text-center">
              <div className="bg-anahata-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Building className="w-8 h-8 text-anahata-primary" />
              </div>
              <h3 className="text-xl font-semibold text-anahata-dark mb-4">Autoridades Municipales</h3>
              <p className="text-gray-600">
                Mantenemos diálogo constante con las autoridades municipales para asegurar una implementación exitosa.
              </p>
            </CardContent>
          </Card>

          <Card className="border-anahata-primary/20 hover:shadow-lg transition-all duration-300 scroll-animate group">
            <CardContent className="p-8 text-center">
              <div className="bg-anahata-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Heart className="w-8 h-8 text-anahata-primary" />
              </div>
              <h3 className="text-xl font-semibold text-anahata-dark mb-4">Sociedad Civil</h3>
              <p className="text-gray-600">
                Trabajamos junto a todos los actores de la sociedad para garantizar una regulación inclusiva y
                participativa.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg scroll-animate">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-anahata-dark mb-4">Un Marco Legal Integral</h3>
              <p className="text-gray-600 mb-6">
                Nuestra propuesta de ordenanza busca establecer un marco legal claro que permita el desarrollo
                responsable de la industria cannábica medicinal, protegiendo tanto a productores como a usuarios.
              </p>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-anahata-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Regulación del cultivo medicinal responsable</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-anahata-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Promoción de la investigación científica local</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-anahata-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Fomento del desarrollo económico regional</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-anahata-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Protección de los derechos de los pacientes</span>
                </li>
              </ul>
              <Button className="bg-anahata-primary hover:bg-anahata-primary/90">
                <Link href="/contacto" className="flex items-center">
                  Conocer Más
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
            <div className="bg-anahata-primary/5 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-anahata-dark mb-4">Objetivos de la Ordenanza</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Scale className="w-5 h-5 text-anahata-primary flex-shrink-0" />
                  <span className="text-sm text-gray-600">Marco regulatorio claro y accesible</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-anahata-primary flex-shrink-0" />
                  <span className="text-sm text-gray-600">Participación ciudadana activa</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Building className="w-5 h-5 text-anahata-primary flex-shrink-0" />
                  <span className="text-sm text-gray-600">Desarrollo económico sustentable</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="w-5 h-5 text-anahata-primary flex-shrink-0" />
                  <span className="text-sm text-gray-600">Acceso medicinal garantizado</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 scroll-animate">
          <div className="bg-anahata-primary/10 rounded-2xl p-6 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-anahata-dark mb-3">Construyendo el Futuro Juntos</h3>
            <p className="text-gray-600">
              Esta iniciativa representa un paso fundamental hacia la modernización de nuestra legislación local,
              posicionando a nuestro municipio como pionero en la regulación responsable del cannabis medicinal en
              Argentina.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
