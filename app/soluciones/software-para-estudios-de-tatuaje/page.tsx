import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StudioFormHero } from "@/components/studio-form-hero"
import { StudioFormBenefits } from "@/components/studio-form-benefits"
import { StudioFormSteps } from "@/components/studio-form-steps"
import { StudioFormReviews } from "@/components/studio-form-reviews"
import { StudioFormFAQ } from "@/components/studio-form-faq"
import { StudioFormCTA } from "@/components/studio-form-cta"

export const metadata: Metadata = {
  title: "Software para estudios de tatuaje | Gestiona múltiples artistas | Inkup",
  description:
    "Software especializado para estudios de tatuaje. Gestiona múltiples artistas, centraliza consultas y optimiza la agenda del estudio con Inkup.",
  keywords:
    "software estudios tatuaje, gestión estudio tatuajes, automatización consultas tatuajes, software gestión tatuadores",
  openGraph: {
    title: "Software para estudios de tatuaje | Gestiona múltiples artistas | Inkup",
    description:
      "Software especializado para estudios de tatuaje. Gestiona múltiples artistas, centraliza consultas y optimiza la agenda del estudio con Inkup.",
    url: "https://inkup.io/soluciones/software-para-estudios-de-tatuaje",
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
    canonical: "https://inkup.io/soluciones/software-para-estudios-de-tatuaje",
  },
}

export default function SoftwareParaEstudiosDeTatuajePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <StudioFormHero />
        <StudioFormReviews />
        <StudioFormBenefits />
        <StudioFormSteps />
        <StudioFormFAQ />
        <StudioFormCTA />
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
                name: "¿Puedo gestionar múltiples artistas?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sí, puedes añadir todos los tatuadores de tu estudio, configurar sus especialidades, horarios y precios. Cada artista tendrá su propio perfil y las consultas se dirigirán automáticamente al artista correcto.",
                },
              },
              {
                "@type": "Question",
                name: "¿Cómo se organizan las consultas por artista?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "El sistema filtra automáticamente las consultas según el estilo solicitado y la disponibilidad de cada artista. Puedes ver todas las consultas en un panel centralizado o filtrar por artista específico.",
                },
              },
              {
                "@type": "Question",
                name: "¿Puedo ver métricas de rendimiento del estudio?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Absolutamente. El dashboard te muestra leads capturados por artista, tiempo ahorrado en gestión, conversiones y rendimiento general del estudio con gráficos detallados.",
                },
              },
              {
                "@type": "Question",
                name: "¿Funciona con WhatsApp Business?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sí, funciona perfectamente con WhatsApp Business, WhatsApp Business API o cuentas personales. Puedes recibir todas las consultas organizadas en el número principal del estudio.",
                },
              },
              {
                "@type": "Question",
                name: "¿Puedo personalizar el asistente para mi estudio?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sí, puedes personalizar completamente el asistente con los colores de tu estudio, logo, preguntas específicas y información sobre cada artista sin necesidad de programar.",
                },
              },
              {
                "@type": "Question",
                name: "¿Qué incluye el plan para estudios?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "El plan incluye gestión de múltiples artistas, dashboard avanzado con métricas, panel de consultas centralizado, personalización visual completa y soporte prioritario para estudios.",
                },
              },
            ],
          }),
        }}
      />
    </div>
  )
}
