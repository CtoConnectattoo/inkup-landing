"use client"

import Image from "next/image"
import { ArrowRight, Star } from "lucide-react"
import Script from "next/script"

import { Button } from "@/components/ui/button"
import { FaqSection } from "@/components/faq-section"
import { Header } from "@/components/header"
import { ReviewSection } from "@/components/review-section"
import { Footer } from "@/components/footer"
import { WhatsAppFormSteps } from "@/components/whatsapp-form-steps"
import { PricingSection } from "@/components/pricing-section"
import { TestimonialVideos } from "@/components/testimonial-videos"
import { TrainingSection } from "@/components/training-section"
import { SuccessCaseSection } from "@/components/success-case-section"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <header className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
                Cierra más citas{" "}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  con menos ruido
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Inkup te ayuda a filtrar mensajes y traducirlos en reservas 24/7 en Whatsapp
              </p>
              <div className="space-y-8">
                <Button size="lg" className="h-14 text-lg px-6 mb-8" asChild>
                  <a href="https://hi.inkup.io/auth/signup">
                    Unirme ahora <ArrowRight className="ml-2" />
                  </a>
                </Button>

                <div>
                  <p className="text-sm text-muted-foreground mb-2">Confiado por más de 3K profesionales</p>

                  <div className="flex items-center justify-center gap-4">
                    <div className="flex -space-x">
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
                  <div className="relative w-full max-w-4xl mx-auto">
                    <div className="aspect-video rounded-lg overflow-hidden shadow-2xl">
                      <video
                        className="w-full h-full object-cover"
                        controls
                        preload="metadata"
                        poster="/images/header-video-poster.png"
                      >
                        <source
                          src="https://firebasestorage.googleapis.com/v0/b/inkup-landing/o/Optimiza%20tu%20atencio%CC%81n%20al%20cliente%20con%20Incap%20%F0%9F%9A%80.mp4?alt=media&token=153df443-bc05-4ceb-a6a6-195d7bc9de6c"
                          type="video/mp4"
                        />
                        Tu navegador no soporta el elemento de video.
                      </video>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Steps Section */}
        <WhatsAppFormSteps />

        {/* Pricing Section */}
        <div id="pricing-section">
          <PricingSection />
        </div>

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

        {/* Nath testimonial video section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Testimonios reales</h2>
              <SuccessCaseSection />
              <TestimonialVideos />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FaqSection />

        {/* Training Section */}
        <TrainingSection />

        {/* CTA Section */}
      </main>

      {/* Footer */}
      <Footer />

      {/* TikTok embed script */}
      <Script src="https://www.tiktok.com/embed.js" strategy="lazyOnload" />
    </div>
  )
}
