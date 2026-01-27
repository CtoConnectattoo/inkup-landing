import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SolutionTemplate } from "@/components/solution-template"

export const metadata: Metadata = {
  title: "Gestión de Consultas con Inkup | Automatiza tus Respuestas",
  description:
    "Automatiza las preguntas frecuentes y recibe consultas completas y organizadas. Optimiza tu proceso de atención al cliente con Inkup.",
  keywords:
    "gestión consultas tatuajes, automatización respuestas, preguntas frecuentes tatuajes, atención cliente estudio tatuaje",
  openGraph: {
    title: "Gestión de Consultas con Inkup | Automatiza tus Respuestas",
    description:
      "Automatiza las preguntas frecuentes y recibe consultas completas y organizadas. Optimiza tu proceso de atención al cliente con Inkup.",
    url: "https://inkup.io/soluciones/gestion-consultas",
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
    canonical: "https://inkup.io/soluciones/gestion-consultas",
  },
  other: {
    "image-description":
      "Dashboard de Inkup para gestión de consultas mostrando 21 leads capturados, 315 horas de tiempo ahorrado mensual, análisis de rendimiento con gráficos detallados y seguimiento de oportunidades de negocio. Interfaz optimizada para automatizar respuestas en estudios de tatuaje.",
  },
}

export default function GestionConsultasPage() {
  const features = [
    {
      title: "Panel de control centralizado",
      description: "Visualiza tus leads capturados, visitas al perfil y tiempo ahorrado en un dashboard intuitivo.",
    },
    {
      title: "Seguimiento de leads disponibles",
      description:
        "Monitoriza cuántos leads te quedan en tu plan actual y recibe notificaciones cuando estés cerca del límite.",
    },
    {
      title: "Análisis de rendimiento general",
      description:
        "Visualiza gráficos detallados de leads y visitas a tu perfil a lo largo del tiempo, con filtros por día, semana y mes.",
    },
    {
      title: "Métricas de tiempo ahorrado",
      description:
        "Cuantifica las horas que ahorras al automatizar tus consultas, con estimaciones mensuales precisas.",
    },
    {
      title: "Notificaciones personalizables",
      description: "Recibe alertas sobre nuevas consultas según tus preferencias y prioridades.",
    },
    {
      title: "Historial completo",
      description: "Accede al historial de conversaciones con cada cliente para un seguimiento efectivo.",
    },
  ]

  const benefits = [
    { text: "Ahorra horas de trabajo mensualmente, cuantificadas directamente en tu dashboard" },
    { text: "Elimina la frustración de responder las mismas preguntas repetidamente" },
    { text: "Visualiza el crecimiento de tus leads y visitas con gráficos detallados" },
    { text: "Controla eficientemente tu cuota de leads disponibles según tu plan" },
    { text: "Evita perder clientes por demoras en las respuestas" },
    { text: "Mantén un registro organizado de todas las interacciones" },
    { text: "Mejora la satisfacción del cliente con respuestas inmediatas" },
    { text: "Toma decisiones basadas en datos reales de rendimiento" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <SolutionTemplate
          title="Gestión de"
          subtitle="Consultas"
          description="Automatiza las preguntas frecuentes y recibe consultas completas y organizadas. Optimiza tu proceso de atención al cliente y ahorra tiempo valioso."
          imageSrc="/inkup-dashboard-metrics.png"
          features={features}
          benefits={benefits}
          testimonial={{
            quote:
              "Nos ayuda a llegar a nuestros clientes a través de diferentes vías como Instagram y a saber rápidamente lo que quieren y contestarlos fácil y eficientemente.",
            author: "Inktenza Studio",
            role: "@inktenza.studio",
            avatarSrc:
              "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/descarga%20(7)-1ViCYjHY3UdfX89rQBirSKaUag9Epc.png",
          }}
        />
      </main>
      <Footer />
    </div>
  )
}
