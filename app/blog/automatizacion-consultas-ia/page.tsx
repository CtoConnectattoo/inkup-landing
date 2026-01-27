import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Share2, User } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Cómo la automatización con IA está transformando la atención al cliente | Blog Inkup",
  description:
    "Descubre cómo los profesionales están ahorrando horas de trabajo y mejorando la experiencia de sus clientes con asistentes virtuales.",
  keywords:
    "automatización IA, atención cliente, asistentes virtuales, ahorro tiempo, experiencia cliente, inkup, tatuajes",
  openGraph: {
    title: "Cómo la automatización con IA está transformando la atención al cliente | Blog Inkup",
    description:
      "Descubre cómo los profesionales están ahorrando horas de trabajo y mejorando la experiencia de sus clientes con asistentes virtuales.",
    url: "https://inkup.io/blog/automatizacion-consultas-ia",
    siteName: "Inkup",
    images: [
      {
        url: "/blog/automatizacion-consultas-ia.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "es_ES",
    type: "article",
  },
}

export default function BlogPostPage() {
  const post = {
    title: "Cómo la automatización con IA está transformando la atención al cliente",
    date: "15 de mayo de 2024",
    author: "Equipo Inkup",
    readTime: "5 min",
    coverImage: "/blog/automatizacion-consultas-ia.png",
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24 pb-16">
        <article className="container mx-auto px-4">
          {/* Back to blog link */}
          <div className="mb-8">
            <Link
              href="/blog"
              className="flex items-center text-muted-foreground hover:text-purple-600 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al blog
            </Link>
          </div>

          {/* Article header */}
          <div className="max-w-3xl mx-auto mb-8">
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{post.readTime} de lectura</span>
              </div>
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6">{post.title}</h1>
          </div>

          {/* Featured image */}
          <div className="max-w-4xl mx-auto mb-12 relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
            <Image src={post.coverImage || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
          </div>

          {/* Article content */}
          <div className="max-w-3xl mx-auto prose prose-lg">
            <h2>La revolución silenciosa en la atención al cliente</h2>
            <p>
              En los últimos años, hemos sido testigos de una transformación radical en la forma en que las empresas
              interactúan con sus clientes. La inteligencia artificial ha pasado de ser una tecnología futurista a
              convertirse en una herramienta esencial para los negocios de todos los tamaños, especialmente para
              profesionales independientes y pequeños estudios que buscan optimizar sus recursos.
            </p>

            <p>
              Los asistentes virtuales impulsados por IA están cambiando las reglas del juego, permitiendo a los
              profesionales ofrecer una atención al cliente de calidad las 24 horas del día, los 7 días de la semana,
              sin necesidad de estar constantemente pendientes del teléfono o las redes sociales.
            </p>

            <h2>El problema de las consultas repetitivas</h2>
            <p>
              Si eres un profesional del sector, probablemente te resulte familiar esta situación: pasas horas cada
              semana respondiendo las mismas preguntas una y otra vez. "¿Cuáles son tus horarios?", "¿Cuánto cuesta un
              servicio básico?", "¿Qué debo tener en cuenta antes de mi cita?".
            </p>

            <p>
              Según nuestros estudios, los profesionales dedican entre 10 y 15 horas semanales simplemente a gestionar
              estas consultas repetitivas. Esto no solo supone una pérdida de tiempo valioso que podrías estar dedicando
              a tu trabajo o a tu vida personal, sino que también puede llevar a respuestas inconsistentes o a perder
              potenciales clientes debido a la demora en las respuestas.
            </p>

            <h2>Cómo la IA está cambiando el panorama</h2>
            <p>
              Los asistentes virtuales basados en IA, como el que ofrece Inkup, están diseñados específicamente para
              abordar este problema. Estos sistemas pueden:
            </p>

            <ul>
              <li>
                <strong>Responder instantáneamente a las consultas más frecuentes</strong>, proporcionando información
                precisa sobre servicios, precios, disponibilidad y proceso de reserva.
              </li>
              <li>
                <strong>Recopilar información relevante de los clientes</strong> antes de que lleguen a ti, asegurando
                que cuando finalmente interactúes con ellos, ya tengas todos los datos necesarios para ofrecerles un
                servicio personalizado.
              </li>
              <li>
                <strong>Filtrar las consultas</strong> según criterios predefinidos, asegurando que solo lleguen a ti
                aquellas que realmente requieren tu atención personal.
              </li>
              <li>
                <strong>Mantener una comunicación coherente</strong> con tu marca y estilo, adaptándose a tu tono y
                valores.
              </li>
              <li>
                <strong>Aprender y mejorar con el tiempo</strong>, adaptándose a las necesidades específicas de tu
                negocio y tus clientes.
              </li>
            </ul>

            <h2>Beneficios tangibles para los profesionales</h2>
            <p>
              La implementación de un asistente virtual IA no es solo una cuestión de estar a la vanguardia tecnológica;
              se traduce en beneficios concretos y medibles para tu negocio:
            </p>

            <h3>1. Ahorro significativo de tiempo</h3>
            <p>
              Los profesionales que utilizan Inkup reportan un ahorro promedio de 12 horas semanales que antes dedicaban
              a gestionar consultas básicas. Ese tiempo puede reinvertirse en mejorar tus habilidades, atender a más
              clientes o simplemente disfrutar de un mejor equilibrio entre vida laboral y personal.
            </p>

            <h3>2. Mejora en la tasa de conversión</h3>
            <p>
              Las estadísticas muestran que los negocios que responden a las consultas en menos de 5 minutos tienen una
              probabilidad 21 veces mayor de convertir esas consultas en ventas. Un asistente virtual garantiza que
              ninguna consulta quede sin respuesta, independientemente de la hora del día.
            </p>

            <h3>3. Experiencia del cliente mejorada</h3>
            <p>
              Los clientes valoran cada vez más la inmediatez y la disponibilidad. Un asistente virtual no solo
              proporciona respuestas instantáneas, sino que también puede ofrecer una experiencia personalizada basada
              en las preferencias y el historial del cliente.
            </p>

            <h3>4. Datos valiosos para la toma de decisiones</h3>
            <p>
              Los sistemas de IA recopilan y analizan datos sobre las consultas más frecuentes, las horas pico de
              actividad y las preferencias de los clientes. Esta información puede ser invaluable para ajustar tus
              servicios, precios y estrategias de marketing.
            </p>

            <h2>Casos de éxito reales</h2>
            <p>
              Veamos algunos ejemplos concretos de cómo los profesionales están beneficiándose de la automatización con
              IA:
            </p>

            <blockquote>
              "Solíamos dedicar tiempo a recopilar todos esos datos que con la app ya me encuentro todo listo para solo
              dar presupuesto y cita. Es muy útil desde luego." - Bravo Tattoo
            </blockquote>

            <blockquote>
              "Ha sido un cambio del cielo a la tierra, siempre se me iba mucho tiempo entre el saludo del cliente y
              preguntas que se traducían en muchísimos mensajes. Me encanta!" - Picara Clavel
            </blockquote>

            <blockquote>
              "Me ayuda muchísimo con las citas al recibir directamente en WhatsApp toda la información. No se nos
              escapa ninguno sin responder." - Al Sur Tattoo
            </blockquote>

            <h2>El futuro de la atención al cliente</h2>
            <p>
              La tendencia hacia la automatización de la atención al cliente con IA no muestra signos de desaceleración.
              De hecho, estamos solo en las primeras etapas de lo que promete ser una revolución completa en la forma en
              que los negocios interactúan con sus clientes.
            </p>

            <p>
              En los próximos años, podemos esperar asistentes virtuales aún más sofisticados, capaces de mantener
              conversaciones más naturales, comprender mejor el contexto y las emociones, y ofrecer un nivel de
              personalización que rivalice con la atención humana.
            </p>

            <p>
              Para los profesionales que adopten estas tecnologías temprano, esto representa una oportunidad única para
              diferenciarse de la competencia y establecer nuevos estándares en la experiencia del cliente.
            </p>

            <h2>Conclusión: Adaptarse para prosperar</h2>
            <p>
              La automatización con IA no se trata de reemplazar el toque humano que hace único a cada profesional, sino
              de potenciarlo, liberándote de tareas repetitivas para que puedas concentrarte en lo que realmente
              importa: tu arte, tu oficio y la relación personal con tus clientes.
            </p>

            <p>
              Los profesionales que logren encontrar el equilibrio perfecto entre la eficiencia de la IA y el toque
              personal serán los que prosperen en esta nueva era de la atención al cliente.
            </p>

            <p>
              ¿Estás listo para dar el salto y transformar la forma en que gestionas tus consultas? La tecnología está
              aquí, y los resultados hablan por sí mismos.
            </p>
          </div>

          {/* Share buttons */}
          <div className="max-w-3xl mx-auto mt-12 border-t pt-8">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold mb-2">Comparte este artículo</h3>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="rounded-full w-10 h-10 p-0">
                    <Share2 className="h-4 w-4" />
                    <span className="sr-only">Compartir en redes sociales</span>
                  </Button>
                </div>
              </div>
              <Link href="/blog">
                <Button variant="outline">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Volver al blog
                </Button>
              </Link>
            </div>
          </div>

          {/* Related articles */}
          <div className="max-w-4xl mx-auto mt-16">
            <h2 className="text-2xl font-bold mb-8">Artículos relacionados</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Link href="/blog/estrategias-captacion-clientes" className="group">
                <article className="border rounded-xl overflow-hidden hover:shadow-md transition-shadow h-full flex flex-col">
                  <div className="relative h-48 w-full">
                    <Image
                      src="/blog/estrategias-captacion-clientes.png"
                      alt="5 estrategias efectivas para captar más clientes en 2024"
                      fill
                      className="object-cover transition-transform group-hover:scale-105 duration-300"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-purple-600 transition-colors">
                      5 estrategias efectivas para captar más clientes en 2024
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 flex-grow">
                      Aprende las mejores tácticas para aumentar tu base de clientes y hacer crecer tu negocio en el
                      competitivo mercado actual.
                    </p>
                    <Button variant="link" className="p-0 h-auto font-semibold group-hover:text-purple-600 self-start">
                      Leer artículo <ArrowLeft className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </article>
              </Link>
              <Link href="/blog/optimizacion-redes-sociales" className="group">
                <article className="border rounded-xl overflow-hidden hover:shadow-md transition-shadow h-full flex flex-col">
                  <div className="relative h-48 w-full">
                    <Image
                      src="/blog/optimizacion-redes-sociales.png"
                      alt="Optimiza tu presencia en redes sociales para conseguir más consultas"
                      fill
                      className="object-cover transition-transform group-hover:scale-105 duration-300"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-purple-600 transition-colors">
                      Optimiza tu presencia en redes sociales para conseguir más consultas
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 flex-grow">
                      Guía práctica para mejorar tu estrategia en Instagram, TikTok y otras plataformas y convertir
                      seguidores en clientes.
                    </p>
                    <Button variant="link" className="p-0 h-auto font-semibold group-hover:text-purple-600 self-start">
                      Leer artículo <ArrowLeft className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </article>
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}
