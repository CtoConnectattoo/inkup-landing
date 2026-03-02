import type { Metadata } from "next"
import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Reserva tu demo | Inkup",
  description: "Reserva una demo personalizada y descubre cómo Inkup puede ayudarte a cerrar más citas con menos ruido.",
  openGraph: {
    title: "Reserva tu demo | Inkup",
    description: "Reserva una demo personalizada y descubre cómo Inkup puede ayudarte a cerrar más citas con menos ruido.",
    url: "https://inkup.io/demo",
    siteName: "Inkup",
    locale: "es_ES",
    type: "website",
  },
}

const TALLY_EMBED_URL =
  "https://tally.so/embed/A7laay?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-white">
      <Script src="https://tally.so/widgets/embed.js" strategy="afterInteractive" />
      <Header />
      <main className="pt-24 pb-16">
        <section className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
              Reserva tu{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                demo
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Cuéntanos sobre tu negocio y te mostramos cómo Inkup puede ayudarte a cerrar más citas.
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <iframe
              data-tally-src={TALLY_EMBED_URL}
              loading="lazy"
              width="100%"
              height="600"
              style={{ border: 0 }}
              title="Reserva tu demo"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
