"use client"

import { motion } from "framer-motion"

const STEPS = [
  {
    k: "1 · Tu enlace",
    title: "Cada artista o estudio tiene su enlace",
    text: "Se crea en un minuto desde tu Instagram. Lo pones en la bio, en las respuestas automáticas y donde ya te escriben.",
    art: (
      <span className="link-chip">
        <i />
        hi.inkup.io/getinked-malaga
      </span>
    ),
  },
  {
    k: "2 · Tu cliente",
    title: "Responde con botones e imágenes",
    text: "Dentro del asistente, sin registro ni descarga. Menos de un minuto. Selectores visuales de estilo, zona y tamaño, en cinco idiomas.",
    art: (
      <div className="mini-chat">
        <div className="m">¿Qué estilo buscas?</div>
        <div className="m me">Fine line</div>
        <div className="m">¿Zona y tamaño?</div>
        <div className="m me">Antebrazo, 10 cm</div>
        <div className="m">¿Referencias? 📎</div>
      </div>
    ),
  },
  {
    k: "3 · Tu WhatsApp",
    title: "Recibes la cotización completa en un mensaje",
    text: "Todo lo que necesitas para dar precio llega de una vez. Te ahorras horas de DMs preguntando estilo, zona, tamaño y referencias.",
    art: (
      <div className="quote">
        <div className="q-msg">
          <b>Lucía</b> · 12:35
          <ul>
            <li>Servicio: Tatuaje</li>
            <li>Estilo: Fine line</li>
            <li>Zona y tamaño: Antebrazo, 10 cm</li>
            <li>Cuándo: Este mes</li>
            <li>Referencias: 1 imagen</li>
          </ul>
        </div>
        <div className="q-save">
          ✓ Todo lo necesario para cotizar<small>Sin ida y vuelta de preguntas</small>
        </div>
      </div>
    ),
  },
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
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Tres pasos. Empieza en tu enlace,{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              termina en tu WhatsApp
            </span>
            .
          </h2>
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
      </div>
    </section>
  )
}
