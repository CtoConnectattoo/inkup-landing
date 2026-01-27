"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import React from "react"

const COUNTDOWN_HOURS = 48

export function TrainingSection() {
  const pathname = usePathname()
  const isLandingTattoo = pathname === "/landing-tattoo"

  const [timeLeft, setTimeLeft] = React.useState({ hours: 0, minutes: 0, seconds: 0 })

  React.useEffect(() => {
    if (!isLandingTattoo) return

    const storedEndTime = typeof window !== "undefined" ? window.localStorage.getItem("offerEndTime") : null

    let endTime: number

    if (storedEndTime) {
      endTime = Number(storedEndTime)
    } else {
      endTime = Date.now() + COUNTDOWN_HOURS * 60 * 60 * 1000
      window.localStorage.setItem("offerEndTime", String(endTime))
    }

    const calculateTimeLeft = () => {
      const now = Date.now()
      const difference = endTime - now

      if (difference > 0) {
        const hours = Math.floor(difference / (1000 * 60 * 60))
        const minutes = Math.floor((difference / (1000 * 60)) % 60)
        const seconds = Math.floor((difference / 1000) % 60)
        setTimeLeft({ hours, minutes, seconds })
      } else {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 })
        clearInterval(timer)
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)
    return () => clearInterval(timer)
  }, [isLandingTattoo])

  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing-section")
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  if (isLandingTattoo) {
    return (
      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-700/50 rounded-2xl p-8 md:p-12 shadow-xl">
              <div className="space-y-8">
                <p className="text-gray-400 text-sm md:text-base">¡Empieza hoy!</p>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Convierte conversaciones en{" "}
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    citas
                  </span>
                </h2>

                <p className="text-gray-300 text-lg md:text-xl">
                  Aprovecha tu oferta exclusiva sólo por haber visto el entrenamiento.
                </p>

                <p className="text-white text-lg md:text-xl font-semibold">
                  Hazte con ella antes de que el contador llegue a 0.
                </p>

                {/* Countdown Timer */}
                <div className="flex items-center gap-4">
                  <div className="flex flex-col items-center">
                    <div className="bg-white text-black font-bold text-3xl md:text-4xl px-6 py-3 rounded-lg min-w-[80px] text-center">
                      {String(timeLeft.hours).padStart(2, "0")}
                    </div>
                    <span className="text-gray-400 text-sm mt-2 uppercase tracking-wider">H.</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="bg-white text-black font-bold text-3xl md:text-4xl px-6 py-3 rounded-lg min-w-[80px] text-center">
                      {String(timeLeft.minutes).padStart(2, "0")}
                    </div>
                    <span className="text-gray-400 text-sm mt-2 uppercase tracking-wider">MIN.</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="bg-white text-black font-bold text-3xl md:text-4xl px-6 py-3 rounded-lg min-w-[80px] text-center">
                      {String(timeLeft.seconds).padStart(2, "0")}
                    </div>
                    <span className="text-gray-400 text-sm mt-2 uppercase tracking-wider">SEG.</span>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="space-y-4">
                  <Button
                    onClick={scrollToPricing}
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold text-lg h-auto px-8 py-4 w-full md:w-auto"
                  >
                    Quiero la oferta de 12€/mes
                  </Button>

                  <p className="text-gray-400 text-sm">
                    11 días de garantía de devolución | Sin Permanencia | Soporte 24/7{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-700/50 rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              {/* Left content */}
              <div className="flex-1 space-y-6">
                <p className="text-gray-400 text-sm uppercase tracking-wider">Entrenamiento gratuito</p>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  ¿Todavía no has visto nuestro entrenamiento para{" "}
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    ahorrar 1 hora cada día
                  </span>{" "}
                  gestionando tus citas?
                </h2>

                <div className="flex items-center gap-3">
                  <span className="text-gray-400 line-through text-lg">ANTES 50€</span>
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-bold text-2xl">
                    AHORA GRATIS
                  </span>
                </div>

                <div className="space-y-4">
                  <Link href="https://inkup.io/landing-masterclass-tattoo" target="_blank" rel="noopener noreferrer">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold text-lg h-auto px-3 py-3 w-full"
                    >
                      Ver entrenamiento
                    </Button>
                  </Link>

                  <p className="text-gray-400 text-sm">Disponible por tiempo limitado</p>
                </div>
              </div>

              {/* Right image */}
              <div className="flex-1 w-full lg:w-auto">
                <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src="/images/design-mode/image(3).png"
                    alt="Entrenamiento gratuito"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
