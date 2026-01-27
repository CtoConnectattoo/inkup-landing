"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"

export function StudioFormFAQ() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Preguntas frecuentes</h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left text-lg font-semibold">
                ¿Puedo gestionar múltiples artistas?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Sí, puedes añadir todos los tatuadores de tu estudio, configurar sus especialidades, horarios y precios.
                Cada artista tendrá su propio perfil y las consultas se dirigirán automáticamente al artista correcto.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left text-lg font-semibold">
                ¿Cómo se organizan las consultas por artista?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                El sistema filtra automáticamente las consultas según el estilo solicitado y la disponibilidad de cada
                artista. Puedes ver todas las consultas en un panel centralizado o filtrar por artista específico.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left text-lg font-semibold">
                ¿Puedo ver métricas de rendimiento del estudio?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Absolutamente. El dashboard te muestra leads capturados por artista, tiempo ahorrado en gestión,
                conversiones y rendimiento general del estudio con gráficos detallados.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left text-lg font-semibold">
                ¿Funciona con WhatsApp Business?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Sí, funciona perfectamente con WhatsApp Business, WhatsApp Business API o cuentas personales. Puedes
                recibir todas las consultas organizadas en el número principal del estudio.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left text-lg font-semibold">
                ¿Puedo personalizar el asistente para mi estudio?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Sí, puedes personalizar completamente el asistente con los colores de tu estudio, logo, preguntas
                específicas y información sobre cada artista sin necesidad de programar.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="text-left text-lg font-semibold">
                ¿Qué incluye el plan para estudios?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                El plan incluye gestión de múltiples artistas, dashboard avanzado con métricas, panel de consultas
                centralizado, personalización visual completa y soporte prioritario para estudios.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
