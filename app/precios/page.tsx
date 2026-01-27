import { PricingSection } from "@/components/pricing-section"
import { ReviewSection } from "@/components/review-section"
import { TestimonialVideos } from "@/components/testimonial-videos" // Added import for testimonial videos
import { Header } from "@/components/header"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Footer } from "@/components/footer"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <PricingSection />
        <ReviewSection />

        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Testimonios reales</h2>
            </div>
            <TestimonialVideos />
          </div>
        </section>

        <section className="w-full py-16 md:py-24 bg-gray-50">
          <div className="container px-4 mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">FAQs</h2>
            </div>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>¿Puedo probarlo antes?</AccordionTrigger>
                  <AccordionContent>
                    Sí, puedes empezar con nuestro plan gratuito que incluye hasta 11 consultas al mes. No necesitas
                    tarjeta de crédito y podrás probar las principales funcionalidades de la plataforma.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>¿Al hacer el pago tengo algún compromiso?</AccordionTrigger>
                  <AccordionContent>
                    No, no hay ningún compromiso de permanencia. Puedes cancelar tu suscripción en cualquier momento y
                    seguirás teniendo acceso al servicio hasta el final del período facturado.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>¿Cómo funciona la facturación?</AccordionTrigger>
                  <AccordionContent>
                    La facturación es mensual o anual, según el plan que elijas. Si optas por la facturación anual,
                    obtendrás un importante descuento. Procesamos los pagos de forma segura a través de Stripe.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>¿Qué pasa si sobrepaso el límite de consultas de mi plan?</AccordionTrigger>
                  <AccordionContent>
                    Si llegas al límite de consultas de tu plan, te notificaremos para que puedas decidir si quieres
                    actualizar a un plan superior. No se realizarán cargos adicionales automáticos.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>¿Y si no me gusta la plataforma?</AccordionTrigger>
                  <AccordionContent>
                    Si no estás satisfecho con el servicio, puedes cancelar tu suscripción en cualquier momento. No hay
                    compromisos ni contratos a largo plazo. Tu satisfacción es nuestra prioridad.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  )
}
