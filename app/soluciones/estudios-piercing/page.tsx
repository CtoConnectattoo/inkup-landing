import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SolutionTemplate } from "@/components/solution-template"

export const metadata: Metadata = {
  title: "Inkup para Piercing | Automatiza tus Consultas",
  description:
    "Solución especializada de piercing. Gestiona consultas sobre tipos, precios y cuidados, y optimiza tu agenda con Inkup.",
  keywords:
    "inkup estudios piercing, gestión estudio piercing, automatización consultas piercing, software estudio piercing",
  openGraph: {
    title: "Inkup para Piercing | Automatiza tus Consultas",
    description:
      "Solución especializada para piercing. Gestiona consultas sobre tipos, precios y cuidados, y optimiza tu agenda con Inkup.",
    url: "https://inkup.io/soluciones/estudios-piercing",
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
    canonical: "https://inkup.io/soluciones/estudios-piercing",
  },
  other: {
    "image-description":
      "Dashboard de Inkup para estudios de piercing mostrando 21 leads capturados, 315 horas de tiempo ahorrado mensual, análisis de rendimiento con gráficos detallados y seguimiento de oportunidades de negocio. Interfaz optimizada para automatizar consultas sobre piercings.",
  },
}

export default function EstudiosPiercingPage() {
  const features = [
    {
      title: "Dashboard de rendimiento",
      description: "Visualiza tus leads capturados, visitas al perfil y tiempo ahorrado en un panel intuitivo.",
    },
    {
      title: "Asistente especializado en piercing",
      description: "Configura tu asistente con información sobre tipos de piercing, joyería, precios y cuidados.",
    },
    {
      title: "Integración multicanal",
      description: "Conecta con tus clientes a través de WhatsApp, Instagram, tu web y más, todo centralizado.",
    },
    {
      title: "Panel de consultas",
      description: "Visualiza y gestiona todas las consultas entrantes organizadas por tipo de piercing o fecha.",
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
    { text: "Reduce hasta un 70% el tiempo dedicado a responder preguntas básicas sobre piercings" },
    { text: "Mejora la experiencia del cliente con respuestas inmediatas 24/7" },
    { text: "Visualiza exactamente cuántas horas ahorras mensualmente en tu dashboard" },
    { text: "Centraliza la comunicación de todo el estudio" },
    { text: "Elimina la pérdida de consultas por saturación o desorganización" },
    { text: "Permite a tus piercers enfocarse en lo que mejor saben hacer" },
    { text: "Optimiza la gestión de tu agenda y reduce los huecos" },
    { text: "Mejora la imagen profesional de tu estudio" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <SolutionTemplate
          title="Inkup para"
          subtitle="Estudios de Piercing"
          description="Gestiona consultas sobre tipos de piercing, precios y cuidados. Optimiza tu agenda y ofrece información precisa a tus clientes con nuestro asistente IA especializado."
          imageSrc="/inkup-dashboard-metrics.png"
          features={features}
          benefits={benefits}
          testimonial={{
            quote:
              "Inkup ha transformado la forma en que gestionamos las consultas sobre piercings. Nuestros clientes reciben información detallada sobre tipos, precios y cuidados a cualquier hora, y nosotros podemos centrarnos en ofrecer un servicio de calidad.",
            author: "Piercing Madrid",
            role: "@piercingmadrid",
          }}
        />
      </main>
      <Footer />
    </div>
  )
}
