import { Card, CardContent } from "@/components/ui/card"
import { Leaf, Users, Target, Heart, Calendar, Award, Tractor, Sprout, User } from "lucide-react"

export default function Institucional() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50">
      {/* Hero Section */}
      <section className="pt-24 pb-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-anahata-dark mb-6 animate-fade-in">Nuestra Historia</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up">
            Anahata nació de la visión de crear una comunidad cooperativa dedicada al desarrollo sustentable del
            cannabis medicinal y el cáñamo industrial en Argentina.
          </p>
        </div>
      </section>

      {/* Historia */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-1 gap-12 items-center">
            <div className="animate-slide-up">
              <div className="inline-flex items-center space-x-2 bg-anahata-primary/10 rounded-full px-4 py-2 mb-6">
                <Calendar className="w-4 h-4 text-anahata-primary" />
                <span className="text-anahata-primary font-medium text-sm">Desde 2021 Trabajando Juntos</span>
              </div>
              <h2 className="text-3xl font-bold text-anahata-dark mb-6">Tres Años Cultivando Futuro</h2>
              <p className="text-gray-600 mb-4">
                Fundada oficialmente en 2024 en Ferré, Buenos Aires, Anahata nació del trabajo conjunto de un grupo de
                profesionales que desde 2021 venían colaborando en el desarrollo de productos cannábicos de alta
                calidad.
              </p>
              <p className="text-gray-600 mb-6">
                Nuestra ubicación estratégica en Ferré nos permite desarrollar cultivos de excelencia con un enfoque
                cooperativo que fortalece la economía regional.
              </p>
              <div className="bg-anahata-primary/5 rounded-lg p-4">
                <h3 className="font-semibold text-anahata-dark mb-2">Hitos Importantes</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 2021: Inicio del trabajo colaborativo</li>
                  <li>• 2022: Primeros cultivos experimentales</li>
                  <li>• 2023: Desarrollo de productos premium</li>
                  <li>• 2024: Constitución oficial de la cooperativa</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Misión, Visión, Valores */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-anahata-dark mb-12">Nuestros Pilares Fundamentales</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-anahata-primary/20 hover:shadow-lg transition-shadow animate-slide-up">
              <CardContent className="p-8 text-center">
                <Target className="w-12 h-12 text-anahata-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-anahata-dark mb-4">Misión</h3>
                <p className="text-gray-600 mb-4">
                  Promover el acceso responsable al cannabis medicinal y desarrollar productos de cáñamo industrial que
                  contribuyan a un futuro más sustentable desde el interior argentino.
                </p>
                <div className="bg-anahata-primary/5 rounded-lg p-3">
                  <p className="text-sm text-anahata-dark font-medium">Impacto regional y nacional</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-anahata-primary/20 hover:shadow-lg transition-shadow animate-slide-up">
              <CardContent className="p-8 text-center">
                <Leaf className="w-12 h-12 text-anahata-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-anahata-dark mb-4">Visión</h3>
                <p className="text-gray-600 mb-4">
                  Ser la cooperativa líder en América Latina en la producción ética y sustentable de cannabis medicinal
                  y productos de cáñamo, desde la pampa húmeda argentina.
                </p>
                <div className="bg-anahata-primary/5 rounded-lg p-3">
                  <p className="text-sm text-anahata-dark font-medium">Liderazgo latinoamericano</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-anahata-primary/20 hover:shadow-lg transition-shadow animate-slide-up">
              <CardContent className="p-8 text-center">
                <Heart className="w-12 h-12 text-anahata-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-anahata-dark mb-4">Valores</h3>
                <p className="text-gray-600 mb-4">
                  Transparencia, sustentabilidad, cooperación, calidad e innovación guían cada una de nuestras
                  decisiones y acciones diarias.
                </p>
                <div className="bg-anahata-primary/5 rounded-lg p-3">
                  <p className="text-sm text-anahata-dark font-medium">Principios cooperativos</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ubicación Estratégica */}
      <section className="py-8 px-4 bg-anahata-primary/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-anahata-dark mb-4">Nuestra Ubicación</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nuestra ubicación nos brinda condiciones privilegiadas con condiciones excepcionales para nuestros
              cultivos
            </p>
          </div>

          <div className="grid md:grid-cols-1 gap-12 items-center">
            <div className="animate-slide-up">
              <h3 className="text-2xl font-bold text-anahata-dark mb-6">Ventajas Geográficas Únicas</h3>
              <p className="text-gray-600 mb-6">
                Nuestra ubicación estratégica se encuentra en una ubicación privilegiada que nos brinda condiciones
                excepcionales para el cultivo de cannabis y cáñamo industrial.
              </p>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <Tractor className="w-5 h-5 text-anahata-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <strong>Suelos fértiles:</strong> Ricos en nutrientes y materia orgánica, ideales para cultivos de
                    alta calidad
                  </div>
                </li>
                <li className="flex items-start">
                  <Sprout className="w-5 h-5 text-anahata-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <strong>Clima templado:</strong> Precipitaciones ideales y temperaturas estables durante todo el año
                  </div>
                </li>
                <li className="flex items-start">
                  <Users className="w-5 h-5 text-anahata-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <strong>Tradición agrícola:</strong> Generaciones de conocimiento aplicado a cultivos innovadores
                  </div>
                </li>
                <li className="flex items-start">
                  <Heart className="w-5 h-5 text-anahata-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <strong>Comunidad comprometida:</strong> Red de productores locales unidos por objetivos comunes
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Consejo de Administración */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-anahata-dark mb-4">Consejo de Administración</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nuestro equipo directivo está comprometido con la transparencia y la gestión democrática de la cooperativa
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="border-anahata-primary/20 hover:shadow-lg transition-shadow animate-slide-up">
              <CardContent className="p-8 text-center">
                <div className="bg-anahata-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <User className="w-10 h-10 text-anahata-primary" />
                </div>
                <h3 className="text-xl font-semibold text-anahata-dark mb-2">Valentín Franco</h3>
                <p className="text-anahata-primary font-medium mb-4">Presidente</p>
                <p className="text-gray-600 text-sm">
                  Lidera la visión estratégica de la cooperativa y coordina las relaciones institucionales.
                </p>
              </CardContent>
            </Card>

            <Card className="border-anahata-primary/20 hover:shadow-lg transition-shadow animate-slide-up">
              <CardContent className="p-8 text-center">
                <div className="bg-anahata-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <User className="w-10 h-10 text-anahata-primary" />
                </div>
                <h3 className="text-xl font-semibold text-anahata-dark mb-2">Juan Manuel Baldor</h3>
                <p className="text-anahata-primary font-medium mb-4">Secretario</p>
                <p className="text-gray-600 text-sm">
                  Responsable de la documentación oficial y la comunicación interna de la cooperativa.
                </p>
              </CardContent>
            </Card>

            <Card className="border-anahata-primary/20 hover:shadow-lg transition-shadow animate-slide-up">
              <CardContent className="p-8 text-center">
                <div className="bg-anahata-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <User className="w-10 h-10 text-anahata-primary" />
                </div>
                <h3 className="text-xl font-semibold text-anahata-dark mb-2">Juan Segundo Isaguirre</h3>
                <p className="text-anahata-primary font-medium mb-4">Tesorero</p>
                <p className="text-gray-600 text-sm">
                  Administra los recursos financieros y supervisa la gestión económica de la cooperativa.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-anahata-dark mb-8">Sindicatura</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-anahata-primary/20 hover:shadow-lg transition-shadow animate-slide-up">
              <CardContent className="p-8 text-center">
                <div className="bg-anahata-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Award className="w-10 h-10 text-anahata-primary" />
                </div>
                <h3 className="text-xl font-semibold text-anahata-dark mb-2">Alexis Delfino</h3>
                <p className="text-anahata-primary font-medium mb-4">Síndico Titular</p>
                <p className="text-gray-600 text-sm">
                  Supervisa el cumplimiento de las normas cooperativas y fiscaliza la gestión del consejo de
                  administración.
                </p>
              </CardContent>
            </Card>

            <Card className="border-anahata-primary/20 hover:shadow-lg transition-shadow animate-slide-up">
              <CardContent className="p-8 text-center">
                <div className="bg-anahata-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Award className="w-10 h-10 text-anahata-primary" />
                </div>
                <h3 className="text-xl font-semibold text-anahata-dark mb-2">Marcial Imhof</h3>
                <p className="text-anahata-primary font-medium mb-4">Síndico Suplente</p>
                <p className="text-gray-600 text-sm">
                  Apoya las funciones de control y fiscalización, asegurando la transparencia en todas las operaciones.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enfoque Cooperativo */}
      <section className="py-8 px-4 bg-anahata-primary/5">
        <div className="max-w-6xl mx-auto text-center">
          <Users className="w-16 h-16 text-anahata-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-anahata-dark mb-6">Modelo Cooperativo</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
            Creemos en el poder de la colaboración. Nuestro modelo cooperativo permite que productores, investigadores y
            consumidores trabajen juntos hacia objetivos comunes, fortaleciendo toda la cadena de valor.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="text-center animate-slide-up">
              <div className="bg-anahata-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl font-bold text-white">50+</span>
              </div>
              <h3 className="font-semibold text-anahata-dark mb-1">Productores Asociados</h3>
              <p className="text-sm text-gray-600">En toda la región pampeana</p>
            </div>
            <div className="text-center animate-slide-up">
              <div className="bg-anahata-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="font-semibold text-anahata-dark mb-1">Años de Experiencia</h3>
              <p className="text-sm text-gray-600">Trabajando colaborativamente</p>
            </div>
            <div className="text-center animate-slide-up">
              <div className="bg-anahata-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl font-bold text-white">100%</span>
              </div>
              <h3 className="font-semibold text-anahata-dark mb-1">Productos Naturales</h3>
              <p className="text-sm text-gray-600">Sin químicos sintéticos</p>
            </div>
            <div className="text-center animate-slide-up">
              <div className="bg-anahata-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl font-bold text-white">24/7</span>
              </div>
              <h3 className="font-semibold text-anahata-dark mb-1">Asesoría Disponible</h3>
              <p className="text-sm text-gray-600">Soporte continuo</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-anahata-dark mb-6">Principios Cooperativos</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-anahata-dark mb-3">Gestión Democrática</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Todas las decisiones importantes se toman de forma participativa, respetando la voz de cada miembro.
                </p>
                <h4 className="font-semibold text-anahata-dark mb-3">Educación y Formación</h4>
                <p className="text-gray-600 text-sm">
                  Invertimos constantemente en la capacitación de nuestros miembros y la comunidad.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-anahata-dark mb-3">Compromiso con la Comunidad</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Trabajamos por el desarrollo sustentable de Ferré y toda la región pampeana.
                </p>
                <h4 className="font-semibold text-anahata-dark mb-3">Cooperación entre Cooperativas</h4>
                <p className="text-gray-600 text-sm">
                  Colaboramos con otras cooperativas para fortalecer el movimiento cooperativo nacional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipo y Reconocimientos */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-anahata-dark mb-4">Nuestro Equipo</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Profesionales comprometidos con la excelencia y el desarrollo sustentable
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-anahata-primary/20 hover:shadow-lg transition-shadow animate-slide-up">
              <CardContent className="p-8 text-center">
                <div className="bg-anahata-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8 text-anahata-primary" />
                </div>
                <h3 className="text-lg font-semibold text-anahata-dark mb-2">Área Técnica</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Ingenieros agrónomos y especialistas en cultivos cannábicos con experiencia en la región pampeana.
                </p>
                <div className="text-xs text-anahata-primary font-medium">5 profesionales especializados</div>
              </CardContent>
            </Card>

            <Card className="border-anahata-primary/20 hover:shadow-lg transition-shadow animate-slide-up">
              <CardContent className="p-8 text-center">
                <div className="bg-anahata-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-anahata-primary" />
                </div>
                <h3 className="text-lg font-semibold text-anahata-dark mb-2">Gestión Cooperativa</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Administradores y coordinadores con experiencia en gestión cooperativa y desarrollo rural.
                </p>
                <div className="text-xs text-anahata-primary font-medium">3 coordinadores regionales</div>
              </CardContent>
            </Card>

            <Card className="border-anahata-primary/20 hover:shadow-lg transition-shadow animate-slide-up">
              <CardContent className="p-8 text-center">
                <div className="bg-anahata-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-anahata-primary" />
                </div>
                <h3 className="text-lg font-semibold text-anahata-dark mb-2">Calidad y Certificación</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Especialistas en control de calidad y certificaciones orgánicas para garantizar la excelencia.
                </p>
                <div className="text-xs text-anahata-primary font-medium">2 certificadores habilitados</div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-anahata-dark mb-8">Reconocimientos y Certificaciones</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-anahata-primary/5 rounded-lg p-6 shadow-sm">
                <Award className="w-8 h-8 text-anahata-primary mx-auto mb-3" />
                <h4 className="font-semibold text-anahata-dark mb-2">SENASA</h4>
                <p className="text-xs text-gray-600">Registro de establecimiento habilitado</p>
              </div>
              <div className="bg-anahata-primary/5 rounded-lg p-6 shadow-sm">
                <Leaf className="w-8 h-8 text-anahata-primary mx-auto mb-3" />
                <h4 className="font-semibold text-anahata-dark mb-2">Orgánico</h4>
                <p className="text-xs text-gray-600">Certificación de producción orgánica</p>
              </div>
              <div className="bg-anahata-primary/5 rounded-lg p-6 shadow-sm">
                <Users className="w-8 h-8 text-anahata-primary mx-auto mb-3" />
                <h4 className="font-semibold text-anahata-dark mb-2">INAES</h4>
                <p className="text-xs text-gray-600">Cooperativa matriculada oficialmente</p>
              </div>
              <div className="bg-anahata-primary/5 rounded-lg p-6 shadow-sm">
                <Target className="w-8 h-8 text-anahata-primary mx-auto mb-3" />
                <h4 className="font-semibold text-anahata-dark mb-2">ISO 9001</h4>
                <p className="text-xs text-gray-600">Sistema de gestión de calidad</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
