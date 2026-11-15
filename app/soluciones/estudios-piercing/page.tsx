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
      "Panel de consultas de Inkup para estudios de piercing: cada consulta con sus datos, referencias y teléfono.",
  },
}

export default function EstudiosPiercingPage() {
  const features = [
    {
      title: "Preguntas adaptadas a piercing",
      description: "Configura tus servicios y preguntas: zona, tipo de piercing, joya, referencias y cuándo quiere venir.",
    },
    {
      title: "La consulta completa en tu WhatsApp",
      description: "Al terminar, se abre WhatsApp con el mensaje ya escrito. Funciona con WhatsApp personal o Business, sin API ni integraciones.",
    },
    {
      title: "Panel de consultas",
      description: "Cada consulta queda guardada con sus datos, referencias y teléfono. Filtra por estado (pendiente, respondida, cliente), servicio y fecha.",
    },
    {
      title: "Varios asistentes",
      description: "Un estudio puede tener varios asistentes (hasta 5 en Profesional y 10 en Premium).",
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
    { text: "Recibes la consulta completa en un mensaje y das precio a la primera" },
    { text: "Menos preguntas repetidas por DM antes de cada cita" },
    { text: "No se te escapa ninguna consulta: todas quedan guardadas en el panel" },
    { text: "Tus piercers se centran en el estudio; la conversación sigue siendo vuestra, en vuestro WhatsApp" },
    { text: "Atiendes a clientes de otros países en su idioma" },
    { text: "Listo en 1 minuto, sin saber de tecnología" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <SolutionTemplate
          title="Inkup para"
          subtitle="Estudios de Piercing"
          description="Gestiona consultas sobre tipos de piercing, precios y cuidados. Optimiza tu agenda y ofrece información precisa a tus clientes con nuestro asistente IA especializado."
          imageSrc="/tattoo-studio-artists.png"
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
