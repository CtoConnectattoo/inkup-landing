import Link from "next/link"
import type React from "react"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

type Faq = {
  q: string
  /** Texto plano para el JSON-LD */
  a: string
  /** Versión con enlaces para la página (si no se indica, se usa `a`) */
  content?: React.ReactNode
}

const FAQS: Faq[] = [
  {
    q: "¿Cómo pongo un mensaje automático en Instagram?",
    a: "Conectas tu Instagram a Inkup, eliges qué lo dispara (un comentario, una respuesta a historia o una palabra en DM) y escribes el mensaje. Desde ese momento, cada persona que lo active recibe tu DM al instante.",
  },
  {
    q: "¿Es como ManyChat?",
    a: "Sí, hace lo principal que se usa de ManyChat en Instagram (comentario → DM, historias y palabras clave), pero en español, con precio fijo y con el paso a WhatsApp ya incluido. No cobramos por contacto.",
    content: (
      <>
        Sí, hace lo principal que se usa de ManyChat en Instagram (comentario → DM, historias y palabras clave), pero en
        español, con precio fijo y con el paso a WhatsApp ya incluido. No cobramos por contacto.{" "}
        <Link href="/alternativas/manychat" className="text-purple-600 underline underline-offset-2">
          Ver la comparativa con ManyChat
        </Link>
        .
      </>
    ),
  },
  {
    q: "¿Se nota que es automático?",
    a: "El mensaje lo escribes tú, con tu tono. Lo que cambia es que llega al momento.",
  },
  {
    q: "¿Qué diferencia hay con las respuestas automáticas gratis de Instagram?",
    a: "Las de Meta funcionan desde el escritorio, con pocas palabras exactas y cierto retraso. Inkup responde al momento y añade el paso a WhatsApp con la consulta completa y un panel con todos tus contactos.",
  },
  {
    q: "¿Contesta en WhatsApp por mí?",
    a: "No. En Instagram responde de forma automática; en WhatsApp te llega el cliente con su consulta escrita y la conversación la llevas tú.",
  },
  {
    q: "¿Es seguro para mi cuenta?",
    a: "Sí. Inkup se conecta a tu Instagram con la API oficial de Meta.",
  },
  {
    q: "¿Cuánto cuesta?",
    a: "Desde 12 €/mes + IVA con pago anual. 7 días de prueba y sin permanencia. Tienes todos los planes en inkup.io/precios.",
    content: (
      <>
        Desde 12 €/mes + IVA con pago anual. 7 días de prueba y sin permanencia.{" "}
        <Link href="/precios" className="text-purple-600 underline underline-offset-2">
          Ver precios
        </Link>
        .
      </>
    ),
  },
  {
    q: "¿Funciona en mi país?",
    a: "Sí. Tenemos clientes en 15 países y el asistente funciona en 5 idiomas.",
  },
]

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
}

export function HomeFaq() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wider text-purple-600">Dudas frecuentes</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Preguntas frecuentes sobre Inkup</h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-lg">{f.q}</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">{f.content ?? f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
