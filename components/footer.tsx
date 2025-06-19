import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-anahata-dark text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl text-white font-quicksand">
                <span className="font-normal">cooperativa </span>
                <span className="font-bold">anahata</span>
              </span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Cooperativa especializada en cannabis medicinal y cáñamo industrial. Comprometidos con la calidad,
              sustentabilidad y el bienestar de nuestra comunidad.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Mail className="w-4 h-4" />
                <span>info@anahata.coop</span>
              </div>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-anahata-primary transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/institucional" className="text-gray-300 hover:text-anahata-primary transition-colors">
                  Institucional
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-gray-300 hover:text-anahata-primary transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/tienda" className="text-gray-300 hover:text-anahata-primary transition-colors">
                  Tienda
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-300 hover:text-anahata-primary transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 text-anahata-primary flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  Buenos Aires, Argentina
                  <br />
                  Pampa Húmeda
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-anahata-primary" />
                <span className="text-gray-300 text-sm">+54 11 1234-5678</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-anahata-primary" />
                <span className="text-gray-300 text-sm">info@anahata.coop</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Anahata Cooperativa Cannábica. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
