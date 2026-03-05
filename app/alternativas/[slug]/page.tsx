import Link from "next/link"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ComparativaTable } from "@/components/alternativas/ComparativaTable"
import { TLDRBlock } from "@/components/alternativas/TLDRBlock"
import { FAQAccordion } from "@/components/alternativas/FAQAccordion"
import { WhenCompetitorWins } from "@/components/alternativas/WhenCompetitorWins"
import { manychatData } from "@/data/alternativas/manychat"
import { landbotData } from "@/data/alternativas/landbot"
import type { AlternativaData } from "@/data/alternativas/types"

const alternativasMap: Record<string, AlternativaData> = {
  manychat: manychatData,
  landbot: landbotData,
}

interface PageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  return Object.keys(alternativasMap).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps) {
  const data = alternativasMap[params.slug]
  if (!data) {
    return {}
  }

  const canonical = `https://inkup.io/alternativas/${data.slug}`

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
    },
    alternates: {
      canonical,
    },
  }
}

function BreadcrumbSchema({ slug, competitorName }: { slug: string; competitorName: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inkup", item: "https://inkup.io" },
      { "@type": "ListItem", position: 2, name: "Alternativas", item: "https://inkup.io/alternativas" },
      {
        "@type": "ListItem",
        position: 3,
        name: competitorName,
        item: `https://inkup.io/alternativas/${slug}`,
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default async function AlternativaPage({ params }: PageProps) {
  const { slug } = params
  const data = alternativasMap[slug]

  if (!data) {
    notFound()
  }

  const canonicalUrl = `https://inkup.io/alternativas/${data.slug}`

  return (
    <>
      <BreadcrumbSchema slug={data.slug} competitorName={data.competitorName} />
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
                  <li>
                    <Link href="/alternativas" className="hover:text-purple-600 transition-colors">
                      Alternativas
                    </Link>
                  </li>
                  <li>/</li>
                  <li className="text-black font-medium" aria-current="page">
                    {data.competitorName}
                  </li>
                </ol>
              </nav>

              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-black mb-2">
                {data.h1}
              </h1>
              <p className="text-xs text-gray-400 mb-6">Última verificación: {data.lastVerified}</p>

              <TLDRBlock title={data.tldr.title} items={data.tldr.items} />

              <h2 className="text-2xl font-bold text-black mt-12 mb-4">
                El problema que ambos intentan resolver
              </h2>
              <div
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: data.problemSection }}
              />

              <h2 className="text-2xl font-bold text-black mt-12 mb-4">
                Qué hace {data.competitorName} realmente
              </h2>
              <div
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: data.competitorSection }}
              />

              <h2 className="text-2xl font-bold text-black mt-12 mb-4">
                Comparativa directa
              </h2>
              <ComparativaTable rows={data.comparativaRows} competitorName={data.competitorName} />

              <h2 className="text-2xl font-bold text-black mt-12 mb-4">
                Qué hace Inkup diferente
              </h2>
              <div
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: data.differenceSection }}
              />

              <WhenCompetitorWins
                competitorName={data.competitorName}
                items={data.whenCompetitorWins}
              />

              <h2 className="text-2xl font-bold text-black mt-12 mb-4">
                Preguntas frecuentes
              </h2>
              <FAQAccordion items={data.faqs} pageUrl={canonicalUrl} />

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 md:p-12 my-16 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
                  Prueba Inkup gratis
                </h2>
                <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                  Crea tu cuenta en minutos y empieza a centralizar WhatsApp, Instagram y web con un flujo claro.
                </p>
                <Link
                  href="https://hi.inkup.io/auth/signup"
                  className="inline-flex items-center justify-center h-14 px-8 text-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-full shadow-lg transition-all"
                >
                  Crear cuenta gratis
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
