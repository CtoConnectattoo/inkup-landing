"use client"

import type React from "react"
import Link from "next/link"
import { ArrowRight, Brush, Building, MessageSquare, Calendar, Users, CircleDot, Zap } from "lucide-react"
import { motion } from "framer-motion"

const SECTORS = [
  "Tiendas",
  "Estética y belleza",
  "Clínicas",
  "Academias y formación",
  "Fitness",
  "Restaurantes",
  "Coaches y creadores",
  "Agencias",
]

/* Tatuaje es un sector más: sus páginas siguen publicadas y enlazadas aquí. */
const tattooPages = [
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

type Item = (typeof useCases)[number]

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-8"
    >
      <h2 className="text-2xl font-semibold text-gray-500 mb-2 uppercase">{children}</h2>
      <div className="h-1 w-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
    </motion.div>
  )
}

function ItemList({ items, tone }: { items: Item[]; tone: "purple" | "pink" }) {
  const hover = tone === "pink" ? "hover:border-pink-300" : "hover:border-purple-300"
  const icon = tone === "pink" ? "bg-pink-100 text-pink-600" : "bg-purple-100 text-purple-600"
  return (
    <div className="space-y-8">
      {items.map((item, index) => (
        <motion.div
          key={item.href}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <Link
            href={item.href}
            className={`group block p-6 border border-gray-200 rounded-lg transition-all hover:shadow-md ${hover}`}
          >
            <div className="flex items-start gap-4">
              <div className={`rounded-full p-3 ${icon}`}>{item.icon}</div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2 flex items-center">
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
  )
}

export function SolutionsGrid() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          {/* Por necesidad: vale para cualquier negocio */}
          <div>
            <SectionTitle>Por necesidad</SectionTitle>
            <ItemList items={useCases} tone="pink" />
          </div>

          {/* Por sector */}
          <div>
            <SectionTitle>Por sector</SectionTitle>
            <p className="text-muted-foreground mb-4">
              Inkup sirve para cualquier negocio que vende o atiende por Instagram:
            </p>
            <ul className="flex flex-wrap gap-2 mb-10">
              {SECTORS.map((sector) => (
                <li
                  key={sector}
                  className="px-4 py-2 rounded-full border border-gray-200 bg-white text-sm font-medium text-gray-700"
                >
                  {sector}
                </li>
              ))}
            </ul>
            <h3 className="text-lg font-semibold mb-4">Tatuaje y piercing</h3>
            <ItemList items={tattooPages} tone="purple" />
          </div>
        </div>
      </div>
    </section>
  )
}
