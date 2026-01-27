"use client"

import Link from "next/link"
import { ArrowRight, Brush, Building, MessageSquare, Calendar, Users, CircleDot, Zap } from "lucide-react"
import { motion } from "framer-motion"

const businessTypes = [
  {
    title: "Para Estudios de Tatuaje",
    description: "Gestiona múltiples artistas, centraliza consultas y optimiza la agenda del estudio.",
    icon: <Building className="w-6 h-6" />,
    href: "/soluciones/software-para-estudios-de-tatuaje",
  },
  {
    title: "Para Artistas Independientes",
    description: "Crea tu formulario conectado a WhatsApp y recibe solo solicitudes reales con toda la información.",
    icon: <Brush className="w-6 h-6" />,
    href: "/soluciones/formulario-whatsapp-tatuadores",
  },
  {
    title: "Para Estudios de Piercing",
    description: "Gestiona consultas sobre tipos de piercing, precios y citas de forma automatizada.",
    icon: <CircleDot className="w-6 h-6" />,
    href: "/soluciones/estudios-piercing",
  },
  {
    title: "Para Tattoo Removal",
    description: "Automatiza consultas sobre eliminación de tatuajes, sesiones necesarias y resultados esperados.",
    icon: <Zap className="w-6 h-6" />,
    href: "/soluciones/tattoo-removal",
  },
]

const useCases = [
  {
    title: "Gestión de Consultas",
    description: "Automatiza las preguntas frecuentes y monitoriza tus leads disponibles con un panel centralizado.",
    icon: <MessageSquare className="w-6 h-6" />,
    href: "/soluciones/gestion-consultas",
  },
  {
    title: "Reserva de Citas",
    description: "Facilita a tus clientes la reserva de citas y visualiza el tiempo ahorrado en tu dashboard.",
    icon: <Calendar className="w-6 h-6" />,
    href: "/soluciones/reserva-citas",
  },
  {
    title: "Captación de Clientes",
    description: "Convierte visitantes en leads cualificados y haz seguimiento de su rendimiento en tiempo real.",
    icon: <Users className="w-6 h-6" />,
    href: "/soluciones/captacion-clientes",
  },
]

export function SolutionsGrid() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          {/* Por Tipo de Negocio */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-2xl font-semibold text-gray-500 mb-2">POR TIPO DE NEGOCIO</h2>
              <div className="h-1 w-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
            </motion.div>

            <div className="space-y-8">
              {businessTypes.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={item.href}
                    className="block p-6 border border-gray-200 rounded-lg hover:border-purple-300 transition-all hover:shadow-md"
                  >
                    <div className="flex items-start gap-4">
                      <div className="rounded-full p-3 bg-purple-100 text-purple-600">{item.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2 flex items-center group-hover:text-purple-600">
                          {item.title}{" "}
                          <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Por Caso de Uso */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-2xl font-semibold text-gray-500 mb-2">POR CASO DE USO</h2>
              <div className="h-1 w-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
            </motion.div>

            <div className="space-y-8">
              {useCases.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={item.href}
                    className="block p-6 border border-gray-200 rounded-lg hover:border-pink-300 transition-all hover:shadow-md"
                  >
                    <div className="flex items-start gap-4">
                      <div className="rounded-full p-3 bg-pink-100 text-pink-600">{item.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2 flex items-center group-hover:text-pink-600">
                          {item.title}{" "}
                          <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
