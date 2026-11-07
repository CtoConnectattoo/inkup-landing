"use client"

import { motion } from "framer-motion"
import { X } from "lucide-react"

const DMS = [
  { text: "PRECIO", when: "comentó tu Reel · hace 2 h" },
  { text: "info del bono de 10 sesiones?", when: "hace 3 h" },
  { text: "¿Tienes talla M? 👇 (foto)", when: "ayer" },
  { text: "LINK", when: "respondió a tu historia · ayer" },
  { text: "Buenas, info de precios porfa", when: "hace 2 días" },
  { text: "¿Hay hueco para una cita esta semana?", when: "hace 3 días" },
]

const PROBLEMS = [
  {
    title: "«Precio», «info», «link»… cien veces.",
    text: "Cada comentario que contestas a mano llega tarde, y muchos no los contestas.",
  },
  {
    title: "Diez mensajes para dar un precio o una cita.",
    text: "El cliente pregunta, tú preguntas, y se enfría por el camino.",
  },
  {
    title: "Herramientas en inglés que cobran por contacto.",
    text: "Cuanto mejor te va, más pagas.",
  },
]

export function ProblemSection() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-purple-600">El problema</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">¿Sigues contestando Instagram a mano?</h2>
            <ul className="space-y-4">
              {PROBLEMS.map((p) => (
                <li key={p.title} className="flex gap-4 items-start">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-red-100 text-red-600 flex items-center justify-center">
                    <X className="w-4 h-4" strokeWidth={3} />
                  </span>
                  <p className="text-lg text-muted-foreground">
                    <strong className="text-foreground font-semibold">{p.title}</strong> {p.text}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="demo"
          >
            <div className="dm-wall shadow-xl" aria-label="Bandeja de mensajes de Instagram desbordada">
              <span className="absolute top-4 right-4 bg-red-500 text-white font-bold text-sm px-3 py-1 rounded-full">
                47 sin leer
              </span>
              {DMS.map((dm) => (
                <div className="dm" key={dm.text}>
                  <span className="av" />
                  <div>
                    <div className="b">{dm.text}</div>
                    <div className="t">{dm.when}</div>
                  </div>
                </div>
              ))}
              <div className="fade" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
