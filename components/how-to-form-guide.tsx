"use client"

import { motion } from "framer-motion"
import { CheckCircle, MessageSquare, Clock, Users, Zap, ArrowRight } from "lucide-react"
import Link from "next/link"

export function HowToFormGuide() {
  const useCases = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Reservas de citas",
      description:
        "Recibe solicitudes de citas con toda la información necesaria: fecha, hora, servicio y datos de contacto.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Consultas de servicios",
      description:
        "Organiza las consultas sobre tus servicios con preguntas específicas que te ayuden a dar presupuestos precisos.",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Solicitudes de presupuesto",
      description: "Recopila todos los detalles del proyecto antes de que el cliente te contacte por WhatsApp.",
    },
  ]

  const tools = [
    {
      name: "Inkup",
      pros: [
        "Sin fricción para el cliente",
        "Conecta directo a WhatsApp",
        "Sin necesidad de web",
        "Gratis para empezar",
      ],
      cons: [],
      recommended: true,
    },
    {
      name: "Google Forms",
      pros: ["Gratuito", "Fácil de usar"],
      cons: [
        "No conecta directo a WhatsApp",
        "El cliente debe rellenar y luego escribirte",
        "Más pasos = menos conversiones",
      ],
      recommended: false,
    },
    {
      name: "Typeform",
      pros: ["Diseño atractivo"],
      cons: ["De pago", "No conecta directo a WhatsApp", "Requiere pasos adicionales"],
      recommended: false,
    },
  ]

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* ¿Qué es un formulario conectado a WhatsApp? */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              ¿Qué es un formulario conectado a WhatsApp?
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl leading-relaxed mb-6">
                Un formulario conectado a WhatsApp es una herramienta que permite a tus clientes responder preguntas
                específicas sobre tu servicio, y automáticamente envía esa información organizada directamente a tu
                WhatsApp como un mensaje estructurado.
              </p>
              <p className="text-lg leading-relaxed">
                En lugar de recibir mensajes como <em>"Hola, ¿cuánto cuesta?"</em>, recibes mensajes completos con toda
                la información que necesitas: <strong>nombre, servicio de interés, presupuesto, disponibilidad</strong>{" "}
                y cualquier detalle específico que hayas configurado.
              </p>
            </div>
          </motion.div>

          {/* Casos de uso */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">
              Casos de uso: reservas, consultas, presupuestos
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-[#D7277D] bg-opacity-10 rounded-lg flex items-center justify-center text-[#D7277D]">
                      {useCase.icon}
                    </div>
                    <h3 className="text-xl font-bold text-black">{useCase.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{useCase.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Herramientas disponibles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">
              Herramientas disponibles para hacer un formulario en WhatsApp
            </h2>
            <div className="space-y-6">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className={`bg-white p-6 rounded-xl border-2 ${tool.recommended ? "border-[#D7277D] shadow-lg" : "border-gray-200"}`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-black">{tool.name}</h3>
                    {tool.recommended && (
                      <div className="bg-[#D7277D] text-white px-3 py-1 rounded-full text-sm font-bold">
                        Recomendado
                      </div>
                    )}
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-green-600 mb-3 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5" />
                        Ventajas
                      </h4>
                      <ul className="space-y-2">
                        {tool.pros.map((pro, proIndex) => (
                          <li key={proIndex} className="text-gray-700 flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {tool.cons.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-red-600 mb-3">Desventajas</h4>
                        <ul className="space-y-2">
                          {tool.cons.map((con, conIndex) => (
                            <li key={conIndex} className="text-gray-700 flex items-start gap-2">
                              <span className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0">×</span>
                              {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Ventajas de Inkup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">
              ¿Por qué Inkup es la mejor opción para hacer un formulario en WhatsApp?
            </h2>
            <div className="bg-white p-8 rounded-xl shadow-sm border">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#D7277D] bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Zap className="w-5 h-5 text-[#D7277D]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black mb-2">Sin fricción</h3>
                      <p className="text-gray-600">
                        Tu cliente responde las preguntas y automáticamente se abre WhatsApp con el mensaje ya escrito.
                        Solo tiene que darle enviar.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#D7277D] bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-[#D7277D]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black mb-2">No necesitas web</h3>
                      <p className="text-gray-600">
                        Te damos un enlace directo que puedes compartir en redes sociales, Google My Business o donde
                        quieras.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#D7277D] bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-[#D7277D]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black mb-2">Ahorra tiempo</h3>
                      <p className="text-gray-600">
                        Deja de responder las mismas preguntas una y otra vez. Recibe toda la información organizada
                        desde el primer mensaje.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#D7277D] bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="w-5 h-5 text-[#D7277D]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black mb-2">Más conversiones</h3>
                      <p className="text-gray-600">
                        Al reducir la fricción, más clientes potenciales completarán el proceso y te contactarán.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA interno */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-r from-purple-600 to-pink-600 p-8 rounded-xl text-white"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">¿Listo para crear tu formulario en WhatsApp?</h2>
            <p className="text-xl mb-6 opacity-90">
              Sigue nuestra guía paso a paso y tendrás tu formulario funcionando en menos de 5 minutos.
            </p>
            <Link
              href="/crear-formulario-whatsapp"
              className="inline-flex items-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Ir al creador de formularios <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
