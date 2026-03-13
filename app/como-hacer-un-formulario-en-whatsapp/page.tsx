import type { Metadata } from "next"
import Script from "next/script"
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
  const howtoJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Cómo hacer un formulario en WhatsApp",
    description:
      "Guía paso a paso para crear un formulario conversacional que se integra con WhatsApp.",
    totalTime: "PT10M",
    tool: [{ "@type": "HowToTool", name: "Inkup" }],
    step: [
      {
        "@type": "HowToStep",
        name: "Crea tu asistente",
        text: "Abre Inkup y crea un nuevo Asistente tipo WhatsApp.",
        image: "https://inkup.io/howto-wa/paso-1.jpg",
        url: "https://inkup.io/como-hacer-un-formulario-en-whatsapp#paso-1",
      },
      {
        "@type": "HowToStep",
        name: "Añade campos",
        text: "Añade nombre, ciudad, servicio y disponibilidad para captar contexto.",
        image: "https://inkup.io/howto-wa/paso-2.jpg",
        url: "https://inkup.io/como-hacer-un-formulario-en-whatsapp#paso-2",
      },
      {
        "@type": "HowToStep",
        name: "Previsualiza",
        text: "Revisa el flujo conversacional y ajusta el orden de preguntas.",
        image: "https://inkup.io/howto-wa/paso-3.jpg",
        url: "https://inkup.io/como-hacer-un-formulario-en-whatsapp#paso-3",
      },
      {
        "@type": "HowToStep",
        name: "Comparte el enlace",
        text: "Copia el link del asistente y pégalo en tu bio, Google Business y Stories.",
        image: "https://inkup.io/howto-wa/paso-4.jpg",
        url: "https://inkup.io/como-hacer-un-formulario-en-whatsapp#paso-4",
      },
      {
        "@type": "HowToStep",
        name: "Handoff a WhatsApp",
        text: "Recibe consultas en WhatsApp con contexto para responder más rápido.",
        image: "https://inkup.io/howto-wa/paso-5.jpg",
        url: "https://inkup.io/como-hacer-un-formulario-en-whatsapp#paso-5",
      },
    ],
  }

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Necesito una web para usar Inkup?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Puedes crear y compartir tu formulario sin tener una web.",
        },
      },
      {
        "@type": "Question",
        name: "¿Se integra con WhatsApp?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Sí. Puedes derivar a WhatsApp con contexto o recoger datos previos automáticamente.",
        },
      },
      {
        "@type": "Question",
        name: "¿Puedo personalizar los campos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, puedes ajustar los campos a tu flujo de trabajo.",
        },
      },
    ],
  }

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: "https://inkup.io/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Recursos",
        item: "https://inkup.io/recursos",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Cómo hacer un formulario en WhatsApp",
        item: "https://inkup.io/como-hacer-un-formulario-en-whatsapp",
      },
    ],
  }

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
        {/* SEO/AEO JSON-LD */}
        <Script id="howto-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howtoJsonLd) }} />
        <Script id="faq-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
        <Script id="breadcrumbs-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }} />
      </main>
      <Footer />
    </div>
  )
}
