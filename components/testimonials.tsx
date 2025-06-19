"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

export function Testimonials() {
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

  const testimonials = [
    {
      name: "María González",
      location: "Rosario, Santa Fe",
      role: "Productora Asociada",
      content:
        "Trabajar con Anahata cambió mi perspectiva sobre el cultivo de cannabis. Su asesoría técnica adaptada a nuestra región pampeana es excepcional.",
      rating: 5,
    },
    {
      name: "Carlos Mendez",
      location: "Pergamino, Buenos Aires",
      role: "Agricultor",
      content:
        "El kit de cultivo especializado para pampa húmeda superó mis expectativas. Los resultados hablan por sí solos.",
      rating: 5,
    },
    {
      name: "Ana Rodríguez",
      location: "Córdoba Capital",
      role: "Cliente",
      content:
        "Los productos de Anahata tienen una calidad excepcional. Se nota que vienen del interior, con todo el cuidado artesanal.",
      rating: 5,
    },
    {
      name: "Roberto Silva",
      location: "Venado Tuerto, Santa Fe",
      role: "Cooperativista",
      content:
        "Como cooperativa hermana, valoramos el enfoque comunitario de Anahata. Su trabajo fortalece todo el sector.",
      rating: 5,
    },
    {
      name: "Laura Martínez",
      location: "Tandil, Buenos Aires",
      role: "Terapeuta",
      content: "Recomiendo los aceites de Anahata a mis pacientes. La calidad y consistencia son incomparables.",
      rating: 5,
    },
    {
      name: "Diego Fernández",
      location: "Rafaela, Santa Fe",
      role: "Emprendedor",
      content:
        "La asesoría para mi emprendimiento cannábico fue fundamental. Anahata entiende las necesidades del interior.",
      rating: 5,
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-anahata-dark mb-6 scroll-animate">
            Testimonios de Nuestra Comunidad
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto scroll-animate">
            Desde toda la región pampeana, nuestros socios y clientes comparten su experiencia trabajando con Anahata.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-anahata-primary/20 hover:shadow-lg transition-all duration-300 scroll-animate group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8 relative">
                <Quote className="w-8 h-8 text-anahata-primary/20 absolute top-4 right-4" />

                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>

                <div className="border-t border-gray-100 pt-4">
                  <div className="font-semibold text-anahata-dark">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                  <div className="text-sm text-anahata-primary font-medium">{testimonial.location}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 scroll-animate">
          <div className="bg-anahata-primary/5 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-anahata-dark mb-4">¿Quieres ser parte de nuestra comunidad?</h3>
            <p className="text-gray-600 mb-6">
              Únete a más de 50 productores y cientos de clientes que confían en Anahata para sus proyectos cannábicos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-2xl font-bold text-anahata-primary">4.8/5</div>
                <div className="text-sm text-gray-600">Calificación promedio</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-2xl font-bold text-anahata-primary">500+</div>
                <div className="text-sm text-gray-600">Clientes satisfechos</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-2xl font-bold text-anahata-primary">98%</div>
                <div className="text-sm text-gray-600">Recomendarían Anahata</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
