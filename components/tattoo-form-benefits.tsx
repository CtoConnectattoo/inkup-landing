"use client"

import { Shield, Filter, Palette, Share2 } from "lucide-react"
import { motion } from "framer-motion"

export function TattooFormBenefits() {
  const benefits = [
    {
      icon: <Shield className="w-8 h-8 text-[#D7277D]" />,
      title: 'Evita mensajes tipo "¿cuánto cuesta una manga?"',
      description:
        "Tu formulario filtra automáticamente las consultas vagas y te asegura que solo recibas solicitudes serias con información completa.",
    },
    {
      icon: <Filter className="w-8 h-8 text-[#D7277D]" />,
      title: "Solo recibes leads filtrados listos para agendar",
      description:
        "Cada consulta llega con estilo, zona, tamaño y presupuesto definidos. Perfecto para dar presupuestos precisos.",
    },
    {
      icon: <Palette className="w-8 h-8 text-[#D7277D]" />,
      title: "Personalizable sin saber programar",
      description:
        "Adapta las preguntas, colores y diseño del formulario para que refleje tu estilo personal como tatuador.",
    },
    {
      icon: <Share2 className="w-8 h-8 text-[#D7277D]" />,
      title: "Se comparte por Instagram, GMB o QR",
      description:
        "Un solo enlace que puedes usar en Instagram Stories, Google My Business, tarjetas de visita o códigos QR.",
    },
  ]

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            ¿Por qué necesitas un formulario inteligente para tatuajes?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">{benefit.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
