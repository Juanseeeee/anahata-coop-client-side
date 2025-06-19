import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"
import Link from "next/link"

export function CTA() {
  return (
    <section className="py-20 px-4 bg-anahata-primary">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in">Comienza Tu Proyecto Hoy</h2>
        <p className="text-xl mb-8 opacity-90 animate-slide-up">
          Únete a nuestra cooperativa y accede a productos premium, asesoría especializada y una comunidad comprometida
          con la excelencia.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-white text-anahata-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            <Link href="/contacto" className="flex items-center">
              Consulta Gratuita
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>

        <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-6">¿Por qué elegir Anahata?</h3>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div>
              <h4 className="font-semibold mb-3">Ventajas Únicas</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li>✓ Ubicación estratégica en pampa húmeda</li>
                <li>✓ 3 años de experiencia trabajando juntos</li>
                <li>✓ Red de 50+ productores asociados</li>
                <li>✓ Productos 100% naturales y orgánicos</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Servicios Completos</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li>✓ Asesoría técnica especializada</li>
                <li>✓ Análisis de laboratorio certificados</li>
                <li>✓ Capacitación y formación continua</li>
                <li>✓ Acompañamiento integral del proyecto</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
