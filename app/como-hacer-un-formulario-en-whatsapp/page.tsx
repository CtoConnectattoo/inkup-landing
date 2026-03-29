import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Clock, User, ChevronRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ReadingProgress } from "@/components/reading-progress"
import { QuickAnswer } from "@/components/quick-answer"
import { TableOfContents } from "@/components/table-of-contents"
import { BlogCta } from "@/components/blog-cta"
import { AuthorCard } from "@/components/author-card"
import { ShareButtons } from "@/components/share-buttons"
import FaqSectionBlog from "@/components/faq-section-blog"
import { HowToFormGuide } from "@/components/how-to-form-guide"
import postsData from "@/data/posts.json"

export const metadata: Metadata = {
  title: "Cómo hacer un formulario en WhatsApp gratis en 5 minutos (sin programar) | Inkup",
  description:
    "Crea un formulario en WhatsApp en menos de 10 minutos: sin código, sin web y sin coste. Filtra consultas, recoge datos y llega a cada cliente con contexto antes de responder.",
  keywords:
    "cómo hacer un formulario en whatsapp, formulario whatsapp, crear formulario sin código, whatsapp business, formulario online, inkup",
  openGraph: {
    title: "Cómo hacer un formulario en WhatsApp gratis en 5 minutos (sin programar) | Inkup",
    description:
      "Crea un formulario en WhatsApp en menos de 10 minutos: sin código, sin web y sin coste. Filtra consultas, recoge datos y llega a cada cliente con contexto antes de responder.",
    url: "https://inkup.io/como-hacer-un-formulario-en-whatsapp",
    siteName: "Inkup",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/inkup%20logo%20png-59Er5aqpOGAQMr6kvchos4u9fWUp00.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "es_ES",
    type: "article",
  },
  alternates: {
    canonical: "https://inkup.io/como-hacer-un-formulario-en-whatsapp",
  },
}

// ─── Data ────────────────────────────────────────────────────────────────────

const AUTHOR = {
  name: "María Hidalgo",
  slug: "maria-hidalgo",
  role: "Directora de Marketing y cofundadora",
  bio: "CMO y cofundadora de Inkup, con enfoque en marketing estratégico, construcción de marca y crecimiento en startups tecnológicas.",
  experience:
    "Lidera la estrategia de mercado y expansión de Inkup, con experiencia en comunicación, mentoring de emprendedores y participación activa en el ecosistema startup.",
  image: "/authors/maria-hidalgo.png",
}

const PUBLISHED_AT = "2026-03-29"
const READING_TIME = "10 min"
const CANONICAL_URL = "https://inkup.io/como-hacer-un-formulario-en-whatsapp"
const TITLE = "Cómo hacer un formulario en WhatsApp: guía completa para negocios de servicios"

const TOC_ITEMS = [
  { id: "que-es", title: "¿Qué es un formulario de WhatsApp?", level: 2 as const },
  { id: "para-que-sectores", title: "¿Para qué negocios tiene sentido?", level: 2 as const },
  { id: "3-formas", title: "Las 3 formas reales de hacerlo", level: 2 as const },
  { id: "comparativa", title: "Comparativa rápida", level: 2 as const },
  { id: "preguntas-frecuentes", title: "Preguntas frecuentes", level: 2 as const },
]

const QUICK_ANSWER_BULLETS = [
  "**Abre Inkup** y crea un nuevo asistente tipo WhatsApp (sin cuenta de pago ni web).",
  "**Añade los campos** que necesitas antes de responder: servicio, zona, disponibilidad, referencia...",
  "**Previsualiza el flujo** tal y como lo verá tu cliente en móvil.",
  "**Copia el enlace** y ponlo en tu bio, Google Business o Stories.",
  "**Recibe consultas en WhatsApp** con toda la información ya estructurada desde el primer mensaje.",
]

const ONE_LINE_DEFINITION =
  "Un formulario de WhatsApp es un flujo corto de preguntas que el cliente responde antes de contactarte, y cuyas respuestas llegan a tu WhatsApp como un mensaje estructurado con toda la información necesaria."

const FAQ_ITEMS = [
  {
    question: "¿Mi cliente tiene que instalar algo?",
    answer:
      "No. Tu cliente solo necesita un navegador (el que ya tiene en el móvil) y WhatsApp. Abre el enlace, responde las preguntas y le redirige a WhatsApp con el mensaje ya escrito. Sin apps, sin registros, sin fricciones.",
  },
  {
    question: "¿Cuánto tiempo tarda en configurarse?",
    answer:
      "Entre 5 y 10 minutos para tener un formulario funcionando. Creas el asistente, añades las preguntas que necesites (servicio, zona, disponibilidad…), previsualiza cómo lo verá el cliente y copias el enlace. Sin código ni web.",
  },
  {
    question: "¿Qué pasa si el cliente no termina de rellenarlo?",
    answer:
      "Si el cliente abandona a mitad, simplemente no recibes ese mensaje en WhatsApp. No es un problema: los que sí lo terminan son consultas con contexto real. En la práctica, la tasa de finalización es alta porque el flujo es corto (3-5 preguntas) y va directo al punto.",
  },
  {
    question: "¿Necesito tener web?",
    answer:
      "No, te damos un enlace directo para compartir. Puedes usarlo en tus redes sociales, Google My Business, tarjetas de visita o donde quieras sin necesidad de tener una página web.",
  },
  {
    question: "¿Funciona con WhatsApp normal o solo con Business?",
    answer:
      "Funciona con cualquier cuenta de WhatsApp: personal, Business o Business API. Inkup genera un mensaje estructurado que llega a tu número, sea cual sea el tipo de cuenta. No necesitas WhatsApp Business para empezar.",
  },
  {
    question: "¿Es realmente gratuito? ¿Qué límites tiene?",
    answer:
      "Sí. El plan gratuito incluye hasta 20 consultas al mes sin tarjeta de crédito. Puedes crear tu asistente, configurar las preguntas y probarlo con clientes reales. Cuando superes ese volumen o quieras personalización de marca, puedes pasarte a un plan de pago.",
  },
  {
    question: "¿El asistente se adapta al idioma de mi cliente?",
    answer:
      "Sí. El asistente detecta el idioma configurado en el dispositivo de tu cliente y se adapta automáticamente. Además, el cliente puede cambiarlo manualmente en cualquier momento dentro del flujo.",
  },
  {
    question: "¿Puedo personalizarlo visualmente con mis colores?",
    answer:
      "Sí, con un plan de pago puedes adaptar la paleta de colores, imagen de fondo y otros elementos visuales para que el asistente refleje tu marca. En el plan gratuito el diseño es estándar pero funcional.",
  },
  {
    question: "Tengo ya un CRM o programa de gestión, ¿es compatible?",
    answer:
      "Sí. Inkup actúa antes de que el cliente llegue a tu CRM: captura la información, la manda a WhatsApp y tú puedes exportar las consultas para importarlas donde quieras. También se puede integrar en tu web como botón flotante o asistente embebido.",
  },
]

const RELATED_SLUGS = [
  "plantilla-mensaje-ausencia-que-convierte",
  "como-pasar-de-instagram-a-whatsapp-con-contexto",
]

// ─── Structured data ─────────────────────────────────────────────────────────

function StructuredData() {
  const blogPosting = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: TITLE,
    description:
      "Crea un formulario en WhatsApp en menos de 10 minutos: sin código, sin web y sin coste. Filtra consultas, recoge datos y llega a cada cliente con contexto antes de responder.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/inkup%20logo%20png-59Er5aqpOGAQMr6kvchos4u9fWUp00.png",
    author: {
      "@type": "Person",
      name: AUTHOR.name,
      url: `https://inkup.io/autores/${AUTHOR.slug}`,
    },
    publisher: {
      "@type": "Organization",
      name: "Inkup",
      logo: { "@type": "ImageObject", url: "https://inkup.io/favicon.png" },
    },
    datePublished: PUBLISHED_AT,
    dateModified: PUBLISHED_AT,
    mainEntityOfPage: { "@type": "WebPage", "@id": CANONICAL_URL },
    url: CANONICAL_URL,
    inLanguage: "es-ES",
    articleSection: "Guías",
    timeRequired: "PT10M",
  }

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Cómo hacer un formulario en WhatsApp",
    description: "Guía paso a paso para crear un formulario conversacional que se integra con WhatsApp.",
    totalTime: "PT10M",
    tool: [{ "@type": "HowToTool", name: "Inkup" }],
    step: [
      {
        "@type": "HowToStep",
        name: "Crea tu asistente",
        text: "Abre Inkup y crea un nuevo Asistente tipo WhatsApp.",
        url: `${CANONICAL_URL}#paso-1`,
      },
      {
        "@type": "HowToStep",
        name: "Añade campos",
        text: "Añade nombre, ciudad, servicio y disponibilidad para captar contexto.",
        url: `${CANONICAL_URL}#paso-2`,
      },
      {
        "@type": "HowToStep",
        name: "Previsualiza",
        text: "Revisa el flujo conversacional y ajusta el orden de preguntas.",
        url: `${CANONICAL_URL}#paso-3`,
      },
      {
        "@type": "HowToStep",
        name: "Comparte el enlace",
        text: "Copia el link del asistente y pégalo en tu bio, Google Business y Stories.",
        url: `${CANONICAL_URL}#paso-4`,
      },
      {
        "@type": "HowToStep",
        name: "Handoff a WhatsApp",
        text: "Recibe consultas en WhatsApp con contexto para responder más rápido.",
        url: `${CANONICAL_URL}#paso-5`,
      },
    ],
  }

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  }

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://inkup.io/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://inkup.io/blog" },
      { "@type": "ListItem", position: 3, name: TITLE, item: CANONICAL_URL },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPosting) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }} />
    </>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ComoHacerFormularioWhatsAppPage() {
  const relatedPosts = RELATED_SLUGS.map((slug) =>
    (postsData as { slug: string; title: string; description: string; image: string; readingTime: string; publishedAt: string }[]).find(
      (p) => p.slug === slug
    )
  ).filter(Boolean)

  return (
    <>
      <StructuredData />
      <ReadingProgress />
      <div className="min-h-screen bg-white">
        <Header />
        <main className="pt-16">

          {/* Breadcrumbs */}
          <section className="container mx-auto px-4 py-6">
            <div className="max-w-4xl mx-auto">
              <nav aria-label="Breadcrumb">
                <ol className="flex items-center justify-center space-x-2 text-sm text-gray-600 flex-wrap gap-y-1">
                  <li>
                    <Link href="/" className="hover:text-purple-600 transition-colors">
                      Inicio
                    </Link>
                  </li>
                  <li><ChevronRight className="w-4 h-4" /></li>
                  <li>
                    <Link href="/blog" className="hover:text-purple-600 transition-colors">
                      Blog
                    </Link>
                  </li>
                  <li><ChevronRight className="w-4 h-4" /></li>
                  <li className="text-black font-medium" aria-current="page">
                    Cómo hacer un formulario en WhatsApp
                  </li>
                </ol>
              </nav>
            </div>
          </section>

          {/* Article header */}
          <section className="container mx-auto px-4 py-8 md:py-12">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 leading-tight text-black">
                {TITLE}
              </h1>
              <div className="flex flex-wrap items-center justify-center gap-6 mb-12 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <Link href={`/autores/${AUTHOR.slug}`} className="hover:text-purple-600 transition-colors">
                    {AUTHOR.name}
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{READING_TIME} de lectura</span>
                </div>
                <time dateTime={PUBLISHED_AT} className="text-gray-500">
                  {new Date(PUBLISHED_AT).toLocaleDateString("es-ES", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
            </div>
          </section>

          {/* Featured image */}
          <section className="container mx-auto px-4 mb-16">
            <div className="max-w-5xl mx-auto">
              <div className="relative w-full h-64 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center">
                <Image
                  src="/images/design-mode/image%281%29%281%29%281%29%281%29%281%29(1).png"
                  alt="Ejemplo de asistente de WhatsApp de Inkup en acción — formulario conversacional en móvil"
                  width={280}
                  height={560}
                  className="h-full w-auto object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </section>

          {/* Content: 2-column layout */}
          <section className="container mx-auto px-4 mb-20">
            <div className="max-w-6xl mx-auto lg:grid lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-10">

              {/* Article body */}
              <div>
                <article className="prose prose-xl max-w-none">

                  {/* Share (mobile) */}
                  <div className="lg:hidden mb-8 not-prose">
                    <ShareButtons title={TITLE} shareUrl={CANONICAL_URL} />
                  </div>

                  {/* TL;DR */}
                  <QuickAnswer
                    summaryBullets={QUICK_ANSWER_BULLETS}
                    oneLineDefinition={ONE_LINE_DEFINITION}
                    subtitle="Cómo hacer un formulario en WhatsApp en 5 pasos"
                    learnMoreHref="#que-es"
                  />

                  {/* Guide content (sections with IDs for TOC) */}
                  <div className="not-prose">
                    <HowToFormGuide />
                  </div>

                  {/* Mid-content CTA */}
                  <div className="my-12 not-prose">
                    <BlogCta
                      title="Pruébalo en 5 minutos"
                      description="Crea tu asistente, añade tus preguntas y comparte el enlace. Las primeras 20 consultas son gratis, sin tarjeta."
                      buttonLabel="Crear mi formulario gratis"
                      href="https://hi.inkup.io/auth/signup?utm_source=guia-formulario-wa&utm_medium=cta_mid"
                      demoHref={undefined}
                    />
                  </div>

                  {/* FAQ */}
                  <div className="not-prose">
                    <h2 id="preguntas-frecuentes" className="text-3xl md:text-4xl font-bold text-black mb-2 px-4">
                      Preguntas frecuentes
                    </h2>
                    <FaqSectionBlog items={FAQ_ITEMS} />
                  </div>

                  {/* Closing CTA */}
                  <div className="my-12 not-prose">
                    <BlogCta
                      title="¿Listo para probarlo?"
                      description="Sin código, sin web, sin tarjeta. Configura tu asistente en menos de 10 minutos y recibe las primeras 20 consultas gratis."
                      buttonLabel="Empezar gratis"
                      href="https://hi.inkup.io/auth/signup?utm_source=guia-formulario-wa&utm_medium=cta_bottom"
                      demoHref="/crear-formulario-whatsapp"
                      demoLabel="Ver el creador →"
                    />
                  </div>

                </article>

                {/* Author card */}
                <AuthorCard
                  name={AUTHOR.name}
                  image={AUTHOR.image}
                  role={AUTHOR.role}
                  bio={AUTHOR.bio}
                  experience={AUTHOR.experience}
                />
              </div>

              {/* Sidebar */}
              <aside className="hidden lg:block">
                <div className="sticky top-24 space-y-6">
                  <TableOfContents items={TOC_ITEMS} />
                  <ShareButtons title={TITLE} shareUrl={CANONICAL_URL} />
                </div>
              </aside>

            </div>
          </section>

          {/* Related posts */}
          {relatedPosts.length > 0 && (
            <section className="container mx-auto px-4 py-16 border-t border-gray-200">
              <div className="max-w-4xl mx-auto">
                <h3 className="text-3xl font-bold mb-12 text-center text-black">Más artículos del blog</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  {relatedPosts.map((post) => (
                    post && (
                      <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                        <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                          <div className="relative h-48 overflow-hidden">
                            <Image
                              src={post.image}
                              alt={`Imagen del artículo: ${post.title}`}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                              sizes="(max-width: 768px) 100vw, 400px"
                            />
                          </div>
                          <div className="p-6">
                            <h4 className="text-xl font-bold group-hover:text-purple-600 transition-colors mb-3 leading-tight">
                              {post.title}
                            </h4>
                            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                              {post.description.substring(0, 120)}...
                            </p>
                            <div className="flex items-center gap-4 text-xs text-gray-500">
                              <span>{post.readingTime}</span>
                              <span>•</span>
                              <time dateTime={post.publishedAt}>
                                {new Date(post.publishedAt).toLocaleDateString("es-ES")}
                              </time>
                            </div>
                          </div>
                        </article>
                      </Link>
                    )
                  ))}
                </div>
              </div>
            </section>
          )}

        </main>
        <Footer />
      </div>
    </>
  )
}
