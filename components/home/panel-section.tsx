"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { PanelDemo } from "./panel-demo"

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
          className="text-center max-w-3xl mx-auto mb-10 space-y-4"
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-purple-600">Y además</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Todas tus consultas en un solo sitio</h2>
          <p className="text-xl text-muted-foreground">
            Mira cómo llega una consulta nueva, se filtra y se responde desde el panel. Dale al play.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-3 md:p-6 border border-gray-700/50 shadow-xl max-w-6xl mx-auto"
        >
          <PanelDemo />
        </motion.div>

        <ul className="mt-10 grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
          {POINTS.map((p) => (
            <li key={p} className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center mt-0.5">
                <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
              </div>
              <span className="text-muted-foreground leading-relaxed">{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
