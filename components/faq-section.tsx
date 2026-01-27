"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { usePathname } from "next/navigation"

export function FaqSection() {
  const pathname = usePathname()
  const showAdditionalFaqs = pathname === "/" || pathname === "/landing-tattoo"

  return (
    <section className="w-full py-16 md:py-24 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">FAQs</h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>¿Necesito tener web?</AccordionTrigger>
              <AccordionContent>
                No, te damos un enlace directo para compartir. Puedes usarlo en tus redes sociales, Google My Business,
                tarjetas de visita o donde quieras sin necesidad de tener una página web.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>¿Funciona con WhatsApp Business?</AccordionTrigger>
              <AccordionContent>
                Sí, funciona con cualquier cuenta de WhatsApp: personal, Business o Business API. Solo necesitas tu
                número de teléfono para recibir las consultas organizadas.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>¿El asistente se traduce en el idioma de mi cliente?</AccordionTrigger>
              <AccordionContent>
                Sí! El asistente se adaptará al idioma que tu cliente tenga establecido en su dispositivo. Además,
                dentro del asistente podrá cambiar el idioma sobre la marcha de manera manual en cualquier momento.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>¿Puedo personalizarlo visualmente?</AccordionTrigger>
              <AccordionContent>
                Sí, en el momento en el que te suscribas a un plan de inkup podrás adaptar la apariencia de tu asistente
                modificando la paleta de colores, imagen de fondo. etc, dándole a tus clientes una experiencia única.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>¿Qué incluye cada plan?</AccordionTrigger>
              <AccordionContent>
               Puedes verlo todo en la sección de precios, pero la principal diferencia entre ambos planes es el límite de consultas que puedes gestionar al mes.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger>Tengo ya un CRM o programa, ¿es compatible?</AccordionTrigger>
              <AccordionContent>
                Sí, Inkup es compatible con cualquier programa de gestión de clientes, ya que te ayuda a gestionar ese
                cliente potencial antes de que llegue a convertise en cliente, y tras ello puedes exportar toda la base
                de clientes potenciales en un archivo hacia la herramienta que desees. También se adapta a tu web a
                través de un iframe en modo de botón flotante o asistente embebido, cualquier duda solo contacta al
                equipo y se adaptarán a tus soluciones.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger>¿Puedo cancelarlo cuando quiera?</AccordionTrigger>
              <AccordionContent>
                Sí, puedes cancelarlo cuando quieras, no tienes ninguna permanencia. Tanto en el plan anual como en el
                mensual.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9">
              <AccordionTrigger>¿Se puede devolver el dinero si no me sirvió?</AccordionTrigger>
              <AccordionContent>
                Si, el dinero se puede devolver, hasta 11 después de la compra. Solo para los alumnos de la MasterClass.
              </AccordionContent>
            </AccordionItem>

            {showAdditionalFaqs && (
              <>
                <AccordionItem value="item-10">
                  <AccordionTrigger>¿Si no tengo experiencia me servirá?</AccordionTrigger>
                  <AccordionContent>
                   Inkup es una herramienta pensada y creada para personas no técnicas, lo más intuitiva, sencilla y clara posible.
                    No importa que seas un experto en marketing,
                    elige tu estrategia y ponla en marcha con anuncios o redes sociales y empezarás a ver gente
                    preguntando en tu WhatsApp con mensajes ya cualificados!
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-11">
                  <AccordionTrigger>¿Que pasará una vez pague la suscripción?</AccordionTrigger>
                  <AccordionContent>
                    Tras la confirmación de tu suscripción a Inkup se enviará automáticamente a un mensaje con un enlace para que procedas a dar de alta tu cuenta.
                    <br />
                    <br />
                    Para cualquier consulta o pregunta estamos en WhatsApp.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-12">
                  <AccordionTrigger>¿Para quién es Inkup?</AccordionTrigger>
                  <AccordionContent>
                    Inkup está probado con más de 3K profesionales que han usado la plataforma y han ahorrado miles de horas. Principalmente va dirigida a aquellos profesionales que reciben un alto volumen de consultas y están 24/7 pegado al teléfono.
                    Tenemos cientos de casos de éxito de diferentes negocios.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-13">
                  <AccordionTrigger>¿Lo podré comprar con mi moneda?</AccordionTrigger>
                  <AccordionContent>
                    Sí, por supuesto que sí, el precio está puesto en euros, pero se convierte automáticamente a tu
                    moneda local sea del país que seas.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-14">
                  <AccordionTrigger>Si quiero darme de baja ¿podré hacerlo?</AccordionTrigger>
                  <AccordionContent>
                    Tan solo con escribirnos, el equipo procederá a dar la baja del plan al momento. El mes vigente no se devolvería el dinero.
                  </AccordionContent>
                </AccordionItem>
              </>
            )}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
