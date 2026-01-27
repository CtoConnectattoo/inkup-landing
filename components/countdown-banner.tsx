"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

const COUNTDOWN_HOURS = 48

export function CountdownBanner() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    // Se ejecuta solo en el cliente
    // 1. Obtener o crear la hora de fin
    const storedEndTime = typeof window !== "undefined"
      ? window.localStorage.getItem("offerEndTime")
      : null

    let endTime: number

    if (storedEndTime) {
      // Ya había una cuenta atrás empezada
      endTime = Number(storedEndTime)
    } else {
      // Primera vez que entra este navegador → 48h a partir de ahora
      endTime = Date.now() + COUNTDOWN_HOURS * 60 * 60 * 1000
      window.localStorage.setItem("offerEndTime", String(endTime))
    }

    const calculateTimeLeft = () => {
      const now = Date.now()
      const difference = endTime - now

      if (difference > 0) {
        setTimeLeft({
          hours: Math.floor(difference / (1000 * 60 * 60)),      // horas totales
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      } else {
        // Ya ha pasado el tiempo → dejamos todo en 0
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 })
        clearInterval(timer)
      }
    }

    // Llamada inicial
    calculateTimeLeft()
    // Actualización cada segundo
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing-section")
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-3 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
        <div className="flex items-center gap-2 text-white text-sm md:text-base font-medium">
          <span>💥 Tienes acceso a la oferta durante:</span>
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <div className="bg-white rounded px-3 py-2 min-w-[70px] text-center">
            <div className="text-xl md:text-2xl font-bold text-black">
              {String(timeLeft.hours).padStart(2, "0")}
            </div>
            <div className="text-[10px] md:text-xs text-gray-600 uppercase">Horas</div>
          </div>

          <div className="bg-white rounded px-3 py-2 min-w-[70px] text-center">
            <div className="text-xl md:text-2xl font-bold text-black">
              {String(timeLeft.minutes).padStart(2, "0")}
            </div>
            <div className="text-[10px] md:text-xs text-gray-600 uppercase">Minutos</div>
          </div>

          <div className="bg-white rounded px-3 py-2 min-w-[70px] text-center">
            <div className="text-xl md:text-2xl font-bold text-black">
              {String(timeLeft.seconds).padStart(2, "0")}
            </div>
            <div className="text-[10px] md:text-xs text-gray-600 uppercase">Segundos</div>
          </div>
        </div>

        <Button
          onClick={scrollToPricing}
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-6 py-2 rounded-lg text-sm md:text-base whitespace-nowrap"
        >
          Quiero la oferta de $12/mes
        </Button>
      </div>
    </div>
  )
}
