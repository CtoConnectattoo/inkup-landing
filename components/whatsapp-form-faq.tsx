"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"

export function WhatsAppFormFAQ() {
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
              <AccordionTrigger className="text-left text-lg font-semibold">¿Necesito tener web?</AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                No, te damos un enlace directo para compartir. Puedes usarlo en tus redes sociales, Google My Business,
                tarjetas de visita o donde quieras sin necesidad de tener una página web.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left text-lg font-semibold">
                ¿Funciona con WhatsApp Business?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Sí, funciona con cualquier cuenta de WhatsApp: personal, Business o Business API. Solo necesitas tu
                número de teléfono para recibir las consultas organizadas.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left text-lg font-semibold">
                ¿El asistente se traduce en el idioma de mi cliente?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Sí! El asistente se adaptará al idioma que tu cliente tenga establecido en su dispositivo. Además,
                dentro del asistente podrá cambiar el idioma sobre la marcha de manera manual en cualquier momento.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left text-lg font-semibold">
                ¿Puedo personalizarlo visualmente?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Sí, en el momento en el que te suscribas a un plan de inkup podrás adaptar la apariencia de tu asistente
                modificando la paleta de colores, imagen de fondo. etc, dándole a tus clientes una experiencia única.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="text-left text-lg font-semibold">
                ¿Qué incluye el plan gratuito?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Este plan incluye hasta 11 leads gratuitos, acceso al dashboard de rendimiento para monitorizar tus
                métricas y el panel de consultas básico, de cara a que puedas probar el valor que te aporta tu
                asistente.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger className="text-left text-lg font-semibold">
                Tengo ya un CRM o programa, ¿es compatible?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Sí, Inkup es compatible con cualquier programa de gestión de clientes, ya que te ayuda a gestionar ese
                cliente potencial antes de que llegue a convertise en cliente, y tras ello puedes exportar toda la base
                de clientes potenciales en un archivo hacia la herramienta que desees. También se adapta a tu web a
                través de un iframe en modo de botón flotante o asistente embebido, cualquier duda solo contacta al
                equipo y se adaptarán a tus soluciones.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
