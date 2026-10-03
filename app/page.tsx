"use client"

import Script from "next/script"

import "@/styles/home-demo.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ReviewSection } from "@/components/review-section"
import { TestimonialVideos } from "@/components/testimonial-videos"
import { SuccessCaseSection } from "@/components/success-case-section"
import { PricingSection, type PricingTier } from "@/components/pricing-section"

import { HomeHero } from "@/components/home/home-hero"
import { ProblemSection } from "@/components/home/problem-section"
import { HowItWorks } from "@/components/home/how-it-works"
import { ShareSection } from "@/components/home/share-section"
import { PanelSection } from "@/components/home/panel-section"
import { HomeFaq } from "@/components/home/home-faq"
import { FinalCta } from "@/components/home/final-cta"

/* Planes tal y como existen hoy en hi.inkup.io (config/plans.ts de la app). */
const HOME_TIERS: PricingTier[] = [
  {
    name: "Profesional",
    monthlyPrice: 29,
    annualPrice: 12,
    ctaLabel: "Empezar la prueba gratis",
    features: [
      "100 consultas al mes",
      "Hasta 5 asistentes",
      "Selectores con imágenes y 5 idiomas",
      "Panel de consultas con exportación",
      "Cancela cuando quieras",
    ],
  },
  {
    name: "Premium",
    monthlyPrice: 49,
    annualPrice: 19,
    isPopular: true,
    badgeText: "Más elegido",
    ctaLabel: "Empezar la prueba gratis",
    features: [
      "1.000 consultas al mes",
      "Hasta 10 asistentes",
      "Sin marca de agua de Inkup",
      "Soporte prioritario",
      "Todo lo del plan Profesional",
    ],
  },
]

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <HomeHero />
        <ProblemSection />
        <HowItWorks />
        <ShareSection />
        <PanelSection />

        {/* Social Proof */}
        <section id="social-proof" className="bg-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Lo que dicen de Inkup</h2>
              <p className="text-xl text-muted-foreground">Más de 3.300 profesionales en 15 países</p>
            </div>
            <ReviewSection />
          </div>
        </section>

        {/* Testimonios en vídeo */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Testimonios reales</h2>
              <SuccessCaseSection />
              <TestimonialVideos />
            </div>
          </div>
        </section>

        {/* Precios */}
        <div id="precios" className="scroll-mt-20">
          <PricingSection
            customTiers={HOME_TIERS}
            title="Prueba 7 días gratis. Después, elige tu plan."
            subtitle="Hoy no pagas nada. Cancela desde tu cuenta cuando quieras."
            note="Al crear tu asistente añades una tarjeta para activar la prueba, pero no se cobra nada hasta que terminan los 7 días. Sin permanencia: cancelas desde tu cuenta en un clic."
          />
        </div>

        <HomeFaq />
        <FinalCta />
      </main>

      <Footer />

      {/* TikTok embed script */}
      <Script src="https://www.tiktok.com/embed.js" strategy="lazyOnload" />
    </div>
  )
}
