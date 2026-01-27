"use client"

import { Smartphone, Zap, MessageSquare } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export function WhatsAppFormBenefits() {
  const benefits = [
    {
      icon: <MessageSquare className="w-8 h-8 text-[#D7277D]" />,
      title: "Conversaciones naturales",
      description:
        "Tu asistente virtual habla como tú y guía a los clientes paso a paso para obtener toda la información necesaria.",
    },
    {
      icon: <Zap className="w-8 h-8 text-[#D7277D]" />,
      title: "Respuestas al instante",
      description: "Tus clientes reciben respuestas inmediatas 24/7, incluso cuando estás ocupado o fuera de horario.",
    },
    {
      icon: <Smartphone className="w-8 h-8 text-[#D7277D]" />,
      title: "Funciona en cualquier dispositivo",
      description: "Móvil, tablet, ordenador... tu formulario se adapta perfectamente a cualquier pantalla.",
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
            ¿Por qué usar un asistente virtual conectado a WhatsApp?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Imagen del formulario real */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              <Image
                src="/images/design-mode/image%281%29%281%29%281%29%281%29%281%29(1).png"
                alt="Ejemplo de conversación con asistente virtual de Inkup en WhatsApp"
                width={280}
                height={560}
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-3 shadow-lg">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          </motion.div>

          {/* Beneficios */}
          <div className="space-y-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0">{benefit.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
