import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppAssistantHero } from "@/components/whatsapp-assistant-hero"
import { WhatsAppAssistantGuide } from "@/components/whatsapp-assistant-guide"
import { WhatsAppFormSteps } from "@/components/whatsapp-form-steps"
import { WhatsAppFormTestimonials } from "@/components/whatsapp-form-testimonials"
import { WhatsAppFormFAQ } from "@/components/whatsapp-form-faq"
import { WhatsAppFormCTA } from "@/components/whatsapp-form-cta"

export const metadata: Metadata = {
  title: "Asistente WhatsApp para captar clientes de forma automática | Inkup",
  description:
    "Descubre qué es un asistente para WhatsApp y cómo puede ayudarte a automatizar la captación de clientes, responder de forma instantánea y ahorrar tiempo. Empieza gratis.",
  keywords:
    "asistente whatsapp, chatbot whatsapp, automatizar whatsapp, respuestas automáticas whatsapp, asistente virtual whatsapp",
  openGraph: {
    title: "Asistente WhatsApp para captar clientes de forma automática | Inkup",
    description:
      "Descubre qué es un asistente para WhatsApp y cómo puede ayudarte a automatizar la captación de clientes, responder de forma instantánea y ahorrar tiempo. Empieza gratis.",
    url: "https://inkup.io/asistente-whatsapp",
    siteName: "Inkup",
    images: [
      {
        url: "https://inkup.io/og-asistente-whatsapp.jpg",
        width: 1200,
        height: 630,
        alt: "Asistente WhatsApp para automatizar consultas",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Asistente WhatsApp para captar clientes de forma automática | Inkup",
    description:
      "Descubre qué es un asistente para WhatsApp y cómo puede ayudarte a automatizar la captación de clientes, responder de forma instantánea y ahorrar tiempo. Empieza gratis.",
    images: ["https://inkup.io/og-asistente-whatsapp.jpg"],
  },
  alternates: {
    canonical: "https://inkup.io/asistente-whatsapp",
  },
}

export default function AsistenteWhatsAppPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <WhatsAppAssistantHero />
        <WhatsAppAssistantGuide />
        <WhatsAppFormSteps />
        <WhatsAppFormTestimonials />
        <WhatsAppFormFAQ />
        <WhatsAppFormCTA />
      </main>
      <Footer />
    </div>
  )
}
