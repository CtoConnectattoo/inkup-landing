"use client"

import Link from "next/link"
import { Bot, MessageSquare, Clock, Filter, Zap, CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WhatsAppAssistantGuide() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* ¿Qué es un asistente para WhatsApp? */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Qué es un asistente para WhatsApp y en qué se diferencia de un chatbot?
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground mb-6">
                Un <strong>asistente WhatsApp</strong> es una herramienta que responde automáticamente a tus clientes,
                recopila información específica y te la envía organizada. A diferencia de un chatbot tradicional, no
                intenta simular una conversación humana completa, sino que se enfoca en obtener datos concretos de forma
                eficiente.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <Bot className="w-8 h-8 text-purple-600" />
                    <h3 className="text-xl font-semibold">Chatbot tradicional</h3>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Intenta mantener conversaciones largas</li>
                    <li>• Puede confundir a los usuarios</li>
                    <li>• Requiere programación compleja</li>
                    <li>• Difícil de personalizar</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border-2 border-purple-200">
                  <div className="flex items-center gap-3 mb-4">
                    <MessageSquare className="w-8 h-8 text-purple-600" />
                    <h3 className="text-xl font-semibold">Asistente WhatsApp</h3>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Recopila información específica</li>
                    <li>• Interfaz clara y directa</li>
                    <li>• Sin código, fácil de configurar</li>
                    <li>• Totalmente personalizable</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Tareas que puede automatizar */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Qué tareas puede automatizar un asistente para pequeños negocios?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Clock className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Recopilar información</h3>
                <p className="text-muted-foreground">
                  Obtiene datos específicos como presupuestos, fechas disponibles, preferencias y contacto del cliente.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Filter className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Filtrar consultas</h3>
                <p className="text-muted-foreground">
                  Separa consultas serias de curiosos, enviándote solo leads cualificados con información completa.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Zap className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="text-lg font-semibold mb-3">Respuesta inmediata</h3>
                <p className="text-muted-foreground">
                  Atiende a clientes 24/7, incluso cuando estás ocupado o fuera del horario laboral.
                </p>
              </div>
            </div>
          </div>

          {/* Casos de uso reales */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Casos de uso reales del asistente WhatsApp</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">🎨 Tatuadores y estudios</h3>
                <p className="text-muted-foreground mb-3">
                  Recopila descripción del tatuaje, tamaño, zona del cuerpo, presupuesto y disponibilidad. Filtra
                  consultas serias y envía solo leads cualificados.
                </p>
                <div className="text-sm text-purple-600">
                  Ahorro promedio: 3-4 horas diarias respondiendo mensajes repetitivos
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">💅 Centros de estética</h3>
                <p className="text-muted-foreground mb-3">
                  Automatiza consultas sobre tratamientos, precios, disponibilidad y requisitos previos. Agenda citas
                  preliminares automáticamente.
                </p>
                <div className="text-sm text-purple-600">Incremento promedio: 40% más citas confirmadas</div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">🏥 Clínicas y consultas</h3>
                <p className="text-muted-foreground mb-3">
                  Recopila síntomas, historial médico básico, preferencias de horario y datos de contacto antes de la
                  consulta real.
                </p>
                <div className="text-sm text-purple-600">Mejora: 60% menos tiempo por consulta inicial</div>
              </div>
            </div>
          </div>

          {/* Comparativa con otras herramientas */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Comparativa: Inkup vs otras herramientas</h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4 font-semibold">Característica</th>
                    <th className="text-center p-4 font-semibold text-purple-600">Inkup</th>
                    <th className="text-center p-4 font-semibold">Google Forms</th>
                    <th className="text-center p-4 font-semibold">Landbot</th>
                    <th className="text-center p-4 font-semibold">Manychat</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4">Integración directa con WhatsApp</td>
                    <td className="text-center p-4">
                      <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                    </td>
                    <td className="text-center p-4 text-red-500">✗</td>
                    <td className="text-center p-4">
                      <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                    </td>
                    <td className="text-center p-4">
                      <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4">Sin necesidad de web propia</td>
                    <td className="text-center p-4">
                      <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                    </td>
                    <td className="text-center p-4 text-red-500">✗</td>
                    <td className="text-center p-4 text-red-500">✗</td>
                    <td className="text-center p-4 text-red-500">✗</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4">Configuración sin código</td>
                    <td className="text-center p-4">
                      <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                    </td>
                    <td className="text-center p-4">
                      <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                    </td>
                    <td className="text-center p-4 text-orange-500">Parcial</td>
                    <td className="text-center p-4 text-orange-500">Parcial</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4">Precio mensual desde</td>
                    <td className="text-center p-4 font-semibold text-purple-600">Gratis</td>
                    <td className="text-center p-4">Gratis</td>
                    <td className="text-center p-4">€30/mes</td>
                    <td className="text-center p-4">€15/mes</td>
                  </tr>
                  <tr>
                    <td className="p-4">Soporte en español</td>
                    <td className="text-center p-4">
                      <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                    </td>
                    <td className="text-center p-4 text-orange-500">Limitado</td>
                    <td className="text-center p-4 text-orange-500">Limitado</td>
                    <td className="text-center p-4 text-red-500">✗</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Ventajas específicas de Inkup */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Por qué elegir el asistente WhatsApp de Inkup?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Sin fricción para el cliente</h3>
                    <p className="text-muted-foreground">
                      No necesita descargar apps ni visitar webs. Todo sucede en WhatsApp, donde ya están tus clientes.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Configuración en minutos</h3>
                    <p className="text-muted-foreground">
                      Crea tu asistente en menos de 5 minutos. Sin código, sin complicaciones técnicas.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Datos organizados</h3>
                    <p className="text-muted-foreground">
                      Recibe toda la información en un formato claro y estructurado, listo para actuar.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Personalización total</h3>
                    <p className="text-muted-foreground">
                      Adapta las preguntas, mensajes y flujo exactamente a las necesidades de tu negocio.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Soporte en español</h3>
                    <p className="text-muted-foreground">
                      Equipo de soporte que habla tu idioma y entiende el mercado español y latinoamericano.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Gratis para empezar</h3>
                    <p className="text-muted-foreground">
                      Prueba todas las funciones sin compromiso. Solo pagas cuando realmente lo necesitas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cómo empezar */}
          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Cómo empezar gratis con tu asistente WhatsApp</h2>
            <p className="text-xl text-muted-foreground mb-8">
              En menos de 5 minutos puedes tener tu asistente WhatsApp funcionando. Si prefieres algo más simple,
              también puedes empezar con un{" "}
              <Link href="/crear-formulario-whatsapp" className="text-purple-600 hover:underline">
                formulario básico para WhatsApp
              </Link>
              .
            </p>
            <Button size="lg" className="h-14 px-8 text-lg" asChild>
              <a href="https://hi.inkup.io/auth/signup" target="_blank" rel="noopener noreferrer">
                Crear mi asistente gratis <ArrowRight className="ml-2" />
              </a>
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Sin tarjeta de crédito • Configuración en minutos • Soporte incluido
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
