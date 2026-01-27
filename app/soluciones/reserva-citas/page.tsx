import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SolutionTemplate } from "@/components/solution-template"

export const metadata: Metadata = {
  title: "Gestión de Citas con Inkup | Automatiza tus Consultas en Instagram, WhatsApp y TikTok",
  description:
    "Optimiza tu proceso de consultas para citas a través de Instagram, WhatsApp, TikTok y Google My Business. Automatiza tus respuestas y reduce el tiempo dedicado a gestionar mensajes con Inkup.",
  keywords:
    "gestión citas tatuajes, consultas Instagram tatuajes, consultas WhatsApp tatuajes, consultas TikTok tatuajes, Google My Business tatuajes, automatización consultas tatuajes",
  openGraph: {
    title: "Gestión de Citas con Inkup | Automatiza tus Consultas en Instagram, WhatsApp y TikTok",
    description:
      "Optimiza tu proceso de consultas para citas a través de Instagram, WhatsApp, TikTok y Google My Business. Automatiza tus respuestas y reduce el tiempo dedicado a gestionar mensajes con Inkup.",
    url: "https://inkup.io/soluciones/reserva-citas",
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
    canonical: "https://inkup.io/soluciones/reserva-citas",
  },
  other: {
    "image-description":
      "Dashboard de Inkup mostrando métricas de rendimiento para gestión de citas: 21 leads capturados, 315 horas ahorradas mensualmente, gráfico de rendimiento general y análisis de visitas al perfil. Interfaz intuitiva para estudios de tatuaje y artistas independientes.",
  },
}

export default function ReservaCitasPage() {
  const features = [
    {
      title: "Dashboard de rendimiento integrado",
      description:
        "Visualiza tus leads capturados, visitas al perfil y tiempo ahorrado en un panel de control intuitivo.",
    },
    {
      title: "Contador de leads disponibles",
      description: "Monitoriza cuántos leads te quedan en tu plan actual y actualiza cuando necesites más capacidad.",
    },
    {
      title: "Métricas de tiempo ahorrado",
      description:
        "Cuantifica las horas que ahorras al automatizar las consultas para citas, con estimaciones mensuales precisas.",
    },
    {
      title: "Análisis de rendimiento por períodos",
      description:
        "Visualiza el rendimiento de tus leads y visitas con filtros por día, semana y mes para identificar tendencias.",
    },
    {
      title: "Gestión de consultas centralizada",
      description:
        "Recibe todas las consultas para citas en un solo lugar, independientemente del canal por el que lleguen.",
    },
    {
      title: "Planes escalables según necesidades",
      description: "Actualiza fácilmente tu plan cuando necesites gestionar más leads o ampliar tu negocio.",
    },
  ]

  const benefits = [
    { text: "Visualiza exactamente cuántas horas ahorras mensualmente en tu dashboard" },
    { text: "Aumenta tus ingresos al optimizar tu proceso de consultas y respuestas" },
    { text: "Mejora la experiencia del cliente con un sistema de consultas fluido en Instagram y WhatsApp" },
    { text: "Monitoriza el crecimiento de visitas a tu perfil con métricas precisas" },
    { text: "Captura consultas incluso fuera de tu horario laboral a través de TikTok y otras redes" },
    { text: "Controla eficientemente tu cuota de leads disponibles según tu plan" },
    { text: "Mejora tu visibilidad en Google My Business con respuestas automáticas" },
    { text: "Obtén datos valiosos sobre tus patrones de consultas para tomar mejores decisiones" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <SolutionTemplate
          title="Gestión de"
          subtitle="Citas"
          description="Automatiza tus consultas para citas a través de Instagram, WhatsApp, TikTok y Google My Business. Reduce el tiempo dedicado a responder mensajes y ofrece información precisa a tus clientes."
          imageSrc="/inkup-dashboard-metrics.png"
          features={features}
          benefits={benefits}
          testimonial={{
            quote:
              "Desde que implementamos Inkup, hemos reducido drásticamente el tiempo que dedicábamos a gestionar mensajes en Instagram y WhatsApp. Ahora podemos centrarnos en tatuar mientras el asistente maneja las consultas iniciales.",
            author: "Moe Tattoo",
            role: "@moetattoostudio",
            avatarSrc:
              "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/moetattoo-E5EfjzwkRa7cDYzUapzXHzHfPlERgm.png",
          }}
        />
      </main>
      <Footer />
    </div>
  )
}
