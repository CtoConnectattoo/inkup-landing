"use client"

import type React from "react"

import { motion } from "framer-motion"
import Image from "next/image"

interface WhatsAppFormStepsProps {
  title?: React.ReactNode
  description?: string
}

export function WhatsAppFormSteps({ title, description }: WhatsAppFormStepsProps = {}) {
  const features = [
    {
      tag: "Asistente hecho por y para a ti",
      title: "Crea tu asistente en segundos y compártelo",
      benefits: [
        "Atiende a tus clientes 24/7 mientras duermes",
        "Tu asistente filtra a los curiosos",
        "Recoge la información necesaria de cada un@: Descripción, Tamaño, Urgencia, Imágenes, Zona...",
        "Recíbela en Whatsapp en un único mensaje",
      ],
      video:
        "https://firebasestorage.googleapis.com/v0/b/inkup-landing/o/assistant-video-1759495285193.mp4?alt=media&token=1e490440-83f2-493b-ac6f-b943dc6fcb01",
    },
    {
      tag: "Gestión mágica de cotizaciones",
      title: "Inbox inteligente",
      benefits: [
        "Gestiona tu flujo de cotizaciones y clientes como nunca antes",
        "Arrastra cada cliente por fase: Nueva conversación, Conversación, Interesad@, Cita/Cliente, Post...",
        "Súper sencillo y visual, sabes en todo momento en qué fase se encuentran",
      ],
      video:
        "https://firebasestorage.googleapis.com/v0/b/inkup-landing/o/inbox%20video-1759493936827.mp4?alt=media&token=475760f2-9b98-435d-895a-b079dfadbc8a",
    },
    {
      tag: "Atiende antes, ingresa más",
      title: "Cierra más citas y visualiza tus ingresos",
      benefits: [
        "Filtra por urgencia de cada cita y contestas a quien antes lo necesita.",
        "Marca como cliente cada cotización y asígnale un precio",
        "Siéntate y mira cuánto has generado",
      ],
      video:
        "https://firebasestorage.googleapis.com/v0/b/inkup-landing/o/filter-landing-2.mp4?alt=media&token=8240a52b-12b1-452a-a487-4d3ff45e6abf",
    },
    {
      tag: "Marketing directo",
      title: "Crea campañas en Instagram y Facebook con tu asistente",
      benefits: [
        "Añade tu pixel de meta a tu asistente y crea campañas",
        "Optimiza las campañas y recibe todas las cotizaciones filtradas en Whatsapp",
      ],
      video:
        "https://firebasestorage.googleapis.com/v0/b/inkup-landing/o/pixel-landing-2.mp4?alt=media&token=4545040a-3c5e-44b7-ae1d-3e22d83dc4de",
    },
  ]

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            {title || (
              <>
                ¿Cómo funciona{" "}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Inkup?
                </span>
              </>
            )}
          </h2>
          <p className="text-lg text-gray-600 mt-4">{description || "Esto es todo lo que puedes hacer"}</p>
        </motion.div>

        <div className="space-y-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700/50 shadow-xl flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 items-center`}
            >
              {/* Image/Video with tag */}
              <div className="relative w-full lg:w-1/2 flex-shrink-0">
                <div className="relative rounded-xl overflow-hidden border border-gray-700/50">
                  {feature.video ? (
                    <video src={feature.video} autoPlay loop muted playsInline className="w-full h-auto" />
                  ) : (
                    <Image
                      src={feature.image || "/placeholder.svg"}
                      alt={feature.title}
                      width={600}
                      height={400}
                      className="w-full h-auto"
                    />
                  )}
                </div>
                <div className="absolute -top-3 left-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full font-semibold text-sm shadow-lg">
                  {feature.tag}
                </div>
              </div>

              {/* Text content */}
              <div className="w-full lg:w-1/2">
                <h3 className="text-2xl font-bold text-white mb-6">{feature.title}</h3>

                <ul className="space-y-3">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 flex items-center justify-center mt-0.5">
                        <svg
                          className="w-3 h-3 text-purple-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={3}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <span className="text-gray-300 leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
