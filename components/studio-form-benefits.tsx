"use client"

import { Users, BarChart3, Calendar, Shield } from "lucide-react"
import { motion } from "framer-motion"

export function StudioFormBenefits() {
  const benefits = [
    {
      icon: <Users className="w-8 h-8 text-[#D7277D]" />,
      title: "Gestiona múltiples artistas desde un panel",
      description:
        "Administra las consultas, citas y disponibilidad de todos tus tatuadores desde una sola plataforma centralizada.",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-[#D7277D]" />,
      title: "Dashboard con métricas del estudio",
      description: "Visualiza leads capturados, tiempo ahorrado y rendimiento de cada artista en tiempo real.",
    },
    {
      icon: <Calendar className="w-8 h-8 text-[#D7277D]" />,
      title: "Optimiza la agenda del estudio",
      description: "Reduce huecos en la agenda y maximiza la ocupación de todos tus artistas automáticamente.",
    },
    {
      icon: <Shield className="w-8 h-8 text-[#D7277D]" />,
      title: "Filtra consultas por artista y estilo",
      description: "Cada consulta llega al artista correcto según su especialidad y disponibilidad.",
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
            ¿Por qué necesitas un software especializado para tu estudio?
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
