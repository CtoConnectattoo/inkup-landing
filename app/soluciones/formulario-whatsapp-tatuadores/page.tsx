import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TattooFormHero } from "@/components/tattoo-form-hero"
import { TattooFormBenefits } from "@/components/tattoo-form-benefits"
import { TattooFormSteps } from "@/components/tattoo-form-steps"
import { TattooFormTestimonial } from "@/components/tattoo-form-testimonial"
import { TattooFormReviews } from "@/components/tattoo-form-reviews"
import { TattooFormResources } from "@/components/tattoo-form-resources"
import { TattooFormFAQ } from "@/components/tattoo-form-faq"
import { TattooFormCTA } from "@/components/tattoo-form-cta"

export const metadata: Metadata = {
  title: "Formulario WhatsApp para tatuadores sin web ni apps | Inkup",
  description: "Crea un formulario conectado a tu WhatsApp y recibe solo solicitudes reales de tus clientes.",
  keywords:
    "formulario whatsapp tatuadores, formulario tatuajes, whatsapp tatuadores, solicitudes tatuajes, inkup tatuadores",
  openGraph: {
    title: "Formulario WhatsApp para tatuadores sin web ni apps | Inkup",
    description: "Crea un formulario conectado a tu WhatsApp y recibe solo solicitudes reales de tus clientes.",
    url: "https://inkup.io/soluciones/formulario-whatsapp-tatuadores",
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
    canonical: "https://inkup.io/soluciones/formulario-whatsapp-tatuadores",
  },
}

export default function FormularioWhatsAppTatuadoresPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <TattooFormHero />
        <TattooFormReviews />
        <TattooFormBenefits />
        <TattooFormSteps />
        <TattooFormTestimonial />
        <TattooFormResources />
        <TattooFormFAQ />
        <TattooFormCTA />
      </main>
      <Footer />

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
                name: "¿Necesito tener una web?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No, te damos un enlace directo para compartir. Puedes usarlo en Instagram, Google My Business, tarjetas de visita o donde quieras sin necesidad de tener una página web.",
                },
              },
              {
                "@type": "Question",
                name: "¿Funciona con WhatsApp normal?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sí, funciona con cualquier cuenta de WhatsApp: personal, Business o Business API. Solo necesitas tu número de teléfono para recibir las consultas organizadas.",
                },
              },
              {
                "@type": "Question",
                name: "¿Qué preguntas hace por defecto?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Por defecto pregunta sobre el estilo de tatuaje, zona del cuerpo, tamaño aproximado, presupuesto estimado y disponibilidad. Puedes personalizar todas las preguntas según tus necesidades.",
                },
              },
              {
                "@type": "Question",
                name: "¿Puedo personalizar el diseño del formulario?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sí, puedes personalizar los colores, imagen de fondo, logo y preguntas del formulario para que coincida con tu marca personal sin necesidad de programar.",
                },
              },
              {
                "@type": "Question",
                name: "¿Puedo compartirlo en Instagram o QR?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Absolutamente. Puedes compartir el enlace en Instagram Stories, posts, bio, generar códigos QR para tarjetas de visita, o usarlo en Google My Business.",
                },
              },
              {
                "@type": "Question",
                name: "¿Incluye una opción gratuita?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sí, puedes empezar gratis con hasta 11 consultas al mes. Es perfecto para probar cómo funciona antes de decidir si quieres más capacidad.",
                },
              },
            ],
          }),
        }}
      />
    </div>
  )
}
