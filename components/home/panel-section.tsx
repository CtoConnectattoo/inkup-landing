"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { PanelMock } from "./panel-mock"

const POINTS = [
  "Cada consulta queda guardada con sus datos, referencias y teléfono, aunque la contestes por WhatsApp. Es tu base de datos de clientes.",
  "Filtra por estado (pendiente, respondida, cliente), por servicio o por fecha, y prioriza a quien antes lo necesita.",
  "Busca cualquier consulta y exporta tu lista de clientes cuando quieras.",
]

export function PanelSection() {
  return (
    <section id="funcionalidades" className="py-16 md:py-24 bg-white scroll-mt-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-6 md:p-12 border border-gray-700/50 shadow-xl flex flex-col lg:flex-row gap-8 lg:gap-12 items-center max-w-6xl mx-auto"
        >
          <div className="w-full lg:w-[55%]">
            <PanelMock />
          </div>
          <div className="w-full lg:w-[45%] space-y-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-purple-400">Y además</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              Todas tus consultas en un solo sitio
            </h2>
            <ul className="space-y-4">
              {POINTS.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center mt-0.5">
                    <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-gray-300 text-lg leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
