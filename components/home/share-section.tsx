"use client"

import { motion } from "framer-motion"
import { InstagramDemo, WhatsAppDemo } from "./share-demos"

const MORE = ["Sticker de enlace en Stories", "Bio de TikTok", "Ficha de Google", "QR en el estudio"]

export function ShareSection() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 space-y-4"
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-purple-600">Dónde compartes tu enlace</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            En los dos sitios donde ya te escriben. Dale al play.
          </h2>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-5 text-center"
          >
            <div className="space-y-1">
              <h3 className="text-2xl font-bold">Instagram</h3>
              <p className="text-muted-foreground">El enlace en la bio. Un toque y el cliente ya está en tu asistente.</p>
            </div>
            <InstagramDemo />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-5 text-center"
          >
            <div className="space-y-1">
              <h3 className="text-2xl font-bold">WhatsApp Business</h3>
              <p className="text-muted-foreground">
                Bienvenida automática con el enlace. Al rato, la consulta completa.
              </p>
            </div>
            <WhatsAppDemo />
          </motion.div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-2 text-sm text-muted-foreground">
          <span>También:</span>
          {MORE.map((m) => (
            <span key={m} className="px-3 py-1.5 rounded-full border border-gray-200 bg-white text-gray-700">
              {m}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
