import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFormHero } from "@/components/whatsapp-form-hero"
import { WhatsAppFormBenefits } from "@/components/whatsapp-form-benefits"
import { WhatsAppFormTestimonials } from "@/components/whatsapp-form-testimonials"
import { WhatsAppFormSteps } from "@/components/whatsapp-form-steps"
import { WhatsAppFormFAQ } from "@/components/whatsapp-form-faq"
import { WhatsAppFormCTA } from "@/components/whatsapp-form-cta"

export const metadata: Metadata = {
  title: "Crear formulario para WhatsApp sin código | Inkup",
  description:
    "Crea tu formulario conectado a WhatsApp sin necesidad de web ni programación. Empieza gratis con Inkup.",
  keywords: "formulario whatsapp, crear formulario sin código, whatsapp business, formulario online, inkup",
  openGraph: {
    title: "Crear formulario para WhatsApp sin código | Inkup",
    description:
      "Crea tu formulario conectado a WhatsApp sin necesidad de web ni programación. Empieza gratis con Inkup.",
    url: "https://inkup.io/crear-formulario-whatsapp",
    siteName: "Inkup",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/inkup%20logo%20png-59Er5aqpOGAQMr6kvchos4u9fWUp00.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  alternates: {
    canonical: "https://inkup.io/crear-formulario-whatsapp",
  },
}

export default function CrearFormularioWhatsAppPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <WhatsAppFormHero />
        <WhatsAppFormBenefits />
        <WhatsAppFormTestimonials />
        <WhatsAppFormSteps />
        <WhatsAppFormFAQ />
        <WhatsAppFormCTA />
      </main>
      {/* FAQ Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "¿Necesito tener web?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No, te damos un enlace directo para compartir. Puedes usarlo en redes sociales, Google My Business, tarjetas o donde quieras sin tener web.",
                },
              },
              {
                "@type": "Question",
                name: "¿Funciona con WhatsApp Business?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sí, funciona con cualquier cuenta de WhatsApp: personal, Business o Business API. Solo necesitas tu número de teléfono para recibir las consultas organizadas.",
                },
              },
              {
                "@type": "Question",
                name: "¿El asistente se traduce en el idioma de mi cliente?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sí! El asistente se adaptará al idioma que tu cliente tenga establecido en su dispositivo. Además, dentro del asistente podrá cambiar el idioma sobre la marcha de manera manual en cualquier momento.",
                },
              },
              {
                "@type": "Question",
                name: "¿Puedo personalizarlo visualmente?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sí, en el momento en el que te suscribas a un plan de inkup podrás adaptar la apariencia de tu asistente modificando la paleta de colores, imagen de fondo. etc, dándole a tus clientes una experiencia única.",
                },
              },
              {
                "@type": "Question",
                name: "¿Qué incluye el plan gratuito?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Este plan incluye hasta 11 leads gratuitos, acceso al dashboard de rendimiento para monitorizar tus métricas y el panel de consultas básico, de cara a que puedas probar el valor que te aporta tu asistente.",
                },
              },
              {
                "@type": "Question",
                name: "Tengo ya un CRM o programa, ¿es compatible?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sí, Inkup es compatible con cualquier programa de gestión de clientes, ya que te ayuda a gestionar ese cliente potencial antes de que llegue a convertise en cliente, y tras ello puedes exportar toda la base de clientes potenciales en un archivo hacia la herramienta que desees. También se adapta a tu web a través de un iframe en modo de botón flotante o asistente embebido, cualquier duda solo contacta al equipo y se adaptarán a tus soluciones.",
                },
              },
            ],
          }),
        }}
      />
      <Footer />
    </div>
  )
}
