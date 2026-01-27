import { Header } from "@/components/header"
import { PartnerSection } from "@/components/partner-section"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <PartnerSection />

        {/* Additional Partner Benefits */}
        <section className="container mx-auto px-4 py-16 md:py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Beneficios del Programa de Partners</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Para Influencers y Creadores de Contenido</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span>Enlaces de afiliado personalizados y seguimiento</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span>Contenido exclusivo para tu audiencia</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span>Ofertas especiales para tus seguidores</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span>Pagos de comisiones mensuales</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Para Agencias y Consultores</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span>Niveles de comisión más altos por volumen</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span>Oportunidades de co-marketing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span>Recursos con marca blanca</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span>Gestor de cuenta dedicado</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-16 text-center">
              <h3 className="text-2xl font-semibold mb-6">¿Listo para unirte a nuestra comunidad de partners?</h3>
              <Button
                size="lg"
                className="h-14 px-8 text-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0"
                asChild
              >
                <a href="https://inkup.getrewardful.com/signup" target="_blank" rel="noopener noreferrer">
                  Solicita ser partner <ArrowRight className="ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  )
}
