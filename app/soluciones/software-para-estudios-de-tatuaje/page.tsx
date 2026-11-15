import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StudioFormHero } from "@/components/studio-form-hero"
import { StudioFormBenefits } from "@/components/studio-form-benefits"
import { StudioFormSteps } from "@/components/studio-form-steps"
import { StudioFormReviews } from "@/components/studio-form-reviews"
import { StudioFormFAQ } from "@/components/studio-form-faq"
import { StudioFormCTA } from "@/components/studio-form-cta"
import { studioFaq } from "@/components/studio-faq-data"

export const metadata: Metadata = {
  title: "Software para estudios de tatuaje: presupuestos por WhatsApp | Inkup",
  description:
    "Programa para estudios de tatuaje: cada consulta llega por WhatsApp con estilo, zona, medidas y referencias para dar presupuesto. Varios artistas. Prueba 7 días.",
  keywords:
    "software para estudios de tatuaje, programa para estudio de tatuajes, programa gestión estudio tatuajes, software para tatuadores, presupuesto tatuaje",
  openGraph: {
    title: "Software para estudios de tatuaje: presupuestos por WhatsApp | Inkup",
    description:
    "Programa para estudios de tatuaje: cada consulta llega por WhatsApp con estilo, zona, medidas y referencias para dar presupuesto. Varios artistas. Prueba 7 días.",
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
            mainEntity: studioFaq.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: { "@type": "Answer", text: item.answer },
            })),
          }),
        }}
      />
    </div>
  )
}
