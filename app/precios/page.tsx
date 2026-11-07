import type { Metadata } from "next"
import Link from "next/link"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PricingSection } from "@/components/pricing-section"
import { ReviewSection } from "@/components/review-section"
import { FAQAccordion } from "@/components/alternativas/FAQAccordion"
import { HOME_TIERS } from "@/data/plans"
import type { FAQItem } from "@/data/alternativas/types"

const TITLE = "Precios de Inkup: automatiza Instagram con precio fijo"
const DESCRIPTION =
  "Desde 12 €/mes + IVA con pago anual. Respuestas automáticas en Instagram y paso a WhatsApp, sin pagar por contacto. 7 días de prueba."
const CANONICAL = "https://inkup.io/precios"
const SIGNUP_URL = "https://hi.inkup.io/auth/signup"

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: { title: TITLE, description: DESCRIPTION, url: CANONICAL },
  twitter: { title: TITLE, description: DESCRIPTION },
  alternates: { canonical: CANONICAL },
}

const COMPARISON: { criterio: string; inkup: string; manychat: string; meta: string }[] = [
  {
    criterio: "Precio",
    inkup: "Fijo, desde 12 €/mes + IVA (anual)",
    manychat: "Según contactos activos; gratis hasta 25",
    meta: "0 €",
  },
  {
    criterio: "Comentario → DM",
    inkup: "Sí",
    manychat: "Sí",
    meta: "Sí, solo desde escritorio y con pocas palabras exactas",
  },
  { criterio: "Velocidad de respuesta", inkup: "Al momento", manychat: "Al momento", meta: "Con retraso" },
  {
    criterio: "Paso a WhatsApp con la consulta escrita",
    inkup: "Incluido",
    manychat: "Hay que configurarlo",
    meta: "No",
  },
  {
    criterio: "Español",
    inkup: "Sí, con soporte por WhatsApp",
    manychat: "Principalmente inglés",
    meta: "Sí, sin soporte",
  },
]

const FAQS: FAQItem[] = [
  { question: "¿Hay que pagar por contacto?", answer: "No. El precio es el mismo cada mes." },
  {
    question: "¿Hay prueba gratis?",
    answer: "7 días sin límite de consultas. Se añade tarjeta, pero no se cobra hasta el día 7.",
  },
  { question: "¿Puedo cancelar cuando quiera?", answer: "Sí, desde tu cuenta, sin permanencia." },
  { question: "¿Los precios llevan IVA?", answer: "No, el IVA va aparte." },
  {
    question: "¿Qué pasa si supero las consultas del plan?",
    answer:
      "Te avisamos cuando llegues al límite para que decidas si quieres pasar a un plan superior. No se hacen cargos adicionales automáticos.",
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <section className="container mx-auto px-4 pt-12 md:pt-20 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[1.05]">
              Precio fijo.{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Sin pagar por contacto.
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Automatiza comentarios, historias y DMs de Instagram por lo mismo cada mes, tengas 100 o 10.000
              seguidores escribiéndote.
            </p>
            <p className="text-xs text-gray-400">Actualizado: noviembre de 2026</p>
          </div>
        </section>

        <PricingSection
          customTiers={HOME_TIERS}
          title="Elige tu plan"
          subtitle="7 días de prueba. Sin permanencia. Precios + IVA."
          priceSuffix="+ IVA"
          annualNote="con pago anual"
          note="Al empezar la prueba añades una tarjeta, pero no se cobra nada hasta el día 7. Cancelas desde tu cuenta cuando quieras."
        />

        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-8">
                Inkup vs ManyChat vs Meta gratis
              </h2>
              <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
                <table className="w-full min-w-[560px] text-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th scope="col" className="px-4 py-4 text-left font-semibold text-gray-900">
                        <span className="sr-only">Criterio</span>
                      </th>
                      <th scope="col" className="px-4 py-4 text-left font-semibold text-purple-600">
                        Inkup
                      </th>
                      <th scope="col" className="px-4 py-4 text-left font-semibold text-gray-900">
                        ManyChat
                      </th>
                      <th scope="col" className="px-4 py-4 text-left font-semibold text-gray-900">
                        Meta (gratis)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {COMPARISON.map((row, i) => (
                      <tr key={row.criterio} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                        <th scope="row" className="px-4 py-4 text-left font-medium text-gray-900">
                          {row.criterio}
                        </th>
                        <td className="px-4 py-4 text-gray-900">{row.inkup}</td>
                        <td className="px-4 py-4 text-gray-600">{row.manychat}</td>
                        <td className="px-4 py-4 text-gray-600">{row.meta}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-center text-sm text-muted-foreground">
                ¿Vienes de ManyChat?{" "}
                <Link href="/alternativas/manychat" className="text-purple-600 underline underline-offset-2">
                  Mira la comparativa completa
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Lo que dicen de Inkup</h2>
              <p className="text-xl text-muted-foreground">Más de 3.300 profesionales en 15 países</p>
            </div>
            <ReviewSection />
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Preguntas frecuentes sobre precios</h2>
              <FAQAccordion items={FAQS} pageUrl={CANONICAL} />
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto rounded-2xl bg-gradient-to-r from-purple-50 to-pink-50 p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Pruébalo 7 días en tu Instagram</h2>
              <p className="text-gray-600 mb-6">Hoy no pagas nada. Sin permanencia.</p>
              <a
                href={SIGNUP_URL}
                className="inline-flex items-center justify-center h-14 px-8 text-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-full shadow-lg transition-all"
              >
                Empezar la prueba gratis
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
