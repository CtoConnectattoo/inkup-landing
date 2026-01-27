"use client"

import Image from "next/image"
import { ArrowRight, Star } from "lucide-react"
import Script from "next/script"

import { Button } from "@/components/ui/button"
import { FaqSection } from "@/components/faq-section"
import { ReviewSection } from "@/components/review-section"
import { Footer } from "@/components/footer"
import { WhatsAppFormSteps } from "@/components/whatsapp-form-steps"
import { PricingSection } from "@/components/pricing-section"
import { TestimonialVideos } from "@/components/testimonial-videos"
import { TrainingSection } from "@/components/training-section"
import { SuccessCaseSection } from "@/components/success-case-section"
import { CountdownBanner } from "@/components/countdown-banner"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <CountdownBanner />

      <main>
        {/* Hero Section */}
        <header className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
                ¿Preparad@{" "}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  para crecer?
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Únete a una comunidad global. Exclusivo para alumn@s del entrenamiento
              </p>
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Oferta activa solo durante{" "}
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      48H
                    </span>
                  </h2>
                  <p className="text-lg text-gray-600">Este precio jamás subirá para ti</p>
                </div>

                <Button size="lg" className="h-14 text-lg px-6 mb-8" asChild>
                  <a href="#pricing-section">
                    Unirme ahora <ArrowRight className="ml-2" />
                  </a>
                </Button>

                <div className="mt-8 flex justify-center">
                  <div className="w-full max-w-sm md:max-w-md">
                    <video className="w-full h-auto rounded-2xl shadow-2xl" controls playsInline preload="metadata">
                      <source
                        src="https://firebasestorage.googleapis.com/v0/b/inkup-funnel-whatsapp/o/V3F1.mp4?alt=media&token=c4079666-b022-4fe1-a894-7425a87cc42e"
                        type="video/mp4"
                      />
                      Tu navegador no soporta el elemento de video.
                    </video>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-2">Confiado por más de 3K profesionales</p>

                  <div className="flex items-center justify-center gap-4">
                    <div className="flex -space-x-2">
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

                <div className="mt-12">
                  <div className="relative w-full max-w-4xl mx-auto"></div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Steps Section */}
        <WhatsAppFormSteps
          title={
            <>
              Lo que incluye{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                nuestra oferta
              </span>
            </>
          }
          description="Solo disponible 48H, luego desaparece."
        />

        {/* Nath testimonial video section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                De mensajes caóticos a más citas confirmadas: sus resultados
              </h2>
              <SuccessCaseSection />
              <TestimonialVideos />
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <div id="pricing-section">
          <PricingSection
            title={
              <>
                Nuestra{" "}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  mejor oferta
                </span>
              </>
            }
            subtitle="Este precio no subirá jamás para ti"
            defaultPeriod="annual"
            customTiers={[
              {
                name: "Top",
                monthlyPrice: 12,
                annualPrice: 12,
                oldMonthlyPrice: 49,
                oldAnnualPrice: 19,
                badgeText: "Oferta exclusiva",
                features: [
                  "Leads ilimitados",
                  "Personalización visual",
                  "Dashboard de rendimiento",
                  "Panel de consultas",
                  "Garantía de devolución de dinero hasta 11 días",
                  "Soporte 24/7",
                  "Cancela en cualquier momento",
                ],
                isPopular: true,
              },
            ]}
          />
        </div>

        {/* Guarantee and Welcome Call Section */}
        <section className="py-16 md:py-24" style={{ backgroundColor: "#1C2533" }}>
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {/* Guarantee Card */}
              <div className="rounded-2xl border border-gray-700 p-8 md:p-12 text-center">
                <div className="mb-8 flex justify-center">
                  <div className="relative">
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-yellow-400 rounded-full blur-2xl opacity-50"></div>
                    {/* Badge */}
                    <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center border-4 border-yellow-500">
                      <div className="text-center">
                        <div className="text-xs text-gray-800 font-semibold mb-1">Garantía</div>
                        <div className="text-4xl font-bold text-gray-900">11</div>
                        <div className="text-xs text-gray-800 font-semibold">Días</div>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Garantía
                  </span>{" "}
                  <span className="text-white">de devolución</span>
                </h3>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                  Estamos tan seguros que Inkup es lo que necesitas que si no es lo que esperabas te devolvemos el
                  dinero en un plazo de 11 días
                </p>
              </div>

              {/* Welcome Call Card */}
              <div className="rounded-2xl border border-gray-700 p-8 md:p-12 text-center">
                <div className="mb-8 flex justify-center">
                  <div className="relative">
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-yellow-400 rounded-full blur-2xl opacity-50"></div>
                    {/* Badge */}
                    <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center border-4 border-yellow-500">
                      <svg className="w-16 h-16 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Llamada
                  </span>{" "}
                  <span className="text-white">de bienvenida</span>
                </h3>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                  Cuando se active el plan recibirás una llamada por parte del equipo para hacer la configuración
                  inicial de la herramienta y resolver todas las dudas que tengas
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section id="social-proof" className="bg-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Lo que dicen de Inkup</h2>
              <p className="text-xl text-muted-foreground">+3327 profesionales en +15 países</p>
            </div>
            <ReviewSection />
          </div>
        </section>

        {/* FAQ Section */}
        <FaqSection />

        {/* Training Section */}
        <TrainingSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* TikTok embed script */}
      <Script src="https://www.tiktok.com/embed.js" strategy="lazyOnload" />
    </div>
  )
}
