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
      title: "Tu asistente, tus preguntas",
      description: "Preguntas adaptadas a tus estilos y servicios: estilo, zona, tamaño, referencias y cuándo.",
    },
    {
      title: "La consulta completa en tu WhatsApp",
      description: "Al terminar, se abre WhatsApp con el mensaje ya escrito. Funciona con WhatsApp personal o Business, sin API ni integraciones.",
    },
    {
      title: "Tu enlace donde ya te escriben",
      description: "En la bio de Instagram, la bienvenida de WhatsApp Business, Stories, TikTok, tu ficha de Google o un QR en el estudio.",
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
      title: "5 idiomas automáticos",
      description: "El asistente se muestra en español, inglés, francés, portugués o italiano según el móvil del cliente. A ti te llega en tu idioma.",
    },
  ]

  const benefits = [
    { text: "Más tiempo para tatuar: la consulta te llega completa y das precio a la primera" },
    { text: "Menos «¿cuánto cuesta?» sin estilo, zona ni tamaño" },
    { text: "Recoge consultas mientras tatúas o fuera de horario; contestas tú cuando puedas" },
    { text: "No se te escapa ninguna consulta: todas quedan guardadas en el panel" },
    { text: "Tienes tu base de datos de clientes y la exportas cuando quieras" },
    { text: "Listo en 1 minuto, sin saber de tecnología" },
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
