import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SolutionTemplate } from "@/components/solution-template"

export const metadata: Metadata = {
  title: "Captación de Clientes con Inkup | Convierte Visitantes en Clientes",
  description:
    "Convierte visitantes en clientes con un asistente que responde al instante y captura leads. Optimiza tu estrategia de captación con Inkup.",
  keywords:
    "captación clientes tatuajes, leads estudio tatuaje, conversión clientes tatuaje, marketing estudio tatuaje",
  openGraph: {
    title: "Captación de Clientes con Inkup | Convierte Visitantes en Clientes",
    description:
      "Convierte visitantes en clientes con un asistente que responde al instante y captura leads. Optimiza tu estrategia de captación con Inkup.",
    url: "https://inkup.io/soluciones/captacion-clientes",
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
    canonical: "https://inkup.io/soluciones/captacion-clientes",
  },
  other: {
    "image-description":
      "Dashboard de Inkup para captación de clientes mostrando 21 leads capturados con un incremento del 2000%, 315 horas de tiempo ahorrado, análisis de rendimiento mensual y oportunidades de negocio valoradas en €1650. Panel de control optimizado para estudios de tatuaje.",
  },
}

export default function CaptacionClientesPage() {
  const features = [
    {
      title: "Contador de leads en tiempo real",
      description:
        "Visualiza exactamente cuántos leads has capturado y cuántos te quedan disponibles en tu plan actual.",
    },
    {
      title: "Análisis de visitas al perfil",
      description: "Monitoriza cuántas personas visitan tu perfil y cómo se convierten en leads cualificados.",
    },
    {
      title: "Métricas de rendimiento",
      description:
        "Accede a gráficos detallados que muestran la evolución de tus leads y visitas a lo largo del tiempo.",
    },
    {
      title: "Seguimiento automático",
      description: "Envía recordatorios y mensajes de seguimiento para mantener el interés del cliente.",
    },
    {
      title: "Integración con redes sociales",
      description: "Captura leads desde Instagram, Facebook y otras plataformas donde están tus clientes.",
    },
    {
      title: "Planes escalables",
      description: "Actualiza tu plan fácilmente cuando necesites capturar más leads para tu negocio.",
    },
  ]

  const benefits = [
    { text: "Visualiza exactamente cuántos leads has capturado en tu dashboard personalizado" },
    { text: "Monitoriza el crecimiento de visitas a tu perfil con métricas precisas" },
    { text: "Cuantifica el tiempo ahorrado gracias a la automatización de consultas" },
    { text: "Construye una base de datos de clientes potenciales organizada" },
    { text: "Mejora la experiencia del cliente desde el primer contacto" },
    { text: "Optimiza tu estrategia de marketing con datos precisos de rendimiento" },
    { text: "Recupera clientes potenciales que normalmente se perderían" },
    { text: "Aumenta tus ingresos con más clientes cualificados" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <SolutionTemplate
          title="Captación de"
          subtitle="Clientes"
          description="Convierte visitantes en clientes con un asistente que responde al instante y captura leads. Optimiza tu estrategia de captación y aumenta tus ingresos."
          imageSrc="/inkup-dashboard-metrics.png"
          features={features}
          benefits={benefits}
          testimonial={{
            quote:
              "Me ayuda muchísimo con las citas al recibir directamente en WhatsApp toda la información. No se nos escapa ninguno sin responder.",
            author: "Al Sur Tattoo",
            role: "@alsurtattoo",
            avatarSrc:
              "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/alsurtattoo.jpg-MrL6TfCLhrPHntQnIIgbBVG0GdTazx.jpeg",
          }}
        />
      </main>
      <Footer />
    </div>
  )
}
