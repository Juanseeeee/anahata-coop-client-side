"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Leaf, Users, Heart } from "lucide-react"

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    mensaje: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    console.log("Formulario enviado:", formData)
    alert("¡Mensaje enviado correctamente! Te contactaremos pronto.")
    setFormData({ nombre: "", correo: "", mensaje: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-anahata-dark mb-6 animate-fade-in">Contáctanos</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up">
            Estamos aquí para ayudarte. Ponte en contacto con nuestro equipo de expertos para resolver tus dudas o
            comenzar tu proyecto.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formulario de Contacto */}
          <Card className="border-anahata-primary/20 shadow-lg animate-slide-up">
            <CardHeader>
              <CardTitle className="text-2xl text-anahata-dark">Envíanos un Mensaje</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-anahata-dark mb-2">
                    Nombre Completo *
                  </label>
                  <Input
                    id="nombre"
                    name="nombre"
                    type="text"
                    required
                    value={formData.nombre}
                    onChange={handleChange}
                    className="border-anahata-primary/30 focus:border-anahata-primary"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div>
                  <label htmlFor="correo" className="block text-sm font-medium text-anahata-dark mb-2">
                    Correo Electrónico *
                  </label>
                  <Input
                    id="correo"
                    name="correo"
                    type="email"
                    required
                    value={formData.correo}
                    onChange={handleChange}
                    className="border-anahata-primary/30 focus:border-anahata-primary"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-anahata-dark mb-2">
                    Mensaje *
                  </label>
                  <Textarea
                    id="mensaje"
                    name="mensaje"
                    required
                    value={formData.mensaje}
                    onChange={handleChange}
                    rows={6}
                    className="border-anahata-primary/30 focus:border-anahata-primary resize-none"
                    placeholder="Cuéntanos en qué podemos ayudarte..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-anahata-primary hover:bg-anahata-primary/90 transition-all duration-300 hover:scale-105"
                  size="lg"
                >
                  Enviar Mensaje
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Información de Contacto */}
          <div className="space-y-8">
            {/* Datos de Contacto */}
            <Card className="border-anahata-primary/20 shadow-lg animate-slide-up">
              <CardHeader>
                <CardTitle className="text-2xl text-anahata-dark">Información de Contacto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-anahata-primary/10 rounded-full p-3">
                    <MapPin className="w-6 h-6 text-anahata-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-anahata-dark mb-1">Dirección</h3>
                    <p className="text-gray-600">
                      Buenos Aires, Argentina
                      <br />
                      Núcleo de la pampa húmeda
                      <br />
                      (CP 6634)
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-anahata-primary/10 rounded-full p-3">
                    <Phone className="w-6 h-6 text-anahata-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-anahata-dark mb-1">Teléfono</h3>
                    <p className="text-gray-600">
                      +54 11 1234-5678
                      <br />
                      WhatsApp: +54 9 11 1234-5678
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-anahata-primary/10 rounded-full p-3">
                    <Mail className="w-6 h-6 text-anahata-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-anahata-dark mb-1">Email</h3>
                    <p className="text-gray-600">
                      info@anahata.coop
                      <br />
                      asesoria@anahata.coop
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-anahata-primary/10 rounded-full p-3">
                    <Clock className="w-6 h-6 text-anahata-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-anahata-dark mb-1">Horarios</h3>
                    <p className="text-gray-600">
                      Lunes a Viernes: 9:00 - 18:00
                      <br />
                      Sábados: 9:00 - 14:00
                      <br />
                      Domingos: Cerrado
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mapa */}
            <Card className="border-anahata-primary/20 shadow-lg animate-slide-up">
              <CardHeader>
                <CardTitle className="text-2xl text-anahata-dark">Nuestra Ubicación</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="w-full h-64 bg-gray-200 rounded-b-lg relative overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3302.8!2d-59.8667!3d-34.2833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bb6c8b9f8ff113%3A0x22fd08da6711928d!2sFerr%C3%A9%2C%20Buenos%20Aires%2C%20Argentina!5e0!3m2!1sen!2sus!4v1703123456789!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-b-lg"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Ventajas de Nuestra Ubicación */}
      <section className="py-16 px-4 bg-anahata-primary/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-anahata-dark mb-12">¿Por qué Elegirnos?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-anahata-primary/20 hover:shadow-lg transition-shadow animate-slide-up">
              <CardContent className="p-6 text-center">
                <Leaf className="w-12 h-12 text-anahata-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-anahata-dark mb-3">Condiciones Ideales</h3>
                <p className="text-gray-600 text-sm">
                  Nuestra ubicación estratégica nos ofrece una ubicación estratégica ideal para el desarrollo de
                  cultivos de cannabis de alta calidad.
                </p>
              </CardContent>
            </Card>

            <Card className="border-anahata-primary/20 hover:shadow-lg transition-shadow animate-slide-up">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-anahata-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-anahata-dark mb-3">Comunidad Rural</h3>
                <p className="text-gray-600 text-sm">
                  Trabajamos con productores locales, fortaleciendo la economía regional y el desarrollo sustentable.
                </p>
              </CardContent>
            </Card>

            <Card className="border-anahata-primary/20 hover:shadow-lg transition-shadow animate-slide-up">
              <CardContent className="p-6 text-center">
                <Heart className="w-12 h-12 text-anahata-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-anahata-dark mb-3">Tradición Agrícola</h3>
                <p className="text-gray-600 text-sm">
                  Generaciones de conocimiento agrícola aplicado a los cultivos cannábicos más innovadores.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Horarios y Disponibilidad */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-anahata-dark mb-12">Horarios y Disponibilidad</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-anahata-primary/20 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-anahata-dark mb-6">Oficina Principal</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-medium text-anahata-dark">Lunes a Viernes</span>
                    <span className="text-gray-600">9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-medium text-anahata-dark">Sábados</span>
                    <span className="text-gray-600">9:00 - 14:00</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-medium text-anahata-dark">Domingos</span>
                    <span className="text-gray-600">Cerrado</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium text-anahata-dark">Feriados</span>
                    <span className="text-gray-600">Consultar</span>
                  </div>
                </div>
                <div className="mt-6 bg-anahata-primary/5 rounded-lg p-4">
                  <p className="text-sm text-anahata-dark font-medium mb-2">Visitas al Campo</p>
                  <p className="text-xs text-gray-600">
                    Coordinamos visitas a nuestros cultivos con cita previa. Ideal para conocer nuestro proceso
                    productivo.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-anahata-primary/20 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-anahata-dark mb-6">Asesoría Técnica</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-anahata-primary mt-1" />
                    <div>
                      <h4 className="font-medium text-anahata-dark">Consultas Telefónicas</h4>
                      <p className="text-sm text-gray-600">Lunes a Sábado de 8:00 a 20:00</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-anahata-primary mt-1" />
                    <div>
                      <h4 className="font-medium text-anahata-dark">Email</h4>
                      <p className="text-sm text-gray-600">Respuesta en menos de 24 horas</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="w-5 h-5 text-anahata-primary mt-1" />
                    <div>
                      <h4 className="font-medium text-anahata-dark">WhatsApp</h4>
                      <p className="text-sm text-gray-600">Disponible 24/7 para emergencias</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 bg-anahata-primary/5 rounded-lg p-4">
                  <p className="text-sm text-anahata-dark font-medium mb-2">Emergencias de Cultivo</p>
                  <p className="text-xs text-gray-600">
                    Para problemas urgentes en cultivos, contamos con línea de emergencia 24/7 para socios.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Preguntas Frecuentes */}
      <section className="py-16 px-4 bg-anahata-primary/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-anahata-dark mb-12">Preguntas Frecuentes</h2>
          <div className="space-y-6">
            <Card className="border-anahata-primary/20">
              <CardContent className="p-6">
                <h3 className="font-semibold text-anahata-dark mb-3">¿Realizan envíos a todo el país?</h3>
                <p className="text-gray-600">
                  Sí, enviamos desde Ferré a toda Argentina. Contamos con logística especializada y empaque discreto.
                  Los envíos incluyen seguimiento completo y seguro de transporte.
                </p>
              </CardContent>
            </Card>

            <Card className="border-anahata-primary/20">
              <CardContent className="p-6">
                <h3 className="font-semibold text-anahata-dark mb-3">¿Qué certificaciones tienen sus productos?</h3>
                <p className="text-gray-600">
                  Todos nuestros productos cuentan con certificación orgánica y análisis de laboratorio. Trabajamos con
                  laboratorios certificados en CABA y La Plata para garantizar pureza y potencia.
                </p>
              </CardContent>
            </Card>

            <Card className="border-anahata-primary/20">
              <CardContent className="p-6">
                <h3 className="font-semibold text-anahata-dark mb-3">¿Ofrecen asesoría para nuevos cultivadores?</h3>
                <p className="text-gray-600">
                  Absolutamente. Brindamos asesoría técnica integral adaptada a las condiciones de cada región. Incluye
                  selección de variedades, técnicas de cultivo y acompañamiento durante todo el proceso.
                </p>
              </CardContent>
            </Card>

            <Card className="border-anahata-primary/20">
              <CardContent className="p-6">
                <h3 className="font-semibold text-anahata-dark mb-3">¿Cómo puedo asociarme a la cooperativa?</h3>
                <p className="text-gray-600">
                  Para asociarte, contactanos y te explicaremos el proceso. Evaluamos cada caso particular y brindamos
                  información sobre derechos, obligaciones y beneficios de ser socio cooperativista.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-anahata-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-anahata-dark mb-6">¿Necesitas Asesoría Inmediata?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Nuestro equipo está disponible para consultas urgentes y asesoría especializada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-anahata-primary hover:bg-anahata-primary/90">
              Llamar Ahora
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-anahata-primary text-anahata-primary hover:bg-anahata-primary hover:text-white"
            >
              Chat en Vivo
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
