"use client"

import Image from "next/image"
import { ArrowRight, CheckCircle, Clock, MessageSquare, Users, Zap, Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export default function MatiasNobleAmbassadorClientPage() {
  const [showCodePopup, setShowCodePopup] = useState(false)
  const [copied, setCopied] = useState(false)

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText("MATIAS")
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy: ", err)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-4 md:space-y-6 order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 px-3 py-2 rounded-full text-xs md:text-sm font-medium text-purple-700">
                <Users className="w-3 h-3 md:w-4 md:h-4" />
                Recomendado por profesionales
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                Inkup x{" "}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Matías Noble
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">Automatiza tus consultas con IA</h2>
              <p className="text-xl text-muted-foreground">
                La herramienta que uso y usamos en Noble Art para agilizar las consultas de clientes, ahora con un
                beneficio exclusivo para ti.
              </p>
              <div className="space-y-4">
                <Button
                  size="lg"
                  className="h-12 md:h-14 px-6 md:px-8 text-base md:text-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 w-full sm:w-auto"
                  onClick={() => setShowCodePopup(true)}
                >
                  Prueba gratis con el código MATIAS <ArrowRight className="ml-2" />
                </Button>
                <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    30 días gratis extra
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Sin tarjeta de crédito
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Configuración en minutos
                  </div>
                </div>
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-md mx-auto lg:max-w-none">
                <Image
                  src="/matias-noble-art.jpg"
                  alt="Matías Noble - Especialista en Realismo de Noble Art"
                  width={500}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                    <p className="font-semibold text-gray-900">Matías Noble</p>
                    <p className="text-sm text-gray-600">Especialista en Realismo • Noble Art</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sobre Matías Noble */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-4 md:space-y-6">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                    Sobre{" "}
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      Matías Noble
                    </span>
                  </h2>
                  <div className="space-y-4 text-lg text-muted-foreground">
                    <p>
                      Matías Noble es un reconocido tatuador especializado en{" "}
                      <strong>realismo e hiperrealismo en blanco y negro</strong>, con una trayectoria internacional que
                      lo ha llevado a trabajar en estudios de prestigio alrededor del mundo.
                    </p>
                    <p>
                      Fundador de <strong>Noble Art</strong>, ha perfeccionado su técnica durante años, creando obras
                      que capturan la esencia y emotividad de cada diseño con un nivel de detalle extraordinario.
                    </p>
                    <p>
                      Su experiencia gestionando cientos de consultas diarias lo llevó a adoptar Inkup para optimizar la
                      comunicación con sus clientes y enfocarse en lo que mejor sabe hacer: crear arte.
                    </p>
                  </div>
                  <div className="flex items-center gap-4 pt-4">
                    <div className="flex items-center gap-2 text-sm font-medium text-purple-600">
                      <Users className="w-4 h-4" />
                      +10 años de experiencia
                    </div>
                    <div className="flex items-center gap-2 text-sm font-medium text-purple-600">
                      <Zap className="w-4 h-4" />
                      Trayectoria internacional
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="rounded-lg overflow-hidden shadow-lg">
                      <Image
                        src="/placeholder.svg?height=300&width=250&text=Obra+de+Matías+Noble"
                        alt="Obra de Matías Noble"
                        width={250}
                        height={300}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                  <div className="space-y-4 pt-8">
                    <div className="rounded-lg overflow-hidden shadow-lg">
                      <Image
                        src="/matias-noble-art.jpg"
                        alt="Matías Noble en Noble Art"
                        width={250}
                        height={280}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Qué es Inkup */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  ¿Qué es{" "}
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Inkup?
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  La herramienta que revoluciona la forma en que los tatuadores gestionan sus consultas, ahorrando
                  tiempo y mejorando la experiencia del cliente.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-3">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto">
                    <MessageSquare className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Respuesta Inmediata</h3>
                  <p className="text-muted-foreground">
                    Tu asistente de IA responde al instante en WhatsApp e Instagram, recopilando toda la información
                    necesaria del cliente.
                  </p>
                </div>

                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto">
                    <Clock className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Ahorro de Tiempo</h3>
                  <p className="text-muted-foreground">
                    Elimina las consultas repetitivas y recibe solo solicitudes organizadas con toda la información que
                    necesitas.
                  </p>
                </div>

                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto">
                    <Users className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Mejor Experiencia</h3>
                  <p className="text-muted-foreground">
                    Tus clientes obtienen respuestas inmediatas y tú te enfocas en crear arte excepcional.
                  </p>
                </div>
              </div>

              {/* Testimonio de Matías */}
              <div className="mt-16 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 md:p-12">
                <div className="max-w-4xl mx-auto text-center">
                  <div className="mb-6">
                    <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 border-4 border-white shadow-lg">
                      <Image
                        src="/matias-noble-art.jpg"
                        alt="Matías Noble"
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <blockquote className="text-xl md:text-2xl font-medium text-gray-800 mb-6">
                    "Desde que uso Inkup en Noble Art, he recuperado horas de mi día. Ya no pierdo tiempo con consultas
                    básicas y puedo enfocarme en lo que realmente importa: crear tatuajes únicos para mis clientes."
                  </blockquote>
                  <div className="text-lg font-semibold text-purple-600">Matías Noble</div>
                  <div className="text-muted-foreground">Fundador de Noble Art • Especialista en realismo</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Beneficio Exclusivo */}
        <section className="bg-gradient-to-r from-purple-100 to-pink-100 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-purple-200/50 px-4 py-2 rounded-full text-sm font-medium mb-6 text-purple-800">
                <Zap className="w-4 h-4" />
                Oferta limitada
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
                Beneficio exclusivo para entorno de Matías
              </h2>
              <p className="text-xl mb-8 text-gray-700">
                Usa el código <strong>MATIAS</strong> y obtén 30 días adicionales gratis en cualquier plan de Inkup. Una
                oportunidad única para probar la herramienta que está transformando la industria del tatuaje.
              </p>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-8 md:mb-12 text-left">
                <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 border border-purple-200">
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <h3 className="font-semibold text-gray-900">30 días extra gratis</h3>
                  </div>
                  <p className="text-gray-700">Disfruta de un mes adicional sin costo en cualquier plan que elijas.</p>
                </div>

                <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 border border-purple-200">
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <h3 className="font-semibold text-gray-900">Configuración personalizada</h3>
                  </div>
                  <p className="text-gray-700">
                    Nuestro equipo te ayuda a configurar tu asistente según tu estilo de trabajo.
                  </p>
                </div>

                <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 border border-purple-200">
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <h3 className="font-semibold text-gray-900">Soporte prioritario</h3>
                  </div>
                  <p className="text-gray-700">
                    Acceso directo a nuestro equipo de soporte para resolver cualquier duda.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <Button
                  size="lg"
                  className="h-12 md:h-14 px-6 md:px-8 text-base md:text-lg bg-black hover:bg-gray-800 text-white w-full sm:w-auto"
                  onClick={() => setShowCodePopup(true)}
                >
                  Activar código MATIAS ahora <ArrowRight className="ml-2" />
                </Button>
                <p className="text-sm text-gray-600">
                  * Oferta válida por tiempo limitado. Sin permanencia ni tarjeta de crédito requerida.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Code Popup */}
        <Dialog open={showCodePopup} onOpenChange={setShowCodePopup}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-center">¡Tu código exclusivo está listo!</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="text-center">
                <p className="text-muted-foreground mb-4">
                  Copia este código y úsalo al registrarte en Inkup para obtener 30 días gratis extra
                </p>
                <div className="flex items-center justify-center gap-2 bg-gray-100 rounded-lg p-4">
                  <span className="text-2xl font-bold text-purple-600">MATIAS</span>
                  <Button variant="outline" size="sm" onClick={copyCode} className="ml-2 bg-transparent">
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    {copied ? "Copiado" : "Copiar"}
                  </Button>
                </div>
              </div>
              <div className="text-center">
                <Button
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                  asChild
                >
                  <a href="https://hi.inkup.io/auth/signup" target="_blank" rel="noopener noreferrer">
                    Ir a Inkup y registrarme
                  </a>
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </main>
      <Footer />
    </div>
  )
}
