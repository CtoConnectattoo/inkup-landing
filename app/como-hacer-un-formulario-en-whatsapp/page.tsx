import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFormSteps } from "@/components/whatsapp-form-steps"
import { WhatsAppFormTestimonials } from "@/components/whatsapp-form-testimonials"
import { WhatsAppFormFAQ } from "@/components/whatsapp-form-faq"
import { WhatsAppFormCTA } from "@/components/whatsapp-form-cta"
import { HowToFormHero } from "@/components/how-to-form-hero"
import { HowToFormGuide } from "@/components/how-to-form-guide"

export const metadata: Metadata = {
  title: "Cómo hacer un formulario en WhatsApp paso a paso | Inkup",
  description:
    "Descubre cómo hacer un formulario para WhatsApp sin saber programar. Guía rápida para ahorrar tiempo y organizar tus consultas. Gratis y sin web.",
  keywords:
    "cómo hacer un formulario en whatsapp, formulario whatsapp, crear formulario sin código, whatsapp business, formulario online, inkup",
  openGraph: {
    title: "Cómo hacer un formulario en WhatsApp paso a paso | Inkup",
    description:
      "Descubre cómo hacer un formulario para WhatsApp sin saber programar. Guía rápida para ahorrar tiempo y organizar tus consultas. Gratis y sin web.",
    url: "https://inkup.io/como-hacer-un-formulario-en-whatsapp",
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
    canonical: "https://inkup.io/como-hacer-un-formulario-en-whatsapp",
  },
}

export default function ComoHacerFormularioWhatsAppPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <HowToFormHero />
        <HowToFormGuide />
        <WhatsAppFormSteps />
        <WhatsAppFormTestimonials />
        <WhatsAppFormFAQ />
        <WhatsAppFormCTA />
      </main>
      <Footer />
    </div>
  )
}
