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
  alternates: { canonical: "https://inkup.io/soluciones/tattoo-removal" },
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
      title: "Preguntas adaptadas a eliminación",
      description: "Pregunta por la zona, el tamaño y la antigüedad del tatuaje, y pide una foto para valorar.",
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
      title: "Preguntas con botones e imágenes",
      description: "Tu cliente elige con selectores visuales y sube sus referencias. Sin registro ni descarga, en menos de un minuto.",
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
    { text: "Recibes la consulta completa con foto y das una primera valoración a la primera" },
    { text: "Menos ida y vuelta para explicar el proceso" },
    { text: "No se te escapa ninguna consulta: todas quedan guardadas en el panel" },
    { text: "La valoración y la conversación las llevas tú, en tu WhatsApp" },
    { text: "Atiendes a clientes de otros países en su idioma" },
    { text: "Listo en 1 minuto, sin saber de tecnología" },
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
