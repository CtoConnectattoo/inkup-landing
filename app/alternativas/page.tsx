import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ALTERNATIVAS } from "@/data/alternativas"

const TITLE = "Alternativas a ManyChat y otros bots en español | Inkup"
const DESCRIPTION =
  "Comparativas de Inkup con ManyChat, Landbot y otras herramientas para automatizar Instagram: qué hace cada una, precios y cuándo elegir cada opción."
const CANONICAL = "https://inkup.io/alternativas"

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: { title: TITLE, description: DESCRIPTION, url: CANONICAL },
  twitter: { title: TITLE, description: DESCRIPTION },
  alternates: { canonical: CANONICAL },
}

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inkup", item: "https://inkup.io" },
    { "@type": "ListItem", position: 2, name: "Alternativas", item: CANONICAL },
  ],
}

const ITEM_LIST_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: ALTERNATIVAS.map((a, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `Alternativa a ${a.competitorName}`,
    url: `${CANONICAL}/${a.slug}`,
  })),
}

export default function AlternativasPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ITEM_LIST_SCHEMA) }} />
      <div className="min-h-screen bg-white">
        <Header />
        <main className="pt-16">
          <section className="container mx-auto px-4 py-8 md:py-12">
            <div className="max-w-4xl mx-auto">
              <nav aria-label="Breadcrumb" className="mb-8">
                <ol className="flex items-center gap-2 text-sm text-gray-600">
                  <li>
                    <Link href="/" className="hover:text-purple-600 transition-colors">
                      Inkup
                    </Link>
                  </li>
                  <li>/</li>
                  <li className="text-black font-medium" aria-current="page">
                    Alternativas
                  </li>
                </ol>
              </nav>

              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-black mb-4">
                Alternativas a ManyChat y otras herramientas, comparadas con Inkup
              </h1>
              <p className="text-lg text-gray-600 mb-10">
                Si buscas una alternativa a ManyChat en español para responder comentarios, historias y DMs de
                Instagram, aquí tienes cada comparativa: qué hace cada herramienta, cuánto cuesta y en qué casos te
                conviene más la otra. Inkup tiene precio fijo y no cobra por contacto.
              </p>

              <ul className="grid gap-4 md:grid-cols-2">
                {ALTERNATIVAS.map((a) => (
                  <li key={a.slug}>
                    <Link
                      href={`/alternativas/${a.slug}`}
                      className="group flex h-full flex-col gap-3 rounded-2xl border border-gray-200 p-6 shadow-sm transition-all hover:border-purple-300 hover:shadow-md"
                    >
                      <h2 className="text-xl font-bold text-black">Inkup vs {a.competitorName}</h2>
                      <p className="text-gray-600 flex-1">{a.metaDescription}</p>
                      <span className="inline-flex items-center text-sm font-semibold text-purple-600">
                        Ver comparativa
                        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                      <span className="text-xs text-gray-400">Última verificación: {a.lastVerified}</span>
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 md:p-12 my-16 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">Precio fijo, sin pagar por contacto</h2>
                <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                  Desde 12 €/mes + IVA con pago anual. 7 días de prueba.{" "}
                  <Link href="/precios" className="text-purple-600 underline underline-offset-2">
                    Ver precios
                  </Link>
                </p>
                <Link
                  href="https://hi.inkup.io/auth/signup"
                  className="inline-flex items-center justify-center h-14 px-8 text-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-full shadow-lg transition-all"
                >
                  Empezar la prueba gratis
                </Link>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
