import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Testimonio de Nath Rubio - Inkup",
  description:
    "Descubre cómo Nath Rubio, tatuadora profesional, utiliza Inkup para automatizar sus consultas y mejorar su negocio.",
  openGraph: {
    title: "Testimonio de Nath Rubio - Inkup",
    description:
      "Descubre cómo Nath Rubio, tatuadora profesional, utiliza Inkup para automatizar sus consultas y mejorar su negocio.",
    type: "website",
  },
}

export default function TestimonioNathPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header Section */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Testimonio de Nath Rubio</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Descubre cómo Nath Rubio, tatuadora profesional mexicana, utiliza Inkup para automatizar sus consultas y
              transformar su negocio.
            </p>
          </div>

          {/* Video Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <div className="flex justify-center">
              <blockquote
                className="tiktok-embed"
                cite="https://www.tiktok.com/@nath.rubio/video/7362288305179839749"
                data-video-id="7362288305179839749"
                style={{ maxWidth: "605px", minWidth: "325px" }}
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
                  <a
                    title="tattoo"
                    target="_blank"
                    href="https://www.tiktok.com/tag/tattoo?refer=embed"
                    rel="noreferrer"
                  >
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
              <script async src="https://www.tiktok.com/embed.js"></script>
            </div>
          </div>

          {/* Description Section */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Por qué Nath eligió Inkup?</h2>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">Automatización Inteligente</h3>
                <p className="text-gray-600 text-sm">
                  Inkup automatiza las consultas iniciales, permitiendo a Nath enfocarse en lo que más le gusta: tatuar.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">Ahorro de Tiempo</h3>
                <p className="text-gray-600 text-sm">
                  Reduce significativamente el tiempo dedicado a responder consultas repetitivas por WhatsApp.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">Mejor Experiencia</h3>
                <p className="text-gray-600 text-sm">
                  Sus clientes reciben respuestas inmediatas y profesionales las 24 horas del día.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">¿Listo para transformar tu negocio como Nath?</h3>
            <p className="text-gray-600 mb-8">
              Únete a cientos de tatuadores que ya están automatizando sus consultas con Inkup.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://app.inkup.io"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Probar Inkup Gratis
              </a>
              <a
                href="/precios"
                className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-all duration-200"
              >
                Ver Precios
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
