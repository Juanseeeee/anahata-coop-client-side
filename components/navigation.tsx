"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-anahata-primary/10 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl text-anahata-dark">
              <span className="font-normal">cooperativa </span>
              <span className="font-bold font-quicksand">anahata</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-anahata-dark hover:text-anahata-primary transition-colors font-medium">
              Inicio
            </Link>
            <Link
              href="/institucional"
              className="text-anahata-dark hover:text-anahata-primary transition-colors font-medium"
            >
              Institucional
            </Link>
            <Link
              href="/servicios"
              className="text-anahata-dark hover:text-anahata-primary transition-colors font-medium"
            >
              Servicios
            </Link>
            <Link href="/tienda" className="text-anahata-dark hover:text-anahata-primary transition-colors font-medium">
              Tienda
            </Link>
            <Link
              href="/contacto"
              className="text-anahata-dark hover:text-anahata-primary transition-colors font-medium"
            >
              Contacto
            </Link>
            <Button className="bg-anahata-primary hover:bg-anahata-primary/90">Iniciar Sesión</Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-anahata-dark hover:text-anahata-primary"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-anahata-primary/10">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-anahata-dark hover:text-anahata-primary transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Inicio
              </Link>
              <Link
                href="/institucional"
                className="text-anahata-dark hover:text-anahata-primary transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Institucional
              </Link>
              <Link
                href="/servicios"
                className="text-anahata-dark hover:text-anahata-primary transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Servicios
              </Link>
              <Link
                href="/tienda"
                className="text-anahata-dark hover:text-anahata-primary transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Tienda
              </Link>
              <Link
                href="/contacto"
                className="text-anahata-dark hover:text-anahata-primary transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contacto
              </Link>
              <Button className="bg-anahata-primary hover:bg-anahata-primary/90 w-fit">Consulta Gratuita</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
