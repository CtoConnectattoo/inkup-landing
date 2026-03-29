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
              <AccordionTrigger className="text-left text-lg font-semibold">¿Mi cliente tiene que instalar algo?</AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                No. Tu cliente solo necesita un navegador (el que ya tiene en el móvil) y WhatsApp. Abre el enlace, responde las preguntas y le redirige a WhatsApp con el mensaje ya escrito. Sin apps, sin registros, sin fricciones.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left text-lg font-semibold">¿Cuánto tiempo tarda en configurarse?</AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Entre 5 y 10 minutos para tener un formulario funcionando. Creas el asistente, añades las preguntas que necesites (servicio, zona, disponibilidad…), previsualiza cómo lo verá el cliente y copias el enlace. Sin código ni web.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left text-lg font-semibold">
                ¿Qué pasa si el cliente no termina de rellenarlo?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Si el cliente abandona a mitad, simplemente no recibes ese mensaje en WhatsApp. No es un problema: los que sí lo terminan son consultas con contexto real. En la práctica, la tasa de finalización es alta porque el flujo es corto (3-5 preguntas) y va directo al punto.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left text-lg font-semibold">¿Necesito tener web?</AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                No, te damos un enlace directo para compartir. Puedes usarlo en tus redes sociales, Google My Business,
                tarjetas de visita o donde quieras sin necesidad de tener una página web.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left text-lg font-semibold">
                ¿Funciona con WhatsApp normal o solo con Business?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Funciona con cualquier cuenta de WhatsApp: personal, Business o Business API. Inkup genera un mensaje estructurado que llega a tu número, sea cual sea el tipo de cuenta. No necesitas WhatsApp Business para empezar.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="text-left text-lg font-semibold">
                ¿Es realmente gratuito? ¿Qué límites tiene?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Sí. El plan gratuito incluye hasta 20 consultas al mes sin tarjeta de crédito. Puedes crear tu asistente, configurar las preguntas y probarlo con clientes reales. Cuando superes ese volumen o quieras personalización de marca, puedes pasarte a un plan de pago.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger className="text-left text-lg font-semibold">
                ¿El asistente se adapta al idioma de mi cliente?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Sí. El asistente detecta el idioma configurado en el dispositivo de tu cliente y se adapta automáticamente. Además, el cliente puede cambiarlo manualmente en cualquier momento dentro del flujo.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger className="text-left text-lg font-semibold">
                ¿Puedo personalizarlo visualmente con mis colores?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Sí, con un plan de pago puedes adaptar la paleta de colores, imagen de fondo y otros elementos visuales para que el asistente refleje tu marca. En el plan gratuito el diseño es estándar pero funcional.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9">
              <AccordionTrigger className="text-left text-lg font-semibold">
                Tengo ya un CRM o programa de gestión, ¿es compatible?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Sí. Inkup actúa antes de que el cliente llegue a tu CRM: captura la información, la manda a WhatsApp y tú puedes exportar las consultas para importarlas donde quieras. También se puede integrar en tu web como botón flotante o asistente embebido.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
