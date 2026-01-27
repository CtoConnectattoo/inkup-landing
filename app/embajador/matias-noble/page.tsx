"use client"
import Image from "next/image"
import { useState } from "react"
import { ArrowRight, CheckCircle, Clock, MessageSquare, Users, Zap, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CodePopup } from "@/components/code-popup"

export default function MatiasNobleAmbassadorPage() {
  const [showCodePopup, setShowCodePopup] = useState(false)
  const [language, setLanguage] = useState<"es" | "en">("es")

  const content = {
    es: {
      recommendedBy: "Recomendado por profesionales",
      heroTitle: "Automatiza tus consultas con IA",
      heroDescription:
        "La herramienta que uso y usamos en Noble Art para agilizar las consultas de clientes, ahora con un beneficio exclusivo para ti.",
      tryFreeButton: "Pruébalo gratis ahora",
      freePlan: "Plan gratuito",
      noCreditCard: "Sin tarjeta de crédito",
      quickSetup: "Configuración en minutos",
      aboutMatias: "Sobre Matías Noble",
      aboutDescription1:
        "Matías Noble, como tatuador internacional de referencia y fundador de Noble Art, conoce los problemas de la gestión del día a día y prioriza la buena atención de cada usuario interesado, es por ello que hace un tiempo adoptó este sistema en su proceso, para optimizar y aunar todas estas consultas en un único canal.",
      aboutDescription2:
        "Su experiencia gestionando cientos de consultas diarias lo llevó a adoptar Inkup para optimizar la comunicación con sus clientes y enfocarse en lo que mejor sabe hacer: crear arte.",
      yearsExperience: "+10 años de experiencia",
      internationalCareer: "Trayectoria internacional",
      whatIsInkup: "¿Qué es Inkup?",
      whatIsDescription:
        "La herramienta que revoluciona la forma en que los tatuadores gestionan sus consultas, ahorrando tiempo y mejorando la experiencia del cliente.",
      howItWorks: "Así funciona en la práctica",
      step1: "1. Crea y personaliza tu asistente en menos de 3 minutos.",
      step2: "2. Comparte tu asistente en tus principales canales",
      step3:
        "3. Unifica y recibe donde quieras toda la información necesaria: tamaño, estilo, colores, disponibilidad y referencias visuales listo para que tú mismo la valores y respondas",
      personalized: "Personalizado",
      immediateResponse: "Respuesta inmediata",
      immediateResponseDesc:
        "Tu asistente de IA responde al instante en WhatsApp e Instagram, recopilando toda la información necesaria del cliente.",
      timeSaving: "Ahorro de tiempo",
      timeSavingDesc:
        "Elimina las consultas repetitivas y recibe solo solicitudes organizadas con toda la información que necesitas.",
      betterExperience: "Mejor experiencia",
      betterExperienceDesc: "Tus clientes obtienen respuestas inmediatas y tú te enfocas en crear arte.",
      limitedOffer: "Oferta limitada",
      exclusiveBenefit: "Beneficio exclusivo para alumnos de Matías academy",
      exclusiveDescription:
        "Usa el código MATIAS y obtén un 20% de descuento adicional en cualquier plan de Inkup. Una oportunidad única para probar la herramienta que está transformando la industria del tatuaje.",
      discount: "-20% de descuento",
      discountDesc: "Disfruta de un descuento del 20% en cualquier plan que elijas.",
      personalizedSetup: "Configuración personalizada",
      personalizedSetupDesc: "Nuestro equipo te ayuda a configurar tu asistente según tu estilo de trabajo.",
      prioritySupport: "Soporte prioritario",
      prioritySupportDesc: "Acceso directo a nuestro equipo de soporte para resolver cualquier duda.",
      activateCode: "Activar código MATIAS ahora",
      offerTerms: "* Oferta válida por tiempo limitado. Sin permanencia ni tarjeta de crédito requerida.",
    },
    en: {
      recommendedBy: "Recommended by professionals",
      heroTitle: "Automate your consultations with AI",
      heroDescription:
        "The tool I use at Noble Art to streamline client consultations, now with an exclusive benefit for you.",
      tryFreeButton: "Try it free now",
      freePlan: "Free plan",
      noCreditCard: "No credit card required",
      quickSetup: "Setup in minutes",
      aboutMatias: "About Matías Noble",
      aboutDescription1:
        "Matías Noble, as an international reference tattoo artist and founder of Noble Art, knows the problems of day-to-day management and prioritizes good attention to each interested user, which is why he adopted this system in his process some time ago, to optimize and unite all these consultations in a single channel.",
      aboutDescription2:
        "His experience managing hundreds of daily consultations led him to adopt Inkup to optimize communication with his clients and focus on what he does best: creating art.",
      yearsExperience: "+10 years of experience",
      internationalCareer: "International career",
      whatIsInkup: "What is Inkup?",
      whatIsDescription:
        "The tool that revolutionizes how tattoo artists manage their consultations, saving time and improving the client experience.",
      howItWorks: "How it works in practice",
      step1: "1. Create and customize your assistant in less than 3 minutes.",
      step2: "2. Share your assistant on your main channels",
      step3:
        "3. Unify and receive wherever you want all the necessary information: size, style, colors, availability and visual references ready for you to evaluate and respond",
      personalized: "Personalized",
      immediateResponse: "Immediate response",
      immediateResponseDesc:
        "Your AI assistant responds instantly on WhatsApp and Instagram, collecting all necessary client information.",
      timeSaving: "Time saving",
      timeSavingDesc:
        "Eliminates repetitive consultations and receive only organized requests with all the information you need.",
      betterExperience: "Better experience",
      betterExperienceDesc: "Your clients get immediate responses and you focus on creating exceptional art.",
      limitedOffer: "Limited offer",
      exclusiveBenefit: "Exclusive benefit for Matías academy students",
      exclusiveDescription:
        "Use code MATIAS and get an additional 20% discount on any Inkup plan. A unique opportunity to try the tool that's transforming the tattoo industry.",
      discount: "-20% discount",
      discountDesc: "Enjoy a 20% discount on any plan you choose.",
      personalizedSetup: "Personalized setup",
      personalizedSetupDesc: "Our team helps you configure your assistant according to your work style.",
      prioritySupport: "Priority support",
      prioritySupportDesc: "Direct access to our support team to resolve any questions.",
      activateCode: "Activate MATIAS code now",
      offerTerms: "* Offer valid for a limited time. No commitment or credit card required.",
    },
  }

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "es" ? "en" : "es"))
  }

  const t = content[language]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Language Toggle Button */}
      <div className="fixed top-20 right-4 z-40">
        <Button
          variant="outline"
          size="sm"
          onClick={toggleLanguage}
          className="bg-white/90 backdrop-blur-sm border-gray-200 hover:bg-gray-50 shadow-lg"
        >
          <Globe className="w-4 h-4 mr-2" />
          {language === "es" ? "EN" : "ES"}
        </Button>
      </div>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-8 sm:py-12 md:py-16 lg:py-24">
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 px-3 py-2 rounded-full text-xs sm:text-sm font-medium text-purple-700">
                <Users className="w-3 h-3 sm:w-4 sm:h-4" />
                {t.recommendedBy}
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tighter leading-tight">
                Inkup x{" "}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Matías Noble
                </span>
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800">{t.heroTitle}</h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                {t.heroDescription}
              </p>
              <div className="space-y-4">
                <Button
                  size="lg"
                  className="h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base md:text-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 w-full sm:w-auto"
                  onClick={() => setShowCodePopup(true)}
                >
                  {t.tryFreeButton} <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                    <span>{t.freePlan}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                    <span>{t.noCreditCard}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                    <span>{t.quickSetup}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-xs sm:max-w-sm mx-auto lg:max-w-none">
                <Image
                  src="/matias-noble-art.jpg"
                  alt="Matías Noble - Especialista en Realismo de Noble Art"
                  width={400}
                  height={480}
                  className="w-full h-auto"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                    <p className="font-semibold text-gray-900 text-sm sm:text-base">Matías Noble</p>
                    <p className="text-xs sm:text-sm text-gray-600">Founder at • Noble Art</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sobre Matías Noble */}
        <section className="bg-gray-50 py-8 sm:py-12 md:py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-4 sm:space-y-6">
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                    {t.aboutMatias.split(" ")[0]}{" "}
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      {t.aboutMatias.split(" ").slice(1).join(" ")}
                    </span>
                  </h2>
                  <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                    <p>{t.aboutDescription1}</p>
                    <p>{t.aboutDescription2}</p>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 pt-2 sm:pt-4">
                    <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-purple-600">
                      <Users className="w-4 h-4 flex-shrink-0" />
                      <span>{t.yearsExperience}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-purple-600">
                      <Zap className="w-4 h-4 flex-shrink-0" />
                      <span>{t.internationalCareer}</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="space-y-3 sm:space-y-4">
                    <div className="rounded-lg overflow-hidden shadow-lg">
                      <Image
                        src="/matias-noble-whatsapp-conversation.png"
                        alt="Conversación de WhatsApp con Matías Noble usando Inkup"
                        width={250}
                        height={300}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                  <div className="space-y-3 sm:space-y-4 pt-4 sm:pt-8">
                    <div className="rounded-lg overflow-hidden shadow-lg">
                      <Image
                        src="/noble-art-studio.jpeg"
                        alt="Interior del estudio Noble Art"
                        width={250}
                        height={280}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Qué es Inkup */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8 sm:mb-12 md:mb-16">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 leading-tight">
                  {t.whatIsInkup.split(" ").slice(0, 2).join(" ")}{" "}
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    {t.whatIsInkup.split(" ").slice(2).join(" ")}
                  </span>
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  {t.whatIsDescription}
                </p>
              </div>

              {/* Cómo funciona Inkup */}
              <div className="mb-12 md:mb-16">
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 md:p-8 lg:p-12">
                  <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
                    <div className="space-y-4 sm:space-y-6">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">{t.howItWorks}</h3>
                      <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
                        <p>
                          <strong>{t.step1}</strong>
                        </p>
                        <p>
                          <strong>{t.step2}</strong>
                        </p>
                        <p>
                          <strong>{t.step3}</strong>
                        </p>
                      </div>
                      <div className="inline-flex items-center gap-2 bg-green-100 px-3 py-2 rounded-full text-sm font-medium text-green-700">
                        <CheckCircle className="w-4 h-4" />
                        {t.personalized}
                      </div>
                    </div>
                    <div className="relative">
                      <div className="rounded-xl overflow-hidden shadow-2xl">
                        <Image
                          src="/inkup-how-it-works.png"
                          alt="Ejemplo de cómo funciona Inkup: conversación de WhatsApp y resumen organizado"
                          width={600}
                          height={400}
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                <div className="text-center space-y-3 sm:space-y-4 p-4 sm:p-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto">
                    <MessageSquare className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-purple-600" />
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold">{t.immediateResponse}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {t.immediateResponseDesc}
                  </p>
                </div>

                <div className="text-center space-y-3 sm:space-y-4 p-4 sm:p-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto">
                    <Clock className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-purple-600" />
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold">{t.timeSaving}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{t.timeSavingDesc}</p>
                </div>

                <div className="text-center space-y-3 sm:space-y-4 p-4 sm:p-6 sm:col-span-2 lg:col-span-1">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto">
                    <Users className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-purple-600" />
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold">{t.betterExperience}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{t.betterExperienceDesc}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Beneficio Exclusivo */}
        <section className="bg-gradient-to-r from-purple-100 to-pink-100 py-8 sm:py-12 md:py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-purple-200/50 px-3 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 text-purple-800">
                <Zap className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <span>{t.limitedOffer}</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 text-gray-900 leading-tight">
                {t.exclusiveBenefit}
              </h2>
              <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-gray-700 leading-relaxed">
                {t.exclusiveDescription}
              </p>

              <div className="grid gap-3 sm:gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-6 sm:mb-8 md:mb-12 text-left">
                <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-purple-200">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 flex-shrink-0" />
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{t.discount}</h3>
                  </div>
                  <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">{t.discountDesc}</p>
                </div>

                <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-purple-200">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 flex-shrink-0" />
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{t.personalizedSetup}</h3>
                  </div>
                  <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                    {t.personalizedSetupDesc}
                  </p>
                </div>

                <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-purple-200 sm:col-span-2 lg:col-span-1">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 flex-shrink-0" />
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{t.prioritySupport}</h3>
                  </div>
                  <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                    {t.prioritySupportDesc}
                  </p>
                </div>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <Button
                  size="lg"
                  className="h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base md:text-lg bg-black hover:bg-gray-800 text-white w-full sm:w-auto"
                  onClick={() => setShowCodePopup(true)}
                >
                  {t.activateCode} <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{t.offerTerms}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Code Popup */}
        <CodePopup open={showCodePopup} onOpenChange={setShowCodePopup} />
      </main>
      <Footer />
    </div>
  )
}
