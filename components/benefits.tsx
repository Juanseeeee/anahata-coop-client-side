"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Leaf, Recycle, Shield, Pill, Factory } from "lucide-react"

export function Benefits() {
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
    <section ref={sectionRef} className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-anahata-dark mb-6 scroll-animate">¿Qué Hacemos?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto scroll-animate">
            Producimos y desarrollamos productos especializados en dos áreas principales de la industria cannábica
          </p>
        </div>

        {/* Cannabis Medicinal */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="bg-anahata-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 scroll-animate">
              <Pill className="w-10 h-10 text-anahata-primary" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-anahata-dark mb-4 scroll-animate">Cannabis Medicinal</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto scroll-animate">
              Producimos productos terapéuticos de alta calidad para mejorar la calidad de vida y el bienestar
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-anahata-primary/20 hover:shadow-lg transition-all duration-300 scroll-animate group">
              <CardContent className="p-8 text-center">
                <div className="bg-anahata-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Heart className="w-8 h-8 text-anahata-primary" />
                </div>
                <h4 className="text-xl font-semibold text-anahata-dark mb-4">Desarrollamos Terapias</h4>
                <p className="text-gray-600">
                  Producimos aceites y extractos con propiedades analgésicas, antiinflamatorias y neuroprotectoras.
                </p>
              </CardContent>
            </Card>

            <Card className="border-anahata-primary/20 hover:shadow-lg transition-all duration-300 scroll-animate group">
              <CardContent className="p-8 text-center">
                <div className="bg-anahata-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Leaf className="w-8 h-8 text-anahata-primary" />
                </div>
                <h4 className="text-xl font-semibold text-anahata-dark mb-4">Cultivamos Orgánico</h4>
                <p className="text-gray-600">
                  Producimos cannabis 100% natural, libre de químicos sintéticos, con métodos orgánicos y sustentables.
                </p>
              </CardContent>
            </Card>

            <Card className="border-anahata-primary/20 hover:shadow-lg transition-all duration-300 scroll-animate group">
              <CardContent className="p-8 text-center">
                <div className="bg-anahata-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Shield className="w-8 h-8 text-anahata-primary" />
                </div>
                <h4 className="text-xl font-semibold text-anahata-dark mb-4">Garantizamos Calidad</h4>
                <p className="text-gray-600">
                  Implementamos rigurosos controles de calidad y análisis externos en cada producto que desarrollamos.
                </p>
              </CardContent>
            </Card>

            <Card className="border-anahata-primary/20 hover:shadow-lg transition-all duration-300 scroll-animate group">
              <CardContent className="p-8 text-center">
                <div className="bg-anahata-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Pill className="w-8 h-8 text-anahata-primary" />
                </div>
                <h4 className="text-xl font-semibold text-anahata-dark mb-4">Ofrecemos Variedad</h4>
                <p className="text-gray-600">
                  Producimos aceites de CBD, extractos de espectro completo y productos especializados para diferentes
                  necesidades.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Cáñamo Industrial */}
        <div>
          <div className="text-center mb-12">
            <div className="bg-anahata-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 scroll-animate">
              <Factory className="w-10 h-10 text-anahata-primary" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-anahata-dark mb-4 scroll-animate">Cáñamo Industrial</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto scroll-animate">
              Desarrollamos soluciones sustentables para diversas industrias con productos derivados del cáñamo
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-anahata-primary/20 hover:shadow-lg transition-all duration-300 scroll-animate group">
              <CardContent className="p-8 text-center">
                <div className="bg-anahata-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Recycle className="w-8 h-8 text-anahata-primary" />
                </div>
                <h4 className="text-xl font-semibold text-anahata-dark mb-4">Producimos Textiles</h4>
                <p className="text-gray-600">
                  Desarrollamos fibras resistentes y biodegradables para la industria textil y de confección.
                </p>
              </CardContent>
            </Card>

            <Card className="border-anahata-primary/20 hover:shadow-lg transition-all duration-300 scroll-animate group">
              <CardContent className="p-8 text-center">
                <div className="bg-anahata-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Factory className="w-8 h-8 text-anahata-primary" />
                </div>
                <h4 className="text-xl font-semibold text-anahata-dark mb-4">Creamos Materiales</h4>
                <p className="text-gray-600">
                  Fabricamos materiales ecológicos y aislantes para construcción sustentable y eficiente.
                </p>
              </CardContent>
            </Card>

            <Card className="border-anahata-primary/20 hover:shadow-lg transition-all duration-300 scroll-animate group">
              <CardContent className="p-8 text-center">
                <div className="bg-anahata-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Leaf className="w-8 h-8 text-anahata-primary" />
                </div>
                <h4 className="text-xl font-semibold text-anahata-dark mb-4">Innovamos Bioplásticos</h4>
                <p className="text-gray-600">
                  Desarrollamos alternativas sustentables al plástico convencional para empaques y productos diversos.
                </p>
              </CardContent>
            </Card>

            <Card className="border-anahata-primary/20 hover:shadow-lg transition-all duration-300 scroll-animate group">
              <CardContent className="p-8 text-center">
                <div className="bg-anahata-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Heart className="w-8 h-8 text-anahata-primary" />
                </div>
                <h4 className="text-xl font-semibold text-anahata-dark mb-4">Elaboramos Alimentos</h4>
                <p className="text-gray-600">
                  Procesamos semillas ricas en proteínas y ácidos grasos omega para suplementos nutricionales.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
