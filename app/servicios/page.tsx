import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Home, Users, Building, Leaf, BookOpen, MapPin, Tractor, Sprout, Scale } from "lucide-react"

export default function Servicios() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50">
      {/* Hero Section */}
      <section className="pt-24 pb-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-anahata-dark mb-6 animate-fade-in">
            Asesoría Técnica Especializada
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up">
            Brindamos asesoría técnica integral para el cultivo de cannabis medicinal y cáñamo industrial.
          </p>
        </div>
      </section>

      {/* Servicios por Tipo de Usuario */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-anahata-dark mb-12">Servicios por Tipo de Usuario</h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Hogares */}
            <Card className="border-anahata-primary/20 hover:shadow-xl transition-all duration-300 animate-slide-up">
              <CardHeader className="text-center pb-4">
                <div className="bg-anahata-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Home className="w-8 h-8 text-anahata-primary" />
                </div>
                <CardTitle className="text-anahata-dark">Para Personal</CardTitle>
                <p className="text-sm text-gray-600">Cultivo doméstico responsable</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <Leaf className="w-4 h-4 text-anahata-primary mt-1 mr-2 flex-shrink-0" />
                    Selección de variedades adaptadas a la región
                  </li>
                  <li className="flex items-start">
                    <Leaf className="w-4 h-4 text-anahata-primary mt-1 mr-2 flex-shrink-0" />
                    Técnicas de cultivo orgánico regional
                  </li>
                  <li className="flex items-start">
                    <Leaf className="w-4 h-4 text-anahata-primary mt-1 mr-2 flex-shrink-0" />
                    Manejo de plagas locales
                  </li>
                  <li className="flex items-start">
                    <Leaf className="w-4 h-4 text-anahata-primary mt-1 mr-2 flex-shrink-0" />
                    Procesamiento y conservación
                  </li>
                  <li className="flex items-start">
                    <Leaf className="w-4 h-4 text-anahata-primary mt-1 mr-2 flex-shrink-0" />
                    Asesoría legal y normativa
                  </li>
                </ul>
                <div className="bg-anahata-primary/5 rounded-lg p-4">
                  <div className="text-sm font-medium text-anahata-dark mb-1">Incluye:</div>
                  <div className="text-xs text-gray-600">Kit de inicio + 3 consultas + Manual de introducción al cultivo</div>
                </div>
                <Button className="w-full bg-anahata-primary hover:bg-anahata-primary/90">Consultar Asesoría</Button>
              </CardContent>
            </Card>

            {/* Cooperativas */}
            <Card className="border-anahata-primary/20 hover:shadow-xl transition-all duration-300 animate-slide-up border-2 border-anahata-primary/40">
              <CardHeader className="text-center pb-4">
                <div className="bg-anahata-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-anahata-primary" />
                </div>
                <CardTitle className="text-anahata-dark">Para Cooperativas</CardTitle>
                <p className="text-sm text-gray-600">Gestión cooperativa eficiente</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <Leaf className="w-4 h-4 text-anahata-primary mt-1 mr-2 flex-shrink-0" />
                    Planificación de cultivos a escala regional
                  </li>
                  <li className="flex items-start">
                    <Leaf className="w-4 h-4 text-anahata-primary mt-1 mr-2 flex-shrink-0" />
                    Protocolos de calidad cooperativa
                  </li>
                  <li className="flex items-start">
                    <Leaf className="w-4 h-4 text-anahata-primary mt-1 mr-2 flex-shrink-0" />
                    Capacitación integral de los miembros de la cooperativa
                  </li>
                  <li className="flex items-start">
                    <Leaf className="w-4 h-4 text-anahata-primary mt-1 mr-2 flex-shrink-0" />
                    Certificaciones orgánicas grupales
                  </li>
                  <li className="flex items-start">
                    <Leaf className="w-4 h-4 text-anahata-primary mt-1 mr-2 flex-shrink-0" />
                    Comercialización conjunta
                  </li>
                </ul>
                <div className="bg-anahata-primary/5 rounded-lg p-4">
                  <div className="text-sm font-medium text-anahata-dark mb-1">Incluye:</div>
                  <div className="text-xs text-gray-600">Asesoría continua + Capacitaciones + Certificaciones</div>
                </div>
                <Button className="w-full bg-anahata-primary hover:bg-anahata-primary/90">Consultar Asesoría</Button>
              </CardContent>
            </Card>

            {/* Empresas */}
            <Card className="border-anahata-primary/20 hover:shadow-xl transition-all duration-300 animate-slide-up">
              <CardHeader className="text-center pb-4">
                <div className="bg-anahata-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8 text-anahata-primary" />
                </div>
                <CardTitle className="text-anahata-dark">Para Empresas</CardTitle>
                <p className="text-sm text-gray-600">Cultivo industrial a gran escala</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <Leaf className="w-4 h-4 text-anahata-primary mt-1 mr-2 flex-shrink-0" />
                    Cultivo industrial en pampa húmeda
                  </li>
                  <li className="flex items-start">
                    <Leaf className="w-4 h-4 text-anahata-primary mt-1 mr-2 flex-shrink-0" />
                    Optimización de procesos productivos
                  </li>
                  <li className="flex items-start">
                    <Leaf className="w-4 h-4 text-anahata-primary mt-1 mr-2 flex-shrink-0" />
                    Cumplimiento regulatorio completo
                  </li>
                  <li className="flex items-start">
                    <Leaf className="w-4 h-4 text-anahata-primary mt-1 mr-2 flex-shrink-0" />
                    I+D personalizado y desarrollo
                  </li>
                  <li className="flex items-start">
                    <Leaf className="w-4 h-4 text-anahata-primary mt-1 mr-2 flex-shrink-0" />
                    Logística y distribución
                  </li>
                </ul>
                <div className="bg-anahata-primary/5 rounded-lg p-4">
                  <div className="text-sm font-medium text-anahata-dark mb-1">Incluye:</div>
                  <div className="text-xs text-gray-600">Consultoría completa + Implementación + Seguimiento</div>
                </div>
                <Button className="w-full bg-anahata-primary hover:bg-anahata-primary/90">Consultar Asesoría</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Servicios Especializados */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-anahata-dark mb-12">Servicios Especializados</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-anahata-primary/20 hover:shadow-lg transition-shadow animate-slide-up">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <BookOpen className="w-8 h-8 text-anahata-primary mr-3" />
                  <h3 className="text-xl font-semibold text-anahata-dark">Capacitación y Formación</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Programas de capacitación integral adaptados a las condiciones de la pampa húmeda, desde principiantes
                  hasta profesionales avanzados.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li>• Cursos presenciales en Ferré y región</li>
                  <li>• Talleres prácticos en campo</li>
                  <li>• Certificaciones profesionales reconocidas</li>
                  <li>• Material educativo especializado</li>
                  <li>• Mentorías personalizadas</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-anahata-primary/20 hover:shadow-lg transition-shadow animate-slide-up">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Scale className="w-8 h-8 text-anahata-primary mr-3" />
                  <h3 className="text-xl font-semibold text-anahata-dark">Asesoría Legal</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Orientación legal especializada en normativas cannábicas, permisos y cumplimiento regulatorio para
                  proyectos de cannabis medicinal y cáñamo industrial.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li>• Tramitación de permisos y licencias</li>
                  <li>• Cumplimiento normativo ANMAT</li>
                  <li>• Asesoría en marco legal vigente</li>
                  <li>• Documentación y registros requeridos</li>
                  <li>• Consultas sobre regulaciones específicas</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Metodología de Trabajo */}
      <section className="py-8 px-4 bg-anahata-primary/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-anahata-dark mb-12">Nuestra Metodología</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center animate-slide-up">
              <div className="bg-anahata-primary rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">1</span>
              </div>
              <h3 className="font-semibold text-anahata-dark mb-2">Diagnóstico</h3>
              <p className="text-sm text-gray-600">Evaluamos tus necesidades y condiciones específicas</p>
            </div>
            <div className="text-center animate-slide-up">
              <div className="bg-anahata-primary rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">2</span>
              </div>
              <h3 className="font-semibold text-anahata-dark mb-2">Planificación</h3>
              <p className="text-sm text-gray-600">Diseñamos un plan personalizado para tu proyecto</p>
            </div>
            <div className="text-center animate-slide-up">
              <div className="bg-anahata-primary rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">3</span>
              </div>
              <h3 className="font-semibold text-anahata-dark mb-2">Implementación</h3>
              <p className="text-sm text-gray-600">Te acompañamos en cada paso del proceso</p>
            </div>
            <div className="text-center animate-slide-up">
              <div className="bg-anahata-primary rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">4</span>
              </div>
              <h3 className="font-semibold text-anahata-dark mb-2">Seguimiento</h3>
              <p className="text-sm text-gray-600">Monitoreo continuo y optimización de resultados</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-anahata-dark mb-6">¿Listo para comenzar tu proyecto?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Nuestro equipo de expertos está preparado para acompañarte en cada paso del proceso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-anahata-primary hover:bg-anahata-primary/90">
              Solicitar Consulta Gratuita
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-anahata-primary text-anahata-primary hover:bg-anahata-primary hover:text-white"
            >
              Ver Casos de Éxito
            </Button>
          </div>
          <div className="bg-anahata-primary/5 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="font-semibold text-anahata-dark mb-2">🌱 Experiencia Regional</h3>
            <p className="text-gray-600 text-sm">
              Aprovecha nuestro conocimiento local para obtener cultivos de cannabis de la más alta calidad, con el
              respaldo de 3 años de experiencia.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
