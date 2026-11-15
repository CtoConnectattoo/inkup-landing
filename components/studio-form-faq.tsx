"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"
import { studioFaq } from "@/components/studio-faq-data"

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
            {studioFaq.map((item, index) => (
              <AccordionItem key={item.question} value={`item-${index + 1}`}>
                <AccordionTrigger className="text-left text-lg font-semibold">{item.question}</AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base leading-relaxed">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
