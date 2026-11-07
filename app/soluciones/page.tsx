import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SolutionsHero } from "@/components/solutions-hero"
import { SolutionsGrid } from "@/components/solutions-grid"

export const metadata: Metadata = {
  title: "Soluciones de Inkup: automatiza Instagram en tu negocio",
  description:
    "Respuestas automáticas en Instagram y paso a WhatsApp para tiendas, estética, clínicas, academias, fitness, restaurantes, tatuaje y más. Elige tu caso.",
  openGraph: {
    title: "Soluciones de Inkup: automatiza Instagram en tu negocio",
    description:
      "Respuestas automáticas en Instagram y paso a WhatsApp para tiendas, estética, clínicas, academias, fitness, restaurantes, tatuaje y más. Elige tu caso.",
    url: "https://inkup.io/soluciones",
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
}

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <SolutionsHero />
        <SolutionsGrid />
      </main>
      <Footer />
    </div>
  )
}
