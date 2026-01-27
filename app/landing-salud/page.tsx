"use client"

import Image from "next/image"
import { ArrowRight, CheckCircle, Star } from "lucide-react"
import Script from "next/script"

import { Button } from "@/components/ui/button"
import { FaqSection } from "@/components/faq-section"
import { ReviewSection } from "@/components/review-section"
import { Footer } from "@/components/footer"
import { WhatsAppFormSteps } from "@/components/whatsapp-form-steps"
import { SaludHeader } from "@/components/salud-header"

export default function SaludLandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <SaludHeader />
      <main className="pt-16">
        {/* Hero Section */}
        <header className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
                Cierra más citas{" "}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  con menos ruido
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Inkup te ayuda a filtrar mensajes y traducirlos en reservas 24/7
              </p>
              <div className="space-y-8">
                <Button size="lg" className="h-14 text-lg px-6" asChild>
                  <a
                    href="https://hi.inkup.io/auth/signup?utm_source=landing-salud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Crea tu asistente gratis <ArrowRight className="ml-2" />
                  </a>
                </Button>

                <p className="text-sm text-muted-foreground">Sin tarjeta • Sólo un minuto</p>

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
                </div>
              </div>
            </div>
            <div className="hidden md:flex relative flex-col md:flex-row justify-center items-center gap-8 w-full max-w-[600px] mx-auto md:ml-auto">
              {/* Asistente virtual */}
              <div className="relative">
                <Image
                  src="/images/design-mode/image%281%29%281%29%281%29%281%29%281%29(1).png"
                  alt="Ejemplo de asistente virtual de Inkup en acción"
                  width={280}
                  height={560}
                  className="rounded-2xl shadow-2xl"
                />

                {/* Texto "Así se ve tu formulario" - visible en mobile */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 md:hidden">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-2 rounded-lg text-sm font-medium text-center">
                    ¡Así se ve tu asistente!
                  </div>
                </div>

                {/* Flecha apuntando al formulario - solo desktop */}
                <div className="absolute -left-16 top-1/2 transform -translate-y-1/2 hidden lg:block">
                  <div className="flex items-center gap-2">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-2 rounded-lg text-sm font-medium">
                      ¡Así se ve tu asistente!
                    </div>
                    <ArrowRight className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
              </div>

              {/* Conversación WhatsApp */}
              <div className="relative">
                <div className="bg-[#E5DDD5] rounded-2xl shadow-2xl w-64 h-96 overflow-hidden relative">
                  {/* Header de WhatsApp */}
                  <div className="bg-[#075E54] text-white pt-6 pb-2 px-3 flex items-center gap-2">
                    <div className="flex items-center gap-3 w-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-chevron-left"
                      >
                        <path d="m15 18-6-6 6-6" />
                      </svg>
                      <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden">
                        <span className="text-xs font-bold text-gray-600">MC</span>
                      </div>
                      <div>
                        <p className="font-semibold text-sm">Maria Cliente</p>
                        <p className="text-xs opacity-75">en línea</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-phone"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                  </div>

                  {/* Fondo de chat */}
                  <div className="h-full bg-[#E5DDD5] bg-opacity-90 p-3 pt-2 flex flex-col">
                    {/* Mensaje de WhatsApp */}
                    <div className="space-y-2 flex-1">
                      <div className="bg-white rounded-lg p-2 max-w-[85%] shadow-sm">
                        <p className="text-sm text-gray-800 leading-relaxed">
                          Hola, soy María y me interesa lo siguiente:
                          <br />
                          <br />
                          <strong>Descripción:</strong> Águila real
                          <br />
                          <strong>Tamaño:</strong> 10x15 cms
                          <br />
                          <strong>Zona:</strong> Hombro
                          <br />
                          <strong>Disponibilidad:</strong> Mañanas
                        </p>
                        <div className="flex justify-end items-center gap-1 mt-1">
                          <p className="text-[10px] text-gray-500">12:34</p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="#34B7F1"
                            stroke="#34B7F1"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-check-check"
                          >
                            <path d="M18 6 7 17l-5-5" />
                            <path d="m22 10-7.5 7.5L13 16" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Input de mensaje */}
                    <div className="mt-auto flex items-center gap-2 bg-[#F0F0F0] rounded-full p-1 px-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#8696A0"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-smile"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                        <line x1="9" x2="9.01" y1="9" y2="9" />
                        <line x1="15" x2="15.01" y1="9" y2="9" />
                      </svg>
                      <input type="text" placeholder="Mensaje" className="bg-transparent text-sm flex-1 outline-none" />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#8696A0"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-mic"
                      >
                        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                        <line x1="12" x2="12" y1="19" y2="22" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Texto "Así te llega" - visible en mobile */}
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 md:hidden">
                  <div className="bg-[#25D366] text-white px-3 py-2 rounded-lg text-sm font-medium text-center">
                    Así te llega a Whatsapp
                  </div>
                </div>

                {/* Flecha "Así te llega" - solo desktop */}
                <div className="absolute -right-20 top-1/2 transform -translate-y-1/2 hidden xl:block">
                  <div className="flex items-center gap-2">
                    <ArrowRight className="w-6 h-6 text-[#25D366]" />
                    <div className="bg-[#25D366] text-white px-3 py-2 rounded-lg text-sm font-medium">Así te llega</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Nath testimonial video section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Testimonio de Nath</h2>
              <div className="flex justify-center">
                <div
                  className="bg-white rounded-2xl shadow-lg p-6 max-w-2xl w-full"
                  dangerouslySetInnerHTML={{
                    __html: `
                      <blockquote class="tiktok-embed" cite="https://www.tiktok.com/@nath.rubio/video/7387491603411242246" data-video-id="7387491603411242246" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@nath.rubio" href="https://www.tiktok.com/@nath.rubio?refer=embed">@nath.rubio</a> @Inkup  https:&#47;&#47;app.inkup.io&#47;signup <a title="inkup" target="_blank" href="https://www.tiktok.com/tag/inkup?refer=embed">#InkUp</a> <a title="tatuajesprofecionales" target="_blank" href="https://www.tiktok.com/tag/tatuajesprofecionales?refer=embed">#tatuajesprofecionales</a> <a title="citasinkup" target="_blank" href="https://www.tiktok.com/tag/citasinkup?refer=embed">#citasinkup</a> <a title="tattoocommunity" target="_blank" href="https://www.tiktok.com/tag/tattoocommunity?refer=embed">#tattoocommunity</a> <a title="ahorratiempo" target="_blank" href="https://www.tiktok.com/tag/ahorratiempo?refer=embed">#ahorratiempo</a> <a title="tattoo" target="_blank" href="https://www.tiktok.com/tag/tattoo?refer=embed">#tattoo</a> <a title="tatuajes" target="_blank" href="https://www.tiktok.com/tag/tatuajes?refer=embed">#tatuajes</a> <a title="tatuadora" target="_blank" href="https://www.tiktok.com/tag/tatuadora?refer=embed">#tatuadora</a> <a title="info" target="_blank" href="https://www.tiktok.com/tag/info?refer=embed">#info</a> <a target="_blank" title="♬ sonido original - Nathalia Rubio" href="https://www.tiktok.com/music/sonido-original-7387491643217365765?refer=embed">♬ sonido original - Nathalia Rubio</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>
                    `,
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section id="testimonials" className="bg-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Lo que dicen de Inkup</h2>
              <p className="text-xl text-muted-foreground">+3327 profesionales en +15 países</p>
            </div>
            <ReviewSection />
          </div>
        </section>

        {/* Steps Section */}
        <WhatsAppFormSteps />

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
                <a
                  href="https://hi.inkup.io/auth/signup?utm_source=landing-salud"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Quiero mi asistente ya <ArrowRight className="ml-2" />
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
      <Footer />

      {/* TikTok embed script */}
      <Script src="https://www.tiktok.com/embed.js" strategy="lazyOnload" />
    </div>
  )
}
