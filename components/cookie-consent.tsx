"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { X, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
    const pathname = usePathname()
  const isBlogPage = pathname === "/blog"
  const isBlogPostPage = pathname?.startsWith("/blog/")
  const blockOnBlog = isBlogPage || isBlogPostPage


useEffect(() => {
  if (blockOnBlog) return

  const cookieConsent = localStorage.getItem("inkup-cookie-consent")
  if (!cookieConsent) {
    const timer = setTimeout(() => setIsVisible(true), 1000)
    return () => clearTimeout(timer)
  }
}, [blockOnBlog])



  const handleAccept = () => {
    localStorage.setItem("inkup-cookie-consent", "accepted")
    setIsVisible(false)
  }

  const handleReject = () => {
    localStorage.setItem("inkup-cookie-consent", "rejected")
    setIsVisible(false)
  }

  const handleClose = () => {
    setIsVisible(false)
  }

  if (blockOnBlog || !isVisible) return null


  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-4 pointer-events-none">
      <div className="w-full max-w-6xl pointer-events-auto">
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 md:p-8 relative animate-in slide-in-from-bottom-4 duration-500">
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Cerrar"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
            {/* Content */}
            <div className="flex-1 pr-8">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                Usamos cookies para mejorar tu experiencia
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Usamos <strong className="font-semibold text-gray-900">cookies</strong> y otras técnicas de rastreo para
                mejorar tu experiencia de navegación en nuestra web, para mostrarte contenidos personalizados y anuncios
                adecuados, para analizar el tráfico en nuestra web y para comprender de dónde llegan nuestros
                visitantes.
              </p>

              {/* Show details toggle */}
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium transition-colors group"
              >
                <span>Mostrar detalles</span>
                <ChevronRight className={`w-4 h-4 transition-transform ${showDetails ? "rotate-90" : ""}`} />
              </button>

              {/* Details section */}
              {showDetails && (
                <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200 animate-in slide-in-from-top-2 duration-300">
                  <h4 className="font-semibold text-gray-900 mb-2">Tipos de cookies que usamos:</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">•</span>
                      <span>
                        <strong className="text-gray-900">Cookies necesarias:</strong> Esenciales para el funcionamiento
                        del sitio web
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">•</span>
                      <span>
                        <strong className="text-gray-900">Cookies analíticas:</strong> Nos ayudan a entender cómo
                        interactúas con nuestro sitio
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">•</span>
                      <span>
                        <strong className="text-gray-900">Cookies de marketing:</strong> Para mostrarte contenido
                        relevante y personalizado
                      </span>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Action buttons */}
            <div className="flex flex-col gap-3 w-full md:w-auto md:min-w-[200px]">
              <Button
                onClick={handleAccept}
                className="w-full bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Aceptar
              </Button>
              <Button
                onClick={handleReject}
                variant="outline"
                className="w-full border-2 border-teal-500 text-teal-600 hover:bg-teal-50 font-semibold py-6 rounded-xl transition-all duration-200 bg-transparent"
              >
                Descartar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
