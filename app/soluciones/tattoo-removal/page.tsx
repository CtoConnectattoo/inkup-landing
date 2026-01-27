import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SolutionTemplate } from "@/components/solution-template"

export const metadata: Metadata = {
  title: "Inkup para Tattoo Removal | Automatiza tus Consultas sobre Eliminación de Tatuajes",
  description:
    "Solución especializada para centros de eliminación de tatuajes. Gestiona consultas sobre el proceso, sesiones necesarias y resultados esperados con Inkup.",
  keywords:
    "inkup eliminación tatuajes, gestión centro eliminación tatuajes, automatización consultas eliminación tatuajes, software eliminación tatuajes",
  openGraph: {
    title: "Inkup para Tattoo Removal | Automatiza tus Consultas sobre Eliminación de Tatuajes",
    description:
      "Solución especializada para centros de eliminación de tatuajes. Gestiona consultas sobre el proceso, sesiones necesarias y resultados esperados con Inkup.",
    url: "https://inkup.io/soluciones/tattoo-removal",
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

export default function TattooRemovalPage() {
  const features = [
    {
      title: "Dashboard de rendimiento",
      description: "Visualiza tus leads capturados, visitas al perfil y tiempo ahorrado en un panel intuitivo.",
    },
    {
      title: "Asistente especializado en eliminación",
      description:
        "Configura tu asistente con información sobre tecnologías, número de sesiones y resultados esperados.",
    },
    {
      title: "Integración multicanal",
      description: "Conecta con tus clientes a través de WhatsApp, Instagram, tu web y más, todo centralizado.",
    },
    {
      title: "Panel de consultas",
      description: "Visualiza y gestiona todas las consultas entrantes organizadas por tipo de eliminación o fecha.",
    },
    {
      title: "Contador de leads disponibles",
      description: "Monitoriza cuántos leads te quedan en tu plan actual y actualiza cuando necesites más capacidad.",
    },
    {
      title: "Análisis de rendimiento por períodos",
      description: "Visualiza el rendimiento de tus leads y visitas con filtros por día, semana y mes.",
    },
  ]

  const benefits = [
    { text: "Reduce el tiempo dedicado a explicar el proceso de eliminación repetidamente" },
    { text: "Mejora la experiencia del cliente con respuestas inmediatas a sus dudas" },
    { text: "Visualiza exactamente cuántas horas ahorras mensualmente en tu dashboard" },
    { text: "Proporciona expectativas realistas sobre resultados y número de sesiones" },
    { text: "Elimina la pérdida de consultas por saturación o desorganización" },
    { text: "Permite a tus especialistas enfocarse en los tratamientos" },
    { text: "Optimiza la gestión de tu agenda y reduce los huecos" },
    { text: "Mejora la imagen profesional de tu centro" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <SolutionTemplate
          title="Inkup para"
          subtitle="Tattoo Removal"
          description="Gestiona consultas sobre el proceso de eliminación, sesiones necesarias y resultados esperados. Optimiza tu agenda y ofrece información precisa con nuestro asistente IA especializado."
          imageSrc="/tattoo-removal-service.png"
          features={features}
          benefits={benefits}
          ctaText="Empieza gratis ahora"
          ctaLink="https://busines.inkup.io/signup"
          testimonial={{
            quote:
              "Desde que implementamos Inkup, hemos reducido drásticamente el tiempo que dedicábamos a explicar el proceso de eliminación. Nuestros clientes obtienen información precisa sobre sus casos particulares antes de la primera visita.",
            author: "Clean Slate Removal",
            role: "@cleanslateremoval",
          }}
        />
      </main>
      <Footer />
    </div>
  )
}
