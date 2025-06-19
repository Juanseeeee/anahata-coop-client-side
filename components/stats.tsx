"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Leaf, Users, Award, MapPin } from "lucide-react"

export function Stats() {
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
              }, index * 100)
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
    <section ref={sectionRef} className="py-16 px-4 bg-anahata-primary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 scroll-animate">Anahata en Números</h2>
          <p className="text-xl text-white/90 scroll-animate">Cooperativa Cannábica Argentina</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 scroll-animate">
            <CardContent className="p-8 text-center text-white">
              <Users className="w-12 h-12 mx-auto mb-4 text-white" />
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-white/90">Productores Asociados</div>
              <div className="text-sm text-white/70 mt-2">En toda la pampa húmeda</div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 scroll-animate">
            <CardContent className="p-8 text-center text-white">
              <Leaf className="w-12 h-12 mx-auto mb-4 text-white" />
              <div className="text-4xl font-bold mb-2">3</div>
              <div className="text-white/90">Años de Experiencia</div>
              <div className="text-sm text-white/70 mt-2">Trabajando juntos desde 2021</div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 scroll-animate">
            <CardContent className="p-8 text-center text-white">
              <Award className="w-12 h-12 mx-auto mb-4 text-white" />
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-white/90">Productos Naturales</div>
              <div className="text-sm text-white/70 mt-2">Sin químicos sintéticos</div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 scroll-animate">
            <CardContent className="p-8 text-center text-white">
              <MapPin className="w-12 h-12 mx-auto mb-4 text-white" />
              <div className="text-4xl font-bold mb-2">2024</div>
              <div className="text-white/90">Fundación Oficial</div>
              <div className="text-sm text-white/70 mt-2">Cooperativa constituida</div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center scroll-animate">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Desde Ferré</h3>
            <p className="text-white/90 text-lg mb-6">
              Ferré nos brinda las condiciones ideales para el cultivo de cannabis medicinal y cáñamo industrial, con
              una comunidad comprometida con la agricultura sustentable.
            </p>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">Buenos Aires, Argentina</div>
              <div className="text-white/80 text-sm">Nuestra base de operaciones</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
