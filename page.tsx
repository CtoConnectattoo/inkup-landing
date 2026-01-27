import Image from "next/image"
import Script from "next/script"
import { ArrowRight, CheckCircle, Globe, MessageSquare, Palette, Share2, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PricingSection } from "@/components/pricing-section"
import { FaqSection } from "@/components/faq-section"
import { Header } from "@/components/header"
import { ReviewSection } from "@/components/review-section"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <header className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
                Automatiza tus consultas con IA para{" "}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  crecer más rápido
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Atiende a tus clientes al instante, personaliza tu asistente y gestiona todas tus consultas en un solo
                lugar.
              </p>
              <div className="space-y-8">
                <Button size="lg" className="h-14 px-8 text-lg" asChild>
                  <a href="https://app.inkup.io/signup" target="_blank" rel="noopener noreferrer">
                    Empieza gratis ahora <ArrowRight className="ml-2" />
                  </a>
                </Button>

                <div>
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-3">
                      <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-white">
                        <Image
                          src="/images/design-mode/logo-y-seven-1024x734%281%29%281%29%281%29%281%29%281%29(1).png"
                          alt="Studio Logo"
                          width={40}
                          height={40}
                          className="w-full h-full object-contain bg-white"
                        />
                      </div>
                      <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-white">
                        <Image
                          src="/images/design-mode/lamujerbarbuda_N%20%281%29%281%29%281%29%281%29%281%29%281%29.png"
                          alt="Studio Logo"
                          width={40}
                          height={40}
                          className="w-full h-full object-contain bg-white"
                        />
                      </div>
                      <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-white">
                        <Image
                          src="/images/design-mode/logo%20noble%20art%281%29%281%29%281%29%281%29%281%29(1).png"
                          alt="Studio Logo"
                          width={40}
                          height={40}
                          className="w-full h-full object-contain bg-white"
                        />
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Más de 5000 artistas y estudios confían en Inkup en 15+ países
                  </p>
                </div>
              </div>
            </div>
            <div className="relative w-full max-w-[300px] sm:max-w-[350px] mx-auto md:ml-auto">
              <div className="aspect-[9/16] rounded-xl overflow-hidden shadow-2xl">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Video%20landing%20(online-video-cutter.com)-Sl4LEktbgRQxPjXjCj5JdrBUtnN72K.mp4"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Features Section */}
        <section id="features" className="container mx-auto px-4 py-16 md:py-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Todo lo que necesitas para automatizar tus consultas
            </h2>
            <p className="text-xl text-muted-foreground">
              Configura tu asistente una vez y olvídate de responder las mismas preguntas una y otra vez
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="rounded-lg w-12 h-12 bg-purple-100 flex items-center justify-center mb-4">
                  <Palette className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Personalización Total</h3>
                <p className="text-muted-foreground">
                  Adapta tu asistente a tu imagen y marca. Configura las preguntas que quieres responder
                  automáticamente.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="rounded-lg w-12 h-12 bg-pink-100 flex items-center justify-center mb-4">
                  <Share2 className="w-6 h-6 text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Comparte en Todas Partes</h3>
                <p className="text-muted-foreground">
                  Integra tu asistente en WhatsApp, Instagram, TikTok y tu web. Centraliza todas tus consultas.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="rounded-lg w-12 h-12 bg-blue-100 flex items-center justify-center mb-4">
                  <MessageSquare className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Consultas Completas</h3>
                <p className="text-muted-foreground">
                  Recibe todas las consultas organizadas y completas. Ahorra tiempo y mejora tu servicio.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* TikTok Embed Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex justify-center">
            <blockquote
              className="tiktok-embed"
              cite="https://www.tiktok.com/@nath.rubio/video/7362288305179839749"
              data-video-id="7362288305179839749"
              style={{ maxWidth: 605, minWidth: 325 }}
            >
              <section>
                <a
                  target="_blank"
                  title="@nath.rubio"
                  href="https://www.tiktok.com/@nath.rubio?refer=embed"
                  rel="noreferrer"
                >
                  @nath.rubio
                </a>{" "}
                Va de nuevo http://app.inkup.io{" "}
                <a
                  title="tattoos"
                  target="_blank"
                  href="https://www.tiktok.com/tag/tattoos?refer=embed"
                  rel="noreferrer"
                >
                  #tattoos
                </a>{" "}
                <a
                  title="tattooartist"
                  target="_blank"
                  href="https://www.tiktok.com/tag/tattooartist?refer=embed"
                  rel="noreferrer"
                >
                  #tattooartist
                </a>{" "}
                <a
                  title="tatuadoramexicana"
                  target="_blank"
                  href="https://www.tiktok.com/tag/tatuadoramexicana?refer=embed"
                  rel="noreferrer"
                >
                  #tatuadoramexicana
                </a>{" "}
                <a title="tattoo" target="_blank" href="https://www.tiktok.com/tag/tattoo?refer=embed" rel="noreferrer">
                  #tattoo
                </a>{" "}
                <a
                  title="tatuajes"
                  target="_blank"
                  href="https://www.tiktok.com/tag/tatuajes?refer=embed"
                  rel="noreferrer"
                >
                  #tatuajes
                </a>{" "}
                <a
                  title="tatuajes"
                  target="_blank"
                  href="https://www.tiktok.com/tag/tatuajes?refer=embed"
                  rel="noreferrer"
                >
                  #tatuajes
                </a>{" "}
                <a
                  target="_blank"
                  title="♬ sonido original - Nathalia Rubio"
                  href="https://www.tiktok.com/music/sonido-original-7362288474312149766?refer=embed"
                  rel="noreferrer"
                >
                  ♬ sonido original - Nathalia Rubio
                </a>
              </section>
            </blockquote>
          </div>
          <Script src="https://www.tiktok.com/embed.js" strategy="lazyOnload" />
        </section>

        {/* Social Proof */}
        <section id="testimonials" className="bg-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Artistas de todo el mundo confían en Inkup</h2>
              <p className="text-xl text-muted-foreground">
                Nos respaldan más de 5000 artistas y estudios en más de 15 países
              </p>
            </div>
            <ReviewSection />
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing">
          <PricingSection />
        </section>

        {/* New Video Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            {/* Header Section */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Mira cómo Nath usa Inkup para automatizar sus consultas
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Descubre cómo Nath Rubio, tatuadora profesional mexicana, utiliza Inkup para automatizar sus consultas y
                transformar su negocio.
              </p>
            </div>

            {/* Video Section */}
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
              <div className="flex justify-center">
                <div
                  dangerouslySetInnerHTML={{
                    __html: `
                      <blockquote class="tiktok-embed" cite="https://www.tiktok.com/@nath.rubio/video/7362288305179839749" data-video-id="7362288305179839749" style="max-width: 605px; min-width: 325px;">
                        <section>
                          <a target="_blank" title="@nath.rubio" href="https://www.tiktok.com/@nath.rubio?refer=embed">@nath.rubio</a>
                          Va de nuevo http://app.inkup.io
                          <a title="tattoos" target="_blank" href="https://www.tiktok.com/tag/tattoos?refer=embed">#tattoos</a>
                          <a title="tattooartist" target="_blank" href="https://www.tiktok.com/tag/tattooartist?refer=embed">#tattooartist</a>
                          <a title="tatuadoramexicana" target="_blank" href="https://www.tiktok.com/tag/tatuadoramexicana?refer=embed">#tatuadoramexicana</a>
                          <a title="tattoo" target="_blank" href="https://www.tiktok.com/tag/tattoo?refer=embed">#tattoo</a>
                          <a title="tatuajes" target="_blank" href="https://www.tiktok.com/tag/tatuajes?refer=embed">#tatuajes</a>
                          <a title="tatuajes" target="_blank" href="https://www.tiktok.com/tag/tatuajes?refer=embed">#tatuajes</a>
                          <a target="_blank" title="♬ sonido original - Nathalia Rubio" href="https://www.tiktok.com/music/sonido-original-7362288474312149766?refer=embed">♬ sonido original - Nathalia Rubio</a>
                        </section>
                      </blockquote>
                    `,
                  }}
                />
                <script async src="https://www.tiktok.com/embed.js"></script>
              </div>
            </div>

            {/* Description Section */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">¿Por qué Nath eligió Inkup?</h3>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">Automatización Inteligente</h4>
                  <p className="text-gray-600 text-sm">
                    Inkup automatiza las consultas iniciales, permitiendo a Nath enfocarse en lo que más le gusta:
                    tatuar.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">Ahorro de Tiempo</h4>
                  <p className="text-gray-600 text-sm">
                    Reduce significativamente el tiempo dedicado a responder consultas repetitivas por WhatsApp.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">Mejor Experiencia</h4>
                  <p className="text-gray-600 text-sm">
                    Sus clientes reciben respuestas inmediatas y profesionales las 24 horas del día.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FaqSection />

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Empieza a automatizar tus consultas{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                hoy mismo
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Prueba Inkup gratis y descubre cómo puede ayudarte a crecer tu negocio
            </p>
            <div className="flex justify-center">
              <Button size="lg" className="h-14 px-8 text-lg" asChild>
                <a href="https://app.inkup.io/signup" target="_blank" rel="noopener noreferrer">
                  Empieza gratis ahora <ArrowRight className="ml-2" />
                </a>
              </Button>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                Sin tarjeta de crédito
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                Configuración en minutos
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                Soporte personalizado
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Image
                src="/images/design-mode/inkup%20logo%20png%281%29%281%29%281%29%281%29%281%29(1).png"
                alt="Inkup Logo"
                width={32}
                height={32}
              />
              <span className="font-semibold">Inkup</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4" />
              <span className="text-sm text-muted-foreground">Disponible en 15+ países</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
