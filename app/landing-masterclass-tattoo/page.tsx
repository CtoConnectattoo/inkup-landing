"use client"

import Image from "next/image"
import { CheckCircle, Star } from "lucide-react"
import { Footer } from "@/components/footer"

export default function MasterclassTattooLanding() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        {/* Hero Section */}
        <header className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid gap-12 md:grid-cols-2 items-center max-w-6xl mx-auto">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
                ¿Pasas más tiempo respondiendo mensajes que{" "}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  tatuando?
                </span>{" "}
              </h1>
              <p className="text-xl text-muted-foreground text-pretty">
                Descubre esta Masterclass gratuita para organizar tus citas paso a paso y ahorra horas cada semana
              </p>

              <a
                href="https://api.whatsapp.com/send?phone=+15558992586&text=Hola!%20Quiero%20ver%20la%20MasterClass%20gratuita%20de%20gesti%C3%B3n%20de%20citas"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-14 px-8 text-lg font-semibold text-white rounded-md shadow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-300"
                style={{
                  background: "linear-gradient(to right, #6b21a8, #be185d)",
                  color: "white",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "linear-gradient(to right, #581c87, #9d174d)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "linear-gradient(to right, #6b21a8, #be185d)"
                }}
              >
                Quiero la masterclass gratis
              </a>

              <p className="text-sm text-muted-foreground"></p>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <Image
                  src="/images/masterclass-instructor.png"
                  alt="Instructor de la masterclass explicando cómo organizar citas de tatuajes"
                  width={500}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-3 shadow-lg">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Benefits Section */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Lo que aprenderás en esta masterclass
              </h2>

              <div className="grid gap-6 md:gap-8">
                <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Método probado por miles de artistas</h3>
                    <p className="text-muted-foreground">
                      Sistema validado y utilizado exitosamente por tatuadores profesionales en todo el mundo.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Ahorra horas cada semana contestando mensajes</h3>
                    <p className="text-muted-foreground">
                      Reduce drásticamente el tiempo dedicado a responder consultas repetitivas y organiza tu agenda de
                      forma eficiente.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Más citas: Atiende antes a sólo clientes interesados</h3>
                    <p className="text-muted-foreground">
                      Filtra automáticamente a los clientes realmente interesados y aumenta tu tasa de conversión.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Menos ruido: Evita mensajes de curiosos</h3>
                    <p className="text-muted-foreground">
                      Elimina las consultas no serias y concéntrate en los clientes que realmente quieren tatuarse.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Control y tranquilidad: Atención 24/7</h3>
                    <p className="text-muted-foreground">
                      Sistema automatizado que trabaja por ti las 24 horas, incluso cuando estás tatuando o descansando.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Lo que dicen sobre la masterclass</h2>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div className="bg-white p-6 rounded-xl shadow-lg border">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4">
                    "Increíble masterclass. En solo 15 minutos aprendí más sobre organización de citas que en otros
                    muchos cursos!! Ahora tengo mi agenda llena y sin estrés."
                  </p>
                  <div className="flex items-center gap-3">
                    <Image
                      src="/images/reviewer-maria.jpg"
                      alt="María González"
                      width={40}
                      height={40}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold">María González</p>
                      <p className="text-sm text-muted-foreground">Tatuadora profesional</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4">
                    "Pensé que era otro curso más, pero me equivoqué. Las estrategias son súper prácticas y las pude
                    implementar el mismo día. ¡Recomendadísimo!"
                  </p>
                  <div className="flex items-center gap-3">
                    <Image
                      src="/images/reviewer-carlos.jpg"
                      alt="Carlos Ruiz"
                      width={40}
                      height={40}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold">Carlos Ruiz</p>
                      <p className="text-sm text-muted-foreground">Propietario de estudio</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4">
                    "Antes perdía horas respondiendo mensajes. Ahora tengo un sistema que funciona solo y me da más
                    tiempo para lo que realmente me gusta: tatuar."
                  </p>
                  <div className="flex items-center gap-3">
                    <Image
                      src="/images/reviewer-laura.jpg"
                      alt="Laura Martín"
                      width={40}
                      height={40}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold">Laura Martín</p>
                      <p className="text-sm text-muted-foreground">Artista independiente</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4">
                    "La masterclass cambió completamente mi forma de trabajar. Ahora solo atiendo clientes serios
                    ahorrándome horas cada semana"
                  </p>
                  <div className="flex items-center gap-3">
                    <Image
                      src="/images/reviewer-ana.jpg"
                      alt="Ana Torres"
                      width={40}
                      height={40}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold">Ana Torres</p>
                      <p className="text-sm text-muted-foreground">Tatuadora especializada</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4">
                    "Súper clara y directa. En 15 minutos aprendes todo lo que necesitas para organizar tu negocio como
                    un profesional. Vale oro."
                  </p>
                  <div className="flex items-center gap-3">
                    <Image
                      src="/images/reviewer-javier.jpg"
                      alt="Javier López"
                      width={40}
                      height={40}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold">Javier López</p>
                      <p className="text-sm text-muted-foreground">Artista Internacional</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4">
                    "Me ayudó a profesionalizar mi estudio y a reducir horas de mensajes y conversaciones...."
                  </p>
                  <div className="flex items-center gap-3">
                    <Image
                      src="/images/reviewer-sandra.jpg"
                      alt="Sandra Vega"
                      width={40}
                      height={40}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold">Sandra Vega</p>
                      <p className="text-sm text-muted-foreground">Propietaria de estudio</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="bg-gradient-to-r from-purple-600 to-pink-600 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">¿List@ para transformar tu negocio?</h2>
              <p className="text-xl mb-8 opacity-90">
                Únete a miles de artistas que ya organizaron sus citas y recuperaron su tiempo
              </p>

              <a
                href="https://api.whatsapp.com/send?phone=+15558992586&text=Hola!%20Quiero%20ver%20la%20MasterClass%20gratuita%20de%20gesti%C3%B3n%20de%20citas"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-14 px-8 text-lg font-semibold rounded-md shadow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/30"
                style={{
                  backgroundColor: "white",
                  color: "#6b21a8",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#f3f4f6"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "white"
                }}
              >
                Acceder a la masterclass gratuita
              </a>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center text-sm opacity-90">
                <div className="flex items-center gap-2 justify-center">
                  <CheckCircle className="w-5 h-5" />
                  100% gratuita
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <CheckCircle className="w-5 h-5" />
                  Acceso inmediato
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <CheckCircle className="w-5 h-5" />
                  Sin compromisos
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
