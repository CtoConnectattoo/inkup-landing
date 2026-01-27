"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function StudioFormSteps() {
  const steps = [
    {
      number: "1",
      title: "Configura tu estudio y artistas",
      description:
        "Añade a todos tus tatuadores, sus especialidades, horarios y precios. Personaliza el asistente para cada artista.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-oEEibQqdHMlIoQoehYfDR3f5tDNxiz.png",
    },
    {
      number: "2",
      title: "Centraliza todas las consultas",
      description:
        "Recibe todas las consultas en un panel unificado, organizadas por artista, estilo y fecha de solicitud.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-fiWwRe1AIPWR2suLlJsIg7OkodmySC.png",
    },
    {
      number: "3",
      title: "Monitoriza el rendimiento del estudio",
      description: "Ve métricas de cada artista, leads capturados, conversiones y tiempo ahorrado en gestión.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lUMtoWx2WIhnrWHge11uYdds7zO8tn.png",
    },
  ]

  return (
    <section className="bg-white py-16 md:py-24 text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Cómo funciona para estudios</h2>
          <p className="text-xl text-gray-600">En 3 pasos tienes tu estudio completamente digitalizado y optimizado</p>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center justify-items-center ${index % 2 === 1 ? "md:grid-flow-col-dense" : ""}`}
            >
              <div className={`space-y-6 text-left md:text-left ${index % 2 === 1 ? "md:col-start-2" : ""}`}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#D7277D] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{step.number}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-black">{step.title}</h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">{step.description}</p>
              </div>

              <div className={`${index % 2 === 1 ? "md:col-start-1" : ""} flex justify-center`}>
                <div className="relative">
                  <Image
                    src={step.image || "/placeholder.svg"}
                    alt={step.title}
                    width={280}
                    height={560}
                    className="rounded-2xl shadow-xl"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
