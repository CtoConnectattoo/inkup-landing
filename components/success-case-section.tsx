import { Check } from "lucide-react"

export function SuccessCaseSection() {
  return (
    <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 mb-12 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr] gap-8 md:gap-12 items-center">
        {/* Video Section */}
        <div className="relative aspect-[9/16] rounded-xl overflow-hidden shadow-2xl mx-auto md:mx-0 max-w-[280px] lg:max-w-[320px]">
          <video
            className="w-full h-full object-cover"
            playsInline
            controls
            poster="/images/success-case-poster.png"
          >
            <source
              src="https://firebasestorage.googleapis.com/v0/b/inkup-landing/o/nathtiktok.mp4?alt=media&token=5db61fb8-b490-4c60-9dd6-20c4b8c508b3"
              type="video/mp4"
            />
            Tu navegador no soporta el elemento de video.
          </video>
        </div>

        {/* Content Section */}
        <div className="space-y-6">
          <h3 className="text-3xl md:text-4xl font-bold text-white text-left">
            Conoce nuestro{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              caso de éxito
            </span>
          </h3>

          <ul className="space-y-4 text-left">
            <li className="flex items-start gap-3">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 flex items-center justify-center mt-1">
                <Check className="w-3 h-3 text-purple-400" strokeWidth={3} />
              </div>
              <span className="text-gray-200 text-lg">
                Nath es una artista profesional ubicada en Torreón, México, que descubrió Inkup a través de un curso.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 flex items-center justify-center mt-1">
                <Check className="w-3 h-3 text-purple-400" strokeWidth={3} />
              </div>
              <span className="text-gray-200 text-lg">
                Tenía un gran problema para gestionar tanto volumen de mensajes de sus clientes
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 flex items-center justify-center mt-1">
                <Check className="w-3 h-3 text-purple-400" strokeWidth={3} />
              </div>
              <span className="text-gray-200 text-lg">
                Hasta la fecha lleva casi 2 años utilizando la herramienta, has gestionado más de 1.600 cotizaciones a
                través de su asistente y ha ahorrado cientos de horas.
              </span>
            </li>
          </ul>

          {/* Highlights */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">+1600</div>
              <div className="text-gray-400 text-sm">cotizaciones gestionadas</div>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">+1,5 años</div>
              <div className="text-gray-400 text-sm">usando su asistente</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
