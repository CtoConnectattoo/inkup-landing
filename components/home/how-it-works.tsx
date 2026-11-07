"use client"

import { motion } from "framer-motion"

const STEPS = [
  {
    k: "1 · Tú lo configuras",
    title: "Elige la palabra y el mensaje",
    text: "Por ejemplo: quien comente PRECIO recibe tu enlace por DM. Funciona en comentarios, respuestas a historias y DMs.",
    art: (
      <div className="mini-chat">
        <div className="m">Si comentan…</div>
        <div className="m me">PRECIO</div>
        <div className="m">…enviar por DM:</div>
        <div className="m me">¡Hola! Aquí tienes los precios 👉</div>
      </div>
    ),
  },
  {
    k: "2 · Inkup responde",
    title: "Inkup responde al momento",
    text: "Cada persona recibe su DM, aunque te comenten cien a la vez.",
    art: (
      <div className="mini-chat">
        <div className="m me">PRECIO</div>
        <div className="m">¡Hola! Aquí tienes los precios 👉</div>
        <div className="m me">INFO</div>
        <div className="m">Te lo cuento todo por aquí 👇</div>
      </div>
    ),
  },
  {
    k: "3 · Tu WhatsApp",
    title: "El cliente llega a WhatsApp con todo escrito",
    text: "Si quiere precio o cita, el asistente le pregunta lo necesario y le abre WhatsApp contigo con el mensaje listo. Tú solo das precio.",
    art: (
      <div className="quote">
        <div className="q-msg">
          <b>Lucía</b> · 12:35
          <ul>
            <li>Servicio: Limpieza facial</li>
            <li>Cuándo: Esta semana</li>
            <li>Horario: Por la tarde</li>
            <li>Primera vez: Sí</li>
          </ul>
        </div>
        <div className="q-save">
          ✓ Consulta completa<small>Sin ida y vuelta de preguntas</small>
        </div>
      </div>
    ),
  },
]

const SECTORS = [
  "Tiendas",
  "Estética y belleza",
  "Clínicas",
  "Academias y formación",
  "Fitness",
  "Restaurantes",
  "Coaches y creadores",
  "Agencias",
  "Tatuaje y piercing",
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-16 md:py-24 bg-white scroll-mt-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 space-y-4"
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-purple-600">Cómo funciona</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Así funciona</h2>
        </motion.div>

        <div className="demo grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
          {STEPS.map((s, i) => (
            <motion.article
              key={s.k}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col gap-4"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-purple-600">{s.k}</span>
              <div className="h-40 rounded-xl bg-gray-50 border border-dashed border-gray-200 grid place-items-center p-3 overflow-hidden">
                {s.art}
              </div>
              <h3 className="text-xl font-bold leading-tight">{s.title}</h3>
              <p className="text-muted-foreground">{s.text}</p>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto mt-6 rounded-2xl bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-100 p-6 md:p-8 text-center md:text-left"
        >
          <h3 className="text-xl font-bold leading-tight mb-2">Y si prefieres, pídeselo a ChatGPT</h3>
          <p className="text-muted-foreground">
            Con el conector de Inkup creas, pausas o revisas tus automatizaciones de Instagram hablando con ChatGPT o
            Claude.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto mt-12 text-center">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-purple-600 mb-4">
            Para cualquier negocio que vende o atiende por Instagram
          </h3>
          <ul className="flex flex-wrap justify-center gap-2">
            {SECTORS.map((sector) => (
              <li
                key={sector}
                className="px-4 py-2 rounded-full border border-gray-200 bg-white text-sm font-medium text-gray-700"
              >
                {sector}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
