"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const FAQS = [
  {
    q: "¿Es un bot dentro de WhatsApp?",
    a: "No. Tu asistente es un enlace que se abre como cualquier otro, con forma de chat. Al terminar, tu cliente pulsa «Enviar por WhatsApp» y se le abre WhatsApp contigo con el mensaje ya escrito. Desde ahí, es una conversación normal entre tu cliente y tú.",
  },
  {
    q: "¿Contesta en mi lugar?",
    a: "No. Solo recoge la información necesaria para dar precio. El presupuesto y la conversación los llevas tú.",
  },
  {
    q: "¿Mi cliente tiene que instalar o registrarse en algo?",
    a: "No. El enlace se abre directamente en el móvil, sin registro ni descarga. Solo necesita tener WhatsApp.",
  },
  {
    q: "¿Cómo funciona la prueba gratuita?",
    a: "Te registras con tu Instagram y tu asistente queda listo en un minuto. Tienes 7 días para usarlo sin límite de consultas. Añades la tarjeta al empezar, pero hoy no pagas nada: el primer cobro es al terminar la prueba, y puedes cancelar desde tu cuenta en cualquier momento.",
  },
  {
    q: "¿Funciona con mi WhatsApp personal o con WhatsApp Business?",
    a: "Con los dos. Solo necesitamos tu número para que las consultas te lleguen ahí. No hace falta la API de WhatsApp ni ninguna integración.",
  },
  {
    q: "¿Se adapta al idioma de mi cliente?",
    a: "Sí. El asistente se muestra en español, inglés, francés, portugués o italiano según el idioma del móvil de tu cliente, y puede cambiarlo sobre la marcha. El mensaje te llega a ti en tu idioma.",
  },
  {
    q: "¿Sirve para estudios con varias personas o para piercing?",
    a: "Sí. Para artistas independientes, estudios y piercers. Las preguntas se adaptan a tus estilos y servicios, y un estudio puede tener varios asistentes.",
  },
  {
    q: "¿Hay que saber de tecnología?",
    a: "No. Se crea desde tu Instagram en un minuto y la propia app te guía para poner el enlace en la bio y en las respuestas automáticas. Si te atascas, estamos en WhatsApp.",
  },
]

export function HomeFaq() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wider text-purple-600">Dudas frecuentes</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Lo que suelen preguntar</h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-lg">{f.q}</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
