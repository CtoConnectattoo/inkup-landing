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
      "Panel de consultas de Inkup: cada consulta con sus datos, referencias y teléfono, filtrable por estado, servicio y fecha.",
  },
}

export default function ReservaCitasPage() {
  const features = [
    {
      title: "La consulta completa en tu WhatsApp",
      description: "Al terminar, se abre WhatsApp con el mensaje ya escrito. Funciona con WhatsApp personal o Business, sin API ni integraciones.",
    },
    {
      title: "Preguntas con botones e imágenes",
      description: "Tu cliente elige con selectores visuales y sube sus referencias. Sin registro ni descarga, en menos de un minuto.",
    },
    {
      title: "Panel de consultas",
      description: "Cada consulta queda guardada con sus datos, referencias y teléfono. Filtra por estado (pendiente, respondida, cliente), servicio y fecha.",
    },
    {
      title: "Tu enlace donde ya te escriben",
      description: "En la bio de Instagram, la bienvenida de WhatsApp Business, Stories, TikTok, tu ficha de Google o un QR en el estudio.",
    },
    {
      title: "5 idiomas automáticos",
      description: "El asistente se muestra en español, inglés, francés, portugués o italiano según el móvil del cliente. A ti te llega en tu idioma.",
    },
    {
      title: "Exporta tus clientes",
      description: "Descarga la lista de consultas en CSV o Excel cuando quieras.",
    },
  ]

  const benefits = [
    { text: "Recibes la consulta completa en un mensaje: das precio y propones fecha a la primera" },
    { text: "Menos ida y vuelta antes de cerrar la cita" },
    { text: "No se te escapa ninguna consulta: todas quedan guardadas en el panel" },
    { text: "La fecha y la agenda las llevas tú, como siempre; Inkup te trae la consulta lista" },
    { text: "Atiendes a clientes de otros países en su idioma" },
    { text: "Listo en 1 minuto, sin saber de tecnología" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <SolutionTemplate
          title="Gestión de"
          subtitle="Citas"
          description="Automatiza tus consultas para citas a través de Instagram, WhatsApp, TikTok y Google My Business. Reduce el tiempo dedicado a responder mensajes y ofrece información precisa a tus clientes."
          imageSrc="/tattoo-studio-artists.png"
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
