"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"

export function TattooFormFAQ() {
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
              <AccordionTrigger className="text-left text-lg font-semibold">¿Necesito tener una web?</AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                No, te damos un enlace directo para compartir. Puedes usarlo en Instagram, Google My Business, tarjetas
                de visita o donde quieras sin necesidad de tener una página web.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left text-lg font-semibold">
                ¿Funciona con WhatsApp normal?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Sí, funciona con cualquier cuenta de WhatsApp: personal, Business o Business API. Solo necesitas tu
                número de teléfono para recibir las consultas organizadas.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left text-lg font-semibold">
                ¿Qué preguntas hace por defecto?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Por defecto pregunta sobre el estilo de tatuaje, zona del cuerpo, tamaño aproximado, presupuesto
                estimado y disponibilidad. Puedes personalizar todas las preguntas según tus necesidades.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left text-lg font-semibold">
                ¿Puedo personalizar el diseño del formulario?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Sí, puedes personalizar los colores, imagen de fondo, logo y preguntas del formulario para que coincida
                con tu marca personal sin necesidad de programar.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left text-lg font-semibold">
                ¿Puedo compartirlo en Instagram o QR?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Absolutamente. Puedes compartir el enlace en Instagram Stories, posts, bio, generar códigos QR para
                tarjetas de visita, o usarlo en Google My Business.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="text-left text-lg font-semibold">
                ¿Incluye una opción gratuita?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Sí, puedes empezar gratis con hasta 11 consultas al mes. Es perfecto para probar cómo funciona antes de
                decidir si quieres más capacidad.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
