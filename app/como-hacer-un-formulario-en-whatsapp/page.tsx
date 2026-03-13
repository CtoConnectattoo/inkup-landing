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
import { WhatsAppTemplates } from "@/components/whatsapp-templates"

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

        {/* TL;DR answer block with CTA */}
        <section className="bg-white">
          <div className="container mx-auto px-4 py-10">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-3">Resumen rápido (TL;DR)</h2>
              <p className="text-gray-700 mb-4">
                Para crear un formulario en WhatsApp: 1) Abre Inkup y crea un Asistente “WhatsApp”; 2) Añade campos
                como nombre, ciudad, servicio y disponibilidad; 3) Previsualiza; 4) Copia el enlace y compártelo en bio,
                Google Business y Stories; 5) Recibe consultas con contexto en WhatsApp.
              </p>
              <a
                href="https://hi.inkup.io/auth/signup?utm_source=post-form-wa&utm_medium=button_tldr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 text-white font-semibold shadow hover:opacity-95"
              >
                Crear mi formulario en 30s
              </a>
            </div>
          </div>
        </section>

        {/* Step-by-step with screenshots */}
        <section className="bg-gray-50 border-t border-gray-100">
          <div className="container mx-auto px-4 py-12">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">Guía paso a paso</h2>
              <div className="space-y-10">
                {[
                  { n: 1, title: "Crea tu asistente (WhatsApp)", src: "/howto-wa/paso-1.jpg" },
                  { n: 2, title: "Añade campos esenciales", src: "/howto-wa/paso-2.jpg" },
                  { n: 3, title: "Previsualiza el flujo", src: "/howto-wa/paso-3.jpg" },
                  { n: 4, title: "Copia y comparte el enlace", src: "/howto-wa/paso-4.jpg" },
                  { n: 5, title: "Handoff a WhatsApp (mensaje con contexto)", src: "/howto-wa/paso-5.jpg" },
                ].map((s) => (
                  <figure key={s.n} className="bg-white rounded-xl border p-4">
                    <figcaption className="flex items-baseline gap-3 mb-3">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 text-purple-700 font-bold">
                        {s.n}
                      </span>
                      <h3 className="text-xl font-semibold text-black">{s.title}</h3>
                    </figcaption>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={s.src} alt={`${s.title} — Inkup`} className="w-full h-auto rounded-lg" />
                  </figure>
                ))}

                {/* Mobile preview */}
                <div className="bg-white rounded-xl border p-4">
                  <h3 className="text-xl font-semibold text-black mb-3">Cómo se ve en móvil</h3>
                  <div className="grid md:grid-cols-2 gap-6 items-start">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/howto-wa/paso-6-mobile.jpg" alt="Vista móvil del asistente" className="w-full h-auto rounded-lg" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/howto-wa/paso-6.jpg" alt="Vista del asistente en escritorio" className="w-full h-auto rounded-lg hidden md:block" />
                  </div>
                </div>

                {/* Questions + Appearance extras */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl border p-4">
                    <h3 className="text-xl font-semibold text-black mb-3">Editor de preguntas</h3>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/howto-wa/preguntas-1.jpg" alt="Editor de preguntas 1" className="w-full h-auto rounded-lg mb-3" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/howto-wa/preguntas-2.jpg" alt="Editor de preguntas 2" className="w-full h-auto rounded-lg mb-3" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/howto-wa/preguntas-3.jpg" alt="Editor de preguntas 3" className="w-full h-auto rounded-lg" />
                  </div>
                  <div className="bg-white rounded-xl border p-4">
                    <h3 className="text-xl font-semibold text-black mb-3">Apariencia del asistente</h3>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/howto-wa/apariencia.jpg" alt="Apariencia del asistente" className="w-full h-auto rounded-lg" />
                  </div>
                </div>

                {/* In-article CTA */}
                <div className="text-center">
                  <a
                    href="https://hi.inkup.io/auth/signup?utm_source=post-form-wa&utm_medium=button_mid"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 text-white font-semibold shadow hover:opacity-95"
                  >
                    Crear mi formulario ahora
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Templates section (client) */}
        <WhatsAppTemplates />

        {/* Original guide/components for depth and social proof */}
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
