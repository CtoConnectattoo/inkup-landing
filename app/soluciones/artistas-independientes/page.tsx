import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SolutionTemplate } from "@/components/solution-template"

export const metadata: Metadata = {
  title: "Inkup para Artistas Independientes | Automatiza tus Consultas",
  description:
    "Solución especializada para artistas de tatuaje independientes. Automatiza tus consultas y dedica más tiempo a tu arte y menos a la administración.",
  keywords: "inkup artistas independientes, tatuador freelance, automatización consultas tatuajes, software tatuador",
  openGraph: {
    title: "Inkup para Artistas Independientes | Automatiza tus Consultas",
    description:
      "Solución especializada para artistas de tatuaje independientes. Automatiza tus consultas y dedica más tiempo a tu arte y menos a la administración.",
    url: "https://inkup.io/soluciones/artistas-independientes",
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

export default function ArtistasIndependientesPage() {
  const features = [
    {
      title: "Asistente personal IA",
      description: "Tu propio asistente virtual que responde consultas según tus criterios y disponibilidad.",
    },
    {
      title: "Gestión simplificada",
      description: "Interfaz intuitiva diseñada específicamente para artistas que trabajan solos.",
    },
    {
      title: "Integración con redes sociales",
      description: "Conecta con Instagram, WhatsApp y otras plataformas donde tus clientes te contactan.",
    },
    {
      title: "Filtrado de consultas",
      description: "Recibe solo las consultas que se ajustan a tu estilo y disponibilidad.",
    },
    {
      title: "Dashboard de rendimiento",
      description: "Visualiza tus leads capturados, visitas al perfil y tiempo ahorrado en un panel intuitivo.",
    },
    {
      title: "Análisis de rendimiento por períodos",
      description: "Visualiza el rendimiento de tus leads y visitas con filtros por día, semana y mes.",
    },
  ]

  const benefits = [
    { text: "Reduce el tiempo dedicado a responder mensajes repetitivos" },
    { text: "Aumenta tu productividad artística al eliminar tareas administrativas" },
    { text: "Mejora la experiencia de tus clientes con respuestas inmediatas" },
    { text: "Captura consultas incluso cuando estás tatuando o fuera de horario" },
    { text: "Filtra clientes potenciales según tus preferencias artísticas" },
    { text: "Organiza tu agenda de manera más eficiente" },
    { text: "Proyecta una imagen más profesional" },
    { text: "Aumenta tus ingresos al poder atender más clientes" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <SolutionTemplate
          title="Inkup para"
          subtitle="Artistas Independientes"
          description="Automatiza tus consultas y dedica más tiempo a tu arte y menos a la administración. La solución perfecta para tatuadores freelance."
          imageSrc="/independent-tattoo-artist.png"
          features={features}
          benefits={benefits}
          testimonial={{
            quote:
              "Ha sido un cambio del cielo a la tierra, siempre se me iba mucho tiempo entre el saludo del cliente y preguntas que se traducían en muchísimos mensajes. Me encanta!",
            author: "Picara Clavel",
            role: "@picaraclavel",
            avatarSrc:
              "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2XACdEuaneoY5rUNelWi9CujP7Vi1v.png",
          }}
        />
      </main>
      <Footer />
    </div>
  )
}
