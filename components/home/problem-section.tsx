"use client"

import { motion } from "framer-motion"
import { Check, X } from "lucide-react"

const DMS = [
  { text: "Hola! cuánto costaría un tattoo?", when: "hace 2 h" },
  { text: "Holaa tienes hueco este mes?", when: "hace 3 h" },
  { text: "Precio de esto 👇 (foto)", when: "ayer" },
  { text: "hola, haces fine line?", when: "ayer" },
  { text: "Buenas, info de precios porfa", when: "hace 2 días" },
  { text: "Cuánto por una frase en el antebrazo", when: "hace 3 días" },
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
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Quien tatúa no puede contestar DMs con la aguja en la mano.
            </h2>
            <ul className="space-y-4">
              <li className="flex gap-4 items-start">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-red-100 text-red-600 flex items-center justify-center">
                  <X className="w-4 h-4" strokeWidth={3} />
                </span>
                <p className="text-lg text-muted-foreground">
                  Llegan decenas de «¿cuánto cuesta?» sin estilo, zona ni tamaño.
                </p>
              </li>
              <li className="flex gap-4 items-start">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-red-100 text-red-600 flex items-center justify-center">
                  <X className="w-4 h-4" strokeWidth={3} />
                </span>
                <p className="text-lg text-muted-foreground">
                  Cada precio exige cinco mensajes de ida y vuelta. Muchos clientes se van antes.
                </p>
              </li>
              <li className="flex gap-4 items-start">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white flex items-center justify-center">
                  <Check className="w-4 h-4" strokeWidth={3} />
                </span>
                <p className="text-lg font-medium">
                  Con Inkup, el primer mensaje que te llega ya trae todo lo necesario para dar precio.
                </p>
              </li>
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
